import styles from '../../styles/index.sass';
import { api, pdpHost } from '../../utils/platform';
import modal from './modal.js';

const Button = (key, label, type, size = "medium", slug = "", styles) => {
  const host = pdpHost(api);
  const logo_url = s => 'https://s3-us-west-2.amazonaws.com/creditkey-assets/sdk/ck-logo-white-' + s + '.svg';

  let buttonClass;

  switch (size) {
    case 'small':
      buttonClass = "is-small";
      break;
    case 'medium':
      buttonClass = "is-normal";
      break;
    case 'large':
      buttonClass = "is-fullwidth";
      break;
  }

  switch(type) {
    case "checkout":
      return `<span class="creditkey"><a class="button is-link ${buttonClass}" style="${styles}">
          <img src="${logo_url(size)}" class="ck-logo-${size}" />
          ${label}
        </a>
        <a href="${slug}" class="terms" target="_new">See Terms</a>
      </span>`;
      break;

    case "pdp":
      return `<span class="creditkey"><a href="${host}/apply/start/${key}" target="_new" class="button is-link ${buttonClass}" style="${styles}">
          <span class="pdp">${label}</span> <span style="padding: 0 5px 0 0;">with</span>
          <img src="${logo_url(size)}" class="ck-logo-${size} "/>
        </a>
      </span>`;
      break;

    case "modal-pdp":
      return `<span class="creditkey"><a onclick="modal(${host}/apply/start/${key})" class="button is-link ${buttonClass}" style="${styles}">
          <span class="pdp">${label}</span> <span style="padding: 0 5px 0 0;">with</span>
          <img src="${logo_url(size)}" class="ck-logo-${size} "/>
        </a>
      </span>`;
      break;

    default:
      return `<span class="creditkey"><a class="button is-link ${buttonClass}" style="${styles}">
          <img src="${logo_url(size)}" class="ck-logo-${size}" />
          ${label}
        </a>
        <a href="${slug}" class="terms" target="_new">See Terms</a>
      </span>`;
  }
}

export default Button;
