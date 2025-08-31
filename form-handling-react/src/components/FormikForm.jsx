import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = { username: '', email: '', password: '' };
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required')
});

function FormikForm() {
  const handleSubmit = (values) => {
    console.log('Formik Form Submitted:', values);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl mb-4">Register with Formik</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="flex flex-col gap-2">
          <Field name="username" placeholder="Username" className="p-2 border rounded" />
          <ErrorMessage name="username" component="div" className="text-red-500 text-sm"/>
          <Field name="email" placeholder="Email" type="email" className="p-2 border rounded" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm"/>
          <Field name="password" placeholder="Password" type="password" className="p-2 border rounded" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm"/>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-2">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
