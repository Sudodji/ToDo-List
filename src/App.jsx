import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import TodoList from "./Todo/TodoList";
import LoginPage from "./auth/LoginPage";
import Profile from "./Profile/Profile";

let token = localStorage.getItem("token");

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/todo");
    } else navigate("/login");
  }, [token]);

  return (
    <div className="wrapper">
      <h1>TodoList</h1>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
