import { LitElement, css, html } from 'lit';

export class Tab extends LitElement {
    static properties = {
        name: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            default: '',
        },
    };

    constructor() {
        super();
    }

    render() {
        return html`
      <div class="tab" id="${this.id}">
        ${this.name}<slot></slot>
        <span class="underline"></span>
      </div>
    `;
    }

    static styles = css`
    .tab {
      cursor: pointer;
      max-width: max-content;
      position: relative; 
      border-radius: 5px;
      color: var(--secondary-text);
    }
    .tab:hover{
        transition: color .3s;
        color: var(--black-text);
    }

    .tab:hover .underline {
      width: 100%; 
    }

    .underline {
      width: 0; 
      height: 2px;
      background-color: var(--base-color);
      position: absolute;
      bottom: -12px;
      left: 0;
      transition: width .3s ease-in-out;
    }
  `;
}

window.customElements.define('awc-tab', Tab);
