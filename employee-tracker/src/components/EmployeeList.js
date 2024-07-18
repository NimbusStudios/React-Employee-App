import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import SearchBar from './SearchBar';

const EmployeeList = ({ employees, onDelete, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  const filteredEmployees = employees
    .filter((employee) => {
      const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    })
    .map((employee) => {
      let formattedStartDate = 'N/A';
      if (employee.startDate) {
        const parsedDate = new Date(employee.startDate);
        if (!isNaN(parsedDate.getTime())) {
          formattedStartDate = format(parsedDate, 'dd MMM yyyy');
        }
      }
      return (
        <tr key={employee.id} className="border-b border-gray-800">
          <td className="px-4 py-2">{employee.firstName}</td>
          <td className="px-4 py-2">{employee.lastName}</td>
          <td className="px-4 py-2">{employee.email}</td>
          <td className="px-4 py-2">{employee.position}</td>
          <td className="px-4 py-2">{formattedStartDate}</td>
          <td className="px-4 py-2">
            <button
              onClick={() => onEdit(employee)}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-1 px-2 rounded-md mr-2"
            >
              Edit
            </button>
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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Employees</h2>
        <Link
          to="/add"
          className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-2 px-4 rounded-md"
        >
          Add Employee
        </Link>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-white">
          <thead>
            <tr className="bg-gray-800 text-left">
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