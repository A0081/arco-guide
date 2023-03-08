const commonPath = '/config';

export default [
    {
        text: '软件安装',
        collapsible: true,
        collapsed: false,
        items: [
            // This shows `/guide/index.md` page.
            { text: '日常应用', link: `${commonPath}/usually` }, // /guide/index.md
            { text: '聊天通讯', link: `${commonPath}/chat` }, 
            { text: '办公软件', link: `${commonPath}/office` }, 
            { text: '影音娱乐', link: `${commonPath}/music` }, 
        ]
    },
    
]