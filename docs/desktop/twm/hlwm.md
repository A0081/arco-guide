# HLWM

Herbstluftwm（简称HLWM）是一个轻量级、快速、灵活和高度可定制的平铺式窗口管理器，适用于X11环境。它使用类似于二叉树的方式来管理窗口，可以让用户快速地在不同的窗口之间切换和管理。

HLWM支持多个工作区、动态窗口管理和键绑定等功能，可以帮助用户更好地组织和管理他们的工作流程。它还支持自定义主题和配置文件，可以让用户根据自己的需求进行个性化的定制和修改。

## 截图![HLWM](/HLWM.png)

## 安装方法

```bash
sudo pacman -Syu #更新系统
sudo pacman -S xorg xorg-xinit dmenu xfce4-terminal #安装必要的软件包，包括X Window System、dmenu、Xfce4 Terminal等
sudo pacman -S herbstluftwm #安装HLWM
exec exec herbstluftwm #编辑~/.xinitrc文件并添加以下内容
startx #按下Ctrl + Alt + F2进入控制台，然后输入以下命令并按Enter
```



## 相关网站

| HLWM官方网站             | https://herbstluftwm.org/                         |
| ------------------------ | ------------------------------------------------- |
| HLWM Arch Linux Wiki页面 | https://wiki.archlinux.org/index.php/Herbstluftwm |
| HLWM Reddit社区          | https://www.reddit.com/r/herbstluftwm/            |
| HLWM开发者社区           | https://github.com/herbstluftwm/herbstluftwm      |

