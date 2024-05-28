import { defineClientConfig } from 'vuepress/client'
import VueSocialSharing from 'vue-social-sharing'
import Article from './layouts/Article.vue'
import Category from './layouts/Category.vue'
import Tag from './layouts/Tag.vue'
import Timeline from './layouts/Timeline.vue'
import Layout from './layouts/Layout.vue'
import PortfolioLayout from './layouts/PortfolioLayout.vue'
import { defineCatalogInfoGetter } from '@vuepress/plugin-catalog/client'

defineCatalogInfoGetter(meta => {
  if (meta.title) {
    return {
      title: meta.title,
      order: meta.order
    }
  }
  return null
})

export default defineClientConfig({
  enhance ({ app }) {
    app.use(VueSocialSharing)
  },
  // we provide some blog layouts
  layouts: {
    Article,
    Category,
    Tag,
    Timeline,
    Layout,
    PortfolioLayout
  }
})
