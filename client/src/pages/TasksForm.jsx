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
    <div>
      <h1>{params.id ? "Edit Task!" : "Create a new task!"}</h1>
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
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              name="title"
              type="text"
              placeholder="Title"
              onChange={handleChange}
              value={values.title}
            />

            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Description"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
