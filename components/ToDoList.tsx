"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
export default function ToDoList() {
  const [todos, setTodos] = useState<string[]>(() => {
    // load todos from local storage on initial render
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);
  // save todos to local storage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [todos]);
  // method to handle adding new todo
  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos((prevTodos) => [...prevTodos, newTodo.trim()]);
    setNewTodo("");
  };
  // method to handle deleting a todo
  const handleDeleteTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };
  return (
    <Card
      className="fixed bottom-16 right-4 shadow-lg border border-purple-600"
      style={{ width: "400px" }}
    >
      <CardHeader className="flex gap-3 justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="flex flex-col">
            <p className="text-md" style={{ fontSize: "30px" }}>
              To do list
            </p>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-auto max-h-80 z-50">
        <div className="flex flex-col gap-3 ">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex border justify-between items-center p-2 rounded-lg"
            >
              <span>{todo}</span>
              <Button
                size="sm"
                color="danger"
                onClick={() => handleDeleteTodo(index)}
                className="ml-2"
              >
                <AiOutlineDelete />
              </Button>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="pb-1 p-5">
        <div className="flex gap-2 w-full items-center">
          <textarea
            className="flex-grow border border-default-300 rounded-md p-2 text-sm focus:outline-none"
            placeholder="Add a new task"
            rows={1}
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button
            isIconOnly
            variant="shadow"
            color="primary"
            aria-label="Add todo"
            onClick={handleAddTodo}
          >
            <AiOutlinePlus />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
