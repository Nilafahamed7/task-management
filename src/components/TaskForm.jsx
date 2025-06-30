import React from "react";
import useForm from "../hooks/useForm";

const validate = (fieldValues) => {
  let temp = {};
  if ("title" in fieldValues)
    temp.title = fieldValues.title ? "" : "Title is required.";
  if ("dueDate" in fieldValues)
    temp.dueDate = fieldValues.dueDate ? "" : "Due date is required.";
  return temp;
};

const TaskForm = ({ onSubmit, initialData }) => {
  const { values, errors, handleChange } = useForm(initialData, true, validate);

  const handleSubmit = e => {
    e.preventDefault();
    if (validate(values).title === "" && validate(values).dueDate === "") {
      onSubmit(values);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6 max-w-lg mx-auto mt-10">
      <h2 className="text-xl font-bold mb-6 text-center">Task Form</h2>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Title</label>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-blue-400"
          placeholder="Task title"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Description</label>
        <textarea
          name="description"
          value={values.description}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-blue-400"
          placeholder="Task description"
          rows="3"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={values.dueDate}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-blue-400"
        />
        {errors.dueDate && <p className="text-red-500 text-sm mt-1">{errors.dueDate}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Priority</label>
        <select
          name="priority"
          value={values.priority}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-blue-400"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold">Status</label>
        <select
          name="status"
          value={values.status}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-blue-400"
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
      </div>

      <button type="submit" className="w-full bg-green-600 hover:bg-blue-700 text-white py-2 rounded shadow">
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
