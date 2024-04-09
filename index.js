//Update information, ...(spread)operator to ceate new object, update and return a value
function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee} ;
    newEmployee [key] = value;
    return newEmployee;
}
//deleting employee info
function deleteEmployeeWithKeyAndValue (employee, key) {
    const newEmployee = {...employee} ; //...operator creates new
    delete newEmployee [ key];
    return newEmployee; 
}

//output testing to see if the assert function test update and delete properties.
const employee = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer',
  };
  
  // Updating employee information
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 35);
  console.log(updatedEmployee); //an object string with name, age, position updated
  
  
  // Deleting employee information
  const deletedEmployee = deleteEmployeeWithKeyAndValue(updatedEmployee, 'age');
  console.log(deletedEmployee); //object of string age del
  
  // assert function is used to test the employee information before and after updating and deleting the properties. 
  // Testing the data to update employee information
  const employeeNameKey = 'name';
  const newEmployeeName = 'Liz Wang';
  assert(employee.name === 'John Doe', 'Employee name should be John Doe');
  employee.name = newEmployeeName;
  assert(employee.name === newEmployeeName, 'Employee name should be Jane Doe');
  
  // Testing the data to delete employee information
  const employeePositionKey = 'position';
  assert(employee.position === 'Software Engineer', 'Employee position should be Software Engineer');
  delete employee.position;
  assert(employee.position === undefined, 'Employee position should be undefined');
  
  