import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

const EditTask = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const taskToEdit = tasks.find(task => task.id === id);

  const handleSubmit = (data) => {
    const updated = tasks.map(task => task.id === id ? { ...data, id } : task);
    setTasks(updated);
    navigate("/");
  };

  return <TaskForm onSubmit={handleSubmit} initialData={taskToEdit} />;
};

export default EditTask;
