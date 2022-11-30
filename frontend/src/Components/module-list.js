import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';

function ViewModuleList() {
    const navigate = useNavigate();


    const initialText = 'Open Register';
    const [buttonText, setButtonText] = useState(initialText);
    const initialText2 = 'Open Register';
    const [buttonText2, setButtonText2] = useState(initialText);
    const initialText3 = 'Open Register';
    const [buttonText3, setButtonText3] = useState(initialText);
  
    function handleClick() {
      setButtonText('Closing in 10 seconds');
  
      setTimeout(() => {
        setButtonText(initialText);
      }, 10000);
    }

    function handleClick2() {
        setButtonText2('Closing in 10 seconds');
    
        setTimeout(() => {
          setButtonText2(initialText);
        }, 10000);
      }

      function handleClick3() {
        setButtonText3('Closing in 10 seconds');
    
        setTimeout(() => {
          setButtonText3(initialText);
        }, 10000);
      }


      return (
<div>
    
    <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">About</h4>
              <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">Contact</h4>
              <ul class="list-unstyled">
                <li><a href="#" class="text-white">Follow on Twitter</a></li>
                <li><a href="#" class="text-white">Like on Facebook</a></li>
                <li><a href="#" class="text-white">Email me</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            <strong>Unbranded University</strong>
          </a>
        </div>
      </div>
    </header>
    
    <main>
    
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Assigned Modules</h1>
            <p class="lead text-muted">Modules update according to the Timetable. Once a lecture starts press "Open Register" which will automatically remain open for 10 seconds allowing students to mark themselves present.</p>
            <p>
            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => {navigate("/course-list")}}>Go Back</button>
              <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => {navigate("/")}}>HomePage</button>
            </p>
          </div>
        </div>
      </section>
    
      <div class="album py-5 bg-light">
        <div class="container">
    
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div class="card-body">
                    <p class="card-text">Module ID: 6386ab288b9347ccc64e5c04 <br/>Module Name: Software Architecture and Design </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" onClick={handleClick}>{buttonText}</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => {navigate("/student-list1")}}>View Attendance</button>
                    </div>
                    <small class="text-muted">Next Lecture: 08:00 GMT</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div class="card-body">
                <p class="card-text">Module ID: 6386ab488b9347ccc64e5c06 <br/>Module Name: Human Factors </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" onClick={handleClick2}>{buttonText2}</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => {navigate("/student-list2")}}>View Attendance</button>
                    </div>
                    <small class="text-muted">Next Lecture: 12:00 GMT</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div class="card-body">
                <p class="card-text">Module ID: 6386ab758b9347ccc64e5c08 <br/>Module Name: Management Of It Projects </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" onClick={handleClick3}>{buttonText3}</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => {navigate("/student-list3")}}>View Attendance</button>
                    </div>
                    <small class="text-muted">Next Lecture: 13:00 GMT</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </main>
    
    <footer class="text-muted py-5">
      <div class="container">
        <p class="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
      </div>
    </footer>
    
    
        <script src="/docs/5.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    
          
      </div>
      );
    }

export default ViewModuleList;