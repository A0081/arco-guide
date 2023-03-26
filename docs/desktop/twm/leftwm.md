# Leftwm

Leftwm是一个基于Rust编写的平铺式窗口管理器。它使用X11窗口系统，并带有一个简单但高度可自定义的配置文件，使用户可以轻松地更改窗口管理器的功能和外观。

Leftwm的一些特点和功能包括：

- 基于平铺和堆叠两种布局方式
- 支持多工作区和多显示器
- 自定义窗口管理器的键盘快捷键
- 插件系统

Leftwm还有一个名为"leftwm-themer"的主题管理器，使用户能够轻松地更改窗口管理器的外观。它还支持多种状态栏，包括i3bar、polybar和lemonbar等。

Leftwm是一个轻量级、快速并且高度可定制的窗口管理器，非常适合那些想要掌握窗口管理器的核心概念并进行高度自定义的用户。

## 截图

![img](/qcqno1s6ogk91.png)

## 安装方法

```bash
sudo pacman -Syu #更新系统
sudo pacman -S leftwm leftwm-git libxcb xcb-util xcb-util-keysyms xcb-util-wm xcb-util-cursor xcb-util-xrm rofi #安装Leftwm及其依赖项
exec leftwm #编辑~/.xinitrc文件并添加
startx #按下Ctrl + Alt + F2进入控制台，然后输入命令并按Enter键
```



## 相关网址

| Leftwm官方网站    | https://leftwm.github.io/        |
| ----------------- | -------------------------------- |
| Leftwm GitHub页面 | https://github.com/leftwm/leftwm |
| Leftwm Reddit社区 | https://www.reddit.com/r/LeftWM/ |

