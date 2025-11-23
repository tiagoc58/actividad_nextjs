import { useState } from "react";

export default function Tarea({ task, id, eliminarTarea }) {

    const [done, setDone] = useState(false);

    const handleClick = () => {
        if (done) eliminarTarea(id);
        else setDone(true);
    };

    return (
        <button onClick={handleClick} className={"bg-red-500 text-[30px] w-2xl place-self-center rounded-3xl" + (done ? ' line-through' : '')}>
        {task}
        </button>
    );
}
