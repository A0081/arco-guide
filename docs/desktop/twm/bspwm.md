# Bspwm

bspwm是一个轻量级、高度可定制的平铺式窗口管理器，适用于X11环境。它被设计为简单易用，但同时也提供了高度的灵活性和可定制性，可以让用户根据自己的需求进行调整和定制。

bspwm使用二叉空间分区方式来管理窗口，使得它可以高效地利用空间，从而在多任务处理时提高了效率。它还具有灵活的键绑定和工作区管理功能，可以帮助用户更好地组织和管理他们的工作流程。

## 截图

![bspwm](/bspwm.png)

## 安装方法

```bash
sudo pacman -Syu #更新系统
sudo pacman -S bspwm #安装 bspwm
sudo pacman -S sxhkd #安装 sxhkd：BSPWM 窗口管理器需要一个键绑定程序来处理键盘快捷键
echo "exec bspwm" > ~/.xinitrc #创建 Xinit 配置文件：BSPWM 窗口管理器需要一个 Xinit 配置文件来启动

mkdir -p ~/.config/sxhkd
touch ~/.config/sxhkd/sxhkdrc ##创建 sxhkd 配置文件：在终端中运行以下命令来创建一个名为 .config/sxhkd/sxhkdrc 的文件

startx #启动 BSPWM
### 确保你已经安装了显示管理器 （如SDDM、LightDM、Gdm等）
```



## 相关网址

| 官方网站          | https://github.com/baskerville/bspwm                        |
| ----------------- | ----------------------------------------------------------- |
| Reddit 社区       | https://www.reddit.com/r/bspwm/                             |
| ArchWiki 页面     | https://wiki.archlinux.org/title/Bspwm                      |
| SXHKD GitHub 仓库 | https://github.com/baskerville/sxhkd                        |
| BSPWM-Desktop     | https://github.com/drscream/bspwm-desktop                   |
| BSPWM-Tutorial    | https://github.com/thewtex/TWM-Configs/blob/master/bspwm.md |

