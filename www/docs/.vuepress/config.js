import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { seoPlugin } from '@vuepress/plugin-seo'
import { containerPlugin } from '@vuepress/plugin-container'
import { catalogPlugin } from '@vuepress/plugin-catalog'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { searchPlugin } from '@vuepress/plugin-search'

import fs from 'fs'
import path from 'path'

let myConfig = {}
try {
  const currentFilePath = __dirname
  const parentDirectory = path.resolve(currentFilePath, '..')
  let json = path.join(parentDirectory, 'data.json')
  console.log('配置文件路径:', json)
  // 同步读取JSON文件
  const data = fs.readFileSync(json, 'utf8')
  myConfig = JSON.parse(data)
  console.log(myConfig)
} catch (error) {
  console.error('读取文件失败:', error)
}

export default defineUserConfig({
  title: myConfig.title,
  description: myConfig.description,
  head: [
    [
      'meta',
      {
        name: 'description',
        content: myConfig.description
      }
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: myConfig.keywords
      }
    ],
    ['meta', { name: 'author', content: myConfig.author }],
    ['script', { src: '/javascript/translate.js' }],
    ['script', { src: '/javascript/model-viewer.min.js', type: 'module' }],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: '1'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  publicPath: '/',
  theme: defaultTheme({
    logo: '/logo.png',
    navbar: myConfig.navbar
  }),

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5']
  },
  plugins: [
    sitemapPlugin({
      // options
      hostname: myConfig.hostname,
      excludePaths: ['/404.html']
    }),
    seoPlugin({
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      // author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      type: $page =>
        ['articles', 'posts', 'blog'].some(folder =>
          $page.regularPath.startsWith('/' + folder)
        )
          ? 'article'
          : 'website',
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      hostname: myConfig.hostname
    }),
    mdEnhancePlugin({
      // your options
    }),
    // containerPlugin({
    //     // options
    // }),
    catalogPlugin({
      // Your options
    }),
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || ''
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

      category: [
        {
          key: 'category',
          getter: page => page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: 'Categories',
            sidebar: false
          }),
          itemFrontmatter: name => ({
            title: `Category ${name}`,
            sidebar: false
          })
        },
        {
          key: 'tag',
          getter: page => page.frontmatter.tag || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({
            title: 'Tags',
            sidebar: false
          }),
          itemFrontmatter: name => ({
            title: `Tag ${name}`,
            sidebar: false
          })
        }
      ],

      type: [
        {
          key: 'article',
          // Remove archive articles
          filter: page => !page.frontmatter.archive,
          layout: 'Article',
          frontmatter: () => ({
            title: 'Articles',
            sidebar: false
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          }
        },
        {
          key: 'timeline',
          // Only article with date should be added to timeline
          filter: page => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: 'Timeline',
            sidebar: false
          })
        }
      ],
      hotReload: true
    })
  ],
  bundler: viteBundler(),
  dest: myConfig.dest
})
