import React, { useState } from "react";

const Task = () => {
  const [data, setData] = useState({
    task: "",
    date: "",
    isCompleted: false,
  });

  const [list, setList] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setList([...list, { ...data, id: Date.now() }]);
    setData({ task: "", date: "", isCompleted: false }); // Clear the form after submission
  };

  const toggleStatus = (id) => {
    setList((List) =>
      List.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500"
          type="text"
          name="task"
          placeholder="Enter your task"
          value={data.task}
          onChange={handleInput}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500"
          type="date"
          name="date"
          value={data.date}
          onChange={handleInput}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </form>

      <hr className="my-6" />
      <ul className="space-y-4">
        {list.map(({ task, date, isCompleted, id }) => (
          <li
            key={id}
            className={`flex justify-between items-center p-4 rounded-lg shadow ${
              isCompleted ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <div>
              <h2 className="font-semibold">{task}</h2>
              <p className="text-sm text-gray-600">Due: {date}</p>
            </div>
            <button
              onClick={() => toggleStatus(id)}
              className={`py-1 px-3 rounded-lg ${
                isCompleted
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
              {isCompleted ? "Completed" : "Pending"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
