(()=>{"use strict";var t={208:(t,n,e)=>{e.d(n,{A:()=>c});var r=e(354),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([t.id,":root {\n\tfont-family: Verdana, Arial, sans-serif, Georgia, Garamond, serif;\n\tfont-size: 16px;\n}\n\nhtml,\nbody {\n\theight: 100%;\n\tmargin: 0;\n\tbackground-color: black;\n}\n\n#content {\n\theight: 100%;\n}\n\n.grid-structure {\n\tdisplay: grid;\n\tgrid-template-rows: 1fr;\n\tgrid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n\tgrid-auto-rows: 1fr;\n}\n\ndiv:not([class]) {\n\tborder: 1px solid gray;\n\tcolor: white;\n\tpadding: 5px 10px 0;\n\tline-height: 1.6;\n}\n\nbutton {\n\tborder-radius: 20px;\n\tbackground-color: black;\n\tborder: 1px solid #ffffff;\n\tcolor: white;\n\tpadding: 5px 10px;\n\tcursor: pointer;\n}\n\nbutton.center {\n\tdisplay: block;\n\tmargin: 0 auto;\n}\n\ndiv:not([class]) > p {\n\tmargin: 0.9rem 0;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;CACC,iEAAiE;CACjE,eAAe;AAChB;;AAEA;;CAEC,YAAY;CACZ,SAAS;CACT,uBAAuB;AACxB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,2DAA2D;CAC3D,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,YAAY;CACZ,mBAAmB;CACnB,gBAAgB;AACjB;;AAEA;CACC,mBAAmB;CACnB,uBAAuB;CACvB,yBAAyB;CACzB,YAAY;CACZ,iBAAiB;CACjB,eAAe;AAChB;;AAEA;CACC,cAAc;CACd,cAAc;AACf;;AAEA;CACC,gBAAgB;AACjB",sourcesContent:[":root {\n\tfont-family: Verdana, Arial, sans-serif, Georgia, Garamond, serif;\n\tfont-size: 16px;\n}\n\nhtml,\nbody {\n\theight: 100%;\n\tmargin: 0;\n\tbackground-color: black;\n}\n\n#content {\n\theight: 100%;\n}\n\n.grid-structure {\n\tdisplay: grid;\n\tgrid-template-rows: 1fr;\n\tgrid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n\tgrid-auto-rows: 1fr;\n}\n\ndiv:not([class]) {\n\tborder: 1px solid gray;\n\tcolor: white;\n\tpadding: 5px 10px 0;\n\tline-height: 1.6;\n}\n\nbutton {\n\tborder-radius: 20px;\n\tbackground-color: black;\n\tborder: 1px solid #ffffff;\n\tcolor: white;\n\tpadding: 5px 10px;\n\tcursor: pointer;\n}\n\nbutton.center {\n\tdisplay: block;\n\tmargin: 0 auto;\n}\n\ndiv:not([class]) > p {\n\tmargin: 0.9rem 0;\n}\n"],sourceRoot:""}]);const c=a},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},354:t=>{t.exports=function(t){var n=t[1],e=t[3];if(!e)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[n].concat([i]).join("\n")}return[n].join("\n")}},72:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var p=e(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var A=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:A,references:1})}a.push(l)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var s=r(t,o),u=0;u<i.length;u++){var d=e(i[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},659:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0;var r=e(72),o=e.n(r),i=e(825),a=e.n(i),c=e(659),s=e.n(c),u=e(56),d=e.n(u),l=e(540),p=e.n(l),f=e(113),A=e.n(f),m=e(208),C={};C.styleTagTransform=A(),C.setAttributes=d(),C.insert=s().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=p(),o()(m.A,C),m.A&&m.A.locals&&m.A.locals;const v=t=>{if(t<=2)return[0,1];let n=v(t-1);return n.push(n[n.length-1]+n[n.length-2]),n},h=t=>{if(1==t.length)return t;let n=Math.floor(t.length/2),e=t.slice(0,n),r=t.slice(n);return g(h(e),h(r))},g=(t,n)=>{let e=[];for(;t.length&&n.length;)t[0]<n[0]?e.push(t.shift()):e.push(n.shift());return[...e,...t,...n]},y=document.getElementById("recursive-fibonacci"),b=document.getElementById("iterative-fibonacci"),x=document.getElementById("merge-sort");function B(){return Math.floor(50*Math.random())}y.addEventListener("click",(()=>{const t=document.querySelector("#recursive-fibonacci + .time"),n=document.querySelector("#recursive-fibonacci + .time + .fib-sequence"),e=performance.now(),r=v(B()),o=performance.now();t.textContent=`Recursive fibonacci took ${(o-e).toFixed(15)} milliseconds to complete execution.`,n.textContent=`${r.join(", ")}`})),b.addEventListener("click",(()=>{const t=document.querySelector("#iterative-fibonacci + .time"),n=document.querySelector("#iterative-fibonacci + .time + .fib-sequence"),e=performance.now(),r=(t=>{let n=[0,1],e=0,r=1,o=r;for(let i=0;i<t-2;i++)r=e+r,e=o,n.push(r),o=r;return n})(B()),o=performance.now();t.textContent=`Iterative fibonacci took ${(o-e).toFixed(15)} milliseconds to complete execution.`,n.textContent=`${r.join(", ")}`})),x.addEventListener("click",(()=>{const t=document.querySelector(".unsorted-array"),n=document.querySelector(".sorted-array");let e=B(),r=[];e<=2&&(e=5);for(let t=0;t<e;t++)r.push(B());t.textContent=`Unsorted array: [${r.join(", ")}]`,n.textContent=`Sorted array: [${h(r).join(", ")}]`}))})();
//# sourceMappingURL=main.e43a9da12d453a68e0ff.js.map