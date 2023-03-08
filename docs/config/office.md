#  👩‍💻办公软件

### 办公套件

## WPS

[WPS Office](https://www.wps.cn/) 是由 [金山软件](https://www.kingsoft.com/) 发布的一款办公软件，用于办公软件最常用的文字编辑、电子表格、演示文稿等功能。

```bash
yay -S wps-office-cn ttf-wps-fonts
```

## LibreOffice

[LibreOffice](https://zh-cn.libreoffice.org/) 是由 [文档基金会](https://www.documentfoundation.org/) 开发的自由及开放源代码的办公室套件。LibreOffice 是一款功能强大的办公软件，默认使用 ODF 开放文档格式（OpenDocument Format），并支持 *.docx、*.xlsx、*.pptx 等其它格式。

它包含了 Writer、Calc、Impres、Draw、Base 以及 Math 等组件，可用于处理文本文档、电子表格、演示文稿、绘图、数据库管理以及公式编辑。

安装 [LibreOffice](https://archlinux.org/packages/extra/x86_64/libreoffice-still/) 以及 [其中文语言包](https://archlinux.org/packages/extra/any/libreoffice-still-zh-cn/)：

```bash 
sudo pacman -S libreoffice-still libreoffice-still-zh-cn
```

## Foxit PDF Reader

[Foxit PDF Reader](https://www.foxitsoftware.com/products/pdf-reader/)是福建福昕软件开发股份有限公司推出的一款轻量级PDF编辑器，是目前笔者在Linux平台下使用过免费且最好用的PDF编辑器。Foxit PDF Reader提供常规的PDF注释功能：段落高亮、区域高亮、下划线、波浪线、图形、删除线和备注等标记，也提供许多其他平台付费PDF编辑器提供的打字机、文本框、笔迹等轻量级PDF编辑。加载和保存PDF速度较Libre Office Draw快，打字机功能较KDE Okular支持非拉丁字符输入，是PDF笔记文档注释的好帮手。

安装[Foxit PDF Reader](https://aur.archlinux.org/packages/foxitreader/):

```bash
yay -S foxitreader
```

### Markdown 编辑器

## Typora

[Typora](https://typora.io/) 是一款由 Abner Lee（上海人）开发的轻量级 Markdown 编辑器。

Typora 没有采用源代码和预览双栏显示的方式，而是采用所见即所得的编辑方式，实现了即时预览的功能，但也可切换至源代码编辑模式。在编辑时，除了通过传统的 Markdown 代码的方式来实现富文本之外，Typora 支持通过菜单栏或者鼠标右键选取命令的方式来实现富文本，也支持通过快捷键的方式插入。Typora 也支持通过以 TeX 的格式来插入行间公式和行内公式。在完成编辑后导出文件时，Typora 支持以 PDF 或 Html 的形式导出，如果安装了 Pandoc，也能够以 Word、RTF、MediaWiki、LaTeX 等形式导出。

安装 [Typora](https://aur.archlinux.org/packages/typora/)EULA / cn / aur 以及 [Pandoc](https://archlinux.org/packages/community/x86_64/pandoc/)：

```bash
sudo pacman -S typora pandoc 
```

值得注意的是，目前typora软件已经开始收费。如果有能力购买的话可以进行购买。对于囊中羞涩的学生党或其他不愿购买的用户，我们可以选择使用typora的最后一个免费版本（注意：不是盗版），安装方式如下

```bash
yay -S typora-free
```

