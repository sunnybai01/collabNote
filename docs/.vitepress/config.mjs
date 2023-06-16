import { defineConfig } from 'vitepress'
import { generateSidebarConfig } from './loadPage.mjs'
import * as path from 'path'

const Nav = []

export default defineConfig({
    title: 'Collab Web Docs',
    ignoreDeadLinks: true,
    themeConfig: {
        sidebar: sidebar(),
        nav: Nav
        // footer: {
        //     message: '网站备案号 <a href="https://beian.miit.gov.cn/">蜀ICP备2022027412号-1</a>.',
        //     copyright: 'Copyright © 2023-present <a href="https://github.com/tycsbs/">Sunny Bai</a>'
        // }
    }
})

function sidebar() {
    const {sidebar, nav} = generateSidebarConfig(path.resolve(__dirname, '../pages'))
    // const _nav = [...nav].map((item) => {
    //     item.text = item.text.replace(/\d+/, '')
    //     return item
    // })
    return sidebar
}
