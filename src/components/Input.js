import { LitElement, css, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js';

export class Input extends LitElement {
    static properties = {
        id: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: 'default'
        }
    }

    constructor() {
        super()
        this.placeholder = '' || 'Вставьте ссылку';
    }   

    render() {
        const classes = {
            'awc-input': true,
            [this.color]: true,
        };

        return html`
            <input
            class=${classMap(classes)}
            type="text"           
            name=${this.name}
            id=${this.id}
            placeholder=${this.placeholder}
            />
        `
    }

    static get styles() {
        return css`
           .awc-input{
            padding: 13px 0 13px 16px;
            border-radius: 5px;
            border: 1px solid var(--secondary-text);
            }
            .awc-input:focus-visible {
                outline: 1px solid var(--secondary-text);
            }
            .default {
                background: var(--input-background);
            }
            .red {
                background: red;
            }

            .purple {
                background: purple;
            }

        `
    }
}

window.customElements.define('awc-input', Input);