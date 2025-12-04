"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Task = {
  id: number;
  name: string;
  type: string;
  status: string;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Omit<Task, "id">) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, updatedTask: Omit<Task, "id">) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within TaskProvider");
  return context;
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("tasks");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Omit<Task, "id">) => {
    setTasks((prev) => [...prev, { id: Date.now(), ...task }]);
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const editTask = (id: number, updatedTask: Omit<Task, "id">) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { id, ...updatedTask } : t)));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};
