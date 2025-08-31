import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      alert('All fields are required!');
      return;
    }
    console.log('Form Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl mb-4">Register</h2>
      <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="mb-2 p-2 w-full border rounded" />
      <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} className="mb-2 p-2 w-full border rounded" />
      <input name="password" placeholder="Password" type="password" value={formData.password} onChange={handleChange} className="mb-2 p-2 w-full border rounded" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
    </form>
  );
}

export default RegistrationForm;
