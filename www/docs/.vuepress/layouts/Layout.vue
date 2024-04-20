<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { onMounted } from 'vue';

onMounted(() => {
  setTimeout(() => {
    // 检查localStorage中是否有语言设置，如果有，则使用该设置
    window.translate.ignore.id.push('translateSelectLanguage');
    window.translate.language.clearCacheLanguage();
    window.translate.selectLanguageTag.show = false;
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && savedLanguage!=="Not Translate") {
      console.log("Saved language found", savedLanguage);
      window.translate.language.setDefaultTo(savedLanguage);
      selectLanguage.value = savedLanguage;  // 设置select元素以反映当前选择的语言
    } else if(savedLanguage && savedLanguage==="Not Translate"){
      selectLanguage.value = 'Not Translate';
      return
    } else {
      window.translate.setAutoDiscriminateLocalLanguage();
      selectLanguage.value = 'Default';  // 设置select元素以反映当前选择的语言
    }
    window.translate.service.use('client.edge');
    window.translate.listener.start();
    window.translate.execute(); // 进行翻译
  }, 200);


  const selectLanguage = document.getElementById("translateSelectLanguage");
  selectLanguage.addEventListener('change', () => {
    const selectedLanguage = selectLanguage.value;
    console.log("Language selection changed", selectedLanguage);

    if(selectedLanguage === 'Default') {
      localStorage.removeItem('selectedLanguage')
    } else {
      // 保存选中的语言到localStorage
      localStorage.setItem('selectedLanguage', selectedLanguage);
    }
    // 刷新页面以应用新的语言设置
    window.location.reload();
  });
});
</script>

<template>
  <ParentLayout>
    <template #navbar-after>
        <select id="translateSelectLanguage">
          <option value="Not Translate" selected="selected">Not Translate</option>
          <option value="Default">Auto Translate</option>
          <option value="english">English</option>
          <option value="chinese_simplified">简体中文</option>
          <option value="chinese_traditional">繁體中文</option>
          <option value="russian">Русский</option>
          <option value="japanese">しろうと</option>
          <option value="korean">한국어</option>
          <option value="deutsch">Deutsch</option>
          <option value="spanish">Español</option>
          <option value="italian">italiano</option>
          <option value="norwegian">Norge</option>
          <option value="dutch">nederlands</option>
          <option value="filipino">Pilipino</option>
          <option value="lao">ກະຣຸນາ</option>
          <option value="romanian">Română</option>
          <option value="nepali">नेपालीName</option>
          <option value="french">Français</option>
          <option value="haitian_creole">Kreyòl ayisyen</option>
          <option value="czech">český</option>
          <option value="swedish">Svenska</option>
          <option value="russian">Русский язык</option>
          <option value="malagasy">Malagasy</option>
          <option value="burmese">ဗာရမ်</option>
          <option value="pashto">پښتوName</option>
          <option value="thai">คนไทย</option>
          <option value="armenian">Արմենյան</option>
          <option value="persian">Persian</option>
          <option value="kurdish">Kurdî</option>
          <option value="turkish">Türkçe</option>
          <option value="hindi">हिन्दी</option>
          <option value="bulgarian">български</option>
          <option value="malay">Malay</option>
          <option value="swahili">Kiswahili</option>
          <option value="oriya">ଓଡିଆ</option>
          <option value="irish">Íris</option>
          <option value="gujarati">ગુજરાતી</option>
          <option value="slovak">Slovenská</option>
          <option value="hebrew">היברית</option>
          <option value="hungarian">magyar</option>
          <option value="marathi">मराठीName</option>
          <option value="tamil">தாமில்</option>
          <option value="estonian">eesti keel</option>
          <option value="malayalam">മലമാലം</option>
          <option value="inuktitut">ᐃᓄᒃᑎᑐᑦ</option>
          <option value="arabic">بالعربية</option>
          <option value="slovene">slovenščina</option>
          <option value="bengali">বেঙ্গালী</option>
          <option value="urdu">اوردو</option>
          <option value="azerbaijani">azerbaijani</option>
          <option value="portuguese">português</option>
          <option value="samoan">lifiava</option>
          <option value="afrikaans">afrikaans</option>
          <option value="greek">ελληνικά</option>
          <option value="danish">dansk</option>
          <option value="amharic">amharic</option>
          <option value="albanian">albanian</option>
          <option value="lithuanian">Lietuva</option>
          <option value="vietnamese">Tiếng Việt</option>
          <option value="maltese">Malti</option>
          <option value="finnish">suomi</option>
          <option value="catalan">català</option>
          <option value="croatian">hrvatski</option>
          <option value="bosnian">bosnian</option>
          <option value="polish">Polski</option>
          <option value="latvian">latviešu</option>
          <option value="maori">Maori</option>
        </select>
    </template>
    <template #page-bottom>
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
