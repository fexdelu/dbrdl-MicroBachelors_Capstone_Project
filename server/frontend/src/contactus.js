import './bootstrap.min.css';
import React from 'react';

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <div style={{display:"flex"}}>
        {/* <img src='/contatus.jpeg' style={{width: "300px"}}/>
        <div style={{margin:"100px"}}>
             <span style={{margin:"60px"}}>
             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
               </span >
           </div>

        </div> */}
        
          <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-12">
                  <div class="wrapper">
                      <div class="row no-gutters">
                          <div class="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                            <div class="contact-wrap w-100 p-md-5 p-4">
                              <h3 class="mb-4">Get in touch</h3>
                              <div id="form-message-warning" class="mb-4"></div> 
                            <div id="form-message-success" class="mb-4">
                          {/* Your message was sent, thank you! */}
                          </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label class="label" for="name">Full Name</label>
                                  <input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
                                </div>
                              </div>
                              <div class="col-md-6"> 
                                <div class="form-group">
                                  <label class="label" for="email">Email Address</label>
                                  <input type="email" class="form-control" name="email" id="email" placeholder="Email"/>
                                </div>
                              </div>
                              <div class="col-md-12">
                                <div class="form-group">
                                  <label class="label" for="subject">Subject</label>
                                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
                                </div>
                              </div>
                              <div class="col-md-12">
                                <div class="form-group">
                                  <label class="label" for="#">Message</label>
                                  <textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                                </div>
                              </div>
                              <div class="col-md-12">
                                <div class="form-group">
                                  <input type="submit" value="Send Message" class="btn btn-primary"/>
                                  <div class="submitting"></div>
                                </div>
                              </div>
                            </div>
                              </div>
                          </div>
                          <div class="col-lg-4 col-md-5 d-flex align-items-stretch">
                            <div class="info-wrap bg-primary w-100 p-md-5 p-4">
                              <h3 class="text-light">Let's get in touch</h3>
                              <p class="mb-4 text-light">I'm open for any suggestion or just to have a chat</p>
                          <div class="dbox w-100 d-flex align-items-start">
                            <div class="icon d-flex align-items-center justify-content-center">
                              <span class="fa fa-map-marker"></span>
                            </div>
                            <div class="text pl-3 text-light">
                            <p><span>Address:</span> Río Grande, Tierra del Fuego, Argentina</p>
                          </div>
                      </div>
                      <div class="dbox w-100 d-flex align-items-center">
                          <div class="icon d-flex align-items-center justify-content-center">
                              <span class="fa fa-phone"></span>
                          </div>
                          <div class="text pl-3 text-light">
                          <p><span>Phone:</span> <a href="tel://+542964400930" class="text-light">+54 2964 400930</a></p>
                      </div>
                      </div>
                        <div class="dbox w-100 d-flex align-items-center">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-paper-plane"></span>
                          </div>
                          <div class="text pl-3 text-light">
                          <p><span>Email:</span> <a href="mailto:federico.lumma@gmail.com" class="text-light">federico.lumma@gmail.com</a></p>
                        </div>
                      </div>
                        <div class="dbox w-100 d-flex align-items-center">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-globe"></span>
                          </div>
                          <div class="text pl-3 text-light">
                          <p><span>Linkedin:</span> <a href="https://www.linkedin.com/in/federico-lumma-92722741/" class="text-light">Federico Lumma</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>


      </div>
    );
  }
}

export default ContactUs;
