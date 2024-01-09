# 使用Debian作为基础镜像
FROM debian:latest

# 更新系统并安装必要的包
RUN apt-get update && apt-get upgrade -y

# 安装必要的工具
RUN apt-get install -y apt-transport-https lsb-release ca-certificates wget

# 添加Ondřej Surý的仓库
RUN wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
RUN echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/php.list

# 更新软件包列表
RUN apt-get update

# 安装PHP、SQLite、GD库、mbstring和curl扩展
RUN apt-get install -y php7.2 php7.2-sqlite3 sqlite3 php7.2-gd php7.2-mbstring php7.2-curl

# 检查PHP和SQLite版本
RUN php -v && sqlite3 --version

# 设置工作目录
WORKDIR /var/www/html

# 将你的项目文件添加到镜像中
COPY . /var/www/html

# 暴露端口
EXPOSE 80

# 启动PHP内置服务器
CMD ["php", "-S", "0.0.0.0:80"]
