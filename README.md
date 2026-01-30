# JS_Tech Business Solutions (Earningsharthi)

Professional digital marketing and web development agency website built with React, Tailwind CSS, and Vite.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kamleshsuthar3344/JSTech.git
   ```
2. Navigate to the project directory:
   ```bash
   cd JSTech
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:
```bash
npm run dev
```

> **Note:** If you see an error about `running scripts is disabled` in PowerShell, run the following command to allow script execution for your user:
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
> ```
> Alternatively, you can run the command like this:
> ```bash
> npx vite
> ```

### Building for Production

To create a production build:
```bash
npm run build
```

The output will be in the `dist` folder.

## 🛠️ Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS + Lucide Icons
- **Routing:** React Router DOM
- **SEO:** React Helmet Async
- **Deployment:** Vercel (Configured with `vercel.json`)

## 📂 Project Structure

- `/src/components`: Reusable UI components (Navbar, Footer, Buttons, etc.)
- `/src/pages`: Main page views (Home, About, Services, etc.)
- `/public`: Static assets (images, robots.txt, sitemap.xml)

## 📝 Troubleshooting

**Error:** `npm.ps1 cannot be loaded because running scripts is disabled`

**Solution:**
This is a Windows security feature. To fix it:
1. Open PowerShell as Administrator (optional, but recommended if changing system-wide).
2. Run: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`
3. Press `Y` to confirm.
