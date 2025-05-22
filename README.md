# 🍔 Laziza Food - Restaurant Order Management System

<p align="center">
  <img src="preview.jpg" alt="System Preview" width="800">
  <br>
  <em>Web-based solution for efficient table order management in restaurants</em>
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## 🌟 Table of Contents
- [Key Features](#-key-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Running Tests](#-running-tests)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Support](#-support)

---

## 🚀 Key Features

- **Table-Centric Interface**
  - 📟 Simple table number selection (1–20)
  - 📱 Mobile-friendly ordering interface
- **Order Management**
  - 🛒 Real-time cart updates
  - 📝 Special instructions per item
  - 💳 Multiple payment options
- **Staff Features**
  - 👩🍳 Kitchen display system
  - 📊 Sales analytics dashboard
  - 📈 Inventory management
- **Customer Experience**
  - 🖥️ Digital menu with categories
  - ⏱️ Order status tracking
  - 📲 Responsive design

---

## 🎥 Demo

- 🌐 [Live Preview](https://www.bootstrapdash.com/demo/corona-free/jquery/template/index.html)
- 📺 [Video Walkthrough](https://example.com/demo-video)

---

## 💻 Tech Stack

**Frontend**
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-4.5+-563D7C?logo=bootstrap)
- ![Vue.js](https://img.shields.io/badge/Vue.js-3+-42b883?logo=vue.js)

**Backend**
- ![Laravel](https://img.shields.io/badge/Laravel-9+-FF2D20?logo=laravel)

**Database**
- ![MySQL](https://img.shields.io/badge/MySQL-8.0+-4479A1?logo=mysql)

**Dev Tools**
- ![Gulp](https://img.shields.io/badge/Gulp-CF4647?logo=gulp)
- ![Chart.js](https://img.shields.io/badge/Chart.js-2.9+-FF6384?logo=chart.js)

---

## 📦 Installation

### Prerequisites

- PHP 8.0+ (Laravel 12+ compatible)
- Composer
- MySQL 8.0+
- Vue.js 3+
- Node.js v14+
- npm v6+

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/hussnain-143/laziza_food
# 2. Navigate into the directory
cd laziza_food/front_end|back_end/laziza_food

# 3. Install PHP dependencies
composer install

# 4. Copy .env file and set your environment credentials
cp .env.example .env

# 5. Generate application key
php artisan key:generate

# 6. Run database migrations
php artisan migrate

# 7. Install Node dependencies
npm install

# 8. Compile assets
npm run dev

# 9. Start Laravel server
php artisan serve