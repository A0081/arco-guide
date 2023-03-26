# Chadwm

Chadwm是一个轻量级、快速的平铺式窗口管理器，适用于X11桌面环境。它是基于dwm构建的，但是做了一些修改和扩展，使得它更加易于使用和个性化定制。

Chadwm支持多个工作区和动态窗口管理，可以让用户快速地在不同的工作区间切换。它还支持键绑定和快捷键操作，方便用户快速地进行任务切换和窗口管理。此外，Chadwm的源代码非常简洁，易于理解和修改。

## 截图

![img](/68747470733a2f2f692e726564642e69742f743170766d716c71336f6338312e706e67.png)

![](/initial_look.png)

![img](/col_layout.png)

![img](/occ_act_tags.png)



## 安装

```bash
sudo pacman -S xorg xorg-xinit chadwm dmenu #安装必要的软件包
echo "exec chadwm" > ~/.xinitrc #创建 xinitrc 文件，用来启动窗口管理器。
echo "exec dmenu" > ~/.xsession #创建 .xsession 文件，用来启动 dmenu
startx #重启 X 会话，使更改生效
```

## 相关网站

| Chadwm 官方 GitHub 仓库 | https://github.com/Cloudef/chadwm                 |
| ----------------------- | ------------------------------------------------- |
| ArchWiki 页面           | https://wiki.archlinux.org/title/Chadwm           |
| Reddit 社区             | https://www.reddit.com/r/chadwm/                  |
| Linux公社               | https://www.linuxidc.com/Linux/2018-12/156023.htm |

