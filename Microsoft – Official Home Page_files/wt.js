/*
 Copyright 2015 webtrends Inc. All Rights Reserved.
 WEBTRENDS PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
*/
(function(k,n,y,v){function p(k,f,p,n){var c=this,y=!1,v=2E3,z="undefined"!=typeof _wt_forceSSL&&_wt_forceSSL?"https:":"https:"==document.location.protocol?"https:":"http:",J="sizzle",E=null,F=!1,A=!1,h={},t=!1;h.s_eventHandlers={};this.isBodyExtant=function(){try{return"undefined"!=typeof document.getElementsByTagName("body")[0]?!0:!1}catch(a){return WT.Debug.error("isBodyExtant: body detection fail, assuming false","002",a),!1}};this.inHead=function(){return t};this.getSelector=function(){switch(J){case "sizzle":if(WT.hasVal(Sizzle))return Sizzle;
break;default:if(null!==E)return E;WT.Debug.error("getSelector:  No Selector found","003");return null}};this.setCustomSelector=function(a,d){J=a;E=d};this.applyStyleSheet=function(a,d){try{var l=f.getElementsByTagName("head")[0],e=f.createElement("style");e.type="text/css";e.id=d;e.styleSheet?e.styleSheet.cssText=a:e.appendChild(f.createTextNode(a));l.appendChild(e)}catch(c){WT.Debug.error("applyStyleSheet:  Failed to failed to apply stylesheet","004",c)}};this.removeStyleSheet=function(a){try{var d=
f.getElementById(a);"undefined"!==typeof d&&null!==d&&d.parentNode.removeChild(d)}catch(l){WT.Debug.debug("removeStyleSheet:  Failed to remove stylesheet")}};this.redirectElement=function(a,d){d&&WT.Debug.debug(d);null!==a&&a.wt_pending&&"true"===a.wt_pending?(WT.Debug.info("click: redirecting to url ["+a.wt_href+"]"),a.href=a.wt_href,a.target=a.wt_target,a.wt_pending="","undefined"!==typeof a.wt_target&&""!==a.wt_target&&null!==a.wt_target?window.open(a.wt_href,a.wt_target):setTimeout(function(){window.location.href=
a.wt_href},0)):WT.Debug.debug("click: redirect not pending or !elm, so not redirecting")};this.hasVal=function(a){return null!==a&&"undefined"!==typeof a?!0:!1};var s=function(){F||(F=!0,WT.fireEvent(new WTEvent(WTEvent.DOM_READY,WTEvent.STATUS_SUCCESS),!0))},B=function(){A||(A=!0,WT.fireEvent(new WTEvent(WTEvent.DOM_ONLOAD,WTEvent.STATUS_SUCCESS),!0))},C=function(a){return"undefined"!==typeof m&&"undefined"!==typeof b[a].contextName&&"undefined"!==typeof m[a]&&m[a]===b[a].contextName?(c.Debug.trace("LOADER:  context '"+
b[a].contextName+"' triggered for "+a),!0):"undefined"===typeof m||"undefined"===typeof m[a]?(c.Debug.trace("LOADER:  published context triggered for "+a),!0):!1};this.click=function(a,d){try{var l=2;if("undefined"!=typeof a&&"object"==typeof a){var e,g;a.type?(e=a,g=a.currentTarget?a.currentTarget:a.srcElement):a.tagName&&(g=a);e&&(e.preventDefault?e.preventDefault():e.returnValue=!1);if(g){if(g.href){g.wt_pending||(g.wt_pending="true",g.wt_href=g.href,g.wt_target=g.target,g.href="javascript:void(0);",
g.target="");d.r_redirectLink=g;var b=d.s_conversionTimeout?d.s_conversionTimeout:v;setTimeout(function(){WT.Debug.info("Click: timed out after "+b);redirectElement(g)},b)}}else d=a,l=1}e={};e.element=a;e.params=d;e.arguments=Array.prototype.slice.call(arguments,l);c.fireEvent(new WTEvent(WTEvent.LOADER_CLICK,WTEvent.STATUS_SUCCESS,null,e))}catch(f){"object"==typeof a&&a.href&&d.r_redirectLink===a&&(a.href=a.wt_href,a.target=a.wt_target),WT.Debug.error("Click: Fatal error, check error message for details.",
"005",f)}};this.execute=function(a){var d={};d.params=a;d.arguments=Array.prototype.slice.call(arguments,1);c.fireEvent(new WTEvent(WTEvent.LOADER_EXECUTE,WTEvent.STATUS_SUCCESS,null,d))};this.loaderConversionTimeoutDefault=function(){return v};this.setLoaderConversionTimeoutDefault=function(a){v=a};this.startTimer=function(a,d){WT.hasVal(b[a])&&(c.Debug.trace("LOADER:  api starting timer for "+d+" ms on "+a),WT.hasVal(d)?b[a]._startTimer(d):b[a]._startTimer(1E4))};this.clearTimer=function(a){b[a]&&
(c.Debug.trace("LOADER:  loader clearing timer for "+a),b[a]._clearTimer(),c.fireEvent(new WTEvent(a+"_"+WTEvent.TIMER_CLEAR,WTEvent.STATUS_SUCCESS)))};this.pollForCondition=function(a,d,l){var e=function(a,d,l,b){setTimeout(function(){b--;a()?(c.Debug.trace("pollForCondition success result\x3d"+a(),"LOADER"),c.Debug.superfine("pollForCondition success condition\x3d"+a.toString(),"LOADER"),d&&(d(),c.Debug.trace("pollForCondition running callback","LOADER"),c.Debug.superfine("pollForCondition callback\x3d"+
d.toString(),"LOADER"))):0<b?e(a,d,l,b):(c.Debug.error("pollForCondition Fail on "+a.toString(),"009"),l&&(l(),c.Debug.superfine("pollForCondition callbackFailure\x3d"+l.toString(),"LOADER")))},c.s_pollInterval)};e(a,d,l,100)};this.paramsMerge=function(a,d,l){var e={};if(WT.hasVal(a))for(var c in a)a.hasOwnProperty(c)&&(e[c]=a[c]);for(var b in d)WT.hasVal(d[b])&&d.hasOwnProperty(b)&&(WT.hasVal(l)&&WT.hasVal(l[b])?e[b]=l[b]:e[b]=d[b]);return e};this.downloadLib=function(a,d,l,e,b,D){c.Debug.info("LOADER:  Start download: "+
z+D+" \x26 attach to "+a+", async\x3d"+b);setTimeout(function(){var e=f.getElementsByTagName(a)[0],q=f.createElement("script");q.type="text/javascript";q.src=z+D;q.setAttribute("async",b);q.setAttribute("defer",b);q.wtHasRun=!1;var h=function(){!1===this.wtHasRun?(d(),this.wtHasRun=!0,c.Debug.info("Completed download: "+z+D+", callback running, set wtHasRun\x3d"+this.wtHasRun,"LOADER"),c.Debug.superfine("downloadLib: successCallback\x3d"+d.toString(),"LOADER")):c.Debug.trace("downloadLib: not running successCallback, since wtHasRun\x3d"+
this.wtHasRun,"LOADER")};d&&(q.onload=h,q.onreadystatechange=h);q.onerror=function(){c.Debug.error("FAILED download: "+z+D+" \x26 attach to "+a+", async\x3d"+b,"010");l&&(l(),c.Debug.superfine("failCallback: "+l.toString(),"LOADER"))};typeof("undefined"!==e)?e.appendChild(q):c.Debug.info("LOADER:  Dom element: "+a+" is not found so not Downloading")},e)};this.downloadLibs=function(a,d,l,e,b){if("undefined"===typeof b)c.Debug.info("LOADER:  downloadLibs srcs is empty");else{var f={},h;for(h in b)b.hasOwnProperty(h)&&
(f[h]="waiting",c.Debug.trace("LOADER:  downloadLibs is waiting on src:"+h+" \x3d "+b[h]),c.downloadLib(a,function(a){return function(){f[a]="complete";c.Debug.trace("LOADER:  downloadLibs is complete src:"+a+" \x3d "+b[a])}}(h),null,l,e,b[h]));c.pollForCondition(function(){for(var a in f)if(f.hasOwnProperty(a)&&"complete"!==f[a])return!1;return!0},function(){c.Debug.debug("LOADER:  downloadLibs completed on all downloads");d()})}};this.parseQueryString=function(a){var d=a;c.hasVal(a)&&c.hasVal(a.location)&&
c.hasVal(a.location.search)||(d=document);if(d.location.search){d=d.location.search.substring(1,d.location.search.length);a=d.split("\x26");null!==a&&0===a.length&&(a=d.split(";"));for(var d=a.length-1,l={},e=0;e<=d;e++){var b=a[e].split("\x3d");b[0]=unescape(b[0]);b[1]=unescape(b[1]);b[0]=b[0].replace(/\+/g," ");b[1]=b[1].replace(/\+/g," ");b[1]=b[1].replace(/<.*\?>/g,"");l[b[0]]=b[1]}return l}return null};this.abortModuleHelper=function(a,d){WT.fireEvent(new WTEvent(a+"_"+WTEvent.LOADER_MODULE_ABORT,
WTEvent.STATUS_SUCCESS));WT.setExecuteState(a,WTEvent.LOADER_MODULE_ABORT);WT.clearTimer(a);WT.Debug.error("Aborting product: "+a,"011");WT.Debug.error("LOADER Error","011",d)};WTEvent=function(a,d,l,b){a&&(a=a.toLowerCase());this.name=a;this.handler=null;this.state=WTEvent.STATUS_UNKNOWN;d&&(this.state=d);this.target=l;this.params={};b&&(this.params=b)};this.addEventHandler=function(a,d,l){if(!a||!d&&!l)return c.Debug.debug("events: Can not add event handler, missing name or listeners. ","LOADER"),
-1;a=a.toLowerCase();h.s_eventHandlers[a]||(h.s_eventHandlers[a]={},h.s_eventHandlers[a].success=[],h.s_eventHandlers[a].fault=[]);var b=!1;if(d){for(var b=!1,g=0;g<h.s_eventHandlers[a].success.length;g++)if(c.hasVal(h.s_eventHandlers[a].success[g])&&h.s_eventHandlers[a].success[g].toString()===d.toString()){b=!0;break}b||(h.s_eventHandlers[a].success.push(d),c.Debug.superfine("addEventHandler success handler"+h.s_eventHandlers[a].success.length+" for "+a+"\nhandler\x3d"+d.toString(),"LOADER"))}g=
b?0:1;if(l){for(var b=!1,f=0;f<h.s_eventHandlers[a].fault.length;f++)if(c.hasVal(h.s_eventHandlers[a].fault[f])&&h.s_eventHandlers[a].fault[f].toString()===l.toString()){b=!0;break}b||(h.s_eventHandlers[a].fault.push(l),c.Debug.superfine("addEventHandler fault handler"+h.s_eventHandlers[a].fault.length+" for "+a+"\nhandler\x3d"+d.toString(),"LOADER"))}return g+(b?0:1)};this.removeEventHandler=function(a,d,b){if(!a)return c.Debug.trace("LOADER removeEventHandler:  events: Can not remove event handler, missing name."),
-1;a=a.toLowerCase();h.s_eventHandlers[a]||(h.s_eventHandlers[a]={},h.s_eventHandlers[a].success=[],h.s_eventHandlers[a].fault=[]);if(!d&&!b)return delete h.s_eventHandlers[a],0;var e=0;if(d)for(var g=0;g<h.s_eventHandlers[a].success.length;g++)if(c.hasVal(h.s_eventHandlers[a].success[g])&&h.s_eventHandlers[a].success[g].toString()==d.toString()){delete h.s_eventHandlers[a].success[g];e=1;break}if(b)for(d=0;d<h.s_eventHandlers[a].fault.length;d++)if(c.hasVal(h.s_eventHandlers[a].fault[d])&&h.s_eventHandlers[a].fault[d].toString()==
b.toString()){delete h.s_eventHandlers[a].fault[d];e++;break}return e};this.fireEvent=function(a,d,b){if(y&&!b)return c.Debug.error("fireEvent: Loader global abort, Aborted due to prior error, check error message for details.","012"),a.name?c.Debug.error("fireEvent(event\x3d'"+a.name+"'): g_loaderAborted due to prior error, check error message for details.","012"):c.Debug.error("fireEvent: Aborted due to prior error, check error message for details.","012"),-1;if(!h.s_eventHandlers[a.name])return c.Debug.trace("fireEvent: no registered event was found for event name: "+
a.name),-1;b=h.s_eventHandlers[a.name][a.state];if(!b)return c.Debug.trace("fireEvent: no event handler was registered for event: "+a.name+" state: "+a.state),-1;for(var e=0,g=0;g<b.length;g++)if(b[g])try{a.handler=b[g],a.params.eventID=(new Date).getTime(),c.Debug.trace("fireEvent: [name:"+a.name+"], state:"+a.state+", handler["+g+"]","LOADER"),c.Debug.superfine("function:"+a.handler.toString()+"]","LOADER"),d?setTimeout(function(a,d){return function(){a(d)}}(b[g],a),0):a.handler(a),e++}catch(f){c.Debug.error("Unhandled Event Exception, [name: "+
a.name+", state: "+a.state+", function: "+a.handler.toString()+"]","013",f)}return e};WTEvent.PREINIT="preinit";WTEvent.INIT="init";WTEvent.PRELOAD="preload";WTEvent.LOAD="load";WTEvent.POSTLOAD="postload";WTEvent.LOADER_ABORT="loader_abort";WTEvent.LOADER_MODULE_ABORT="loader_module_abort";WTEvent.LOADER_CLICK="loader_click";WTEvent.LOADER_EXECUTE="loader_execute";WTEvent.DEBUGGER_CLEAR_COOKIES="debugger_clear_cookies";WTEvent.DEBUGGER_DUMP_PARAMS="debugger_dump_params";WTEvent.DOM_READY="dom_ready";
WTEvent.DOM_ONLOAD="dom_onload";WTEvent.TIMER_EXPIRE="timer_expire";WTEvent.TIMER_CLEAR="timer_clear";WTEvent.STATUS_SUCCESS="success";WTEvent.STATUS_FAULT="fault";WTEvent.STATUS_UNKNOWN="unknown";WTEvent.HIDESHOW="hide_show";WTEvent.PAGEVIEW="pageview";WTEvent.CONVERSION="conversion";WTEvent.DEBUGGER_CHECK_MODE="debugger_check_mode";var K=function(a,d){this._name=a;this._state=d;this._met=!1},r=function(a,d,b){this.prodId=a;this.plugin=new d;this.executeState=r.DOWNLOADING;this.setRunningFlag=!1;
this.stopTime=this.startTime=this.timer=null;this.contextName="default";"undefined"!==typeof b&&(this.contextName=b);var e=this,g={};this.putDependency=function(a){g[a._name]=a};this.clearDependencies=function(){g={}};this.getDependency=function(a){for(var d in g)if(g.hasOwnProperty(d)&&g[d]._name==a)return g[d];return null};this.getExecuteState=function(){return this.executeState};this.hasMetDeps=function(){for(var a in g)if(g.hasOwnProperty(a)&&!1===g[a]._met)return!1;return!0};this.updateDependencyState=
function(a,d){var b=e.getDependency(a);null!==b&&b._state===d&&(b._met=!0)};this._startTimer=function(a){this.timer?c.Debug.info("LOADER:  "+this.prodId+" timer already started, using current timer."):(c.Debug.debug("LOADER:  starting timer for "+e.prodId),this.timer=setTimeout(function(){c.Debug.error("LOADER:  "+e.prodId+"module timer expired calling Abort","015");c.fireEvent(new WTEvent(e.prodId+"_"+WTEvent.TIMER_EXPIRE,WTEvent.STATUS_SUCCESS));c.fireEvent(new WTEvent(e.prodId+"_"+WTEvent.LOADER_MODULE_ABORT,
WTEvent.STATUS_SUCCESS))},a),this.startTime=new Date,c.Debug.info("LOADER:  "+this.prodId+" timer started ["+this.startTime+"]."))};this._clearTimer=function(){this.stopTime=new Date;this.timer&&(clearTimeout(this.timer),this.timer=null);c.Debug.info("LOADER:  "+this.prodId+" timer cleared ["+this.stopTime+"]")}};r.DOWNLOADING="downloading";r.WAITING="waiting";r.READY="ready";r.RUNNING="running";r.COMPLETE="complete";r.ABORTED="aborted";var b={};this.registerPlugin=function(a,d){b[a.ProductName]=
new r(a.ProductName,a,d);b[a.ProductName].executeState=r.DOWNLOADING;WT.hasVal(a.prototype.abort)&&WT.addEventHandler(a.ProductName+"_"+WTEvent.LOADER_MODULE_ABORT,a.prototype.abort);if(WT.hasVal(a.prototype.wtConfigObj.s_dependencies))for(var l=[],l=a.prototype.wtConfigObj.s_dependencies.split(","),c=0;c<l.length;c++){var g=[],g=l[c].split(":");b[a.ProductName].putDependency(new K(g[0],g[1]))}};this.updateDependencies=function(a,d){if(!a||!b[a])return null;if(!d)return b[a].clearDependencies(),null;
var c=[],c=d.split(",");if(!c||0==c.length)return null;b[a].clearDependencies();for(var e=0;e<c.length;e++)if(nameToState=c[e].split(":"),2===nameToState.length)b[a].putDependency(new K(nameToState[0],nameToState[1]));else return null};this.setExecuteState=function(a,d){if(d===WTEvent.LOADER_MODULE_ABORT)b[a].executeState=r.ABORTED;else if(c.getExecuteState(a)!==WTEvent.LOADER_MODULE_ABORT){b[a].executeState=d;c.Debug.trace("setExecuteState:  '"+a+"' to '"+d+"'");for(var l in b)b.hasOwnProperty(l)&&
b[l].updateDependencyState(a,d);for(var e in b)if(b.hasOwnProperty(e)&&(l=b[e].getExecuteState(),b[e].hasMetDeps()&&l==r.READY&&(c.Debug.debug("setExecuteState:  '"+e+"' has met all dependencies \x26\x26 ready, running postload"),WT.hasVal(b[e].plugin[WTEvent.POSTLOAD]))))b[e].plugin[WTEvent.POSTLOAD]()}};this.getExecuteState=function(a){return WT.hasVal(b[a])?b[a].executeState===r.ABORTED?WTEvent.LOADER_MODULE_ABORT:b[a].executeState:null};this.isDependency=function(a){for(var d in b)if(b.hasOwnProperty(d)&&
null!==b[d].getDependency(a))return c.Debug.trace("isDependency:  '"+a+"' is dependency of '"+d+"'"),!0;c.Debug.trace("isDependency:  '"+a+"' is not a dependency of any product");return!1};this.getContextUrl=function(a,d){return"//c.webtrends.com/acs/account/ep4ka8v0wg/js/"+a+"-"+d+".js"};this.getProduct=function(a){for(var d in b)if(b.hasOwnProperty(d)&&a==b[d].prodId)return b[d];return null};this.isReady=function(){return F};this.isLoaded=function(){return A};this.addDOMEvent=function(a,d,b){try{return a.addEventListener?
a.addEventListener(d,b,!1):a.attachEvent?a.attachEvent(d,b):eval("elm."+d+"\x3dfunc;"),0}catch(c){return-1}};this.removeDOMEvent=function(a,d,b){try{return a.removeEventListener?a.removeEventListener(d,b,!1):a.detachEvent&&a.detachEvent(d,b),0}catch(c){return-1}};this.hideAndShow=function(a,d,b,e){try{if((WT.hasVal(a)||"shift"==d||t)&&WT.hasVal(d)&&WT.hasVal(b)){c.Debug.debug("hideAndShow:  "+(t?"tag 'inHead'":"tag 'not inHead'")+", "+(b?"showing":"hiding")+" '"+(a&&a.nodeName?a.nodeName:"unnamed elem")+
"' with type '"+d+"'");var g=function(a){b?WT.removeStyleSheet("wt_StyleSheet"):WT.applyStyleSheet(a,"wt_StyleSheet")};if("display"==d)t?g("body{ display: none !important}"):(a.style.display=b?"":"none",a==f.body||b||(f.body.style.display=""));else if("visibility"==d)t?g("body{ visibility: hidden !important}"):(a.style.visibility=b?"visible":"hidden",a.style.hidden=!b,a==f.body||b||(f.body.style.visibility="visible",f.body.style.hidden=!1));else if("shift"==d||"supershift"==d)if(!b){var h=f.getElementsByTagName("head")[0];
style=f.createElement("style");style.type="text/css";style.id="wt_shiftStyle";style.styleSheet?style.styleSheet.cssText="body{position:absolute !important; left: -1000% !important; visibility: hidden}":style.appendChild(f.createTextNode("body{position:absolute !important; left: -1000% !important;}"));h.appendChild(style)}else{if(b){var k=f.getElementById("wt_shiftStyle");k&&k.parentNode.removeChild(k)}}else if("overlay"==d){var q=f.getElementById("wt_overlay"),p=f.getElementById("wt_overlayStyle"),
n=c.hasVal(e)?e:"#ffffff";if(b&&q)q.parentNode.removeChild(q),p&&p.parentNode.removeChild(p);else if(!b&&!q){t&&c.Debug.error("hideAndShow:  Warning! wt tag detected in head, overlay mode may error out or cause flickering","007");if(!p){var m=f.createElement("style");m.setAttribute("type","text/css");m.setAttribute("id","wt_overlayStyle");g="#wt_overlay{position:absolute;width:100%;height:100%;top:0px;right:0px;bottom:0px;left:0px;background-color:"+n+";z-index:2147483646}";m.styleSheet?m.styleSheet.cssText=
g:m.appendChild(f.createTextNode(g));f.getElementsByTagName("head")[0].appendChild(m)}c.hasVal(e)?q=f.createElement("div"):(q=f.createElement("iframe"),q.frameBorder=0);q.id="wt_overlay";f.getElementsByTagName("body")[0].appendChild(q)}}else"none"==d?c.Debug.trace("LOADER: type: none"):c.Debug.debug("hideAndShow did not contain a matching type, so not hiding/showing");e={};e.displayType=d;e.display=b;WT.fireEvent(new WTEvent(WTEvent.HIDESHOW,WTEvent.STATUS_SUCCESS,a,e))}else c.Debug.error("hideAndShow param list incomplete",
"006")}catch(r){WT.Debug.error("Failure in hide/show functionality.  Verify valid HTML syntax","008",r)}};var L=function(){try{if(document.addEventListener&&("complete"!==document.readyState&&"undefined"!==typeof document.readyState||s(),document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1);s()},!1),/WebKit|Opera/i.test(navigator.userAgent)))var a=setInterval(function(){/loaded|complete/.test(document.readyState)&&(clearInterval(a),
s())},10);document.attachEvent&&("complete"!==document.readyState&&"loading"!==document.readyState||s(),document.attachEvent("onreadystatechange",function(){if("complete"===document.readyState||"loading"===document.readyState)document.detachEvent("onreadystatechange",arguments.callee),s()}));window.addEventListener?window.addEventListener("load",function(){window.removeEventListener("load",arguments.callee,!1);s()},!1):window.attachEvent&&window.attachEvent("onload",function(){window.detachEvent("onload",
arguments.callee,!1);s()});A?B():window.addEventListener?window.addEventListener("load",function(){window.removeEventListener("load",arguments.callee,!1);B()},!1):window.attachEvent&&window.attachEvent("onload",function(){window.detachEvent("onload",arguments.callee,!1);B()})}catch(d){s(),B()}};c.Debug=new function(){this.debugLevel=-1;this._shutdown=!1;var a=[];this.Debugger=null;this.logInfo=function(a){this.info(a)};this.logDebug=function(a){this.debug(a)};this.logTrace=function(a){this.trace(a)};
this.logError=function(a,b,c){this.error(a,b,c)};this.superfine=function(a,b){this._log(5,a,b)};this.trace=function(a,b){this._log(4,a,b)};this.debug=function(a,b){this._log(3,a,b)};this.info=function(a,b){this._log(2,a,b)};this.error=function(a,b,c,g){var f="";c&&(f="string"===typeof c?"\n"+c:"\n"+(c.message?c.message:"")+(c.name?" ["+c.name+"]":"")+(c.fileName?"\n ("+c.fileName+":"+c.lineNumber+")\n"+c.stack:""));this._log(0,(b?b+": ":"")+a+f,g)};this._log=function(b,c,e){e&&(c=e+":  "+c);this._shutdown||
a.push([b,c]);if(this._shutdown)a=[];else if(!(this.debugLevel<b)&&console){e=!0;switch(b){case 0:console.error&&(console.error(c),e=!1);break;case 1:console.warn&&(console.warn(c),e=!1);break;case 2:console.info&&(console.info(c),e=!1);break;case 3:case 4:case 5:console.log&&(console.log(c),e=!1)}!0===e&&console.log&&console.log(c)}};this.setDebugLevel=function(a){this.debugLevel=a};this.clearCookies=function(){WT.fireEvent(new WTEvent(WTEvent.DEBUGGER_CLEAR_COOKIES,WTEvent.STATUS_SUCCESS))};this.dumpParams=
function(){WT.fireEvent(new WTEvent(WTEvent.DEBUGGER_DUMP_PARAMS,WTEvent.STATUS_SUCCESS))};this.checkMode=function(a){WT.fireEvent(new WTEvent(WTEvent.DEBUGGER_CHECK_MODE,WTEvent.STATUS_SUCCESS,{resetFlag:a}))}};t=function(){try{var a=f.getElementsByTagName("script");return"HEAD"==a[a.length-1].parentNode.nodeName?!0:!1}catch(b){return WT.Debug.error("inHead: Failed to detect if in head, assuming inHead","001",b),!0}}();c.isBodyExtant();var x=this.parseQueryString(k);k=function(a,b){c.hasVal(x[a])&&
c.hasVal(b)&&b(x[a])};c.hasVal(x)&&(k("_wt.accountRoot",function(a){accountRoot=a}),k("_wt.s_jsonUrl",function(a){}),k("_wt.debug",function(a){c.Debug.setDebugLevel(a.length)}));var G=function(a){var b={};a=a.split(";");for(var c in a)if(a.hasOwnProperty(c)){var e=a[c].split(":");b[e[0]]=e[1]}return b},m=function(){if(null!==x&&x["_wt.context"])return G(x["_wt.context"]);var a;a:{a=document.cookie.split(";");for(var b=0;b<a.length;b++){var c=[];c[0]=a[b].substring(0,a[b].indexOf("\x3d"));for(c[1]=
a[b].substring(a[b].indexOf("\x3d")+1);" "===c[0].charAt(0);)c[0]=c[0].substring(1,c[0].length);if("_wt.context"==c[0]){a=c[1];break a}}a=null}if("undefined"!==typeof a&&null!==a)return G(a);a:{a=document.getElementsByTagName("meta");for(b=0;b<a.length;b++)if("_wt.context"==a[b].name){a=a[b].content;break a}a=null}if("undefined"!=typeof a&&null!==a)return G(a)}();if("undefined"!==typeof m){c.Debug.info("LOADER:  Found one or more context(s)");for(var H in m)m.hasOwnProperty(H)&&c.Debug.trace("LOADER:  triggers have set contextTriggerMap '"+
H+"':'"+m[H]+"'")}var u=function(a){c.Debug.error("Loader Error: "+a,"016")};c.Debug.info("LOADER:  Version 0.0.1");this.addEventHandler(WTEvent.PREINIT,function(){try{for(var a in b)b.hasOwnProperty(a)&&WT.hasVal(b[a].plugin)&&WT.hasVal(b[a].plugin[WTEvent.PREINIT])&&C(a)&&WT.getExecuteState(a)!==WTEvent.LOADER_MODULE_ABORT&&(c.Debug.debug("LOADER:  product '"+a+"' with context name '"+b[a].contextName+"' _preinit phase start"),b[a].plugin[WTEvent.PREINIT](),c.Debug.debug("LOADER:  product '"+a+
"' with context name '"+b[a].contextName+"' _preinit phase complete"))}catch(d){WT.abortModuleHelper(a,d)}},function(){u("preinit fail")});this.addEventHandler(WTEvent.INIT,function(){try{for(var a in b)b.hasOwnProperty(a)&&WT.hasVal(b[a].plugin)&&WT.hasVal(b[a].plugin[WTEvent.INIT])&&C(a)&&WT.getExecuteState(a)!==WTEvent.LOADER_MODULE_ABORT&&(c.Debug.debug("LOADER:  product '"+a+"' with context name '"+b[a].contextName+"' _init phase start"),b[a].plugin[WTEvent.INIT](),c.Debug.debug("LOADER:  product '"+
a+"' with context name '"+b[a].contextName+"' _init phase complete"))}catch(d){WT.abortModuleHelper(a,d)}},function(){u("init fail")});this.addEventHandler(WTEvent.PRELOAD,function(){try{for(var a in b)b.hasOwnProperty(a)&&WT.hasVal(b[a].plugin)&&WT.hasVal(b[a].plugin[WTEvent.PRELOAD])&&WT.hasVal(b[a].plugin.wtConfigObj)&&!0===b[a].plugin.wtConfigObj.doLoad&&C(a)&&WT.getExecuteState(a)!==WTEvent.LOADER_MODULE_ABORT&&(c.Debug.debug("LOADER:  product '"+a+"' with context name '"+b[a].contextName+"' _preload phase start"),
b[a].plugin[WTEvent.PRELOAD](),c.Debug.debug("LOADER:  product '"+a+"' with context name '"+b[a].contextName+"' _preload phase complete"))}catch(d){WT.abortModuleHelper(a,d)}},function(){u("preload fail")});this.addEventHandler(WTEvent.LOAD,function(){try{for(var a in b)b.hasOwnProperty(a)&&WT.hasVal(b[a].plugin)&&WT.hasVal(b[a].plugin[WTEvent.LOAD])&&WT.hasVal(b[a].plugin.wtConfigObj)&&!0===b[a].plugin.wtConfigObj.doLoad&&C(a)&&WT.getExecuteState(a)!==WTEvent.LOADER_MODULE_ABORT&&(c.Debug.debug("LOADER:  product '"+
a+"' with context name '"+b[a].contextName+"' _load phase start"),b[a].plugin[WTEvent.LOAD](function(a){return function(){WT.setExecuteState(a,r.READY)}}(a)),c.Debug.debug("LOADER:  product '"+a+"' with context name '"+b[a].contextName+"' _load phase complete"))}catch(d){WT.abortModuleHelper(a,d)}},function(){u("load fail")});this.addEventHandler(WTEvent.LOADER_CLICK,function(a){for(var d in b)b.hasOwnProperty(d)&&c.fireEvent(new WTEvent(d+"_"+WTEvent.LOADER_CLICK,WTEvent.STATUS_SUCCESS,null,a.params))},
function(){u("click fail")});this.addEventHandler(WTEvent.LOADER_EXECUTE,function(a){for(var d in b)b.hasOwnProperty(d)&&c.fireEvent(new WTEvent(d+"_"+WTEvent.LOADER_EXECUTE,WTEvent.STATUS_SUCCESS,null,a.params))},function(){u("execute fail")});this.addEventHandler(WTEvent.LOADER_ABORT,function(){y=!0;c.Debug.error("Loader global abort event","017");try{for(var a in b)b.hasOwnProperty(a)&&WT.hasVal(b[a].plugin)&&!0===b[a].plugin.wtConfigObj.doLoad&&(WT.fireEvent(new WTEvent(a+"_"+WTEvent.LOADER_MODULE_ABORT,
WTEvent.STATUS_SUCCESS),!1,!0),WT.setExecuteState(a,WTEvent.LOADER_MODULE_ABORT),WT.clearTimer(a),WT.Debug.error("Aborting product: "+a,"018"))}catch(d){WT.abortModuleHelper(a,d)}},function(){u("abort fail")});this.start=function(){try{L();var a=function(){c.fireEvent(new WTEvent(WTEvent.PREINIT,WTEvent.STATUS_SUCCESS));c.fireEvent(new WTEvent(WTEvent.INIT,WTEvent.STATUS_SUCCESS));c.fireEvent(new WTEvent(WTEvent.PRELOAD,WTEvent.STATUS_SUCCESS));c.fireEvent(new WTEvent(WTEvent.LOAD,WTEvent.STATUS_SUCCESS));
c.Debug.debug("LOADER:  Synchronous functionality has finished firing")};if(WT.hasVal(m)){c.Debug.debug("LOADER:  contextTriggerMap contains contexts");var b=[],f;for(f in m)if(m.hasOwnProperty(f)){var e=c.getContextUrl(f,m[f]);"undefined"!==typeof e&&(c.Debug.debug("LOADER:  adding "+e+" to download"),b.push(e))}c.downloadLibs("head",a,0,!0,b)}else a()}catch(g){c.fireEvent(new WTEvent(WTEvent.LOADER_ABORT,WTEvent.STATUS_SUCCESS))}};c.Debug.debug("WT object created","LOADER");c.Debug.info("To clear Optimize cookies use: 'WT.Debug.clearCookies()'");
c.Debug.info("To dump config params use: 'WT.Debug.dumpParams()'");c.Debug.info("To check the mode use: 'WT.Debug.checkMode(false)' - Use true if you wish to reset the mode.")}"undefined"==typeof WT&&(WT=new p(window,window.document,window.navigator,window.location))})(window,window.document,window.navigator,window.location);WT.sizzleModule=function(){};WT.sizzleModule.prototype.wtConfigObj={libUrl:"//c.webtrends.com/acs/common/js/lib/sizzle.min.js",doLoad:!0,s_dependencies:""};
WT.sizzleModule.prototype.load=function(k){try{WT.updateDependencies("sizzle",this.wtConfigObj.s_dependencies),"undefined"!=typeof Sizzle&&WT.hasVal(Sizzle)||!WT.isDependency("sizzle")?k():WT.downloadLib("head",k,function(){WT.fireEvent(new WTEvent("sizzle"+WTEvent.LOADER_MODULE_ABORT,WTEvent.STATUS_SUCCESS))},0,!0,this.wtConfigObj.libUrl)}catch(n){WT.abortModuleHelper("optimize",n)}};WT.sizzleModule.prototype.postload=function(){WT.setExecuteState("sizzle","running")};
WT.sizzleModule.ProductName="sizzle";WT.registerPlugin(WT.sizzleModule,"default");WT.jsonModule=function(){};WT.jsonModule.prototype.wtConfigObj={libUrl:"//c.webtrends.com/acs/common/js/lib/json2.js",doLoad:!0};
WT.jsonModule.prototype.load=function(k){try{WT.updateDependencies("json",this.wtConfigObj.s_dependencies),"undefined"===typeof JSON&&WT.isDependency("json")?(WT.Debug.debug("JSON not detected"),s_jsonLoaded=!1,WT.downloadLib("head",k,function(){WT.fireEvent(new WTEvent("json"+WTEvent.LOADER_MODULE_ABORT,WTEvent.STATUS_SUCCESS))},0,!0,this.wtConfigObj.libUrl)):(s_jsonLoaded=!0,k())}catch(n){WT.abortModuleHelper("optimize",n)}};
WT.jsonModule.prototype.postload=function(){WT.setExecuteState("json","running")};WT.jsonModule.ProductName="json";WT.registerPlugin(WT.jsonModule,"default");WT.optimizeModule=function(){};
WT.optimizeModule.prototype.wtConfigObj={alwaysLoad:!0,s_keyToken:"fbaed4f873f801dbc6ad34600e85fda99a00c15cb7",doLoad:!1,s_loaderHide:!0,s_pageTimeout:4E3,s_dependencies:"sizzle:ready,json:ready",domId:"body",s_pageDisplayMode:"visibility",defaultCollectionServer:"scs.webtrends.com",s_domainKey:311121,libUrl:"//c.webtrends.com/acs/common/product/optimize/js/4.1/optimize.js",accountGuid:"ep4ka8v0wg",s_otsServer:"ots.optimize.webtrends.com",s_pageMode:"dom"};
WT.optimizeModule.prototype.preinit=function(){try{WT.Debug.debug("PREINIT: Executing Preinit script")}catch(k){WT.abortModuleHelper("optimize",k)}};
WT.optimizeModule.prototype.init=function(){try{/(.+\.)?microsoftstore\.com/i.test(document.location.hostname)&&(this.wtConfigObj.s_pageDisplayMode="none",this.wtConfigObj.s_pageMode="head",this.wtConfigObj.s_pageTimeout=12E3,this.wtConfigObj.doLoad=!0),this.wtConfigObj.doLoad=this.wtConfigObj.doLoad||this.wtConfigObj.alwaysLoad}catch(k){WT.abortModuleHelper("optimize",k)}};
WT.optimizeModule.prototype.preload=function(){try{var k=0;WT.optimizeModule.prototype.wtConfigObj.s_conversionTimeout&&(k=WT.optimizeModule.prototype.wtConfigObj.s_conversionTimeout);WT.setLoaderConversionTimeoutDefault(Math.max(k,WT.loaderConversionTimeoutDefault()));WT.Debug.debug("PRELOAD:  Executing preload script");WT.updateDependencies("optimize",this.wtConfigObj.s_dependencies);if(WT.isBodyExtant()||"shift"===this.wtConfigObj.s_pageDisplayMode||WT.inHead()){var n=document.getElementsByTagName("body")[0];
WT.hideAndShow(n,this.wtConfigObj.s_pageDisplayMode,!1,this.wtConfigObj.overlayColor)}else{WT.Debug.debug("LOADER:  body element not found, hide via polling");var y=this.wtConfigObj.s_pageDisplayMode,v=this.wtConfigObj.overlayColor,p=this.wtConfigObj.s_pageTimeout;WT.pollForCondition(WT.isBodyExtant,function(){var f=document.getElementsByTagName("body")[0];!WT.hasVal(WT.optimize)||WT.hasVal(WT.optimize)&&!0!==WT.optimize.g_done?(WT.Debug.info("LOADER:  Optimize not done so hiding"),WT.hideAndShow(f,
y,!1,v)):WT.Debug.info("LOADER:  Optimize done flag so not hiding");WT.startTimer("optimize",p)})}}catch(w){WT.abortModuleHelper("optimize",w)}};WT.optimizeModule.prototype.load=function(k){try{WT.Debug.debug("LOAD:  Executing load phase"),WT.downloadLib("head",k,function(){WT.fireEvent(new WTEvent("optimize_"+WTEvent.LOADER_MODULE_ABORT,WTEvent.STATUS_SUCCESS))},0,!0,this.wtConfigObj.libUrl)}catch(n){WT.abortModuleHelper("optimize",n)}};
WT.optimizeModule.prototype.postload=function(){WT.Debug.debug("POSTLOAD:  Executing postload optimize complete");try{WT.Debug.info("LOADER:  WT.optimizeModule.prototype: postload");WT.fireEvent(new WTEvent("optimize_"+WTEvent.POSTLOAD,WTEvent.STATUS_SUCCESS));WTEvent.OPTIMIZE_LIB_LOAD="optimize_library_load";if("undefined"!=typeof WT.optimize&&"running"!=WT.getExecuteState("optimize"))WT.setExecuteState("optimize","running"),WT.Debug.info("LOADER:  Optimize dependencies complete, running setup call"),
WT.optimize.setup(WT.optimizeModule.prototype.wtConfigObj);else if("running"!=WT.getExecuteState("optimize")){WT.Debug.info("LOADER:  Optimize dependencies complete, but optimize object not ready, adding eventHandler");var k=function(){"running"!=WT.getExecuteState("optimize")&&(WT.setExecuteState("optimize","running"),WT.Debug.info("LOADER:  running setup call"),WT.optimize.setup(WT.optimizeModule.prototype.wtConfigObj),WT.removeEventHandler(WTEvent.OPTIMIZE_LIB_LOAD,k))};WT.addEventHandler(WTEvent.OPTIMIZE_LIB_LOAD,
k)}eval(function(k,n,p,w,f,I){f=function(k){return(k<n?"":f(parseInt(k/n)))+(35<(k%=n)?String.fromCharCode(k+29):k.toString(36))};if(!"".replace(/^/,String)){for(;p--;)I[f(p)]=w[p]||f(p);w=[function(f){return I[f]}];f=function(){return"\\w+"};p=1}for(;p--;)w[p]&&(k=k.replace(RegExp("\\b"+f(p)+"\\b","g"),w[p]));return k}("5 H\x3dB;6 Z(){5 v\x3d1g;6 1g(){9(4){14(5 1f 1b 4){9(V h!\x3d'3'){h.z(\"u w - M: \"+1f+\" 1J: \"+4[1f].c)}}}9(V h!\x3d'3')h.z('u w - 1g: 1N');5 L\x3d[],W\x3d[],X\x3d[],16\x3d[],12\x3d[],T\x3d[];5 b\x3d{};14(5 p 1b 4){9(~4[p].c.1K(\"1h\")){1M}L.G(4[p].d);W.G(4[p].s);X.G(4[p].x);T.G(4[p].c);12.G(4[p].t);16.G(4[p].i);9(V h!\x3d'3'){h.z(\"u w - M: \"+4[p].d+\"    s: \"+4[p].s);h.z(\"u w - M: \"+4[p].d+\"    x: \"+4[p].x);h.z(\"u w - M: \"+4[p].d+\"    c: \"+4[p].c);h.z(\"u w - M: \"+4[p].d+\"    t: \"+4[p].t);h.z(\"u w - M: \"+4[p].d+\"    i: \"+4[p].i)}}9(L.1B\x3e0)E.1w\x26\x261w(\"1L.1O\",\"11\",\"8.13\",\"1t\",\"8.15\",L.l(';'),\"8.10\",W.l(';'),\"8.Y\",X.l(';'),\"8.19\",T.l(';'));9(L.1B\x3e0){b[\"8.15\"]\x3d{n:\"8.15\",o:L.l(';'),k:a};b[\"8.10\"]\x3d{n:\"8.10\",o:W.l(';'),k:a};b[\"8.Y\"]\x3d{n:\"8.Y\",o:X.l(';'),k:a};b[\"8.19\"]\x3d{n:\"8.19\",o:T.l(';'),k:a};b[\"8.1p\"]\x3d{n:\"8.1p\",o:16.l(';'),k:a};b[\"8.1r\"]\x3d{n:\"8.1r\",o:12.l(';'),k:a};b[\"8.13\"]\x3d{n:\"8.13\",o:\"1t\",k:a};14(5 m 1b b){b[m].k\x3d1u.1U('b');b[m].k.n\x3db[m].n;b[m].k.o\x3db[m].o;1u.2g('29')[0].2f(b[m].k)}}}5 D\x3d18();5 4\x3d{};5 1i\x3dB;5 1e\x3d0;5 1a\x3d0;5 1z\x3d2a;5 f\x3da;5 N\x3da;5 K\x3d6(1s){A 1s};9(!H)H\x3dO('1A');9(H\x3d\x3d-1)A;9(!D){1C(6(){Z()},28);A}F(H);6 18(){A E.27||(E.Q\x26\x26E.Q.25)||a}6 j(1v,1G,1H){5 D\x3d18();5 1o\x3d(D\x26\x26D.j)||(E.Q\x26\x26Q.j);1o.2b(D||E.Q,[1v,1G,1H])}6 q(U){A U.17\x26\x26U.17.1E\x26\x26U.17.1E()||{}}6 O(C){A 1C(6(){9(V h!\x3d'3')h.2c('u w - 2e 2d 2h 26');9(C\x3d\x3d\x3d'1d'){5 e\x3dS K({d:'3',R:'3',s:'3',x:'3',i:'3',c:'23',t:'3',P:'3',I:'1P',J:B,r:a});4[C]\x3de}1F 9(C\x3d\x3d\x3d'1A'){5 e\x3dS K({d:'3',R:'3',s:'3',x:'3',i:'3',c:'24',t:'3',P:'3',I:'1V',J:B,r:a});H\x3d-1;4[C]\x3de}1F{4[C].c\x3d'1T'}9(N!\x3da)4[C].c\x3dN;v()},1z)}j(y.1y,6(7){5 2\x3dq(7);9(f\x3e0)F(f);f\x3d0;5 e\x3dS K({d:2['g']||'3',R:2['1c']||'3',s:2['1j']||'3',x:2['1k']||2['1n']||'3',i:2['i']||'3',c:2['1S']||'3',t:2['1l']||'3',P:2['1m']||'3',I:'1y',J:B,r:a});4[e.d]\x3de;1e++;4[e.d].r\x3dO(e.d)});j(y.1Q,6(7){9(1i){A}1i\x3d1x},6(7){});j(y.1D,6(7){5 2\x3dq(7);4[2.g].J\x3d1x;4[2.g].I\x3d\"1D\";F(4[2.g].r);1a++;F(4[2.g].r);9(1a\x3d\x3d\x3d1e){v()}},6(7){5 2\x3dq(7);4[2.g].c\x3d'1R';v()});j(y.1W,6(7){5 2\x3dq(7);4[2.g].c\x3d'1I';v()},6(7){5 2\x3dq(7);4[2.g].c\x3d'1I';v()});j(y.1X,6(7){N\x3d\"1h\"},6(7){N\x3d\"1h\"});j(y.22,6(7){9(f\x3d\x3da)f\x3dO('1d')},6(7){9(f\x3d\x3da)f\x3dO('1d')});j(y.21,6(7){},6(7){5 2\x3dq(7);5 e\x3dS K({d:2['g']||'3',R:2['1c']||'3',s:2['1j']||'3',x:2['1k']||2['1n']||'3',i:2['i']||'3',c:'20',t:2['1l']||'3',P:2['1m']||'3',I:'1Y',J:B,r:a});F(f);f\x3d-1;4[2.g]\x3de;v()});j(y.1Z,6(7){},6(7){5 2\x3dq(7);5 e\x3dS K({d:2['g']||'3',R:2['1c']||'3',s:2['1j']||'3',x:2['1k']||2['1n']||'3',i:2['i']||'3',c:'1q',t:2['1l']||'3',P:2['1m']||'3',I:'1q',J:B,r:a});4[2.g]\x3de;F(f);f\x3d-1;v()})}Z();",
62,142,"  targetParams undefined oProjects var function event ms if null meta runState projectAlias oProject masterFallBackTimer testAlias console testGroup addEventHandler ele join  name content  getProjectParams r_timer testID testType Optimize trackOptimizeCallback Tracking expID WTEvent info return false proj WTO window clearTimeout push trackOptimizeTestsNoTestTimer currentState pageviewTracked CLASS_PROJECT names Project masterState getDelayedTrackTimer testMode WT projectID new states oEvent typeof tests exps opt_eid trackOptimizeTests opt_tid  type expe for opt_pnm group target getWTO opt_sta iPageviewsTracked in r_testID masterFallbackTimer iProjectsCount sProjectAlias trackMS INVALID_TEST_ERROR isDone r_runID r_experimentID r_type s_mode r_personalizedID func_addEventHandler opt_grp UNKNOWN_ERROR opt_typ params wto document sEventName MscomCustomEvent true RENDER iTimeout noProjectFallbackTimer length setTimeout PAGEVIEW getParams else fHandlerSuccess fHandlerFault TIMER_EXPIRE_ERROR State indexOf wcs continue START cot MASTERFALLBACK DONE PAGEVIEW_ERROR r_runState PAGEVIEW_TIMEOUT_ERROR createElement NO_PROJECT TIMER_EXPIRE INVALID ABORT_ERROR STATUS_UNKNOWN TEST_ABORT_ERROR ABORT CONTROL_RESPONSE MASTERFALLBACK_TIMER_ERROR NO_PROJECT_ERROR optimize timeout WTOptimize 50 head 10000 apply warn tracking Initiating appendChild getElementsByTagName after".split(" "),
0,{}))}catch(n){WT.abortModuleHelper("optimize",n)}};
WT.optimizeModule.prototype.abort=function(){try{WT.Debug.debug("ABORT:  Executing optimizeModule abort");WT.Debug.error("WT.optimizeModule.prototype: abort",145,null,"LOADER");var k=WT.optimizeModule.prototype.wtConfigObj.s_pageDisplayMode;(WT.isBodyExtant()||"shift"===k||WT.inHead())&&WT.optimizeModule.prototype.wtConfigObj.s_loaderHide&&(WT.Debug.error("Optimize abort, so unhiding body ... ",146,null,"LOADER"),WT.hideAndShow(document.getElementsByTagName("body")[0],k,!0,WT.optimizeModule.prototype.wtConfigObj.overlayColor));
WT.setExecuteState("optimize",WTEvent.LOADER_MODULE_ABORT);WT.clearTimer(WT.optimizeModule.ProductName);WT.hasVal(WT.optimize)&&WT.hasVal(WT.optimize.g_Aborted)&&!1===WT.optimize.g_Aborted&&WT.fireEvent(new WTEvent(WTEvent.ABORT,WTEvent.STATUS_FAULT))}catch(n){WT.abortModuleHelper("optimize",n)}};WT.optimizeModule.ProductName="optimize";WT.registerPlugin(WT.optimizeModule,"MSCMG");WT.start();