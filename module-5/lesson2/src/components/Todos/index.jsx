import React, { useState } from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {

  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const addTask = () => {

    const check = {
      title: title.trim().length === 0,
      deadline: deadline.trim().length === 0,
    };


    if (check.title || check.deadline) {

      toast.error("Please fill out the title and deadline ok ?", {
        position: "top-right",
        autoClose: 500,
      });
    } else {

      const newTask = {
        id: uuidv4(),
        title: title,
        deadline: deadline,
      };

      setTask([...task, newTask]);


      setTitle("");
      setDeadline("");
      
      toast.success("Task added successfully", {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };



  const deleteTask = (id) => {

    const filterTask = task.filter((e) => {
      return e.id !== id;
    });


    setTask(filterTask);


    toast.info("Task deleted successfully", {
      position: "top-right",
      autoClose: 1200,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="w-75 p-4 mx-auto mt-5 shadow">
          <form action="#" onSubmit={() => addTask()}>
            <label htmlFor="title" className="w-100 my-3">
              <strong>Enter task title</strong>
              <input
                type="text"
                id="title"
                className="form-control p-3"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>

            <label htmlFor="title" className="w-100 my-3">
              <strong>Select task deadline</strong>
              <input
                type="date"
                id="title"
                className="form-control p-3"
                placeholder="Enter task deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </label>

            <button type="submit" className="btn btn-success w-100 p-3">
              ADD TASK
            </button>
          </form>
        </div>

        <div className="w-75 p-4 mx-auto mt-5 shadow">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>ID</th> <th>Title</th> <th>Task dedaline time</th>{" "}
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {task.length > 0
                ? task.map((el, i) => {
                    return (
                      <tr key={el.id}>
                        <td>{i + 1}</td> <td>{el.title} </td>{" "}
                        <td>{el.deadline}</td>{" "}
                        <td>
                          <button
                            onClick={() => deleteTask(el.id)}
                            className="btn btn-outline-danger"
                          >
                            remove
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : "NOT FOUND"}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default index;
