"use client";

import { useState } from "react";
import * as botones from "./components/tools";

let id = 0;
let asc = false;
export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  // tasks: array of objects { id, text, done }
  const eliminarTarea = (id) => {
    setTasks((prev) => prev.filter(t => t.id !== id));
  };

  const addButtonHandler = () => {
    const text = currentTask.trim();
    if (text === "") return;
    for (const task of tasks) if(task.text === text) return;
    setTasks([...tasks, { id : id++, text}]);
    setCurrentTask("");
  };

  const ordenar = () => {
    setTasks((prev) => [...prev].sort((a, b) => asc ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)));
    asc = !asc;
  };

  const nukear = () => {
    setTasks([]);
  };

  return (
    <section className="bg-red-100 p-4 min-h-screen">
      <div className="my-2 flex gap-2">
        <input
          className="bg-gray-100 border border-red-400 rounded-lg p-2 text-red-700 flex-1 text-[30px]"
          type="text"
          value={currentTask}
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }}
        />

        <button className="bg-red-500 text-white rounded-lg px-4 py-2" onClick={addButtonHandler}>
          Agregar
        </button>

        <button className="bg-red-500 text-white rounded-lg px-4 py-2" onClick={ordenar}>
          Ordenar
        </button>

        <button className="bg-red-500 text-white rounded-lg px-4 py-2" onClick={nukear}>
          Nukear
        </button>

      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <botones.default
            key={task.id}
            id={task.id}
            task={task.text}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </section>
  );
}