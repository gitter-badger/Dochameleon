const currentYear = new Date().getFullYear();

const siteConfig = {
  projectName: 'Dochameleon',
  title: 'Dochameleon',
  tagline: 'Open Source Documentation Site Generator',
  copyright: 'Copyright © ' + currentYear + ' Richard Zhang',

  rootUrl: 'https://richardzcode.github.io',
  baseUrl: '/Dochameleon',

  icon: 'img/dochameleon.png',
  favicon: 'img/favicon.png',

  js: [
    'https://buttons.github.io/buttons.js',
  ],

  headerLinks: [
    {type: 'doc', value: 'guide_installation', label: 'Docs'},
    {type: 'url', value: 'https://github.com/richardzcode/Dochameleon', label: 'GitHub'},
    {type: 'page', value: 'help', label: 'Help'},
    {type: 'blog', label: 'Blog'},
    {type: 'search'},
  ],

  buildDir: '../docs'
};

module.exports = siteConfig;
