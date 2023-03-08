const commonPath = '/install';

export default [
    {
        text: '手动安装',
        collapsible: true,
        collapsed: false,
        items: [
            // This shows `/guide/index.md` page.
            { text: '安装前的准备', link: `${commonPath}/preinstall` }, // /guide/index.md
            { text: '基础安装', link: `${commonPath}/install` }, 
            { text: '必要配置', link: `${commonPath}/config` }, 
        ]
    },
    {
        text: 'Archinstall',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '安装', link: `${commonPath}/archinstall` },
           
        ]
    }
]