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
        this.placeholder = 'Вставьте ссылку';
    }

    render() {
        const classes = {
            'awc-input': true,
            [this.color]: true, // добавляем класс, основанный на значении свойства color
        };

        return html`
            <div >
                <input
                class=${classMap(classes)}
                type="text"
                name=${this.name}
                id=${this.id}
                placeholder=${this.placeholder}
                />
            </div>
        `
    }

    static get styles() {
        return css`
           .awc-input{
            padding: 13px 0 13px 16px;
            border-radius: 5px;
            border: none;
            color: var(--secondary-text);
            background: var(--input-background);
            }

            .red {
                background: red;
                color: white;
            }
        `
    }
}

window.customElements.define('awc-input', Input);