import React from 'react';
import ReactDOM from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';

import Header from './Header';

class MicroAppHeader extends HTMLElement {
  connectedCallback() {
    this.mountReactHeaderComponent();
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.rootPoint);
  }

  get configuration() {
    return this._configuration;
  }

  set configuration(value) {
    this._configuration = value;
  }

  mountReactHeaderComponent() {
    if (!this.rootPoint) {
      this.rootPoint = document.createElement('div');
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
      <style>
      ul {
         list-style-type: none;
         overflow: hidden;
       }

      li {
        float: left;
       }
       
      li.link-parent {
        text-decoration: none;
        display: block;
        padding-left: 20px;
       }

      li.link-child {
        padding-left: 5px;
        padding-right: 5px;
      }
      
      li.link-child:hover {
        background-color: #111111;
        cursor: pointer;
      }
      
      .link-parent {
      }
      
      .toolbar {
        height: 60px;
        margin: -8px;
        display: flex;
        align-items: center;
        background-color: #1976d2;
        color: white;
        font-weight: 600;
      }
      
      .toolbar img {
        margin: 0 16px;
      }
      
      </style>
      `;
      this.shadowRoot.appendChild(this.rootPoint);
    }

    ReactDOM.render(<Header configuration={this._configuration} />, this.rootPoint);

    retargetEvents(this.shadowRoot);
  }


}

window.customElements.define('header-microapp', MicroAppHeader);
