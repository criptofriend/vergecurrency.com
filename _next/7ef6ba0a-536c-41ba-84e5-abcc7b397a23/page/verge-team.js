
          window.__NEXT_REGISTER_PAGE('/verge-team', function() {
            var comp = module.exports=webpackJsonp([5],{15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,o){function r(){var e,t=[],n=[],o={};return l.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(r,l,a){t.push(l=l.toLowerCase()),n.push([l,a]),e=o[l],o[l]=e?e+","+a:a}),{ok:1==(l.status/200|0),status:l.status,statusText:l.statusText,url:l.responseURL,clone:r,text:function(){return Promise.resolve(l.responseText)},json:function(){return Promise.resolve(l.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([l.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return o[e.toLowerCase()]},has:function(e){return e.toLowerCase()in o}}}}var l=new XMLHttpRequest;l.open(t.method||"get",e);for(var a in t.headers)l.setRequestHeader(a,t.headers[a]);l.withCredentials="include"==t.credentials,l.onload=function(){n(r())},l.onerror=o,l.send(t.body)})};t.default=o},16:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),s=o(i),c=n(40),f=o(c),d=n(11),m=o(d),p=n(29),h=n(30),v=o(h),b=n(31),y=o(b),g=n(32),w=o(g),E=n(33),_=o(E),x={top:0,right:0,bottom:0,left:0,width:0,height:0},N="data-lazyload-listened",O=[],j=[],M=!1;try{var P=Object.defineProperty({},"passive",{get:function(){M=!0}});window.addEventListener("test",null,P)}catch(e){}var k=!!M&&{capture:!1,passive:!0},C=function(e,t){var n=f.default.findDOMNode(e),o=void 0,r=void 0;try{var l=t.getBoundingClientRect();o=l.top,r=l.height}catch(e){o=x.top,r=x.height}var a=window.innerHeight||document.documentElement.clientHeight,u=Math.max(o,0),i=Math.min(a,o+r)-u,s=void 0,c=void 0;try{var d=n.getBoundingClientRect();s=d.top,c=d.height}catch(e){s=x.top,c=x.height}var m=s-u,p=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return m-p[0]<=i&&m+c+p[1]>=0},T=function(e){var t=f.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(e){n=x.top,o=x.height}var l=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=l&&n+o+a[1]>=0},L=function(e){var t=f.default.findDOMNode(e);if(t){var n=(0,v.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?C(e,n):T(e))?e.visible||(e.props.once&&j.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},V=function(){j.forEach(function(e){var t=O.indexOf(e);-1!==t&&O.splice(t,1)}),j=[]},z=function(){for(var e=0;e<O.length;++e){var t=O[e];L(t)}V()},R=void 0,A=null,D=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=!1;if(void 0!==this.props.debounce&&"throttle"===R?(console.warn("[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously"),e=!0):"debounce"===R&&void 0===this.props.debounce&&(console.warn("[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously"),e=!0),e&&((0,p.off)(window,"scroll",A,k),(0,p.off)(window,"resize",A,k),A=null),A||(void 0!==this.props.debounce?(A=(0,y.default)(z,"number"==typeof this.props.debounce?this.props.debounce:300),R="debounce"):void 0!==this.props.throttle?(A=(0,w.default)(z,"number"==typeof this.props.throttle?this.props.throttle:300),R="throttle"):A=z),this.props.overflow){var t=(0,v.default)(f.default.findDOMNode(this));if(t&&"function"==typeof t.getAttribute){var n=+t.getAttribute(N)+1;1===n&&t.addEventListener("scroll",A,k),t.setAttribute(N,n)}}else if(0===O.length||e){var o=this.props,r=o.scroll,l=o.resize;r&&(0,p.on)(window,"scroll",A,k),l&&(0,p.on)(window,"resize",A,k)}O.push(this),L(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,v.default)(f.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(N)-1;0===t?(e.removeEventListener("scroll",A,k),e.removeAttribute(N)):e.setAttribute(N,t)}}var n=O.indexOf(this);-1!==n&&O.splice(n,1),0===O.length&&((0,p.off)(window,"resize",A,k),(0,p.off)(window,"scroll",A,k))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:s.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(i.Component);D.propTypes={once:m.default.bool,height:m.default.oneOfType([m.default.number,m.default.string]),offset:m.default.oneOfType([m.default.number,m.default.arrayOf(m.default.number)]),overflow:m.default.bool,resize:m.default.bool,scroll:m.default.bool,children:m.default.node,throttle:m.default.oneOfType([m.default.number,m.default.bool]),debounce:m.default.oneOfType([m.default.number,m.default.bool]),placeholder:m.default.node,unmountIfInvisible:m.default.bool},D.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=_.default;t.default=D,t.forceCheck=z}).call(t,n(1))},23:function(e,t,n){e.exports=window.fetch||(window.fetch=n(15).default||n(15))},29:function(e,t,n){"use strict";function o(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})}function r(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.on=o,t.off=r},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),l=r.position,a=r.overflow,u=r["overflow-x"],i=r["overflow-y"];if("static"===l&&t)o=o.parentNode;else{if(n.test(a)&&n.test(u)&&n.test(i))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},31:function(e,t,n){"use strict";function o(e,t,n){var o=void 0,r=void 0,l=void 0,a=void 0,u=void 0,i=function i(){var s=+new Date-a;s<t&&s>=0?o=setTimeout(i,t-s):(o=null,n||(u=e.apply(l,r),o||(l=null,r=null)))};return function(){l=this,r=arguments,a=+new Date;var s=n&&!o;return o||(o=setTimeout(i,t)),s&&(u=e.apply(l,r),l=null,r=null),u}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},32:function(e,t,n){"use strict";function o(e,t,n){t||(t=250);var o,r;return function(){var l=n||this,a=+new Date,u=arguments;o&&a<o+t?(clearTimeout(r),r=setTimeout(function(){o=a,e.apply(l,u)},t)):(o=a,e.apply(l,u))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},33:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),s=o(i),c=n(16),f=o(c),d=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function o(){r(this,o);var e=l(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.displayName="LazyLoad"+d(t),e}return a(o,n),u(o,[{key:"render",value:function(){return s.default.createElement(f.default,e,s.default.createElement(t,this.props))}}]),o}(i.Component)}}},376:function(e,t,n){e.exports=n(377)},377:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.t;return a.default.createElement(d.default,null,a.default.createElement(c.default,null,a.default.createElement("title",{key:"title"},t("common:meta.verge-team.title",{defaultValue:"Verge Team - VergeCurrency.com"}))),a.default.createElement("div",{className:"about"},a.default.createElement("div",{className:"ribbon ribbon--about"},a.default.createElement("div",{className:"container"},a.default.createElement("div",{className:"row center-xs"},a.default.createElement("div",{className:"col-xs-10 col-sm-9 col-md-6 text-center"},a.default.createElement("div",{className:"ribbon-txt"},a.default.createElement("h1",null,"Meet the Verge Team"),a.default.createElement("p",null,"The grassroots culture is what makes Verge ",a.default.createElement("span",{className:"hidden-xs"},a.default.createElement("br",null)),"unique and dynamic.")))))),a.default.createElement("div",{className:"intro pt-large pb-large pb-xs-0"},a.default.createElement("div",{className:"row center-xs middle-xs"},a.default.createElement("div",{className:"col-xs-10 col-sm-6"},a.default.createElement("h2",null,"Verge Currency is a 100% open source project and the global Verge Community represents the man power driving it forward. Verge is not a company, there was no ICO held upon the launch and no pre-mining took place."),a.default.createElement("p",null,"Below are just some of the most active community members who form the Core Team.")))),a.default.createElement("div",{className:"team pt-xs pb-large"},a.default.createElement("div",{className:"row center-xs"},a.default.createElement("div",{className:"col-xs-10 col-lg-8"},a.default.createElement(v.default,null)))),a.default.createElement("div",{className:"contributors"},a.default.createElement("div",{className:"row center-xs"},a.default.createElement("div",{className:"col-xs-10"},a.default.createElement("div",{className:"row center-xs start-sm"},a.default.createElement("div",{className:"col-xs-12 col-sm-8 col-lg-6 pb-small pb-xs-0"},a.default.createElement("h2",null,"Want to contribute to Verge Currency? ",a.default.createElement("span",{className:"hidden-xs"},a.default.createElement("br",null)),"Join our community on Github"),a.default.createElement("p",null,"Verge is open-source software that is constantly improving due to its many contributors. If you would like to contribute as well, take a look at our Github repositories to see where you could make a difference!")),a.default.createElement("div",{className:"col-xs-12 col-sm-4 col-lg-6 end-xs"},a.default.createElement(i.default,{href:"https://github.com/vergecurrency/VERGE"},a.default.createElement("a",{href:"https://github.com/vergecurrency/VERGE",target:"_blank",rel:"noopener noreferrer",className:"btn btn-tertiary btn-github"},"Go to Verge repo"))),a.default.createElement("div",{className:"col-xs-12"},a.default.createElement(p.default,null))))))))}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),a=o(l),u=n(6),i=o(u),s=n(4),c=o(s),f=n(2),d=o(f),m=n(378),p=o(m),h=n(379),v=o(h),b=n(3),y=n(5),g=o(y),w=(0,b.translate)(["common","verge-team"],{i18n:g.default,wait:e.browser})(r);t.default=w}).call(t,n(1))},378:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),l=o(r),a=n(7),u=o(a),i=n(8),s=o(i),c=n(13),f=o(c),d=n(14),m=o(d),p=n(0),h=o(p),v=n(23),b=o(v),y=n(16),g=o(y),w=function(e){function t(e){(0,u.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.state={contributors:[]},n}return(0,m.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){var e=this;(0,b.default)("https://api.github.com/repos/vergecurrency/VERGE/contributors").then(function(e){return e.json()}).then(function(t){return e.setState({contributors:t})})}},{key:"render",value:function(){return this.state.contributors.length>0?h.default.createElement("div",null,h.default.createElement("div",{className:"row center-xs pt-xs pb"},this.state.contributors.map(function(e,t){if(15385883!==e.id)return h.default.createElement("div",{key:e.id,className:(0===t?"col-xs-9":"col-xs-6")+" col-xs-6 col-sm-4 col-md-3 col-lg-2"},h.default.createElement("a",{href:e.html_url,target:"_blank",className:"contributors--item"},h.default.createElement("div",{className:"contributors--item__img"},h.default.createElement(g.default,{height:130},h.default.createElement("img",{src:e.avatar_url,alt:e.login}))),h.default.createElement("div",{className:"contributors--item__author"},e.login),h.default.createElement("div",{className:"contributors--item__profile"},h.default.createElement("span",null,"View on GitHub"))))}))):h.default.createElement("span",null,"Loading contributors...")}}]),t}(h.default.Component);t.default=w},379:function(e,t,n){"use strict";function o(){var e=a.map(function(e){return l.default.createElement("div",{className:"col-xs col-md-3"},l.default.createElement("div",{className:"team--member pb-xs"},l.default.createElement("img",{src:e.img,alt:e.name}),l.default.createElement("h3",null,e.name),l.default.createElement("span",null,e.role),l.default.createElement("p",null,e.occupation)))});return l.default.createElement("div",{className:"row between-xs start-sm"},e)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(r),a=n(20).en.team.team;t.default=o}},[376]);
            return { page: comp.default }
          })
        