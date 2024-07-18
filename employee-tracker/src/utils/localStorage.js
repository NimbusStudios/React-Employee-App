const LOCAL_STORAGE_KEY = 'employees';

export const getEmployees = () => {
  const storedEmployees = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedEmployees ? JSON.parse(storedEmployees) : [];
};

export const saveEmployees = (employees) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employees));
};