#!/bin/bash

## Frontend

cd frontend
yarn

if [ ! -d "dist" ]; then
    yarn build
fi

## Backend
cd ../backend

if [ ! -f ".env" ]; then
    cp .env.example .env
fi

composer install

php-fpm