import React from "react";
import useForm from "../hooks/useForm";

const validate = (fieldValues) => {
  let temp = {};
  if ("title" in fieldValues)
    temp.title = fieldValues.title ? "" : "Title is required.";
  return temp;
};

const TaskForm = ({ onSubmit, initialData }) => {
  const { values, errors, handleChange } = useForm(initialData, true, validate);

  const handleSubmit = e => {
    e.preventDefault();
    if (validate(values).title === "") {
      onSubmit(values);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Task Form</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter task title"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Description</label>
        <textarea
          name="description"
          value={values.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter task description"
          rows="4"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200 shadow-md"
      >
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
