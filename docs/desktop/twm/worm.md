# Worm

Worm是一个轻量级的平铺式窗口管理器，它使用C语言编写，采用Xlib库和X11窗口系统。它具有高度可定制的配置文件和键盘快捷键，可以方便地管理窗口。

Worm的一些特点和功能包括：

- 单一布局，基于平铺式窗口管理器的概念
- 支持多工作区和多显示器
- 可扩展的配置文件和键盘快捷键
- 支持UTF-8和Xft字体

Worm的配置文件采用简单的文本格式，使得用户可以轻松地自定义窗口管理器的行为和外观。它可以通过编辑~/.config/worm/wormrc文件来进行配置。

## 截图

![img](/6n6isbnrls791.png)

## 安装方法

```bash
sudo pacman -Syu #更新系统
sudo pacman -S worm xorg-xsetroot xorg-xrdb xorg-xrandr #安装Worm及其依赖项
exec worm #编辑~/.xinitrc文件并添加
startx #按下Ctrl + Alt + F2进入控制台，然后输入命令并按Enter键
```



## 相关网址

| Worm官方GitHub页面           | https://github.com/LemonBoy/worm                          |
| ---------------------------- | --------------------------------------------------------- |
| Arch Linux官方Worm软件包页面 | https://www.archlinux.org/packages/community/x86_64/worm/ |
| Worm Reddit社区              | https://www.reddit.com/r/wormwm/                          |

