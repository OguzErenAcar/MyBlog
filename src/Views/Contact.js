import React, { Component } from "react";
 export default class Contact extends Component {
  render() {
    return (
      <div class="contacts">
        <div class="row">
          <div class="col-6">
            <div class="titleContact">
              <p>Get in touch <br></br> with me </p>
            </div>
            <form >
                 <input type="name" placeholder="Your Name"  class="d-block w-100  " id="Inputname" aria-describedby="emailHelp"/>
                 <input type="Email" placeholder="Your Email" class="d-block w-100  " id="exampleInputPassword1" />
                 <textarea class="form-control  " style={{height:110}} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
              <button  id="contactButton" class="mt-3 "> Submit </button>
            </form>
          </div>
          <div class="col-6 d-flex align-items-center">
            <p id="explanation">
              My clients have found that launching with a well considered and
              well developed front-end has saved them time and money.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
