import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskProvider";

function TaskForm() {
  const navigate = useNavigate();
  const params = useParams();
  const { createTask, updateTask, getTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const loadTaskToUpdate = async () => {
      if (params.id) {
        const response = await getTask(params.id);
        setTask(response);
      }
    };
    loadTaskToUpdate();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-5xl text-white font-bold text-center py-4">{params.id ? "Editar esta tarea!" : "Crea una nueva tarea aqui!"}</h1>
      <Formik
        initialValues={{task}}
        enableReinitialize={true}
        onSubmit={async (values) => {
          if (params.id) {
            try {
              delete values['task']
              await updateTask(params.id, values);
              navigate("/");
            } catch (err) {
              console.error(err)
            }
          } else {
            try {
              await createTask(values);
              navigate("/");
              } catch (err) {
                console.error(err)
            }
          }
          setTask({ title: "", description: "" });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit} className="flex-vertical max-w-full rounded-2xl p-4">
              <label className="flex text-xl text-white font-medium py-4 px-2">Title:</label>
              <input
              className="flex bg-slate-200 text-black p-1 font-medium w-8/12"
                name="title"
                type="text"
                placeholder="Title of this task"
                onChange={handleChange}
                value={values.title}
              />

              <label className="flex text-xl text-white font-medium py-4 px-2">Description:</label>
              <textarea
              className="flex bg-slate-200 text-black p-1 w-8/12"
                name="description"
                rows="3"
                placeholder="Description"
                onChange={handleChange}
                value={values.description}
              ></textarea>

              <button
              className="px-2 py-1 mx-3 my-2 rounded bg-green-700 hover:bg-green-900 text-white font-bold"
              type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
