<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import Translate from '../components/Translate.vue'
import ShareIcon from '../components/ShareIcon.vue'
</script>

<template>
  <ParentLayout>
    <template #navbar-after>
      <Translate />
    </template>

    <template #page-bottom>
      <ShareIcon />
      <div class="my-footer">MIT Licensed | Copyright © 2024-present {{ $site.title }}</div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}

#translateSelectLanguage {
  border: none !important;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14.4px;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  color: #2c3e50;
  border-radius: 5px;
  margin-left: 5px;
}

/* 暗黑模式的样式 */
html.dark #translateSelectLanguage {
  border: none !important;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14.4px;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  color: #adbac7;
  border-radius: 5px;
  margin-left: 5px;
  background-color: #22272E;
}
</style>
