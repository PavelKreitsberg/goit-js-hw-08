!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var r={},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,y=function(){return d.Date.now()};function p(e,t,r){var n,i,f,a,u,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var r=n,o=i;return n=i=void 0,l=t,a=e.apply(o,r)}function T(e){return l=e,u=setTimeout(O,t),s?p(e):a}function k(e){var r=e-c;return void 0===c||r>=t||r<0||d&&e-l>=f}function O(){var e=y();if(k(e))return j(e);u=setTimeout(O,function(e){var r=t-(e-c);return d?g(r,f-(e-l)):r}(e))}function j(e){return u=void 0,m&&n?p(e):(n=i=void 0,a)}function I(){var e=y(),r=k(e);if(n=arguments,i=this,c=e,r){if(void 0===u)return T(c);if(d)return u=setTimeout(O,t),p(c)}return void 0===u&&(u=setTimeout(O,t)),a}return t=S(t)||0,b(r)&&(s=!!r.leading,f=(d="maxWait"in r)?v(S(r.maxWait)||0,t):f,m="trailing"in r?!!r.trailing:m),I.cancel=function(){void 0!==u&&clearTimeout(u),l=0,n=c=i=u=void 0},I.flush=function(){return void 0===u?a:j(y())},I}function b(e){var r=void 0===e?"undefined":t(n)(e);return!!e&&("object"==r||"function"==r)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(b(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=b(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=a.test(e);return o||u.test(e)?c(e.slice(2),o?2:8):f.test(e)?NaN:+e}r=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),p(e,t,{leading:n,maxWait:t,trailing:i})},refs={key:"feedback-form-state",form:document.querySelector(".feedback-form"),formInput:document.querySelector(".feedback-form input"),formTextarea:document.querySelector(".feedback-form textarea"),formBtnSubmit:document.querySelector(".feedback-form button")};var T={email:"",massage:""};refs.formInput.addEventListener("input",r((function(e){T.email=e.currentTarget.value,localStorage.setItem(refs.key,JSON.stringify(T))}),500)),refs.formTextarea.addEventListener("input",r((function(e){T.massage=e.currentTarget.value,localStorage.setItem(refs.key,JSON.stringify(T))}),500)),refs.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(refs.key))),e.currentTarget.reset(),localStorage.removeItem(refs.key)}));localStorage.getItem(refs.key)&&(refs.formInput.value=JSON.parse(localStorage.getItem(refs.key)).email,refs.formTextarea.value=JSON.parse(localStorage.getItem(refs.key)).massage)}();
//# sourceMappingURL=03-feedback.cef9216d.js.map
