## 1.确保系统为最新

如果你在做完上一节的内容后，重启并放置过一段时间，那需要先按照上节末尾处的方式重新连接网络，然后更新系统。

```bash
pacman -Syyu    #升级系统中全部包
```

## 2.准备非 root 用户

添加用户，比如新增加的用户叫 testuser

```bash
useradd -m -G wheel -s /bin/bash testuser  #wheel附加组可sudo，以root用户执行命令 -m同时创建用户家目录
```

设置新用户 testuser 的密码

```bash
passwd testuser
```

编辑 sudoers 配置文件

```bash
EDITOR=vim visudo  # 需要以 root 用户运行 visudo 命令
```

找到下面这样的一行，把前面的注释符号 `#` 去掉，`:wq` 保存并退出即可。

```sudoers
#%wheel ALL=(ALL) ALL
```

这里稍微解释一下 %wheel 代表是 wheel 组，百分号是前缀 ALL= 代表在所有主机上都生效(如果把同样的`sudoers`文件下发到了多个主机上) (ALL) 代表可以成为任意目标用户 ALL 代表可以执行任意命令 一个更详细的例子:

```sudoers
%mailadmin   snow,rain=(root) /usr/sbin/postfix, /usr/sbin/postsuper, /usr/bin/doveadm
nobody       ALL=(root) NOPASSWD: /usr/sbin/rndc reload
```

组 mailadmin 可以作为 root 用户，执行一些邮件服务器控制命令。可以在 "snow" 和 "rain"这两台主机上执行 用户 nobody 可以以 root 用户执行`rndc reload`命令。可以在所有主机上执行。同时可以不输入密码。(正常来说 sudo 都是要求输入调用方的密码的)

## 3.安装桌面环境

这里参考桌面介绍篇