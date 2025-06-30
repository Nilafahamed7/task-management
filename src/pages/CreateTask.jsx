import React from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

const CreateTask = ({ tasks, setTasks }) => {
  const navigate = useNavigate();

  const handleCreate = data => {
    const newTask = { id: Date.now(), ...data };
    setTasks([...tasks, newTask]);
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <TaskForm onSubmit={handleCreate} initialData={{ title: "", description: "" }} />
    </div>
  );
};

export default CreateTask;
