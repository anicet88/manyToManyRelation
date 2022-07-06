const config = require('./config.js');
const mysql = require('mysql2');
const Sequelize = require('sequelize');
   
module.exports = db = {};
   
   
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const pool =  mysql.createPool({ host, port, user, password });
     pool.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
   
    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql',
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
       
      } }
       
    );
       
    db.sequelize = sequelize ;
  
    
   
  // init the Employee, Project and Employee_project and add them to the exported db object
     
   const Employee = require('./employee');
    
    const Project = require('./project');
 
    const Employee_project = require('./employee_project');
  
     
    
  
    Employee.belongsToMany(Project, { through: Employee_project });
  
    Project.belongsToMany(Employee, { through: Employee_project });
  
     
    db.Employee = Employee;
    
    db.Project = Project;
     
    db.Employee_project = Employee_project;
     
    
 
    // sync all with database
     
     sequelize.sync()
      
     
 
  