import React, { useState } from "react";
import { Button, Checkbox } from "@material-tailwind/react";
import { AiOutlineDelete } from "react-icons/ai";
type TodoTask = string;

const App = () => {
  const [task, setTask] = useState<TodoTask>("");
  const [storedTask, setStoredTask] = useState<TodoTask[]>(
    JSON.parse(localStorage.getItem("tasks") || '[]')
  );

  const [check, setCheck] = useState<number[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  // console.log("storedtask", storedTask);

  const handleSubmit = () => {
    const updatedTasks = [...storedTask, task];
    setStoredTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTask("");
  };

  const handleCheckboxChange = (index: number) => {
    if (check.includes(index)) {
      console.log("remove line", index);
      setCheck(check.filter((checkedIndex) => checkedIndex !== index));
    } else {
      console.log("added line", index);
      setCheck([...check, index]);
    }
  };
  const handleDelete = (index: number) => {
    const updatedTasks = storedTask.filter((_, ind: number) => ind !== index);
    setStoredTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <section className="h-screen w-full bg-shine grid place-items-center ">
      <div className="w-full cu500:w-[500px] h-[550px] bg-[#0c0c16] p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <h1 className="text-center my-4 font-bold text-white text-2xl">
          Get things Done !
        </h1>
        <div className="my-2 border-2 border-teal-500 flex justify-between">
          <input
            type="text"
            className="bg-transparent placeholder:text-teal-500 w-[70%]  text-white focus:outline-none p-2 capitalize"
            placeholder="Add your task.....?"
            value={task}
            onChange={handleChange}
          />
          <Button
            placeholder={""}
            color="teal"
            className=" rounded-none"
            type="submit"
            onClick={handleSubmit}
          >
            ADD&nbsp;Task
          </Button>
        </div>

        <div
          className={`mt-4  h-[390px] ${
            storedTask.length > 5 ? "overflow-y-scroll" : ""
          }  `}
        >
          {storedTask.map((val: string, ind: number) => {
            return (
              <div
                key={ind}
                className="bg-shine my-3 p-1 cu500:p-2 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Checkbox
                    crossOrigin={""}
                    className="h-6 w-6 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                    checked={check.includes(ind)}
                    onChange={() => handleCheckboxChange(ind)}
                  />

                  <p
                    className={`text-white text-sm cu500:text-base font-semibold  capitalize ${
                      check.includes(ind) ? "line-through opacity-60" : ""
                    }`}
                  >
                    {val}{" "}
                  </p>
                </div>
                <AiOutlineDelete
                  className="text-2xl text-white float-right hover:text-red-400 duration-500 cursor-pointer "
                  onClick={() => handleDelete(ind)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default App;
