import React, { Component } from "react";

import "../Main/Main.css";
import { Text } from "../TranslateLanguage/TransLanguage";

const Body = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main-title">
          <h1 className="title">{Text("main.title")}</h1>
        </div>
        <div className="top-row element-row">
          <div className="image">
            <img src="https://www.tma-innovation.center/image/e-1.png" />
          </div>
          <div className="text">
            <p>{Text("main.textone")}</p>
            <ul>
              <li>{Text("main.infor1")}</li>
              <li>{Text("main.infor2")}</li>
              <li>{Text("main.infor3")}</li>
            </ul>
          </div>
        </div>
        <div className="middle-row">
          <div className="text">
            <p>
              <strong>{Text("main.titletext1")}</strong>
            </p>
            <ul>
              <li>{Text("main.infor4")}</li>
              <li>{Text("main.infor5")}</li>
            </ul>
          </div>
          <div className="image">
            <img src="https://www.tma-innovation.center/image/e-2.png" />
          </div>
        </div>
        <div className="third-row element-row">
          <div className="image">
            <img src="https://www.tma-innovation.center/image/e-5.png" />
          </div>
          <div className="text">
            <p>
              <strong>{Text("main.titletext2")}</strong>
            </p>
            <ul>
              <li>{Text("main.infor7")}</li>
              <li>{Text("main.infor8")}</li>
              <li>{Text("main.infor9")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
