#!/bin/sh

# General Settings
pnpm config set store-dir /home/node/.local/share/pnpm/store


## git
git config --global --add safe.directory /workspaces/nextjs-template
git config --global pull.rebase false
git pull

## Install dependencies
pnpm install

## create .env
cp ./frontend/.env.local.example ./frontend/.env.local
