import { Formik, Form } from 'formik'
import { createTaskReq } from '../api/tasks.api'

function TaskForm() {
  return(
    <div>
      <h1>Create a new task</h1>

      <Formik
        initialValues={{
          title:"",
          description:"",
        }}
        onSubmit={ async (values, actions)=>{
          try {
            await createTaskReq(values)
            actions.resetForm()
          } catch(error) {
            console.error(error)
          }
        }}
        >
        {({handleChange, handleSubmit, values, isSubmitting })=> (
          
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

        <button type="submit">
          {isSubmitting?"Saving...": "Save"}
        </button>
      </Form>
      )}
      </Formik>


    </div>
  )
}

export default TaskForm

