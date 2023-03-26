# Dusk

DuskWM是一款基于X11的平铺式窗口管理器，它是一个轻量级的窗口管理器，使用C语言编写，旨在提供快速、简单和可定制的窗口管理器。DuskWM使用平铺式布局，这意味着窗口将自动铺满可用的屏幕空间，而不是在屏幕上覆盖叠放。此外，DuskWM还支持多个工作区、键盘快捷键和自定义配置选项等功能，使用户可以自由定制和管理自己的工作环境。DuskWM是自由软件，根据MIT许可证发布，可以在Linux和其他类Unix系统上运行。

## 截图



## 安装方法

```bash
sudo pacman -S python-gobject python-pyxdg python-setuptools gtk3  #安装必要的软件包
git clone https://github.com/sdhand/dusk.git #下载 Dusk 的源代码。可以在 GitHub 上获取最新的源代码

cd dusk
sudo python setup.py install #进入源代码目录，并使用上下命令安装 Dusk
echo "exec dusk" > ~/.xinitrc #创建 xinitrc 文件，用来启动窗口管理器

startx #重启 X 会话，使更改生效
```



## 相关网站

| Dusk 官方 GitHub 仓库 | https://github.com/sdhand/dusk        |
| --------------------- | ------------------------------------- |
| ArchWiki 页面         | https://wiki.archlinux.org/title/Dusk |
| Reddit 社区           | https://www.reddit.com/r/duskwm/      |

