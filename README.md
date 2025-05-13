# 🖥️ Feedback App Backend (Node.js + Express + MongoDB)

This is the backend API for the Feedback Submission App, built using **Node.js**, **Express**, and **MongoDB Atlas** with **Mongoose**.

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS, dotenv, nodemon
- Deployed on Render

---

## 📦 Local Development Setup

### 1️⃣ Clone the repository & navigate to backend
```bash
git clone https://github.com/gaurav09x/Feedback-app-Backend.git
cd feedback-app-Backend
```

### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Create .env file
```bash
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>.mongodb.net/<dbname>?retryWrites=true&w=majority
```
**Note:** Replace `<username>`, `<password>`, `<cluster-url>`, and `<dbname>` with your actual **MongoDB Atlas credentials** and **database name**.


### 4️⃣ Run the backend server
```bash
node server.js
```
