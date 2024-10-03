"use client";
import { useState } from "react";
import { title } from "@/components/primitives";
import { FaPaperPlane, FaMicrophone } from "react-icons/fa";
import ToDoList from "@/components/ToDoList";

export default function ProfilePage() {
  // state for todo management
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // method for adding a new todo
  const addTodo = () => {
    if (newTodo) {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo("");
    }
  };

  // method for deleting a todo
  const deleteTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div
      className="w-4/5 mx-auto border rounded-md shadow-md p-6 flex flex-col items-center"
      style={{ width: "100%" }}
    >
      {/* Title */}
      <h1 className={title({ color: "violet" })} style={{ fontSize: "2rem" }}>
        Profile
      </h1>

      {/* User Information */}
      <div className="mt-6 flex flex-col items-center">
        <img
          src="https://imgs.search.brave.com/NBYeMgX-LhU9ZD1J9eoctd-TMJsQE_rA6Q9NWN2vWvc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMzAx/Mzk3NTIyL3N0b2Nr/LXBob3RvLWhhcHB5/LWZhcm1lci1ob2xk/aW5nLWJveC12ZWdl/dGFibGVzLWNvcm4t/ZmllbGQ"
          alt="User Image"
          style={{ width: "300px", height: "300px" }}
          className="rounded-full mb-4"
        />
        <div className="text-center">
          <h2 className="text-xl font-semibold my-4">
            Profile Overview of MD Saymum Islam Siyam
          </h2>
          <p className="text-lg">Email: si31siyam@gmail.com</p>
          <p className="text-lg">Address: 123 Street Lalmonirhat</p>
          <p className="text-lg">Phone: +1234567890</p>
        </div>
      </div>

      {/* Todo List Button */}
      <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="mt-6 bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 focus:outline-none"
        style={{ fontSize: "1.2rem" }}
      >
        Todo List
      </button>

      {/* Todo Modal */}
      {isModalOpen && <ToDoList />}
    </div>
  );
}
