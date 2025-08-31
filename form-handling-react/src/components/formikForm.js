import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function FormikForm() {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Register (Formik)</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert(`Registered: ${values.username}, ${values.email}`);
          resetForm();
        }}
      >
        <Form>
          <div className="mb-4">
            <label className="block mb-1">Username</label>
            <Field name="username" type="text" className="w-full p-2 border rounded" />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <Field name="email" type="email" className="w-full p-2 border rounded" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <Field name="password" type="password" className="w-full p-2 border rounded" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
