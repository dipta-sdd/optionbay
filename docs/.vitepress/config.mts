import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/optionbay',
  title: "OptionBay Docs",
  description: "Friendly & Helpful Guide to Advanced Product Options for WooCommerce",

  head: [
    ['link', { rel: 'icon', href: '/logo-2.png' }],
    ['meta', { name: 'theme-color', content: '#7b61ff' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/medium-zoom/dist/style.css' }],
    ['script', { src: 'https://unpkg.com/medium-zoom/dist/medium-zoom.min.js' }],
  ],

  themeConfig: {
    logo: '/logo-2.png',
    search: { provider: 'local' },

    nav: [
      { text: 'Getting Started', link: '/getting-started/installation' },
      { text: 'WPAnchorBay', link: 'https://wpanchorbay.com' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Quick Start Guide', link: '/getting-started/quick-start' },
          { text: 'System Requirements', link: '/getting-started/requirements' },
        ]
      },
      {
        text: 'Building Addons',
        items: [
          { text: 'The Addon Builder', link: '/builder/addon-builder' },
          { text: 'Managing Option Groups', link: '/builder/option-groups' },
        ]
      },
      {
        text: 'Stock Management',
        items: [
          { text: 'Global Stocks Overview', link: '/stocks/index' },
          { text: 'Managing Stock Items', link: '/stocks/managing-items' },
          { text: 'Linking Options to Stock', link: '/stocks/field-linking' },
        ]
      },
      {
        text: 'Smart Routing',
        items: [
          { text: 'Product Assignments', link: '/assignments/index' },
        ]
      },
      {
        text: 'Visibility Logic',
        items: [
          { text: 'Conditional Visibility', link: '/visibility/index' },
        ]
      },
      {
        text: 'Pricing Strategies',
        items: [
          { text: 'The Ultimate Pricing Guide', link: '/pricing/index' },
          { text: 'Flat Fee', link: '/pricing/index#flat-fee' },
          { text: 'Percentage', link: '/pricing/index#percentage' },
          { text: 'Character Count', link: '/pricing/index#character-count' },
          { text: 'Math Formula', link: '/pricing/index#math-formula' },
        ]
      },
      {
        text: 'Field Types',
        items: [
          { text: 'Static Content (HTML/Alerts)', link: '/fields/static' },
          {
            text: 'Choice Fields',
            collapsed: true,
            items: [
              { text: 'Select Dropdown', link: '/fields/choice/select' },
              { text: 'Radio Buttons', link: '/fields/choice/radio' },
              { text: 'Checkboxes', link: '/fields/choice/checkbox' },
              { text: 'Image Swatches', link: '/fields/choice/image-swatch' },
              { text: 'Color Swatches', link: '/fields/choice/color-swatch' },
            ]
          },
          {
            text: 'Input Fields',
            collapsed: true,
            items: [
              { text: 'Text Input', link: '/fields/input/text' },
              { text: 'Textarea', link: '/fields/input/textarea' },
              { text: 'Number Input', link: '/fields/input/number' },
              { text: 'Email Input', link: '/fields/input/email' },
            ]
          },
          {
            text: 'Advanced Fields',
            collapsed: true,
            items: [
              { text: 'File Upload', link: '/fields/advanced/file-upload' },
            ]
          }
        ]
      },
      {
        text: 'Administration',
        items: [
          { text: 'Global Settings', link: '/admin/settings' },
          { text: 'Order Management', link: '/admin/orders' },
          { text: 'Export & Import', link: '/admin/export-import' },
          { text: 'Troubleshooting', link: '/admin/troubleshooting' },
        ]
      },
      { text: 'FAQ', link: '/faq' },
    ],

    socialLinks: [
      { icon: 'wordpress', link: 'https://wordpress.org/plugins/optionbay/' },
      { icon: 'facebook', link: 'https://facebook.com/wpanchorbay' },
    ],

    footer: {
      message: 'Released under the GPL-2.0 License.',
      copyright: 'Copyright © 2026 WPAnchorBay'
    }
  },

  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,
  },

  appearance: 'dark',
  lastUpdated: true,
})
