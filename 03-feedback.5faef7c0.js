!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,i,f,a,u,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,u=setTimeout(T,t),s?p(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=f}function T(){var e=b();if(O(e))return E(e);u=setTimeout(T,function(e){var n=t-(e-c);return d?g(n,f-(e-l)):n}(e))}function E(e){return u=void 0,m&&r?p(e):(r=i=void 0,a)}function h(){var e=b(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return j(c);if(d)return u=setTimeout(T,t),p(c)}return void 0===u&&(u=setTimeout(T,t)),a}return t=S(t)||0,y(n)&&(s=!!n.leading,f=(d="maxWait"in n)?v(S(n.maxWait)||0,t):f,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},h.flush=function(){return void 0===u?a:E(b())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||u.test(t)?c(t.slice(2),o?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})},refs={KEY:"feedback-form-state",form:document.querySelector(".feedback-form"),formInput:document.querySelector(".feedback-form input"),formTextarea:document.querySelector(".feedback-form textarea"),formBtnSubmit:document.querySelector(".feedback-form button")};var j={};!function(){if(savedData=localStorage.getItem(refs.KEY),savedData){var e=JSON.parse(savedData),t=e.email,n=e.message;refs.form.email.value=t,refs.form.message.value=n,j.email=t,j.message=n}}(),refs.form.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem(refs.KEY,JSON.stringify(j))}),500)),refs.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(refs.KEY))),e.currentTarget.reset(),localStorage.removeItem(refs.KEY)}))}();
//# sourceMappingURL=03-feedback.5faef7c0.js.map
