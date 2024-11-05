import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employeems",
});

con.connect(function (err) {
  if (err) {
    console.log("connection error");
  } else {
    console.log("Connected to the database of MySql");
  }
});

export default con;
