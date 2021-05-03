import Client from '../client';
import Charges from '../charges';

var modalPdpBanner = function modalPdpBanner(url) {
  var iframe = "<div className=\"iframe-container\"><iframe id=\"creditkey-pdp-iframe\" src=\"" + url + "\"></iframe></div>";
  return iframe;
};

window.addEventListener('message', function (e) {
  if (!e || !e.data || !e.data.action) return false;
  var data = JSON.parse(e.data);

  if (data.action === 'pdp' && data.options.public_key) {
    var charges = new Charges(data.options.charges ? data.options.charges : '0, 0, 0, 0, 0'.split(','));
    var c = new Client(data.options.public_key);
    c.enhanced_pdp_modal(charges);
  }
});
export default modalPdpBanner;