import React from "react";
import { Link } from "react-router-dom";
import TaskTable from "../components/TaskTable";

const Home = ({ tasks, setTasks }) => {
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Task Management</h1>
      <div className="flex justify-end mb-4">
        <Link to="/create" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded shadow">
          + Create Task
        </Link>
      </div>
      <TaskTable tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default Home;
