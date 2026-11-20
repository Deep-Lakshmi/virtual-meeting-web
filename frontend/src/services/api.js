import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || "http://localhost:8000"}/api/v1`,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("meetly_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export async function loginUser(payload) {
  const { data } = await api.post("/users/login", payload);
  return data;
}

export async function registerUser(payload) {
  const { data } = await api.post("/users/register", payload);
  return data;
}

export async function getMeetings() {
  const { data } = await api.get("/meetings");
  return data;
}

export async function createMeeting(payload = {}) {
  const { data } = await api.post("/meetings", payload);
  return data;
}

export default api;
