import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/optionbay',
  title: "OptionBay Documentation",
  description: "Advanced Product Options and Custom Addons for WooCommerce",

  // Enhanced head configuration
  head: [
    ['link', { rel: 'icon', href: '/logo-2.png' }],
    ['meta', { name: 'theme-color', content: '#7b61ff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/medium-zoom/dist/style.css' }],
    ['script', { src: 'https://unpkg.com/medium-zoom/dist/medium-zoom.min.js' }],
    ['style', {}, `
      /* Custom styles for medium-zoom integration */
      img {
        cursor: zoom-in;
        transition: opacity 0.3s ease;
      }
      
      img:hover {
        opacity: 1.0;
      }
      
      /* Dark theme compatibility */
      [data-theme="dark"] .medium-zoom-overlay {
        background-color: rgba(0, 0, 0, 0.9) !important;
      }
      
      [data-theme="light"] .medium-zoom-overlay {
        background-color: rgba(255, 255, 255, 0.9) !important;
      }
      
      /* Ensure proper spacing for zoomed images */
      .medium-zoom-image--opened {
        max-width: 90vw;
        max-height: 90vh;
        z-index: 1000;
      }

      .medium-zoom-image {
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      }

    `],
    ['script', {}, `
      document.addEventListener('DOMContentLoaded', function() {
        const initZoom = () => {
          if (typeof mediumZoom !== 'undefined') {
            mediumZoom('img', {
              background: 'var(--vp-c-bg)',
              scrollOffset: 0,
              margin: 24
            });
          }
        };

        initZoom();

        if (typeof window !== 'undefined') {
          let currentPath = window.location.pathname;
          const observer = new MutationObserver(function() {
            if (window.location.pathname !== currentPath) {
              currentPath = window.location.pathname;
              setTimeout(initZoom, 500);
            }
          });
          observer.observe(document.body, { childList: true, subtree: true });
        }
      });
    `]
  ],

  // Enhanced theme configuration
  themeConfig: {
    // Logo configuration
    logo: '/logo-2.png',

    // Enhanced search
    search: {
      provider: 'local',
    },

    // Enhanced navigation
    nav: [
      { text: 'Getting Started', link: '/installation' },
      { text: 'WPAnchorBay', link: 'https://wpanchorbay.com' }
    ],

    // Enhanced sidebar with better organization
    sidebar: [
      { text: 'Introduction', link: '/' },
      { text: 'Installation & Setup', link: '/installation' },
      {
        text: 'Core Features',
        items: [
          { text: 'Option Groups', link: '/option-groups' },
          { text: 'Addon Builder', link: '/builder' },
          { text: 'Product Assignments', link: '/assignments' },
          { text: 'Conditional Logic', link: '/conditional-logic' },
          { text: 'Frontend Display', link: '/frontend-display' },
          { text: 'Cart & Checkout', link: '/cart-checkout' },
          { text: 'Order Management', link: '/order-management' },
        ]
      },
      {
        text: 'Field Types',
        collapsed: true,
        items: [
          { text: 'Text', link: '/fields/text' },
          { text: 'Textarea', link: '/fields/textarea' },
          { text: 'Number', link: '/fields/number' },
          { text: 'Select', link: '/fields/select' },
          { text: 'Radio', link: '/fields/radio' },
          { text: 'Checkbox', link: '/fields/checkbox' },
          { text: 'Single Checkbox', link: '/fields/single-checkbox' },
          { text: 'Image Swatch', link: '/fields/image-swatch' },
          { text: 'Color Swatch', link: '/fields/color-swatch' },
          { text: 'File Upload', link: '/fields/file-upload' },
          { text: 'Email', link: '/fields/email' },
        ]
      },
      {
        text: 'Configuration',
        items: [
          { text: 'WooCommerce Settings', link: '/settings' },
        ]
      },
      { text: 'FAQ', link: '/faq' },
    ],

    // Enhanced social links
    socialLinks: [
      { icon: 'wordpress', link: 'https://wordpress.org/plugins/optionbay/' },
      { icon: 'linkedin', link: 'https://linkedin.com/company/wpanchorbay' },
      { icon: 'youtube', link: 'https://youtube.com/@WPAnchorBay' },
      { icon: 'facebook', link: 'https://facebook.com/wpanchorbay' },
    ],

    // Enhanced footer
    footer: {
      message: 'Released under the GPL-2.0 License.',
      copyright: 'Copyright © 2026 WPAnchorBay'
    },

    // Enhanced site title
    siteTitle: 'OptionBay Docs'
  },

  // Enhanced markdown configuration
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,
    toc: { level: [1, 2, 3] },
  },

  // Enhanced appearance
  appearance: 'dark',

  // Enhanced last updated
  lastUpdated: true,

  // Vite configuration for medium-zoom
  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false
    },
    optimizeDeps: {
      include: ['medium-zoom']
    }
  }
})