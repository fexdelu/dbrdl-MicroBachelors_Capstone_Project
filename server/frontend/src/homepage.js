import './bootstrap.min.css';
import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>

        {/* <div style={{display:"flex"}}>
        <img src='/cardealership.jpeg' style={{width: "300px"}}/>
        <div style={{margin:"100px"}}>
             <span style={{margin:"60px"}}>
             "IBM CD0351EN - Cloud Application Developer Capstone - Final Submission"
               </span >
           </div>
        </div> */}
        
        <div class="bg-light">
          <div class="container py-5">
            <div class="row h-100 align-items-center py-5">
              <div class="col-lg-6">
                <h1 class="display-4">Car dealership company</h1>
                <p class="lead text-muted mb-0">IBM CD0351EN - Cloud Application Developer Capstone - Final Submission</p>
              </div>
              <div class="col-lg-6 d-none d-lg-block">
                <img src="/cardealership.jpeg" style={{width: "300px"}} class="img-fluid"/>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default HomePage;
