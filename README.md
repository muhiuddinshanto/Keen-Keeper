# Keen Keeper - Friendship Analytics Dashboard

## Description

Keen Keeper is a **Next.js-based client-side analytics dashboard** that visualizes user interaction data (Text, Call, and Video) using a Pie Chart. The data is stored in `sessionStorage` and dynamically processed to display friendship interaction insights in a clean and interactive UI.

🔗 **Live Link:** [https://keen-keeper-blond.vercel.app/](https://keen-keeper-blond.vercel.app/)
📦 **GitHub Repository:** [https://github.com/mohiuddinshanto/Keen-Keeper](https://github.com/mohiuddinshanto/Keen-Keeper)
🛠️ **Technology Stack:** Next.js, React, Recharts, SessionStorage, Tailwind CSS

---

## Overview

Keen Keeper is a modern analytics dashboard built with **Next.js (Client Components)**. It reads interaction data from the browser’s sessionStorage and visualizes it using a responsive and animated pie chart.

The main goal of this project is to analyze communication patterns such as:

* Text interactions
* Call interactions
* Video interactions

---

## Screenshot

```md
![Keen Keeper Screenshot](./screenshots/stats-page.png)
```

---

## Main Technologies Used

* Next.js (App Router / Client Components)
* React JS
* Recharts (PieChart, ResponsiveContainer, Tooltip, Legend)
* SessionStorage (Browser Storage API)
* Tailwind CSS

---

## Features

* 📊 Interactive Pie Chart visualization using Recharts
* ⚡ Built with Next.js Client Component architecture
* 📱 Fully responsive design for all devices
* 💾 SessionStorage-based data persistence
* 📈 Dynamic calculation of interaction types
* 🎨 Clean and modern UI design
* 🚀 Fast performance with optimized React rendering

---

## Dependencies

```md
next
react
react-dom
recharts
tailwindcss
```

---

## How Data Works

The chart is generated from sessionStorage data:

```js
const lodedData = JSON.parse(sessionStorage.getItem('interaction')) || [];
```

Data is categorized into:

* Text
* Call
* Video

Each category is counted and passed into the PieChart for visualization.

---

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/mohiuddinshanto/Keen-Keeper.git
```

### 2. Navigate to project folder

```bash
cd Keen-Keeper
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run development server

```bash
npm run dev
```

### 5. Open in browser

```text
http://localhost:3000
```

---

## Relevant Links

* 🌐 Live Site: [https://keen-keeper-blond.vercel.app/](https://keen-keeper-blond.vercel.app/)
* 📦 GitHub Repository: [https://github.com/mohiuddinshanto/Keen-Keeper](https://github.com/mohiuddinshanto/Keen-Keeper)
* 📊 Recharts Documentation: [https://recharts.org](https://recharts.org)
* ⚡ Next.js Documentation: [https://nextjs.org/docs](https://nextjs.org/docs)

---

## Author

**Mohiuddin**
GitHub: [https://github.com/mohiuddinshanto](https://github.com/mohiuddinshanto)
