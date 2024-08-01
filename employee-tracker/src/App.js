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
    const storedEmployees = getEmployees();
    if (storedEmployees.length === 0) {
      const generatedEmployees = generateEmployees(0);
      saveEmployees(generatedEmployees);
      setEmployees(generatedEmployees);
    } else {
      setEmployees(storedEmployees);
    }
  }, []);

  const addEmployee = (newEmployee) => {
    // ... logic to add employee (unchanged)
    setEmployees([...employees, newEmployee]);
    saveEmployees([...employees, newEmployee]);
    setEditingEmployee(null);
    window.location.href = '/';
    // ...
  };

  const updateEmployee = (updatedEmployee) => {
    // ... logic to update employee (unchanged)
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === updatedEmployee.id) {
        return updatedEmployee;
      }
      return employee;
    });
    setEmployees(updatedEmployees);
    saveEmployees(updatedEmployees);
    setEditingEmployee(null);
    window.location.href = '/';
  };

  const deleteEmployee = (employeeId) => {
    // ... logic to delete employee (unchanged)
    const updatedEmployees = employees.filter((employee) => employee.id !== employeeId);
    setEmployees(updatedEmployees);
    saveEmployees(updatedEmployees);
    setEditingEmployee(null);
    window.location.href = '/';
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