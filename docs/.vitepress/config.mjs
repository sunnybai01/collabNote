import { defineConfig } from 'vitepress'
import { generateSidebarConfig } from './loadPage.mjs'
import * as path from 'path'

const Nav = []

export default defineConfig({
    title: 'Collab Web Docs',
    ignoreDeadLinks: true,
    base: '/collabNote/',
    themeConfig: {
        sidebar: sidebar(),
        nav: Nav
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
