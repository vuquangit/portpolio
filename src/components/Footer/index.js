import React from "react";
import "./Footer.scss";

export default class footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">Copyright © Your Website 2019</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://vuquangit.netlify.com/">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://vuquangit.netlify.com/">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://vuquangit.netlify.com/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="https://vuquangit.netlify.com/">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="https://vuquangit.netlify.com/">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
