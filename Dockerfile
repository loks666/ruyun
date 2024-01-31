# 使用Debian Buster作为基础镜像
FROM debian:buster

# 更新系统并安装必要的包
RUN apt-get update && apt-get upgrade -y

# 安装必要的工具
RUN apt-get install -y --no-install-recommends apt-transport-https lsb-release ca-certificates wget gnupg2 software-properties-common

# 添加Ondřej Surý的仓库
RUN wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
RUN echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/php.list

# 更新软件包列表
RUN apt-get update

# 安装PHP、SQLite、GD库、mbstring、curl和mysqli扩展
RUN apt-get install -y --no-install-recommends php7.4 php7.4-gd php7.4-mbstring php7.4-curl php7.4-mysqli

# 清理缓存
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# 检查PHP和SQLite版本
RUN php -v

# 设置工作目录
WORKDIR /var/www/html

# 将你的项目文件添加到镜像中
COPY . /var/www/html

# 暴露端口
EXPOSE 80

# 启动PHP内置服务器
CMD ["php", "-S", "0.0.0.0:80"]
