# 魔法学院

本节描述如何在 linux 下进行科学上网。本节以及后续的全局代理章节都是**必读章节**。如果没有配置好科学上网，那么你在日常使用中会遇到各种问题，不论是被封锁的资源或代码，还是查阅相关问题资料，你都会有可能无法下载和浏览。所有人**必须**配置好科学上网再继续。

## 1.节点的准备

简单来讲节点是形如如下的神秘链接，不论你以何种方式获得的这些连接，如果你已经拥有，可以直接阅读下面一小节。

```txt
ss://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
vmess://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

如果你没有这些连接，可以自行部署或者购买机场的订阅服务。

如果自行部署，你则需要自行购买处于自由互联网的服务器并进行节点搭建，这不在本文讨论范围内，仅提供三篇 GFW Report 的高质量文章作为参考。但是这些文章已被 GFW 屏蔽。我们之后会提供一些办法解决这个问题。

- [如何部署一台抗封锁的 Shadowsocks-libev 服务器](https://gfw.report/blog/ss_tutorial/zh/)
- [防御 GFW 主动探测的实用指南](https://gfw.report/blog/ss_advise/zh/)
- [Shadowsocks 是如何被检测和封锁的](https://gfw.report/talks/imc20/zh/)

对于服务器的购买，我们提供一个网址以供参考: https://bitcoin-vps.com/ 。bitcoin-vps 提供了非常详尽、且及时更新的服务器供应商列表。

------

如果购买机场的订阅服务，可以参考它们的订阅流程以获取节点。在我们列出一些较为可信的机场服务以供选择，但是**我们不提供任何担保**。需要提醒的是，机场服务属于灰色产业，随时有停止服务的可能，购买建议以月付进行购买以避免过大损失。关于机场审计规则，我们的观点是"我可以不看，但是你不可以封禁"。对于机场审计程度，读者可根据自身实际情况自行评估。

- [GLaDOS](https://www.glados.rocks/landing/9FMKX-GYLMK-ZYIZW-5U3T0) 在使用邮箱注册后，使用激活码`9FMKX-GYLMK-ZYIZW-5U3T0`激活账号后即可获得 5 天免费试用时长和 10GB 试用流量。 GLaDOS 的优点是可以免费使用，运行时间较长，比较可信。 除此之外，GLaDOS 是少数拥有 Trojan 节点的机场之一。 缺点是速度算不上非常快。 其审核规则，注册账号后可以进入后台面板自行查看。 根据我们的测试，它没有严格按照审计规则进行审计。

------

如果你不想花任何费用，可安装[赛风](https://psiphon3.com/zh/index.html)这类软件。赛风是自由软件。

如果你使用赛风，可以非常方便的发送空邮件到[get@psiphon3.com](mailto:get@psiphon3.com)以获取赛风下载链接。赛风应用目前只支持 Windows\Android\IOS\MacOS 平台。当你在这些平台上能够访问自由互联网时，可以去各个渠道搜索可用的节点和代理资源，如[这个](https://t.me/wtovpn)或者[这个](https://t.me/TG_Mtproxy_1)。注意，使用公共节点需要自行承担可能的风险。

## 2.安装

Qv2ray 和 V2rayA 是两款非常优秀的在 Linux 上可用的科学上网通用客户端。你可以把二者都安装，以作备用。其中 V2rayA 是一款浏览器客户端，它可以在服务器等 headless 环境中通过远程在浏览器端访问。Qv2ray 是一款经典的使用 QT 开发的 C/S 架构桌面端软件。

### v2ray

v2ray 是使用 Qv2ray 以及 V2rayA 的前提。需要先进行安装。在前面[镜像源的选择](https://archlinuxstudio.github.io/ArchLinuxTutorial/#/rookie/basic_install?id=_7镜像源的选择)一节中我们提到，读者应该尽快更换非威权国家的镜像源以保障自身的安全，**在此处安装 v2ray 之前是你更换非威权国家的镜像源的最晚时刻**。使用安全的镜像源安装 v2ray。

```bash
sudo pacman -S v2ray
```

如果在你的网络环境下，没有较快速度的或可达的安全镜像源来安装 v2ray,你可以执行如下命令安装 ArchLinuxStudio 为你提供的 v2ray 安装包。

```bash
wget https://archlinuxstudio.github.io/ArchLinuxTutorial/res/v2ray-4.44.0-1-x86_64.pkg.tar.zst
sudo pacman -U v2ray-4.44.0-1-x86_64.pkg.tar.zst
```

### V2rayA

V2rayA 是一个浏览器客户端，使用非常方便。由于作者提供了在墙内的下载地址，可以直接在 AUR 进行安装。安装后需启动服务。V2rayA 更新频繁，开发活跃，并且其安装和使用流程都对新手更加友好，推荐新人使用 V2rayA 进行科学上网。

```bash
yay -S v2raya-bin
sudo systemctl enable --now v2raya
```

随后在 KDE 菜单中搜索 v2raya，点击即可打开浏览器页面。登陆后在其中加入订阅即可使用。更多使用方法请看[官方文档](https://v2raya.org/)与[项目地址](https://github.com/v2rayA/v2rayA)

### Qv2ray 3.0

和上一节中所述相同的原因，由于[中国大陆政府封锁 Github](https://zh.wikipedia.org/wiki/对GitHub的审查和封锁#中华人民共和国)的原因，你很可能没有办法用正常 yay 的方式通过 AUR 安装[Qv2ray 3.0](https://github.com/Shadowsocks-NET/Qv2ray)，所以 ArchLinuxStudio 提供一组可以直接安装的包以供你使用。Qv2ray3.0 的 bin 仓库在于 AUR 的地址: [qv2ray-static-nightly-bin](https://aur.archlinux.org/packages/qv2ray-static-nightly-bin)。 Qv2ray3.0 的动态链接仓库在于 AUR 的地址: [qv2ray-git](https://aur.archlinux.org/packages/qv2ray-git)。Qv2ray 的安装与使用较为复杂，不建议新手使用。需要提醒的是，如果你使用动态链接的 Qv2ray,在其相关依赖更新后，你需要手动重新构建 Qv2ray。

```bash
wget https://archlinuxstudio.github.io/ArchLinuxTutorial/res/qv2ray-git-3.0.0.rc1.r36.g0f1bf651-1-x86_64.pkg.tar.zst
wget https://archlinuxstudio.github.io/ArchLinuxTutorial/res/libqv2ray-git-r160.eb10006-1-x86_64.pkg.tar.zst
wget https://archlinuxstudio.github.io/ArchLinuxTutorial/res/qv2ray-plugin-interface-git-r88.b767b4c-1-x86_64.pkg.tar.zst
wget https://archlinuxstudio.github.io/ArchLinuxTutorial/res/uvw-2.11.0_libuv_v1.43-1-x86_64.pkg.tar.zst
sudo pacman -U *.pkg.tar.zst
```

> github.io 也被中国大陆政府封锁，只是封锁力度暂时还没有很大。如你在此过程中卡住，可以尝试 ctrl+c 终止命令后重新尝试下载，也可尝试更换手机热点的网络环境再次进行下载。当你配置好全局代理后，你将不再需要担心任何网络封锁问题。我们将持续为本书读者提供突破互联网审查的可靠流程。

安装后在 Plugins 中，选择 V2ray V4 support，并进行 V2ray 的设置。现在你已经可以使用，你需要按照官方文档导入已有的链接或订阅，其余细节请详细阅读 [Qv2ray 的文档](https://qv2ray.net/)。有如下几个注意事项：

- Qv2ray3.0 中 VMESS MD5 与非 0 的 AlterID 的形式已不被支持，若你的机场或节点下发的 AlterID 是非 0 是无法使用的。如果服务端支持，你可将 AlterID 改为 0 来使用 VMessAEAD 形式。

- Qv2ray3.0 已经将机场的默认订阅类型改为规范:SIP008。如果你的机场订阅类型为 base64,则需要在分组->订阅设置->订阅类型 中，将 SIP008 改为 base64,否则你将拿不到任何订阅链接中的节点。

- 如果

  你先前使用过 2.x 的旧版本 Qv2ray ，需要删除旧版 Qv2ray 以及不兼容的配置，同时旧版 Qv2ray 与新版 Qv2ray 不能共存。

  ```bash
  rm -rf ~/.config/qv2ray
  sudo pacman -R qv2ray-dev-git
  ```

- Qv2ray 3.0 与旧版插件不兼容，原有 Qv2ray 2.x 旧版插件不可使用。目前 Qv2ray 3.0 集成了 VMess、Shadowsocks 以及 Trojan 的支持，并通过

  插件仓库

  提供 命令行插件、测速插件、Trojan-Go 和 Naive 的支持。如果你需要使用其中的插件，则需要自行编译，并将其置入目标目录

  ```
  ~.config/qv2ray/plugins/
  ```

  。同时，ArchLinuxStudio 也提供预先为你编译好的插件以方便你的使用。其中的 Trojan-Go 插件目前似乎并不能正常使用，其中的 hostname 以及 port 不能被正常解析

  [1]

  。当然你也可以自行编译插件，在CMakeLists.txt中解除你需要编译的插件的注释，随后进行编译。编译步骤可参考QvPlugins的Actions的

  workflow file

  。

  - [命令行插件](https://archlinuxstudio.github.io/ArchLinuxTutorial/res/QvPlugins/libQvPlugin-Command.so)
  - [测速插件](https://archlinuxstudio.github.io/ArchLinuxTutorial/res/QvPlugins/libQvPlugin-LatencyTest.so)
  - [Trojan-Go](https://archlinuxstudio.github.io/ArchLinuxTutorial/res/QvPlugins/libQvPlugin-TrojanGo.so)
  - [Naive](https://archlinuxstudio.github.io/ArchLinuxTutorial/res/QvPlugins/libQvPlugin-NaiveProxy.so)

## 3. 代理的初步设置

在经过上述步骤后，你应该已经有了 SOCKS5 代理以及 HTTP 代理的地址和端口。本小节描述如何单独为一些程序设置代理，但是需要提醒的是，这不是我们推荐的使用方式，如果你是 Linux 的日常重度使用者，你应该使用后续将会讲述的全局代理方式。

在节点链接后，你可在 KDE 的`系统设置` -> `网络设置` -> `代理`中设置代理。注意，`系统设置`中的代理配置在 KDE 桌面环境中并不是所有应用都会遵守，经过测试，chrome/chromium/brave 浏览器与 steam 等应用会遵循 KDE 的系统代理设置。没有遵循系统设置代理的应用还需要单独进行代理配置。下面说明几种常用的软件中单独配置代理的方式。

- Firefox 浏览器
  火狐浏览器自身的设置选项中存在代理配置，进行配置即可。

- 终端
  可以通过 export 命令设置当前终端的代理方式。比如使用 tldr 或 github raw 等资源需要设置 https 代理。

  ```bash
  export https_proxy=http://127.0.0.1:8889
  export http_proxy=http://127.0.0.1:8889
  export all_proxy=http://127.0.0.1:8889
  ```

  > 不同终端命令所识别的环境变量名不同，如 all_proxy 对 curl 生效，而对 wget 则不生效，具体可查看各个命令的 man page。

- code OSS
  File => Preference => Settings
  搜索 proxy，在其中填入 http 代理地址即可

- proxychains-ng
  如果对于一个应用，KDE 的全局代理不生效，在终端 export 了 ALL_PROXY 变量再用终端启动此应用代理也不生效，并且这个应用自身也没有配置代理的选项，此时可以尝试使用 proxychains-ng，它可以为单行命令配置代理。它是一个预加载的 hook，允许通过一个或多个 SOCKS 或 HTTP 代理重定向现有动态链接程序的 TCP 流量。

  ```bash
  sudo pacman -S proxychains-ng
  sudo vim /etc/proxychains.conf
  ```

  把配置文件中最后一行改为本地代理的 ip 和端口，如`socks5 127.0.0.1 1089`

  proxychains 不能够支持 yay 以及其他一些程序，详见[Incompatible with proxychains](https://github.com/Jguer/yay/issues/429)[proxychains4 with Go lang](https://github.com/rofl0r/proxychains-ng/issues/199)。这种情况可以使用透明代理。

## 4. 更加全面的系统级全局代理

由以上各部分可以看到，为各个软件单独设置代理是很麻烦的。如果你把 Linux 作为主力使用，那么配置透明代理也是必须的，如果你使用 V2rayA,那么可以很方便的在设置中开启全局代理。如果你的技术水平不高，建议你直接使用 V2rayA 的全局代理。如果你使用 Qv2ray，请阅读随后的[透明代理](https://archlinuxstudio.github.io/ArchLinuxTutorial/#/rookie/transparentProxy)一节。

对于全局代理的情况下，开启 UDP 支持，DNS 请求也将被拦截并导入 v2ray 中，更详细的描述将在下节进行。

## 5. 为什么不建议使用分流代理？分流代理可能存在什么危险？

分流代理在大多数场景下指的是：在访问国内资源时，使用直连的方式，而在访问国外被墙的资源时，使用代理进行连接。这种网络的使用方式确实会非常方便，但是存在显而易见的危险，然而大众几乎并没有意识到这里的问题。

使用分流代理的方式非常容易泄露你自身的隐私信息，包括但不限于 IP 地址，浏览器以及硬件指纹(几乎可以唯一标记你这一个用户的指纹)等等一系列信息，并且可以将你使用的代理 IP 与你自身的真实 IP 进行对应。

举例来说，一个最常见的例子就是某个国外的网站使用了百度统计脚本，这时你的代理 IP 与真实 IP 的对应信息可以轻松的被这样的网站进行对应，这是非常危险的。 另一个例子就是一些恶意的邮件，比如你在使用国外的邮箱服务，接收到了一个恶意邮件，这个邮件中嵌入了一些国内的资源如图片，那么你的真实 IP 等信息也可以被轻松获取。

真实的例子不止以上两个，还有很多类似的情况存在。我们一直为了大众的隐私与安全而战，希望今后你可以放弃使用分流代理的网络连接方式。

# 全局代理

全局代理，也即透明代理。本节所述为真正的，操作系统级别的代理，而不是仅仅针对浏览器中全部网址的"全局代理"。之所以叫做透明代理，是因为这种系统级别的代理对于操作系统中的各个应用相当于是透明的，应用们感知不到代理的存在。之所以叫做全局代理，很明显意为操作系统级别的、全局的代理。这两个词汇在中文环境中经常同时使用，并且全局代理一词容易引起混淆。

本节主体原文收集自 [Qv2ray 用户组](https://t.me/Qv2ray_chat)，并非原创。cgproxy 项目地址](https://github.com/springzfx/cgproxy)。

## [安装与设置](https://archlinuxstudio.github.io/ArchLinuxTutorial/#/rookie/transparentProxy?id=安装与设置)

1. 安装`cgproxy`软件。可直接在 [AUR](https://aur.archlinux.org/packages/cgproxy/) 上安装。由于中国大陆政府封锁 Github 的原因，你很可能没有办法用正常 yay 的方式通过 AUR 安装 cgproxy，所以 ArchLinuxStudio 提供一组可以直接安装的包以供你使用。

```bash
wget https://archlinuxstudio.github.io/ArchLinuxTutorial/res/cgproxy-0.19-1-x86_64.pkg.tar.zst
sudo pacman -U cgproxy-0.19-1-x86_64.pkg.tar.zst
```

> github.io 也被中国大陆政府封锁，只是封锁力度暂时还没有很大。如你在此过程中卡住，可以尝试 ctrl+c 终止命令后重新尝试下载，也可尝试更换手机热点的网络环境再次进行下载。当你配置好全局代理后，你将不再需要担心任何网络封锁问题。我们将持续为本书读者提供突破互联网审查的可靠流程。

1. 在 Qv2ray 的“首选项-入站设置”的下方启用任意门设置选项。

   - 监听 ipv4 地址可填`127.0.0.1` 或 `0.0.0.0`，建议前者。若需双栈代理，则在监听 ipv6 地址填上`::1`（如果监听 ipv4 填了 0.0.0.0 则可不填）。
   - 嗅探选择 Full，Destination Override 的三项均勾选。
   - 模式选择“tproxy”。

   如果是复杂配置，则需要手动添加相应的 dokodemo-door 入站。由于目前版本复杂配置并没有提供 tproxy 选项，因此 tproxy 模式需要通过编辑 json 来实现。

2. 配置`cgproxy`，编辑`/etc/cgproxy/config.json`：

   - **在`cgroup_proxy`中括号里加上"/"（包含引号）**，`port`改为 Qv2ray 首选项里的透明代理的端口。
   - `cgproxy`默认配置是代理所有 tcp 和 udp，ipv4 和 ipv6 的流量，如果不希望代理其中的某种（些）流量，则将对应的`enable_xxx`改为 false。注意这里的配置要和 Qv2ray 选项里的配置一致（如，Qv2ray 选项里没有勾选 udp，则这里务必把`enable_udp`改为 false）。
   - 如果希望当本机作为网关设备时为连接到本机网关的其他设备（如连接到本机开设的 wifi 热点的设备）也提供透明代理，则把`enable_gateway`改为 true。

3. （重要）透明代理的基本原理是拦截系统发出的所有流量，并将这些流量转到代理工具里，从而实现让系统所有流量都走代理的目的。此时，为了避免流量出现死循环（即代理工具发出的流量又转回到代理工具里），需要将代理工具排除在透明代理环境外面。有两种方式可以实现这一点：

   - 通过`execsnoop`监控代理工具的启动，并自动将其移至透明代理环境外面：

     - `cgproxy`软件自带`execsnoop`支持，以上`cgproxy`测试过的发行版均可支持。
     - 编辑`/etc/cgproxy/config.json`，在`program_noproxy`中括号里加上"v2ray","qv2ray"（包含引号和逗号），以使`qv2ray`和`v2ray`发出的流量不经过透明代理。如果你的`v2ray`或`qv2ray`不在`PATH`里，则需要填写它们的绝对路径。

   - 在每次连接代理节点时，让`qv2ray`自己把自己移到透明代理环境外面：

     - 安装 Qvplugin-Command 插件，在插件设置里的“pre-connection”栏里加上一句

       ```
       sh -c "cgnoproxy --pid $(pgrep -x qv2ray)"
       ```

       即可。

4. （重要）如果启用了 udp 的透明代理（dns 也是 udp），则给 v2ray 二进制文件加上相应的特权：

   ```
   sudo setcap "cap_net_admin,cap_net_bind_service=ep" /usr/bin/v2ray
   ```

   否则 udp 的透明代理可能会出问题。

   > 如果每次更新了 v2ray 二进制文件，都需要重新执行此命令。

5. 启动透明代理服务：`systemctl start cgproxy.service`或`systemctl enable --now cgproxy.service`。

以上步骤完成后，透明代理应该能正常使用了。

## [dns 配置说明](https://archlinuxstudio.github.io/ArchLinuxTutorial/#/rookie/transparentProxy?id=dns-配置说明)

如果勾选了“dns 拦截”，且启用了 dns 和 udp 的透明代理，则 v2ray 会拦截对系统 dns 的请求，并将其转发到 v2ray 的内置 dns 里，即让 v2ray 内置 dns 接管系统 dns。但 v2ray 内置 dns 是会遵循路由规则的。

如果没勾选“dns 拦截”，则 v2ray 虽然不会让内置 dns 接管系统 dns，但如果启用了 dns 和 udp 的透明代理，则系统 dns 也会走透明代理进 v2ray，并遵循 v2ray 的路由规则。

因此，在启用了 dns 和 udp 的透明代理时，若系统 dns 或 v2ray 的内置 dns 配置不当，可能导致 dns 请求发不出去，从而影响正常上网。

由于 qv2ray 常见的路由规则是绕过国内 ip，国外 ip 均走代理。在这个情形中，以下两个配置是典型的有问题的 dns 配置方式：

- 配置了国外普通 dns 作为首选，但代理本身不支持 udp（此时 dns 查询的 udp 流量出不去，dns 无法查询）
- 配置了使用域名的 doh 作为首选。此时 doh 的域名无法被解析，从而 doh 也无法使用。

一般而言，如果并不在意将 dns 查询发给谁，那么，在绕过国内 ip 的情况下，只需要配置一个国内普通 dns 作为首选即可保证不会出问题。若代理本身不支持 udp，又希望使用国外 dns，则可以考虑使用使用 ip 的 doh（如`https://1.1.1.1/dns-query`等）。

如果需要更复杂的 dns 配置，建议参考[上游文档](https://www.v2ray.com/chapter_02/04_dns.html)，并选择合适的不会影响正常上网的 dns 配置。

------

在显示的为 firefox 等应用设置代理时，因为这些应用程序知道代理的存在，所以不会发出 DNS 请求。而透明代理的情况下，各应用感知不到代理的存在，所以会发出自己的 dns 请求。

这时通过 cgproxy 可将全部 tcp/udp 的流量(包括 DNS 查询)转给 v2ray。由于这种情况下，一定会有 DNS 查询流量的产生，所以为了保证本机不发出任何 DNS 请求(这是为了隐私和安全)，需要进行以下设置。此时需要分两种情况讨论。

- 如果不进行任何 v2ray 的内置 DNS 设置以及 DNS 拦截，那么 DNS 流量会使用本机的 DNS 设置如 8.8.8.8 发出，这种情况不论如何配置 v2ray（全局或者分流），只要保证对于 8.8.8.8 的请求能够通过代理发出即可。

- 如果 v2ray 通过形如如下路由规则，拦截经由 dokodemo-door 接收到的 dns 流量到 dns outbounds，那么 v2ray 是可以导向 DNS 查询流量到"dns-out"的 out bound 的，也即 dns-outbound 进行的"拦截"和"重新转发"。

  ```json
  rules:
  {
  "inboundTag": [
  "tproxy-in-1",
  "tproxy-in-2"
  ],
  "outboundTag": "dns-out",
  "port": "53",
  "type": "field"
  },
  ```

  此时 dns outbound 应该调用内置 DNS 设置进行解析，假如 v2ray 内置 DNS 设置为 1.1.1.1,此时原有对于 8.8.8.8 的 DNS 请求就会转而向 1.1.1.1 请求(随后对 1.1.1.1 的请求还是会遵循你的路由规则的)，并将结果返回给应用端。你可以通过开启 qv2ray 更详细的日志级别进行验证。

如果只是为了阻止本机发 dns 请求，完全可以不使用 fakedns。fakedns 在透明代理的条件下确实可以减少一次 dns 请求，理论上确实会快一点。但是也在有的文章指出如果所有域名都伪造 dns 返回可能会有问题。

题外话：使用 clientIP 可解决使用代理服务器解析 DNS 若返回国外 CDN 的网址时网速慢的情况，但是前提是你信任代理服务器和 DNS 服务器接收你的本地 IP,为了你的安全，不建议使用。

## [常见问题](https://archlinuxstudio.github.io/ArchLinuxTutorial/#/rookie/transparentProxy?id=常见问题)

- 启用透明代理后无法访问任何外网，且 v2ray 的 cpu 占用率飙升

  可能是流量陷入死循环了，检查第 4 步有没有正确配置。如果配置没问题，执行`systemctl status cgproxy.service`看下有没有诸如`info: process noproxy pid msg: xxx`之类的输出。如果没有，则说明 cgproxy 软件或 execsnoop 没有正常工作。注意 cgproxy 软件需要 cgroup v2。

  尝试退出 qv2ray，随后在终端里执行`cgnoproxy qv2ray`看是否恢复正常，如恢复正常，说明 cgproxy 正常工作，只是 execsnoop 没有正常工作。由于 execsnoop 一定程度上依赖于内核，非上述 cgproxy 测试过的发行版用户，建议使用第 4 步中的第 2 种方法。另外，对 kde 用户，5.19+版的 plasma 会给从 krunner 里启动的程序额外设置 cgroup，尽管 cgproxy 软件考虑到了这一点，但仍有极少数场合可能出现 plasma 设置的 cgroup 覆盖掉了 cgproxy 设置的 cgroup 的情况，此时通常重启一下 qv2ray 即可。

- 启用透明代理后，无法访问（部分）域名

  可能是 dns 无法解析（部分）域名。一般这种故障只发生在启用了 dns 及 udp 透明代理的时候。

  终端里执行`dig 无法访问的域名`看下报什么错：

  - 若出现类似`reply from unexpected source: 192.168.0.100#42050, expected 8.8.8.8#53`的报错，则检查第 5 步的有没有正确配置。
  - 若出现类似`connection timed out; no servers could be reache`的报错，则说明 dns 查询的流量出不去，此时往往是系统 dns 或 v2ray 内置 dns 配置不当。请检查是否出现了前文提到的几种不当配置。如果没有勾选“dns 拦截”，则此时 v2ray 虽然不会用内置 dns 接管系统 dns，但它仍然会让系统 dns 走透明代理，从而遵循 v2ray 的路由规则，此时需要检查系统 dns 是否是前文提到的那几种不当配置。

- 能不能分应用代理（如，下载 BT 时不能走代理）

  对于本机的程序，可以，可通过两种方式实现：

  - 通过`cgnoproxy`实现：如，在命令行中执行`cgnoproxy qbittorrent`，启动的 qbittorrent 程序就不会走透明代理。又如，在命令行中执行`cgnoproxy --pid 12345`，执行之后 pid 为 12345 的程序就不再走透明代理。这种方式可支持任何应用。
  - 通过`/etc/cgproxy/config.json`实现：在配置里的`program_noproxy`中括号里加上相应的应用即可。这种方式只支持可执行文件，不支持各种脚本。如希望把 clash 与 kde connect 加入 noproxy 规则，则在把此字段补全成["v2ray", "qv2ray", "clash", "/usr/lib/kdeconnectd"]即可。注意修改`config.json`之后，需要重启 cgproxy 服务才能生效，执行`systemctl restart cgproxy.service`即可。

  对于当本机作为网关设备时为连接到本机网关的其他设备，不行，那些设备的所有流量（到本机的流量除外）都必然会走代理。

- 透明代理环境中响应速度变慢

  由于 iptables 是在域名解析成 ip 之后，才对相应的流量进行重定向。因此，在透明代理环境中，访问一个域名 s 可能会需要解析至少 2 次 dns（系统解析一次，重定向到 v2ray 之后 v2ray 分流模块再解析一次）。因此，响应理论上是会变慢一点的，变慢的幅度取决于系统 dns 及 v2ray 的 dns 的响应速度。

- 开启 UDP 支持后报错`too many open files`

  核心问题是，Linux 系统定义了一系列限制，其中一种限制是最大打开文件数，并且有软限制和硬限制，具体的限制结果可以通过`ulimit -Sa`和`ulimit -Ha`查看。一般来说 arch 默认的软限制 open files 的值为 1024，这个数值太小。硬限制的 open files 的值为 524288，这个数值够大了。打开网页过多，或者开启 udp 加速的时候，连接数（打开的文件数）很容易超过 1024 这个数，所以就被限制住了。解决办法很简单，只需要修改系统级别的关于这个限制的配置文件，在/etc/security/limits.conf 文件的最末尾，加上下面这行，然后重启即可：

  ```bash
  *   soft    nofile  8192  #不要落下了最前面的星号
  ```

- 使用 docker/libvirt 时与 cgproxy 不能正常使用。解决方法见[cgproxy issue3](https://github.com/springzfx/cgproxy/issues/3#issuecomment-637309706)

