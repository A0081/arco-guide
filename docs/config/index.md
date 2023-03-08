# 软件安装方式

> Manjaro推荐三种安装软件方式：pacman、yay、yaourt
>
> ```bash
> sudo pacman -S yay yaourt #pacman默认就有
> ```

安装.deb包与使用Appimage包

1. 安装.deb包

   1. 通过aur安装debtap 

      ```bash
      yay -S debtap
      ```

   2. 更新debtap数据库

      ```bash 
      sudo debtap -u
      ```
   3. 使用debtap转换deb包

      ```bash 
      debtap xxx.deb
      ```
   4. 安装

      ```bash
      sudo pacman -U xxx.pkg
      ```
2. Appimage包的使用

   给appimage执行权限，双击即可

