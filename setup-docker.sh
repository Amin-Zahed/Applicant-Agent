#!/bin/bash
set -e

echo "🚀 شروع نصب Docker و Compose..."

# 1️⃣ حذف نسخه‌های قدیمی Docker (در صورت وجود)
sudo apt remove -y docker docker-engine docker.io containerd runc || true

# 2️⃣ نصب پیش‌نیازها
sudo apt update
sudo apt install -y ca-certificates curl gnupg lsb-release

# 3️⃣ اضافه کردن کلید GPG رسمی Docker
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# 4️⃣ اضافه کردن ریپازیتوری Docker
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 5️⃣ نصب Docker Engine و Compose plugin
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 6️⃣ اضافه کردن کاربر فعلی به گروه docker برای اجرا بدون sudo
sudo usermod -aG docker $USER

# 7️⃣ بررسی نسخه‌ها
echo "✅ Docker و Compose نصب شدند:"
docker --version
docker compose version

echo "💡 لطفاً یکبار سیستم را logout و login کنید یا دستور 'newgrp docker' را اجرا کنید تا بدون sudo بتوانید Docker را اجرا کنید."
echo "🎉 حالا می‌توانید 'docker compose up' را در پروژه‌تان اجرا کنید."
