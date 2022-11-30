import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import ViewCourseList from "./components/course-list";
import ViewModuleList from "./components/module-list";
import ViewStudentList from "./components/student-list";
import ViewStudentList1 from "./components/student-list1";
import ViewStudentList2 from "./components/student-list2";
import ViewStudentList3 from "./components/student-list3";
import RemoveStudent from "./components/student-remove";
import ViewLoginPage from "./components/login-page";
import StudentHome from "./components/student-home";
import StudentViewModuleList from "./components/student-module-list";


function App() {
  return (
    <div className="App">
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/course-list" element={<ViewCourseList />} />
    <Route path="/module-list" element={<ViewModuleList />} />
    <Route path="/student-list" element={<ViewStudentList />} />
    <Route path="/student-list1" element={<ViewStudentList1 />} />
    <Route path="/student-list2" element={<ViewStudentList2 />} />
    <Route path="/student-list3" element={<ViewStudentList3 />} />
    <Route path="/student-remove" element={<RemoveStudent />} />
    <Route path="/login-page" element={<ViewLoginPage />} />

    <Route path="/student-home" element={<StudentHome />} />
    <Route path="/student-module-list" element={<StudentViewModuleList />} />
  </Routes>
</Router>
</div>
  );
}
export default App;
