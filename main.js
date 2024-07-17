(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>u});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),l=t(417),c=t.n(l),s=new URL(t(123),t.b),d=i()(o());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Arsenal+SC&display=swap);"]),d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap);"]);var p=c()(s);d.push([n.id,`html, body {\n    scroll-behavior: smooth;\n    margin: 0;\n    padding: 0;\n    background-color: beige;\n    height: 100%;\n    font-family: 'Arsenal SC', Arial, sans-serif;\n}\n\nheader {\n    height: 100vh;\n    background: url(${p}) no-repeat center center fixed;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: top;\n    align-items: center;\n    color: white;\n    text-align: center;\n}\n\na {\n    text-decoration: none;\n}\n\n.logo {\n    margin-top: 200px;\n    color: beige;\n    background-color: rgb(10, 4, 4);\n    display: flex;\n    font-size: x-large;\n    font-weight: 500;\n\n    .logo-first {\n        padding: 8px 16px 8px 16px;\n        border: 2px solid beige;\n    }\n    .logo-second {\n        padding: 8px 16px 8px 16px;\n        border: 2px solid beige;\n        border-left: 0px;\n    }\n}\n\n.logo-mini {\n    margin-top: 200px;\n    color: black;\n    background-color: beige;\n    display: flex;\n    font-size: small;\n    font-weight: 1000;\n\n    position: absolute;\n    bottom: 10px; /* Adjust vertical position */\n    right: -100px; /* Adjust horizontal position */\n\n    .logo-first {\n        padding: 4px 8px 4px 8px;\n        border: 1px solid rgb(10, 10, 10);\n    }\n    .logo-second {\n        padding: 4px 8px 4px 8px;\n        border: 1px solid rgb(0, 0, 0);\n        border-left: 0px;\n    }\n}\n\n\nnav {\n    /* border: solid 1px black; */\n    padding: 10px;\n}\n\n.down-arrow {\n    position: absolute;\n    bottom: 10px; /* Adjust vertical position */\n    right: 10px; /* Adjust horizontal position */\n    font-size: xx-large;\n    font-weight: 900;\n    color: beige;\n}\n\n  \n.nav_button {\n    font-family: 'quicksand';\n    background: transparent;\n    color: rgb(182, 182, 154);\n    border: none;\n    padding: 10px 20px;\n    cursor: pointer;\n    font-size: 15px;\n    font-weight: 400;\n}\n.nav_button:hover {\n    color: beige;\n}\n\n.content {\n    background-color: beige;\n    display: flex;\n    flex-direction: column;\n    justify-content: top;\n    align-items: center;\n    height: auto;\n    text-align: center;    \n    margin: auto; \n    width: 50vw; /* Responsive width in viewport width units */\n    padding-bottom: 20px;\n    position: relative;\n}\n.content a {\n    text-decoration: underline; /* Underline text */\n    color: inherit; /* Inherit color from parent (black by default) */\n}\n\nfieldset {\n    border-top: 1px solid 1px;\n    border-bottom: none;\n    border-right: none;\n    border-left: none;\n\n    display: inline-flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: left;\n}\n\ninput {\n    height: 30px;\n    margin-bottom: 7px;\n}\n\n.booking-btn {\n    background-color: rgb(182, 182, 154);;\n    color: beige;\n    border: 0;\n    font-weight: 700;\n    cursor: pointer;\n    /* padding: 10px; */\n}\n\n.booking-btn:hover {\n    background-color: black;\n}\n\nfooter {\n    font-family: 'quicksand';\n    padding: 20px;\n    border-top: 1px solid rgb(10, 4, 4);\n    display: flex;\n    flex-direction: column;\n    justify-content: top;\n    align-items: center;\n    height: auto;\n    text-align: center;   \n    width: 80vw;\n    margin: auto; \n}\n`,""]);const u=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],l=0;l<n.length;l++){var c=n[l],s=r.base?c[0]+r.base:c[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var u=t(p),b={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(b);else{var m=o(b,r);r.byIndex=l,e.splice(l,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var l=t(a[i]);e[l].references--}for(var c=r(n,o),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},123:(n,e,t)=>{n.exports=t.p+"169225a734cebd5b8aa8.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),l=t(659),c=t.n(l),s=t(56),d=t.n(s),p=t(540),u=t.n(p),b=t(113),m=t.n(b),f=t(208),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),o()(f.A,h),f.A&&f.A.locals&&f.A.locals;const g=function(){const n=document.createElement("div"),e=document.createElement("h1"),t=document.createElement("h3"),r=document.createElement("p"),o=document.createElement("div");return e.textContent="Izakaya Odin. Eating House & Bar",t.textContent="Seven days a week, from 12pm.",r.innerHTML='Open since 2024, Izakaya Odin is located in Web Devlopment\'s famous HTML and Javascript precinct, \n                    Webpack Lane. Celebrating the historic turn of the century npm building in which it is located, \n                    the space is a busy social hub offering a seasonal and healthy menu that celebrates the very best in Web produce<br><br><br>.\n\n                    Get in touch by calling us on <a href="#">09 0000 0000</a>, or email <a href="#">info@izakayaodin.com</a><br><br><br>\n                    \n                    45 Webpack Lane, Web Devlopment',o.innerHTML='<a href="#" id="logoLink-mini">\n                            <div class="logo-mini">\n                                <div class="logo-first">&uarr; IZAKAYA</div>\n                                <div class="logo-second">ODIN</div>\n                            </div>\n                        </a>',n.appendChild(e),n.appendChild(t),n.appendChild(r),n.appendChild(o),n};document.addEventListener("DOMContentLoaded",(function(){const n=document.getElementById("menuBtn"),e=document.getElementById("reservationBtn"),t=document.getElementById("logoLink"),r=document.getElementById("content");r.appendChild(g()),n.addEventListener("click",(function(){r.innerHTML="",r.appendChild(function(){const n=document.createElement("div"),e=document.createElement("h1"),t=document.createElement("p"),r=document.createElement("div");return e.textContent="Menu",t.innerHTML="Baker Bleu sourdough 6<br>\n                    Sydney rock oyster, Merimbula, NSW 6<br>\n                    Pacific oyster, Coffin Bay, SA 6<br>\n                    Shark Bay scallop, brown butter, Aleppo 9<br>\n                    Ortiz anchovies, chilli, lemon 29<br><br>\n\n                    Wagyu bresaola, kohlrabi, lemon mayonnaise, capers 22<br>\n                    LP’s salami cotto & capocollo, guindilla peppers 26<br>\n                    Tuna tartare, goat's curd, green pea, mint 32<br>\n                    Roast Jerusalem artichoke, celeriac, radicchio, hazelnut 24<br>\n                    Fremantle octopus, 'nduja, pink fir potato, wild fennel 28<br><br>\n\n                    Ruby chard, sorrel, globe artichoke & ricotta pie 38<br>\n                    Pan-roasted rainbow trout, cavolo nero, capers, lemon beurre blanc 46<br>\n                    300g O'Connor porterhouse, mountain pepper sauce 62<br>\n                    Ravens Creek rare breed pork chop, apple mustard, hispi cabbage 48<br>\n                    1.2kg Slow roasted lamb shoulder, almond, red pepper 85<br>\n\n                    Roast potatoes, confit garlic & capers 12<br>\n                    Cracked wheat salad, labneh, preserved lemon, barberry 13<br>\n                    Farm leaves, sherry vinaigrette 11<br><br>\n\n                    Rhubarb & hibiscus jelly, vanilla cream, oat crumb 16<br>\n                    Valrhona chocolate tart, ricotta ice cream 18<br>\n                    Baba, aged rum, crème diplomat 19<br>\n                    Madeleines, lemon curd 9<br>\n                    Selection of cheeses, quince, lavosh 28<br><br><br>\n\n\n                    Chef's Selection<br>\n                    88<br>\n                    Fremantle octopus gilda<br>\n                    Tuna tartare, goat's curd, green pea, mint<br>\n                    Wagyu bresaola, kohlrabi, lemon mayonnaise, capers<br>\n                    Roast Jerusalem artichoke, celeriac, radicchio, hazelnut<br><br>\n                    -\n                    Slow roasted lamb shoulder, almond, red pepper<br>\n                    Cracked wheat salad, labneh, preserved lemon, barberry<br>\n                    Farm leaves, sherry vinaigrette<br><br>\n                    -\n                    Valrhona soft chocolate, earl grey, orange caramel, pistachio<br>\n                    -\n                    Menus are subject to change due to seasonal availability.<br>",r.innerHTML='<a href="#" id="logoLink-mini">\n                            <div class="logo-mini">\n                                <div class="logo-first">&uarr; IZAKAYA</div>\n                                <div class="logo-second">ODIN</div>\n                            </div>\n                        </a>',n.appendChild(e),n.appendChild(t),n.appendChild(r),n}()),r.scrollIntoView({behavior:"smooth",block:"start"})})),t.addEventListener("click",(function(){r.innerHTML="",r.appendChild(g()),r.scrollIntoView({behavior:"smooth",block:"start"})})),e.addEventListener("click",(function(){r.innerHTML="",r.appendChild(function(){const n=document.createElement("div"),e=document.createElement("h1"),t=document.createElement("p"),r=document.createElement("div"),o=document.createElement("div");return e.textContent="Reservation equiry",t.innerHTML="Reservations are taken online for groups of up to 14 guests.<br> \n                    for larger parties, please reach out via our form below or call us on 09 0000 0000.<br><br>\n\n                    Walk-in guests and casual visits are always welcome.<br><br>\n\n                    If adding a Celebration Cake to your reservation, the order must be placed at least 48 hours prior to your reservation. ",r.innerHTML='\n                      <fieldset>\n                        <legend><h3>Booking information:</h3></legend>\n                        <label for="fname">First name:</label>\n                        <input type="text" id="fname" name="fname">\n                        <label for="lname">Last name:</label>\n                        <input type="text" id="lname" name="lname">\n                        <label for="email">Email:</label>\n                        <input type="email" id="email" name="email">\n                        <label for="date">Booking Date:</label>\n                        <input type="date" id="date" name="date">\n                        <label for="time">Time:</label>\n                        <input type="time" id="date" name="date">\n                        <label for="number">No. of guests:</label>\n                        <input type="number" id="number" name="number"><br>\n                        <input type="submit" value="Book" class="booking-btn">\n                      </fieldset>',o.innerHTML='<a href="#" id="logoLink-mini">\n                              <div class="logo-mini">\n                                  <div class="logo-first">&uarr; IZAKAYA</div>\n                                  <div class="logo-second">ODIN</div>\n                              </div>\n                          </a>',n.appendChild(e),n.appendChild(t),n.appendChild(r),n.appendChild(o),n}()),r.scrollIntoView({behavior:"smooth",block:"start"})}))}))})();