// This component renders a list of employees and provides functionality to search for employees and edit/delete them.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import SearchBar from './SearchBar';


// Component to display a list of employees
const EmployeeList = ({ employees, onDelete, onEdit }) => {
  // State variable to hold the search term
  const [searchTerm, setSearchTerm] = useState('');
  // State variable to hold the selected employee
  const [selectedEmployee, setSelectedEmployee] = useState(null); // Add this line for selected employee

  // Function to handle changes to the search term
  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  // Function to handle the edit button click
  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    // Navigate to the edit page with the selected employee's ID
    window.location.href = `/edit/${employee.id}`;
    // Reset the selected employee state variable
    setSelectedEmployee(null);
    // Close the selected employee state variable
    onEdit(null);
    // Close the edit button click event

  };

  // Filter the employees based on the search term
  const filteredEmployees = employees
    .filter((employee) => {
      // Check if the full name of the employee contains the search term
      const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    })
    .map((employee) => {
      // Format the start date of the employee
      let formattedStartDate = 'N/A';
      if (employee.startDate) {
        const parsedDate = new Date(employee.startDate);
        if (!isNaN(parsedDate.getTime())) {
          formattedStartDate = format(parsedDate, 'dd MMM yyyy');
        }
      }
      // Render each employee in a table row
      return (
        <tr key={employee.id} className="border-b border-gray-800">
          <td className="px-4 py-2">{employee.firstName}</td>
          <td className="px-4 py-2">{employee.lastName}</td>
          <td className="px-4 py-2">{employee.email}</td>
          <td className="px-4 py-2">{employee.position}</td>
          <td className="px-4 py-2">{formattedStartDate}</td>
          <td className="px-4 py-2">{employee.id}</td>
          <td className="px-4 py-2">{employee.department}</td>

          <td className="px-4 py-2">
            {/* Edit button. Calls handleEdit when clicked */}
            <button
              onClick={() => handleEdit(employee)}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-1 px-2 rounded-md mr-2"
            >
              Edit
            </button>
            {/* Delete button. Calls onDelete when clicked */}
            <button
              onClick={() => onDelete(employee.id)}
              className="bg-red-500 hover:bg-red-600 text-gray-900 font-bold py-1 px-2 rounded-md"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with title and add employee button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Employees</h2>
        <Link
          to="/add"
          className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-2 px-4 rounded-md"
        >
          Add Employee
        </Link>
      </div>
      {/* Search bar component */}
      <SearchBar onSearch={handleSearch} />
      {/* Table to display the employees */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-white">
          <thead>
            <tr className="bg-gray-800 text-left">
              {/* Table headers */}
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">Start Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>{filteredEmployees}</tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
