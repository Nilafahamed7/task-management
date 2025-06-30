import React from "react";
import TaskTable from "../components/TaskTable";

const Home = ({ tasks, setTasks }) => {
  const deleteTask = (id) => {
    const updated = tasks.filter(task => task.id !== id);
    setTasks(updated);
  };

  return (
    <main className="px-6 py-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Tasks</h2>
      <TaskTable tasks={tasks} deleteTask={deleteTask} />
    </main>
  );
};

export default Home;
