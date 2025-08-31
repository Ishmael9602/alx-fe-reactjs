import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormikForm() {
  const initialValues = { username: '', email: '', password: '' };
  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Register (Formik)</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div className="mb-4">
            <label className="block mb-1">Username</label>
            <Field name="username" type="text" className="w-full p-2 border rounded" />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1"/>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <Field name="email" type="email" className="w-full p-2 border rounded" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1"/>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <Field name="password" type="password" className="w-full p-2 border rounded" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1"/>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
