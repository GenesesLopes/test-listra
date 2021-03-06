FROM php:8.0-fpm

## Instalação de composer
COPY --from=composer:2.1.3 /usr/bin/composer /usr/bin/composer

## Instalação de programas auxiliares
RUN apt-get update && \
    apt-get install -y \
    zip \
    libzip-dev \
    unzip \
    wget \
    git \
    nano \
    python3 \
    $PHPIZE_DEPS

## Instalando pacotes php
RUN docker-php-ext-install pdo pdo_mysql mysqli exif zip bcmath && \
    pecl install redis && docker-php-ext-enable redis

##Istalação do node
COPY --from=node:lts /usr/local/lib/. /usr/local/lib/.
COPY --from=node:lts /usr/local/bin/node /usr/local/bin/node

RUN ln -s /usr/local/bin/node /usr/local/bin/nodejs && \
    ln -s ../lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm && \
    ln -s ../lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx

RUN npm install yarn -g

## Instalando Dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

## Escondendo versão do php
RUN sed -i "s/expose_php = On/expose_php = Off/g" /usr/local/etc/php/php.ini-development  > /usr/local/etc/php/php.ini

WORKDIR /var/www

RUN npm config set cache /var/www/.npm-cache --global

RUN rm -rf /var/www/html && \
    usermod -u 1000 www-data && \
    chown www-data:www-data -R /var/www

USER www-data

RUN composer config -g cache-dir "/var/www/.composer/cache" && \
    composer config -g data-dir "/var/www/.composer"

RUN yarn config set cache-folder /var/www/.cache/yarn/v6

EXPOSE 9000 8080