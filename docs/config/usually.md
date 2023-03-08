# 📅日常应用

### 网络浏览器

## Firefox

火狐浏览器（Mozilla Firefox）是一个自由开源的网页浏览器，由 [Mozilla 基金会](https://foundation.mozilla.org/) 及其非营利子公司 [Mozilla 公司](https://www.mozilla.org/zh-CN/about/) 开发。

安装 [Firefox 浏览器](https://archlinux.org/packages/extra/x86_64/firefox/)：

```bash
sudo pacman -S firefox
```

同时还有 [Firefox 浏览器开发者版](https://www.mozilla.org/zh-CN/firefox/developer/)，使用此版本可获得最新功能、高速性能，以及打造开放 Web 所需的开发工具：

```bash
sudo pacman -S firefox-developer-edition
```

## Chromium

[Chromium](https://www.chromium.org/) 是 Google 为发展浏览器 Google Chrome 而发布的免费开源软件项目，以 [BSD 许可协议open in new window](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/LICENSE) 等数种许可发行并开源。Chromium 与 Google Chrome 共享大部分代码和功能。

安装 [Chromium](https://archlinux.org/packages/extra/x86_64/chromium/)：

```bash
sudo pacman -S chromium
```

## Chrome

Google Chrome 是由 Google 开发的免费网页浏览器。Chrome 相应的开放源代码计划名为 Chromium，而 Google Chrome 本身是专有软件，未开放全部源代码.

安装 [Google Chrome](https://aur.archlinux.org/packages/google-chrome/)EULA / cn / aur：

```bash
yay -S google-chrome
```

## Edge

Microsoft Edge（微软前沿浏览器）是一个由微软研发的浏览器，于 2015 年 1 月 21 日公布，2015 年 3 月 30 日公开发布第一个预览版。

安装 [Microsoft Edge](https://aur.archlinux.org/packages/microsoft-edge-stable-bin)EULA / aur：

```bash
yay -S microsoft-edge-beta-bin # aur(beta)
yay -S microsoft-edge-dev-bin  # aur(dev)
```

### PDF以及电子书阅读器

## Okular

Okular 是 KDE 开发的一款功能丰富、轻巧快速的跨平台文档阅读器。可以使用它来阅读 PDF 文档、漫画电子书、Epub 电子书，浏览图像，显示 Markdown 文档等。

安装 [Okular](https://archlinux.org/packages/extra/x86_64/okular/)extra / aur：

```bash
sudo pacman -S okular  #或  yay -S okular-git
```

## calibre

calibre 是一款功能强大且易于使用的电子书管理器。支持 epub、txt、azw3 等文件格式。

安装 [calibre](https://archlinux.org/packages/community/x86_64/calibre/)community / aur：

```bash
sudo pacman -S calibre #或 yay -S calibre-git
```

## zathura

[zathura](https://en.wikipedia.org/wiki/Zathura_(document_viewer))是一个高度可定制的文档查看器，带有 vi 风格的键绑定。它提供了一个简约且节省空间的界面。用户主要通过键盘与 zathura 进行交互。通过插件支持不同的文件格式。支持Epub、[PDF、PS、DjVu](https://wiki.archlinux.org/title/PDF,_PS_and_DjVu)和[漫画书](https://en.wikipedia.org/wiki/Comic_book_archive)文件。

安装[zathura](https://wiki.archlinux.org/title/zathura)

```bash
sudo pacman -S zathura #或 yay -S zathura
sudo pacman -S zathura-pdf-poppler #插件
```

### 截图工具

## 火焰截图

[火焰截图（Flameshot](https://github.com/flameshot-org/flameshot) 是一款强大但简单易用的屏幕截图软件。截图后可以进行快捷的编辑

1. 安装 [火焰截图](https://archlinux.org/packages/community/x86_64/flameshot/)community / cn / aur：

``` bash
sudo pacman -S flameshot #或 yay -S aur/flameshot-git
```

2. 配置快捷键
   1. 打开 `系统设置` > 点击侧栏 `快捷键` > `自定义快捷键`
   2. 点击 `编辑` > `新建` > `全局快捷键` > `命令/URL：`
   3. 点击选项卡 `触发器` > 将 `快捷键` 设置为自定义快捷键
   4. 点击选项卡 `动作` > 将 `命令/URL：` 设置为 `flameshot gui`

## Spectacle

Spectacle 是 KDE 开发的用于抓取桌面截图的简单应用程序。它可以抓取整个桌面、单个显示器、当前活动窗口、鼠标所在的窗口或是屏幕上的一块矩形区域的图像。截取的图像可被打印、发送到其它应用程序进行处理、或是直接保存下来。

相比火焰截图可以准确的抓取单个窗口，但编辑功能没有火焰截图强大。

安装 [Spectacle](https://archlinux.org/packages/extra/x86_64/spectacle/)extra / aur：

```bash
sudo pacman -S spectacle #或 yay -S spectacle-git
```

### 图像查看器

## Gwenview

Gwenview 是 KDE 出品的一款轻便易用的图像查看器，是浏览、显示多张图像时的理想工具。

```bash
sudo pacman -S gwenview # 或 yay -S gwenview-git
```

## nomacs

nomacs 是一个免费的开源图像查看器，支持多平台。可以使用它来查看所有常见的图像格式，包括 RAW 和 psd 图像。

```bash
sudo pacman -S nomacs  #或
yay -S nomacs-git
```

## 🍷 Wine

Wine 是类 UNIX 系统下运行 Windows 程序的“兼容层”，是正在持续开发中的自由软件。在 Wine 中运行的 Windows 程序，就如同运行原生 Linux 程序一样，不会有模拟器那样的严重性能问题。

1. 安装 [Wine](https://archlinux.org/packages/multilib/x86_64/wine/) 以及其它相关依赖：

   ```bash
   sudo pacman -S wine wine-mono wine_gecko wine-staging giflib lib32-giflib libpng lib32-libpng libldap lib32-libldap gnutls lib32-gnutls \
   mpg123 lib32-mpg123 openal lib32-openal v4l-utils lib32-v4l-utils libpulse lib32-libpulse libgpg-error \
   lib32-libgpg-error alsa-plugins lib32-alsa-plugins alsa-lib lib32-alsa-lib libjpeg-turbo lib32-libjpeg-turbo \
   sqlite lib32-sqlite libxcomposite lib32-libxcomposite libxinerama lib32-libgcrypt libgcrypt lib32-libxinerama \
   ncurses lib32-ncurses opencl-icd-loader lib32-opencl-icd-loader libxslt lib32-libxslt libva lib32-libva gtk3 \
   lib32-gtk3 gst-plugins-base-libs lib32-gst-plugins-base-libs vulkan-icd-loader lib32-vulkan-icd-loader
   ```

2. 通过以下命令配置 `Wine`。随后会弹出一个窗口，可对 Wine 进行配置。Wine 默认路径为 ~/.wine：

   ```bash
   winecfg
   ```

3. 通过以下命令运行简单的 Windows 应用：

   ```bash
   wine /path/of/xxx.exe
   ```
