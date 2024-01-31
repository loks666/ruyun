# 使用Alpine Linux作为基础镜像
FROM alpine:latest

# 安装必要的工具和PHP扩展
RUN apk update && apk upgrade && \
    apk add --no-cache php7 php7-fpm php7-opcache php7-gd php7-mysqli php7-zlib php7-curl \
    php7-mbstring php7-json php7-session curl wget ca-certificates

# 设置工作目录
WORKDIR /var/www/html

# 将你的项目文件添加到镜像中
COPY . /var/www/html

# 暴露端口
EXPOSE 80

# 启动PHP内置服务器
CMD ["php", "-S", "0.0.0.0:80"]
