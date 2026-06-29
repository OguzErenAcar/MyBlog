import React from "react";
import useReveal from "../Components/useReveal";

export default function Contact() {
    const revealRef = useReveal();

    return (
      <div className="contacts" ref={revealRef}>
        <div className="row">
          <div className="col-6">
            <div className="titleContact reveal">
              <p>Get in touch <br/> with me </p>
            </div>
            <form className="reveal">
                 <input type="name" placeholder="Your Name" className="d-block w-100" id="Inputname" aria-describedby="emailHelp"/>
                 <input type="Email" placeholder="Your Email" className="d-block w-100" id="exampleInputPassword1" />
                 <textarea className="form-control" style={{height:110}} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
              <button id="contactButton" className="mt-3"> Submit </button>
            </form>
          </div>
          <div className="col-6 d-flex align-items-center reveal">
            <p id="explanation">
            If you would like to contact me, you can reach me by filling out the form .
            </p>
          </div>
        </div>
      </div>
    );
}
