import React, { useState } from "react";
import { Link } from "react-router-dom";

const TaskTable = ({ tasks, deleteTask }) => {
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-6">
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-4 py-2 w-1/3 focus:ring-2 focus:ring-blue-400"
        />
        <span className="text-gray-600">{filteredTasks.length} tasks found</span>
      </div>

      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="py-3 px-4 border-b text-left font-semibold">Title</th>
            <th className="py-3 px-4 border-b text-left font-semibold">Priority</th>
            <th className="py-3 px-4 border-b text-left font-semibold">Status</th>
            <th className="py-3 px-4 border-b text-left font-semibold">Due Date</th>
            <th className="py-3 px-4 border-b text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-8 text-gray-500">
                No tasks found.
              </td>
            </tr>
          ) : (
            filteredTasks.map(task => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">{task.title}</td>
                <td className="py-3 px-4 border-b">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${task.priority === "High" ? "bg-red-100 text-red-700" :
                      task.priority === "Medium" ? "bg-yellow-100 text-yellow-700" :
                      "bg-green-100 text-green-700"}`}>
                    {task.priority}
                  </span>
                </td>
                <td className="py-3 px-4 border-b">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${task.status === "Done" ? "bg-green-100 text-green-700" :
                      task.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                      "bg-gray-100 text-gray-700"}`}>
                    {task.status}
                  </span>
                </td>
                <td className="py-3 px-4 border-b">{task.dueDate}</td>
                <td className="py-3 px-4 border-b space-x-2">
                  <Link
                    to={`/edit/${task.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
