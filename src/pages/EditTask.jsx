import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

const EditTask = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find(t => t.id === parseInt(id));

  const handleEdit = data => {
    const updatedTasks = tasks.map(t =>
      t.id === task.id ? { ...t, ...data } : t
    );
    setTasks(updatedTasks);
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {task ? (
        <TaskForm onSubmit={handleEdit} initialData={task} />
      ) : (
        <p className="text-red-500">Task not found.</p>
      )}
    </div>
  );
};

export default EditTask;
