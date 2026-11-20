# Meetly – Virtual Meeting Web App

Meetly is a full-stack virtual meeting application built using the MERN stack. It allows users to create meeting rooms, join existing meetings using a unique meeting code, and communicate through an online meeting interface.

## 🚀 Features

- **User Authentication:** Register and log in securely.
- **Create Meetings:** Generate unique meeting IDs for instant meetings.
- **Join Meetings:** Join existing meeting rooms using a meeting code.
- **Meeting Dashboard:** Access meeting options through a centralized dashboard.
- **Real-Time Communication:** Socket.IO integration for real-time communication.
- **Responsive UI:** User-friendly interface for different screen sizes.
- **MongoDB Integration:** Store user and meeting information in MongoDB.

## 🛠️ Tech Stack

**Frontend**
- React.js
- Vite
- JavaScript
- Tailwind CSS
- Axios
- React Router DOM
- Lucide React

**Backend**
- Node.js
- Express.js
- Socket.IO
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt.js

**Deployment**
- Render
- MongoDB Atlas

## 📂 Project Structure

```text
Virtual Meeting/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── package.json
│   └── .env
│
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Deep-Lakshmi/virtual-meeting-web.git
```

### 2. Navigate to the Project

```bash
cd virtual-meeting-web
```

### 3. Install Dependencies

Install root dependencies:

```bash
npm install
```

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=8000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:8000
VITE_SOCKET_URL=http://localhost:8000
```

Replace the placeholder values with your actual configuration. Never commit your `.env` files or database credentials.

### 5. Run the Application

From the project root directory:

```bash
npm run dev
```

The application will run at:

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:8000

## 🌐 Live Deployment

**Backend:**  
https://meetly-backend-aolk.onrender.com

**Frontend:**  
Add your deployed frontend URL here.

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/users/register` | Register a new user |
| POST | `/api/v1/users/login` | User login |
| POST | `/api/v1/meetings` | Create a meeting |
| GET | `/api/v1/meetings` | Fetch meetings |

## 🔄 Application Workflow

1. Register or log in to your account.
2. Access the meeting dashboard.
3. Create a new meeting to generate a unique meeting ID.
4. Share the meeting ID with other participants.
5. Participants can enter the meeting ID to access the room.

## 🔮 Future Enhancements

- Improve real-time video and audio communication.
- Add meeting participant management.
- Implement screen sharing.
- Add meeting history.
- Improve meeting security and access controls.

## 👩‍💻 Developer

**Deep Lakshmi Kumari**

B.Tech Computer Science and Engineering

GitHub: https://github.com/Deep-Lakshmi/virtual-meeting-web
Live : https://virtual-meeting-web.onrender.com

---

⭐ If you find this project interesting, feel free to explore the repository and share your feedback!