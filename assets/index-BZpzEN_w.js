const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeaderBar-DnCbMg8-.js","assets/myimage-BSaGGD0n.js","assets/user-BYWcQuWQ.js","assets/palette-DHTRBWkv.js","assets/AboutUs-DXVAbOUT.js","assets/4-DHqHY9a9.js","assets/Education-zGi5C6J_.js","assets/external-link-C-l-kPSM.js","assets/SkillsData-BqFuDxRN.js","assets/proxy-kTxpiIN-.js","assets/index-c1xKhqcg.js","assets/boxes-C_XkOHau.js","assets/ProjectsData-sTQePxd0.js","assets/ProjectsData-CSRAChdu.css","assets/designpage-CwP_ghME.js","assets/Testimonials-HBR0IsbS.js","assets/Copyright-DBuHzo5f.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();var s2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var $u={exports:{}},ps={},Gu={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function iy(){if(xp)return ce;xp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),v=Symbol.iterator;function _(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,j={};function z(k,b,X){this.props=k,this.context=b,this.refs=j,this.updater=X||N}z.prototype.isReactComponent={},z.prototype.setState=function(k,b){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,b,"setState")},z.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function pe(){}pe.prototype=z.prototype;function Ee(k,b,X){this.props=k,this.context=b,this.refs=j,this.updater=X||N}var Se=Ee.prototype=new pe;Se.constructor=Ee,R(Se,z.prototype),Se.isPureReactComponent=!0;var Ce=Array.isArray,He=Object.prototype.hasOwnProperty,me={current:null},Le={key:!0,ref:!0,__self:!0,__source:!0};function ae(k,b,X){var J,se={},oe=null,ie=null;if(b!=null)for(J in b.ref!==void 0&&(ie=b.ref),b.key!==void 0&&(oe=""+b.key),b)He.call(b,J)&&!Le.hasOwnProperty(J)&&(se[J]=b[J]);var Z=arguments.length-2;if(Z===1)se.children=X;else if(1<Z){for(var ue=Array(Z),Ue=0;Ue<Z;Ue++)ue[Ue]=arguments[Ue+2];se.children=ue}if(k&&k.defaultProps)for(J in Z=k.defaultProps,Z)se[J]===void 0&&(se[J]=Z[J]);return{$$typeof:i,type:k,key:oe,ref:ie,props:se,_owner:me.current}}function Me(k,b){return{$$typeof:i,type:k.type,key:b,ref:k.ref,props:k.props,_owner:k._owner}}function qe(k){return typeof k=="object"&&k!==null&&k.$$typeof===i}function q(k){var b={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(X){return b[X]})}var F=/\/+/g;function re(k,b){return typeof k=="object"&&k!==null&&k.key!=null?q(""+k.key):b.toString(36)}function K(k,b,X,J,se){var oe=typeof k;(oe==="undefined"||oe==="boolean")&&(k=null);var ie=!1;if(k===null)ie=!0;else switch(oe){case"string":case"number":ie=!0;break;case"object":switch(k.$$typeof){case i:case e:ie=!0}}if(ie)return ie=k,se=se(ie),k=J===""?"."+re(ie,0):J,Ce(se)?(X="",k!=null&&(X=k.replace(F,"$&/")+"/"),K(se,b,X,"",function(Ue){return Ue})):se!=null&&(qe(se)&&(se=Me(se,X+(!se.key||ie&&ie.key===se.key?"":(""+se.key).replace(F,"$&/")+"/")+k)),b.push(se)),1;if(ie=0,J=J===""?".":J+":",Ce(k))for(var Z=0;Z<k.length;Z++){oe=k[Z];var ue=J+re(oe,Z);ie+=K(oe,b,X,ue,se)}else if(ue=_(k),typeof ue=="function")for(k=ue.call(k),Z=0;!(oe=k.next()).done;)oe=oe.value,ue=J+re(oe,Z++),ie+=K(oe,b,X,ue,se);else if(oe==="object")throw b=String(k),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return ie}function Ne(k,b,X){if(k==null)return k;var J=[],se=0;return K(k,J,"","",function(oe){return b.call(X,oe,se++)}),J}function be(k){if(k._status===-1){var b=k._result;b=b(),b.then(function(X){(k._status===0||k._status===-1)&&(k._status=1,k._result=X)},function(X){(k._status===0||k._status===-1)&&(k._status=2,k._result=X)}),k._status===-1&&(k._status=0,k._result=b)}if(k._status===1)return k._result.default;throw k._result}var ye={current:null},M={transition:null},G={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:M,ReactCurrentOwner:me};function U(){throw Error("act(...) is not supported in production builds of React.")}return ce.Children={map:Ne,forEach:function(k,b,X){Ne(k,function(){b.apply(this,arguments)},X)},count:function(k){var b=0;return Ne(k,function(){b++}),b},toArray:function(k){return Ne(k,function(b){return b})||[]},only:function(k){if(!qe(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ce.Component=z,ce.Fragment=n,ce.Profiler=l,ce.PureComponent=Ee,ce.StrictMode=s,ce.Suspense=p,ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,ce.act=U,ce.cloneElement=function(k,b,X){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var J=R({},k.props),se=k.key,oe=k.ref,ie=k._owner;if(b!=null){if(b.ref!==void 0&&(oe=b.ref,ie=me.current),b.key!==void 0&&(se=""+b.key),k.type&&k.type.defaultProps)var Z=k.type.defaultProps;for(ue in b)He.call(b,ue)&&!Le.hasOwnProperty(ue)&&(J[ue]=b[ue]===void 0&&Z!==void 0?Z[ue]:b[ue])}var ue=arguments.length-2;if(ue===1)J.children=X;else if(1<ue){Z=Array(ue);for(var Ue=0;Ue<ue;Ue++)Z[Ue]=arguments[Ue+2];J.children=Z}return{$$typeof:i,type:k.type,key:se,ref:oe,props:J,_owner:ie}},ce.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:u,_context:k},k.Consumer=k},ce.createElement=ae,ce.createFactory=function(k){var b=ae.bind(null,k);return b.type=k,b},ce.createRef=function(){return{current:null}},ce.forwardRef=function(k){return{$$typeof:f,render:k}},ce.isValidElement=qe,ce.lazy=function(k){return{$$typeof:w,_payload:{_status:-1,_result:k},_init:be}},ce.memo=function(k,b){return{$$typeof:g,type:k,compare:b===void 0?null:b}},ce.startTransition=function(k){var b=M.transition;M.transition={};try{k()}finally{M.transition=b}},ce.unstable_act=U,ce.useCallback=function(k,b){return ye.current.useCallback(k,b)},ce.useContext=function(k){return ye.current.useContext(k)},ce.useDebugValue=function(){},ce.useDeferredValue=function(k){return ye.current.useDeferredValue(k)},ce.useEffect=function(k,b){return ye.current.useEffect(k,b)},ce.useId=function(){return ye.current.useId()},ce.useImperativeHandle=function(k,b,X){return ye.current.useImperativeHandle(k,b,X)},ce.useInsertionEffect=function(k,b){return ye.current.useInsertionEffect(k,b)},ce.useLayoutEffect=function(k,b){return ye.current.useLayoutEffect(k,b)},ce.useMemo=function(k,b){return ye.current.useMemo(k,b)},ce.useReducer=function(k,b,X){return ye.current.useReducer(k,b,X)},ce.useRef=function(k){return ye.current.useRef(k)},ce.useState=function(k){return ye.current.useState(k)},ce.useSyncExternalStore=function(k,b,X){return ye.current.useSyncExternalStore(k,b,X)},ce.useTransition=function(){return ye.current.useTransition()},ce.version="18.3.1",ce}var Tp;function Dc(){return Tp||(Tp=1,Gu.exports=iy()),Gu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function sy(){if(Np)return ps;Np=1;var i=Dc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var w,v={},_=null,N=null;g!==void 0&&(_=""+g),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(N=p.ref);for(w in p)s.call(p,w)&&!u.hasOwnProperty(w)&&(v[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)v[w]===void 0&&(v[w]=p[w]);return{$$typeof:e,type:f,key:_,ref:N,props:v,_owner:l.current}}return ps.Fragment=n,ps.jsx=d,ps.jsxs=d,ps}var bp;function oy(){return bp||(bp=1,$u.exports=sy()),$u.exports}var S=oy(),le=Dc();const Cr=Zm(le);var tl={},qu={exports:{}},St={},Ku={exports:{}},Qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function ly(){return Pp||(Pp=1,function(i){function e(M,G){var U=M.length;M.push(G);e:for(;0<U;){var k=U-1>>>1,b=M[k];if(0<l(b,G))M[k]=G,M[U]=b,U=k;else break e}}function n(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var G=M[0],U=M.pop();if(U!==G){M[0]=U;e:for(var k=0,b=M.length,X=b>>>1;k<X;){var J=2*(k+1)-1,se=M[J],oe=J+1,ie=M[oe];if(0>l(se,U))oe<b&&0>l(ie,se)?(M[k]=ie,M[oe]=U,k=oe):(M[k]=se,M[J]=U,k=J);else if(oe<b&&0>l(ie,U))M[k]=ie,M[oe]=U,k=oe;else break e}}return G}function l(M,G){var U=M.sortIndex-G.sortIndex;return U!==0?U:M.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var p=[],g=[],w=1,v=null,_=3,N=!1,R=!1,j=!1,z=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,Ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Se(M){for(var G=n(g);G!==null;){if(G.callback===null)s(g);else if(G.startTime<=M)s(g),G.sortIndex=G.expirationTime,e(p,G);else break;G=n(g)}}function Ce(M){if(j=!1,Se(M),!R)if(n(p)!==null)R=!0,be(He);else{var G=n(g);G!==null&&ye(Ce,G.startTime-M)}}function He(M,G){R=!1,j&&(j=!1,pe(ae),ae=-1),N=!0;var U=_;try{for(Se(G),v=n(p);v!==null&&(!(v.expirationTime>G)||M&&!q());){var k=v.callback;if(typeof k=="function"){v.callback=null,_=v.priorityLevel;var b=k(v.expirationTime<=G);G=i.unstable_now(),typeof b=="function"?v.callback=b:v===n(p)&&s(p),Se(G)}else s(p);v=n(p)}if(v!==null)var X=!0;else{var J=n(g);J!==null&&ye(Ce,J.startTime-G),X=!1}return X}finally{v=null,_=U,N=!1}}var me=!1,Le=null,ae=-1,Me=5,qe=-1;function q(){return!(i.unstable_now()-qe<Me)}function F(){if(Le!==null){var M=i.unstable_now();qe=M;var G=!0;try{G=Le(!0,M)}finally{G?re():(me=!1,Le=null)}}else me=!1}var re;if(typeof Ee=="function")re=function(){Ee(F)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,Ne=K.port2;K.port1.onmessage=F,re=function(){Ne.postMessage(null)}}else re=function(){z(F,0)};function be(M){Le=M,me||(me=!0,re())}function ye(M,G){ae=z(function(){M(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(M){M.callback=null},i.unstable_continueExecution=function(){R||N||(R=!0,be(He))},i.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<M?Math.floor(1e3/M):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return n(p)},i.unstable_next=function(M){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var U=_;_=G;try{return M()}finally{_=U}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(M,G){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var U=_;_=M;try{return G()}finally{_=U}},i.unstable_scheduleCallback=function(M,G,U){var k=i.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?k+U:k):U=k,M){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=U+b,M={id:w++,callback:G,priorityLevel:M,startTime:U,expirationTime:b,sortIndex:-1},U>k?(M.sortIndex=U,e(g,M),n(p)===null&&M===n(g)&&(j?(pe(ae),ae=-1):j=!0,ye(Ce,U-k))):(M.sortIndex=b,e(p,M),R||N||(R=!0,be(He))),M},i.unstable_shouldYield=q,i.unstable_wrapCallback=function(M){var G=_;return function(){var U=_;_=G;try{return M.apply(this,arguments)}finally{_=U}}}}(Qu)),Qu}var Rp;function ay(){return Rp||(Rp=1,Ku.exports=ly()),Ku.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function uy(){if(Ap)return St;Ap=1;var i=Dc(),e=ay();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},v={};function _(t){return p.call(v,t)?!0:p.call(w,t)?!1:g.test(t)?v[t]=!0:(w[t]=!0,!1)}function N(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,r,o,a){if(r===null||typeof r>"u"||N(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function j(t,r,o,a,c,h,m){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=m}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){z[t]=new j(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];z[r]=new j(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){z[t]=new j(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){z[t]=new j(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){z[t]=new j(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){z[t]=new j(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){z[t]=new j(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){z[t]=new j(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){z[t]=new j(t,5,!1,t.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function Ee(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(pe,Ee);z[r]=new j(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(pe,Ee);z[r]=new j(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(pe,Ee);z[r]=new j(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){z[t]=new j(t,1,!1,t.toLowerCase(),null,!1,!1)}),z.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){z[t]=new j(t,1,!1,t.toLowerCase(),null,!0,!0)});function Se(t,r,o,a){var c=z.hasOwnProperty(r)?z[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(R(r,o,c,a)&&(o=null),a||c===null?_(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var Ce=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,He=Symbol.for("react.element"),me=Symbol.for("react.portal"),Le=Symbol.for("react.fragment"),ae=Symbol.for("react.strict_mode"),Me=Symbol.for("react.profiler"),qe=Symbol.for("react.provider"),q=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),M=Symbol.iterator;function G(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var U=Object.assign,k;function b(t){if(k===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);k=r&&r[1]||""}return`
`+k+t}var X=!1;function J(t,r){if(!t||X)return"";X=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(T){var a=T}Reflect.construct(t,[],r)}else{try{r.call()}catch(T){a=T}t.call(r.prototype)}else{try{throw Error()}catch(T){a=T}t()}}catch(T){if(T&&a&&typeof T.stack=="string"){for(var c=T.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,y=h.length-1;1<=m&&0<=y&&c[m]!==h[y];)y--;for(;1<=m&&0<=y;m--,y--)if(c[m]!==h[y]){if(m!==1||y!==1)do if(m--,y--,0>y||c[m]!==h[y]){var E=`
`+c[m].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=m&&0<=y);break}}}finally{X=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?b(t):""}function se(t){switch(t.tag){case 5:return b(t.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return t=J(t.type,!1),t;case 11:return t=J(t.type.render,!1),t;case 1:return t=J(t.type,!0),t;default:return""}}function oe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Le:return"Fragment";case me:return"Portal";case Me:return"Profiler";case ae:return"StrictMode";case re:return"Suspense";case K:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q:return(t.displayName||"Context")+".Consumer";case qe:return(t._context.displayName||"Context")+".Provider";case F:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ne:return r=t.displayName||null,r!==null?r:oe(t.type)||"Memo";case be:r=t._payload,t=t._init;try{return oe(t(r))}catch{}}return null}function ie(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(r);case 8:return r===ae?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Z(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ue(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ue(t){var r=ue(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function It(t){t._valueTracker||(t._valueTracker=Ue(t))}function Rt(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=ue(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function Ie(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ve(t,r){var o=r.checked;return U({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function it(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=Z(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ut(t,r){r=r.checked,r!=null&&Se(t,"checked",r,!1)}function Dr(t,r){Ut(t,r);var o=Z(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?ea(t,r.type,o):r.hasOwnProperty("defaultValue")&&ea(t,r.type,Z(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Dd(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ea(t,r,o){(r!=="number"||Ie(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var bi=Array.isArray;function Lr(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+Z(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function ta(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return U({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ld(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(bi(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:Z(o)}}function Md(t,r){var o=Z(r.value),a=Z(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function jd(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Fd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function na(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Fd(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gs,zd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Gs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Pi(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u0=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(t){u0.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Ri[r]=Ri[t]})});function Ud(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Ri.hasOwnProperty(t)&&Ri[t]?(""+r).trim():r+"px"}function Wd(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=Ud(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var c0=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ra(t,r){if(r){if(c0[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function ia(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sa=null;function oa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var la=null,Mr=null,jr=null;function Vd(t){if(t=Zi(t)){if(typeof la!="function")throw Error(n(280));var r=t.stateNode;r&&(r=go(r),la(t.stateNode,t.type,r))}}function Bd(t){Mr?jr?jr.push(t):jr=[t]:Mr=t}function Hd(){if(Mr){var t=Mr,r=jr;if(jr=Mr=null,Vd(t),r)for(t=0;t<r.length;t++)Vd(r[t])}}function $d(t,r){return t(r)}function Gd(){}var aa=!1;function qd(t,r,o){if(aa)return t(r,o);aa=!0;try{return $d(t,r,o)}finally{aa=!1,(Mr!==null||jr!==null)&&(Gd(),Hd())}}function Ai(t,r){var o=t.stateNode;if(o===null)return null;var a=go(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var ua=!1;if(f)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){ua=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{ua=!1}function d0(t,r,o,a,c,h,m,y,E){var T=Array.prototype.slice.call(arguments,3);try{r.apply(o,T)}catch(A){this.onError(A)}}var Di=!1,qs=null,Ks=!1,ca=null,h0={onError:function(t){Di=!0,qs=t}};function f0(t,r,o,a,c,h,m,y,E){Di=!1,qs=null,d0.apply(h0,arguments)}function p0(t,r,o,a,c,h,m,y,E){if(f0.apply(this,arguments),Di){if(Di){var T=qs;Di=!1,qs=null}else throw Error(n(198));Ks||(Ks=!0,ca=T)}}function or(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Kd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Qd(t){if(or(t)!==t)throw Error(n(188))}function m0(t){var r=t.alternate;if(!r){if(r=or(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Qd(c),t;if(h===a)return Qd(c),r;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,y=c.child;y;){if(y===o){m=!0,o=c,a=h;break}if(y===a){m=!0,a=c,o=h;break}y=y.sibling}if(!m){for(y=h.child;y;){if(y===o){m=!0,o=h,a=c;break}if(y===a){m=!0,a=h,o=c;break}y=y.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Yd(t){return t=m0(t),t!==null?Xd(t):null}function Xd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Xd(t);if(r!==null)return r;t=t.sibling}return null}var Jd=e.unstable_scheduleCallback,Zd=e.unstable_cancelCallback,g0=e.unstable_shouldYield,v0=e.unstable_requestPaint,$e=e.unstable_now,_0=e.unstable_getCurrentPriorityLevel,da=e.unstable_ImmediatePriority,eh=e.unstable_UserBlockingPriority,Qs=e.unstable_NormalPriority,y0=e.unstable_LowPriority,th=e.unstable_IdlePriority,Ys=null,en=null;function w0(t){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Ys,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:C0,E0=Math.log,S0=Math.LN2;function C0(t){return t>>>=0,t===0?32:31-(E0(t)/S0|0)|0}var Xs=64,Js=4194304;function Li(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zs(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var y=m&~c;y!==0?a=Li(y):(h&=m,h!==0&&(a=Li(h)))}else m=o&~c,m!==0?a=Li(m):h!==0&&(a=Li(h));if(a===0)return 0;if(r!==0&&r!==a&&!(r&c)&&(c=a&-a,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if(a&4&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-Wt(r),c=1<<o,a|=t[o],r&=~c;return a}function k0(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I0(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Wt(h),y=1<<m,E=c[m];E===-1?(!(y&o)||y&a)&&(c[m]=k0(y,r)):E<=r&&(t.expiredLanes|=y),h&=~y}}function ha(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nh(){var t=Xs;return Xs<<=1,!(Xs&4194240)&&(Xs=64),t}function fa(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Mi(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Wt(r),t[r]=o}function x0(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Wt(o),h=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function pa(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-Wt(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var ke=0;function rh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ih,ma,sh,oh,lh,ga=!1,eo=[],Tn=null,Nn=null,bn=null,ji=new Map,Fi=new Map,Pn=[],T0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ah(t,r){switch(t){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":ji.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(r.pointerId)}}function zi(t,r,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},r!==null&&(r=Zi(r),r!==null&&ma(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function N0(t,r,o,a,c){switch(r){case"focusin":return Tn=zi(Tn,t,r,o,a,c),!0;case"dragenter":return Nn=zi(Nn,t,r,o,a,c),!0;case"mouseover":return bn=zi(bn,t,r,o,a,c),!0;case"pointerover":var h=c.pointerId;return ji.set(h,zi(ji.get(h)||null,t,r,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Fi.set(h,zi(Fi.get(h)||null,t,r,o,a,c)),!0}return!1}function uh(t){var r=lr(t.target);if(r!==null){var o=or(r);if(o!==null){if(r=o.tag,r===13){if(r=Kd(o),r!==null){t.blockedOn=r,lh(t.priority,function(){sh(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function to(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=_a(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);sa=a,o.target.dispatchEvent(a),sa=null}else return r=Zi(o),r!==null&&ma(r),t.blockedOn=o,!1;r.shift()}return!0}function ch(t,r,o){to(t)&&o.delete(r)}function b0(){ga=!1,Tn!==null&&to(Tn)&&(Tn=null),Nn!==null&&to(Nn)&&(Nn=null),bn!==null&&to(bn)&&(bn=null),ji.forEach(ch),Fi.forEach(ch)}function Ui(t,r){t.blockedOn===r&&(t.blockedOn=null,ga||(ga=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,b0)))}function Wi(t){function r(c){return Ui(c,t)}if(0<eo.length){Ui(eo[0],t);for(var o=1;o<eo.length;o++){var a=eo[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Tn!==null&&Ui(Tn,t),Nn!==null&&Ui(Nn,t),bn!==null&&Ui(bn,t),ji.forEach(r),Fi.forEach(r),o=0;o<Pn.length;o++)a=Pn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<Pn.length&&(o=Pn[0],o.blockedOn===null);)uh(o),o.blockedOn===null&&Pn.shift()}var Fr=Ce.ReactCurrentBatchConfig,no=!0;function P0(t,r,o,a){var c=ke,h=Fr.transition;Fr.transition=null;try{ke=1,va(t,r,o,a)}finally{ke=c,Fr.transition=h}}function R0(t,r,o,a){var c=ke,h=Fr.transition;Fr.transition=null;try{ke=4,va(t,r,o,a)}finally{ke=c,Fr.transition=h}}function va(t,r,o,a){if(no){var c=_a(t,r,o,a);if(c===null)La(t,r,a,ro,o),ah(t,a);else if(N0(c,t,r,o,a))a.stopPropagation();else if(ah(t,a),r&4&&-1<T0.indexOf(t)){for(;c!==null;){var h=Zi(c);if(h!==null&&ih(h),h=_a(t,r,o,a),h===null&&La(t,r,a,ro,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else La(t,r,a,null,o)}}var ro=null;function _a(t,r,o,a){if(ro=null,t=oa(a),t=lr(t),t!==null)if(r=or(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Kd(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ro=t,null}function dh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_0()){case da:return 1;case eh:return 4;case Qs:case y0:return 16;case th:return 536870912;default:return 16}default:return 16}}var Rn=null,ya=null,io=null;function hh(){if(io)return io;var t,r=ya,o=r.length,a,c="value"in Rn?Rn.value:Rn.textContent,h=c.length;for(t=0;t<o&&r[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&r[o-a]===c[h-a];a++);return io=c.slice(t,1<a?1-a:void 0)}function so(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function fh(){return!1}function xt(t){function r(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(o=t[y],this[y]=o?o(h):h[y]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?oo:fh,this.isPropagationStopped=fh,this}return U(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),r}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wa=xt(zr),Vi=U({},zr,{view:0,detail:0}),A0=xt(Vi),Ea,Sa,Bi,lo=U({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ka,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bi&&(Bi&&t.type==="mousemove"?(Ea=t.screenX-Bi.screenX,Sa=t.screenY-Bi.screenY):Sa=Ea=0,Bi=t),Ea)},movementY:function(t){return"movementY"in t?t.movementY:Sa}}),ph=xt(lo),O0=U({},lo,{dataTransfer:0}),D0=xt(O0),L0=U({},Vi,{relatedTarget:0}),Ca=xt(L0),M0=U({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),j0=xt(M0),F0=U({},zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z0=xt(F0),U0=U({},zr,{data:0}),mh=xt(U0),W0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H0(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=B0[t])?!!r[t]:!1}function ka(){return H0}var $0=U({},Vi,{key:function(t){if(t.key){var r=W0[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?V0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ka,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),G0=xt($0),q0=U({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=xt(q0),K0=U({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ka}),Q0=xt(K0),Y0=U({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),X0=xt(Y0),J0=U({},lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z0=xt(J0),e_=[9,13,27,32],Ia=f&&"CompositionEvent"in window,Hi=null;f&&"documentMode"in document&&(Hi=document.documentMode);var t_=f&&"TextEvent"in window&&!Hi,vh=f&&(!Ia||Hi&&8<Hi&&11>=Hi),_h=" ",yh=!1;function wh(t,r){switch(t){case"keyup":return e_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function n_(t,r){switch(t){case"compositionend":return Eh(r);case"keypress":return r.which!==32?null:(yh=!0,_h);case"textInput":return t=r.data,t===_h&&yh?null:t;default:return null}}function r_(t,r){if(Ur)return t==="compositionend"||!Ia&&wh(t,r)?(t=hh(),io=ya=Rn=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return vh&&r.locale!=="ko"?null:r.data;default:return null}}var i_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!i_[t.type]:r==="textarea"}function Ch(t,r,o,a){Bd(a),r=fo(r,"onChange"),0<r.length&&(o=new wa("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var $i=null,Gi=null;function s_(t){Wh(t,0)}function ao(t){var r=$r(t);if(Rt(r))return t}function o_(t,r){if(t==="change")return r}var kh=!1;if(f){var xa;if(f){var Ta="oninput"in document;if(!Ta){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),Ta=typeof Ih.oninput=="function"}xa=Ta}else xa=!1;kh=xa&&(!document.documentMode||9<document.documentMode)}function xh(){$i&&($i.detachEvent("onpropertychange",Th),Gi=$i=null)}function Th(t){if(t.propertyName==="value"&&ao(Gi)){var r=[];Ch(r,Gi,t,oa(t)),qd(s_,r)}}function l_(t,r,o){t==="focusin"?(xh(),$i=r,Gi=o,$i.attachEvent("onpropertychange",Th)):t==="focusout"&&xh()}function a_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ao(Gi)}function u_(t,r){if(t==="click")return ao(r)}function c_(t,r){if(t==="input"||t==="change")return ao(r)}function d_(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Vt=typeof Object.is=="function"?Object.is:d_;function qi(t,r){if(Vt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(r,c)||!Vt(t[c],r[c]))return!1}return!0}function Nh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bh(t,r){var o=Nh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Nh(o)}}function Ph(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Ph(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Rh(){for(var t=window,r=Ie();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Ie(t.document)}return r}function Na(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function h_(t){var r=Rh(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Ph(o.ownerDocument.documentElement,o)){if(a!==null&&Na(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=bh(o,h);var m=bh(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(r),t.extend(m.node,m.offset)):(r.setEnd(m.node,m.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var f_=f&&"documentMode"in document&&11>=document.documentMode,Wr=null,ba=null,Ki=null,Pa=!1;function Ah(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Pa||Wr==null||Wr!==Ie(a)||(a=Wr,"selectionStart"in a&&Na(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ki&&qi(Ki,a)||(Ki=a,a=fo(ba,"onSelect"),0<a.length&&(r=new wa("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=Wr)))}function uo(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Vr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Ra={},Oh={};f&&(Oh=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function co(t){if(Ra[t])return Ra[t];if(!Vr[t])return t;var r=Vr[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Oh)return Ra[t]=r[o];return t}var Dh=co("animationend"),Lh=co("animationiteration"),Mh=co("animationstart"),jh=co("transitionend"),Fh=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(t,r){Fh.set(t,r),u(r,[t])}for(var Aa=0;Aa<zh.length;Aa++){var Oa=zh[Aa],p_=Oa.toLowerCase(),m_=Oa[0].toUpperCase()+Oa.slice(1);An(p_,"on"+m_)}An(Dh,"onAnimationEnd"),An(Lh,"onAnimationIteration"),An(Mh,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An(jh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function Uh(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,p0(a,r,void 0,t),t.currentTarget=null}function Wh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var m=a.length-1;0<=m;m--){var y=a[m],E=y.instance,T=y.currentTarget;if(y=y.listener,E!==h&&c.isPropagationStopped())break e;Uh(c,y,T),h=E}else for(m=0;m<a.length;m++){if(y=a[m],E=y.instance,T=y.currentTarget,y=y.listener,E!==h&&c.isPropagationStopped())break e;Uh(c,y,T),h=E}}}if(Ks)throw t=ca,Ks=!1,ca=null,t}function Oe(t,r){var o=r[Wa];o===void 0&&(o=r[Wa]=new Set);var a=t+"__bubble";o.has(a)||(Vh(r,t,2,!1),o.add(a))}function Da(t,r,o){var a=0;r&&(a|=4),Vh(o,t,a,r)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Yi(t){if(!t[ho]){t[ho]=!0,s.forEach(function(o){o!=="selectionchange"&&(g_.has(o)||Da(o,!1,t),Da(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ho]||(r[ho]=!0,Da("selectionchange",!1,r))}}function Vh(t,r,o,a){switch(dh(r)){case 1:var c=P0;break;case 4:c=R0;break;default:c=va}o=c.bind(null,r,o,t),c=void 0,!ua||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function La(t,r,o,a,c){var h=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var y=a.stateNode.containerInfo;if(y===c||y.nodeType===8&&y.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var E=m.tag;if((E===3||E===4)&&(E=m.stateNode.containerInfo,E===c||E.nodeType===8&&E.parentNode===c))return;m=m.return}for(;y!==null;){if(m=lr(y),m===null)return;if(E=m.tag,E===5||E===6){a=h=m;continue e}y=y.parentNode}}a=a.return}qd(function(){var T=h,A=oa(o),O=[];e:{var P=Fh.get(t);if(P!==void 0){var W=wa,B=t;switch(t){case"keypress":if(so(o)===0)break e;case"keydown":case"keyup":W=G0;break;case"focusin":B="focus",W=Ca;break;case"focusout":B="blur",W=Ca;break;case"beforeblur":case"afterblur":W=Ca;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=D0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=Q0;break;case Dh:case Lh:case Mh:W=j0;break;case jh:W=X0;break;case"scroll":W=A0;break;case"wheel":W=Z0;break;case"copy":case"cut":case"paste":W=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=gh}var H=(r&4)!==0,Ge=!H&&t==="scroll",I=H?P!==null?P+"Capture":null:P;H=[];for(var C=T,x;C!==null;){x=C;var D=x.stateNode;if(x.tag===5&&D!==null&&(x=D,I!==null&&(D=Ai(C,I),D!=null&&H.push(Xi(C,D,x)))),Ge)break;C=C.return}0<H.length&&(P=new W(P,B,null,o,A),O.push({event:P,listeners:H}))}}if(!(r&7)){e:{if(P=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",P&&o!==sa&&(B=o.relatedTarget||o.fromElement)&&(lr(B)||B[dn]))break e;if((W||P)&&(P=A.window===A?A:(P=A.ownerDocument)?P.defaultView||P.parentWindow:window,W?(B=o.relatedTarget||o.toElement,W=T,B=B?lr(B):null,B!==null&&(Ge=or(B),B!==Ge||B.tag!==5&&B.tag!==6)&&(B=null)):(W=null,B=T),W!==B)){if(H=ph,D="onMouseLeave",I="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(H=gh,D="onPointerLeave",I="onPointerEnter",C="pointer"),Ge=W==null?P:$r(W),x=B==null?P:$r(B),P=new H(D,C+"leave",W,o,A),P.target=Ge,P.relatedTarget=x,D=null,lr(A)===T&&(H=new H(I,C+"enter",B,o,A),H.target=x,H.relatedTarget=Ge,D=H),Ge=D,W&&B)t:{for(H=W,I=B,C=0,x=H;x;x=Br(x))C++;for(x=0,D=I;D;D=Br(D))x++;for(;0<C-x;)H=Br(H),C--;for(;0<x-C;)I=Br(I),x--;for(;C--;){if(H===I||I!==null&&H===I.alternate)break t;H=Br(H),I=Br(I)}H=null}else H=null;W!==null&&Bh(O,P,W,H,!1),B!==null&&Ge!==null&&Bh(O,Ge,B,H,!0)}}e:{if(P=T?$r(T):window,W=P.nodeName&&P.nodeName.toLowerCase(),W==="select"||W==="input"&&P.type==="file")var $=o_;else if(Sh(P))if(kh)$=c_;else{$=a_;var Q=l_}else(W=P.nodeName)&&W.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&($=u_);if($&&($=$(t,T))){Ch(O,$,o,A);break e}Q&&Q(t,P,T),t==="focusout"&&(Q=P._wrapperState)&&Q.controlled&&P.type==="number"&&ea(P,"number",P.value)}switch(Q=T?$r(T):window,t){case"focusin":(Sh(Q)||Q.contentEditable==="true")&&(Wr=Q,ba=T,Ki=null);break;case"focusout":Ki=ba=Wr=null;break;case"mousedown":Pa=!0;break;case"contextmenu":case"mouseup":case"dragend":Pa=!1,Ah(O,o,A);break;case"selectionchange":if(f_)break;case"keydown":case"keyup":Ah(O,o,A)}var Y;if(Ia)e:{switch(t){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Ur?wh(t,o)&&(te="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(te="onCompositionStart");te&&(vh&&o.locale!=="ko"&&(Ur||te!=="onCompositionStart"?te==="onCompositionEnd"&&Ur&&(Y=hh()):(Rn=A,ya="value"in Rn?Rn.value:Rn.textContent,Ur=!0)),Q=fo(T,te),0<Q.length&&(te=new mh(te,t,null,o,A),O.push({event:te,listeners:Q}),Y?te.data=Y:(Y=Eh(o),Y!==null&&(te.data=Y)))),(Y=t_?n_(t,o):r_(t,o))&&(T=fo(T,"onBeforeInput"),0<T.length&&(A=new mh("onBeforeInput","beforeinput",null,o,A),O.push({event:A,listeners:T}),A.data=Y))}Wh(O,r)})}function Xi(t,r,o){return{instance:t,listener:r,currentTarget:o}}function fo(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Ai(t,o),h!=null&&a.unshift(Xi(t,h,c)),h=Ai(t,r),h!=null&&a.push(Xi(t,h,c))),t=t.return}return a}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bh(t,r,o,a,c){for(var h=r._reactName,m=[];o!==null&&o!==a;){var y=o,E=y.alternate,T=y.stateNode;if(E!==null&&E===a)break;y.tag===5&&T!==null&&(y=T,c?(E=Ai(o,h),E!=null&&m.unshift(Xi(o,E,y))):c||(E=Ai(o,h),E!=null&&m.push(Xi(o,E,y)))),o=o.return}m.length!==0&&t.push({event:r,listeners:m})}var v_=/\r\n?/g,__=/\u0000|\uFFFD/g;function Hh(t){return(typeof t=="string"?t:""+t).replace(v_,`
`).replace(__,"")}function po(t,r,o){if(r=Hh(r),Hh(t)!==r&&o)throw Error(n(425))}function mo(){}var Ma=null,ja=null;function Fa(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var za=typeof setTimeout=="function"?setTimeout:void 0,y_=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,w_=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(t){return $h.resolve(null).then(t).catch(E_)}:za;function E_(t){setTimeout(function(){throw t})}function Ua(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Wi(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Wi(r)}function On(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Gh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),tn="__reactFiber$"+Hr,Ji="__reactProps$"+Hr,dn="__reactContainer$"+Hr,Wa="__reactEvents$"+Hr,S_="__reactListeners$"+Hr,C_="__reactHandles$"+Hr;function lr(t){var r=t[tn];if(r)return r;for(var o=t.parentNode;o;){if(r=o[dn]||o[tn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Gh(t);t!==null;){if(o=t[tn])return o;t=Gh(t)}return r}t=o,o=t.parentNode}return null}function Zi(t){return t=t[tn]||t[dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function go(t){return t[Ji]||null}var Va=[],Gr=-1;function Dn(t){return{current:t}}function De(t){0>Gr||(t.current=Va[Gr],Va[Gr]=null,Gr--)}function Pe(t,r){Gr++,Va[Gr]=t.current,t.current=r}var Ln={},ut=Dn(Ln),vt=Dn(!1),ar=Ln;function qr(t,r){var o=t.type.contextTypes;if(!o)return Ln;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=r[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function _t(t){return t=t.childContextTypes,t!=null}function vo(){De(vt),De(ut)}function qh(t,r,o){if(ut.current!==Ln)throw Error(n(168));Pe(ut,r),Pe(vt,o)}function Kh(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,ie(t)||"Unknown",c));return U({},o,a)}function _o(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ln,ar=ut.current,Pe(ut,t),Pe(vt,vt.current),!0}function Qh(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Kh(t,r,ar),a.__reactInternalMemoizedMergedChildContext=t,De(vt),De(ut),Pe(ut,t)):De(vt),Pe(vt,o)}var hn=null,yo=!1,Ba=!1;function Yh(t){hn===null?hn=[t]:hn.push(t)}function k_(t){yo=!0,Yh(t)}function Mn(){if(!Ba&&hn!==null){Ba=!0;var t=0,r=ke;try{var o=hn;for(ke=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}hn=null,yo=!1}catch(c){throw hn!==null&&(hn=hn.slice(t+1)),Jd(da,Mn),c}finally{ke=r,Ba=!1}}return null}var Kr=[],Qr=0,wo=null,Eo=0,At=[],Ot=0,ur=null,fn=1,pn="";function cr(t,r){Kr[Qr++]=Eo,Kr[Qr++]=wo,wo=t,Eo=r}function Xh(t,r,o){At[Ot++]=fn,At[Ot++]=pn,At[Ot++]=ur,ur=t;var a=fn;t=pn;var c=32-Wt(a)-1;a&=~(1<<c),o+=1;var h=32-Wt(r)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,fn=1<<32-Wt(r)+c|o<<c|a,pn=h+t}else fn=1<<h|o<<c|a,pn=t}function Ha(t){t.return!==null&&(cr(t,1),Xh(t,1,0))}function $a(t){for(;t===wo;)wo=Kr[--Qr],Kr[Qr]=null,Eo=Kr[--Qr],Kr[Qr]=null;for(;t===ur;)ur=At[--Ot],At[Ot]=null,pn=At[--Ot],At[Ot]=null,fn=At[--Ot],At[Ot]=null}var Tt=null,Nt=null,je=!1,Bt=null;function Jh(t,r){var o=jt(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Zh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Tt=t,Nt=On(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Tt=t,Nt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ur!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=jt(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,Tt=t,Nt=null,!0):!1;default:return!1}}function Ga(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qa(t){if(je){var r=Nt;if(r){var o=r;if(!Zh(t,r)){if(Ga(t))throw Error(n(418));r=On(o.nextSibling);var a=Tt;r&&Zh(t,r)?Jh(a,o):(t.flags=t.flags&-4097|2,je=!1,Tt=t)}}else{if(Ga(t))throw Error(n(418));t.flags=t.flags&-4097|2,je=!1,Tt=t}}}function ef(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function So(t){if(t!==Tt)return!1;if(!je)return ef(t),je=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Fa(t.type,t.memoizedProps)),r&&(r=Nt)){if(Ga(t))throw tf(),Error(n(418));for(;r;)Jh(t,r),r=On(r.nextSibling)}if(ef(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Nt=On(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Nt=null}}else Nt=Tt?On(t.stateNode.nextSibling):null;return!0}function tf(){for(var t=Nt;t;)t=On(t.nextSibling)}function Yr(){Nt=Tt=null,je=!1}function Ka(t){Bt===null?Bt=[t]:Bt.push(t)}var I_=Ce.ReactCurrentBatchConfig;function es(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(m){var y=c.refs;m===null?delete y[h]:y[h]=m},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Co(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function nf(t){var r=t._init;return r(t._payload)}function rf(t){function r(I,C){if(t){var x=I.deletions;x===null?(I.deletions=[C],I.flags|=16):x.push(C)}}function o(I,C){if(!t)return null;for(;C!==null;)r(I,C),C=C.sibling;return null}function a(I,C){for(I=new Map;C!==null;)C.key!==null?I.set(C.key,C):I.set(C.index,C),C=C.sibling;return I}function c(I,C){return I=Hn(I,C),I.index=0,I.sibling=null,I}function h(I,C,x){return I.index=x,t?(x=I.alternate,x!==null?(x=x.index,x<C?(I.flags|=2,C):x):(I.flags|=2,C)):(I.flags|=1048576,C)}function m(I){return t&&I.alternate===null&&(I.flags|=2),I}function y(I,C,x,D){return C===null||C.tag!==6?(C=zu(x,I.mode,D),C.return=I,C):(C=c(C,x),C.return=I,C)}function E(I,C,x,D){var $=x.type;return $===Le?A(I,C,x.props.children,D,x.key):C!==null&&(C.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===be&&nf($)===C.type)?(D=c(C,x.props),D.ref=es(I,C,x),D.return=I,D):(D=qo(x.type,x.key,x.props,null,I.mode,D),D.ref=es(I,C,x),D.return=I,D)}function T(I,C,x,D){return C===null||C.tag!==4||C.stateNode.containerInfo!==x.containerInfo||C.stateNode.implementation!==x.implementation?(C=Uu(x,I.mode,D),C.return=I,C):(C=c(C,x.children||[]),C.return=I,C)}function A(I,C,x,D,$){return C===null||C.tag!==7?(C=_r(x,I.mode,D,$),C.return=I,C):(C=c(C,x),C.return=I,C)}function O(I,C,x){if(typeof C=="string"&&C!==""||typeof C=="number")return C=zu(""+C,I.mode,x),C.return=I,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case He:return x=qo(C.type,C.key,C.props,null,I.mode,x),x.ref=es(I,null,C),x.return=I,x;case me:return C=Uu(C,I.mode,x),C.return=I,C;case be:var D=C._init;return O(I,D(C._payload),x)}if(bi(C)||G(C))return C=_r(C,I.mode,x,null),C.return=I,C;Co(I,C)}return null}function P(I,C,x,D){var $=C!==null?C.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return $!==null?null:y(I,C,""+x,D);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case He:return x.key===$?E(I,C,x,D):null;case me:return x.key===$?T(I,C,x,D):null;case be:return $=x._init,P(I,C,$(x._payload),D)}if(bi(x)||G(x))return $!==null?null:A(I,C,x,D,null);Co(I,x)}return null}function W(I,C,x,D,$){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(x)||null,y(C,I,""+D,$);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case He:return I=I.get(D.key===null?x:D.key)||null,E(C,I,D,$);case me:return I=I.get(D.key===null?x:D.key)||null,T(C,I,D,$);case be:var Q=D._init;return W(I,C,x,Q(D._payload),$)}if(bi(D)||G(D))return I=I.get(x)||null,A(C,I,D,$,null);Co(C,D)}return null}function B(I,C,x,D){for(var $=null,Q=null,Y=C,te=C=0,Ze=null;Y!==null&&te<x.length;te++){Y.index>te?(Ze=Y,Y=null):Ze=Y.sibling;var _e=P(I,Y,x[te],D);if(_e===null){Y===null&&(Y=Ze);break}t&&Y&&_e.alternate===null&&r(I,Y),C=h(_e,C,te),Q===null?$=_e:Q.sibling=_e,Q=_e,Y=Ze}if(te===x.length)return o(I,Y),je&&cr(I,te),$;if(Y===null){for(;te<x.length;te++)Y=O(I,x[te],D),Y!==null&&(C=h(Y,C,te),Q===null?$=Y:Q.sibling=Y,Q=Y);return je&&cr(I,te),$}for(Y=a(I,Y);te<x.length;te++)Ze=W(Y,I,te,x[te],D),Ze!==null&&(t&&Ze.alternate!==null&&Y.delete(Ze.key===null?te:Ze.key),C=h(Ze,C,te),Q===null?$=Ze:Q.sibling=Ze,Q=Ze);return t&&Y.forEach(function($n){return r(I,$n)}),je&&cr(I,te),$}function H(I,C,x,D){var $=G(x);if(typeof $!="function")throw Error(n(150));if(x=$.call(x),x==null)throw Error(n(151));for(var Q=$=null,Y=C,te=C=0,Ze=null,_e=x.next();Y!==null&&!_e.done;te++,_e=x.next()){Y.index>te?(Ze=Y,Y=null):Ze=Y.sibling;var $n=P(I,Y,_e.value,D);if($n===null){Y===null&&(Y=Ze);break}t&&Y&&$n.alternate===null&&r(I,Y),C=h($n,C,te),Q===null?$=$n:Q.sibling=$n,Q=$n,Y=Ze}if(_e.done)return o(I,Y),je&&cr(I,te),$;if(Y===null){for(;!_e.done;te++,_e=x.next())_e=O(I,_e.value,D),_e!==null&&(C=h(_e,C,te),Q===null?$=_e:Q.sibling=_e,Q=_e);return je&&cr(I,te),$}for(Y=a(I,Y);!_e.done;te++,_e=x.next())_e=W(Y,I,te,_e.value,D),_e!==null&&(t&&_e.alternate!==null&&Y.delete(_e.key===null?te:_e.key),C=h(_e,C,te),Q===null?$=_e:Q.sibling=_e,Q=_e);return t&&Y.forEach(function(ry){return r(I,ry)}),je&&cr(I,te),$}function Ge(I,C,x,D){if(typeof x=="object"&&x!==null&&x.type===Le&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case He:e:{for(var $=x.key,Q=C;Q!==null;){if(Q.key===$){if($=x.type,$===Le){if(Q.tag===7){o(I,Q.sibling),C=c(Q,x.props.children),C.return=I,I=C;break e}}else if(Q.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===be&&nf($)===Q.type){o(I,Q.sibling),C=c(Q,x.props),C.ref=es(I,Q,x),C.return=I,I=C;break e}o(I,Q);break}else r(I,Q);Q=Q.sibling}x.type===Le?(C=_r(x.props.children,I.mode,D,x.key),C.return=I,I=C):(D=qo(x.type,x.key,x.props,null,I.mode,D),D.ref=es(I,C,x),D.return=I,I=D)}return m(I);case me:e:{for(Q=x.key;C!==null;){if(C.key===Q)if(C.tag===4&&C.stateNode.containerInfo===x.containerInfo&&C.stateNode.implementation===x.implementation){o(I,C.sibling),C=c(C,x.children||[]),C.return=I,I=C;break e}else{o(I,C);break}else r(I,C);C=C.sibling}C=Uu(x,I.mode,D),C.return=I,I=C}return m(I);case be:return Q=x._init,Ge(I,C,Q(x._payload),D)}if(bi(x))return B(I,C,x,D);if(G(x))return H(I,C,x,D);Co(I,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,C!==null&&C.tag===6?(o(I,C.sibling),C=c(C,x),C.return=I,I=C):(o(I,C),C=zu(x,I.mode,D),C.return=I,I=C),m(I)):o(I,C)}return Ge}var Xr=rf(!0),sf=rf(!1),ko=Dn(null),Io=null,Jr=null,Qa=null;function Ya(){Qa=Jr=Io=null}function Xa(t){var r=ko.current;De(ko),t._currentValue=r}function Ja(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function Zr(t,r){Io=t,Qa=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(yt=!0),t.firstContext=null)}function Dt(t){var r=t._currentValue;if(Qa!==t)if(t={context:t,memoizedValue:r,next:null},Jr===null){if(Io===null)throw Error(n(308));Jr=t,Io.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return r}var dr=null;function Za(t){dr===null?dr=[t]:dr.push(t)}function of(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,Za(r)):(o.next=c.next,c.next=o),r.interleaved=o,mn(t,a)}function mn(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var jn=!1;function eu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Fn(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,ge&2){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,mn(t,o)}return c=a.interleaved,c===null?(r.next=r,Za(a)):(r.next=c.next,c.next=r),a.interleaved=r,mn(t,o)}function xo(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,pa(t,o)}}function af(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=r:h=h.next=r}else c=h=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function To(t,r,o,a){var c=t.updateQueue;jn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,y=c.shared.pending;if(y!==null){c.shared.pending=null;var E=y,T=E.next;E.next=null,m===null?h=T:m.next=T,m=E;var A=t.alternate;A!==null&&(A=A.updateQueue,y=A.lastBaseUpdate,y!==m&&(y===null?A.firstBaseUpdate=T:y.next=T,A.lastBaseUpdate=E))}if(h!==null){var O=c.baseState;m=0,A=T=E=null,y=h;do{var P=y.lane,W=y.eventTime;if((a&P)===P){A!==null&&(A=A.next={eventTime:W,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var B=t,H=y;switch(P=r,W=o,H.tag){case 1:if(B=H.payload,typeof B=="function"){O=B.call(W,O,P);break e}O=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=H.payload,P=typeof B=="function"?B.call(W,O,P):B,P==null)break e;O=U({},O,P);break e;case 2:jn=!0}}y.callback!==null&&y.lane!==0&&(t.flags|=64,P=c.effects,P===null?c.effects=[y]:P.push(y))}else W={eventTime:W,lane:P,tag:y.tag,payload:y.payload,callback:y.callback,next:null},A===null?(T=A=W,E=O):A=A.next=W,m|=P;if(y=y.next,y===null){if(y=c.shared.pending,y===null)break;P=y,y=P.next,P.next=null,c.lastBaseUpdate=P,c.shared.pending=null}}while(!0);if(A===null&&(E=O),c.baseState=E,c.firstBaseUpdate=T,c.lastBaseUpdate=A,r=c.shared.interleaved,r!==null){c=r;do m|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);pr|=m,t.lanes=m,t.memoizedState=O}}function uf(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var ts={},nn=Dn(ts),ns=Dn(ts),rs=Dn(ts);function hr(t){if(t===ts)throw Error(n(174));return t}function tu(t,r){switch(Pe(rs,r),Pe(ns,t),Pe(nn,ts),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:na(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=na(r,t)}De(nn),Pe(nn,r)}function ei(){De(nn),De(ns),De(rs)}function cf(t){hr(rs.current);var r=hr(nn.current),o=na(r,t.type);r!==o&&(Pe(ns,t),Pe(nn,o))}function nu(t){ns.current===t&&(De(nn),De(ns))}var Fe=Dn(0);function No(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ru=[];function iu(){for(var t=0;t<ru.length;t++)ru[t]._workInProgressVersionPrimary=null;ru.length=0}var bo=Ce.ReactCurrentDispatcher,su=Ce.ReactCurrentBatchConfig,fr=0,ze=null,Qe=null,Xe=null,Po=!1,is=!1,ss=0,x_=0;function ct(){throw Error(n(321))}function ou(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!Vt(t[o],r[o]))return!1;return!0}function lu(t,r,o,a,c,h){if(fr=h,ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,bo.current=t===null||t.memoizedState===null?P_:R_,t=o(a,c),is){h=0;do{if(is=!1,ss=0,25<=h)throw Error(n(301));h+=1,Xe=Qe=null,r.updateQueue=null,bo.current=A_,t=o(a,c)}while(is)}if(bo.current=Oo,r=Qe!==null&&Qe.next!==null,fr=0,Xe=Qe=ze=null,Po=!1,r)throw Error(n(300));return t}function au(){var t=ss!==0;return ss=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?ze.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Lt(){if(Qe===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var r=Xe===null?ze.memoizedState:Xe.next;if(r!==null)Xe=r,Qe=t;else{if(t===null)throw Error(n(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Xe===null?ze.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function os(t,r){return typeof r=="function"?r(t):r}function uu(t){var r=Lt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=Qe,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var y=m=null,E=null,T=h;do{var A=T.lane;if((fr&A)===A)E!==null&&(E=E.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),a=T.hasEagerState?T.eagerState:t(a,T.action);else{var O={lane:A,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};E===null?(y=E=O,m=a):E=E.next=O,ze.lanes|=A,pr|=A}T=T.next}while(T!==null&&T!==h);E===null?m=a:E.next=y,Vt(a,r.memoizedState)||(yt=!0),r.memoizedState=a,r.baseState=m,r.baseQueue=E,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,ze.lanes|=h,pr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function cu(t){var r=Lt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=r.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);Vt(h,r.memoizedState)||(yt=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function df(){}function hf(t,r){var o=ze,a=Lt(),c=r(),h=!Vt(a.memoizedState,c);if(h&&(a.memoizedState=c,yt=!0),a=a.queue,du(mf.bind(null,o,a,t),[t]),a.getSnapshot!==r||h||Xe!==null&&Xe.memoizedState.tag&1){if(o.flags|=2048,ls(9,pf.bind(null,o,a,c,r),void 0,null),Je===null)throw Error(n(349));fr&30||ff(o,r,c)}return c}function ff(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=ze.updateQueue,r===null?(r={lastEffect:null,stores:null},ze.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function pf(t,r,o,a){r.value=o,r.getSnapshot=a,gf(r)&&vf(t)}function mf(t,r,o){return o(function(){gf(r)&&vf(t)})}function gf(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!Vt(t,o)}catch{return!0}}function vf(t){var r=mn(t,1);r!==null&&qt(r,t,1,-1)}function _f(t){var r=rn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},r.queue=t,t=t.dispatch=b_.bind(null,ze,t),[r.memoizedState,t]}function ls(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=ze.updateQueue,r===null?(r={lastEffect:null,stores:null},ze.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function yf(){return Lt().memoizedState}function Ro(t,r,o,a){var c=rn();ze.flags|=t,c.memoizedState=ls(1|r,o,void 0,a===void 0?null:a)}function Ao(t,r,o,a){var c=Lt();a=a===void 0?null:a;var h=void 0;if(Qe!==null){var m=Qe.memoizedState;if(h=m.destroy,a!==null&&ou(a,m.deps)){c.memoizedState=ls(r,o,h,a);return}}ze.flags|=t,c.memoizedState=ls(1|r,o,h,a)}function wf(t,r){return Ro(8390656,8,t,r)}function du(t,r){return Ao(2048,8,t,r)}function Ef(t,r){return Ao(4,2,t,r)}function Sf(t,r){return Ao(4,4,t,r)}function Cf(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function kf(t,r,o){return o=o!=null?o.concat([t]):null,Ao(4,4,Cf.bind(null,r,t),o)}function hu(){}function If(t,r){var o=Lt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&ou(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function xf(t,r){var o=Lt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&ou(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function Tf(t,r,o){return fr&21?(Vt(o,r)||(o=nh(),ze.lanes|=o,pr|=o,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=o)}function T_(t,r){var o=ke;ke=o!==0&&4>o?o:4,t(!0);var a=su.transition;su.transition={};try{t(!1),r()}finally{ke=o,su.transition=a}}function Nf(){return Lt().memoizedState}function N_(t,r,o){var a=Vn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},bf(t))Pf(r,o);else if(o=of(t,r,o,a),o!==null){var c=pt();qt(o,t,a,c),Rf(o,r,a)}}function b_(t,r,o){var a=Vn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(bf(t))Pf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var m=r.lastRenderedState,y=h(m,o);if(c.hasEagerState=!0,c.eagerState=y,Vt(y,m)){var E=r.interleaved;E===null?(c.next=c,Za(r)):(c.next=E.next,E.next=c),r.interleaved=c;return}}catch{}finally{}o=of(t,r,c,a),o!==null&&(c=pt(),qt(o,t,a,c),Rf(o,r,a))}}function bf(t){var r=t.alternate;return t===ze||r!==null&&r===ze}function Pf(t,r){is=Po=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Rf(t,r,o){if(o&4194240){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,pa(t,o)}}var Oo={readContext:Dt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},P_={readContext:Dt,useCallback:function(t,r){return rn().memoizedState=[t,r===void 0?null:r],t},useContext:Dt,useEffect:wf,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Ro(4194308,4,Cf.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Ro(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ro(4,2,t,r)},useMemo:function(t,r){var o=rn();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=rn();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=N_.bind(null,ze,t),[a.memoizedState,t]},useRef:function(t){var r=rn();return t={current:t},r.memoizedState=t},useState:_f,useDebugValue:hu,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=_f(!1),r=t[0];return t=T_.bind(null,t[1]),rn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=ze,c=rn();if(je){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Je===null)throw Error(n(349));fr&30||ff(a,r,o)}c.memoizedState=o;var h={value:o,getSnapshot:r};return c.queue=h,wf(mf.bind(null,a,h,t),[t]),a.flags|=2048,ls(9,pf.bind(null,a,h,o,r),void 0,null),o},useId:function(){var t=rn(),r=Je.identifierPrefix;if(je){var o=pn,a=fn;o=(a&~(1<<32-Wt(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=ss++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=x_++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},R_={readContext:Dt,useCallback:If,useContext:Dt,useEffect:du,useImperativeHandle:kf,useInsertionEffect:Ef,useLayoutEffect:Sf,useMemo:xf,useReducer:uu,useRef:yf,useState:function(){return uu(os)},useDebugValue:hu,useDeferredValue:function(t){var r=Lt();return Tf(r,Qe.memoizedState,t)},useTransition:function(){var t=uu(os)[0],r=Lt().memoizedState;return[t,r]},useMutableSource:df,useSyncExternalStore:hf,useId:Nf,unstable_isNewReconciler:!1},A_={readContext:Dt,useCallback:If,useContext:Dt,useEffect:du,useImperativeHandle:kf,useInsertionEffect:Ef,useLayoutEffect:Sf,useMemo:xf,useReducer:cu,useRef:yf,useState:function(){return cu(os)},useDebugValue:hu,useDeferredValue:function(t){var r=Lt();return Qe===null?r.memoizedState=t:Tf(r,Qe.memoizedState,t)},useTransition:function(){var t=cu(os)[0],r=Lt().memoizedState;return[t,r]},useMutableSource:df,useSyncExternalStore:hf,useId:Nf,unstable_isNewReconciler:!1};function Ht(t,r){if(t&&t.defaultProps){r=U({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function fu(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:U({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Do={isMounted:function(t){return(t=t._reactInternals)?or(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=pt(),c=Vn(t),h=gn(a,c);h.payload=r,o!=null&&(h.callback=o),r=Fn(t,h,c),r!==null&&(qt(r,t,c,a),xo(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=pt(),c=Vn(t),h=gn(a,c);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=Fn(t,h,c),r!==null&&(qt(r,t,c,a),xo(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=pt(),a=Vn(t),c=gn(o,a);c.tag=2,r!=null&&(c.callback=r),r=Fn(t,c,a),r!==null&&(qt(r,t,a,o),xo(r,t,a))}};function Af(t,r,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):r.prototype&&r.prototype.isPureReactComponent?!qi(o,a)||!qi(c,h):!0}function Of(t,r,o){var a=!1,c=Ln,h=r.contextType;return typeof h=="object"&&h!==null?h=Dt(h):(c=_t(r)?ar:ut.current,a=r.contextTypes,h=(a=a!=null)?qr(t,c):Ln),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Do,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function Df(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&Do.enqueueReplaceState(r,r.state,null)}function pu(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},eu(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=Dt(h):(h=_t(r)?ar:ut.current,c.context=qr(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(fu(t,r,h,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&Do.enqueueReplaceState(c,c.state,null),To(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,r){try{var o="",a=r;do o+=se(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function mu(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function gu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var O_=typeof WeakMap=="function"?WeakMap:Map;function Lf(t,r,o){o=gn(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){Wo||(Wo=!0,Ru=a),gu(t,r)},o}function Mf(t,r,o){o=gn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){gu(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){gu(t,r),typeof a!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var m=r.stack;this.componentDidCatch(r.value,{componentStack:m!==null?m:""})}),o}function jf(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new O_;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=q_.bind(null,t,r,o),r.then(t,t))}function Ff(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function zf(t,r,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=gn(-1,1),r.tag=2,Fn(o,r,1))),o.lanes|=1),t)}var D_=Ce.ReactCurrentOwner,yt=!1;function ft(t,r,o,a){r.child=t===null?sf(r,null,o,a):Xr(r,t.child,o,a)}function Uf(t,r,o,a,c){o=o.render;var h=r.ref;return Zr(r,c),a=lu(t,r,o,a,h,c),o=au(),t!==null&&!yt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,vn(t,r,c)):(je&&o&&Ha(r),r.flags|=1,ft(t,r,a,c),r.child)}function Wf(t,r,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!Fu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,Vf(t,r,h,a,c)):(t=qo(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:qi,o(m,a)&&t.ref===r.ref)return vn(t,r,c)}return r.flags|=1,t=Hn(h,a),t.ref=r.ref,t.return=r,r.child=t}function Vf(t,r,o,a,c){if(t!==null){var h=t.memoizedProps;if(qi(h,a)&&t.ref===r.ref)if(yt=!1,r.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(yt=!0);else return r.lanes=t.lanes,vn(t,r,c)}return vu(t,r,o,a,c)}function Bf(t,r,o){var a=r.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(ri,bt),bt|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Pe(ri,bt),bt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Pe(ri,bt),bt|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,Pe(ri,bt),bt|=a;return ft(t,r,c,o),r.child}function Hf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function vu(t,r,o,a,c){var h=_t(o)?ar:ut.current;return h=qr(r,h),Zr(r,c),o=lu(t,r,o,a,h,c),a=au(),t!==null&&!yt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,vn(t,r,c)):(je&&a&&Ha(r),r.flags|=1,ft(t,r,o,c),r.child)}function $f(t,r,o,a,c){if(_t(o)){var h=!0;_o(r)}else h=!1;if(Zr(r,c),r.stateNode===null)Mo(t,r),Of(r,o,a),pu(r,o,a,c),a=!0;else if(t===null){var m=r.stateNode,y=r.memoizedProps;m.props=y;var E=m.context,T=o.contextType;typeof T=="object"&&T!==null?T=Dt(T):(T=_t(o)?ar:ut.current,T=qr(r,T));var A=o.getDerivedStateFromProps,O=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function";O||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==a||E!==T)&&Df(r,m,a,T),jn=!1;var P=r.memoizedState;m.state=P,To(r,a,m,c),E=r.memoizedState,y!==a||P!==E||vt.current||jn?(typeof A=="function"&&(fu(r,o,A,a),E=r.memoizedState),(y=jn||Af(r,o,y,a,P,E,T))?(O||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=E),m.props=a,m.state=E,m.context=T,a=y):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{m=r.stateNode,lf(t,r),y=r.memoizedProps,T=r.type===r.elementType?y:Ht(r.type,y),m.props=T,O=r.pendingProps,P=m.context,E=o.contextType,typeof E=="object"&&E!==null?E=Dt(E):(E=_t(o)?ar:ut.current,E=qr(r,E));var W=o.getDerivedStateFromProps;(A=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==O||P!==E)&&Df(r,m,a,E),jn=!1,P=r.memoizedState,m.state=P,To(r,a,m,c);var B=r.memoizedState;y!==O||P!==B||vt.current||jn?(typeof W=="function"&&(fu(r,o,W,a),B=r.memoizedState),(T=jn||Af(r,o,T,a,P,B,E)||!1)?(A||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,B,E),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,B,E)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=B),m.props=a,m.state=B,m.context=E,a=T):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(r.flags|=1024),a=!1)}return _u(t,r,o,a,h,c)}function _u(t,r,o,a,c,h){Hf(t,r);var m=(r.flags&128)!==0;if(!a&&!m)return c&&Qh(r,o,!1),vn(t,r,h);a=r.stateNode,D_.current=r;var y=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&m?(r.child=Xr(r,t.child,null,h),r.child=Xr(r,null,y,h)):ft(t,r,y,h),r.memoizedState=a.state,c&&Qh(r,o,!0),r.child}function Gf(t){var r=t.stateNode;r.pendingContext?qh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&qh(t,r.context,!1),tu(t,r.containerInfo)}function qf(t,r,o,a,c){return Yr(),Ka(c),r.flags|=256,ft(t,r,o,a),r.child}var yu={dehydrated:null,treeContext:null,retryLane:0};function wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Kf(t,r,o){var a=r.pendingProps,c=Fe.current,h=!1,m=(r.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(c&2)!==0),y?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Pe(Fe,c&1),t===null)return qa(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(m=a.children,t=a.fallback,h?(a=r.mode,h=r.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Ko(m,a,0,null),t=_r(t,a,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=wu(o),r.memoizedState=yu,t):Eu(r,m));if(c=t.memoizedState,c!==null&&(y=c.dehydrated,y!==null))return L_(t,r,m,a,y,c,o);if(h){h=a.fallback,m=r.mode,c=t.child,y=c.sibling;var E={mode:"hidden",children:a.children};return!(m&1)&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=E,r.deletions=null):(a=Hn(c,E),a.subtreeFlags=c.subtreeFlags&14680064),y!==null?h=Hn(y,h):(h=_r(h,m,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,m=t.child.memoizedState,m=m===null?wu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,r.memoizedState=yu,a}return h=t.child,t=h.sibling,a=Hn(h,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function Eu(t,r){return r=Ko({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Lo(t,r,o,a){return a!==null&&Ka(a),Xr(r,t.child,null,o),t=Eu(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function L_(t,r,o,a,c,h,m){if(o)return r.flags&256?(r.flags&=-257,a=mu(Error(n(422))),Lo(t,r,m,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=a.fallback,c=r.mode,a=Ko({mode:"visible",children:a.children},c,0,null),h=_r(h,c,m,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,r.mode&1&&Xr(r,t.child,null,m),r.child.memoizedState=wu(m),r.memoizedState=yu,h);if(!(r.mode&1))return Lo(t,r,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var y=a.dgst;return a=y,h=Error(n(419)),a=mu(h,a,void 0),Lo(t,r,m,a)}if(y=(m&t.childLanes)!==0,yt||y){if(a=Je,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,mn(t,c),qt(a,t,c,-1))}return ju(),a=mu(Error(n(421))),Lo(t,r,m,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=K_.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,Nt=On(c.nextSibling),Tt=r,je=!0,Bt=null,t!==null&&(At[Ot++]=fn,At[Ot++]=pn,At[Ot++]=ur,fn=t.id,pn=t.overflow,ur=r),r=Eu(r,a.children),r.flags|=4096,r)}function Qf(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),Ja(t.return,r,o)}function Su(t,r,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function Yf(t,r,o){var a=r.pendingProps,c=a.revealOrder,h=a.tail;if(ft(t,r,a.children,o),a=Fe.current,a&2)a=a&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qf(t,o,r);else if(t.tag===19)Qf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Pe(Fe,a),!(r.mode&1))r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&No(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),Su(r,!1,c,o,h);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&No(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Su(r,!0,o,null,h);break;case"together":Su(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Mo(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function vn(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),pr|=r.lanes,!(o&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Hn(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Hn(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function M_(t,r,o){switch(r.tag){case 3:Gf(r),Yr();break;case 5:cf(r);break;case 1:_t(r.type)&&_o(r);break;case 4:tu(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;Pe(ko,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(Pe(Fe,Fe.current&1),r.flags|=128,null):o&r.child.childLanes?Kf(t,r,o):(Pe(Fe,Fe.current&1),t=vn(t,r,o),t!==null?t.sibling:null);Pe(Fe,Fe.current&1);break;case 19:if(a=(o&r.childLanes)!==0,t.flags&128){if(a)return Yf(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Pe(Fe,Fe.current),a)break;return null;case 22:case 23:return r.lanes=0,Bf(t,r,o)}return vn(t,r,o)}var Xf,Cu,Jf,Zf;Xf=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Cu=function(){},Jf=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,hr(nn.current);var h=null;switch(o){case"input":c=ve(t,c),a=ve(t,a),h=[];break;case"select":c=U({},c,{value:void 0}),a=U({},a,{value:void 0}),h=[];break;case"textarea":c=ta(t,c),a=ta(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=mo)}ra(o,a);var m;o=null;for(T in c)if(!a.hasOwnProperty(T)&&c.hasOwnProperty(T)&&c[T]!=null)if(T==="style"){var y=c[T];for(m in y)y.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(l.hasOwnProperty(T)?h||(h=[]):(h=h||[]).push(T,null));for(T in a){var E=a[T];if(y=c!=null?c[T]:void 0,a.hasOwnProperty(T)&&E!==y&&(E!=null||y!=null))if(T==="style")if(y){for(m in y)!y.hasOwnProperty(m)||E&&E.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in E)E.hasOwnProperty(m)&&y[m]!==E[m]&&(o||(o={}),o[m]=E[m])}else o||(h||(h=[]),h.push(T,o)),o=E;else T==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,y=y?y.__html:void 0,E!=null&&y!==E&&(h=h||[]).push(T,E)):T==="children"?typeof E!="string"&&typeof E!="number"||(h=h||[]).push(T,""+E):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(l.hasOwnProperty(T)?(E!=null&&T==="onScroll"&&Oe("scroll",t),h||y===E||(h=[])):(h=h||[]).push(T,E))}o&&(h=h||[]).push("style",o);var T=h;(r.updateQueue=T)&&(r.flags|=4)}},Zf=function(t,r,o,a){o!==a&&(r.flags|=4)};function as(t,r){if(!je)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function dt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function j_(t,r,o){var a=r.pendingProps;switch($a(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(r),null;case 1:return _t(r.type)&&vo(),dt(r),null;case 3:return a=r.stateNode,ei(),De(vt),De(ut),iu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(So(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Bt!==null&&(Du(Bt),Bt=null))),Cu(t,r),dt(r),null;case 5:nu(r);var c=hr(rs.current);if(o=r.type,t!==null&&r.stateNode!=null)Jf(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return dt(r),null}if(t=hr(nn.current),So(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[tn]=r,a[Ji]=h,t=(r.mode&1)!==0,o){case"dialog":Oe("cancel",a),Oe("close",a);break;case"iframe":case"object":case"embed":Oe("load",a);break;case"video":case"audio":for(c=0;c<Qi.length;c++)Oe(Qi[c],a);break;case"source":Oe("error",a);break;case"img":case"image":case"link":Oe("error",a),Oe("load",a);break;case"details":Oe("toggle",a);break;case"input":it(a,h),Oe("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Oe("invalid",a);break;case"textarea":Ld(a,h),Oe("invalid",a)}ra(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var y=h[m];m==="children"?typeof y=="string"?a.textContent!==y&&(h.suppressHydrationWarning!==!0&&po(a.textContent,y,t),c=["children",y]):typeof y=="number"&&a.textContent!==""+y&&(h.suppressHydrationWarning!==!0&&po(a.textContent,y,t),c=["children",""+y]):l.hasOwnProperty(m)&&y!=null&&m==="onScroll"&&Oe("scroll",a)}switch(o){case"input":It(a),Dd(a,h,!0);break;case"textarea":It(a),jd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=mo)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[tn]=r,t[Ji]=a,Xf(t,r,!1,!1),r.stateNode=t;e:{switch(m=ia(o,a),o){case"dialog":Oe("cancel",t),Oe("close",t),c=a;break;case"iframe":case"object":case"embed":Oe("load",t),c=a;break;case"video":case"audio":for(c=0;c<Qi.length;c++)Oe(Qi[c],t);c=a;break;case"source":Oe("error",t),c=a;break;case"img":case"image":case"link":Oe("error",t),Oe("load",t),c=a;break;case"details":Oe("toggle",t),c=a;break;case"input":it(t,a),c=ve(t,a),Oe("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=U({},a,{value:void 0}),Oe("invalid",t);break;case"textarea":Ld(t,a),c=ta(t,a),Oe("invalid",t);break;default:c=a}ra(o,c),y=c;for(h in y)if(y.hasOwnProperty(h)){var E=y[h];h==="style"?Wd(t,E):h==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&zd(t,E)):h==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&Pi(t,E):typeof E=="number"&&Pi(t,""+E):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?E!=null&&h==="onScroll"&&Oe("scroll",t):E!=null&&Se(t,h,E,m))}switch(o){case"input":It(t),Dd(t,a,!1);break;case"textarea":It(t),jd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+Z(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Lr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Lr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=mo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return dt(r),null;case 6:if(t&&r.stateNode!=null)Zf(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=hr(rs.current),hr(nn.current),So(r)){if(a=r.stateNode,o=r.memoizedProps,a[tn]=r,(h=a.nodeValue!==o)&&(t=Tt,t!==null))switch(t.tag){case 3:po(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(a.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[tn]=r,r.stateNode=a}return dt(r),null;case 13:if(De(Fe),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&Nt!==null&&r.mode&1&&!(r.flags&128))tf(),Yr(),r.flags|=98560,h=!1;else if(h=So(r),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[tn]=r}else Yr(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;dt(r),h=!1}else Bt!==null&&(Du(Bt),Bt=null),h=!0;if(!h)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(t===null||Fe.current&1?Ye===0&&(Ye=3):ju())),r.updateQueue!==null&&(r.flags|=4),dt(r),null);case 4:return ei(),Cu(t,r),t===null&&Yi(r.stateNode.containerInfo),dt(r),null;case 10:return Xa(r.type._context),dt(r),null;case 17:return _t(r.type)&&vo(),dt(r),null;case 19:if(De(Fe),h=r.memoizedState,h===null)return dt(r),null;if(a=(r.flags&128)!==0,m=h.rendering,m===null)if(a)as(h,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(m=No(t),m!==null){for(r.flags|=128,as(h,!1),a=m.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Pe(Fe,Fe.current&1|2),r.child}t=t.sibling}h.tail!==null&&$e()>ii&&(r.flags|=128,a=!0,as(h,!1),r.lanes=4194304)}else{if(!a)if(t=No(m),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),as(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!je)return dt(r),null}else 2*$e()-h.renderingStartTime>ii&&o!==1073741824&&(r.flags|=128,a=!0,as(h,!1),r.lanes=4194304);h.isBackwards?(m.sibling=r.child,r.child=m):(o=h.last,o!==null?o.sibling=m:r.child=m,h.last=m)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=$e(),r.sibling=null,o=Fe.current,Pe(Fe,a?o&1|2:o&1),r):(dt(r),null);case 22:case 23:return Mu(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?bt&1073741824&&(dt(r),r.subtreeFlags&6&&(r.flags|=8192)):dt(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function F_(t,r){switch($a(r),r.tag){case 1:return _t(r.type)&&vo(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return ei(),De(vt),De(ut),iu(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return nu(r),null;case 13:if(De(Fe),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Yr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return De(Fe),null;case 4:return ei(),null;case 10:return Xa(r.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var jo=!1,ht=!1,z_=typeof WeakSet=="function"?WeakSet:Set,V=null;function ni(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){We(t,r,a)}else o.current=null}function ku(t,r,o){try{o()}catch(a){We(t,r,a)}}var ep=!1;function U_(t,r){if(Ma=no,t=Rh(),Na(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,y=-1,E=-1,T=0,A=0,O=t,P=null;t:for(;;){for(var W;O!==o||c!==0&&O.nodeType!==3||(y=m+c),O!==h||a!==0&&O.nodeType!==3||(E=m+a),O.nodeType===3&&(m+=O.nodeValue.length),(W=O.firstChild)!==null;)P=O,O=W;for(;;){if(O===t)break t;if(P===o&&++T===c&&(y=m),P===h&&++A===a&&(E=m),(W=O.nextSibling)!==null)break;O=P,P=O.parentNode}O=W}o=y===-1||E===-1?null:{start:y,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(ja={focusedElem:t,selectionRange:o},no=!1,V=r;V!==null;)if(r=V,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,V=t;else for(;V!==null;){r=V;try{var B=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var H=B.memoizedProps,Ge=B.memoizedState,I=r.stateNode,C=I.getSnapshotBeforeUpdate(r.elementType===r.type?H:Ht(r.type,H),Ge);I.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var x=r.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(D){We(r,r.return,D)}if(t=r.sibling,t!==null){t.return=r.return,V=t;break}V=r.return}return B=ep,ep=!1,B}function us(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&ku(r,o,h)}c=c.next}while(c!==a)}}function Fo(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function Iu(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function tp(t){var r=t.alternate;r!==null&&(t.alternate=null,tp(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[tn],delete r[Ji],delete r[Wa],delete r[S_],delete r[C_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function np(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=mo));else if(a!==4&&(t=t.child,t!==null))for(xu(t,r,o),t=t.sibling;t!==null;)xu(t,r,o),t=t.sibling}function Tu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Tu(t,r,o),t=t.sibling;t!==null;)Tu(t,r,o),t=t.sibling}var st=null,$t=!1;function zn(t,r,o){for(o=o.child;o!==null;)ip(t,r,o),o=o.sibling}function ip(t,r,o){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Ys,o)}catch{}switch(o.tag){case 5:ht||ni(o,r);case 6:var a=st,c=$t;st=null,zn(t,r,o),st=a,$t=c,st!==null&&($t?(t=st,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):st.removeChild(o.stateNode));break;case 18:st!==null&&($t?(t=st,o=o.stateNode,t.nodeType===8?Ua(t.parentNode,o):t.nodeType===1&&Ua(t,o),Wi(t)):Ua(st,o.stateNode));break;case 4:a=st,c=$t,st=o.stateNode.containerInfo,$t=!0,zn(t,r,o),st=a,$t=c;break;case 0:case 11:case 14:case 15:if(!ht&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&ku(o,r,m),c=c.next}while(c!==a)}zn(t,r,o);break;case 1:if(!ht&&(ni(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(y){We(o,r,y)}zn(t,r,o);break;case 21:zn(t,r,o);break;case 22:o.mode&1?(ht=(a=ht)||o.memoizedState!==null,zn(t,r,o),ht=a):zn(t,r,o);break;default:zn(t,r,o)}}function sp(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new z_),r.forEach(function(a){var c=Q_.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Gt(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=r,y=m;e:for(;y!==null;){switch(y.tag){case 5:st=y.stateNode,$t=!1;break e;case 3:st=y.stateNode.containerInfo,$t=!0;break e;case 4:st=y.stateNode.containerInfo,$t=!0;break e}y=y.return}if(st===null)throw Error(n(160));ip(h,m,c),st=null,$t=!1;var E=c.alternate;E!==null&&(E.return=null),c.return=null}catch(T){We(c,r,T)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)op(r,t),r=r.sibling}function op(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(r,t),sn(t),a&4){try{us(3,t,t.return),Fo(3,t)}catch(H){We(t,t.return,H)}try{us(5,t,t.return)}catch(H){We(t,t.return,H)}}break;case 1:Gt(r,t),sn(t),a&512&&o!==null&&ni(o,o.return);break;case 5:if(Gt(r,t),sn(t),a&512&&o!==null&&ni(o,o.return),t.flags&32){var c=t.stateNode;try{Pi(c,"")}catch(H){We(t,t.return,H)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,y=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{y==="input"&&h.type==="radio"&&h.name!=null&&Ut(c,h),ia(y,m);var T=ia(y,h);for(m=0;m<E.length;m+=2){var A=E[m],O=E[m+1];A==="style"?Wd(c,O):A==="dangerouslySetInnerHTML"?zd(c,O):A==="children"?Pi(c,O):Se(c,A,O,T)}switch(y){case"input":Dr(c,h);break;case"textarea":Md(c,h);break;case"select":var P=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var W=h.value;W!=null?Lr(c,!!h.multiple,W,!1):P!==!!h.multiple&&(h.defaultValue!=null?Lr(c,!!h.multiple,h.defaultValue,!0):Lr(c,!!h.multiple,h.multiple?[]:"",!1))}c[Ji]=h}catch(H){We(t,t.return,H)}}break;case 6:if(Gt(r,t),sn(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(H){We(t,t.return,H)}}break;case 3:if(Gt(r,t),sn(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Wi(r.containerInfo)}catch(H){We(t,t.return,H)}break;case 4:Gt(r,t),sn(t);break;case 13:Gt(r,t),sn(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Pu=$e())),a&4&&sp(t);break;case 22:if(A=o!==null&&o.memoizedState!==null,t.mode&1?(ht=(T=ht)||A,Gt(r,t),ht=T):Gt(r,t),sn(t),a&8192){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!A&&t.mode&1)for(V=t,A=t.child;A!==null;){for(O=V=A;V!==null;){switch(P=V,W=P.child,P.tag){case 0:case 11:case 14:case 15:us(4,P,P.return);break;case 1:ni(P,P.return);var B=P.stateNode;if(typeof B.componentWillUnmount=="function"){a=P,o=P.return;try{r=a,B.props=r.memoizedProps,B.state=r.memoizedState,B.componentWillUnmount()}catch(H){We(a,o,H)}}break;case 5:ni(P,P.return);break;case 22:if(P.memoizedState!==null){up(O);continue}}W!==null?(W.return=P,V=W):up(O)}A=A.sibling}e:for(A=null,O=t;;){if(O.tag===5){if(A===null){A=O;try{c=O.stateNode,T?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(y=O.stateNode,E=O.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null,y.style.display=Ud("display",m))}catch(H){We(t,t.return,H)}}}else if(O.tag===6){if(A===null)try{O.stateNode.nodeValue=T?"":O.memoizedProps}catch(H){We(t,t.return,H)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===t)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===t)break e;for(;O.sibling===null;){if(O.return===null||O.return===t)break e;A===O&&(A=null),O=O.return}A===O&&(A=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:Gt(r,t),sn(t),a&4&&sp(t);break;case 21:break;default:Gt(r,t),sn(t)}}function sn(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(np(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Pi(c,""),a.flags&=-33);var h=rp(t);Tu(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,y=rp(t);xu(t,y,m);break;default:throw Error(n(161))}}catch(E){We(t,t.return,E)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function W_(t,r,o){V=t,lp(t)}function lp(t,r,o){for(var a=(t.mode&1)!==0;V!==null;){var c=V,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||jo;if(!m){var y=c.alternate,E=y!==null&&y.memoizedState!==null||ht;y=jo;var T=ht;if(jo=m,(ht=E)&&!T)for(V=c;V!==null;)m=V,E=m.child,m.tag===22&&m.memoizedState!==null?cp(c):E!==null?(E.return=m,V=E):cp(c);for(;h!==null;)V=h,lp(h),h=h.sibling;V=c,jo=y,ht=T}ap(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,V=h):ap(t)}}function ap(t){for(;V!==null;){var r=V;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:ht||Fo(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!ht)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:Ht(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&uf(r,h,a);break;case 3:var m=r.updateQueue;if(m!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}uf(r,m,o)}break;case 5:var y=r.stateNode;if(o===null&&r.flags&4){o=y;var E=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var T=r.alternate;if(T!==null){var A=T.memoizedState;if(A!==null){var O=A.dehydrated;O!==null&&Wi(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ht||r.flags&512&&Iu(r)}catch(P){We(r,r.return,P)}}if(r===t){V=null;break}if(o=r.sibling,o!==null){o.return=r.return,V=o;break}V=r.return}}function up(t){for(;V!==null;){var r=V;if(r===t){V=null;break}var o=r.sibling;if(o!==null){o.return=r.return,V=o;break}V=r.return}}function cp(t){for(;V!==null;){var r=V;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Fo(4,r)}catch(E){We(r,o,E)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(E){We(r,c,E)}}var h=r.return;try{Iu(r)}catch(E){We(r,h,E)}break;case 5:var m=r.return;try{Iu(r)}catch(E){We(r,m,E)}}}catch(E){We(r,r.return,E)}if(r===t){V=null;break}var y=r.sibling;if(y!==null){y.return=r.return,V=y;break}V=r.return}}var V_=Math.ceil,zo=Ce.ReactCurrentDispatcher,Nu=Ce.ReactCurrentOwner,Mt=Ce.ReactCurrentBatchConfig,ge=0,Je=null,Ke=null,ot=0,bt=0,ri=Dn(0),Ye=0,cs=null,pr=0,Uo=0,bu=0,ds=null,wt=null,Pu=0,ii=1/0,_n=null,Wo=!1,Ru=null,Un=null,Vo=!1,Wn=null,Bo=0,hs=0,Au=null,Ho=-1,$o=0;function pt(){return ge&6?$e():Ho!==-1?Ho:Ho=$e()}function Vn(t){return t.mode&1?ge&2&&ot!==0?ot&-ot:I_.transition!==null?($o===0&&($o=nh()),$o):(t=ke,t!==0||(t=window.event,t=t===void 0?16:dh(t.type)),t):1}function qt(t,r,o,a){if(50<hs)throw hs=0,Au=null,Error(n(185));Mi(t,o,a),(!(ge&2)||t!==Je)&&(t===Je&&(!(ge&2)&&(Uo|=o),Ye===4&&Bn(t,ot)),Et(t,a),o===1&&ge===0&&!(r.mode&1)&&(ii=$e()+500,yo&&Mn()))}function Et(t,r){var o=t.callbackNode;I0(t,r);var a=Zs(t,t===Je?ot:0);if(a===0)o!==null&&Zd(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&Zd(o),r===1)t.tag===0?k_(hp.bind(null,t)):Yh(hp.bind(null,t)),w_(function(){!(ge&6)&&Mn()}),o=null;else{switch(rh(a)){case 1:o=da;break;case 4:o=eh;break;case 16:o=Qs;break;case 536870912:o=th;break;default:o=Qs}o=wp(o,dp.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function dp(t,r){if(Ho=-1,$o=0,ge&6)throw Error(n(327));var o=t.callbackNode;if(si()&&t.callbackNode!==o)return null;var a=Zs(t,t===Je?ot:0);if(a===0)return null;if(a&30||a&t.expiredLanes||r)r=Go(t,a);else{r=a;var c=ge;ge|=2;var h=pp();(Je!==t||ot!==r)&&(_n=null,ii=$e()+500,gr(t,r));do try{$_();break}catch(y){fp(t,y)}while(!0);Ya(),zo.current=h,ge=c,Ke!==null?r=0:(Je=null,ot=0,r=Ye)}if(r!==0){if(r===2&&(c=ha(t),c!==0&&(a=c,r=Ou(t,c))),r===1)throw o=cs,gr(t,0),Bn(t,a),Et(t,$e()),o;if(r===6)Bn(t,a);else{if(c=t.current.alternate,!(a&30)&&!B_(c)&&(r=Go(t,a),r===2&&(h=ha(t),h!==0&&(a=h,r=Ou(t,h))),r===1))throw o=cs,gr(t,0),Bn(t,a),Et(t,$e()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:vr(t,wt,_n);break;case 3:if(Bn(t,a),(a&130023424)===a&&(r=Pu+500-$e(),10<r)){if(Zs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){pt(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=za(vr.bind(null,t,wt,_n),r);break}vr(t,wt,_n);break;case 4:if(Bn(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var m=31-Wt(a);h=1<<m,m=r[m],m>c&&(c=m),a&=~h}if(a=c,a=$e()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*V_(a/1960))-a,10<a){t.timeoutHandle=za(vr.bind(null,t,wt,_n),a);break}vr(t,wt,_n);break;case 5:vr(t,wt,_n);break;default:throw Error(n(329))}}}return Et(t,$e()),t.callbackNode===o?dp.bind(null,t):null}function Ou(t,r){var o=ds;return t.current.memoizedState.isDehydrated&&(gr(t,r).flags|=256),t=Go(t,r),t!==2&&(r=wt,wt=o,r!==null&&Du(r)),t}function Du(t){wt===null?wt=t:wt.push.apply(wt,t)}function B_(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!Vt(h(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Bn(t,r){for(r&=~bu,r&=~Uo,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Wt(r),a=1<<o;t[o]=-1,r&=~a}}function hp(t){if(ge&6)throw Error(n(327));si();var r=Zs(t,0);if(!(r&1))return Et(t,$e()),null;var o=Go(t,r);if(t.tag!==0&&o===2){var a=ha(t);a!==0&&(r=a,o=Ou(t,a))}if(o===1)throw o=cs,gr(t,0),Bn(t,r),Et(t,$e()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,vr(t,wt,_n),Et(t,$e()),null}function Lu(t,r){var o=ge;ge|=1;try{return t(r)}finally{ge=o,ge===0&&(ii=$e()+500,yo&&Mn())}}function mr(t){Wn!==null&&Wn.tag===0&&!(ge&6)&&si();var r=ge;ge|=1;var o=Mt.transition,a=ke;try{if(Mt.transition=null,ke=1,t)return t()}finally{ke=a,Mt.transition=o,ge=r,!(ge&6)&&Mn()}}function Mu(){bt=ri.current,De(ri)}function gr(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,y_(o)),Ke!==null)for(o=Ke.return;o!==null;){var a=o;switch($a(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&vo();break;case 3:ei(),De(vt),De(ut),iu();break;case 5:nu(a);break;case 4:ei();break;case 13:De(Fe);break;case 19:De(Fe);break;case 10:Xa(a.type._context);break;case 22:case 23:Mu()}o=o.return}if(Je=t,Ke=t=Hn(t.current,null),ot=bt=r,Ye=0,cs=null,bu=Uo=pr=0,wt=ds=null,dr!==null){for(r=0;r<dr.length;r++)if(o=dr[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}dr=null}return t}function fp(t,r){do{var o=Ke;try{if(Ya(),bo.current=Oo,Po){for(var a=ze.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Po=!1}if(fr=0,Xe=Qe=ze=null,is=!1,ss=0,Nu.current=null,o===null||o.return===null){Ye=1,cs=r,Ke=null;break}e:{var h=t,m=o.return,y=o,E=r;if(r=ot,y.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var T=E,A=y,O=A.tag;if(!(A.mode&1)&&(O===0||O===11||O===15)){var P=A.alternate;P?(A.updateQueue=P.updateQueue,A.memoizedState=P.memoizedState,A.lanes=P.lanes):(A.updateQueue=null,A.memoizedState=null)}var W=Ff(m);if(W!==null){W.flags&=-257,zf(W,m,y,h,r),W.mode&1&&jf(h,T,r),r=W,E=T;var B=r.updateQueue;if(B===null){var H=new Set;H.add(E),r.updateQueue=H}else B.add(E);break e}else{if(!(r&1)){jf(h,T,r),ju();break e}E=Error(n(426))}}else if(je&&y.mode&1){var Ge=Ff(m);if(Ge!==null){!(Ge.flags&65536)&&(Ge.flags|=256),zf(Ge,m,y,h,r),Ka(ti(E,y));break e}}h=E=ti(E,y),Ye!==4&&(Ye=2),ds===null?ds=[h]:ds.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var I=Lf(h,E,r);af(h,I);break e;case 1:y=E;var C=h.type,x=h.stateNode;if(!(h.flags&128)&&(typeof C.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Un===null||!Un.has(x)))){h.flags|=65536,r&=-r,h.lanes|=r;var D=Mf(h,y,r);af(h,D);break e}}h=h.return}while(h!==null)}gp(o)}catch($){r=$,Ke===o&&o!==null&&(Ke=o=o.return);continue}break}while(!0)}function pp(){var t=zo.current;return zo.current=Oo,t===null?Oo:t}function ju(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Je===null||!(pr&268435455)&&!(Uo&268435455)||Bn(Je,ot)}function Go(t,r){var o=ge;ge|=2;var a=pp();(Je!==t||ot!==r)&&(_n=null,gr(t,r));do try{H_();break}catch(c){fp(t,c)}while(!0);if(Ya(),ge=o,zo.current=a,Ke!==null)throw Error(n(261));return Je=null,ot=0,Ye}function H_(){for(;Ke!==null;)mp(Ke)}function $_(){for(;Ke!==null&&!g0();)mp(Ke)}function mp(t){var r=yp(t.alternate,t,bt);t.memoizedProps=t.pendingProps,r===null?gp(t):Ke=r,Nu.current=null}function gp(t){var r=t;do{var o=r.alternate;if(t=r.return,r.flags&32768){if(o=F_(o,r),o!==null){o.flags&=32767,Ke=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,Ke=null;return}}else if(o=j_(o,r,bt),o!==null){Ke=o;return}if(r=r.sibling,r!==null){Ke=r;return}Ke=r=t}while(r!==null);Ye===0&&(Ye=5)}function vr(t,r,o){var a=ke,c=Mt.transition;try{Mt.transition=null,ke=1,G_(t,r,o,a)}finally{Mt.transition=c,ke=a}return null}function G_(t,r,o,a){do si();while(Wn!==null);if(ge&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(x0(t,h),t===Je&&(Ke=Je=null,ot=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Vo||(Vo=!0,wp(Qs,function(){return si(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Mt.transition,Mt.transition=null;var m=ke;ke=1;var y=ge;ge|=4,Nu.current=null,U_(t,o),op(o,t),h_(ja),no=!!Ma,ja=Ma=null,t.current=o,W_(o),v0(),ge=y,ke=m,Mt.transition=h}else t.current=o;if(Vo&&(Vo=!1,Wn=t,Bo=c),h=t.pendingLanes,h===0&&(Un=null),w0(o.stateNode),Et(t,$e()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Wo)throw Wo=!1,t=Ru,Ru=null,t;return Bo&1&&t.tag!==0&&si(),h=t.pendingLanes,h&1?t===Au?hs++:(hs=0,Au=t):hs=0,Mn(),null}function si(){if(Wn!==null){var t=rh(Bo),r=Mt.transition,o=ke;try{if(Mt.transition=null,ke=16>t?16:t,Wn===null)var a=!1;else{if(t=Wn,Wn=null,Bo=0,ge&6)throw Error(n(331));var c=ge;for(ge|=4,V=t.current;V!==null;){var h=V,m=h.child;if(V.flags&16){var y=h.deletions;if(y!==null){for(var E=0;E<y.length;E++){var T=y[E];for(V=T;V!==null;){var A=V;switch(A.tag){case 0:case 11:case 15:us(8,A,h)}var O=A.child;if(O!==null)O.return=A,V=O;else for(;V!==null;){A=V;var P=A.sibling,W=A.return;if(tp(A),A===T){V=null;break}if(P!==null){P.return=W,V=P;break}V=W}}}var B=h.alternate;if(B!==null){var H=B.child;if(H!==null){B.child=null;do{var Ge=H.sibling;H.sibling=null,H=Ge}while(H!==null)}}V=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,V=m;else e:for(;V!==null;){if(h=V,h.flags&2048)switch(h.tag){case 0:case 11:case 15:us(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,V=I;break e}V=h.return}}var C=t.current;for(V=C;V!==null;){m=V;var x=m.child;if(m.subtreeFlags&2064&&x!==null)x.return=m,V=x;else e:for(m=C;V!==null;){if(y=V,y.flags&2048)try{switch(y.tag){case 0:case 11:case 15:Fo(9,y)}}catch($){We(y,y.return,$)}if(y===m){V=null;break e}var D=y.sibling;if(D!==null){D.return=y.return,V=D;break e}V=y.return}}if(ge=c,Mn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Ys,t)}catch{}a=!0}return a}finally{ke=o,Mt.transition=r}}return!1}function vp(t,r,o){r=ti(o,r),r=Lf(t,r,1),t=Fn(t,r,1),r=pt(),t!==null&&(Mi(t,1,r),Et(t,r))}function We(t,r,o){if(t.tag===3)vp(t,t,o);else for(;r!==null;){if(r.tag===3){vp(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Un===null||!Un.has(a))){t=ti(o,t),t=Mf(r,t,1),r=Fn(r,t,1),t=pt(),r!==null&&(Mi(r,1,t),Et(r,t));break}}r=r.return}}function q_(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=pt(),t.pingedLanes|=t.suspendedLanes&o,Je===t&&(ot&o)===o&&(Ye===4||Ye===3&&(ot&130023424)===ot&&500>$e()-Pu?gr(t,0):bu|=o),Et(t,r)}function _p(t,r){r===0&&(t.mode&1?(r=Js,Js<<=1,!(Js&130023424)&&(Js=4194304)):r=1);var o=pt();t=mn(t,r),t!==null&&(Mi(t,r,o),Et(t,o))}function K_(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),_p(t,o)}function Q_(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),_p(t,o)}var yp;yp=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||vt.current)yt=!0;else{if(!(t.lanes&o)&&!(r.flags&128))return yt=!1,M_(t,r,o);yt=!!(t.flags&131072)}else yt=!1,je&&r.flags&1048576&&Xh(r,Eo,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Mo(t,r),t=r.pendingProps;var c=qr(r,ut.current);Zr(r,o),c=lu(null,r,a,t,c,o);var h=au();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,_t(a)?(h=!0,_o(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,eu(r),c.updater=Do,r.stateNode=c,c._reactInternals=r,pu(r,a,t,o),r=_u(null,r,a,!0,h,o)):(r.tag=0,je&&h&&Ha(r),ft(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(Mo(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=X_(a),t=Ht(a,t),c){case 0:r=vu(null,r,a,t,o);break e;case 1:r=$f(null,r,a,t,o);break e;case 11:r=Uf(null,r,a,t,o);break e;case 14:r=Wf(null,r,a,Ht(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Ht(a,c),vu(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Ht(a,c),$f(t,r,a,c,o);case 3:e:{if(Gf(r),t===null)throw Error(n(387));a=r.pendingProps,h=r.memoizedState,c=h.element,lf(t,r),To(r,a,null,o);var m=r.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=ti(Error(n(423)),r),r=qf(t,r,a,o,c);break e}else if(a!==c){c=ti(Error(n(424)),r),r=qf(t,r,a,o,c);break e}else for(Nt=On(r.stateNode.containerInfo.firstChild),Tt=r,je=!0,Bt=null,o=sf(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Yr(),a===c){r=vn(t,r,o);break e}ft(t,r,a,o)}r=r.child}return r;case 5:return cf(r),t===null&&qa(r),a=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,Fa(a,c)?m=null:h!==null&&Fa(a,h)&&(r.flags|=32),Hf(t,r),ft(t,r,m,o),r.child;case 6:return t===null&&qa(r),null;case 13:return Kf(t,r,o);case 4:return tu(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=Xr(r,null,a,o):ft(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Ht(a,c),Uf(t,r,a,c,o);case 7:return ft(t,r,r.pendingProps,o),r.child;case 8:return ft(t,r,r.pendingProps.children,o),r.child;case 12:return ft(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,h=r.memoizedProps,m=c.value,Pe(ko,a._currentValue),a._currentValue=m,h!==null)if(Vt(h.value,m)){if(h.children===c.children&&!vt.current){r=vn(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var y=h.dependencies;if(y!==null){m=h.child;for(var E=y.firstContext;E!==null;){if(E.context===a){if(h.tag===1){E=gn(-1,o&-o),E.tag=2;var T=h.updateQueue;if(T!==null){T=T.shared;var A=T.pending;A===null?E.next=E:(E.next=A.next,A.next=E),T.pending=E}}h.lanes|=o,E=h.alternate,E!==null&&(E.lanes|=o),Ja(h.return,o,r),y.lanes|=o;break}E=E.next}}else if(h.tag===10)m=h.type===r.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,y=m.alternate,y!==null&&(y.lanes|=o),Ja(m,o,r),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===r){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}ft(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,Zr(r,o),c=Dt(c),a=a(c),r.flags|=1,ft(t,r,a,o),r.child;case 14:return a=r.type,c=Ht(a,r.pendingProps),c=Ht(a.type,c),Wf(t,r,a,c,o);case 15:return Vf(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Ht(a,c),Mo(t,r),r.tag=1,_t(a)?(t=!0,_o(r)):t=!1,Zr(r,o),Of(r,a,c),pu(r,a,c,o),_u(null,r,a,!0,t,o);case 19:return Yf(t,r,o);case 22:return Bf(t,r,o)}throw Error(n(156,r.tag))};function wp(t,r){return Jd(t,r)}function Y_(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,r,o,a){return new Y_(t,r,o,a)}function Fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function X_(t){if(typeof t=="function")return Fu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===F)return 11;if(t===Ne)return 14}return 2}function Hn(t,r){var o=t.alternate;return o===null?(o=jt(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function qo(t,r,o,a,c,h){var m=2;if(a=t,typeof t=="function")Fu(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case Le:return _r(o.children,c,h,r);case ae:m=8,c|=8;break;case Me:return t=jt(12,o,r,c|2),t.elementType=Me,t.lanes=h,t;case re:return t=jt(13,o,r,c),t.elementType=re,t.lanes=h,t;case K:return t=jt(19,o,r,c),t.elementType=K,t.lanes=h,t;case ye:return Ko(o,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qe:m=10;break e;case q:m=9;break e;case F:m=11;break e;case Ne:m=14;break e;case be:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=jt(m,o,r,c),r.elementType=t,r.type=a,r.lanes=h,r}function _r(t,r,o,a){return t=jt(7,t,a,r),t.lanes=o,t}function Ko(t,r,o,a){return t=jt(22,t,a,r),t.elementType=ye,t.lanes=o,t.stateNode={isHidden:!1},t}function zu(t,r,o){return t=jt(6,t,null,r),t.lanes=o,t}function Uu(t,r,o){return r=jt(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function J_(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fa(0),this.expirationTimes=fa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fa(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Wu(t,r,o,a,c,h,m,y,E){return t=new J_(t,r,o,y,E),r===1?(r=1,h===!0&&(r|=8)):r=0,h=jt(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},eu(h),t}function Z_(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function Ep(t){if(!t)return Ln;t=t._reactInternals;e:{if(or(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(_t(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(_t(o))return Kh(t,o,r)}return r}function Sp(t,r,o,a,c,h,m,y,E){return t=Wu(o,a,!0,t,c,h,m,y,E),t.context=Ep(null),o=t.current,a=pt(),c=Vn(o),h=gn(a,c),h.callback=r??null,Fn(o,h,c),t.current.lanes=c,Mi(t,c,a),Et(t,a),t}function Qo(t,r,o,a){var c=r.current,h=pt(),m=Vn(c);return o=Ep(o),r.context===null?r.context=o:r.pendingContext=o,r=gn(h,m),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=Fn(c,r,m),t!==null&&(qt(t,c,m,h),xo(t,c,m)),m}function Yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function Vu(t,r){Cp(t,r),(t=t.alternate)&&Cp(t,r)}var kp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bu(t){this._internalRoot=t}Xo.prototype.render=Bu.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Qo(t,r,null,null)},Xo.prototype.unmount=Bu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;mr(function(){Qo(null,t,null,null)}),r[dn]=null}};function Xo(t){this._internalRoot=t}Xo.prototype.unstable_scheduleHydration=function(t){if(t){var r=oh();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Pn.length&&r!==0&&r<Pn[o].priority;o++);Pn.splice(o,0,t),o===0&&uh(t)}};function Hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function ey(t,r,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var T=Yo(m);h.call(T)}}var m=Sp(r,a,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=m,t[dn]=m.current,Yi(t.nodeType===8?t.parentNode:t),mr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var y=a;a=function(){var T=Yo(E);y.call(T)}}var E=Wu(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=E,t[dn]=E.current,Yi(t.nodeType===8?t.parentNode:t),mr(function(){Qo(r,E,o,a)}),E}function Zo(t,r,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var y=c;c=function(){var E=Yo(m);y.call(E)}}Qo(r,m,t,c)}else m=ey(o,r,t,c,a);return Yo(m)}ih=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Li(r.pendingLanes);o!==0&&(pa(r,o|1),Et(r,$e()),!(ge&6)&&(ii=$e()+500,Mn()))}break;case 13:mr(function(){var a=mn(t,1);if(a!==null){var c=pt();qt(a,t,1,c)}}),Vu(t,1)}},ma=function(t){if(t.tag===13){var r=mn(t,134217728);if(r!==null){var o=pt();qt(r,t,134217728,o)}Vu(t,134217728)}},sh=function(t){if(t.tag===13){var r=Vn(t),o=mn(t,r);if(o!==null){var a=pt();qt(o,t,r,a)}Vu(t,r)}},oh=function(){return ke},lh=function(t,r){var o=ke;try{return ke=t,r()}finally{ke=o}},la=function(t,r,o){switch(r){case"input":if(Dr(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=go(a);if(!c)throw Error(n(90));Rt(a),Dr(a,c)}}}break;case"textarea":Md(t,o);break;case"select":r=o.value,r!=null&&Lr(t,!!o.multiple,r,!1)}},$d=Lu,Gd=mr;var ty={usingClientEntryPoint:!1,Events:[Zi,$r,go,Bd,Hd,Lu]},fs={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ny={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yd(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Ys=el.inject(ny),en=el}catch{}}return St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ty,St.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(r))throw Error(n(200));return Z_(t,r,null,o)},St.createRoot=function(t,r){if(!Hu(t))throw Error(n(299));var o=!1,a="",c=kp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=Wu(t,1,!1,null,null,o,!1,a,c),t[dn]=r.current,Yi(t.nodeType===8?t.parentNode:t),new Bu(r)},St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Yd(r),t=t===null?null:t.stateNode,t},St.flushSync=function(t){return mr(t)},St.hydrate=function(t,r,o){if(!Jo(r))throw Error(n(200));return Zo(null,t,r,!0,o)},St.hydrateRoot=function(t,r,o){if(!Hu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=kp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),r=Sp(r,null,t,1,o??null,c,!1,h,m),t[dn]=r.current,Yi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new Xo(r)},St.render=function(t,r,o){if(!Jo(r))throw Error(n(200));return Zo(null,t,r,!1,o)},St.unmountComponentAtNode=function(t){if(!Jo(t))throw Error(n(40));return t._reactRootContainer?(mr(function(){Zo(null,null,t,!1,function(){t._reactRootContainer=null,t[dn]=null})}),!0):!1},St.unstable_batchedUpdates=Lu,St.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!Jo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Zo(t,r,o,!1,a)},St.version="18.3.1-next-f1338f8080-20240426",St}var Op;function cy(){if(Op)return qu.exports;Op=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),qu.exports=uy(),qu.exports}var Dp;function dy(){if(Dp)return tl;Dp=1;var i=cy();return tl.createRoot=i.createRoot,tl.hydrateRoot=i.hydrateRoot,tl}var hy=dy();const fy="modulepreload",py=function(i){return"/portfolio_web/"+i},Lp={},zt=function(e,n,s){let l=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));l=Promise.allSettled(n.map(p=>{if(p=py(p),p in Lp)return;Lp[p]=!0;const g=p.endsWith(".css"),w=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${w}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":fy,g||(v.as="script"),v.crossOrigin="",v.href=p,f&&v.setAttribute("nonce",f),document.head.appendChild(v),g)return new Promise((_,N)=>{v.addEventListener("load",_),v.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(d){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=d,window.dispatchEvent(f),!f.defaultPrevented)throw d}return l.then(d=>{for(const f of d||[])f.status==="rejected"&&u(f.reason);return e().catch(u)})};var ol={exports:{}},my=ol.exports,Mp;function gy(){return Mp||(Mp=1,function(i,e){(function(n,s){i.exports=s()})(my,function(){return function(n){function s(u){if(l[u])return l[u].exports;var d=l[u]={exports:{},id:u,loaded:!1};return n[u].call(d.exports,d,d.exports,s),d.loaded=!0,d.exports}var l={};return s.m=n,s.c=l,s.p="dist/",s(0)}([function(n,s,l){function u(K){return K&&K.__esModule?K:{default:K}}var d=Object.assign||function(K){for(var Ne=1;Ne<arguments.length;Ne++){var be=arguments[Ne];for(var ye in be)Object.prototype.hasOwnProperty.call(be,ye)&&(K[ye]=be[ye])}return K},f=l(1),p=(u(f),l(6)),g=u(p),w=l(7),v=u(w),_=l(8),N=u(_),R=l(9),j=u(R),z=l(10),pe=u(z),Ee=l(11),Se=u(Ee),Ce=l(14),He=u(Ce),me=[],Le=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},Me=function(){var K=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(K&&(Le=!0),Le)return me=(0,Se.default)(me,ae),(0,pe.default)(me,ae.once),me},qe=function(){me=(0,He.default)(),Me()},q=function(){me.forEach(function(K,Ne){K.node.removeAttribute("data-aos"),K.node.removeAttribute("data-aos-easing"),K.node.removeAttribute("data-aos-duration"),K.node.removeAttribute("data-aos-delay")})},F=function(K){return K===!0||K==="mobile"&&j.default.mobile()||K==="phone"&&j.default.phone()||K==="tablet"&&j.default.tablet()||typeof K=="function"&&K()===!0},re=function(K){ae=d(ae,K),me=(0,He.default)();var Ne=document.all&&!window.atob;return F(ae.disable)||Ne?q():(ae.disableMutationObserver||N.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),ae.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),ae.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?Me(!0):ae.startEvent==="load"?window.addEventListener(ae.startEvent,function(){Me(!0)}):document.addEventListener(ae.startEvent,function(){Me(!0)}),window.addEventListener("resize",(0,v.default)(Me,ae.debounceDelay,!0)),window.addEventListener("orientationchange",(0,v.default)(Me,ae.debounceDelay,!0)),window.addEventListener("scroll",(0,g.default)(function(){(0,pe.default)(me,ae.once)},ae.throttleDelay)),ae.disableMutationObserver||N.default.ready("[data-aos]",qe),me)};n.exports={init:re,refresh:Me,refreshHard:qe}},function(n,s){},,,,,function(n,s){(function(l){function u(F,re,K){function Ne(ve){var it=J,Ut=se;return J=se=void 0,Ue=ve,ie=F.apply(Ut,it)}function be(ve){return Ue=ve,Z=setTimeout(G,re),It?Ne(ve):ie}function ye(ve){var it=ve-ue,Ut=ve-Ue,Dr=re-it;return Rt?qe(Dr,oe-Ut):Dr}function M(ve){var it=ve-ue,Ut=ve-Ue;return ue===void 0||it>=re||it<0||Rt&&Ut>=oe}function G(){var ve=q();return M(ve)?U(ve):void(Z=setTimeout(G,ye(ve)))}function U(ve){return Z=void 0,Ie&&J?Ne(ve):(J=se=void 0,ie)}function k(){Z!==void 0&&clearTimeout(Z),Ue=0,J=ue=se=Z=void 0}function b(){return Z===void 0?ie:U(q())}function X(){var ve=q(),it=M(ve);if(J=arguments,se=this,ue=ve,it){if(Z===void 0)return be(ue);if(Rt)return Z=setTimeout(G,re),Ne(ue)}return Z===void 0&&(Z=setTimeout(G,re)),ie}var J,se,oe,ie,Z,ue,Ue=0,It=!1,Rt=!1,Ie=!0;if(typeof F!="function")throw new TypeError(_);return re=w(re)||0,f(K)&&(It=!!K.leading,Rt="maxWait"in K,oe=Rt?Me(w(K.maxWait)||0,re):oe,Ie="trailing"in K?!!K.trailing:Ie),X.cancel=k,X.flush=b,X}function d(F,re,K){var Ne=!0,be=!0;if(typeof F!="function")throw new TypeError(_);return f(K)&&(Ne="leading"in K?!!K.leading:Ne,be="trailing"in K?!!K.trailing:be),u(F,re,{leading:Ne,maxWait:re,trailing:be})}function f(F){var re=typeof F>"u"?"undefined":v(F);return!!F&&(re=="object"||re=="function")}function p(F){return!!F&&(typeof F>"u"?"undefined":v(F))=="object"}function g(F){return(typeof F>"u"?"undefined":v(F))=="symbol"||p(F)&&ae.call(F)==R}function w(F){if(typeof F=="number")return F;if(g(F))return N;if(f(F)){var re=typeof F.valueOf=="function"?F.valueOf():F;F=f(re)?re+"":re}if(typeof F!="string")return F===0?F:+F;F=F.replace(j,"");var K=pe.test(F);return K||Ee.test(F)?Se(F.slice(2),K?2:8):z.test(F)?N:+F}var v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},_="Expected a function",N=NaN,R="[object Symbol]",j=/^\s+|\s+$/g,z=/^[-+]0x[0-9a-f]+$/i,pe=/^0b[01]+$/i,Ee=/^0o[0-7]+$/i,Se=parseInt,Ce=(typeof l>"u"?"undefined":v(l))=="object"&&l&&l.Object===Object&&l,He=(typeof self>"u"?"undefined":v(self))=="object"&&self&&self.Object===Object&&self,me=Ce||He||Function("return this")(),Le=Object.prototype,ae=Le.toString,Me=Math.max,qe=Math.min,q=function(){return me.Date.now()};n.exports=d}).call(s,function(){return this}())},function(n,s){(function(l){function u(q,F,re){function K(Ie){var ve=X,it=J;return X=J=void 0,ue=Ie,oe=q.apply(it,ve)}function Ne(Ie){return ue=Ie,ie=setTimeout(M,F),Ue?K(Ie):oe}function be(Ie){var ve=Ie-Z,it=Ie-ue,Ut=F-ve;return It?Me(Ut,se-it):Ut}function ye(Ie){var ve=Ie-Z,it=Ie-ue;return Z===void 0||ve>=F||ve<0||It&&it>=se}function M(){var Ie=qe();return ye(Ie)?G(Ie):void(ie=setTimeout(M,be(Ie)))}function G(Ie){return ie=void 0,Rt&&X?K(Ie):(X=J=void 0,oe)}function U(){ie!==void 0&&clearTimeout(ie),ue=0,X=Z=J=ie=void 0}function k(){return ie===void 0?oe:G(qe())}function b(){var Ie=qe(),ve=ye(Ie);if(X=arguments,J=this,Z=Ie,ve){if(ie===void 0)return Ne(Z);if(It)return ie=setTimeout(M,F),K(Z)}return ie===void 0&&(ie=setTimeout(M,F)),oe}var X,J,se,oe,ie,Z,ue=0,Ue=!1,It=!1,Rt=!0;if(typeof q!="function")throw new TypeError(v);return F=g(F)||0,d(re)&&(Ue=!!re.leading,It="maxWait"in re,se=It?ae(g(re.maxWait)||0,F):se,Rt="trailing"in re?!!re.trailing:Rt),b.cancel=U,b.flush=k,b}function d(q){var F=typeof q>"u"?"undefined":w(q);return!!q&&(F=="object"||F=="function")}function f(q){return!!q&&(typeof q>"u"?"undefined":w(q))=="object"}function p(q){return(typeof q>"u"?"undefined":w(q))=="symbol"||f(q)&&Le.call(q)==N}function g(q){if(typeof q=="number")return q;if(p(q))return _;if(d(q)){var F=typeof q.valueOf=="function"?q.valueOf():q;q=d(F)?F+"":F}if(typeof q!="string")return q===0?q:+q;q=q.replace(R,"");var re=z.test(q);return re||pe.test(q)?Ee(q.slice(2),re?2:8):j.test(q)?_:+q}var w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(q){return typeof q}:function(q){return q&&typeof Symbol=="function"&&q.constructor===Symbol&&q!==Symbol.prototype?"symbol":typeof q},v="Expected a function",_=NaN,N="[object Symbol]",R=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,pe=/^0o[0-7]+$/i,Ee=parseInt,Se=(typeof l>"u"?"undefined":w(l))=="object"&&l&&l.Object===Object&&l,Ce=(typeof self>"u"?"undefined":w(self))=="object"&&self&&self.Object===Object&&self,He=Se||Ce||Function("return this")(),me=Object.prototype,Le=me.toString,ae=Math.max,Me=Math.min,qe=function(){return He.Date.now()};n.exports=u}).call(s,function(){return this}())},function(n,s){function l(w){var v=void 0,_=void 0;for(v=0;v<w.length;v+=1)if(_=w[v],_.dataset&&_.dataset.aos||_.children&&l(_.children))return!0;return!1}function u(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function d(){return!!u()}function f(w,v){var _=window.document,N=u(),R=new N(p);g=v,R.observe(_.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function p(w){w&&w.forEach(function(v){var _=Array.prototype.slice.call(v.addedNodes),N=Array.prototype.slice.call(v.removedNodes),R=_.concat(N);if(l(R))return g()})}Object.defineProperty(s,"__esModule",{value:!0});var g=function(){};s.default={isSupported:d,ready:f}},function(n,s){function l(_,N){if(!(_ instanceof N))throw new TypeError("Cannot call a class as a function")}function u(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var d=function(){function _(N,R){for(var j=0;j<R.length;j++){var z=R[j];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(N,z.key,z)}}return function(N,R,j){return R&&_(N.prototype,R),j&&_(N,j),N}}(),f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,g=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,v=function(){function _(){l(this,_)}return d(_,[{key:"phone",value:function(){var N=u();return!(!f.test(N)&&!p.test(N.substr(0,4)))}},{key:"mobile",value:function(){var N=u();return!(!g.test(N)&&!w.test(N.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),_}();s.default=new v},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(d,f,p){var g=d.node.getAttribute("data-aos-once");f>d.position?d.node.classList.add("aos-animate"):typeof g<"u"&&(g==="false"||!p&&g!=="true")&&d.node.classList.remove("aos-animate")},u=function(d,f){var p=window.pageYOffset,g=window.innerHeight;d.forEach(function(w,v){l(w,g+p,f)})};s.default=u},function(n,s,l){function u(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(s,"__esModule",{value:!0});var d=l(12),f=u(d),p=function(g,w){return g.forEach(function(v,_){v.node.classList.add("aos-init"),v.position=(0,f.default)(v.node,w.offset)}),g};s.default=p},function(n,s,l){function u(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(s,"__esModule",{value:!0});var d=l(13),f=u(d),p=function(g,w){var v=0,_=0,N=window.innerHeight,R={offset:g.getAttribute("data-aos-offset"),anchor:g.getAttribute("data-aos-anchor"),anchorPlacement:g.getAttribute("data-aos-anchor-placement")};switch(R.offset&&!isNaN(R.offset)&&(_=parseInt(R.offset)),R.anchor&&document.querySelectorAll(R.anchor)&&(g=document.querySelectorAll(R.anchor)[0]),v=(0,f.default)(g).top,R.anchorPlacement){case"top-bottom":break;case"center-bottom":v+=g.offsetHeight/2;break;case"bottom-bottom":v+=g.offsetHeight;break;case"top-center":v+=N/2;break;case"bottom-center":v+=N/2+g.offsetHeight;break;case"center-center":v+=N/2+g.offsetHeight/2;break;case"top-top":v+=N;break;case"bottom-top":v+=g.offsetHeight+N;break;case"center-top":v+=g.offsetHeight/2+N}return R.anchorPlacement||R.offset||isNaN(w)||(_=w),v+_};s.default=p},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(u){for(var d=0,f=0;u&&!isNaN(u.offsetLeft)&&!isNaN(u.offsetTop);)d+=u.offsetLeft-(u.tagName!="BODY"?u.scrollLeft:0),f+=u.offsetTop-(u.tagName!="BODY"?u.scrollTop:0),u=u.offsetParent;return{top:f,left:d}};s.default=l},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(u){return u=u||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(u,function(d){return{node:d}})};s.default=l}])})}(ol)),ol.exports}var vy=gy();const _y=Zm(vy);var eg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},jp=Cr.createContext&&Cr.createContext(eg),yy=["attr","size","title"];function wy(i,e){if(i==null)return{};var n=Ey(i,e),s,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(l=0;l<u.length;l++)s=u[l],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(i,s)&&(n[s]=i[s])}return n}function Ey(i,e){if(i==null)return{};var n={};for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){if(e.indexOf(s)>=0)continue;n[s]=i[s]}return n}function hl(){return hl=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=n[s])}return i},hl.apply(this,arguments)}function Fp(i,e){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable})),n.push.apply(n,s)}return n}function fl(i){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Fp(Object(n),!0).forEach(function(s){Sy(i,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):Fp(Object(n)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(n,s))})}return i}function Sy(i,e,n){return e=Cy(e),e in i?Object.defineProperty(i,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[e]=n,i}function Cy(i){var e=ky(i,"string");return typeof e=="symbol"?e:e+""}function ky(i,e){if(typeof i!="object"||!i)return i;var n=i[Symbol.toPrimitive];if(n!==void 0){var s=n.call(i,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function tg(i){return i&&i.map((e,n)=>Cr.createElement(e.tag,fl({key:n},e.attr),tg(e.child)))}function rr(i){return e=>Cr.createElement(Iy,hl({attr:fl({},i.attr)},e),tg(i.child))}function Iy(i){var e=n=>{var{attr:s,size:l,title:u}=i,d=wy(i,yy),f=l||n.size||"1em",p;return n.className&&(p=n.className),i.className&&(p=(p?p+" ":"")+i.className),Cr.createElement("svg",hl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,d,{className:p,style:fl(fl({color:i.color||n.color},n.style),i.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&Cr.createElement("title",null,u),i.children)};return jp!==void 0?Cr.createElement(jp.Consumer,null,n=>e(n)):e(eg)}function xy(i){return rr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"},child:[]}]})(i)}function Ty(i){return rr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(i)}function Ny(i){return rr({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(i)}function by(i){return rr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(i)}function Py(i){return rr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(i)}function zp(i){return rr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(i)}function Ry(i){return rr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(i)}function Ay(i){return rr({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"},child:[]}]})(i)}/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ng=(...i)=>i.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=le.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...f},p)=>le.createElement("svg",{ref:p,...Dy,width:e,height:e,stroke:i,strokeWidth:s?Number(n)*24/Number(e):n,className:ng("lucide",l),...f},[...d.map(([g,w])=>le.createElement(g,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=(i,e)=>{const n=le.forwardRef(({className:s,...l},u)=>le.createElement(Ly,{ref:u,iconNode:e,className:ng(`lucide-${Oy(i)}`,s),...l}));return n.displayName=`${i}`,n};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],nl=jl("ArrowRight",My);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Fy=jl("MessageCircle",jy);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Uy=jl("Sparkles",zy);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Vy=jl("X",Wy),By=[{icon:S.jsx(Py,{}),delay:0,link:"https://www.linkedin.com/in/ishan-nilaksha-686461308/"},{icon:S.jsx(Ty,{}),delay:.1,link:"https://www.facebook.com"},{icon:S.jsx(by,{}),delay:.2,link:"https://www.instagram.com/ishan_hatharasinghe/"},{icon:S.jsx(Ry,{}),delay:.3,link:"https://wa.me/0703052181"},{icon:S.jsx(Ny,{}),delay:.4,link:"https://github.com/ishanHatharasinghe"},{icon:S.jsx(xy,{}),delay:.5,link:"https://www.behance.net/ishannilaksha"},{icon:S.jsx(Ay,{}),delay:.6,link:"https://www.fiverr.com/sellers/vector_ix/"}],Hy=()=>{const[i,e]=le.useState(!1),[n,s]=le.useState(null),[l,u]=le.useState({x:0,y:0}),[d,f]=le.useState(!1),p=le.useRef(null),g=v=>{const _=v.currentTarget.getBoundingClientRect();u({x:v.clientX-_.left,y:v.clientY-_.top})};le.useEffect(()=>{function v(_){p.current&&!p.current.contains(_.target)&&e(!1)}return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[p]);const w=()=>{window.innerWidth<768&&setTimeout(()=>e(!1),300)};return S.jsxs(S.Fragment,{children:[i&&S.jsx("div",{className:"fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",onClick:()=>e(!1)}),S.jsx("div",{ref:p,className:"fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-50",children:S.jsxs("div",{className:"relative",children:[S.jsxs("button",{onClick:()=>e(!i),onMouseMove:g,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),className:`
              relative overflow-hidden
              w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
              rounded-2xl md:rounded-3xl
              bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600
              shadow-xl shadow-orange-500/30
              border border-orange-300/30
              text-white
              transition-all duration-500 ease-out
              hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50
              active:scale-95
              group
              touch-manipulation
              flex items-center justify-center
            `,children:[S.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-all duration-500"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"}),d&&S.jsx("div",{className:"absolute pointer-events-none transition-all duration-300",style:{left:l.x,top:l.y,transform:"translate(-50%, -50%)"},children:S.jsx(Uy,{className:"w-2 h-2 text-yellow-200 animate-spin"})}),S.jsx("div",{className:`
              relative z-10 flex items-center justify-center
              transform transition-all duration-700 ease-out
              ${i?"rotate-180 scale-100":"rotate-0 scale-100"}
            `,children:i?S.jsx(Vy,{className:"w-4 h-4 sm:w-5 sm:h-5"}):S.jsx(Fy,{className:"w-4 h-4 sm:w-5 sm:h-5"})}),S.jsx("div",{className:`
              absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-orange-400
              ${i?"animate-ping":""}
              transition-opacity duration-300
            `})]}),S.jsx("div",{className:`
            absolute top-14 sm:top-16 md:top-20 left-0
            transform transition-all duration-700 ease-out
            ${i?"opacity-100 translate-y-0 scale-100 translate-x-0":"opacity-0 -translate-y-8 scale-90 -translate-x-4 pointer-events-none"}
          `,children:S.jsxs("div",{className:`
              w-14 sm:w-16 md:w-18 p-2 space-y-2
              bg-gradient-to-b from-gray-900/95 via-black/95 to-gray-900/95
              backdrop-blur-2xl
              border border-orange-500/30
              rounded-2xl md:rounded-3xl
              shadow-2xl shadow-black/60
              relative
              overflow-hidden
            `,children:[S.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/5 animate-pulse"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-orange-400/5 to-transparent opacity-50"}),S.jsx("div",{className:"absolute top-2 right-2 w-1 h-1 bg-orange-400 rounded-full animate-bounce opacity-60",style:{animationDelay:"0s"}}),S.jsx("div",{className:"absolute bottom-4 left-3 w-0.5 h-0.5 bg-orange-300 rounded-full animate-bounce opacity-40",style:{animationDelay:"1s"}}),S.jsx("div",{className:"absolute top-1/2 right-1 w-0.5 h-0.5 bg-orange-500 rounded-full animate-bounce opacity-50",style:{animationDelay:"2s"}}),By.map((v,_)=>S.jsxs("a",{href:v.link,target:"_blank",rel:"noopener noreferrer",onClick:w,onMouseEnter:()=>s(_),onMouseLeave:()=>s(null),className:`
                  relative block
                  w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12
                  rounded-xl
                  flex items-center justify-center
                  text-white text-sm sm:text-base md:text-lg
                  transition-all duration-500 ease-out
                  transform hover:scale-125 active:scale-95
                  ${n===_?"bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 shadow-lg shadow-orange-500/60 -translate-y-1":"bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 hover:from-gray-700/80 hover:to-gray-800/80"}
                  border border-orange-500/30
                  group/icon
                  touch-manipulation
                `,style:{animationDelay:`${v.delay}s`,animation:i?"slideInLeft 0.6s ease-out forwards":"none"},children:[S.jsx("div",{className:`
                  absolute inset-0 rounded-xl
                  bg-gradient-to-br from-orange-400/30 to-orange-600/30
                  opacity-0 group-hover/icon:opacity-100
                  transition-all duration-500
                  blur-sm group-hover/icon:blur-none
                `}),S.jsx("div",{className:`
                  absolute inset-0 rounded-xl
                  bg-gradient-to-tr from-white/10 to-transparent
                  opacity-0 group-hover/icon:opacity-100
                  transition-all duration-700
                `}),S.jsx("div",{className:`
                  relative z-10 flex items-center justify-center
                  transform group-hover/icon:rotate-12 group-hover/icon:scale-110
                  transition-all duration-500 ease-out
                  ${n===_?"animate-pulse":""}
                `,children:v.icon}),n===_&&S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"absolute inset-0 rounded-xl bg-orange-500/20 animate-ping"}),S.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/20 to-orange-600/20 animate-pulse"})]}),S.jsx("div",{className:`
                  absolute inset-0 rounded-xl
                  border-2 border-orange-400/50
                  opacity-0 group-hover/icon:opacity-100
                  transition-all duration-300
                  animate-pulse
                `})]},_))]})})]})}),S.jsx("style",{jsx:!0,children:`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `})]})},$y=()=>{};var Up={};/**
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
 */const rg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const L=function(i,e){if(!i)throw Ei(e)},Ei=function(i){return new Error("Firebase Database ("+rg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
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
 */const ig=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Gy=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],f=i[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Lc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,f=d?i[l+1]:0,p=l+2<i.length,g=p?i[l+2]:0,w=u>>2,v=(u&3)<<4|f>>4;let _=(f&15)<<2|g>>6,N=g&63;p||(N=64,d||(_=64)),s.push(n[w],n[v],n[_],n[N])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ig(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Gy(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],f=l<i.length?n[i.charAt(l)]:0;++l;const g=l<i.length?n[i.charAt(l)]:64;++l;const v=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||f==null||g==null||v==null)throw new qy;const _=u<<2|f>>4;if(s.push(_),g!==64){const N=f<<4&240|g>>2;if(s.push(N),v!==64){const R=g<<6&192|v;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class qy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sg=function(i){const e=ig(i);return Lc.encodeByteArray(e,!0)},pl=function(i){return sg(i).replace(/\./g,"")},ml=function(i){try{return Lc.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ky(i){return og(void 0,i)}function og(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Qy(n)||(i[n]=og(i[n],e[n]));return i}function Qy(i){return i!=="__proto__"}/**
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
 */function Yy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xy=()=>Yy().__FIREBASE_DEFAULTS__,Jy=()=>{if(typeof process>"u"||typeof Up>"u")return;const i=Up.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Zy=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&ml(i[1]);return e&&JSON.parse(e)},Mc=()=>{try{return $y()||Xy()||Jy()||Zy()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},lg=i=>{var e,n;return(n=(e=Mc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},e1=i=>{const e=lg(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ag=()=>{var i;return(i=Mc())===null||i===void 0?void 0:i.config},ug=i=>{var e;return(e=Mc())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class js{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Si(i){return i.endsWith(".cloudworkstations.dev")}async function cg(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function t1(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[pl(JSON.stringify(n)),pl(JSON.stringify(d)),""].join(".")}const ws={};function n1(){const i={prod:[],emulator:[]};for(const e of Object.keys(ws))ws[e]?i.emulator.push(e):i.prod.push(e);return i}function r1(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let Wp=!1;function dg(i,e){if(typeof window>"u"||typeof document>"u"||!Si(window.location.host)||ws[i]===e||ws[i]||Wp)return;ws[i]=e;function n(_){return`__firebase__banner__${_}`}const s="__firebase__banner",u=n1().prod.length>0;function d(){const _=document.getElementById(s);_&&_.remove()}function f(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function p(_,N){_.setAttribute("width","24"),_.setAttribute("id",N),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function g(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Wp=!0,d()},_}function w(_,N){_.setAttribute("id",N),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function v(){const _=r1(s),N=n("text"),R=document.getElementById(N)||document.createElement("span"),j=n("learnmore"),z=document.getElementById(j)||document.createElement("a"),pe=n("preprendIcon"),Ee=document.getElementById(pe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const Se=_.element;f(Se),w(z,j);const Ce=g();p(Ee,pe),Se.append(Ee,R,z,Ce),document.body.appendChild(Se)}u?(R.innerText="Preview backend disconnected.",Ee.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Ee.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function i1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function s1(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function hg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o1(){const i=gt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function fg(){return rg.NODE_ADMIN===!0}function l1(){try{return typeof indexedDB=="object"}catch{return!1}}function a1(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
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
 */const u1="FirebaseError";class ir extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=u1,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?c1(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new ir(l,f,s)}}function c1(i,e){return i.replace(d1,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const d1=/\{\$([^}]+)}/g;/**
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
 */const pg=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=Ts(ml(u[0])||""),n=Ts(ml(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},h1=function(i){const e=pg(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},f1=function(i){const e=pg(i).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function cn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function fi(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function cc(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function gl(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function Ir(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if(Vp(u)&&Vp(d)){if(!Ir(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Vp(i){return i!==null&&typeof i=="object"}/**
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
 */function Ci(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class p1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const _=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(_<<1|_>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,w;for(let v=0;v<80;v++){v<40?v<20?(g=f^u&(d^f),w=1518500249):(g=u^d^f,w=1859775393):v<60?(g=u&d|f&(u|d),w=2400959708):(g=u^d^f,w=3395469782);const _=(l<<5|l>>>27)+g+p+w+s[v]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=_}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function m1(i,e){const n=new g1(i,e);return n.subscribe.bind(n)}class g1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");v1(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Yu),l.error===void 0&&(l.error=Yu),l.complete===void 0&&(l.complete=Yu);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function v1(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Yu(){}function Fl(i,e){return`${i} failed: ${e} argument `}/**
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
 */const _1=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,L(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},zl=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Pt(i){return i&&i._delegate?i._delegate:i}class xr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class y1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new js;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(E1(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:w1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function w1(i){return i===yr?void 0:i}function E1(i){return i.instantiationMode==="EAGER"}/**
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
 */class S1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new y1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(xe||(xe={}));const C1={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},k1=xe.INFO,I1={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},x1=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=I1[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=k1,this._logHandler=x1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?C1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const T1=(i,e)=>e.some(n=>i instanceof n);let Bp,Hp;function N1(){return Bp||(Bp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b1(){return Hp||(Hp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mg=new WeakMap,dc=new WeakMap,gg=new WeakMap,Xu=new WeakMap,zc=new WeakMap;function P1(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Xn(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&mg.set(n,i)}).catch(()=>{}),zc.set(e,i),e}function R1(i){if(dc.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});dc.set(i,e)}let hc={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return dc.get(i);if(e==="objectStoreNames")return i.objectStoreNames||gg.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function A1(i){hc=i(hc)}function O1(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Ju(this),e,...n);return gg.set(s,e.sort?e.sort():[e]),Xn(s)}:b1().includes(i)?function(...e){return i.apply(Ju(this),e),Xn(mg.get(this))}:function(...e){return Xn(i.apply(Ju(this),e))}}function D1(i){return typeof i=="function"?O1(i):(i instanceof IDBTransaction&&R1(i),T1(i,N1())?new Proxy(i,hc):i)}function Xn(i){if(i instanceof IDBRequest)return P1(i);if(Xu.has(i))return Xu.get(i);const e=D1(i);return e!==i&&(Xu.set(i,e),zc.set(e,i)),e}const Ju=i=>zc.get(i);function L1(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),f=Xn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Xn(d.result),p.oldVersion,p.newVersion,Xn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const M1=["get","getKey","getAll","getAllKeys","count"],j1=["put","add","delete","clear"],Zu=new Map;function $p(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Zu.get(e))return Zu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=j1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||M1.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return Zu.set(e,u),u}A1(i=>({...i,get:(e,n,s)=>$p(e,n)||i.get(e,n,s),has:(e,n)=>!!$p(e,n)||i.has(e,n)}));/**
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
 */class F1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(z1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function z1(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fc="@firebase/app",Gp="0.13.1";/**
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
 */const kn=new Fc("@firebase/app"),U1="@firebase/app-compat",W1="@firebase/analytics-compat",V1="@firebase/analytics",B1="@firebase/app-check-compat",H1="@firebase/app-check",$1="@firebase/auth",G1="@firebase/auth-compat",q1="@firebase/database",K1="@firebase/data-connect",Q1="@firebase/database-compat",Y1="@firebase/functions",X1="@firebase/functions-compat",J1="@firebase/installations",Z1="@firebase/installations-compat",ew="@firebase/messaging",tw="@firebase/messaging-compat",nw="@firebase/performance",rw="@firebase/performance-compat",iw="@firebase/remote-config",sw="@firebase/remote-config-compat",ow="@firebase/storage",lw="@firebase/storage-compat",aw="@firebase/firestore",uw="@firebase/ai",cw="@firebase/firestore-compat",dw="firebase",hw="11.9.0";/**
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
 */const pc="[DEFAULT]",fw={[fc]:"fire-core",[U1]:"fire-core-compat",[V1]:"fire-analytics",[W1]:"fire-analytics-compat",[H1]:"fire-app-check",[B1]:"fire-app-check-compat",[$1]:"fire-auth",[G1]:"fire-auth-compat",[q1]:"fire-rtdb",[K1]:"fire-data-connect",[Q1]:"fire-rtdb-compat",[Y1]:"fire-fn",[X1]:"fire-fn-compat",[J1]:"fire-iid",[Z1]:"fire-iid-compat",[ew]:"fire-fcm",[tw]:"fire-fcm-compat",[nw]:"fire-perf",[rw]:"fire-perf-compat",[iw]:"fire-rc",[sw]:"fire-rc-compat",[ow]:"fire-gcs",[lw]:"fire-gcs-compat",[aw]:"fire-fst",[cw]:"fire-fst-compat",[uw]:"fire-vertex","fire-js":"fire-js",[dw]:"fire-js-all"};/**
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
 */const vl=new Map,pw=new Map,mc=new Map;function qp(i,e){try{i.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function pi(i){const e=i.name;if(mc.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;mc.set(e,i);for(const n of vl.values())qp(n,i);for(const n of pw.values())qp(n,i);return!0}function Uc(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Kt(i){return i==null?!1:i.settings!==void 0}/**
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
 */const mw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Fs("app","Firebase",mw);/**
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
 */class gw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const ki=hw;function vg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:pc,automaticDataCollectionEnabled:!0},e),l=s.name;if(typeof l!="string"||!l)throw Jn.create("bad-app-name",{appName:String(l)});if(n||(n=ag()),!n)throw Jn.create("no-options");const u=vl.get(l);if(u){if(Ir(n,u.options)&&Ir(s,u.config))return u;throw Jn.create("duplicate-app",{appName:l})}const d=new S1(l);for(const p of mc.values())d.addComponent(p);const f=new gw(n,s,d);return vl.set(l,f),f}function _g(i=pc){const e=vl.get(i);if(!e&&i===pc&&ag())return vg();if(!e)throw Jn.create("no-app",{appName:i});return e}function Zn(i,e,n){var s;let l=(s=fw[i])!==null&&s!==void 0?s:i;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(f.join(" "));return}pi(new xr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const vw="firebase-heartbeat-database",_w=1,Ns="firebase-heartbeat-store";let ec=null;function yg(){return ec||(ec=L1(vw,_w,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ns)}catch(n){console.warn(n)}}}}).catch(i=>{throw Jn.create("idb-open",{originalErrorMessage:i.message})})),ec}async function yw(i){try{const n=(await yg()).transaction(Ns),s=await n.objectStore(Ns).get(wg(i));return await n.done,s}catch(e){if(e instanceof ir)kn.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function Kp(i,e){try{const s=(await yg()).transaction(Ns,"readwrite");await s.objectStore(Ns).put(e,wg(i)),await s.done}catch(n){if(n instanceof ir)kn.warn(n.message);else{const s=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(s.message)}}}function wg(i){return`${i.name}!${i.options.appId}`}/**
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
 */const ww=1024,Ew=30;class Sw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Qp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>Ew){const d=Iw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){kn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qp(),{heartbeatsToSend:s,unsentEntries:l}=Cw(this._heartbeatsCache.heartbeats),u=pl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return kn.warn(n),""}}}function Qp(){return new Date().toISOString().substring(0,10)}function Cw(i,e=ww){const n=[];let s=i.slice();for(const l of i){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),Yp(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Yp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class kw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return l1()?a1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Kp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Kp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Yp(i){return pl(JSON.stringify({version:2,heartbeats:i})).length}function Iw(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function xw(i){pi(new xr("platform-logger",e=>new F1(e),"PRIVATE")),pi(new xr("heartbeat",e=>new Sw(e),"PRIVATE")),Zn(fc,Gp,i),Zn(fc,Gp,"esm2017"),Zn("fire-js","")}xw("");var Tw="firebase",Nw="11.9.1";/**
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
 */Zn(Tw,Nw,"app");function Wc(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(i);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(i,s[l])&&(n[s[l]]=i[s[l]]);return n}function Eg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bw=Eg,Sg=new Fs("auth","Firebase",Eg());/**
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
 */const _l=new Fc("@firebase/auth");function Pw(i,...e){_l.logLevel<=xe.WARN&&_l.warn(`Auth (${ki}): ${i}`,...e)}function ll(i,...e){_l.logLevel<=xe.ERROR&&_l.error(`Auth (${ki}): ${i}`,...e)}/**
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
 */function un(i,...e){throw Bc(i,...e)}function Xt(i,...e){return Bc(i,...e)}function Vc(i,e,n){const s=Object.assign(Object.assign({},bw()),{[e]:n});return new Fs("auth","Firebase",s).create(e,{appName:i.name})}function kr(i){return Vc(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rw(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&un(i,"argument-error"),Vc(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bc(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return Sg.create(i,...e)}function ne(i,e,...n){if(!i)throw Bc(e,...n)}function wn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ll(e),new Error(e)}function In(i,e){i||wn(e)}/**
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
 */function gc(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Aw(){return Xp()==="http:"||Xp()==="https:"}function Xp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function Ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Aw()||s1()||"connection"in navigator)?navigator.onLine:!0}function Dw(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=jc()||hg()}get(){return Ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hc(i,e){In(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Mw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jw=new zs(3e4,6e4);function $c(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ii(i,e,n,s,l={}){return kg(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Ci(Object.assign({key:i.config.apiKey},d)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},u);return i1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Si(i.emulatorConfig.host)&&(g.credentials="include"),Cg.fetch()(await Ig(i,i.config.apiHost,n,f),g)})}async function kg(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},Lw),e);try{const l=new zw(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw rl(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(i,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw rl(i,"email-already-in-use",d);if(p==="USER_DISABLED")throw rl(i,"user-disabled",d);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Vc(i,w,g);un(i,w)}}catch(l){if(l instanceof ir)throw l;un(i,"network-request-failed",{message:String(l)})}}async function Fw(i,e,n,s,l={}){const u=await Ii(i,e,n,s,l);return"mfaPendingCredential"in u&&un(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Ig(i,e,n,s){const l=`${e}${n}?${s}`,u=i,d=u.config.emulator?Hc(i.config,l):`${i.config.apiScheme}://${l}`;return Mw.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class zw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Xt(this.auth,"network-request-failed")),jw.get())})}}function rl(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Xt(i,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function Uw(i,e){return Ii(i,"POST","/v1/accounts:delete",e)}async function yl(i,e){return Ii(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Es(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ww(i,e=!1){const n=Pt(i),s=await n.getIdToken(e),l=Gc(s);ne(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Es(tc(l.auth_time)),issuedAtTime:Es(tc(l.iat)),expirationTime:Es(tc(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function tc(i){return Number(i)*1e3}function Gc(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const l=ml(n);return l?JSON.parse(l):(ll("Failed to decode base64 JWT payload"),null)}catch(l){return ll("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Jp(i){const e=Gc(i);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bs(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ir&&Vw(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Vw({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Bw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wl(i){var e;const n=i.auth,s=await i.getIdToken(),l=await bs(i,yl(n,{idToken:s}));ne(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];i._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?xg(u.providerUserInfo):[],f=$w(i.providerData,d),p=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(f!=null&&f.length),w=p?g:!1,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new vc(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,v)}async function Hw(i){const e=Pt(i);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $w(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function xg(i){return i.map(e=>{var{providerId:n}=e,s=Wc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Gw(i,e){const n=await kg(i,{},async()=>{const s=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=i.config,d=await Ig(i,l,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return i.emulatorConfig&&Si(i.emulatorConfig.host)&&(p.credentials="include"),Cg.fetch()(d,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qw(i,e){return Ii(i,"POST","/v2/accounts:revokeToken",$c(i,e))}/**
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
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=Jp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await Gw(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new li;return s&&(ne(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(ne(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(ne(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function Gn(i,e){ne(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Qt{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=Wc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new vc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await bs(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ww(this,e)}reload(){return Hw(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(kr(this.auth));const e=await this.getIdToken();return await bs(this,Uw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,w;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,_=(l=n.email)!==null&&l!==void 0?l:void 0,N=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,R=(d=n.photoURL)!==null&&d!==void 0?d:void 0,j=(f=n.tenantId)!==null&&f!==void 0?f:void 0,z=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,pe=(g=n.createdAt)!==null&&g!==void 0?g:void 0,Ee=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:Se,emailVerified:Ce,isAnonymous:He,providerData:me,stsTokenManager:Le}=n;ne(Se&&Le,e,"internal-error");const ae=li.fromJSON(this.name,Le);ne(typeof Se=="string",e,"internal-error"),Gn(v,e.name),Gn(_,e.name),ne(typeof Ce=="boolean",e,"internal-error"),ne(typeof He=="boolean",e,"internal-error"),Gn(N,e.name),Gn(R,e.name),Gn(j,e.name),Gn(z,e.name),Gn(pe,e.name),Gn(Ee,e.name);const Me=new Qt({uid:Se,auth:e,email:_,emailVerified:Ce,displayName:v,isAnonymous:He,photoURL:R,phoneNumber:N,tenantId:j,stsTokenManager:ae,createdAt:pe,lastLoginAt:Ee});return me&&Array.isArray(me)&&(Me.providerData=me.map(qe=>Object.assign({},qe))),z&&(Me._redirectEventId=z),Me}static async _fromIdTokenResponse(e,n,s=!1){const l=new li;l.updateFromServerResponse(n);const u=new Qt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await wl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];ne(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?xg(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new li;f.updateFromIdToken(s);const p=new Qt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new vc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
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
 */const Zp=new Map;function En(i){In(i instanceof Function,"Expected a class definition");let e=Zp.get(i);return e?(In(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Zp.set(i,e),e)}/**
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
 */class Tg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tg.type="NONE";const em=Tg;/**
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
 */function al(i,e,n){return`firebase:${i}:${e}:${n}`}class ai{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=al(this.userKey,l.apiKey,u),this.fullPersistenceKey=al("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await yl(this.auth,{idToken:e}).catch(()=>{});return n?Qt._fromGetAccountInfoResponse(this.auth,n,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ai(En(em),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||En(em);const d=al(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const w=await g._get(d);if(w){let v;if(typeof w=="string"){const _=await yl(e,{idToken:w}).catch(()=>{});if(!_)break;v=await Qt._fromGetAccountInfoResponse(e,_,w)}else v=Qt._fromJSON(e,w);g!==u&&(f=v),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new ai(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new ai(u,e,s))}}/**
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
 */function tm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ng(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Og(e))return"Blackberry";if(Dg(e))return"Webos";if(bg(e))return"Safari";if((e.includes("chrome/")||Pg(e))&&!e.includes("edge/"))return"Chrome";if(Ag(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ng(i=gt()){return/firefox\//i.test(i)}function bg(i=gt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pg(i=gt()){return/crios\//i.test(i)}function Rg(i=gt()){return/iemobile/i.test(i)}function Ag(i=gt()){return/android/i.test(i)}function Og(i=gt()){return/blackberry/i.test(i)}function Dg(i=gt()){return/webos/i.test(i)}function qc(i=gt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Kw(i=gt()){var e;return qc(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qw(){return o1()&&document.documentMode===10}function Lg(i=gt()){return qc(i)||Ag(i)||Dg(i)||Og(i)||/windows phone/i.test(i)||Rg(i)}/**
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
 */function Mg(i,e=[]){let n;switch(i){case"Browser":n=tm(gt());break;case"Worker":n=`${tm(gt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${s}`}/**
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
 */class Yw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Xw(i,e={}){return Ii(i,"GET","/v2/passwordPolicy",$c(i,e))}/**
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
 */const Jw=6;class Zw{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:Jw,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class eE{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nm(this),this.idTokenSubscription=new nm(this),this.beforeStateQueue=new Yw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yl(this,{idToken:e}),s=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Kt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(kr(this));const n=e?Pt(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xw(this),n=new Zw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await qw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Pw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ul(i){return Pt(i)}class nm{constructor(e){this.auth=e,this.observer=null,this.addObserver=m1(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tE(i){Kc=i}function nE(i){return Kc.loadJS(i)}function rE(){return Kc.gapiScript}function iE(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function sE(i,e){const n=Uc(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Ir(u,e??{}))return l;un(l,"already-initialized")}return n.initialize({options:e})}function oE(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function lE(i,e,n){const s=Ul(i);ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=jg(e),{host:d,port:f}=aE(e),p=f===null?"":`:${f}`,g={url:`${u}//${d}${p}/`},w=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){ne(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ne(Ir(g,s.config.emulator)&&Ir(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Si(d)?(cg(`${u}//${d}${p}`),dg("Auth",!0)):uE()}function jg(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function aE(i){const e=jg(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:rm(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:rm(d)}}}function rm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function uE(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Fg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}/**
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
 */async function ui(i,e){return Fw(i,"POST","/v1/accounts:signInWithIdp",$c(i,e))}/**
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
 */const cE="http://localhost";class Tr extends Fg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=Wc(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new Tr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return ui(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ui(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ui(e,n)}buildRequest(){const e={requestUri:cE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
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
 */class Qc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Us extends Qc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qn extends Us{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class yn extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return yn.credential(n,s)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
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
 */class Kn extends Us{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class Qn extends Us{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */class mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await Qt._fromIdTokenResponse(e,s,l),d=im(s);return new mi({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=im(s);return new mi({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function im(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class El extends ir{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,El.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new El(e,n,s,l)}}function zg(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?El._fromErrorAndOperation(i,u,e,s):u})}async function dE(i,e,n=!1){const s=await bs(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return mi._forOperation(i,"link",s)}/**
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
 */async function hE(i,e,n=!1){const{auth:s}=i;if(Kt(s.app))return Promise.reject(kr(s));const l="reauthenticate";try{const u=await bs(i,zg(s,l,e,i),n);ne(u.idToken,s,"internal-error");const d=Gc(u.idToken);ne(d,s,"internal-error");const{sub:f}=d;return ne(i.uid===f,s,"user-mismatch"),mi._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&un(s,"user-mismatch"),u}}/**
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
 */async function fE(i,e,n=!1){if(Kt(i.app))return Promise.reject(kr(i));const s="signIn",l=await zg(i,s,e),u=await mi._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}function pE(i,e,n,s){return Pt(i).onIdTokenChanged(e,n,s)}function mE(i,e,n){return Pt(i).beforeAuthStateChanged(e,n)}function o2(i){return Pt(i).signOut()}const Sl="__sak";/**
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
 */class Ug{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sl,"1"),this.storage.removeItem(Sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const gE=1e3,vE=10;class Wg extends Ug{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);Qw()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,vE):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},gE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wg.type="LOCAL";const _E=Wg;/**
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
 */class Vg extends Ug{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vg.type="SESSION";const Bg=Vg;/**
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
 */function yE(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Wl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await yE(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wl.receivers=[];/**
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
 */function Yc(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class wE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=Yc("",20);l.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(v){const _=v;if(_.data.eventId===g)switch(_.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(_.data.response);break;default:clearTimeout(w),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function an(){return window}function EE(i){an().location.href=i}/**
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
 */function Hg(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function SE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CE(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function kE(){return Hg()?self:null}/**
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
 */const $g="firebaseLocalStorageDb",IE=1,Cl="firebaseLocalStorage",Gg="fbase_key";class Ws{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vl(i,e){return i.transaction([Cl],e?"readwrite":"readonly").objectStore(Cl)}function xE(){const i=indexedDB.deleteDatabase($g);return new Ws(i).toPromise()}function _c(){const i=indexedDB.open($g,IE);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Cl,{keyPath:Gg})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Cl)?e(s):(s.close(),await xE(),e(await _c()))})})}async function sm(i,e,n){const s=Vl(i,!0).put({[Gg]:e,value:n});return new Ws(s).toPromise()}async function TE(i,e){const n=Vl(i,!1).get(e),s=await new Ws(n).toPromise();return s===void 0?null:s.value}function om(i,e){const n=Vl(i,!0).delete(e);return new Ws(n).toPromise()}const NE=800,bE=3;class qg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>bE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wl._getInstance(kE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SE(),!this.activeServiceWorker)return;this.sender=new wE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _c();return await sm(e,Sl,"1"),await om(e,Sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>TE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>om(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=Vl(l,!1).getAll();return new Ws(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qg.type="LOCAL";const PE=qg;new zs(3e4,6e4);/**
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
 */function Kg(i,e){return e?En(e):(ne(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Xc extends Fg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RE(i){return fE(i.auth,new Xc(i),i.bypassAuthState)}function AE(i){const{auth:e,user:n}=i;return ne(n,e,"internal-error"),hE(n,new Xc(i),i.bypassAuthState)}async function OE(i){const{auth:e,user:n}=i;return ne(n,e,"internal-error"),dE(n,new Xc(i),i.bypassAuthState)}/**
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
 */class Qg{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RE;case"linkViaPopup":case"linkViaRedirect":return OE;case"reauthViaPopup":case"reauthViaRedirect":return AE;default:un(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const DE=new zs(2e3,1e4);async function l2(i,e,n){if(Kt(i.app))return Promise.reject(Xt(i,"operation-not-supported-in-this-environment"));const s=Ul(i);Rw(i,e,Qc);const l=Kg(s,n);return new Er(s,"signInViaPopup",e,l).executeNotNull()}class Er extends Qg{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DE.get())};e()}}Er.currentPopupAction=null;/**
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
 */const LE="pendingRedirect",ul=new Map;class ME extends Qg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const s=await jE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jE(i,e){const n=UE(e),s=zE(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function FE(i,e){ul.set(i._key(),e)}function zE(i){return En(i._redirectPersistence)}function UE(i){return al(LE,i.config.apiKey,i.name)}async function WE(i,e,n=!1){if(Kt(i.app))return Promise.reject(kr(i));const s=Ul(i),l=Kg(s,e),d=await new ME(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const VE=10*60*1e3;class BE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Yg(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VE&&this.cachedEventUids.clear(),this.cachedEventUids.has(lm(e))}saveEventToCache(e){this.cachedEventUids.add(lm(e)),this.lastProcessedEventTime=Date.now()}}function lm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Yg({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HE(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yg(i);default:return!1}}/**
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
 */async function $E(i,e={}){return Ii(i,"GET","/v1/projects",e)}/**
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
 */const GE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qE=/^https?/;async function KE(i){if(i.config.emulator)return;const{authorizedDomains:e}=await $E(i);for(const n of e)try{if(QE(n))return}catch{}un(i,"unauthorized-domain")}function QE(i){const e=gc(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!qE.test(n))return!1;if(GE.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const YE=new zs(3e4,6e4);function am(){const i=an().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function XE(i){return new Promise((e,n)=>{var s,l,u;function d(){am(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{am(),n(Xt(i,"network-request-failed"))},timeout:YE.get()})}if(!((l=(s=an().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=an().gapi)===null||u===void 0)&&u.load)d();else{const f=iE("iframefcb");return an()[f]=()=>{gapi.load?d():n(Xt(i,"network-request-failed"))},nE(`${rE()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw cl=null,e})}let cl=null;function JE(i){return cl=cl||XE(i),cl}/**
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
 */const ZE=new zs(5e3,15e3),eS="__/auth/iframe",tS="emulator/auth/iframe",nS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iS(i){const e=i.config;ne(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Hc(e,tS):`https://${i.config.authDomain}/${eS}`,s={apiKey:e.apiKey,appName:i.name,v:ki},l=rS.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ci(s).slice(1)}`}async function sS(i){const e=await JE(i),n=an().gapi;return ne(n,i,"internal-error"),e.open({where:document.body,url:iS(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nS,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=Xt(i,"network-request-failed"),f=an().setTimeout(()=>{u(d)},ZE.get());function p(){an().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
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
 */const oS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lS=500,aS=600,uS="_blank",cS="http://localhost";class um{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dS(i,e,n,s=lS,l=aS){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},oS),{width:s.toString(),height:l.toString(),top:u,left:d}),g=gt().toLowerCase();n&&(f=Pg(g)?uS:n),Ng(g)&&(e=e||cS,p.scrollbars="yes");const w=Object.entries(p).reduce((_,[N,R])=>`${_}${N}=${R},`,"");if(Kw(g)&&f!=="_self")return hS(e||"",f),new um(null);const v=window.open(e||"",f,w);ne(v,i,"popup-blocked");try{v.focus()}catch{}return new um(v)}function hS(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const fS="__/auth/handler",pS="emulator/auth/handler",mS=encodeURIComponent("fac");async function cm(i,e,n,s,l,u){ne(i.config.authDomain,i,"auth-domain-config-required"),ne(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:ki,eventId:l};if(e instanceof Qc){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",cc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,v]of Object.entries({}))d[w]=v}if(e instanceof Us){const w=e.getScopes().filter(v=>v!=="");w.length>0&&(d.scopes=w.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await i._getAppCheckToken(),g=p?`#${mS}=${encodeURIComponent(p)}`:"";return`${gS(i)}?${Ci(f).slice(1)}${g}`}function gS({config:i}){return i.emulator?Hc(i,pS):`https://${i.authDomain}/${fS}`}/**
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
 */const nc="webStorageSupport";class vS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bg,this._completeRedirectFn=WE,this._overrideRedirectResult=FE}async _openPopup(e,n,s,l){var u;In((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await cm(e,n,s,gc(),l);return dS(e,d,Yc())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await cm(e,n,s,gc(),l);return EE(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(In(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await sS(e),s=new BE(e);return n.register("authEvent",l=>(ne(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nc,{type:nc},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[nc];d!==void 0&&n(!!d),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lg()||bg()||qc()}}const _S=vS;var dm="@firebase/auth",hm="1.10.7";/**
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
 */class yS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ES(i){pi(new xr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;ne(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mg(i)},g=new eE(s,l,u,p);return oE(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),pi(new xr("auth-internal",e=>{const n=Ul(e.getProvider("auth").getImmediate());return(s=>new yS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(dm,hm,wS(i)),Zn(dm,hm,"esm2017")}/**
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
 */const SS=5*60,CS=ug("authIdTokenMaxAge")||SS;let fm=null;const kS=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>CS)return;const l=n==null?void 0:n.token;fm!==l&&(fm=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function IS(i=_g()){const e=Uc(i,"auth");if(e.isInitialized())return e.getImmediate();const n=sE(i,{popupRedirectResolver:_S,persistence:[PE,_E,Bg]}),s=ug("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=kS(u.toString());mE(n,d,()=>d(n.currentUser)),pE(n,f=>d(f))}}const l=lg("auth");return l&&lE(n,`http://${l}`),n}function xS(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}tE({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=Xt("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",xS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ES("Browser");var pm={};const mm="@firebase/database",gm="1.0.19";/**
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
 */let Xg="";function TS(i){Xg=i}/**
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
 */class NS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ts(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class bS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Jg=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new NS(e)}}catch{}return new bS},Sr=Jg("localStorage"),PS=Jg("sessionStorage");/**
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
 */const ci=new Fc("@firebase/database"),RS=function(){let i=1;return function(){return i++}}(),Zg=function(i){const e=_1(i),n=new p1;n.update(e);const s=n.digest();return Lc.encodeByteArray(s)},Vs=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Vs.apply(null,s):typeof s=="object"?e+=rt(s):e+=s,e+=" "}return e};let Ss=null,vm=!0;const AS=function(i,e){L(!e,"Can't turn on custom loggers persistently."),ci.logLevel=xe.VERBOSE,Ss=ci.log.bind(ci)},lt=function(...i){if(vm===!0&&(vm=!1,Ss===null&&PS.get("logging_enabled")===!0&&AS()),Ss){const e=Vs.apply(null,i);Ss(e)}},Bs=function(i){return function(...e){lt(i,...e)}},yc=function(...i){const e="FIREBASE INTERNAL ERROR: "+Vs(...i);ci.error(e)},xn=function(...i){const e=`FIREBASE FATAL ERROR: ${Vs(...i)}`;throw ci.error(e),new Error(e)},mt=function(...i){const e="FIREBASE WARNING: "+Vs(...i);ci.warn(e)},OS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jc=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},DS=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},gi="[MIN_NAME]",Nr="[MAX_NAME]",Ar=function(i,e){if(i===e)return 0;if(i===gi||e===Nr)return-1;if(e===gi||i===Nr)return 1;{const n=_m(i),s=_m(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},LS=function(i,e){return i===e?0:i<e?-1:1},ms=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+rt(e))},Zc=function(i){if(typeof i!="object"||i===null)return rt(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=rt(e[s]),n+=":",n+=Zc(i[e[s]]);return n+="}",n},ev=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function at(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const tv=function(i){L(!Jc(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const w=g.join("");let v="";for(p=0;p<64;p+=8){let _=parseInt(w.substr(p,8),2).toString(16);_.length===1&&(_="0"+_),v=v+_}return v.toLowerCase()},MS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function FS(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const zS=new RegExp("^-?(0*)\\d{1,10}$"),US=-2147483648,WS=2147483647,_m=function(i){if(zS.test(i)){const e=Number(i);if(e>=US&&e<=WS)return e}return null},xi=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw mt("Exception was thrown by user callback.",n),e},Math.floor(0))}},VS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Cs=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class BS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Kt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){mt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class HS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',mt(e)}}class dl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}dl.OWNER="owner";/**
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
 */const ed="5",nv="v",rv="s",iv="r",sv="f",ov=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,lv="ls",av="p",wc="ac",uv="websocket",cv="long_polling";/**
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
 */class dv{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $S(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function hv(i,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let s;if(e===uv)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===cv)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$S(i)&&(n.ns=i.namespace);const l=[];return at(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
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
 */class GS{constructor(){this.counters_={}}incrementCounter(e,n=1){cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ky(this.counters_)}}/**
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
 */const rc={},ic={};function td(i){const e=i.toString();return rc[e]||(rc[e]=new GS),rc[e]}function qS(i,e){const n=i.toString();return ic[n]||(ic[n]=e()),ic[n]}/**
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
 */class KS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&xi(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ym="start",QS="close",YS="pLPCommand",XS="pRTLPCB",fv="id",pv="pw",mv="ser",JS="cb",ZS="seg",eC="ts",tC="d",nC="dframe",gv=1870,vv=30,rC=gv-vv,iC=25e3,sC=3e4;class oi{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bs(e),this.stats_=td(n),this.urlFn=p=>(this.appCheckToken&&(p[wc]=this.appCheckToken),hv(n,cv,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new KS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sC)),DS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nd((...u)=>{const[d,f,p,g,w]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===ym)this.id=f,this.password=p;else if(d===QS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[ym]="t",s[mv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[JS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[nv]=ed,this.transportSessionId&&(s[rv]=this.transportSessionId),this.lastSessionId&&(s[lv]=this.lastSessionId),this.applicationId&&(s[av]=this.applicationId),this.appCheckToken&&(s[wc]=this.appCheckToken),typeof location<"u"&&location.hostname&&ov.test(location.hostname)&&(s[iv]=sv);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oi.forceAllow_=!0}static forceDisallow(){oi.forceDisallow_=!0}static isAvailable(){return oi.forceAllow_?!0:!oi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!MS()&&!jS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=sg(n),l=ev(s,rC);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[nC]="t",s[fv]=e,s[pv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class nd{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=RS(),window[YS+this.uniqueCallbackIdentifier]=e,window[XS+this.uniqueCallbackIdentifier]=n,this.myIFrame=nd.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){lt("frame writing exception"),f.stack&&lt(f.stack),lt(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fv]=this.myID,e[pv]=this.myPW,e[mv]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vv+s.length<=gv;){const d=this.pendingSegs.shift();s=s+"&"+ZS+l+"="+d.seg+"&"+eC+l+"="+d.ts+"&"+tC+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(iC)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const oC=16384,lC=45e3;let kl=null;typeof MozWebSocket<"u"?kl=MozWebSocket:typeof WebSocket<"u"&&(kl=WebSocket);class ln{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bs(this.connId),this.stats_=td(n),this.connURL=ln.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[nv]=ed,typeof location<"u"&&location.hostname&&ov.test(location.hostname)&&(d[iv]=sv),n&&(d[rv]=n),s&&(d[lv]=s),l&&(d[wc]=l),u&&(d[av]=u),hv(e,uv,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Sr.set("previous_websocket_failure",!0);try{let s;fg(),this.mySock=new kl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){ln.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&kl!==null&&!ln.forceDisallow_}static previouslyFailed(){return Sr.isInMemoryStorage||Sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ts(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ev(n,oC);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ln.responsesRequiredToBeHealthy=2;ln.healthyTimeout=3e4;/**
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
 */class Ps{static get ALL_TRANSPORTS(){return[oi,ln]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=ln.isAvailable();let s=n&&!ln.previouslyFailed();if(e.webSocketOnly&&(n||mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ln];else{const l=this.transports_=[];for(const u of Ps.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ps.globalTransportInitialized_=!1;/**
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
 */const aC=6e4,uC=5e3,cC=10*1024,dC=100*1024,sc="t",wm="d",hC="s",Em="r",fC="e",Sm="o",Cm="a",km="n",Im="p",pC="h";class mC{constructor(e,n,s,l,u,d,f,p,g,w){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=w,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bs("c:"+this.id+":"),this.transportManager_=new Ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Cs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sc in e){const n=e[sc];n===Cm?this.upgradeIfSecondaryHealthy_():n===Em?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ms("t",e),s=ms("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Im,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:km,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ms("t",e),s=ms("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ms(sc,e);if(wm in e){const s=e[wm];if(n===pC){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===km){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hC?this.onConnectionShutdown_(s):n===Em?this.onReset_(s):n===fC?yc("Server Error: "+s):n===Sm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ed!==s&&mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Cs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Cs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Im,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class _v{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class yv{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Il extends yv{static getInstance(){return new Il}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const xm=32,Tm=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function we(){return new Te("")}function de(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function tr(i){return i.pieces_.length-i.pieceNum_}function Ae(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new Te(i.pieces_,e)}function rd(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function gC(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function Rs(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function wv(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new Te(e,0)}function Ve(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof Te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new Te(n,0)}function fe(i){return i.pieceNum_>=i.pieces_.length}function Ct(i,e){const n=de(i),s=de(e);if(n===null)return e;if(n===s)return Ct(Ae(i),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function vC(i,e){const n=Rs(i,0),s=Rs(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=Ar(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function id(i,e){if(tr(i)!==tr(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ft(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(tr(i)>tr(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class _C{constructor(e,n){this.errorPrefix_=n,this.parts_=Rs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=zl(this.parts_[s]);Ev(this)}}function yC(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=zl(e),Ev(i)}function wC(i){const e=i.parts_.pop();i.byteLength_-=zl(e),i.parts_.length>0&&(i.byteLength_-=1)}function Ev(i){if(i.byteLength_>Tm)throw new Error(i.errorPrefix_+"has a key path longer than "+Tm+" bytes ("+i.byteLength_+").");if(i.parts_.length>xm)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xm+") or object contains a cycle "+wr(i))}function wr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
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
 */class sd extends yv{static getInstance(){return new sd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const gs=1e3,EC=60*5*1e3,Nm=30*1e3,SC=1.3,CC=3e4,kC="server_kill",bm=3;class Cn extends _v{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Cn.nextPersistentConnectionId_++,this.log_=Bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gs,this.maxReconnectDelay_=EC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!fg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Il.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(rt(u)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new js,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;Cn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&cn(e,"w")){const s=fi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||f1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=h1(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yc("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CC&&(this.reconnectDelay_=gs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Cn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(v){L(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:g};const w=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,_]=await Promise.all([this.authTokenProvider_.getToken(w),this.appCheckTokenProvider_.getToken(w)]);d?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=_&&_.token,f=new mC(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,N=>{mt(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(kC)},u))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&mt(v),p())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cc(this.interruptReasons_)&&(this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Zc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new Te(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bm&&(this.reconnectDelay_=Nm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Xg.replace(/\./g,"-")]=1,jc()?e["framework.cordova"]=1:hg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Il.getInstance().currentlyOnline();return cc(this.interruptReasons_)&&e}}Cn.nextPersistentConnectionId_=0;Cn.nextConnectionId_=0;/**
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
 */class he{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new he(e,n)}}/**
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
 */class Bl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new he(gi,e),l=new he(gi,n);return this.compare(s,l)!==0}minPost(){return he.MIN}}/**
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
 */let il;class Sv extends Bl{static get __EMPTY_NODE(){return il}static set __EMPTY_NODE(e){il=e}compare(e,n){return Ar(e.name,n.name)}isDefinedOn(e){throw Ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return he.MIN}maxPost(){return new he(Nr,il)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,il)}toString(){return".key"}}const di=new Sv;/**
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
 */class sl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??tt.RED,this.left=l??kt.EMPTY_NODE,this.right=u??kt.EMPTY_NODE}copy(e,n,s,l,u){return new tt(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return kt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return kt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class IC{copy(e,n,s,l,u){return this}insert(e,n,s){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class kt{constructor(e,n=kt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new kt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new sl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new sl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new sl(this.root_,null,this.comparator_,!0,e)}}kt.EMPTY_NODE=new IC;/**
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
 */function xC(i,e){return Ar(i.name,e.name)}function od(i,e){return Ar(i,e)}/**
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
 */let Ec;function TC(i){Ec=i}const Cv=function(i){return typeof i=="number"?"number:"+tv(i):"string:"+i},kv=function(i){if(i.isLeafNode()){const e=i.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&cn(e,".sv"),"Priority must be a string or number.")}else L(i===Ec||i.isEmpty(),"priority of unexpected type.");L(i===Ec||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Pm;class et{static set __childrenNodeConstructor(e){Pm=e}static get __childrenNodeConstructor(){return Pm}constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return fe(e)?this:de(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=de(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(L(s!==".priority"||tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=tv(this.value_):e+=this.value_,this.lazyHash_=Zg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=et.VALUE_TYPE_ORDER.indexOf(n),u=et.VALUE_TYPE_ORDER.indexOf(s);return L(l>=0,"Unknown leaf type: "+n),L(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Iv,xv;function NC(i){Iv=i}function bC(i){xv=i}class PC extends Bl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?Ar(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return he.MIN}maxPost(){return new he(Nr,new et("[PRIORITY-POST]",xv))}makePost(e,n){const s=Iv(e);return new he(n,new et("[PRIORITY-POST]",s))}toString(){return".priority"}}const Be=new PC;/**
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
 */const RC=Math.log(2);class AC{constructor(e){const n=u=>parseInt(Math.log(u)/RC,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xl=function(i,e,n,s){i.sort(e);const l=function(p,g){const w=g-p;let v,_;if(w===0)return null;if(w===1)return v=i[p],_=n?n(v):v,new tt(_,v.node,tt.BLACK,null,null);{const N=parseInt(w/2,10)+p,R=l(p,N),j=l(N+1,g);return v=i[N],_=n?n(v):v,new tt(_,v.node,tt.BLACK,R,j)}},u=function(p){let g=null,w=null,v=i.length;const _=function(R,j){const z=v-R,pe=v;v-=R;const Ee=l(z+1,pe),Se=i[z],Ce=n?n(Se):Se;N(new tt(Ce,Se.node,j,null,Ee))},N=function(R){g?(g.left=R,g=R):(w=R,g=R)};for(let R=0;R<p.count;++R){const j=p.nextBitIsOne(),z=Math.pow(2,p.count-(R+1));j?_(z,tt.BLACK):(_(z,tt.BLACK),_(z,tt.RED))}return w},d=new AC(i.length),f=u(d);return new kt(s||e,f)};/**
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
 */let oc;const vs={};class Sn{static get Default(){return L(Be,"ChildrenNode.ts has not been loaded"),oc=oc||new Sn({".priority":vs},{".priority":Be}),oc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=fi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof kt?n:null}hasIndex(e){return cn(this.indexSet_,e.toString())}addIndex(e,n){L(e!==di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(he.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=xl(s,e.getCompare()):f=vs;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const w=Object.assign({},this.indexes_);return w[p]=f,new Sn(w,g)}addToIndexes(e,n){const s=gl(this.indexes_,(l,u)=>{const d=fi(this.indexSet_,u);if(L(d,"Missing index implementation for "+u),l===vs)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(he.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),xl(f,d.getCompare())}else return vs;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new he(e.name,f))),p.insert(e,e.node)}});return new Sn(s,this.indexSet_)}removeFromIndexes(e,n){const s=gl(this.indexes_,l=>{if(l===vs)return l;{const u=n.get(e.name);return u?l.remove(new he(e.name,u)):l}});return new Sn(s,this.indexSet_)}}/**
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
 */let _s;class ee{static get EMPTY_NODE(){return _s||(_s=new ee(new kt(od),null,Sn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&kv(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_s}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_s:n}}getChild(e){const n=de(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new he(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?_s:this.priorityNode_;return new ee(l,d,u)}}updateChild(e,n){const s=de(e);if(s===null)return n;{L(de(e)!==".priority"||tr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ae(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Be,(d,f)=>{n[d]=f.val(e),s++,u&&ee.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cv(this.getPriority().val())+":"),this.forEachChild(Be,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Zg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new he(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new he(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new he(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,he.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hs?-1:0}withIndex(e){if(e===di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Be),l=n.getIterator(Be);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===di?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class OC extends ee{constructor(){super(new kt(od),ee.EMPTY_NODE,Sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Hs=new OC;Object.defineProperties(he,{MIN:{value:new he(gi,ee.EMPTY_NODE)},MAX:{value:new he(Nr,Hs)}});Sv.__EMPTY_NODE=ee.EMPTY_NODE;et.__childrenNodeConstructor=ee;TC(Hs);bC(Hs);/**
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
 */const DC=!0;function nt(i,e=null){if(i===null)return ee.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new et(n,nt(e))}if(!(i instanceof Array)&&DC){const n=[];let s=!1;if(at(i,(d,f)=>{if(d.substring(0,1)!=="."){const p=nt(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new he(d,p)))}}),n.length===0)return ee.EMPTY_NODE;const u=xl(n,xC,d=>d.name,od);if(s){const d=xl(n,Be.getCompare());return new ee(u,nt(e),new Sn({".priority":d},{".priority":Be}))}else return new ee(u,nt(e),Sn.Default)}else{let n=ee.EMPTY_NODE;return at(i,(s,l)=>{if(cn(i,s)&&s.substring(0,1)!=="."){const u=nt(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(nt(e))}}NC(nt);/**
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
 */class LC extends Bl{constructor(e){super(),this.indexPath_=e,L(!fe(e)&&de(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?Ar(e.name,n.name):u}makePost(e,n){const s=nt(e),l=ee.EMPTY_NODE.updateChild(this.indexPath_,s);return new he(n,l)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Hs);return new he(Nr,e)}toString(){return Rs(this.indexPath_,0).join("/")}}/**
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
 */class MC extends Bl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ar(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,n){const s=nt(e);return new he(n,s)}toString(){return".value"}}const jC=new MC;/**
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
 */function Tv(i){return{type:"value",snapshotNode:i}}function vi(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function As(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function Os(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function FC(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
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
 */class ld{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(As(n,f)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(vi(n,s)):d.trackChildChange(Os(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Be,(l,u)=>{n.hasChild(l)||s.trackChildChange(As(l,u))}),n.isLeafNode()||n.forEachChild(Be,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(Os(l,u,d))}else s.trackChildChange(vi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ds{constructor(e){this.indexedFilter_=new ld(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ds.getStartPost_(e),this.endPost_=Ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new he(n,s))||(s=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ee.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(ee.EMPTY_NODE);const u=this;return n.forEachChild(Be,(d,f)=>{u.matches(new he(d,f))||(l=l.updateImmediateChild(d,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class zC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new he(n,s))||(s=ee.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=ee.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(ee.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const v=this.index_.getCompare();d=(_,N)=>v(N,_)}else d=this.index_.getCompare();const f=e;L(f.numChildren()===this.limit_,"");const p=new he(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),w=this.rangedFilter_.matches(p);if(f.hasChild(n)){const v=f.getImmediateChild(n);let _=l.getChildAfterChild(this.index_,g,this.reverse_);for(;_!=null&&(_.name===n||f.hasChild(_.name));)_=l.getChildAfterChild(this.index_,_,this.reverse_);const N=_==null?1:d(_,p);if(w&&!s.isEmpty()&&N>=0)return u!=null&&u.trackChildChange(Os(n,s,v)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(As(n,v));const j=f.updateImmediateChild(n,ee.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(u!=null&&u.trackChildChange(vi(_.name,_.node)),j.updateImmediateChild(_.name,_.node)):j}}else return s.isEmpty()?e:w&&d(g,p)>=0?(u!=null&&(u.trackChildChange(As(g.name,g.node)),u.trackChildChange(vi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,ee.EMPTY_NODE)):e}}/**
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
 */class ad{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gi}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new ad;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function UC(i){return i.loadsAllData()?new ld(i.getIndex()):i.hasLimit()?new zC(i):new Ds(i)}function Rm(i){const e={};if(i.isDefault())return e;let n;if(i.index_===Be?n="$priority":i.index_===jC?n="$value":i.index_===di?n="$key":(L(i.index_ instanceof LC,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=rt(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=rt(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+rt(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=rt(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+rt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function Am(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==Be&&(e.i=i.index_.toString()),e}/**
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
 */class Tl extends _v{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Bs("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=Tl.getListenId_(e,s),f={};this.listens_[d]=f;const p=Rm(e._queryParams);this.restRequest_(u+".json",p,(g,w)=>{let v=w;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(u,v,!1,s),fi(this.listens_,d)===f){let _;g?g===401?_="permission_denied":_="rest_error:"+g:_="ok",l(_,null)}})}unlisten(e,n){const s=Tl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Rm(e._queryParams),s=e._path.toString(),l=new js;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ci(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Ts(f.responseText)}catch{mt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&mt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
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
 */class WC{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Nl(){return{value:null,children:new Map}}function Nv(i,e,n){if(fe(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=de(e);i.children.has(s)||i.children.set(s,Nl());const l=i.children.get(s);e=Ae(e),Nv(l,e,n)}}function Sc(i,e,n){i.value!==null?n(e,i.value):VC(i,(s,l)=>{const u=new Te(e.toString()+"/"+s);Sc(l,u,n)})}function VC(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class BC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&at(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
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
 */const Om=10*1e3,HC=30*1e3,$C=5*60*1e3;class GC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new BC(e);const s=Om+(HC-Om)*Math.random();Cs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;at(e,(l,u)=>{u>0&&cn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),Cs(this.reportStats_.bind(this),Math.floor(Math.random()*2*$C))}}/**
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
 */var Yt;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yt||(Yt={}));function ud(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dd(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
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
 */class bl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Yt.ACK_USER_WRITE,this.source=ud()}operationForChild(e){if(fe(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new bl(we(),n,this.revert)}}else return L(de(this.path)===e,"operationForChild called for unrelated child."),new bl(Ae(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ls{constructor(e,n){this.source=e,this.path=n,this.type=Yt.LISTEN_COMPLETE}operationForChild(e){return fe(this.path)?new Ls(this.source,we()):new Ls(this.source,Ae(this.path))}}/**
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
 */class br{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Yt.OVERWRITE}operationForChild(e){return fe(this.path)?new br(this.source,we(),this.snap.getImmediateChild(e)):new br(this.source,Ae(this.path),this.snap)}}/**
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
 */class _i{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Yt.MERGE}operationForChild(e){if(fe(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new br(this.source,we(),n.value):new _i(this.source,we(),n)}else return L(de(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _i(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Pr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(fe(e))return this.isFullyInitialized()&&!this.filtered_;const n=de(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class qC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function KC(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(FC(d.childName,d.snapshotNode))}),ys(i,l,"child_removed",e,s,n),ys(i,l,"child_added",e,s,n),ys(i,l,"child_moved",u,s,n),ys(i,l,"child_changed",e,s,n),ys(i,l,"value",e,s,n),l}function ys(i,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>YC(i,f,p)),d.forEach(f=>{const p=QC(i,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,i.query_))})})}function QC(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function YC(i,e,n){if(e.childName==null||n.childName==null)throw Ei("Should only compare child_ events.");const s=new he(e.childName,e.snapshotNode),l=new he(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
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
 */function Hl(i,e){return{eventCache:i,serverCache:e}}function ks(i,e,n,s){return Hl(new Pr(e,n,s),i.serverCache)}function bv(i,e,n,s){return Hl(i.eventCache,new Pr(e,n,s))}function Cc(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Rr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
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
 */let lc;const XC=()=>(lc||(lc=new kt(LS)),lc);class Re{static fromObject(e){let n=new Re(null);return at(e,(s,l)=>{n=n.set(new Te(s),l)}),n}constructor(e,n=XC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:we(),value:this.value};if(fe(e))return null;{const s=de(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Ae(e),n);return u!=null?{path:Ve(new Te(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(fe(e))return this;{const n=de(e),s=this.children.get(n);return s!==null?s.subtree(Ae(e)):new Re(null)}}set(e,n){if(fe(e))return new Re(n,this.children);{const s=de(e),u=(this.children.get(s)||new Re(null)).set(Ae(e),n),d=this.children.insert(s,u);return new Re(this.value,d)}}remove(e){if(fe(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=de(e),s=this.children.get(n);if(s){const l=s.remove(Ae(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new Re(null):new Re(this.value,u)}else return this}}get(e){if(fe(e))return this.value;{const n=de(e),s=this.children.get(n);return s?s.get(Ae(e)):null}}setTree(e,n){if(fe(e))return n;{const s=de(e),u=(this.children.get(s)||new Re(null)).setTree(Ae(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new Re(this.value,d)}}fold(e){return this.fold_(we(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Ve(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,we(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(fe(e))return null;{const u=de(e),d=this.children.get(u);return d?d.findOnPath_(Ae(e),Ve(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,we(),n)}foreachOnPath_(e,n,s){if(fe(e))return this;{this.value&&s(n,this.value);const l=de(e),u=this.children.get(l);return u?u.foreachOnPath_(Ae(e),Ve(n,l),s):new Re(null)}}foreach(e){this.foreach_(we(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new Re(null))}}function Is(i,e,n){if(fe(e))return new Jt(new Re(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=Ct(l,e);return u=u.updateChild(d,n),new Jt(i.writeTree_.set(l,u))}else{const l=new Re(n),u=i.writeTree_.setTree(e,l);return new Jt(u)}}}function kc(i,e,n){let s=i;return at(n,(l,u)=>{s=Is(s,Ve(e,l),u)}),s}function Dm(i,e){if(fe(e))return Jt.empty();{const n=i.writeTree_.setTree(e,new Re(null));return new Jt(n)}}function Ic(i,e){return Or(i,e)!=null}function Or(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(Ct(n.path,e)):null}function Lm(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Be,(s,l)=>{e.push(new he(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new he(s,l.value))}),e}function er(i,e){if(fe(e))return i;{const n=Or(i,e);return n!=null?new Jt(new Re(n)):new Jt(i.writeTree_.subtree(e))}}function xc(i){return i.writeTree_.isEmpty()}function yi(i,e){return Pv(we(),i.writeTree_,e)}function Pv(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(L(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=Pv(Ve(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Ve(i,".priority"),s)),n}}/**
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
 */function hd(i,e){return Dv(e,i)}function JC(i,e,n,s,l){L(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=Is(i.visibleWrites,e,n)),i.lastWriteId=s}function ZC(i,e,n,s){L(s>i.lastWriteId,"Stacking an older merge on top of newer ones"),i.allWrites.push({path:e,children:n,writeId:s,visible:!0}),i.visibleWrites=kc(i.visibleWrites,e,n),i.lastWriteId=s}function ek(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function tk(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&nk(f,s.path)?l=!1:Ft(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return rk(i),!0;if(s.snap)i.visibleWrites=Dm(i.visibleWrites,s.path);else{const f=s.children;at(f,p=>{i.visibleWrites=Dm(i.visibleWrites,Ve(s.path,p))})}return!0}else return!1}function nk(i,e){if(i.snap)return Ft(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&Ft(Ve(i.path,n),e))return!0;return!1}function rk(i){i.visibleWrites=Rv(i.allWrites,ik,we()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function ik(i){return i.visible}function Rv(i,e,n){let s=Jt.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let f;if(u.snap)Ft(n,d)?(f=Ct(n,d),s=Is(s,f,u.snap)):Ft(d,n)&&(f=Ct(d,n),s=Is(s,we(),u.snap.getChild(f)));else if(u.children){if(Ft(n,d))f=Ct(n,d),s=kc(s,f,u.children);else if(Ft(d,n))if(f=Ct(d,n),fe(f))s=kc(s,we(),u.children);else{const p=fi(u.children,de(f));if(p){const g=p.getChild(Ae(f));s=Is(s,we(),g)}}}else throw Ei("WriteRecord should have .snap or .children")}}return s}function Av(i,e,n,s,l){if(!s&&!l){const u=Or(i.visibleWrites,e);if(u!=null)return u;{const d=er(i.visibleWrites,e);if(xc(d))return n;if(n==null&&!Ic(d,we()))return null;{const f=n||ee.EMPTY_NODE;return yi(d,f)}}}else{const u=er(i.visibleWrites,e);if(!l&&xc(u))return n;if(!l&&n==null&&!Ic(u,we()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Ft(g.path,e)||Ft(e,g.path))},f=Rv(i.allWrites,d,e),p=n||ee.EMPTY_NODE;return yi(f,p)}}}function sk(i,e,n){let s=ee.EMPTY_NODE;const l=Or(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Be,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=er(i.visibleWrites,e);return n.forEachChild(Be,(d,f)=>{const p=yi(er(u,new Te(d)),f);s=s.updateImmediateChild(d,p)}),Lm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=er(i.visibleWrites,e);return Lm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function ok(i,e,n,s,l){L(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Ve(e,n);if(Ic(i.visibleWrites,u))return null;{const d=er(i.visibleWrites,u);return xc(d)?l.getChild(n):yi(d,l.getChild(n))}}function lk(i,e,n,s){const l=Ve(e,n),u=Or(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=er(i.visibleWrites,l);return yi(d,s.getNode().getImmediateChild(n))}else return null}function ak(i,e){return Or(i.visibleWrites,e)}function uk(i,e,n,s,l,u,d){let f;const p=er(i.visibleWrites,e),g=Or(p,we());if(g!=null)f=g;else if(n!=null)f=yi(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const w=[],v=d.getCompare(),_=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let N=_.getNext();for(;N&&w.length<l;)v(N,s)!==0&&w.push(N),N=_.getNext();return w}else return[]}function ck(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function Pl(i,e,n,s){return Av(i.writeTree,i.treePath,e,n,s)}function fd(i,e){return sk(i.writeTree,i.treePath,e)}function Mm(i,e,n,s){return ok(i.writeTree,i.treePath,e,n,s)}function Rl(i,e){return ak(i.writeTree,Ve(i.treePath,e))}function dk(i,e,n,s,l,u){return uk(i.writeTree,i.treePath,e,n,s,l,u)}function pd(i,e,n){return lk(i.writeTree,i.treePath,e,n)}function Ov(i,e){return Dv(Ve(i.treePath,e),i.writeTree)}function Dv(i,e){return{treePath:i,writeTree:e}}/**
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
 */class hk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,Os(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,As(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,vi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,Os(s,e.snapshotNode,l.oldSnap));else throw Ei("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class fk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Lv=new fk;class md{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Pr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rr(this.viewCache_),u=dk(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
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
 */function pk(i){return{filter:i}}function mk(i,e){L(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function gk(i,e,n,s,l){const u=new hk;let d,f;if(n.type===Yt.OVERWRITE){const g=n;g.source.fromUser?d=Tc(i,e,g.path,g.snap,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!fe(g.path),d=Al(i,e,g.path,g.snap,s,l,f,u))}else if(n.type===Yt.MERGE){const g=n;g.source.fromUser?d=_k(i,e,g.path,g.children,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=Nc(i,e,g.path,g.children,s,l,f,u))}else if(n.type===Yt.ACK_USER_WRITE){const g=n;g.revert?d=Ek(i,e,g.path,s,l,u):d=yk(i,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Yt.LISTEN_COMPLETE)d=wk(i,e,n.path,s,u);else throw Ei("Unknown operation type: "+n.type);const p=u.getChanges();return vk(e,d,p),{viewCache:d,changes:p}}function vk(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Cc(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(Tv(Cc(e)))}}function Mv(i,e,n,s,l,u){const d=e.eventCache;if(Rl(s,n)!=null)return e;{let f,p;if(fe(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Rr(e),w=g instanceof ee?g:ee.EMPTY_NODE,v=fd(s,w);f=i.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const g=Pl(s,Rr(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=de(n);if(g===".priority"){L(tr(n)===1,"Can't have a priority with additional path components");const w=d.getNode();p=e.serverCache.getNode();const v=Mm(s,n,w,p);v!=null?f=i.filter.updatePriority(w,v):f=d.getNode()}else{const w=Ae(n);let v;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const _=Mm(s,n,d.getNode(),p);_!=null?v=d.getNode().getImmediateChild(g).updateChild(w,_):v=d.getNode().getImmediateChild(g)}else v=pd(s,g,e.serverCache);v!=null?f=i.filter.updateChild(d.getNode(),g,v,w,l,u):f=d.getNode()}}return ks(e,f,d.isFullyInitialized()||fe(n),i.filter.filtersNodes())}}function Al(i,e,n,s,l,u,d,f){const p=e.serverCache;let g;const w=d?i.filter:i.filter.getIndexedFilter();if(fe(n))g=w.updateFullNode(p.getNode(),s,null);else if(w.filtersNodes()&&!p.isFiltered()){const N=p.getNode().updateChild(n,s);g=w.updateFullNode(p.getNode(),N,null)}else{const N=de(n);if(!p.isCompleteForPath(n)&&tr(n)>1)return e;const R=Ae(n),z=p.getNode().getImmediateChild(N).updateChild(R,s);N===".priority"?g=w.updatePriority(p.getNode(),z):g=w.updateChild(p.getNode(),N,z,R,Lv,null)}const v=bv(e,g,p.isFullyInitialized()||fe(n),w.filtersNodes()),_=new md(l,v,u);return Mv(i,v,n,l,_,f)}function Tc(i,e,n,s,l,u,d){const f=e.eventCache;let p,g;const w=new md(l,e,u);if(fe(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),p=ks(e,g,!0,i.filter.filtersNodes());else{const v=de(n);if(v===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),p=ks(e,g,f.isFullyInitialized(),f.isFiltered());else{const _=Ae(n),N=f.getNode().getImmediateChild(v);let R;if(fe(_))R=s;else{const j=w.getCompleteChild(v);j!=null?rd(_)===".priority"&&j.getChild(wv(_)).isEmpty()?R=j:R=j.updateChild(_,s):R=ee.EMPTY_NODE}if(N.equals(R))p=e;else{const j=i.filter.updateChild(f.getNode(),v,R,_,w,d);p=ks(e,j,f.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function jm(i,e){return i.eventCache.isCompleteForChild(e)}function _k(i,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const w=Ve(n,p);jm(e,de(w))&&(f=Tc(i,f,w,g,l,u,d))}),s.foreach((p,g)=>{const w=Ve(n,p);jm(e,de(w))||(f=Tc(i,f,w,g,l,u,d))}),f}function Fm(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Nc(i,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;fe(n)?g=s:g=new Re(null).setTree(n,s);const w=e.serverCache.getNode();return g.children.inorderTraversal((v,_)=>{if(w.hasChild(v)){const N=e.serverCache.getNode().getImmediateChild(v),R=Fm(i,N,_);p=Al(i,p,new Te(v),R,l,u,d,f)}}),g.children.inorderTraversal((v,_)=>{const N=!e.serverCache.isCompleteForChild(v)&&_.value===null;if(!w.hasChild(v)&&!N){const R=e.serverCache.getNode().getImmediateChild(v),j=Fm(i,R,_);p=Al(i,p,new Te(v),j,l,u,d,f)}}),p}function yk(i,e,n,s,l,u,d){if(Rl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(fe(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Al(i,e,n,p.getNode().getChild(n),l,u,f,d);if(fe(n)){let g=new Re(null);return p.getNode().forEachChild(di,(w,v)=>{g=g.set(new Te(w),v)}),Nc(i,e,n,g,l,u,f,d)}else return e}else{let g=new Re(null);return s.foreach((w,v)=>{const _=Ve(n,w);p.isCompleteForPath(_)&&(g=g.set(w,p.getNode().getChild(_)))}),Nc(i,e,n,g,l,u,f,d)}}function wk(i,e,n,s,l){const u=e.serverCache,d=bv(e,u.getNode(),u.isFullyInitialized()||fe(n),u.isFiltered());return Mv(i,d,n,s,Lv,l)}function Ek(i,e,n,s,l,u){let d;if(Rl(s,n)!=null)return e;{const f=new md(s,e,l),p=e.eventCache.getNode();let g;if(fe(n)||de(n)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=Pl(s,Rr(e));else{const v=e.serverCache.getNode();L(v instanceof ee,"serverChildren would be complete if leaf node"),w=fd(s,v)}w=w,g=i.filter.updateFullNode(p,w,u)}else{const w=de(n);let v=pd(s,w,e.serverCache);v==null&&e.serverCache.isCompleteForChild(w)&&(v=p.getImmediateChild(w)),v!=null?g=i.filter.updateChild(p,w,v,Ae(n),f,u):e.eventCache.getNode().hasChild(w)?g=i.filter.updateChild(p,w,ee.EMPTY_NODE,Ae(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Pl(s,Rr(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||Rl(s,we())!=null,ks(e,g,d,i.filter.filtersNodes())}}/**
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
 */class Sk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new ld(s.getIndex()),u=UC(s);this.processor_=pk(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(ee.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(ee.EMPTY_NODE,f.getNode(),null),w=new Pr(p,d.isFullyInitialized(),l.filtersNodes()),v=new Pr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=Hl(v,w),this.eventGenerator_=new qC(this.query_)}get query(){return this.query_}}function Ck(i){return i.viewCache_.serverCache.getNode()}function kk(i,e){const n=Rr(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!fe(e)&&!n.getImmediateChild(de(e)).isEmpty())?n.getChild(e):null}function zm(i){return i.eventRegistrations_.length===0}function Ik(i,e){i.eventRegistrations_.push(e)}function Um(i,e,n){const s=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const l=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=l}else i.eventRegistrations_=[];return s}function Wm(i,e,n,s){e.type===Yt.MERGE&&e.source.queryId!==null&&(L(Rr(i.viewCache_),"We should always have a full cache before handling merges"),L(Cc(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=gk(i.processor_,l,e,n,s);return mk(i.processor_,u.viewCache),L(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,jv(i,u.changes,u.viewCache.eventCache.getNode(),null)}function xk(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Be,(u,d)=>{s.push(vi(u,d))}),n.isFullyInitialized()&&s.push(Tv(n.getNode())),jv(i,s,n.getNode(),e)}function jv(i,e,n,s){const l=s?[s]:i.eventRegistrations_;return KC(i.eventGenerator_,e,n,l)}/**
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
 */let Ol;class Tk{constructor(){this.views=new Map}}function Nk(i){L(!Ol,"__referenceConstructor has already been defined"),Ol=i}function bk(){return L(Ol,"Reference.ts has not been loaded"),Ol}function Pk(i){return i.views.size===0}function gd(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return L(u!=null,"SyncTree gave us an op for an invalid query."),Wm(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(Wm(d,e,n,s));return u}}function Rk(i,e,n,s,l){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let f=Pl(n,l?s:null),p=!1;f?p=!0:s instanceof ee?(f=fd(n,s),p=!1):(f=ee.EMPTY_NODE,p=!1);const g=Hl(new Pr(f,p,!1),new Pr(s,l,!1));return new Sk(e,g)}return d}function Ak(i,e,n,s,l,u){const d=Rk(i,e,s,l,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),Ik(d,n),xk(d,n)}function Ok(i,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=nr(i);if(l==="default")for(const[p,g]of i.views.entries())d=d.concat(Um(g,n,s)),zm(g)&&(i.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=i.views.get(l);p&&(d=d.concat(Um(p,n,s)),zm(p)&&(i.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!nr(i)&&u.push(new(bk())(e._repo,e._path)),{removed:u,events:d}}function Fv(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hi(i,e){let n=null;for(const s of i.views.values())n=n||kk(s,e);return n}function zv(i,e){if(e._queryParams.loadsAllData())return $l(i);{const s=e._queryIdentifier;return i.views.get(s)}}function Uv(i,e){return zv(i,e)!=null}function nr(i){return $l(i)!=null}function $l(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Dl;function Dk(i){L(!Dl,"__referenceConstructor has already been defined"),Dl=i}function Lk(){return L(Dl,"Reference.ts has not been loaded"),Dl}let Mk=1;class Vm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=ck(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wv(i,e,n,s,l){return JC(i.pendingWriteTree_,e,n,s,l),l?Ti(i,new br(ud(),e,n)):[]}function jk(i,e,n,s){ZC(i.pendingWriteTree_,e,n,s);const l=Re.fromObject(n);return Ti(i,new _i(ud(),e,l))}function Yn(i,e,n=!1){const s=ek(i.pendingWriteTree_,e);if(tk(i.pendingWriteTree_,e)){let u=new Re(null);return s.snap!=null?u=u.set(we(),!0):at(s.children,d=>{u=u.set(new Te(d),!0)}),Ti(i,new bl(s.path,u,n))}else return[]}function Gl(i,e,n){return Ti(i,new br(cd(),e,n))}function Fk(i,e,n){const s=Re.fromObject(n);return Ti(i,new _i(cd(),e,s))}function zk(i,e){return Ti(i,new Ls(cd(),e))}function Uk(i,e,n){const s=_d(i,n);if(s){const l=yd(s),u=l.path,d=l.queryId,f=Ct(u,e),p=new Ls(dd(d),f);return wd(i,u,p)}else return[]}function bc(i,e,n,s,l=!1){const u=e._path,d=i.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||Uv(d,e))){const p=Ok(d,e,n,s);Pk(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const w=g.findIndex(_=>_._queryParams.loadsAllData())!==-1,v=i.syncPointTree_.findOnPath(u,(_,N)=>nr(N));if(w&&!v){const _=i.syncPointTree_.subtree(u);if(!_.isEmpty()){const N=Bk(_);for(let R=0;R<N.length;++R){const j=N[R],z=j.query,pe=Hv(i,j);i.listenProvider_.startListening(xs(z),Ll(i,z),pe.hashFn,pe.onComplete)}}}!v&&g.length>0&&!s&&(w?i.listenProvider_.stopListening(xs(e),null):g.forEach(_=>{const N=i.queryToTagMap.get(ql(_));i.listenProvider_.stopListening(xs(_),N)}))}Hk(i,g)}return f}function Wk(i,e,n,s){const l=_d(i,s);if(l!=null){const u=yd(l),d=u.path,f=u.queryId,p=Ct(d,e),g=new br(dd(f),p,n);return wd(i,d,g)}else return[]}function Vk(i,e,n,s){const l=_d(i,s);if(l){const u=yd(l),d=u.path,f=u.queryId,p=Ct(d,e),g=Re.fromObject(n),w=new _i(dd(f),p,g);return wd(i,d,w)}else return[]}function Bm(i,e,n,s=!1){const l=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(l,(_,N)=>{const R=Ct(_,l);u=u||hi(N,R),d=d||nr(N)});let f=i.syncPointTree_.get(l);f?(d=d||nr(f),u=u||hi(f,we())):(f=new Tk,i.syncPointTree_=i.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=ee.EMPTY_NODE,i.syncPointTree_.subtree(l).foreachChild((N,R)=>{const j=hi(R,we());j&&(u=u.updateImmediateChild(N,j))}));const g=Uv(f,e);if(!g&&!e._queryParams.loadsAllData()){const _=ql(e);L(!i.queryToTagMap.has(_),"View does not exist, but we have a tag");const N=$k();i.queryToTagMap.set(_,N),i.tagToQueryMap.set(N,_)}const w=hd(i.pendingWriteTree_,l);let v=Ak(f,e,n,w,u,p);if(!g&&!d&&!s){const _=zv(f,e);v=v.concat(Gk(i,e,_))}return v}function vd(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const p=Ct(d,e),g=hi(f,p);if(g)return g});return Av(l,e,u,n,!0)}function Ti(i,e){return Vv(e,i.syncPointTree_,null,hd(i.pendingWriteTree_,we()))}function Vv(i,e,n,s){if(fe(i.path))return Bv(i,e,n,s);{const l=e.get(we());n==null&&l!=null&&(n=hi(l,we()));let u=[];const d=de(i.path),f=i.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,w=Ov(s,d);u=u.concat(Vv(f,p,g,w))}return l&&(u=u.concat(gd(l,i,s,n))),u}}function Bv(i,e,n,s){const l=e.get(we());n==null&&l!=null&&(n=hi(l,we()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=Ov(s,d),w=i.operationForChild(d);w&&(u=u.concat(Bv(w,f,p,g)))}),l&&(u=u.concat(gd(l,i,s,n))),u}function Hv(i,e){const n=e.query,s=Ll(i,n);return{hashFn:()=>(Ck(e)||ee.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?Uk(i,n._path,s):zk(i,n._path);{const u=FS(l,n);return bc(i,n,null,u)}}}}function Ll(i,e){const n=ql(e);return i.queryToTagMap.get(n)}function ql(i){return i._path.toString()+"$"+i._queryIdentifier}function _d(i,e){return i.tagToQueryMap.get(e)}function yd(i){const e=i.indexOf("$");return L(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new Te(i.substr(0,e))}}function wd(i,e,n){const s=i.syncPointTree_.get(e);L(s,"Missing sync point for query tag that we're tracking");const l=hd(i.pendingWriteTree_,e);return gd(s,n,l,null)}function Bk(i){return i.fold((e,n,s)=>{if(n&&nr(n))return[$l(n)];{let l=[];return n&&(l=Fv(n)),at(s,(u,d)=>{l=l.concat(d)}),l}})}function xs(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(Lk())(i._repo,i._path):i}function Hk(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=ql(s),u=i.queryToTagMap.get(l);i.queryToTagMap.delete(l),i.tagToQueryMap.delete(u)}}}function $k(){return Mk++}function Gk(i,e,n){const s=e._path,l=Ll(i,e),u=Hv(i,n),d=i.listenProvider_.startListening(xs(e),l,u.hashFn,u.onComplete),f=i.syncPointTree_.subtree(s);if(l)L(!nr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,w,v)=>{if(!fe(g)&&w&&nr(w))return[$l(w).query];{let _=[];return w&&(_=_.concat(Fv(w).map(N=>N.query))),at(v,(N,R)=>{_=_.concat(R)}),_}});for(let g=0;g<p.length;++g){const w=p[g];i.listenProvider_.stopListening(xs(w),Ll(i,w))}}return d}/**
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
 */class Ed{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ed(n)}node(){return this.node_}}class Sd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new Sd(this.syncTree_,n)}node(){return vd(this.syncTree_,this.path_)}}const qk=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},Hm=function(i,e,n){if(!i||typeof i!="object")return i;if(L(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return Kk(i[".sv"],e,n);if(typeof i[".sv"]=="object")return Qk(i[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},Kk=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+i)}},Qk=function(i,e,n){i.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&L(!1,"Unexpected increment value: "+s);const l=e.node();if(L(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},$v=function(i,e,n,s){return Cd(e,new Sd(n,i),s)},Gv=function(i,e,n){return Cd(i,new Ed(e),n)};function Cd(i,e,n){const s=i.getPriority().val(),l=Hm(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=Hm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new et(f,nt(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new et(l))),d.forEachChild(Be,(f,p)=>{const g=Cd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
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
 */class kd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Id(i,e){let n=e instanceof Te?e:new Te(e),s=i,l=de(n);for(;l!==null;){const u=fi(s.node.children,l)||{children:{},childCount:0};s=new kd(l,s,u),n=Ae(n),l=de(n)}return s}function Ni(i){return i.node.value}function qv(i,e){i.node.value=e,Pc(i)}function Kv(i){return i.node.childCount>0}function Yk(i){return Ni(i)===void 0&&!Kv(i)}function Kl(i,e){at(i.node.children,(n,s)=>{e(new kd(n,i,s))})}function Qv(i,e,n,s){n&&!s&&e(i),Kl(i,l=>{Qv(l,e,!0,s)})}function Xk(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function $s(i){return new Te(i.parent===null?i.name:$s(i.parent)+"/"+i.name)}function Pc(i){i.parent!==null&&Jk(i.parent,i.name,i)}function Jk(i,e,n){const s=Yk(n),l=cn(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,Pc(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,Pc(i))}/**
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
 */const Zk=/[\[\].#$\/\u0000-\u001F\u007F]/,eI=/[\[\].#$\u0000-\u001F\u007F]/,ac=10*1024*1024,xd=function(i){return typeof i=="string"&&i.length!==0&&!Zk.test(i)},Yv=function(i){return typeof i=="string"&&i.length!==0&&!eI.test(i)},tI=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Yv(i)},nI=function(i){return i===null||typeof i=="string"||typeof i=="number"&&!Jc(i)||i&&typeof i=="object"&&cn(i,".sv")},Xv=function(i,e,n,s){s&&e===void 0||Ql(Fl(i,"value"),e,n)},Ql=function(i,e,n){const s=n instanceof Te?new _C(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+wr(s));if(typeof e=="function")throw new Error(i+"contains a function "+wr(s)+" with contents = "+e.toString());if(Jc(e))throw new Error(i+"contains "+e.toString()+" "+wr(s));if(typeof e=="string"&&e.length>ac/3&&zl(e)>ac)throw new Error(i+"contains a string greater than "+ac+" utf8 bytes "+wr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(at(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!xd(d)))throw new Error(i+" contains an invalid key ("+d+") "+wr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yC(s,d),Ql(i,f,s),wC(s)}),l&&u)throw new Error(i+' contains ".value" child '+wr(s)+" in addition to actual children.")}},rI=function(i,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=Rs(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!xd(u[d]))throw new Error(i+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(vC);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Ft(l,s))throw new Error(i+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},iI=function(i,e,n,s){const l=Fl(i,"values");if(typeof e!="object"||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];at(e,(d,f)=>{const p=new Te(d);if(Ql(l,f,Ve(n,p)),rd(p)===".priority"&&!nI(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),rI(l,u)},Jv=function(i,e,n,s){if(!Yv(n))throw new Error(Fl(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sI=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Jv(i,e,n)},Td=function(i,e){if(de(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},oI=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!tI(n))throw new Error(Fl(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class lI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yl(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!id(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function Zv(i,e,n){Yl(i,n),e0(i,s=>id(s,e))}function Zt(i,e,n){Yl(i,n),e0(i,s=>Ft(s,e)||Ft(e,s))}function e0(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(aI(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function aI(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();Ss&&lt("event: "+n.toString()),xi(s)}}}/**
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
 */const uI="repo_interrupt",cI=25;class dI{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nl(),this.transactionQueueTree_=new kd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hI(i,e,n){if(i.stats_=td(i.repoInfo_),i.forceRestClient_||VS())i.server_=new Tl(i.repoInfo_,(s,l,u,d)=>{$m(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Gm(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Cn(i.repoInfo_,e,(s,l,u,d)=>{$m(i,s,l,u,d)},s=>{Gm(i,s)},s=>{fI(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=qS(i.repoInfo_,()=>new GC(i.stats_,i.server_)),i.infoData_=new WC,i.infoSyncTree_=new Vm({startListening:(s,l,u,d)=>{let f=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(f=Gl(i.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Nd(i,"connected",!1),i.serverSyncTree_=new Vm({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);Zt(i.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function t0(i){const n=i.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Xl(i){return qk({timestamp:t0(i)})}function $m(i,e,n,s,l){i.dataUpdateCount++;const u=new Te(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=gl(n,g=>nt(g));d=Vk(i.serverSyncTree_,u,p,l)}else{const p=nt(n);d=Wk(i.serverSyncTree_,u,p,l)}else if(s){const p=gl(n,g=>nt(g));d=Fk(i.serverSyncTree_,u,p)}else{const p=nt(n);d=Gl(i.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=wi(i,u)),Zt(i.eventQueue_,f,d)}function Gm(i,e){Nd(i,"connected",e),e===!1&&gI(i)}function fI(i,e){at(e,(n,s)=>{Nd(i,n,s)})}function Nd(i,e,n){const s=new Te("/.info/"+e),l=nt(n);i.infoData_.updateSnapshot(s,l);const u=Gl(i.infoSyncTree_,s,l);Zt(i.eventQueue_,s,u)}function bd(i){return i.nextWriteId_++}function pI(i,e,n,s,l){Jl(i,"set",{path:e.toString(),value:n,priority:s});const u=Xl(i),d=nt(n,s),f=vd(i.serverSyncTree_,e),p=Gv(d,f,u),g=bd(i),w=Wv(i.serverSyncTree_,e,p,g,!0);Yl(i.eventQueue_,w),i.server_.put(e.toString(),d.val(!0),(_,N)=>{const R=_==="ok";R||mt("set at "+e+" failed: "+_);const j=Yn(i.serverSyncTree_,g,!R);Zt(i.eventQueue_,e,j),Rc(i,l,_,N)});const v=Rd(i,e);wi(i,v),Zt(i.eventQueue_,v,[])}function mI(i,e,n,s){Jl(i,"update",{path:e.toString(),value:n});let l=!0;const u=Xl(i),d={};if(at(n,(f,p)=>{l=!1,d[f]=$v(Ve(e,f),nt(p),i.serverSyncTree_,u)}),l)lt("update() called with empty data.  Don't do anything."),Rc(i,s,"ok",void 0);else{const f=bd(i),p=jk(i.serverSyncTree_,e,d,f);Yl(i.eventQueue_,p),i.server_.merge(e.toString(),n,(g,w)=>{const v=g==="ok";v||mt("update at "+e+" failed: "+g);const _=Yn(i.serverSyncTree_,f,!v),N=_.length>0?wi(i,e):e;Zt(i.eventQueue_,N,_),Rc(i,s,g,w)}),at(n,g=>{const w=Rd(i,Ve(e,g));wi(i,w)}),Zt(i.eventQueue_,e,[])}}function gI(i){Jl(i,"onDisconnectEvents");const e=Xl(i),n=Nl();Sc(i.onDisconnect_,we(),(l,u)=>{const d=$v(l,u,i.serverSyncTree_,e);Nv(n,l,d)});let s=[];Sc(n,we(),(l,u)=>{s=s.concat(Gl(i.serverSyncTree_,l,u));const d=Rd(i,l);wi(i,d)}),i.onDisconnect_=Nl(),Zt(i.eventQueue_,we(),s)}function vI(i,e,n){let s;de(e._path)===".info"?s=Bm(i.infoSyncTree_,e,n):s=Bm(i.serverSyncTree_,e,n),Zv(i.eventQueue_,e._path,s)}function _I(i,e,n){let s;de(e._path)===".info"?s=bc(i.infoSyncTree_,e,n):s=bc(i.serverSyncTree_,e,n),Zv(i.eventQueue_,e._path,s)}function yI(i){i.persistentConnection_&&i.persistentConnection_.interrupt(uI)}function Jl(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),lt(n,...e)}function Rc(i,e,n,s){e&&xi(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function n0(i,e,n){return vd(i.serverSyncTree_,e,n)||ee.EMPTY_NODE}function Pd(i,e=i.transactionQueueTree_){if(e||Zl(i,e),Ni(e)){const n=i0(i,e);L(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&wI(i,$s(e),n)}else Kv(e)&&Kl(e,n=>{Pd(i,n)})}function wI(i,e,n){const s=n.map(g=>g.currentWriteId),l=n0(i,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const w=n[g];L(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const v=Ct(e,w.path);u=u.updateChild(v,w.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;i.server_.put(p.toString(),f,g=>{Jl(i,"transaction put response",{path:p.toString(),status:g});let w=[];if(g==="ok"){const v=[];for(let _=0;_<n.length;_++)n[_].status=2,w=w.concat(Yn(i.serverSyncTree_,n[_].currentWriteId)),n[_].onComplete&&v.push(()=>n[_].onComplete(null,!0,n[_].currentOutputSnapshotResolved)),n[_].unwatcher();Zl(i,Id(i.transactionQueueTree_,e)),Pd(i,i.transactionQueueTree_),Zt(i.eventQueue_,e,w);for(let _=0;_<v.length;_++)xi(v[_])}else{if(g==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{mt("transaction at "+p.toString()+" failed: "+g);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=g}wi(i,e)}},d)}function wi(i,e){const n=r0(i,e),s=$s(n),l=i0(i,n);return EI(i,l,s),s}function EI(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=Ct(n,p.path);let w=!1,v;if(L(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)w=!0,v=p.abortReason,l=l.concat(Yn(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=cI)w=!0,v="maxretry",l=l.concat(Yn(i.serverSyncTree_,p.currentWriteId,!0));else{const _=n0(i,p.path,d);p.currentInputSnapshot=_;const N=e[f].update(_.val());if(N!==void 0){Ql("transaction failed: Data returned ",N,p.path);let R=nt(N);typeof N=="object"&&N!=null&&cn(N,".priority")||(R=R.updatePriority(_.getPriority()));const z=p.currentWriteId,pe=Xl(i),Ee=Gv(R,_,pe);p.currentOutputSnapshotRaw=R,p.currentOutputSnapshotResolved=Ee,p.currentWriteId=bd(i),d.splice(d.indexOf(z),1),l=l.concat(Wv(i.serverSyncTree_,p.path,Ee,p.currentWriteId,p.applyLocally)),l=l.concat(Yn(i.serverSyncTree_,z,!0))}else w=!0,v="nodata",l=l.concat(Yn(i.serverSyncTree_,p.currentWriteId,!0))}Zt(i.eventQueue_,n,l),l=[],w&&(e[f].status=2,function(_){setTimeout(_,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}Zl(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)xi(s[f]);Pd(i,i.transactionQueueTree_)}function r0(i,e){let n,s=i.transactionQueueTree_;for(n=de(e);n!==null&&Ni(s)===void 0;)s=Id(s,n),e=Ae(e),n=de(e);return s}function i0(i,e){const n=[];return s0(i,e,n),n.sort((s,l)=>s.order-l.order),n}function s0(i,e,n){const s=Ni(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Kl(e,l=>{s0(i,l,n)})}function Zl(i,e){const n=Ni(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,qv(e,n.length>0?n:void 0)}Kl(e,s=>{Zl(i,s)})}function Rd(i,e){const n=$s(r0(i,e)),s=Id(i.transactionQueueTree_,e);return Xk(s,l=>{uc(i,l)}),uc(i,s),Qv(s,l=>{uc(i,l)}),n}function uc(i,e){const n=Ni(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(L(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(L(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Yn(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?qv(e,void 0):n.length=u+1,Zt(i.eventQueue_,$s(e),l);for(let d=0;d<s.length;d++)xi(s[d])}}/**
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
 */function SI(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function CI(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):mt(`Invalid query segment '${n}' in query '${i}'`)}return e}const qm=function(i,e){const n=kI(i),s=n.namespace;n.domain==="firebase.com"&&xn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&xn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||OS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new dv(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new Te(n.pathString)}},kI=function(i){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let w=i.indexOf("/");w===-1&&(w=i.length);let v=i.indexOf("?");v===-1&&(v=i.length),e=i.substring(0,Math.min(w,v)),w<v&&(l=SI(i.substring(w,v)));const _=CI(i.substring(Math.min(i.length,v)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const N=e.slice(0,g);if(N.toLowerCase()==="localhost")n="localhost";else if(N.split(".").length<=2)n=N;else{const R=e.indexOf(".");s=e.substring(0,R).toLowerCase(),n=e.substring(R+1),u=s}"ns"in _&&(u=_.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
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
 */const Km="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",II=function(){let i=0;const e=[];return function(n){const s=n===i;i=n;let l;const u=new Array(8);for(l=7;l>=0;l--)u[l]=Km.charAt(n%64),n=Math.floor(n/64);L(n===0,"Cannot push at time == 0");let d=u.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)d+=Km.charAt(e[l]);return L(d.length===20,"nextPushId: Length should be 20."),d}}();/**
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
 */class xI{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+rt(this.snapshot.exportVal())}}class TI{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class NI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ad{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return fe(this._path)?null:rd(this._path)}get ref(){return new sr(this._repo,this._path)}get _queryIdentifier(){const e=Am(this._queryParams),n=Zc(e);return n==="{}"?"default":n}get _queryObject(){return Am(this._queryParams)}isEqual(e){if(e=Pt(e),!(e instanceof Ad))return!1;const n=this._repo===e._repo,s=id(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+gC(this._path)}}class sr extends Ad{constructor(e,n){super(e,n,new ad,!1)}get parent(){const e=wv(this._path);return e===null?null:new sr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ml{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Te(e),s=Ms(this.ref,e);return new Ml(this._node.getChild(n),s,Be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Ml(l,Ms(this.ref,s),Be)))}hasChild(e){const n=new Te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function a2(i,e){return i=Pt(i),i._checkNotDeleted("ref"),e!==void 0?Ms(i._root,e):i._root}function Ms(i,e){return i=Pt(i),de(i._path)===null?sI("child","path",e):Jv("child","path",e),new sr(i._repo,Ve(i._path,e))}function u2(i,e){i=Pt(i),Td("push",i._path),Xv("push",e,i._path,!0);const n=t0(i._repo),s=II(n),l=Ms(i,s),u=Ms(i,s);let d;return e!=null?d=o0(u,e).then(()=>u):d=Promise.resolve(u),l.then=d.then.bind(d),l.catch=d.then.bind(d,void 0),l}function c2(i){return Td("remove",i._path),o0(i,null)}function o0(i,e){i=Pt(i),Td("set",i._path),Xv("set",e,i._path,!1);const n=new js;return pI(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}function d2(i,e){iI("update",e,i._path);const n=new js;return mI(i._repo,i._path,e,n.wrapCallback(()=>{})),n.promise}class Od{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new xI("value",this,new Ml(e.snapshotNode,new sr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new TI(this,e,n):null}matches(e){return e instanceof Od?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function bI(i,e,n,s,l){const u=new NI(n,void 0),d=new Od(u);return vI(i._repo,i,d),()=>_I(i._repo,i,d)}function h2(i,e,n,s){return bI(i,"value",e)}Nk(sr);Dk(sr);/**
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
 */const PI="FIREBASE_DATABASE_EMULATOR_HOST",Ac={};let RI=!1;function AI(i,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),d=Si(u);i.repoInfo_=new dv(e,d,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(i.authTokenProvider_=s)}function OI(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||xn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=qm(u,l),f=d.repoInfo,p;typeof process<"u"&&pm&&(p=pm[PI]),p?(u=`http://${p}?ns=${f.namespace}`,d=qm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new HS(i.name,i.options,e);oI("Invalid Firebase Database URL",d),fe(d.path)||xn("Database URL must point to the root of a Firebase Database (not including a child path).");const w=LI(f,i,g,new BS(i,n));return new MI(w,i)}function DI(i,e){const n=Ac[e];(!n||n[i.key]!==i)&&xn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),yI(i),delete n[i.key]}function LI(i,e,n,s){let l=Ac[e.name];l||(l={},Ac[e.name]=l);let u=l[i.toURLString()];return u&&xn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new dI(i,RI,n,s),l[i.toURLString()]=u,u}class MI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sr(this._repo,we())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xn("Cannot call "+e+" on a deleted database.")}}function jI(i=_g(),e){const n=Uc(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=e1("database");s&&FI(n,...s)}return n}function FI(i,e,n,s={}){i=Pt(i),i._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=i._repoInternal;if(i._instanceStarted){if(l===i._repoInternal.repoInfo_.host&&Ir(s,u.repoInfo_.emulatorOptions))return;xn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&xn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new dl(dl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:t1(s.mockUserToken,i.app.options.projectId);d=new dl(f)}Si(e)&&(cg(e),dg("Database",!0)),AI(u,l,s,d)}/**
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
 */function zI(i){TS(ki),pi(new xr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return OI(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Zn(mm,gm,i),Zn(mm,gm,"esm2017")}Cn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Cn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};zI();const UI={apiKey:"AIzaSyAMDp5WhCZy0tDz-_VcN3bz8HUW2Yp0lw0",authDomain:"personal-portfolio-37a0a.firebaseapp.com",databaseURL:"https://personal-portfolio-37a0a-default-rtdb.firebaseio.com",projectId:"personal-portfolio-37a0a",storageBucket:"personal-portfolio-37a0a.appspot.com",messagingSenderId:"695560029777",appId:"1:695560029777:web:2f666fd6fe7aa39b0c1a70",measurementId:"G-64P0PSRQN5"},l0=vg(UI),WI=IS(l0),f2=jI(l0),p2=new yn,a0=le.createContext();function VI({children:i}){const[e,n]=le.useState(null),[s,l]=le.useState(!0);le.useEffect(()=>WI.onAuthStateChanged(f=>{n(f),l(!1)}),[]);const u={currentUser:e,isAdmin:(e==null?void 0:e.email)==="e2340065@bit.uom.lk"};return S.jsx(a0.Provider,{value:u,children:!s&&i})}function m2(){return le.useContext(a0)}const BI="/portfolio_web/assets/bg3-jvrwDpUx.jpg",Qm="/portfolio_web/assets/my2-B1LD7IKY.png",HI="/portfolio_web/assets/robot2-B28E04_C.png",Ym="/portfolio_web/assets/slt-DXkN9Hb6.png",Xm="/portfolio_web/assets/txmeter-BnOptfgh.png",Jm="/portfolio_web/assets/cv-DNwIthtI.pdf",$I=()=>{const[i,e]=le.useState(!1),[n,s]=le.useState(0),[l,u]=le.useState("home"),[d,f]=le.useState(!0),[p,g]=le.useState(0),w=["Home","About","Education","Skills","Licenses & Certifications","Work Experience","Projects","Contact"];le.useEffect(()=>{const _=()=>{const N=window.scrollY;f(N<p),g(N),s(N);const j=w.map(z=>document.getElementById(z.toLowerCase().replace(/ & /g,"-").replace(" ","-"))).reduce((z,pe)=>pe&&pe.getBoundingClientRect().top>=100?pe.id:z,l);u(j)};return window.addEventListener("scroll",_),()=>window.removeEventListener("scroll",_)},[l,p]);const v=_=>{const N=document.getElementById(_);N?(N.scrollIntoView({behavior:"smooth"}),e(!1),u(_)):console.error(`Section with id "${_}" not found.`)};return S.jsxs("div",{className:"h-auto relative min-h-auto w-full bg-black overflow-hidden",children:[S.jsxs("div",{className:"absolute inset-0",children:[S.jsx("img",{src:BI,alt:"background",className:"w-full h-full object-cover opacity-100"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-purple-900/10 to-cyan-900/5"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-purple-900/15"})]}),S.jsx("div",{className:"relative min-h-screen flex flex-col justify-between items-center px-6 mt-4 mb-4 z-10",children:S.jsxs("div",{className:"rounded-[70px] w-full h-full p-2 border border-white/20  bg-gradient-to-br from-white/5 to-transparent shadow-2xl shadow-purple-500/10",children:[S.jsx("div",{className:"w-full text-center",children:S.jsx("h3",{className:"font-italiana text-white text-sm md:text-base font-extralight tracking-wider bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent",children:"Electronics Engineer | Software Developer | Designer"})}),S.jsxs("div",{className:"h-full flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto",children:[S.jsxs("div",{className:"hidden md:grid grid-cols-1 md:grid-cols-3 gap-[70px] w-full px-4 flex justify-center",children:[S.jsx("div",{className:"group relative w-60 md:w-80 mt-[300px] z-30",children:S.jsxs("div",{className:"flex flex-col items-center justify-center relative border border-white/20 bg-gradient-to-br from-black/60 via-black/40 to-purple-900/20 backdrop-blur-xl rounded-[2rem] p-1 transition-all duration-700  shadow-2xl shadow-purple-500/20 group-hover:shadow-orange-500/30",children:[S.jsx(zp,{className:"absolute top-4 left-4 text-cyan-400 text-2xl animate-spin-slow"}),S.jsxs("p",{className:"mb-3 font-italiana text-gray-300 text-[13px] md:text-sm text-center leading-relaxed relative z-10",children:[S.jsxs("div",{className:"relative overflow-hidden rounded-2xl mb-4 group/img",children:[S.jsx("img",{src:HI,alt:"profile",className:"w-full rounded-2xl transition-all duration-700 group-hover:scale-[1.1] group/img:brightness-110"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]}),S.jsx("span",{className:"bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent",children:"I CRAFT THE FUTURE ONE INNOVATIVE SOLUTION AT A TIME"})]}),S.jsxs("div",{className:"flex flex-col gap-3 relative z-10",children:[S.jsxs("button",{className:"button relative overflow-hidden group/btn bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40",onClick:()=>v("contact"),children:[S.jsx("span",{className:"relative z-10",children:"Connect with me"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"})]}),S.jsxs("button",{className:"button relative overflow-hidden group/btn bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all duration-500 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40",href:Jm,children:[S.jsx("span",{className:"relative z-10",children:"Download resume"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"})]})]})]})}),S.jsxs("div",{className:"relative flex flex-col items-center justify-center z-20",children:[S.jsxs("div",{className:"mb-[600px] relative text-center mt-3 z-10",children:[S.jsxs("div",{className:"flex items-center justify-center gap-2",children:[S.jsx("span",{className:"absolute top-6 left-12 font-italiana text-white/90 text-[20px] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",children:"At the"}),S.jsx("h1",{className:"font-italiana text-5xl md:text-[200px] text-white tracking-wide bg-gradient-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl",children:"intersection"})]}),S.jsx("p",{className:"absolute top-30 right-0 text-right font-italiana text-white text-sm md:text-lg tracking-wider bg-gradient-to-l from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent",children:"of electronics and code"})]}),S.jsx("div",{className:"absolute top-0 flex justify-center items-center z-20 mt-[100px]",children:S.jsx("div",{className:"relative group h-[80vh] w-[100vw] object-cover"})})]}),S.jsxs("div",{className:"absolute bottom-0 mt-[300px] group relative z-30",children:[S.jsx("div",{className:"mb-3 relative absolute top-40 left-24 group/card",children:S.jsxs("div",{className:"border border-white/30 bg-gradient-to-br from-black/70 via-purple-900/20 to-blue-900/10 backdrop-blur-2xl rounded-3xl p-4 transition-all duration-700 hover:scale-[1.12] hover:rotate-2 hover:shadow-2xl hover:shadow-purple-500/40 hover:border-purple-400/50 relative overflow-hidden",children:[S.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-blue-500/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"}),S.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-purple-400/15 to-pink-400/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 blur-lg"}),S.jsxs("div",{className:"absolute inset-0 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000",children:[S.jsx("div",{className:"absolute top-4 right-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"}),S.jsx("div",{className:"absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"}),S.jsx("div",{className:"absolute top-1/2 right-8 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-pulse delay-700"})]}),S.jsx("div",{className:"relative z-10",children:S.jsxs("div",{className:"flex items-center gap-6 mb-6",children:[S.jsxs("div",{className:"relative",children:[S.jsxs("div",{className:"w-16 h-16 rounded-2xl overflow-hidden transition-all duration-700 group-hover/card:scale-[1.2] group-hover/card:rotate-12 shadow-xl shadow-purple-500/30 border border-white/20",children:[S.jsx("img",{src:Ym,alt:"Masked Image",className:"w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 group-hover/card:brightness-110"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"})]}),S.jsx("div",{className:"absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 rounded-full animate-pulse shadow-xl shadow-green-400/60 border-2 border-white/30"}),S.jsx("div",{className:"absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400/50 to-emerald-400/50 rounded-full animate-ping"})]}),S.jsxs("div",{className:"flex flex-col flex-1",children:[S.jsx("div",{className:"flex items-center justify-between mb-2"}),S.jsx("h3",{className:"font-italiana text-white text-xs font-light tracking-wide bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent",children:"MOBITEL Market Edge Sales Management System"}),S.jsx(nl,{className:"w-5 h-5 text-white/60 transition-all duration-500 group-hover/card:text-cyan-400 group-hover/card:translate-x-2 group-hover/card:scale-110 drop-shadow-lg"}),S.jsx("p",{className:"text-gray-400 text-xs leading-relaxed bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent",children:"AI-Powered Sales System"}),S.jsxs("div",{className:"mt-3 flex gap-2",children:[S.jsx("span",{className:"px-3 py-1 bg-gradient-to-r from-purple-500/30 to-purple-600/20 text-purple-200 text-xs rounded-full border border-purple-400/40 shadow-lg shadow-purple-500/20 backdrop-blur-sm",children:"Enterprise"}),S.jsx("span",{className:"px-3 py-1 bg-gradient-to-r from-blue-500/30 to-blue-600/20 text-blue-200 text-xs rounded-full border border-blue-400/40 shadow-lg shadow-blue-500/20 backdrop-blur-sm",children:"Sales"})]})]})]})})]})}),S.jsx("div",{className:"relative absolute left-12 top-40 group/card",children:S.jsxs("div",{className:"border border-white/25 bg-gradient-to-br from-black/60 via-cyan-900/10 to-teal-900/5 backdrop-blur-xl rounded-2xl p-6 transition-all duration-600 hover:scale-[1.08] hover:-rotate-2 hover:shadow-xl hover:shadow-cyan-500/30 hover:border-cyan-400/40 relative overflow-hidden",children:[S.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/15 to-teal-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-600"}),S.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-400/5 to-yellow-400/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-600 blur-sm"}),S.jsx("div",{className:"relative z-10",children:S.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[S.jsxs("div",{className:"relative",children:[S.jsxs("div",{className:"w-12 h-12 rounded-xl overflow-hidden transition-all duration-600 group-hover/card:scale-[1.15] group-hover/card:-rotate-6 shadow-lg shadow-cyan-500/20 border border-white/20",children:[S.jsx("img",{src:Xm,alt:"Masked Image",className:"w-full h-full object-cover transition-transform duration-600 group-hover/card:scale-105 group-hover/card:brightness-110"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-orange-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"})]}),S.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 rounded-full shadow-lg shadow-orange-400/50 border border-white/30"})]}),S.jsxs("div",{className:"flex flex-col flex-1",children:[S.jsxs("div",{className:"flex items-center gap-3 mb-1",children:[S.jsx("h3",{className:"font-italiana text-white text-sm font-light tracking-wide bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent",children:"Taximeter"}),S.jsx(nl,{className:"w-4 h-4 text-white/60 transition-all duration-400 group-hover/card:text-cyan-400 group-hover/card:translate-x-1 group-hover/card:scale-110"})]}),S.jsx("p",{className:"text-gray-400 text-xs leading-relaxed bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent",children:"The Platform for Fuel Price Manager"}),S.jsx("div",{className:"mt-2",children:S.jsx("span",{className:"px-2 py-0.5 bg-gradient-to-r from-cyan-500/25 to-teal-500/20 text-cyan-200 text-xs rounded-md border border-cyan-400/30 shadow-md shadow-cyan-500/20 backdrop-blur-sm",children:"Platform"})})]})]})})]})})]}),S.jsxs("div",{className:"absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20 group",children:[S.jsx("div",{className:"absolute w-[100%] h-[100%] bg-gradient-to-r from-orange-500/25 via-purple-500/15 to-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"}),S.jsx("div",{className:"absolute w-[100%] h-[100%] bg-gradient-to-r from-blue-400/20 to-purple-400/15 rounded-full blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 delay-200"}),S.jsx("div",{className:"relative transition-all duration-700 group-hover:scale-[1.05] group-hover:brightness-110 drop-shadow-2xl",children:S.jsx("img",{src:Qm,alt:"my",loading:"lazy",className:"h-auto filter drop-shadow-2xl"})})]})]}),S.jsxs("div",{className:"md:hidden h-full flex flex-col items-center justify-center h-full w-full",children:[S.jsxs("div",{className:"w-full text-center mb-8",children:[S.jsx("h1",{className:"font-italiana text-5xl md:text-[200px] text-white tracking-wide bg-gradient-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-lg",children:"At the intersection"}),S.jsx("p",{className:"font-italiana text-white text-base md:text-lg tracking-wider bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent",children:"of electronics and code"})]}),S.jsx("div",{className:"group relative w-full max-w-xs mx-auto mb-5",children:S.jsxs("div",{className:"flex flex-col items-center justify-center relative border border-white/20 bg-gradient-to-br from-black/60 via-black/40 to-purple-900/20 backdrop-blur-xl rounded-[2rem] p-4 transition-all duration-500 group-hover:scale-[1.08] shadow-xl shadow-purple-500/20",children:[S.jsx("div",{className:"absolute inset-1 rounded-[1.8rem] bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),S.jsxs("p",{className:"mb-3 font-italiana text-gray-300 text-[13px] md:text-sm text-center leading-relaxed relative z-10",children:[S.jsxs("div",{className:"relative overflow-hidden rounded-2xl mb-4",children:[S.jsx(zp,{className:"absolute top-4 left-4 text-cyan-400 text-2xl animate-spin-slow"}),S.jsx("img",{src:Qm,alt:"profile",loading:"lazy",className:"w-full rounded-2xl transition-all duration-500 group-hover:scale-[1.05] group-hover:brightness-110"})]}),S.jsx("span",{className:"bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent",children:"I CRAFT THE FUTURE ONE INNOVATIVE SOLUTION AT A TIME"})]}),S.jsxs("div",{className:"flex flex-col gap-2 relative z-10",children:[S.jsx("button",{className:"button relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-500 shadow-lg shadow-purple-500/25",onClick:()=>v("contact"),children:"Connect with me"}),S.jsx("button",{className:"button relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all duration-500 shadow-lg shadow-orange-500/25",href:Jm,children:"Download resume"})]})]})}),S.jsxs("div",{className:"w-auto flex flex-col gap-3",children:[S.jsx("div",{className:"relative group/card",children:S.jsxs("div",{className:"border border-white/25 bg-gradient-to-br from-black/70 via-purple-900/15 to-blue-900/10 backdrop-blur-xl rounded-2xl p-4 transition-all duration-500 hover:scale-[1.08] hover:rotate-1 hover:shadow-xl hover:shadow-purple-500/25 hover:border-purple-400/40 relative overflow-hidden",children:[S.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/15 to-blue-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"}),S.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-blue-400/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 blur-sm"}),S.jsx("div",{className:"relative z-10",children:S.jsxs("div",{className:"flex items-center gap-4 mb-2 justify-center",children:[S.jsxs("div",{className:"relative",children:[S.jsxs("div",{className:"w-10 h-10 rounded-xl overflow-hidden transition-all duration-500 group-hover/card:scale-[1.15] group-hover/card:rotate-6 shadow-md shadow-purple-500/20 border border-white/20",children:[S.jsx("img",{src:Ym,alt:"Masked Image",className:"w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110 group-hover/card:brightness-110"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/15 to-blue-500/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"})]}),S.jsx("div",{className:"absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-md shadow-green-400/50 border border-white/30"})]}),S.jsxs("div",{className:"flex flex-col flex-1",children:[S.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[S.jsx("h3",{className:"font-italiana text-white text-xs font-light tracking-wide bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent",children:"MOBITEL Market Edge Sales Management System"}),S.jsx("div",{className:"flex items-center group/arrow",children:S.jsx(nl,{className:"w-3 h-3 text-white/70 transition-all duration-400 group-hover/card:text-purple-400 group-hover/card:translate-x-1 group-hover/card:scale-110"})})]}),S.jsx("p",{className:"text-gray-300 text-xs bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent",children:"AI-Powered Sales Solution"}),S.jsxs("div",{className:"mt-1.5 flex gap-1",children:[S.jsx("span",{className:"px-2 py-0.5 bg-gradient-to-r from-purple-500/25 to-purple-600/20 text-purple-200 text-xs rounded-full border border-purple-400/30 shadow-sm shadow-purple-500/20",children:"Enterprise"}),S.jsx("span",{className:"px-2 py-0.5 bg-gradient-to-r from-blue-500/25 to-blue-600/20 text-blue-200 text-xs rounded-full border border-blue-400/30 shadow-sm shadow-blue-500/20",children:"Sales"})]})]})]})})]})}),S.jsx("div",{className:"relative group/card",children:S.jsxs("div",{className:"border border-white/20 bg-gradient-to-br from-black/60 via-cyan-900/10 to-teal-900/5 backdrop-blur-lg rounded-2xl p-4 transition-all duration-450 hover:scale-[1.06] hover:-rotate-1 hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-400/30 relative overflow-hidden",children:[S.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-teal-500/8 opacity-0 group-hover/card:opacity-100 transition-opacity duration-450"}),S.jsx("div",{className:"relative z-10",children:S.jsxs("div",{className:"flex items-center gap-4 mb-2 justify-center",children:[S.jsxs("div",{className:"relative",children:[S.jsxs("div",{className:"w-10 h-10 rounded-xl overflow-hidden transition-all duration-450 group-hover/card:scale-[1.1] group-hover/card:-rotate-3 shadow-sm shadow-cyan-500/15 border border-white/15",children:[S.jsx("img",{src:Xm,alt:"Masked Image",className:"w-full h-full object-cover transition-transform duration-450 group-hover/card:scale-105 group-hover/card:brightness-110"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-orange-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-450"})]}),S.jsx("div",{className:"absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full shadow-sm shadow-orange-400/40 border border-white/20"})]}),S.jsxs("div",{className:"flex flex-col flex-1",children:[S.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[S.jsx("h3",{className:"font-italiana text-white text-xs font-light tracking-wide bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent",children:"Taximeter"}),S.jsx(nl,{className:"w-3 h-3 text-white/60 transition-all duration-350 group-hover/card:text-cyan-400 group-hover/card:translate-x-0.5 group-hover/card:scale-105"})]}),S.jsx("p",{className:"text-gray-400 text-xs leading-relaxed bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent",children:"The Platform for Fuel Price Manager"}),S.jsx("div",{className:"mt-1.5",children:S.jsx("span",{className:"px-2 py-0.5 bg-gradient-to-r from-cyan-500/20 to-teal-500/15 text-cyan-200 text-xs rounded-md border border-cyan-400/25 shadow-sm shadow-cyan-500/15 backdrop-blur-sm",children:"Platform"})})]})]})})]})})]})]})]})]})})]})},GI=le.lazy(()=>zt(()=>import("./HeaderBar-DnCbMg8-.js"),__vite__mapDeps([0,1,2,3]))),qI=le.lazy(()=>zt(()=>import("./AboutUs-DXVAbOUT.js"),__vite__mapDeps([4,5]))),KI=le.lazy(()=>zt(()=>import("./Education-zGi5C6J_.js"),__vite__mapDeps([6,7]))),QI=le.lazy(()=>zt(()=>import("./SkillsData-BqFuDxRN.js"),__vite__mapDeps([8,9,10,11,3]))),YI=le.lazy(()=>zt(()=>import("./LicensesCertifications-B8oVtNrE.js"),[])),XI=le.lazy(()=>zt(()=>import("./WorkExperience-BYMf32V6.js"),[])),JI=le.lazy(()=>zt(()=>import("./ProjectsData-sTQePxd0.js"),__vite__mapDeps([12,5,9,11,7,13]))),ZI=le.lazy(()=>zt(()=>import("./designpage-CwP_ghME.js"),__vite__mapDeps([14,9,7,10]))),e2=le.lazy(()=>zt(()=>import("./videos-Cue9tYsl.js"),[])),t2=le.lazy(()=>zt(()=>import("./Testimonials-HBR0IsbS.js"),__vite__mapDeps([15,2]))),n2=le.lazy(()=>zt(()=>import("./Contact-BFGJthKr.js"),[])),r2=le.lazy(()=>zt(()=>import("./Copyright-DBuHzo5f.js"),__vite__mapDeps([16,1,9,7])));function i2(){const[i,e]=le.useState(!1);return le.useEffect(()=>{const n=setTimeout(()=>{_y.init({duration:600,once:!0})},500);return()=>clearTimeout(n)},[]),le.useEffect(()=>{const n=setTimeout(()=>{e(!0)},800);return()=>clearTimeout(n)},[]),S.jsx(VI,{children:S.jsxs("div",{children:[S.jsx(Hy,{}),S.jsx(le.Suspense,{fallback:S.jsx(Oc,{}),children:S.jsx(GI,{})}),S.jsxs("main",{children:[S.jsx("section",{id:"home",children:S.jsx($I,{})}),i&&S.jsxs(S.Fragment,{children:[S.jsx(on,{id:"videosection",Component:e2}),S.jsx(on,{id:"about",Component:qI}),S.jsx(on,{id:"education-journey",Component:KI}),S.jsx(on,{id:"dexterity",Component:QI}),S.jsx(on,{id:"professional-designations",Component:YI}),S.jsx(on,{id:"professional-journey",Component:XI}),S.jsx(on,{id:"creative-ventures",Component:JI}),S.jsx(on,{id:"design-scape",Component:ZI}),S.jsx(on,{id:"testimonials",Component:t2}),S.jsx(on,{id:"contact",Component:n2})]})]}),S.jsx(le.Suspense,{fallback:S.jsx(Oc,{}),children:S.jsx(r2,{})})]})})}function on({id:i,Component:e}){return S.jsx("section",{id:i,children:S.jsx(le.Suspense,{fallback:S.jsx(Oc,{}),children:S.jsx(e,{})})})}function Oc(){return S.jsx("div",{className:"text-center py-10 text-gray-400 animate-pulse text-sm",children:"Loading..."})}hy.createRoot(document.getElementById("root")).render(S.jsx(le.StrictMode,{children:S.jsx(i2,{})}));export{nl as A,Py as F,rr as G,Cr as R,Ay as S,Vy as X,s2 as a,a2 as b,jl as c,f2 as d,WI as e,o2 as f,Zm as g,d2 as h,u2 as i,S as j,c2 as k,_y as l,Ty as m,by as n,h2 as o,p2 as p,Ry as q,le as r,l2 as s,Ny as t,m2 as u,xy as v};
