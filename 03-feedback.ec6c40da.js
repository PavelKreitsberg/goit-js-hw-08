!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=l||d||Function("return this")(),s=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return m.Date.now()};function p(e,t,n){var r,i,u,f,a,c,l=0,d=!1,m=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function j(e){return l=e,a=setTimeout(T,t),d?p(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-l>=u}function T(){var e=b();if(O(e))return E(e);a=setTimeout(T,function(e){var n=t-(e-c);return m?g(n,u-(e-l)):n}(e))}function E(e){return a=void 0,s&&r?p(e):(r=i=void 0,f)}function h(){var e=b(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===a)return j(c);if(m)return a=setTimeout(T,t),p(c)}return void 0===a&&(a=setTimeout(T,t)),f}return t=S(t)||0,y(n)&&(d=!!n.leading,u=(m="maxWait"in n)?v(S(n.maxWait)||0,t):u,s="trailing"in n?!!n.trailing:s),h.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},h.flush=function(){return void 0===a?f:E(b())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||a.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j={KEY:"feedback-form-state",form:document.querySelector(".feedback-form"),formInput:document.querySelector(".feedback-form input"),formTextarea:document.querySelector(".feedback-form textarea"),formBtnSubmit:document.querySelector(".feedback-form button")},O={};!function(){var e=localStorage.getItem(j.KEY);if(e){var t=JSON.parse(e),n=t.email,r=t.message;j.form.email.value=n,j.form.message.value=r,O.email=n,O.message=r}}(),j.form.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,localStorage.setItem(j.KEY,JSON.stringify(O))}),500)),j.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(j.KEY))),e.currentTarget.reset(),localStorage.removeItem(j.KEY)}))}();
//# sourceMappingURL=03-feedback.ec6c40da.js.map
