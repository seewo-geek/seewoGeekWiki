// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData, useRoute } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
    setup() {
        // 获取前言和路由
        const { frontmatter } = useData();
        const route = useRoute();

        // 评论组件 - https://giscus.app/
        giscusTalk({
                repo: 'seewo-geek/seewoGeekWikiComment',
                repoId: 'R_kgDOLV1mNQ',
                category: 'General', // 默认: `General`
                categoryId: 'DIC_kwDOLV1mNc4CdZF8',
                mapping: 'pathname', // 默认: `pathname`
                inputPosition: 'top', // 默认: `top`
                lang: 'zh-CN', // 默认: `zh-CN`
                lightTheme: 'light', // 默认: `light`
                darkTheme: 'transparent_dark', // 默认: `transparent_dark`
                // ...
            }, {
                frontmatter, route
            },
            // 是否全部页面启动评论区。
            // 默认为 true，表示启用，此参数可忽略；
            // 如果为 false，表示不启用。
            // 可以在页面使用 `comment: true` 前言单独启用
            true
        );
    }
} satisfies Theme
