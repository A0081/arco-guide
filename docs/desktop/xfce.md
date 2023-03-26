# Xfce

Xfce是一个轻量级的桌面环境，它使用X11窗口系统，提供了一个简单、易于使用和高度可定制的桌面用户界面。它旨在提供一个功能齐全的桌面环境，同时保持系统资源的低消耗和响应速度。

Xfce的一些特点和功能包括：

- 快速、轻便和易于使用
- 支持多显示器和多语言
- 可自定义的面板和菜单
- 多种样式主题和图标主题
- 内置应用程序和插件，包括文件管理器、终端仿真器、图形设置管理器等等

## 截图

![img](/cco3ms9v43la1.png)

## 安装方法

```bash
sudo pacman -Syyu #更新Arch Linux系统
sudo pacman -S xfce4 xfce4-goodies #安装Xfce桌面环境
#安装LightDM显示管理器 (这里gdm sddm等都可以)
sudo pacman -S lightdm lightdm-gtk-greeter
sudo systemctl enable lightdm #启动显示管理器
reboot 
```



## 相关网址

| Xfce官方网站          | https://xfce.org/                         |
| --------------------- | ----------------------------------------- |
| Xfce论坛              | https://forum.xfce.org/                   |
| Xfce的ArchWiki页面    | https://wiki.archlinux.org/index.php/Xfce |
| Xfce的Ubuntu Wiki页面 | https://wiki.ubuntu.com/Xubuntu           |
| Xfce的GitHub代码库    | https://github.com/xfce-mirror            |

