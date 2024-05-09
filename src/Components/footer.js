import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const list =[
      "Behance",
      "Dribbble",
      "GitHub",
      "Facebook",
      "Instagram"
    ];

    return (
      <div className="footer_img">
        <div className="footer_content container">
          <div class="footer_content_div">
            <div class="container">
              <h1>
                Also, I’m available for freelance <br />   you can reach me by
              </h1>
            </div>
            <div class="footer_links container ">
              <div class="footer_items">
                {/* {list.map(item=>(
                  <h5 class="d-inline me-5">{item}  </h5>

                ))} */}
              </div>
              {/* <h5>© 2019 — Design by Zemez — Jhon Doe</h5> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
