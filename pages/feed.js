import React from "react";
import './Feedcss.css'
export default function Feed()
{
    return(
        <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" value="Krisantus Wanandi"></input>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL"></input>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO"></input>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE"></input>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="credits">
      <a className="credits-link" href="https://dribbble.com/shots/2666271-Contact" target="blank">
       
     
      </a>
    </div>
  </div>
</div>

    )
}