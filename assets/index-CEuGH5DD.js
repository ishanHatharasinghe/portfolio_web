const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeaderBar-X5Ejj-Pb.js","assets/myimage-DcsDA6se.js","assets/user-DdmnXfFs.js","assets/palette-DfhgC6ey.js","assets/Home-DvZsF9Bd.js","assets/arrow-right-DYdbcicO.js","assets/button-17grN15c.css","assets/AboutUs-BQ8wX3BM.js","assets/4-DHqHY9a9.js","assets/Education-B-gs5WMY.js","assets/external-link-Bl5oQWAB.js","assets/SkillsData-CAafONMH.js","assets/proxy-_zHLxoyl.js","assets/index-CtoeEnfL.js","assets/boxes-Cxg0g4ru.js","assets/ProjectsData-DIvysIJJ.js","assets/ProjectsData-CSRAChdu.css","assets/designpage-u2XoTw87.js","assets/Testimonials-Dx_Ey3oj.js","assets/Copyright-Dptal9px.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();var Qk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Hu={exports:{}},ps={},Bu={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function Xy(){if(Ip)return ue;Ip=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),_=Symbol.iterator;function y(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,F={};function W(C,P,X){this.props=C,this.context=P,this.refs=F,this.updater=X||N}W.prototype.isReactComponent={},W.prototype.setState=function(C,P){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,P,"setState")},W.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function we(){}we.prototype=W.prototype;function Ee(C,P,X){this.props=C,this.context=P,this.refs=F,this.updater=X||N}var Se=Ee.prototype=new we;Se.constructor=Ee,A(Se,W.prototype),Se.isPureReactComponent=!0;var Ce=Array.isArray,Be=Object.prototype.hasOwnProperty,fe={current:null},Le={key:!0,ref:!0,__self:!0,__source:!0};function le(C,P,X){var J,se={},oe=null,ie=null;if(P!=null)for(J in P.ref!==void 0&&(ie=P.ref),P.key!==void 0&&(oe=""+P.key),P)Be.call(P,J)&&!Le.hasOwnProperty(J)&&(se[J]=P[J]);var Z=arguments.length-2;if(Z===1)se.children=X;else if(1<Z){for(var ae=Array(Z),je=0;je<Z;je++)ae[je]=arguments[je+2];se.children=ae}if(C&&C.defaultProps)for(J in Z=C.defaultProps,Z)se[J]===void 0&&(se[J]=Z[J]);return{$$typeof:i,type:C,key:oe,ref:ie,props:se,_owner:fe.current}}function Me(C,P){return{$$typeof:i,type:C.type,key:P,ref:C.ref,props:C.props,_owner:C._owner}}function qe(C){return typeof C=="object"&&C!==null&&C.$$typeof===i}function q(C){var P={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(X){return P[X]})}var M=/\/+/g;function re(C,P){return typeof C=="object"&&C!==null&&C.key!=null?q(""+C.key):P.toString(36)}function K(C,P,X,J,se){var oe=typeof C;(oe==="undefined"||oe==="boolean")&&(C=null);var ie=!1;if(C===null)ie=!0;else switch(oe){case"string":case"number":ie=!0;break;case"object":switch(C.$$typeof){case i:case e:ie=!0}}if(ie)return ie=C,se=se(ie),C=J===""?"."+re(ie,0):J,Ce(se)?(X="",C!=null&&(X=C.replace(M,"$&/")+"/"),K(se,P,X,"",function(je){return je})):se!=null&&(qe(se)&&(se=Me(se,X+(!se.key||ie&&ie.key===se.key?"":(""+se.key).replace(M,"$&/")+"/")+C)),P.push(se)),1;if(ie=0,J=J===""?".":J+":",Ce(C))for(var Z=0;Z<C.length;Z++){oe=C[Z];var ae=J+re(oe,Z);ie+=K(oe,P,X,ae,se)}else if(ae=y(C),typeof ae=="function")for(C=ae.call(C),Z=0;!(oe=C.next()).done;)oe=oe.value,ae=J+re(oe,Z++),ie+=K(oe,P,X,ae,se);else if(oe==="object")throw P=String(C),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return ie}function Pe(C,P,X){if(C==null)return C;var J=[],se=0;return K(C,J,"","",function(oe){return P.call(X,oe,se++)}),J}function Re(C){if(C._status===-1){var P=C._result;P=P(),P.then(function(X){(C._status===0||C._status===-1)&&(C._status=1,C._result=X)},function(X){(C._status===0||C._status===-1)&&(C._status=2,C._result=X)}),C._status===-1&&(C._status=0,C._result=P)}if(C._status===1)return C._result.default;throw C._result}var ve={current:null},L={transition:null},G={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:L,ReactCurrentOwner:fe};function U(){throw Error("act(...) is not supported in production builds of React.")}return ue.Children={map:Pe,forEach:function(C,P,X){Pe(C,function(){P.apply(this,arguments)},X)},count:function(C){var P=0;return Pe(C,function(){P++}),P},toArray:function(C){return Pe(C,function(P){return P})||[]},only:function(C){if(!qe(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ue.Component=W,ue.Fragment=n,ue.Profiler=l,ue.PureComponent=Ee,ue.StrictMode=s,ue.Suspense=p,ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,ue.act=U,ue.cloneElement=function(C,P,X){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var J=A({},C.props),se=C.key,oe=C.ref,ie=C._owner;if(P!=null){if(P.ref!==void 0&&(oe=P.ref,ie=fe.current),P.key!==void 0&&(se=""+P.key),C.type&&C.type.defaultProps)var Z=C.type.defaultProps;for(ae in P)Be.call(P,ae)&&!Le.hasOwnProperty(ae)&&(J[ae]=P[ae]===void 0&&Z!==void 0?Z[ae]:P[ae])}var ae=arguments.length-2;if(ae===1)J.children=X;else if(1<ae){Z=Array(ae);for(var je=0;je<ae;je++)Z[je]=arguments[je+2];J.children=Z}return{$$typeof:i,type:C.type,key:se,ref:oe,props:J,_owner:ie}},ue.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:u,_context:C},C.Consumer=C},ue.createElement=le,ue.createFactory=function(C){var P=le.bind(null,C);return P.type=C,P},ue.createRef=function(){return{current:null}},ue.forwardRef=function(C){return{$$typeof:f,render:C}},ue.isValidElement=qe,ue.lazy=function(C){return{$$typeof:w,_payload:{_status:-1,_result:C},_init:Re}},ue.memo=function(C,P){return{$$typeof:g,type:C,compare:P===void 0?null:P}},ue.startTransition=function(C){var P=L.transition;L.transition={};try{C()}finally{L.transition=P}},ue.unstable_act=U,ue.useCallback=function(C,P){return ve.current.useCallback(C,P)},ue.useContext=function(C){return ve.current.useContext(C)},ue.useDebugValue=function(){},ue.useDeferredValue=function(C){return ve.current.useDeferredValue(C)},ue.useEffect=function(C,P){return ve.current.useEffect(C,P)},ue.useId=function(){return ve.current.useId()},ue.useImperativeHandle=function(C,P,X){return ve.current.useImperativeHandle(C,P,X)},ue.useInsertionEffect=function(C,P){return ve.current.useInsertionEffect(C,P)},ue.useLayoutEffect=function(C,P){return ve.current.useLayoutEffect(C,P)},ue.useMemo=function(C,P){return ve.current.useMemo(C,P)},ue.useReducer=function(C,P,X){return ve.current.useReducer(C,P,X)},ue.useRef=function(C){return ve.current.useRef(C)},ue.useState=function(C){return ve.current.useState(C)},ue.useSyncExternalStore=function(C,P,X){return ve.current.useSyncExternalStore(C,P,X)},ue.useTransition=function(){return ve.current.useTransition()},ue.version="18.3.1",ue}var kp;function Ac(){return kp||(kp=1,Bu.exports=Xy()),Bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function Jy(){if(Tp)return ps;Tp=1;var i=Ac(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var w,_={},y=null,N=null;g!==void 0&&(y=""+g),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(N=p.ref);for(w in p)s.call(p,w)&&!u.hasOwnProperty(w)&&(_[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)_[w]===void 0&&(_[w]=p[w]);return{$$typeof:e,type:f,key:y,ref:N,props:_,_owner:l.current}}return ps.Fragment=n,ps.jsx=d,ps.jsxs=d,ps}var Np;function Zy(){return Np||(Np=1,Hu.exports=Jy()),Hu.exports}var B=Zy(),me=Ac();const Sr=Gm(me);var tl={},$u={exports:{}},St={},Gu={exports:{}},qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function e0(){return Pp||(Pp=1,function(i){function e(L,G){var U=L.length;L.push(G);e:for(;0<U;){var C=U-1>>>1,P=L[C];if(0<l(P,G))L[C]=G,L[U]=P,U=C;else break e}}function n(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var G=L[0],U=L.pop();if(U!==G){L[0]=U;e:for(var C=0,P=L.length,X=P>>>1;C<X;){var J=2*(C+1)-1,se=L[J],oe=J+1,ie=L[oe];if(0>l(se,U))oe<P&&0>l(ie,se)?(L[C]=ie,L[oe]=U,C=oe):(L[C]=se,L[J]=U,C=J);else if(oe<P&&0>l(ie,U))L[C]=ie,L[oe]=U,C=oe;else break e}}return G}function l(L,G){var U=L.sortIndex-G.sortIndex;return U!==0?U:L.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var p=[],g=[],w=1,_=null,y=3,N=!1,A=!1,F=!1,W=typeof setTimeout=="function"?setTimeout:null,we=typeof clearTimeout=="function"?clearTimeout:null,Ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Se(L){for(var G=n(g);G!==null;){if(G.callback===null)s(g);else if(G.startTime<=L)s(g),G.sortIndex=G.expirationTime,e(p,G);else break;G=n(g)}}function Ce(L){if(F=!1,Se(L),!A)if(n(p)!==null)A=!0,Re(Be);else{var G=n(g);G!==null&&ve(Ce,G.startTime-L)}}function Be(L,G){A=!1,F&&(F=!1,we(le),le=-1),N=!0;var U=y;try{for(Se(G),_=n(p);_!==null&&(!(_.expirationTime>G)||L&&!q());){var C=_.callback;if(typeof C=="function"){_.callback=null,y=_.priorityLevel;var P=C(_.expirationTime<=G);G=i.unstable_now(),typeof P=="function"?_.callback=P:_===n(p)&&s(p),Se(G)}else s(p);_=n(p)}if(_!==null)var X=!0;else{var J=n(g);J!==null&&ve(Ce,J.startTime-G),X=!1}return X}finally{_=null,y=U,N=!1}}var fe=!1,Le=null,le=-1,Me=5,qe=-1;function q(){return!(i.unstable_now()-qe<Me)}function M(){if(Le!==null){var L=i.unstable_now();qe=L;var G=!0;try{G=Le(!0,L)}finally{G?re():(fe=!1,Le=null)}}else fe=!1}var re;if(typeof Ee=="function")re=function(){Ee(M)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,Pe=K.port2;K.port1.onmessage=M,re=function(){Pe.postMessage(null)}}else re=function(){W(M,0)};function Re(L){Le=L,fe||(fe=!0,re())}function ve(L,G){le=W(function(){L(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(L){L.callback=null},i.unstable_continueExecution=function(){A||N||(A=!0,Re(Be))},i.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<L?Math.floor(1e3/L):5},i.unstable_getCurrentPriorityLevel=function(){return y},i.unstable_getFirstCallbackNode=function(){return n(p)},i.unstable_next=function(L){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var U=y;y=G;try{return L()}finally{y=U}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(L,G){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var U=y;y=L;try{return G()}finally{y=U}},i.unstable_scheduleCallback=function(L,G,U){var C=i.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?C+U:C):U=C,L){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=U+P,L={id:w++,callback:G,priorityLevel:L,startTime:U,expirationTime:P,sortIndex:-1},U>C?(L.sortIndex=U,e(g,L),n(p)===null&&L===n(g)&&(F?(we(le),le=-1):F=!0,ve(Ce,U-C))):(L.sortIndex=P,e(p,L),A||N||(A=!0,Re(Be))),L},i.unstable_shouldYield=q,i.unstable_wrapCallback=function(L){var G=y;return function(){var U=y;y=G;try{return L.apply(this,arguments)}finally{y=U}}}}(qu)),qu}var Rp;function t0(){return Rp||(Rp=1,Gu.exports=e0()),Gu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function n0(){if(xp)return St;xp=1;var i=Ac(),e=t0();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},_={};function y(t){return p.call(_,t)?!0:p.call(w,t)?!1:g.test(t)?_[t]=!0:(w[t]=!0,!1)}function N(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,r,o,a){if(r===null||typeof r>"u"||N(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function F(t,r,o,a,c,h,m){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=m}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){W[t]=new F(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];W[r]=new F(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){W[t]=new F(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){W[t]=new F(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){W[t]=new F(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){W[t]=new F(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){W[t]=new F(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){W[t]=new F(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){W[t]=new F(t,5,!1,t.toLowerCase(),null,!1,!1)});var we=/[\-:]([a-z])/g;function Ee(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(we,Ee);W[r]=new F(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(we,Ee);W[r]=new F(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(we,Ee);W[r]=new F(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){W[t]=new F(t,1,!1,t.toLowerCase(),null,!1,!1)}),W.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){W[t]=new F(t,1,!1,t.toLowerCase(),null,!0,!0)});function Se(t,r,o,a){var c=W.hasOwnProperty(r)?W[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(A(r,o,c,a)&&(o=null),a||c===null?y(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var Ce=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Be=Symbol.for("react.element"),fe=Symbol.for("react.portal"),Le=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),Me=Symbol.for("react.profiler"),qe=Symbol.for("react.provider"),q=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),Pe=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),L=Symbol.iterator;function G(t){return t===null||typeof t!="object"?null:(t=L&&t[L]||t["@@iterator"],typeof t=="function"?t:null)}var U=Object.assign,C;function P(t){if(C===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);C=r&&r[1]||""}return`
`+C+t}var X=!1;function J(t,r){if(!t||X)return"";X=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(T){var a=T}Reflect.construct(t,[],r)}else{try{r.call()}catch(T){a=T}t.call(r.prototype)}else{try{throw Error()}catch(T){a=T}t()}}catch(T){if(T&&a&&typeof T.stack=="string"){for(var c=T.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,v=h.length-1;1<=m&&0<=v&&c[m]!==h[v];)v--;for(;1<=m&&0<=v;m--,v--)if(c[m]!==h[v]){if(m!==1||v!==1)do if(m--,v--,0>v||c[m]!==h[v]){var E=`
`+c[m].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=m&&0<=v);break}}}finally{X=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?P(t):""}function se(t){switch(t.tag){case 5:return P(t.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return t=J(t.type,!1),t;case 11:return t=J(t.type.render,!1),t;case 1:return t=J(t.type,!0),t;default:return""}}function oe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Le:return"Fragment";case fe:return"Portal";case Me:return"Profiler";case le:return"StrictMode";case re:return"Suspense";case K:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q:return(t.displayName||"Context")+".Consumer";case qe:return(t._context.displayName||"Context")+".Provider";case M:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pe:return r=t.displayName||null,r!==null?r:oe(t.type)||"Memo";case Re:r=t._payload,t=t._init;try{return oe(t(r))}catch{}}return null}function ie(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(r);case 8:return r===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Z(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ae(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function je(t){var r=ae(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function kt(t){t._valueTracker||(t._valueTracker=je(t))}function Ot(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=ae(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function ke(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ge(t,r){var o=r.checked;return U({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function it(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=Z(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function jt(t,r){r=r.checked,r!=null&&Se(t,"checked",r,!1)}function Dr(t,r){jt(t,r);var o=Z(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Jl(t,r.type,o):r.hasOwnProperty("defaultValue")&&Jl(t,r.type,Z(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Od(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Jl(t,r,o){(r!=="number"||ke(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ri=Array.isArray;function Lr(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+Z(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function Zl(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return U({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bd(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(Ri(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:Z(o)}}function Dd(t,r){var o=Z(r.value),a=Z(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Ld(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Md(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ea(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Md(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gs,Fd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Gs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function xi(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nv=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(t){nv.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Ai[r]=Ai[t]})});function Ud(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Ai.hasOwnProperty(t)&&Ai[t]?(""+r).trim():r+"px"}function zd(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=Ud(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var rv=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ta(t,r){if(r){if(rv[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function na(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ra=null;function ia(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sa=null,Mr=null,Fr=null;function jd(t){if(t=Zi(t)){if(typeof sa!="function")throw Error(n(280));var r=t.stateNode;r&&(r=go(r),sa(t.stateNode,t.type,r))}}function Wd(t){Mr?Fr?Fr.push(t):Fr=[t]:Mr=t}function Vd(){if(Mr){var t=Mr,r=Fr;if(Fr=Mr=null,jd(t),r)for(t=0;t<r.length;t++)jd(r[t])}}function Hd(t,r){return t(r)}function Bd(){}var oa=!1;function $d(t,r,o){if(oa)return t(r,o);oa=!0;try{return Hd(t,r,o)}finally{oa=!1,(Mr!==null||Fr!==null)&&(Bd(),Vd())}}function Oi(t,r){var o=t.stateNode;if(o===null)return null;var a=go(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var la=!1;if(f)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){la=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{la=!1}function iv(t,r,o,a,c,h,m,v,E){var T=Array.prototype.slice.call(arguments,3);try{r.apply(o,T)}catch(x){this.onError(x)}}var Di=!1,qs=null,Ks=!1,aa=null,sv={onError:function(t){Di=!0,qs=t}};function ov(t,r,o,a,c,h,m,v,E){Di=!1,qs=null,iv.apply(sv,arguments)}function lv(t,r,o,a,c,h,m,v,E){if(ov.apply(this,arguments),Di){if(Di){var T=qs;Di=!1,qs=null}else throw Error(n(198));Ks||(Ks=!0,aa=T)}}function sr(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Gd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function qd(t){if(sr(t)!==t)throw Error(n(188))}function av(t){var r=t.alternate;if(!r){if(r=sr(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return qd(c),t;if(h===a)return qd(c),r;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,v=c.child;v;){if(v===o){m=!0,o=c,a=h;break}if(v===a){m=!0,a=c,o=h;break}v=v.sibling}if(!m){for(v=h.child;v;){if(v===o){m=!0,o=h,a=c;break}if(v===a){m=!0,a=h,o=c;break}v=v.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Kd(t){return t=av(t),t!==null?Qd(t):null}function Qd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Qd(t);if(r!==null)return r;t=t.sibling}return null}var Yd=e.unstable_scheduleCallback,Xd=e.unstable_cancelCallback,uv=e.unstable_shouldYield,cv=e.unstable_requestPaint,$e=e.unstable_now,dv=e.unstable_getCurrentPriorityLevel,ua=e.unstable_ImmediatePriority,Jd=e.unstable_UserBlockingPriority,Qs=e.unstable_NormalPriority,hv=e.unstable_LowPriority,Zd=e.unstable_IdlePriority,Ys=null,tn=null;function fv(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Ys,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:gv,pv=Math.log,mv=Math.LN2;function gv(t){return t>>>=0,t===0?32:31-(pv(t)/mv|0)|0}var Xs=64,Js=4194304;function Li(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zs(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var v=m&~c;v!==0?a=Li(v):(h&=m,h!==0&&(a=Li(h)))}else m=o&~c,m!==0?a=Li(m):h!==0&&(a=Li(h));if(a===0)return 0;if(r!==0&&r!==a&&!(r&c)&&(c=a&-a,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if(a&4&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-Wt(r),c=1<<o,a|=t[o],r&=~c;return a}function _v(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vv(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Wt(h),v=1<<m,E=c[m];E===-1?(!(v&o)||v&a)&&(c[m]=_v(v,r)):E<=r&&(t.expiredLanes|=v),h&=~v}}function ca(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function eh(){var t=Xs;return Xs<<=1,!(Xs&4194240)&&(Xs=64),t}function da(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Mi(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Wt(r),t[r]=o}function yv(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Wt(o),h=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function ha(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-Wt(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var Ie=0;function th(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var nh,fa,rh,ih,sh,pa=!1,eo=[],Nn=null,Pn=null,Rn=null,Fi=new Map,Ui=new Map,xn=[],wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(t,r){switch(t){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Fi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(r.pointerId)}}function zi(t,r,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},r!==null&&(r=Zi(r),r!==null&&fa(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function Ev(t,r,o,a,c){switch(r){case"focusin":return Nn=zi(Nn,t,r,o,a,c),!0;case"dragenter":return Pn=zi(Pn,t,r,o,a,c),!0;case"mouseover":return Rn=zi(Rn,t,r,o,a,c),!0;case"pointerover":var h=c.pointerId;return Fi.set(h,zi(Fi.get(h)||null,t,r,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Ui.set(h,zi(Ui.get(h)||null,t,r,o,a,c)),!0}return!1}function lh(t){var r=or(t.target);if(r!==null){var o=sr(r);if(o!==null){if(r=o.tag,r===13){if(r=Gd(o),r!==null){t.blockedOn=r,sh(t.priority,function(){rh(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function to(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=ga(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);ra=a,o.target.dispatchEvent(a),ra=null}else return r=Zi(o),r!==null&&fa(r),t.blockedOn=o,!1;r.shift()}return!0}function ah(t,r,o){to(t)&&o.delete(r)}function Sv(){pa=!1,Nn!==null&&to(Nn)&&(Nn=null),Pn!==null&&to(Pn)&&(Pn=null),Rn!==null&&to(Rn)&&(Rn=null),Fi.forEach(ah),Ui.forEach(ah)}function ji(t,r){t.blockedOn===r&&(t.blockedOn=null,pa||(pa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sv)))}function Wi(t){function r(c){return ji(c,t)}if(0<eo.length){ji(eo[0],t);for(var o=1;o<eo.length;o++){var a=eo[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Nn!==null&&ji(Nn,t),Pn!==null&&ji(Pn,t),Rn!==null&&ji(Rn,t),Fi.forEach(r),Ui.forEach(r),o=0;o<xn.length;o++)a=xn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<xn.length&&(o=xn[0],o.blockedOn===null);)lh(o),o.blockedOn===null&&xn.shift()}var Ur=Ce.ReactCurrentBatchConfig,no=!0;function Cv(t,r,o,a){var c=Ie,h=Ur.transition;Ur.transition=null;try{Ie=1,ma(t,r,o,a)}finally{Ie=c,Ur.transition=h}}function Iv(t,r,o,a){var c=Ie,h=Ur.transition;Ur.transition=null;try{Ie=4,ma(t,r,o,a)}finally{Ie=c,Ur.transition=h}}function ma(t,r,o,a){if(no){var c=ga(t,r,o,a);if(c===null)ba(t,r,a,ro,o),oh(t,a);else if(Ev(c,t,r,o,a))a.stopPropagation();else if(oh(t,a),r&4&&-1<wv.indexOf(t)){for(;c!==null;){var h=Zi(c);if(h!==null&&nh(h),h=ga(t,r,o,a),h===null&&ba(t,r,a,ro,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else ba(t,r,a,null,o)}}var ro=null;function ga(t,r,o,a){if(ro=null,t=ia(a),t=or(t),t!==null)if(r=sr(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Gd(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ro=t,null}function uh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dv()){case ua:return 1;case Jd:return 4;case Qs:case hv:return 16;case Zd:return 536870912;default:return 16}default:return 16}}var An=null,_a=null,io=null;function ch(){if(io)return io;var t,r=_a,o=r.length,a,c="value"in An?An.value:An.textContent,h=c.length;for(t=0;t<o&&r[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&r[o-a]===c[h-a];a++);return io=c.slice(t,1<a?1-a:void 0)}function so(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function dh(){return!1}function Tt(t){function r(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(o=t[v],this[v]=o?o(h):h[v]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?oo:dh,this.isPropagationStopped=dh,this}return U(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),r}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},va=Tt(zr),Vi=U({},zr,{view:0,detail:0}),kv=Tt(Vi),ya,wa,Hi,lo=U({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hi&&(Hi&&t.type==="mousemove"?(ya=t.screenX-Hi.screenX,wa=t.screenY-Hi.screenY):wa=ya=0,Hi=t),ya)},movementY:function(t){return"movementY"in t?t.movementY:wa}}),hh=Tt(lo),Tv=U({},lo,{dataTransfer:0}),Nv=Tt(Tv),Pv=U({},Vi,{relatedTarget:0}),Ea=Tt(Pv),Rv=U({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=Tt(Rv),Av=U({},zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ov=Tt(Av),bv=U({},zr,{data:0}),fh=Tt(bv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Mv[t])?!!r[t]:!1}function Sa(){return Fv}var Uv=U({},Vi,{key:function(t){if(t.key){var r=Dv[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zv=Tt(Uv),jv=U({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=Tt(jv),Wv=U({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),Vv=Tt(Wv),Hv=U({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bv=Tt(Hv),$v=U({},lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gv=Tt($v),qv=[9,13,27,32],Ca=f&&"CompositionEvent"in window,Bi=null;f&&"documentMode"in document&&(Bi=document.documentMode);var Kv=f&&"TextEvent"in window&&!Bi,mh=f&&(!Ca||Bi&&8<Bi&&11>=Bi),gh=" ",_h=!1;function vh(t,r){switch(t){case"keyup":return qv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function Qv(t,r){switch(t){case"compositionend":return yh(r);case"keypress":return r.which!==32?null:(_h=!0,gh);case"textInput":return t=r.data,t===gh&&_h?null:t;default:return null}}function Yv(t,r){if(jr)return t==="compositionend"||!Ca&&vh(t,r)?(t=ch(),io=_a=An=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return mh&&r.locale!=="ko"?null:r.data;default:return null}}var Xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Xv[t.type]:r==="textarea"}function Eh(t,r,o,a){Wd(a),r=fo(r,"onChange"),0<r.length&&(o=new va("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var $i=null,Gi=null;function Jv(t){zh(t,0)}function ao(t){var r=$r(t);if(Ot(r))return t}function Zv(t,r){if(t==="change")return r}var Sh=!1;if(f){var Ia;if(f){var ka="oninput"in document;if(!ka){var Ch=document.createElement("div");Ch.setAttribute("oninput","return;"),ka=typeof Ch.oninput=="function"}Ia=ka}else Ia=!1;Sh=Ia&&(!document.documentMode||9<document.documentMode)}function Ih(){$i&&($i.detachEvent("onpropertychange",kh),Gi=$i=null)}function kh(t){if(t.propertyName==="value"&&ao(Gi)){var r=[];Eh(r,Gi,t,ia(t)),$d(Jv,r)}}function ey(t,r,o){t==="focusin"?(Ih(),$i=r,Gi=o,$i.attachEvent("onpropertychange",kh)):t==="focusout"&&Ih()}function ty(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ao(Gi)}function ny(t,r){if(t==="click")return ao(r)}function ry(t,r){if(t==="input"||t==="change")return ao(r)}function iy(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Vt=typeof Object.is=="function"?Object.is:iy;function qi(t,r){if(Vt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(r,c)||!Vt(t[c],r[c]))return!1}return!0}function Th(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nh(t,r){var o=Th(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Th(o)}}function Ph(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Ph(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Rh(){for(var t=window,r=ke();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=ke(t.document)}return r}function Ta(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function sy(t){var r=Rh(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Ph(o.ownerDocument.documentElement,o)){if(a!==null&&Ta(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Nh(o,h);var m=Nh(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(r),t.extend(m.node,m.offset)):(r.setEnd(m.node,m.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oy=f&&"documentMode"in document&&11>=document.documentMode,Wr=null,Na=null,Ki=null,Pa=!1;function xh(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Pa||Wr==null||Wr!==ke(a)||(a=Wr,"selectionStart"in a&&Ta(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ki&&qi(Ki,a)||(Ki=a,a=fo(Na,"onSelect"),0<a.length&&(r=new va("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=Wr)))}function uo(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Vr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Ra={},Ah={};f&&(Ah=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function co(t){if(Ra[t])return Ra[t];if(!Vr[t])return t;var r=Vr[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Ah)return Ra[t]=r[o];return t}var Oh=co("animationend"),bh=co("animationiteration"),Dh=co("animationstart"),Lh=co("transitionend"),Mh=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(t,r){Mh.set(t,r),u(r,[t])}for(var xa=0;xa<Fh.length;xa++){var Aa=Fh[xa],ly=Aa.toLowerCase(),ay=Aa[0].toUpperCase()+Aa.slice(1);On(ly,"on"+ay)}On(Oh,"onAnimationEnd"),On(bh,"onAnimationIteration"),On(Dh,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On(Lh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function Uh(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,lv(a,r,void 0,t),t.currentTarget=null}function zh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var m=a.length-1;0<=m;m--){var v=a[m],E=v.instance,T=v.currentTarget;if(v=v.listener,E!==h&&c.isPropagationStopped())break e;Uh(c,v,T),h=E}else for(m=0;m<a.length;m++){if(v=a[m],E=v.instance,T=v.currentTarget,v=v.listener,E!==h&&c.isPropagationStopped())break e;Uh(c,v,T),h=E}}}if(Ks)throw t=aa,Ks=!1,aa=null,t}function be(t,r){var o=r[za];o===void 0&&(o=r[za]=new Set);var a=t+"__bubble";o.has(a)||(jh(r,t,2,!1),o.add(a))}function Oa(t,r,o){var a=0;r&&(a|=4),jh(o,t,a,r)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Yi(t){if(!t[ho]){t[ho]=!0,s.forEach(function(o){o!=="selectionchange"&&(uy.has(o)||Oa(o,!1,t),Oa(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ho]||(r[ho]=!0,Oa("selectionchange",!1,r))}}function jh(t,r,o,a){switch(uh(r)){case 1:var c=Cv;break;case 4:c=Iv;break;default:c=ma}o=c.bind(null,r,o,t),c=void 0,!la||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function ba(t,r,o,a,c){var h=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var v=a.stateNode.containerInfo;if(v===c||v.nodeType===8&&v.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var E=m.tag;if((E===3||E===4)&&(E=m.stateNode.containerInfo,E===c||E.nodeType===8&&E.parentNode===c))return;m=m.return}for(;v!==null;){if(m=or(v),m===null)return;if(E=m.tag,E===5||E===6){a=h=m;continue e}v=v.parentNode}}a=a.return}$d(function(){var T=h,x=ia(o),O=[];e:{var R=Mh.get(t);if(R!==void 0){var z=va,V=t;switch(t){case"keypress":if(so(o)===0)break e;case"keydown":case"keyup":z=zv;break;case"focusin":V="focus",z=Ea;break;case"focusout":V="blur",z=Ea;break;case"beforeblur":case"afterblur":z=Ea;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Vv;break;case Oh:case bh:case Dh:z=xv;break;case Lh:z=Bv;break;case"scroll":z=kv;break;case"wheel":z=Gv;break;case"copy":case"cut":case"paste":z=Ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=ph}var H=(r&4)!==0,Ge=!H&&t==="scroll",I=H?R!==null?R+"Capture":null:R;H=[];for(var S=T,k;S!==null;){k=S;var b=k.stateNode;if(k.tag===5&&b!==null&&(k=b,I!==null&&(b=Oi(S,I),b!=null&&H.push(Xi(S,b,k)))),Ge)break;S=S.return}0<H.length&&(R=new z(R,V,null,o,x),O.push({event:R,listeners:H}))}}if(!(r&7)){e:{if(R=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",R&&o!==ra&&(V=o.relatedTarget||o.fromElement)&&(or(V)||V[dn]))break e;if((z||R)&&(R=x.window===x?x:(R=x.ownerDocument)?R.defaultView||R.parentWindow:window,z?(V=o.relatedTarget||o.toElement,z=T,V=V?or(V):null,V!==null&&(Ge=sr(V),V!==Ge||V.tag!==5&&V.tag!==6)&&(V=null)):(z=null,V=T),z!==V)){if(H=hh,b="onMouseLeave",I="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(H=ph,b="onPointerLeave",I="onPointerEnter",S="pointer"),Ge=z==null?R:$r(z),k=V==null?R:$r(V),R=new H(b,S+"leave",z,o,x),R.target=Ge,R.relatedTarget=k,b=null,or(x)===T&&(H=new H(I,S+"enter",V,o,x),H.target=k,H.relatedTarget=Ge,b=H),Ge=b,z&&V)t:{for(H=z,I=V,S=0,k=H;k;k=Hr(k))S++;for(k=0,b=I;b;b=Hr(b))k++;for(;0<S-k;)H=Hr(H),S--;for(;0<k-S;)I=Hr(I),k--;for(;S--;){if(H===I||I!==null&&H===I.alternate)break t;H=Hr(H),I=Hr(I)}H=null}else H=null;z!==null&&Wh(O,R,z,H,!1),V!==null&&Ge!==null&&Wh(O,Ge,V,H,!0)}}e:{if(R=T?$r(T):window,z=R.nodeName&&R.nodeName.toLowerCase(),z==="select"||z==="input"&&R.type==="file")var $=Zv;else if(wh(R))if(Sh)$=ry;else{$=ty;var Q=ey}else(z=R.nodeName)&&z.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&($=ny);if($&&($=$(t,T))){Eh(O,$,o,x);break e}Q&&Q(t,R,T),t==="focusout"&&(Q=R._wrapperState)&&Q.controlled&&R.type==="number"&&Jl(R,"number",R.value)}switch(Q=T?$r(T):window,t){case"focusin":(wh(Q)||Q.contentEditable==="true")&&(Wr=Q,Na=T,Ki=null);break;case"focusout":Ki=Na=Wr=null;break;case"mousedown":Pa=!0;break;case"contextmenu":case"mouseup":case"dragend":Pa=!1,xh(O,o,x);break;case"selectionchange":if(oy)break;case"keydown":case"keyup":xh(O,o,x)}var Y;if(Ca)e:{switch(t){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else jr?vh(t,o)&&(te="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(te="onCompositionStart");te&&(mh&&o.locale!=="ko"&&(jr||te!=="onCompositionStart"?te==="onCompositionEnd"&&jr&&(Y=ch()):(An=x,_a="value"in An?An.value:An.textContent,jr=!0)),Q=fo(T,te),0<Q.length&&(te=new fh(te,t,null,o,x),O.push({event:te,listeners:Q}),Y?te.data=Y:(Y=yh(o),Y!==null&&(te.data=Y)))),(Y=Kv?Qv(t,o):Yv(t,o))&&(T=fo(T,"onBeforeInput"),0<T.length&&(x=new fh("onBeforeInput","beforeinput",null,o,x),O.push({event:x,listeners:T}),x.data=Y))}zh(O,r)})}function Xi(t,r,o){return{instance:t,listener:r,currentTarget:o}}function fo(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Oi(t,o),h!=null&&a.unshift(Xi(t,h,c)),h=Oi(t,r),h!=null&&a.push(Xi(t,h,c))),t=t.return}return a}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wh(t,r,o,a,c){for(var h=r._reactName,m=[];o!==null&&o!==a;){var v=o,E=v.alternate,T=v.stateNode;if(E!==null&&E===a)break;v.tag===5&&T!==null&&(v=T,c?(E=Oi(o,h),E!=null&&m.unshift(Xi(o,E,v))):c||(E=Oi(o,h),E!=null&&m.push(Xi(o,E,v)))),o=o.return}m.length!==0&&t.push({event:r,listeners:m})}var cy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function Vh(t){return(typeof t=="string"?t:""+t).replace(cy,`
`).replace(dy,"")}function po(t,r,o){if(r=Vh(r),Vh(t)!==r&&o)throw Error(n(425))}function mo(){}var Da=null,La=null;function Ma(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Fa=typeof setTimeout=="function"?setTimeout:void 0,hy=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,fy=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(t){return Hh.resolve(null).then(t).catch(py)}:Fa;function py(t){setTimeout(function(){throw t})}function Ua(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Wi(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Wi(r)}function bn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Bh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Br=Math.random().toString(36).slice(2),nn="__reactFiber$"+Br,Ji="__reactProps$"+Br,dn="__reactContainer$"+Br,za="__reactEvents$"+Br,my="__reactListeners$"+Br,gy="__reactHandles$"+Br;function or(t){var r=t[nn];if(r)return r;for(var o=t.parentNode;o;){if(r=o[dn]||o[nn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Bh(t);t!==null;){if(o=t[nn])return o;t=Bh(t)}return r}t=o,o=t.parentNode}return null}function Zi(t){return t=t[nn]||t[dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function go(t){return t[Ji]||null}var ja=[],Gr=-1;function Dn(t){return{current:t}}function De(t){0>Gr||(t.current=ja[Gr],ja[Gr]=null,Gr--)}function xe(t,r){Gr++,ja[Gr]=t.current,t.current=r}var Ln={},ut=Dn(Ln),_t=Dn(!1),lr=Ln;function qr(t,r){var o=t.type.contextTypes;if(!o)return Ln;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=r[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function vt(t){return t=t.childContextTypes,t!=null}function _o(){De(_t),De(ut)}function $h(t,r,o){if(ut.current!==Ln)throw Error(n(168));xe(ut,r),xe(_t,o)}function Gh(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,ie(t)||"Unknown",c));return U({},o,a)}function vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ln,lr=ut.current,xe(ut,t),xe(_t,_t.current),!0}function qh(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Gh(t,r,lr),a.__reactInternalMemoizedMergedChildContext=t,De(_t),De(ut),xe(ut,t)):De(_t),xe(_t,o)}var hn=null,yo=!1,Wa=!1;function Kh(t){hn===null?hn=[t]:hn.push(t)}function _y(t){yo=!0,Kh(t)}function Mn(){if(!Wa&&hn!==null){Wa=!0;var t=0,r=Ie;try{var o=hn;for(Ie=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}hn=null,yo=!1}catch(c){throw hn!==null&&(hn=hn.slice(t+1)),Yd(ua,Mn),c}finally{Ie=r,Wa=!1}}return null}var Kr=[],Qr=0,wo=null,Eo=0,bt=[],Dt=0,ar=null,fn=1,pn="";function ur(t,r){Kr[Qr++]=Eo,Kr[Qr++]=wo,wo=t,Eo=r}function Qh(t,r,o){bt[Dt++]=fn,bt[Dt++]=pn,bt[Dt++]=ar,ar=t;var a=fn;t=pn;var c=32-Wt(a)-1;a&=~(1<<c),o+=1;var h=32-Wt(r)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,fn=1<<32-Wt(r)+c|o<<c|a,pn=h+t}else fn=1<<h|o<<c|a,pn=t}function Va(t){t.return!==null&&(ur(t,1),Qh(t,1,0))}function Ha(t){for(;t===wo;)wo=Kr[--Qr],Kr[Qr]=null,Eo=Kr[--Qr],Kr[Qr]=null;for(;t===ar;)ar=bt[--Dt],bt[Dt]=null,pn=bt[--Dt],bt[Dt]=null,fn=bt[--Dt],bt[Dt]=null}var Nt=null,Pt=null,Fe=!1,Ht=null;function Yh(t,r){var o=Ut(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Xh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Nt=t,Pt=bn(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Nt=t,Pt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ar!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Ut(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,Nt=t,Pt=null,!0):!1;default:return!1}}function Ba(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $a(t){if(Fe){var r=Pt;if(r){var o=r;if(!Xh(t,r)){if(Ba(t))throw Error(n(418));r=bn(o.nextSibling);var a=Nt;r&&Xh(t,r)?Yh(a,o):(t.flags=t.flags&-4097|2,Fe=!1,Nt=t)}}else{if(Ba(t))throw Error(n(418));t.flags=t.flags&-4097|2,Fe=!1,Nt=t}}}function Jh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function So(t){if(t!==Nt)return!1;if(!Fe)return Jh(t),Fe=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Ma(t.type,t.memoizedProps)),r&&(r=Pt)){if(Ba(t))throw Zh(),Error(n(418));for(;r;)Yh(t,r),r=bn(r.nextSibling)}if(Jh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Pt=bn(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Pt=null}}else Pt=Nt?bn(t.stateNode.nextSibling):null;return!0}function Zh(){for(var t=Pt;t;)t=bn(t.nextSibling)}function Yr(){Pt=Nt=null,Fe=!1}function Ga(t){Ht===null?Ht=[t]:Ht.push(t)}var vy=Ce.ReactCurrentBatchConfig;function es(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(m){var v=c.refs;m===null?delete v[h]:v[h]=m},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Co(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function ef(t){var r=t._init;return r(t._payload)}function tf(t){function r(I,S){if(t){var k=I.deletions;k===null?(I.deletions=[S],I.flags|=16):k.push(S)}}function o(I,S){if(!t)return null;for(;S!==null;)r(I,S),S=S.sibling;return null}function a(I,S){for(I=new Map;S!==null;)S.key!==null?I.set(S.key,S):I.set(S.index,S),S=S.sibling;return I}function c(I,S){return I=Bn(I,S),I.index=0,I.sibling=null,I}function h(I,S,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<S?(I.flags|=2,S):k):(I.flags|=2,S)):(I.flags|=1048576,S)}function m(I){return t&&I.alternate===null&&(I.flags|=2),I}function v(I,S,k,b){return S===null||S.tag!==6?(S=Fu(k,I.mode,b),S.return=I,S):(S=c(S,k),S.return=I,S)}function E(I,S,k,b){var $=k.type;return $===Le?x(I,S,k.props.children,b,k.key):S!==null&&(S.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Re&&ef($)===S.type)?(b=c(S,k.props),b.ref=es(I,S,k),b.return=I,b):(b=qo(k.type,k.key,k.props,null,I.mode,b),b.ref=es(I,S,k),b.return=I,b)}function T(I,S,k,b){return S===null||S.tag!==4||S.stateNode.containerInfo!==k.containerInfo||S.stateNode.implementation!==k.implementation?(S=Uu(k,I.mode,b),S.return=I,S):(S=c(S,k.children||[]),S.return=I,S)}function x(I,S,k,b,$){return S===null||S.tag!==7?(S=_r(k,I.mode,b,$),S.return=I,S):(S=c(S,k),S.return=I,S)}function O(I,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Fu(""+S,I.mode,k),S.return=I,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Be:return k=qo(S.type,S.key,S.props,null,I.mode,k),k.ref=es(I,null,S),k.return=I,k;case fe:return S=Uu(S,I.mode,k),S.return=I,S;case Re:var b=S._init;return O(I,b(S._payload),k)}if(Ri(S)||G(S))return S=_r(S,I.mode,k,null),S.return=I,S;Co(I,S)}return null}function R(I,S,k,b){var $=S!==null?S.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return $!==null?null:v(I,S,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Be:return k.key===$?E(I,S,k,b):null;case fe:return k.key===$?T(I,S,k,b):null;case Re:return $=k._init,R(I,S,$(k._payload),b)}if(Ri(k)||G(k))return $!==null?null:x(I,S,k,b,null);Co(I,k)}return null}function z(I,S,k,b,$){if(typeof b=="string"&&b!==""||typeof b=="number")return I=I.get(k)||null,v(S,I,""+b,$);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Be:return I=I.get(b.key===null?k:b.key)||null,E(S,I,b,$);case fe:return I=I.get(b.key===null?k:b.key)||null,T(S,I,b,$);case Re:var Q=b._init;return z(I,S,k,Q(b._payload),$)}if(Ri(b)||G(b))return I=I.get(k)||null,x(S,I,b,$,null);Co(S,b)}return null}function V(I,S,k,b){for(var $=null,Q=null,Y=S,te=S=0,Ze=null;Y!==null&&te<k.length;te++){Y.index>te?(Ze=Y,Y=null):Ze=Y.sibling;var _e=R(I,Y,k[te],b);if(_e===null){Y===null&&(Y=Ze);break}t&&Y&&_e.alternate===null&&r(I,Y),S=h(_e,S,te),Q===null?$=_e:Q.sibling=_e,Q=_e,Y=Ze}if(te===k.length)return o(I,Y),Fe&&ur(I,te),$;if(Y===null){for(;te<k.length;te++)Y=O(I,k[te],b),Y!==null&&(S=h(Y,S,te),Q===null?$=Y:Q.sibling=Y,Q=Y);return Fe&&ur(I,te),$}for(Y=a(I,Y);te<k.length;te++)Ze=z(Y,I,te,k[te],b),Ze!==null&&(t&&Ze.alternate!==null&&Y.delete(Ze.key===null?te:Ze.key),S=h(Ze,S,te),Q===null?$=Ze:Q.sibling=Ze,Q=Ze);return t&&Y.forEach(function($n){return r(I,$n)}),Fe&&ur(I,te),$}function H(I,S,k,b){var $=G(k);if(typeof $!="function")throw Error(n(150));if(k=$.call(k),k==null)throw Error(n(151));for(var Q=$=null,Y=S,te=S=0,Ze=null,_e=k.next();Y!==null&&!_e.done;te++,_e=k.next()){Y.index>te?(Ze=Y,Y=null):Ze=Y.sibling;var $n=R(I,Y,_e.value,b);if($n===null){Y===null&&(Y=Ze);break}t&&Y&&$n.alternate===null&&r(I,Y),S=h($n,S,te),Q===null?$=$n:Q.sibling=$n,Q=$n,Y=Ze}if(_e.done)return o(I,Y),Fe&&ur(I,te),$;if(Y===null){for(;!_e.done;te++,_e=k.next())_e=O(I,_e.value,b),_e!==null&&(S=h(_e,S,te),Q===null?$=_e:Q.sibling=_e,Q=_e);return Fe&&ur(I,te),$}for(Y=a(I,Y);!_e.done;te++,_e=k.next())_e=z(Y,I,te,_e.value,b),_e!==null&&(t&&_e.alternate!==null&&Y.delete(_e.key===null?te:_e.key),S=h(_e,S,te),Q===null?$=_e:Q.sibling=_e,Q=_e);return t&&Y.forEach(function(Yy){return r(I,Yy)}),Fe&&ur(I,te),$}function Ge(I,S,k,b){if(typeof k=="object"&&k!==null&&k.type===Le&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Be:e:{for(var $=k.key,Q=S;Q!==null;){if(Q.key===$){if($=k.type,$===Le){if(Q.tag===7){o(I,Q.sibling),S=c(Q,k.props.children),S.return=I,I=S;break e}}else if(Q.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Re&&ef($)===Q.type){o(I,Q.sibling),S=c(Q,k.props),S.ref=es(I,Q,k),S.return=I,I=S;break e}o(I,Q);break}else r(I,Q);Q=Q.sibling}k.type===Le?(S=_r(k.props.children,I.mode,b,k.key),S.return=I,I=S):(b=qo(k.type,k.key,k.props,null,I.mode,b),b.ref=es(I,S,k),b.return=I,I=b)}return m(I);case fe:e:{for(Q=k.key;S!==null;){if(S.key===Q)if(S.tag===4&&S.stateNode.containerInfo===k.containerInfo&&S.stateNode.implementation===k.implementation){o(I,S.sibling),S=c(S,k.children||[]),S.return=I,I=S;break e}else{o(I,S);break}else r(I,S);S=S.sibling}S=Uu(k,I.mode,b),S.return=I,I=S}return m(I);case Re:return Q=k._init,Ge(I,S,Q(k._payload),b)}if(Ri(k))return V(I,S,k,b);if(G(k))return H(I,S,k,b);Co(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,S!==null&&S.tag===6?(o(I,S.sibling),S=c(S,k),S.return=I,I=S):(o(I,S),S=Fu(k,I.mode,b),S.return=I,I=S),m(I)):o(I,S)}return Ge}var Xr=tf(!0),nf=tf(!1),Io=Dn(null),ko=null,Jr=null,qa=null;function Ka(){qa=Jr=ko=null}function Qa(t){var r=Io.current;De(Io),t._currentValue=r}function Ya(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function Zr(t,r){ko=t,qa=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(yt=!0),t.firstContext=null)}function Lt(t){var r=t._currentValue;if(qa!==t)if(t={context:t,memoizedValue:r,next:null},Jr===null){if(ko===null)throw Error(n(308));Jr=t,ko.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return r}var cr=null;function Xa(t){cr===null?cr=[t]:cr.push(t)}function rf(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,Xa(r)):(o.next=c.next,c.next=o),r.interleaved=o,mn(t,a)}function mn(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Fn=!1;function Ja(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Un(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,pe&2){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,mn(t,o)}return c=a.interleaved,c===null?(r.next=r,Xa(a)):(r.next=c.next,c.next=r),a.interleaved=r,mn(t,o)}function To(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ha(t,o)}}function of(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=r:h=h.next=r}else c=h=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function No(t,r,o,a){var c=t.updateQueue;Fn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,v=c.shared.pending;if(v!==null){c.shared.pending=null;var E=v,T=E.next;E.next=null,m===null?h=T:m.next=T,m=E;var x=t.alternate;x!==null&&(x=x.updateQueue,v=x.lastBaseUpdate,v!==m&&(v===null?x.firstBaseUpdate=T:v.next=T,x.lastBaseUpdate=E))}if(h!==null){var O=c.baseState;m=0,x=T=E=null,v=h;do{var R=v.lane,z=v.eventTime;if((a&R)===R){x!==null&&(x=x.next={eventTime:z,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var V=t,H=v;switch(R=r,z=o,H.tag){case 1:if(V=H.payload,typeof V=="function"){O=V.call(z,O,R);break e}O=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=H.payload,R=typeof V=="function"?V.call(z,O,R):V,R==null)break e;O=U({},O,R);break e;case 2:Fn=!0}}v.callback!==null&&v.lane!==0&&(t.flags|=64,R=c.effects,R===null?c.effects=[v]:R.push(v))}else z={eventTime:z,lane:R,tag:v.tag,payload:v.payload,callback:v.callback,next:null},x===null?(T=x=z,E=O):x=x.next=z,m|=R;if(v=v.next,v===null){if(v=c.shared.pending,v===null)break;R=v,v=R.next,R.next=null,c.lastBaseUpdate=R,c.shared.pending=null}}while(!0);if(x===null&&(E=O),c.baseState=E,c.firstBaseUpdate=T,c.lastBaseUpdate=x,r=c.shared.interleaved,r!==null){c=r;do m|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);fr|=m,t.lanes=m,t.memoizedState=O}}function lf(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var ts={},rn=Dn(ts),ns=Dn(ts),rs=Dn(ts);function dr(t){if(t===ts)throw Error(n(174));return t}function Za(t,r){switch(xe(rs,r),xe(ns,t),xe(rn,ts),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ea(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=ea(r,t)}De(rn),xe(rn,r)}function ei(){De(rn),De(ns),De(rs)}function af(t){dr(rs.current);var r=dr(rn.current),o=ea(r,t.type);r!==o&&(xe(ns,t),xe(rn,o))}function eu(t){ns.current===t&&(De(rn),De(ns))}var Ue=Dn(0);function Po(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var tu=[];function nu(){for(var t=0;t<tu.length;t++)tu[t]._workInProgressVersionPrimary=null;tu.length=0}var Ro=Ce.ReactCurrentDispatcher,ru=Ce.ReactCurrentBatchConfig,hr=0,ze=null,Qe=null,Xe=null,xo=!1,is=!1,ss=0,yy=0;function ct(){throw Error(n(321))}function iu(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!Vt(t[o],r[o]))return!1;return!0}function su(t,r,o,a,c,h){if(hr=h,ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ro.current=t===null||t.memoizedState===null?Cy:Iy,t=o(a,c),is){h=0;do{if(is=!1,ss=0,25<=h)throw Error(n(301));h+=1,Xe=Qe=null,r.updateQueue=null,Ro.current=ky,t=o(a,c)}while(is)}if(Ro.current=bo,r=Qe!==null&&Qe.next!==null,hr=0,Xe=Qe=ze=null,xo=!1,r)throw Error(n(300));return t}function ou(){var t=ss!==0;return ss=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?ze.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Mt(){if(Qe===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var r=Xe===null?ze.memoizedState:Xe.next;if(r!==null)Xe=r,Qe=t;else{if(t===null)throw Error(n(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Xe===null?ze.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function os(t,r){return typeof r=="function"?r(t):r}function lu(t){var r=Mt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=Qe,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var v=m=null,E=null,T=h;do{var x=T.lane;if((hr&x)===x)E!==null&&(E=E.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),a=T.hasEagerState?T.eagerState:t(a,T.action);else{var O={lane:x,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};E===null?(v=E=O,m=a):E=E.next=O,ze.lanes|=x,fr|=x}T=T.next}while(T!==null&&T!==h);E===null?m=a:E.next=v,Vt(a,r.memoizedState)||(yt=!0),r.memoizedState=a,r.baseState=m,r.baseQueue=E,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,ze.lanes|=h,fr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function au(t){var r=Mt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=r.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);Vt(h,r.memoizedState)||(yt=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function uf(){}function cf(t,r){var o=ze,a=Mt(),c=r(),h=!Vt(a.memoizedState,c);if(h&&(a.memoizedState=c,yt=!0),a=a.queue,uu(ff.bind(null,o,a,t),[t]),a.getSnapshot!==r||h||Xe!==null&&Xe.memoizedState.tag&1){if(o.flags|=2048,ls(9,hf.bind(null,o,a,c,r),void 0,null),Je===null)throw Error(n(349));hr&30||df(o,r,c)}return c}function df(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=ze.updateQueue,r===null?(r={lastEffect:null,stores:null},ze.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function hf(t,r,o,a){r.value=o,r.getSnapshot=a,pf(r)&&mf(t)}function ff(t,r,o){return o(function(){pf(r)&&mf(t)})}function pf(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!Vt(t,o)}catch{return!0}}function mf(t){var r=mn(t,1);r!==null&&qt(r,t,1,-1)}function gf(t){var r=sn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},r.queue=t,t=t.dispatch=Sy.bind(null,ze,t),[r.memoizedState,t]}function ls(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=ze.updateQueue,r===null?(r={lastEffect:null,stores:null},ze.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function _f(){return Mt().memoizedState}function Ao(t,r,o,a){var c=sn();ze.flags|=t,c.memoizedState=ls(1|r,o,void 0,a===void 0?null:a)}function Oo(t,r,o,a){var c=Mt();a=a===void 0?null:a;var h=void 0;if(Qe!==null){var m=Qe.memoizedState;if(h=m.destroy,a!==null&&iu(a,m.deps)){c.memoizedState=ls(r,o,h,a);return}}ze.flags|=t,c.memoizedState=ls(1|r,o,h,a)}function vf(t,r){return Ao(8390656,8,t,r)}function uu(t,r){return Oo(2048,8,t,r)}function yf(t,r){return Oo(4,2,t,r)}function wf(t,r){return Oo(4,4,t,r)}function Ef(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Sf(t,r,o){return o=o!=null?o.concat([t]):null,Oo(4,4,Ef.bind(null,r,t),o)}function cu(){}function Cf(t,r){var o=Mt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&iu(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function If(t,r){var o=Mt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&iu(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function kf(t,r,o){return hr&21?(Vt(o,r)||(o=eh(),ze.lanes|=o,fr|=o,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=o)}function wy(t,r){var o=Ie;Ie=o!==0&&4>o?o:4,t(!0);var a=ru.transition;ru.transition={};try{t(!1),r()}finally{Ie=o,ru.transition=a}}function Tf(){return Mt().memoizedState}function Ey(t,r,o){var a=Vn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Nf(t))Pf(r,o);else if(o=rf(t,r,o,a),o!==null){var c=pt();qt(o,t,a,c),Rf(o,r,a)}}function Sy(t,r,o){var a=Vn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Nf(t))Pf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var m=r.lastRenderedState,v=h(m,o);if(c.hasEagerState=!0,c.eagerState=v,Vt(v,m)){var E=r.interleaved;E===null?(c.next=c,Xa(r)):(c.next=E.next,E.next=c),r.interleaved=c;return}}catch{}finally{}o=rf(t,r,c,a),o!==null&&(c=pt(),qt(o,t,a,c),Rf(o,r,a))}}function Nf(t){var r=t.alternate;return t===ze||r!==null&&r===ze}function Pf(t,r){is=xo=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Rf(t,r,o){if(o&4194240){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ha(t,o)}}var bo={readContext:Lt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},Cy={readContext:Lt,useCallback:function(t,r){return sn().memoizedState=[t,r===void 0?null:r],t},useContext:Lt,useEffect:vf,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Ao(4194308,4,Ef.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Ao(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ao(4,2,t,r)},useMemo:function(t,r){var o=sn();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=sn();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=Ey.bind(null,ze,t),[a.memoizedState,t]},useRef:function(t){var r=sn();return t={current:t},r.memoizedState=t},useState:gf,useDebugValue:cu,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=gf(!1),r=t[0];return t=wy.bind(null,t[1]),sn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=ze,c=sn();if(Fe){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Je===null)throw Error(n(349));hr&30||df(a,r,o)}c.memoizedState=o;var h={value:o,getSnapshot:r};return c.queue=h,vf(ff.bind(null,a,h,t),[t]),a.flags|=2048,ls(9,hf.bind(null,a,h,o,r),void 0,null),o},useId:function(){var t=sn(),r=Je.identifierPrefix;if(Fe){var o=pn,a=fn;o=(a&~(1<<32-Wt(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=ss++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=yy++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Iy={readContext:Lt,useCallback:Cf,useContext:Lt,useEffect:uu,useImperativeHandle:Sf,useInsertionEffect:yf,useLayoutEffect:wf,useMemo:If,useReducer:lu,useRef:_f,useState:function(){return lu(os)},useDebugValue:cu,useDeferredValue:function(t){var r=Mt();return kf(r,Qe.memoizedState,t)},useTransition:function(){var t=lu(os)[0],r=Mt().memoizedState;return[t,r]},useMutableSource:uf,useSyncExternalStore:cf,useId:Tf,unstable_isNewReconciler:!1},ky={readContext:Lt,useCallback:Cf,useContext:Lt,useEffect:uu,useImperativeHandle:Sf,useInsertionEffect:yf,useLayoutEffect:wf,useMemo:If,useReducer:au,useRef:_f,useState:function(){return au(os)},useDebugValue:cu,useDeferredValue:function(t){var r=Mt();return Qe===null?r.memoizedState=t:kf(r,Qe.memoizedState,t)},useTransition:function(){var t=au(os)[0],r=Mt().memoizedState;return[t,r]},useMutableSource:uf,useSyncExternalStore:cf,useId:Tf,unstable_isNewReconciler:!1};function Bt(t,r){if(t&&t.defaultProps){r=U({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function du(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:U({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Do={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=pt(),c=Vn(t),h=gn(a,c);h.payload=r,o!=null&&(h.callback=o),r=Un(t,h,c),r!==null&&(qt(r,t,c,a),To(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=pt(),c=Vn(t),h=gn(a,c);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=Un(t,h,c),r!==null&&(qt(r,t,c,a),To(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=pt(),a=Vn(t),c=gn(o,a);c.tag=2,r!=null&&(c.callback=r),r=Un(t,c,a),r!==null&&(qt(r,t,a,o),To(r,t,a))}};function xf(t,r,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):r.prototype&&r.prototype.isPureReactComponent?!qi(o,a)||!qi(c,h):!0}function Af(t,r,o){var a=!1,c=Ln,h=r.contextType;return typeof h=="object"&&h!==null?h=Lt(h):(c=vt(r)?lr:ut.current,a=r.contextTypes,h=(a=a!=null)?qr(t,c):Ln),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Do,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function Of(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&Do.enqueueReplaceState(r,r.state,null)}function hu(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Ja(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=Lt(h):(h=vt(r)?lr:ut.current,c.context=qr(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(du(t,r,h,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&Do.enqueueReplaceState(c,c.state,null),No(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,r){try{var o="",a=r;do o+=se(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function fu(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function pu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Ty=typeof WeakMap=="function"?WeakMap:Map;function bf(t,r,o){o=gn(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){Wo||(Wo=!0,Ru=a),pu(t,r)},o}function Df(t,r,o){o=gn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){pu(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){pu(t,r),typeof a!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var m=r.stack;this.componentDidCatch(r.value,{componentStack:m!==null?m:""})}),o}function Lf(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Ty;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=jy.bind(null,t,r,o),r.then(t,t))}function Mf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Ff(t,r,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=gn(-1,1),r.tag=2,Un(o,r,1))),o.lanes|=1),t)}var Ny=Ce.ReactCurrentOwner,yt=!1;function ft(t,r,o,a){r.child=t===null?nf(r,null,o,a):Xr(r,t.child,o,a)}function Uf(t,r,o,a,c){o=o.render;var h=r.ref;return Zr(r,c),a=su(t,r,o,a,h,c),o=ou(),t!==null&&!yt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,_n(t,r,c)):(Fe&&o&&Va(r),r.flags|=1,ft(t,r,a,c),r.child)}function zf(t,r,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!Mu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,jf(t,r,h,a,c)):(t=qo(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:qi,o(m,a)&&t.ref===r.ref)return _n(t,r,c)}return r.flags|=1,t=Bn(h,a),t.ref=r.ref,t.return=r,r.child=t}function jf(t,r,o,a,c){if(t!==null){var h=t.memoizedProps;if(qi(h,a)&&t.ref===r.ref)if(yt=!1,r.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(yt=!0);else return r.lanes=t.lanes,_n(t,r,c)}return mu(t,r,o,a,c)}function Wf(t,r,o){var a=r.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(ri,Rt),Rt|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,xe(ri,Rt),Rt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,xe(ri,Rt),Rt|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,xe(ri,Rt),Rt|=a;return ft(t,r,c,o),r.child}function Vf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function mu(t,r,o,a,c){var h=vt(o)?lr:ut.current;return h=qr(r,h),Zr(r,c),o=su(t,r,o,a,h,c),a=ou(),t!==null&&!yt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,_n(t,r,c)):(Fe&&a&&Va(r),r.flags|=1,ft(t,r,o,c),r.child)}function Hf(t,r,o,a,c){if(vt(o)){var h=!0;vo(r)}else h=!1;if(Zr(r,c),r.stateNode===null)Mo(t,r),Af(r,o,a),hu(r,o,a,c),a=!0;else if(t===null){var m=r.stateNode,v=r.memoizedProps;m.props=v;var E=m.context,T=o.contextType;typeof T=="object"&&T!==null?T=Lt(T):(T=vt(o)?lr:ut.current,T=qr(r,T));var x=o.getDerivedStateFromProps,O=typeof x=="function"||typeof m.getSnapshotBeforeUpdate=="function";O||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==a||E!==T)&&Of(r,m,a,T),Fn=!1;var R=r.memoizedState;m.state=R,No(r,a,m,c),E=r.memoizedState,v!==a||R!==E||_t.current||Fn?(typeof x=="function"&&(du(r,o,x,a),E=r.memoizedState),(v=Fn||xf(r,o,v,a,R,E,T))?(O||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=E),m.props=a,m.state=E,m.context=T,a=v):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{m=r.stateNode,sf(t,r),v=r.memoizedProps,T=r.type===r.elementType?v:Bt(r.type,v),m.props=T,O=r.pendingProps,R=m.context,E=o.contextType,typeof E=="object"&&E!==null?E=Lt(E):(E=vt(o)?lr:ut.current,E=qr(r,E));var z=o.getDerivedStateFromProps;(x=typeof z=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==O||R!==E)&&Of(r,m,a,E),Fn=!1,R=r.memoizedState,m.state=R,No(r,a,m,c);var V=r.memoizedState;v!==O||R!==V||_t.current||Fn?(typeof z=="function"&&(du(r,o,z,a),V=r.memoizedState),(T=Fn||xf(r,o,T,a,R,V,E)||!1)?(x||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,V,E),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,V,E)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&R===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&R===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=V),m.props=a,m.state=V,m.context=E,a=T):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&R===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&R===t.memoizedState||(r.flags|=1024),a=!1)}return gu(t,r,o,a,h,c)}function gu(t,r,o,a,c,h){Vf(t,r);var m=(r.flags&128)!==0;if(!a&&!m)return c&&qh(r,o,!1),_n(t,r,h);a=r.stateNode,Ny.current=r;var v=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&m?(r.child=Xr(r,t.child,null,h),r.child=Xr(r,null,v,h)):ft(t,r,v,h),r.memoizedState=a.state,c&&qh(r,o,!0),r.child}function Bf(t){var r=t.stateNode;r.pendingContext?$h(t,r.pendingContext,r.pendingContext!==r.context):r.context&&$h(t,r.context,!1),Za(t,r.containerInfo)}function $f(t,r,o,a,c){return Yr(),Ga(c),r.flags|=256,ft(t,r,o,a),r.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function vu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gf(t,r,o){var a=r.pendingProps,c=Ue.current,h=!1,m=(r.flags&128)!==0,v;if((v=m)||(v=t!==null&&t.memoizedState===null?!1:(c&2)!==0),v?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),xe(Ue,c&1),t===null)return $a(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(m=a.children,t=a.fallback,h?(a=r.mode,h=r.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Ko(m,a,0,null),t=_r(t,a,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=vu(o),r.memoizedState=_u,t):yu(r,m));if(c=t.memoizedState,c!==null&&(v=c.dehydrated,v!==null))return Py(t,r,m,a,v,c,o);if(h){h=a.fallback,m=r.mode,c=t.child,v=c.sibling;var E={mode:"hidden",children:a.children};return!(m&1)&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=E,r.deletions=null):(a=Bn(c,E),a.subtreeFlags=c.subtreeFlags&14680064),v!==null?h=Bn(v,h):(h=_r(h,m,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,m=t.child.memoizedState,m=m===null?vu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,r.memoizedState=_u,a}return h=t.child,t=h.sibling,a=Bn(h,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function yu(t,r){return r=Ko({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Lo(t,r,o,a){return a!==null&&Ga(a),Xr(r,t.child,null,o),t=yu(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Py(t,r,o,a,c,h,m){if(o)return r.flags&256?(r.flags&=-257,a=fu(Error(n(422))),Lo(t,r,m,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=a.fallback,c=r.mode,a=Ko({mode:"visible",children:a.children},c,0,null),h=_r(h,c,m,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,r.mode&1&&Xr(r,t.child,null,m),r.child.memoizedState=vu(m),r.memoizedState=_u,h);if(!(r.mode&1))return Lo(t,r,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var v=a.dgst;return a=v,h=Error(n(419)),a=fu(h,a,void 0),Lo(t,r,m,a)}if(v=(m&t.childLanes)!==0,yt||v){if(a=Je,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,mn(t,c),qt(a,t,c,-1))}return Lu(),a=fu(Error(n(421))),Lo(t,r,m,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=Wy.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,Pt=bn(c.nextSibling),Nt=r,Fe=!0,Ht=null,t!==null&&(bt[Dt++]=fn,bt[Dt++]=pn,bt[Dt++]=ar,fn=t.id,pn=t.overflow,ar=r),r=yu(r,a.children),r.flags|=4096,r)}function qf(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),Ya(t.return,r,o)}function wu(t,r,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function Kf(t,r,o){var a=r.pendingProps,c=a.revealOrder,h=a.tail;if(ft(t,r,a.children,o),a=Ue.current,a&2)a=a&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qf(t,o,r);else if(t.tag===19)qf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(xe(Ue,a),!(r.mode&1))r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&Po(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),wu(r,!1,c,o,h);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&Po(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}wu(r,!0,o,null,h);break;case"together":wu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Mo(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function _n(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),fr|=r.lanes,!(o&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Bn(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Bn(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function Ry(t,r,o){switch(r.tag){case 3:Bf(r),Yr();break;case 5:af(r);break;case 1:vt(r.type)&&vo(r);break;case 4:Za(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;xe(Io,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(xe(Ue,Ue.current&1),r.flags|=128,null):o&r.child.childLanes?Gf(t,r,o):(xe(Ue,Ue.current&1),t=_n(t,r,o),t!==null?t.sibling:null);xe(Ue,Ue.current&1);break;case 19:if(a=(o&r.childLanes)!==0,t.flags&128){if(a)return Kf(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xe(Ue,Ue.current),a)break;return null;case 22:case 23:return r.lanes=0,Wf(t,r,o)}return _n(t,r,o)}var Qf,Eu,Yf,Xf;Qf=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Eu=function(){},Yf=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,dr(rn.current);var h=null;switch(o){case"input":c=ge(t,c),a=ge(t,a),h=[];break;case"select":c=U({},c,{value:void 0}),a=U({},a,{value:void 0}),h=[];break;case"textarea":c=Zl(t,c),a=Zl(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=mo)}ta(o,a);var m;o=null;for(T in c)if(!a.hasOwnProperty(T)&&c.hasOwnProperty(T)&&c[T]!=null)if(T==="style"){var v=c[T];for(m in v)v.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(l.hasOwnProperty(T)?h||(h=[]):(h=h||[]).push(T,null));for(T in a){var E=a[T];if(v=c!=null?c[T]:void 0,a.hasOwnProperty(T)&&E!==v&&(E!=null||v!=null))if(T==="style")if(v){for(m in v)!v.hasOwnProperty(m)||E&&E.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in E)E.hasOwnProperty(m)&&v[m]!==E[m]&&(o||(o={}),o[m]=E[m])}else o||(h||(h=[]),h.push(T,o)),o=E;else T==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,v=v?v.__html:void 0,E!=null&&v!==E&&(h=h||[]).push(T,E)):T==="children"?typeof E!="string"&&typeof E!="number"||(h=h||[]).push(T,""+E):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(l.hasOwnProperty(T)?(E!=null&&T==="onScroll"&&be("scroll",t),h||v===E||(h=[])):(h=h||[]).push(T,E))}o&&(h=h||[]).push("style",o);var T=h;(r.updateQueue=T)&&(r.flags|=4)}},Xf=function(t,r,o,a){o!==a&&(r.flags|=4)};function as(t,r){if(!Fe)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function dt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function xy(t,r,o){var a=r.pendingProps;switch(Ha(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(r),null;case 1:return vt(r.type)&&_o(),dt(r),null;case 3:return a=r.stateNode,ei(),De(_t),De(ut),nu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(So(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Ht!==null&&(Ou(Ht),Ht=null))),Eu(t,r),dt(r),null;case 5:eu(r);var c=dr(rs.current);if(o=r.type,t!==null&&r.stateNode!=null)Yf(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return dt(r),null}if(t=dr(rn.current),So(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[nn]=r,a[Ji]=h,t=(r.mode&1)!==0,o){case"dialog":be("cancel",a),be("close",a);break;case"iframe":case"object":case"embed":be("load",a);break;case"video":case"audio":for(c=0;c<Qi.length;c++)be(Qi[c],a);break;case"source":be("error",a);break;case"img":case"image":case"link":be("error",a),be("load",a);break;case"details":be("toggle",a);break;case"input":it(a,h),be("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},be("invalid",a);break;case"textarea":bd(a,h),be("invalid",a)}ta(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var v=h[m];m==="children"?typeof v=="string"?a.textContent!==v&&(h.suppressHydrationWarning!==!0&&po(a.textContent,v,t),c=["children",v]):typeof v=="number"&&a.textContent!==""+v&&(h.suppressHydrationWarning!==!0&&po(a.textContent,v,t),c=["children",""+v]):l.hasOwnProperty(m)&&v!=null&&m==="onScroll"&&be("scroll",a)}switch(o){case"input":kt(a),Od(a,h,!0);break;case"textarea":kt(a),Ld(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=mo)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Md(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[nn]=r,t[Ji]=a,Qf(t,r,!1,!1),r.stateNode=t;e:{switch(m=na(o,a),o){case"dialog":be("cancel",t),be("close",t),c=a;break;case"iframe":case"object":case"embed":be("load",t),c=a;break;case"video":case"audio":for(c=0;c<Qi.length;c++)be(Qi[c],t);c=a;break;case"source":be("error",t),c=a;break;case"img":case"image":case"link":be("error",t),be("load",t),c=a;break;case"details":be("toggle",t),c=a;break;case"input":it(t,a),c=ge(t,a),be("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=U({},a,{value:void 0}),be("invalid",t);break;case"textarea":bd(t,a),c=Zl(t,a),be("invalid",t);break;default:c=a}ta(o,c),v=c;for(h in v)if(v.hasOwnProperty(h)){var E=v[h];h==="style"?zd(t,E):h==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&Fd(t,E)):h==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&xi(t,E):typeof E=="number"&&xi(t,""+E):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?E!=null&&h==="onScroll"&&be("scroll",t):E!=null&&Se(t,h,E,m))}switch(o){case"input":kt(t),Od(t,a,!1);break;case"textarea":kt(t),Ld(t);break;case"option":a.value!=null&&t.setAttribute("value",""+Z(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Lr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Lr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=mo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return dt(r),null;case 6:if(t&&r.stateNode!=null)Xf(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=dr(rs.current),dr(rn.current),So(r)){if(a=r.stateNode,o=r.memoizedProps,a[nn]=r,(h=a.nodeValue!==o)&&(t=Nt,t!==null))switch(t.tag){case 3:po(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(a.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[nn]=r,r.stateNode=a}return dt(r),null;case 13:if(De(Ue),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Fe&&Pt!==null&&r.mode&1&&!(r.flags&128))Zh(),Yr(),r.flags|=98560,h=!1;else if(h=So(r),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[nn]=r}else Yr(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;dt(r),h=!1}else Ht!==null&&(Ou(Ht),Ht=null),h=!0;if(!h)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(t===null||Ue.current&1?Ye===0&&(Ye=3):Lu())),r.updateQueue!==null&&(r.flags|=4),dt(r),null);case 4:return ei(),Eu(t,r),t===null&&Yi(r.stateNode.containerInfo),dt(r),null;case 10:return Qa(r.type._context),dt(r),null;case 17:return vt(r.type)&&_o(),dt(r),null;case 19:if(De(Ue),h=r.memoizedState,h===null)return dt(r),null;if(a=(r.flags&128)!==0,m=h.rendering,m===null)if(a)as(h,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(m=Po(t),m!==null){for(r.flags|=128,as(h,!1),a=m.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return xe(Ue,Ue.current&1|2),r.child}t=t.sibling}h.tail!==null&&$e()>ii&&(r.flags|=128,a=!0,as(h,!1),r.lanes=4194304)}else{if(!a)if(t=Po(m),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),as(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Fe)return dt(r),null}else 2*$e()-h.renderingStartTime>ii&&o!==1073741824&&(r.flags|=128,a=!0,as(h,!1),r.lanes=4194304);h.isBackwards?(m.sibling=r.child,r.child=m):(o=h.last,o!==null?o.sibling=m:r.child=m,h.last=m)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=$e(),r.sibling=null,o=Ue.current,xe(Ue,a?o&1|2:o&1),r):(dt(r),null);case 22:case 23:return Du(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?Rt&1073741824&&(dt(r),r.subtreeFlags&6&&(r.flags|=8192)):dt(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function Ay(t,r){switch(Ha(r),r.tag){case 1:return vt(r.type)&&_o(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return ei(),De(_t),De(ut),nu(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return eu(r),null;case 13:if(De(Ue),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Yr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return De(Ue),null;case 4:return ei(),null;case 10:return Qa(r.type._context),null;case 22:case 23:return Du(),null;case 24:return null;default:return null}}var Fo=!1,ht=!1,Oy=typeof WeakSet=="function"?WeakSet:Set,j=null;function ni(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){We(t,r,a)}else o.current=null}function Su(t,r,o){try{o()}catch(a){We(t,r,a)}}var Jf=!1;function by(t,r){if(Da=no,t=Rh(),Ta(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,v=-1,E=-1,T=0,x=0,O=t,R=null;t:for(;;){for(var z;O!==o||c!==0&&O.nodeType!==3||(v=m+c),O!==h||a!==0&&O.nodeType!==3||(E=m+a),O.nodeType===3&&(m+=O.nodeValue.length),(z=O.firstChild)!==null;)R=O,O=z;for(;;){if(O===t)break t;if(R===o&&++T===c&&(v=m),R===h&&++x===a&&(E=m),(z=O.nextSibling)!==null)break;O=R,R=O.parentNode}O=z}o=v===-1||E===-1?null:{start:v,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(La={focusedElem:t,selectionRange:o},no=!1,j=r;j!==null;)if(r=j,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,j=t;else for(;j!==null;){r=j;try{var V=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var H=V.memoizedProps,Ge=V.memoizedState,I=r.stateNode,S=I.getSnapshotBeforeUpdate(r.elementType===r.type?H:Bt(r.type,H),Ge);I.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var k=r.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(b){We(r,r.return,b)}if(t=r.sibling,t!==null){t.return=r.return,j=t;break}j=r.return}return V=Jf,Jf=!1,V}function us(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Su(r,o,h)}c=c.next}while(c!==a)}}function Uo(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function Cu(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function Zf(t){var r=t.alternate;r!==null&&(t.alternate=null,Zf(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[nn],delete r[Ji],delete r[za],delete r[my],delete r[gy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ep(t){return t.tag===5||t.tag===3||t.tag===4}function tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ep(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Iu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=mo));else if(a!==4&&(t=t.child,t!==null))for(Iu(t,r,o),t=t.sibling;t!==null;)Iu(t,r,o),t=t.sibling}function ku(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(ku(t,r,o),t=t.sibling;t!==null;)ku(t,r,o),t=t.sibling}var st=null,$t=!1;function zn(t,r,o){for(o=o.child;o!==null;)np(t,r,o),o=o.sibling}function np(t,r,o){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Ys,o)}catch{}switch(o.tag){case 5:ht||ni(o,r);case 6:var a=st,c=$t;st=null,zn(t,r,o),st=a,$t=c,st!==null&&($t?(t=st,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):st.removeChild(o.stateNode));break;case 18:st!==null&&($t?(t=st,o=o.stateNode,t.nodeType===8?Ua(t.parentNode,o):t.nodeType===1&&Ua(t,o),Wi(t)):Ua(st,o.stateNode));break;case 4:a=st,c=$t,st=o.stateNode.containerInfo,$t=!0,zn(t,r,o),st=a,$t=c;break;case 0:case 11:case 14:case 15:if(!ht&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&Su(o,r,m),c=c.next}while(c!==a)}zn(t,r,o);break;case 1:if(!ht&&(ni(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(v){We(o,r,v)}zn(t,r,o);break;case 21:zn(t,r,o);break;case 22:o.mode&1?(ht=(a=ht)||o.memoizedState!==null,zn(t,r,o),ht=a):zn(t,r,o);break;default:zn(t,r,o)}}function rp(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Oy),r.forEach(function(a){var c=Vy.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Gt(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=r,v=m;e:for(;v!==null;){switch(v.tag){case 5:st=v.stateNode,$t=!1;break e;case 3:st=v.stateNode.containerInfo,$t=!0;break e;case 4:st=v.stateNode.containerInfo,$t=!0;break e}v=v.return}if(st===null)throw Error(n(160));np(h,m,c),st=null,$t=!1;var E=c.alternate;E!==null&&(E.return=null),c.return=null}catch(T){We(c,r,T)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)ip(r,t),r=r.sibling}function ip(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(r,t),on(t),a&4){try{us(3,t,t.return),Uo(3,t)}catch(H){We(t,t.return,H)}try{us(5,t,t.return)}catch(H){We(t,t.return,H)}}break;case 1:Gt(r,t),on(t),a&512&&o!==null&&ni(o,o.return);break;case 5:if(Gt(r,t),on(t),a&512&&o!==null&&ni(o,o.return),t.flags&32){var c=t.stateNode;try{xi(c,"")}catch(H){We(t,t.return,H)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,v=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{v==="input"&&h.type==="radio"&&h.name!=null&&jt(c,h),na(v,m);var T=na(v,h);for(m=0;m<E.length;m+=2){var x=E[m],O=E[m+1];x==="style"?zd(c,O):x==="dangerouslySetInnerHTML"?Fd(c,O):x==="children"?xi(c,O):Se(c,x,O,T)}switch(v){case"input":Dr(c,h);break;case"textarea":Dd(c,h);break;case"select":var R=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var z=h.value;z!=null?Lr(c,!!h.multiple,z,!1):R!==!!h.multiple&&(h.defaultValue!=null?Lr(c,!!h.multiple,h.defaultValue,!0):Lr(c,!!h.multiple,h.multiple?[]:"",!1))}c[Ji]=h}catch(H){We(t,t.return,H)}}break;case 6:if(Gt(r,t),on(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(H){We(t,t.return,H)}}break;case 3:if(Gt(r,t),on(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Wi(r.containerInfo)}catch(H){We(t,t.return,H)}break;case 4:Gt(r,t),on(t);break;case 13:Gt(r,t),on(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Pu=$e())),a&4&&rp(t);break;case 22:if(x=o!==null&&o.memoizedState!==null,t.mode&1?(ht=(T=ht)||x,Gt(r,t),ht=T):Gt(r,t),on(t),a&8192){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!x&&t.mode&1)for(j=t,x=t.child;x!==null;){for(O=j=x;j!==null;){switch(R=j,z=R.child,R.tag){case 0:case 11:case 14:case 15:us(4,R,R.return);break;case 1:ni(R,R.return);var V=R.stateNode;if(typeof V.componentWillUnmount=="function"){a=R,o=R.return;try{r=a,V.props=r.memoizedProps,V.state=r.memoizedState,V.componentWillUnmount()}catch(H){We(a,o,H)}}break;case 5:ni(R,R.return);break;case 22:if(R.memoizedState!==null){lp(O);continue}}z!==null?(z.return=R,j=z):lp(O)}x=x.sibling}e:for(x=null,O=t;;){if(O.tag===5){if(x===null){x=O;try{c=O.stateNode,T?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(v=O.stateNode,E=O.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null,v.style.display=Ud("display",m))}catch(H){We(t,t.return,H)}}}else if(O.tag===6){if(x===null)try{O.stateNode.nodeValue=T?"":O.memoizedProps}catch(H){We(t,t.return,H)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===t)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===t)break e;for(;O.sibling===null;){if(O.return===null||O.return===t)break e;x===O&&(x=null),O=O.return}x===O&&(x=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:Gt(r,t),on(t),a&4&&rp(t);break;case 21:break;default:Gt(r,t),on(t)}}function on(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(ep(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(xi(c,""),a.flags&=-33);var h=tp(t);ku(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,v=tp(t);Iu(t,v,m);break;default:throw Error(n(161))}}catch(E){We(t,t.return,E)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Dy(t,r,o){j=t,sp(t)}function sp(t,r,o){for(var a=(t.mode&1)!==0;j!==null;){var c=j,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||Fo;if(!m){var v=c.alternate,E=v!==null&&v.memoizedState!==null||ht;v=Fo;var T=ht;if(Fo=m,(ht=E)&&!T)for(j=c;j!==null;)m=j,E=m.child,m.tag===22&&m.memoizedState!==null?ap(c):E!==null?(E.return=m,j=E):ap(c);for(;h!==null;)j=h,sp(h),h=h.sibling;j=c,Fo=v,ht=T}op(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,j=h):op(t)}}function op(t){for(;j!==null;){var r=j;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:ht||Uo(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!ht)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:Bt(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&lf(r,h,a);break;case 3:var m=r.updateQueue;if(m!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}lf(r,m,o)}break;case 5:var v=r.stateNode;if(o===null&&r.flags&4){o=v;var E=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var T=r.alternate;if(T!==null){var x=T.memoizedState;if(x!==null){var O=x.dehydrated;O!==null&&Wi(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ht||r.flags&512&&Cu(r)}catch(R){We(r,r.return,R)}}if(r===t){j=null;break}if(o=r.sibling,o!==null){o.return=r.return,j=o;break}j=r.return}}function lp(t){for(;j!==null;){var r=j;if(r===t){j=null;break}var o=r.sibling;if(o!==null){o.return=r.return,j=o;break}j=r.return}}function ap(t){for(;j!==null;){var r=j;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Uo(4,r)}catch(E){We(r,o,E)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(E){We(r,c,E)}}var h=r.return;try{Cu(r)}catch(E){We(r,h,E)}break;case 5:var m=r.return;try{Cu(r)}catch(E){We(r,m,E)}}}catch(E){We(r,r.return,E)}if(r===t){j=null;break}var v=r.sibling;if(v!==null){v.return=r.return,j=v;break}j=r.return}}var Ly=Math.ceil,zo=Ce.ReactCurrentDispatcher,Tu=Ce.ReactCurrentOwner,Ft=Ce.ReactCurrentBatchConfig,pe=0,Je=null,Ke=null,ot=0,Rt=0,ri=Dn(0),Ye=0,cs=null,fr=0,jo=0,Nu=0,ds=null,wt=null,Pu=0,ii=1/0,vn=null,Wo=!1,Ru=null,jn=null,Vo=!1,Wn=null,Ho=0,hs=0,xu=null,Bo=-1,$o=0;function pt(){return pe&6?$e():Bo!==-1?Bo:Bo=$e()}function Vn(t){return t.mode&1?pe&2&&ot!==0?ot&-ot:vy.transition!==null?($o===0&&($o=eh()),$o):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:uh(t.type)),t):1}function qt(t,r,o,a){if(50<hs)throw hs=0,xu=null,Error(n(185));Mi(t,o,a),(!(pe&2)||t!==Je)&&(t===Je&&(!(pe&2)&&(jo|=o),Ye===4&&Hn(t,ot)),Et(t,a),o===1&&pe===0&&!(r.mode&1)&&(ii=$e()+500,yo&&Mn()))}function Et(t,r){var o=t.callbackNode;vv(t,r);var a=Zs(t,t===Je?ot:0);if(a===0)o!==null&&Xd(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&Xd(o),r===1)t.tag===0?_y(cp.bind(null,t)):Kh(cp.bind(null,t)),fy(function(){!(pe&6)&&Mn()}),o=null;else{switch(th(a)){case 1:o=ua;break;case 4:o=Jd;break;case 16:o=Qs;break;case 536870912:o=Zd;break;default:o=Qs}o=vp(o,up.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function up(t,r){if(Bo=-1,$o=0,pe&6)throw Error(n(327));var o=t.callbackNode;if(si()&&t.callbackNode!==o)return null;var a=Zs(t,t===Je?ot:0);if(a===0)return null;if(a&30||a&t.expiredLanes||r)r=Go(t,a);else{r=a;var c=pe;pe|=2;var h=hp();(Je!==t||ot!==r)&&(vn=null,ii=$e()+500,mr(t,r));do try{Uy();break}catch(v){dp(t,v)}while(!0);Ka(),zo.current=h,pe=c,Ke!==null?r=0:(Je=null,ot=0,r=Ye)}if(r!==0){if(r===2&&(c=ca(t),c!==0&&(a=c,r=Au(t,c))),r===1)throw o=cs,mr(t,0),Hn(t,a),Et(t,$e()),o;if(r===6)Hn(t,a);else{if(c=t.current.alternate,!(a&30)&&!My(c)&&(r=Go(t,a),r===2&&(h=ca(t),h!==0&&(a=h,r=Au(t,h))),r===1))throw o=cs,mr(t,0),Hn(t,a),Et(t,$e()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:gr(t,wt,vn);break;case 3:if(Hn(t,a),(a&130023424)===a&&(r=Pu+500-$e(),10<r)){if(Zs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){pt(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Fa(gr.bind(null,t,wt,vn),r);break}gr(t,wt,vn);break;case 4:if(Hn(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var m=31-Wt(a);h=1<<m,m=r[m],m>c&&(c=m),a&=~h}if(a=c,a=$e()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Ly(a/1960))-a,10<a){t.timeoutHandle=Fa(gr.bind(null,t,wt,vn),a);break}gr(t,wt,vn);break;case 5:gr(t,wt,vn);break;default:throw Error(n(329))}}}return Et(t,$e()),t.callbackNode===o?up.bind(null,t):null}function Au(t,r){var o=ds;return t.current.memoizedState.isDehydrated&&(mr(t,r).flags|=256),t=Go(t,r),t!==2&&(r=wt,wt=o,r!==null&&Ou(r)),t}function Ou(t){wt===null?wt=t:wt.push.apply(wt,t)}function My(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!Vt(h(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Hn(t,r){for(r&=~Nu,r&=~jo,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Wt(r),a=1<<o;t[o]=-1,r&=~a}}function cp(t){if(pe&6)throw Error(n(327));si();var r=Zs(t,0);if(!(r&1))return Et(t,$e()),null;var o=Go(t,r);if(t.tag!==0&&o===2){var a=ca(t);a!==0&&(r=a,o=Au(t,a))}if(o===1)throw o=cs,mr(t,0),Hn(t,r),Et(t,$e()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,gr(t,wt,vn),Et(t,$e()),null}function bu(t,r){var o=pe;pe|=1;try{return t(r)}finally{pe=o,pe===0&&(ii=$e()+500,yo&&Mn())}}function pr(t){Wn!==null&&Wn.tag===0&&!(pe&6)&&si();var r=pe;pe|=1;var o=Ft.transition,a=Ie;try{if(Ft.transition=null,Ie=1,t)return t()}finally{Ie=a,Ft.transition=o,pe=r,!(pe&6)&&Mn()}}function Du(){Rt=ri.current,De(ri)}function mr(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,hy(o)),Ke!==null)for(o=Ke.return;o!==null;){var a=o;switch(Ha(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&_o();break;case 3:ei(),De(_t),De(ut),nu();break;case 5:eu(a);break;case 4:ei();break;case 13:De(Ue);break;case 19:De(Ue);break;case 10:Qa(a.type._context);break;case 22:case 23:Du()}o=o.return}if(Je=t,Ke=t=Bn(t.current,null),ot=Rt=r,Ye=0,cs=null,Nu=jo=fr=0,wt=ds=null,cr!==null){for(r=0;r<cr.length;r++)if(o=cr[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}cr=null}return t}function dp(t,r){do{var o=Ke;try{if(Ka(),Ro.current=bo,xo){for(var a=ze.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}xo=!1}if(hr=0,Xe=Qe=ze=null,is=!1,ss=0,Tu.current=null,o===null||o.return===null){Ye=1,cs=r,Ke=null;break}e:{var h=t,m=o.return,v=o,E=r;if(r=ot,v.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var T=E,x=v,O=x.tag;if(!(x.mode&1)&&(O===0||O===11||O===15)){var R=x.alternate;R?(x.updateQueue=R.updateQueue,x.memoizedState=R.memoizedState,x.lanes=R.lanes):(x.updateQueue=null,x.memoizedState=null)}var z=Mf(m);if(z!==null){z.flags&=-257,Ff(z,m,v,h,r),z.mode&1&&Lf(h,T,r),r=z,E=T;var V=r.updateQueue;if(V===null){var H=new Set;H.add(E),r.updateQueue=H}else V.add(E);break e}else{if(!(r&1)){Lf(h,T,r),Lu();break e}E=Error(n(426))}}else if(Fe&&v.mode&1){var Ge=Mf(m);if(Ge!==null){!(Ge.flags&65536)&&(Ge.flags|=256),Ff(Ge,m,v,h,r),Ga(ti(E,v));break e}}h=E=ti(E,v),Ye!==4&&(Ye=2),ds===null?ds=[h]:ds.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var I=bf(h,E,r);of(h,I);break e;case 1:v=E;var S=h.type,k=h.stateNode;if(!(h.flags&128)&&(typeof S.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(jn===null||!jn.has(k)))){h.flags|=65536,r&=-r,h.lanes|=r;var b=Df(h,v,r);of(h,b);break e}}h=h.return}while(h!==null)}pp(o)}catch($){r=$,Ke===o&&o!==null&&(Ke=o=o.return);continue}break}while(!0)}function hp(){var t=zo.current;return zo.current=bo,t===null?bo:t}function Lu(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Je===null||!(fr&268435455)&&!(jo&268435455)||Hn(Je,ot)}function Go(t,r){var o=pe;pe|=2;var a=hp();(Je!==t||ot!==r)&&(vn=null,mr(t,r));do try{Fy();break}catch(c){dp(t,c)}while(!0);if(Ka(),pe=o,zo.current=a,Ke!==null)throw Error(n(261));return Je=null,ot=0,Ye}function Fy(){for(;Ke!==null;)fp(Ke)}function Uy(){for(;Ke!==null&&!uv();)fp(Ke)}function fp(t){var r=_p(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,r===null?pp(t):Ke=r,Tu.current=null}function pp(t){var r=t;do{var o=r.alternate;if(t=r.return,r.flags&32768){if(o=Ay(o,r),o!==null){o.flags&=32767,Ke=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,Ke=null;return}}else if(o=xy(o,r,Rt),o!==null){Ke=o;return}if(r=r.sibling,r!==null){Ke=r;return}Ke=r=t}while(r!==null);Ye===0&&(Ye=5)}function gr(t,r,o){var a=Ie,c=Ft.transition;try{Ft.transition=null,Ie=1,zy(t,r,o,a)}finally{Ft.transition=c,Ie=a}return null}function zy(t,r,o,a){do si();while(Wn!==null);if(pe&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(yv(t,h),t===Je&&(Ke=Je=null,ot=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Vo||(Vo=!0,vp(Qs,function(){return si(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Ft.transition,Ft.transition=null;var m=Ie;Ie=1;var v=pe;pe|=4,Tu.current=null,by(t,o),ip(o,t),sy(La),no=!!Da,La=Da=null,t.current=o,Dy(o),cv(),pe=v,Ie=m,Ft.transition=h}else t.current=o;if(Vo&&(Vo=!1,Wn=t,Ho=c),h=t.pendingLanes,h===0&&(jn=null),fv(o.stateNode),Et(t,$e()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Wo)throw Wo=!1,t=Ru,Ru=null,t;return Ho&1&&t.tag!==0&&si(),h=t.pendingLanes,h&1?t===xu?hs++:(hs=0,xu=t):hs=0,Mn(),null}function si(){if(Wn!==null){var t=th(Ho),r=Ft.transition,o=Ie;try{if(Ft.transition=null,Ie=16>t?16:t,Wn===null)var a=!1;else{if(t=Wn,Wn=null,Ho=0,pe&6)throw Error(n(331));var c=pe;for(pe|=4,j=t.current;j!==null;){var h=j,m=h.child;if(j.flags&16){var v=h.deletions;if(v!==null){for(var E=0;E<v.length;E++){var T=v[E];for(j=T;j!==null;){var x=j;switch(x.tag){case 0:case 11:case 15:us(8,x,h)}var O=x.child;if(O!==null)O.return=x,j=O;else for(;j!==null;){x=j;var R=x.sibling,z=x.return;if(Zf(x),x===T){j=null;break}if(R!==null){R.return=z,j=R;break}j=z}}}var V=h.alternate;if(V!==null){var H=V.child;if(H!==null){V.child=null;do{var Ge=H.sibling;H.sibling=null,H=Ge}while(H!==null)}}j=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,j=m;else e:for(;j!==null;){if(h=j,h.flags&2048)switch(h.tag){case 0:case 11:case 15:us(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,j=I;break e}j=h.return}}var S=t.current;for(j=S;j!==null;){m=j;var k=m.child;if(m.subtreeFlags&2064&&k!==null)k.return=m,j=k;else e:for(m=S;j!==null;){if(v=j,v.flags&2048)try{switch(v.tag){case 0:case 11:case 15:Uo(9,v)}}catch($){We(v,v.return,$)}if(v===m){j=null;break e}var b=v.sibling;if(b!==null){b.return=v.return,j=b;break e}j=v.return}}if(pe=c,Mn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Ys,t)}catch{}a=!0}return a}finally{Ie=o,Ft.transition=r}}return!1}function mp(t,r,o){r=ti(o,r),r=bf(t,r,1),t=Un(t,r,1),r=pt(),t!==null&&(Mi(t,1,r),Et(t,r))}function We(t,r,o){if(t.tag===3)mp(t,t,o);else for(;r!==null;){if(r.tag===3){mp(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(jn===null||!jn.has(a))){t=ti(o,t),t=Df(r,t,1),r=Un(r,t,1),t=pt(),r!==null&&(Mi(r,1,t),Et(r,t));break}}r=r.return}}function jy(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=pt(),t.pingedLanes|=t.suspendedLanes&o,Je===t&&(ot&o)===o&&(Ye===4||Ye===3&&(ot&130023424)===ot&&500>$e()-Pu?mr(t,0):Nu|=o),Et(t,r)}function gp(t,r){r===0&&(t.mode&1?(r=Js,Js<<=1,!(Js&130023424)&&(Js=4194304)):r=1);var o=pt();t=mn(t,r),t!==null&&(Mi(t,r,o),Et(t,o))}function Wy(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),gp(t,o)}function Vy(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),gp(t,o)}var _p;_p=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||_t.current)yt=!0;else{if(!(t.lanes&o)&&!(r.flags&128))return yt=!1,Ry(t,r,o);yt=!!(t.flags&131072)}else yt=!1,Fe&&r.flags&1048576&&Qh(r,Eo,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Mo(t,r),t=r.pendingProps;var c=qr(r,ut.current);Zr(r,o),c=su(null,r,a,t,c,o);var h=ou();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,vt(a)?(h=!0,vo(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Ja(r),c.updater=Do,r.stateNode=c,c._reactInternals=r,hu(r,a,t,o),r=gu(null,r,a,!0,h,o)):(r.tag=0,Fe&&h&&Va(r),ft(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(Mo(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=By(a),t=Bt(a,t),c){case 0:r=mu(null,r,a,t,o);break e;case 1:r=Hf(null,r,a,t,o);break e;case 11:r=Uf(null,r,a,t,o);break e;case 14:r=zf(null,r,a,Bt(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Bt(a,c),mu(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Bt(a,c),Hf(t,r,a,c,o);case 3:e:{if(Bf(r),t===null)throw Error(n(387));a=r.pendingProps,h=r.memoizedState,c=h.element,sf(t,r),No(r,a,null,o);var m=r.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=ti(Error(n(423)),r),r=$f(t,r,a,o,c);break e}else if(a!==c){c=ti(Error(n(424)),r),r=$f(t,r,a,o,c);break e}else for(Pt=bn(r.stateNode.containerInfo.firstChild),Nt=r,Fe=!0,Ht=null,o=nf(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Yr(),a===c){r=_n(t,r,o);break e}ft(t,r,a,o)}r=r.child}return r;case 5:return af(r),t===null&&$a(r),a=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,Ma(a,c)?m=null:h!==null&&Ma(a,h)&&(r.flags|=32),Vf(t,r),ft(t,r,m,o),r.child;case 6:return t===null&&$a(r),null;case 13:return Gf(t,r,o);case 4:return Za(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=Xr(r,null,a,o):ft(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Bt(a,c),Uf(t,r,a,c,o);case 7:return ft(t,r,r.pendingProps,o),r.child;case 8:return ft(t,r,r.pendingProps.children,o),r.child;case 12:return ft(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,h=r.memoizedProps,m=c.value,xe(Io,a._currentValue),a._currentValue=m,h!==null)if(Vt(h.value,m)){if(h.children===c.children&&!_t.current){r=_n(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var v=h.dependencies;if(v!==null){m=h.child;for(var E=v.firstContext;E!==null;){if(E.context===a){if(h.tag===1){E=gn(-1,o&-o),E.tag=2;var T=h.updateQueue;if(T!==null){T=T.shared;var x=T.pending;x===null?E.next=E:(E.next=x.next,x.next=E),T.pending=E}}h.lanes|=o,E=h.alternate,E!==null&&(E.lanes|=o),Ya(h.return,o,r),v.lanes|=o;break}E=E.next}}else if(h.tag===10)m=h.type===r.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,v=m.alternate,v!==null&&(v.lanes|=o),Ya(m,o,r),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===r){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}ft(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,Zr(r,o),c=Lt(c),a=a(c),r.flags|=1,ft(t,r,a,o),r.child;case 14:return a=r.type,c=Bt(a,r.pendingProps),c=Bt(a.type,c),zf(t,r,a,c,o);case 15:return jf(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Bt(a,c),Mo(t,r),r.tag=1,vt(a)?(t=!0,vo(r)):t=!1,Zr(r,o),Af(r,a,c),hu(r,a,c,o),gu(null,r,a,!0,t,o);case 19:return Kf(t,r,o);case 22:return Wf(t,r,o)}throw Error(n(156,r.tag))};function vp(t,r){return Yd(t,r)}function Hy(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,r,o,a){return new Hy(t,r,o,a)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function By(t){if(typeof t=="function")return Mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===M)return 11;if(t===Pe)return 14}return 2}function Bn(t,r){var o=t.alternate;return o===null?(o=Ut(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function qo(t,r,o,a,c,h){var m=2;if(a=t,typeof t=="function")Mu(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case Le:return _r(o.children,c,h,r);case le:m=8,c|=8;break;case Me:return t=Ut(12,o,r,c|2),t.elementType=Me,t.lanes=h,t;case re:return t=Ut(13,o,r,c),t.elementType=re,t.lanes=h,t;case K:return t=Ut(19,o,r,c),t.elementType=K,t.lanes=h,t;case ve:return Ko(o,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qe:m=10;break e;case q:m=9;break e;case M:m=11;break e;case Pe:m=14;break e;case Re:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=Ut(m,o,r,c),r.elementType=t,r.type=a,r.lanes=h,r}function _r(t,r,o,a){return t=Ut(7,t,a,r),t.lanes=o,t}function Ko(t,r,o,a){return t=Ut(22,t,a,r),t.elementType=ve,t.lanes=o,t.stateNode={isHidden:!1},t}function Fu(t,r,o){return t=Ut(6,t,null,r),t.lanes=o,t}function Uu(t,r,o){return r=Ut(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function $y(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=da(0),this.expirationTimes=da(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=da(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function zu(t,r,o,a,c,h,m,v,E){return t=new $y(t,r,o,v,E),r===1?(r=1,h===!0&&(r|=8)):r=0,h=Ut(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ja(h),t}function Gy(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function yp(t){if(!t)return Ln;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(vt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(vt(o))return Gh(t,o,r)}return r}function wp(t,r,o,a,c,h,m,v,E){return t=zu(o,a,!0,t,c,h,m,v,E),t.context=yp(null),o=t.current,a=pt(),c=Vn(o),h=gn(a,c),h.callback=r??null,Un(o,h,c),t.current.lanes=c,Mi(t,c,a),Et(t,a),t}function Qo(t,r,o,a){var c=r.current,h=pt(),m=Vn(c);return o=yp(o),r.context===null?r.context=o:r.pendingContext=o,r=gn(h,m),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=Un(c,r,m),t!==null&&(qt(t,c,m,h),To(t,c,m)),m}function Yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ep(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function ju(t,r){Ep(t,r),(t=t.alternate)&&Ep(t,r)}var Sp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wu(t){this._internalRoot=t}Xo.prototype.render=Wu.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Qo(t,r,null,null)},Xo.prototype.unmount=Wu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;pr(function(){Qo(null,t,null,null)}),r[dn]=null}};function Xo(t){this._internalRoot=t}Xo.prototype.unstable_scheduleHydration=function(t){if(t){var r=ih();t={blockedOn:null,target:t,priority:r};for(var o=0;o<xn.length&&r!==0&&r<xn[o].priority;o++);xn.splice(o,0,t),o===0&&lh(t)}};function Vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function qy(t,r,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var T=Yo(m);h.call(T)}}var m=wp(r,a,t,0,null,!1,!1,"",Cp);return t._reactRootContainer=m,t[dn]=m.current,Yi(t.nodeType===8?t.parentNode:t),pr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var v=a;a=function(){var T=Yo(E);v.call(T)}}var E=zu(t,0,!1,null,null,!1,!1,"",Cp);return t._reactRootContainer=E,t[dn]=E.current,Yi(t.nodeType===8?t.parentNode:t),pr(function(){Qo(r,E,o,a)}),E}function Zo(t,r,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var v=c;c=function(){var E=Yo(m);v.call(E)}}Qo(r,m,t,c)}else m=qy(o,r,t,c,a);return Yo(m)}nh=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Li(r.pendingLanes);o!==0&&(ha(r,o|1),Et(r,$e()),!(pe&6)&&(ii=$e()+500,Mn()))}break;case 13:pr(function(){var a=mn(t,1);if(a!==null){var c=pt();qt(a,t,1,c)}}),ju(t,1)}},fa=function(t){if(t.tag===13){var r=mn(t,134217728);if(r!==null){var o=pt();qt(r,t,134217728,o)}ju(t,134217728)}},rh=function(t){if(t.tag===13){var r=Vn(t),o=mn(t,r);if(o!==null){var a=pt();qt(o,t,r,a)}ju(t,r)}},ih=function(){return Ie},sh=function(t,r){var o=Ie;try{return Ie=t,r()}finally{Ie=o}},sa=function(t,r,o){switch(r){case"input":if(Dr(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=go(a);if(!c)throw Error(n(90));Ot(a),Dr(a,c)}}}break;case"textarea":Dd(t,o);break;case"select":r=o.value,r!=null&&Lr(t,!!o.multiple,r,!1)}},Hd=bu,Bd=pr;var Ky={usingClientEntryPoint:!1,Events:[Zi,$r,go,Wd,Vd,bu]},fs={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qy={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Kd(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Ys=el.inject(Qy),tn=el}catch{}}return St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ky,St.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(r))throw Error(n(200));return Gy(t,r,null,o)},St.createRoot=function(t,r){if(!Vu(t))throw Error(n(299));var o=!1,a="",c=Sp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=zu(t,1,!1,null,null,o,!1,a,c),t[dn]=r.current,Yi(t.nodeType===8?t.parentNode:t),new Wu(r)},St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Kd(r),t=t===null?null:t.stateNode,t},St.flushSync=function(t){return pr(t)},St.hydrate=function(t,r,o){if(!Jo(r))throw Error(n(200));return Zo(null,t,r,!0,o)},St.hydrateRoot=function(t,r,o){if(!Vu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=Sp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),r=wp(r,null,t,1,o??null,c,!1,h,m),t[dn]=r.current,Yi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new Xo(r)},St.render=function(t,r,o){if(!Jo(r))throw Error(n(200));return Zo(null,t,r,!1,o)},St.unmountComponentAtNode=function(t){if(!Jo(t))throw Error(n(40));return t._reactRootContainer?(pr(function(){Zo(null,null,t,!1,function(){t._reactRootContainer=null,t[dn]=null})}),!0):!1},St.unstable_batchedUpdates=bu,St.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!Jo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Zo(t,r,o,!1,a)},St.version="18.3.1-next-f1338f8080-20240426",St}var Ap;function r0(){if(Ap)return $u.exports;Ap=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),$u.exports=n0(),$u.exports}var Op;function i0(){if(Op)return tl;Op=1;var i=r0();return tl.createRoot=i.createRoot,tl.hydrateRoot=i.hydrateRoot,tl}var s0=i0();const o0="modulepreload",l0=function(i){return"/portfolio_web/"+i},bp={},xt=function(e,n,s){let l=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));l=Promise.allSettled(n.map(p=>{if(p=l0(p),p in bp)return;bp[p]=!0;const g=p.endsWith(".css"),w=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${w}`))return;const _=document.createElement("link");if(_.rel=g?"stylesheet":o0,g||(_.as="script"),_.crossOrigin="",_.href=p,f&&_.setAttribute("nonce",f),document.head.appendChild(_),g)return new Promise((y,N)=>{_.addEventListener("load",y),_.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(d){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=d,window.dispatchEvent(f),!f.defaultPrevented)throw d}return l.then(d=>{for(const f of d||[])f.status==="rejected"&&u(f.reason);return e().catch(u)})};var sl={exports:{}},a0=sl.exports,Dp;function u0(){return Dp||(Dp=1,function(i,e){(function(n,s){i.exports=s()})(a0,function(){return function(n){function s(u){if(l[u])return l[u].exports;var d=l[u]={exports:{},id:u,loaded:!1};return n[u].call(d.exports,d,d.exports,s),d.loaded=!0,d.exports}var l={};return s.m=n,s.c=l,s.p="dist/",s(0)}([function(n,s,l){function u(K){return K&&K.__esModule?K:{default:K}}var d=Object.assign||function(K){for(var Pe=1;Pe<arguments.length;Pe++){var Re=arguments[Pe];for(var ve in Re)Object.prototype.hasOwnProperty.call(Re,ve)&&(K[ve]=Re[ve])}return K},f=l(1),p=(u(f),l(6)),g=u(p),w=l(7),_=u(w),y=l(8),N=u(y),A=l(9),F=u(A),W=l(10),we=u(W),Ee=l(11),Se=u(Ee),Ce=l(14),Be=u(Ce),fe=[],Le=!1,le={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},Me=function(){var K=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(K&&(Le=!0),Le)return fe=(0,Se.default)(fe,le),(0,we.default)(fe,le.once),fe},qe=function(){fe=(0,Be.default)(),Me()},q=function(){fe.forEach(function(K,Pe){K.node.removeAttribute("data-aos"),K.node.removeAttribute("data-aos-easing"),K.node.removeAttribute("data-aos-duration"),K.node.removeAttribute("data-aos-delay")})},M=function(K){return K===!0||K==="mobile"&&F.default.mobile()||K==="phone"&&F.default.phone()||K==="tablet"&&F.default.tablet()||typeof K=="function"&&K()===!0},re=function(K){le=d(le,K),fe=(0,Be.default)();var Pe=document.all&&!window.atob;return M(le.disable)||Pe?q():(le.disableMutationObserver||N.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),le.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",le.easing),document.querySelector("body").setAttribute("data-aos-duration",le.duration),document.querySelector("body").setAttribute("data-aos-delay",le.delay),le.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?Me(!0):le.startEvent==="load"?window.addEventListener(le.startEvent,function(){Me(!0)}):document.addEventListener(le.startEvent,function(){Me(!0)}),window.addEventListener("resize",(0,_.default)(Me,le.debounceDelay,!0)),window.addEventListener("orientationchange",(0,_.default)(Me,le.debounceDelay,!0)),window.addEventListener("scroll",(0,g.default)(function(){(0,we.default)(fe,le.once)},le.throttleDelay)),le.disableMutationObserver||N.default.ready("[data-aos]",qe),fe)};n.exports={init:re,refresh:Me,refreshHard:qe}},function(n,s){},,,,,function(n,s){(function(l){function u(M,re,K){function Pe(ge){var it=J,jt=se;return J=se=void 0,je=ge,ie=M.apply(jt,it)}function Re(ge){return je=ge,Z=setTimeout(G,re),kt?Pe(ge):ie}function ve(ge){var it=ge-ae,jt=ge-je,Dr=re-it;return Ot?qe(Dr,oe-jt):Dr}function L(ge){var it=ge-ae,jt=ge-je;return ae===void 0||it>=re||it<0||Ot&&jt>=oe}function G(){var ge=q();return L(ge)?U(ge):void(Z=setTimeout(G,ve(ge)))}function U(ge){return Z=void 0,ke&&J?Pe(ge):(J=se=void 0,ie)}function C(){Z!==void 0&&clearTimeout(Z),je=0,J=ae=se=Z=void 0}function P(){return Z===void 0?ie:U(q())}function X(){var ge=q(),it=L(ge);if(J=arguments,se=this,ae=ge,it){if(Z===void 0)return Re(ae);if(Ot)return Z=setTimeout(G,re),Pe(ae)}return Z===void 0&&(Z=setTimeout(G,re)),ie}var J,se,oe,ie,Z,ae,je=0,kt=!1,Ot=!1,ke=!0;if(typeof M!="function")throw new TypeError(y);return re=w(re)||0,f(K)&&(kt=!!K.leading,Ot="maxWait"in K,oe=Ot?Me(w(K.maxWait)||0,re):oe,ke="trailing"in K?!!K.trailing:ke),X.cancel=C,X.flush=P,X}function d(M,re,K){var Pe=!0,Re=!0;if(typeof M!="function")throw new TypeError(y);return f(K)&&(Pe="leading"in K?!!K.leading:Pe,Re="trailing"in K?!!K.trailing:Re),u(M,re,{leading:Pe,maxWait:re,trailing:Re})}function f(M){var re=typeof M>"u"?"undefined":_(M);return!!M&&(re=="object"||re=="function")}function p(M){return!!M&&(typeof M>"u"?"undefined":_(M))=="object"}function g(M){return(typeof M>"u"?"undefined":_(M))=="symbol"||p(M)&&le.call(M)==A}function w(M){if(typeof M=="number")return M;if(g(M))return N;if(f(M)){var re=typeof M.valueOf=="function"?M.valueOf():M;M=f(re)?re+"":re}if(typeof M!="string")return M===0?M:+M;M=M.replace(F,"");var K=we.test(M);return K||Ee.test(M)?Se(M.slice(2),K?2:8):W.test(M)?N:+M}var _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},y="Expected a function",N=NaN,A="[object Symbol]",F=/^\s+|\s+$/g,W=/^[-+]0x[0-9a-f]+$/i,we=/^0b[01]+$/i,Ee=/^0o[0-7]+$/i,Se=parseInt,Ce=(typeof l>"u"?"undefined":_(l))=="object"&&l&&l.Object===Object&&l,Be=(typeof self>"u"?"undefined":_(self))=="object"&&self&&self.Object===Object&&self,fe=Ce||Be||Function("return this")(),Le=Object.prototype,le=Le.toString,Me=Math.max,qe=Math.min,q=function(){return fe.Date.now()};n.exports=d}).call(s,function(){return this}())},function(n,s){(function(l){function u(q,M,re){function K(ke){var ge=X,it=J;return X=J=void 0,ae=ke,oe=q.apply(it,ge)}function Pe(ke){return ae=ke,ie=setTimeout(L,M),je?K(ke):oe}function Re(ke){var ge=ke-Z,it=ke-ae,jt=M-ge;return kt?Me(jt,se-it):jt}function ve(ke){var ge=ke-Z,it=ke-ae;return Z===void 0||ge>=M||ge<0||kt&&it>=se}function L(){var ke=qe();return ve(ke)?G(ke):void(ie=setTimeout(L,Re(ke)))}function G(ke){return ie=void 0,Ot&&X?K(ke):(X=J=void 0,oe)}function U(){ie!==void 0&&clearTimeout(ie),ae=0,X=Z=J=ie=void 0}function C(){return ie===void 0?oe:G(qe())}function P(){var ke=qe(),ge=ve(ke);if(X=arguments,J=this,Z=ke,ge){if(ie===void 0)return Pe(Z);if(kt)return ie=setTimeout(L,M),K(Z)}return ie===void 0&&(ie=setTimeout(L,M)),oe}var X,J,se,oe,ie,Z,ae=0,je=!1,kt=!1,Ot=!0;if(typeof q!="function")throw new TypeError(_);return M=g(M)||0,d(re)&&(je=!!re.leading,kt="maxWait"in re,se=kt?le(g(re.maxWait)||0,M):se,Ot="trailing"in re?!!re.trailing:Ot),P.cancel=U,P.flush=C,P}function d(q){var M=typeof q>"u"?"undefined":w(q);return!!q&&(M=="object"||M=="function")}function f(q){return!!q&&(typeof q>"u"?"undefined":w(q))=="object"}function p(q){return(typeof q>"u"?"undefined":w(q))=="symbol"||f(q)&&Le.call(q)==N}function g(q){if(typeof q=="number")return q;if(p(q))return y;if(d(q)){var M=typeof q.valueOf=="function"?q.valueOf():q;q=d(M)?M+"":M}if(typeof q!="string")return q===0?q:+q;q=q.replace(A,"");var re=W.test(q);return re||we.test(q)?Ee(q.slice(2),re?2:8):F.test(q)?y:+q}var w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(q){return typeof q}:function(q){return q&&typeof Symbol=="function"&&q.constructor===Symbol&&q!==Symbol.prototype?"symbol":typeof q},_="Expected a function",y=NaN,N="[object Symbol]",A=/^\s+|\s+$/g,F=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,we=/^0o[0-7]+$/i,Ee=parseInt,Se=(typeof l>"u"?"undefined":w(l))=="object"&&l&&l.Object===Object&&l,Ce=(typeof self>"u"?"undefined":w(self))=="object"&&self&&self.Object===Object&&self,Be=Se||Ce||Function("return this")(),fe=Object.prototype,Le=fe.toString,le=Math.max,Me=Math.min,qe=function(){return Be.Date.now()};n.exports=u}).call(s,function(){return this}())},function(n,s){function l(w){var _=void 0,y=void 0;for(_=0;_<w.length;_+=1)if(y=w[_],y.dataset&&y.dataset.aos||y.children&&l(y.children))return!0;return!1}function u(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function d(){return!!u()}function f(w,_){var y=window.document,N=u(),A=new N(p);g=_,A.observe(y.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function p(w){w&&w.forEach(function(_){var y=Array.prototype.slice.call(_.addedNodes),N=Array.prototype.slice.call(_.removedNodes),A=y.concat(N);if(l(A))return g()})}Object.defineProperty(s,"__esModule",{value:!0});var g=function(){};s.default={isSupported:d,ready:f}},function(n,s){function l(y,N){if(!(y instanceof N))throw new TypeError("Cannot call a class as a function")}function u(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var d=function(){function y(N,A){for(var F=0;F<A.length;F++){var W=A[F];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty(N,W.key,W)}}return function(N,A,F){return A&&y(N.prototype,A),F&&y(N,F),N}}(),f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,g=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,_=function(){function y(){l(this,y)}return d(y,[{key:"phone",value:function(){var N=u();return!(!f.test(N)&&!p.test(N.substr(0,4)))}},{key:"mobile",value:function(){var N=u();return!(!g.test(N)&&!w.test(N.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),y}();s.default=new _},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(d,f,p){var g=d.node.getAttribute("data-aos-once");f>d.position?d.node.classList.add("aos-animate"):typeof g<"u"&&(g==="false"||!p&&g!=="true")&&d.node.classList.remove("aos-animate")},u=function(d,f){var p=window.pageYOffset,g=window.innerHeight;d.forEach(function(w,_){l(w,g+p,f)})};s.default=u},function(n,s,l){function u(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(s,"__esModule",{value:!0});var d=l(12),f=u(d),p=function(g,w){return g.forEach(function(_,y){_.node.classList.add("aos-init"),_.position=(0,f.default)(_.node,w.offset)}),g};s.default=p},function(n,s,l){function u(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(s,"__esModule",{value:!0});var d=l(13),f=u(d),p=function(g,w){var _=0,y=0,N=window.innerHeight,A={offset:g.getAttribute("data-aos-offset"),anchor:g.getAttribute("data-aos-anchor"),anchorPlacement:g.getAttribute("data-aos-anchor-placement")};switch(A.offset&&!isNaN(A.offset)&&(y=parseInt(A.offset)),A.anchor&&document.querySelectorAll(A.anchor)&&(g=document.querySelectorAll(A.anchor)[0]),_=(0,f.default)(g).top,A.anchorPlacement){case"top-bottom":break;case"center-bottom":_+=g.offsetHeight/2;break;case"bottom-bottom":_+=g.offsetHeight;break;case"top-center":_+=N/2;break;case"bottom-center":_+=N/2+g.offsetHeight;break;case"center-center":_+=N/2+g.offsetHeight/2;break;case"top-top":_+=N;break;case"bottom-top":_+=g.offsetHeight+N;break;case"center-top":_+=g.offsetHeight/2+N}return A.anchorPlacement||A.offset||isNaN(w)||(y=w),_+y};s.default=p},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(u){for(var d=0,f=0;u&&!isNaN(u.offsetLeft)&&!isNaN(u.offsetTop);)d+=u.offsetLeft-(u.tagName!="BODY"?u.scrollLeft:0),f+=u.offsetTop-(u.tagName!="BODY"?u.scrollTop:0),u=u.offsetParent;return{top:f,left:d}};s.default=l},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(u){return u=u||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(u,function(d){return{node:d}})};s.default=l}])})}(sl)),sl.exports}var c0=u0();const d0=Gm(c0);var qm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Lp=Sr.createContext&&Sr.createContext(qm),h0=["attr","size","title"];function f0(i,e){if(i==null)return{};var n=p0(i,e),s,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(l=0;l<u.length;l++)s=u[l],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(i,s)&&(n[s]=i[s])}return n}function p0(i,e){if(i==null)return{};var n={};for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){if(e.indexOf(s)>=0)continue;n[s]=i[s]}return n}function dl(){return dl=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=n[s])}return i},dl.apply(this,arguments)}function Mp(i,e){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable})),n.push.apply(n,s)}return n}function hl(i){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Mp(Object(n),!0).forEach(function(s){m0(i,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):Mp(Object(n)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(n,s))})}return i}function m0(i,e,n){return e=g0(e),e in i?Object.defineProperty(i,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[e]=n,i}function g0(i){var e=_0(i,"string");return typeof e=="symbol"?e:e+""}function _0(i,e){if(typeof i!="object"||!i)return i;var n=i[Symbol.toPrimitive];if(n!==void 0){var s=n.call(i,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Km(i){return i&&i.map((e,n)=>Sr.createElement(e.tag,hl({key:n},e.attr),Km(e.child)))}function Ar(i){return e=>Sr.createElement(v0,dl({attr:hl({},i.attr)},e),Km(i.child))}function v0(i){var e=n=>{var{attr:s,size:l,title:u}=i,d=f0(i,h0),f=l||n.size||"1em",p;return n.className&&(p=n.className),i.className&&(p=(p?p+" ":"")+i.className),Sr.createElement("svg",dl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,d,{className:p,style:hl(hl({color:i.color||n.color},n.style),i.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&Sr.createElement("title",null,u),i.children)};return Lp!==void 0?Sr.createElement(Lp.Consumer,null,n=>e(n)):e(qm)}function y0(i){return Ar({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"},child:[]}]})(i)}function w0(i){return Ar({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(i)}function E0(i){return Ar({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(i)}function S0(i){return Ar({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(i)}function C0(i){return Ar({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(i)}function I0(i){return Ar({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(i)}function k0(i){return Ar({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"},child:[]}]})(i)}/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qm=(...i)=>i.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=me.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...f},p)=>me.createElement("svg",{ref:p,...N0,width:e,height:e,stroke:i,strokeWidth:s?Number(n)*24/Number(e):n,className:Qm("lucide",l),...f},[...d.map(([g,w])=>me.createElement(g,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=(i,e)=>{const n=me.forwardRef(({className:s,...l},u)=>me.createElement(P0,{ref:u,iconNode:e,className:Qm(`lucide-${T0(i)}`,s),...l}));return n.displayName=`${i}`,n};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],x0=Oc("MessageCircle",R0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],O0=Oc("Sparkles",A0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],D0=Oc("X",b0),L0=[{icon:B.jsx(C0,{}),delay:0,link:"https://www.linkedin.com/in/ishan-nilaksha-686461308/"},{icon:B.jsx(w0,{}),delay:.1,link:"https://www.facebook.com"},{icon:B.jsx(S0,{}),delay:.2,link:"https://www.instagram.com/ishan_hatharasinghe/"},{icon:B.jsx(I0,{}),delay:.3,link:"https://wa.me/0703052181"},{icon:B.jsx(E0,{}),delay:.4,link:"https://github.com/ishanHatharasinghe"},{icon:B.jsx(y0,{}),delay:.5,link:"https://www.behance.net/ishannilaksha"},{icon:B.jsx(k0,{}),delay:.6,link:"https://www.fiverr.com/sellers/vector_ix/"}],M0=()=>{const[i,e]=me.useState(!1),[n,s]=me.useState(null),[l,u]=me.useState({x:0,y:0}),[d,f]=me.useState(!1),p=me.useRef(null),g=_=>{const y=_.currentTarget.getBoundingClientRect();u({x:_.clientX-y.left,y:_.clientY-y.top})};me.useEffect(()=>{function _(y){p.current&&!p.current.contains(y.target)&&e(!1)}return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[p]);const w=()=>{window.innerWidth<768&&setTimeout(()=>e(!1),300)};return B.jsxs(B.Fragment,{children:[i&&B.jsx("div",{className:"fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",onClick:()=>e(!1)}),B.jsx("div",{ref:p,className:"fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-50",children:B.jsxs("div",{className:"relative",children:[B.jsxs("button",{onClick:()=>e(!i),onMouseMove:g,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),className:`
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
            `,children:[B.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-all duration-500"}),B.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"}),d&&B.jsx("div",{className:"absolute pointer-events-none transition-all duration-300",style:{left:l.x,top:l.y,transform:"translate(-50%, -50%)"},children:B.jsx(O0,{className:"w-2 h-2 text-yellow-200 animate-spin"})}),B.jsx("div",{className:`
              relative z-10 flex items-center justify-center
              transform transition-all duration-700 ease-out
              ${i?"rotate-180 scale-100":"rotate-0 scale-100"}
            `,children:i?B.jsx(D0,{className:"w-4 h-4 sm:w-5 sm:h-5"}):B.jsx(x0,{className:"w-4 h-4 sm:w-5 sm:h-5"})}),B.jsx("div",{className:`
              absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-orange-400
              ${i?"animate-ping":""}
              transition-opacity duration-300
            `})]}),B.jsx("div",{className:`
            absolute top-14 sm:top-16 md:top-20 left-0
            transform transition-all duration-700 ease-out
            ${i?"opacity-100 translate-y-0 scale-100 translate-x-0":"opacity-0 -translate-y-8 scale-90 -translate-x-4 pointer-events-none"}
          `,children:B.jsxs("div",{className:`
              w-14 sm:w-16 md:w-18 p-2 space-y-2
              bg-gradient-to-b from-gray-900/95 via-black/95 to-gray-900/95
              backdrop-blur-2xl
              border border-orange-500/30
              rounded-2xl md:rounded-3xl
              shadow-2xl shadow-black/60
              relative
              overflow-hidden
            `,children:[B.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/5 animate-pulse"}),B.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-orange-400/5 to-transparent opacity-50"}),B.jsx("div",{className:"absolute top-2 right-2 w-1 h-1 bg-orange-400 rounded-full animate-bounce opacity-60",style:{animationDelay:"0s"}}),B.jsx("div",{className:"absolute bottom-4 left-3 w-0.5 h-0.5 bg-orange-300 rounded-full animate-bounce opacity-40",style:{animationDelay:"1s"}}),B.jsx("div",{className:"absolute top-1/2 right-1 w-0.5 h-0.5 bg-orange-500 rounded-full animate-bounce opacity-50",style:{animationDelay:"2s"}}),L0.map((_,y)=>B.jsxs("a",{href:_.link,target:"_blank",rel:"noopener noreferrer",onClick:w,onMouseEnter:()=>s(y),onMouseLeave:()=>s(null),className:`
                  relative block
                  w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12
                  rounded-xl
                  flex items-center justify-center
                  text-white text-sm sm:text-base md:text-lg
                  transition-all duration-500 ease-out
                  transform hover:scale-125 active:scale-95
                  ${n===y?"bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 shadow-lg shadow-orange-500/60 -translate-y-1":"bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 hover:from-gray-700/80 hover:to-gray-800/80"}
                  border border-orange-500/30
                  group/icon
                  touch-manipulation
                `,style:{animationDelay:`${_.delay}s`,animation:i?"slideInLeft 0.6s ease-out forwards":"none"},children:[B.jsx("div",{className:`
                  absolute inset-0 rounded-xl
                  bg-gradient-to-br from-orange-400/30 to-orange-600/30
                  opacity-0 group-hover/icon:opacity-100
                  transition-all duration-500
                  blur-sm group-hover/icon:blur-none
                `}),B.jsx("div",{className:`
                  absolute inset-0 rounded-xl
                  bg-gradient-to-tr from-white/10 to-transparent
                  opacity-0 group-hover/icon:opacity-100
                  transition-all duration-700
                `}),B.jsx("div",{className:`
                  relative z-10 flex items-center justify-center
                  transform group-hover/icon:rotate-12 group-hover/icon:scale-110
                  transition-all duration-500 ease-out
                  ${n===y?"animate-pulse":""}
                `,children:_.icon}),n===y&&B.jsxs(B.Fragment,{children:[B.jsx("div",{className:"absolute inset-0 rounded-xl bg-orange-500/20 animate-ping"}),B.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/20 to-orange-600/20 animate-pulse"})]}),B.jsx("div",{className:`
                  absolute inset-0 rounded-xl
                  border-2 border-orange-400/50
                  opacity-0 group-hover/icon:opacity-100
                  transition-all duration-300
                  animate-pulse
                `})]},y))]})})]})}),B.jsx("style",{jsx:!0,children:`
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
      `})]})},F0=()=>{};var Fp={};/**
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
 */const Ym={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const D=function(i,e){if(!i)throw Ei(e)},Ei=function(i){return new Error("Firebase Database ("+Ym.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
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
 */const Xm=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},U0=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],f=i[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},bc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,f=d?i[l+1]:0,p=l+2<i.length,g=p?i[l+2]:0,w=u>>2,_=(u&3)<<4|f>>4;let y=(f&15)<<2|g>>6,N=g&63;p||(N=64,d||(y=64)),s.push(n[w],n[_],n[y],n[N])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Xm(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):U0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],f=l<i.length?n[i.charAt(l)]:0;++l;const g=l<i.length?n[i.charAt(l)]:64;++l;const _=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||f==null||g==null||_==null)throw new z0;const y=u<<2|f>>4;if(s.push(y),g!==64){const N=f<<4&240|g>>2;if(s.push(N),_!==64){const A=g<<6&192|_;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class z0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jm=function(i){const e=Xm(i);return bc.encodeByteArray(e,!0)},fl=function(i){return Jm(i).replace(/\./g,"")},pl=function(i){try{return bc.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function j0(i){return Zm(void 0,i)}function Zm(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!W0(n)||(i[n]=Zm(i[n],e[n]));return i}function W0(i){return i!=="__proto__"}/**
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
 */function V0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const H0=()=>V0().__FIREBASE_DEFAULTS__,B0=()=>{if(typeof process>"u"||typeof Fp>"u")return;const i=Fp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},$0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&pl(i[1]);return e&&JSON.parse(e)},Dc=()=>{try{return F0()||H0()||B0()||$0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},eg=i=>{var e,n;return(n=(e=Dc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},G0=i=>{const e=eg(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},tg=()=>{var i;return(i=Dc())===null||i===void 0?void 0:i.config},ng=i=>{var e;return(e=Dc())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Fs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Si(i){return i.endsWith(".cloudworkstations.dev")}async function rg(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function q0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[fl(JSON.stringify(n)),fl(JSON.stringify(d)),""].join(".")}const ws={};function K0(){const i={prod:[],emulator:[]};for(const e of Object.keys(ws))ws[e]?i.emulator.push(e):i.prod.push(e);return i}function Q0(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let Up=!1;function ig(i,e){if(typeof window>"u"||typeof document>"u"||!Si(window.location.host)||ws[i]===e||ws[i]||Up)return;ws[i]=e;function n(y){return`__firebase__banner__${y}`}const s="__firebase__banner",u=K0().prod.length>0;function d(){const y=document.getElementById(s);y&&y.remove()}function f(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function p(y,N){y.setAttribute("width","24"),y.setAttribute("id",N),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function g(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Up=!0,d()},y}function w(y,N){y.setAttribute("id",N),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function _(){const y=Q0(s),N=n("text"),A=document.getElementById(N)||document.createElement("span"),F=n("learnmore"),W=document.getElementById(F)||document.createElement("a"),we=n("preprendIcon"),Ee=document.getElementById(we)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const Se=y.element;f(Se),w(W,F);const Ce=g();p(Ee,we),Se.append(Ee,A,W,Ce),document.body.appendChild(Se)}u?(A.innerText="Preview backend disconnected.",Ee.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function Y0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function X0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function sg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J0(){const i=gt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function og(){return Ym.NODE_ADMIN===!0}function Z0(){try{return typeof indexedDB=="object"}catch{return!1}}function e1(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
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
 */const t1="FirebaseError";class rr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=t1,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Us.prototype.create)}}class Us{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?n1(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new rr(l,f,s)}}function n1(i,e){return i.replace(r1,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const r1=/\{\$([^}]+)}/g;/**
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
 */function Ns(i){return JSON.parse(i)}function rt(i){return JSON.stringify(i)}/**
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
 */const lg=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=Ns(pl(u[0])||""),n=Ns(pl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},i1=function(i){const e=lg(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},s1=function(i){const e=lg(i).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function cn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function fi(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function ac(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ml(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function Ir(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if(zp(u)&&zp(d)){if(!Ir(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function zp(i){return i!==null&&typeof i=="object"}/**
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
 */class o1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)s[_]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let _=16;_<80;_++){const y=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(y<<1|y>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,w;for(let _=0;_<80;_++){_<40?_<20?(g=f^u&(d^f),w=1518500249):(g=u^d^f,w=1859775393):_<60?(g=u&d|f&(u|d),w=2400959708):(g=u^d^f,w=3395469782);const y=(l<<5|l>>>27)+g+p+w+s[_]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=y}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function l1(i,e){const n=new a1(i,e);return n.subscribe.bind(n)}class a1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");u1(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Ku),l.error===void 0&&(l.error=Ku),l.complete===void 0&&(l.complete=Ku);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function u1(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Ku(){}function Ml(i,e){return`${i} failed: ${e} argument `}/**
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
 */const c1=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,D(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Fl=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function At(i){return i&&i._delegate?i._delegate:i}class kr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vr="[DEFAULT]";/**
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
 */class d1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Fs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(f1(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:h1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function h1(i){return i===vr?void 0:i}function f1(i){return i.instantiationMode==="EAGER"}/**
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
 */class p1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new d1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Te||(Te={}));const m1={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},g1=Te.INFO,_1={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},v1=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=_1[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=g1,this._logHandler=v1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const y1=(i,e)=>e.some(n=>i instanceof n);let jp,Wp;function w1(){return jp||(jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function E1(){return Wp||(Wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ag=new WeakMap,uc=new WeakMap,ug=new WeakMap,Qu=new WeakMap,Fc=new WeakMap;function S1(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Xn(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&ag.set(n,i)}).catch(()=>{}),Fc.set(e,i),e}function C1(i){if(uc.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});uc.set(i,e)}let cc={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return uc.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ug.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function I1(i){cc=i(cc)}function k1(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Yu(this),e,...n);return ug.set(s,e.sort?e.sort():[e]),Xn(s)}:E1().includes(i)?function(...e){return i.apply(Yu(this),e),Xn(ag.get(this))}:function(...e){return Xn(i.apply(Yu(this),e))}}function T1(i){return typeof i=="function"?k1(i):(i instanceof IDBTransaction&&C1(i),y1(i,w1())?new Proxy(i,cc):i)}function Xn(i){if(i instanceof IDBRequest)return S1(i);if(Qu.has(i))return Qu.get(i);const e=T1(i);return e!==i&&(Qu.set(i,e),Fc.set(e,i)),e}const Yu=i=>Fc.get(i);function N1(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),f=Xn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Xn(d.result),p.oldVersion,p.newVersion,Xn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const P1=["get","getKey","getAll","getAllKeys","count"],R1=["put","add","delete","clear"],Xu=new Map;function Vp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Xu.get(e))return Xu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=R1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||P1.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return Xu.set(e,u),u}I1(i=>({...i,get:(e,n,s)=>Vp(e,n)||i.get(e,n,s),has:(e,n)=>!!Vp(e,n)||i.has(e,n)}));/**
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
 */class x1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(A1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function A1(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dc="@firebase/app",Hp="0.13.1";/**
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
 */const In=new Mc("@firebase/app"),O1="@firebase/app-compat",b1="@firebase/analytics-compat",D1="@firebase/analytics",L1="@firebase/app-check-compat",M1="@firebase/app-check",F1="@firebase/auth",U1="@firebase/auth-compat",z1="@firebase/database",j1="@firebase/data-connect",W1="@firebase/database-compat",V1="@firebase/functions",H1="@firebase/functions-compat",B1="@firebase/installations",$1="@firebase/installations-compat",G1="@firebase/messaging",q1="@firebase/messaging-compat",K1="@firebase/performance",Q1="@firebase/performance-compat",Y1="@firebase/remote-config",X1="@firebase/remote-config-compat",J1="@firebase/storage",Z1="@firebase/storage-compat",ew="@firebase/firestore",tw="@firebase/ai",nw="@firebase/firestore-compat",rw="firebase",iw="11.9.0";/**
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
 */const hc="[DEFAULT]",sw={[dc]:"fire-core",[O1]:"fire-core-compat",[D1]:"fire-analytics",[b1]:"fire-analytics-compat",[M1]:"fire-app-check",[L1]:"fire-app-check-compat",[F1]:"fire-auth",[U1]:"fire-auth-compat",[z1]:"fire-rtdb",[j1]:"fire-data-connect",[W1]:"fire-rtdb-compat",[V1]:"fire-fn",[H1]:"fire-fn-compat",[B1]:"fire-iid",[$1]:"fire-iid-compat",[G1]:"fire-fcm",[q1]:"fire-fcm-compat",[K1]:"fire-perf",[Q1]:"fire-perf-compat",[Y1]:"fire-rc",[X1]:"fire-rc-compat",[J1]:"fire-gcs",[Z1]:"fire-gcs-compat",[ew]:"fire-fst",[nw]:"fire-fst-compat",[tw]:"fire-vertex","fire-js":"fire-js",[rw]:"fire-js-all"};/**
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
 */const gl=new Map,ow=new Map,fc=new Map;function Bp(i,e){try{i.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function pi(i){const e=i.name;if(fc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;fc.set(e,i);for(const n of gl.values())Bp(n,i);for(const n of ow.values())Bp(n,i);return!0}function Uc(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Qt(i){return i==null?!1:i.settings!==void 0}/**
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
 */const lw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Us("app","Firebase",lw);/**
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
 */class aw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ii=iw;function cg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:hc,automaticDataCollectionEnabled:!0},e),l=s.name;if(typeof l!="string"||!l)throw Jn.create("bad-app-name",{appName:String(l)});if(n||(n=tg()),!n)throw Jn.create("no-options");const u=gl.get(l);if(u){if(Ir(n,u.options)&&Ir(s,u.config))return u;throw Jn.create("duplicate-app",{appName:l})}const d=new p1(l);for(const p of fc.values())d.addComponent(p);const f=new aw(n,s,d);return gl.set(l,f),f}function dg(i=hc){const e=gl.get(i);if(!e&&i===hc&&tg())return cg();if(!e)throw Jn.create("no-app",{appName:i});return e}function Zn(i,e,n){var s;let l=(s=sw[i])!==null&&s!==void 0?s:i;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(f.join(" "));return}pi(new kr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const uw="firebase-heartbeat-database",cw=1,Ps="firebase-heartbeat-store";let Ju=null;function hg(){return Ju||(Ju=N1(uw,cw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ps)}catch(n){console.warn(n)}}}}).catch(i=>{throw Jn.create("idb-open",{originalErrorMessage:i.message})})),Ju}async function dw(i){try{const n=(await hg()).transaction(Ps),s=await n.objectStore(Ps).get(fg(i));return await n.done,s}catch(e){if(e instanceof rr)In.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function $p(i,e){try{const s=(await hg()).transaction(Ps,"readwrite");await s.objectStore(Ps).put(e,fg(i)),await s.done}catch(n){if(n instanceof rr)In.warn(n.message);else{const s=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(s.message)}}}function fg(i){return`${i.name}!${i.options.appId}`}/**
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
 */const hw=1024,fw=30;class pw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Gp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>fw){const d=_w(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){In.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gp(),{heartbeatsToSend:s,unsentEntries:l}=mw(this._heartbeatsCache.heartbeats),u=fl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return In.warn(n),""}}}function Gp(){return new Date().toISOString().substring(0,10)}function mw(i,e=hw){const n=[];let s=i.slice();for(const l of i){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),qp(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),qp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class gw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z0()?e1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return $p(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return $p(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function qp(i){return fl(JSON.stringify({version:2,heartbeats:i})).length}function _w(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function vw(i){pi(new kr("platform-logger",e=>new x1(e),"PRIVATE")),pi(new kr("heartbeat",e=>new pw(e),"PRIVATE")),Zn(dc,Hp,i),Zn(dc,Hp,"esm2017"),Zn("fire-js","")}vw("");var yw="firebase",ww="11.9.1";/**
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
 */Zn(yw,ww,"app");function zc(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(i);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(i,s[l])&&(n[s[l]]=i[s[l]]);return n}function pg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ew=pg,mg=new Us("auth","Firebase",pg());/**
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
 */const _l=new Mc("@firebase/auth");function Sw(i,...e){_l.logLevel<=Te.WARN&&_l.warn(`Auth (${Ii}): ${i}`,...e)}function ol(i,...e){_l.logLevel<=Te.ERROR&&_l.error(`Auth (${Ii}): ${i}`,...e)}/**
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
 */function un(i,...e){throw Wc(i,...e)}function Jt(i,...e){return Wc(i,...e)}function jc(i,e,n){const s=Object.assign(Object.assign({},Ew()),{[e]:n});return new Us("auth","Firebase",s).create(e,{appName:i.name})}function Cr(i){return jc(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cw(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&un(i,"argument-error"),jc(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wc(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return mg.create(i,...e)}function ne(i,e,...n){if(!i)throw Wc(e,...n)}function wn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ol(e),new Error(e)}function kn(i,e){i||wn(e)}/**
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
 */function pc(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Iw(){return Kp()==="http:"||Kp()==="https:"}function Kp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function kw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Iw()||X0()||"connection"in navigator)?navigator.onLine:!0}function Tw(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Lc()||sg()}get(){return kw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vc(i,e){kn(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Nw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Pw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Rw=new zs(3e4,6e4);function Hc(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function ki(i,e,n,s,l={}){return _g(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Ci(Object.assign({key:i.config.apiKey},d)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},u);return Y0()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Si(i.emulatorConfig.host)&&(g.credentials="include"),gg.fetch()(await vg(i,i.config.apiHost,n,f),g)})}async function _g(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},Nw),e);try{const l=new Aw(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw nl(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw nl(i,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw nl(i,"email-already-in-use",d);if(p==="USER_DISABLED")throw nl(i,"user-disabled",d);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw jc(i,w,g);un(i,w)}}catch(l){if(l instanceof rr)throw l;un(i,"network-request-failed",{message:String(l)})}}async function xw(i,e,n,s,l={}){const u=await ki(i,e,n,s,l);return"mfaPendingCredential"in u&&un(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function vg(i,e,n,s){const l=`${e}${n}?${s}`,u=i,d=u.config.emulator?Vc(i.config,l):`${i.config.apiScheme}://${l}`;return Pw.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class Aw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Jt(this.auth,"network-request-failed")),Rw.get())})}}function nl(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Jt(i,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function Ow(i,e){return ki(i,"POST","/v1/accounts:delete",e)}async function vl(i,e){return ki(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Es(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bw(i,e=!1){const n=At(i),s=await n.getIdToken(e),l=Bc(s);ne(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Es(Zu(l.auth_time)),issuedAtTime:Es(Zu(l.iat)),expirationTime:Es(Zu(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Zu(i){return Number(i)*1e3}function Bc(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const l=pl(n);return l?JSON.parse(l):(ol("Failed to decode base64 JWT payload"),null)}catch(l){return ol("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Qp(i){const e=Bc(i);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rs(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rr&&Dw(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Dw({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Lw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yl(i){var e;const n=i.auth,s=await i.getIdToken(),l=await Rs(i,vl(n,{idToken:s}));ne(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];i._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?yg(u.providerUserInfo):[],f=Fw(i.providerData,d),p=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(f!=null&&f.length),w=p?g:!1,_={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new mc(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,_)}async function Mw(i){const e=At(i);await yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fw(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function yg(i){return i.map(e=>{var{providerId:n}=e,s=zc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Uw(i,e){const n=await _g(i,{},async()=>{const s=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=i.config,d=await vg(i,l,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return i.emulatorConfig&&Si(i.emulatorConfig.host)&&(p.credentials="include"),gg.fetch()(d,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zw(i,e){return ki(i,"POST","/v2/accounts:revokeToken",Hc(i,e))}/**
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
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=Qp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await Uw(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new li;return s&&(ne(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(ne(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(ne(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function Gn(i,e){ne(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Yt{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=zc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new mc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Rs(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bw(this,e)}reload(){return Mw(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await yl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await Rs(this,Ow(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,w;const _=(s=n.displayName)!==null&&s!==void 0?s:void 0,y=(l=n.email)!==null&&l!==void 0?l:void 0,N=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,A=(d=n.photoURL)!==null&&d!==void 0?d:void 0,F=(f=n.tenantId)!==null&&f!==void 0?f:void 0,W=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,we=(g=n.createdAt)!==null&&g!==void 0?g:void 0,Ee=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:Se,emailVerified:Ce,isAnonymous:Be,providerData:fe,stsTokenManager:Le}=n;ne(Se&&Le,e,"internal-error");const le=li.fromJSON(this.name,Le);ne(typeof Se=="string",e,"internal-error"),Gn(_,e.name),Gn(y,e.name),ne(typeof Ce=="boolean",e,"internal-error"),ne(typeof Be=="boolean",e,"internal-error"),Gn(N,e.name),Gn(A,e.name),Gn(F,e.name),Gn(W,e.name),Gn(we,e.name),Gn(Ee,e.name);const Me=new Yt({uid:Se,auth:e,email:y,emailVerified:Ce,displayName:_,isAnonymous:Be,photoURL:A,phoneNumber:N,tenantId:F,stsTokenManager:le,createdAt:we,lastLoginAt:Ee});return fe&&Array.isArray(fe)&&(Me.providerData=fe.map(qe=>Object.assign({},qe))),W&&(Me._redirectEventId=W),Me}static async _fromIdTokenResponse(e,n,s=!1){const l=new li;l.updateFromServerResponse(n);const u=new Yt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await yl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];ne(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?yg(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new li;f.updateFromIdToken(s);const p=new Yt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new mc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
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
 */const Yp=new Map;function En(i){kn(i instanceof Function,"Expected a class definition");let e=Yp.get(i);return e?(kn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Yp.set(i,e),e)}/**
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
 */class wg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wg.type="NONE";const Xp=wg;/**
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
 */function ll(i,e,n){return`firebase:${i}:${e}:${n}`}class ai{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=ll(this.userKey,l.apiKey,u),this.fullPersistenceKey=ll("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await vl(this.auth,{idToken:e}).catch(()=>{});return n?Yt._fromGetAccountInfoResponse(this.auth,n,e):null}return Yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ai(En(Xp),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||En(Xp);const d=ll(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const w=await g._get(d);if(w){let _;if(typeof w=="string"){const y=await vl(e,{idToken:w}).catch(()=>{});if(!y)break;_=await Yt._fromGetAccountInfoResponse(e,y,w)}else _=Yt._fromJSON(e,w);g!==u&&(f=_),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new ai(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new ai(u,e,s))}}/**
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
 */function Jp(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ig(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tg(e))return"Blackberry";if(Ng(e))return"Webos";if(Sg(e))return"Safari";if((e.includes("chrome/")||Cg(e))&&!e.includes("edge/"))return"Chrome";if(kg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Eg(i=gt()){return/firefox\//i.test(i)}function Sg(i=gt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cg(i=gt()){return/crios\//i.test(i)}function Ig(i=gt()){return/iemobile/i.test(i)}function kg(i=gt()){return/android/i.test(i)}function Tg(i=gt()){return/blackberry/i.test(i)}function Ng(i=gt()){return/webos/i.test(i)}function $c(i=gt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function jw(i=gt()){var e;return $c(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ww(){return J0()&&document.documentMode===10}function Pg(i=gt()){return $c(i)||kg(i)||Ng(i)||Tg(i)||/windows phone/i.test(i)||Ig(i)}/**
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
 */function Rg(i,e=[]){let n;switch(i){case"Browser":n=Jp(gt());break;case"Worker":n=`${Jp(gt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${s}`}/**
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
 */class Vw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Hw(i,e={}){return ki(i,"GET","/v2/passwordPolicy",Hc(i,e))}/**
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
 */const Bw=6;class $w{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:Bw,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class Gw{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zp(this),this.idTokenSubscription=new Zp(this),this.beforeStateQueue=new Vw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vl(this,{idToken:e}),s=await Yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(Cr(this));const n=e?At(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hw(this),n=new $w(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Us("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await zw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Sw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ul(i){return At(i)}class Zp{constructor(e){this.auth=e,this.observer=null,this.addObserver=l1(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qw(i){Gc=i}function Kw(i){return Gc.loadJS(i)}function Qw(){return Gc.gapiScript}function Yw(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Xw(i,e){const n=Uc(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Ir(u,e??{}))return l;un(l,"already-initialized")}return n.initialize({options:e})}function Jw(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Zw(i,e,n){const s=Ul(i);ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=xg(e),{host:d,port:f}=eE(e),p=f===null?"":`:${f}`,g={url:`${u}//${d}${p}/`},w=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){ne(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ne(Ir(g,s.config.emulator)&&Ir(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Si(d)?(rg(`${u}//${d}${p}`),ig("Auth",!0)):tE()}function xg(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function eE(i){const e=xg(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:em(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:em(d)}}}function em(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function tE(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Ag{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}/**
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
 */async function ui(i,e){return xw(i,"POST","/v1/accounts:signInWithIdp",Hc(i,e))}/**
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
 */const nE="http://localhost";class Tr extends Ag{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=zc(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new Tr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return ui(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ui(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ui(e,n)}buildRequest(){const e={requestUri:nE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
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
 */class qc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class js extends qc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qn extends js{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class yn extends js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return yn.credential(n,s)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
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
 */class Kn extends js{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class Qn extends js{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */class mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await Yt._fromIdTokenResponse(e,s,l),d=tm(s);return new mi({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=tm(s);return new mi({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function tm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class wl extends rr{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,wl.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new wl(e,n,s,l)}}function Og(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?wl._fromErrorAndOperation(i,u,e,s):u})}async function rE(i,e,n=!1){const s=await Rs(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return mi._forOperation(i,"link",s)}/**
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
 */async function iE(i,e,n=!1){const{auth:s}=i;if(Qt(s.app))return Promise.reject(Cr(s));const l="reauthenticate";try{const u=await Rs(i,Og(s,l,e,i),n);ne(u.idToken,s,"internal-error");const d=Bc(u.idToken);ne(d,s,"internal-error");const{sub:f}=d;return ne(i.uid===f,s,"user-mismatch"),mi._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&un(s,"user-mismatch"),u}}/**
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
 */async function sE(i,e,n=!1){if(Qt(i.app))return Promise.reject(Cr(i));const s="signIn",l=await Og(i,s,e),u=await mi._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}function oE(i,e,n,s){return At(i).onIdTokenChanged(e,n,s)}function lE(i,e,n){return At(i).beforeAuthStateChanged(e,n)}function Yk(i){return At(i).signOut()}const El="__sak";/**
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
 */class bg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(El,"1"),this.storage.removeItem(El),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const aE=1e3,uE=10;class Dg extends bg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);Ww()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,uE):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},aE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dg.type="LOCAL";const cE=Dg;/**
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
 */class Lg extends bg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lg.type="SESSION";const Mg=Lg;/**
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
 */function dE(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new zl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await dE(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zl.receivers=[];/**
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
 */function Kc(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class hE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=Kc("",20);l.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(_){const y=_;if(y.data.eventId===g)switch(y.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(y.data.response);break;default:clearTimeout(w),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function an(){return window}function fE(i){an().location.href=i}/**
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
 */function Fg(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function pE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mE(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function gE(){return Fg()?self:null}/**
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
 */const Ug="firebaseLocalStorageDb",_E=1,Sl="firebaseLocalStorage",zg="fbase_key";class Ws{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jl(i,e){return i.transaction([Sl],e?"readwrite":"readonly").objectStore(Sl)}function vE(){const i=indexedDB.deleteDatabase(Ug);return new Ws(i).toPromise()}function gc(){const i=indexedDB.open(Ug,_E);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Sl,{keyPath:zg})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Sl)?e(s):(s.close(),await vE(),e(await gc()))})})}async function nm(i,e,n){const s=jl(i,!0).put({[zg]:e,value:n});return new Ws(s).toPromise()}async function yE(i,e){const n=jl(i,!1).get(e),s=await new Ws(n).toPromise();return s===void 0?null:s.value}function rm(i,e){const n=jl(i,!0).delete(e);return new Ws(n).toPromise()}const wE=800,EE=3;class jg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>EE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zl._getInstance(gE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pE(),!this.activeServiceWorker)return;this.sender=new hE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gc();return await nm(e,El,"1"),await rm(e,El),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>nm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>yE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=jl(l,!1).getAll();return new Ws(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jg.type="LOCAL";const SE=jg;new zs(3e4,6e4);/**
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
 */function Wg(i,e){return e?En(e):(ne(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Qc extends Ag{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CE(i){return sE(i.auth,new Qc(i),i.bypassAuthState)}function IE(i){const{auth:e,user:n}=i;return ne(n,e,"internal-error"),iE(n,new Qc(i),i.bypassAuthState)}async function kE(i){const{auth:e,user:n}=i;return ne(n,e,"internal-error"),rE(n,new Qc(i),i.bypassAuthState)}/**
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
 */class Vg{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CE;case"linkViaPopup":case"linkViaRedirect":return kE;case"reauthViaPopup":case"reauthViaRedirect":return IE;default:un(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TE=new zs(2e3,1e4);async function Xk(i,e,n){if(Qt(i.app))return Promise.reject(Jt(i,"operation-not-supported-in-this-environment"));const s=Ul(i);Cw(i,e,qc);const l=Wg(s,n);return new wr(s,"signInViaPopup",e,l).executeNotNull()}class wr extends Vg{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TE.get())};e()}}wr.currentPopupAction=null;/**
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
 */const NE="pendingRedirect",al=new Map;class PE extends Vg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const s=await RE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RE(i,e){const n=OE(e),s=AE(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function xE(i,e){al.set(i._key(),e)}function AE(i){return En(i._redirectPersistence)}function OE(i){return ll(NE,i.config.apiKey,i.name)}async function bE(i,e,n=!1){if(Qt(i.app))return Promise.reject(Cr(i));const s=Ul(i),l=Wg(s,e),d=await new PE(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const DE=10*60*1e3;class LE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ME(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Hg(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DE&&this.cachedEventUids.clear(),this.cachedEventUids.has(im(e))}saveEventToCache(e){this.cachedEventUids.add(im(e)),this.lastProcessedEventTime=Date.now()}}function im(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Hg({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ME(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hg(i);default:return!1}}/**
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
 */async function FE(i,e={}){return ki(i,"GET","/v1/projects",e)}/**
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
 */const UE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zE=/^https?/;async function jE(i){if(i.config.emulator)return;const{authorizedDomains:e}=await FE(i);for(const n of e)try{if(WE(n))return}catch{}un(i,"unauthorized-domain")}function WE(i){const e=pc(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!zE.test(n))return!1;if(UE.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const VE=new zs(3e4,6e4);function sm(){const i=an().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function HE(i){return new Promise((e,n)=>{var s,l,u;function d(){sm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sm(),n(Jt(i,"network-request-failed"))},timeout:VE.get()})}if(!((l=(s=an().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=an().gapi)===null||u===void 0)&&u.load)d();else{const f=Yw("iframefcb");return an()[f]=()=>{gapi.load?d():n(Jt(i,"network-request-failed"))},Kw(`${Qw()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw ul=null,e})}let ul=null;function BE(i){return ul=ul||HE(i),ul}/**
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
 */const $E=new zs(5e3,15e3),GE="__/auth/iframe",qE="emulator/auth/iframe",KE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YE(i){const e=i.config;ne(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Vc(e,qE):`https://${i.config.authDomain}/${GE}`,s={apiKey:e.apiKey,appName:i.name,v:Ii},l=QE.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ci(s).slice(1)}`}async function XE(i){const e=await BE(i),n=an().gapi;return ne(n,i,"internal-error"),e.open({where:document.body,url:YE(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KE,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=Jt(i,"network-request-failed"),f=an().setTimeout(()=>{u(d)},$E.get());function p(){an().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
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
 */const JE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZE=500,eS=600,tS="_blank",nS="http://localhost";class om{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rS(i,e,n,s=ZE,l=eS){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},JE),{width:s.toString(),height:l.toString(),top:u,left:d}),g=gt().toLowerCase();n&&(f=Cg(g)?tS:n),Eg(g)&&(e=e||nS,p.scrollbars="yes");const w=Object.entries(p).reduce((y,[N,A])=>`${y}${N}=${A},`,"");if(jw(g)&&f!=="_self")return iS(e||"",f),new om(null);const _=window.open(e||"",f,w);ne(_,i,"popup-blocked");try{_.focus()}catch{}return new om(_)}function iS(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const sS="__/auth/handler",oS="emulator/auth/handler",lS=encodeURIComponent("fac");async function lm(i,e,n,s,l,u){ne(i.config.authDomain,i,"auth-domain-config-required"),ne(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:Ii,eventId:l};if(e instanceof qc){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",ac(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,_]of Object.entries({}))d[w]=_}if(e instanceof js){const w=e.getScopes().filter(_=>_!=="");w.length>0&&(d.scopes=w.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await i._getAppCheckToken(),g=p?`#${lS}=${encodeURIComponent(p)}`:"";return`${aS(i)}?${Ci(f).slice(1)}${g}`}function aS({config:i}){return i.emulator?Vc(i,oS):`https://${i.authDomain}/${sS}`}/**
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
 */const ec="webStorageSupport";class uS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mg,this._completeRedirectFn=bE,this._overrideRedirectResult=xE}async _openPopup(e,n,s,l){var u;kn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await lm(e,n,s,pc(),l);return rS(e,d,Kc())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await lm(e,n,s,pc(),l);return fE(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(kn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await XE(e),s=new LE(e);return n.register("authEvent",l=>(ne(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ec,{type:ec},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[ec];d!==void 0&&n(!!d),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pg()||Sg()||$c()}}const cS=uS;var am="@firebase/auth",um="1.10.7";/**
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
 */class dS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fS(i){pi(new kr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;ne(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rg(i)},g=new Gw(s,l,u,p);return Jw(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),pi(new kr("auth-internal",e=>{const n=Ul(e.getProvider("auth").getImmediate());return(s=>new dS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(am,um,hS(i)),Zn(am,um,"esm2017")}/**
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
 */const pS=5*60,mS=ng("authIdTokenMaxAge")||pS;let cm=null;const gS=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>mS)return;const l=n==null?void 0:n.token;cm!==l&&(cm=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function _S(i=dg()){const e=Uc(i,"auth");if(e.isInitialized())return e.getImmediate();const n=Xw(i,{popupRedirectResolver:cS,persistence:[SE,cE,Mg]}),s=ng("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=gS(u.toString());lE(n,d,()=>d(n.currentUser)),oE(n,f=>d(f))}}const l=eg("auth");return l&&Zw(n,`http://${l}`),n}function vS(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}qw({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=Jt("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",vS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fS("Browser");var dm={};const hm="@firebase/database",fm="1.0.19";/**
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
 */let Bg="";function yS(i){Bg=i}/**
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
 */class wS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ns(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ES{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const $g=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wS(e)}}catch{}return new ES},Er=$g("localStorage"),SS=$g("sessionStorage");/**
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
 */const ci=new Mc("@firebase/database"),CS=function(){let i=1;return function(){return i++}}(),Gg=function(i){const e=c1(i),n=new o1;n.update(e);const s=n.digest();return bc.encodeByteArray(s)},Vs=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Vs.apply(null,s):typeof s=="object"?e+=rt(s):e+=s,e+=" "}return e};let Ss=null,pm=!0;const IS=function(i,e){D(!e,"Can't turn on custom loggers persistently."),ci.logLevel=Te.VERBOSE,Ss=ci.log.bind(ci)},lt=function(...i){if(pm===!0&&(pm=!1,Ss===null&&SS.get("logging_enabled")===!0&&IS()),Ss){const e=Vs.apply(null,i);Ss(e)}},Hs=function(i){return function(...e){lt(i,...e)}},_c=function(...i){const e="FIREBASE INTERNAL ERROR: "+Vs(...i);ci.error(e)},Tn=function(...i){const e=`FIREBASE FATAL ERROR: ${Vs(...i)}`;throw ci.error(e),new Error(e)},mt=function(...i){const e="FIREBASE WARNING: "+Vs(...i);ci.warn(e)},kS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Yc=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},TS=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},gi="[MIN_NAME]",Nr="[MAX_NAME]",Or=function(i,e){if(i===e)return 0;if(i===gi||e===Nr)return-1;if(e===gi||i===Nr)return 1;{const n=mm(i),s=mm(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},NS=function(i,e){return i===e?0:i<e?-1:1},ms=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+rt(e))},Xc=function(i){if(typeof i!="object"||i===null)return rt(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=rt(e[s]),n+=":",n+=Xc(i[e[s]]);return n+="}",n},qg=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function at(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const Kg=function(i){D(!Yc(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const w=g.join("");let _="";for(p=0;p<64;p+=8){let y=parseInt(w.substr(p,8),2).toString(16);y.length===1&&(y="0"+y),_=_+y}return _.toLowerCase()},PS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xS(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const AS=new RegExp("^-?(0*)\\d{1,10}$"),OS=-2147483648,bS=2147483647,mm=function(i){if(AS.test(i)){const e=Number(i);if(e>=OS&&e<=bS)return e}return null},Ti=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw mt("Exception was thrown by user callback.",n),e},Math.floor(0))}},DS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Cs=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class LS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Qt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){mt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class MS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',mt(e)}}class cl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cl.OWNER="owner";/**
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
 */const Jc="5",Qg="v",Yg="s",Xg="r",Jg="f",Zg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,e_="ls",t_="p",vc="ac",n_="websocket",r_="long_polling";/**
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
 */class i_{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Er.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Er.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function FS(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function s_(i,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let s;if(e===n_)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===r_)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);FS(i)&&(n.ns=i.namespace);const l=[];return at(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
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
 */class US{constructor(){this.counters_={}}incrementCounter(e,n=1){cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return j0(this.counters_)}}/**
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
 */const tc={},nc={};function Zc(i){const e=i.toString();return tc[e]||(tc[e]=new US),tc[e]}function zS(i,e){const n=i.toString();return nc[n]||(nc[n]=e()),nc[n]}/**
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
 */class jS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ti(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const gm="start",WS="close",VS="pLPCommand",HS="pRTLPCB",o_="id",l_="pw",a_="ser",BS="cb",$S="seg",GS="ts",qS="d",KS="dframe",u_=1870,c_=30,QS=u_-c_,YS=25e3,XS=3e4;class oi{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Hs(e),this.stats_=Zc(n),this.urlFn=p=>(this.appCheckToken&&(p[vc]=this.appCheckToken),s_(n,r_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new jS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(XS)),TS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ed((...u)=>{const[d,f,p,g,w]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===gm)this.id=f,this.password=p;else if(d===WS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[gm]="t",s[a_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[BS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Qg]=Jc,this.transportSessionId&&(s[Yg]=this.transportSessionId),this.lastSessionId&&(s[e_]=this.lastSessionId),this.applicationId&&(s[t_]=this.applicationId),this.appCheckToken&&(s[vc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zg.test(location.hostname)&&(s[Xg]=Jg);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oi.forceAllow_=!0}static forceDisallow(){oi.forceDisallow_=!0}static isAvailable(){return oi.forceAllow_?!0:!oi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PS()&&!RS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Jm(n),l=qg(s,QS);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[KS]="t",s[o_]=e,s[l_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ed{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=CS(),window[VS+this.uniqueCallbackIdentifier]=e,window[HS+this.uniqueCallbackIdentifier]=n,this.myIFrame=ed.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){lt("frame writing exception"),f.stack&&lt(f.stack),lt(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[o_]=this.myID,e[l_]=this.myPW,e[a_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+c_+s.length<=u_;){const d=this.pendingSegs.shift();s=s+"&"+$S+l+"="+d.seg+"&"+GS+l+"="+d.ts+"&"+qS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(YS)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const JS=16384,ZS=45e3;let Cl=null;typeof MozWebSocket<"u"?Cl=MozWebSocket:typeof WebSocket<"u"&&(Cl=WebSocket);class ln{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Hs(this.connId),this.stats_=Zc(n),this.connURL=ln.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[Qg]=Jc,typeof location<"u"&&location.hostname&&Zg.test(location.hostname)&&(d[Xg]=Jg),n&&(d[Yg]=n),s&&(d[e_]=s),l&&(d[vc]=l),u&&(d[t_]=u),s_(e,n_,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Er.set("previous_websocket_failure",!0);try{let s;og(),this.mySock=new Cl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){ln.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Cl!==null&&!ln.forceDisallow_}static previouslyFailed(){return Er.isInMemoryStorage||Er.get("previous_websocket_failure")===!0}markConnectionHealthy(){Er.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ns(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qg(n,JS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ZS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ln.responsesRequiredToBeHealthy=2;ln.healthyTimeout=3e4;/**
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
 */class xs{static get ALL_TRANSPORTS(){return[oi,ln]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=ln.isAvailable();let s=n&&!ln.previouslyFailed();if(e.webSocketOnly&&(n||mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ln];else{const l=this.transports_=[];for(const u of xs.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);xs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xs.globalTransportInitialized_=!1;/**
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
 */const eC=6e4,tC=5e3,nC=10*1024,rC=100*1024,rc="t",_m="d",iC="s",vm="r",sC="e",ym="o",wm="a",Em="n",Sm="p",oC="h";class lC{constructor(e,n,s,l,u,d,f,p,g,w){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=w,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Hs("c:"+this.id+":"),this.transportManager_=new xs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Cs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rc in e){const n=e[rc];n===wm?this.upgradeIfSecondaryHealthy_():n===vm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ym&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ms("t",e),s=ms("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Em,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ms("t",e),s=ms("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ms(rc,e);if(_m in e){const s=e[_m];if(n===oC){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Em){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===iC?this.onConnectionShutdown_(s):n===vm?this.onReset_(s):n===sC?_c("Server Error: "+s):n===ym?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_c("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Jc!==s&&mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Cs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(eC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Cs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Er.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class d_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class h_{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Il extends h_{static getInstance(){return new Il}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Lc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Cm=32,Im=768;class Ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new Ne("")}function ce(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function tr(i){return i.pieces_.length-i.pieceNum_}function Oe(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new Ne(i.pieces_,e)}function td(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function aC(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function As(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function f_(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new Ne(e,0)}function Ve(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof Ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new Ne(n,0)}function he(i){return i.pieceNum_>=i.pieces_.length}function Ct(i,e){const n=ce(i),s=ce(e);if(n===null)return e;if(n===s)return Ct(Oe(i),Oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function uC(i,e){const n=As(i,0),s=As(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=Or(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function nd(i,e){if(tr(i)!==tr(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function zt(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(tr(i)>tr(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class cC{constructor(e,n){this.errorPrefix_=n,this.parts_=As(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fl(this.parts_[s]);p_(this)}}function dC(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Fl(e),p_(i)}function hC(i){const e=i.parts_.pop();i.byteLength_-=Fl(e),i.parts_.length>0&&(i.byteLength_-=1)}function p_(i){if(i.byteLength_>Im)throw new Error(i.errorPrefix_+"has a key path longer than "+Im+" bytes ("+i.byteLength_+").");if(i.parts_.length>Cm)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cm+") or object contains a cycle "+yr(i))}function yr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
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
 */class rd extends h_{static getInstance(){return new rd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const gs=1e3,fC=60*5*1e3,km=30*1e3,pC=1.3,mC=3e4,gC="server_kill",Tm=3;class Cn extends d_{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Cn.nextPersistentConnectionId_++,this.log_=Hs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gs,this.maxReconnectDelay_=fC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!og())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Il.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(rt(u)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Fs,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;Cn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&cn(e,"w")){const s=fi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||s1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=km)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=i1(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):_c("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mC&&(this.reconnectDelay_=gs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*pC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Cn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(_){D(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(_)};this.realtime_={close:p,sendRequest:g};const w=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,y]=await Promise.all([this.authTokenProvider_.getToken(w),this.appCheckTokenProvider_.getToken(w)]);d?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=y&&y.token,f=new lC(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,N=>{mt(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(gC)},u))}catch(_){this.log_("Failed to get token: "+_),d||(this.repoInfo_.nodeAdmin&&mt(_),p())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ac(this.interruptReasons_)&&(this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Xc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new Ne(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Tm&&(this.reconnectDelay_=km,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Tm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Bg.replace(/\./g,"-")]=1,Lc()?e["framework.cordova"]=1:sg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Il.getInstance().currentlyOnline();return ac(this.interruptReasons_)&&e}}Cn.nextPersistentConnectionId_=0;Cn.nextConnectionId_=0;/**
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
 */class de{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new de(e,n)}}/**
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
 */class Wl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new de(gi,e),l=new de(gi,n);return this.compare(s,l)!==0}minPost(){return de.MIN}}/**
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
 */let rl;class m_ extends Wl{static get __EMPTY_NODE(){return rl}static set __EMPTY_NODE(e){rl=e}compare(e,n){return Or(e.name,n.name)}isDefinedOn(e){throw Ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return de.MIN}maxPost(){return new de(Nr,rl)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new de(e,rl)}toString(){return".key"}}const di=new m_;/**
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
 */class il{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??tt.RED,this.left=l??It.EMPTY_NODE,this.right=u??It.EMPTY_NODE}copy(e,n,s,l,u){return new tt(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return It.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return It.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class _C{copy(e,n,s,l,u){return this}insert(e,n,s){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class It{constructor(e,n=It.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new It(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new It(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new il(this.root_,null,this.comparator_,!0,e)}}It.EMPTY_NODE=new _C;/**
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
 */function vC(i,e){return Or(i.name,e.name)}function id(i,e){return Or(i,e)}/**
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
 */let yc;function yC(i){yc=i}const g_=function(i){return typeof i=="number"?"number:"+Kg(i):"string:"+i},__=function(i){if(i.isLeafNode()){const e=i.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&cn(e,".sv"),"Priority must be a string or number.")}else D(i===yc||i.isEmpty(),"priority of unexpected type.");D(i===yc||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Nm;class et{static set __childrenNodeConstructor(e){Nm=e}static get __childrenNodeConstructor(){return Nm}constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),__(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:ce(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ce(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+g_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Kg(this.value_):e+=this.value_,this.lazyHash_=Gg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=et.VALUE_TYPE_ORDER.indexOf(n),u=et.VALUE_TYPE_ORDER.indexOf(s);return D(l>=0,"Unknown leaf type: "+n),D(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let v_,y_;function wC(i){v_=i}function EC(i){y_=i}class SC extends Wl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?Or(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return de.MIN}maxPost(){return new de(Nr,new et("[PRIORITY-POST]",y_))}makePost(e,n){const s=v_(e);return new de(n,new et("[PRIORITY-POST]",s))}toString(){return".priority"}}const He=new SC;/**
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
 */const CC=Math.log(2);class IC{constructor(e){const n=u=>parseInt(Math.log(u)/CC,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const kl=function(i,e,n,s){i.sort(e);const l=function(p,g){const w=g-p;let _,y;if(w===0)return null;if(w===1)return _=i[p],y=n?n(_):_,new tt(y,_.node,tt.BLACK,null,null);{const N=parseInt(w/2,10)+p,A=l(p,N),F=l(N+1,g);return _=i[N],y=n?n(_):_,new tt(y,_.node,tt.BLACK,A,F)}},u=function(p){let g=null,w=null,_=i.length;const y=function(A,F){const W=_-A,we=_;_-=A;const Ee=l(W+1,we),Se=i[W],Ce=n?n(Se):Se;N(new tt(Ce,Se.node,F,null,Ee))},N=function(A){g?(g.left=A,g=A):(w=A,g=A)};for(let A=0;A<p.count;++A){const F=p.nextBitIsOne(),W=Math.pow(2,p.count-(A+1));F?y(W,tt.BLACK):(y(W,tt.BLACK),y(W,tt.RED))}return w},d=new IC(i.length),f=u(d);return new It(s||e,f)};/**
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
 */let ic;const _s={};class Sn{static get Default(){return D(He,"ChildrenNode.ts has not been loaded"),ic=ic||new Sn({".priority":_s},{".priority":He}),ic}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=fi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof It?n:null}hasIndex(e){return cn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(de.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=kl(s,e.getCompare()):f=_s;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const w=Object.assign({},this.indexes_);return w[p]=f,new Sn(w,g)}addToIndexes(e,n){const s=ml(this.indexes_,(l,u)=>{const d=fi(this.indexSet_,u);if(D(d,"Missing index implementation for "+u),l===_s)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(de.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),kl(f,d.getCompare())}else return _s;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new de(e.name,f))),p.insert(e,e.node)}});return new Sn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ml(this.indexes_,l=>{if(l===_s)return l;{const u=n.get(e.name);return u?l.remove(new de(e.name,u)):l}});return new Sn(s,this.indexSet_)}}/**
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
 */let vs;class ee{static get EMPTY_NODE(){return vs||(vs=new ee(new It(id),null,Sn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&__(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vs}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vs:n}}getChild(e){const n=ce(e);return n===null?this:this.getImmediateChild(n).getChild(Oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new de(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?vs:this.priorityNode_;return new ee(l,d,u)}}updateChild(e,n){const s=ce(e);if(s===null)return n;{D(ce(e)!==".priority"||tr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Oe(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(He,(d,f)=>{n[d]=f.val(e),s++,u&&ee.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+g_(this.getPriority().val())+":"),this.forEachChild(He,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Gg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new de(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new de(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new de(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,de.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,de.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bs?-1:0}withIndex(e){if(e===di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(He),l=n.getIterator(He);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===di?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kC extends ee{constructor(){super(new It(id),ee.EMPTY_NODE,Sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Bs=new kC;Object.defineProperties(de,{MIN:{value:new de(gi,ee.EMPTY_NODE)},MAX:{value:new de(Nr,Bs)}});m_.__EMPTY_NODE=ee.EMPTY_NODE;et.__childrenNodeConstructor=ee;yC(Bs);EC(Bs);/**
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
 */const TC=!0;function nt(i,e=null){if(i===null)return ee.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new et(n,nt(e))}if(!(i instanceof Array)&&TC){const n=[];let s=!1;if(at(i,(d,f)=>{if(d.substring(0,1)!=="."){const p=nt(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new de(d,p)))}}),n.length===0)return ee.EMPTY_NODE;const u=kl(n,vC,d=>d.name,id);if(s){const d=kl(n,He.getCompare());return new ee(u,nt(e),new Sn({".priority":d},{".priority":He}))}else return new ee(u,nt(e),Sn.Default)}else{let n=ee.EMPTY_NODE;return at(i,(s,l)=>{if(cn(i,s)&&s.substring(0,1)!=="."){const u=nt(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(nt(e))}}wC(nt);/**
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
 */class NC extends Wl{constructor(e){super(),this.indexPath_=e,D(!he(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?Or(e.name,n.name):u}makePost(e,n){const s=nt(e),l=ee.EMPTY_NODE.updateChild(this.indexPath_,s);return new de(n,l)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Bs);return new de(Nr,e)}toString(){return As(this.indexPath_,0).join("/")}}/**
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
 */class PC extends Wl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Or(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return de.MIN}maxPost(){return de.MAX}makePost(e,n){const s=nt(e);return new de(n,s)}toString(){return".value"}}const RC=new PC;/**
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
 */function w_(i){return{type:"value",snapshotNode:i}}function _i(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function Os(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function bs(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function xC(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
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
 */class sd{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(Os(n,f)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(_i(n,s)):d.trackChildChange(bs(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(He,(l,u)=>{n.hasChild(l)||s.trackChildChange(Os(l,u))}),n.isLeafNode()||n.forEachChild(He,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(bs(l,u,d))}else s.trackChildChange(_i(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ds{constructor(e){this.indexedFilter_=new sd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ds.getStartPost_(e),this.endPost_=Ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new de(n,s))||(s=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ee.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(ee.EMPTY_NODE);const u=this;return n.forEachChild(He,(d,f)=>{u.matches(new de(d,f))||(l=l.updateImmediateChild(d,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class AC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new de(n,s))||(s=ee.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=ee.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(ee.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const _=this.index_.getCompare();d=(y,N)=>_(N,y)}else d=this.index_.getCompare();const f=e;D(f.numChildren()===this.limit_,"");const p=new de(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),w=this.rangedFilter_.matches(p);if(f.hasChild(n)){const _=f.getImmediateChild(n);let y=l.getChildAfterChild(this.index_,g,this.reverse_);for(;y!=null&&(y.name===n||f.hasChild(y.name));)y=l.getChildAfterChild(this.index_,y,this.reverse_);const N=y==null?1:d(y,p);if(w&&!s.isEmpty()&&N>=0)return u!=null&&u.trackChildChange(bs(n,s,_)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(Os(n,_));const F=f.updateImmediateChild(n,ee.EMPTY_NODE);return y!=null&&this.rangedFilter_.matches(y)?(u!=null&&u.trackChildChange(_i(y.name,y.node)),F.updateImmediateChild(y.name,y.node)):F}}else return s.isEmpty()?e:w&&d(g,p)>=0?(u!=null&&(u.trackChildChange(Os(g.name,g.node)),u.trackChildChange(_i(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,ee.EMPTY_NODE)):e}}/**
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
 */class od{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=He}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gi}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===He}copy(){const e=new od;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function OC(i){return i.loadsAllData()?new sd(i.getIndex()):i.hasLimit()?new AC(i):new Ds(i)}function Pm(i){const e={};if(i.isDefault())return e;let n;if(i.index_===He?n="$priority":i.index_===RC?n="$value":i.index_===di?n="$key":(D(i.index_ instanceof NC,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=rt(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=rt(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+rt(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=rt(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+rt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function Rm(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==He&&(e.i=i.index_.toString()),e}/**
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
 */class Tl extends d_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Hs("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=Tl.getListenId_(e,s),f={};this.listens_[d]=f;const p=Pm(e._queryParams);this.restRequest_(u+".json",p,(g,w)=>{let _=w;if(g===404&&(_=null,g=null),g===null&&this.onDataUpdate_(u,_,!1,s),fi(this.listens_,d)===f){let y;g?g===401?y="permission_denied":y="rest_error:"+g:y="ok",l(y,null)}})}unlisten(e,n){const s=Tl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Pm(e._queryParams),s=e._path.toString(),l=new Fs;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ci(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Ns(f.responseText)}catch{mt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&mt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
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
 */class bC{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Nl(){return{value:null,children:new Map}}function E_(i,e,n){if(he(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=ce(e);i.children.has(s)||i.children.set(s,Nl());const l=i.children.get(s);e=Oe(e),E_(l,e,n)}}function wc(i,e,n){i.value!==null?n(e,i.value):DC(i,(s,l)=>{const u=new Ne(e.toString()+"/"+s);wc(l,u,n)})}function DC(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class LC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&at(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
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
 */const xm=10*1e3,MC=30*1e3,FC=5*60*1e3;class UC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new LC(e);const s=xm+(MC-xm)*Math.random();Cs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;at(e,(l,u)=>{u>0&&cn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),Cs(this.reportStats_.bind(this),Math.floor(Math.random()*2*FC))}}/**
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
 */var Xt;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xt||(Xt={}));function ld(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ad(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ud(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
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
 */class Pl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xt.ACK_USER_WRITE,this.source=ld()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ne(e));return new Pl(ye(),n,this.revert)}}else return D(ce(this.path)===e,"operationForChild called for unrelated child."),new Pl(Oe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ls{constructor(e,n){this.source=e,this.path=n,this.type=Xt.LISTEN_COMPLETE}operationForChild(e){return he(this.path)?new Ls(this.source,ye()):new Ls(this.source,Oe(this.path))}}/**
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
 */class Pr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xt.OVERWRITE}operationForChild(e){return he(this.path)?new Pr(this.source,ye(),this.snap.getImmediateChild(e)):new Pr(this.source,Oe(this.path),this.snap)}}/**
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
 */class vi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xt.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new Ne(e));return n.isEmpty()?null:n.value?new Pr(this.source,ye(),n.value):new vi(this.source,ye(),n)}else return D(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vi(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Rr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const n=ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class zC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jC(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(xC(d.childName,d.snapshotNode))}),ys(i,l,"child_removed",e,s,n),ys(i,l,"child_added",e,s,n),ys(i,l,"child_moved",u,s,n),ys(i,l,"child_changed",e,s,n),ys(i,l,"value",e,s,n),l}function ys(i,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>VC(i,f,p)),d.forEach(f=>{const p=WC(i,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,i.query_))})})}function WC(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function VC(i,e,n){if(e.childName==null||n.childName==null)throw Ei("Should only compare child_ events.");const s=new de(e.childName,e.snapshotNode),l=new de(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
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
 */function Vl(i,e){return{eventCache:i,serverCache:e}}function Is(i,e,n,s){return Vl(new Rr(e,n,s),i.serverCache)}function S_(i,e,n,s){return Vl(i.eventCache,new Rr(e,n,s))}function Ec(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function xr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
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
 */let sc;const HC=()=>(sc||(sc=new It(NS)),sc);class Ae{static fromObject(e){let n=new Ae(null);return at(e,(s,l)=>{n=n.set(new Ne(s),l)}),n}constructor(e,n=HC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(he(e))return null;{const s=ce(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Oe(e),n);return u!=null?{path:Ve(new Ne(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=ce(e),s=this.children.get(n);return s!==null?s.subtree(Oe(e)):new Ae(null)}}set(e,n){if(he(e))return new Ae(n,this.children);{const s=ce(e),u=(this.children.get(s)||new Ae(null)).set(Oe(e),n),d=this.children.insert(s,u);return new Ae(this.value,d)}}remove(e){if(he(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const n=ce(e),s=this.children.get(n);if(s){const l=s.remove(Oe(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new Ae(null):new Ae(this.value,u)}else return this}}get(e){if(he(e))return this.value;{const n=ce(e),s=this.children.get(n);return s?s.get(Oe(e)):null}}setTree(e,n){if(he(e))return n;{const s=ce(e),u=(this.children.get(s)||new Ae(null)).setTree(Oe(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new Ae(this.value,d)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Ve(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(he(e))return null;{const u=ce(e),d=this.children.get(u);return d?d.findOnPath_(Oe(e),Ve(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,s){if(he(e))return this;{this.value&&s(n,this.value);const l=ce(e),u=this.children.get(l);return u?u.foreachOnPath_(Oe(e),Ve(n,l),s):new Ae(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new Ae(null))}}function ks(i,e,n){if(he(e))return new Zt(new Ae(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=Ct(l,e);return u=u.updateChild(d,n),new Zt(i.writeTree_.set(l,u))}else{const l=new Ae(n),u=i.writeTree_.setTree(e,l);return new Zt(u)}}}function Sc(i,e,n){let s=i;return at(n,(l,u)=>{s=ks(s,Ve(e,l),u)}),s}function Am(i,e){if(he(e))return Zt.empty();{const n=i.writeTree_.setTree(e,new Ae(null));return new Zt(n)}}function Cc(i,e){return br(i,e)!=null}function br(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(Ct(n.path,e)):null}function Om(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(He,(s,l)=>{e.push(new de(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new de(s,l.value))}),e}function er(i,e){if(he(e))return i;{const n=br(i,e);return n!=null?new Zt(new Ae(n)):new Zt(i.writeTree_.subtree(e))}}function Ic(i){return i.writeTree_.isEmpty()}function yi(i,e){return C_(ye(),i.writeTree_,e)}function C_(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(D(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=C_(Ve(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Ve(i,".priority"),s)),n}}/**
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
 */function cd(i,e){return N_(e,i)}function BC(i,e,n,s,l){D(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=ks(i.visibleWrites,e,n)),i.lastWriteId=s}function $C(i,e,n,s){D(s>i.lastWriteId,"Stacking an older merge on top of newer ones"),i.allWrites.push({path:e,children:n,writeId:s,visible:!0}),i.visibleWrites=Sc(i.visibleWrites,e,n),i.lastWriteId=s}function GC(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function qC(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&KC(f,s.path)?l=!1:zt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return QC(i),!0;if(s.snap)i.visibleWrites=Am(i.visibleWrites,s.path);else{const f=s.children;at(f,p=>{i.visibleWrites=Am(i.visibleWrites,Ve(s.path,p))})}return!0}else return!1}function KC(i,e){if(i.snap)return zt(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&zt(Ve(i.path,n),e))return!0;return!1}function QC(i){i.visibleWrites=I_(i.allWrites,YC,ye()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function YC(i){return i.visible}function I_(i,e,n){let s=Zt.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let f;if(u.snap)zt(n,d)?(f=Ct(n,d),s=ks(s,f,u.snap)):zt(d,n)&&(f=Ct(d,n),s=ks(s,ye(),u.snap.getChild(f)));else if(u.children){if(zt(n,d))f=Ct(n,d),s=Sc(s,f,u.children);else if(zt(d,n))if(f=Ct(d,n),he(f))s=Sc(s,ye(),u.children);else{const p=fi(u.children,ce(f));if(p){const g=p.getChild(Oe(f));s=ks(s,ye(),g)}}}else throw Ei("WriteRecord should have .snap or .children")}}return s}function k_(i,e,n,s,l){if(!s&&!l){const u=br(i.visibleWrites,e);if(u!=null)return u;{const d=er(i.visibleWrites,e);if(Ic(d))return n;if(n==null&&!Cc(d,ye()))return null;{const f=n||ee.EMPTY_NODE;return yi(d,f)}}}else{const u=er(i.visibleWrites,e);if(!l&&Ic(u))return n;if(!l&&n==null&&!Cc(u,ye()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(zt(g.path,e)||zt(e,g.path))},f=I_(i.allWrites,d,e),p=n||ee.EMPTY_NODE;return yi(f,p)}}}function XC(i,e,n){let s=ee.EMPTY_NODE;const l=br(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(He,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=er(i.visibleWrites,e);return n.forEachChild(He,(d,f)=>{const p=yi(er(u,new Ne(d)),f);s=s.updateImmediateChild(d,p)}),Om(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=er(i.visibleWrites,e);return Om(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function JC(i,e,n,s,l){D(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Ve(e,n);if(Cc(i.visibleWrites,u))return null;{const d=er(i.visibleWrites,u);return Ic(d)?l.getChild(n):yi(d,l.getChild(n))}}function ZC(i,e,n,s){const l=Ve(e,n),u=br(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=er(i.visibleWrites,l);return yi(d,s.getNode().getImmediateChild(n))}else return null}function eI(i,e){return br(i.visibleWrites,e)}function tI(i,e,n,s,l,u,d){let f;const p=er(i.visibleWrites,e),g=br(p,ye());if(g!=null)f=g;else if(n!=null)f=yi(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const w=[],_=d.getCompare(),y=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let N=y.getNext();for(;N&&w.length<l;)_(N,s)!==0&&w.push(N),N=y.getNext();return w}else return[]}function nI(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function Rl(i,e,n,s){return k_(i.writeTree,i.treePath,e,n,s)}function dd(i,e){return XC(i.writeTree,i.treePath,e)}function bm(i,e,n,s){return JC(i.writeTree,i.treePath,e,n,s)}function xl(i,e){return eI(i.writeTree,Ve(i.treePath,e))}function rI(i,e,n,s,l,u){return tI(i.writeTree,i.treePath,e,n,s,l,u)}function hd(i,e,n){return ZC(i.writeTree,i.treePath,e,n)}function T_(i,e){return N_(Ve(i.treePath,e),i.writeTree)}function N_(i,e){return{treePath:i,writeTree:e}}/**
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
 */class iI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,bs(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Os(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,_i(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,bs(s,e.snapshotNode,l.oldSnap));else throw Ei("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class sI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const P_=new sI;class fd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Rr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),u=rI(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
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
 */function oI(i){return{filter:i}}function lI(i,e){D(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function aI(i,e,n,s,l){const u=new iI;let d,f;if(n.type===Xt.OVERWRITE){const g=n;g.source.fromUser?d=kc(i,e,g.path,g.snap,s,l,u):(D(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!he(g.path),d=Al(i,e,g.path,g.snap,s,l,f,u))}else if(n.type===Xt.MERGE){const g=n;g.source.fromUser?d=cI(i,e,g.path,g.children,s,l,u):(D(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=Tc(i,e,g.path,g.children,s,l,f,u))}else if(n.type===Xt.ACK_USER_WRITE){const g=n;g.revert?d=fI(i,e,g.path,s,l,u):d=dI(i,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Xt.LISTEN_COMPLETE)d=hI(i,e,n.path,s,u);else throw Ei("Unknown operation type: "+n.type);const p=u.getChanges();return uI(e,d,p),{viewCache:d,changes:p}}function uI(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Ec(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(w_(Ec(e)))}}function R_(i,e,n,s,l,u){const d=e.eventCache;if(xl(s,n)!=null)return e;{let f,p;if(he(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=xr(e),w=g instanceof ee?g:ee.EMPTY_NODE,_=dd(s,w);f=i.filter.updateFullNode(e.eventCache.getNode(),_,u)}else{const g=Rl(s,xr(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=ce(n);if(g===".priority"){D(tr(n)===1,"Can't have a priority with additional path components");const w=d.getNode();p=e.serverCache.getNode();const _=bm(s,n,w,p);_!=null?f=i.filter.updatePriority(w,_):f=d.getNode()}else{const w=Oe(n);let _;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const y=bm(s,n,d.getNode(),p);y!=null?_=d.getNode().getImmediateChild(g).updateChild(w,y):_=d.getNode().getImmediateChild(g)}else _=hd(s,g,e.serverCache);_!=null?f=i.filter.updateChild(d.getNode(),g,_,w,l,u):f=d.getNode()}}return Is(e,f,d.isFullyInitialized()||he(n),i.filter.filtersNodes())}}function Al(i,e,n,s,l,u,d,f){const p=e.serverCache;let g;const w=d?i.filter:i.filter.getIndexedFilter();if(he(n))g=w.updateFullNode(p.getNode(),s,null);else if(w.filtersNodes()&&!p.isFiltered()){const N=p.getNode().updateChild(n,s);g=w.updateFullNode(p.getNode(),N,null)}else{const N=ce(n);if(!p.isCompleteForPath(n)&&tr(n)>1)return e;const A=Oe(n),W=p.getNode().getImmediateChild(N).updateChild(A,s);N===".priority"?g=w.updatePriority(p.getNode(),W):g=w.updateChild(p.getNode(),N,W,A,P_,null)}const _=S_(e,g,p.isFullyInitialized()||he(n),w.filtersNodes()),y=new fd(l,_,u);return R_(i,_,n,l,y,f)}function kc(i,e,n,s,l,u,d){const f=e.eventCache;let p,g;const w=new fd(l,e,u);if(he(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),p=Is(e,g,!0,i.filter.filtersNodes());else{const _=ce(n);if(_===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),p=Is(e,g,f.isFullyInitialized(),f.isFiltered());else{const y=Oe(n),N=f.getNode().getImmediateChild(_);let A;if(he(y))A=s;else{const F=w.getCompleteChild(_);F!=null?td(y)===".priority"&&F.getChild(f_(y)).isEmpty()?A=F:A=F.updateChild(y,s):A=ee.EMPTY_NODE}if(N.equals(A))p=e;else{const F=i.filter.updateChild(f.getNode(),_,A,y,w,d);p=Is(e,F,f.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function Dm(i,e){return i.eventCache.isCompleteForChild(e)}function cI(i,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const w=Ve(n,p);Dm(e,ce(w))&&(f=kc(i,f,w,g,l,u,d))}),s.foreach((p,g)=>{const w=Ve(n,p);Dm(e,ce(w))||(f=kc(i,f,w,g,l,u,d))}),f}function Lm(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Tc(i,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;he(n)?g=s:g=new Ae(null).setTree(n,s);const w=e.serverCache.getNode();return g.children.inorderTraversal((_,y)=>{if(w.hasChild(_)){const N=e.serverCache.getNode().getImmediateChild(_),A=Lm(i,N,y);p=Al(i,p,new Ne(_),A,l,u,d,f)}}),g.children.inorderTraversal((_,y)=>{const N=!e.serverCache.isCompleteForChild(_)&&y.value===null;if(!w.hasChild(_)&&!N){const A=e.serverCache.getNode().getImmediateChild(_),F=Lm(i,A,y);p=Al(i,p,new Ne(_),F,l,u,d,f)}}),p}function dI(i,e,n,s,l,u,d){if(xl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(he(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Al(i,e,n,p.getNode().getChild(n),l,u,f,d);if(he(n)){let g=new Ae(null);return p.getNode().forEachChild(di,(w,_)=>{g=g.set(new Ne(w),_)}),Tc(i,e,n,g,l,u,f,d)}else return e}else{let g=new Ae(null);return s.foreach((w,_)=>{const y=Ve(n,w);p.isCompleteForPath(y)&&(g=g.set(w,p.getNode().getChild(y)))}),Tc(i,e,n,g,l,u,f,d)}}function hI(i,e,n,s,l){const u=e.serverCache,d=S_(e,u.getNode(),u.isFullyInitialized()||he(n),u.isFiltered());return R_(i,d,n,s,P_,l)}function fI(i,e,n,s,l,u){let d;if(xl(s,n)!=null)return e;{const f=new fd(s,e,l),p=e.eventCache.getNode();let g;if(he(n)||ce(n)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=Rl(s,xr(e));else{const _=e.serverCache.getNode();D(_ instanceof ee,"serverChildren would be complete if leaf node"),w=dd(s,_)}w=w,g=i.filter.updateFullNode(p,w,u)}else{const w=ce(n);let _=hd(s,w,e.serverCache);_==null&&e.serverCache.isCompleteForChild(w)&&(_=p.getImmediateChild(w)),_!=null?g=i.filter.updateChild(p,w,_,Oe(n),f,u):e.eventCache.getNode().hasChild(w)?g=i.filter.updateChild(p,w,ee.EMPTY_NODE,Oe(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Rl(s,xr(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||xl(s,ye())!=null,Is(e,g,d,i.filter.filtersNodes())}}/**
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
 */class pI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new sd(s.getIndex()),u=OC(s);this.processor_=oI(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(ee.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(ee.EMPTY_NODE,f.getNode(),null),w=new Rr(p,d.isFullyInitialized(),l.filtersNodes()),_=new Rr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=Vl(_,w),this.eventGenerator_=new zC(this.query_)}get query(){return this.query_}}function mI(i){return i.viewCache_.serverCache.getNode()}function gI(i,e){const n=xr(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(ce(e)).isEmpty())?n.getChild(e):null}function Mm(i){return i.eventRegistrations_.length===0}function _I(i,e){i.eventRegistrations_.push(e)}function Fm(i,e,n){const s=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const l=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=l}else i.eventRegistrations_=[];return s}function Um(i,e,n,s){e.type===Xt.MERGE&&e.source.queryId!==null&&(D(xr(i.viewCache_),"We should always have a full cache before handling merges"),D(Ec(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=aI(i.processor_,l,e,n,s);return lI(i.processor_,u.viewCache),D(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,x_(i,u.changes,u.viewCache.eventCache.getNode(),null)}function vI(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(He,(u,d)=>{s.push(_i(u,d))}),n.isFullyInitialized()&&s.push(w_(n.getNode())),x_(i,s,n.getNode(),e)}function x_(i,e,n,s){const l=s?[s]:i.eventRegistrations_;return jC(i.eventGenerator_,e,n,l)}/**
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
 */let Ol;class yI{constructor(){this.views=new Map}}function wI(i){D(!Ol,"__referenceConstructor has already been defined"),Ol=i}function EI(){return D(Ol,"Reference.ts has not been loaded"),Ol}function SI(i){return i.views.size===0}function pd(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return D(u!=null,"SyncTree gave us an op for an invalid query."),Um(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(Um(d,e,n,s));return u}}function CI(i,e,n,s,l){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let f=Rl(n,l?s:null),p=!1;f?p=!0:s instanceof ee?(f=dd(n,s),p=!1):(f=ee.EMPTY_NODE,p=!1);const g=Vl(new Rr(f,p,!1),new Rr(s,l,!1));return new pI(e,g)}return d}function II(i,e,n,s,l,u){const d=CI(i,e,s,l,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),_I(d,n),vI(d,n)}function kI(i,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=nr(i);if(l==="default")for(const[p,g]of i.views.entries())d=d.concat(Fm(g,n,s)),Mm(g)&&(i.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=i.views.get(l);p&&(d=d.concat(Fm(p,n,s)),Mm(p)&&(i.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!nr(i)&&u.push(new(EI())(e._repo,e._path)),{removed:u,events:d}}function A_(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hi(i,e){let n=null;for(const s of i.views.values())n=n||gI(s,e);return n}function O_(i,e){if(e._queryParams.loadsAllData())return Hl(i);{const s=e._queryIdentifier;return i.views.get(s)}}function b_(i,e){return O_(i,e)!=null}function nr(i){return Hl(i)!=null}function Hl(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let bl;function TI(i){D(!bl,"__referenceConstructor has already been defined"),bl=i}function NI(){return D(bl,"Reference.ts has not been loaded"),bl}let PI=1;class zm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=nI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function D_(i,e,n,s,l){return BC(i.pendingWriteTree_,e,n,s,l),l?Ni(i,new Pr(ld(),e,n)):[]}function RI(i,e,n,s){$C(i.pendingWriteTree_,e,n,s);const l=Ae.fromObject(n);return Ni(i,new vi(ld(),e,l))}function Yn(i,e,n=!1){const s=GC(i.pendingWriteTree_,e);if(qC(i.pendingWriteTree_,e)){let u=new Ae(null);return s.snap!=null?u=u.set(ye(),!0):at(s.children,d=>{u=u.set(new Ne(d),!0)}),Ni(i,new Pl(s.path,u,n))}else return[]}function Bl(i,e,n){return Ni(i,new Pr(ad(),e,n))}function xI(i,e,n){const s=Ae.fromObject(n);return Ni(i,new vi(ad(),e,s))}function AI(i,e){return Ni(i,new Ls(ad(),e))}function OI(i,e,n){const s=gd(i,n);if(s){const l=_d(s),u=l.path,d=l.queryId,f=Ct(u,e),p=new Ls(ud(d),f);return vd(i,u,p)}else return[]}function Nc(i,e,n,s,l=!1){const u=e._path,d=i.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||b_(d,e))){const p=kI(d,e,n,s);SI(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const w=g.findIndex(y=>y._queryParams.loadsAllData())!==-1,_=i.syncPointTree_.findOnPath(u,(y,N)=>nr(N));if(w&&!_){const y=i.syncPointTree_.subtree(u);if(!y.isEmpty()){const N=LI(y);for(let A=0;A<N.length;++A){const F=N[A],W=F.query,we=F_(i,F);i.listenProvider_.startListening(Ts(W),Dl(i,W),we.hashFn,we.onComplete)}}}!_&&g.length>0&&!s&&(w?i.listenProvider_.stopListening(Ts(e),null):g.forEach(y=>{const N=i.queryToTagMap.get($l(y));i.listenProvider_.stopListening(Ts(y),N)}))}MI(i,g)}return f}function bI(i,e,n,s){const l=gd(i,s);if(l!=null){const u=_d(l),d=u.path,f=u.queryId,p=Ct(d,e),g=new Pr(ud(f),p,n);return vd(i,d,g)}else return[]}function DI(i,e,n,s){const l=gd(i,s);if(l){const u=_d(l),d=u.path,f=u.queryId,p=Ct(d,e),g=Ae.fromObject(n),w=new vi(ud(f),p,g);return vd(i,d,w)}else return[]}function jm(i,e,n,s=!1){const l=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(l,(y,N)=>{const A=Ct(y,l);u=u||hi(N,A),d=d||nr(N)});let f=i.syncPointTree_.get(l);f?(d=d||nr(f),u=u||hi(f,ye())):(f=new yI,i.syncPointTree_=i.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=ee.EMPTY_NODE,i.syncPointTree_.subtree(l).foreachChild((N,A)=>{const F=hi(A,ye());F&&(u=u.updateImmediateChild(N,F))}));const g=b_(f,e);if(!g&&!e._queryParams.loadsAllData()){const y=$l(e);D(!i.queryToTagMap.has(y),"View does not exist, but we have a tag");const N=FI();i.queryToTagMap.set(y,N),i.tagToQueryMap.set(N,y)}const w=cd(i.pendingWriteTree_,l);let _=II(f,e,n,w,u,p);if(!g&&!d&&!s){const y=O_(f,e);_=_.concat(UI(i,e,y))}return _}function md(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const p=Ct(d,e),g=hi(f,p);if(g)return g});return k_(l,e,u,n,!0)}function Ni(i,e){return L_(e,i.syncPointTree_,null,cd(i.pendingWriteTree_,ye()))}function L_(i,e,n,s){if(he(i.path))return M_(i,e,n,s);{const l=e.get(ye());n==null&&l!=null&&(n=hi(l,ye()));let u=[];const d=ce(i.path),f=i.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,w=T_(s,d);u=u.concat(L_(f,p,g,w))}return l&&(u=u.concat(pd(l,i,s,n))),u}}function M_(i,e,n,s){const l=e.get(ye());n==null&&l!=null&&(n=hi(l,ye()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=T_(s,d),w=i.operationForChild(d);w&&(u=u.concat(M_(w,f,p,g)))}),l&&(u=u.concat(pd(l,i,s,n))),u}function F_(i,e){const n=e.query,s=Dl(i,n);return{hashFn:()=>(mI(e)||ee.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?OI(i,n._path,s):AI(i,n._path);{const u=xS(l,n);return Nc(i,n,null,u)}}}}function Dl(i,e){const n=$l(e);return i.queryToTagMap.get(n)}function $l(i){return i._path.toString()+"$"+i._queryIdentifier}function gd(i,e){return i.tagToQueryMap.get(e)}function _d(i){const e=i.indexOf("$");return D(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new Ne(i.substr(0,e))}}function vd(i,e,n){const s=i.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const l=cd(i.pendingWriteTree_,e);return pd(s,n,l,null)}function LI(i){return i.fold((e,n,s)=>{if(n&&nr(n))return[Hl(n)];{let l=[];return n&&(l=A_(n)),at(s,(u,d)=>{l=l.concat(d)}),l}})}function Ts(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(NI())(i._repo,i._path):i}function MI(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=$l(s),u=i.queryToTagMap.get(l);i.queryToTagMap.delete(l),i.tagToQueryMap.delete(u)}}}function FI(){return PI++}function UI(i,e,n){const s=e._path,l=Dl(i,e),u=F_(i,n),d=i.listenProvider_.startListening(Ts(e),l,u.hashFn,u.onComplete),f=i.syncPointTree_.subtree(s);if(l)D(!nr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,w,_)=>{if(!he(g)&&w&&nr(w))return[Hl(w).query];{let y=[];return w&&(y=y.concat(A_(w).map(N=>N.query))),at(_,(N,A)=>{y=y.concat(A)}),y}});for(let g=0;g<p.length;++g){const w=p[g];i.listenProvider_.stopListening(Ts(w),Dl(i,w))}}return d}/**
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
 */class yd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yd(n)}node(){return this.node_}}class wd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new wd(this.syncTree_,n)}node(){return md(this.syncTree_,this.path_)}}const zI=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},Wm=function(i,e,n){if(!i||typeof i!="object")return i;if(D(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return jI(i[".sv"],e,n);if(typeof i[".sv"]=="object")return WI(i[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},jI=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+i)}},WI=function(i,e,n){i.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const l=e.node();if(D(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},U_=function(i,e,n,s){return Ed(e,new wd(n,i),s)},z_=function(i,e,n){return Ed(i,new yd(e),n)};function Ed(i,e,n){const s=i.getPriority().val(),l=Wm(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=Wm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new et(f,nt(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new et(l))),d.forEachChild(He,(f,p)=>{const g=Ed(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
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
 */class Sd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Cd(i,e){let n=e instanceof Ne?e:new Ne(e),s=i,l=ce(n);for(;l!==null;){const u=fi(s.node.children,l)||{children:{},childCount:0};s=new Sd(l,s,u),n=Oe(n),l=ce(n)}return s}function Pi(i){return i.node.value}function j_(i,e){i.node.value=e,Pc(i)}function W_(i){return i.node.childCount>0}function VI(i){return Pi(i)===void 0&&!W_(i)}function Gl(i,e){at(i.node.children,(n,s)=>{e(new Sd(n,i,s))})}function V_(i,e,n,s){n&&!s&&e(i),Gl(i,l=>{V_(l,e,!0,s)})}function HI(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function $s(i){return new Ne(i.parent===null?i.name:$s(i.parent)+"/"+i.name)}function Pc(i){i.parent!==null&&BI(i.parent,i.name,i)}function BI(i,e,n){const s=VI(n),l=cn(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,Pc(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,Pc(i))}/**
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
 */const $I=/[\[\].#$\/\u0000-\u001F\u007F]/,GI=/[\[\].#$\u0000-\u001F\u007F]/,oc=10*1024*1024,Id=function(i){return typeof i=="string"&&i.length!==0&&!$I.test(i)},H_=function(i){return typeof i=="string"&&i.length!==0&&!GI.test(i)},qI=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),H_(i)},KI=function(i){return i===null||typeof i=="string"||typeof i=="number"&&!Yc(i)||i&&typeof i=="object"&&cn(i,".sv")},B_=function(i,e,n,s){s&&e===void 0||ql(Ml(i,"value"),e,n)},ql=function(i,e,n){const s=n instanceof Ne?new cC(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+yr(s));if(typeof e=="function")throw new Error(i+"contains a function "+yr(s)+" with contents = "+e.toString());if(Yc(e))throw new Error(i+"contains "+e.toString()+" "+yr(s));if(typeof e=="string"&&e.length>oc/3&&Fl(e)>oc)throw new Error(i+"contains a string greater than "+oc+" utf8 bytes "+yr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(at(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!Id(d)))throw new Error(i+" contains an invalid key ("+d+") "+yr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dC(s,d),ql(i,f,s),hC(s)}),l&&u)throw new Error(i+' contains ".value" child '+yr(s)+" in addition to actual children.")}},QI=function(i,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=As(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!Id(u[d]))throw new Error(i+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(uC);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&zt(l,s))throw new Error(i+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},YI=function(i,e,n,s){const l=Ml(i,"values");if(typeof e!="object"||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];at(e,(d,f)=>{const p=new Ne(d);if(ql(l,f,Ve(n,p)),td(p)===".priority"&&!KI(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),QI(l,u)},$_=function(i,e,n,s){if(!H_(n))throw new Error(Ml(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},XI=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$_(i,e,n)},kd=function(i,e){if(ce(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},JI=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Id(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!qI(n))throw new Error(Ml(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ZI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Kl(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!nd(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function G_(i,e,n){Kl(i,n),q_(i,s=>nd(s,e))}function en(i,e,n){Kl(i,n),q_(i,s=>zt(s,e)||zt(e,s))}function q_(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(ek(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function ek(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();Ss&&lt("event: "+n.toString()),Ti(s)}}}/**
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
 */const tk="repo_interrupt",nk=25;class rk{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ZI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nl(),this.transactionQueueTree_=new Sd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ik(i,e,n){if(i.stats_=Zc(i.repoInfo_),i.forceRestClient_||DS())i.server_=new Tl(i.repoInfo_,(s,l,u,d)=>{Vm(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Hm(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Cn(i.repoInfo_,e,(s,l,u,d)=>{Vm(i,s,l,u,d)},s=>{Hm(i,s)},s=>{sk(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=zS(i.repoInfo_,()=>new UC(i.stats_,i.server_)),i.infoData_=new bC,i.infoSyncTree_=new zm({startListening:(s,l,u,d)=>{let f=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(f=Bl(i.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Td(i,"connected",!1),i.serverSyncTree_=new zm({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);en(i.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function K_(i){const n=i.infoData_.getNode(new Ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ql(i){return zI({timestamp:K_(i)})}function Vm(i,e,n,s,l){i.dataUpdateCount++;const u=new Ne(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=ml(n,g=>nt(g));d=DI(i.serverSyncTree_,u,p,l)}else{const p=nt(n);d=bI(i.serverSyncTree_,u,p,l)}else if(s){const p=ml(n,g=>nt(g));d=xI(i.serverSyncTree_,u,p)}else{const p=nt(n);d=Bl(i.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=wi(i,u)),en(i.eventQueue_,f,d)}function Hm(i,e){Td(i,"connected",e),e===!1&&ak(i)}function sk(i,e){at(e,(n,s)=>{Td(i,n,s)})}function Td(i,e,n){const s=new Ne("/.info/"+e),l=nt(n);i.infoData_.updateSnapshot(s,l);const u=Bl(i.infoSyncTree_,s,l);en(i.eventQueue_,s,u)}function Nd(i){return i.nextWriteId_++}function ok(i,e,n,s,l){Yl(i,"set",{path:e.toString(),value:n,priority:s});const u=Ql(i),d=nt(n,s),f=md(i.serverSyncTree_,e),p=z_(d,f,u),g=Nd(i),w=D_(i.serverSyncTree_,e,p,g,!0);Kl(i.eventQueue_,w),i.server_.put(e.toString(),d.val(!0),(y,N)=>{const A=y==="ok";A||mt("set at "+e+" failed: "+y);const F=Yn(i.serverSyncTree_,g,!A);en(i.eventQueue_,e,F),Rc(i,l,y,N)});const _=Rd(i,e);wi(i,_),en(i.eventQueue_,_,[])}function lk(i,e,n,s){Yl(i,"update",{path:e.toString(),value:n});let l=!0;const u=Ql(i),d={};if(at(n,(f,p)=>{l=!1,d[f]=U_(Ve(e,f),nt(p),i.serverSyncTree_,u)}),l)lt("update() called with empty data.  Don't do anything."),Rc(i,s,"ok",void 0);else{const f=Nd(i),p=RI(i.serverSyncTree_,e,d,f);Kl(i.eventQueue_,p),i.server_.merge(e.toString(),n,(g,w)=>{const _=g==="ok";_||mt("update at "+e+" failed: "+g);const y=Yn(i.serverSyncTree_,f,!_),N=y.length>0?wi(i,e):e;en(i.eventQueue_,N,y),Rc(i,s,g,w)}),at(n,g=>{const w=Rd(i,Ve(e,g));wi(i,w)}),en(i.eventQueue_,e,[])}}function ak(i){Yl(i,"onDisconnectEvents");const e=Ql(i),n=Nl();wc(i.onDisconnect_,ye(),(l,u)=>{const d=U_(l,u,i.serverSyncTree_,e);E_(n,l,d)});let s=[];wc(n,ye(),(l,u)=>{s=s.concat(Bl(i.serverSyncTree_,l,u));const d=Rd(i,l);wi(i,d)}),i.onDisconnect_=Nl(),en(i.eventQueue_,ye(),s)}function uk(i,e,n){let s;ce(e._path)===".info"?s=jm(i.infoSyncTree_,e,n):s=jm(i.serverSyncTree_,e,n),G_(i.eventQueue_,e._path,s)}function ck(i,e,n){let s;ce(e._path)===".info"?s=Nc(i.infoSyncTree_,e,n):s=Nc(i.serverSyncTree_,e,n),G_(i.eventQueue_,e._path,s)}function dk(i){i.persistentConnection_&&i.persistentConnection_.interrupt(tk)}function Yl(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),lt(n,...e)}function Rc(i,e,n,s){e&&Ti(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function Q_(i,e,n){return md(i.serverSyncTree_,e,n)||ee.EMPTY_NODE}function Pd(i,e=i.transactionQueueTree_){if(e||Xl(i,e),Pi(e)){const n=X_(i,e);D(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&hk(i,$s(e),n)}else W_(e)&&Gl(e,n=>{Pd(i,n)})}function hk(i,e,n){const s=n.map(g=>g.currentWriteId),l=Q_(i,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const w=n[g];D(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const _=Ct(e,w.path);u=u.updateChild(_,w.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;i.server_.put(p.toString(),f,g=>{Yl(i,"transaction put response",{path:p.toString(),status:g});let w=[];if(g==="ok"){const _=[];for(let y=0;y<n.length;y++)n[y].status=2,w=w.concat(Yn(i.serverSyncTree_,n[y].currentWriteId)),n[y].onComplete&&_.push(()=>n[y].onComplete(null,!0,n[y].currentOutputSnapshotResolved)),n[y].unwatcher();Xl(i,Cd(i.transactionQueueTree_,e)),Pd(i,i.transactionQueueTree_),en(i.eventQueue_,e,w);for(let y=0;y<_.length;y++)Ti(_[y])}else{if(g==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{mt("transaction at "+p.toString()+" failed: "+g);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=g}wi(i,e)}},d)}function wi(i,e){const n=Y_(i,e),s=$s(n),l=X_(i,n);return fk(i,l,s),s}function fk(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=Ct(n,p.path);let w=!1,_;if(D(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)w=!0,_=p.abortReason,l=l.concat(Yn(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=nk)w=!0,_="maxretry",l=l.concat(Yn(i.serverSyncTree_,p.currentWriteId,!0));else{const y=Q_(i,p.path,d);p.currentInputSnapshot=y;const N=e[f].update(y.val());if(N!==void 0){ql("transaction failed: Data returned ",N,p.path);let A=nt(N);typeof N=="object"&&N!=null&&cn(N,".priority")||(A=A.updatePriority(y.getPriority()));const W=p.currentWriteId,we=Ql(i),Ee=z_(A,y,we);p.currentOutputSnapshotRaw=A,p.currentOutputSnapshotResolved=Ee,p.currentWriteId=Nd(i),d.splice(d.indexOf(W),1),l=l.concat(D_(i.serverSyncTree_,p.path,Ee,p.currentWriteId,p.applyLocally)),l=l.concat(Yn(i.serverSyncTree_,W,!0))}else w=!0,_="nodata",l=l.concat(Yn(i.serverSyncTree_,p.currentWriteId,!0))}en(i.eventQueue_,n,l),l=[],w&&(e[f].status=2,function(y){setTimeout(y,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(_==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(_),!1,null))))}Xl(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)Ti(s[f]);Pd(i,i.transactionQueueTree_)}function Y_(i,e){let n,s=i.transactionQueueTree_;for(n=ce(e);n!==null&&Pi(s)===void 0;)s=Cd(s,n),e=Oe(e),n=ce(e);return s}function X_(i,e){const n=[];return J_(i,e,n),n.sort((s,l)=>s.order-l.order),n}function J_(i,e,n){const s=Pi(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Gl(e,l=>{J_(i,l,n)})}function Xl(i,e){const n=Pi(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,j_(e,n.length>0?n:void 0)}Gl(e,s=>{Xl(i,s)})}function Rd(i,e){const n=$s(Y_(i,e)),s=Cd(i.transactionQueueTree_,e);return HI(s,l=>{lc(i,l)}),lc(i,s),V_(s,l=>{lc(i,l)}),n}function lc(i,e){const n=Pi(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(D(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(D(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Yn(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?j_(e,void 0):n.length=u+1,en(i.eventQueue_,$s(e),l);for(let d=0;d<s.length;d++)Ti(s[d])}}/**
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
 */function pk(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function mk(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):mt(`Invalid query segment '${n}' in query '${i}'`)}return e}const Bm=function(i,e){const n=gk(i),s=n.namespace;n.domain==="firebase.com"&&Tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new i_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new Ne(n.pathString)}},gk=function(i){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let w=i.indexOf("/");w===-1&&(w=i.length);let _=i.indexOf("?");_===-1&&(_=i.length),e=i.substring(0,Math.min(w,_)),w<_&&(l=pk(i.substring(w,_)));const y=mk(i.substring(Math.min(i.length,_)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const N=e.slice(0,g);if(N.toLowerCase()==="localhost")n="localhost";else if(N.split(".").length<=2)n=N;else{const A=e.indexOf(".");s=e.substring(0,A).toLowerCase(),n=e.substring(A+1),u=s}"ns"in y&&(u=y.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
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
 */const $m="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",_k=function(){let i=0;const e=[];return function(n){const s=n===i;i=n;let l;const u=new Array(8);for(l=7;l>=0;l--)u[l]=$m.charAt(n%64),n=Math.floor(n/64);D(n===0,"Cannot push at time == 0");let d=u.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)d+=$m.charAt(e[l]);return D(d.length===20,"nextPushId: Length should be 20."),d}}();/**
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
 */class vk{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+rt(this.snapshot.exportVal())}}class yk{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class wk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class xd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return he(this._path)?null:td(this._path)}get ref(){return new ir(this._repo,this._path)}get _queryIdentifier(){const e=Rm(this._queryParams),n=Xc(e);return n==="{}"?"default":n}get _queryObject(){return Rm(this._queryParams)}isEqual(e){if(e=At(e),!(e instanceof xd))return!1;const n=this._repo===e._repo,s=nd(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+aC(this._path)}}class ir extends xd{constructor(e,n){super(e,n,new od,!1)}get parent(){const e=f_(this._path);return e===null?null:new ir(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ll{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ne(e),s=Ms(this.ref,e);return new Ll(this._node.getChild(n),s,He)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Ll(l,Ms(this.ref,s),He)))}hasChild(e){const n=new Ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jk(i,e){return i=At(i),i._checkNotDeleted("ref"),e!==void 0?Ms(i._root,e):i._root}function Ms(i,e){return i=At(i),ce(i._path)===null?XI("child","path",e):$_("child","path",e),new ir(i._repo,Ve(i._path,e))}function Zk(i,e){i=At(i),kd("push",i._path),B_("push",e,i._path,!0);const n=K_(i._repo),s=_k(n),l=Ms(i,s),u=Ms(i,s);let d;return e!=null?d=Z_(u,e).then(()=>u):d=Promise.resolve(u),l.then=d.then.bind(d),l.catch=d.then.bind(d,void 0),l}function eT(i){return kd("remove",i._path),Z_(i,null)}function Z_(i,e){i=At(i),kd("set",i._path),B_("set",e,i._path,!1);const n=new Fs;return ok(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}function tT(i,e){YI("update",e,i._path);const n=new Fs;return lk(i._repo,i._path,e,n.wrapCallback(()=>{})),n.promise}class Ad{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new vk("value",this,new Ll(e.snapshotNode,new ir(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new yk(this,e,n):null}matches(e){return e instanceof Ad?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Ek(i,e,n,s,l){const u=new wk(n,void 0),d=new Ad(u);return uk(i._repo,i,d),()=>ck(i._repo,i,d)}function nT(i,e,n,s){return Ek(i,"value",e)}wI(ir);TI(ir);/**
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
 */const Sk="FIREBASE_DATABASE_EMULATOR_HOST",xc={};let Ck=!1;function Ik(i,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),d=Si(u);i.repoInfo_=new i_(e,d,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(i.authTokenProvider_=s)}function kk(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||Tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=Bm(u,l),f=d.repoInfo,p;typeof process<"u"&&dm&&(p=dm[Sk]),p?(u=`http://${p}?ns=${f.namespace}`,d=Bm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new MS(i.name,i.options,e);JI("Invalid Firebase Database URL",d),he(d.path)||Tn("Database URL must point to the root of a Firebase Database (not including a child path).");const w=Nk(f,i,g,new LS(i,n));return new Pk(w,i)}function Tk(i,e){const n=xc[e];(!n||n[i.key]!==i)&&Tn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),dk(i),delete n[i.key]}function Nk(i,e,n,s){let l=xc[e.name];l||(l={},xc[e.name]=l);let u=l[i.toURLString()];return u&&Tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new rk(i,Ck,n,s),l[i.toURLString()]=u,u}class Pk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ik(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ir(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Tk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Tn("Cannot call "+e+" on a deleted database.")}}function Rk(i=dg(),e){const n=Uc(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=G0("database");s&&xk(n,...s)}return n}function xk(i,e,n,s={}){i=At(i),i._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=i._repoInternal;if(i._instanceStarted){if(l===i._repoInternal.repoInfo_.host&&Ir(s,u.repoInfo_.emulatorOptions))return;Tn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&Tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new cl(cl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:q0(s.mockUserToken,i.app.options.projectId);d=new cl(f)}Si(e)&&(rg(e),ig("Database",!0)),Ik(u,l,s,d)}/**
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
 */function Ak(i){yS(Ii),pi(new kr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return kk(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Zn(hm,fm,i),Zn(hm,fm,"esm2017")}Cn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Cn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};Ak();const Ok={apiKey:"AIzaSyAMDp5WhCZy0tDz-_VcN3bz8HUW2Yp0lw0",authDomain:"personal-portfolio-37a0a.firebaseapp.com",projectId:"personal-portfolio-37a0a",storageBucket:"personal-portfolio-37a0a.appspot.com",messagingSenderId:"695560029777",appId:"1:695560029777:web:2f666fd6fe7aa39b0c1a70",measurementId:"G-64P0PSRQN5",databaseURL:"https://personal-portfolio-37a0a-default-rtdb.firebaseio.com"},ev=cg(Ok),rT=Rk(ev),bk=_S(ev),iT=new yn,tv=me.createContext();function Dk({children:i}){const[e,n]=me.useState(null),[s,l]=me.useState(!0);me.useEffect(()=>bk.onAuthStateChanged(f=>{n(f),l(!1)}),[]);const u={currentUser:e,isAdmin:(e==null?void 0:e.email)==="e2340065@bit.uom.lk"};return B.jsx(tv.Provider,{value:u,children:!s&&i})}function sT(){return me.useContext(tv)}const Lk=me.lazy(()=>xt(()=>import("./HeaderBar-X5Ejj-Pb.js"),__vite__mapDeps([0,1,2,3]))),Mk=me.lazy(()=>xt(()=>import("./Home-DvZsF9Bd.js"),__vite__mapDeps([4,5,6]))),Fk=me.lazy(()=>xt(()=>import("./AboutUs-BQ8wX3BM.js"),__vite__mapDeps([7,8]))),Uk=me.lazy(()=>xt(()=>import("./Education-B-gs5WMY.js"),__vite__mapDeps([9,10,5,6]))),zk=me.lazy(()=>xt(()=>import("./SkillsData-CAafONMH.js"),__vite__mapDeps([11,12,13,14,3]))),jk=me.lazy(()=>xt(()=>import("./LicensesCertifications-M2vACz-P.js"),[])),Wk=me.lazy(()=>xt(()=>import("./WorkExperience-DKvMaBYe.js"),[])),Vk=me.lazy(()=>xt(()=>import("./ProjectsData-DIvysIJJ.js"),__vite__mapDeps([15,8,12,14,10,16]))),Hk=me.lazy(()=>xt(()=>import("./designpage-u2XoTw87.js"),__vite__mapDeps([17,12,10,13]))),Bk=me.lazy(()=>xt(()=>import("./videos-DYP4nK6V.js"),[])),$k=me.lazy(()=>xt(()=>import("./Testimonials-Dx_Ey3oj.js"),__vite__mapDeps([18,2,6]))),Gk=me.lazy(()=>xt(()=>import("./Contact-DcaCNmv8.js"),[])),qk=me.lazy(()=>xt(()=>import("./Copyright-Dptal9px.js"),__vite__mapDeps([19,1,12,10,6])));function Kk(){return me.useEffect(()=>{d0.init({duration:800,once:!0})},[]),B.jsx(Dk,{children:B.jsxs("div",{children:[B.jsx(M0,{}),B.jsxs(me.Suspense,{fallback:B.jsx("div",{className:"text-center mt-10",children:"Loading..."}),children:[B.jsx(Lk,{}),B.jsxs("main",{children:[B.jsx(Kt,{id:"home",Component:Mk}),B.jsx(Kt,{id:"videosection",Component:Bk}),B.jsx(Kt,{id:"about",Component:Fk}),B.jsx(Kt,{id:"education-journey",Component:Uk}),B.jsx(Kt,{id:"dexterity",Component:zk}),B.jsx(Kt,{id:"professional-designations",Component:jk}),B.jsx(Kt,{id:"professional-journey",Component:Wk}),B.jsx(Kt,{id:"creative-ventures",Component:Vk}),B.jsx(Kt,{id:"design-scape",Component:Hk}),B.jsx(Kt,{id:"testimonials",Component:$k}),B.jsx(Kt,{id:"contact",Component:Gk})]}),B.jsx(qk,{})]})]})})}function Kt({id:i,Component:e}){return B.jsx("section",{id:i,children:B.jsx(e,{})})}s0.createRoot(document.getElementById("root")).render(B.jsx(me.StrictMode,{children:B.jsx(Kk,{})}));export{d0 as A,C0 as F,Ar as G,Sr as R,k0 as S,D0 as X,Qk as a,Jk as b,Oc as c,rT as d,bk as e,Yk as f,Gm as g,tT as h,Zk as i,B as j,eT as k,w0 as l,S0 as m,I0 as n,nT as o,iT as p,E0 as q,me as r,Xk as s,y0 as t,sT as u};
