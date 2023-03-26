import { defineConfig } from 'vitepress';
import installSidebar from "./installSidebar";
import desktopSidebar from "./desktopSidebar";
import configSidebar from "./configSidebar";

export default defineConfig({
//------------------------------全局配置------------------------------------------
    title: 'Arco Guide',
    description: 'A Arch&Arco linux Guide site',
    lastUpdated: true ,//最后更新时间
    titleTemplate: ' _0081', //该选项为title | _0081
    cleanUrls: true,


//-------------------------------主题配置-----------------------------------------
    themeConfig: {
      siteTitle: 'arcolinux',
      logo: '/logo.png',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/A0081/arco-guide/' },//  这里要改为项目的github连接
        // You can also add custom icons by passing SVG as string:

        // {
        //   icon: '<svg>...</svg>',
        //   link: '
        // }
        //
        // Or you can use an icon from a third-party library:
        // 
        
        
      ],
      editLink: {
        pattern: 'https://github.com/A0081/arco-guide/tree/main/docs/:path',
        text: 'Edit this page on GitHub'

      },
      sidebar: {
        '/install/': installSidebar,
        '/desktop/': desktopSidebar,
        '/config/': configSidebar,
    },
      nav: [
       
        { text: '学习路线', link: '/lpath/path' },
        {
          text: '桌面介绍',
          items: [
            { text: 'Desktop', link: '/desktop/' },
            { text: 'TWM', link: '/desktop/twm/awesome' },
          ]
        },
        { text: '基础安装', link: '/install/' },
        {
          text: '应用与配置',
          items: [
            {
              // You may also omit the title.
              items: [
                { text: '桌面安装后必要配置', link: '/afinstall' },
                { text: '软件安装', link: '/config/' },
                { text: '魔法学院', link: '/magic' },
                { text: '我的Chadwm配置', link: 'https://github.com/A0081/chadwm-config.git' }
              ]
            }
          ]
        }
      ]

      










    },
    
  })