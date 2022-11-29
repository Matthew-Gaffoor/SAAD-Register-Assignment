import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import ViewCourseList from "./components/course-list";
import ViewModuleList from "./components/module-list";
import ViewStudentList from "./components/student-list";


function App() {
  return (
    <div className="App">
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/course-list" element={<ViewCourseList />} />
    <Route path="/module-list" element={<ViewModuleList />} />
    <Route path="/student-list" element={<ViewStudentList />} />
  </Routes>
</Router>
</div>
  );
}
export default App;
