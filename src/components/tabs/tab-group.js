import { LitElement, html, css } from 'lit-element';

class TabGroup extends LitElement {
    static styles = css`
    .tab-group {
      max-width: max-content;
      display: flex;
      align-items: center;
      gap: 34px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--secondary-text);
    }
  `;

    render() {
        return html`
      <div class="tab-group">
        <slot></slot>
      </div>
    `;
    }
}

customElements.define('awc-tab-group', TabGroup);
