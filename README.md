# 🎬 CineVerse - Movie Dashboard & Ticket Booking System
Deployed Website - https://cineverse-80x78yafq-amlanshankers-projects.vercel.app/
A modern movie dashboard application built using **React + Vite + Tailwind CSS** with an Express.js backend.  
The application demonstrates API integration using Axios, React Hooks (`useState`, `useEffect`), and form handling.

---

## 🚀 Features

- 🎥 Display movies dynamically from API
- 🔍 Search movies by title
- ⭐ View movie details:
  - Movie name
  - Genre
  - Rating
  - Duration
  - Ticket price
- 🎟️ Book movie tickets using a form
- 🔗 Axios API integration
- ⚡ React Hooks implementation
- 🎨 Responsive UI using Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- JavaScript (ES6)

### Backend

- Node.js
- Express.js
- REST API

---

# 📂 Project Structure

```
ScreenHive/

│
├── frontend/
│
│   ├── src/
│   │
│   ├── components/
│   │      ├── Navbar.jsx
│   │      ├── Hero.jsx
│   │      ├── SearchBar.jsx
│   │      ├── MovieCard.jsx
│   │      └── Booking.jsx
│   │
│   ├── services/
│   │      └── api.js
│   │
│   └── App.jsx
│
│
└── backend/

    ├── routes/
    │      ├── movies.js
    │      └── bookings.js
    │
    └── server.js
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone <repository-url>
```

---

# Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start server:

```bash
node server.js
```

Backend runs on:

```
http://localhost:3000
```

---

# Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React application:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔌 API Endpoints

## Get Movies

### Request

```
GET /movies
```

### Response

```json
[
  {
    "id":1,
    "title":"Avengers: Doomsday",
    "genre":"Action",
    "rating":4.8,
    "duration":"2h 35m",
    "price":250
  }
]
```

---

## Create Booking

### Request

```
POST /bookings
```

### Body

```json
{
  "customerName":"Amlan",
  "movieName":"Dune: Messiah",
  "tickets":2
}
```

### Response

```json
{
  "message":"Booking successful"
}
```

---

# ⚛️ React Concepts Used

## useState

Used for managing:

- Movie data
- Search input
- Booking form data
- Component state

Example:

```javascript
const [movies,setMovies] = useState([]);
```

---

## useEffect

Used for fetching movie data when the application loads.

Example:

```javascript
useEffect(()=>{
   fetchMovies();
},[]);
```

---

## Axios

Used for communicating with backend APIs.

Example:

```javascript
axios.get("/movies");
```

and

```javascript
axios.post("/bookings",data);
```

---

# 🔄 Application Flow

```
User Opens Website

        ↓

React loads components

        ↓

useEffect calls API

        ↓

Axios fetches movies

        ↓

Movie cards displayed

        ↓

User searches movie

        ↓

User fills booking form

        ↓

Axios sends booking request

        ↓

Express stores booking
```

---

# 🎨 UI Design

The interface is inspired by modern cinema platforms like Netflix and BookMyShow.

Features:

- Dark cinema theme
- Movie cards
- Hero banner
- Search functionality
- Responsive layout

---

# Author

**Amlan Shanker**
