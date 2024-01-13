(()=>{"use strict";function e(){document.querySelector(".content").innerHTML="",console.log("WIPED!"),document.querySelectorAll(".menuElement").forEach((e=>{e.classList.remove("sidebar-active")}))}function t(){const e=document.querySelector(".modal-box");e.classList.toggle("none"),e.classList.toggle("visible")}function n(){const e=document.querySelector(".project-box");e.classList.toggle("none"),e.classList.add("visible")}function r(){window.addEventListener("click",(function(e){const t=document.querySelector(".project-box"),n=document.querySelector(".button-project-cancel"),r=document.querySelector("#uniqueTitle");t.contains(e.target)?e.target===n&&(t.classList.add("none"),t.classList.remove("visible"),r.textContent=""):(t.classList.add("none"),t.classList.remove("visible"),r.textContent="")}))}function o(){const e=document.querySelector(".addTaskBtn");e&&e.addEventListener("click",(function(){setTimeout((()=>{t(),window.addEventListener("click",(function(e){const t=document.querySelector(".modal-box"),n=document.querySelector(".button-project-cancel"),r=document.querySelector(".btn-task-cancel");n.addEventListener("click",(()=>{t.classList.add("none"),t.classList.remove("visible")})),t.contains(e.target)?e.target===r&&(t.classList.add("none"),t.classList.remove("visible")):(t.classList.add("none"),t.classList.remove("visible"))}))}))}))}function a(){document.querySelectorAll(".todo-item .taskRemove").forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".todo-item"),n=t.id,r=n.charAt(n.length-1);console.log(r),t&&t.remove(),i(r,null)}))}))}function i(e,t){const n=localStorage.getItem("projectTasks"),r=JSON.parse(n)||[];if(console.log(e+"Here"),null!==e){for(const t in r)if(r.hasOwnProperty(t))for(let n=0;n<r[t].length;n++)r[t][n].id==e&&(r[t].splice(n,1),n--,localStorage.setItem("projectTasks",JSON.stringify(r)))}else if(null!=t){for(const e in r)r.hasOwnProperty(e)&&e===t&&delete r[e];localStorage.setItem("projectTasks",JSON.stringify(r))}}function u(){document.querySelectorAll(".project .projectRemove").forEach((t=>{t.addEventListener("click",(n=>{n.stopPropagation();const r=t.closest(".project"),o=r.querySelector(".projectName").textContent;r&&(console.log("Removed Project:",o),r.remove(),function(e){const t=document.querySelector("#selectProject").querySelector(`option[value="${e}"]`);t&&t.remove()}(o),i(null,o),e(),l())}))}))}const s=document.querySelector(".content");function c(e){const t=document.querySelector(".content"),n=document.createElement("h1");n.textContent=e,t.prepend(n)}function l(){document.querySelector("#menuInbox").classList.add("sidebar-active");const e="Inbox";m(),fe(e),he(),o(),c(e)}function d(e){const t=document.querySelector(".taskContainer"),n=document.querySelector("#TodoTaskTemplate"),r=document.createElement("div"),o=e.id,i=e.date;r.classList.add("todo-item"),r.setAttribute("id","task-item"+o),r.append(n.content.cloneNode(!0)),t.prepend(r),r.querySelector(".toDoTaskName").textContent=e.title,r.querySelector(".toDoTaskDate").textContent=i;const u=r.querySelector(".taskPriority");switch(e.priority){case"priorityLow":u.classList.add("project-green");break;case"priorityMedium":u.classList.add("project-yellow");break;case"priorityHigh":u.classList.add("project-red")}r.addEventListener("click",(function(){u.classList.toggle("fa-circle"),u.classList.toggle("fa-circle-check")})),a()}function m(){const e=document.createElement("div");e.classList.add("taskContainer"),s.appendChild(e),function(){const e=document.createElement("div"),t=document.createElement("p"),n=document.querySelector(".taskContainer");t.textContent="Add new Task",e.classList.add("addTaskBtn"),n.appendChild(e),e.appendChild(t)}()}function f(e){const t=document.querySelector("#selectProject"),n=document.createElement("option");n.setAttribute("id",e),n.setAttribute("value",e),n.textContent=e,t.appendChild(n)}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function g(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function v(e){g(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===h(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function w(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function y(e){g(1,arguments);var t=v(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function b(e){g(1,arguments);var t=v(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var o=y(r),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var i=y(a);return t.getTime()>=o.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}var p={};function T(){return p}function S(e,t){var n,r,o,a,i,u,s,c;g(1,arguments);var l=T(),d=w(null!==(n=null!==(r=null!==(o=null!==(a=null==t?void 0:t.weekStartsOn)&&void 0!==a?a:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==o?o:l.weekStartsOn)&&void 0!==r?r:null===(s=l.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=v(e),f=m.getUTCDay(),h=(f<d?7:0)+f-d;return m.setUTCDate(m.getUTCDate()-h),m.setUTCHours(0,0,0,0),m}function k(e,t){var n,r,o,a,i,u,s,c;g(1,arguments);var l=v(e),d=l.getUTCFullYear(),m=T(),f=w(null!==(n=null!==(r=null!==(o=null!==(a=null==t?void 0:t.firstWeekContainsDate)&&void 0!==a?a:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==o?o:m.firstWeekContainsDate)&&void 0!==r?r:null===(s=m.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(d+1,0,f),h.setUTCHours(0,0,0,0);var y=S(h,t),b=new Date(0);b.setUTCFullYear(d,0,f),b.setUTCHours(0,0,0,0);var p=S(b,t);return l.getTime()>=y.getTime()?d+1:l.getTime()>=p.getTime()?d:d-1}function C(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const D=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return C("yy"===t?r%100:r,t.length)},M=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):C(n+1,2)},x=function(e,t){return C(e.getUTCDate(),t.length)},q=function(e,t){return C(e.getUTCHours()%12||12,t.length)},E=function(e,t){return C(e.getUTCHours(),t.length)},P=function(e,t){return C(e.getUTCMinutes(),t.length)},L=function(e,t){return C(e.getUTCSeconds(),t.length)},W=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return C(Math.floor(r*Math.pow(10,n-3)),t.length)};var j={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return D(e,t)},Y:function(e,t,n,r){var o=k(e,r),a=o>0?o:1-o;return"YY"===t?C(a%100,2):"Yo"===t?n.ordinalNumber(a,{unit:"year"}):C(a,t.length)},R:function(e,t){return C(b(e),t.length)},u:function(e,t){return C(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return C(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return C(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return C(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var o=function(e,t){g(1,arguments);var n=v(e),r=S(n,t).getTime()-function(e,t){var n,r,o,a,i,u,s,c;g(1,arguments);var l=T(),d=w(null!==(n=null!==(r=null!==(o=null!==(a=null==t?void 0:t.firstWeekContainsDate)&&void 0!==a?a:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==o?o:l.firstWeekContainsDate)&&void 0!==r?r:null===(s=l.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),m=k(e,t),f=new Date(0);return f.setUTCFullYear(m,0,d),f.setUTCHours(0,0,0,0),S(f,t)}(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(o,{unit:"week"}):C(o,t.length)},I:function(e,t,n){var r=function(e){g(1,arguments);var t=v(e),n=y(t).getTime()-function(e){g(1,arguments);var t=b(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),y(n)}(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):C(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):x(e,t)},D:function(e,t,n){var r=function(e){g(1,arguments);var t=v(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):C(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var o=e.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return C(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var o=e.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return C(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),o=0===r?7:r;switch(t){case"i":return String(o);case"ii":return C(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,o=e.getUTCHours();switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,o=e.getUTCHours();switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return q(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):E(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):C(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):C(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):P(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):L(e,t)},S:function(e,t){return W(e,t)},X:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();if(0===o)return"Z";switch(t){case"X":return N(o);case"XXXX":case"XX":return O(o);default:return O(o,":")}},x:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return N(o);case"xxxx":case"xx":return O(o);default:return O(o,":")}},O:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+U(o,":");default:return"GMT"+O(o,":")}},z:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+U(o,":");default:return"GMT"+O(o,":")}},t:function(e,t,n,r){var o=r._originalDate||e;return C(Math.floor(o.getTime()/1e3),t.length)},T:function(e,t,n,r){return C((r._originalDate||e).getTime(),t.length)}};function U(e,t){var n=e>0?"-":"+",r=Math.abs(e),o=Math.floor(r/60),a=r%60;if(0===a)return n+String(o);var i=t||"";return n+String(o)+i+C(a,2)}function N(e,t){return e%60==0?(e>0?"-":"+")+C(Math.abs(e)/60,2):O(e,t)}function O(e,t){var n=t||"",r=e>0?"-":"+",o=Math.abs(e);return r+C(Math.floor(o/60),2)+n+C(o%60,2)}const Y=j;var H=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},I=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},F={p:I,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],o=r[1],a=r[2];if(!a)return H(e,t);switch(o){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",H(o,t)).replace("{{time}}",I(a,t))}};const A=F;var z=["D","DD"],J=["YY","YYYY"];function R(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function B(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var G,X={date:B({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:B({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:B({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},_={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function $(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,a=null!=n&&n.width?String(n.width):o;r=e.formattingValues[a]||e.formattingValues[o]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function V(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(o);if(!a)return null;var i,u=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(s):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(s);return i=e.valueCallback?e.valueCallback(c):c,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(u.length)}}}const K={code:"en-US",formatDistance:function(e,t,n){var r,o=Q[e];return r="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:X,formatRelative:function(e,t,n,r){return _[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:$({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:$({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:$({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:$({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:$({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(G={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(G.matchPattern);if(!n)return null;var r=n[0],o=e.match(G.parsePattern);if(!o)return null;var a=G.valueCallback?G.valueCallback(o[0]):o[0];return{value:a=t.valueCallback?t.valueCallback(a):a,rest:e.slice(r.length)}}),era:V({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:V({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:V({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:V({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:V({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var Z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ee=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,te=/^'([^]*?)'?$/,ne=/''/g,re=/[a-zA-Z]/;function oe(e,t,n){var r,o,a,i,u,s,c,l,d,m,f,y,b,p,S,k,C,D;g(2,arguments);var M=String(t),x=T(),q=null!==(r=null!==(o=null==n?void 0:n.locale)&&void 0!==o?o:x.locale)&&void 0!==r?r:K,E=w(null!==(a=null!==(i=null!==(u=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(c=n.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==u?u:x.firstWeekContainsDate)&&void 0!==i?i:null===(d=x.locale)||void 0===d||null===(m=d.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==a?a:1);if(!(E>=1&&E<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=w(null!==(f=null!==(y=null!==(b=null!==(p=null==n?void 0:n.weekStartsOn)&&void 0!==p?p:null==n||null===(S=n.locale)||void 0===S||null===(k=S.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==b?b:x.weekStartsOn)&&void 0!==y?y:null===(C=x.locale)||void 0===C||null===(D=C.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==f?f:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!q.localize)throw new RangeError("locale must contain localize property");if(!q.formatLong)throw new RangeError("locale must contain formatLong property");var L=v(e);if(!function(e){if(g(1,arguments),!function(e){return g(1,arguments),e instanceof Date||"object"===h(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=v(e);return!isNaN(Number(t))}(L))throw new RangeError("Invalid time value");var W=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(L),j=function(e,t){return g(2,arguments),function(e,t){g(2,arguments);var n=v(e).getTime(),r=w(t);return new Date(n+r)}(e,-w(t))}(L,W),U={firstWeekContainsDate:E,weekStartsOn:P,locale:q,_originalDate:L};return M.match(ee).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,A[t])(e,q.formatLong):e})).join("").match(Z).map((function(r){if("''"===r)return"'";var o,a,i=r[0];if("'"===i)return(a=(o=r).match(te))?a[1].replace(ne,"'"):o;var u,s=Y[i];if(s)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===J.indexOf(u))||R(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==z.indexOf(e)}(r)||R(r,t,String(e)),s(j,r,q.localize,U);if(i.match(re))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}const ae=class{static idCounter=0;constructor(e,t,n){this.title=e,this.priority=t,this.id=this.constructor.idCounter++,this.date=n,this.isCompleted=!1}getTitle=()=>this.title;getId=()=>this.id;getPriority=()=>this.priority;getDate=()=>oe(new Date(this.date),"dd/MM/yyyy")},ie=class{static idCounter=1;constructor(e){this.title=e,this.id=this.constructor.idCounter++}getTitle=()=>this.title;getId=()=>this.id};function ue(){document.querySelectorAll(".menuElement").forEach((e=>{e.addEventListener("click",(function(){e.classList.add("sidebar-active"),console.log("highlighted!")}))}))}function se(e,t){var n,r,o,a,i,u,s,c;g(1,arguments);var l=T(),d=w(null!==(n=null!==(r=null!==(o=null!==(a=null==t?void 0:t.weekStartsOn)&&void 0!==a?a:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==o?o:l.weekStartsOn)&&void 0!==r?r:null===(s=l.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=v(e),f=m.getDay(),h=(f<d?7:0)+f-d;return m.setDate(m.getDate()-h),m.setHours(0,0,0,0),m}var ce=6048e5;function le(e,t){g(1,arguments);var n=v(e),r=se(n,t).getTime()-function(e,t){var n,r,o,a,i,u,s,c;g(1,arguments);var l=T(),d=w(null!==(n=null!==(r=null!==(o=null!==(a=null==t?void 0:t.firstWeekContainsDate)&&void 0!==a?a:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==o?o:l.firstWeekContainsDate)&&void 0!==r?r:null===(s=l.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),m=function(e,t){var n,r,o,a,i,u,s,c;g(1,arguments);var l=v(e),d=l.getFullYear(),m=T(),f=w(null!==(n=null!==(r=null!==(o=null!==(a=null==t?void 0:t.firstWeekContainsDate)&&void 0!==a?a:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==o?o:m.firstWeekContainsDate)&&void 0!==r?r:null===(s=m.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setFullYear(d+1,0,f),h.setHours(0,0,0,0);var y=se(h,t),b=new Date(0);b.setFullYear(d,0,f),b.setHours(0,0,0,0);var p=se(b,t);return l.getTime()>=y.getTime()?d+1:l.getTime()>=p.getTime()?d:d-1}(e,t),f=new Date(0);return f.setFullYear(m,0,d),f.setHours(0,0,0,0),se(f,t)}(n,t).getTime();return Math.round(r/ce)+1}function de(){0===window.localStorage.length&&localStorage.setItem("projectTasks",JSON.stringify(me)),function(){const e=["Inbox","Today","Important","Next Week","Completed","Demo Project"],t=localStorage.getItem("projectTasks"),n=JSON.parse(t);n&&Object.keys(n).forEach((t=>{e.includes(t)||(function(e){const t=document.querySelector(".created-projects"),n=document.createElement("div");n.classList.add("project","menuElement");const r=document.querySelector("#projectTmpl");n.append(r.content.cloneNode(!0)),n.querySelector(".projectName").textContent=e.name,n.addEventListener("click",(function(){ge(e.name),n.classList.add("sidebar-active"),u()})),t.appendChild(n)}({name:t}),f(t))}))}(),document.querySelector(".button-add-project").addEventListener("click",(function(t){const i=document.querySelector("#form-id").value.trim();if(t.preventDefault(),!function(e){const t=document.querySelectorAll(".menuElement li a"),n=document.querySelectorAll(".menuEl a"),r=document.querySelector("#uniqueTitle");for(const n of t)if(n.textContent==e)return r.textContent="Change title to something unique",!1;for(const t of n)if(t.textContent===e)return r.textContent="Change title to something unique#",!1;return""!==e&&null!=e||(r.textContent="Project is empty",!1)}(i))return!1;{const t=new ie(i),s=t.title;e(),m(),function(e){const t=document.querySelector(".created-projects"),n=document.createElement("div");n.classList.add("project","menuElement");const r=document.querySelector("#projectTmpl");n.append(r.content.cloneNode(!0)),n.querySelector(".projectName").textContent=e.title,n.classList.add("sidebar-active"),n.addEventListener("click",(function(){var t;ge(e.title),t=n,document.querySelectorAll(".menuElement").forEach((e=>{e.classList.remove("sidebar-active")})),t.classList.add("sidebar-active"),a(),u()})),t.appendChild(n)}(t),c(s),n(),r(),f(s),o();const l=localStorage.getItem("projectTasks"),d=l?JSON.parse(l):{};d.hasOwnProperty(i)||(d[i]=[]),localStorage.setItem("projectTasks",JSON.stringify(d))}})),document.querySelector(".add-project-modal").addEventListener("click",(function(){document.querySelector(".addProject").reset(),setTimeout((()=>{n(),r()}))})),o(),function(){const e=document.querySelector("#menuInbox"),t=document.querySelector("#menuToday"),n=document.querySelector("#menuWeek"),r=document.querySelector("#menuImportant"),o=(document.querySelector("#menuCompleted"),document.querySelector(".demoProject"));e.addEventListener("click",(()=>ve("Inbox"))),t.addEventListener("click",(()=>ve("Today"))),n.addEventListener("click",(()=>ve("Next Week"))),r.addEventListener("click",(()=>ve("Important"))),o.addEventListener("click",(()=>ve("Demo Project")))}(),ue(),o(),u()}const me={Inbox:[],Today:[],"Next Week":[],Important:[],Completed:[],"Demo Project":[]};function fe(e){const t=localStorage.getItem("projectTasks"),n=JSON.parse(t);n&&null!==e&&n[e]?n[e].forEach((e=>{d(e)})):console.log(`No tasks found for project '${e}' or tasks is not an array.`)}function he(){document.querySelector(".button-add").addEventListener("click",(function(e){const n=document.querySelector("#taskTitle").value,r=document.querySelector("#taskPriority").value;let o=document.querySelector("#taskDate").value;const a=document.querySelector("#selectProject").value,i=document.querySelector("#TaskForm");if(e.preventDefault(),n||a){let e;e=o||oe(new Date,"dd/MM/yyyy");const u=new ae(n,r,e),s=localStorage.getItem("projectTasks"),c=JSON.parse(s);c.Inbox.push(u),c[a]||(c[a]=[]);const l=document.querySelector(".sidebar-active"),m=l?l.textContent.trim():null,f=document.querySelector("#menuInbox"),h=document.querySelector("#menuImportant");(m===a||l===f||l===h&&"priorityHigh"===u.priority)&&d(u),c[a].push(u),t();const g=oe(new Date,"dd/MM/yyyy"),v=le(new Date),w=le(Date.parse(e));g==e&&c.Today.push(u),"priorityHigh"==r&&c.Important.push(u),1==u.isCompleted&&c.Completed.push(u),v+1==w&&c["Next Week"].push(u),i.reset(),localStorage.setItem("projectTasks",JSON.stringify(c))}else console.log("error ")}))}function ge(t){e(),m(),c(t),ue(),o(),fe(t)}function ve(t){e(),m(),ue(),c(t),o(),a(),fe(t),he()}document.addEventListener("DOMContentLoaded",(function(){de(),l()}))})();