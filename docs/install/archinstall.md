## 前言

众所周知，[安装 Arch Linux](https://wiki.archlinux.org/title/Installation_guide_(简体中文)) 是一件非常复杂并痛苦的事情，您需要一定的 Linux 基础，然后使用命令行进行硬盘分区，安装自己需要的软件，Arch Linux 官方也并未提供 GUI 安装程序，所以很多想尝试 Arch Linux 的用户都会被劝退在安装这一步骤上。

[archinstall](https://github.com/archlinux/archinstall) 是一个 Python 写的 Arch Linux [安装向导程序](https://wiki.archlinux.org/title/Archinstall)，我们可以很方便地使用 `archinstall` 安装 Arch Linux。

Arch Linux 发布 2022.05.01 的 iso 后，已经默认集成了 `archinstall`，于是您可以参考本教程无痛安装 Arch Linux，为了方便期间，本教程的安装是基于 `VMware Workstation`，理论上和你本地挂载 ISO 安装并无区别。

## 准备工作

首先，获取安装映像，您可以在[下载页面](https://archlinux.org/download/)下载最新的 iso 镜像文件，您可以选择速度最快的 mirror 进行下载，这里推荐两个下载链接

国外用户，使用官方的镜像：

https://mirror.pkgbuild.com/iso/latest/archlinux-x86_64.iso

国内用户，使用清华大学的镜像：

https://mirrors.tuna.tsinghua.edu.cn/archlinux/iso/latest/archlinux-x86_64.iso

下载后您需要准备个 U 盘或移动硬盘，然后使用一些工具，比如 [Rufus](https://rufus.ie/zh/)，这里不再阐述，其他方法请参考[这里](https://wiki.archlinux.org/title/USB_flash_installation_medium_(简体中文))。

*另外，您需要确认主板 BIOS 里没有奇奇怪怪的设置，比如某些针对 Windows 系统的设置，比如快速启动、CSM 安全启动、TPM 模块等都设置需要自己调整，否则默认配置可能会导致安装完 Arch Linux 后无法进入系统引导。*

## 安装 Arch Linux 系统

启动进入引导后，我们会看到熟悉的 Arch Linux 界面：![img](../public/1.png)默认进入后即可看到 Live CD 已经正常工作：

![img](../public/2.png)

我们可以运行 `installation_guide` 命令查看安装文档，当然都是英文的，对英语不好的朋友也可以直接参考[中文的文档说明](https://wiki.archlinux.org/title/Installation_guide_(简体中文))：

![img](../public/3.png)

![img](../public/4.png)

按 `Q` 退出，我们可以直接运行 `archinstall` 进行图形化安装向导：

![img](../public/5.png)

然后我们会看到 `archinstall` 的向导界面：

![img](../public/6.png)

目前我们能看到的选项有：



```bash
Select Archinstall language
Select keyboard layout
Select mirror region
Select harddrives
Select bootloader
Use swap
Specify hostname
Set root password
Specify superuser account
Specify user account
Specify profile
Select audio
Select kernels
Additional packages to install
Configure network
Select timezone
Set automatic time sync (NTP)
Additional repositories to enable
```

然后我们就一步一步来安装：

`Select Archinstall language` 这里可以选择 `archinstall` 的界面语言，很可惜，截止本文发布，并没有中文。

`Select keyboard layout` 选择键盘布局，默认情况你的键盘布局应该都是 `us`，除非你是德国等国家的用户，那么请自行选择。

`Select mirror region` 可以选择最合适的镜像，建议选择和您当前网络一致的国家或地区：

![img](../public/7.png)

记得按空格选择，然后按回车继续。

`Select harddrives` 可以选择安装的硬盘，请自行选择需要安装的硬盘，切记看清楚硬盘大小，不要装错了硬盘最后拍大腿：

![img](../public/8.png)

选择硬盘后会让您选择如何分区，如果没有特殊需求，直接选择 `Wipe all selected drives and use a best-effort default partition layout`，这样会把你的硬盘全部格式化，切记备份重要数据，不然安装了以后拍大腿：

![img](../public/9.png)

然后会询问您硬盘分区格式，可选 `btrfs`，`ext4`，`f2fs` 或 `xfs`，如果没有特殊需求，可以选最常用的 `ext4`：

![img](../public/10.png)

然后会询问您是否要对 `/home` 目录单独分区，这里主要存放用户的数据，默认建议单独分区，实际操作中会分配大概 80% 的硬盘空间给 `/home` 目录，你也可以一股脑都分给 `/`，请自行决定：

![img](../public/11.png)

完成后会多出一个 `Set encryption password` 选项，如果您需要对硬盘加密，可以选择，如果没需要可以跳过。

![img](../public/12.png)

然后我们直接跳过 `Select bootloader` 和 `Use swap`，因为他已经自动给您设置好了，然后如果您喜欢的话，可以给您的机器设置一个 `hostname` 和 `root` 密码，如果没有特殊需求，也可以跳过 `Specify hostname` 和 `Set root password`，我们直接来到 `Specify superuser account`，设置一个拥有 `sudo` 权限的超级用户，这个用户是日常登录和操作使用，请务牢记用户名和密码：

![img](../public/13.png)

输入用户名：

![img](../public/14.png)

输入密码，Linux 终端下输入密码是不显示的，不要以为自己产生幻觉输错了：

![img](../public/15.png)

可能会提示您的密码太弱，自行斟酌是否需要修改：

![img](../public/16.png)

然后再输入一次密码进行验证：

![img](../public/17.png)

成功后选择 `Confirm and exit` 即可：

![img](../public/18.png)

然后我们也可以跳过其他选项，直接来到 `Configure network`：

![img](../public/19.png)

因为我们希望安装 KDE 桌面环境，所以选择 `Use NetworkManager`：

![img](../public/20.png)

如果是服务器环境，可以选择 `Manual configuration` 手工配置网络。

然后我们选择时区，进入 `Select timezone`：

![img](../public/21.png)

按照您本地的时区来选择，可以使用 `/` 然后输入前几个字符快速搜索，比如 `/shanghai`：

![img](../public/22.png)

一切准备就绪，我们可以选择 `Save configuration` 来保存配置，也可以直接选 `Install` 进行安装：

![img](../public/23.png)

![img](../public/24.png)

![img](../public/25.png)

系统会提示 `Would you like to chroot into the newly created installation and perform post-installation configuration?`，这里我们直接选择 `Yes`，然后进入安装：

![img](../public/26.png)

霹雳哗啦安装完毕后，我们可以安装一些常用的软件，比如 `KDE` 桌面环境：



```bash
pacman -S plasma-meta plasma packagekit-qt5
```

没有特殊需求都选择默认一路回车即可：

![img](../public/27.png)

![img](../public/28.png)

安装 KDE 比较慢，因为软件包较大，请耐心等待安装完成。

安装完成后开启 `sddm`：

```bash
systemctl enable sddm
```

然后我们使用 `exit` 命令退出并使用 `reboot` 命令重启：

![img](../public/29.png)

重启后我们就可以看到熟悉的登录界面啦：![img](../public/30.png)