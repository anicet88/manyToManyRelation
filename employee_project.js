const { Sequelize, DataTypes } = require("sequelize");
   
const db = require('./db.js');
 
 const Employee = db.Employee;
 const Project = db.Project;
   
   
const  sequelize = db.sequelize;
   
const Employee_project = sequelize.define("Employee_project", {
   
 EmployeeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Employee, 
      key: 'id'
    }
  },
  ProjectId: {
    type: DataTypes.INTEGER,
    references: {
      model: Project, 
      key: 'id'
    }
  }
  
  
   
});
   
   
   
module.exports = Employee_project;