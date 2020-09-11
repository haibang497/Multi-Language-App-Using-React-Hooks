import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="logo">
            <img
              alt=""
              src="https://www.tma-innovation.center/image/logo.svg"
            />{" "}
          </div>
          <div className="information">
            <div className="col1">
              <div className="col1-detail">
                <div className="title1">
                  <strong>Address</strong>
                </div>
                <div className="detail1">
                  TMA Building, Street #10, Quang Trung Software City, 1 To Ky,
                  District 12, Ho Chi Minh City, Vietnam
                </div>
              </div>
              <div className="col1-detail-2">
                <div className="title2">
                  <strong>Email</strong>
                </div>
                <div className="detail2">contact@tma-innovation.center</div>
              </div>
            </div>
            <div className="col2">
              <div className="title">
                <strong>Phone</strong>
              </div>
              <div className="detail3">
                <p>
                  <strong>TMA Vietnam</strong>
                  +84 2839 951 059
                </p>
                <p>
                  <strong>TMA North America</strong>
                  +84 2839 951 059
                </p>
                <p>
                  <strong>TMA Vietnam</strong>
                  +84 2839 951 059
                </p>
                <p>
                  <strong>TMA Vietnam</strong>
                  +84 2839 951 059
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
