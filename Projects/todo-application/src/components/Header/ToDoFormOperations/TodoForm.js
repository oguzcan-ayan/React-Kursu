import React from 'react';
import { Formik, Field, Form } from 'formik';
import validationSchema from './Validations';
import { useTodo } from '../../../contexts/TodoContext';

function TodoForm() {

  const {addTodo} = useTodo();

  return (
    <>
    <Formik
      initialValues={{
        text: ''
      }}
      onSubmit={(values, bag) => {
        console.log(values);

      addTodo(values.text);

      /*   setTodos((prev) =>[
          ...prev, {id: uuidv4(), text: values.text, completed: false}
        ]) */

        bag.resetForm();
      }}

      validationSchema={validationSchema}
    >
    <Form>
		<Field 
        className="new-todo" 
        placeholder="What needs to be done?" 
        autoFocus 
        id="text"
        name="text"
        />
	</Form>
    </Formik>
    </>
  )
}

export default TodoForm;