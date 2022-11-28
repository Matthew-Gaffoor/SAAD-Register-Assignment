import React from 'react';
import { Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Modules from "./components/modules";
import EditStudentAttendance from "./components/edit-student-attendance";
import CheckStudentAttendance from "./components/check-student-attendance";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/modules" className="navbar-brand">
          Modules
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/modules"} className="nav-link">
              Modules
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/check-student-attendance"} className="nav-link">
              Check Student Attendance
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/edit-student-attendance"} className="nav-link">
              Edit Student Attendance
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default App;
