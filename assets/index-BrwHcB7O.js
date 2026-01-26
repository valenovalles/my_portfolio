function Cp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Np=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ja(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dc={exports:{}},oi={},pc={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr=Symbol.for("react.element"),Pp=Symbol.for("react.portal"),jp=Symbol.for("react.fragment"),Tp=Symbol.for("react.strict_mode"),Op=Symbol.for("react.profiler"),Rp=Symbol.for("react.provider"),Lp=Symbol.for("react.context"),zp=Symbol.for("react.forward_ref"),Mp=Symbol.for("react.suspense"),Ip=Symbol.for("react.memo"),$p=Symbol.for("react.lazy"),Bs=Symbol.iterator;function Ap(e){return e===null||typeof e!="object"?null:(e=Bs&&e[Bs]||e["@@iterator"],typeof e=="function"?e:null)}var mc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hc=Object.assign,vc={};function Un(e,t,n){this.props=e,this.context=t,this.refs=vc,this.updater=n||mc}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yc(){}yc.prototype=Un.prototype;function Ta(e,t,n){this.props=e,this.context=t,this.refs=vc,this.updater=n||mc}var Oa=Ta.prototype=new yc;Oa.constructor=Ta;hc(Oa,Un.prototype);Oa.isPureReactComponent=!0;var Vs=Array.isArray,gc=Object.prototype.hasOwnProperty,Ra={current:null},wc={key:!0,ref:!0,__self:!0,__source:!0};function xc(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)gc.call(t,r)&&!wc.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Fr,type:e,key:i,ref:a,props:o,_owner:Ra.current}}function Fp(e,t){return{$$typeof:Fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function La(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fr}function Dp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ws=/\/+/g;function Gi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dp(""+e.key):t.toString(36)}function mo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Fr:case Pp:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Gi(a,0):r,Vs(o)?(n="",e!=null&&(n=e.replace(Ws,"$&/")+"/"),mo(o,t,n,"",function(s){return s})):o!=null&&(La(o)&&(o=Fp(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Ws,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Vs(e))for(var l=0;l<e.length;l++){i=e[l];var u=r+Gi(i,l);a+=mo(i,t,n,u,o)}else if(u=Ap(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=r+Gi(i,l++),a+=mo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Qr(e,t,n){if(e==null)return e;var r=[],o=0;return mo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Up(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},ho={transition:null},Bp={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:ho,ReactCurrentOwner:Ra};function Sc(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Qr,forEach:function(e,t,n){Qr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qr(e,function(){t++}),t},toArray:function(e){return Qr(e,function(t){return t})||[]},only:function(e){if(!La(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Un;W.Fragment=jp;W.Profiler=Op;W.PureComponent=Ta;W.StrictMode=Tp;W.Suspense=Mp;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bp;W.act=Sc;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hc({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Ra.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)gc.call(t,u)&&!wc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var s=0;s<u;s++)l[s]=arguments[s+2];r.children=l}return{$$typeof:Fr,type:e.type,key:o,ref:i,props:r,_owner:a}};W.createContext=function(e){return e={$$typeof:Lp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rp,_context:e},e.Consumer=e};W.createElement=xc;W.createFactory=function(e){var t=xc.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:zp,render:e}};W.isValidElement=La;W.lazy=function(e){return{$$typeof:$p,_payload:{_status:-1,_result:e},_init:Up}};W.memo=function(e,t){return{$$typeof:Ip,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=ho.transition;ho.transition={};try{e()}finally{ho.transition=t}};W.unstable_act=Sc;W.useCallback=function(e,t){return Le.current.useCallback(e,t)};W.useContext=function(e){return Le.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};W.useEffect=function(e,t){return Le.current.useEffect(e,t)};W.useId=function(){return Le.current.useId()};W.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Le.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};W.useRef=function(e){return Le.current.useRef(e)};W.useState=function(e){return Le.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Le.current.useTransition()};W.version="18.3.1";pc.exports=W;var T=pc.exports;const kc=ja(T),Pl=Cp({__proto__:null,default:kc},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp=T,Wp=Symbol.for("react.element"),bp=Symbol.for("react.fragment"),Hp=Object.prototype.hasOwnProperty,Qp=Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yp={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Hp.call(t,r)&&!Yp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Wp,type:e,key:i,ref:a,props:o,_owner:Qp.current}}oi.Fragment=bp;oi.jsx=_c;oi.jsxs=_c;dc.exports=oi;var C=dc.exports,jl={},Ec={exports:{}},He={},Cc={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var P=z.length;z.push(R);e:for(;0<P;){var D=P-1>>>1,F=z[D];if(0<o(F,R))z[D]=R,z[P]=F,P=D;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var R=z[0],P=z.pop();if(P!==R){z[0]=P;e:for(var D=0,F=z.length,Te=F>>>1;D<Te;){var _=2*(D+1)-1,cn=z[_],A=_+1,H=z[A];if(0>o(cn,P))A<F&&0>o(H,cn)?(z[D]=H,z[A]=P,D=A):(z[D]=cn,z[_]=P,D=_);else if(A<F&&0>o(H,P))z[D]=H,z[A]=P,D=A;else break e}}return R}function o(z,R){var P=z.sortIndex-R.sortIndex;return P!==0?P:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],s=[],c=1,f=null,d=3,m=!1,y=!1,g=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var R=n(s);R!==null;){if(R.callback===null)r(s);else if(R.startTime<=z)r(s),R.sortIndex=R.expirationTime,t(u,R);else break;R=n(s)}}function w(z){if(g=!1,v(z),!y)if(n(u)!==null)y=!0,V(S);else{var R=n(s);R!==null&&je(w,R.startTime-z)}}function S(z,R){y=!1,g&&(g=!1,h(N),N=-1),m=!0;var P=d;try{for(v(R),f=n(u);f!==null&&(!(f.expirationTime>R)||z&&!M());){var D=f.callback;if(typeof D=="function"){f.callback=null,d=f.priorityLevel;var F=D(f.expirationTime<=R);R=e.unstable_now(),typeof F=="function"?f.callback=F:f===n(u)&&r(u),v(R)}else r(u);f=n(u)}if(f!==null)var Te=!0;else{var _=n(s);_!==null&&je(w,_.startTime-R),Te=!1}return Te}finally{f=null,d=P,m=!1}}var E=!1,k=null,N=-1,$=5,L=-1;function M(){return!(e.unstable_now()-L<$)}function U(){if(k!==null){var z=e.unstable_now();L=z;var R=!0;try{R=k(!0,z)}finally{R?B():(E=!1,k=null)}}else E=!1}var B;if(typeof p=="function")B=function(){p(U)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,X=K.port2;K.port1.onmessage=U,B=function(){X.postMessage(null)}}else B=function(){x(U,0)};function V(z){k=z,E||(E=!0,B())}function je(z,R){N=x(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,V(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var P=d;d=R;try{return z()}finally{d=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var P=d;d=z;try{return R()}finally{d=P}},e.unstable_scheduleCallback=function(z,R,P){var D=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?D+P:D):P=D,z){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=P+F,z={id:c++,callback:R,priorityLevel:z,startTime:P,expirationTime:F,sortIndex:-1},P>D?(z.sortIndex=P,t(s,z),n(u)===null&&z===n(s)&&(g?(h(N),N=-1):g=!0,je(w,P-D))):(z.sortIndex=F,t(u,z),y||m||(y=!0,V(S))),z},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(z){var R=d;return function(){var P=d;d=R;try{return z.apply(this,arguments)}finally{d=P}}}})(Nc);Cc.exports=Nc;var Kp=Cc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp=T,be=Kp;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pc=new Set,vr={};function sn(e,t){Ln(e,t),Ln(e+"Capture",t)}function Ln(e,t){for(vr[e]=t,e=0;e<t.length;e++)Pc.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tl=Object.prototype.hasOwnProperty,Gp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bs={},Hs={};function Jp(e){return Tl.call(Hs,e)?!0:Tl.call(bs,e)?!1:Gp.test(e)?Hs[e]=!0:(bs[e]=!0,!1)}function Zp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qp(e,t,n,r){if(t===null||typeof t>"u"||Zp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var za=/[\-:]([a-z])/g;function Ma(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(za,Ma);xe[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(za,Ma);xe[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(za,Ma);xe[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ia(e,t,n,r){var o=xe.hasOwnProperty(t)?xe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qp(t,n,o,r)&&(n=null),r||o===null?Jp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yr=Symbol.for("react.element"),pn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),$a=Symbol.for("react.strict_mode"),Ol=Symbol.for("react.profiler"),jc=Symbol.for("react.provider"),Tc=Symbol.for("react.context"),Aa=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),Fa=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Oc=Symbol.for("react.offscreen"),Qs=Symbol.iterator;function Kn(e){return e===null||typeof e!="object"?null:(e=Qs&&e[Qs]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Ji;function rr(e){if(Ji===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ji=t&&t[1]||""}return`
`+Ji+e}var Zi=!1;function qi(e,t){if(!e||Zi)return"";Zi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{Zi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?rr(e):""}function e0(e){switch(e.tag){case 5:return rr(e.type);case 16:return rr("Lazy");case 13:return rr("Suspense");case 19:return rr("SuspenseList");case 0:case 2:case 15:return e=qi(e.type,!1),e;case 11:return e=qi(e.type.render,!1),e;case 1:return e=qi(e.type,!0),e;default:return""}}function zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case pn:return"Portal";case Ol:return"Profiler";case $a:return"StrictMode";case Rl:return"Suspense";case Ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tc:return(e.displayName||"Context")+".Consumer";case jc:return(e._context.displayName||"Context")+".Provider";case Aa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fa:return t=e.displayName||null,t!==null?t:zl(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return zl(e(t))}catch{}}return null}function t0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zl(t);case 8:return t===$a?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function n0(e){var t=Rc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kr(e){e._valueTracker||(e._valueTracker=n0(e))}function Lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function To(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ml(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ys(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zc(e,t){t=t.checked,t!=null&&Ia(e,"checked",t,!1)}function Il(e,t){zc(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$l(e,t.type,n):t.hasOwnProperty("defaultValue")&&$l(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ks(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $l(e,t,n){(t!=="number"||To(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var or=Array.isArray;function Cn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Al(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(or(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function Mc(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ic(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ic(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xr,$c=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r0=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){r0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ar[t]=ar[e]})});function Ac(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ar.hasOwnProperty(e)&&ar[e]?(""+t).trim():t+"px"}function Fc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ac(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var o0=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dl(e,t){if(t){if(o0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vl=null,Nn=null,Pn=null;function Js(e){if(e=Br(e)){if(typeof Vl!="function")throw Error(j(280));var t=e.stateNode;t&&(t=ui(t),Vl(e.stateNode,e.type,t))}}function Dc(e){Nn?Pn?Pn.push(e):Pn=[e]:Nn=e}function Uc(){if(Nn){var e=Nn,t=Pn;if(Pn=Nn=null,Js(e),t)for(e=0;e<t.length;e++)Js(t[e])}}function Bc(e,t){return e(t)}function Vc(){}var el=!1;function Wc(e,t,n){if(el)return e(t,n);el=!0;try{return Bc(e,t,n)}finally{el=!1,(Nn!==null||Pn!==null)&&(Vc(),Uc())}}function gr(e,t){var n=e.stateNode;if(n===null)return null;var r=ui(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Wl=!1;if(_t)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Wl=!1}function i0(e,t,n,r,o,i,a,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(c){this.onError(c)}}var sr=!1,Oo=null,Ro=!1,bl=null,l0={onError:function(e){sr=!0,Oo=e}};function a0(e,t,n,r,o,i,a,l,u){sr=!1,Oo=null,i0.apply(l0,arguments)}function s0(e,t,n,r,o,i,a,l,u){if(a0.apply(this,arguments),sr){if(sr){var s=Oo;sr=!1,Oo=null}else throw Error(j(198));Ro||(Ro=!0,bl=s)}}function un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zs(e){if(un(e)!==e)throw Error(j(188))}function u0(e){var t=e.alternate;if(!t){if(t=un(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Zs(o),e;if(i===r)return Zs(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Hc(e){return e=u0(e),e!==null?Qc(e):null}function Qc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qc(e);if(t!==null)return t;e=e.sibling}return null}var Yc=be.unstable_scheduleCallback,qs=be.unstable_cancelCallback,c0=be.unstable_shouldYield,f0=be.unstable_requestPaint,se=be.unstable_now,d0=be.unstable_getCurrentPriorityLevel,Ua=be.unstable_ImmediatePriority,Kc=be.unstable_UserBlockingPriority,Lo=be.unstable_NormalPriority,p0=be.unstable_LowPriority,Xc=be.unstable_IdlePriority,ii=null,ht=null;function m0(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ii,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:y0,h0=Math.log,v0=Math.LN2;function y0(e){return e>>>=0,e===0?32:31-(h0(e)/v0|0)|0}var Gr=64,Jr=4194304;function ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=ir(l):(i&=a,i!==0&&(r=ir(i)))}else a=n&~o,a!==0?r=ir(a):i!==0&&(r=ir(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-lt(t),o=1<<n,r|=e[n],t&=~o;return r}function g0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-lt(i),l=1<<a,u=o[a];u===-1?(!(l&n)||l&r)&&(o[a]=g0(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gc(){var e=Gr;return Gr<<=1,!(Gr&4194240)&&(Gr=64),e}function tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function x0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-lt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ba(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-lt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function Jc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zc,Va,qc,ef,tf,Ql=!1,Zr=[],It=null,$t=null,At=null,wr=new Map,xr=new Map,Rt=[],S0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eu(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xr.delete(t.pointerId)}}function Gn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Br(t),t!==null&&Va(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function k0(e,t,n,r,o){switch(t){case"focusin":return It=Gn(It,e,t,n,r,o),!0;case"dragenter":return $t=Gn($t,e,t,n,r,o),!0;case"mouseover":return At=Gn(At,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return wr.set(i,Gn(wr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,xr.set(i,Gn(xr.get(i)||null,e,t,n,r,o)),!0}return!1}function nf(e){var t=Gt(e.target);if(t!==null){var n=un(t);if(n!==null){if(t=n.tag,t===13){if(t=bc(n),t!==null){e.blockedOn=t,tf(e.priority,function(){qc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=Br(n),t!==null&&Va(t),e.blockedOn=n,!1;t.shift()}return!0}function tu(e,t,n){vo(e)&&n.delete(t)}function _0(){Ql=!1,It!==null&&vo(It)&&(It=null),$t!==null&&vo($t)&&($t=null),At!==null&&vo(At)&&(At=null),wr.forEach(tu),xr.forEach(tu)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ql||(Ql=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,_0)))}function Sr(e){function t(o){return Jn(o,e)}if(0<Zr.length){Jn(Zr[0],e);for(var n=1;n<Zr.length;n++){var r=Zr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&Jn(It,e),$t!==null&&Jn($t,e),At!==null&&Jn(At,e),wr.forEach(t),xr.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)nf(n),n.blockedOn===null&&Rt.shift()}var jn=Pt.ReactCurrentBatchConfig,Mo=!0;function E0(e,t,n,r){var o=G,i=jn.transition;jn.transition=null;try{G=1,Wa(e,t,n,r)}finally{G=o,jn.transition=i}}function C0(e,t,n,r){var o=G,i=jn.transition;jn.transition=null;try{G=4,Wa(e,t,n,r)}finally{G=o,jn.transition=i}}function Wa(e,t,n,r){if(Mo){var o=Yl(e,t,n,r);if(o===null)fl(e,t,r,Io,n),eu(e,r);else if(k0(o,e,t,n,r))r.stopPropagation();else if(eu(e,r),t&4&&-1<S0.indexOf(e)){for(;o!==null;){var i=Br(o);if(i!==null&&Zc(i),i=Yl(e,t,n,r),i===null&&fl(e,t,r,Io,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else fl(e,t,r,null,n)}}var Io=null;function Yl(e,t,n,r){if(Io=null,e=Da(r),e=Gt(e),e!==null)if(t=un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Io=e,null}function rf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d0()){case Ua:return 1;case Kc:return 4;case Lo:case p0:return 16;case Xc:return 536870912;default:return 16}default:return 16}}var zt=null,ba=null,yo=null;function of(){if(yo)return yo;var e,t=ba,n=t.length,r,o="value"in zt?zt.value:zt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return yo=o.slice(e,1<r?1-r:void 0)}function go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function nu(){return!1}function Qe(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qr:nu,this.isPropagationStopped=nu,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ha=Qe(Bn),Ur=le({},Bn,{view:0,detail:0}),N0=Qe(Ur),nl,rl,Zn,li=le({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(nl=e.screenX-Zn.screenX,rl=e.screenY-Zn.screenY):rl=nl=0,Zn=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:rl}}),ru=Qe(li),P0=le({},li,{dataTransfer:0}),j0=Qe(P0),T0=le({},Ur,{relatedTarget:0}),ol=Qe(T0),O0=le({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),R0=Qe(O0),L0=le({},Bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),z0=Qe(L0),M0=le({},Bn,{data:0}),ou=Qe(M0),I0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=A0[e])?!!t[e]:!1}function Qa(){return F0}var D0=le({},Ur,{key:function(e){if(e.key){var t=I0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qa,charCode:function(e){return e.type==="keypress"?go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),U0=Qe(D0),B0=le({},li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=Qe(B0),V0=le({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qa}),W0=Qe(V0),b0=le({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),H0=Qe(b0),Q0=le({},li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Y0=Qe(Q0),K0=[9,13,27,32],Ya=_t&&"CompositionEvent"in window,ur=null;_t&&"documentMode"in document&&(ur=document.documentMode);var X0=_t&&"TextEvent"in window&&!ur,lf=_t&&(!Ya||ur&&8<ur&&11>=ur),lu=" ",au=!1;function af(e,t){switch(e){case"keyup":return K0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function G0(e,t){switch(e){case"compositionend":return sf(t);case"keypress":return t.which!==32?null:(au=!0,lu);case"textInput":return e=t.data,e===lu&&au?null:e;default:return null}}function J0(e,t){if(hn)return e==="compositionend"||!Ya&&af(e,t)?(e=of(),yo=ba=zt=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lf&&t.locale!=="ko"?null:t.data;default:return null}}var Z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Z0[e.type]:t==="textarea"}function uf(e,t,n,r){Dc(r),t=$o(t,"onChange"),0<t.length&&(n=new Ha("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cr=null,kr=null;function q0(e){xf(e,0)}function ai(e){var t=gn(e);if(Lc(t))return e}function em(e,t){if(e==="change")return t}var cf=!1;if(_t){var il;if(_t){var ll="oninput"in document;if(!ll){var uu=document.createElement("div");uu.setAttribute("oninput","return;"),ll=typeof uu.oninput=="function"}il=ll}else il=!1;cf=il&&(!document.documentMode||9<document.documentMode)}function cu(){cr&&(cr.detachEvent("onpropertychange",ff),kr=cr=null)}function ff(e){if(e.propertyName==="value"&&ai(kr)){var t=[];uf(t,kr,e,Da(e)),Wc(q0,t)}}function tm(e,t,n){e==="focusin"?(cu(),cr=t,kr=n,cr.attachEvent("onpropertychange",ff)):e==="focusout"&&cu()}function nm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai(kr)}function rm(e,t){if(e==="click")return ai(t)}function om(e,t){if(e==="input"||e==="change")return ai(t)}function im(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:im;function _r(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Tl.call(t,o)||!ut(e[o],t[o]))return!1}return!0}function fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function du(e,t){var n=fu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fu(n)}}function df(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?df(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pf(){for(var e=window,t=To();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=To(e.document)}return t}function Ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lm(e){var t=pf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&df(n.ownerDocument.documentElement,n)){if(r!==null&&Ka(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=du(n,i);var a=du(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var am=_t&&"documentMode"in document&&11>=document.documentMode,vn=null,Kl=null,fr=null,Xl=!1;function pu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xl||vn==null||vn!==To(r)||(r=vn,"selectionStart"in r&&Ka(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fr&&_r(fr,r)||(fr=r,r=$o(Kl,"onSelect"),0<r.length&&(t=new Ha("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}function eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yn={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},al={},mf={};_t&&(mf=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function si(e){if(al[e])return al[e];if(!yn[e])return e;var t=yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mf)return al[e]=t[n];return e}var hf=si("animationend"),vf=si("animationiteration"),yf=si("animationstart"),gf=si("transitionend"),wf=new Map,mu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){wf.set(e,t),sn(t,[e])}for(var sl=0;sl<mu.length;sl++){var ul=mu[sl],sm=ul.toLowerCase(),um=ul[0].toUpperCase()+ul.slice(1);Ht(sm,"on"+um)}Ht(hf,"onAnimationEnd");Ht(vf,"onAnimationIteration");Ht(yf,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(gf,"onTransitionEnd");Ln("onMouseEnter",["mouseout","mouseover"]);Ln("onMouseLeave",["mouseout","mouseover"]);Ln("onPointerEnter",["pointerout","pointerover"]);Ln("onPointerLeave",["pointerout","pointerover"]);sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cm=new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));function hu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,s0(r,t,void 0,e),e.currentTarget=null}function xf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,s=l.currentTarget;if(l=l.listener,u!==i&&o.isPropagationStopped())break e;hu(o,l,s),i=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,s=l.currentTarget,l=l.listener,u!==i&&o.isPropagationStopped())break e;hu(o,l,s),i=u}}}if(Ro)throw e=bl,Ro=!1,bl=null,e}function ee(e,t){var n=t[ea];n===void 0&&(n=t[ea]=new Set);var r=e+"__bubble";n.has(r)||(Sf(t,e,2,!1),n.add(r))}function cl(e,t,n){var r=0;t&&(r|=4),Sf(n,e,r,t)}var to="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[to]){e[to]=!0,Pc.forEach(function(n){n!=="selectionchange"&&(cm.has(n)||cl(n,!1,e),cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[to]||(t[to]=!0,cl("selectionchange",!1,t))}}function Sf(e,t,n,r){switch(rf(t)){case 1:var o=E0;break;case 4:o=C0;break;default:o=Wa}n=o.bind(null,t,n,e),o=void 0,!Wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function fl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Gt(l),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Wc(function(){var s=i,c=Da(n),f=[];e:{var d=wf.get(e);if(d!==void 0){var m=Ha,y=e;switch(e){case"keypress":if(go(n)===0)break e;case"keydown":case"keyup":m=U0;break;case"focusin":y="focus",m=ol;break;case"focusout":y="blur",m=ol;break;case"beforeblur":case"afterblur":m=ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=W0;break;case hf:case vf:case yf:m=R0;break;case gf:m=H0;break;case"scroll":m=N0;break;case"wheel":m=Y0;break;case"copy":case"cut":case"paste":m=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=iu}var g=(t&4)!==0,x=!g&&e==="scroll",h=g?d!==null?d+"Capture":null:d;g=[];for(var p=s,v;p!==null;){v=p;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,h!==null&&(w=gr(p,h),w!=null&&g.push(Cr(p,w,v)))),x)break;p=p.return}0<g.length&&(d=new m(d,y,null,n,c),f.push({event:d,listeners:g}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",d&&n!==Bl&&(y=n.relatedTarget||n.fromElement)&&(Gt(y)||y[Et]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=s,y=y?Gt(y):null,y!==null&&(x=un(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=s),m!==y)){if(g=ru,w="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(g=iu,w="onPointerLeave",h="onPointerEnter",p="pointer"),x=m==null?d:gn(m),v=y==null?d:gn(y),d=new g(w,p+"leave",m,n,c),d.target=x,d.relatedTarget=v,w=null,Gt(c)===s&&(g=new g(h,p+"enter",y,n,c),g.target=v,g.relatedTarget=x,w=g),x=w,m&&y)t:{for(g=m,h=y,p=0,v=g;v;v=dn(v))p++;for(v=0,w=h;w;w=dn(w))v++;for(;0<p-v;)g=dn(g),p--;for(;0<v-p;)h=dn(h),v--;for(;p--;){if(g===h||h!==null&&g===h.alternate)break t;g=dn(g),h=dn(h)}g=null}else g=null;m!==null&&vu(f,d,m,g,!1),y!==null&&x!==null&&vu(f,x,y,g,!0)}}e:{if(d=s?gn(s):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var S=em;else if(su(d))if(cf)S=om;else{S=nm;var E=tm}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=rm);if(S&&(S=S(e,s))){uf(f,S,n,c);break e}E&&E(e,d,s),e==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&$l(d,"number",d.value)}switch(E=s?gn(s):window,e){case"focusin":(su(E)||E.contentEditable==="true")&&(vn=E,Kl=s,fr=null);break;case"focusout":fr=Kl=vn=null;break;case"mousedown":Xl=!0;break;case"contextmenu":case"mouseup":case"dragend":Xl=!1,pu(f,n,c);break;case"selectionchange":if(am)break;case"keydown":case"keyup":pu(f,n,c)}var k;if(Ya)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else hn?af(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(lf&&n.locale!=="ko"&&(hn||N!=="onCompositionStart"?N==="onCompositionEnd"&&hn&&(k=of()):(zt=c,ba="value"in zt?zt.value:zt.textContent,hn=!0)),E=$o(s,N),0<E.length&&(N=new ou(N,e,null,n,c),f.push({event:N,listeners:E}),k?N.data=k:(k=sf(n),k!==null&&(N.data=k)))),(k=X0?G0(e,n):J0(e,n))&&(s=$o(s,"onBeforeInput"),0<s.length&&(c=new ou("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:s}),c.data=k))}xf(f,t)})}function Cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $o(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=gr(e,n),i!=null&&r.unshift(Cr(e,i,o)),i=gr(e,t),i!=null&&r.push(Cr(e,i,o))),e=e.return}return r}function dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vu(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,s=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&s!==null&&(l=s,o?(u=gr(n,i),u!=null&&a.unshift(Cr(n,u,l))):o||(u=gr(n,i),u!=null&&a.push(Cr(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var fm=/\r\n?/g,dm=/\u0000|\uFFFD/g;function yu(e){return(typeof e=="string"?e:""+e).replace(fm,`
`).replace(dm,"")}function no(e,t,n){if(t=yu(t),yu(e)!==t&&n)throw Error(j(425))}function Ao(){}var Gl=null,Jl=null;function Zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ql=typeof setTimeout=="function"?setTimeout:void 0,pm=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,mm=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(e){return gu.resolve(null).then(e).catch(hm)}:ql;function hm(e){setTimeout(function(){throw e})}function dl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Sr(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Vn,Nr="__reactProps$"+Vn,Et="__reactContainer$"+Vn,ea="__reactEvents$"+Vn,vm="__reactListeners$"+Vn,ym="__reactHandles$"+Vn;function Gt(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wu(e);e!==null;){if(n=e[mt])return n;e=wu(e)}return t}e=n,n=e.parentNode}return null}function Br(e){return e=e[mt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function ui(e){return e[Nr]||null}var ta=[],wn=-1;function Qt(e){return{current:e}}function te(e){0>wn||(e.current=ta[wn],ta[wn]=null,wn--)}function q(e,t){wn++,ta[wn]=e.current,e.current=t}var bt={},Pe=Qt(bt),$e=Qt(!1),nn=bt;function zn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ae(e){return e=e.childContextTypes,e!=null}function Fo(){te($e),te(Pe)}function xu(e,t,n){if(Pe.current!==bt)throw Error(j(168));q(Pe,t),q($e,n)}function kf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,t0(e)||"Unknown",o));return le({},n,r)}function Do(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,nn=Pe.current,q(Pe,e),q($e,$e.current),!0}function Su(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=kf(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,te($e),te(Pe),q(Pe,e)):te($e),q($e,n)}var wt=null,ci=!1,pl=!1;function _f(e){wt===null?wt=[e]:wt.push(e)}function gm(e){ci=!0,_f(e)}function Yt(){if(!pl&&wt!==null){pl=!0;var e=0,t=G;try{var n=wt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,ci=!1}catch(o){throw wt!==null&&(wt=wt.slice(e+1)),Yc(Ua,Yt),o}finally{G=t,pl=!1}}return null}var xn=[],Sn=0,Uo=null,Bo=0,Xe=[],Ge=0,rn=null,xt=1,St="";function Kt(e,t){xn[Sn++]=Bo,xn[Sn++]=Uo,Uo=e,Bo=t}function Ef(e,t,n){Xe[Ge++]=xt,Xe[Ge++]=St,Xe[Ge++]=rn,rn=e;var r=xt;e=St;var o=32-lt(r)-1;r&=~(1<<o),n+=1;var i=32-lt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,xt=1<<32-lt(t)+o|n<<o|r,St=i+e}else xt=1<<i|n<<o|r,St=e}function Xa(e){e.return!==null&&(Kt(e,1),Ef(e,1,0))}function Ga(e){for(;e===Uo;)Uo=xn[--Sn],xn[Sn]=null,Bo=xn[--Sn],xn[Sn]=null;for(;e===rn;)rn=Xe[--Ge],Xe[Ge]=null,St=Xe[--Ge],Xe[Ge]=null,xt=Xe[--Ge],Xe[Ge]=null}var Ve=null,Be=null,re=!1,it=null;function Cf(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ku(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,Be=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:xt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,Be=null,!0):!1;default:return!1}}function na(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ra(e){if(re){var t=Be;if(t){var n=t;if(!ku(e,t)){if(na(e))throw Error(j(418));t=Ft(n.nextSibling);var r=Ve;t&&ku(e,t)?Cf(r,n):(e.flags=e.flags&-4097|2,re=!1,Ve=e)}}else{if(na(e))throw Error(j(418));e.flags=e.flags&-4097|2,re=!1,Ve=e}}}function _u(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function ro(e){if(e!==Ve)return!1;if(!re)return _u(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zl(e.type,e.memoizedProps)),t&&(t=Be)){if(na(e))throw Nf(),Error(j(418));for(;t;)Cf(e,t),t=Ft(t.nextSibling)}if(_u(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=Ve?Ft(e.stateNode.nextSibling):null;return!0}function Nf(){for(var e=Be;e;)e=Ft(e.nextSibling)}function Mn(){Be=Ve=null,re=!1}function Ja(e){it===null?it=[e]:it.push(e)}var wm=Pt.ReactCurrentBatchConfig;function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Eu(e){var t=e._init;return t(e._payload)}function Pf(e){function t(h,p){if(e){var v=h.deletions;v===null?(h.deletions=[p],h.flags|=16):v.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=Vt(h,p),h.index=0,h.sibling=null,h}function i(h,p,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<p?(h.flags|=2,p):v):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,v,w){return p===null||p.tag!==6?(p=xl(v,h.mode,w),p.return=h,p):(p=o(p,v),p.return=h,p)}function u(h,p,v,w){var S=v.type;return S===mn?c(h,p,v.props.children,w,v.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&Eu(S)===p.type)?(w=o(p,v.props),w.ref=qn(h,p,v),w.return=h,w):(w=Co(v.type,v.key,v.props,null,h.mode,w),w.ref=qn(h,p,v),w.return=h,w)}function s(h,p,v,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Sl(v,h.mode,w),p.return=h,p):(p=o(p,v.children||[]),p.return=h,p)}function c(h,p,v,w,S){return p===null||p.tag!==7?(p=tn(v,h.mode,w,S),p.return=h,p):(p=o(p,v),p.return=h,p)}function f(h,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=xl(""+p,h.mode,v),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Yr:return v=Co(p.type,p.key,p.props,null,h.mode,v),v.ref=qn(h,null,p),v.return=h,v;case pn:return p=Sl(p,h.mode,v),p.return=h,p;case Tt:var w=p._init;return f(h,w(p._payload),v)}if(or(p)||Kn(p))return p=tn(p,h.mode,v,null),p.return=h,p;oo(h,p)}return null}function d(h,p,v,w){var S=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:l(h,p,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yr:return v.key===S?u(h,p,v,w):null;case pn:return v.key===S?s(h,p,v,w):null;case Tt:return S=v._init,d(h,p,S(v._payload),w)}if(or(v)||Kn(v))return S!==null?null:c(h,p,v,w,null);oo(h,v)}return null}function m(h,p,v,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(v)||null,l(p,h,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yr:return h=h.get(w.key===null?v:w.key)||null,u(p,h,w,S);case pn:return h=h.get(w.key===null?v:w.key)||null,s(p,h,w,S);case Tt:var E=w._init;return m(h,p,v,E(w._payload),S)}if(or(w)||Kn(w))return h=h.get(v)||null,c(p,h,w,S,null);oo(p,w)}return null}function y(h,p,v,w){for(var S=null,E=null,k=p,N=p=0,$=null;k!==null&&N<v.length;N++){k.index>N?($=k,k=null):$=k.sibling;var L=d(h,k,v[N],w);if(L===null){k===null&&(k=$);break}e&&k&&L.alternate===null&&t(h,k),p=i(L,p,N),E===null?S=L:E.sibling=L,E=L,k=$}if(N===v.length)return n(h,k),re&&Kt(h,N),S;if(k===null){for(;N<v.length;N++)k=f(h,v[N],w),k!==null&&(p=i(k,p,N),E===null?S=k:E.sibling=k,E=k);return re&&Kt(h,N),S}for(k=r(h,k);N<v.length;N++)$=m(k,h,N,v[N],w),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?N:$.key),p=i($,p,N),E===null?S=$:E.sibling=$,E=$);return e&&k.forEach(function(M){return t(h,M)}),re&&Kt(h,N),S}function g(h,p,v,w){var S=Kn(v);if(typeof S!="function")throw Error(j(150));if(v=S.call(v),v==null)throw Error(j(151));for(var E=S=null,k=p,N=p=0,$=null,L=v.next();k!==null&&!L.done;N++,L=v.next()){k.index>N?($=k,k=null):$=k.sibling;var M=d(h,k,L.value,w);if(M===null){k===null&&(k=$);break}e&&k&&M.alternate===null&&t(h,k),p=i(M,p,N),E===null?S=M:E.sibling=M,E=M,k=$}if(L.done)return n(h,k),re&&Kt(h,N),S;if(k===null){for(;!L.done;N++,L=v.next())L=f(h,L.value,w),L!==null&&(p=i(L,p,N),E===null?S=L:E.sibling=L,E=L);return re&&Kt(h,N),S}for(k=r(h,k);!L.done;N++,L=v.next())L=m(k,h,N,L.value,w),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?N:L.key),p=i(L,p,N),E===null?S=L:E.sibling=L,E=L);return e&&k.forEach(function(U){return t(h,U)}),re&&Kt(h,N),S}function x(h,p,v,w){if(typeof v=="object"&&v!==null&&v.type===mn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Yr:e:{for(var S=v.key,E=p;E!==null;){if(E.key===S){if(S=v.type,S===mn){if(E.tag===7){n(h,E.sibling),p=o(E,v.props.children),p.return=h,h=p;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&Eu(S)===E.type){n(h,E.sibling),p=o(E,v.props),p.ref=qn(h,E,v),p.return=h,h=p;break e}n(h,E);break}else t(h,E);E=E.sibling}v.type===mn?(p=tn(v.props.children,h.mode,w,v.key),p.return=h,h=p):(w=Co(v.type,v.key,v.props,null,h.mode,w),w.ref=qn(h,p,v),w.return=h,h=w)}return a(h);case pn:e:{for(E=v.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(h,p.sibling),p=o(p,v.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Sl(v,h.mode,w),p.return=h,h=p}return a(h);case Tt:return E=v._init,x(h,p,E(v._payload),w)}if(or(v))return y(h,p,v,w);if(Kn(v))return g(h,p,v,w);oo(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,v),p.return=h,h=p):(n(h,p),p=xl(v,h.mode,w),p.return=h,h=p),a(h)):n(h,p)}return x}var In=Pf(!0),jf=Pf(!1),Vo=Qt(null),Wo=null,kn=null,Za=null;function qa(){Za=kn=Wo=null}function es(e){var t=Vo.current;te(Vo),e._currentValue=t}function oa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){Wo=e,Za=kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(Za!==e)if(e={context:e,memoizedValue:t,next:null},kn===null){if(Wo===null)throw Error(j(308));kn=e,Wo.dependencies={lanes:0,firstContext:e}}else kn=kn.next=e;return t}var Jt=null;function ts(e){Jt===null?Jt=[e]:Jt.push(e)}function Tf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ts(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Of(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ct(e,n)}return o=r.interleaved,o===null?(t.next=t,ts(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ct(e,n)}function wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ba(e,n)}}function Cu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,r){var o=e.updateQueue;Ot=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,s=u.next;u.next=null,a===null?i=s:a.next=s,a=u;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=s:l.next=s,c.lastBaseUpdate=u))}if(i!==null){var f=o.baseState;a=0,c=s=u=null,l=i;do{var d=l.lane,m=l.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,g=l;switch(d=t,m=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){f=y.call(m,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,d=typeof y=="function"?y.call(m,f,d):y,d==null)break e;f=le({},f,d);break e;case 2:Ot=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,d=o.effects,d===null?o.effects=[l]:d.push(l))}else m={eventTime:m,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(s=c=m,u=f):c=c.next=m,a|=d;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;d=l,l=d.next,d.next=null,o.lastBaseUpdate=d,o.shared.pending=null}}while(!0);if(c===null&&(u=f),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ln|=a,e.lanes=a,e.memoizedState=f}}function Nu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var Vr={},vt=Qt(Vr),Pr=Qt(Vr),jr=Qt(Vr);function Zt(e){if(e===Vr)throw Error(j(174));return e}function rs(e,t){switch(q(jr,t),q(Pr,e),q(vt,Vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fl(t,e)}te(vt),q(vt,t)}function $n(){te(vt),te(Pr),te(jr)}function Rf(e){Zt(jr.current);var t=Zt(vt.current),n=Fl(t,e.type);t!==n&&(q(Pr,e),q(vt,n))}function os(e){Pr.current===e&&(te(vt),te(Pr))}var oe=Qt(0);function Ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ml=[];function is(){for(var e=0;e<ml.length;e++)ml[e]._workInProgressVersionPrimary=null;ml.length=0}var xo=Pt.ReactCurrentDispatcher,hl=Pt.ReactCurrentBatchConfig,on=0,ie=null,fe=null,me=null,Qo=!1,dr=!1,Tr=0,xm=0;function _e(){throw Error(j(321))}function ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function as(e,t,n,r,o,i){if(on=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?Em:Cm,e=n(r,o),dr){i=0;do{if(dr=!1,Tr=0,25<=i)throw Error(j(301));i+=1,me=fe=null,t.updateQueue=null,xo.current=Nm,e=n(r,o)}while(dr)}if(xo.current=Yo,t=fe!==null&&fe.next!==null,on=0,me=fe=ie=null,Qo=!1,t)throw Error(j(300));return e}function ss(){var e=Tr!==0;return Tr=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ie.memoizedState=me=e:me=me.next=e,me}function et(){if(fe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=me===null?ie.memoizedState:me.next;if(t!==null)me=t,fe=e;else{if(e===null)throw Error(j(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},me===null?ie.memoizedState=me=e:me=me.next=e}return me}function Or(e,t){return typeof t=="function"?t(e):t}function vl(e){var t=et(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=fe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,u=null,s=i;do{var c=s.lane;if((on&c)===c)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var f={lane:c,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(l=u=f,a=r):u=u.next=f,ie.lanes|=c,ln|=c}s=s.next}while(s!==null&&s!==i);u===null?a=r:u.next=l,ut(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ie.lanes|=i,ln|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yl(e){var t=et(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);ut(i,t.memoizedState)||(Ie=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Lf(){}function zf(e,t){var n=ie,r=et(),o=t(),i=!ut(r.memoizedState,o);if(i&&(r.memoizedState=o,Ie=!0),r=r.queue,us($f.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Rr(9,If.bind(null,n,r,o,t),void 0,null),he===null)throw Error(j(349));on&30||Mf(n,t,o)}return o}function Mf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function If(e,t,n,r){t.value=n,t.getSnapshot=r,Af(t)&&Ff(e)}function $f(e,t,n){return n(function(){Af(t)&&Ff(e)})}function Af(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function Ff(e){var t=Ct(e,1);t!==null&&at(t,e,1,-1)}function Pu(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:e},t.queue=e,e=e.dispatch=_m.bind(null,ie,e),[t.memoizedState,e]}function Rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Df(){return et().memoizedState}function So(e,t,n,r){var o=ft();ie.flags|=e,o.memoizedState=Rr(1|t,n,void 0,r===void 0?null:r)}function fi(e,t,n,r){var o=et();r=r===void 0?null:r;var i=void 0;if(fe!==null){var a=fe.memoizedState;if(i=a.destroy,r!==null&&ls(r,a.deps)){o.memoizedState=Rr(t,n,i,r);return}}ie.flags|=e,o.memoizedState=Rr(1|t,n,i,r)}function ju(e,t){return So(8390656,8,e,t)}function us(e,t){return fi(2048,8,e,t)}function Uf(e,t){return fi(4,2,e,t)}function Bf(e,t){return fi(4,4,e,t)}function Vf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wf(e,t,n){return n=n!=null?n.concat([e]):null,fi(4,4,Vf.bind(null,t,e),n)}function cs(){}function bf(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hf(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qf(e,t,n){return on&21?(ut(n,t)||(n=Gc(),ie.lanes|=n,ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function Sm(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=hl.transition;hl.transition={};try{e(!1),t()}finally{G=n,hl.transition=r}}function Yf(){return et().memoizedState}function km(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kf(e))Xf(t,n);else if(n=Tf(e,t,n,r),n!==null){var o=Re();at(n,e,r,o),Gf(n,t,r)}}function _m(e,t,n){var r=Bt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kf(e))Xf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,ut(l,a)){var u=t.interleaved;u===null?(o.next=o,ts(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Tf(e,t,o,r),n!==null&&(o=Re(),at(n,e,r,o),Gf(n,t,r))}}function Kf(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Xf(e,t){dr=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ba(e,n)}}var Yo={readContext:qe,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},Em={readContext:qe,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,So(4194308,4,Vf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=km.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Pu,useDebugValue:cs,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Pu(!1),t=e[0];return e=Sm.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,o=ft();if(re){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),he===null)throw Error(j(349));on&30||Mf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ju($f.bind(null,r,i,e),[e]),r.flags|=2048,Rr(9,If.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ft(),t=he.identifierPrefix;if(re){var n=St,r=xt;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cm={readContext:qe,useCallback:bf,useContext:qe,useEffect:us,useImperativeHandle:Wf,useInsertionEffect:Uf,useLayoutEffect:Bf,useMemo:Hf,useReducer:vl,useRef:Df,useState:function(){return vl(Or)},useDebugValue:cs,useDeferredValue:function(e){var t=et();return Qf(t,fe.memoizedState,e)},useTransition:function(){var e=vl(Or)[0],t=et().memoizedState;return[e,t]},useMutableSource:Lf,useSyncExternalStore:zf,useId:Yf,unstable_isNewReconciler:!1},Nm={readContext:qe,useCallback:bf,useContext:qe,useEffect:us,useImperativeHandle:Wf,useInsertionEffect:Uf,useLayoutEffect:Bf,useMemo:Hf,useReducer:yl,useRef:Df,useState:function(){return yl(Or)},useDebugValue:cs,useDeferredValue:function(e){var t=et();return fe===null?t.memoizedState=e:Qf(t,fe.memoizedState,e)},useTransition:function(){var e=yl(Or)[0],t=et().memoizedState;return[e,t]},useMutableSource:Lf,useSyncExternalStore:zf,useId:Yf,unstable_isNewReconciler:!1};function rt(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ia(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var di={isMounted:function(e){return(e=e._reactInternals)?un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),o=Bt(e),i=kt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,o),t!==null&&(at(t,e,o,r),wo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),o=Bt(e),i=kt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,o),t!==null&&(at(t,e,o,r),wo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=Bt(e),o=kt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Dt(e,o,r),t!==null&&(at(t,e,r,n),wo(t,e,r))}};function Tu(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!_r(n,r)||!_r(o,i):!0}function Jf(e,t,n){var r=!1,o=bt,i=t.contextType;return typeof i=="object"&&i!==null?i=qe(i):(o=Ae(t)?nn:Pe.current,r=t.contextTypes,i=(r=r!=null)?zn(e,o):bt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=di,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&di.enqueueReplaceState(t,t.state,null)}function la(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ns(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=qe(i):(i=Ae(t)?nn:Pe.current,o.context=zn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ia(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&di.enqueueReplaceState(o,o.state,null),bo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function An(e,t){try{var n="",r=t;do n+=e0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function aa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pm=typeof WeakMap=="function"?WeakMap:Map;function Zf(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xo||(Xo=!0,ya=r),aa(e,t)},n}function qf(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){aa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){aa(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ru(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Bm.bind(null,e,t,n),t.then(e,e))}function Lu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var jm=Pt.ReactCurrentOwner,Ie=!1;function Oe(e,t,n,r){t.child=e===null?jf(t,null,n,r):In(t,e.child,n,r)}function Mu(e,t,n,r,o){n=n.render;var i=t.ref;return Tn(t,o),r=as(e,t,n,r,i,o),n=ss(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(re&&n&&Xa(t),t.flags|=1,Oe(e,t,r,o),t.child)}function Iu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!gs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ed(e,t,i,r,o)):(e=Co(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:_r,n(a,r)&&e.ref===t.ref)return Nt(e,t,o)}return t.flags|=1,e=Vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function ed(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(_r(i,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Nt(e,t,o)}return sa(e,t,n,r,o)}function td(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(En,Ue),Ue|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(En,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,q(En,Ue),Ue|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,q(En,Ue),Ue|=r;return Oe(e,t,o,n),t.child}function nd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function sa(e,t,n,r,o){var i=Ae(n)?nn:Pe.current;return i=zn(t,i),Tn(t,o),n=as(e,t,n,r,i,o),r=ss(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(re&&r&&Xa(t),t.flags|=1,Oe(e,t,n,o),t.child)}function $u(e,t,n,r,o){if(Ae(n)){var i=!0;Do(t)}else i=!1;if(Tn(t,o),t.stateNode===null)ko(e,t),Jf(t,n,r),la(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,s=n.contextType;typeof s=="object"&&s!==null?s=qe(s):(s=Ae(n)?nn:Pe.current,s=zn(t,s));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==s)&&Ou(t,a,r,s),Ot=!1;var d=t.memoizedState;a.state=d,bo(t,r,a,o),u=t.memoizedState,l!==r||d!==u||$e.current||Ot?(typeof c=="function"&&(ia(t,n,c,r),u=t.memoizedState),(l=Ot||Tu(t,n,l,r,d,u,s))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=s,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Of(e,t),l=t.memoizedProps,s=t.type===t.elementType?l:rt(t.type,l),a.props=s,f=t.pendingProps,d=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=qe(u):(u=Ae(n)?nn:Pe.current,u=zn(t,u));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||d!==u)&&Ou(t,a,r,u),Ot=!1,d=t.memoizedState,a.state=d,bo(t,r,a,o);var y=t.memoizedState;l!==f||d!==y||$e.current||Ot?(typeof m=="function"&&(ia(t,n,m,r),y=t.memoizedState),(s=Ot||Tu(t,n,s,r,d,y,u)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=u,r=s):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return ua(e,t,n,r,i,o)}function ua(e,t,n,r,o,i){nd(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Su(t,n,!1),Nt(e,t,i);r=t.stateNode,jm.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=In(t,e.child,null,i),t.child=In(t,null,l,i)):Oe(e,t,l,i),t.memoizedState=r.state,o&&Su(t,n,!0),t.child}function rd(e){var t=e.stateNode;t.pendingContext?xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xu(e,t.context,!1),rs(e,t.containerInfo)}function Au(e,t,n,r,o){return Mn(),Ja(o),t.flags|=256,Oe(e,t,n,r),t.child}var ca={dehydrated:null,treeContext:null,retryLane:0};function fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function od(e,t,n){var r=t.pendingProps,o=oe.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),q(oe,o&1),e===null)return ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=hi(a,r,0,null),e=tn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=fa(n),t.memoizedState=ca,e):fs(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Tm(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Vt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Vt(l,i):(i=tn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?fa(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=ca,r}return i=e.child,e=i.sibling,r=Vt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fs(e,t){return t=hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function io(e,t,n,r){return r!==null&&Ja(r),In(t,e.child,null,n),e=fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tm(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=gl(Error(j(422))),io(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=hi({mode:"visible",children:r.children},o,0,null),i=tn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&In(t,e.child,null,a),t.child.memoizedState=fa(a),t.memoizedState=ca,i);if(!(t.mode&1))return io(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=gl(i,r,void 0),io(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ie||l){if(r=he,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ct(e,o),at(r,e,o,-1))}return ys(),r=gl(Error(j(421))),io(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Vm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Be=Ft(o.nextSibling),Ve=t,re=!0,it=null,e!==null&&(Xe[Ge++]=xt,Xe[Ge++]=St,Xe[Ge++]=rn,xt=e.id,St=e.overflow,rn=t),t=fs(t,r.children),t.flags|=4096,t)}function Fu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),oa(e.return,t,n)}function wl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function id(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Oe(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,n,t);else if(e.tag===19)Fu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(oe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ho(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),wl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ho(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}wl(t,!0,n,null,i);break;case"together":wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ko(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Om(e,t,n){switch(t.tag){case 3:rd(t),Mn();break;case 5:Rf(t);break;case 1:Ae(t.type)&&Do(t);break;case 4:rs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;q(Vo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?od(e,t,n):(q(oe,oe.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);q(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return id(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,td(e,t,n)}return Nt(e,t,n)}var ld,da,ad,sd;ld=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};da=function(){};ad=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Zt(vt.current);var i=null;switch(n){case"input":o=Ml(e,o),r=Ml(e,r),i=[];break;case"select":o=le({},o,{value:void 0}),r=le({},r,{value:void 0}),i=[];break;case"textarea":o=Al(e,o),r=Al(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ao)}Dl(n,r);var a;n=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var l=o[s];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vr.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in r){var u=r[s];if(l=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==l&&(u!=null||l!=null))if(s==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(vr.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&ee("scroll",e),i||l===u||(i=[])):(i=i||[]).push(s,u))}n&&(i=i||[]).push("style",n);var s=i;(t.updateQueue=s)&&(t.flags|=4)}};sd=function(e,t,n,r){n!==r&&(t.flags|=4)};function er(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rm(e,t,n){var r=t.pendingProps;switch(Ga(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ae(t.type)&&Fo(),Ee(t),null;case 3:return r=t.stateNode,$n(),te($e),te(Pe),is(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(xa(it),it=null))),da(e,t),Ee(t),null;case 5:os(t);var o=Zt(jr.current);if(n=t.type,e!==null&&t.stateNode!=null)ad(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Ee(t),null}if(e=Zt(vt.current),ro(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[Nr]=i,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(o=0;o<lr.length;o++)ee(lr[o],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Ys(r,i),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ee("invalid",r);break;case"textarea":Xs(r,i),ee("invalid",r)}Dl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&no(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&no(r.textContent,l,e),o=["children",""+l]):vr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ee("scroll",r)}switch(n){case"input":Kr(r),Ks(r,i,!0);break;case"textarea":Kr(r),Gs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ao)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ic(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[mt]=t,e[Nr]=r,ld(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ul(n,r),n){case"dialog":ee("cancel",e),ee("close",e),o=r;break;case"iframe":case"object":case"embed":ee("load",e),o=r;break;case"video":case"audio":for(o=0;o<lr.length;o++)ee(lr[o],e);o=r;break;case"source":ee("error",e),o=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),o=r;break;case"details":ee("toggle",e),o=r;break;case"input":Ys(e,r),o=Ml(e,r),ee("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=le({},r,{value:void 0}),ee("invalid",e);break;case"textarea":Xs(e,r),o=Al(e,r),ee("invalid",e);break;default:o=r}Dl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Fc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$c(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&yr(e,u):typeof u=="number"&&yr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(vr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ee("scroll",e):u!=null&&Ia(e,i,u,a))}switch(n){case"input":Kr(e),Ks(e,r,!1);break;case"textarea":Kr(e),Gs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Cn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)sd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Zt(jr.current),Zt(vt.current),ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:no(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Ee(t),null;case 13:if(te(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Be!==null&&t.mode&1&&!(t.flags&128))Nf(),Mn(),t.flags|=98560,i=!1;else if(i=ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[mt]=t}else Mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else it!==null&&(xa(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?de===0&&(de=3):ys())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return $n(),da(e,t),e===null&&Er(t.stateNode.containerInfo),Ee(t),null;case 10:return es(t.type._context),Ee(t),null;case 17:return Ae(t.type)&&Fo(),Ee(t),null;case 19:if(te(oe),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)er(i,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ho(e),a!==null){for(t.flags|=128,er(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&se()>Fn&&(t.flags|=128,r=!0,er(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ho(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),er(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!re)return Ee(t),null}else 2*se()-i.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,r=!0,er(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=se(),t.sibling=null,n=oe.current,q(oe,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return vs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Lm(e,t){switch(Ga(t),t.tag){case 1:return Ae(t.type)&&Fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),te($e),te(Pe),is(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return os(t),null;case 13:if(te(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(oe),null;case 4:return $n(),null;case 10:return es(t.type._context),null;case 22:case 23:return vs(),null;case 24:return null;default:return null}}var lo=!1,Ne=!1,zm=typeof WeakSet=="function"?WeakSet:Set,I=null;function _n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function pa(e,t,n){try{n()}catch(r){ae(e,t,r)}}var Du=!1;function Mm(e,t){if(Gl=Mo,e=pf(),Ka(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,s=0,c=0,f=e,d=null;t:for(;;){for(var m;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==i||r!==0&&f.nodeType!==3||(u=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===e)break t;if(d===n&&++s===o&&(l=a),d===i&&++c===r&&(u=a),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jl={focusedElem:e,selectionRange:n},Mo=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,x=y.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?g:rt(t.type,g),x);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return y=Du,Du=!1,y}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&pa(t,n,i)}o=o.next}while(o!==r)}}function pi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ma(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ud(e){var t=e.alternate;t!==null&&(e.alternate=null,ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[Nr],delete t[ea],delete t[vm],delete t[ym])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cd(e){return e.tag===5||e.tag===3||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ao));else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}function va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(va(e,t,n),e=e.sibling;e!==null;)va(e,t,n),e=e.sibling}var ye=null,ot=!1;function jt(e,t,n){for(n=n.child;n!==null;)fd(e,t,n),n=n.sibling}function fd(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ii,n)}catch{}switch(n.tag){case 5:Ne||_n(n,t);case 6:var r=ye,o=ot;ye=null,jt(e,t,n),ye=r,ot=o,ye!==null&&(ot?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(ot?(e=ye,n=n.stateNode,e.nodeType===8?dl(e.parentNode,n):e.nodeType===1&&dl(e,n),Sr(e)):dl(ye,n.stateNode));break;case 4:r=ye,o=ot,ye=n.stateNode.containerInfo,ot=!0,jt(e,t,n),ye=r,ot=o;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&pa(n,t,a),o=o.next}while(o!==r)}jt(e,t,n);break;case 1:if(!Ne&&(_n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ae(n,t,l)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,jt(e,t,n),Ne=r):jt(e,t,n);break;default:jt(e,t,n)}}function Bu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zm),t.forEach(function(r){var o=Wm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,ot=!1;break e;case 3:ye=l.stateNode.containerInfo,ot=!0;break e;case 4:ye=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(ye===null)throw Error(j(160));fd(i,a,o),ye=null,ot=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){ae(o,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dd(t,e),t=t.sibling}function dd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),ct(e),r&4){try{pr(3,e,e.return),pi(3,e)}catch(g){ae(e,e.return,g)}try{pr(5,e,e.return)}catch(g){ae(e,e.return,g)}}break;case 1:nt(t,e),ct(e),r&512&&n!==null&&_n(n,n.return);break;case 5:if(nt(t,e),ct(e),r&512&&n!==null&&_n(n,n.return),e.flags&32){var o=e.stateNode;try{yr(o,"")}catch(g){ae(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&zc(o,i),Ul(l,a);var s=Ul(l,i);for(a=0;a<u.length;a+=2){var c=u[a],f=u[a+1];c==="style"?Fc(o,f):c==="dangerouslySetInnerHTML"?$c(o,f):c==="children"?yr(o,f):Ia(o,c,f,s)}switch(l){case"input":Il(o,i);break;case"textarea":Mc(o,i);break;case"select":var d=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Cn(o,!!i.multiple,m,!1):d!==!!i.multiple&&(i.defaultValue!=null?Cn(o,!!i.multiple,i.defaultValue,!0):Cn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Nr]=i}catch(g){ae(e,e.return,g)}}break;case 6:if(nt(t,e),ct(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){ae(e,e.return,g)}}break;case 3:if(nt(t,e),ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch(g){ae(e,e.return,g)}break;case 4:nt(t,e),ct(e);break;case 13:nt(t,e),ct(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ms=se())),r&4&&Bu(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(s=Ne)||c,nt(t,e),Ne=s):nt(t,e),ct(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!c&&e.mode&1)for(I=e,c=e.child;c!==null;){for(f=I=c;I!==null;){switch(d=I,m=d.child,d.tag){case 0:case 11:case 14:case 15:pr(4,d,d.return);break;case 1:_n(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(g){ae(r,n,g)}}break;case 5:_n(d,d.return);break;case 22:if(d.memoizedState!==null){Wu(f);continue}}m!==null?(m.return=d,I=m):Wu(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,s?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,u=f.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ac("display",a))}catch(g){ae(e,e.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=s?"":f.memoizedProps}catch(g){ae(e,e.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:nt(t,e),ct(e),r&4&&Bu(e);break;case 21:break;default:nt(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cd(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(yr(o,""),r.flags&=-33);var i=Uu(e);va(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Uu(e);ha(e,l,a);break;default:throw Error(j(161))}}catch(u){ae(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Im(e,t,n){I=e,pd(e)}function pd(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||lo;if(!a){var l=o.alternate,u=l!==null&&l.memoizedState!==null||Ne;l=lo;var s=Ne;if(lo=a,(Ne=u)&&!s)for(I=o;I!==null;)a=I,u=a.child,a.tag===22&&a.memoizedState!==null?bu(o):u!==null?(u.return=a,I=u):bu(o);for(;i!==null;)I=i,pd(i),i=i.sibling;I=o,lo=l,Ne=s}Vu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,I=i):Vu(e)}}function Vu(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||pi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Nu(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Nu(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var c=s.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Sr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Ne||t.flags&512&&ma(t)}catch(d){ae(t,t.return,d)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Wu(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function bu(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pi(4,t)}catch(u){ae(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ae(t,o,u)}}var i=t.return;try{ma(t)}catch(u){ae(t,i,u)}break;case 5:var a=t.return;try{ma(t)}catch(u){ae(t,a,u)}}}catch(u){ae(t,t.return,u)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var $m=Math.ceil,Ko=Pt.ReactCurrentDispatcher,ds=Pt.ReactCurrentOwner,Ze=Pt.ReactCurrentBatchConfig,b=0,he=null,ce=null,we=0,Ue=0,En=Qt(0),de=0,Lr=null,ln=0,mi=0,ps=0,mr=null,Me=null,ms=0,Fn=1/0,gt=null,Xo=!1,ya=null,Ut=null,ao=!1,Mt=null,Go=0,hr=0,ga=null,_o=-1,Eo=0;function Re(){return b&6?se():_o!==-1?_o:_o=se()}function Bt(e){return e.mode&1?b&2&&we!==0?we&-we:wm.transition!==null?(Eo===0&&(Eo=Gc()),Eo):(e=G,e!==0||(e=window.event,e=e===void 0?16:rf(e.type)),e):1}function at(e,t,n,r){if(50<hr)throw hr=0,ga=null,Error(j(185));Dr(e,n,r),(!(b&2)||e!==he)&&(e===he&&(!(b&2)&&(mi|=n),de===4&&Lt(e,we)),Fe(e,r),n===1&&b===0&&!(t.mode&1)&&(Fn=se()+500,ci&&Yt()))}function Fe(e,t){var n=e.callbackNode;w0(e,t);var r=zo(e,e===he?we:0);if(r===0)n!==null&&qs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qs(n),t===1)e.tag===0?gm(Hu.bind(null,e)):_f(Hu.bind(null,e)),mm(function(){!(b&6)&&Yt()}),n=null;else{switch(Jc(r)){case 1:n=Ua;break;case 4:n=Kc;break;case 16:n=Lo;break;case 536870912:n=Xc;break;default:n=Lo}n=Sd(n,md.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function md(e,t){if(_o=-1,Eo=0,b&6)throw Error(j(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=zo(e,e===he?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jo(e,r);else{t=r;var o=b;b|=2;var i=vd();(he!==e||we!==t)&&(gt=null,Fn=se()+500,en(e,t));do try{Dm();break}catch(l){hd(e,l)}while(!0);qa(),Ko.current=i,b=o,ce!==null?t=0:(he=null,we=0,t=de)}if(t!==0){if(t===2&&(o=Hl(e),o!==0&&(r=o,t=wa(e,o))),t===1)throw n=Lr,en(e,0),Lt(e,r),Fe(e,se()),n;if(t===6)Lt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Am(o)&&(t=Jo(e,r),t===2&&(i=Hl(e),i!==0&&(r=i,t=wa(e,i))),t===1))throw n=Lr,en(e,0),Lt(e,r),Fe(e,se()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Xt(e,Me,gt);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=ms+500-se(),10<t)){if(zo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ql(Xt.bind(null,e,Me,gt),t);break}Xt(e,Me,gt);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-lt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$m(r/1960))-r,10<r){e.timeoutHandle=ql(Xt.bind(null,e,Me,gt),r);break}Xt(e,Me,gt);break;case 5:Xt(e,Me,gt);break;default:throw Error(j(329))}}}return Fe(e,se()),e.callbackNode===n?md.bind(null,e):null}function wa(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=Jo(e,t),e!==2&&(t=Me,Me=n,t!==null&&xa(t)),e}function xa(e){Me===null?Me=e:Me.push.apply(Me,e)}function Am(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ut(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~ps,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if(b&6)throw Error(j(327));On();var t=zo(e,0);if(!(t&1))return Fe(e,se()),null;var n=Jo(e,t);if(e.tag!==0&&n===2){var r=Hl(e);r!==0&&(t=r,n=wa(e,r))}if(n===1)throw n=Lr,en(e,0),Lt(e,t),Fe(e,se()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xt(e,Me,gt),Fe(e,se()),null}function hs(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(Fn=se()+500,ci&&Yt())}}function an(e){Mt!==null&&Mt.tag===0&&!(b&6)&&On();var t=b;b|=1;var n=Ze.transition,r=G;try{if(Ze.transition=null,G=1,e)return e()}finally{G=r,Ze.transition=n,b=t,!(b&6)&&Yt()}}function vs(){Ue=En.current,te(En)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pm(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Ga(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fo();break;case 3:$n(),te($e),te(Pe),is();break;case 5:os(r);break;case 4:$n();break;case 13:te(oe);break;case 19:te(oe);break;case 10:es(r.type._context);break;case 22:case 23:vs()}n=n.return}if(he=e,ce=e=Vt(e.current,null),we=Ue=t,de=0,Lr=null,ps=mi=ln=0,Me=mr=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Jt=null}return e}function hd(e,t){do{var n=ce;try{if(qa(),xo.current=Yo,Qo){for(var r=ie.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Qo=!1}if(on=0,me=fe=ie=null,dr=!1,Tr=0,ds.current=null,n===null||n.return===null){de=1,Lr=t,ce=null;break}e:{var i=e,a=n.return,l=n,u=t;if(t=we,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Lu(a);if(m!==null){m.flags&=-257,zu(m,a,l,i,t),m.mode&1&&Ru(i,s,t),t=m,u=s;var y=t.updateQueue;if(y===null){var g=new Set;g.add(u),t.updateQueue=g}else y.add(u);break e}else{if(!(t&1)){Ru(i,s,t),ys();break e}u=Error(j(426))}}else if(re&&l.mode&1){var x=Lu(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),zu(x,a,l,i,t),Ja(An(u,l));break e}}i=u=An(u,l),de!==4&&(de=2),mr===null?mr=[i]:mr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Zf(i,u,t);Cu(i,h);break e;case 1:l=u;var p=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ut===null||!Ut.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=qf(i,l,t);Cu(i,w);break e}}i=i.return}while(i!==null)}gd(n)}catch(S){t=S,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function vd(){var e=Ko.current;return Ko.current=Yo,e===null?Yo:e}function ys(){(de===0||de===3||de===2)&&(de=4),he===null||!(ln&268435455)&&!(mi&268435455)||Lt(he,we)}function Jo(e,t){var n=b;b|=2;var r=vd();(he!==e||we!==t)&&(gt=null,en(e,t));do try{Fm();break}catch(o){hd(e,o)}while(!0);if(qa(),b=n,Ko.current=r,ce!==null)throw Error(j(261));return he=null,we=0,de}function Fm(){for(;ce!==null;)yd(ce)}function Dm(){for(;ce!==null&&!c0();)yd(ce)}function yd(e){var t=xd(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?gd(e):ce=t,ds.current=null}function gd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Lm(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ce=null;return}}else if(n=Rm(n,t,Ue),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);de===0&&(de=5)}function Xt(e,t,n){var r=G,o=Ze.transition;try{Ze.transition=null,G=1,Um(e,t,n,r)}finally{Ze.transition=o,G=r}return null}function Um(e,t,n,r){do On();while(Mt!==null);if(b&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(x0(e,i),e===he&&(ce=he=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ao||(ao=!0,Sd(Lo,function(){return On(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ze.transition,Ze.transition=null;var a=G;G=1;var l=b;b|=4,ds.current=null,Mm(e,n),dd(n,e),lm(Jl),Mo=!!Gl,Jl=Gl=null,e.current=n,Im(n),f0(),b=l,G=a,Ze.transition=i}else e.current=n;if(ao&&(ao=!1,Mt=e,Go=o),i=e.pendingLanes,i===0&&(Ut=null),m0(n.stateNode),Fe(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Xo)throw Xo=!1,e=ya,ya=null,e;return Go&1&&e.tag!==0&&On(),i=e.pendingLanes,i&1?e===ga?hr++:(hr=0,ga=e):hr=0,Yt(),null}function On(){if(Mt!==null){var e=Jc(Go),t=Ze.transition,n=G;try{if(Ze.transition=null,G=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Go=0,b&6)throw Error(j(331));var o=b;for(b|=4,I=e.current;I!==null;){var i=I,a=i.child;if(I.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var s=l[u];for(I=s;I!==null;){var c=I;switch(c.tag){case 0:case 11:case 15:pr(8,c,i)}var f=c.child;if(f!==null)f.return=c,I=f;else for(;I!==null;){c=I;var d=c.sibling,m=c.return;if(ud(c),c===s){I=null;break}if(d!==null){d.return=m,I=d;break}I=m}}}var y=i.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(g!==null)}}I=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,I=a;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,I=h;break e}I=i.return}}var p=e.current;for(I=p;I!==null;){a=I;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,I=v;else e:for(a=p;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pi(9,l)}}catch(S){ae(l,l.return,S)}if(l===a){I=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,I=w;break e}I=l.return}}if(b=o,Yt(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ii,e)}catch{}r=!0}return r}finally{G=n,Ze.transition=t}}return!1}function Qu(e,t,n){t=An(n,t),t=Zf(e,t,1),e=Dt(e,t,1),t=Re(),e!==null&&(Dr(e,1,t),Fe(e,t))}function ae(e,t,n){if(e.tag===3)Qu(e,e,n);else for(;t!==null;){if(t.tag===3){Qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=An(n,e),e=qf(t,e,1),t=Dt(t,e,1),e=Re(),t!==null&&(Dr(t,1,e),Fe(t,e));break}}t=t.return}}function Bm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(we&n)===n&&(de===4||de===3&&(we&130023424)===we&&500>se()-ms?en(e,0):ps|=n),Fe(e,t)}function wd(e,t){t===0&&(e.mode&1?(t=Jr,Jr<<=1,!(Jr&130023424)&&(Jr=4194304)):t=1);var n=Re();e=Ct(e,t),e!==null&&(Dr(e,t,n),Fe(e,n))}function Vm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wd(e,n)}function Wm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),wd(e,n)}var xd;xd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,Om(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,re&&t.flags&1048576&&Ef(t,Bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ko(e,t),e=t.pendingProps;var o=zn(t,Pe.current);Tn(t,n),o=as(null,t,r,e,o,n);var i=ss();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(i=!0,Do(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ns(t),o.updater=di,t.stateNode=o,o._reactInternals=t,la(t,r,e,n),t=ua(null,t,r,!0,i,n)):(t.tag=0,re&&i&&Xa(t),Oe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ko(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Hm(r),e=rt(r,e),o){case 0:t=sa(null,t,r,e,n);break e;case 1:t=$u(null,t,r,e,n);break e;case 11:t=Mu(null,t,r,e,n);break e;case 14:t=Iu(null,t,r,rt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),sa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),$u(e,t,r,o,n);case 3:e:{if(rd(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Of(e,t),bo(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=An(Error(j(423)),t),t=Au(e,t,r,n,o);break e}else if(r!==o){o=An(Error(j(424)),t),t=Au(e,t,r,n,o);break e}else for(Be=Ft(t.stateNode.containerInfo.firstChild),Ve=t,re=!0,it=null,n=jf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===o){t=Nt(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return Rf(t),e===null&&ra(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Zl(r,o)?a=null:i!==null&&Zl(r,i)&&(t.flags|=32),nd(e,t),Oe(e,t,a,n),t.child;case 6:return e===null&&ra(t),null;case 13:return od(e,t,n);case 4:return rs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=In(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),Mu(e,t,r,o,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,q(Vo,r._currentValue),r._currentValue=a,i!==null)if(ut(i.value,a)){if(i.children===o.children&&!$e.current){t=Nt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=kt(-1,n&-n),u.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var c=s.pending;c===null?u.next=u:(u.next=c.next,c.next=u),s.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),oa(i.return,n,t),l.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(j(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),oa(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Oe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Tn(t,n),o=qe(o),r=r(o),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,o=rt(r,t.pendingProps),o=rt(r.type,o),Iu(e,t,r,o,n);case 15:return ed(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),ko(e,t),t.tag=1,Ae(r)?(e=!0,Do(t)):e=!1,Tn(t,n),Jf(t,r,o),la(t,r,o,n),ua(null,t,r,!0,e,n);case 19:return id(e,t,n);case 22:return td(e,t,n)}throw Error(j(156,t.tag))};function Sd(e,t){return Yc(e,t)}function bm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new bm(e,t,n,r)}function gs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hm(e){if(typeof e=="function")return gs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Aa)return 11;if(e===Fa)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Co(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")gs(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case mn:return tn(n.children,o,i,t);case $a:a=8,o|=8;break;case Ol:return e=Je(12,n,t,o|2),e.elementType=Ol,e.lanes=i,e;case Rl:return e=Je(13,n,t,o),e.elementType=Rl,e.lanes=i,e;case Ll:return e=Je(19,n,t,o),e.elementType=Ll,e.lanes=i,e;case Oc:return hi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jc:a=10;break e;case Tc:a=9;break e;case Aa:a=11;break e;case Fa:a=14;break e;case Tt:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Je(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function tn(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function hi(e,t,n,r){return e=Je(22,e,r,t),e.elementType=Oc,e.lanes=n,e.stateNode={isHidden:!1},e}function xl(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function Sl(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tl(0),this.expirationTimes=tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ws(e,t,n,r,o,i,a,l,u){return e=new Qm(e,t,n,l,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ns(i),e}function Ym(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kd(e){if(!e)return bt;e=e._reactInternals;e:{if(un(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ae(n))return kf(e,n,t)}return t}function _d(e,t,n,r,o,i,a,l,u){return e=ws(n,r,!0,e,o,i,a,l,u),e.context=kd(null),n=e.current,r=Re(),o=Bt(n),i=kt(r,o),i.callback=t??null,Dt(n,i,o),e.current.lanes=o,Dr(e,o,r),Fe(e,r),e}function vi(e,t,n,r){var o=t.current,i=Re(),a=Bt(o);return n=kd(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(o,t,a),e!==null&&(at(e,o,a,i),wo(e,o,a)),a}function Zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xs(e,t){Yu(e,t),(e=e.alternate)&&Yu(e,t)}function Km(){return null}var Ed=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ss(e){this._internalRoot=e}yi.prototype.render=Ss.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));vi(e,t,null,null)};yi.prototype.unmount=Ss.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){vi(null,e,null,null)}),t[Et]=null}};function yi(e){this._internalRoot=e}yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=ef();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&nf(e)}};function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ku(){}function Xm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var s=Zo(a);i.call(s)}}var a=_d(t,r,e,0,null,!1,!1,"",Ku);return e._reactRootContainer=a,e[Et]=a.current,Er(e.nodeType===8?e.parentNode:e),an(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var s=Zo(u);l.call(s)}}var u=ws(e,0,!1,null,null,!1,!1,"",Ku);return e._reactRootContainer=u,e[Et]=u.current,Er(e.nodeType===8?e.parentNode:e),an(function(){vi(t,u,n,r)}),u}function wi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var u=Zo(a);l.call(u)}}vi(t,a,e,o)}else a=Xm(n,t,e,o,r);return Zo(a)}Zc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ir(t.pendingLanes);n!==0&&(Ba(t,n|1),Fe(t,se()),!(b&6)&&(Fn=se()+500,Yt()))}break;case 13:an(function(){var r=Ct(e,1);if(r!==null){var o=Re();at(r,e,1,o)}}),xs(e,1)}};Va=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=Re();at(t,e,134217728,n)}xs(e,134217728)}};qc=function(e){if(e.tag===13){var t=Bt(e),n=Ct(e,t);if(n!==null){var r=Re();at(n,e,t,r)}xs(e,t)}};ef=function(){return G};tf=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Vl=function(e,t,n){switch(t){case"input":if(Il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ui(r);if(!o)throw Error(j(90));Lc(r),Il(r,o)}}}break;case"textarea":Mc(e,n);break;case"select":t=n.value,t!=null&&Cn(e,!!n.multiple,t,!1)}};Bc=hs;Vc=an;var Gm={usingClientEntryPoint:!1,Events:[Br,gn,ui,Dc,Uc,hs]},tr={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jm={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hc(e),e===null?null:e.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||Km,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!so.isDisabled&&so.supportsFiber)try{ii=so.inject(Jm),ht=so}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gm;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ks(t))throw Error(j(200));return Ym(e,t,null,n)};He.createRoot=function(e,t){if(!ks(e))throw Error(j(299));var n=!1,r="",o=Ed;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ws(e,1,!1,null,null,n,!1,r,o),e[Et]=t.current,Er(e.nodeType===8?e.parentNode:e),new Ss(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Hc(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return an(e)};He.hydrate=function(e,t,n){if(!gi(t))throw Error(j(200));return wi(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!ks(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Ed;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=_d(t,null,e,1,n??null,o,!1,i,a),e[Et]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new yi(t)};He.render=function(e,t,n){if(!gi(t))throw Error(j(200));return wi(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!gi(e))throw Error(j(40));return e._reactRootContainer?(an(function(){wi(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};He.unstable_batchedUpdates=hs;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gi(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return wi(e,t,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426";function Cd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cd)}catch(e){console.error(e)}}Cd(),Ec.exports=He;var Zm=Ec.exports,Xu=Zm;jl.createRoot=Xu.createRoot,jl.hydrateRoot=Xu.hydrateRoot;const qm="/my_portfolio/assets/menu-DdHrMY9S.png";/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zr(){return zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zr.apply(this,arguments)}var qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(qt||(qt={}));const Gu="popstate";function eh(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return Sa("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:qo(o)}return nh(t,n,null,e)}function st(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function th(){return Math.random().toString(36).substr(2,8)}function Ju(e,t){return{usr:e.state,key:e.key,idx:t}}function Sa(e,t,n,r){return n===void 0&&(n=null),zr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xi(t):t,{state:n,key:t&&t.key||r||th()})}function qo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function xi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function nh(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=qt.Pop,u=null,s=c();s==null&&(s=0,a.replaceState(zr({},a.state,{idx:s}),""));function c(){return(a.state||{idx:null}).idx}function f(){l=qt.Pop;let x=c(),h=x==null?null:x-s;s=x,u&&u({action:l,location:g.location,delta:h})}function d(x,h){l=qt.Push;let p=Sa(g.location,x,h);s=c()+1;let v=Ju(p,s),w=g.createHref(p);try{a.pushState(v,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(w)}i&&u&&u({action:l,location:g.location,delta:1})}function m(x,h){l=qt.Replace;let p=Sa(g.location,x,h);s=c();let v=Ju(p,s),w=g.createHref(p);a.replaceState(v,"",w),i&&u&&u({action:l,location:g.location,delta:0})}function y(x){let h=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof x=="string"?x:qo(x);return p=p.replace(/ $/,"%20"),st(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let g={get action(){return l},get location(){return e(o,a)},listen(x){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Gu,f),u=x,()=>{o.removeEventListener(Gu,f),u=null}},createHref(x){return t(o,x)},createURL:y,encodeLocation(x){let h=y(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:m,go(x){return a.go(x)}};return g}var Zu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Zu||(Zu={}));function Nd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function rh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?xi(e):e;return{pathname:n?n.startsWith("/")?n:oh(n,t):t,search:lh(r),hash:ah(o)}}function oh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function kl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ih(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pd(e,t){let n=ih(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function jd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=xi(e):(o=zr({},e),st(!o.pathname||!o.pathname.includes("?"),kl("?","pathname","search",o)),st(!o.pathname||!o.pathname.includes("#"),kl("#","pathname","hash",o)),st(!o.search||!o.search.includes("#"),kl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;o.pathname=d.join("/")}l=f>=0?t[f]:"/"}let u=rh(o,l),s=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(s||c)&&(u.pathname+="/"),u}const Td=e=>e.join("/").replace(/\/\/+/g,"/"),lh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ah=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Od=["post","put","patch","delete"];new Set(Od);const sh=["get",...Od];new Set(sh);/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ei(){return ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ei.apply(this,arguments)}const Rd=T.createContext(null),Wn=T.createContext(null),_s=T.createContext(null),Si=T.createContext({outlet:null,matches:[],isDataRoute:!1});function uh(e,t){let{relative:n}=t===void 0?{}:t;ki()||st(!1);let{basename:r,navigator:o}=T.useContext(Wn),{hash:i,pathname:a,search:l}=zd(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:Td([r,a])),o.createHref({pathname:u,search:l,hash:i})}function ki(){return T.useContext(_s)!=null}function Es(){return ki()||st(!1),T.useContext(_s).location}function Ld(e){T.useContext(Wn).static||T.useLayoutEffect(e)}function ch(){let{isDataRoute:e}=T.useContext(Si);return e?hh():fh()}function fh(){ki()||st(!1);let e=T.useContext(Rd),{basename:t,future:n,navigator:r}=T.useContext(Wn),{matches:o}=T.useContext(Si),{pathname:i}=Es(),a=JSON.stringify(Pd(o,n.v7_relativeSplatPath)),l=T.useRef(!1);return Ld(()=>{l.current=!0}),T.useCallback(function(s,c){if(c===void 0&&(c={}),!l.current)return;if(typeof s=="number"){r.go(s);return}let f=jd(s,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Td([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,a,i,e])}function zd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(Wn),{matches:o}=T.useContext(Si),{pathname:i}=Es(),a=JSON.stringify(Pd(o,r.v7_relativeSplatPath));return T.useMemo(()=>jd(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}var Md=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Md||{}),Id=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Id||{});function dh(e){let t=T.useContext(Rd);return t||st(!1),t}function ph(e){let t=T.useContext(Si);return t||st(!1),t}function mh(e){let t=ph(),n=t.matches[t.matches.length-1];return n.route.id||st(!1),n.route.id}function hh(){let{router:e}=dh(Md.UseNavigateStable),t=mh(Id.UseNavigateStable),n=T.useRef(!1);return Ld(()=>{n.current=!0}),T.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ei({fromRouteId:t},i)))},[e,t])}function vh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=qt.Pop,navigator:i,static:a=!1,future:l}=e;ki()&&st(!1);let u=t.replace(/^\/*/,"/"),s=T.useMemo(()=>({basename:u,navigator:i,static:a,future:ei({v7_relativeSplatPath:!1},l)}),[u,l,i,a]);typeof r=="string"&&(r=xi(r));let{pathname:c="/",search:f="",hash:d="",state:m=null,key:y="default"}=r,g=T.useMemo(()=>{let x=Nd(c,u);return x==null?null:{location:{pathname:x,search:f,hash:d,state:m,key:y},navigationType:o}},[u,c,f,d,m,y,o]);return g==null?null:T.createElement(Wn.Provider,{value:s},T.createElement(_s.Provider,{children:n,value:g}))}new Promise(()=>{});/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ka.apply(this,arguments)}function yh(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function gh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wh(e,t){return e.button===0&&(!t||t==="_self")&&!gh(e)}const xh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Sh="6";try{window.__reactRouterVersion=Sh}catch{}const kh="startTransition",qu=Pl[kh];function _h(e){let{basename:t,children:n,future:r,window:o}=e,i=T.useRef();i.current==null&&(i.current=eh({window:o,v5Compat:!0}));let a=i.current,[l,u]=T.useState({action:a.action,location:a.location}),{v7_startTransition:s}=r||{},c=T.useCallback(f=>{s&&qu?qu(()=>u(f)):u(f)},[u,s]);return T.useLayoutEffect(()=>a.listen(c),[a,c]),T.createElement(vh,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const Eh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ch=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nh=T.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:u,to:s,preventScrollReset:c,unstable_viewTransition:f}=t,d=yh(t,xh),{basename:m}=T.useContext(Wn),y,g=!1;if(typeof s=="string"&&Ch.test(s)&&(y=s,Eh))try{let v=new URL(window.location.href),w=s.startsWith("//")?new URL(v.protocol+s):new URL(s),S=Nd(w.pathname,m);w.origin===v.origin&&S!=null?s=S+w.search+w.hash:g=!0}catch{}let x=uh(s,{relative:o}),h=Ph(s,{replace:a,state:l,target:u,preventScrollReset:c,relative:o,unstable_viewTransition:f});function p(v){r&&r(v),v.defaultPrevented||h(v)}return T.createElement("a",ka({},d,{href:y||x,onClick:g||i?r:p,ref:n,target:u}))});var ec;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ec||(ec={}));var tc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(tc||(tc={}));function Ph(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,u=ch(),s=Es(),c=zd(e,{relative:a});return T.useCallback(f=>{if(wh(f,n)){f.preventDefault();let d=r!==void 0?r:qo(s)===qo(c);u(e,{replace:d,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[s,u,c,r,o,n,e,i,a,l])}function jh({burgerMenu:e,clickMenuBurger:t}){function n(r){return t(r),console.log("click"),C.jsx(Nh,{to:"/menu-mobile"})}return C.jsxs("div",{className:"menu",children:[C.jsx("div",{className:"menu__div",children:C.jsxs("ul",{className:"menu__div--list",children:[C.jsx("a",{href:"#projects",children:C.jsx("li",{children:"Proyectos"})}),C.jsx("a",{href:"#tech",children:C.jsx("li",{children:"Tecnologías"})}),C.jsx("a",{href:"#contact",children:C.jsx("li",{children:"Contáctame"})})]})}),C.jsx("div",{className:"menu__icon",children:C.jsx("img",{src:qm,alt:"",className:"menu__icon--burger",onClick:n})})]})}const Th="/my_portfolio/assets/img_perfil_2026-BYwd21MP.png";var $d={exports:{}};(function(e,t){(function(n,r){e.exports=r(T)})(typeof self<"u"?self:Np,n=>(()=>{var r={7403:(l,u,s)=>{s.d(u,{default:()=>z});var c=s(4087),f=s.n(c);const d=function(R){return new RegExp(/<[a-z][\s\S]*>/i).test(R)},m=function(R,P){return Math.floor(Math.random()*(P-R+1))+R};var y="TYPE_CHARACTER",g="REMOVE_CHARACTER",x="REMOVE_ALL",h="REMOVE_LAST_VISIBLE_NODE",p="PAUSE_FOR",v="CALL_FUNCTION",w="ADD_HTML_TAG_ELEMENT",S="CHANGE_DELETE_SPEED",E="CHANGE_DELAY",k="CHANGE_CURSOR",N="PASTE_STRING",$="HTML_TAG";function L(R){return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},L(R)}function M(R,P){var D=Object.keys(R);if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(R);P&&(F=F.filter(function(Te){return Object.getOwnPropertyDescriptor(R,Te).enumerable})),D.push.apply(D,F)}return D}function U(R){for(var P=1;P<arguments.length;P++){var D=arguments[P]!=null?arguments[P]:{};P%2?M(Object(D),!0).forEach(function(F){V(R,F,D[F])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(D)):M(Object(D)).forEach(function(F){Object.defineProperty(R,F,Object.getOwnPropertyDescriptor(D,F))})}return R}function B(R){return function(P){if(Array.isArray(P))return K(P)}(R)||function(P){if(typeof Symbol<"u"&&P[Symbol.iterator]!=null||P["@@iterator"]!=null)return Array.from(P)}(R)||function(P,D){if(P){if(typeof P=="string")return K(P,D);var F=Object.prototype.toString.call(P).slice(8,-1);return F==="Object"&&P.constructor&&(F=P.constructor.name),F==="Map"||F==="Set"?Array.from(P):F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)?K(P,D):void 0}}(R)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function K(R,P){(P==null||P>R.length)&&(P=R.length);for(var D=0,F=new Array(P);D<P;D++)F[D]=R[D];return F}function X(R,P){for(var D=0;D<P.length;D++){var F=P[D];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(R,je(F.key),F)}}function V(R,P,D){return(P=je(P))in R?Object.defineProperty(R,P,{value:D,enumerable:!0,configurable:!0,writable:!0}):R[P]=D,R}function je(R){var P=function(D,F){if(L(D)!=="object"||D===null)return D;var Te=D[Symbol.toPrimitive];if(Te!==void 0){var _=Te.call(D,"string");if(L(_)!=="object")return _;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(D)}(R);return L(P)==="symbol"?P:String(P)}const z=function(){function R(F,Te){var _=this;if(function(A,H){if(!(A instanceof H))throw new TypeError("Cannot call a class as a function")}(this,R),V(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),V(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),V(this,"setupWrapperElement",function(){_.state.elements.container&&(_.state.elements.wrapper.className=_.options.wrapperClassName,_.state.elements.cursor.className=_.options.cursorClassName,_.state.elements.cursor.innerHTML=_.options.cursor,_.state.elements.container.innerHTML="",_.state.elements.container.appendChild(_.state.elements.wrapper),_.state.elements.container.appendChild(_.state.elements.cursor))}),V(this,"start",function(){return _.state.eventLoopPaused=!1,_.runEventLoop(),_}),V(this,"pause",function(){return _.state.eventLoopPaused=!0,_}),V(this,"stop",function(){return _.state.eventLoop&&((0,c.cancel)(_.state.eventLoop),_.state.eventLoop=null),_}),V(this,"pauseFor",function(A){return _.addEventToQueue(p,{ms:A}),_}),V(this,"typeOutAllStrings",function(){return typeof _.options.strings=="string"?(_.typeString(_.options.strings).pauseFor(_.options.pauseFor),_):(_.options.strings.forEach(function(A){_.typeString(A).pauseFor(_.options.pauseFor).deleteAll(_.options.deleteSpeed)}),_)}),V(this,"typeString",function(A){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(d(A))return _.typeOutHTMLString(A,H);if(A){var Se=(_.options||{}).stringSplitter,ke=typeof Se=="function"?Se(A):A.split("");_.typeCharacters(ke,H)}return _}),V(this,"pasteString",function(A){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return d(A)?_.typeOutHTMLString(A,H,!0):(A&&_.addEventToQueue(N,{character:A,node:H}),_)}),V(this,"typeOutHTMLString",function(A){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,Se=arguments.length>2?arguments[2]:void 0,ke=function(Hn){var Qn=document.createElement("div");return Qn.innerHTML=Hn,Qn.childNodes}(A);if(ke.length>0)for(var ne=0;ne<ke.length;ne++){var Ke=ke[ne],fn=Ke.innerHTML;Ke&&Ke.nodeType!==3?(Ke.innerHTML="",_.addEventToQueue(w,{node:Ke,parentNode:H}),Se?_.pasteString(fn,Ke):_.typeString(fn,Ke)):Ke.textContent&&(Se?_.pasteString(Ke.textContent,H):_.typeString(Ke.textContent,H))}return _}),V(this,"deleteAll",function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return _.addEventToQueue(x,{speed:A}),_}),V(this,"changeDeleteSpeed",function(A){if(!A)throw new Error("Must provide new delete speed");return _.addEventToQueue(S,{speed:A}),_}),V(this,"changeDelay",function(A){if(!A)throw new Error("Must provide new delay");return _.addEventToQueue(E,{delay:A}),_}),V(this,"changeCursor",function(A){if(!A)throw new Error("Must provide new cursor");return _.addEventToQueue(k,{cursor:A}),_}),V(this,"deleteChars",function(A){if(!A)throw new Error("Must provide amount of characters to delete");for(var H=0;H<A;H++)_.addEventToQueue(g);return _}),V(this,"callFunction",function(A,H){if(!A||typeof A!="function")throw new Error("Callback must be a function");return _.addEventToQueue(v,{cb:A,thisArg:H}),_}),V(this,"typeCharacters",function(A){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!A||!Array.isArray(A))throw new Error("Characters must be an array");return A.forEach(function(Se){_.addEventToQueue(y,{character:Se,node:H})}),_}),V(this,"removeCharacters",function(A){if(!A||!Array.isArray(A))throw new Error("Characters must be an array");return A.forEach(function(){_.addEventToQueue(g)}),_}),V(this,"addEventToQueue",function(A,H){var Se=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return _.addEventToStateProperty(A,H,Se,"eventQueue")}),V(this,"addReverseCalledEvent",function(A,H){var Se=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return _.options.loop?_.addEventToStateProperty(A,H,Se,"reverseCalledEvents"):_}),V(this,"addEventToStateProperty",function(A,H){var Se=arguments.length>2&&arguments[2]!==void 0&&arguments[2],ke=arguments.length>3?arguments[3]:void 0,ne={eventName:A,eventArgs:H||{}};return _.state[ke]=Se?[ne].concat(B(_.state[ke])):[].concat(B(_.state[ke]),[ne]),_}),V(this,"runEventLoop",function(){_.state.lastFrameTime||(_.state.lastFrameTime=Date.now());var A=Date.now(),H=A-_.state.lastFrameTime;if(!_.state.eventQueue.length){if(!_.options.loop)return;_.state.eventQueue=B(_.state.calledEvents),_.state.calledEvents=[],_.options=U({},_.state.initialOptions)}if(_.state.eventLoop=f()(_.runEventLoop),!_.state.eventLoopPaused){if(_.state.pauseUntil){if(A<_.state.pauseUntil)return;_.state.pauseUntil=null}var Se,ke=B(_.state.eventQueue),ne=ke.shift();if(!(H<=(Se=ne.eventName===h||ne.eventName===g?_.options.deleteSpeed==="natural"?m(40,80):_.options.deleteSpeed:_.options.delay==="natural"?m(120,160):_.options.delay))){var Ke=ne.eventName,fn=ne.eventArgs;switch(_.logInDevMode({currentEvent:ne,state:_.state,delay:Se}),Ke){case N:case y:var Hn=fn.character,Qn=fn.node,As=document.createTextNode(Hn),Yn=As;_.options.onCreateTextNode&&typeof _.options.onCreateTextNode=="function"&&(Yn=_.options.onCreateTextNode(Hn,As)),Yn&&(Qn?Qn.appendChild(Yn):_.state.elements.wrapper.appendChild(Yn)),_.state.visibleNodes=[].concat(B(_.state.visibleNodes),[{type:"TEXT_NODE",character:Hn,node:Yn}]);break;case g:ke.unshift({eventName:h,eventArgs:{removingCharacterNode:!0}});break;case p:var yp=ne.eventArgs.ms;_.state.pauseUntil=Date.now()+parseInt(yp);break;case v:var Fs=ne.eventArgs,gp=Fs.cb,wp=Fs.thisArg;gp.call(wp,{elements:_.state.elements});break;case w:var Ds=ne.eventArgs,Qi=Ds.node,Yi=Ds.parentNode;Yi?Yi.appendChild(Qi):_.state.elements.wrapper.appendChild(Qi),_.state.visibleNodes=[].concat(B(_.state.visibleNodes),[{type:$,node:Qi,parentNode:Yi||_.state.elements.wrapper}]);break;case x:var xp=_.state.visibleNodes,Ki=fn.speed,br=[];Ki&&br.push({eventName:S,eventArgs:{speed:Ki,temp:!0}});for(var Us=0,Sp=xp.length;Us<Sp;Us++)br.push({eventName:h,eventArgs:{removingCharacterNode:!1}});Ki&&br.push({eventName:S,eventArgs:{speed:_.options.deleteSpeed,temp:!0}}),ke.unshift.apply(ke,br);break;case h:var kp=ne.eventArgs.removingCharacterNode;if(_.state.visibleNodes.length){var Xi=_.state.visibleNodes.pop(),_p=Xi.type,Hr=Xi.node,Ep=Xi.character;_.options.onRemoveNode&&typeof _.options.onRemoveNode=="function"&&_.options.onRemoveNode({node:Hr,character:Ep}),Hr&&Hr.parentNode.removeChild(Hr),_p===$&&kp&&ke.unshift({eventName:h,eventArgs:{}})}break;case S:_.options.deleteSpeed=ne.eventArgs.speed;break;case E:_.options.delay=ne.eventArgs.delay;break;case k:_.options.cursor=ne.eventArgs.cursor,_.state.elements.cursor.innerHTML=ne.eventArgs.cursor}_.options.loop&&(ne.eventName===h||ne.eventArgs&&ne.eventArgs.temp||(_.state.calledEvents=[].concat(B(_.state.calledEvents),[ne]))),_.state.eventQueue=ke,_.state.lastFrameTime=A}}}),F)if(typeof F=="string"){var cn=document.querySelector(F);if(!cn)throw new Error("Could not find container element");this.state.elements.container=cn}else this.state.elements.container=F;Te&&(this.options=U(U({},this.options),Te)),this.state.initialOptions=U({},this.options),this.init()}var P,D;return P=R,(D=[{key:"init",value:function(){var F,Te;this.setupWrapperElement(),this.addEventToQueue(k,{cursor:this.options.cursor},!0),this.addEventToQueue(x,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(F=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(Te=document.createElement("style")).appendChild(document.createTextNode(F)),document.head.appendChild(Te),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(F){this.options.devMode&&console.log(F)}}])&&X(P.prototype,D),Object.defineProperty(P,"prototype",{writable:!1}),R}()},8552:(l,u,s)=>{var c=s(852)(s(5639),"DataView");l.exports=c},1989:(l,u,s)=>{var c=s(1789),f=s(401),d=s(7667),m=s(1327),y=s(1866);function g(x){var h=-1,p=x==null?0:x.length;for(this.clear();++h<p;){var v=x[h];this.set(v[0],v[1])}}g.prototype.clear=c,g.prototype.delete=f,g.prototype.get=d,g.prototype.has=m,g.prototype.set=y,l.exports=g},8407:(l,u,s)=>{var c=s(7040),f=s(4125),d=s(2117),m=s(7518),y=s(4705);function g(x){var h=-1,p=x==null?0:x.length;for(this.clear();++h<p;){var v=x[h];this.set(v[0],v[1])}}g.prototype.clear=c,g.prototype.delete=f,g.prototype.get=d,g.prototype.has=m,g.prototype.set=y,l.exports=g},7071:(l,u,s)=>{var c=s(852)(s(5639),"Map");l.exports=c},3369:(l,u,s)=>{var c=s(4785),f=s(1285),d=s(6e3),m=s(9916),y=s(5265);function g(x){var h=-1,p=x==null?0:x.length;for(this.clear();++h<p;){var v=x[h];this.set(v[0],v[1])}}g.prototype.clear=c,g.prototype.delete=f,g.prototype.get=d,g.prototype.has=m,g.prototype.set=y,l.exports=g},3818:(l,u,s)=>{var c=s(852)(s(5639),"Promise");l.exports=c},8525:(l,u,s)=>{var c=s(852)(s(5639),"Set");l.exports=c},8668:(l,u,s)=>{var c=s(3369),f=s(619),d=s(2385);function m(y){var g=-1,x=y==null?0:y.length;for(this.__data__=new c;++g<x;)this.add(y[g])}m.prototype.add=m.prototype.push=f,m.prototype.has=d,l.exports=m},6384:(l,u,s)=>{var c=s(8407),f=s(7465),d=s(3779),m=s(7599),y=s(4758),g=s(4309);function x(h){var p=this.__data__=new c(h);this.size=p.size}x.prototype.clear=f,x.prototype.delete=d,x.prototype.get=m,x.prototype.has=y,x.prototype.set=g,l.exports=x},2705:(l,u,s)=>{var c=s(5639).Symbol;l.exports=c},1149:(l,u,s)=>{var c=s(5639).Uint8Array;l.exports=c},577:(l,u,s)=>{var c=s(852)(s(5639),"WeakMap");l.exports=c},4963:l=>{l.exports=function(u,s){for(var c=-1,f=u==null?0:u.length,d=0,m=[];++c<f;){var y=u[c];s(y,c,u)&&(m[d++]=y)}return m}},4636:(l,u,s)=>{var c=s(2545),f=s(5694),d=s(1469),m=s(4144),y=s(5776),g=s(6719),x=Object.prototype.hasOwnProperty;l.exports=function(h,p){var v=d(h),w=!v&&f(h),S=!v&&!w&&m(h),E=!v&&!w&&!S&&g(h),k=v||w||S||E,N=k?c(h.length,String):[],$=N.length;for(var L in h)!p&&!x.call(h,L)||k&&(L=="length"||S&&(L=="offset"||L=="parent")||E&&(L=="buffer"||L=="byteLength"||L=="byteOffset")||y(L,$))||N.push(L);return N}},2488:l=>{l.exports=function(u,s){for(var c=-1,f=s.length,d=u.length;++c<f;)u[d+c]=s[c];return u}},2908:l=>{l.exports=function(u,s){for(var c=-1,f=u==null?0:u.length;++c<f;)if(s(u[c],c,u))return!0;return!1}},8470:(l,u,s)=>{var c=s(7813);l.exports=function(f,d){for(var m=f.length;m--;)if(c(f[m][0],d))return m;return-1}},8866:(l,u,s)=>{var c=s(2488),f=s(1469);l.exports=function(d,m,y){var g=m(d);return f(d)?g:c(g,y(d))}},4239:(l,u,s)=>{var c=s(2705),f=s(9607),d=s(2333),m=c?c.toStringTag:void 0;l.exports=function(y){return y==null?y===void 0?"[object Undefined]":"[object Null]":m&&m in Object(y)?f(y):d(y)}},9454:(l,u,s)=>{var c=s(4239),f=s(7005);l.exports=function(d){return f(d)&&c(d)=="[object Arguments]"}},939:(l,u,s)=>{var c=s(2492),f=s(7005);l.exports=function d(m,y,g,x,h){return m===y||(m==null||y==null||!f(m)&&!f(y)?m!=m&&y!=y:c(m,y,g,x,d,h))}},2492:(l,u,s)=>{var c=s(6384),f=s(7114),d=s(8351),m=s(6096),y=s(4160),g=s(1469),x=s(4144),h=s(6719),p="[object Arguments]",v="[object Array]",w="[object Object]",S=Object.prototype.hasOwnProperty;l.exports=function(E,k,N,$,L,M){var U=g(E),B=g(k),K=U?v:y(E),X=B?v:y(k),V=(K=K==p?w:K)==w,je=(X=X==p?w:X)==w,z=K==X;if(z&&x(E)){if(!x(k))return!1;U=!0,V=!1}if(z&&!V)return M||(M=new c),U||h(E)?f(E,k,N,$,L,M):d(E,k,K,N,$,L,M);if(!(1&N)){var R=V&&S.call(E,"__wrapped__"),P=je&&S.call(k,"__wrapped__");if(R||P){var D=R?E.value():E,F=P?k.value():k;return M||(M=new c),L(D,F,N,$,M)}}return!!z&&(M||(M=new c),m(E,k,N,$,L,M))}},8458:(l,u,s)=>{var c=s(3560),f=s(5346),d=s(3218),m=s(346),y=/^\[object .+?Constructor\]$/,g=Function.prototype,x=Object.prototype,h=g.toString,p=x.hasOwnProperty,v=RegExp("^"+h.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");l.exports=function(w){return!(!d(w)||f(w))&&(c(w)?v:y).test(m(w))}},8749:(l,u,s)=>{var c=s(4239),f=s(1780),d=s(7005),m={};m["[object Float32Array]"]=m["[object Float64Array]"]=m["[object Int8Array]"]=m["[object Int16Array]"]=m["[object Int32Array]"]=m["[object Uint8Array]"]=m["[object Uint8ClampedArray]"]=m["[object Uint16Array]"]=m["[object Uint32Array]"]=!0,m["[object Arguments]"]=m["[object Array]"]=m["[object ArrayBuffer]"]=m["[object Boolean]"]=m["[object DataView]"]=m["[object Date]"]=m["[object Error]"]=m["[object Function]"]=m["[object Map]"]=m["[object Number]"]=m["[object Object]"]=m["[object RegExp]"]=m["[object Set]"]=m["[object String]"]=m["[object WeakMap]"]=!1,l.exports=function(y){return d(y)&&f(y.length)&&!!m[c(y)]}},280:(l,u,s)=>{var c=s(5726),f=s(6916),d=Object.prototype.hasOwnProperty;l.exports=function(m){if(!c(m))return f(m);var y=[];for(var g in Object(m))d.call(m,g)&&g!="constructor"&&y.push(g);return y}},2545:l=>{l.exports=function(u,s){for(var c=-1,f=Array(u);++c<u;)f[c]=s(c);return f}},1717:l=>{l.exports=function(u){return function(s){return u(s)}}},4757:l=>{l.exports=function(u,s){return u.has(s)}},4429:(l,u,s)=>{var c=s(5639)["__core-js_shared__"];l.exports=c},7114:(l,u,s)=>{var c=s(8668),f=s(2908),d=s(4757);l.exports=function(m,y,g,x,h,p){var v=1&g,w=m.length,S=y.length;if(w!=S&&!(v&&S>w))return!1;var E=p.get(m),k=p.get(y);if(E&&k)return E==y&&k==m;var N=-1,$=!0,L=2&g?new c:void 0;for(p.set(m,y),p.set(y,m);++N<w;){var M=m[N],U=y[N];if(x)var B=v?x(U,M,N,y,m,p):x(M,U,N,m,y,p);if(B!==void 0){if(B)continue;$=!1;break}if(L){if(!f(y,function(K,X){if(!d(L,X)&&(M===K||h(M,K,g,x,p)))return L.push(X)})){$=!1;break}}else if(M!==U&&!h(M,U,g,x,p)){$=!1;break}}return p.delete(m),p.delete(y),$}},8351:(l,u,s)=>{var c=s(2705),f=s(1149),d=s(7813),m=s(7114),y=s(8776),g=s(1814),x=c?c.prototype:void 0,h=x?x.valueOf:void 0;l.exports=function(p,v,w,S,E,k,N){switch(w){case"[object DataView]":if(p.byteLength!=v.byteLength||p.byteOffset!=v.byteOffset)return!1;p=p.buffer,v=v.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=v.byteLength||!k(new f(p),new f(v)));case"[object Boolean]":case"[object Date]":case"[object Number]":return d(+p,+v);case"[object Error]":return p.name==v.name&&p.message==v.message;case"[object RegExp]":case"[object String]":return p==v+"";case"[object Map]":var $=y;case"[object Set]":var L=1&S;if($||($=g),p.size!=v.size&&!L)return!1;var M=N.get(p);if(M)return M==v;S|=2,N.set(p,v);var U=m($(p),$(v),S,E,k,N);return N.delete(p),U;case"[object Symbol]":if(h)return h.call(p)==h.call(v)}return!1}},6096:(l,u,s)=>{var c=s(8234),f=Object.prototype.hasOwnProperty;l.exports=function(d,m,y,g,x,h){var p=1&y,v=c(d),w=v.length;if(w!=c(m).length&&!p)return!1;for(var S=w;S--;){var E=v[S];if(!(p?E in m:f.call(m,E)))return!1}var k=h.get(d),N=h.get(m);if(k&&N)return k==m&&N==d;var $=!0;h.set(d,m),h.set(m,d);for(var L=p;++S<w;){var M=d[E=v[S]],U=m[E];if(g)var B=p?g(U,M,E,m,d,h):g(M,U,E,d,m,h);if(!(B===void 0?M===U||x(M,U,y,g,h):B)){$=!1;break}L||(L=E=="constructor")}if($&&!L){var K=d.constructor,X=m.constructor;K==X||!("constructor"in d)||!("constructor"in m)||typeof K=="function"&&K instanceof K&&typeof X=="function"&&X instanceof X||($=!1)}return h.delete(d),h.delete(m),$}},1957:(l,u,s)=>{var c=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g;l.exports=c},8234:(l,u,s)=>{var c=s(8866),f=s(9551),d=s(3674);l.exports=function(m){return c(m,d,f)}},5050:(l,u,s)=>{var c=s(7019);l.exports=function(f,d){var m=f.__data__;return c(d)?m[typeof d=="string"?"string":"hash"]:m.map}},852:(l,u,s)=>{var c=s(8458),f=s(7801);l.exports=function(d,m){var y=f(d,m);return c(y)?y:void 0}},9607:(l,u,s)=>{var c=s(2705),f=Object.prototype,d=f.hasOwnProperty,m=f.toString,y=c?c.toStringTag:void 0;l.exports=function(g){var x=d.call(g,y),h=g[y];try{g[y]=void 0;var p=!0}catch{}var v=m.call(g);return p&&(x?g[y]=h:delete g[y]),v}},9551:(l,u,s)=>{var c=s(4963),f=s(479),d=Object.prototype.propertyIsEnumerable,m=Object.getOwnPropertySymbols,y=m?function(g){return g==null?[]:(g=Object(g),c(m(g),function(x){return d.call(g,x)}))}:f;l.exports=y},4160:(l,u,s)=>{var c=s(8552),f=s(7071),d=s(3818),m=s(8525),y=s(577),g=s(4239),x=s(346),h="[object Map]",p="[object Promise]",v="[object Set]",w="[object WeakMap]",S="[object DataView]",E=x(c),k=x(f),N=x(d),$=x(m),L=x(y),M=g;(c&&M(new c(new ArrayBuffer(1)))!=S||f&&M(new f)!=h||d&&M(d.resolve())!=p||m&&M(new m)!=v||y&&M(new y)!=w)&&(M=function(U){var B=g(U),K=B=="[object Object]"?U.constructor:void 0,X=K?x(K):"";if(X)switch(X){case E:return S;case k:return h;case N:return p;case $:return v;case L:return w}return B}),l.exports=M},7801:l=>{l.exports=function(u,s){return u==null?void 0:u[s]}},1789:(l,u,s)=>{var c=s(4536);l.exports=function(){this.__data__=c?c(null):{},this.size=0}},401:l=>{l.exports=function(u){var s=this.has(u)&&delete this.__data__[u];return this.size-=s?1:0,s}},7667:(l,u,s)=>{var c=s(4536),f=Object.prototype.hasOwnProperty;l.exports=function(d){var m=this.__data__;if(c){var y=m[d];return y==="__lodash_hash_undefined__"?void 0:y}return f.call(m,d)?m[d]:void 0}},1327:(l,u,s)=>{var c=s(4536),f=Object.prototype.hasOwnProperty;l.exports=function(d){var m=this.__data__;return c?m[d]!==void 0:f.call(m,d)}},1866:(l,u,s)=>{var c=s(4536);l.exports=function(f,d){var m=this.__data__;return this.size+=this.has(f)?0:1,m[f]=c&&d===void 0?"__lodash_hash_undefined__":d,this}},5776:l=>{var u=/^(?:0|[1-9]\d*)$/;l.exports=function(s,c){var f=typeof s;return!!(c=c??9007199254740991)&&(f=="number"||f!="symbol"&&u.test(s))&&s>-1&&s%1==0&&s<c}},7019:l=>{l.exports=function(u){var s=typeof u;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?u!=="__proto__":u===null}},5346:(l,u,s)=>{var c,f=s(4429),d=(c=/[^.]+$/.exec(f&&f.keys&&f.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"";l.exports=function(m){return!!d&&d in m}},5726:l=>{var u=Object.prototype;l.exports=function(s){var c=s&&s.constructor;return s===(typeof c=="function"&&c.prototype||u)}},7040:l=>{l.exports=function(){this.__data__=[],this.size=0}},4125:(l,u,s)=>{var c=s(8470),f=Array.prototype.splice;l.exports=function(d){var m=this.__data__,y=c(m,d);return!(y<0||(y==m.length-1?m.pop():f.call(m,y,1),--this.size,0))}},2117:(l,u,s)=>{var c=s(8470);l.exports=function(f){var d=this.__data__,m=c(d,f);return m<0?void 0:d[m][1]}},7518:(l,u,s)=>{var c=s(8470);l.exports=function(f){return c(this.__data__,f)>-1}},4705:(l,u,s)=>{var c=s(8470);l.exports=function(f,d){var m=this.__data__,y=c(m,f);return y<0?(++this.size,m.push([f,d])):m[y][1]=d,this}},4785:(l,u,s)=>{var c=s(1989),f=s(8407),d=s(7071);l.exports=function(){this.size=0,this.__data__={hash:new c,map:new(d||f),string:new c}}},1285:(l,u,s)=>{var c=s(5050);l.exports=function(f){var d=c(this,f).delete(f);return this.size-=d?1:0,d}},6e3:(l,u,s)=>{var c=s(5050);l.exports=function(f){return c(this,f).get(f)}},9916:(l,u,s)=>{var c=s(5050);l.exports=function(f){return c(this,f).has(f)}},5265:(l,u,s)=>{var c=s(5050);l.exports=function(f,d){var m=c(this,f),y=m.size;return m.set(f,d),this.size+=m.size==y?0:1,this}},8776:l=>{l.exports=function(u){var s=-1,c=Array(u.size);return u.forEach(function(f,d){c[++s]=[d,f]}),c}},4536:(l,u,s)=>{var c=s(852)(Object,"create");l.exports=c},6916:(l,u,s)=>{var c=s(5569)(Object.keys,Object);l.exports=c},1167:(l,u,s)=>{l=s.nmd(l);var c=s(1957),f=u&&!u.nodeType&&u,d=f&&l&&!l.nodeType&&l,m=d&&d.exports===f&&c.process,y=function(){try{return d&&d.require&&d.require("util").types||m&&m.binding&&m.binding("util")}catch{}}();l.exports=y},2333:l=>{var u=Object.prototype.toString;l.exports=function(s){return u.call(s)}},5569:l=>{l.exports=function(u,s){return function(c){return u(s(c))}}},5639:(l,u,s)=>{var c=s(1957),f=typeof self=="object"&&self&&self.Object===Object&&self,d=c||f||Function("return this")();l.exports=d},619:l=>{l.exports=function(u){return this.__data__.set(u,"__lodash_hash_undefined__"),this}},2385:l=>{l.exports=function(u){return this.__data__.has(u)}},1814:l=>{l.exports=function(u){var s=-1,c=Array(u.size);return u.forEach(function(f){c[++s]=f}),c}},7465:(l,u,s)=>{var c=s(8407);l.exports=function(){this.__data__=new c,this.size=0}},3779:l=>{l.exports=function(u){var s=this.__data__,c=s.delete(u);return this.size=s.size,c}},7599:l=>{l.exports=function(u){return this.__data__.get(u)}},4758:l=>{l.exports=function(u){return this.__data__.has(u)}},4309:(l,u,s)=>{var c=s(8407),f=s(7071),d=s(3369);l.exports=function(m,y){var g=this.__data__;if(g instanceof c){var x=g.__data__;if(!f||x.length<199)return x.push([m,y]),this.size=++g.size,this;g=this.__data__=new d(x)}return g.set(m,y),this.size=g.size,this}},346:l=>{var u=Function.prototype.toString;l.exports=function(s){if(s!=null){try{return u.call(s)}catch{}try{return s+""}catch{}}return""}},7813:l=>{l.exports=function(u,s){return u===s||u!=u&&s!=s}},5694:(l,u,s)=>{var c=s(9454),f=s(7005),d=Object.prototype,m=d.hasOwnProperty,y=d.propertyIsEnumerable,g=c(function(){return arguments}())?c:function(x){return f(x)&&m.call(x,"callee")&&!y.call(x,"callee")};l.exports=g},1469:l=>{var u=Array.isArray;l.exports=u},8612:(l,u,s)=>{var c=s(3560),f=s(1780);l.exports=function(d){return d!=null&&f(d.length)&&!c(d)}},4144:(l,u,s)=>{l=s.nmd(l);var c=s(5639),f=s(5062),d=u&&!u.nodeType&&u,m=d&&l&&!l.nodeType&&l,y=m&&m.exports===d?c.Buffer:void 0,g=(y?y.isBuffer:void 0)||f;l.exports=g},8446:(l,u,s)=>{var c=s(939);l.exports=function(f,d){return c(f,d)}},3560:(l,u,s)=>{var c=s(4239),f=s(3218);l.exports=function(d){if(!f(d))return!1;var m=c(d);return m=="[object Function]"||m=="[object GeneratorFunction]"||m=="[object AsyncFunction]"||m=="[object Proxy]"}},1780:l=>{l.exports=function(u){return typeof u=="number"&&u>-1&&u%1==0&&u<=9007199254740991}},3218:l=>{l.exports=function(u){var s=typeof u;return u!=null&&(s=="object"||s=="function")}},7005:l=>{l.exports=function(u){return u!=null&&typeof u=="object"}},6719:(l,u,s)=>{var c=s(8749),f=s(1717),d=s(1167),m=d&&d.isTypedArray,y=m?f(m):c;l.exports=y},3674:(l,u,s)=>{var c=s(4636),f=s(280),d=s(8612);l.exports=function(m){return d(m)?c(m):f(m)}},479:l=>{l.exports=function(){return[]}},5062:l=>{l.exports=function(){return!1}},75:function(l){(function(){var u,s,c,f,d,m;typeof performance<"u"&&performance!==null&&performance.now?l.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(l.exports=function(){return(u()-d)/1e6},s=process.hrtime,f=(u=function(){var y;return 1e9*(y=s())[0]+y[1]})(),m=1e9*process.uptime(),d=f-m):Date.now?(l.exports=function(){return Date.now()-c},c=Date.now()):(l.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)},4087:(l,u,s)=>{for(var c=s(75),f=typeof window>"u"?s.g:window,d=["moz","webkit"],m="AnimationFrame",y=f["request"+m],g=f["cancel"+m]||f["cancelRequest"+m],x=0;!y&&x<d.length;x++)y=f[d[x]+"Request"+m],g=f[d[x]+"Cancel"+m]||f[d[x]+"CancelRequest"+m];if(!y||!g){var h=0,p=0,v=[];y=function(w){if(v.length===0){var S=c(),E=Math.max(0,16.666666666666668-(S-h));h=E+S,setTimeout(function(){var k=v.slice(0);v.length=0;for(var N=0;N<k.length;N++)if(!k[N].cancelled)try{k[N].callback(h)}catch($){setTimeout(function(){throw $},0)}},Math.round(E))}return v.push({handle:++p,callback:w,cancelled:!1}),p},g=function(w){for(var S=0;S<v.length;S++)v[S].handle===w&&(v[S].cancelled=!0)}}l.exports=function(w){return y.call(f,w)},l.exports.cancel=function(){g.apply(f,arguments)},l.exports.polyfill=function(w){w||(w=f),w.requestAnimationFrame=y,w.cancelAnimationFrame=g}},8156:l=>{l.exports=n}},o={};function i(l){var u=o[l];if(u!==void 0)return u.exports;var s=o[l]={id:l,loaded:!1,exports:{}};return r[l].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.n=l=>{var u=l&&l.__esModule?()=>l.default:()=>l;return i.d(u,{a:u}),u},i.d=(l,u)=>{for(var s in u)i.o(u,s)&&!i.o(l,s)&&Object.defineProperty(l,s,{enumerable:!0,get:u[s]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(l,u)=>Object.prototype.hasOwnProperty.call(l,u),i.nmd=l=>(l.paths=[],l.children||(l.children=[]),l);var a={};return(()=>{i.d(a,{default:()=>v});var l=i(8156),u=i.n(l),s=i(7403),c=i(8446),f=i.n(c);function d(w){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},d(w)}function m(w,S){for(var E=0;E<S.length;E++){var k=S[E];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(w,h(k.key),k)}}function y(w,S){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(E,k){return E.__proto__=k,E},y(w,S)}function g(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function x(w){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(S){return S.__proto__||Object.getPrototypeOf(S)},x(w)}function h(w){var S=function(E,k){if(d(E)!=="object"||E===null)return E;var N=E[Symbol.toPrimitive];if(N!==void 0){var $=N.call(E,"string");if(d($)!=="object")return $;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(E)}(w);return d(S)==="symbol"?S:String(S)}var p=function(w){(function(M,U){if(typeof U!="function"&&U!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(U&&U.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),U&&y(M,U)})(L,w);var S,E,k,N,$=(k=L,N=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,U=x(k);if(N){var B=x(this).constructor;M=Reflect.construct(U,arguments,B)}else M=U.apply(this,arguments);return function(K,X){if(X&&(d(X)==="object"||typeof X=="function"))return X;if(X!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g(K)}(this,M)});function L(){var M,U,B,K;(function(z,R){if(!(z instanceof R))throw new TypeError("Cannot call a class as a function")})(this,L);for(var X=arguments.length,V=new Array(X),je=0;je<X;je++)V[je]=arguments[je];return U=g(M=$.call.apply($,[this].concat(V))),K={instance:null},(B=h(B="state"))in U?Object.defineProperty(U,B,{value:K,enumerable:!0,configurable:!0,writable:!0}):U[B]=K,M}return S=L,(E=[{key:"componentDidMount",value:function(){var M=this,U=new s.default(this.typewriter,this.props.options);this.setState({instance:U},function(){var B=M.props.onInit;B&&B(U)})}},{key:"componentDidUpdate",value:function(M){f()(this.props.options,M.options)||this.setState({instance:new s.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var M=this,U=this.props.component;return u().createElement(U,{ref:function(B){return M.typewriter=B},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&m(S.prototype,E),Object.defineProperty(S,"prototype",{writable:!1}),L}(l.Component);p.defaultProps={component:"div"};const v=p})(),a.default})())})($d);var Oh=$d.exports;const Rh=ja(Oh);var Ad={exports:{}},Lh="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zh=Lh,Mh=zh;function Fd(){}function Dd(){}Dd.resetWarningCache=Fd;var Ih=function(){function e(r,o,i,a,l,u){if(u!==Mh){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Dd,resetWarningCache:Fd};return n.PropTypes=n,n};Ad.exports=Ih();var $h=Ad.exports;const uo=ja($h);function ti({text:e,bgColor:t,textColor:n,onClick:r}){return C.jsx("button",{onClick:r,style:{backgroundColor:t,color:n,padding:"10px 16px",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"16px",fontWeight:"bold"},children:e})}ti.propTypes={text:uo.string,bgColor:uo.string,textColor:uo.string,onClick:uo.func};ti.defaultProps={text:"Botón",bgColor:"#007bff",textColor:"#6B7280"};function Ah(){return C.jsxs("div",{className:"ppal__section",children:[C.jsx("img",{src:Th,alt:"",className:"ppal__section--img"}),C.jsxs("div",{children:[C.jsx("div",{className:"ppal__section--title",children:C.jsx(Rh,{options:{loop:!0,delay:300},onInit:e=>{e.typeString("Valentina Ovalles").start()}})}),C.jsx("p",{className:"ppal__section--aboutMe",children:"Front-End Developer Junior con una sólida trayectoria en marketing y una pasión por la tecnología. Mi experiencia en marketing me ofrece una visión estratégica y habilidades de comunicación que ahora aplico en el desarrollo web."}),C.jsxs("div",{style:{display:"flex",gap:"16px",marginTop:"16px",justifyContent:"center"},children:[C.jsx(ti,{text:"VER CV",bgColor:"#DCFCE7",onClick:()=>window.open("https://drive.google.com/file/d/17NdS3m2_biS4V9IAOEvTO9wdPLiN2DoY/view?usp=sharing","_blank")}),C.jsx(ti,{text:"PERFIL LINKEDIN",bgColor:"#FEF9C3",onClick:()=>window.open("https://www.linkedin.com/in/valentinaovallesr/","_blank")})]})]})]})}var Fh=Object.defineProperty,Dh=Object.defineProperties,Uh=Object.getOwnPropertyDescriptors,nc=Object.getOwnPropertySymbols,Bh=Object.prototype.hasOwnProperty,Vh=Object.prototype.propertyIsEnumerable,rc=(e,t,n)=>t in e?Fh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_l=(e,t)=>{for(var n in t||(t={}))Bh.call(t,n)&&rc(e,n,t[n]);if(nc)for(var n of nc(t))Vh.call(t,n)&&rc(e,n,t[n]);return e},Wh=(e,t)=>Dh(e,Uh(t)),Ud=kc.createContext({}),bh=Ud.Provider,Bd=()=>T.useContext(Ud);function Hh(e,t,n=!0){const r=T.useRef();T.useEffect(()=>{r.current=e},[e]),T.useEffect(()=>{if(n&&t!==null){const o=setInterval(()=>{r.current&&r.current()},t);return()=>clearInterval(o)}},[t,n])}function Qh({totalPages:e,wrapMode:t}){const[n,r]=T.useState(0);return{currentPage:n,goToPage:l=>{l<0||l>=e||r(l)},goForward:()=>{r(t==="wrap"?l=>(l+1)%e:l=>Math.min(l+1,e-1))},goBack:()=>{r(t==="wrap"?l=>(l-1+e)%e:l=>Math.max(l-1,0))}}}function Yh(e,t){const n=T.useRef();return T.useCallback((...r)=>{n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{e(...r)},t)},[e,t])}function El(e,t){return new Array(e).fill(0).map((n,r)=>r*t)}function Kh(e){let t=0;return e.map(n=>t+=n)}function Xh(e,t){return e.reduce((n,r)=>Math.abs(r-t)<Math.abs(n-t)?r:n)}function ni(...e){return e.filter(Boolean).join(" ")}var Vd=()=>typeof window<"u";function Gh(e){const[t,n]=T.useState();return T.useEffect(()=>{if(!e.current)return;const r=e.current,o=new ResizeObserver(()=>n(r.getBoundingClientRect()));return o.observe(r),()=>{o.unobserve(r)}},[e]),t}function Jh({element:e,scrollDistance:t}){const[n,r]=T.useState(0),[o,i]=T.useState(El(n,0)),a=Gh(e);return T.useEffect(()=>{var l;const u=e.current;if(!(u&&a))return;const s=u.scrollWidth,c=u.offsetWidth,f=s-c;if(c!==0)switch(t){case"screen":{const d=Math.round(s/c);r(d),i(El(d,c));break}case"slide":{const d=((l=u.querySelector("#nuka-wrapper"))==null?void 0:l.children)||[],m=Array.from(d).map(x=>x.offsetWidth),y=Kh([0,...m.slice(0,-1)]),g=y.findIndex(x=>x>=f)+1;r(g),i(y);break}default:if(typeof t=="number"&&t>0){const d=Math.ceil(f/t)+1;r(d),i(El(d,t))}}},[e,t,a]),{totalPages:n,scrollOffset:o}}function Zh({element:e,enabled:t}){const[n,r]=T.useState(!1),o=e==null?void 0:e.current;return T.useEffect(()=>{if(o&&o.addEventListener&&t){const i=()=>r(!0),a=()=>r(!1);return o.addEventListener("mouseover",i),o.addEventListener("mouseout",a),()=>{o.removeEventListener("mouseover",i),o.removeEventListener("mouseout",a)}}},[o,t]),n}function qh({element:e,enabled:t,goForward:n,goBack:r}){const o=e==null?void 0:e.current;T.useEffect(()=>{if(o&&t){const i=a=>{a.key==="ArrowLeft"?r():a.key==="ArrowRight"&&n()};return o.addEventListener("keydown",i),()=>o.removeEventListener("keydown",i)}},[t,r,n,o])}var Wd="(prefers-reduced-motion: no-preference)",ev=()=>Vd()?!window.matchMedia(Wd).matches:!0;function tv({enabled:e}){const[t,n]=T.useState(ev);return T.useEffect(()=>{if(!(Vd()&&e))return;const r=window.matchMedia(Wd),o=i=>{n(!i.matches)};return r.addEventListener("change",o),()=>{r.removeEventListener("change",o)}},[e]),t}function nv(){const{currentPage:e,totalPages:t,wrapMode:n,goBack:r,goForward:o}=Bd(),i=n!=="nowrap",a=i||e>0,l=i||e<t-1,u=ni("nuka-nav-button","nuka-nav-button-prev",a&&"nuka-nav-button-enabled"),s=ni("nuka-nav-button","nuka-nav-button-next",l&&"nuka-nav-button-enabled");return C.jsxs(C.Fragment,{children:[C.jsx("div",{className:u,onClick:r,children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentcolor",children:C.jsx("path",{fillRule:"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})})}),C.jsx("div",{className:s,onClick:o,children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentcolor",children:C.jsx("path",{fillRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})}var rv=()=>{const{totalPages:e,currentPage:t,goToPage:n}=Bd(),r=o=>ni("nuka-page-indicator",t===o?"nuka-page-indicator-active":"");return C.jsx("div",{className:"nuka-page-container","data-testid":"pageIndicatorContainer",children:[...Array(e)].map((o,i)=>C.jsx("button",{onClick:()=>n(i),className:r(i),children:C.jsx("span",{className:"nuka-hidden",children:i+1})},i))})};function ov(e,{insertAt:t}={}){if(typeof document>"u")return;const n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}ov(`.nuka-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.nuka-container {
  position: relative;
}
.nuka-slide-container {
  position: relative;
}
.nuka-overflow {
  overflow: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.nuka-overflow::-webkit-scrollbar {
  display: none;
}
.nuka-wrapper {
  display: flex;
}
.nuka-nav-button {
  position: absolute;
  top: calc(50% - 2rem);
  margin: 1rem;
  display: none;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  background-color: rgba(146, 148, 151, 0.5);
  color: white;
  border-radius: 9999px;
  font-size: 1rem;
  user-select: none;
}
.nuka-nav-button.nuka-nav-button-prev {
  left: 0;
  margin-right: 1rem;
}
.nuka-nav-button.nuka-nav-button-next {
  right: 0;
  margin-left: 1rem;
}
.nuka-nav-button:hover {
  background-color: rgba(146, 148, 151, 0.65);
}
.nuka-nav-button-enabled {
  display: block;
}
.nuka-container-auto-hide .nuka-nav-button {
  display: none;
}
.nuka-container-auto-hide:hover .nuka-nav-button-enabled {
  display: block;
}
.nuka-page-container {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}
.nuka-page-indicator {
  width: 0.75rem;
  height: 0.75rem;
  cursor: pointer;
  border-radius: 9999px;
  border-style: none;
  background-color: rgba(146, 148, 151, 0.65);
}
.nuka-page-indicator.nuka-page-indicator-active,
.nuka-page-indicator.nuka-page-indicator-active:hover {
  background-color: rgb(229 231 235 / 1);
}
.nuka-page-indicator:hover {
  background-color: rgb(229 231 235 / 1);
}
`);var iv={arrows:C.jsx(nv,{}),autoplay:!1,autoplayInterval:3e3,dots:C.jsx(rv,{}),id:"nuka-carousel",keyboard:!0,scrollDistance:"screen",showArrows:!1,showDots:!1,swiping:!0,wrapMode:"nowrap"},bd=T.forwardRef((e,t)=>{const n=_l(_l({},iv),e),{afterSlide:r,arrows:o,autoplay:i,autoplayInterval:a,beforeSlide:l,children:u,className:s,dots:c,id:f,keyboard:d,scrollDistance:m,showArrows:y,showDots:g,swiping:x,title:h,wrapMode:p}=n,v=T.useRef(null),w=T.useRef(null),{totalPages:S,scrollOffset:E}=Jh({element:w,scrollDistance:m}),{currentPage:k,goBack:N,goForward:$,goToPage:L}=Qh({totalPages:S,wrapMode:p}),M=Yh(()=>{if(!w.current)return;const je=w.current.scrollLeft,z=E.indexOf(Xh(E,je));L(z)},100);qh({element:v,enabled:d,goForward:$,goBack:N}),T.useImperativeHandle(t,()=>({goForward:$,goBack:N,goToPage:L}),[$,N,L]);const U=Zh({element:w,enabled:i}),B=tv({enabled:i});Hh($,a,i&&!(U||B)),T.useEffect(()=>{w.current&&(l&&l(),w.current.scrollLeft=E[k],r&&setTimeout(()=>r(),0))},[k,E,l,r]);const X=ni("nuka-container",y==="hover"&&"nuka-container-auto-hide",s),V=Wh(_l({},n),{totalPages:S,currentPage:k,scrollOffset:E,goBack:N,goForward:$,goToPage:L});return C.jsxs(bh,{value:V,children:[C.jsxs("div",{className:X,"aria-labelledby":"nuka-carousel-heading",tabIndex:d?0:void 0,ref:v,id:f,children:[h&&C.jsx("h3",{id:"nuka-carousel-heading",className:"nuka-hidden",children:h}),C.jsxs("div",{className:"nuka-slide-container",children:[C.jsx("div",{className:"nuka-overflow",ref:w,onTouchMove:M,id:"nuka-overflow","data-testid":"nuka-overflow",style:{touchAction:x?"pan-x":"none"},children:C.jsx("div",{className:"nuka-wrapper",id:"nuka-wrapper","data-testid":"nuka-wrapper",children:u})}),y&&o]})]}),g&&c]})});bd.displayName="Carousel";const lv="/my_portfolio/assets/html-BpXxn5_d.png",av="/my_portfolio/assets/css-Cker2PqA.png",sv="/my_portfolio/assets/sass-D1YYCOvH.png",uv="/my_portfolio/assets/javascript-COyg3Goh.png",cv="/my_portfolio/assets/react-Kt73aFWg.png",fv="/my_portfolio/assets/mysql-LFIKHzhJ.png",dv="/my_portfolio/assets/node-B3aKVRG5.png",pv="/my_portfolio/assets/git-CF_zUB_M.png",mv="/my_portfolio/assets/github-D4m7Wqv1.png",hv="/my_portfolio/assets/visual-BeGYZeeR.png";function vv(){return C.jsxs("div",{className:"technologies",id:"tech",children:[C.jsx("h3",{className:"technologies__title",children:"Tecnologías"}),C.jsxs(bd,{scrollDistance:"slide",autoplay:!0,autoplayInterval:3e3,wrapMode:"wrap",children:[C.jsx("img",{src:lv,className:"technologies__icon"}),C.jsx("img",{src:av,className:"technologies__icon"}),C.jsx("img",{src:sv,className:"technologies__icon"}),C.jsx("img",{src:uv,className:"technologies__icon"}),C.jsx("img",{src:cv,className:"technologies__icon"}),C.jsx("img",{src:fv,className:"technologies__icon"}),"+",C.jsx("img",{src:dv,className:"technologies__icon"}),C.jsx("img",{src:pv,className:"technologies__icon"}),C.jsx("img",{src:mv,className:"technologies__icon"}),C.jsx("img",{src:hv,className:"technologies__icon"})]})]})}function yv(){const e=()=>{navigator.clipboard.writeText("valenovalles@gmail.com").then(()=>{alert("Email copiado al portapapeles!")}).catch(n=>{console.error("Error al copiar el email: ",n)})};return C.jsxs("div",{className:"contact",id:"contact",children:[C.jsx("h4",{children:"¿Hablamos?"}),C.jsx("p",{className:"contact__text",children:"Si has llegado hasta aquí y quieres contactar conmigo, puedes escribirme un correo electrónico. ¡Estaré encantada de responderte!"}),C.jsxs("div",{className:"contact__buttons",children:[C.jsx("a",{href:"mailto:valenovalles@gmail.com",target:"_blank",className:"contact__btn",children:"Escríbeme"}),C.jsx("button",{onClick:e,className:"contact__copyBtn",children:"Copiar mi email"}),C.jsx("a",{href:"https://www.linkedin.com/in/valentinaovallesr/",target:"_blank",className:"contact__btn",children:"Mi perfil en LinkedIn"})]})]})}const gv=[{image:"./images/skin.JPG",title:"Skin & Co",extract:"Test de 4 preguntas para conocer el tipo de piel. Tecnologías: HTML, CSS, JavaScript, React",link:"https://valenovalles.github.io/app_skin_type/",id:"1"},{image:"./images/rick.JPG",title:"Rick and Morty",extract:"Buscador de personajes con filtros y página detalle. Tecnologías: HTML, CSS, JavaScript, React",link:"https://valenovalles.github.io/modulo-3-evaluacion-final-valenovalles/",id:"2"},{image:"./images/cocteles.JPG",title:"My Fav Coctel",extract:"Buscador de cócteles. Tecnologías: HTML, CSS, JavaScript",link:"https://valenovalles.github.io/modulo-2-evaluacion-final-valenovalles/",id:"3"},{image:"./images/weather.JPG",title:"Check the Weather",extract:"App que se conecta a una API para consultar la temperatura de tu ciudad.",link:"https://valenovalles.github.io/weather_project/",id:"4"}],wv=[{image:"./images/light-bulb.png",text:"Creatividad y productividad"},{image:"./images/puzzle-game.png",text:"Resolución de problemas"},{image:"./images/terminal.png",text:"Rápido aprendizaje"}];function xv(e){return C.jsx("div",{className:"menu__div",children:C.jsxs("ul",{className:"menu__div--listMobile",children:[C.jsx("a",{href:"#projects",children:C.jsx("li",{children:"Proyectos"})}),C.jsx("a",{href:"#tech",children:C.jsx("li",{children:"Tecnologías"})}),C.jsx("a",{href:"#contact",children:C.jsx("li",{children:"Contáctame"})})]})})}function Sv({data:e}){return C.jsxs("div",{className:"projects",id:"projects",children:[C.jsx("h3",{className:"projects__title",children:"Mis proyectos"}),C.jsx("div",{className:"projects__list",children:e.map((t,n)=>C.jsx("div",{children:C.jsxs("article",{className:"projects__card",children:[C.jsx("img",{src:t.image,alt:"",className:"projects__image"}),C.jsx("h4",{className:"projectss__title-2",children:t.title}),C.jsx("p",{className:"projects__text",children:t.extract}),C.jsx("a",{href:t.link,className:"projects__link",children:"Ver proyecto"})]})},n))})]})}function kv(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function _v(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ev=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(_v(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=kv(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ce="-ms-",ri="-moz-",Q="-webkit-",Hd="comm",Cs="rule",Ns="decl",Cv="@import",Qd="@keyframes",Nv="@layer",Pv=Math.abs,_i=String.fromCharCode,jv=Object.assign;function Tv(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function Yd(e){return e.trim()}function Ov(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function _a(e,t){return e.indexOf(t)}function ge(e,t){return e.charCodeAt(t)|0}function Mr(e,t,n){return e.slice(t,n)}function dt(e){return e.length}function Ps(e){return e.length}function co(e,t){return t.push(e),e}function Rv(e,t){return e.map(t).join("")}var Ei=1,Dn=1,Kd=0,De=0,ue=0,bn="";function Ci(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ei,column:Dn,length:a,return:""}}function nr(e,t){return jv(Ci("",null,null,"",null,null,0),e,{length:-e.length},t)}function Lv(){return ue}function zv(){return ue=De>0?ge(bn,--De):0,Dn--,ue===10&&(Dn=1,Ei--),ue}function We(){return ue=De<Kd?ge(bn,De++):0,Dn++,ue===10&&(Dn=1,Ei++),ue}function yt(){return ge(bn,De)}function No(){return De}function Wr(e,t){return Mr(bn,e,t)}function Ir(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xd(e){return Ei=Dn=1,Kd=dt(bn=e),De=0,[]}function Gd(e){return bn="",e}function Po(e){return Yd(Wr(De-1,Ea(e===91?e+2:e===40?e+1:e)))}function Mv(e){for(;(ue=yt())&&ue<33;)We();return Ir(e)>2||Ir(ue)>3?"":" "}function Iv(e,t){for(;--t&&We()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return Wr(e,No()+(t<6&&yt()==32&&We()==32))}function Ea(e){for(;We();)switch(ue){case e:return De;case 34:case 39:e!==34&&e!==39&&Ea(ue);break;case 40:e===41&&Ea(e);break;case 92:We();break}return De}function $v(e,t){for(;We()&&e+ue!==57;)if(e+ue===84&&yt()===47)break;return"/*"+Wr(t,De-1)+"*"+_i(e===47?e:We())}function Av(e){for(;!Ir(yt());)We();return Wr(e,De)}function Fv(e){return Gd(jo("",null,null,null,[""],e=Xd(e),0,[0],e))}function jo(e,t,n,r,o,i,a,l,u){for(var s=0,c=0,f=a,d=0,m=0,y=0,g=1,x=1,h=1,p=0,v="",w=o,S=i,E=r,k=v;x;)switch(y=p,p=We()){case 40:if(y!=108&&ge(k,f-1)==58){_a(k+=Y(Po(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=Po(p);break;case 9:case 10:case 13:case 32:k+=Mv(y);break;case 92:k+=Iv(No()-1,7);continue;case 47:switch(yt()){case 42:case 47:co(Dv($v(We(),No()),t,n),u);break;default:k+="/"}break;case 123*g:l[s++]=dt(k)*h;case 125*g:case 59:case 0:switch(p){case 0:case 125:x=0;case 59+c:h==-1&&(k=Y(k,/\f/g,"")),m>0&&dt(k)-f&&co(m>32?ic(k+";",r,n,f-1):ic(Y(k," ","")+";",r,n,f-2),u);break;case 59:k+=";";default:if(co(E=oc(k,t,n,s,c,o,l,v,w=[],S=[],f),i),p===123)if(c===0)jo(k,t,E,E,w,i,f,l,S);else switch(d===99&&ge(k,3)===110?100:d){case 100:case 108:case 109:case 115:jo(e,E,E,r&&co(oc(e,E,E,0,0,o,l,v,o,w=[],f),S),o,S,f,l,r?w:S);break;default:jo(k,E,E,E,[""],S,0,l,S)}}s=c=m=0,g=h=1,v=k="",f=a;break;case 58:f=1+dt(k),m=y;default:if(g<1){if(p==123)--g;else if(p==125&&g++==0&&zv()==125)continue}switch(k+=_i(p),p*g){case 38:h=c>0?1:(k+="\f",-1);break;case 44:l[s++]=(dt(k)-1)*h,h=1;break;case 64:yt()===45&&(k+=Po(We())),d=yt(),c=f=dt(v=k+=Av(No())),p++;break;case 45:y===45&&dt(k)==2&&(g=0)}}return i}function oc(e,t,n,r,o,i,a,l,u,s,c){for(var f=o-1,d=o===0?i:[""],m=Ps(d),y=0,g=0,x=0;y<r;++y)for(var h=0,p=Mr(e,f+1,f=Pv(g=a[y])),v=e;h<m;++h)(v=Yd(g>0?d[h]+" "+p:Y(p,/&\f/g,d[h])))&&(u[x++]=v);return Ci(e,t,n,o===0?Cs:l,u,s,c)}function Dv(e,t,n){return Ci(e,t,n,Hd,_i(Lv()),Mr(e,2,-2),0)}function ic(e,t,n,r){return Ci(e,t,n,Ns,Mr(e,0,r),Mr(e,r+1,-1),r)}function Rn(e,t){for(var n="",r=Ps(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Uv(e,t,n,r){switch(e.type){case Nv:if(e.children.length)break;case Cv:case Ns:return e.return=e.return||e.value;case Hd:return"";case Qd:return e.return=e.value+"{"+Rn(e.children,r)+"}";case Cs:e.value=e.props.join(",")}return dt(n=Rn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Bv(e){var t=Ps(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function Vv(e){return function(t){t.root||(t=t.return)&&e(t)}}function Wv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var bv=function(t,n,r){for(var o=0,i=0;o=i,i=yt(),o===38&&i===12&&(n[r]=1),!Ir(i);)We();return Wr(t,De)},Hv=function(t,n){var r=-1,o=44;do switch(Ir(o)){case 0:o===38&&yt()===12&&(n[r]=1),t[r]+=bv(De-1,n,r);break;case 2:t[r]+=Po(o);break;case 4:if(o===44){t[++r]=yt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=_i(o)}while(o=We());return t},Qv=function(t,n){return Gd(Hv(Xd(t),n))},lc=new WeakMap,Yv=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!lc.get(r))&&!o){lc.set(t,!0);for(var i=[],a=Qv(n,i),l=r.props,u=0,s=0;u<a.length;u++)for(var c=0;c<l.length;c++,s++)t.props[s]=i[u]?a[u].replace(/&\f/g,l[c]):l[c]+" "+a[u]}}},Kv=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Jd(e,t){switch(Tv(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+ri+e+Ce+e+e;case 6828:case 4268:return Q+e+Ce+e+e;case 6165:return Q+e+Ce+"flex-"+e+e;case 5187:return Q+e+Y(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+Ce+"flex-$1$2")+e;case 5443:return Q+e+Ce+"flex-item-"+Y(e,/flex-|-self/,"")+e;case 4675:return Q+e+Ce+"flex-line-pack"+Y(e,/align-content|flex-|-self/,"")+e;case 5548:return Q+e+Ce+Y(e,"shrink","negative")+e;case 5292:return Q+e+Ce+Y(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+Y(e,"-grow","")+Q+e+Ce+Y(e,"grow","positive")+e;case 4554:return Q+Y(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+ri+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~_a(e,"stretch")?Jd(Y(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ge(e,t+1)!==115)break;case 6444:switch(ge(e,dt(e)-3-(~_a(e,"!important")&&10))){case 107:return Y(e,":",":"+Q)+e;case 101:return Y(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Q+(ge(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+Ce+"$2box$3")+e}break;case 5936:switch(ge(e,t+11)){case 114:return Q+e+Ce+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+Ce+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+Ce+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Q+e+Ce+e+e}return e}var Xv=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Ns:t.return=Jd(t.value,t.length);break;case Qd:return Rn([nr(t,{value:Y(t.value,"@","@"+Q)})],o);case Cs:if(t.length)return Rv(t.props,function(i){switch(Ov(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Rn([nr(t,{props:[Y(i,/:(read-\w+)/,":"+ri+"$1")]})],o);case"::placeholder":return Rn([nr(t,{props:[Y(i,/:(plac\w+)/,":"+Q+"input-$1")]}),nr(t,{props:[Y(i,/:(plac\w+)/,":"+ri+"$1")]}),nr(t,{props:[Y(i,/:(plac\w+)/,Ce+"input-$1")]})],o)}return""})}},Gv=[Xv],Jv=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var x=g.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var o=t.stylisPlugins||Gv,i={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var x=g.getAttribute("data-emotion").split(" "),h=1;h<x.length;h++)i[x[h]]=!0;l.push(g)});var u,s=[Yv,Kv];{var c,f=[Uv,Vv(function(g){c.insert(g)})],d=Bv(s.concat(o,f)),m=function(x){return Rn(Fv(x),d)};u=function(x,h,p,v){c=p,m(x?x+"{"+h.styles+"}":h.styles),v&&(y.inserted[h.name]=!0)}}var y={key:n,sheet:new Ev({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:u};return y.sheet.hydrate(l),y},Zd={exports:{}},J={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve=typeof Symbol=="function"&&Symbol.for,js=ve?Symbol.for("react.element"):60103,Ts=ve?Symbol.for("react.portal"):60106,Ni=ve?Symbol.for("react.fragment"):60107,Pi=ve?Symbol.for("react.strict_mode"):60108,ji=ve?Symbol.for("react.profiler"):60114,Ti=ve?Symbol.for("react.provider"):60109,Oi=ve?Symbol.for("react.context"):60110,Os=ve?Symbol.for("react.async_mode"):60111,Ri=ve?Symbol.for("react.concurrent_mode"):60111,Li=ve?Symbol.for("react.forward_ref"):60112,zi=ve?Symbol.for("react.suspense"):60113,Zv=ve?Symbol.for("react.suspense_list"):60120,Mi=ve?Symbol.for("react.memo"):60115,Ii=ve?Symbol.for("react.lazy"):60116,qv=ve?Symbol.for("react.block"):60121,e1=ve?Symbol.for("react.fundamental"):60117,t1=ve?Symbol.for("react.responder"):60118,n1=ve?Symbol.for("react.scope"):60119;function Ye(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case js:switch(e=e.type,e){case Os:case Ri:case Ni:case ji:case Pi:case zi:return e;default:switch(e=e&&e.$$typeof,e){case Oi:case Li:case Ii:case Mi:case Ti:return e;default:return t}}case Ts:return t}}}function qd(e){return Ye(e)===Ri}J.AsyncMode=Os;J.ConcurrentMode=Ri;J.ContextConsumer=Oi;J.ContextProvider=Ti;J.Element=js;J.ForwardRef=Li;J.Fragment=Ni;J.Lazy=Ii;J.Memo=Mi;J.Portal=Ts;J.Profiler=ji;J.StrictMode=Pi;J.Suspense=zi;J.isAsyncMode=function(e){return qd(e)||Ye(e)===Os};J.isConcurrentMode=qd;J.isContextConsumer=function(e){return Ye(e)===Oi};J.isContextProvider=function(e){return Ye(e)===Ti};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===js};J.isForwardRef=function(e){return Ye(e)===Li};J.isFragment=function(e){return Ye(e)===Ni};J.isLazy=function(e){return Ye(e)===Ii};J.isMemo=function(e){return Ye(e)===Mi};J.isPortal=function(e){return Ye(e)===Ts};J.isProfiler=function(e){return Ye(e)===ji};J.isStrictMode=function(e){return Ye(e)===Pi};J.isSuspense=function(e){return Ye(e)===zi};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ni||e===Ri||e===ji||e===Pi||e===zi||e===Zv||typeof e=="object"&&e!==null&&(e.$$typeof===Ii||e.$$typeof===Mi||e.$$typeof===Ti||e.$$typeof===Oi||e.$$typeof===Li||e.$$typeof===e1||e.$$typeof===t1||e.$$typeof===n1||e.$$typeof===qv)};J.typeOf=Ye;Zd.exports=J;var r1=Zd.exports,ep=r1,o1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tp={};tp[ep.ForwardRef]=o1;tp[ep.Memo]=i1;var l1=!0;function np(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Rs=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||l1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},rp=function(t,n,r){Rs(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function a1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var s1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},u1=/[A-Z]|^ms/g,c1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,op=function(t){return t.charCodeAt(1)===45},ac=function(t){return t!=null&&typeof t!="boolean"},Cl=Wv(function(e){return op(e)?e:e.replace(u1,"-$&").toLowerCase()}),sc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(c1,function(r,o,i){return pt={name:o,styles:i,next:pt},o})}return s1[t]!==1&&!op(t)&&typeof n=="number"&&n!==0?n+"px":n};function $r(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return pt={name:n.name,styles:n.styles,next:pt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)pt={name:r.name,styles:r.styles,next:pt},r=r.next;var o=n.styles+";";return o}return f1(e,t,n)}case"function":{if(e!==void 0){var i=pt,a=n(e);return pt=i,$r(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function f1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=$r(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":ac(a)&&(r+=Cl(i)+":"+sc(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)ac(a[l])&&(r+=Cl(i)+":"+sc(i,a[l])+";");else{var u=$r(e,t,a);switch(i){case"animation":case"animationName":{r+=Cl(i)+":"+u+";";break}default:r+=i+"{"+u+"}"}}}return r}var uc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,pt,Ls=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";pt=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=$r(r,n,a)):i+=a[0];for(var l=1;l<t.length;l++)i+=$r(r,n,t[l]),o&&(i+=a[l]);uc.lastIndex=0;for(var u="",s;(s=uc.exec(i))!==null;)u+="-"+s[1];var c=a1(i)+u;return{name:c,styles:i,next:pt}},d1=function(t){return t()},p1=Pl.useInsertionEffect?Pl.useInsertionEffect:!1,ip=p1||d1,zs={}.hasOwnProperty,lp=T.createContext(typeof HTMLElement<"u"?Jv({key:"css"}):null);lp.Provider;var ap=function(t){return T.forwardRef(function(n,r){var o=T.useContext(lp);return t(n,o,r)})},sp=T.createContext({}),Ca="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",m1=function(t,n){var r={};for(var o in n)zs.call(n,o)&&(r[o]=n[o]);return r[Ca]=t,r},h1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Rs(n,r,o),ip(function(){return rp(n,r,o)}),null},v1=ap(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Ca],i=[r],a="";typeof e.className=="string"?a=np(t.registered,i,e.className):e.className!=null&&(a=e.className+" ");var l=Ls(i,void 0,T.useContext(sp));a+=t.key+"-"+l.name;var u={};for(var s in e)zs.call(e,s)&&s!=="css"&&s!==Ca&&(u[s]=e[s]);return u.ref=n,u.className=a,T.createElement(T.Fragment,null,T.createElement(h1,{cache:t,serialized:l,isStringTag:typeof o=="string"}),T.createElement(o,u))}),y1=v1,g1=C.Fragment;function pe(e,t,n){return zs.call(t,"css")?C.jsx(y1,m1(e,t),n):C.jsx(e,t,n)}function up(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ls(t)}var O=function(){var t=up.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},w1=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))a=e(i);else{a="";for(var l in i)i[l]&&l&&(a&&(a+=" "),a+=l)}break}default:a=i}a&&(o&&(o+=" "),o+=a)}}return o};function x1(e,t,n){var r=[],o=np(e,r,n);return r.length<2?n:o+t(r)}var S1=function(t){var n=t.cache,r=t.serializedArr;return ip(function(){for(var o=0;o<r.length;o++)rp(n,r[o],!1)}),null},Nl=ap(function(e,t){var n=!1,r=[],o=function(){for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];var d=Ls(c,t.registered);return r.push(d),Rs(t,d,!1),t.key+"-"+d.name},i=function(){for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];return x1(t.registered,o,w1(c))},a={css:o,cx:i,theme:T.useContext(sp)},l=e.children(a);return n=!0,T.createElement(T.Fragment,null,T.createElement(S1,{cache:t,serializedArr:r}),l)}),k1=Object.defineProperty,_1=(e,t,n)=>t in e?k1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fo=(e,t,n)=>(_1(e,typeof t!="symbol"?t+"":t,n),n),Na=new Map,po=new WeakMap,cc=0,E1=void 0;function C1(e){return e?(po.has(e)||(cc+=1,po.set(e,cc.toString())),po.get(e)):"0"}function N1(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?C1(e.root):e[t]}`).toString()}function P1(e){const t=N1(e);let n=Na.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(a=>{a.forEach(l=>{var u;const s=l.isIntersecting&&o.some(c=>l.intersectionRatio>=c);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=s),(u=r.get(l.target))==null||u.forEach(c=>{c(s,l)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Na.set(t,n)}return n}function cp(e,t,n={},r=E1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const u=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:o,observer:i,elements:a}=P1(n),l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(t),i.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(a.delete(e),i.unobserve(e)),a.size===0&&(i.disconnect(),Na.delete(o))}}function j1(e){return typeof e.children!="function"}var fc=class extends T.Component{constructor(e){super(e),fo(this,"node",null),fo(this,"_unobserveCb",null),fo(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),fo(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),j1(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=cp(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:m,entry:y}=this.state;return e({inView:m,entry:y,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:a,skip:l,trackVisibility:u,delay:s,initialInView:c,fallbackInView:f,...d}=this.props;return T.createElement(t||"div",{ref:this.handleNode,...d},e)}};function fp({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:a,initialInView:l,fallbackInView:u,onChange:s}={}){var c;const[f,d]=T.useState(null),m=T.useRef(),[y,g]=T.useState({inView:!!l,entry:void 0});m.current=s,T.useEffect(()=>{if(a||!f)return;let v;return v=cp(f,(w,S)=>{g({inView:w,entry:S}),m.current&&m.current(w,S),S.isIntersecting&&i&&v&&(v(),v=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},u),()=>{v&&v()}},[Array.isArray(e)?e.toString():e,f,o,r,i,a,n,u,t]);const x=(c=y.entry)==null?void 0:c.target,h=T.useRef();!f&&x&&!i&&!a&&h.current!==x&&(h.current=x,g({inView:!!l,entry:void 0}));const p=[d,y.inView,y.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}var dp={exports:{}},Z={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ms=Symbol.for("react.element"),Is=Symbol.for("react.portal"),$i=Symbol.for("react.fragment"),Ai=Symbol.for("react.strict_mode"),Fi=Symbol.for("react.profiler"),Di=Symbol.for("react.provider"),Ui=Symbol.for("react.context"),T1=Symbol.for("react.server_context"),Bi=Symbol.for("react.forward_ref"),Vi=Symbol.for("react.suspense"),Wi=Symbol.for("react.suspense_list"),bi=Symbol.for("react.memo"),Hi=Symbol.for("react.lazy"),O1=Symbol.for("react.offscreen"),pp;pp=Symbol.for("react.module.reference");function tt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ms:switch(e=e.type,e){case $i:case Fi:case Ai:case Vi:case Wi:return e;default:switch(e=e&&e.$$typeof,e){case T1:case Ui:case Bi:case Hi:case bi:case Di:return e;default:return t}}case Is:return t}}}Z.ContextConsumer=Ui;Z.ContextProvider=Di;Z.Element=Ms;Z.ForwardRef=Bi;Z.Fragment=$i;Z.Lazy=Hi;Z.Memo=bi;Z.Portal=Is;Z.Profiler=Fi;Z.StrictMode=Ai;Z.Suspense=Vi;Z.SuspenseList=Wi;Z.isAsyncMode=function(){return!1};Z.isConcurrentMode=function(){return!1};Z.isContextConsumer=function(e){return tt(e)===Ui};Z.isContextProvider=function(e){return tt(e)===Di};Z.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ms};Z.isForwardRef=function(e){return tt(e)===Bi};Z.isFragment=function(e){return tt(e)===$i};Z.isLazy=function(e){return tt(e)===Hi};Z.isMemo=function(e){return tt(e)===bi};Z.isPortal=function(e){return tt(e)===Is};Z.isProfiler=function(e){return tt(e)===Fi};Z.isStrictMode=function(e){return tt(e)===Ai};Z.isSuspense=function(e){return tt(e)===Vi};Z.isSuspenseList=function(e){return tt(e)===Wi};Z.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$i||e===Fi||e===Ai||e===Vi||e===Wi||e===O1||typeof e=="object"&&e!==null&&(e.$$typeof===Hi||e.$$typeof===bi||e.$$typeof===Di||e.$$typeof===Ui||e.$$typeof===Bi||e.$$typeof===pp||e.getModuleId!==void 0)};Z.typeOf=tt;dp.exports=Z;var R1=dp.exports;O`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;O`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;O`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;O`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;O`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;O`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;O`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;O`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;O`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;O`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;O`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;O`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;O`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const L1=O`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,z1=O`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,M1=O`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,I1=O`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$1=O`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$s=O`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,A1=O`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,F1=O`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,D1=O`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,U1=O`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,B1=O`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,V1=O`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,W1=O`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function b1({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=$s,iterationCount:o=1}){return up`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function H1(e){return e==null}function Q1(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function mp(e,t){return n=>n?e():t()}function Ar(e){return mp(e,()=>null)}function Pa(e){return Ar(()=>({opacity:0}))(e)}const hp=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:a=$s,triggerOnce:l=!1,className:u,style:s,childClassName:c,childStyle:f,children:d,onVisibilityChange:m}=e,y=T.useMemo(()=>b1({keyframes:a,duration:o}),[o,a]);return H1(d)?null:Q1(d)?pe(K1,{...e,animationStyles:y,children:String(d)}):R1.isFragment(d)?pe(vp,{...e,animationStyles:y}):pe(g1,{children:T.Children.map(d,(g,x)=>{if(!T.isValidElement(g))return null;const h=r+(t?x*o*n:0);switch(g.type){case"ol":case"ul":return pe(Nl,{children:({cx:p})=>pe(g.type,{...g.props,className:p(u,g.props.className),style:Object.assign({},s,g.props.style),children:pe(hp,{...e,children:g.props.children})})});case"li":return pe(fc,{threshold:i,triggerOnce:l,onChange:m,children:({inView:p,ref:v})=>pe(Nl,{children:({cx:w})=>pe(g.type,{...g.props,ref:v,className:w(c,g.props.className),css:Ar(()=>y)(p),style:Object.assign({},f,g.props.style,Pa(!p),{animationDelay:h+"ms"})})})});default:return pe(fc,{threshold:i,triggerOnce:l,onChange:m,children:({inView:p,ref:v})=>pe("div",{ref:v,className:u,css:Ar(()=>y)(p),style:Object.assign({},s,Pa(!p),{animationDelay:h+"ms"}),children:pe(Nl,{children:({cx:w})=>pe(g.type,{...g.props,className:w(c,g.props.className),style:Object.assign({},f,g.props.style)})})})})}})})},Y1={display:"inline-block",whiteSpace:"pre"},K1=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:a=0,triggerOnce:l=!1,className:u,style:s,children:c,onVisibilityChange:f}=e,{ref:d,inView:m}=fp({triggerOnce:l,threshold:a,onChange:f});return mp(()=>pe("div",{ref:d,className:u,style:Object.assign({},s,Y1),children:c.split("").map((y,g)=>pe("span",{css:Ar(()=>t)(m),style:{animationDelay:o+g*i*r+"ms"},children:y},g))}),()=>pe(vp,{...e,children:c}))(n)},vp=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:a,onVisibilityChange:l}=e,{ref:u,inView:s}=fp({triggerOnce:r,threshold:n,onChange:l});return pe("div",{ref:u,className:o,css:Ar(()=>t)(s),style:Object.assign({},i,Pa(!s)),children:a})};O`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;O`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;O`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;O`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;O`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;O`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const X1=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,G1=O`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,J1=O`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Z1=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,q1=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,ey=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,ty=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ny=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,ry=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,oy=O`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,iy=O`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,ly=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,ay=O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function sy(e,t,n){switch(n){case"bottom-left":return t?G1:z1;case"bottom-right":return t?J1:M1;case"down":return e?t?q1:$1:t?Z1:I1;case"left":return e?t?ty:A1:t?ey:$s;case"right":return e?t?ry:D1:t?ny:F1;case"top-left":return t?oy:U1;case"top-right":return t?iy:B1;case"up":return e?t?ay:W1:t?ly:V1;default:return t?X1:L1}}const uy=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=T.useMemo(()=>sy(t,r,n),[t,n,r]);return pe(hp,{keyframes:i,...o})};O`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;O`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;O`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;O`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;O`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;O`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;O`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;O`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;O`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;O`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;O`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;O`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;O`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;O`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;O`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;O`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;O`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;O`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;O`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;O`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;O`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;O`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;O`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;O`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;O`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;O`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;O`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;O`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;O`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;O`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;O`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;O`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;O`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;O`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function cy({me:e}){return C.jsxs("div",{className:"skills",children:[C.jsxs(uy,{cascade:!0,className:"skills__title",children:[C.jsx("p",{children:"Desarrollo web con visión de marketing:"}),C.jsx("p",{children:"el perfil completo que tu empresa necesita."})]}),C.jsx("div",{className:"skills__list",children:e.map((t,n)=>C.jsx("div",{className:"skills__div",children:C.jsxs("article",{className:"skills__points",children:[C.jsx("img",{src:t.image,alt:"",className:"skills__icon"}),C.jsx("h4",{children:t.text})]})},n))})]})}function fy(){return C.jsxs("div",{className:"footer",children:[C.jsx("h5",{children:"Valentina Ovalles Rodríguez"}),C.jsxs("div",{className:"footer__icons",children:[C.jsx("a",{href:"https://www.linkedin.com/in/valentinaovallesr/",target:"_blank",children:C.jsx("i",{class:"fa-brands fa-linkedin"})}),C.jsx("a",{href:"https://github.com/valenovalles",target:"_blank",children:C.jsx("i",{class:"fa-brands fa-github"})}),C.jsx("a",{href:"https://drive.google.com/file/d/17NdS3m2_biS4V9IAOEvTO9wdPLiN2DoY/view?usp=sharing",target:"_blank",children:C.jsx("i",{class:"fa-solid fa-file-arrow-down"})})]})]})}function dy(){const[e,t]=T.useState(!1);function n(){t(r=>!r)}return C.jsxs("div",{children:[C.jsx(jh,{burgerMenu:e,clickMenuBurger:n}),e&&C.jsx(xv,{}),C.jsx(Ah,{}),C.jsx(Sv,{data:gv}),C.jsx(vv,{}),C.jsx(cy,{me:wv}),C.jsx(yv,{}),C.jsx(fy,{})]})}const py=jl.createRoot(document.getElementById("root"));py.render(C.jsx(_h,{children:C.jsx(dy,{})}));
