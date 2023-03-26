# Wmderland

Wmderland是一个基于C++和Qt框架的平铺式窗口管理器，它使用X11窗口系统，并具有高度可定制的配置文件。Wmderland的设计目标是简单、快速且易于使用，它提供了一个直观的用户界面和键盘快捷键来管理窗口。

Wmderland的一些特点和功能包括：

- 基于平铺式和浮动式窗口管理器的概念
- 支持多显示器和多工作区
- 可扩展的配置文件和插件
- 支持UTF-8和Xft字体

Wmderland的配置文件采用GNU通用公共许可证，这使得用户可以自由地编辑和分发它们。配置文件使用简单的文本格式，使得用户可以轻松地自定义窗口管理器的行为和外观。

## 截图

![Floating-Wmderland-Lightweight-Tiling-Window-Manager](/0fxipA4_d.webp)

![Tiled-Wmderland-Lightweight-Tiling-Window-Manager](/mmoEL4N_d.webp)

## 安装方法

```bash
sudo pacman -Syu #更新系统
sudo pacman -S wmderland qt5-base qt5-svg #安装Spectrwm及其依赖项
exec wmderland #编辑~/.xinitrc文件并添加
startx #按下Ctrl + Alt + F2进入控制台，然后输入命令并按Enter键
```



## 相关网址

| Wmderland GitHub页面              | https://github.com/wmderland/wmderland                       |
| --------------------------------- | ------------------------------------------------------------ |
| Arch Linux官方Wmderland软件包页面 | https://www.archlinux.org/packages/community/x86_64/wmderland/ |
| Wmderland Reddit社区              | https://www.reddit.com/r/wmderland/                          |

