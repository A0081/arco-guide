# Spectrwm

Spectrwm是一个快速、轻量级的平铺式窗口管理器，它使用X11窗口系统，并具有高度可定制的配置文件。Spectrwm是一个简单、直接的窗口管理器，非常适合那些喜欢使用键盘来控制其窗口管理器的用户。

Spectrwm的一些特点和功能包括：

- 基于平铺式和浮动式窗口管理器的概念
- 内置键盘快捷键和命令
- 多显示器和多工作区支持
- 可扩展的配置文件
- 支持Xinerama和XRandR

Spectrwm的配置文件采用BSD式许可证，这使得用户可以自由地编辑和分发它们。配置文件使用简单的文本格式，使得用户可以轻松地自定义窗口管理器的行为

## 截图

![img](/g0ieurv1lsba1.png)

## 安装方法

```bash
sudo pacman -Syu #更新系统
sudo pacman -S spectrwm xorg-xsetroot #安装Spectrwm及其依赖项
exec spectrwm #编辑~/.xinitrc文件并添加
startx #按下Ctrl + Alt + F2进入控制台，然后输入命令并按Enter键
```



## 相关网址

| Spectrwm GitHub页面    | https://github.com/conformal/spectrwm                        |
| ---------------------- | ------------------------------------------------------------ |
| Spectrwm官方手册       | https://manpages.debian.org/testing/spectrwm/spectrwm.1.en.html |
| Spectrwm Arch Wiki页面 | https://wiki.archlinux.org/index.php/Spectrwm                |

