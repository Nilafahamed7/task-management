import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route path="/create" element={<CreateTask tasks={tasks} setTasks={setTasks} />} />
        <Route path="/edit/:id" element={<EditTask tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </Router>
  );
};

export default App;

