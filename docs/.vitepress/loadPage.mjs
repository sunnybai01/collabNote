import * as fs from 'fs'
import * as path from 'path'

export function generateSidebarConfig(baseDir) {
    const sidebar = {}
    const nav = []

    const categories = sortCategory(baseDir)
    categories.forEach((category) => {
        const categoryPath = path.join(baseDir, category)
        const categoryStats = fs.statSync(categoryPath)
        if (categoryStats.isDirectory()) {
            const posts = sortCategory(categoryPath)
            
            // 生成导航栏
            const _category = (`/pages/${category}/`)
            sidebar[_category] = posts.map((post) => {
                if(post === '.DS_Store') return
                const title = post.replace('.md', '')
                const _link = (`/pages/${category}/${title}`)
                return {
                    text: title.split('.')[1],
                    link: _link
                }
            }).filter(Boolean)
            // 生成头部导航栏
            // nav.push({
            //     text: category,
            //     link: sidebar[_category][0].link
            // })
        }
    })

    return {
        sidebar,
        nav
    }
}

function sortCategory(path) {
    const categories = fs.readdirSync(path).sort((a, b) => {
        // 从字符串中提取数字部分进行比较
        const idx_a = a.match(/\d+/)
        const idx_b = b.match(/\d+/)
        const aNum = parseInt(idx_a ? idx_a[0] : 0)
        const bNum = parseInt(idx_b ? idx_b[0] : 0)
        return aNum - bNum
    })
    return categories
}

