var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,o=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,i="object"==typeof self&&self&&self.Object===Object&&self,u=a||i||Function("return this")(),c=Object.prototype.toString,s=Math.max,l=Math.min,m=function(){return u.Date.now()};function d(e,t,r){var n,o,f,a,i,u,c=0,d=!1,g=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var r=n,f=o;return n=o=void 0,c=t,a=e.apply(f,r)}function S(e){return c=e,i=setTimeout(k,t),d?b(e):a}function T(e){var r=e-u;return void 0===u||r>=t||r<0||g&&e-c>=f}function k(){var e=m();if(T(e))return O(e);i=setTimeout(k,function(e){var r=t-(e-u);return g?l(r,f-(e-c)):r}(e))}function O(e){return i=void 0,v&&n?b(e):(n=o=void 0,a)}function I(){var e=m(),r=T(e);if(n=arguments,o=this,u=e,r){if(void 0===i)return S(u);if(g)return i=setTimeout(k,t),b(u)}return void 0===i&&(i=setTimeout(k,t)),a}return t=p(t)||0,y(r)&&(d=!!r.leading,f=(g="maxWait"in r)?s(p(r.maxWait)||0,t):f,v="trailing"in r?!!r.trailing:v),I.cancel=function(){void 0!==i&&clearTimeout(i),c=0,n=u=o=i=void 0},I.flush=function(){return void 0===i?a:O(m())},I}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(y(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=y(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var i=n.test(e);return i||o.test(e)?f(e.slice(2),i?2:8):r.test(e)?NaN:+e}refs={key:"feedback-form-state",form:document.querySelector(".feedback-form"),formInput:document.querySelector(".feedback-form input"),formTextarea:document.querySelector(".feedback-form textarea"),formBtnSubmit:document.querySelector(".feedback-form button")};const g={email:"",massage:""};refs.formInput.addEventListener("input",(e=>{g.email=e.currentTarget.value,localStorage.setItem(refs.key,JSON.stringify(g))})),refs.formTextarea.addEventListener("input",(e=>{g.massage=e.currentTarget.value,localStorage.setItem(refs.key,JSON.stringify(g))})),refs.form.addEventListener("submit",(e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem(refs.key))),e.currentTarget.reset(),localStorage.removeItem(refs.key)}));localStorage.getItem(refs.key)&&(refs.formInput.value=JSON.parse(localStorage.getItem(refs.key)).email,refs.formTextarea.value=JSON.parse(localStorage.getItem(refs.key)).massage);
//# sourceMappingURL=03-feedback.e2283016.js.map
