import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import { getEmployees, saveEmployees } from './utils/localStorage';
import { generateEmployees } from './utils/dataGenerator';

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    // ... load from localStorage or generate data (unchanged)
  }, []);

  const addEmployee = (newEmployee) => {
    // ... logic to add employee (unchanged)
  };

  const updateEmployee = (updatedEmployee) => {
    // ... logic to update employee (unchanged)
  };

  const deleteEmployee = (employeeId) => {
    // ... logic to delete employee (unchanged)
  };

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white font-luga">
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-primary">
                Employee List
              </Link>
            </li>
            <li>
              <Link to="/add" className="hover:text-primary">
                Add Employee
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <EmployeeList
                employees={employees}
                onDelete={deleteEmployee}
                onEdit={setEditingEmployee} 
              />
            }
          />
          <Route
            path="/add"
            element={<EmployeeForm onSubmit={addEmployee} />}
          />
          <Route 
            path="/edit/:id" 
            element={
              <EmployeeForm
                employee={editingEmployee} 
                onSubmit={updateEmployee}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;