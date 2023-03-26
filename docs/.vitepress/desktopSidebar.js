const commonPath = '/desktop';

export default [
    {
        text: 'Desktop',
        collapsible: true,
        collapsed: false,
        items: [
            // This shows `/guide/index.md` page.
            { text: 'Gnome', link: `${commonPath}/gnome` }, // /guide/index.md
            { text: 'KDE', link: `${commonPath}/kde` }, 
            { text: 'Xfce', link: `${commonPath}/xfce` }, 
            { text: 'Cinnamon', link: `${commonPath}/cinnamon` },
            { text: 'Deepin', link: `${commonPath}/deepin` }, // /guide/index.md
            { text: 'Mate', link: `${commonPath}/mate` }, 
            { text: 'Cwm', link: `${commonPath}/cwm` }, 
            { text: 'Cutefish', link: `${commonPath}/cutefish` }, 
            { text: 'Enlightenment', link: `${commonPath}/enlightenment` }, // /guide/index.md
            { text: 'Fvwm3', link: `${commonPath}/fvwm3` }, 
            { text: 'Icewm', link: `${commonPath}/icewm` }, 
            { text: 'Jwm', link: `${commonPath}/jwm` }, 
            { text: 'Lxqt', link: `${commonPath}/lxqt` }, // /guide/index.md
            { text: 'Openbox', link: `${commonPath}/openbox` }, 
            { text: 'Panth', link: `${commonPath}/panth` }, 
            { text: 'Ukui', link: `${commonPath}/ukui` }, 
            
        ]
    },
    {
        text: 'Twm',
        collapsible: true,
        collapsed: false,
        items: [
            // This shows `/guide/index.md` page.
            { text: 'Awesome', link: `${commonPath}/twm/awesome` }, // /guide/index.md
            { text: 'BsPwm', link: `${commonPath}/twm/bspwm` }, 
            { text: 'Chadwm', link: `${commonPath}/twm/chadwm       ` }, 
            { text: 'Dusk', link: `${commonPath}/twm/dusk` }, 
            { text: 'Dwm', link: `${commonPath}/twm/dwm` }, // /guide/index.md
            { text: 'Hlwm', link: `${commonPath}/twm/hlwm` }, 
            { text: 'Hypr', link: `${commonPath}/twm/hypr       ` }, 
            { text: 'I3wm', link: `${commonPath}/twm/i3` },
            { text: 'Leftwm', link: `${commonPath}/twm/leftwm` }, // /guide/index.md
            { text: 'Qtile', link: `${commonPath}/twm/qtile` }, 
            { text: 'Spectrwm', link: `${commonPath}/twm/spectrwm       ` }, 
            { text: 'WmdeRland', link: `${commonPath}/twm/wmderland` },
            { text: 'Worm', link: `${commonPath}/twm/worm` }, // /guide/index.md
            { text: 'Xmonad', link: `${commonPath}/twm/xmonad` }, 
           
        ]
    },
]


