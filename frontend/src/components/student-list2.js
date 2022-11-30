import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function ViewStudentList2() {
    const navigate = useNavigate();


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
            <h1 class="fw-light">Student List HF @ 12:00 GMT</h1>
            <p class="lead text-muted">Below are all students who mark themselves present for this lecture. If an entry is incorect press the remove button and inform student of change.</p>
            <p>
            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => {navigate("/module-list")}}>Go Back</button>
              <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => {navigate("/")}}>HomePage</button>
            </p>
          </div>
        </div>
      </section>
    
      <div class="album py-5 bg-light">
        <div class="container">
        <div class="row mb-3 text-center">
            <div class="col-4 col-sm-3 themed-grid-col">Full Name:</div>
            <div class="col-4 col-sm-2 themed-grid-col">Course:</div>
            <div class="col-4 col-sm-2 themed-grid-col">Module:</div>
            <div class="col-4 col-sm-2 themed-grid-col">Time:</div>
        </div>
        <div class="row mb-3 text-center">
            <div class="col-4 col-sm-3 themed-grid-col">Pete Peter</div>
            <div class="col-4 col-sm-2 themed-grid-col">Software Engineering</div>
            <div class="col-4 col-sm-2 themed-grid-col">Human Factors</div>
            <div class="col-4 col-sm-2 themed-grid-col">12:05 GMT</div>
            <div class="col-4 col-sm-2 themed-grid-col"><button type="button" class="btn btn-sm btn-outline-secondary">Remove</button></div>
        </div>
        <div class="row mb-3 text-center">
            <div class="col-4 col-sm-3 themed-grid-col">Triss Bool</div>
            <div class="col-4 col-sm-2 themed-grid-col">Software Engineering</div>
            <div class="col-4 col-sm-2 themed-grid-col">Human Factors</div>
            <div class="col-4 col-sm-2 themed-grid-col">12:09 GMT</div>
            <div class="col-4 col-sm-2 themed-grid-col"><button type="button" class="btn btn-sm btn-outline-secondary">Remove</button></div>
        </div>
        <div class="row mb-3 text-center">
            <div class="col-4 col-sm-3 themed-grid-col">Kayla Frail</div>
            <div class="col-4 col-sm-2 themed-grid-col">Software Engineering</div>
            <div class="col-4 col-sm-2 themed-grid-col">Human Factors</div>
            <div class="col-4 col-sm-2 themed-grid-col">12:07 GMT</div>
            <div class="col-4 col-sm-2 themed-grid-col"><button type="button" class="btn btn-sm btn-outline-secondary">Remove</button></div>
        </div>
        <div class="row mb-3 text-center">
            <div class="col-4 col-sm-3 themed-grid-col">Jane Hoyle</div>
            <div class="col-4 col-sm-2 themed-grid-col">Software Engineering</div>
            <div class="col-4 col-sm-2 themed-grid-col">Human Factors</div>
            <div class="col-4 col-sm-2 themed-grid-col">12:03 GMT</div>
            <div class="col-4 col-sm-2 themed-grid-col"><button type="button" class="btn btn-sm btn-outline-secondary">Remove</button></div>
        </div>
        <div class="row mb-3 text-center">
            <div class="col-4 col-sm-3 themed-grid-col">Chris O'Neil</div>
            <div class="col-4 col-sm-2 themed-grid-col">Software Engineering</div>
            <div class="col-4 col-sm-2 themed-grid-col">Human Factors</div>
            <div class="col-4 col-sm-2 themed-grid-col">12:00 GMT</div>
            <div class="col-4 col-sm-2 themed-grid-col"><button type="button" class="btn btn-sm btn-outline-secondary">Remove</button></div>
        </div>
        <div class="row mb-3 text-center">
            <div class="col-4 col-sm-3 themed-grid-col">Evens Gee</div>
            <div class="col-4 col-sm-2 themed-grid-col">Software Engineering</div>
            <div class="col-4 col-sm-2 themed-grid-col">Human Factors</div>
            <div class="col-4 col-sm-2 themed-grid-col">12:02 GMT</div>
            <div class="col-4 col-sm-2 themed-grid-col"><button type="button" class="btn btn-sm btn-outline-secondary">Remove</button></div>
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

export default ViewStudentList2;