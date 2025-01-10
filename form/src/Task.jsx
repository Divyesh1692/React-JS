import React, { useState, useEffect } from "react";

const Task = () => {
  const [data, setData] = useState({
    task: "",
    date: "",
    isCompleted: false,
  });

  const [list, setList] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(list));
  }, [list]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (data.task && data.date) {
      if (isEditing) {
        setList((list) =>
          list.map((item) =>
            item.id === editId ? { ...item, ...data } : item
          )
        );
        setIsEditing(false);
        setEditId(null);
      } else {
        setList([...list, { ...data, id: Date.now() }]);
      }
      setData({ task: "", date: "", isCompleted: false });
    }
  };

  const toggleStatus = (id) => {
    setList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const removeTask = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const clearAllTasks = () => {
    setList([]);
  };

  const editTask = (id) => {
    const taskToEdit = list.find((item) => item.id === id);
    if (taskToEdit) {
      setData(taskToEdit);
      setIsEditing(true);
      setEditId(id);
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">
        {isEditing ? "Edit Task" : "Task Manager"}
      </h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="task"
          placeholder="Enter your task"
          value={data.task}
          onChange={handleInput}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="date"
          name="date"
          value={data.date}
          onChange={handleInput}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          {isEditing ? "Update Task" : "Add Task"}
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
            <div className="space-x-2">
              <button
                onClick={() => toggleStatus(id)}
                className={`py-1 px-3 rounded-lg ${
                  isCompleted
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                {isCompleted ? "Mark as Pending" : "Mark as Completed"}
              </button>
              <button
                onClick={() => editTask(id)}
                className="py-1 px-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => removeTask(id)}
                className="py-1 px-3 rounded-lg bg-gray-500 text-white hover:bg-gray-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      {list.length > 0 && (
        <button
          onClick={clearAllTasks}
          className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
        >
          Clear All Tasks
        </button>
      )}
    </div>
  );
};

export default Task;
