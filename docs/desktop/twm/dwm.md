# Dwm

Dwm是一个高度定制化的平铺式窗口管理器，适用于X11桌面环境。它是一个非常轻量级的窗口管理器，源代码只有不到2000行，同时也非常快速和高效。

Dwm使用平铺式布局来管理窗口，可以让用户快速地在不同的窗口之间进行切换。它还支持多个工作区和键绑定，可以让用户快速地进行任务切换和窗口操作。Dwm的源代码非常简洁，易于理解和修改，可以根据用户的需求进行个性化的定制和修改。

## 截图

![dwm](/dwm.png)

## 安装方法

```bash
sudo pacman -Syu #更新系统
sudo pacman -S xorg xorg-xinit dmenu xfce4-terminal #安装必要的软件包，包括X Window System、dmenu、Xfce4 Terminal等
sudo pacman -S dwm #安装dwm
exec dwm #编辑~/.xinitrc文件并添加以下内容
startx #按下Ctrl + Alt + F2进入控制台，然后输入以下命令并按Enter
```

## 相关网站

| Dwm官方网站             | https://dwm.suckless.org/                                    |
| ----------------------- | ------------------------------------------------------------ |
| Dwm Arch Linux Wiki页面 | https://wiki.archlinux.org/index.php/Dwm                     |
| Dwm Reddit社区          | https://www.reddit.com/r/suckless/comments/5p5luf/show_your_dwm_setup/ |
| Dwm开发者社区           | https://lists.suckless.org/dev/                              |

