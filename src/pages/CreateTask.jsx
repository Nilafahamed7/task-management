import React from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks }) => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    const newTask = { ...data, id: uuidv4() };
    setTasks([...tasks, newTask]);
    navigate("/");
  };

  const initialData = {
    title: "",
    description: "",
    priority: "Low",
    status: "To Do",
    dueDate: "",
  };

  return <TaskForm onSubmit={handleSubmit} initialData={initialData} />;
};

export default CreateTask;
