			
// Copyright 2006-2016 ClickTale Ltd., US Patent Pending
// PID: 32260
// Generated on: 1/6/2016 2:45:40 AM (UTC 1/6/2016 8:45:40 AM)

var ctRules_PrePCC={"transformationMap":{"\"00\"":"\"name\"","\"01\"":"\"Onload | VE Surface Switch Home1\"","\"02\"":"\"action\"","\"03\"":"\"type\"","\"04\"":"\"CTEventAction\"","\"05\"":"\"eventName\"","\"06\"":"\"Onload | VE Surface Switch Home\"","\"07\"":"\"triggers\"","\"08\"":"\"PageLoadCondition\"","\"09\"":"\"states\"","\"0A\"":"\"LocationCondition\"","\"0B\"":"\"url\"","\"0C\"":"\"http://www.microsoft.com/en-us/Switch/mac-surface\"","\"0D\"":"\"mode\"","\"0E\"":"\"Equals\"","\"0F\"":"\"ignoreQueryString\"","\"0G\"":"\"Action | Surface Buy Now\"","\"0H\"":"\"OrCondition\"","\"0I\"":"\"childConditions\"","\"0J\"":"\"ClickCondition\"","\"0K\"":"\"ctSelector\"","\"0L\"":"\"elementAddressing\"","\"0M\"":"\"tagCode\"","\"0N\"":"\"index\"","\"0O\"":"\"elementID\"","\"0P\"":"\"shell-category-header-cta\"","\"0Q\"":"\"alias\"","\"0R\"":"\"AllPages\""},"transformedObjects":[{"00":"01","02":{"03":"04","05":"06"},"07":{"03":"08"},"09":{"03":"0A","0B":"0C","0D":"0E","0F":true}},{"00":"0G","02":{"03":"04","05":"0G"},"07":{"03":"0H","0I":[{"03":"0J","0K":{"0L":[{"0M":2884,"0N":2},{"0M":2884,"0N":0},{"0M":2884,"0N":1},{"0M":1,"0O":"0P","0N":0}]},"0Q":"A"}]},"09":{"03":"0A","0B":"0C","0D":"0R","0F":true}}]}; (function(){function Rule(e){logger.log("Rule name: ",e.name),this.name=e.name;var t=actionsFactory.construct(e.action,e),n=observablesFactory.construct(e.triggers),r=statesFactory.construct(e.states);n&&n.subscribe(function(){r.evaluate()&&t.execute()}),logger.log("\n")}function Observable(){this.subscribers=[]}function State(e){}function Action(e){}function ClickObservable(e){Observable.call(this);var t=this;bindToClick(e,function(){logger.log("Click event associated with selector: ",e),t.notify(e)})}function onMouseDown(e){currentMouseDownElement=e.target||e.srcElement}function onMouseUp(e){var t,n=e.target||e.srcElement;if(n===currentMouseDownElement){logger.log("Click detected on element: ",n);for(t in clickHandlers)clickHandlers.hasOwnProperty(t)&&isAncestor(t,n)&&clickHandlers[t].forEach(function(t){t.call(null,e)})}currentMouseDownElement=null}function bindToClick(e,t){var n=getSelector(e);clickHandlers[n]=clickHandlers[n]||[],clickHandlers[n].push(t)}function getSelector(e){switch(Object.keys(e)[0]){case"elementAddressing":return JSON.stringify(e.elementAddressing);case"css":return e.selector}}function getElementsFromSelector(e){var t=[],n=ct.ElementAddressing.elementFromPath(JSON.parse(e),document.body,!0);return n&&t.push(n),t}function isAncestor(e,t){for(var n=!1,r=t,o=getElementsFromSelector(e);!n&&"HTML"!==r.tagName&&r.parentElement;)n=isInNodeList(o,r),r=r.parentElement;return n}function isInNodeList(e,t){var n,r=e.length;for(n=0;r>n;n+=1)if(e[n]===t)return!0;return!1}function OrObservable(e){Observable.call(this);var t=this;e.forEach(function(e){e.subscribe(function(){t.notify()})})}function PageLoadObservable(){Observable.call(this);var e=this;onRulesBoundHandlers.push(function(){logger.log("PageLoad event"),e.notify()})}function CTEventAction(e){this.eventName=e,logger.log("Event name: ",this.eventName)}function LocationState(e){this.url=e.url.toLowerCase(),this.mode=e.mode,this.ignoreQueryString=e.ignoreQueryString,logger.log("Location mode: ",this.mode),logger.log("Location URL: ",this.url),logger.log("Location Ignore Query String: ",this.ignoreQueryString)}function init(){var e=whenRecoding.bind(void 0,startRulesEngine);onDomReady(e)}function whenRecoding(e){if("undefined"!=typeof window.ClickTaleIsRecording&&window.ClickTaleIsRecording()===!0)e();else{var t=window.ClickTaleOnRecording;window.ClickTaleOnRecording=function(){e(),"undefined"!=typeof t&&"function"==typeof t&&t.apply(this,arguments)}}}function startRulesEngine(){try{if(!isSupportedBrowser())return;ct.ElementAddressing.bootstrap(window,!0),buildRules()}catch(e){logger.error("startRulesEngine: ",e)}}function onDomReady(e){function t(){r||(r=!0,e())}function n(){if(!r)try{document.documentElement.doScroll("left"),t()}catch(e){setTimeout(n,10)}}var r=!1;if("complete"===document.readyState||"interactive"===document.readyState)return void t();if(document.addEventListener)document.addEventListener("DOMContentLoaded",t,!1);else if(document.attachEvent){try{var o=null!=window.frameElement}catch(i){}document.documentElement.doScroll&&!o&&n(),document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&t()})}if(window.addEventListener)window.addEventListener("load",t,!1);else if(window.attachEvent)window.attachEvent("onload",t);else{var a=window.onload;window.onload=function(){a&&a(),t()}}}function isSupportedBrowser(){try{if("function"!=typeof ClickTaleDetectAgent)return!1;var e=ClickTaleDetectAgent();if(!e)return!1;if(e.t==e.IE&&e.v<9)return!1}catch(t){return logger.error("isSupportedBrowser: ",t),!1}return!0}function buildRules(){if(ctRules_PrePCC){var e=rulesEngine.objectTransformer.getOriginalObjects(ctRules_PrePCC);rules=e.map(function(e){return new Rule(e)})}onRulesBoundHandlers.forEach(function(e){e()})}Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,r=function(){},o=function(){return n.apply(this instanceof r?this:e,t.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(r.prototype=this.prototype),o.prototype=new r,o}),"function"!=typeof Object.create&&(Object.create=function(){function e(){}var t=Object.prototype.hasOwnProperty;return function(n){if("object"!=typeof n)throw TypeError("Object prototype may only be an Object or null");e.prototype=n;var r=new e;if(e.prototype=null,arguments.length>1){var o=Object(arguments[1]);for(var i in o)t.call(o,i)&&(r[i]=o[i])}return r}}());var logger=function(){function e(){var e=Array.prototype.slice.call(arguments);n&&(window.console&&window.console.log?window.console.log.apply(window.console,e):window.alert&&window.alert(e.join(" ")))}for(var t={},n=!(!window.localStorage||"true"!==localStorage.getItem("ctRuleEngineDebug")),r=window.location.search.split("&"),o=[],i=0;i<r.length;i++)/^\??ctRuleEngine=/.test(r[i])&&o.push(r[i]);return o.length&&(n="true"===o[0].split("=").splice(1)[0],window.localStorage&&localStorage.setItem("ctRuleEngineDebug",n)),t.log=function(){e.apply(this,arguments)},t.error=function(t){e.apply(this,arguments)},t}();!function(){function e(e,t){var n=e.split("."),r=A;!(n[0]in r)&&r.execScript&&r.execScript("var "+n[0]);for(var o;n.length&&(o=n.shift());)n.length||t===C?r=r[o]?r[o]:r[o]={}:r[o]=t}function t(e,t){var n;if(e.map)n=e.map(t,C);else{n=[];for(var r=e.length,o=window,i=0;r>i;i++)n.push(t.call(o,e[i],i))}return n}function n(e,t){var n;if(e.filter)n=e.filter(t,C);else{n=[];for(var r=e.length,o=window,i=0;r>i;i++){var a=e[i];t.call(o,a,i)&&n.push(a)}}return n}function r(e,t){R||(e.ClickTaleSetCustomElementID=c(e.ClickTaleSetCustomElementID),R=E),t&&i(j,e.document.documentElement),D=E}function o(e){}function i(e,t){var n=t.firstChild,r=l(t).CustomID;r&&(r in e?(N[r]=E,o("duplicate registration of custom id "+r+"were found on multiple elements")):e[r]=t);for(;n;n=n.nextSibling)1===n.nodeType&&i(e,n)}function a(e,t){l(e).CustomID=t}function c(e){return function(t,n){n in j?(N[n]=E,o("duplicate registration of custom id "+n+" were found on multiple elements")):(e(t,n),D&&(j[n]=t))}}function l(e){var t=e.ClickTale;return t||(t={},e.ClickTale=t),t}function u(e){return w.getComputedStyle?w.getComputedStyle(e,O):e.currentStyle}function s(e){return P[e]||(P[e]=(e.charCodeAt(0)-64&31)+((e.charCodeAt(1)-64&28)<<3)+((e.charCodeAt(2)-64&30)<<7)),P[e]}function d(e){return(e.charCodeAt(0)-64&7)+((e.charCodeAt(0)-64&16)>>1)+((e.charCodeAt(1)-64&4)<<2)+((e.charCodeAt(3)-64&4)<<3)}function f(e,t,n){var r,o,i,a,c,f,g=0,v=O;r=S;for(var y,h=O,b=O,w=t.length,C=0;e&&w>C;C++)for(r=S,b=t[C],v=e.firstChild,g=0;!r&&v;v=v.nextSibling)if(1===v.nodeType&&s(v.tagName)===b.tagCode){if(g===b.index){if(h=v,e=b.name,r=b.typeCode,o=b.customID,f=b.elementID,i=p(h,"id"),a=p(h,"type"),c=p(h,"name"),y=l(h).CustomID,!m([o,y])&&o!=y||!m([f,i])&&f!=i||!m([e,c])&&e!=c||!m([r,a])&&a&&r!=d(a))return O;r=E,e=h}g++}return n?e:(r=r&&"none"!==u(e).display.toLowerCase())?e:O}function p(e,t){var n=e.getAttributeNode(t);return n?n.value:O}function m(e){return T(e,function(e){return!e})}function g(e,t){var n,r=t.customID;if(r){var i;r in N&&N[r]?o("duplicate custom id "+r+" were found on multiple elements"):i=j[r],n=i}else e:{if(r=t.elementID){try{n=e.querySelectorAll("#"+r),n.length||(n=e.querySelectorAll("[id='"+r.replace(/'/g,"\\'")+"']"))}catch(a){n=e.querySelectorAll("[id='"+r.replace(/'/g,"\\'")+"']")}if(n&&0!==n.length){if(1===n.length){n=n[0];break e}o("duplicate id "+r+" were found on multiple elements.")}else o("no element with id "+r+" was found.")}n=C}return n}function v(e,t){for(var n,r,i=t.length,a=i,c={},l=e.ownerDocument;a>0;a--){if(n=t[a-1],r=g(l,n),!r&&(n=n.name)&&a===i){r=l;var u,s=t,d=C,f=O,p=s.slice(0,a-1);e:{u=r;for(var m=p.length,v=C,v=C;m>0;m--)if(v=p[m-1],(v=g(u,v))&&1===v.nodeType&&"form"===v.tagName.toLowerCase()){u=v;break e}u=O}(d=u)?f=y(r,n,d,s):o("could not resolve form. form doesn't have an anchor."),r=f}if(r)return i=t.slice(a,i),c.b=i,c.a=r,c}return c.b=t,c.a=e,c}function y(e,t,r,i){var a,e=e.getElementsByName(t);if(1<e.length){if(e=n(e,function(e){return k(r,e)}),b(e))return t=i[i.length-1].index,h(e,t);o("duplicate name "+t+" found on multiple non radio elements.")}else 1===e.length&&(i=e[0],k(r,i)?a=i:o("could not resolve nested element with name "+t+" in form."));return a}function h(e,t){for(var n,r,o,i=[],a=S,c=0;c<e.length;c++)if(o=e[c],r=o.parentNode,-1===L(i,r)&&(i.push(r),r=r.getElementsByTagName(o.tagName),r.length-1>=t)){if(a)return O;n=r[t],a=E}return n}function b(e){for(var t=0;t<e.length;t++){var n=p(e[t],"type");if(!n||"radio"!==n.toLowerCase())return S}return E}var w,C=void 0,E=!0,O=null,S=!1,A=this,k=function(){var e=document.documentElement;return e.compareDocumentPosition||e.contains?function(e,t){var n=9===e.nodeType?e.documentElement:e;return e===t||n.contains&&n.contains(t)||e.compareDocumentPosition&&16&e.compareDocumentPosition(t)}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return E;return S}}(),L=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=e.length,r=0;n>r;r++)if(e[r]===t)return r;return-1},T=Array.prototype.every?function(e,t){return e.every(t)}:function(e,t){for(var n=e.length,r=0;n>r;r++)if(!t(e[r]))return S;return E},D=S,R=S,N={},j={},I=c(a),P={};e("ct.ElementAddressing.bootstrap",function(e,t){t=!!t,w=e,e.ClickTaleSetCustomElementID=a,/complete|interactive/.test(document.readyState)?r(e,t):e.document.addEventListener?e.document.addEventListener("DOMContentLoaded",function(){r(e,t)},S):document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&r(e,t)})}),e("ct.ElementAddressing.elementFromPath",function(e,n,r){var o=!(e[0]instanceof Array);return o&&(e=[e]),e=t(e,function(e){return e=v(n,e),e.a&&0<e.b.length&&(e.a=f(e.a,e.b,r)),!r&&e.a&&"hidden"===u(e.a).visibility.toLowerCase()?O:e.a}),o?e[0]:e}),e("ct.ElementAddressing.pathFromElement",function(e,t){var n,r=0,o=0,i=O,a=[],c=e;if(!t)return a;for(;c&&c!==t;)if(1!==c.nodeType)c=c.parentNode;else{for(o=0,i={},e=c,r=s(c.nodeName),i.tagCode=r,(n=l(e).CustomID)&&(i.customID=n),(n=p(e,"id"))&&(i.elementID=n),(n=p(e,"name"))&&(i.name=n),(n=p(e,"type"))&&(i.typeCode=d(n)),n=c;n=n.previousSibling;)s(n.nodeName)===r&&o++;i.index=o,c=c.parentNode,a.push(i)}return a.reverse(),a}),e("ct.ElementAddressing.elementAndVisibilityFromPath",function(e,n){var r=!(e[0]instanceof Array);r&&(e=[e]);var o=t(e,function(e){if(e=v(n,e),e.a&&0<e.b.length&&(e.a=f(e.a,e.b,E)),e.a){var t={};t.dom=e.a,t.isHidden="hidden"===u(e.a).visibility.toLowerCase(),e=t}else e=O;return e});return r?o[0]:o}),e("ct.ElementAddressing.setCustomElementID",I),e("ct.ElementAddressing.calcTagCode",s),e("ct.ElementAddressing.calcTypeCode",d)}();var exports={},rulesEngine=exports;Observable.prototype.subscribe=function(e){this.subscribers.push(e)},Observable.prototype.notify=function(){var e=this;e.subscribers.forEach(function(t){t.apply(e,arguments)})};var observablesFactory={construct:function(e){return null==e?null:this["construct"+e.type.replace("Condition","")](e)}};State.prototype.evaluate=function(e){};var statesFactory={construct:function(e){return this["construct"+e.type.replace("Condition","")](e)}},actionsFactory={construct:function(e,t){return this["construct"+e.type.replace("Action","")](e,t)}};Action.prototype.execute=function(e){},ClickObservable.prototype=Object.create(Observable.prototype),ClickObservable.prototype.constructor=ClickObservable,observablesFactory.constructClick=function(e){return new ClickObservable(e.ctSelector)},document.addEventListener("mousedown",onMouseDown,!1),document.addEventListener("mouseup",onMouseUp,!1);var clickHandlers={},currentMouseDownElement=null;OrObservable.prototype=Object.create(Observable.prototype),OrObservable.prototype.constructor=OrObservable,observablesFactory.constructOr=function(e){var t=e.childConditions.map(function(e){return observablesFactory.construct(e)});return new OrObservable(t)},PageLoadObservable.prototype=Object.create(Observable.prototype),PageLoadObservable.prototype.constructor=PageLoadObservable,observablesFactory.constructPageLoad=function(){return new PageLoadObservable},CTEventAction.prototype=Object.create(Action.prototype),CTEventAction.prototype.constructor=Action,CTEventAction.prototype.execute=function(){"function"==typeof window.ClickTaleEvent&&window.ClickTaleEvent(this.eventName),logger.log("ClickTaleEvent: "+this.eventName)},actionsFactory.constructCTEvent=function(e){return new CTEventAction(e.eventName)},LocationState.prototype=Object.create(State.prototype),LocationState.prototype.constructor=State,LocationState.prototype.evaluate=function(e){var t=e||window.location.href;switch(t=t.toLowerCase(),this.ignoreQueryString===!0&&(t=t.split(/[?#]/)[0],this.url=this.url.split(/[?#]/)[0]),this.mode){case"AllPages":return!0;case"StartsWith":return 0==t.indexOf(this.url);case"Equals":return t===this.url;case"Contains":return t.indexOf(this.url)>-1}},statesFactory.constructLocation=function(e){return new LocationState(e)},function(e){function t(e){var t,r=JSON.stringify(e),o=r,i={transformationMap:{},transformedObjects:e},a=0,c=0,l={},u=/"([^"]*)"/g;do{var t=u.exec(o);if(t&&t.length>0){var s=t[0];if(s.length>=5&&!l.hasOwnProperty(s)){if(48>a||48>c)a=48,c=48;else{if(!(122>a||122===a&&122>c))continue;c>=122?(c=48,a=n(a)):c=n(c)}var d=String.fromCharCode(a),f=String.fromCharCode(c),p='"'+d+f+'"',m=new RegExp(s.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g");r=r.replace(m,p),i.transformationMap[p]=s,l[s]=""}}}while(t);return i.transformedObjects=JSON.parse(r),i}function n(e){switch(!0){case e>=48&&56>=e:e++;break;case e>=57&&64>=e:e=65;break;case e>=65&&89>=e:e++;break;case e>=90&&96>=e:e=97;break;case e>=97&&121>=e:e++}return e}function r(e){var t=JSON.stringify(e.transformedObjects),n=e.transformationMap,r=null;for(var o in n)n.hasOwnProperty(o)&&(r=new RegExp(o,"g"),t=t.replace(r,n[o]));var i=JSON.parse(t);return i}e.objectTransformer={getTransformedObjects:function(e){var n=null;try{n=t(e)}catch(r){n=e}return n},getOriginalObjects:function(e){var t=r(e);return t}}}(exports);var rules,onRulesBoundHandlers=[];init();}());

/*browsers exclusion start*/function doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler) {
    if ((!toDoHandler) || (!toCheckHandler)) return;
    if (typeof interval == "undefined") interval = 1000;
    if (typeof times == "undefined") times = 20;

    if (--times < 0 && typeof failHandler === 'function') {
        failHandler();
        return;
    }
    if (toCheckHandler()) {
        toDoHandler();
        return;
    }

    setTimeout(function () { doOnlyWhen(toDoHandler, toCheckHandler, interval, times); }, interval);
}
doOnlyWhen(function () { var ct_UA = ClickTaleDetectAgent(); if (!(((ct_UA.t == ct_UA.IE && ct_UA.v <= 8)))) { (function(){var e=!0,i=!1,j=this;var l,m,n,o;function p(){return j.navigator?j.navigator.userAgent:null}o=n=m=l=i;var q;if(q=p()){var r=j.navigator;l=0==q.indexOf("Opera");m=!l&&-1!=q.indexOf("MSIE");n=!l&&-1!=q.indexOf("WebKit");o=!l&&!n&&"Gecko"==r.product}var s=l,u=m,v=o,w=n,x;
a:{var y="",z;if(s&&j.opera)var A=j.opera.version,y="function"==typeof A?A():A;else if(v?z=/rv\:([^\);]+)(\)|;)/:u?z=/MSIE\s+([^\);]+)(\)|;)/:w&&(z=/WebKit\/(\S+)/),z)var B=z.exec(p()),y=B?B[1]:"";if(u){var C,D=j.document;C=D?D.documentMode:void 0;if(C>parseFloat(y)){x=""+C;break a}}x=y}var E={};
function F(b){var a;if(!(a=E[b])){a=0;for(var c=(""+x).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),k=0;0==a&&k<f;k++){var t=c[k]||"",N=d[k]||"",O=RegExp("(\\d*)(\\D*)","g"),P=RegExp("(\\d*)(\\D*)","g");do{var g=O.exec(t)||["","",""],h=P.exec(N)||["","",""];if(0==g[0].length&&0==h[0].length)break;a=((0==g[1].length?0:parseInt(g[1],10))<(0==h[1].length?0:parseInt(h[1],10))?-1:(0==g[1].length?0:parseInt(g[1],10))>
(0==h[1].length?0:parseInt(h[1],10))?1:0)||((0==g[2].length)<(0==h[2].length)?-1:(0==g[2].length)>(0==h[2].length)?1:0)||(g[2]<h[2]?-1:g[2]>h[2]?1:0)}while(0==a)}a=E[b]=0<=a}return a}var G={};function H(){G[9]||(G[9]=u&&!!document.documentMode&&9<=document.documentMode)};!u||H();!u||H();u&&F("8");!w||F("528");v&&F("1.9b")||u&&F("8")||s&&F("9.5")||w&&F("528");!v||F("8");function I(b,a,c,d,f){b&&a&&("undefined"==typeof c&&(c=1E3),"undefined"==typeof d&&(d=20),0>--d?"function"===typeof f&&f():a()?b():setTimeout(function(){I(b,a,c,d,f)},c))};function J(b){function a(){c||(c=e,b())}var c=i;if("complete"===document.readyState||"interactive"===document.readyState)a();else{if(document.addEventListener)document.addEventListener("DOMContentLoaded",a,i);else if(document.attachEvent){try{var d=null!=window.frameElement}catch(f){}if(document.documentElement.doScroll&&!d){var k=function(){if(!c)try{document.documentElement.doScroll("left"),a()}catch(b){setTimeout(k,10)}};k()}document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&
a()})}if(window.addEventListener)window.addEventListener("load",a,i);else if(window.attachEvent)window.attachEvent("onload",a);else{var t=window.onload;window.onload=function(){t&&t();a()}}}};function K(b,a){"function"===typeof ClickTaleEvent&&(a?K.f[b]!==e&&(K.f[b]=e,ClickTaleEvent(b)):ClickTaleEvent(b))}K.f={};window.ClickTaleDetectAgent&&window.ClickTaleDetectAgent()&&window.ClickTaleDetectAgent();var L=K;var M="",Q=document.location.pathname.toLowerCase();function R(b){return 0<b.length?e:i}
function S(){if(!window.ClickTaleFirstPCCGo){window.ClickTaleFirstPCCGo=e;switch(Q){case "/en-us/":case "/en-us":M="Homepage"}M.length&&L("Onload | "+M,e);for(var b=navigator.userAgent,a=void 0,c=[{d:"Windows 10",b:/(Windows 10.0|Windows NT 10.0)/},{d:"Windows 8.1",b:/(Windows 8.1|Windows NT 6.3)/},{d:"Windows 8",b:/(Windows 8|Windows NT 6.2)/},{d:"Windows 7",b:/(Windows 7|Windows NT 6.1)/},{d:"Windows Vista",b:/Windows NT 6.0/},{d:"Windows Server 2003",b:/Windows NT 5.2/},{d:"Windows XP",b:/(Windows NT 5.1|Windows XP)/},
{d:"Windows 2000",b:/(Windows NT 5.0|Windows 2000)/},{d:"Windows ME",b:/(Win 9x 4.90|Windows ME)/},{d:"Windows 98",b:/(Windows 98|Win98)/},{d:"Windows 95",b:/(Windows 95|Win95|Windows_95)/},{d:"Windows NT 4.0",b:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{d:"Windows CE",b:/Windows CE/},{d:"Windows 3.11",b:/Win16/},{d:"Android",b:/Android/,e:/Android\s*([^;]*)/},{d:"Open BSD",b:/OpenBSD/},{d:"Sun OS",b:/SunOS/},{d:"Linux",b:/(Linux|X11)/},{d:"iOS",b:/(iPhone|iPad|iPod)/,e:/(?:iPhone|iPad|iPod)[^;\d]+?(\d+(?:\D\d+)?)/},
{d:"Mac OS X",b:/Mac OS X/,e:/Mac OS X[^\d]*(\d+(?:_\d+)*)/},{d:"Mac OS",b:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{d:"QNX",b:/QNX/},{d:"UNIX",b:/UNIX/},{d:"BeOS",b:/BeOS/},{d:"OS/2",b:/OS\/2/},{d:"Windows Phone",b:/Windows Phone/,e:/Windows Phone[^;\d]+?(\d+(?:\D\d+)?)/},{d:"Search Bot",b:/(gomez|nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/i}],d=0;d<c.length;d++){var f=c[d];if(f.b.test(b)){a=f.d;f.e&&(b=b.match(f.e))&&b[1]&&(a+=" "+b[1]);break}}a&&L("Onload | All Pages: OS = "+
a);R(jQuery('meta[name="ms.opt_tid"]'))&&(a=jQuery('meta[name="ms.opt_tid"]').attr("content"),a.length&&L("Onload | tid: "+a,e));R(jQuery('meta[name="ms.opt_eid"]'))&&(a=jQuery('meta[name="ms.opt_eid"]').attr("content"),a.length&&L("Onload | eid: "+a,e));jQuery(document).mousedown(function(a){var b=jQuery(a.target);if(R(b.closest("UL.shell-header-nav>LI>DIV>A")))L("Action | All Pages: Clicked on "+b.closest("UL.shell-header-nav>LI>DIV>A").text().trim()+" Nav",e);else if(b.closest("UL.shell-header-nav a")){var c=
jQuery("UL.shell-header-nav a").index(b.closest("UL.shell-header-nav a")),b=b.closest("UL.shell-header-nav a:eq("+c+")")[0],c={},d;for(d in a)c[d]=a[d];c.target=b;c.srcElement=b;"function"===typeof window.ClickTaleRegisterElementAction&&(ClickTaleRegisterElementAction("mouseover",c),ClickTaleRegisterElementAction("click",c))}})}}
(function(b){function a(){2==++window.okToStartOn2&&b()}window.okToStartOn2=0;J(function(){a()});if("undefined"!==typeof window.ClickTaleIsRecording&&window.ClickTaleIsRecording()===e)a();else{var c=window.ClickTaleOnRecording||function(){};window.ClickTaleOnRecording=function(){a();return c.apply(this,arguments)}}})(function(){I(S,function(){return window.jQuery&&"function"===typeof jQuery.fn.on?e:i},250,40)});})(); } }, function () { return (typeof ClickTaleDetectAgent === 'function'); }, 500, 20);

