# KDE

KDE 是 Linux 中最受欢迎的桌面环境之一，提供了丰富的功能和可自定义的外观。它是一个高度可配置的桌面环境，可以适应各种使用情况。安装 KDE 可以使用各个主流发行版的包管理器，如 apt-get、dnf、pacman 等。在安装完成后，您可以使用 KDE System Settings 对其进行优化和美化。

## 截图

![kde](/kde.png)

## 安装

```bash
sudo pacman -Syu #更新系统
sudo pacman -S plasma kde-applications #安装 KDE 这将安装 KDE Plasma 桌面环境和一些常用的 KDE 应用程序如果您只想安装 Plasma 桌面环境，可以运行以下命令：
sudo pacman -S plasma-desktop
# 安装显示管理器：KDE 使用显示管理器来处理登录和会话管理。您可以选择安装其中一个显示管理器（例如，SDDM、LightDM 或 GDM），也可以手动启动 KDE
sudo pacman -S sddm
sudo systemctl enable sddm.service #SDDM

sudo pacman -S lightdm lightdm-gtk-greeter
sudo systemctl enable lightdm.service #LightDM

sudo pacman -S gdm
sudo systemctl enable gdm.service #GDM
```



## 相关网站

| KDE 官方网站     | https://kde.org/         |
| ---------------- | ------------------------ |
| KDE Store        | https://store.kde.org/   |
| KDE 论坛         | https://forum.kde.org/   |
| KDE 开发者网站   | https://develop.kde.org/ |
| KDE 应用程序目录 | https://apps.kde.org/    |
| KDE 教育项目网站 | https://edu.kde.org/     |

