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

  get routes() {
    return this._routes;
  }

  set routes(value) {
    this._routes = value;
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
          line-height: 2.5em;
        }
        
        li.link-parent {
          text-decoration: none;
          display: flex;
          padding-left: 20px;
        }
        
        li.link-children {
          padding-left: 5px;
          padding-right: 5px;
        }
        
        .link {
          padding-left: 5px;
          padding-right: 5px;
          cursor: pointer;
          font-size: 1.2em;
        }
        
        .link:hover {
        
          color: rgb(221, 0, 49);
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

    ReactDOM.render(<Header routes={this.routes} />, this.rootPoint);
    retargetEvents(this.shadowRoot);
  }
}

window.customElements.define('header-microapp', MicroAppHeader);
