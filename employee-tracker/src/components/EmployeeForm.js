// This component renders a form for adding or editing an employee and handles form submission
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


// Define the EmployeeForm component
const EmployeeForm = ({ employee, onSubmit }) => {
  // Initialize the navigation function using useNavigate hook
  const navigate = useNavigate();
  // Get the id parameter from the URL using useParams hook
  const { id } = useParams();

  // Initialize formData state with default values
  const [formData, setFormData] = useState({
    firstName: '', // First name of the employee
    lastName: '', // Last name of the employee
    email: '', // Email of the employee
    position: '', // Position of the employee
    startDate: '', // Start date of the employee
  });

  // Effect hook to update formData when employee prop changes
  useEffect(() => {
    // If employee prop is provided, update formData with the employee data
    if (employee) {
      setFormData(employee);
    }
  }, [employee]);

  // Function to handle file upload
  // NOTE: This function is not implemented in this code snippet

  // Handle change in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding field in formData state with the new value
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // If startDate field is empty, set it to current date
    if (!formData.startDate) {
      formData.startDate = new Date().toISOString().slice(0, 10); 
    }

    // Call the onSubmit function with formData and navigate to homepage
    onSubmit(formData);
    navigate('/');
  };

  // Render the form with input fields and submit button
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-white">
        {employee ? 'Edit Employee' : 'Add Employee'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-gray-300">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-yellow-500"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-gray-300">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-yellow-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-yellow-500"
            required
          />
        </div>
        {/* Add other input fields here (position, startDate) */}
        <div>
          <label htmlFor="position" className="block text-gray-300">
            Position:
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-yellow-500"
            required
          />
        </div>
        <div>
          <label htmlFor="startDate" className="block text-gray-300">
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-yellow-500"
          />
        </div>

        {/* Add other input fields here (department, phone, image) */}
        {/* Add department dropdown */}
        {/* Add phone number input */}
        {/* Add image upload field */}
        {/* Add image preview functionality */} 

        {/* Add file upload functionality */}
        {/* Add image preview functionality */}


        
        <div> 
          <label htmlFor="uploadFile" className="block text-gray-300">
            Upload File:
          </label>
          <input
            type="file"
            id="uploadFile"
            name="uploadFile"
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-2 px-4 rounded-md"
          >
            {employee ? 'Update' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
};


export default EmployeeForm;

