const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-Be_Yxesi.js","assets/index-8ejJ63RF.js","assets/iconBase-BqVOo7Em.js","assets/arrow-right-4xqDcYjr.js","assets/button-17grN15c.css","assets/AboutUs-8VnVw1bT.js","assets/4-CdeCWZMT.js","assets/Education-DVC_TIRM.js","assets/external-link-C_laZV_z.js","assets/SkillsData-BlB1fpQ4.js","assets/proxy-BXhh0tve.js","assets/index-D-puAU25.js","assets/boxes-D7ONN8dY.js","assets/ProjectsData-BnnY0yq2.js","assets/1 (19)-DCDmLPEi.js","assets/designpage-S3wisPU_.js","assets/Testimonials-7OqdSDex.js","assets/Contact-Ct06aOgH.js","assets/Copyright-BIlImiGI.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();var el=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Wu={exports:{}},fs={},Bu={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function Ky(){if(Cp)return ge;Cp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),_=Symbol.iterator;function y(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,j={};function z(C,R,te){this.props=C,this.context=R,this.refs=j,this.updater=te||N}z.prototype.isReactComponent={},z.prototype.setState=function(C,R){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,R,"setState")},z.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function ke(){}ke.prototype=z.prototype;function ye(C,R,te){this.props=C,this.context=R,this.refs=j,this.updater=te||N}var Ce=ye.prototype=new ke;Ce.constructor=ye,P(Ce,z.prototype),Ce.isPureReactComponent=!0;var H=Array.isArray,me=Object.prototype.hasOwnProperty,L={current:null},Y={key:!0,ref:!0,__self:!0,__source:!0};function K(C,R,te){var re,he={},fe=null,oe=null;if(R!=null)for(re in R.ref!==void 0&&(oe=R.ref),R.key!==void 0&&(fe=""+R.key),R)me.call(R,re)&&!Y.hasOwnProperty(re)&&(he[re]=R[re]);var $=arguments.length-2;if($===1)he.children=te;else if(1<$){for(var ae=Array($),be=0;be<$;be++)ae[be]=arguments[be+2];he.children=ae}if(C&&C.defaultProps)for(re in $=C.defaultProps,$)he[re]===void 0&&(he[re]=$[re]);return{$$typeof:i,type:C,key:fe,ref:oe,props:he,_owner:L.current}}function ne(C,R){return{$$typeof:i,type:C.type,key:R,ref:C.ref,props:C.props,_owner:C._owner}}function pe(C){return typeof C=="object"&&C!==null&&C.$$typeof===i}function V(C){var R={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(te){return R[te]})}var M=/\/+/g;function X(C,R){return typeof C=="object"&&C!==null&&C.key!=null?V(""+C.key):R.toString(36)}function G(C,R,te,re,he){var fe=typeof C;(fe==="undefined"||fe==="boolean")&&(C=null);var oe=!1;if(C===null)oe=!0;else switch(fe){case"string":case"number":oe=!0;break;case"object":switch(C.$$typeof){case i:case e:oe=!0}}if(oe)return oe=C,he=he(oe),C=re===""?"."+X(oe,0):re,H(he)?(te="",C!=null&&(te=C.replace(M,"$&/")+"/"),G(he,R,te,"",function(be){return be})):he!=null&&(pe(he)&&(he=ne(he,te+(!he.key||oe&&oe.key===he.key?"":(""+he.key).replace(M,"$&/")+"/")+C)),R.push(he)),1;if(oe=0,re=re===""?".":re+":",H(C))for(var $=0;$<C.length;$++){fe=C[$];var ae=re+X(fe,$);oe+=G(fe,R,te,ae,he)}else if(ae=y(C),typeof ae=="function")for(C=ae.call(C),$=0;!(fe=C.next()).done;)fe=fe.value,ae=re+X(fe,$++),oe+=G(fe,R,te,ae,he);else if(fe==="object")throw R=String(C),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return oe}function we(C,R,te){if(C==null)return C;var re=[],he=0;return G(C,re,"","",function(fe){return R.call(te,fe,he++)}),re}function Re(C){if(C._status===-1){var R=C._result;R=R(),R.then(function(te){(C._status===0||C._status===-1)&&(C._status=1,C._result=te)},function(te){(C._status===0||C._status===-1)&&(C._status=2,C._result=te)}),C._status===-1&&(C._status=0,C._result=R)}if(C._status===1)return C._result.default;throw C._result}var Ee={current:null},U={transition:null},Z={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:U,ReactCurrentOwner:L};function W(){throw Error("act(...) is not supported in production builds of React.")}return ge.Children={map:we,forEach:function(C,R,te){we(C,function(){R.apply(this,arguments)},te)},count:function(C){var R=0;return we(C,function(){R++}),R},toArray:function(C){return we(C,function(R){return R})||[]},only:function(C){if(!pe(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ge.Component=z,ge.Fragment=n,ge.Profiler=l,ge.PureComponent=ye,ge.StrictMode=s,ge.Suspense=p,ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ge.act=W,ge.cloneElement=function(C,R,te){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var re=P({},C.props),he=C.key,fe=C.ref,oe=C._owner;if(R!=null){if(R.ref!==void 0&&(fe=R.ref,oe=L.current),R.key!==void 0&&(he=""+R.key),C.type&&C.type.defaultProps)var $=C.type.defaultProps;for(ae in R)me.call(R,ae)&&!Y.hasOwnProperty(ae)&&(re[ae]=R[ae]===void 0&&$!==void 0?$[ae]:R[ae])}var ae=arguments.length-2;if(ae===1)re.children=te;else if(1<ae){$=Array(ae);for(var be=0;be<ae;be++)$[be]=arguments[be+2];re.children=$}return{$$typeof:i,type:C.type,key:he,ref:fe,props:re,_owner:oe}},ge.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:u,_context:C},C.Consumer=C},ge.createElement=K,ge.createFactory=function(C){var R=K.bind(null,C);return R.type=C,R},ge.createRef=function(){return{current:null}},ge.forwardRef=function(C){return{$$typeof:f,render:C}},ge.isValidElement=pe,ge.lazy=function(C){return{$$typeof:w,_payload:{_status:-1,_result:C},_init:Re}},ge.memo=function(C,R){return{$$typeof:g,type:C,compare:R===void 0?null:R}},ge.startTransition=function(C){var R=U.transition;U.transition={};try{C()}finally{U.transition=R}},ge.unstable_act=W,ge.useCallback=function(C,R){return Ee.current.useCallback(C,R)},ge.useContext=function(C){return Ee.current.useContext(C)},ge.useDebugValue=function(){},ge.useDeferredValue=function(C){return Ee.current.useDeferredValue(C)},ge.useEffect=function(C,R){return Ee.current.useEffect(C,R)},ge.useId=function(){return Ee.current.useId()},ge.useImperativeHandle=function(C,R,te){return Ee.current.useImperativeHandle(C,R,te)},ge.useInsertionEffect=function(C,R){return Ee.current.useInsertionEffect(C,R)},ge.useLayoutEffect=function(C,R){return Ee.current.useLayoutEffect(C,R)},ge.useMemo=function(C,R){return Ee.current.useMemo(C,R)},ge.useReducer=function(C,R,te){return Ee.current.useReducer(C,R,te)},ge.useRef=function(C){return Ee.current.useRef(C)},ge.useState=function(C){return Ee.current.useState(C)},ge.useSyncExternalStore=function(C,R,te){return Ee.current.useSyncExternalStore(C,R,te)},ge.useTransition=function(){return Ee.current.useTransition()},ge.version="18.3.1",ge}var kp;function bc(){return kp||(kp=1,Bu.exports=Ky()),Bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function Qy(){if(Ip)return fs;Ip=1;var i=bc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var w,_={},y=null,N=null;g!==void 0&&(y=""+g),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(N=p.ref);for(w in p)s.call(p,w)&&!u.hasOwnProperty(w)&&(_[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)_[w]===void 0&&(_[w]=p[w]);return{$$typeof:e,type:f,key:y,ref:N,props:_,_owner:l.current}}return fs.Fragment=n,fs.jsx=d,fs.jsxs=d,fs}var Tp;function Yy(){return Tp||(Tp=1,Wu.exports=Qy()),Wu.exports}var x=Yy(),de=bc();const JI=Pc(de);var tl={},Hu={exports:{}},kt={},Vu={exports:{}},$u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function Xy(){return Np||(Np=1,function(i){function e(U,Z){var W=U.length;U.push(Z);e:for(;0<W;){var C=W-1>>>1,R=U[C];if(0<l(R,Z))U[C]=Z,U[W]=R,W=C;else break e}}function n(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var Z=U[0],W=U.pop();if(W!==Z){U[0]=W;e:for(var C=0,R=U.length,te=R>>>1;C<te;){var re=2*(C+1)-1,he=U[re],fe=re+1,oe=U[fe];if(0>l(he,W))fe<R&&0>l(oe,he)?(U[C]=oe,U[fe]=W,C=fe):(U[C]=he,U[re]=W,C=re);else if(fe<R&&0>l(oe,W))U[C]=oe,U[fe]=W,C=fe;else break e}}return Z}function l(U,Z){var W=U.sortIndex-Z.sortIndex;return W!==0?W:U.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var p=[],g=[],w=1,_=null,y=3,N=!1,P=!1,j=!1,z=typeof setTimeout=="function"?setTimeout:null,ke=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ce(U){for(var Z=n(g);Z!==null;){if(Z.callback===null)s(g);else if(Z.startTime<=U)s(g),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=n(g)}}function H(U){if(j=!1,Ce(U),!P)if(n(p)!==null)P=!0,Re(me);else{var Z=n(g);Z!==null&&Ee(H,Z.startTime-U)}}function me(U,Z){P=!1,j&&(j=!1,ke(K),K=-1),N=!0;var W=y;try{for(Ce(Z),_=n(p);_!==null&&(!(_.expirationTime>Z)||U&&!V());){var C=_.callback;if(typeof C=="function"){_.callback=null,y=_.priorityLevel;var R=C(_.expirationTime<=Z);Z=i.unstable_now(),typeof R=="function"?_.callback=R:_===n(p)&&s(p),Ce(Z)}else s(p);_=n(p)}if(_!==null)var te=!0;else{var re=n(g);re!==null&&Ee(H,re.startTime-Z),te=!1}return te}finally{_=null,y=W,N=!1}}var L=!1,Y=null,K=-1,ne=5,pe=-1;function V(){return!(i.unstable_now()-pe<ne)}function M(){if(Y!==null){var U=i.unstable_now();pe=U;var Z=!0;try{Z=Y(!0,U)}finally{Z?X():(L=!1,Y=null)}}else L=!1}var X;if(typeof ye=="function")X=function(){ye(M)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,we=G.port2;G.port1.onmessage=M,X=function(){we.postMessage(null)}}else X=function(){z(M,0)};function Re(U){Y=U,L||(L=!0,X())}function Ee(U,Z){K=z(function(){U(i.unstable_now())},Z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(U){U.callback=null},i.unstable_continueExecution=function(){P||N||(P=!0,Re(me))},i.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<U?Math.floor(1e3/U):5},i.unstable_getCurrentPriorityLevel=function(){return y},i.unstable_getFirstCallbackNode=function(){return n(p)},i.unstable_next=function(U){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var W=y;y=Z;try{return U()}finally{y=W}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(U,Z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var W=y;y=U;try{return Z()}finally{y=W}},i.unstable_scheduleCallback=function(U,Z,W){var C=i.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?C+W:C):W=C,U){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=W+R,U={id:w++,callback:Z,priorityLevel:U,startTime:W,expirationTime:R,sortIndex:-1},W>C?(U.sortIndex=W,e(g,U),n(p)===null&&U===n(g)&&(j?(ke(K),K=-1):j=!0,Ee(H,W-C))):(U.sortIndex=R,e(p,U),P||N||(P=!0,Re(me))),U},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(U){var Z=y;return function(){var W=y;y=Z;try{return U.apply(this,arguments)}finally{y=W}}}}($u)),$u}var xp;function Jy(){return xp||(xp=1,Vu.exports=Xy()),Vu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function Zy(){if(Rp)return kt;Rp=1;var i=bc(),e=Jy();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},_={};function y(t){return p.call(_,t)?!0:p.call(w,t)?!1:g.test(t)?_[t]=!0:(w[t]=!0,!1)}function N(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P(t,r,o,a){if(r===null||typeof r>"u"||N(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function j(t,r,o,a,c,h,m){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=m}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){z[t]=new j(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];z[r]=new j(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){z[t]=new j(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){z[t]=new j(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){z[t]=new j(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){z[t]=new j(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){z[t]=new j(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){z[t]=new j(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){z[t]=new j(t,5,!1,t.toLowerCase(),null,!1,!1)});var ke=/[\-:]([a-z])/g;function ye(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(ke,ye);z[r]=new j(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(ke,ye);z[r]=new j(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(ke,ye);z[r]=new j(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){z[t]=new j(t,1,!1,t.toLowerCase(),null,!1,!1)}),z.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){z[t]=new j(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ce(t,r,o,a){var c=z.hasOwnProperty(r)?z[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(P(r,o,c,a)&&(o=null),a||c===null?y(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var H=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,me=Symbol.for("react.element"),L=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),pe=Symbol.for("react.provider"),V=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),U=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=U&&t[U]||t["@@iterator"],typeof t=="function"?t:null)}var W=Object.assign,C;function R(t){if(C===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);C=r&&r[1]||""}return`
`+C+t}var te=!1;function re(t,r){if(!t||te)return"";te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(T){var a=T}Reflect.construct(t,[],r)}else{try{r.call()}catch(T){a=T}t.call(r.prototype)}else{try{throw Error()}catch(T){a=T}t()}}catch(T){if(T&&a&&typeof T.stack=="string"){for(var c=T.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,v=h.length-1;1<=m&&0<=v&&c[m]!==h[v];)v--;for(;1<=m&&0<=v;m--,v--)if(c[m]!==h[v]){if(m!==1||v!==1)do if(m--,v--,0>v||c[m]!==h[v]){var E=`
`+c[m].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=m&&0<=v);break}}}finally{te=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?R(t):""}function he(t){switch(t.tag){case 5:return R(t.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function fe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Y:return"Fragment";case L:return"Portal";case ne:return"Profiler";case K:return"StrictMode";case X:return"Suspense";case G:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case pe:return(t._context.displayName||"Context")+".Provider";case M:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case we:return r=t.displayName||null,r!==null?r:fe(t.type)||"Memo";case Re:r=t._payload,t=t._init;try{return fe(t(r))}catch{}}return null}function oe(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(r);case 8:return r===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function $(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ae(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function be(t){var r=ae(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function ct(t){t._valueTracker||(t._valueTracker=be(t))}function At(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=ae(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function Ae(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Te(t,r){var o=r.checked;return W({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function it(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=$(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Wt(t,r){r=r.checked,r!=null&&Ce(t,"checked",r,!1)}function Or(t,r){Wt(t,r);var o=$(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Yl(t,r.type,o):r.hasOwnProperty("defaultValue")&&Yl(t,r.type,$(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function bd(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Yl(t,r,o){(r!=="number"||Ae(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var xi=Array.isArray;function Dr(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+$(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function Xl(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return W({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ad(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(xi(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:$(o)}}function Od(t,r){var o=$(r.value),a=$(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Dd(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Ld(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jl(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Ld(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $s,Md=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for($s=$s||document.createElement("div"),$s.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=$s.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Ri(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z_=["Webkit","ms","Moz","O"];Object.keys(Pi).forEach(function(t){Z_.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Pi[r]=Pi[t]})});function Fd(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Pi.hasOwnProperty(t)&&Pi[t]?(""+r).trim():r+"px"}function Ud(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=Fd(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var ev=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zl(t,r){if(r){if(ev[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function ea(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ta=null;function na(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ra=null,Lr=null,Mr=null;function jd(t){if(t=Ji(t)){if(typeof ra!="function")throw Error(n(280));var r=t.stateNode;r&&(r=mo(r),ra(t.stateNode,t.type,r))}}function zd(t){Lr?Mr?Mr.push(t):Mr=[t]:Lr=t}function Wd(){if(Lr){var t=Lr,r=Mr;if(Mr=Lr=null,jd(t),r)for(t=0;t<r.length;t++)jd(r[t])}}function Bd(t,r){return t(r)}function Hd(){}var ia=!1;function Vd(t,r,o){if(ia)return t(r,o);ia=!0;try{return Bd(t,r,o)}finally{ia=!1,(Lr!==null||Mr!==null)&&(Hd(),Wd())}}function bi(t,r){var o=t.stateNode;if(o===null)return null;var a=mo(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var sa=!1;if(f)try{var Ai={};Object.defineProperty(Ai,"passive",{get:function(){sa=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{sa=!1}function tv(t,r,o,a,c,h,m,v,E){var T=Array.prototype.slice.call(arguments,3);try{r.apply(o,T)}catch(A){this.onError(A)}}var Oi=!1,Gs=null,qs=!1,oa=null,nv={onError:function(t){Oi=!0,Gs=t}};function rv(t,r,o,a,c,h,m,v,E){Oi=!1,Gs=null,tv.apply(nv,arguments)}function iv(t,r,o,a,c,h,m,v,E){if(rv.apply(this,arguments),Oi){if(Oi){var T=Gs;Oi=!1,Gs=null}else throw Error(n(198));qs||(qs=!0,oa=T)}}function or(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function $d(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Gd(t){if(or(t)!==t)throw Error(n(188))}function sv(t){var r=t.alternate;if(!r){if(r=or(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Gd(c),t;if(h===a)return Gd(c),r;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,v=c.child;v;){if(v===o){m=!0,o=c,a=h;break}if(v===a){m=!0,a=c,o=h;break}v=v.sibling}if(!m){for(v=h.child;v;){if(v===o){m=!0,o=h,a=c;break}if(v===a){m=!0,a=h,o=c;break}v=v.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function qd(t){return t=sv(t),t!==null?Kd(t):null}function Kd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Kd(t);if(r!==null)return r;t=t.sibling}return null}var Qd=e.unstable_scheduleCallback,Yd=e.unstable_cancelCallback,ov=e.unstable_shouldYield,lv=e.unstable_requestPaint,Ge=e.unstable_now,av=e.unstable_getCurrentPriorityLevel,la=e.unstable_ImmediatePriority,Xd=e.unstable_UserBlockingPriority,Ks=e.unstable_NormalPriority,uv=e.unstable_LowPriority,Jd=e.unstable_IdlePriority,Qs=null,nn=null;function cv(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Qs,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:fv,dv=Math.log,hv=Math.LN2;function fv(t){return t>>>=0,t===0?32:31-(dv(t)/hv|0)|0}var Ys=64,Xs=4194304;function Di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Js(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var v=m&~c;v!==0?a=Di(v):(h&=m,h!==0&&(a=Di(h)))}else m=o&~c,m!==0?a=Di(m):h!==0&&(a=Di(h));if(a===0)return 0;if(r!==0&&r!==a&&!(r&c)&&(c=a&-a,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if(a&4&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-Bt(r),c=1<<o,a|=t[o],r&=~c;return a}function pv(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mv(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Bt(h),v=1<<m,E=c[m];E===-1?(!(v&o)||v&a)&&(c[m]=pv(v,r)):E<=r&&(t.expiredLanes|=v),h&=~v}}function aa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zd(){var t=Ys;return Ys<<=1,!(Ys&4194240)&&(Ys=64),t}function ua(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Li(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Bt(r),t[r]=o}function gv(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Bt(o),h=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function ca(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-Bt(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var Pe=0;function eh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var th,da,nh,rh,ih,ha=!1,Zs=[],xn=null,Rn=null,Pn=null,Mi=new Map,Fi=new Map,bn=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sh(t,r){switch(t){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Mi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(r.pointerId)}}function Ui(t,r,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},r!==null&&(r=Ji(r),r!==null&&da(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function vv(t,r,o,a,c){switch(r){case"focusin":return xn=Ui(xn,t,r,o,a,c),!0;case"dragenter":return Rn=Ui(Rn,t,r,o,a,c),!0;case"mouseover":return Pn=Ui(Pn,t,r,o,a,c),!0;case"pointerover":var h=c.pointerId;return Mi.set(h,Ui(Mi.get(h)||null,t,r,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Fi.set(h,Ui(Fi.get(h)||null,t,r,o,a,c)),!0}return!1}function oh(t){var r=lr(t.target);if(r!==null){var o=or(r);if(o!==null){if(r=o.tag,r===13){if(r=$d(o),r!==null){t.blockedOn=r,ih(t.priority,function(){nh(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eo(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=pa(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);ta=a,o.target.dispatchEvent(a),ta=null}else return r=Ji(o),r!==null&&da(r),t.blockedOn=o,!1;r.shift()}return!0}function lh(t,r,o){eo(t)&&o.delete(r)}function yv(){ha=!1,xn!==null&&eo(xn)&&(xn=null),Rn!==null&&eo(Rn)&&(Rn=null),Pn!==null&&eo(Pn)&&(Pn=null),Mi.forEach(lh),Fi.forEach(lh)}function ji(t,r){t.blockedOn===r&&(t.blockedOn=null,ha||(ha=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yv)))}function zi(t){function r(c){return ji(c,t)}if(0<Zs.length){ji(Zs[0],t);for(var o=1;o<Zs.length;o++){var a=Zs[o];a.blockedOn===t&&(a.blockedOn=null)}}for(xn!==null&&ji(xn,t),Rn!==null&&ji(Rn,t),Pn!==null&&ji(Pn,t),Mi.forEach(r),Fi.forEach(r),o=0;o<bn.length;o++)a=bn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<bn.length&&(o=bn[0],o.blockedOn===null);)oh(o),o.blockedOn===null&&bn.shift()}var Fr=H.ReactCurrentBatchConfig,to=!0;function wv(t,r,o,a){var c=Pe,h=Fr.transition;Fr.transition=null;try{Pe=1,fa(t,r,o,a)}finally{Pe=c,Fr.transition=h}}function Ev(t,r,o,a){var c=Pe,h=Fr.transition;Fr.transition=null;try{Pe=4,fa(t,r,o,a)}finally{Pe=c,Fr.transition=h}}function fa(t,r,o,a){if(to){var c=pa(t,r,o,a);if(c===null)ba(t,r,a,no,o),sh(t,a);else if(vv(c,t,r,o,a))a.stopPropagation();else if(sh(t,a),r&4&&-1<_v.indexOf(t)){for(;c!==null;){var h=Ji(c);if(h!==null&&th(h),h=pa(t,r,o,a),h===null&&ba(t,r,a,no,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else ba(t,r,a,null,o)}}var no=null;function pa(t,r,o,a){if(no=null,t=na(a),t=lr(t),t!==null)if(r=or(t),r===null)t=null;else if(o=r.tag,o===13){if(t=$d(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return no=t,null}function ah(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(av()){case la:return 1;case Xd:return 4;case Ks:case uv:return 16;case Jd:return 536870912;default:return 16}default:return 16}}var An=null,ma=null,ro=null;function uh(){if(ro)return ro;var t,r=ma,o=r.length,a,c="value"in An?An.value:An.textContent,h=c.length;for(t=0;t<o&&r[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&r[o-a]===c[h-a];a++);return ro=c.slice(t,1<a?1-a:void 0)}function io(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function ch(){return!1}function Nt(t){function r(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(o=t[v],this[v]=o?o(h):h[v]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?so:ch,this.isPropagationStopped=ch,this}return W(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),r}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ga=Nt(Ur),Wi=W({},Ur,{view:0,detail:0}),Sv=Nt(Wi),_a,va,Bi,oo=W({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bi&&(Bi&&t.type==="mousemove"?(_a=t.screenX-Bi.screenX,va=t.screenY-Bi.screenY):va=_a=0,Bi=t),_a)},movementY:function(t){return"movementY"in t?t.movementY:va}}),dh=Nt(oo),Cv=W({},oo,{dataTransfer:0}),kv=Nt(Cv),Iv=W({},Wi,{relatedTarget:0}),ya=Nt(Iv),Tv=W({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Nv=Nt(Tv),xv=W({},Ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rv=Nt(xv),Pv=W({},Ur,{data:0}),hh=Nt(Pv),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dv(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Ov[t])?!!r[t]:!1}function wa(){return Dv}var Lv=W({},Wi,{key:function(t){if(t.key){var r=bv[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Av[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(t){return t.type==="keypress"?io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mv=Nt(Lv),Fv=W({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=Nt(Fv),Uv=W({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),jv=Nt(Uv),zv=W({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=Nt(zv),Bv=W({},oo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=Nt(Bv),Vv=[9,13,27,32],Ea=f&&"CompositionEvent"in window,Hi=null;f&&"documentMode"in document&&(Hi=document.documentMode);var $v=f&&"TextEvent"in window&&!Hi,ph=f&&(!Ea||Hi&&8<Hi&&11>=Hi),mh=" ",gh=!1;function _h(t,r){switch(t){case"keyup":return Vv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function Gv(t,r){switch(t){case"compositionend":return vh(r);case"keypress":return r.which!==32?null:(gh=!0,mh);case"textInput":return t=r.data,t===mh&&gh?null:t;default:return null}}function qv(t,r){if(jr)return t==="compositionend"||!Ea&&_h(t,r)?(t=uh(),ro=ma=An=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ph&&r.locale!=="ko"?null:r.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Kv[t.type]:r==="textarea"}function wh(t,r,o,a){zd(a),r=ho(r,"onChange"),0<r.length&&(o=new ga("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var Vi=null,$i=null;function Qv(t){Uh(t,0)}function lo(t){var r=Vr(t);if(At(r))return t}function Yv(t,r){if(t==="change")return r}var Eh=!1;if(f){var Sa;if(f){var Ca="oninput"in document;if(!Ca){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),Ca=typeof Sh.oninput=="function"}Sa=Ca}else Sa=!1;Eh=Sa&&(!document.documentMode||9<document.documentMode)}function Ch(){Vi&&(Vi.detachEvent("onpropertychange",kh),$i=Vi=null)}function kh(t){if(t.propertyName==="value"&&lo($i)){var r=[];wh(r,$i,t,na(t)),Vd(Qv,r)}}function Xv(t,r,o){t==="focusin"?(Ch(),Vi=r,$i=o,Vi.attachEvent("onpropertychange",kh)):t==="focusout"&&Ch()}function Jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lo($i)}function Zv(t,r){if(t==="click")return lo(r)}function ey(t,r){if(t==="input"||t==="change")return lo(r)}function ty(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Ht=typeof Object.is=="function"?Object.is:ty;function Gi(t,r){if(Ht(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(r,c)||!Ht(t[c],r[c]))return!1}return!0}function Ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Th(t,r){var o=Ih(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ih(o)}}function Nh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Nh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function xh(){for(var t=window,r=Ae();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Ae(t.document)}return r}function ka(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function ny(t){var r=xh(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Nh(o.ownerDocument.documentElement,o)){if(a!==null&&ka(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Th(o,h);var m=Th(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(r),t.extend(m.node,m.offset)):(r.setEnd(m.node,m.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ry=f&&"documentMode"in document&&11>=document.documentMode,zr=null,Ia=null,qi=null,Ta=!1;function Rh(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ta||zr==null||zr!==Ae(a)||(a=zr,"selectionStart"in a&&ka(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qi&&Gi(qi,a)||(qi=a,a=ho(Ia,"onSelect"),0<a.length&&(r=new ga("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=zr)))}function ao(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Wr={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},Na={},Ph={};f&&(Ph=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function uo(t){if(Na[t])return Na[t];if(!Wr[t])return t;var r=Wr[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Ph)return Na[t]=r[o];return t}var bh=uo("animationend"),Ah=uo("animationiteration"),Oh=uo("animationstart"),Dh=uo("transitionend"),Lh=new Map,Mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(t,r){Lh.set(t,r),u(r,[t])}for(var xa=0;xa<Mh.length;xa++){var Ra=Mh[xa],iy=Ra.toLowerCase(),sy=Ra[0].toUpperCase()+Ra.slice(1);On(iy,"on"+sy)}On(bh,"onAnimationEnd"),On(Ah,"onAnimationIteration"),On(Oh,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On(Dh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ki));function Fh(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,iv(a,r,void 0,t),t.currentTarget=null}function Uh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var m=a.length-1;0<=m;m--){var v=a[m],E=v.instance,T=v.currentTarget;if(v=v.listener,E!==h&&c.isPropagationStopped())break e;Fh(c,v,T),h=E}else for(m=0;m<a.length;m++){if(v=a[m],E=v.instance,T=v.currentTarget,v=v.listener,E!==h&&c.isPropagationStopped())break e;Fh(c,v,T),h=E}}}if(qs)throw t=oa,qs=!1,oa=null,t}function Ue(t,r){var o=r[Fa];o===void 0&&(o=r[Fa]=new Set);var a=t+"__bubble";o.has(a)||(jh(r,t,2,!1),o.add(a))}function Pa(t,r,o){var a=0;r&&(a|=4),jh(o,t,a,r)}var co="_reactListening"+Math.random().toString(36).slice(2);function Qi(t){if(!t[co]){t[co]=!0,s.forEach(function(o){o!=="selectionchange"&&(oy.has(o)||Pa(o,!1,t),Pa(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[co]||(r[co]=!0,Pa("selectionchange",!1,r))}}function jh(t,r,o,a){switch(ah(r)){case 1:var c=wv;break;case 4:c=Ev;break;default:c=fa}o=c.bind(null,r,o,t),c=void 0,!sa||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function ba(t,r,o,a,c){var h=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var v=a.stateNode.containerInfo;if(v===c||v.nodeType===8&&v.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var E=m.tag;if((E===3||E===4)&&(E=m.stateNode.containerInfo,E===c||E.nodeType===8&&E.parentNode===c))return;m=m.return}for(;v!==null;){if(m=lr(v),m===null)return;if(E=m.tag,E===5||E===6){a=h=m;continue e}v=v.parentNode}}a=a.return}Vd(function(){var T=h,A=na(o),O=[];e:{var b=Lh.get(t);if(b!==void 0){var B=ga,Q=t;switch(t){case"keypress":if(io(o)===0)break e;case"keydown":case"keyup":B=Mv;break;case"focusin":Q="focus",B=ya;break;case"focusout":Q="blur",B=ya;break;case"beforeblur":case"afterblur":B=ya;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=jv;break;case bh:case Ah:case Oh:B=Nv;break;case Dh:B=Wv;break;case"scroll":B=Sv;break;case"wheel":B=Hv;break;case"copy":case"cut":case"paste":B=Rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=fh}var J=(r&4)!==0,qe=!J&&t==="scroll",k=J?b!==null?b+"Capture":null:b;J=[];for(var S=T,I;S!==null;){I=S;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,k!==null&&(D=bi(S,k),D!=null&&J.push(Yi(S,D,I)))),qe)break;S=S.return}0<J.length&&(b=new B(b,Q,null,o,A),O.push({event:b,listeners:J}))}}if(!(r&7)){e:{if(b=t==="mouseover"||t==="pointerover",B=t==="mouseout"||t==="pointerout",b&&o!==ta&&(Q=o.relatedTarget||o.fromElement)&&(lr(Q)||Q[hn]))break e;if((B||b)&&(b=A.window===A?A:(b=A.ownerDocument)?b.defaultView||b.parentWindow:window,B?(Q=o.relatedTarget||o.toElement,B=T,Q=Q?lr(Q):null,Q!==null&&(qe=or(Q),Q!==qe||Q.tag!==5&&Q.tag!==6)&&(Q=null)):(B=null,Q=T),B!==Q)){if(J=dh,D="onMouseLeave",k="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(J=fh,D="onPointerLeave",k="onPointerEnter",S="pointer"),qe=B==null?b:Vr(B),I=Q==null?b:Vr(Q),b=new J(D,S+"leave",B,o,A),b.target=qe,b.relatedTarget=I,D=null,lr(A)===T&&(J=new J(k,S+"enter",Q,o,A),J.target=I,J.relatedTarget=qe,D=J),qe=D,B&&Q)t:{for(J=B,k=Q,S=0,I=J;I;I=Br(I))S++;for(I=0,D=k;D;D=Br(D))I++;for(;0<S-I;)J=Br(J),S--;for(;0<I-S;)k=Br(k),I--;for(;S--;){if(J===k||k!==null&&J===k.alternate)break t;J=Br(J),k=Br(k)}J=null}else J=null;B!==null&&zh(O,b,B,J,!1),Q!==null&&qe!==null&&zh(O,qe,Q,J,!0)}}e:{if(b=T?Vr(T):window,B=b.nodeName&&b.nodeName.toLowerCase(),B==="select"||B==="input"&&b.type==="file")var ee=Yv;else if(yh(b))if(Eh)ee=ey;else{ee=Jv;var ie=Xv}else(B=b.nodeName)&&B.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(ee=Zv);if(ee&&(ee=ee(t,T))){wh(O,ee,o,A);break e}ie&&ie(t,b,T),t==="focusout"&&(ie=b._wrapperState)&&ie.controlled&&b.type==="number"&&Yl(b,"number",b.value)}switch(ie=T?Vr(T):window,t){case"focusin":(yh(ie)||ie.contentEditable==="true")&&(zr=ie,Ia=T,qi=null);break;case"focusout":qi=Ia=zr=null;break;case"mousedown":Ta=!0;break;case"contextmenu":case"mouseup":case"dragend":Ta=!1,Rh(O,o,A);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":Rh(O,o,A)}var se;if(Ea)e:{switch(t){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else jr?_h(t,o)&&(ue="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ue="onCompositionStart");ue&&(ph&&o.locale!=="ko"&&(jr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&jr&&(se=uh()):(An=A,ma="value"in An?An.value:An.textContent,jr=!0)),ie=ho(T,ue),0<ie.length&&(ue=new hh(ue,t,null,o,A),O.push({event:ue,listeners:ie}),se?ue.data=se:(se=vh(o),se!==null&&(ue.data=se)))),(se=$v?Gv(t,o):qv(t,o))&&(T=ho(T,"onBeforeInput"),0<T.length&&(A=new hh("onBeforeInput","beforeinput",null,o,A),O.push({event:A,listeners:T}),A.data=se))}Uh(O,r)})}function Yi(t,r,o){return{instance:t,listener:r,currentTarget:o}}function ho(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=bi(t,o),h!=null&&a.unshift(Yi(t,h,c)),h=bi(t,r),h!=null&&a.push(Yi(t,h,c))),t=t.return}return a}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zh(t,r,o,a,c){for(var h=r._reactName,m=[];o!==null&&o!==a;){var v=o,E=v.alternate,T=v.stateNode;if(E!==null&&E===a)break;v.tag===5&&T!==null&&(v=T,c?(E=bi(o,h),E!=null&&m.unshift(Yi(o,E,v))):c||(E=bi(o,h),E!=null&&m.push(Yi(o,E,v)))),o=o.return}m.length!==0&&t.push({event:r,listeners:m})}var ly=/\r\n?/g,ay=/\u0000|\uFFFD/g;function Wh(t){return(typeof t=="string"?t:""+t).replace(ly,`
`).replace(ay,"")}function fo(t,r,o){if(r=Wh(r),Wh(t)!==r&&o)throw Error(n(425))}function po(){}var Aa=null,Oa=null;function Da(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var La=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,Bh=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof Bh<"u"?function(t){return Bh.resolve(null).then(t).catch(dy)}:La;function dy(t){setTimeout(function(){throw t})}function Ma(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),zi(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);zi(r)}function Dn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Hh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),rn="__reactFiber$"+Hr,Xi="__reactProps$"+Hr,hn="__reactContainer$"+Hr,Fa="__reactEvents$"+Hr,hy="__reactListeners$"+Hr,fy="__reactHandles$"+Hr;function lr(t){var r=t[rn];if(r)return r;for(var o=t.parentNode;o;){if(r=o[hn]||o[rn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Hh(t);t!==null;){if(o=t[rn])return o;t=Hh(t)}return r}t=o,o=t.parentNode}return null}function Ji(t){return t=t[rn]||t[hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function mo(t){return t[Xi]||null}var Ua=[],$r=-1;function Ln(t){return{current:t}}function je(t){0>$r||(t.current=Ua[$r],Ua[$r]=null,$r--)}function Le(t,r){$r++,Ua[$r]=t.current,t.current=r}var Mn={},dt=Ln(Mn),yt=Ln(!1),ar=Mn;function Gr(t,r){var o=t.type.contextTypes;if(!o)return Mn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=r[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function wt(t){return t=t.childContextTypes,t!=null}function go(){je(yt),je(dt)}function Vh(t,r,o){if(dt.current!==Mn)throw Error(n(168));Le(dt,r),Le(yt,o)}function $h(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,oe(t)||"Unknown",c));return W({},o,a)}function _o(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mn,ar=dt.current,Le(dt,t),Le(yt,yt.current),!0}function Gh(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=$h(t,r,ar),a.__reactInternalMemoizedMergedChildContext=t,je(yt),je(dt),Le(dt,t)):je(yt),Le(yt,o)}var fn=null,vo=!1,ja=!1;function qh(t){fn===null?fn=[t]:fn.push(t)}function py(t){vo=!0,qh(t)}function Fn(){if(!ja&&fn!==null){ja=!0;var t=0,r=Pe;try{var o=fn;for(Pe=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}fn=null,vo=!1}catch(c){throw fn!==null&&(fn=fn.slice(t+1)),Qd(la,Fn),c}finally{Pe=r,ja=!1}}return null}var qr=[],Kr=0,yo=null,wo=0,Ot=[],Dt=0,ur=null,pn=1,mn="";function cr(t,r){qr[Kr++]=wo,qr[Kr++]=yo,yo=t,wo=r}function Kh(t,r,o){Ot[Dt++]=pn,Ot[Dt++]=mn,Ot[Dt++]=ur,ur=t;var a=pn;t=mn;var c=32-Bt(a)-1;a&=~(1<<c),o+=1;var h=32-Bt(r)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,pn=1<<32-Bt(r)+c|o<<c|a,mn=h+t}else pn=1<<h|o<<c|a,mn=t}function za(t){t.return!==null&&(cr(t,1),Kh(t,1,0))}function Wa(t){for(;t===yo;)yo=qr[--Kr],qr[Kr]=null,wo=qr[--Kr],qr[Kr]=null;for(;t===ur;)ur=Ot[--Dt],Ot[Dt]=null,mn=Ot[--Dt],Ot[Dt]=null,pn=Ot[--Dt],Ot[Dt]=null}var xt=null,Rt=null,ze=!1,Vt=null;function Qh(t,r){var o=Ut(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Yh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,xt=t,Rt=Dn(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,xt=t,Rt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ur!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Ut(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,xt=t,Rt=null,!0):!1;default:return!1}}function Ba(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ha(t){if(ze){var r=Rt;if(r){var o=r;if(!Yh(t,r)){if(Ba(t))throw Error(n(418));r=Dn(o.nextSibling);var a=xt;r&&Yh(t,r)?Qh(a,o):(t.flags=t.flags&-4097|2,ze=!1,xt=t)}}else{if(Ba(t))throw Error(n(418));t.flags=t.flags&-4097|2,ze=!1,xt=t}}}function Xh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function Eo(t){if(t!==xt)return!1;if(!ze)return Xh(t),ze=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Da(t.type,t.memoizedProps)),r&&(r=Rt)){if(Ba(t))throw Jh(),Error(n(418));for(;r;)Qh(t,r),r=Dn(r.nextSibling)}if(Xh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Rt=Dn(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Rt=null}}else Rt=xt?Dn(t.stateNode.nextSibling):null;return!0}function Jh(){for(var t=Rt;t;)t=Dn(t.nextSibling)}function Qr(){Rt=xt=null,ze=!1}function Va(t){Vt===null?Vt=[t]:Vt.push(t)}var my=H.ReactCurrentBatchConfig;function Zi(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(m){var v=c.refs;m===null?delete v[h]:v[h]=m},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function So(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Zh(t){var r=t._init;return r(t._payload)}function ef(t){function r(k,S){if(t){var I=k.deletions;I===null?(k.deletions=[S],k.flags|=16):I.push(S)}}function o(k,S){if(!t)return null;for(;S!==null;)r(k,S),S=S.sibling;return null}function a(k,S){for(k=new Map;S!==null;)S.key!==null?k.set(S.key,S):k.set(S.index,S),S=S.sibling;return k}function c(k,S){return k=$n(k,S),k.index=0,k.sibling=null,k}function h(k,S,I){return k.index=I,t?(I=k.alternate,I!==null?(I=I.index,I<S?(k.flags|=2,S):I):(k.flags|=2,S)):(k.flags|=1048576,S)}function m(k){return t&&k.alternate===null&&(k.flags|=2),k}function v(k,S,I,D){return S===null||S.tag!==6?(S=Lu(I,k.mode,D),S.return=k,S):(S=c(S,I),S.return=k,S)}function E(k,S,I,D){var ee=I.type;return ee===Y?A(k,S,I.props.children,D,I.key):S!==null&&(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Re&&Zh(ee)===S.type)?(D=c(S,I.props),D.ref=Zi(k,S,I),D.return=k,D):(D=Go(I.type,I.key,I.props,null,k.mode,D),D.ref=Zi(k,S,I),D.return=k,D)}function T(k,S,I,D){return S===null||S.tag!==4||S.stateNode.containerInfo!==I.containerInfo||S.stateNode.implementation!==I.implementation?(S=Mu(I,k.mode,D),S.return=k,S):(S=c(S,I.children||[]),S.return=k,S)}function A(k,S,I,D,ee){return S===null||S.tag!==7?(S=vr(I,k.mode,D,ee),S.return=k,S):(S=c(S,I),S.return=k,S)}function O(k,S,I){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Lu(""+S,k.mode,I),S.return=k,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case me:return I=Go(S.type,S.key,S.props,null,k.mode,I),I.ref=Zi(k,null,S),I.return=k,I;case L:return S=Mu(S,k.mode,I),S.return=k,S;case Re:var D=S._init;return O(k,D(S._payload),I)}if(xi(S)||Z(S))return S=vr(S,k.mode,I,null),S.return=k,S;So(k,S)}return null}function b(k,S,I,D){var ee=S!==null?S.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return ee!==null?null:v(k,S,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case me:return I.key===ee?E(k,S,I,D):null;case L:return I.key===ee?T(k,S,I,D):null;case Re:return ee=I._init,b(k,S,ee(I._payload),D)}if(xi(I)||Z(I))return ee!==null?null:A(k,S,I,D,null);So(k,I)}return null}function B(k,S,I,D,ee){if(typeof D=="string"&&D!==""||typeof D=="number")return k=k.get(I)||null,v(S,k,""+D,ee);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case me:return k=k.get(D.key===null?I:D.key)||null,E(S,k,D,ee);case L:return k=k.get(D.key===null?I:D.key)||null,T(S,k,D,ee);case Re:var ie=D._init;return B(k,S,I,ie(D._payload),ee)}if(xi(D)||Z(D))return k=k.get(I)||null,A(S,k,D,ee,null);So(S,D)}return null}function Q(k,S,I,D){for(var ee=null,ie=null,se=S,ue=S=0,Ze=null;se!==null&&ue<I.length;ue++){se.index>ue?(Ze=se,se=null):Ze=se.sibling;var Ne=b(k,se,I[ue],D);if(Ne===null){se===null&&(se=Ze);break}t&&se&&Ne.alternate===null&&r(k,se),S=h(Ne,S,ue),ie===null?ee=Ne:ie.sibling=Ne,ie=Ne,se=Ze}if(ue===I.length)return o(k,se),ze&&cr(k,ue),ee;if(se===null){for(;ue<I.length;ue++)se=O(k,I[ue],D),se!==null&&(S=h(se,S,ue),ie===null?ee=se:ie.sibling=se,ie=se);return ze&&cr(k,ue),ee}for(se=a(k,se);ue<I.length;ue++)Ze=B(se,k,ue,I[ue],D),Ze!==null&&(t&&Ze.alternate!==null&&se.delete(Ze.key===null?ue:Ze.key),S=h(Ze,S,ue),ie===null?ee=Ze:ie.sibling=Ze,ie=Ze);return t&&se.forEach(function(Gn){return r(k,Gn)}),ze&&cr(k,ue),ee}function J(k,S,I,D){var ee=Z(I);if(typeof ee!="function")throw Error(n(150));if(I=ee.call(I),I==null)throw Error(n(151));for(var ie=ee=null,se=S,ue=S=0,Ze=null,Ne=I.next();se!==null&&!Ne.done;ue++,Ne=I.next()){se.index>ue?(Ze=se,se=null):Ze=se.sibling;var Gn=b(k,se,Ne.value,D);if(Gn===null){se===null&&(se=Ze);break}t&&se&&Gn.alternate===null&&r(k,se),S=h(Gn,S,ue),ie===null?ee=Gn:ie.sibling=Gn,ie=Gn,se=Ze}if(Ne.done)return o(k,se),ze&&cr(k,ue),ee;if(se===null){for(;!Ne.done;ue++,Ne=I.next())Ne=O(k,Ne.value,D),Ne!==null&&(S=h(Ne,S,ue),ie===null?ee=Ne:ie.sibling=Ne,ie=Ne);return ze&&cr(k,ue),ee}for(se=a(k,se);!Ne.done;ue++,Ne=I.next())Ne=B(se,k,ue,Ne.value,D),Ne!==null&&(t&&Ne.alternate!==null&&se.delete(Ne.key===null?ue:Ne.key),S=h(Ne,S,ue),ie===null?ee=Ne:ie.sibling=Ne,ie=Ne);return t&&se.forEach(function(qy){return r(k,qy)}),ze&&cr(k,ue),ee}function qe(k,S,I,D){if(typeof I=="object"&&I!==null&&I.type===Y&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case me:e:{for(var ee=I.key,ie=S;ie!==null;){if(ie.key===ee){if(ee=I.type,ee===Y){if(ie.tag===7){o(k,ie.sibling),S=c(ie,I.props.children),S.return=k,k=S;break e}}else if(ie.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Re&&Zh(ee)===ie.type){o(k,ie.sibling),S=c(ie,I.props),S.ref=Zi(k,ie,I),S.return=k,k=S;break e}o(k,ie);break}else r(k,ie);ie=ie.sibling}I.type===Y?(S=vr(I.props.children,k.mode,D,I.key),S.return=k,k=S):(D=Go(I.type,I.key,I.props,null,k.mode,D),D.ref=Zi(k,S,I),D.return=k,k=D)}return m(k);case L:e:{for(ie=I.key;S!==null;){if(S.key===ie)if(S.tag===4&&S.stateNode.containerInfo===I.containerInfo&&S.stateNode.implementation===I.implementation){o(k,S.sibling),S=c(S,I.children||[]),S.return=k,k=S;break e}else{o(k,S);break}else r(k,S);S=S.sibling}S=Mu(I,k.mode,D),S.return=k,k=S}return m(k);case Re:return ie=I._init,qe(k,S,ie(I._payload),D)}if(xi(I))return Q(k,S,I,D);if(Z(I))return J(k,S,I,D);So(k,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,S!==null&&S.tag===6?(o(k,S.sibling),S=c(S,I),S.return=k,k=S):(o(k,S),S=Lu(I,k.mode,D),S.return=k,k=S),m(k)):o(k,S)}return qe}var Yr=ef(!0),tf=ef(!1),Co=Ln(null),ko=null,Xr=null,$a=null;function Ga(){$a=Xr=ko=null}function qa(t){var r=Co.current;je(Co),t._currentValue=r}function Ka(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function Jr(t,r){ko=t,$a=Xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(Et=!0),t.firstContext=null)}function Lt(t){var r=t._currentValue;if($a!==t)if(t={context:t,memoizedValue:r,next:null},Xr===null){if(ko===null)throw Error(n(308));Xr=t,ko.dependencies={lanes:0,firstContext:t}}else Xr=Xr.next=t;return r}var dr=null;function Qa(t){dr===null?dr=[t]:dr.push(t)}function nf(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,Qa(r)):(o.next=c.next,c.next=o),r.interleaved=o,gn(t,a)}function gn(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Un=!1;function Ya(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function jn(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,Ie&2){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,gn(t,o)}return c=a.interleaved,c===null?(r.next=r,Qa(a)):(r.next=c.next,c.next=r),a.interleaved=r,gn(t,o)}function Io(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ca(t,o)}}function sf(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=r:h=h.next=r}else c=h=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function To(t,r,o,a){var c=t.updateQueue;Un=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,v=c.shared.pending;if(v!==null){c.shared.pending=null;var E=v,T=E.next;E.next=null,m===null?h=T:m.next=T,m=E;var A=t.alternate;A!==null&&(A=A.updateQueue,v=A.lastBaseUpdate,v!==m&&(v===null?A.firstBaseUpdate=T:v.next=T,A.lastBaseUpdate=E))}if(h!==null){var O=c.baseState;m=0,A=T=E=null,v=h;do{var b=v.lane,B=v.eventTime;if((a&b)===b){A!==null&&(A=A.next={eventTime:B,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var Q=t,J=v;switch(b=r,B=o,J.tag){case 1:if(Q=J.payload,typeof Q=="function"){O=Q.call(B,O,b);break e}O=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=J.payload,b=typeof Q=="function"?Q.call(B,O,b):Q,b==null)break e;O=W({},O,b);break e;case 2:Un=!0}}v.callback!==null&&v.lane!==0&&(t.flags|=64,b=c.effects,b===null?c.effects=[v]:b.push(v))}else B={eventTime:B,lane:b,tag:v.tag,payload:v.payload,callback:v.callback,next:null},A===null?(T=A=B,E=O):A=A.next=B,m|=b;if(v=v.next,v===null){if(v=c.shared.pending,v===null)break;b=v,v=b.next,b.next=null,c.lastBaseUpdate=b,c.shared.pending=null}}while(!0);if(A===null&&(E=O),c.baseState=E,c.firstBaseUpdate=T,c.lastBaseUpdate=A,r=c.shared.interleaved,r!==null){c=r;do m|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);pr|=m,t.lanes=m,t.memoizedState=O}}function of(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var es={},sn=Ln(es),ts=Ln(es),ns=Ln(es);function hr(t){if(t===es)throw Error(n(174));return t}function Xa(t,r){switch(Le(ns,r),Le(ts,t),Le(sn,es),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Jl(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Jl(r,t)}je(sn),Le(sn,r)}function Zr(){je(sn),je(ts),je(ns)}function lf(t){hr(ns.current);var r=hr(sn.current),o=Jl(r,t.type);r!==o&&(Le(ts,t),Le(sn,o))}function Ja(t){ts.current===t&&(je(sn),je(ts))}var We=Ln(0);function No(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Za=[];function eu(){for(var t=0;t<Za.length;t++)Za[t]._workInProgressVersionPrimary=null;Za.length=0}var xo=H.ReactCurrentDispatcher,tu=H.ReactCurrentBatchConfig,fr=0,Be=null,Qe=null,Xe=null,Ro=!1,rs=!1,is=0,gy=0;function ht(){throw Error(n(321))}function nu(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!Ht(t[o],r[o]))return!1;return!0}function ru(t,r,o,a,c,h){if(fr=h,Be=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,xo.current=t===null||t.memoizedState===null?wy:Ey,t=o(a,c),rs){h=0;do{if(rs=!1,is=0,25<=h)throw Error(n(301));h+=1,Xe=Qe=null,r.updateQueue=null,xo.current=Sy,t=o(a,c)}while(rs)}if(xo.current=Ao,r=Qe!==null&&Qe.next!==null,fr=0,Xe=Qe=Be=null,Ro=!1,r)throw Error(n(300));return t}function iu(){var t=is!==0;return is=0,t}function on(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Be.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Mt(){if(Qe===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var r=Xe===null?Be.memoizedState:Xe.next;if(r!==null)Xe=r,Qe=t;else{if(t===null)throw Error(n(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Xe===null?Be.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function ss(t,r){return typeof r=="function"?r(t):r}function su(t){var r=Mt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=Qe,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var v=m=null,E=null,T=h;do{var A=T.lane;if((fr&A)===A)E!==null&&(E=E.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),a=T.hasEagerState?T.eagerState:t(a,T.action);else{var O={lane:A,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};E===null?(v=E=O,m=a):E=E.next=O,Be.lanes|=A,pr|=A}T=T.next}while(T!==null&&T!==h);E===null?m=a:E.next=v,Ht(a,r.memoizedState)||(Et=!0),r.memoizedState=a,r.baseState=m,r.baseQueue=E,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Be.lanes|=h,pr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function ou(t){var r=Mt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=r.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);Ht(h,r.memoizedState)||(Et=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function af(){}function uf(t,r){var o=Be,a=Mt(),c=r(),h=!Ht(a.memoizedState,c);if(h&&(a.memoizedState=c,Et=!0),a=a.queue,lu(hf.bind(null,o,a,t),[t]),a.getSnapshot!==r||h||Xe!==null&&Xe.memoizedState.tag&1){if(o.flags|=2048,os(9,df.bind(null,o,a,c,r),void 0,null),Je===null)throw Error(n(349));fr&30||cf(o,r,c)}return c}function cf(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Be.updateQueue,r===null?(r={lastEffect:null,stores:null},Be.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function df(t,r,o,a){r.value=o,r.getSnapshot=a,ff(r)&&pf(t)}function hf(t,r,o){return o(function(){ff(r)&&pf(t)})}function ff(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!Ht(t,o)}catch{return!0}}function pf(t){var r=gn(t,1);r!==null&&Kt(r,t,1,-1)}function mf(t){var r=on();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:t},r.queue=t,t=t.dispatch=yy.bind(null,Be,t),[r.memoizedState,t]}function os(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=Be.updateQueue,r===null?(r={lastEffect:null,stores:null},Be.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function gf(){return Mt().memoizedState}function Po(t,r,o,a){var c=on();Be.flags|=t,c.memoizedState=os(1|r,o,void 0,a===void 0?null:a)}function bo(t,r,o,a){var c=Mt();a=a===void 0?null:a;var h=void 0;if(Qe!==null){var m=Qe.memoizedState;if(h=m.destroy,a!==null&&nu(a,m.deps)){c.memoizedState=os(r,o,h,a);return}}Be.flags|=t,c.memoizedState=os(1|r,o,h,a)}function _f(t,r){return Po(8390656,8,t,r)}function lu(t,r){return bo(2048,8,t,r)}function vf(t,r){return bo(4,2,t,r)}function yf(t,r){return bo(4,4,t,r)}function wf(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Ef(t,r,o){return o=o!=null?o.concat([t]):null,bo(4,4,wf.bind(null,r,t),o)}function au(){}function Sf(t,r){var o=Mt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&nu(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function Cf(t,r){var o=Mt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&nu(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function kf(t,r,o){return fr&21?(Ht(o,r)||(o=Zd(),Be.lanes|=o,pr|=o,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=o)}function _y(t,r){var o=Pe;Pe=o!==0&&4>o?o:4,t(!0);var a=tu.transition;tu.transition={};try{t(!1),r()}finally{Pe=o,tu.transition=a}}function If(){return Mt().memoizedState}function vy(t,r,o){var a=Hn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Tf(t))Nf(r,o);else if(o=nf(t,r,o,a),o!==null){var c=gt();Kt(o,t,a,c),xf(o,r,a)}}function yy(t,r,o){var a=Hn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Tf(t))Nf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var m=r.lastRenderedState,v=h(m,o);if(c.hasEagerState=!0,c.eagerState=v,Ht(v,m)){var E=r.interleaved;E===null?(c.next=c,Qa(r)):(c.next=E.next,E.next=c),r.interleaved=c;return}}catch{}finally{}o=nf(t,r,c,a),o!==null&&(c=gt(),Kt(o,t,a,c),xf(o,r,a))}}function Tf(t){var r=t.alternate;return t===Be||r!==null&&r===Be}function Nf(t,r){rs=Ro=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function xf(t,r,o){if(o&4194240){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ca(t,o)}}var Ao={readContext:Lt,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},wy={readContext:Lt,useCallback:function(t,r){return on().memoizedState=[t,r===void 0?null:r],t},useContext:Lt,useEffect:_f,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Po(4194308,4,wf.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Po(4194308,4,t,r)},useInsertionEffect:function(t,r){return Po(4,2,t,r)},useMemo:function(t,r){var o=on();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=on();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=vy.bind(null,Be,t),[a.memoizedState,t]},useRef:function(t){var r=on();return t={current:t},r.memoizedState=t},useState:mf,useDebugValue:au,useDeferredValue:function(t){return on().memoizedState=t},useTransition:function(){var t=mf(!1),r=t[0];return t=_y.bind(null,t[1]),on().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=Be,c=on();if(ze){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Je===null)throw Error(n(349));fr&30||cf(a,r,o)}c.memoizedState=o;var h={value:o,getSnapshot:r};return c.queue=h,_f(hf.bind(null,a,h,t),[t]),a.flags|=2048,os(9,df.bind(null,a,h,o,r),void 0,null),o},useId:function(){var t=on(),r=Je.identifierPrefix;if(ze){var o=mn,a=pn;o=(a&~(1<<32-Bt(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=is++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=gy++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Ey={readContext:Lt,useCallback:Sf,useContext:Lt,useEffect:lu,useImperativeHandle:Ef,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:Cf,useReducer:su,useRef:gf,useState:function(){return su(ss)},useDebugValue:au,useDeferredValue:function(t){var r=Mt();return kf(r,Qe.memoizedState,t)},useTransition:function(){var t=su(ss)[0],r=Mt().memoizedState;return[t,r]},useMutableSource:af,useSyncExternalStore:uf,useId:If,unstable_isNewReconciler:!1},Sy={readContext:Lt,useCallback:Sf,useContext:Lt,useEffect:lu,useImperativeHandle:Ef,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:Cf,useReducer:ou,useRef:gf,useState:function(){return ou(ss)},useDebugValue:au,useDeferredValue:function(t){var r=Mt();return Qe===null?r.memoizedState=t:kf(r,Qe.memoizedState,t)},useTransition:function(){var t=ou(ss)[0],r=Mt().memoizedState;return[t,r]},useMutableSource:af,useSyncExternalStore:uf,useId:If,unstable_isNewReconciler:!1};function $t(t,r){if(t&&t.defaultProps){r=W({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function uu(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:W({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Oo={isMounted:function(t){return(t=t._reactInternals)?or(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=gt(),c=Hn(t),h=_n(a,c);h.payload=r,o!=null&&(h.callback=o),r=jn(t,h,c),r!==null&&(Kt(r,t,c,a),Io(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=gt(),c=Hn(t),h=_n(a,c);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=jn(t,h,c),r!==null&&(Kt(r,t,c,a),Io(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=gt(),a=Hn(t),c=_n(o,a);c.tag=2,r!=null&&(c.callback=r),r=jn(t,c,a),r!==null&&(Kt(r,t,a,o),Io(r,t,a))}};function Rf(t,r,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):r.prototype&&r.prototype.isPureReactComponent?!Gi(o,a)||!Gi(c,h):!0}function Pf(t,r,o){var a=!1,c=Mn,h=r.contextType;return typeof h=="object"&&h!==null?h=Lt(h):(c=wt(r)?ar:dt.current,a=r.contextTypes,h=(a=a!=null)?Gr(t,c):Mn),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Oo,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function bf(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&Oo.enqueueReplaceState(r,r.state,null)}function cu(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Ya(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=Lt(h):(h=wt(r)?ar:dt.current,c.context=Gr(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(uu(t,r,h,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&Oo.enqueueReplaceState(c,c.state,null),To(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ei(t,r){try{var o="",a=r;do o+=he(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function du(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function hu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Cy=typeof WeakMap=="function"?WeakMap:Map;function Af(t,r,o){o=_n(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){zo||(zo=!0,Nu=a),hu(t,r)},o}function Of(t,r,o){o=_n(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){hu(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){hu(t,r),typeof a!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var m=r.stack;this.componentDidCatch(r.value,{componentStack:m!==null?m:""})}),o}function Df(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Cy;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=Fy.bind(null,t,r,o),r.then(t,t))}function Lf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Mf(t,r,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=_n(-1,1),r.tag=2,jn(o,r,1))),o.lanes|=1),t)}var ky=H.ReactCurrentOwner,Et=!1;function mt(t,r,o,a){r.child=t===null?tf(r,null,o,a):Yr(r,t.child,o,a)}function Ff(t,r,o,a,c){o=o.render;var h=r.ref;return Jr(r,c),a=ru(t,r,o,a,h,c),o=iu(),t!==null&&!Et?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,vn(t,r,c)):(ze&&o&&za(r),r.flags|=1,mt(t,r,a,c),r.child)}function Uf(t,r,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!Du(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,jf(t,r,h,a,c)):(t=Go(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Gi,o(m,a)&&t.ref===r.ref)return vn(t,r,c)}return r.flags|=1,t=$n(h,a),t.ref=r.ref,t.return=r,r.child=t}function jf(t,r,o,a,c){if(t!==null){var h=t.memoizedProps;if(Gi(h,a)&&t.ref===r.ref)if(Et=!1,r.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(Et=!0);else return r.lanes=t.lanes,vn(t,r,c)}return fu(t,r,o,a,c)}function zf(t,r,o){var a=r.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(ni,Pt),Pt|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Le(ni,Pt),Pt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Le(ni,Pt),Pt|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,Le(ni,Pt),Pt|=a;return mt(t,r,c,o),r.child}function Wf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function fu(t,r,o,a,c){var h=wt(o)?ar:dt.current;return h=Gr(r,h),Jr(r,c),o=ru(t,r,o,a,h,c),a=iu(),t!==null&&!Et?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,vn(t,r,c)):(ze&&a&&za(r),r.flags|=1,mt(t,r,o,c),r.child)}function Bf(t,r,o,a,c){if(wt(o)){var h=!0;_o(r)}else h=!1;if(Jr(r,c),r.stateNode===null)Lo(t,r),Pf(r,o,a),cu(r,o,a,c),a=!0;else if(t===null){var m=r.stateNode,v=r.memoizedProps;m.props=v;var E=m.context,T=o.contextType;typeof T=="object"&&T!==null?T=Lt(T):(T=wt(o)?ar:dt.current,T=Gr(r,T));var A=o.getDerivedStateFromProps,O=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function";O||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==a||E!==T)&&bf(r,m,a,T),Un=!1;var b=r.memoizedState;m.state=b,To(r,a,m,c),E=r.memoizedState,v!==a||b!==E||yt.current||Un?(typeof A=="function"&&(uu(r,o,A,a),E=r.memoizedState),(v=Un||Rf(r,o,v,a,b,E,T))?(O||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=E),m.props=a,m.state=E,m.context=T,a=v):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{m=r.stateNode,rf(t,r),v=r.memoizedProps,T=r.type===r.elementType?v:$t(r.type,v),m.props=T,O=r.pendingProps,b=m.context,E=o.contextType,typeof E=="object"&&E!==null?E=Lt(E):(E=wt(o)?ar:dt.current,E=Gr(r,E));var B=o.getDerivedStateFromProps;(A=typeof B=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==O||b!==E)&&bf(r,m,a,E),Un=!1,b=r.memoizedState,m.state=b,To(r,a,m,c);var Q=r.memoizedState;v!==O||b!==Q||yt.current||Un?(typeof B=="function"&&(uu(r,o,B,a),Q=r.memoizedState),(T=Un||Rf(r,o,T,a,b,Q,E)||!1)?(A||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,Q,E),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,Q,E)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&b===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&b===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=Q),m.props=a,m.state=Q,m.context=E,a=T):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&b===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&b===t.memoizedState||(r.flags|=1024),a=!1)}return pu(t,r,o,a,h,c)}function pu(t,r,o,a,c,h){Wf(t,r);var m=(r.flags&128)!==0;if(!a&&!m)return c&&Gh(r,o,!1),vn(t,r,h);a=r.stateNode,ky.current=r;var v=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&m?(r.child=Yr(r,t.child,null,h),r.child=Yr(r,null,v,h)):mt(t,r,v,h),r.memoizedState=a.state,c&&Gh(r,o,!0),r.child}function Hf(t){var r=t.stateNode;r.pendingContext?Vh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Vh(t,r.context,!1),Xa(t,r.containerInfo)}function Vf(t,r,o,a,c){return Qr(),Va(c),r.flags|=256,mt(t,r,o,a),r.child}var mu={dehydrated:null,treeContext:null,retryLane:0};function gu(t){return{baseLanes:t,cachePool:null,transitions:null}}function $f(t,r,o){var a=r.pendingProps,c=We.current,h=!1,m=(r.flags&128)!==0,v;if((v=m)||(v=t!==null&&t.memoizedState===null?!1:(c&2)!==0),v?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Le(We,c&1),t===null)return Ha(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(m=a.children,t=a.fallback,h?(a=r.mode,h=r.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=qo(m,a,0,null),t=vr(t,a,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=gu(o),r.memoizedState=mu,t):_u(r,m));if(c=t.memoizedState,c!==null&&(v=c.dehydrated,v!==null))return Iy(t,r,m,a,v,c,o);if(h){h=a.fallback,m=r.mode,c=t.child,v=c.sibling;var E={mode:"hidden",children:a.children};return!(m&1)&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=E,r.deletions=null):(a=$n(c,E),a.subtreeFlags=c.subtreeFlags&14680064),v!==null?h=$n(v,h):(h=vr(h,m,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,m=t.child.memoizedState,m=m===null?gu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,r.memoizedState=mu,a}return h=t.child,t=h.sibling,a=$n(h,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function _u(t,r){return r=qo({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Do(t,r,o,a){return a!==null&&Va(a),Yr(r,t.child,null,o),t=_u(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Iy(t,r,o,a,c,h,m){if(o)return r.flags&256?(r.flags&=-257,a=du(Error(n(422))),Do(t,r,m,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=a.fallback,c=r.mode,a=qo({mode:"visible",children:a.children},c,0,null),h=vr(h,c,m,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,r.mode&1&&Yr(r,t.child,null,m),r.child.memoizedState=gu(m),r.memoizedState=mu,h);if(!(r.mode&1))return Do(t,r,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var v=a.dgst;return a=v,h=Error(n(419)),a=du(h,a,void 0),Do(t,r,m,a)}if(v=(m&t.childLanes)!==0,Et||v){if(a=Je,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,gn(t,c),Kt(a,t,c,-1))}return Ou(),a=du(Error(n(421))),Do(t,r,m,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=Uy.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,Rt=Dn(c.nextSibling),xt=r,ze=!0,Vt=null,t!==null&&(Ot[Dt++]=pn,Ot[Dt++]=mn,Ot[Dt++]=ur,pn=t.id,mn=t.overflow,ur=r),r=_u(r,a.children),r.flags|=4096,r)}function Gf(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),Ka(t.return,r,o)}function vu(t,r,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function qf(t,r,o){var a=r.pendingProps,c=a.revealOrder,h=a.tail;if(mt(t,r,a.children,o),a=We.current,a&2)a=a&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gf(t,o,r);else if(t.tag===19)Gf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Le(We,a),!(r.mode&1))r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&No(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),vu(r,!1,c,o,h);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&No(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}vu(r,!0,o,null,h);break;case"together":vu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Lo(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function vn(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),pr|=r.lanes,!(o&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=$n(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=$n(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function Ty(t,r,o){switch(r.tag){case 3:Hf(r),Qr();break;case 5:lf(r);break;case 1:wt(r.type)&&_o(r);break;case 4:Xa(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;Le(Co,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(Le(We,We.current&1),r.flags|=128,null):o&r.child.childLanes?$f(t,r,o):(Le(We,We.current&1),t=vn(t,r,o),t!==null?t.sibling:null);Le(We,We.current&1);break;case 19:if(a=(o&r.childLanes)!==0,t.flags&128){if(a)return qf(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Le(We,We.current),a)break;return null;case 22:case 23:return r.lanes=0,zf(t,r,o)}return vn(t,r,o)}var Kf,yu,Qf,Yf;Kf=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},yu=function(){},Qf=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,hr(sn.current);var h=null;switch(o){case"input":c=Te(t,c),a=Te(t,a),h=[];break;case"select":c=W({},c,{value:void 0}),a=W({},a,{value:void 0}),h=[];break;case"textarea":c=Xl(t,c),a=Xl(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=po)}Zl(o,a);var m;o=null;for(T in c)if(!a.hasOwnProperty(T)&&c.hasOwnProperty(T)&&c[T]!=null)if(T==="style"){var v=c[T];for(m in v)v.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(l.hasOwnProperty(T)?h||(h=[]):(h=h||[]).push(T,null));for(T in a){var E=a[T];if(v=c!=null?c[T]:void 0,a.hasOwnProperty(T)&&E!==v&&(E!=null||v!=null))if(T==="style")if(v){for(m in v)!v.hasOwnProperty(m)||E&&E.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in E)E.hasOwnProperty(m)&&v[m]!==E[m]&&(o||(o={}),o[m]=E[m])}else o||(h||(h=[]),h.push(T,o)),o=E;else T==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,v=v?v.__html:void 0,E!=null&&v!==E&&(h=h||[]).push(T,E)):T==="children"?typeof E!="string"&&typeof E!="number"||(h=h||[]).push(T,""+E):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(l.hasOwnProperty(T)?(E!=null&&T==="onScroll"&&Ue("scroll",t),h||v===E||(h=[])):(h=h||[]).push(T,E))}o&&(h=h||[]).push("style",o);var T=h;(r.updateQueue=T)&&(r.flags|=4)}},Yf=function(t,r,o,a){o!==a&&(r.flags|=4)};function ls(t,r){if(!ze)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function ft(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function Ny(t,r,o){var a=r.pendingProps;switch(Wa(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(r),null;case 1:return wt(r.type)&&go(),ft(r),null;case 3:return a=r.stateNode,Zr(),je(yt),je(dt),eu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Eo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Vt!==null&&(Pu(Vt),Vt=null))),yu(t,r),ft(r),null;case 5:Ja(r);var c=hr(ns.current);if(o=r.type,t!==null&&r.stateNode!=null)Qf(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return ft(r),null}if(t=hr(sn.current),Eo(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[rn]=r,a[Xi]=h,t=(r.mode&1)!==0,o){case"dialog":Ue("cancel",a),Ue("close",a);break;case"iframe":case"object":case"embed":Ue("load",a);break;case"video":case"audio":for(c=0;c<Ki.length;c++)Ue(Ki[c],a);break;case"source":Ue("error",a);break;case"img":case"image":case"link":Ue("error",a),Ue("load",a);break;case"details":Ue("toggle",a);break;case"input":it(a,h),Ue("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Ue("invalid",a);break;case"textarea":Ad(a,h),Ue("invalid",a)}Zl(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var v=h[m];m==="children"?typeof v=="string"?a.textContent!==v&&(h.suppressHydrationWarning!==!0&&fo(a.textContent,v,t),c=["children",v]):typeof v=="number"&&a.textContent!==""+v&&(h.suppressHydrationWarning!==!0&&fo(a.textContent,v,t),c=["children",""+v]):l.hasOwnProperty(m)&&v!=null&&m==="onScroll"&&Ue("scroll",a)}switch(o){case"input":ct(a),bd(a,h,!0);break;case"textarea":ct(a),Dd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=po)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ld(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[rn]=r,t[Xi]=a,Kf(t,r,!1,!1),r.stateNode=t;e:{switch(m=ea(o,a),o){case"dialog":Ue("cancel",t),Ue("close",t),c=a;break;case"iframe":case"object":case"embed":Ue("load",t),c=a;break;case"video":case"audio":for(c=0;c<Ki.length;c++)Ue(Ki[c],t);c=a;break;case"source":Ue("error",t),c=a;break;case"img":case"image":case"link":Ue("error",t),Ue("load",t),c=a;break;case"details":Ue("toggle",t),c=a;break;case"input":it(t,a),c=Te(t,a),Ue("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=W({},a,{value:void 0}),Ue("invalid",t);break;case"textarea":Ad(t,a),c=Xl(t,a),Ue("invalid",t);break;default:c=a}Zl(o,c),v=c;for(h in v)if(v.hasOwnProperty(h)){var E=v[h];h==="style"?Ud(t,E):h==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&Md(t,E)):h==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&Ri(t,E):typeof E=="number"&&Ri(t,""+E):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?E!=null&&h==="onScroll"&&Ue("scroll",t):E!=null&&Ce(t,h,E,m))}switch(o){case"input":ct(t),bd(t,a,!1);break;case"textarea":ct(t),Dd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+$(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Dr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Dr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=po)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return ft(r),null;case 6:if(t&&r.stateNode!=null)Yf(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=hr(ns.current),hr(sn.current),Eo(r)){if(a=r.stateNode,o=r.memoizedProps,a[rn]=r,(h=a.nodeValue!==o)&&(t=xt,t!==null))switch(t.tag){case 3:fo(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(a.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[rn]=r,r.stateNode=a}return ft(r),null;case 13:if(je(We),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ze&&Rt!==null&&r.mode&1&&!(r.flags&128))Jh(),Qr(),r.flags|=98560,h=!1;else if(h=Eo(r),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[rn]=r}else Qr(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;ft(r),h=!1}else Vt!==null&&(Pu(Vt),Vt=null),h=!0;if(!h)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(t===null||We.current&1?Ye===0&&(Ye=3):Ou())),r.updateQueue!==null&&(r.flags|=4),ft(r),null);case 4:return Zr(),yu(t,r),t===null&&Qi(r.stateNode.containerInfo),ft(r),null;case 10:return qa(r.type._context),ft(r),null;case 17:return wt(r.type)&&go(),ft(r),null;case 19:if(je(We),h=r.memoizedState,h===null)return ft(r),null;if(a=(r.flags&128)!==0,m=h.rendering,m===null)if(a)ls(h,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(m=No(t),m!==null){for(r.flags|=128,ls(h,!1),a=m.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Le(We,We.current&1|2),r.child}t=t.sibling}h.tail!==null&&Ge()>ri&&(r.flags|=128,a=!0,ls(h,!1),r.lanes=4194304)}else{if(!a)if(t=No(m),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ls(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!ze)return ft(r),null}else 2*Ge()-h.renderingStartTime>ri&&o!==1073741824&&(r.flags|=128,a=!0,ls(h,!1),r.lanes=4194304);h.isBackwards?(m.sibling=r.child,r.child=m):(o=h.last,o!==null?o.sibling=m:r.child=m,h.last=m)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Ge(),r.sibling=null,o=We.current,Le(We,a?o&1|2:o&1),r):(ft(r),null);case 22:case 23:return Au(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?Pt&1073741824&&(ft(r),r.subtreeFlags&6&&(r.flags|=8192)):ft(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function xy(t,r){switch(Wa(r),r.tag){case 1:return wt(r.type)&&go(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Zr(),je(yt),je(dt),eu(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return Ja(r),null;case 13:if(je(We),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Qr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return je(We),null;case 4:return Zr(),null;case 10:return qa(r.type._context),null;case 22:case 23:return Au(),null;case 24:return null;default:return null}}var Mo=!1,pt=!1,Ry=typeof WeakSet=="function"?WeakSet:Set,q=null;function ti(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){He(t,r,a)}else o.current=null}function wu(t,r,o){try{o()}catch(a){He(t,r,a)}}var Xf=!1;function Py(t,r){if(Aa=to,t=xh(),ka(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,v=-1,E=-1,T=0,A=0,O=t,b=null;t:for(;;){for(var B;O!==o||c!==0&&O.nodeType!==3||(v=m+c),O!==h||a!==0&&O.nodeType!==3||(E=m+a),O.nodeType===3&&(m+=O.nodeValue.length),(B=O.firstChild)!==null;)b=O,O=B;for(;;){if(O===t)break t;if(b===o&&++T===c&&(v=m),b===h&&++A===a&&(E=m),(B=O.nextSibling)!==null)break;O=b,b=O.parentNode}O=B}o=v===-1||E===-1?null:{start:v,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(Oa={focusedElem:t,selectionRange:o},to=!1,q=r;q!==null;)if(r=q,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,q=t;else for(;q!==null;){r=q;try{var Q=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var J=Q.memoizedProps,qe=Q.memoizedState,k=r.stateNode,S=k.getSnapshotBeforeUpdate(r.elementType===r.type?J:$t(r.type,J),qe);k.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var I=r.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(D){He(r,r.return,D)}if(t=r.sibling,t!==null){t.return=r.return,q=t;break}q=r.return}return Q=Xf,Xf=!1,Q}function as(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&wu(r,o,h)}c=c.next}while(c!==a)}}function Fo(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function Eu(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function Jf(t){var r=t.alternate;r!==null&&(t.alternate=null,Jf(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[rn],delete r[Xi],delete r[Fa],delete r[hy],delete r[fy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zf(t){return t.tag===5||t.tag===3||t.tag===4}function ep(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Su(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=po));else if(a!==4&&(t=t.child,t!==null))for(Su(t,r,o),t=t.sibling;t!==null;)Su(t,r,o),t=t.sibling}function Cu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Cu(t,r,o),t=t.sibling;t!==null;)Cu(t,r,o),t=t.sibling}var st=null,Gt=!1;function zn(t,r,o){for(o=o.child;o!==null;)tp(t,r,o),o=o.sibling}function tp(t,r,o){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Qs,o)}catch{}switch(o.tag){case 5:pt||ti(o,r);case 6:var a=st,c=Gt;st=null,zn(t,r,o),st=a,Gt=c,st!==null&&(Gt?(t=st,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):st.removeChild(o.stateNode));break;case 18:st!==null&&(Gt?(t=st,o=o.stateNode,t.nodeType===8?Ma(t.parentNode,o):t.nodeType===1&&Ma(t,o),zi(t)):Ma(st,o.stateNode));break;case 4:a=st,c=Gt,st=o.stateNode.containerInfo,Gt=!0,zn(t,r,o),st=a,Gt=c;break;case 0:case 11:case 14:case 15:if(!pt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&wu(o,r,m),c=c.next}while(c!==a)}zn(t,r,o);break;case 1:if(!pt&&(ti(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(v){He(o,r,v)}zn(t,r,o);break;case 21:zn(t,r,o);break;case 22:o.mode&1?(pt=(a=pt)||o.memoizedState!==null,zn(t,r,o),pt=a):zn(t,r,o);break;default:zn(t,r,o)}}function np(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Ry),r.forEach(function(a){var c=jy.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function qt(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=r,v=m;e:for(;v!==null;){switch(v.tag){case 5:st=v.stateNode,Gt=!1;break e;case 3:st=v.stateNode.containerInfo,Gt=!0;break e;case 4:st=v.stateNode.containerInfo,Gt=!0;break e}v=v.return}if(st===null)throw Error(n(160));tp(h,m,c),st=null,Gt=!1;var E=c.alternate;E!==null&&(E.return=null),c.return=null}catch(T){He(c,r,T)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)rp(r,t),r=r.sibling}function rp(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(r,t),ln(t),a&4){try{as(3,t,t.return),Fo(3,t)}catch(J){He(t,t.return,J)}try{as(5,t,t.return)}catch(J){He(t,t.return,J)}}break;case 1:qt(r,t),ln(t),a&512&&o!==null&&ti(o,o.return);break;case 5:if(qt(r,t),ln(t),a&512&&o!==null&&ti(o,o.return),t.flags&32){var c=t.stateNode;try{Ri(c,"")}catch(J){He(t,t.return,J)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,v=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{v==="input"&&h.type==="radio"&&h.name!=null&&Wt(c,h),ea(v,m);var T=ea(v,h);for(m=0;m<E.length;m+=2){var A=E[m],O=E[m+1];A==="style"?Ud(c,O):A==="dangerouslySetInnerHTML"?Md(c,O):A==="children"?Ri(c,O):Ce(c,A,O,T)}switch(v){case"input":Or(c,h);break;case"textarea":Od(c,h);break;case"select":var b=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var B=h.value;B!=null?Dr(c,!!h.multiple,B,!1):b!==!!h.multiple&&(h.defaultValue!=null?Dr(c,!!h.multiple,h.defaultValue,!0):Dr(c,!!h.multiple,h.multiple?[]:"",!1))}c[Xi]=h}catch(J){He(t,t.return,J)}}break;case 6:if(qt(r,t),ln(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(J){He(t,t.return,J)}}break;case 3:if(qt(r,t),ln(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{zi(r.containerInfo)}catch(J){He(t,t.return,J)}break;case 4:qt(r,t),ln(t);break;case 13:qt(r,t),ln(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Tu=Ge())),a&4&&np(t);break;case 22:if(A=o!==null&&o.memoizedState!==null,t.mode&1?(pt=(T=pt)||A,qt(r,t),pt=T):qt(r,t),ln(t),a&8192){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!A&&t.mode&1)for(q=t,A=t.child;A!==null;){for(O=q=A;q!==null;){switch(b=q,B=b.child,b.tag){case 0:case 11:case 14:case 15:as(4,b,b.return);break;case 1:ti(b,b.return);var Q=b.stateNode;if(typeof Q.componentWillUnmount=="function"){a=b,o=b.return;try{r=a,Q.props=r.memoizedProps,Q.state=r.memoizedState,Q.componentWillUnmount()}catch(J){He(a,o,J)}}break;case 5:ti(b,b.return);break;case 22:if(b.memoizedState!==null){op(O);continue}}B!==null?(B.return=b,q=B):op(O)}A=A.sibling}e:for(A=null,O=t;;){if(O.tag===5){if(A===null){A=O;try{c=O.stateNode,T?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(v=O.stateNode,E=O.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null,v.style.display=Fd("display",m))}catch(J){He(t,t.return,J)}}}else if(O.tag===6){if(A===null)try{O.stateNode.nodeValue=T?"":O.memoizedProps}catch(J){He(t,t.return,J)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===t)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===t)break e;for(;O.sibling===null;){if(O.return===null||O.return===t)break e;A===O&&(A=null),O=O.return}A===O&&(A=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:qt(r,t),ln(t),a&4&&np(t);break;case 21:break;default:qt(r,t),ln(t)}}function ln(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(Zf(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Ri(c,""),a.flags&=-33);var h=ep(t);Cu(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,v=ep(t);Su(t,v,m);break;default:throw Error(n(161))}}catch(E){He(t,t.return,E)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function by(t,r,o){q=t,ip(t)}function ip(t,r,o){for(var a=(t.mode&1)!==0;q!==null;){var c=q,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||Mo;if(!m){var v=c.alternate,E=v!==null&&v.memoizedState!==null||pt;v=Mo;var T=pt;if(Mo=m,(pt=E)&&!T)for(q=c;q!==null;)m=q,E=m.child,m.tag===22&&m.memoizedState!==null?lp(c):E!==null?(E.return=m,q=E):lp(c);for(;h!==null;)q=h,ip(h),h=h.sibling;q=c,Mo=v,pt=T}sp(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,q=h):sp(t)}}function sp(t){for(;q!==null;){var r=q;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:pt||Fo(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!pt)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:$t(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&of(r,h,a);break;case 3:var m=r.updateQueue;if(m!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}of(r,m,o)}break;case 5:var v=r.stateNode;if(o===null&&r.flags&4){o=v;var E=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var T=r.alternate;if(T!==null){var A=T.memoizedState;if(A!==null){var O=A.dehydrated;O!==null&&zi(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}pt||r.flags&512&&Eu(r)}catch(b){He(r,r.return,b)}}if(r===t){q=null;break}if(o=r.sibling,o!==null){o.return=r.return,q=o;break}q=r.return}}function op(t){for(;q!==null;){var r=q;if(r===t){q=null;break}var o=r.sibling;if(o!==null){o.return=r.return,q=o;break}q=r.return}}function lp(t){for(;q!==null;){var r=q;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Fo(4,r)}catch(E){He(r,o,E)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(E){He(r,c,E)}}var h=r.return;try{Eu(r)}catch(E){He(r,h,E)}break;case 5:var m=r.return;try{Eu(r)}catch(E){He(r,m,E)}}}catch(E){He(r,r.return,E)}if(r===t){q=null;break}var v=r.sibling;if(v!==null){v.return=r.return,q=v;break}q=r.return}}var Ay=Math.ceil,Uo=H.ReactCurrentDispatcher,ku=H.ReactCurrentOwner,Ft=H.ReactCurrentBatchConfig,Ie=0,Je=null,Ke=null,ot=0,Pt=0,ni=Ln(0),Ye=0,us=null,pr=0,jo=0,Iu=0,cs=null,St=null,Tu=0,ri=1/0,yn=null,zo=!1,Nu=null,Wn=null,Wo=!1,Bn=null,Bo=0,ds=0,xu=null,Ho=-1,Vo=0;function gt(){return Ie&6?Ge():Ho!==-1?Ho:Ho=Ge()}function Hn(t){return t.mode&1?Ie&2&&ot!==0?ot&-ot:my.transition!==null?(Vo===0&&(Vo=Zd()),Vo):(t=Pe,t!==0||(t=window.event,t=t===void 0?16:ah(t.type)),t):1}function Kt(t,r,o,a){if(50<ds)throw ds=0,xu=null,Error(n(185));Li(t,o,a),(!(Ie&2)||t!==Je)&&(t===Je&&(!(Ie&2)&&(jo|=o),Ye===4&&Vn(t,ot)),Ct(t,a),o===1&&Ie===0&&!(r.mode&1)&&(ri=Ge()+500,vo&&Fn()))}function Ct(t,r){var o=t.callbackNode;mv(t,r);var a=Js(t,t===Je?ot:0);if(a===0)o!==null&&Yd(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&Yd(o),r===1)t.tag===0?py(up.bind(null,t)):qh(up.bind(null,t)),cy(function(){!(Ie&6)&&Fn()}),o=null;else{switch(eh(a)){case 1:o=la;break;case 4:o=Xd;break;case 16:o=Ks;break;case 536870912:o=Jd;break;default:o=Ks}o=_p(o,ap.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function ap(t,r){if(Ho=-1,Vo=0,Ie&6)throw Error(n(327));var o=t.callbackNode;if(ii()&&t.callbackNode!==o)return null;var a=Js(t,t===Je?ot:0);if(a===0)return null;if(a&30||a&t.expiredLanes||r)r=$o(t,a);else{r=a;var c=Ie;Ie|=2;var h=dp();(Je!==t||ot!==r)&&(yn=null,ri=Ge()+500,gr(t,r));do try{Ly();break}catch(v){cp(t,v)}while(!0);Ga(),Uo.current=h,Ie=c,Ke!==null?r=0:(Je=null,ot=0,r=Ye)}if(r!==0){if(r===2&&(c=aa(t),c!==0&&(a=c,r=Ru(t,c))),r===1)throw o=us,gr(t,0),Vn(t,a),Ct(t,Ge()),o;if(r===6)Vn(t,a);else{if(c=t.current.alternate,!(a&30)&&!Oy(c)&&(r=$o(t,a),r===2&&(h=aa(t),h!==0&&(a=h,r=Ru(t,h))),r===1))throw o=us,gr(t,0),Vn(t,a),Ct(t,Ge()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:_r(t,St,yn);break;case 3:if(Vn(t,a),(a&130023424)===a&&(r=Tu+500-Ge(),10<r)){if(Js(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){gt(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=La(_r.bind(null,t,St,yn),r);break}_r(t,St,yn);break;case 4:if(Vn(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var m=31-Bt(a);h=1<<m,m=r[m],m>c&&(c=m),a&=~h}if(a=c,a=Ge()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Ay(a/1960))-a,10<a){t.timeoutHandle=La(_r.bind(null,t,St,yn),a);break}_r(t,St,yn);break;case 5:_r(t,St,yn);break;default:throw Error(n(329))}}}return Ct(t,Ge()),t.callbackNode===o?ap.bind(null,t):null}function Ru(t,r){var o=cs;return t.current.memoizedState.isDehydrated&&(gr(t,r).flags|=256),t=$o(t,r),t!==2&&(r=St,St=o,r!==null&&Pu(r)),t}function Pu(t){St===null?St=t:St.push.apply(St,t)}function Oy(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!Ht(h(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Vn(t,r){for(r&=~Iu,r&=~jo,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Bt(r),a=1<<o;t[o]=-1,r&=~a}}function up(t){if(Ie&6)throw Error(n(327));ii();var r=Js(t,0);if(!(r&1))return Ct(t,Ge()),null;var o=$o(t,r);if(t.tag!==0&&o===2){var a=aa(t);a!==0&&(r=a,o=Ru(t,a))}if(o===1)throw o=us,gr(t,0),Vn(t,r),Ct(t,Ge()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,_r(t,St,yn),Ct(t,Ge()),null}function bu(t,r){var o=Ie;Ie|=1;try{return t(r)}finally{Ie=o,Ie===0&&(ri=Ge()+500,vo&&Fn())}}function mr(t){Bn!==null&&Bn.tag===0&&!(Ie&6)&&ii();var r=Ie;Ie|=1;var o=Ft.transition,a=Pe;try{if(Ft.transition=null,Pe=1,t)return t()}finally{Pe=a,Ft.transition=o,Ie=r,!(Ie&6)&&Fn()}}function Au(){Pt=ni.current,je(ni)}function gr(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,uy(o)),Ke!==null)for(o=Ke.return;o!==null;){var a=o;switch(Wa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&go();break;case 3:Zr(),je(yt),je(dt),eu();break;case 5:Ja(a);break;case 4:Zr();break;case 13:je(We);break;case 19:je(We);break;case 10:qa(a.type._context);break;case 22:case 23:Au()}o=o.return}if(Je=t,Ke=t=$n(t.current,null),ot=Pt=r,Ye=0,us=null,Iu=jo=pr=0,St=cs=null,dr!==null){for(r=0;r<dr.length;r++)if(o=dr[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}dr=null}return t}function cp(t,r){do{var o=Ke;try{if(Ga(),xo.current=Ao,Ro){for(var a=Be.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Ro=!1}if(fr=0,Xe=Qe=Be=null,rs=!1,is=0,ku.current=null,o===null||o.return===null){Ye=1,us=r,Ke=null;break}e:{var h=t,m=o.return,v=o,E=r;if(r=ot,v.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var T=E,A=v,O=A.tag;if(!(A.mode&1)&&(O===0||O===11||O===15)){var b=A.alternate;b?(A.updateQueue=b.updateQueue,A.memoizedState=b.memoizedState,A.lanes=b.lanes):(A.updateQueue=null,A.memoizedState=null)}var B=Lf(m);if(B!==null){B.flags&=-257,Mf(B,m,v,h,r),B.mode&1&&Df(h,T,r),r=B,E=T;var Q=r.updateQueue;if(Q===null){var J=new Set;J.add(E),r.updateQueue=J}else Q.add(E);break e}else{if(!(r&1)){Df(h,T,r),Ou();break e}E=Error(n(426))}}else if(ze&&v.mode&1){var qe=Lf(m);if(qe!==null){!(qe.flags&65536)&&(qe.flags|=256),Mf(qe,m,v,h,r),Va(ei(E,v));break e}}h=E=ei(E,v),Ye!==4&&(Ye=2),cs===null?cs=[h]:cs.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var k=Af(h,E,r);sf(h,k);break e;case 1:v=E;var S=h.type,I=h.stateNode;if(!(h.flags&128)&&(typeof S.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Wn===null||!Wn.has(I)))){h.flags|=65536,r&=-r,h.lanes|=r;var D=Of(h,v,r);sf(h,D);break e}}h=h.return}while(h!==null)}fp(o)}catch(ee){r=ee,Ke===o&&o!==null&&(Ke=o=o.return);continue}break}while(!0)}function dp(){var t=Uo.current;return Uo.current=Ao,t===null?Ao:t}function Ou(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Je===null||!(pr&268435455)&&!(jo&268435455)||Vn(Je,ot)}function $o(t,r){var o=Ie;Ie|=2;var a=dp();(Je!==t||ot!==r)&&(yn=null,gr(t,r));do try{Dy();break}catch(c){cp(t,c)}while(!0);if(Ga(),Ie=o,Uo.current=a,Ke!==null)throw Error(n(261));return Je=null,ot=0,Ye}function Dy(){for(;Ke!==null;)hp(Ke)}function Ly(){for(;Ke!==null&&!ov();)hp(Ke)}function hp(t){var r=gp(t.alternate,t,Pt);t.memoizedProps=t.pendingProps,r===null?fp(t):Ke=r,ku.current=null}function fp(t){var r=t;do{var o=r.alternate;if(t=r.return,r.flags&32768){if(o=xy(o,r),o!==null){o.flags&=32767,Ke=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,Ke=null;return}}else if(o=Ny(o,r,Pt),o!==null){Ke=o;return}if(r=r.sibling,r!==null){Ke=r;return}Ke=r=t}while(r!==null);Ye===0&&(Ye=5)}function _r(t,r,o){var a=Pe,c=Ft.transition;try{Ft.transition=null,Pe=1,My(t,r,o,a)}finally{Ft.transition=c,Pe=a}return null}function My(t,r,o,a){do ii();while(Bn!==null);if(Ie&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(gv(t,h),t===Je&&(Ke=Je=null,ot=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Wo||(Wo=!0,_p(Ks,function(){return ii(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Ft.transition,Ft.transition=null;var m=Pe;Pe=1;var v=Ie;Ie|=4,ku.current=null,Py(t,o),rp(o,t),ny(Oa),to=!!Aa,Oa=Aa=null,t.current=o,by(o),lv(),Ie=v,Pe=m,Ft.transition=h}else t.current=o;if(Wo&&(Wo=!1,Bn=t,Bo=c),h=t.pendingLanes,h===0&&(Wn=null),cv(o.stateNode),Ct(t,Ge()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(zo)throw zo=!1,t=Nu,Nu=null,t;return Bo&1&&t.tag!==0&&ii(),h=t.pendingLanes,h&1?t===xu?ds++:(ds=0,xu=t):ds=0,Fn(),null}function ii(){if(Bn!==null){var t=eh(Bo),r=Ft.transition,o=Pe;try{if(Ft.transition=null,Pe=16>t?16:t,Bn===null)var a=!1;else{if(t=Bn,Bn=null,Bo=0,Ie&6)throw Error(n(331));var c=Ie;for(Ie|=4,q=t.current;q!==null;){var h=q,m=h.child;if(q.flags&16){var v=h.deletions;if(v!==null){for(var E=0;E<v.length;E++){var T=v[E];for(q=T;q!==null;){var A=q;switch(A.tag){case 0:case 11:case 15:as(8,A,h)}var O=A.child;if(O!==null)O.return=A,q=O;else for(;q!==null;){A=q;var b=A.sibling,B=A.return;if(Jf(A),A===T){q=null;break}if(b!==null){b.return=B,q=b;break}q=B}}}var Q=h.alternate;if(Q!==null){var J=Q.child;if(J!==null){Q.child=null;do{var qe=J.sibling;J.sibling=null,J=qe}while(J!==null)}}q=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,q=m;else e:for(;q!==null;){if(h=q,h.flags&2048)switch(h.tag){case 0:case 11:case 15:as(9,h,h.return)}var k=h.sibling;if(k!==null){k.return=h.return,q=k;break e}q=h.return}}var S=t.current;for(q=S;q!==null;){m=q;var I=m.child;if(m.subtreeFlags&2064&&I!==null)I.return=m,q=I;else e:for(m=S;q!==null;){if(v=q,v.flags&2048)try{switch(v.tag){case 0:case 11:case 15:Fo(9,v)}}catch(ee){He(v,v.return,ee)}if(v===m){q=null;break e}var D=v.sibling;if(D!==null){D.return=v.return,q=D;break e}q=v.return}}if(Ie=c,Fn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Qs,t)}catch{}a=!0}return a}finally{Pe=o,Ft.transition=r}}return!1}function pp(t,r,o){r=ei(o,r),r=Af(t,r,1),t=jn(t,r,1),r=gt(),t!==null&&(Li(t,1,r),Ct(t,r))}function He(t,r,o){if(t.tag===3)pp(t,t,o);else for(;r!==null;){if(r.tag===3){pp(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Wn===null||!Wn.has(a))){t=ei(o,t),t=Of(r,t,1),r=jn(r,t,1),t=gt(),r!==null&&(Li(r,1,t),Ct(r,t));break}}r=r.return}}function Fy(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=gt(),t.pingedLanes|=t.suspendedLanes&o,Je===t&&(ot&o)===o&&(Ye===4||Ye===3&&(ot&130023424)===ot&&500>Ge()-Tu?gr(t,0):Iu|=o),Ct(t,r)}function mp(t,r){r===0&&(t.mode&1?(r=Xs,Xs<<=1,!(Xs&130023424)&&(Xs=4194304)):r=1);var o=gt();t=gn(t,r),t!==null&&(Li(t,r,o),Ct(t,o))}function Uy(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),mp(t,o)}function jy(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),mp(t,o)}var gp;gp=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||yt.current)Et=!0;else{if(!(t.lanes&o)&&!(r.flags&128))return Et=!1,Ty(t,r,o);Et=!!(t.flags&131072)}else Et=!1,ze&&r.flags&1048576&&Kh(r,wo,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Lo(t,r),t=r.pendingProps;var c=Gr(r,dt.current);Jr(r,o),c=ru(null,r,a,t,c,o);var h=iu();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,wt(a)?(h=!0,_o(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Ya(r),c.updater=Oo,r.stateNode=c,c._reactInternals=r,cu(r,a,t,o),r=pu(null,r,a,!0,h,o)):(r.tag=0,ze&&h&&za(r),mt(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(Lo(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=Wy(a),t=$t(a,t),c){case 0:r=fu(null,r,a,t,o);break e;case 1:r=Bf(null,r,a,t,o);break e;case 11:r=Ff(null,r,a,t,o);break e;case 14:r=Uf(null,r,a,$t(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:$t(a,c),fu(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:$t(a,c),Bf(t,r,a,c,o);case 3:e:{if(Hf(r),t===null)throw Error(n(387));a=r.pendingProps,h=r.memoizedState,c=h.element,rf(t,r),To(r,a,null,o);var m=r.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=ei(Error(n(423)),r),r=Vf(t,r,a,o,c);break e}else if(a!==c){c=ei(Error(n(424)),r),r=Vf(t,r,a,o,c);break e}else for(Rt=Dn(r.stateNode.containerInfo.firstChild),xt=r,ze=!0,Vt=null,o=tf(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Qr(),a===c){r=vn(t,r,o);break e}mt(t,r,a,o)}r=r.child}return r;case 5:return lf(r),t===null&&Ha(r),a=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,Da(a,c)?m=null:h!==null&&Da(a,h)&&(r.flags|=32),Wf(t,r),mt(t,r,m,o),r.child;case 6:return t===null&&Ha(r),null;case 13:return $f(t,r,o);case 4:return Xa(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=Yr(r,null,a,o):mt(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:$t(a,c),Ff(t,r,a,c,o);case 7:return mt(t,r,r.pendingProps,o),r.child;case 8:return mt(t,r,r.pendingProps.children,o),r.child;case 12:return mt(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,h=r.memoizedProps,m=c.value,Le(Co,a._currentValue),a._currentValue=m,h!==null)if(Ht(h.value,m)){if(h.children===c.children&&!yt.current){r=vn(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var v=h.dependencies;if(v!==null){m=h.child;for(var E=v.firstContext;E!==null;){if(E.context===a){if(h.tag===1){E=_n(-1,o&-o),E.tag=2;var T=h.updateQueue;if(T!==null){T=T.shared;var A=T.pending;A===null?E.next=E:(E.next=A.next,A.next=E),T.pending=E}}h.lanes|=o,E=h.alternate,E!==null&&(E.lanes|=o),Ka(h.return,o,r),v.lanes|=o;break}E=E.next}}else if(h.tag===10)m=h.type===r.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,v=m.alternate,v!==null&&(v.lanes|=o),Ka(m,o,r),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===r){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}mt(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,Jr(r,o),c=Lt(c),a=a(c),r.flags|=1,mt(t,r,a,o),r.child;case 14:return a=r.type,c=$t(a,r.pendingProps),c=$t(a.type,c),Uf(t,r,a,c,o);case 15:return jf(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:$t(a,c),Lo(t,r),r.tag=1,wt(a)?(t=!0,_o(r)):t=!1,Jr(r,o),Pf(r,a,c),cu(r,a,c,o),pu(null,r,a,!0,t,o);case 19:return qf(t,r,o);case 22:return zf(t,r,o)}throw Error(n(156,r.tag))};function _p(t,r){return Qd(t,r)}function zy(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,r,o,a){return new zy(t,r,o,a)}function Du(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wy(t){if(typeof t=="function")return Du(t)?1:0;if(t!=null){if(t=t.$$typeof,t===M)return 11;if(t===we)return 14}return 2}function $n(t,r){var o=t.alternate;return o===null?(o=Ut(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Go(t,r,o,a,c,h){var m=2;if(a=t,typeof t=="function")Du(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case Y:return vr(o.children,c,h,r);case K:m=8,c|=8;break;case ne:return t=Ut(12,o,r,c|2),t.elementType=ne,t.lanes=h,t;case X:return t=Ut(13,o,r,c),t.elementType=X,t.lanes=h,t;case G:return t=Ut(19,o,r,c),t.elementType=G,t.lanes=h,t;case Ee:return qo(o,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pe:m=10;break e;case V:m=9;break e;case M:m=11;break e;case we:m=14;break e;case Re:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=Ut(m,o,r,c),r.elementType=t,r.type=a,r.lanes=h,r}function vr(t,r,o,a){return t=Ut(7,t,a,r),t.lanes=o,t}function qo(t,r,o,a){return t=Ut(22,t,a,r),t.elementType=Ee,t.lanes=o,t.stateNode={isHidden:!1},t}function Lu(t,r,o){return t=Ut(6,t,null,r),t.lanes=o,t}function Mu(t,r,o){return r=Ut(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function By(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ua(0),this.expirationTimes=ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Fu(t,r,o,a,c,h,m,v,E){return t=new By(t,r,o,v,E),r===1?(r=1,h===!0&&(r|=8)):r=0,h=Ut(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ya(h),t}function Hy(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function vp(t){if(!t)return Mn;t=t._reactInternals;e:{if(or(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(wt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(wt(o))return $h(t,o,r)}return r}function yp(t,r,o,a,c,h,m,v,E){return t=Fu(o,a,!0,t,c,h,m,v,E),t.context=vp(null),o=t.current,a=gt(),c=Hn(o),h=_n(a,c),h.callback=r??null,jn(o,h,c),t.current.lanes=c,Li(t,c,a),Ct(t,a),t}function Ko(t,r,o,a){var c=r.current,h=gt(),m=Hn(c);return o=vp(o),r.context===null?r.context=o:r.pendingContext=o,r=_n(h,m),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=jn(c,r,m),t!==null&&(Kt(t,c,m,h),Io(t,c,m)),m}function Qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wp(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function Uu(t,r){wp(t,r),(t=t.alternate)&&wp(t,r)}var Ep=typeof reportError=="function"?reportError:function(t){console.error(t)};function ju(t){this._internalRoot=t}Yo.prototype.render=ju.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Ko(t,r,null,null)},Yo.prototype.unmount=ju.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;mr(function(){Ko(null,t,null,null)}),r[hn]=null}};function Yo(t){this._internalRoot=t}Yo.prototype.unstable_scheduleHydration=function(t){if(t){var r=rh();t={blockedOn:null,target:t,priority:r};for(var o=0;o<bn.length&&r!==0&&r<bn[o].priority;o++);bn.splice(o,0,t),o===0&&oh(t)}};function zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function Vy(t,r,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var T=Qo(m);h.call(T)}}var m=yp(r,a,t,0,null,!1,!1,"",Sp);return t._reactRootContainer=m,t[hn]=m.current,Qi(t.nodeType===8?t.parentNode:t),mr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var v=a;a=function(){var T=Qo(E);v.call(T)}}var E=Fu(t,0,!1,null,null,!1,!1,"",Sp);return t._reactRootContainer=E,t[hn]=E.current,Qi(t.nodeType===8?t.parentNode:t),mr(function(){Ko(r,E,o,a)}),E}function Jo(t,r,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var v=c;c=function(){var E=Qo(m);v.call(E)}}Ko(r,m,t,c)}else m=Vy(o,r,t,c,a);return Qo(m)}th=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Di(r.pendingLanes);o!==0&&(ca(r,o|1),Ct(r,Ge()),!(Ie&6)&&(ri=Ge()+500,Fn()))}break;case 13:mr(function(){var a=gn(t,1);if(a!==null){var c=gt();Kt(a,t,1,c)}}),Uu(t,1)}},da=function(t){if(t.tag===13){var r=gn(t,134217728);if(r!==null){var o=gt();Kt(r,t,134217728,o)}Uu(t,134217728)}},nh=function(t){if(t.tag===13){var r=Hn(t),o=gn(t,r);if(o!==null){var a=gt();Kt(o,t,r,a)}Uu(t,r)}},rh=function(){return Pe},ih=function(t,r){var o=Pe;try{return Pe=t,r()}finally{Pe=o}},ra=function(t,r,o){switch(r){case"input":if(Or(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=mo(a);if(!c)throw Error(n(90));At(a),Or(a,c)}}}break;case"textarea":Od(t,o);break;case"select":r=o.value,r!=null&&Dr(t,!!o.multiple,r,!1)}},Bd=bu,Hd=mr;var $y={usingClientEntryPoint:!1,Events:[Ji,Vr,mo,zd,Wd,bu]},hs={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gy={bundleType:hs.bundleType,version:hs.version,rendererPackageName:hs.rendererPackageName,rendererConfig:hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qd(t),t===null?null:t.stateNode},findFiberByHostInstance:hs.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Qs=Zo.inject(Gy),nn=Zo}catch{}}return kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y,kt.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zu(r))throw Error(n(200));return Hy(t,r,null,o)},kt.createRoot=function(t,r){if(!zu(t))throw Error(n(299));var o=!1,a="",c=Ep;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=Fu(t,1,!1,null,null,o,!1,a,c),t[hn]=r.current,Qi(t.nodeType===8?t.parentNode:t),new ju(r)},kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=qd(r),t=t===null?null:t.stateNode,t},kt.flushSync=function(t){return mr(t)},kt.hydrate=function(t,r,o){if(!Xo(r))throw Error(n(200));return Jo(null,t,r,!0,o)},kt.hydrateRoot=function(t,r,o){if(!zu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=Ep;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),r=yp(r,null,t,1,o??null,c,!1,h,m),t[hn]=r.current,Qi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new Yo(r)},kt.render=function(t,r,o){if(!Xo(r))throw Error(n(200));return Jo(null,t,r,!1,o)},kt.unmountComponentAtNode=function(t){if(!Xo(t))throw Error(n(40));return t._reactRootContainer?(mr(function(){Jo(null,null,t,!1,function(){t._reactRootContainer=null,t[hn]=null})}),!0):!1},kt.unstable_batchedUpdates=bu,kt.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!Xo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Jo(t,r,o,!1,a)},kt.version="18.3.1-next-f1338f8080-20240426",kt}var Pp;function e0(){if(Pp)return Hu.exports;Pp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Hu.exports=Zy(),Hu.exports}var bp;function t0(){if(bp)return tl;bp=1;var i=e0();return tl.createRoot=i.createRoot,tl.hydrateRoot=i.hydrateRoot,tl}var n0=t0();const r0="modulepreload",i0=function(i){return"/portfolio_web/"+i},Ap={},zt=function(e,n,s){let l=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));l=Promise.allSettled(n.map(p=>{if(p=i0(p),p in Ap)return;Ap[p]=!0;const g=p.endsWith(".css"),w=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${w}`))return;const _=document.createElement("link");if(_.rel=g?"stylesheet":r0,g||(_.as="script"),_.crossOrigin="",_.href=p,f&&_.setAttribute("nonce",f),document.head.appendChild(_),g)return new Promise((y,N)=>{_.addEventListener("load",y),_.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(d){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=d,window.dispatchEvent(f),!f.defaultPrevented)throw d}return l.then(d=>{for(const f of d||[])f.status==="rejected"&&u(f.reason);return e().catch(u)})},$m="/portfolio_web/assets/myimage-Dltf4R12.webp",lt={darkBg:"#000000",darkCard:"#111111",accent:"#ffffff",secondaryAccent:"#aaaaaa",borderColor:"#333333",textPrimary:"#ffffff",textSecondary:"#888888"},s0=({onComplete:i})=>{const[e,n]=de.useState(0),[s,l]=de.useState(!1);return de.useEffect(()=>{const u=setInterval(()=>{n(d=>d>=100?(clearInterval(u),l(!0),setTimeout(()=>{i()},800),100):d+Math.random()*15+5)},100);return()=>clearInterval(u)},[i]),x.jsxs("div",{className:`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-1000 ${s?"opacity-0 pointer-events-none":"opacity-100"}`,style:{background:`radial-gradient(circle at 50% 50%, ${lt.darkCard} 0%, ${lt.darkBg} 100%)`},children:[x.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`repeating-linear-gradient(0deg, ${lt.borderColor}, ${lt.borderColor} 1px, transparent 1px, transparent 100px), repeating-linear-gradient(90deg, ${lt.borderColor}, ${lt.borderColor} 1px, transparent 1px, transparent 100px)`}}),x.jsxs("div",{className:"relative z-10 flex flex-col items-center space-y-10",children:[x.jsxs("div",{className:"relative",children:[x.jsx("div",{className:"absolute -inset-10 animate-spin-slow",style:{border:`1px dashed ${lt.secondaryAccent}`,borderRadius:"50%"}}),x.jsx("div",{className:"absolute -inset-12 animate-spin-slower",style:{border:`1px solid ${lt.borderColor}`,borderRadius:"50%",transform:"rotate(45deg)"}}),x.jsx("div",{className:"relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center animate-float-no-scale",style:{boxShadow:`0 0 30px ${lt.accent}15`,borderRadius:"50%",transform:"scale(1)"},children:x.jsx("img",{src:$m,alt:"Loading...",className:"rounded-full w-full h-full object-contain",style:{}})})]}),x.jsxs("div",{className:"text-center space-y-6",children:[x.jsxs("h2",{className:"text-xl sm:text-3xl font-light tracking-[0.4em] uppercase",style:{color:lt.textPrimary},children:[x.jsx("span",{className:"opacity-75",children:"Loading"}),x.jsx("span",{className:"ml-1 font-bold opacity-100",children:"Portfolio"})]}),x.jsxs("div",{className:"w-64 sm:w-96 mx-auto",children:[x.jsxs("div",{className:"flex justify-between items-center mb-1",children:[x.jsx("span",{className:"text-xs tracking-widest uppercase",style:{color:lt.textSecondary},children:"Data Integrity Check"}),x.jsxs("span",{className:"text-sm font-mono",style:{color:lt.accent},children:[Math.round(e),"%"]})]}),x.jsxs("div",{className:"relative h-1 overflow-hidden",style:{backgroundColor:lt.borderColor},children:[x.jsx("div",{className:"absolute left-0 top-0 h-full transition-all duration-300 ease-out",style:{width:`${e}%`,backgroundColor:lt.accent},children:x.jsx("div",{className:"absolute inset-0 animate-shine",style:{background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)"}})}),x.jsx("div",{className:"absolute top-1/2 transform -translate-y-1/2 h-4 blur-md transition-all duration-300",style:{width:`${e}%`,left:0,backgroundColor:`${lt.accent}10`}})]})]})]}),x.jsxs("div",{className:"flex space-x-3 mt-4",children:[x.jsx("div",{className:"w-3 h-3 border-2 border-white animate-spin-dot",style:{animationDelay:"0ms"}}),x.jsx("div",{className:"w-3 h-3 border-2 border-white animate-spin-dot",style:{animationDelay:"150ms",transform:"rotate(45deg)"}}),x.jsx("div",{className:"w-3 h-3 border-2 border-white animate-spin-dot",style:{animationDelay:"300ms"}})]})]}),s&&x.jsx("div",{className:"absolute inset-0 animate-pulse-flash",style:{background:`radial-gradient(circle, ${lt.accent}20, ${lt.darkBg} 60%)`}}),x.jsx("style",{children:`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
            from { transform: rotate(45deg); }
            to { transform: rotate(405deg); }
        }
        @keyframes spin-dot {
            0%, 100% { transform: rotate(0deg); opacity: 1; }
            50% { transform: rotate(180deg); opacity: 0.5; }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
        }
        @keyframes float-no-scale { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-8px); } 
        }
        @keyframes pulse-flash {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }

        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-spin-slower { animation: spin-slower 12s linear infinite; }
        .animate-spin-dot { animation: spin-dot 1.5s ease-in-out infinite; }
        .animate-shine { animation: shine 2s ease-in-out infinite; }
        .animate-float-no-scale { animation: float-no-scale 6s ease-in-out infinite; }
        .animate-pulse-flash { animation: pulse-flash 0.8s ease-out; }
      `})]})};var sl={exports:{}},o0=sl.exports,Op;function l0(){return Op||(Op=1,function(i,e){(function(n,s){i.exports=s()})(o0,function(){return function(n){function s(u){if(l[u])return l[u].exports;var d=l[u]={exports:{},id:u,loaded:!1};return n[u].call(d.exports,d,d.exports,s),d.loaded=!0,d.exports}var l={};return s.m=n,s.c=l,s.p="dist/",s(0)}([function(n,s,l){function u(G){return G&&G.__esModule?G:{default:G}}var d=Object.assign||function(G){for(var we=1;we<arguments.length;we++){var Re=arguments[we];for(var Ee in Re)Object.prototype.hasOwnProperty.call(Re,Ee)&&(G[Ee]=Re[Ee])}return G},f=l(1),p=(u(f),l(6)),g=u(p),w=l(7),_=u(w),y=l(8),N=u(y),P=l(9),j=u(P),z=l(10),ke=u(z),ye=l(11),Ce=u(ye),H=l(14),me=u(H),L=[],Y=!1,K={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},ne=function(){var G=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(G&&(Y=!0),Y)return L=(0,Ce.default)(L,K),(0,ke.default)(L,K.once),L},pe=function(){L=(0,me.default)(),ne()},V=function(){L.forEach(function(G,we){G.node.removeAttribute("data-aos"),G.node.removeAttribute("data-aos-easing"),G.node.removeAttribute("data-aos-duration"),G.node.removeAttribute("data-aos-delay")})},M=function(G){return G===!0||G==="mobile"&&j.default.mobile()||G==="phone"&&j.default.phone()||G==="tablet"&&j.default.tablet()||typeof G=="function"&&G()===!0},X=function(G){K=d(K,G),L=(0,me.default)();var we=document.all&&!window.atob;return M(K.disable)||we?V():(K.disableMutationObserver||N.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),K.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",K.easing),document.querySelector("body").setAttribute("data-aos-duration",K.duration),document.querySelector("body").setAttribute("data-aos-delay",K.delay),K.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?ne(!0):K.startEvent==="load"?window.addEventListener(K.startEvent,function(){ne(!0)}):document.addEventListener(K.startEvent,function(){ne(!0)}),window.addEventListener("resize",(0,_.default)(ne,K.debounceDelay,!0)),window.addEventListener("orientationchange",(0,_.default)(ne,K.debounceDelay,!0)),window.addEventListener("scroll",(0,g.default)(function(){(0,ke.default)(L,K.once)},K.throttleDelay)),K.disableMutationObserver||N.default.ready("[data-aos]",pe),L)};n.exports={init:X,refresh:ne,refreshHard:pe}},function(n,s){},,,,,function(n,s){(function(l){function u(M,X,G){function we(Te){var it=re,Wt=he;return re=he=void 0,be=Te,oe=M.apply(Wt,it)}function Re(Te){return be=Te,$=setTimeout(Z,X),ct?we(Te):oe}function Ee(Te){var it=Te-ae,Wt=Te-be,Or=X-it;return At?pe(Or,fe-Wt):Or}function U(Te){var it=Te-ae,Wt=Te-be;return ae===void 0||it>=X||it<0||At&&Wt>=fe}function Z(){var Te=V();return U(Te)?W(Te):void($=setTimeout(Z,Ee(Te)))}function W(Te){return $=void 0,Ae&&re?we(Te):(re=he=void 0,oe)}function C(){$!==void 0&&clearTimeout($),be=0,re=ae=he=$=void 0}function R(){return $===void 0?oe:W(V())}function te(){var Te=V(),it=U(Te);if(re=arguments,he=this,ae=Te,it){if($===void 0)return Re(ae);if(At)return $=setTimeout(Z,X),we(ae)}return $===void 0&&($=setTimeout(Z,X)),oe}var re,he,fe,oe,$,ae,be=0,ct=!1,At=!1,Ae=!0;if(typeof M!="function")throw new TypeError(y);return X=w(X)||0,f(G)&&(ct=!!G.leading,At="maxWait"in G,fe=At?ne(w(G.maxWait)||0,X):fe,Ae="trailing"in G?!!G.trailing:Ae),te.cancel=C,te.flush=R,te}function d(M,X,G){var we=!0,Re=!0;if(typeof M!="function")throw new TypeError(y);return f(G)&&(we="leading"in G?!!G.leading:we,Re="trailing"in G?!!G.trailing:Re),u(M,X,{leading:we,maxWait:X,trailing:Re})}function f(M){var X=typeof M>"u"?"undefined":_(M);return!!M&&(X=="object"||X=="function")}function p(M){return!!M&&(typeof M>"u"?"undefined":_(M))=="object"}function g(M){return(typeof M>"u"?"undefined":_(M))=="symbol"||p(M)&&K.call(M)==P}function w(M){if(typeof M=="number")return M;if(g(M))return N;if(f(M)){var X=typeof M.valueOf=="function"?M.valueOf():M;M=f(X)?X+"":X}if(typeof M!="string")return M===0?M:+M;M=M.replace(j,"");var G=ke.test(M);return G||ye.test(M)?Ce(M.slice(2),G?2:8):z.test(M)?N:+M}var _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},y="Expected a function",N=NaN,P="[object Symbol]",j=/^\s+|\s+$/g,z=/^[-+]0x[0-9a-f]+$/i,ke=/^0b[01]+$/i,ye=/^0o[0-7]+$/i,Ce=parseInt,H=(typeof l>"u"?"undefined":_(l))=="object"&&l&&l.Object===Object&&l,me=(typeof self>"u"?"undefined":_(self))=="object"&&self&&self.Object===Object&&self,L=H||me||Function("return this")(),Y=Object.prototype,K=Y.toString,ne=Math.max,pe=Math.min,V=function(){return L.Date.now()};n.exports=d}).call(s,function(){return this}())},function(n,s){(function(l){function u(V,M,X){function G(Ae){var Te=te,it=re;return te=re=void 0,ae=Ae,fe=V.apply(it,Te)}function we(Ae){return ae=Ae,oe=setTimeout(U,M),be?G(Ae):fe}function Re(Ae){var Te=Ae-$,it=Ae-ae,Wt=M-Te;return ct?ne(Wt,he-it):Wt}function Ee(Ae){var Te=Ae-$,it=Ae-ae;return $===void 0||Te>=M||Te<0||ct&&it>=he}function U(){var Ae=pe();return Ee(Ae)?Z(Ae):void(oe=setTimeout(U,Re(Ae)))}function Z(Ae){return oe=void 0,At&&te?G(Ae):(te=re=void 0,fe)}function W(){oe!==void 0&&clearTimeout(oe),ae=0,te=$=re=oe=void 0}function C(){return oe===void 0?fe:Z(pe())}function R(){var Ae=pe(),Te=Ee(Ae);if(te=arguments,re=this,$=Ae,Te){if(oe===void 0)return we($);if(ct)return oe=setTimeout(U,M),G($)}return oe===void 0&&(oe=setTimeout(U,M)),fe}var te,re,he,fe,oe,$,ae=0,be=!1,ct=!1,At=!0;if(typeof V!="function")throw new TypeError(_);return M=g(M)||0,d(X)&&(be=!!X.leading,ct="maxWait"in X,he=ct?K(g(X.maxWait)||0,M):he,At="trailing"in X?!!X.trailing:At),R.cancel=W,R.flush=C,R}function d(V){var M=typeof V>"u"?"undefined":w(V);return!!V&&(M=="object"||M=="function")}function f(V){return!!V&&(typeof V>"u"?"undefined":w(V))=="object"}function p(V){return(typeof V>"u"?"undefined":w(V))=="symbol"||f(V)&&Y.call(V)==N}function g(V){if(typeof V=="number")return V;if(p(V))return y;if(d(V)){var M=typeof V.valueOf=="function"?V.valueOf():V;V=d(M)?M+"":M}if(typeof V!="string")return V===0?V:+V;V=V.replace(P,"");var X=z.test(V);return X||ke.test(V)?ye(V.slice(2),X?2:8):j.test(V)?y:+V}var w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(V){return typeof V}:function(V){return V&&typeof Symbol=="function"&&V.constructor===Symbol&&V!==Symbol.prototype?"symbol":typeof V},_="Expected a function",y=NaN,N="[object Symbol]",P=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,ke=/^0o[0-7]+$/i,ye=parseInt,Ce=(typeof l>"u"?"undefined":w(l))=="object"&&l&&l.Object===Object&&l,H=(typeof self>"u"?"undefined":w(self))=="object"&&self&&self.Object===Object&&self,me=Ce||H||Function("return this")(),L=Object.prototype,Y=L.toString,K=Math.max,ne=Math.min,pe=function(){return me.Date.now()};n.exports=u}).call(s,function(){return this}())},function(n,s){function l(w){var _=void 0,y=void 0;for(_=0;_<w.length;_+=1)if(y=w[_],y.dataset&&y.dataset.aos||y.children&&l(y.children))return!0;return!1}function u(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function d(){return!!u()}function f(w,_){var y=window.document,N=u(),P=new N(p);g=_,P.observe(y.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function p(w){w&&w.forEach(function(_){var y=Array.prototype.slice.call(_.addedNodes),N=Array.prototype.slice.call(_.removedNodes),P=y.concat(N);if(l(P))return g()})}Object.defineProperty(s,"__esModule",{value:!0});var g=function(){};s.default={isSupported:d,ready:f}},function(n,s){function l(y,N){if(!(y instanceof N))throw new TypeError("Cannot call a class as a function")}function u(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var d=function(){function y(N,P){for(var j=0;j<P.length;j++){var z=P[j];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(N,z.key,z)}}return function(N,P,j){return P&&y(N.prototype,P),j&&y(N,j),N}}(),f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,g=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,_=function(){function y(){l(this,y)}return d(y,[{key:"phone",value:function(){var N=u();return!(!f.test(N)&&!p.test(N.substr(0,4)))}},{key:"mobile",value:function(){var N=u();return!(!g.test(N)&&!w.test(N.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),y}();s.default=new _},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(d,f,p){var g=d.node.getAttribute("data-aos-once");f>d.position?d.node.classList.add("aos-animate"):typeof g<"u"&&(g==="false"||!p&&g!=="true")&&d.node.classList.remove("aos-animate")},u=function(d,f){var p=window.pageYOffset,g=window.innerHeight;d.forEach(function(w,_){l(w,g+p,f)})};s.default=u},function(n,s,l){function u(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(s,"__esModule",{value:!0});var d=l(12),f=u(d),p=function(g,w){return g.forEach(function(_,y){_.node.classList.add("aos-init"),_.position=(0,f.default)(_.node,w.offset)}),g};s.default=p},function(n,s,l){function u(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(s,"__esModule",{value:!0});var d=l(13),f=u(d),p=function(g,w){var _=0,y=0,N=window.innerHeight,P={offset:g.getAttribute("data-aos-offset"),anchor:g.getAttribute("data-aos-anchor"),anchorPlacement:g.getAttribute("data-aos-anchor-placement")};switch(P.offset&&!isNaN(P.offset)&&(y=parseInt(P.offset)),P.anchor&&document.querySelectorAll(P.anchor)&&(g=document.querySelectorAll(P.anchor)[0]),_=(0,f.default)(g).top,P.anchorPlacement){case"top-bottom":break;case"center-bottom":_+=g.offsetHeight/2;break;case"bottom-bottom":_+=g.offsetHeight;break;case"top-center":_+=N/2;break;case"bottom-center":_+=N/2+g.offsetHeight;break;case"center-center":_+=N/2+g.offsetHeight/2;break;case"top-top":_+=N;break;case"bottom-top":_+=g.offsetHeight+N;break;case"center-top":_+=g.offsetHeight/2+N}return P.anchorPlacement||P.offset||isNaN(w)||(y=w),_+y};s.default=p},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(u){for(var d=0,f=0;u&&!isNaN(u.offsetLeft)&&!isNaN(u.offsetTop);)d+=u.offsetLeft-(u.tagName!="BODY"?u.scrollLeft:0),f+=u.offsetTop-(u.tagName!="BODY"?u.scrollTop:0),u=u.offsetParent;return{top:f,left:d}};s.default=l},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(u){return u=u||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(u,function(d){return{node:d}})};s.default=l}])})}(sl)),sl.exports}var a0=l0();const u0=Pc(a0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gm=(...i)=>i.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var d0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=de.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...f},p)=>de.createElement("svg",{ref:p,...d0,width:e,height:e,stroke:i,strokeWidth:s?Number(n)*24/Number(e):n,className:Gm("lucide",l),...f},[...d.map(([g,w])=>de.createElement(g,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=(i,e)=>{const n=de.forwardRef(({className:s,...l},u)=>de.createElement(h0,{ref:u,iconNode:e,className:Gm(`lucide-${c0(i)}`,s),...l}));return n.displayName=`${i}`,n};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],p0=tn("Award",f0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],g0=tn("Book",m0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],v0=tn("Briefcase",_0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],w0=tn("House",y0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],S0=tn("Mail",E0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]],k0=tn("MessageSquareQuote",C0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]],T0=tn("MonitorSmartphone",I0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],x0=tn("Paintbrush",N0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],P0=tn("Palette",R0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Dp=tn("Search",b0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],O0=tn("User",A0),D0=()=>{};var Lp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=function(i,e){if(!i)throw wi(e)},wi=function(i){return new Error("Firebase Database ("+qm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},L0=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],f=i[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,f=d?i[l+1]:0,p=l+2<i.length,g=p?i[l+2]:0,w=u>>2,_=(u&3)<<4|f>>4;let y=(f&15)<<2|g>>6,N=g&63;p||(N=64,d||(y=64)),s.push(n[w],n[_],n[y],n[N])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Km(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):L0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],f=l<i.length?n[i.charAt(l)]:0;++l;const g=l<i.length?n[i.charAt(l)]:64;++l;const _=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||f==null||g==null||_==null)throw new M0;const y=u<<2|f>>4;if(s.push(y),g!==64){const N=f<<4&240|g>>2;if(s.push(N),_!==64){const P=g<<6&192|_;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class M0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qm=function(i){const e=Km(i);return Ac.encodeByteArray(e,!0)},dl=function(i){return Qm(i).replace(/\./g,"")},hl=function(i){try{return Ac.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(i){return Ym(void 0,i)}function Ym(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!U0(n)||(i[n]=Ym(i[n],e[n]));return i}function U0(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=()=>j0().__FIREBASE_DEFAULTS__,W0=()=>{if(typeof process>"u"||typeof Lp>"u")return;const i=Lp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},B0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&hl(i[1]);return e&&JSON.parse(e)},Oc=()=>{try{return D0()||z0()||W0()||B0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Xm=i=>{var e,n;return(n=(e=Oc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},H0=i=>{const e=Xm(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Jm=()=>{var i;return(i=Oc())===null||i===void 0?void 0:i.config},Zm=i=>{var e;return(e=Oc())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(i){return i.endsWith(".cloudworkstations.dev")}async function eg(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[dl(JSON.stringify(n)),dl(JSON.stringify(d)),""].join(".")}const ys={};function $0(){const i={prod:[],emulator:[]};for(const e of Object.keys(ys))ys[e]?i.emulator.push(e):i.prod.push(e);return i}function G0(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let Mp=!1;function tg(i,e){if(typeof window>"u"||typeof document>"u"||!Ei(window.location.host)||ys[i]===e||ys[i]||Mp)return;ys[i]=e;function n(y){return`__firebase__banner__${y}`}const s="__firebase__banner",u=$0().prod.length>0;function d(){const y=document.getElementById(s);y&&y.remove()}function f(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function p(y,N){y.setAttribute("width","24"),y.setAttribute("id",N),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function g(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Mp=!0,d()},y}function w(y,N){y.setAttribute("id",N),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function _(){const y=G0(s),N=n("text"),P=document.getElementById(N)||document.createElement("span"),j=n("learnmore"),z=document.getElementById(j)||document.createElement("a"),ke=n("preprendIcon"),ye=document.getElementById(ke)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const Ce=y.element;f(Ce),w(z,j);const H=g();p(ye,ke),Ce.append(ye,P,z,H),document.body.appendChild(Ce)}u?(P.innerText="Preview backend disconnected.",ye.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ye.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function q0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function K0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ng(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Q0(){const i=vt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function rg(){return qm.NODE_ADMIN===!0}function Y0(){try{return typeof indexedDB=="object"}catch{return!1}}function X0(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0="FirebaseError";class ir extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=J0,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?Z0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new ir(l,f,s)}}function Z0(i,e){return i.replace(ew,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const ew=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(i){return JSON.parse(i)}function rt(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=Ts(hl(u[0])||""),n=Ts(hl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},tw=function(i){const e=ig(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},nw=function(i){const e=ig(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function hi(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function lc(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function fl(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function kr(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if(Fp(u)&&Fp(d)){if(!kr(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Fp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)s[_]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let _=16;_<80;_++){const y=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(y<<1|y>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,w;for(let _=0;_<80;_++){_<40?_<20?(g=f^u&(d^f),w=1518500249):(g=u^d^f,w=1859775393):_<60?(g=u&d|f&(u|d),w=2400959708):(g=u^d^f,w=3395469782);const y=(l<<5|l>>>27)+g+p+w+s[_]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=y}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function iw(i,e){const n=new sw(i,e);return n.subscribe.bind(n)}class sw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ow(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Gu),l.error===void 0&&(l.error=Gu),l.complete===void 0&&(l.complete=Gu);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ow(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Gu(){}function Dl(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,F(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Ll=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(i){return i&&i._delegate?i._delegate:i}class Ir{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ms;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cw(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uw(i){return i===yr?void 0:i}function cw(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Oe||(Oe={}));const hw={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},fw=Oe.INFO,pw={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},mw=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=pw[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lc{constructor(e){this.name=e,this._logLevel=fw,this._logHandler=mw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const gw=(i,e)=>e.some(n=>i instanceof n);let Up,jp;function _w(){return Up||(Up=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vw(){return jp||(jp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sg=new WeakMap,ac=new WeakMap,og=new WeakMap,qu=new WeakMap,Mc=new WeakMap;function yw(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Jn(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&sg.set(n,i)}).catch(()=>{}),Mc.set(e,i),e}function ww(i){if(ac.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});ac.set(i,e)}let uc={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return ac.get(i);if(e==="objectStoreNames")return i.objectStoreNames||og.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Ew(i){uc=i(uc)}function Sw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Ku(this),e,...n);return og.set(s,e.sort?e.sort():[e]),Jn(s)}:vw().includes(i)?function(...e){return i.apply(Ku(this),e),Jn(sg.get(this))}:function(...e){return Jn(i.apply(Ku(this),e))}}function Cw(i){return typeof i=="function"?Sw(i):(i instanceof IDBTransaction&&ww(i),gw(i,_w())?new Proxy(i,uc):i)}function Jn(i){if(i instanceof IDBRequest)return yw(i);if(qu.has(i))return qu.get(i);const e=Cw(i);return e!==i&&(qu.set(i,e),Mc.set(e,i)),e}const Ku=i=>Mc.get(i);function kw(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),f=Jn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Jn(d.result),p.oldVersion,p.newVersion,Jn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const Iw=["get","getKey","getAll","getAllKeys","count"],Tw=["put","add","delete","clear"],Qu=new Map;function zp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Qu.get(e))return Qu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=Tw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||Iw.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return Qu.set(e,u),u}Ew(i=>({...i,get:(e,n,s)=>zp(e,n)||i.get(e,n,s),has:(e,n)=>!!zp(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cc="@firebase/app",Wp="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new Lc("@firebase/app"),Rw="@firebase/app-compat",Pw="@firebase/analytics-compat",bw="@firebase/analytics",Aw="@firebase/app-check-compat",Ow="@firebase/app-check",Dw="@firebase/auth",Lw="@firebase/auth-compat",Mw="@firebase/database",Fw="@firebase/data-connect",Uw="@firebase/database-compat",jw="@firebase/functions",zw="@firebase/functions-compat",Ww="@firebase/installations",Bw="@firebase/installations-compat",Hw="@firebase/messaging",Vw="@firebase/messaging-compat",$w="@firebase/performance",Gw="@firebase/performance-compat",qw="@firebase/remote-config",Kw="@firebase/remote-config-compat",Qw="@firebase/storage",Yw="@firebase/storage-compat",Xw="@firebase/firestore",Jw="@firebase/ai",Zw="@firebase/firestore-compat",e1="firebase",t1="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="[DEFAULT]",n1={[cc]:"fire-core",[Rw]:"fire-core-compat",[bw]:"fire-analytics",[Pw]:"fire-analytics-compat",[Ow]:"fire-app-check",[Aw]:"fire-app-check-compat",[Dw]:"fire-auth",[Lw]:"fire-auth-compat",[Mw]:"fire-rtdb",[Fw]:"fire-data-connect",[Uw]:"fire-rtdb-compat",[jw]:"fire-fn",[zw]:"fire-fn-compat",[Ww]:"fire-iid",[Bw]:"fire-iid-compat",[Hw]:"fire-fcm",[Vw]:"fire-fcm-compat",[$w]:"fire-perf",[Gw]:"fire-perf-compat",[qw]:"fire-rc",[Kw]:"fire-rc-compat",[Qw]:"fire-gcs",[Yw]:"fire-gcs-compat",[Xw]:"fire-fst",[Zw]:"fire-fst-compat",[Jw]:"fire-vertex","fire-js":"fire-js",[e1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Map,r1=new Map,hc=new Map;function Bp(i,e){try{i.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function fi(i){const e=i.name;if(hc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;hc.set(e,i);for(const n of pl.values())Bp(n,i);for(const n of r1.values())Bp(n,i);return!0}function Fc(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Qt(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new Fs("app","Firebase",i1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=t1;function lg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:dc,automaticDataCollectionEnabled:!0},e),l=s.name;if(typeof l!="string"||!l)throw Zn.create("bad-app-name",{appName:String(l)});if(n||(n=Jm()),!n)throw Zn.create("no-options");const u=pl.get(l);if(u){if(kr(n,u.options)&&kr(s,u.config))return u;throw Zn.create("duplicate-app",{appName:l})}const d=new dw(l);for(const p of hc.values())d.addComponent(p);const f=new s1(n,s,d);return pl.set(l,f),f}function ag(i=dc){const e=pl.get(i);if(!e&&i===dc&&Jm())return lg();if(!e)throw Zn.create("no-app",{appName:i});return e}function er(i,e,n){var s;let l=(s=n1[i])!==null&&s!==void 0?s:i;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(f.join(" "));return}fi(new Ir(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1="firebase-heartbeat-database",l1=1,Ns="firebase-heartbeat-store";let Yu=null;function ug(){return Yu||(Yu=kw(o1,l1,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ns)}catch(n){console.warn(n)}}}}).catch(i=>{throw Zn.create("idb-open",{originalErrorMessage:i.message})})),Yu}async function a1(i){try{const n=(await ug()).transaction(Ns),s=await n.objectStore(Ns).get(cg(i));return await n.done,s}catch(e){if(e instanceof ir)In.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function Hp(i,e){try{const s=(await ug()).transaction(Ns,"readwrite");await s.objectStore(Ns).put(e,cg(i)),await s.done}catch(n){if(n instanceof ir)In.warn(n.message);else{const s=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(s.message)}}}function cg(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=1024,c1=30;class d1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new f1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Vp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>c1){const d=p1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){In.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vp(),{heartbeatsToSend:s,unsentEntries:l}=h1(this._heartbeatsCache.heartbeats),u=dl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return In.warn(n),""}}}function Vp(){return new Date().toISOString().substring(0,10)}function h1(i,e=u1){const n=[];let s=i.slice();for(const l of i){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),$p(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),$p(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class f1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y0()?X0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await a1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Hp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Hp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function $p(i){return dl(JSON.stringify({version:2,heartbeats:i})).length}function p1(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(i){fi(new Ir("platform-logger",e=>new Nw(e),"PRIVATE")),fi(new Ir("heartbeat",e=>new d1(e),"PRIVATE")),er(cc,Wp,i),er(cc,Wp,"esm2017"),er("fire-js","")}m1("");var g1="firebase",_1="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er(g1,_1,"app");function Uc(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(i);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(i,s[l])&&(n[s[l]]=i[s[l]]);return n}function dg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v1=dg,hg=new Fs("auth","Firebase",dg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Lc("@firebase/auth");function y1(i,...e){ml.logLevel<=Oe.WARN&&ml.warn(`Auth (${Ci}): ${i}`,...e)}function ol(i,...e){ml.logLevel<=Oe.ERROR&&ml.error(`Auth (${Ci}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(i,...e){throw zc(i,...e)}function Jt(i,...e){return zc(i,...e)}function jc(i,e,n){const s=Object.assign(Object.assign({},v1()),{[e]:n});return new Fs("auth","Firebase",s).create(e,{appName:i.name})}function Cr(i){return jc(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function w1(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&cn(i,"argument-error"),jc(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zc(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return hg.create(i,...e)}function ce(i,e,...n){if(!i)throw zc(e,...n)}function En(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ol(e),new Error(e)}function Tn(i,e){i||En(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function E1(){return Gp()==="http:"||Gp()==="https:"}function Gp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E1()||K0()||"connection"in navigator)?navigator.onLine:!0}function C1(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Dc()||ng()}get(){return S1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(i,e){Tn(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],T1=new Us(3e4,6e4);function Bc(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function ki(i,e,n,s,l={}){return pg(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Si(Object.assign({key:i.config.apiKey},d)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},u);return q0()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Ei(i.emulatorConfig.host)&&(g.credentials="include"),fg.fetch()(await mg(i,i.config.apiHost,n,f),g)})}async function pg(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},k1),e);try{const l=new x1(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw nl(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw nl(i,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw nl(i,"email-already-in-use",d);if(p==="USER_DISABLED")throw nl(i,"user-disabled",d);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw jc(i,w,g);cn(i,w)}}catch(l){if(l instanceof ir)throw l;cn(i,"network-request-failed",{message:String(l)})}}async function N1(i,e,n,s,l={}){const u=await ki(i,e,n,s,l);return"mfaPendingCredential"in u&&cn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function mg(i,e,n,s){const l=`${e}${n}?${s}`,u=i,d=u.config.emulator?Wc(i.config,l):`${i.config.apiScheme}://${l}`;return I1.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class x1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Jt(this.auth,"network-request-failed")),T1.get())})}}function nl(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Jt(i,e,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(i,e){return ki(i,"POST","/v1/accounts:delete",e)}async function gl(i,e){return ki(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function P1(i,e=!1){const n=bt(i),s=await n.getIdToken(e),l=Hc(s);ce(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:ws(Xu(l.auth_time)),issuedAtTime:ws(Xu(l.iat)),expirationTime:ws(Xu(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Xu(i){return Number(i)*1e3}function Hc(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const l=hl(n);return l?JSON.parse(l):(ol("Failed to decode base64 JWT payload"),null)}catch(l){return ol("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function qp(i){const e=Hc(i);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ir&&b1(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function b1({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ws(this.lastLoginAt),this.creationTime=ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(i){var e;const n=i.auth,s=await i.getIdToken(),l=await xs(i,gl(n,{idToken:s}));ce(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];i._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?gg(u.providerUserInfo):[],f=D1(i.providerData,d),p=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(f!=null&&f.length),w=p?g:!1,_={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new pc(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,_)}async function O1(i){const e=bt(i);await _l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function D1(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function gg(i){return i.map(e=>{var{providerId:n}=e,s=Uc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(i,e){const n=await pg(i,{},async()=>{const s=Si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=i.config,d=await mg(i,l,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return i.emulatorConfig&&Ei(i.emulatorConfig.host)&&(p.credentials="include"),fg.fetch()(d,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function M1(i,e){return ki(i,"POST","/v2/accounts:revokeToken",Bc(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=qp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await L1(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new oi;return s&&(ce(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(ce(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(ce(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(i,e){ce(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Yt{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=Uc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new A1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new pc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await xs(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return P1(this,e)}reload(){return O1(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await _l(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await xs(this,R1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,w;const _=(s=n.displayName)!==null&&s!==void 0?s:void 0,y=(l=n.email)!==null&&l!==void 0?l:void 0,N=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,P=(d=n.photoURL)!==null&&d!==void 0?d:void 0,j=(f=n.tenantId)!==null&&f!==void 0?f:void 0,z=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,ke=(g=n.createdAt)!==null&&g!==void 0?g:void 0,ye=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:Ce,emailVerified:H,isAnonymous:me,providerData:L,stsTokenManager:Y}=n;ce(Ce&&Y,e,"internal-error");const K=oi.fromJSON(this.name,Y);ce(typeof Ce=="string",e,"internal-error"),qn(_,e.name),qn(y,e.name),ce(typeof H=="boolean",e,"internal-error"),ce(typeof me=="boolean",e,"internal-error"),qn(N,e.name),qn(P,e.name),qn(j,e.name),qn(z,e.name),qn(ke,e.name),qn(ye,e.name);const ne=new Yt({uid:Ce,auth:e,email:y,emailVerified:H,displayName:_,isAnonymous:me,photoURL:P,phoneNumber:N,tenantId:j,stsTokenManager:K,createdAt:ke,lastLoginAt:ye});return L&&Array.isArray(L)&&(ne.providerData=L.map(pe=>Object.assign({},pe))),z&&(ne._redirectEventId=z),ne}static async _fromIdTokenResponse(e,n,s=!1){const l=new oi;l.updateFromServerResponse(n);const u=new Yt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await _l(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];ce(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?gg(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new oi;f.updateFromIdToken(s);const p=new Yt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new pc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new Map;function Sn(i){Tn(i instanceof Function,"Expected a class definition");let e=Kp.get(i);return e?(Tn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Kp.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_g.type="NONE";const Qp=_g;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(i,e,n){return`firebase:${i}:${e}:${n}`}class li{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=ll(this.userKey,l.apiKey,u),this.fullPersistenceKey=ll("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await gl(this.auth,{idToken:e}).catch(()=>{});return n?Yt._fromGetAccountInfoResponse(this.auth,n,e):null}return Yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new li(Sn(Qp),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||Sn(Qp);const d=ll(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const w=await g._get(d);if(w){let _;if(typeof w=="string"){const y=await gl(e,{idToken:w}).catch(()=>{});if(!y)break;_=await Yt._fromGetAccountInfoResponse(e,y,w)}else _=Yt._fromJSON(e,w);g!==u&&(f=_),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new li(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new li(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Eg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cg(e))return"Blackberry";if(kg(e))return"Webos";if(yg(e))return"Safari";if((e.includes("chrome/")||wg(e))&&!e.includes("edge/"))return"Chrome";if(Sg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function vg(i=vt()){return/firefox\//i.test(i)}function yg(i=vt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wg(i=vt()){return/crios\//i.test(i)}function Eg(i=vt()){return/iemobile/i.test(i)}function Sg(i=vt()){return/android/i.test(i)}function Cg(i=vt()){return/blackberry/i.test(i)}function kg(i=vt()){return/webos/i.test(i)}function Vc(i=vt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function F1(i=vt()){var e;return Vc(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function U1(){return Q0()&&document.documentMode===10}function Ig(i=vt()){return Vc(i)||Sg(i)||kg(i)||Cg(i)||/windows phone/i.test(i)||Eg(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(i,e=[]){let n;switch(i){case"Browser":n=Yp(vt());break;case"Worker":n=`${Yp(vt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(i,e={}){return ki(i,"GET","/v2/passwordPolicy",Bc(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=6;class B1{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:W1,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xp(this),this.idTokenSubscription=new Xp(this),this.beforeStateQueue=new j1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gl(this,{idToken:e}),s=await Yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(Cr(this));const n=e?bt(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await z1(this),n=new B1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await M1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&y1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ml(i){return bt(i)}class Xp{constructor(e){this.auth=e,this.observer=null,this.addObserver=iw(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V1(i){$c=i}function $1(i){return $c.loadJS(i)}function G1(){return $c.gapiScript}function q1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(i,e){const n=Fc(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(kr(u,e??{}))return l;cn(l,"already-initialized")}return n.initialize({options:e})}function Q1(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Y1(i,e,n){const s=Ml(i);ce(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=Ng(e),{host:d,port:f}=X1(e),p=f===null?"":`:${f}`,g={url:`${u}//${d}${p}/`},w=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){ce(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ce(kr(g,s.config.emulator)&&kr(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Ei(d)?(eg(`${u}//${d}${p}`),tg("Auth",!0)):J1()}function Ng(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function X1(i){const e=Ng(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Jp(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:Jp(d)}}}function Jp(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function J1(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(i,e){return N1(i,"POST","/v1/accounts:signInWithIdp",Bc(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1="http://localhost";class Tr extends xg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=Uc(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new Tr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return ai(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ai(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ai(e,n)}buildRequest(){const e={requestUri:Z1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Si(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends Gc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends js{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return wn.credential(n,s)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends js{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends js{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await Yt._fromIdTokenResponse(e,s,l),d=Zp(s);return new pi({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Zp(s);return new pi({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Zp(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends ir{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new vl(e,n,s,l)}}function Rg(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(i,u,e,s):u})}async function eE(i,e,n=!1){const s=await xs(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return pi._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tE(i,e,n=!1){const{auth:s}=i;if(Qt(s.app))return Promise.reject(Cr(s));const l="reauthenticate";try{const u=await xs(i,Rg(s,l,e,i),n);ce(u.idToken,s,"internal-error");const d=Hc(u.idToken);ce(d,s,"internal-error");const{sub:f}=d;return ce(i.uid===f,s,"user-mismatch"),pi._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&cn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(i,e,n=!1){if(Qt(i.app))return Promise.reject(Cr(i));const s="signIn",l=await Rg(i,s,e),u=await pi._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}function rE(i,e,n,s){return bt(i).onIdTokenChanged(e,n,s)}function iE(i,e,n){return bt(i).beforeAuthStateChanged(e,n)}function ZI(i){return bt(i).signOut()}const yl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yl,"1"),this.storage.removeItem(yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=1e3,oE=10;class bg extends Pg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ig(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);U1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,oE):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},sE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bg.type="LOCAL";const lE=bg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends Pg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ag.type="SESSION";const Og=Ag;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Fl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await aE(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=qc("",20);l.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(_){const y=_;if(y.data.eventId===g)switch(y.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(y.data.response);break;default:clearTimeout(w),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function cE(i){un().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function dE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hE(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function fE(){return Dg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="firebaseLocalStorageDb",pE=1,wl="firebaseLocalStorage",Mg="fbase_key";class zs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ul(i,e){return i.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function mE(){const i=indexedDB.deleteDatabase(Lg);return new zs(i).toPromise()}function mc(){const i=indexedDB.open(Lg,pE);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(wl,{keyPath:Mg})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(wl)?e(s):(s.close(),await mE(),e(await mc()))})})}async function em(i,e,n){const s=Ul(i,!0).put({[Mg]:e,value:n});return new zs(s).toPromise()}async function gE(i,e){const n=Ul(i,!1).get(e),s=await new zs(n).toPromise();return s===void 0?null:s.value}function tm(i,e){const n=Ul(i,!0).delete(e);return new zs(n).toPromise()}const _E=800,vE=3;class Fg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>vE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fl._getInstance(fE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dE(),!this.activeServiceWorker)return;this.sender=new uE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mc();return await em(e,yl,"1"),await tm(e,yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>em(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>gE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=Ul(l,!1).getAll();return new zs(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_E)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fg.type="LOCAL";const yE=Fg;new Us(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(i,e){return e?Sn(e):(ce(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends xg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wE(i){return nE(i.auth,new Kc(i),i.bypassAuthState)}function EE(i){const{auth:e,user:n}=i;return ce(n,e,"internal-error"),tE(n,new Kc(i),i.bypassAuthState)}async function SE(i){const{auth:e,user:n}=i;return ce(n,e,"internal-error"),eE(n,new Kc(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wE;case"linkViaPopup":case"linkViaRedirect":return SE;case"reauthViaPopup":case"reauthViaRedirect":return EE;default:cn(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=new Us(2e3,1e4);async function eT(i,e,n){if(Qt(i.app))return Promise.reject(Jt(i,"operation-not-supported-in-this-environment"));const s=Ml(i);w1(i,e,Gc);const l=Ug(s,n);return new Er(s,"signInViaPopup",e,l).executeNotNull()}class Er extends jg{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CE.get())};e()}}Er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="pendingRedirect",al=new Map;class IE extends jg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const s=await TE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TE(i,e){const n=RE(e),s=xE(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function NE(i,e){al.set(i._key(),e)}function xE(i){return Sn(i._redirectPersistence)}function RE(i){return ll(kE,i.config.apiKey,i.name)}async function PE(i,e,n=!1){if(Qt(i.app))return Promise.reject(Cr(i));const s=Ml(i),l=Ug(s,e),d=await new IE(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=10*60*1e3;class AE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!zg(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bE&&this.cachedEventUids.clear(),this.cachedEventUids.has(nm(e))}saveEventToCache(e){this.cachedEventUids.add(nm(e)),this.lastProcessedEventTime=Date.now()}}function nm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function zg({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OE(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zg(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(i,e={}){return ki(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ME=/^https?/;async function FE(i){if(i.config.emulator)return;const{authorizedDomains:e}=await DE(i);for(const n of e)try{if(UE(n))return}catch{}cn(i,"unauthorized-domain")}function UE(i){const e=fc(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!ME.test(n))return!1;if(LE.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=new Us(3e4,6e4);function rm(){const i=un().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function zE(i){return new Promise((e,n)=>{var s,l,u;function d(){rm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rm(),n(Jt(i,"network-request-failed"))},timeout:jE.get()})}if(!((l=(s=un().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=un().gapi)===null||u===void 0)&&u.load)d();else{const f=q1("iframefcb");return un()[f]=()=>{gapi.load?d():n(Jt(i,"network-request-failed"))},$1(`${G1()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw ul=null,e})}let ul=null;function WE(i){return ul=ul||zE(i),ul}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=new Us(5e3,15e3),HE="__/auth/iframe",VE="emulator/auth/iframe",$E={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qE(i){const e=i.config;ce(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Wc(e,VE):`https://${i.config.authDomain}/${HE}`,s={apiKey:e.apiKey,appName:i.name,v:Ci},l=GE.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Si(s).slice(1)}`}async function KE(i){const e=await WE(i),n=un().gapi;return ce(n,i,"internal-error"),e.open({where:document.body,url:qE(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$E,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=Jt(i,"network-request-failed"),f=un().setTimeout(()=>{u(d)},BE.get());function p(){un().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YE=500,XE=600,JE="_blank",ZE="http://localhost";class im{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eS(i,e,n,s=YE,l=XE){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},QE),{width:s.toString(),height:l.toString(),top:u,left:d}),g=vt().toLowerCase();n&&(f=wg(g)?JE:n),vg(g)&&(e=e||ZE,p.scrollbars="yes");const w=Object.entries(p).reduce((y,[N,P])=>`${y}${N}=${P},`,"");if(F1(g)&&f!=="_self")return tS(e||"",f),new im(null);const _=window.open(e||"",f,w);ce(_,i,"popup-blocked");try{_.focus()}catch{}return new im(_)}function tS(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="__/auth/handler",rS="emulator/auth/handler",iS=encodeURIComponent("fac");async function sm(i,e,n,s,l,u){ce(i.config.authDomain,i,"auth-domain-config-required"),ce(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:Ci,eventId:l};if(e instanceof Gc){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",lc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,_]of Object.entries({}))d[w]=_}if(e instanceof js){const w=e.getScopes().filter(_=>_!=="");w.length>0&&(d.scopes=w.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await i._getAppCheckToken(),g=p?`#${iS}=${encodeURIComponent(p)}`:"";return`${sS(i)}?${Si(f).slice(1)}${g}`}function sS({config:i}){return i.emulator?Wc(i,rS):`https://${i.authDomain}/${nS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="webStorageSupport";class oS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Og,this._completeRedirectFn=PE,this._overrideRedirectResult=NE}async _openPopup(e,n,s,l){var u;Tn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await sm(e,n,s,fc(),l);return eS(e,d,qc())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await sm(e,n,s,fc(),l);return cE(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(Tn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await KE(e),s=new AE(e);return n.register("authEvent",l=>(ce(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ju,{type:Ju},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[Ju];d!==void 0&&n(!!d),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ig()||yg()||Vc()}}const lS=oS;var om="@firebase/auth",lm="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cS(i){fi(new Ir("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;ce(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tg(i)},g=new H1(s,l,u,p);return Q1(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),fi(new Ir("auth-internal",e=>{const n=Ml(e.getProvider("auth").getImmediate());return(s=>new aS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(om,lm,uS(i)),er(om,lm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=5*60,hS=Zm("authIdTokenMaxAge")||dS;let am=null;const fS=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>hS)return;const l=n==null?void 0:n.token;am!==l&&(am=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function pS(i=ag()){const e=Fc(i,"auth");if(e.isInitialized())return e.getImmediate();const n=K1(i,{popupRedirectResolver:lS,persistence:[yE,lE,Og]}),s=Zm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=fS(u.toString());iE(n,d,()=>d(n.currentUser)),rE(n,f=>d(f))}}const l=Xm("auth");return l&&Y1(n,`http://${l}`),n}function mS(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}V1({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=Jt("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",mS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cS("Browser");var um={};const cm="@firebase/database",dm="1.0.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wg="";function gS(i){Wg=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ts(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _S(e)}}catch{}return new vS},Sr=Bg("localStorage"),yS=Bg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new Lc("@firebase/database"),wS=function(){let i=1;return function(){return i++}}(),Hg=function(i){const e=lw(i),n=new rw;n.update(e);const s=n.digest();return Ac.encodeByteArray(s)},Ws=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ws.apply(null,s):typeof s=="object"?e+=rt(s):e+=s,e+=" "}return e};let Es=null,hm=!0;const ES=function(i,e){F(!e,"Can't turn on custom loggers persistently."),ui.logLevel=Oe.VERBOSE,Es=ui.log.bind(ui)},at=function(...i){if(hm===!0&&(hm=!1,Es===null&&yS.get("logging_enabled")===!0&&ES()),Es){const e=Ws.apply(null,i);Es(e)}},Bs=function(i){return function(...e){at(i,...e)}},gc=function(...i){const e="FIREBASE INTERNAL ERROR: "+Ws(...i);ui.error(e)},Nn=function(...i){const e=`FIREBASE FATAL ERROR: ${Ws(...i)}`;throw ui.error(e),new Error(e)},_t=function(...i){const e="FIREBASE WARNING: "+Ws(...i);ui.warn(e)},SS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&_t("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Qc=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},CS=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mi="[MIN_NAME]",Nr="[MAX_NAME]",br=function(i,e){if(i===e)return 0;if(i===mi||e===Nr)return-1;if(e===mi||i===Nr)return 1;{const n=fm(i),s=fm(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},kS=function(i,e){return i===e?0:i<e?-1:1},ps=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+rt(e))},Yc=function(i){if(typeof i!="object"||i===null)return rt(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=rt(e[s]),n+=":",n+=Yc(i[e[s]]);return n+="}",n},Vg=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function ut(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const $g=function(i){F(!Qc(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const w=g.join("");let _="";for(p=0;p<64;p+=8){let y=parseInt(w.substr(p,8),2).toString(16);y.length===1&&(y="0"+y),_=_+y}return _.toLowerCase()},IS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},TS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function NS(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const xS=new RegExp("^-?(0*)\\d{1,10}$"),RS=-2147483648,PS=2147483647,fm=function(i){if(xS.test(i)){const e=Number(i);if(e>=RS&&e<=PS)return e}return null},Ii=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw _t("Exception was thrown by user callback.",n),e},Math.floor(0))}},bS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ss=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Qt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){_t(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(at("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_t(e)}}class cl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="5",Gg="v",qg="s",Kg="r",Qg="f",Yg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xg="ls",Jg="p",_c="ac",Zg="websocket",e_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function DS(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function n_(i,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let s;if(e===Zg)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===e_)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);DS(i)&&(n.ns=i.namespace);const l=[];return ut(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.counters_={}}incrementCounter(e,n=1){dn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return F0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu={},ec={};function Jc(i){const e=i.toString();return Zu[e]||(Zu[e]=new LS),Zu[e]}function MS(i,e){const n=i.toString();return ec[n]||(ec[n]=e()),ec[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ii(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="start",US="close",jS="pLPCommand",zS="pRTLPCB",r_="id",i_="pw",s_="ser",WS="cb",BS="seg",HS="ts",VS="d",$S="dframe",o_=1870,l_=30,GS=o_-l_,qS=25e3,KS=3e4;class si{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bs(e),this.stats_=Jc(n),this.urlFn=p=>(this.appCheckToken&&(p[_c]=this.appCheckToken),n_(n,e_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new FS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(KS)),CS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zc((...u)=>{const[d,f,p,g,w]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===pm)this.id=f,this.password=p;else if(d===US)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[pm]="t",s[s_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[WS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Gg]=Xc,this.transportSessionId&&(s[qg]=this.transportSessionId),this.lastSessionId&&(s[Xg]=this.lastSessionId),this.applicationId&&(s[Jg]=this.applicationId),this.appCheckToken&&(s[_c]=this.appCheckToken),typeof location<"u"&&location.hostname&&Yg.test(location.hostname)&&(s[Kg]=Qg);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){si.forceAllow_=!0}static forceDisallow(){si.forceDisallow_=!0}static isAvailable(){return si.forceAllow_?!0:!si.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!IS()&&!TS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Qm(n),l=Vg(s,GS);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[$S]="t",s[r_]=e,s[i_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Zc{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wS(),window[jS+this.uniqueCallbackIdentifier]=e,window[zS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Zc.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){at("frame writing exception"),f.stack&&at(f.stack),at(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||at("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[r_]=this.myID,e[i_]=this.myPW,e[s_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+l_+s.length<=o_;){const d=this.pendingSegs.shift();s=s+"&"+BS+l+"="+d.seg+"&"+HS+l+"="+d.ts+"&"+VS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(qS)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{at("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=16384,YS=45e3;let El=null;typeof MozWebSocket<"u"?El=MozWebSocket:typeof WebSocket<"u"&&(El=WebSocket);class an{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bs(this.connId),this.stats_=Jc(n),this.connURL=an.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[Gg]=Xc,typeof location<"u"&&location.hostname&&Yg.test(location.hostname)&&(d[Kg]=Qg),n&&(d[qg]=n),s&&(d[Xg]=s),l&&(d[_c]=l),u&&(d[Jg]=u),n_(e,Zg,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Sr.set("previous_websocket_failure",!0);try{let s;rg(),this.mySock=new El(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){an.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&El!==null&&!an.forceDisallow_}static previouslyFailed(){return Sr.isInMemoryStorage||Sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ts(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Vg(n,QS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(YS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}an.responsesRequiredToBeHealthy=2;an.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{static get ALL_TRANSPORTS(){return[si,an]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=an.isAvailable();let s=n&&!an.previouslyFailed();if(e.webSocketOnly&&(n||_t("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[an];else{const l=this.transports_=[];for(const u of Rs.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Rs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=6e4,JS=5e3,ZS=10*1024,eC=100*1024,tc="t",mm="d",tC="s",gm="r",nC="e",_m="o",vm="a",ym="n",wm="p",rC="h";class iC{constructor(e,n,s,l,u,d,f,p,g,w){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=w,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bs("c:"+this.id+":"),this.transportManager_=new Rs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Ss(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tc in e){const n=e[tc];n===vm?this.upgradeIfSecondaryHealthy_():n===gm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_m&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ps("t",e),s=ps("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ym,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ps("t",e),s=ps("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ps(tc,e);if(mm in e){const s=e[mm];if(n===rC){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===ym){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tC?this.onConnectionShutdown_(s):n===gm?this.onReset_(s):n===nC?gc("Server Error: "+s):n===_m?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xc!==s&&_t("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ss(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(XS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ss(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(JS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends u_{static getInstance(){return new Sl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Dc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=32,Sm=768;class De{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function xe(){return new De("")}function _e(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function nr(i){return i.pieces_.length-i.pieceNum_}function Fe(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new De(i.pieces_,e)}function ed(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function sC(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function Ps(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function c_(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new De(e,0)}function Ve(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof De)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new De(n,0)}function Se(i){return i.pieceNum_>=i.pieces_.length}function It(i,e){const n=_e(i),s=_e(e);if(n===null)return e;if(n===s)return It(Fe(i),Fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function oC(i,e){const n=Ps(i,0),s=Ps(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=br(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function td(i,e){if(nr(i)!==nr(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function jt(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(nr(i)>nr(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class lC{constructor(e,n){this.errorPrefix_=n,this.parts_=Ps(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ll(this.parts_[s]);d_(this)}}function aC(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Ll(e),d_(i)}function uC(i){const e=i.parts_.pop();i.byteLength_-=Ll(e),i.parts_.length>0&&(i.byteLength_-=1)}function d_(i){if(i.byteLength_>Sm)throw new Error(i.errorPrefix_+"has a key path longer than "+Sm+" bytes ("+i.byteLength_+").");if(i.parts_.length>Em)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Em+") or object contains a cycle "+wr(i))}function wr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends u_{static getInstance(){return new nd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=1e3,cC=60*5*1e3,Cm=30*1e3,dC=1.3,hC=3e4,fC="server_kill",km=3;class kn extends a_{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=kn.nextPersistentConnectionId_++,this.log_=Bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ms,this.maxReconnectDelay_=cC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!rg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");nd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(rt(u)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Ms,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;kn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dn(e,"w")){const s=hi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();_t(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||nw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=tw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):gc("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ms,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ms,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hC&&(this.reconnectDelay_=ms),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+kn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(_){F(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(_)};this.realtime_={close:p,sendRequest:g};const w=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,y]=await Promise.all([this.authTokenProvider_.getToken(w),this.appCheckTokenProvider_.getToken(w)]);d?at("getToken() completed but was canceled"):(at("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=y&&y.token,f=new iC(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,N=>{_t(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(fC)},u))}catch(_){this.log_("Failed to get token: "+_),d||(this.repoInfo_.nodeAdmin&&_t(_),p())}}}interrupt(e){at("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){at("Resuming connection for reason: "+e),delete this.interruptReasons_[e],lc(this.interruptReasons_)&&(this.reconnectDelay_=ms,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Yc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new De(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){at("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=km&&(this.reconnectDelay_=Cm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){at("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=km&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Wg.replace(/\./g,"-")]=1,Dc()?e["framework.cordova"]=1:ng()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sl.getInstance().currentlyOnline();return lc(this.interruptReasons_)&&e}}kn.nextPersistentConnectionId_=0;kn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ve(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ve(mi,e),l=new ve(mi,n);return this.compare(s,l)!==0}minPost(){return ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl;class h_ extends jl{static get __EMPTY_NODE(){return rl}static set __EMPTY_NODE(e){rl=e}compare(e,n){return br(e.name,n.name)}isDefinedOn(e){throw wi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ve.MIN}maxPost(){return new ve(Nr,rl)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new ve(e,rl)}toString(){return".key"}}const ci=new h_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??tt.RED,this.left=l??Tt.EMPTY_NODE,this.right=u??Tt.EMPTY_NODE}copy(e,n,s,l,u){return new tt(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return Tt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Tt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class pC{copy(e,n,s,l,u){return this}insert(e,n,s){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Tt{constructor(e,n=Tt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Tt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new Tt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new il(this.root_,null,this.comparator_,!0,e)}}Tt.EMPTY_NODE=new pC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(i,e){return br(i.name,e.name)}function rd(i,e){return br(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc;function gC(i){vc=i}const f_=function(i){return typeof i=="number"?"number:"+$g(i):"string:"+i},p_=function(i){if(i.isLeafNode()){const e=i.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dn(e,".sv"),"Priority must be a string or number.")}else F(i===vc||i.isEmpty(),"priority of unexpected type.");F(i===vc||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Im;class et{static set __childrenNodeConstructor(e){Im=e}static get __childrenNodeConstructor(){return Im}constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),p_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Se(e)?this:_e(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=_e(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(F(s!==".priority"||nr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+f_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$g(this.value_):e+=this.value_,this.lazyHash_=Hg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=et.VALUE_TYPE_ORDER.indexOf(n),u=et.VALUE_TYPE_ORDER.indexOf(s);return F(l>=0,"Unknown leaf type: "+n),F(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m_,g_;function _C(i){m_=i}function vC(i){g_=i}class yC extends jl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?br(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ve.MIN}maxPost(){return new ve(Nr,new et("[PRIORITY-POST]",g_))}makePost(e,n){const s=m_(e);return new ve(n,new et("[PRIORITY-POST]",s))}toString(){return".priority"}}const $e=new yC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=Math.log(2);class EC{constructor(e){const n=u=>parseInt(Math.log(u)/wC,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Cl=function(i,e,n,s){i.sort(e);const l=function(p,g){const w=g-p;let _,y;if(w===0)return null;if(w===1)return _=i[p],y=n?n(_):_,new tt(y,_.node,tt.BLACK,null,null);{const N=parseInt(w/2,10)+p,P=l(p,N),j=l(N+1,g);return _=i[N],y=n?n(_):_,new tt(y,_.node,tt.BLACK,P,j)}},u=function(p){let g=null,w=null,_=i.length;const y=function(P,j){const z=_-P,ke=_;_-=P;const ye=l(z+1,ke),Ce=i[z],H=n?n(Ce):Ce;N(new tt(H,Ce.node,j,null,ye))},N=function(P){g?(g.left=P,g=P):(w=P,g=P)};for(let P=0;P<p.count;++P){const j=p.nextBitIsOne(),z=Math.pow(2,p.count-(P+1));j?y(z,tt.BLACK):(y(z,tt.BLACK),y(z,tt.RED))}return w},d=new EC(i.length),f=u(d);return new Tt(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc;const gs={};class Cn{static get Default(){return F($e,"ChildrenNode.ts has not been loaded"),nc=nc||new Cn({".priority":gs},{".priority":$e}),nc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=hi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Tt?n:null}hasIndex(e){return dn(this.indexSet_,e.toString())}addIndex(e,n){F(e!==ci,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(ve.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=Cl(s,e.getCompare()):f=gs;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const w=Object.assign({},this.indexes_);return w[p]=f,new Cn(w,g)}addToIndexes(e,n){const s=fl(this.indexes_,(l,u)=>{const d=hi(this.indexSet_,u);if(F(d,"Missing index implementation for "+u),l===gs)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(ve.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Cl(f,d.getCompare())}else return gs;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new ve(e.name,f))),p.insert(e,e.node)}});return new Cn(s,this.indexSet_)}removeFromIndexes(e,n){const s=fl(this.indexes_,l=>{if(l===gs)return l;{const u=n.get(e.name);return u?l.remove(new ve(e.name,u)):l}});return new Cn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s;class le{static get EMPTY_NODE(){return _s||(_s=new le(new Tt(rd),null,Cn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&p_(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_s}updatePriority(e){return this.children_.isEmpty()?this:new le(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_s:n}}getChild(e){const n=_e(e);return n===null?this:this.getImmediateChild(n).getChild(Fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ve(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?_s:this.priorityNode_;return new le(l,d,u)}}updateChild(e,n){const s=_e(e);if(s===null)return n;{F(_e(e)!==".priority"||nr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Fe(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild($e,(d,f)=>{n[d]=f.val(e),s++,u&&le.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+f_(this.getPriority().val())+":"),this.forEachChild($e,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Hg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new ve(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ve(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ve(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ve.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ve.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hs?-1:0}withIndex(e){if(e===ci||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new le(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ci||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator($e),l=n.getIterator($e);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===ci?null:this.indexMap_.get(e.toString())}}le.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class SC extends le{constructor(){super(new Tt(rd),le.EMPTY_NODE,Cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return le.EMPTY_NODE}isEmpty(){return!1}}const Hs=new SC;Object.defineProperties(ve,{MIN:{value:new ve(mi,le.EMPTY_NODE)},MAX:{value:new ve(Nr,Hs)}});h_.__EMPTY_NODE=le.EMPTY_NODE;et.__childrenNodeConstructor=le;gC(Hs);vC(Hs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=!0;function nt(i,e=null){if(i===null)return le.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new et(n,nt(e))}if(!(i instanceof Array)&&CC){const n=[];let s=!1;if(ut(i,(d,f)=>{if(d.substring(0,1)!=="."){const p=nt(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ve(d,p)))}}),n.length===0)return le.EMPTY_NODE;const u=Cl(n,mC,d=>d.name,rd);if(s){const d=Cl(n,$e.getCompare());return new le(u,nt(e),new Cn({".priority":d},{".priority":$e}))}else return new le(u,nt(e),Cn.Default)}else{let n=le.EMPTY_NODE;return ut(i,(s,l)=>{if(dn(i,s)&&s.substring(0,1)!=="."){const u=nt(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(nt(e))}}_C(nt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC extends jl{constructor(e){super(),this.indexPath_=e,F(!Se(e)&&_e(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?br(e.name,n.name):u}makePost(e,n){const s=nt(e),l=le.EMPTY_NODE.updateChild(this.indexPath_,s);return new ve(n,l)}maxPost(){const e=le.EMPTY_NODE.updateChild(this.indexPath_,Hs);return new ve(Nr,e)}toString(){return Ps(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC extends jl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?br(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ve.MIN}maxPost(){return ve.MAX}makePost(e,n){const s=nt(e);return new ve(n,s)}toString(){return".value"}}const TC=new IC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(i){return{type:"value",snapshotNode:i}}function gi(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function bs(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function As(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function NC(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(bs(n,f)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(gi(n,s)):d.trackChildChange(As(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild($e,(l,u)=>{n.hasChild(l)||s.trackChildChange(bs(l,u))}),n.isLeafNode()||n.forEachChild($e,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(As(l,u,d))}else s.trackChildChange(gi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?le.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.indexedFilter_=new id(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Os.getStartPost_(e),this.endPost_=Os.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new ve(n,s))||(s=le.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=le.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(le.EMPTY_NODE);const u=this;return n.forEachChild($e,(d,f)=>{u.matches(new ve(d,f))||(l=l.updateImmediateChild(d,le.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Os(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new ve(n,s))||(s=le.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=le.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=le.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(le.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,le.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const _=this.index_.getCompare();d=(y,N)=>_(N,y)}else d=this.index_.getCompare();const f=e;F(f.numChildren()===this.limit_,"");const p=new ve(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),w=this.rangedFilter_.matches(p);if(f.hasChild(n)){const _=f.getImmediateChild(n);let y=l.getChildAfterChild(this.index_,g,this.reverse_);for(;y!=null&&(y.name===n||f.hasChild(y.name));)y=l.getChildAfterChild(this.index_,y,this.reverse_);const N=y==null?1:d(y,p);if(w&&!s.isEmpty()&&N>=0)return u!=null&&u.trackChildChange(As(n,s,_)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(bs(n,_));const j=f.updateImmediateChild(n,le.EMPTY_NODE);return y!=null&&this.rangedFilter_.matches(y)?(u!=null&&u.trackChildChange(gi(y.name,y.node)),j.updateImmediateChild(y.name,y.node)):j}}else return s.isEmpty()?e:w&&d(g,p)>=0?(u!=null&&(u.trackChildChange(bs(g.name,g.node)),u.trackChildChange(gi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,le.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mi}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new sd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function RC(i){return i.loadsAllData()?new id(i.getIndex()):i.hasLimit()?new xC(i):new Os(i)}function Tm(i){const e={};if(i.isDefault())return e;let n;if(i.index_===$e?n="$priority":i.index_===TC?n="$value":i.index_===ci?n="$key":(F(i.index_ instanceof kC,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=rt(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=rt(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+rt(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=rt(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+rt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function Nm(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==$e&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends a_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Bs("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=kl.getListenId_(e,s),f={};this.listens_[d]=f;const p=Tm(e._queryParams);this.restRequest_(u+".json",p,(g,w)=>{let _=w;if(g===404&&(_=null,g=null),g===null&&this.onDataUpdate_(u,_,!1,s),hi(this.listens_,d)===f){let y;g?g===401?y="permission_denied":y="rest_error:"+g:y="ok",l(y,null)}})}unlisten(e,n){const s=kl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Tm(e._queryParams),s=e._path.toString(),l=new Ms;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Si(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Ts(f.responseText)}catch{_t("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&_t("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.rootNode_=le.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){return{value:null,children:new Map}}function v_(i,e,n){if(Se(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=_e(e);i.children.has(s)||i.children.set(s,Il());const l=i.children.get(s);e=Fe(e),v_(l,e,n)}}function yc(i,e,n){i.value!==null?n(e,i.value):bC(i,(s,l)=>{const u=new De(e.toString()+"/"+s);yc(l,u,n)})}function bC(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ut(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=10*1e3,OC=30*1e3,DC=5*60*1e3;class LC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new AC(e);const s=xm+(OC-xm)*Math.random();Ss(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ut(e,(l,u)=>{u>0&&dn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),Ss(this.reportStats_.bind(this),Math.floor(Math.random()*2*DC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xt||(Xt={}));function od(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ld(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ad(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xt.ACK_USER_WRITE,this.source=od()}operationForChild(e){if(Se(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new De(e));return new Tl(xe(),n,this.revert)}}else return F(_e(this.path)===e,"operationForChild called for unrelated child."),new Tl(Fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.source=e,this.path=n,this.type=Xt.LISTEN_COMPLETE}operationForChild(e){return Se(this.path)?new Ds(this.source,xe()):new Ds(this.source,Fe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xt.OVERWRITE}operationForChild(e){return Se(this.path)?new xr(this.source,xe(),this.snap.getImmediateChild(e)):new xr(this.source,Fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xt.MERGE}operationForChild(e){if(Se(this.path)){const n=this.children.subtree(new De(e));return n.isEmpty()?null:n.value?new xr(this.source,xe(),n.value):new _i(this.source,xe(),n)}else return F(_e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _i(this.source,Fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Se(e))return this.isFullyInitialized()&&!this.filtered_;const n=_e(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function FC(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(NC(d.childName,d.snapshotNode))}),vs(i,l,"child_removed",e,s,n),vs(i,l,"child_added",e,s,n),vs(i,l,"child_moved",u,s,n),vs(i,l,"child_changed",e,s,n),vs(i,l,"value",e,s,n),l}function vs(i,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>jC(i,f,p)),d.forEach(f=>{const p=UC(i,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,i.query_))})})}function UC(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function jC(i,e,n){if(e.childName==null||n.childName==null)throw wi("Should only compare child_ events.");const s=new ve(e.childName,e.snapshotNode),l=new ve(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(i,e){return{eventCache:i,serverCache:e}}function Cs(i,e,n,s){return zl(new Rr(e,n,s),i.serverCache)}function y_(i,e,n,s){return zl(i.eventCache,new Rr(e,n,s))}function wc(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Pr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc;const zC=()=>(rc||(rc=new Tt(kS)),rc);class Me{static fromObject(e){let n=new Me(null);return ut(e,(s,l)=>{n=n.set(new De(s),l)}),n}constructor(e,n=zC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:xe(),value:this.value};if(Se(e))return null;{const s=_e(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Fe(e),n);return u!=null?{path:Ve(new De(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Se(e))return this;{const n=_e(e),s=this.children.get(n);return s!==null?s.subtree(Fe(e)):new Me(null)}}set(e,n){if(Se(e))return new Me(n,this.children);{const s=_e(e),u=(this.children.get(s)||new Me(null)).set(Fe(e),n),d=this.children.insert(s,u);return new Me(this.value,d)}}remove(e){if(Se(e))return this.children.isEmpty()?new Me(null):new Me(null,this.children);{const n=_e(e),s=this.children.get(n);if(s){const l=s.remove(Fe(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new Me(null):new Me(this.value,u)}else return this}}get(e){if(Se(e))return this.value;{const n=_e(e),s=this.children.get(n);return s?s.get(Fe(e)):null}}setTree(e,n){if(Se(e))return n;{const s=_e(e),u=(this.children.get(s)||new Me(null)).setTree(Fe(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new Me(this.value,d)}}fold(e){return this.fold_(xe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Ve(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,xe(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(Se(e))return null;{const u=_e(e),d=this.children.get(u);return d?d.findOnPath_(Fe(e),Ve(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,xe(),n)}foreachOnPath_(e,n,s){if(Se(e))return this;{this.value&&s(n,this.value);const l=_e(e),u=this.children.get(l);return u?u.foreachOnPath_(Fe(e),Ve(n,l),s):new Me(null)}}foreach(e){this.foreach_(xe(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new Me(null))}}function ks(i,e,n){if(Se(e))return new Zt(new Me(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=It(l,e);return u=u.updateChild(d,n),new Zt(i.writeTree_.set(l,u))}else{const l=new Me(n),u=i.writeTree_.setTree(e,l);return new Zt(u)}}}function Ec(i,e,n){let s=i;return ut(n,(l,u)=>{s=ks(s,Ve(e,l),u)}),s}function Rm(i,e){if(Se(e))return Zt.empty();{const n=i.writeTree_.setTree(e,new Me(null));return new Zt(n)}}function Sc(i,e){return Ar(i,e)!=null}function Ar(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(It(n.path,e)):null}function Pm(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(s,l)=>{e.push(new ve(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ve(s,l.value))}),e}function tr(i,e){if(Se(e))return i;{const n=Ar(i,e);return n!=null?new Zt(new Me(n)):new Zt(i.writeTree_.subtree(e))}}function Cc(i){return i.writeTree_.isEmpty()}function vi(i,e){return w_(xe(),i.writeTree_,e)}function w_(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(F(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=w_(Ve(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Ve(i,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(i,e){return k_(e,i)}function WC(i,e,n,s,l){F(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=ks(i.visibleWrites,e,n)),i.lastWriteId=s}function BC(i,e,n,s){F(s>i.lastWriteId,"Stacking an older merge on top of newer ones"),i.allWrites.push({path:e,children:n,writeId:s,visible:!0}),i.visibleWrites=Ec(i.visibleWrites,e,n),i.lastWriteId=s}function HC(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function VC(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&$C(f,s.path)?l=!1:jt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return GC(i),!0;if(s.snap)i.visibleWrites=Rm(i.visibleWrites,s.path);else{const f=s.children;ut(f,p=>{i.visibleWrites=Rm(i.visibleWrites,Ve(s.path,p))})}return!0}else return!1}function $C(i,e){if(i.snap)return jt(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&jt(Ve(i.path,n),e))return!0;return!1}function GC(i){i.visibleWrites=E_(i.allWrites,qC,xe()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function qC(i){return i.visible}function E_(i,e,n){let s=Zt.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let f;if(u.snap)jt(n,d)?(f=It(n,d),s=ks(s,f,u.snap)):jt(d,n)&&(f=It(d,n),s=ks(s,xe(),u.snap.getChild(f)));else if(u.children){if(jt(n,d))f=It(n,d),s=Ec(s,f,u.children);else if(jt(d,n))if(f=It(d,n),Se(f))s=Ec(s,xe(),u.children);else{const p=hi(u.children,_e(f));if(p){const g=p.getChild(Fe(f));s=ks(s,xe(),g)}}}else throw wi("WriteRecord should have .snap or .children")}}return s}function S_(i,e,n,s,l){if(!s&&!l){const u=Ar(i.visibleWrites,e);if(u!=null)return u;{const d=tr(i.visibleWrites,e);if(Cc(d))return n;if(n==null&&!Sc(d,xe()))return null;{const f=n||le.EMPTY_NODE;return vi(d,f)}}}else{const u=tr(i.visibleWrites,e);if(!l&&Cc(u))return n;if(!l&&n==null&&!Sc(u,xe()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(jt(g.path,e)||jt(e,g.path))},f=E_(i.allWrites,d,e),p=n||le.EMPTY_NODE;return vi(f,p)}}}function KC(i,e,n){let s=le.EMPTY_NODE;const l=Ar(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild($e,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=tr(i.visibleWrites,e);return n.forEachChild($e,(d,f)=>{const p=vi(tr(u,new De(d)),f);s=s.updateImmediateChild(d,p)}),Pm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=tr(i.visibleWrites,e);return Pm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function QC(i,e,n,s,l){F(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Ve(e,n);if(Sc(i.visibleWrites,u))return null;{const d=tr(i.visibleWrites,u);return Cc(d)?l.getChild(n):vi(d,l.getChild(n))}}function YC(i,e,n,s){const l=Ve(e,n),u=Ar(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=tr(i.visibleWrites,l);return vi(d,s.getNode().getImmediateChild(n))}else return null}function XC(i,e){return Ar(i.visibleWrites,e)}function JC(i,e,n,s,l,u,d){let f;const p=tr(i.visibleWrites,e),g=Ar(p,xe());if(g!=null)f=g;else if(n!=null)f=vi(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const w=[],_=d.getCompare(),y=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let N=y.getNext();for(;N&&w.length<l;)_(N,s)!==0&&w.push(N),N=y.getNext();return w}else return[]}function ZC(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function Nl(i,e,n,s){return S_(i.writeTree,i.treePath,e,n,s)}function cd(i,e){return KC(i.writeTree,i.treePath,e)}function bm(i,e,n,s){return QC(i.writeTree,i.treePath,e,n,s)}function xl(i,e){return XC(i.writeTree,Ve(i.treePath,e))}function ek(i,e,n,s,l,u){return JC(i.writeTree,i.treePath,e,n,s,l,u)}function dd(i,e,n){return YC(i.writeTree,i.treePath,e,n)}function C_(i,e){return k_(Ve(i.treePath,e),i.writeTree)}function k_(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,As(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,bs(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,gi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,As(s,e.snapshotNode,l.oldSnap));else throw wi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const I_=new nk;class hd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Rr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pr(this.viewCache_),u=ek(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(i){return{filter:i}}function ik(i,e){F(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function sk(i,e,n,s,l){const u=new tk;let d,f;if(n.type===Xt.OVERWRITE){const g=n;g.source.fromUser?d=kc(i,e,g.path,g.snap,s,l,u):(F(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!Se(g.path),d=Rl(i,e,g.path,g.snap,s,l,f,u))}else if(n.type===Xt.MERGE){const g=n;g.source.fromUser?d=lk(i,e,g.path,g.children,s,l,u):(F(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=Ic(i,e,g.path,g.children,s,l,f,u))}else if(n.type===Xt.ACK_USER_WRITE){const g=n;g.revert?d=ck(i,e,g.path,s,l,u):d=ak(i,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Xt.LISTEN_COMPLETE)d=uk(i,e,n.path,s,u);else throw wi("Unknown operation type: "+n.type);const p=u.getChanges();return ok(e,d,p),{viewCache:d,changes:p}}function ok(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=wc(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(__(wc(e)))}}function T_(i,e,n,s,l,u){const d=e.eventCache;if(xl(s,n)!=null)return e;{let f,p;if(Se(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Pr(e),w=g instanceof le?g:le.EMPTY_NODE,_=cd(s,w);f=i.filter.updateFullNode(e.eventCache.getNode(),_,u)}else{const g=Nl(s,Pr(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=_e(n);if(g===".priority"){F(nr(n)===1,"Can't have a priority with additional path components");const w=d.getNode();p=e.serverCache.getNode();const _=bm(s,n,w,p);_!=null?f=i.filter.updatePriority(w,_):f=d.getNode()}else{const w=Fe(n);let _;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const y=bm(s,n,d.getNode(),p);y!=null?_=d.getNode().getImmediateChild(g).updateChild(w,y):_=d.getNode().getImmediateChild(g)}else _=dd(s,g,e.serverCache);_!=null?f=i.filter.updateChild(d.getNode(),g,_,w,l,u):f=d.getNode()}}return Cs(e,f,d.isFullyInitialized()||Se(n),i.filter.filtersNodes())}}function Rl(i,e,n,s,l,u,d,f){const p=e.serverCache;let g;const w=d?i.filter:i.filter.getIndexedFilter();if(Se(n))g=w.updateFullNode(p.getNode(),s,null);else if(w.filtersNodes()&&!p.isFiltered()){const N=p.getNode().updateChild(n,s);g=w.updateFullNode(p.getNode(),N,null)}else{const N=_e(n);if(!p.isCompleteForPath(n)&&nr(n)>1)return e;const P=Fe(n),z=p.getNode().getImmediateChild(N).updateChild(P,s);N===".priority"?g=w.updatePriority(p.getNode(),z):g=w.updateChild(p.getNode(),N,z,P,I_,null)}const _=y_(e,g,p.isFullyInitialized()||Se(n),w.filtersNodes()),y=new hd(l,_,u);return T_(i,_,n,l,y,f)}function kc(i,e,n,s,l,u,d){const f=e.eventCache;let p,g;const w=new hd(l,e,u);if(Se(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),p=Cs(e,g,!0,i.filter.filtersNodes());else{const _=_e(n);if(_===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),p=Cs(e,g,f.isFullyInitialized(),f.isFiltered());else{const y=Fe(n),N=f.getNode().getImmediateChild(_);let P;if(Se(y))P=s;else{const j=w.getCompleteChild(_);j!=null?ed(y)===".priority"&&j.getChild(c_(y)).isEmpty()?P=j:P=j.updateChild(y,s):P=le.EMPTY_NODE}if(N.equals(P))p=e;else{const j=i.filter.updateChild(f.getNode(),_,P,y,w,d);p=Cs(e,j,f.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function Am(i,e){return i.eventCache.isCompleteForChild(e)}function lk(i,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const w=Ve(n,p);Am(e,_e(w))&&(f=kc(i,f,w,g,l,u,d))}),s.foreach((p,g)=>{const w=Ve(n,p);Am(e,_e(w))||(f=kc(i,f,w,g,l,u,d))}),f}function Om(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Ic(i,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Se(n)?g=s:g=new Me(null).setTree(n,s);const w=e.serverCache.getNode();return g.children.inorderTraversal((_,y)=>{if(w.hasChild(_)){const N=e.serverCache.getNode().getImmediateChild(_),P=Om(i,N,y);p=Rl(i,p,new De(_),P,l,u,d,f)}}),g.children.inorderTraversal((_,y)=>{const N=!e.serverCache.isCompleteForChild(_)&&y.value===null;if(!w.hasChild(_)&&!N){const P=e.serverCache.getNode().getImmediateChild(_),j=Om(i,P,y);p=Rl(i,p,new De(_),j,l,u,d,f)}}),p}function ak(i,e,n,s,l,u,d){if(xl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Se(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Rl(i,e,n,p.getNode().getChild(n),l,u,f,d);if(Se(n)){let g=new Me(null);return p.getNode().forEachChild(ci,(w,_)=>{g=g.set(new De(w),_)}),Ic(i,e,n,g,l,u,f,d)}else return e}else{let g=new Me(null);return s.foreach((w,_)=>{const y=Ve(n,w);p.isCompleteForPath(y)&&(g=g.set(w,p.getNode().getChild(y)))}),Ic(i,e,n,g,l,u,f,d)}}function uk(i,e,n,s,l){const u=e.serverCache,d=y_(e,u.getNode(),u.isFullyInitialized()||Se(n),u.isFiltered());return T_(i,d,n,s,I_,l)}function ck(i,e,n,s,l,u){let d;if(xl(s,n)!=null)return e;{const f=new hd(s,e,l),p=e.eventCache.getNode();let g;if(Se(n)||_e(n)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=Nl(s,Pr(e));else{const _=e.serverCache.getNode();F(_ instanceof le,"serverChildren would be complete if leaf node"),w=cd(s,_)}w=w,g=i.filter.updateFullNode(p,w,u)}else{const w=_e(n);let _=dd(s,w,e.serverCache);_==null&&e.serverCache.isCompleteForChild(w)&&(_=p.getImmediateChild(w)),_!=null?g=i.filter.updateChild(p,w,_,Fe(n),f,u):e.eventCache.getNode().hasChild(w)?g=i.filter.updateChild(p,w,le.EMPTY_NODE,Fe(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Nl(s,Pr(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||xl(s,xe())!=null,Cs(e,g,d,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new id(s.getIndex()),u=RC(s);this.processor_=rk(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(le.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(le.EMPTY_NODE,f.getNode(),null),w=new Rr(p,d.isFullyInitialized(),l.filtersNodes()),_=new Rr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=zl(_,w),this.eventGenerator_=new MC(this.query_)}get query(){return this.query_}}function hk(i){return i.viewCache_.serverCache.getNode()}function fk(i,e){const n=Pr(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!Se(e)&&!n.getImmediateChild(_e(e)).isEmpty())?n.getChild(e):null}function Dm(i){return i.eventRegistrations_.length===0}function pk(i,e){i.eventRegistrations_.push(e)}function Lm(i,e,n){const s=[];if(n){F(e==null,"A cancel should cancel all event registrations.");const l=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=l}else i.eventRegistrations_=[];return s}function Mm(i,e,n,s){e.type===Xt.MERGE&&e.source.queryId!==null&&(F(Pr(i.viewCache_),"We should always have a full cache before handling merges"),F(wc(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=sk(i.processor_,l,e,n,s);return ik(i.processor_,u.viewCache),F(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,N_(i,u.changes,u.viewCache.eventCache.getNode(),null)}function mk(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($e,(u,d)=>{s.push(gi(u,d))}),n.isFullyInitialized()&&s.push(__(n.getNode())),N_(i,s,n.getNode(),e)}function N_(i,e,n,s){const l=s?[s]:i.eventRegistrations_;return FC(i.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl;class gk{constructor(){this.views=new Map}}function _k(i){F(!Pl,"__referenceConstructor has already been defined"),Pl=i}function vk(){return F(Pl,"Reference.ts has not been loaded"),Pl}function yk(i){return i.views.size===0}function fd(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return F(u!=null,"SyncTree gave us an op for an invalid query."),Mm(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(Mm(d,e,n,s));return u}}function wk(i,e,n,s,l){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let f=Nl(n,l?s:null),p=!1;f?p=!0:s instanceof le?(f=cd(n,s),p=!1):(f=le.EMPTY_NODE,p=!1);const g=zl(new Rr(f,p,!1),new Rr(s,l,!1));return new dk(e,g)}return d}function Ek(i,e,n,s,l,u){const d=wk(i,e,s,l,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),pk(d,n),mk(d,n)}function Sk(i,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=rr(i);if(l==="default")for(const[p,g]of i.views.entries())d=d.concat(Lm(g,n,s)),Dm(g)&&(i.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=i.views.get(l);p&&(d=d.concat(Lm(p,n,s)),Dm(p)&&(i.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!rr(i)&&u.push(new(vk())(e._repo,e._path)),{removed:u,events:d}}function x_(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function di(i,e){let n=null;for(const s of i.views.values())n=n||fk(s,e);return n}function R_(i,e){if(e._queryParams.loadsAllData())return Wl(i);{const s=e._queryIdentifier;return i.views.get(s)}}function P_(i,e){return R_(i,e)!=null}function rr(i){return Wl(i)!=null}function Wl(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl;function Ck(i){F(!bl,"__referenceConstructor has already been defined"),bl=i}function kk(){return F(bl,"Reference.ts has not been loaded"),bl}let Ik=1;class Fm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Me(null),this.pendingWriteTree_=ZC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function b_(i,e,n,s,l){return WC(i.pendingWriteTree_,e,n,s,l),l?Ti(i,new xr(od(),e,n)):[]}function Tk(i,e,n,s){BC(i.pendingWriteTree_,e,n,s);const l=Me.fromObject(n);return Ti(i,new _i(od(),e,l))}function Xn(i,e,n=!1){const s=HC(i.pendingWriteTree_,e);if(VC(i.pendingWriteTree_,e)){let u=new Me(null);return s.snap!=null?u=u.set(xe(),!0):ut(s.children,d=>{u=u.set(new De(d),!0)}),Ti(i,new Tl(s.path,u,n))}else return[]}function Bl(i,e,n){return Ti(i,new xr(ld(),e,n))}function Nk(i,e,n){const s=Me.fromObject(n);return Ti(i,new _i(ld(),e,s))}function xk(i,e){return Ti(i,new Ds(ld(),e))}function Rk(i,e,n){const s=md(i,n);if(s){const l=gd(s),u=l.path,d=l.queryId,f=It(u,e),p=new Ds(ad(d),f);return _d(i,u,p)}else return[]}function Tc(i,e,n,s,l=!1){const u=e._path,d=i.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||P_(d,e))){const p=Sk(d,e,n,s);yk(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const w=g.findIndex(y=>y._queryParams.loadsAllData())!==-1,_=i.syncPointTree_.findOnPath(u,(y,N)=>rr(N));if(w&&!_){const y=i.syncPointTree_.subtree(u);if(!y.isEmpty()){const N=Ak(y);for(let P=0;P<N.length;++P){const j=N[P],z=j.query,ke=D_(i,j);i.listenProvider_.startListening(Is(z),Al(i,z),ke.hashFn,ke.onComplete)}}}!_&&g.length>0&&!s&&(w?i.listenProvider_.stopListening(Is(e),null):g.forEach(y=>{const N=i.queryToTagMap.get(Hl(y));i.listenProvider_.stopListening(Is(y),N)}))}Ok(i,g)}return f}function Pk(i,e,n,s){const l=md(i,s);if(l!=null){const u=gd(l),d=u.path,f=u.queryId,p=It(d,e),g=new xr(ad(f),p,n);return _d(i,d,g)}else return[]}function bk(i,e,n,s){const l=md(i,s);if(l){const u=gd(l),d=u.path,f=u.queryId,p=It(d,e),g=Me.fromObject(n),w=new _i(ad(f),p,g);return _d(i,d,w)}else return[]}function Um(i,e,n,s=!1){const l=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(l,(y,N)=>{const P=It(y,l);u=u||di(N,P),d=d||rr(N)});let f=i.syncPointTree_.get(l);f?(d=d||rr(f),u=u||di(f,xe())):(f=new gk,i.syncPointTree_=i.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=le.EMPTY_NODE,i.syncPointTree_.subtree(l).foreachChild((N,P)=>{const j=di(P,xe());j&&(u=u.updateImmediateChild(N,j))}));const g=P_(f,e);if(!g&&!e._queryParams.loadsAllData()){const y=Hl(e);F(!i.queryToTagMap.has(y),"View does not exist, but we have a tag");const N=Dk();i.queryToTagMap.set(y,N),i.tagToQueryMap.set(N,y)}const w=ud(i.pendingWriteTree_,l);let _=Ek(f,e,n,w,u,p);if(!g&&!d&&!s){const y=R_(f,e);_=_.concat(Lk(i,e,y))}return _}function pd(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const p=It(d,e),g=di(f,p);if(g)return g});return S_(l,e,u,n,!0)}function Ti(i,e){return A_(e,i.syncPointTree_,null,ud(i.pendingWriteTree_,xe()))}function A_(i,e,n,s){if(Se(i.path))return O_(i,e,n,s);{const l=e.get(xe());n==null&&l!=null&&(n=di(l,xe()));let u=[];const d=_e(i.path),f=i.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,w=C_(s,d);u=u.concat(A_(f,p,g,w))}return l&&(u=u.concat(fd(l,i,s,n))),u}}function O_(i,e,n,s){const l=e.get(xe());n==null&&l!=null&&(n=di(l,xe()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=C_(s,d),w=i.operationForChild(d);w&&(u=u.concat(O_(w,f,p,g)))}),l&&(u=u.concat(fd(l,i,s,n))),u}function D_(i,e){const n=e.query,s=Al(i,n);return{hashFn:()=>(hk(e)||le.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?Rk(i,n._path,s):xk(i,n._path);{const u=NS(l,n);return Tc(i,n,null,u)}}}}function Al(i,e){const n=Hl(e);return i.queryToTagMap.get(n)}function Hl(i){return i._path.toString()+"$"+i._queryIdentifier}function md(i,e){return i.tagToQueryMap.get(e)}function gd(i){const e=i.indexOf("$");return F(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new De(i.substr(0,e))}}function _d(i,e,n){const s=i.syncPointTree_.get(e);F(s,"Missing sync point for query tag that we're tracking");const l=ud(i.pendingWriteTree_,e);return fd(s,n,l,null)}function Ak(i){return i.fold((e,n,s)=>{if(n&&rr(n))return[Wl(n)];{let l=[];return n&&(l=x_(n)),ut(s,(u,d)=>{l=l.concat(d)}),l}})}function Is(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(kk())(i._repo,i._path):i}function Ok(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Hl(s),u=i.queryToTagMap.get(l);i.queryToTagMap.delete(l),i.tagToQueryMap.delete(u)}}}function Dk(){return Ik++}function Lk(i,e,n){const s=e._path,l=Al(i,e),u=D_(i,n),d=i.listenProvider_.startListening(Is(e),l,u.hashFn,u.onComplete),f=i.syncPointTree_.subtree(s);if(l)F(!rr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,w,_)=>{if(!Se(g)&&w&&rr(w))return[Wl(w).query];{let y=[];return w&&(y=y.concat(x_(w).map(N=>N.query))),ut(_,(N,P)=>{y=y.concat(P)}),y}});for(let g=0;g<p.length;++g){const w=p[g];i.listenProvider_.stopListening(Is(w),Al(i,w))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vd(n)}node(){return this.node_}}class yd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new yd(this.syncTree_,n)}node(){return pd(this.syncTree_,this.path_)}}const Mk=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},jm=function(i,e,n){if(!i||typeof i!="object")return i;if(F(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return Fk(i[".sv"],e,n);if(typeof i[".sv"]=="object")return Uk(i[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},Fk=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+i)}},Uk=function(i,e,n){i.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&F(!1,"Unexpected increment value: "+s);const l=e.node();if(F(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},L_=function(i,e,n,s){return wd(e,new yd(n,i),s)},M_=function(i,e,n){return wd(i,new vd(e),n)};function wd(i,e,n){const s=i.getPriority().val(),l=jm(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=jm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new et(f,nt(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new et(l))),d.forEachChild($e,(f,p)=>{const g=wd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Sd(i,e){let n=e instanceof De?e:new De(e),s=i,l=_e(n);for(;l!==null;){const u=hi(s.node.children,l)||{children:{},childCount:0};s=new Ed(l,s,u),n=Fe(n),l=_e(n)}return s}function Ni(i){return i.node.value}function F_(i,e){i.node.value=e,Nc(i)}function U_(i){return i.node.childCount>0}function jk(i){return Ni(i)===void 0&&!U_(i)}function Vl(i,e){ut(i.node.children,(n,s)=>{e(new Ed(n,i,s))})}function j_(i,e,n,s){n&&!s&&e(i),Vl(i,l=>{j_(l,e,!0,s)})}function zk(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Vs(i){return new De(i.parent===null?i.name:Vs(i.parent)+"/"+i.name)}function Nc(i){i.parent!==null&&Wk(i.parent,i.name,i)}function Wk(i,e,n){const s=jk(n),l=dn(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,Nc(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,Nc(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=/[\[\].#$\/\u0000-\u001F\u007F]/,Hk=/[\[\].#$\u0000-\u001F\u007F]/,ic=10*1024*1024,Cd=function(i){return typeof i=="string"&&i.length!==0&&!Bk.test(i)},z_=function(i){return typeof i=="string"&&i.length!==0&&!Hk.test(i)},Vk=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),z_(i)},$k=function(i){return i===null||typeof i=="string"||typeof i=="number"&&!Qc(i)||i&&typeof i=="object"&&dn(i,".sv")},W_=function(i,e,n,s){s&&e===void 0||$l(Dl(i,"value"),e,n)},$l=function(i,e,n){const s=n instanceof De?new lC(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+wr(s));if(typeof e=="function")throw new Error(i+"contains a function "+wr(s)+" with contents = "+e.toString());if(Qc(e))throw new Error(i+"contains "+e.toString()+" "+wr(s));if(typeof e=="string"&&e.length>ic/3&&Ll(e)>ic)throw new Error(i+"contains a string greater than "+ic+" utf8 bytes "+wr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(ut(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!Cd(d)))throw new Error(i+" contains an invalid key ("+d+") "+wr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aC(s,d),$l(i,f,s),uC(s)}),l&&u)throw new Error(i+' contains ".value" child '+wr(s)+" in addition to actual children.")}},Gk=function(i,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=Ps(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!Cd(u[d]))throw new Error(i+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(oC);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&jt(l,s))throw new Error(i+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},qk=function(i,e,n,s){const l=Dl(i,"values");if(typeof e!="object"||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];ut(e,(d,f)=>{const p=new De(d);if($l(l,f,Ve(n,p)),ed(p)===".priority"&&!$k(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),Gk(l,u)},B_=function(i,e,n,s){if(!z_(n))throw new Error(Dl(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Kk=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),B_(i,e,n)},kd=function(i,e){if(_e(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},Qk=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Vk(n))throw new Error(Dl(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gl(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!td(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function H_(i,e,n){Gl(i,n),V_(i,s=>td(s,e))}function en(i,e,n){Gl(i,n),V_(i,s=>jt(s,e)||jt(e,s))}function V_(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(Xk(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function Xk(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();Es&&at("event: "+n.toString()),Ii(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk="repo_interrupt",Zk=25;class eI{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Il(),this.transactionQueueTree_=new Ed,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tI(i,e,n){if(i.stats_=Jc(i.repoInfo_),i.forceRestClient_||bS())i.server_=new kl(i.repoInfo_,(s,l,u,d)=>{zm(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Wm(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new kn(i.repoInfo_,e,(s,l,u,d)=>{zm(i,s,l,u,d)},s=>{Wm(i,s)},s=>{nI(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=MS(i.repoInfo_,()=>new LC(i.stats_,i.server_)),i.infoData_=new PC,i.infoSyncTree_=new Fm({startListening:(s,l,u,d)=>{let f=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(f=Bl(i.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Id(i,"connected",!1),i.serverSyncTree_=new Fm({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);en(i.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function $_(i){const n=i.infoData_.getNode(new De(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ql(i){return Mk({timestamp:$_(i)})}function zm(i,e,n,s,l){i.dataUpdateCount++;const u=new De(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=fl(n,g=>nt(g));d=bk(i.serverSyncTree_,u,p,l)}else{const p=nt(n);d=Pk(i.serverSyncTree_,u,p,l)}else if(s){const p=fl(n,g=>nt(g));d=Nk(i.serverSyncTree_,u,p)}else{const p=nt(n);d=Bl(i.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=yi(i,u)),en(i.eventQueue_,f,d)}function Wm(i,e){Id(i,"connected",e),e===!1&&sI(i)}function nI(i,e){ut(e,(n,s)=>{Id(i,n,s)})}function Id(i,e,n){const s=new De("/.info/"+e),l=nt(n);i.infoData_.updateSnapshot(s,l);const u=Bl(i.infoSyncTree_,s,l);en(i.eventQueue_,s,u)}function Td(i){return i.nextWriteId_++}function rI(i,e,n,s,l){Kl(i,"set",{path:e.toString(),value:n,priority:s});const u=ql(i),d=nt(n,s),f=pd(i.serverSyncTree_,e),p=M_(d,f,u),g=Td(i),w=b_(i.serverSyncTree_,e,p,g,!0);Gl(i.eventQueue_,w),i.server_.put(e.toString(),d.val(!0),(y,N)=>{const P=y==="ok";P||_t("set at "+e+" failed: "+y);const j=Xn(i.serverSyncTree_,g,!P);en(i.eventQueue_,e,j),xc(i,l,y,N)});const _=xd(i,e);yi(i,_),en(i.eventQueue_,_,[])}function iI(i,e,n,s){Kl(i,"update",{path:e.toString(),value:n});let l=!0;const u=ql(i),d={};if(ut(n,(f,p)=>{l=!1,d[f]=L_(Ve(e,f),nt(p),i.serverSyncTree_,u)}),l)at("update() called with empty data.  Don't do anything."),xc(i,s,"ok",void 0);else{const f=Td(i),p=Tk(i.serverSyncTree_,e,d,f);Gl(i.eventQueue_,p),i.server_.merge(e.toString(),n,(g,w)=>{const _=g==="ok";_||_t("update at "+e+" failed: "+g);const y=Xn(i.serverSyncTree_,f,!_),N=y.length>0?yi(i,e):e;en(i.eventQueue_,N,y),xc(i,s,g,w)}),ut(n,g=>{const w=xd(i,Ve(e,g));yi(i,w)}),en(i.eventQueue_,e,[])}}function sI(i){Kl(i,"onDisconnectEvents");const e=ql(i),n=Il();yc(i.onDisconnect_,xe(),(l,u)=>{const d=L_(l,u,i.serverSyncTree_,e);v_(n,l,d)});let s=[];yc(n,xe(),(l,u)=>{s=s.concat(Bl(i.serverSyncTree_,l,u));const d=xd(i,l);yi(i,d)}),i.onDisconnect_=Il(),en(i.eventQueue_,xe(),s)}function oI(i,e,n){let s;_e(e._path)===".info"?s=Um(i.infoSyncTree_,e,n):s=Um(i.serverSyncTree_,e,n),H_(i.eventQueue_,e._path,s)}function lI(i,e,n){let s;_e(e._path)===".info"?s=Tc(i.infoSyncTree_,e,n):s=Tc(i.serverSyncTree_,e,n),H_(i.eventQueue_,e._path,s)}function aI(i){i.persistentConnection_&&i.persistentConnection_.interrupt(Jk)}function Kl(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),at(n,...e)}function xc(i,e,n,s){e&&Ii(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function G_(i,e,n){return pd(i.serverSyncTree_,e,n)||le.EMPTY_NODE}function Nd(i,e=i.transactionQueueTree_){if(e||Ql(i,e),Ni(e)){const n=K_(i,e);F(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&uI(i,Vs(e),n)}else U_(e)&&Vl(e,n=>{Nd(i,n)})}function uI(i,e,n){const s=n.map(g=>g.currentWriteId),l=G_(i,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const w=n[g];F(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const _=It(e,w.path);u=u.updateChild(_,w.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;i.server_.put(p.toString(),f,g=>{Kl(i,"transaction put response",{path:p.toString(),status:g});let w=[];if(g==="ok"){const _=[];for(let y=0;y<n.length;y++)n[y].status=2,w=w.concat(Xn(i.serverSyncTree_,n[y].currentWriteId)),n[y].onComplete&&_.push(()=>n[y].onComplete(null,!0,n[y].currentOutputSnapshotResolved)),n[y].unwatcher();Ql(i,Sd(i.transactionQueueTree_,e)),Nd(i,i.transactionQueueTree_),en(i.eventQueue_,e,w);for(let y=0;y<_.length;y++)Ii(_[y])}else{if(g==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{_t("transaction at "+p.toString()+" failed: "+g);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=g}yi(i,e)}},d)}function yi(i,e){const n=q_(i,e),s=Vs(n),l=K_(i,n);return cI(i,l,s),s}function cI(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=It(n,p.path);let w=!1,_;if(F(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)w=!0,_=p.abortReason,l=l.concat(Xn(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=Zk)w=!0,_="maxretry",l=l.concat(Xn(i.serverSyncTree_,p.currentWriteId,!0));else{const y=G_(i,p.path,d);p.currentInputSnapshot=y;const N=e[f].update(y.val());if(N!==void 0){$l("transaction failed: Data returned ",N,p.path);let P=nt(N);typeof N=="object"&&N!=null&&dn(N,".priority")||(P=P.updatePriority(y.getPriority()));const z=p.currentWriteId,ke=ql(i),ye=M_(P,y,ke);p.currentOutputSnapshotRaw=P,p.currentOutputSnapshotResolved=ye,p.currentWriteId=Td(i),d.splice(d.indexOf(z),1),l=l.concat(b_(i.serverSyncTree_,p.path,ye,p.currentWriteId,p.applyLocally)),l=l.concat(Xn(i.serverSyncTree_,z,!0))}else w=!0,_="nodata",l=l.concat(Xn(i.serverSyncTree_,p.currentWriteId,!0))}en(i.eventQueue_,n,l),l=[],w&&(e[f].status=2,function(y){setTimeout(y,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(_==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(_),!1,null))))}Ql(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)Ii(s[f]);Nd(i,i.transactionQueueTree_)}function q_(i,e){let n,s=i.transactionQueueTree_;for(n=_e(e);n!==null&&Ni(s)===void 0;)s=Sd(s,n),e=Fe(e),n=_e(e);return s}function K_(i,e){const n=[];return Q_(i,e,n),n.sort((s,l)=>s.order-l.order),n}function Q_(i,e,n){const s=Ni(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Vl(e,l=>{Q_(i,l,n)})}function Ql(i,e){const n=Ni(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,F_(e,n.length>0?n:void 0)}Vl(e,s=>{Ql(i,s)})}function xd(i,e){const n=Vs(q_(i,e)),s=Sd(i.transactionQueueTree_,e);return zk(s,l=>{sc(i,l)}),sc(i,s),j_(s,l=>{sc(i,l)}),n}function sc(i,e){const n=Ni(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(F(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(F(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Xn(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?F_(e,void 0):n.length=u+1,en(i.eventQueue_,Vs(e),l);for(let d=0;d<s.length;d++)Ii(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function hI(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):_t(`Invalid query segment '${n}' in query '${i}'`)}return e}const Bm=function(i,e){const n=fI(i),s=n.namespace;n.domain==="firebase.com"&&Nn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Nn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||SS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new t_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new De(n.pathString)}},fI=function(i){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let w=i.indexOf("/");w===-1&&(w=i.length);let _=i.indexOf("?");_===-1&&(_=i.length),e=i.substring(0,Math.min(w,_)),w<_&&(l=dI(i.substring(w,_)));const y=hI(i.substring(Math.min(i.length,_)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const N=e.slice(0,g);if(N.toLowerCase()==="localhost")n="localhost";else if(N.split(".").length<=2)n=N;else{const P=e.indexOf(".");s=e.substring(0,P).toLowerCase(),n=e.substring(P+1),u=s}"ns"in y&&(u=y.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",pI=function(){let i=0;const e=[];return function(n){const s=n===i;i=n;let l;const u=new Array(8);for(l=7;l>=0;l--)u[l]=Hm.charAt(n%64),n=Math.floor(n/64);F(n===0,"Cannot push at time == 0");let d=u.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)d+=Hm.charAt(e[l]);return F(d.length===20,"nextPushId: Length should be 20."),d}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+rt(this.snapshot.exportVal())}}class gI{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return Se(this._path)?null:ed(this._path)}get ref(){return new sr(this._repo,this._path)}get _queryIdentifier(){const e=Nm(this._queryParams),n=Yc(e);return n==="{}"?"default":n}get _queryObject(){return Nm(this._queryParams)}isEqual(e){if(e=bt(e),!(e instanceof Rd))return!1;const n=this._repo===e._repo,s=td(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+sC(this._path)}}class sr extends Rd{constructor(e,n){super(e,n,new sd,!1)}get parent(){const e=c_(this._path);return e===null?null:new sr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ol{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new De(e),s=Ls(this.ref,e);return new Ol(this._node.getChild(n),s,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Ol(l,Ls(this.ref,s),$e)))}hasChild(e){const n=new De(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tT(i,e){return i=bt(i),i._checkNotDeleted("ref"),e!==void 0?Ls(i._root,e):i._root}function Ls(i,e){return i=bt(i),_e(i._path)===null?Kk("child","path",e):B_("child","path",e),new sr(i._repo,Ve(i._path,e))}function nT(i,e){i=bt(i),kd("push",i._path),W_("push",e,i._path,!0);const n=$_(i._repo),s=pI(n),l=Ls(i,s),u=Ls(i,s);let d;return e!=null?d=Y_(u,e).then(()=>u):d=Promise.resolve(u),l.then=d.then.bind(d),l.catch=d.then.bind(d,void 0),l}function rT(i){return kd("remove",i._path),Y_(i,null)}function Y_(i,e){i=bt(i),kd("set",i._path),W_("set",e,i._path,!1);const n=new Ms;return rI(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}function iT(i,e){qk("update",e,i._path);const n=new Ms;return iI(i._repo,i._path,e,n.wrapCallback(()=>{})),n.promise}class Pd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new mI("value",this,new Ol(e.snapshotNode,new sr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gI(this,e,n):null}matches(e){return e instanceof Pd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function vI(i,e,n,s,l){const u=new _I(n,void 0),d=new Pd(u);return oI(i._repo,i,d),()=>lI(i._repo,i,d)}function sT(i,e,n,s){return vI(i,"value",e)}_k(sr);Ck(sr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="FIREBASE_DATABASE_EMULATOR_HOST",Rc={};let wI=!1;function EI(i,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),d=Ei(u);i.repoInfo_=new t_(e,d,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(i.authTokenProvider_=s)}function SI(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||Nn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),at("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=Bm(u,l),f=d.repoInfo,p;typeof process<"u"&&um&&(p=um[yI]),p?(u=`http://${p}?ns=${f.namespace}`,d=Bm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new OS(i.name,i.options,e);Qk("Invalid Firebase Database URL",d),Se(d.path)||Nn("Database URL must point to the root of a Firebase Database (not including a child path).");const w=kI(f,i,g,new AS(i,n));return new II(w,i)}function CI(i,e){const n=Rc[e];(!n||n[i.key]!==i)&&Nn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),aI(i),delete n[i.key]}function kI(i,e,n,s){let l=Rc[e.name];l||(l={},Rc[e.name]=l);let u=l[i.toURLString()];return u&&Nn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new eI(i,wI,n,s),l[i.toURLString()]=u,u}class II{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sr(this._repo,xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nn("Cannot call "+e+" on a deleted database.")}}function TI(i=ag(),e){const n=Fc(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=H0("database");s&&NI(n,...s)}return n}function NI(i,e,n,s={}){i=bt(i),i._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=i._repoInternal;if(i._instanceStarted){if(l===i._repoInternal.repoInfo_.host&&kr(s,u.repoInfo_.emulatorOptions))return;Nn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&Nn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new cl(cl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:V0(s.mockUserToken,i.app.options.projectId);d=new cl(f)}Ei(e)&&(eg(e),tg("Database",!0)),EI(u,l,s,d)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(i){gS(Ci),fi(new Ir("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return SI(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),er(cm,dm,i),er(cm,dm,"esm2017")}kn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};kn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};xI();const RI={apiKey:"AIzaSyAMDp5WhCZy0tDz-_VcN3bz8HUW2Yp0lw0",authDomain:"personal-portfolio-37a0a.firebaseapp.com",databaseURL:"https://personal-portfolio-37a0a-default-rtdb.firebaseio.com",projectId:"personal-portfolio-37a0a",storageBucket:"personal-portfolio-37a0a.appspot.com",messagingSenderId:"695560029777",appId:"1:695560029777:web:2f666fd6fe7aa39b0c1a70",measurementId:"G-64P0PSRQN5"},X_=lg(RI),PI=pS(X_),oT=TI(X_),lT=new wn,J_=de.createContext();function bI({children:i}){const[e,n]=de.useState(null),[s,l]=de.useState(!0);de.useEffect(()=>PI.onAuthStateChanged(f=>{n(f),l(!1)}),[]);const u={currentUser:e,isAdmin:(e==null?void 0:e.email)==="e2340065@bit.uom.lk"};return x.jsx(J_.Provider,{value:u,children:!s&&i})}function aT(){return de.useContext(J_)}var oc,Vm;function AI(){if(Vm)return oc;Vm=1;var i="Expected a function",e=NaN,n="[object Symbol]",s=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,p=typeof el=="object"&&el&&el.Object===Object&&el,g=typeof self=="object"&&self&&self.Object===Object&&self,w=p||g||Function("return this")(),_=Object.prototype,y=_.toString,N=Math.max,P=Math.min,j=function(){return w.Date.now()};function z(L,Y,K){var ne,pe,V,M,X,G,we=0,Re=!1,Ee=!1,U=!0;if(typeof L!="function")throw new TypeError(i);Y=me(Y)||0,ye(K)&&(Re=!!K.leading,Ee="maxWait"in K,V=Ee?N(me(K.maxWait)||0,Y):V,U="trailing"in K?!!K.trailing:U);function Z($){var ae=ne,be=pe;return ne=pe=void 0,we=$,M=L.apply(be,ae),M}function W($){return we=$,X=setTimeout(te,Y),Re?Z($):M}function C($){var ae=$-G,be=$-we,ct=Y-ae;return Ee?P(ct,V-be):ct}function R($){var ae=$-G,be=$-we;return G===void 0||ae>=Y||ae<0||Ee&&be>=V}function te(){var $=j();if(R($))return re($);X=setTimeout(te,C($))}function re($){return X=void 0,U&&ne?Z($):(ne=pe=void 0,M)}function he(){X!==void 0&&clearTimeout(X),we=0,ne=G=pe=X=void 0}function fe(){return X===void 0?M:re(j())}function oe(){var $=j(),ae=R($);if(ne=arguments,pe=this,G=$,ae){if(X===void 0)return W(G);if(Ee)return X=setTimeout(te,Y),Z(G)}return X===void 0&&(X=setTimeout(te,Y)),M}return oe.cancel=he,oe.flush=fe,oe}function ke(L,Y,K){var ne=!0,pe=!0;if(typeof L!="function")throw new TypeError(i);return ye(K)&&(ne="leading"in K?!!K.leading:ne,pe="trailing"in K?!!K.trailing:pe),z(L,Y,{leading:ne,maxWait:Y,trailing:pe})}function ye(L){var Y=typeof L;return!!L&&(Y=="object"||Y=="function")}function Ce(L){return!!L&&typeof L=="object"}function H(L){return typeof L=="symbol"||Ce(L)&&y.call(L)==n}function me(L){if(typeof L=="number")return L;if(H(L))return e;if(ye(L)){var Y=typeof L.valueOf=="function"?L.valueOf():L;L=ye(Y)?Y+"":Y}if(typeof L!="string")return L===0?L:+L;L=L.replace(s,"");var K=u.test(L);return K||d.test(L)?f(L.slice(2),K?2:8):l.test(L)?e:+L}return oc=ke,oc}var OI=AI();const DI=Pc(OI),LI="/portfolio_web/assets/28ddd8026ef34e12f9a9c60c864b3e8e-removebg-preview-CGZkUJwy.webp";function MI(){const[i,e]=de.useState(!1),[n,s]=de.useState(0),[l,u]=de.useState("home"),[d,f]=de.useState(""),[p,g]=de.useState([]),[w,_]=de.useState(!1),y=de.useRef(null),N=de.useRef(null),P=de.useRef(null),j=[{icon:x.jsx(w0,{className:"w-4 h-4"}),id:"home",tooltip:"Home"},{icon:x.jsx(O0,{className:"w-4 h-4"}),id:"about",tooltip:"About"},{icon:x.jsx(g0,{className:"w-4 h-4"}),id:"education-journey",tooltip:"Education Journey"},{icon:x.jsx(T0,{className:"w-4 h-4"}),id:"dexterity",tooltip:"Dexterity"},{icon:x.jsx(p0,{className:"w-4 h-4"}),id:"professional-designations",tooltip:"Certifications"},{icon:x.jsx(v0,{className:"w-4 h-4"}),id:"professional-journey",tooltip:"Professional Journey"},{icon:x.jsx(x0,{className:"w-4 h-4"}),id:"creative-ventures",tooltip:"Creative Ventures"},{icon:x.jsx(P0,{className:"w-4 h-4"}),id:"design-scape",tooltip:"Design Scape"},{icon:x.jsx(k0,{className:"w-4 h-4"}),id:"testimonials",tooltip:"Testimonials"},{icon:x.jsx(S0,{className:"w-4 h-4"}),id:"contact",tooltip:"Contact"}];de.useEffect(()=>{const H=DI(()=>{const me=window.scrollY;s(me);const L=j.map(Y=>document.getElementById(Y.id)).filter(Boolean);for(let Y of L){const K=Y.getBoundingClientRect();if(K.top<=100&&K.bottom>=100){l!==Y.id&&u(Y.id);break}}},200);return window.addEventListener("scroll",H,{passive:!0}),()=>window.removeEventListener("scroll",H)},[l]);const z=(H,me="")=>{const L=document.getElementById(H);if(!L)return;const K=L.getBoundingClientRect().top+window.pageYOffset+-80;window.scrollTo({top:K,behavior:"smooth"}),u(H),me&&ke(L,me)},ke=(H,me)=>{if(!me)return;const L=new RegExp(`(${me})`,"gi");H.querySelectorAll(".search-highlight").forEach(ne=>{const pe=ne.parentNode;pe.replaceChild(document.createTextNode(ne.textContent),ne),pe.normalize()});const Y=document.createTreeWalker(H,NodeFilter.SHOW_TEXT,{acceptNode:ne=>L.test(ne.textContent)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),K=[];for(;Y.nextNode();)K.push(Y.currentNode);K.forEach(ne=>{const pe=document.createDocumentFragment();let V=0,M;for(L.lastIndex=0;M=L.exec(ne.textContent);){const G=ne.textContent.slice(V,M.index);G&&pe.appendChild(document.createTextNode(G));const we=document.createElement("span");we.className="search-highlight bg-yellow-300",we.textContent=M[0],pe.appendChild(we),V=L.lastIndex}const X=ne.textContent.slice(V);X&&pe.appendChild(document.createTextNode(X)),ne.parentNode.replaceChild(pe,ne)}),setTimeout(()=>{H.querySelectorAll(".search-highlight").forEach(ne=>{const pe=ne.parentNode;pe.replaceChild(document.createTextNode(ne.textContent),ne),pe.normalize()})},3e3)},ye=H=>{H.preventDefault();const me=d.trim().toLowerCase();if(!me){g([]),_(!1);return}const L=j.map(({id:Y,tooltip:K})=>{var X;const ne=document.getElementById(Y);if(!ne)return null;const pe=(X=ne.innerText)==null?void 0:X.toLowerCase(),V=pe.indexOf(me);if(V===-1)return null;let M=pe.slice(Math.max(0,V-30),V+me.length+30);return{id:Y,tooltip:K,snippet:M}}).filter(Boolean);g(L),_(!0)};de.useEffect(()=>{const H=me=>{var L,Y;(L=y.current)!=null&&L.contains(me.target)||_(!1),(Y=N.current)!=null&&Y.contains(me.target)||e(!1)};return document.addEventListener("mousedown",H),()=>document.removeEventListener("mousedown",H)},[]),de.useEffect(()=>{const H=()=>{window.innerWidth>=768&&e(!1)};return window.addEventListener("resize",H),()=>window.removeEventListener("resize",H)},[]);const Ce=Math.min(n/(document.documentElement.scrollHeight-window.innerHeight)*100,100);return x.jsxs(x.Fragment,{children:[x.jsx("div",{style:{width:`${Ce}%`,height:"2px",background:"linear-gradient(to right, #F97316, #FB923C, #FDBA74)",position:"fixed",top:0,left:0,zIndex:1e3,transition:"width 0.3s ease-in-out",boxShadow:"0 0 10px rgba(249,115,22,0.5)"},role:"progressbar","aria-valuenow":Ce,"aria-valuemin":"0","aria-valuemax":"100","aria-label":"Scroll progress"}),x.jsxs("nav",{ref:P,className:"fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-black/90 via-black/80 to-black/90 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 px-2 py-1.5 flex items-center space-x-3","aria-label":"Main navigation",children:[x.jsx("button",{onClick:()=>z("home"),className:`p-2 rounded-full transition mr-2 ${l==="home"?"text-white bg-gradient-to-br from-orange-600/80 to-amber-600/40 shadow-lg scale-110":"text-gray-400 hover:text-white hover:bg-white/10"}`,"aria-label":"Home",children:x.jsx("div",{className:"w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-xs",children:x.jsx("img",{src:$m,alt:"profile",className:" rounded-full"})})}),x.jsx("div",{className:"hidden md:flex items-center space-x-1",children:j.slice(1).map(H=>x.jsx("button",{onClick:()=>z(H.id),className:`relative p-2 rounded-full transition ${l===H.id?"text-white bg-gradient-to-br from-orange-600/80 to-amber-600/40 shadow-lg scale-110":"text-gray-400 hover:text-white hover:bg-white/10"}`,"aria-label":H.tooltip,children:H.icon},H.id))}),x.jsxs("div",{className:"relative md:hidden",children:[x.jsx("button",{onClick:()=>e(!i),className:"p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition","aria-expanded":i,"aria-controls":"mobile-menu","aria-label":i?"Close menu":"Open menu",children:x.jsxs("div",{className:"w-4 h-3 flex flex-col justify-between",children:[x.jsx("span",{className:`h-0.5 w-full bg-current rounded transition ${i?"rotate-45 translate-y-1":""}`}),x.jsx("span",{className:`h-0.5 w-full bg-current rounded transition ${i?"opacity-0":""}`}),x.jsx("span",{className:`h-0.5 w-full bg-current rounded transition ${i?"-rotate-45 -translate-y-1":""}`})]})}),x.jsx("div",{id:"mobile-menu",ref:N,className:`absolute bottom-full mb-3 left-[1px] w-48 origin-bottom transform transition-all duration-300 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/20 z-50 ${i?"max-h-96 opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"}`,children:x.jsxs("div",{className:"p-2 space-y-1",children:[j.slice(1).map(H=>x.jsxs("button",{onClick:()=>{z(H.id),e(!1)},className:`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition ${l===H.id?"bg-gradient-to-r from-orange-600/70 to-amber-600/30 text-white":"text-gray-300 hover:bg-white/10 hover:text-white"}`,children:[H.icon,x.jsx("span",{className:"text-xs",children:H.tooltip})]},H.id)),x.jsxs("form",{onSubmit:ye,className:"relative mt-2 flex items-center",role:"search","aria-label":"Website search",children:[x.jsx("input",{type:"search",autoComplete:"off",placeholder:"Search site...",className:"rounded-full px-3 py-1.5 bg-black/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-sm w-full",value:d,onChange:H=>f(H.target.value),onFocus:()=>_(p.length>0)}),x.jsxs("button",{type:"submit",className:"ml-2 px-3 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm transition flex items-center justify-center","aria-label":"Submit search",children:[x.jsx(Dp,{className:"w-4 h-4"}),x.jsx("span",{className:"ml-1 hidden sm:inline",children:"Search"})]})]})]})})]}),x.jsxs("form",{onSubmit:ye,className:"relative ml-3 flex items-center",ref:y,role:"search","aria-label":"Website search",children:[x.jsx("input",{type:"search",autoComplete:"off",placeholder:"Search site...",className:`rounded-full px-3 py-1.5 bg-black/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-sm
              w-28 sm:w-48 md:w-64`,value:d,onChange:H=>f(H.target.value),onFocus:()=>_(p.length>0)}),x.jsxs("button",{type:"submit",className:"ml-2 px-3 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm transition flex items-center justify-center","aria-label":"Submit search",children:[x.jsx(Dp,{className:"w-4 h-4"}),x.jsx("span",{className:"ml-1 hidden sm:inline",children:"Search"})]}),w&&x.jsxs("ul",{id:"search-results",role:"listbox",className:"absolute bottom-full mb-1 w-72 max-h-64 overflow-auto bg-black/90 backdrop-blur-lg rounded-md shadow-lg border border-orange-500 text-white z-50",children:[p.length===0&&x.jsx("li",{className:"px-3 py-2 text-gray-400",children:"No results found."}),p.map(({id:H,tooltip:me,snippet:L})=>x.jsxs("li",{role:"option",tabIndex:0,className:"cursor-pointer px-3 py-2 hover:bg-orange-600",onClick:()=>{z(H,d),_(!1),f("")},onKeyDown:Y=>{(Y.key==="Enter"||Y.key===" ")&&(Y.preventDefault(),z(H,d),_(!1),f(""))},children:[x.jsx("strong",{children:me}),x.jsx("p",{className:"text-xs mt-1 line-clamp-2",children:L})]},H))]})]})]}),"/* Robot Back to top - Hidden on mobile */",x.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`fixed bottom-4 right-4 w-16 h-16 shadow-lg flex items-center justify-center transition transform hover:scale-110 hidden sm:flex ${n>window.innerHeight/2?"opacity-100 scale-100":"opacity-0 scale-90 pointer-events-none"} z-40`,"aria-label":"Back to top",children:x.jsx("img",{src:LI,alt:"Robot - Back to top",className:"w-full h-full object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 robot-float"})}),x.jsx("style",{children:`
        .search-highlight { 
          background-color: #fde68a; 
          border-radius: 0.2rem; 
          transition: background-color 0.3s;
        }
        
        .line-clamp-2 { 
          display: -webkit-box; 
          -webkit-line-clamp: 2; 
          -webkit-box-orient: vertical; 
          overflow: hidden;
        }
        
        .robot-float {
          animation: robotFloat 3s ease-in-out infinite;
        }
        
        .robot-float:hover {
          animation: robotFloatFast 1.5s ease-in-out infinite;
        }
        
        @keyframes robotFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-6px) rotate(1deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(0deg); 
          }
          75% { 
            transform: translateY(-4px) rotate(-1deg); 
          }
        }
        
        @keyframes robotFloatFast {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1.25); 
          }
          25% { 
            transform: translateY(-8px) rotate(2deg) scale(1.25); 
          }
          50% { 
            transform: translateY(-12px) rotate(0deg) scale(1.25); 
          }
          75% { 
            transform: translateY(-6px) rotate(-2deg) scale(1.25); 
          }
        }
      `})]})}const FI="/portfolio_web/assets/bg3-CfJydx4d.webp",UI="/portfolio_web/assets/ChatGPT%20Image%20Nov%204_%202025_%2002_19_47%20PM-BzaaGtyk.webp",jI=de.lazy(()=>zt(()=>import("./Home-Be_Yxesi.js"),__vite__mapDeps([0,1,2,3,4]))),zI=de.lazy(()=>zt(()=>import("./videos-5gMtuB9t.js"),[])),WI=de.lazy(()=>zt(()=>import("./AboutUs-8VnVw1bT.js"),__vite__mapDeps([5,6]))),BI=de.lazy(()=>zt(()=>import("./Education-DVC_TIRM.js"),__vite__mapDeps([7,8,3,4]))),HI=de.lazy(()=>zt(()=>import("./SkillsData-BlB1fpQ4.js"),__vite__mapDeps([9,10,11,12]))),VI=de.lazy(()=>zt(()=>import("./LicensesCertifications-N09YX6wF.js"),[])),$I=de.lazy(()=>zt(()=>import("./WorkExperience-DcFSYPaV.js"),[])),GI=de.lazy(()=>zt(()=>import("./ProjectsData-BnnY0yq2.js"),__vite__mapDeps([13,14,6,12,8]))),qI=de.lazy(()=>zt(()=>import("./designpage-S3wisPU_.js"),__vite__mapDeps([15,2,14,10,8,11]))),KI=de.lazy(()=>zt(()=>import("./Testimonials-7OqdSDex.js"),__vite__mapDeps([16,4]))),QI=de.lazy(()=>zt(()=>import("./Contact-Ct06aOgH.js"),__vite__mapDeps([17,1,2]))),YI=de.lazy(()=>zt(()=>import("./Copyright-BIlImiGI.js"),__vite__mapDeps([18,10,8,4])));function XI(){const[i,e]=de.useState(!0),[n,s]=de.useState(0),[l,u]=de.useState(!1),[d,f]=de.useState(!1),p=[UI],w=[{primaryGradient:"from-purple-600 to-blue-600",primaryHoverGradient:"from-purple-500 to-blue-500",secondaryGradient:"from-orange-600 to-red-600",secondaryHoverGradient:"from-orange-500 to-red-500",cardGradient:"from-black/70 via-purple-900/20 to-blue-900/10",cardHoverShadow:"hover:shadow-purple-500/40",cardBorder:"hover:border-purple-400/50",glowEffect:"from-purple-500/20 to-blue-500/15",robotGlow:"from-orange-500/25 via-purple-500/15 to-cyan-500/20",accentColor:"text-cyan-400",badgeGradient:"from-purple-500/30 to-purple-600/20",badgeText:"text-purple-200",badgeBorder:"border-purple-400/40"},{primaryGradient:"from-emerald-600 to-teal-600",primaryHoverGradient:"from-emerald-500 to-teal-500",secondaryGradient:"from-amber-600 to-orange-600",secondaryHoverGradient:"from-amber-500 to-orange-500",cardGradient:"from-black/70 via-emerald-900/20 to-teal-900/10",cardHoverShadow:"hover:shadow-emerald-500/40",cardBorder:"hover:border-emerald-400/50",glowEffect:"from-emerald-500/20 to-teal-500/15",robotGlow:"from-amber-500/25 via-emerald-500/15 to-teal-500/20",accentColor:"text-emerald-400",badgeGradient:"from-emerald-500/30 to-emerald-600/20",badgeText:"text-emerald-200",badgeBorder:"border-emerald-400/40"}][n];return de.useEffect(()=>{u0.init({duration:600,once:!0});const _=()=>f(window.innerWidth<768);return _(),window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_)}},[]),de.useEffect(()=>{if(d)return;const _=setInterval(()=>{u(!0),setTimeout(()=>{s(y=>(y+1)%p.length),u(!1)},600)},1e4);return()=>clearInterval(_)},[d,p.length]),x.jsx(bI,{children:i?x.jsx(s0,{onComplete:()=>e(!1)}):x.jsxs("div",{className:"relative bg-black",children:[x.jsxs("div",{className:"fixed inset-0 z-0",children:[x.jsx("img",{src:FI,alt:"background",className:"w-full h-full object-cover opacity-100 blur-[1px]"}),x.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-purple-900/10 to-cyan-900/5"}),x.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-purple-900/15"})]}),x.jsxs("div",{className:"relative z-10",children:[x.jsx(MI,{}),x.jsxs(de.Suspense,{fallback:x.jsx("div",{className:"h-screen w-full flex justify-center items-center text-white"}),children:[x.jsxs("main",{children:[x.jsx("section",{id:"home",children:x.jsx(jI,{currentTheme:w,currentRobot:n,isTransitioning:l,robots:p})}),x.jsx("section",{id:"videosection",children:x.jsx(zI,{})}),x.jsx("section",{id:"about",children:x.jsx(WI,{currentTheme:w})}),x.jsx("section",{id:"education-journey",children:x.jsx(BI,{})}),x.jsx("section",{id:"dexterity",children:x.jsx(HI,{currentTheme:w})}),x.jsx("section",{id:"professional-designations",children:x.jsx(VI,{})}),x.jsx("section",{id:"professional-journey",children:x.jsx($I,{})}),x.jsx("section",{id:"creative-ventures",children:x.jsx(GI,{currentTheme:w})}),x.jsx("section",{id:"design-scape",children:x.jsx(qI,{})}),x.jsx("section",{id:"testimonials",children:x.jsx(KI,{})}),x.jsx("section",{id:"contact",children:x.jsx(QI,{currentTheme:w})})]}),x.jsx(YI,{})]})]})]})})}n0.createRoot(document.getElementById("root")).render(x.jsx(de.StrictMode,{children:x.jsx(XI,{})}));export{v0 as B,S0 as M,P0 as P,JI as R,Dp as S,O0 as U,tT as a,PI as b,tn as c,oT as d,ZI as e,iT as f,nT as g,rT as h,Pc as i,x as j,$m as k,sT as o,lT as p,de as r,eT as s,aT as u};
