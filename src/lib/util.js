module.exports.isSmartPhone = () => {
  const agent = navigator.userAgent
  if (agent.indexOf('iPhone') > 0 || agent.indexOf('iPad') > 0
      || agent.indexOf('ipod') > 0 || agent.indexOf('Android') > 0) {
    return true
  } else {
    return false
  }
}

function deepExtend(out){
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];
    if (!obj) {
      continue;
    }

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object')
          out[key] = deepExtend(out[key], obj[key]);
        else
          out[key] = obj[key];
      }
    }
  }

  return out;
};

module.exports.extend = deepExtend;

module.exports.triggerEvent = (el, eventName, options) => {
  let event;
  if (window.CustomEvent) {
    event = new CustomEvent(eventName, options);
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, options);
  }
  el.dispatchEvent(event);
}

module.exports.parseQuery = (query) => {    
  var s = query.split('&'),
      data = {},
      i = 0,
      iz = s.length,
      param, key, value;
  for (; i < iz; i++) {
      param = s[i].split('=');
      if (param[0] !== void 0) {
          key = param[0];
          value = (param[1] !== void 0) ? param.slice(1).join('=') : key;
          data[key] = decodeURIComponent(value);
      }
  }
  return data;
}