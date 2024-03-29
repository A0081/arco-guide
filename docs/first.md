# 前言

这几年我一直在尝试折腾 ArchLinux，毕竟它的稳定性和性能优势确实令人着迷。但是，不下数十次的重装与复习，让我逐渐失去了耐心。然而，一次偶然的机会，我发现了 ArcoLinux。初次使用，我就被它卓越的性能与稳定性所折服，让我再也不想回到 ArchLinux 的繁琐操作中。于是，我想和大家分享这篇 ArcoGuide，让更多人了解和体验这个让人惊艳的 Linux 发行版。

与其父亲Arch的异同:

Arch 需要从零开始一步一步搭建自己的 Linux 系统，这对于新手来说非常不友好，而且学习过程中需要花费大量的时间和精力，因为过时但五花八门的问题解决贴无法有效解决问题，因此学习 Arch 的过程永远离不开查阅 Wiki。

相比之下，ArcoLinux 则具有完美的图形化安装界面，而且在安装过程中需要使用的应用程序也可以一并搞定，大大节省了时间。此外，ArcoLinux 的作者 Erik Dubois 制作了不下千余条视频，讲解每个不同的 ArcoLinux 镜像的使用方法，他的目的是想教会用户如何打造属于自己的 Linux 发行版。因此，ArcoLinux 是最适合学习 Linux 的发行版，让您能够在享受 ArcoLinux 带来的美好时光的同时，也能够快速提升您的技能水平。

本书提供我多年使用 Linux 的一些经验，并教与需要的人。与 Linux 密不可分的另一部分: [GNU](https://www.gnu.org/home.zh-cn.html)
新读者请确保你已经按照步骤完成了`新手上路`章节中的**全部内容**后再向下阅读，否则可能会出现问题。

- 本书声明
  - 我坚持每个 Linux 学习者都应该至少有一次 Arch Linux 的命令行安装体验，以建立坚实的 Linux 学习基础。尽管本书主要介绍了 ArcoLinux，但是我将以 Arch Linux 为核心，向读者介绍 ArcoLinux。本书分为两部分，第一部分主要讲解 Arch Linux 的安装和基础配置，第二部分则以 ArcoLinux 为核心，介绍各种桌面环境以及如何创建属于自己的 Linux 发行版。
  - 本书还提供了完善且可靠的科学上网流程，以帮助那些处于互联网被封锁和审查地区的读者获取更好的学习体验。如果有人认为此书的内容不和谐，我感到非常遗憾。
  - 本书中的大多数官方网址来自于国外，因此我提供了科学上网教程，以帮助读者实现完美的阅读体验。我试图用幽默风趣的语言，使本书更加易懂易学，但我仍需要读者的反馈和建议，以便不断完善和改进本书。如果您有任何问题或建议（哪怕只是一个错别字），请通过邮箱联系我。
  - 作为我青年时期第一部完整的教程类作品，本书将随着我的学习不断更新和改进。感谢所有的读者，希望您们能够对本书提出宝贵的意见和建议，以帮助我完善本书，使更多的 Linux 学习者受益。

## 为什么使用Linux?

简单来说，现在世界上流行的 PC 操作系统有三个，Windows，Linux 与 macOS。

如果你是计算机相关专业的学生或从业者，强烈建议你使用 Linux 作为自己的日常系统。在使用 Linux 的过程中，你可以无形中接触到各个方面的计算机知识，并且在未来的工作中也会为你带来相关方面的优势。相比之下，macOS 在一些方面与 Linux 的操作并不同，并且由于其封闭的特性，我们不建议使用。而 Windows 在很多编程环境的配置过程中非常痛苦，且会出现各种各样的问题。同时，和 macOS 一样，Windows 也是闭源的系统，我们强烈不建议使用 Windows 进行编程。

更重要的是，GNU/Linux 是自由软件运动的相关重要产物。[自由软件运动(free software movement)](https://zh.wikipedia.org/wiki/自由软件运动)拒绝专有软件并推广自由软件,它的终极目标在于解放网络世界中的每个人——即每个电脑用户。每个人都应拥有完全掌控所运行软件的权利。[自由软件](https://www.gnu.org/philosophy/free-sw.zh-cn.html)有如下四项原则：

- 自由度 0：无论用户出于何种目的，必须可以按照用户意愿，自由地运行该软件。
- 自由度 1：用户可以自由地学习并修改该软件，以此来帮助用户完成用户自己的计算。作为前提，用户必须可以访问到该软件的源代码。
- 自由度 2：用户可以自由地分发该软件的拷贝，这样就可以助人。
- 自由度 3：用户可以自由地分发该软件修改后的拷贝。借此，用户可以把改进后的软件分享给整个社区令他人也从中受益。作为前提，用户必须可以访问到该软件的源代码。

如果你只是一个普通用户，你肯定遇到过电脑被装上了成堆流氓软件的类似经历。专有软件不仅在各个维度强奸着用户，更包含着难以想象的恶意功能。用户的数据、隐私等重要信息会轻而易举地被大公司们收集走并加以滥用，这成为公开的秘密。而选择 Linux，你不仅可以获得更好的计算机使用体验，还可以享受到完全免费的系统，探索充满新鲜与挑战的事物。因此，如果你想尝试一个自由、安全、免费的系统，或者喜欢探索充满新鲜感和挑战的事物，那么 Linux 绝对是一个不可错过的体验！

## 为什么使用 Arch Linux？

最重要的，Arch Linux 的软件包是最新的，这在日常使用中非常必要，你可以第一时间享受到新软件的特性，而不用烦心于升级软件时的过旧依赖的问题。其提供的软件包可以让你轻松安装使用，而不用自行编译。除此之外，用户仓库 AUR 由世界各地的 Arch Linux 用户驱动，提供了海量的非官方软件以供选择。Arch Linux 在灵活与易用两方面达到了几乎完美的平衡。

Arch Linux 可以以超高的自由度来定制自己的系统，并且其拥有最完善的[文档](https://wiki.archlinux.org/index.php/Main_page)，使得绝大多数问题都可以通过查看官方文档的方式解决。正是由于其软件更新的策略的激进，如果条件允许，建议使用者经常对 Arch Linux 进行更新。较长时间段内没有升级可能会造成各种问题（俗称 `滚挂了`），虽然大多数问题可以通过救援手段事后补救，但还是常常更新得好。同时，关注 Arch Linux 的[新闻列表](https://archlinux.org/news/)可以帮助你得知最新的升级注意事项。

## 为什么使用 Arco Linux?

首先,当然是Arco Linux有图形化安装界面.这点能节省大量时间,将精力放在系统本身，而且其对基础窗口管理器都做了相应的配置，有不少人专门COPY Arco的配置文件使用。并且Arco在安装时就提供了在线安装选项，可以将常用软件包在安装系统时一并安装。

Arco Linux提供了一套完善的[学习路线](https://www.arcolinux.info/learning-path/)，让你从小白一步步到可以自己制作Linux发行版。而他因为属于Arch的衍生系统，所以大多数问题仍可以参考Arch WiKI，当然Erik Dubois制作了大量的视频与详细文档以供Arco的使用者学习

## 我适合使用Arch Linux吗？

### 判断标准之一：你是否具有一定的 Linux 基础？

不少 Linux 萌新可能从不同渠道听过一种说法，那就是选择 archlinux 作为 TA 们的入门发行版。理由包括但不限于：

1. 通过安装和使用 archlinux 我可以更好的了解 Linux 底层运作的原理
2. archlinux 的软件很多
3. 遇到问题好好看 [archWiki](https://wiki.archlinux.org/title/Main_page_(简体中文)) 就好啦

这些理由所叙述的事实单独来看确实没有任何问题，但作为推荐 Linux 萌新选择 archlinux 作为入门发行版就显得不太合适了。理由有下：

1. 了解 Linux 底层运作的原理对于学习 Linux 的人来说无疑是一个进阶的话题了；脚踏实地，先**从 Linux 基础甚至基本的计算机常识开始掌握才是正确的学习姿势**。否则知识体系就如同空中楼阁，摇摇欲坠
2. archlinux 的软件确实很多，甚至由于 arch 之道中实用性大于意识形态的原则，包含有不开源甚至非自由软件；但是对于其它发行版来说，日常使用的大部分软件也都在软件仓库中存在
3. [archWiki](https://wiki.archlinux.org/title/Main_page_(简体中文)) 的内容的确包含面非常广，甚至非常细节的问题也有说明和解答。但也正是由于这种特性，导致其指引性较差，让用户容易迷失方向，更不用说对于 Linux 萌新了

对于这一部分同学，笔者的建议是先去阅读相关的书籍，在掌握了扎实的 Linux 基础之后，再来尝试 archlinux 吧！这里推荐一本由刘遄老师编写的 Linux 入门 📖 书籍 [《Linux 就该这么学》](https://www.linuxprobe.com/docs/LinuxProbe.pdf)，并且作者本着开源精神让广大读者可以免费下载阅读，直接点击链接即可跳转下载（linuxprobe）。此外，掌握基础的英语阅读水平也是很有必要的，例如经常有一些同学在安装 archlinux 的时候由于看不懂英语的报错信息在已经发生错误的情况下继续执行下一步命令导致安装失败。

> #### 🍧 趣事
>
> 笔者曾经遇到过很多对于 Linux 毫无基础（包括曾经试用过“新手”发行版如 Ubuntu 但是依然不具备 Linux 基础知识）的人想要尝试 archlinux，却在安装时遇到“匪夷所思”的问题，对此略举一二（并没有）：
>
> 1. 某同学在 win10 下经过一上午的努力，终于用 [DiskGenius](https://www.diskgenius.cn/)EULA（win 下的磁盘分区工具）将 💾 磁盘分出了一部分空间以供安装 archlinux，但是却发现使用 `lsblk` 命令在安装环境无法看到分出来的空白空间！“问题”当然显而易见，因为没有分区的空白空间并不是块设备，自然无法用 `lsblk` 命令看到了
>
> 对于那些 `sudo` 命令输密码时看不到输出以为键盘坏了的，这些都是老生常谈了，就不多说了 QAQ

### 判断标准之二：你是否愿意花费时间在折腾系统上？

archlinux 是简洁的操作系统。arch 将简洁定义为：避免任何不必要的添加、修改和复杂增加。这样做的好处显而易见：你可以自己决定使用哪种桌面环境、安装哪些组件和服务。这种精细化的控制能够赋予你一个精简的操作系统，可以让你自由选择所需的组件来构建属于你自己的系统。

但也正因为此，配置 archlinux 相对于其它 Linux 发行版来说是繁琐。首先，安装 archlinux 需要在命令行手动输入至少 20 多条命令，并且要保证正确：

```bash
systemctl stop reflector.service
iwctl
device list
station wlan0 scan
station wlan0 get-networks
station wlan0 connect wifi-name
exit
ping arch.icekylin.online
timedatectl set-ntp true
timedatectl status
vim /etc/pacman.d/mirrorlist
# 分区和挂载系列命令
pacstrap /mnt base base-devel linux linux-firmware
pacstrap /mnt dhcpcd iwd vim sudo bash-completion
genfstab -U /mnt > /mnt/etc/fstab
cat /mnt/etc/fstab
arch-chroot /mnt
vim /etc/hostname
vim /etc/hosts
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
hwclock --systohc
locale-gen
echo 'LANG=en_US.UTF-8'  > /etc/locale.conf
passwd root
pacman -S intel-ucode
pacman -S grub efibootmgr
grub-install --target=x86_64-efi --efi-directory=/efi --bootloader-id=ARCH
vim /etc/default/grub
grub-mkconfig -o /boot/grub/grub.cfg
exit
umount -R /mnt
reboot
```

其次，安装好的系统只是最基本的系统，不包含图形界面，还需要安装和配置更多的设置项（很多需要手动编辑配置文件）才可以正常使用。最后，日常维护 archlinux 可能也需要大量时间和精力（如 archlinux 更新后挂了，如何解决）。有的时候可能半天时间就这样“浪费”了。

> #### 🍧 碎碎念
>
> 不过对此也不用过于担心。本指南的目的之一就是为了减少不必要的排错成本。不少问题别人（包括笔者）也出现过，乐于助人的人也会将 TA 们的解决方法分享出来，何况还有 archlinux 开放、友好的强大社区生态呢！正所谓前人栽树后人乘凉嘛。

### 判断标准之三：在遇到难以解决的复杂问题时，能否冷静应对？

archlinux 作为现代的滚动发行版，遇到问题是非常正常的。其中大部分问题经过简单排查便可解决，但也不排除遇到重大问题导致系统崩溃，无法进入桌面环境甚至系统。部分萌新的解决方法简单粗暴 —— 直接重装。这个方法可能确实有效，但是有多少人会经得起重新安装的折腾呢？多重装几次可能“心态就炸了”。

实际上，即使系统无法正常进入了，我们依然可以使用安装盘 `arch-chroot` 进入原系统修复（如果暂时听不懂没有关系，后面会讲解，这里只要知道有办法解决就可以了）。例如大多数情况下可能只是启动引导出现了问题而已，如果为此而直接重新安装系统则显得有些小题大做了。

总而言之，在遇到难以解决的复杂问题时，不要慌张；静下心来好好想一想问题到底出在哪里，**对症下药、冷静应对才是正确的姿势**。
