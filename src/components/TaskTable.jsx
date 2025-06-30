import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Search from "./Search";

const TaskTable = ({ tasks, deleteTask }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <Search setSearchTerm={setSearchTerm} />
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Description</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTasks.map(task => (
              <tr key={task.id} className="border-t">
                <td className="py-2 px-4">{task.title}</td>
                <td className="py-2 px-4">{task.description}</td>
                <td className="py-2 px-4">
                  <Link to={`/edit/${task.id}`} className="text-blue-600 hover:underline mr-2">Edit</Link>
                  <button onClick={() => deleteTask(task.id)} className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={filteredTasks.length}
        itemsPerPage={tasksPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TaskTable;
