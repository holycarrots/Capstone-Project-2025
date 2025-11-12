## Udyog Saarthi

An end-to-end web application with a React frontend and a Node.js/Express backend. The backend connects to MongoDB and integrates services such as Cloudinary and Razorpay.

## Team

- Annie Mary Joseph
- Jozach Rajan Samual
- Khushi Yadav

---

## Institution and Guidance

- **College**: Presidency University, Bangalore
- **Under the guidance of**: Dr. Sridevi S.
- **Research Paper**: See `docs/Research Paper.pdf`

---

## Project Structure

```
root/
├─ backend/
│  ├─ index.js
│  ├─ config/
│  │  ├─ database.js
│  │  └─ cloudinary.js
│  ├─ controllers/
│  ├─ middlewares/
│  ├─ models/
│  ├─ routes/
│  ├─ utils/
│  ├─ package.json
│  └─ .env (not committed)
├─ frontend/
│  ├─ index.js
│  ├─ App.js
│  ├─ App.css
│  ├─ components/
│  ├─ container/
│  ├─ api/
│  └─ public/
├─ docs/
│  ├─ CapstoneProject-Phase1.pdf
│  ├─ Research Paper.pdf
│  ├─ references/
│  └─ reports/
├─ package.json (frontend scripts)
├─ package-lock.json
├─ .env (not committed)
└─ README.md
```

---

## Requirements

- Node.js 16+
- MongoDB database

---

## Environment Variables

Create a `.env` file for the backend at `backend/.env` with at least the following keys:

- `PORT` (optional, default 5000)
- `MONGODB_URL`
- `CLOUD_NAME`
- `API_KEY`
- `API_SECRET`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`

If you use a root-level `.env` for frontend tooling, keep it outside version control.

---

## Installation

Run these from the repository root:

1. **Install frontend dependencies (root package.json):**
   ```bash
   npm install
   ```
2. **Install backend dependencies:**
   ```bash
   npm install --prefix backend
   ```

---

## Running Locally

- **Backend (Node/Express):**
  - Scripts defined in `backend/package.json`
  - Start in dev mode with nodemon:
    ```bash
    npm run dev --prefix backend
    ```
  - Or start normally:
    ```bash
    npm start --prefix backend
    ```
  - Default server URL: `http://localhost:5000`

- **Frontend (React):**
  - Scripts provided by root `package.json` using `react-scripts`
  - Start the dev server:
    ```bash
    npm start
    ```
  - Open `http://localhost:3000`

Note: The frontend code resides in `frontend/`. The root `package.json` contains the CRA scripts used to run and build the UI.

---

## Build

- **Frontend build** (from project root):
  ```bash
  npm run build
  ```
- **Backend** does not require a build step; it runs with Node.js.

---

## API Overview (Backend)

Base URL: `http://localhost:5000`

- **Health**
  - `GET /` → basic status JSON
- **Auth**
  - Mounted at ` /api/v1/auth`
- **Profile**
  - Mounted at ` /api/v1/profile`
- **Private Jobs**
  - Mounted at ` /api/v1`
- **Tests**
  - Mounted at ` /api/v1/test`
- **Payments (Razorpay)**
  - `POST /payment/checkout`
  - `POST /payment/payment-verification` (redirects to frontend on success/failure)

CORS is configured to allow `http://localhost:3000` with credentials.

---

## Documentation

Additional materials are in `docs/`, including reports and references.

---

## Notes

- Ensure your `.env` values are valid before starting the backend. MongoDB and third-party keys are required for full functionality.
=======
# Capstone-Project-2025
Udyog Saarthi is a mobile app tackling unemployment for persons with disabilities in India. It aggregates and simplifies job listings from the 4% reservation quota using web scraping. Features include an AI chatbot, mock interviews, and accessibility tools for users and their caregivers to foster economic independence.
