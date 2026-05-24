const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BQW0mLwX.js","assets/index-B8M_07_W.js","assets/iconBase-JBCL0ikv.js","assets/arrow-right-SqMIsKce.js","assets/button-FgWwZoGo.css","assets/AboutUs-CWDZwN8v.js","assets/4-CdeCWZMT.js","assets/Education-pTEIZ2Qc.js","assets/external-link-6iNSNgen.js","assets/ProjectsData-wbYKG-AW.js","assets/1 (19)-BBaMp7dV.js","assets/designpage-C8M2b3WL.js","assets/proxy-JAgg2ihF.js","assets/Testimonials-B6PRu2hX.js","assets/Contact-aB5Nu9ZZ.js","assets/Copyright-DEUtl6by.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();var Zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var zu={exports:{}},hs={},Wu={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function $y(){if(Sp)return ge;Sp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),_=Symbol.iterator;function y(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,M={};function z(C,R,te){this.props=C,this.context=R,this.refs=M,this.updater=te||N}z.prototype.isReactComponent={},z.prototype.setState=function(C,R){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,R,"setState")},z.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function me(){}me.prototype=z.prototype;function Ee(C,R,te){this.props=C,this.context=R,this.refs=M,this.updater=te||N}var Ie=Ee.prototype=new me;Ie.constructor=Ee,x(Ie,z.prototype),Ie.isPureReactComponent=!0;var Ce=Array.isArray,Z=Object.prototype.hasOwnProperty,F={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function H(C,R,te){var ne,fe={},pe=null,ae=null;if(R!=null)for(ne in R.ref!==void 0&&(ae=R.ref),R.key!==void 0&&(pe=""+R.key),R)Z.call(R,ne)&&!X.hasOwnProperty(ne)&&(fe[ne]=R[ne]);var G=arguments.length-2;if(G===1)fe.children=te;else if(1<G){for(var ce=Array(G),Ae=0;Ae<G;Ae++)ce[Ae]=arguments[Ae+2];fe.children=ce}if(C&&C.defaultProps)for(ne in G=C.defaultProps,G)fe[ne]===void 0&&(fe[ne]=G[ne]);return{$$typeof:i,type:C,key:pe,ref:ae,props:fe,_owner:F.current}}function le(C,R){return{$$typeof:i,type:C.type,key:R,ref:C.ref,props:C.props,_owner:C._owner}}function oe(C){return typeof C=="object"&&C!==null&&C.$$typeof===i}function W(C){var R={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(te){return R[te]})}var D=/\/+/g;function Q(C,R){return typeof C=="object"&&C!==null&&C.key!=null?W(""+C.key):R.toString(36)}function $(C,R,te,ne,fe){var pe=typeof C;(pe==="undefined"||pe==="boolean")&&(C=null);var ae=!1;if(C===null)ae=!0;else switch(pe){case"string":case"number":ae=!0;break;case"object":switch(C.$$typeof){case i:case e:ae=!0}}if(ae)return ae=C,fe=fe(ae),C=ne===""?"."+Q(ae,0):ne,Ce(fe)?(te="",C!=null&&(te=C.replace(D,"$&/")+"/"),$(fe,R,te,"",function(Ae){return Ae})):fe!=null&&(oe(fe)&&(fe=le(fe,te+(!fe.key||ae&&ae.key===fe.key?"":(""+fe.key).replace(D,"$&/")+"/")+C)),R.push(fe)),1;if(ae=0,ne=ne===""?".":ne+":",Ce(C))for(var G=0;G<C.length;G++){pe=C[G];var ce=ne+Q(pe,G);ae+=$(pe,R,te,ce,fe)}else if(ce=y(C),typeof ce=="function")for(C=ce.call(C),G=0;!(pe=C.next()).done;)pe=pe.value,ce=ne+Q(pe,G++),ae+=$(pe,R,te,ce,fe);else if(pe==="object")throw R=String(C),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return ae}function Se(C,R,te){if(C==null)return C;var ne=[],fe=0;return $(C,ne,"","",function(pe){return R.call(te,pe,fe++)}),ne}function ke(C){if(C._status===-1){var R=C._result;R=R(),R.then(function(te){(C._status===0||C._status===-1)&&(C._status=1,C._result=te)},function(te){(C._status===0||C._status===-1)&&(C._status=2,C._result=te)}),C._status===-1&&(C._status=0,C._result=R)}if(C._status===1)return C._result.default;throw C._result}var ye={current:null},j={transition:null},J={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:j,ReactCurrentOwner:F};function B(){throw Error("act(...) is not supported in production builds of React.")}return ge.Children={map:Se,forEach:function(C,R,te){Se(C,function(){R.apply(this,arguments)},te)},count:function(C){var R=0;return Se(C,function(){R++}),R},toArray:function(C){return Se(C,function(R){return R})||[]},only:function(C){if(!oe(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ge.Component=z,ge.Fragment=n,ge.Profiler=l,ge.PureComponent=Ee,ge.StrictMode=s,ge.Suspense=p,ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,ge.act=B,ge.cloneElement=function(C,R,te){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var ne=x({},C.props),fe=C.key,pe=C.ref,ae=C._owner;if(R!=null){if(R.ref!==void 0&&(pe=R.ref,ae=F.current),R.key!==void 0&&(fe=""+R.key),C.type&&C.type.defaultProps)var G=C.type.defaultProps;for(ce in R)Z.call(R,ce)&&!X.hasOwnProperty(ce)&&(ne[ce]=R[ce]===void 0&&G!==void 0?G[ce]:R[ce])}var ce=arguments.length-2;if(ce===1)ne.children=te;else if(1<ce){G=Array(ce);for(var Ae=0;Ae<ce;Ae++)G[Ae]=arguments[Ae+2];ne.children=G}return{$$typeof:i,type:C.type,key:fe,ref:pe,props:ne,_owner:ae}},ge.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:u,_context:C},C.Consumer=C},ge.createElement=H,ge.createFactory=function(C){var R=H.bind(null,C);return R.type=C,R},ge.createRef=function(){return{current:null}},ge.forwardRef=function(C){return{$$typeof:f,render:C}},ge.isValidElement=oe,ge.lazy=function(C){return{$$typeof:w,_payload:{_status:-1,_result:C},_init:ke}},ge.memo=function(C,R){return{$$typeof:g,type:C,compare:R===void 0?null:R}},ge.startTransition=function(C){var R=j.transition;j.transition={};try{C()}finally{j.transition=R}},ge.unstable_act=B,ge.useCallback=function(C,R){return ye.current.useCallback(C,R)},ge.useContext=function(C){return ye.current.useContext(C)},ge.useDebugValue=function(){},ge.useDeferredValue=function(C){return ye.current.useDeferredValue(C)},ge.useEffect=function(C,R){return ye.current.useEffect(C,R)},ge.useId=function(){return ye.current.useId()},ge.useImperativeHandle=function(C,R,te){return ye.current.useImperativeHandle(C,R,te)},ge.useInsertionEffect=function(C,R){return ye.current.useInsertionEffect(C,R)},ge.useLayoutEffect=function(C,R){return ye.current.useLayoutEffect(C,R)},ge.useMemo=function(C,R){return ye.current.useMemo(C,R)},ge.useReducer=function(C,R,te){return ye.current.useReducer(C,R,te)},ge.useRef=function(C){return ye.current.useRef(C)},ge.useState=function(C){return ye.current.useState(C)},ge.useSyncExternalStore=function(C,R,te){return ye.current.useSyncExternalStore(C,R,te)},ge.useTransition=function(){return ye.current.useTransition()},ge.version="18.3.1",ge}var Cp;function Pc(){return Cp||(Cp=1,Wu.exports=$y()),Wu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function Gy(){if(Ip)return hs;Ip=1;var i=Pc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var w,_={},y=null,N=null;g!==void 0&&(y=""+g),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(N=p.ref);for(w in p)s.call(p,w)&&!u.hasOwnProperty(w)&&(_[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)_[w]===void 0&&(_[w]=p[w]);return{$$typeof:e,type:f,key:y,ref:N,props:_,_owner:l.current}}return hs.Fragment=n,hs.jsx=d,hs.jsxs=d,hs}var kp;function qy(){return kp||(kp=1,zu.exports=Gy()),zu.exports}var O=qy(),se=Pc();const Yk=Rc(se);var el={},Hu={exports:{}},Ct={},Bu={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function Ky(){return Tp||(Tp=1,function(i){function e(j,J){var B=j.length;j.push(J);e:for(;0<B;){var C=B-1>>>1,R=j[C];if(0<l(R,J))j[C]=J,j[B]=R,B=C;else break e}}function n(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var J=j[0],B=j.pop();if(B!==J){j[0]=B;e:for(var C=0,R=j.length,te=R>>>1;C<te;){var ne=2*(C+1)-1,fe=j[ne],pe=ne+1,ae=j[pe];if(0>l(fe,B))pe<R&&0>l(ae,fe)?(j[C]=ae,j[pe]=B,C=pe):(j[C]=fe,j[ne]=B,C=ne);else if(pe<R&&0>l(ae,B))j[C]=ae,j[pe]=B,C=pe;else break e}}return J}function l(j,J){var B=j.sortIndex-J.sortIndex;return B!==0?B:j.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var p=[],g=[],w=1,_=null,y=3,N=!1,x=!1,M=!1,z=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,Ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ie(j){for(var J=n(g);J!==null;){if(J.callback===null)s(g);else if(J.startTime<=j)s(g),J.sortIndex=J.expirationTime,e(p,J);else break;J=n(g)}}function Ce(j){if(M=!1,Ie(j),!x)if(n(p)!==null)x=!0,ke(Z);else{var J=n(g);J!==null&&ye(Ce,J.startTime-j)}}function Z(j,J){x=!1,M&&(M=!1,me(H),H=-1),N=!0;var B=y;try{for(Ie(J),_=n(p);_!==null&&(!(_.expirationTime>J)||j&&!W());){var C=_.callback;if(typeof C=="function"){_.callback=null,y=_.priorityLevel;var R=C(_.expirationTime<=J);J=i.unstable_now(),typeof R=="function"?_.callback=R:_===n(p)&&s(p),Ie(J)}else s(p);_=n(p)}if(_!==null)var te=!0;else{var ne=n(g);ne!==null&&ye(Ce,ne.startTime-J),te=!1}return te}finally{_=null,y=B,N=!1}}var F=!1,X=null,H=-1,le=5,oe=-1;function W(){return!(i.unstable_now()-oe<le)}function D(){if(X!==null){var j=i.unstable_now();oe=j;var J=!0;try{J=X(!0,j)}finally{J?Q():(F=!1,X=null)}}else F=!1}var Q;if(typeof Ee=="function")Q=function(){Ee(D)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Se=$.port2;$.port1.onmessage=D,Q=function(){Se.postMessage(null)}}else Q=function(){z(D,0)};function ke(j){X=j,F||(F=!0,Q())}function ye(j,J){H=z(function(){j(i.unstable_now())},J)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(j){j.callback=null},i.unstable_continueExecution=function(){x||N||(x=!0,ke(Z))},i.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<j?Math.floor(1e3/j):5},i.unstable_getCurrentPriorityLevel=function(){return y},i.unstable_getFirstCallbackNode=function(){return n(p)},i.unstable_next=function(j){switch(y){case 1:case 2:case 3:var J=3;break;default:J=y}var B=y;y=J;try{return j()}finally{y=B}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(j,J){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var B=y;y=j;try{return J()}finally{y=B}},i.unstable_scheduleCallback=function(j,J,B){var C=i.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?C+B:C):B=C,j){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=B+R,j={id:w++,callback:J,priorityLevel:j,startTime:B,expirationTime:R,sortIndex:-1},B>C?(j.sortIndex=B,e(g,j),n(p)===null&&j===n(g)&&(M?(me(H),H=-1):M=!0,ye(Ce,B-C))):(j.sortIndex=R,e(p,j),x||N||(x=!0,ke(Z))),j},i.unstable_shouldYield=W,i.unstable_wrapCallback=function(j){var J=y;return function(){var B=y;y=J;try{return j.apply(this,arguments)}finally{y=B}}}}(Vu)),Vu}var Np;function Qy(){return Np||(Np=1,Bu.exports=Ky()),Bu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function Yy(){if(xp)return Ct;xp=1;var i=Pc(),e=Qy();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},_={};function y(t){return p.call(_,t)?!0:p.call(w,t)?!1:g.test(t)?_[t]=!0:(w[t]=!0,!1)}function N(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x(t,r,o,a){if(r===null||typeof r>"u"||N(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(t,r,o,a,c,h,m){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=m}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){z[t]=new M(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];z[r]=new M(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){z[t]=new M(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){z[t]=new M(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){z[t]=new M(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){z[t]=new M(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){z[t]=new M(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){z[t]=new M(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){z[t]=new M(t,5,!1,t.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function Ee(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(me,Ee);z[r]=new M(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(me,Ee);z[r]=new M(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(me,Ee);z[r]=new M(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){z[t]=new M(t,1,!1,t.toLowerCase(),null,!1,!1)}),z.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){z[t]=new M(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ie(t,r,o,a){var c=z.hasOwnProperty(r)?z[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(x(r,o,c,a)&&(o=null),a||c===null?y(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var Ce=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),F=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),W=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),Se=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),j=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var B=Object.assign,C;function R(t){if(C===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);C=r&&r[1]||""}return`
`+C+t}var te=!1;function ne(t,r){if(!t||te)return"";te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(T){var a=T}Reflect.construct(t,[],r)}else{try{r.call()}catch(T){a=T}t.call(r.prototype)}else{try{throw Error()}catch(T){a=T}t()}}catch(T){if(T&&a&&typeof T.stack=="string"){for(var c=T.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,v=h.length-1;1<=m&&0<=v&&c[m]!==h[v];)v--;for(;1<=m&&0<=v;m--,v--)if(c[m]!==h[v]){if(m!==1||v!==1)do if(m--,v--,0>v||c[m]!==h[v]){var E=`
`+c[m].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=m&&0<=v);break}}}finally{te=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?R(t):""}function fe(t){switch(t.tag){case 5:return R(t.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return t=ne(t.type,!1),t;case 11:return t=ne(t.type.render,!1),t;case 1:return t=ne(t.type,!0),t;default:return""}}function pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case F:return"Portal";case le:return"Profiler";case H:return"StrictMode";case Q:return"Suspense";case $:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case W:return(t.displayName||"Context")+".Consumer";case oe:return(t._context.displayName||"Context")+".Provider";case D:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Se:return r=t.displayName||null,r!==null?r:pe(t.type)||"Memo";case ke:r=t._payload,t=t._init;try{return pe(t(r))}catch{}}return null}function ae(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(r);case 8:return r===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function G(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ce(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ae(t){var r=ce(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function ut(t){t._valueTracker||(t._valueTracker=Ae(t))}function At(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=ce(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function be(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ne(t,r){var o=r.checked;return B({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function it(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=G(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function zt(t,r){r=r.checked,r!=null&&Ie(t,"checked",r,!1)}function br(t,r){zt(t,r);var o=G(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Ql(t,r.type,o):r.hasOwnProperty("defaultValue")&&Ql(t,r.type,G(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Pd(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ql(t,r,o){(r!=="number"||be(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ni=Array.isArray;function Or(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+G(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function Yl(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return B({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ad(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(Ni(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:G(o)}}function bd(t,r){var o=G(r.value),a=G(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Od(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Dd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xl(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Dd(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vs,Ld=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function xi(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y_=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(t){Y_.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Ri[r]=Ri[t]})});function Md(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Ri.hasOwnProperty(t)&&Ri[t]?(""+r).trim():r+"px"}function Fd(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=Md(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var X_=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jl(t,r){if(r){if(X_[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function Zl(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ea=null;function ta(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var na=null,Dr=null,Lr=null;function Ud(t){if(t=Xi(t)){if(typeof na!="function")throw Error(n(280));var r=t.stateNode;r&&(r=po(r),na(t.stateNode,t.type,r))}}function jd(t){Dr?Lr?Lr.push(t):Lr=[t]:Dr=t}function zd(){if(Dr){var t=Dr,r=Lr;if(Lr=Dr=null,Ud(t),r)for(t=0;t<r.length;t++)Ud(r[t])}}function Wd(t,r){return t(r)}function Hd(){}var ra=!1;function Bd(t,r,o){if(ra)return t(r,o);ra=!0;try{return Wd(t,r,o)}finally{ra=!1,(Dr!==null||Lr!==null)&&(Hd(),zd())}}function Pi(t,r){var o=t.stateNode;if(o===null)return null;var a=po(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var ia=!1;if(f)try{var Ai={};Object.defineProperty(Ai,"passive",{get:function(){ia=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{ia=!1}function J_(t,r,o,a,c,h,m,v,E){var T=Array.prototype.slice.call(arguments,3);try{r.apply(o,T)}catch(A){this.onError(A)}}var bi=!1,$s=null,Gs=!1,sa=null,Z_={onError:function(t){bi=!0,$s=t}};function ev(t,r,o,a,c,h,m,v,E){bi=!1,$s=null,J_.apply(Z_,arguments)}function tv(t,r,o,a,c,h,m,v,E){if(ev.apply(this,arguments),bi){if(bi){var T=$s;bi=!1,$s=null}else throw Error(n(198));Gs||(Gs=!0,sa=T)}}function sr(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Vd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function $d(t){if(sr(t)!==t)throw Error(n(188))}function nv(t){var r=t.alternate;if(!r){if(r=sr(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return $d(c),t;if(h===a)return $d(c),r;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,v=c.child;v;){if(v===o){m=!0,o=c,a=h;break}if(v===a){m=!0,a=c,o=h;break}v=v.sibling}if(!m){for(v=h.child;v;){if(v===o){m=!0,o=h,a=c;break}if(v===a){m=!0,a=h,o=c;break}v=v.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Gd(t){return t=nv(t),t!==null?qd(t):null}function qd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=qd(t);if(r!==null)return r;t=t.sibling}return null}var Kd=e.unstable_scheduleCallback,Qd=e.unstable_cancelCallback,rv=e.unstable_shouldYield,iv=e.unstable_requestPaint,Ge=e.unstable_now,sv=e.unstable_getCurrentPriorityLevel,oa=e.unstable_ImmediatePriority,Yd=e.unstable_UserBlockingPriority,qs=e.unstable_NormalPriority,ov=e.unstable_LowPriority,Xd=e.unstable_IdlePriority,Ks=null,tn=null;function lv(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Ks,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:cv,av=Math.log,uv=Math.LN2;function cv(t){return t>>>=0,t===0?32:31-(av(t)/uv|0)|0}var Qs=64,Ys=4194304;function Oi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xs(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var v=m&~c;v!==0?a=Oi(v):(h&=m,h!==0&&(a=Oi(h)))}else m=o&~c,m!==0?a=Oi(m):h!==0&&(a=Oi(h));if(a===0)return 0;if(r!==0&&r!==a&&!(r&c)&&(c=a&-a,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if(a&4&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-Wt(r),c=1<<o,a|=t[o],r&=~c;return a}function dv(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hv(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Wt(h),v=1<<m,E=c[m];E===-1?(!(v&o)||v&a)&&(c[m]=dv(v,r)):E<=r&&(t.expiredLanes|=v),h&=~v}}function la(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jd(){var t=Qs;return Qs<<=1,!(Qs&4194240)&&(Qs=64),t}function aa(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Di(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Wt(r),t[r]=o}function fv(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Wt(o),h=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function ua(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-Wt(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var Pe=0;function Zd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var eh,ca,th,nh,rh,da=!1,Js=[],Nn=null,xn=null,Rn=null,Li=new Map,Mi=new Map,Pn=[],pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ih(t,r){switch(t){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Li.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(r.pointerId)}}function Fi(t,r,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},r!==null&&(r=Xi(r),r!==null&&ca(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function mv(t,r,o,a,c){switch(r){case"focusin":return Nn=Fi(Nn,t,r,o,a,c),!0;case"dragenter":return xn=Fi(xn,t,r,o,a,c),!0;case"mouseover":return Rn=Fi(Rn,t,r,o,a,c),!0;case"pointerover":var h=c.pointerId;return Li.set(h,Fi(Li.get(h)||null,t,r,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Mi.set(h,Fi(Mi.get(h)||null,t,r,o,a,c)),!0}return!1}function sh(t){var r=or(t.target);if(r!==null){var o=sr(r);if(o!==null){if(r=o.tag,r===13){if(r=Vd(o),r!==null){t.blockedOn=r,rh(t.priority,function(){th(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zs(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=fa(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);ea=a,o.target.dispatchEvent(a),ea=null}else return r=Xi(o),r!==null&&ca(r),t.blockedOn=o,!1;r.shift()}return!0}function oh(t,r,o){Zs(t)&&o.delete(r)}function gv(){da=!1,Nn!==null&&Zs(Nn)&&(Nn=null),xn!==null&&Zs(xn)&&(xn=null),Rn!==null&&Zs(Rn)&&(Rn=null),Li.forEach(oh),Mi.forEach(oh)}function Ui(t,r){t.blockedOn===r&&(t.blockedOn=null,da||(da=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,gv)))}function ji(t){function r(c){return Ui(c,t)}if(0<Js.length){Ui(Js[0],t);for(var o=1;o<Js.length;o++){var a=Js[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Nn!==null&&Ui(Nn,t),xn!==null&&Ui(xn,t),Rn!==null&&Ui(Rn,t),Li.forEach(r),Mi.forEach(r),o=0;o<Pn.length;o++)a=Pn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<Pn.length&&(o=Pn[0],o.blockedOn===null);)sh(o),o.blockedOn===null&&Pn.shift()}var Mr=Ce.ReactCurrentBatchConfig,eo=!0;function _v(t,r,o,a){var c=Pe,h=Mr.transition;Mr.transition=null;try{Pe=1,ha(t,r,o,a)}finally{Pe=c,Mr.transition=h}}function vv(t,r,o,a){var c=Pe,h=Mr.transition;Mr.transition=null;try{Pe=4,ha(t,r,o,a)}finally{Pe=c,Mr.transition=h}}function ha(t,r,o,a){if(eo){var c=fa(t,r,o,a);if(c===null)Pa(t,r,a,to,o),ih(t,a);else if(mv(c,t,r,o,a))a.stopPropagation();else if(ih(t,a),r&4&&-1<pv.indexOf(t)){for(;c!==null;){var h=Xi(c);if(h!==null&&eh(h),h=fa(t,r,o,a),h===null&&Pa(t,r,a,to,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else Pa(t,r,a,null,o)}}var to=null;function fa(t,r,o,a){if(to=null,t=ta(a),t=or(t),t!==null)if(r=sr(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Vd(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return to=t,null}function lh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sv()){case oa:return 1;case Yd:return 4;case qs:case ov:return 16;case Xd:return 536870912;default:return 16}default:return 16}}var An=null,pa=null,no=null;function ah(){if(no)return no;var t,r=pa,o=r.length,a,c="value"in An?An.value:An.textContent,h=c.length;for(t=0;t<o&&r[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&r[o-a]===c[h-a];a++);return no=c.slice(t,1<a?1-a:void 0)}function ro(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function io(){return!0}function uh(){return!1}function Tt(t){function r(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(o=t[v],this[v]=o?o(h):h[v]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?io:uh,this.isPropagationStopped=uh,this}return B(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),r}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ma=Tt(Fr),zi=B({},Fr,{view:0,detail:0}),yv=Tt(zi),ga,_a,Wi,so=B({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ya,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wi&&(Wi&&t.type==="mousemove"?(ga=t.screenX-Wi.screenX,_a=t.screenY-Wi.screenY):_a=ga=0,Wi=t),ga)},movementY:function(t){return"movementY"in t?t.movementY:_a}}),ch=Tt(so),wv=B({},so,{dataTransfer:0}),Ev=Tt(wv),Sv=B({},zi,{relatedTarget:0}),va=Tt(Sv),Cv=B({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=Tt(Cv),kv=B({},Fr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tv=Tt(kv),Nv=B({},Fr,{data:0}),dh=Tt(Nv),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Pv[t])?!!r[t]:!1}function ya(){return Av}var bv=B({},zi,{key:function(t){if(t.key){var r=xv[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ya,charCode:function(t){return t.type==="keypress"?ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ov=Tt(bv),Dv=B({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hh=Tt(Dv),Lv=B({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ya}),Mv=Tt(Lv),Fv=B({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uv=Tt(Fv),jv=B({},so,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zv=Tt(jv),Wv=[9,13,27,32],wa=f&&"CompositionEvent"in window,Hi=null;f&&"documentMode"in document&&(Hi=document.documentMode);var Hv=f&&"TextEvent"in window&&!Hi,fh=f&&(!wa||Hi&&8<Hi&&11>=Hi),ph=" ",mh=!1;function gh(t,r){switch(t){case"keyup":return Wv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _h(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function Bv(t,r){switch(t){case"compositionend":return _h(r);case"keypress":return r.which!==32?null:(mh=!0,ph);case"textInput":return t=r.data,t===ph&&mh?null:t;default:return null}}function Vv(t,r){if(Ur)return t==="compositionend"||!wa&&gh(t,r)?(t=ah(),no=pa=An=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return fh&&r.locale!=="ko"?null:r.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!$v[t.type]:r==="textarea"}function yh(t,r,o,a){jd(a),r=co(r,"onChange"),0<r.length&&(o=new ma("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var Bi=null,Vi=null;function Gv(t){Fh(t,0)}function oo(t){var r=Br(t);if(At(r))return t}function qv(t,r){if(t==="change")return r}var wh=!1;if(f){var Ea;if(f){var Sa="oninput"in document;if(!Sa){var Eh=document.createElement("div");Eh.setAttribute("oninput","return;"),Sa=typeof Eh.oninput=="function"}Ea=Sa}else Ea=!1;wh=Ea&&(!document.documentMode||9<document.documentMode)}function Sh(){Bi&&(Bi.detachEvent("onpropertychange",Ch),Vi=Bi=null)}function Ch(t){if(t.propertyName==="value"&&oo(Vi)){var r=[];yh(r,Vi,t,ta(t)),Bd(Gv,r)}}function Kv(t,r,o){t==="focusin"?(Sh(),Bi=r,Vi=o,Bi.attachEvent("onpropertychange",Ch)):t==="focusout"&&Sh()}function Qv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oo(Vi)}function Yv(t,r){if(t==="click")return oo(r)}function Xv(t,r){if(t==="input"||t==="change")return oo(r)}function Jv(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Ht=typeof Object.is=="function"?Object.is:Jv;function $i(t,r){if(Ht(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(r,c)||!Ht(t[c],r[c]))return!1}return!0}function Ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kh(t,r){var o=Ih(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ih(o)}}function Th(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Th(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Nh(){for(var t=window,r=be();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=be(t.document)}return r}function Ca(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Zv(t){var r=Nh(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Th(o.ownerDocument.documentElement,o)){if(a!==null&&Ca(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=kh(o,h);var m=kh(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(r),t.extend(m.node,m.offset)):(r.setEnd(m.node,m.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ey=f&&"documentMode"in document&&11>=document.documentMode,jr=null,Ia=null,Gi=null,ka=!1;function xh(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ka||jr==null||jr!==be(a)||(a=jr,"selectionStart"in a&&Ca(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Gi&&$i(Gi,a)||(Gi=a,a=co(Ia,"onSelect"),0<a.length&&(r=new ma("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=jr)))}function lo(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var zr={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Ta={},Rh={};f&&(Rh=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function ao(t){if(Ta[t])return Ta[t];if(!zr[t])return t;var r=zr[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Rh)return Ta[t]=r[o];return t}var Ph=ao("animationend"),Ah=ao("animationiteration"),bh=ao("animationstart"),Oh=ao("transitionend"),Dh=new Map,Lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(t,r){Dh.set(t,r),u(r,[t])}for(var Na=0;Na<Lh.length;Na++){var xa=Lh[Na],ty=xa.toLowerCase(),ny=xa[0].toUpperCase()+xa.slice(1);bn(ty,"on"+ny)}bn(Ph,"onAnimationEnd"),bn(Ah,"onAnimationIteration"),bn(bh,"onAnimationStart"),bn("dblclick","onDoubleClick"),bn("focusin","onFocus"),bn("focusout","onBlur"),bn(Oh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));function Mh(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,tv(a,r,void 0,t),t.currentTarget=null}function Fh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var m=a.length-1;0<=m;m--){var v=a[m],E=v.instance,T=v.currentTarget;if(v=v.listener,E!==h&&c.isPropagationStopped())break e;Mh(c,v,T),h=E}else for(m=0;m<a.length;m++){if(v=a[m],E=v.instance,T=v.currentTarget,v=v.listener,E!==h&&c.isPropagationStopped())break e;Mh(c,v,T),h=E}}}if(Gs)throw t=sa,Gs=!1,sa=null,t}function Ue(t,r){var o=r[Ma];o===void 0&&(o=r[Ma]=new Set);var a=t+"__bubble";o.has(a)||(Uh(r,t,2,!1),o.add(a))}function Ra(t,r,o){var a=0;r&&(a|=4),Uh(o,t,a,r)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Ki(t){if(!t[uo]){t[uo]=!0,s.forEach(function(o){o!=="selectionchange"&&(ry.has(o)||Ra(o,!1,t),Ra(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[uo]||(r[uo]=!0,Ra("selectionchange",!1,r))}}function Uh(t,r,o,a){switch(lh(r)){case 1:var c=_v;break;case 4:c=vv;break;default:c=ha}o=c.bind(null,r,o,t),c=void 0,!ia||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function Pa(t,r,o,a,c){var h=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var v=a.stateNode.containerInfo;if(v===c||v.nodeType===8&&v.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var E=m.tag;if((E===3||E===4)&&(E=m.stateNode.containerInfo,E===c||E.nodeType===8&&E.parentNode===c))return;m=m.return}for(;v!==null;){if(m=or(v),m===null)return;if(E=m.tag,E===5||E===6){a=h=m;continue e}v=v.parentNode}}a=a.return}Bd(function(){var T=h,A=ta(o),b=[];e:{var P=Dh.get(t);if(P!==void 0){var V=ma,K=t;switch(t){case"keypress":if(ro(o)===0)break e;case"keydown":case"keyup":V=Ov;break;case"focusin":K="focus",V=va;break;case"focusout":K="blur",V=va;break;case"beforeblur":case"afterblur":V=va;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Mv;break;case Ph:case Ah:case bh:V=Iv;break;case Oh:V=Uv;break;case"scroll":V=yv;break;case"wheel":V=zv;break;case"copy":case"cut":case"paste":V=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=hh}var Y=(r&4)!==0,qe=!Y&&t==="scroll",I=Y?P!==null?P+"Capture":null:P;Y=[];for(var S=T,k;S!==null;){k=S;var L=k.stateNode;if(k.tag===5&&L!==null&&(k=L,I!==null&&(L=Pi(S,I),L!=null&&Y.push(Qi(S,L,k)))),qe)break;S=S.return}0<Y.length&&(P=new V(P,K,null,o,A),b.push({event:P,listeners:Y}))}}if(!(r&7)){e:{if(P=t==="mouseover"||t==="pointerover",V=t==="mouseout"||t==="pointerout",P&&o!==ea&&(K=o.relatedTarget||o.fromElement)&&(or(K)||K[dn]))break e;if((V||P)&&(P=A.window===A?A:(P=A.ownerDocument)?P.defaultView||P.parentWindow:window,V?(K=o.relatedTarget||o.toElement,V=T,K=K?or(K):null,K!==null&&(qe=sr(K),K!==qe||K.tag!==5&&K.tag!==6)&&(K=null)):(V=null,K=T),V!==K)){if(Y=ch,L="onMouseLeave",I="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(Y=hh,L="onPointerLeave",I="onPointerEnter",S="pointer"),qe=V==null?P:Br(V),k=K==null?P:Br(K),P=new Y(L,S+"leave",V,o,A),P.target=qe,P.relatedTarget=k,L=null,or(A)===T&&(Y=new Y(I,S+"enter",K,o,A),Y.target=k,Y.relatedTarget=qe,L=Y),qe=L,V&&K)t:{for(Y=V,I=K,S=0,k=Y;k;k=Wr(k))S++;for(k=0,L=I;L;L=Wr(L))k++;for(;0<S-k;)Y=Wr(Y),S--;for(;0<k-S;)I=Wr(I),k--;for(;S--;){if(Y===I||I!==null&&Y===I.alternate)break t;Y=Wr(Y),I=Wr(I)}Y=null}else Y=null;V!==null&&jh(b,P,V,Y,!1),K!==null&&qe!==null&&jh(b,qe,K,Y,!0)}}e:{if(P=T?Br(T):window,V=P.nodeName&&P.nodeName.toLowerCase(),V==="select"||V==="input"&&P.type==="file")var ee=qv;else if(vh(P))if(wh)ee=Xv;else{ee=Qv;var re=Kv}else(V=P.nodeName)&&V.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&(ee=Yv);if(ee&&(ee=ee(t,T))){yh(b,ee,o,A);break e}re&&re(t,P,T),t==="focusout"&&(re=P._wrapperState)&&re.controlled&&P.type==="number"&&Ql(P,"number",P.value)}switch(re=T?Br(T):window,t){case"focusin":(vh(re)||re.contentEditable==="true")&&(jr=re,Ia=T,Gi=null);break;case"focusout":Gi=Ia=jr=null;break;case"mousedown":ka=!0;break;case"contextmenu":case"mouseup":case"dragend":ka=!1,xh(b,o,A);break;case"selectionchange":if(ey)break;case"keydown":case"keyup":xh(b,o,A)}var ie;if(wa)e:{switch(t){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Ur?gh(t,o)&&(de="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(de="onCompositionStart");de&&(fh&&o.locale!=="ko"&&(Ur||de!=="onCompositionStart"?de==="onCompositionEnd"&&Ur&&(ie=ah()):(An=A,pa="value"in An?An.value:An.textContent,Ur=!0)),re=co(T,de),0<re.length&&(de=new dh(de,t,null,o,A),b.push({event:de,listeners:re}),ie?de.data=ie:(ie=_h(o),ie!==null&&(de.data=ie)))),(ie=Hv?Bv(t,o):Vv(t,o))&&(T=co(T,"onBeforeInput"),0<T.length&&(A=new dh("onBeforeInput","beforeinput",null,o,A),b.push({event:A,listeners:T}),A.data=ie))}Fh(b,r)})}function Qi(t,r,o){return{instance:t,listener:r,currentTarget:o}}function co(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Pi(t,o),h!=null&&a.unshift(Qi(t,h,c)),h=Pi(t,r),h!=null&&a.push(Qi(t,h,c))),t=t.return}return a}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jh(t,r,o,a,c){for(var h=r._reactName,m=[];o!==null&&o!==a;){var v=o,E=v.alternate,T=v.stateNode;if(E!==null&&E===a)break;v.tag===5&&T!==null&&(v=T,c?(E=Pi(o,h),E!=null&&m.unshift(Qi(o,E,v))):c||(E=Pi(o,h),E!=null&&m.push(Qi(o,E,v)))),o=o.return}m.length!==0&&t.push({event:r,listeners:m})}var iy=/\r\n?/g,sy=/\u0000|\uFFFD/g;function zh(t){return(typeof t=="string"?t:""+t).replace(iy,`
`).replace(sy,"")}function ho(t,r,o){if(r=zh(r),zh(t)!==r&&o)throw Error(n(425))}function fo(){}var Aa=null,ba=null;function Oa(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Da=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,ly=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(t){return Wh.resolve(null).then(t).catch(ay)}:Da;function ay(t){setTimeout(function(){throw t})}function La(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),ji(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);ji(r)}function On(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Hh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),nn="__reactFiber$"+Hr,Yi="__reactProps$"+Hr,dn="__reactContainer$"+Hr,Ma="__reactEvents$"+Hr,uy="__reactListeners$"+Hr,cy="__reactHandles$"+Hr;function or(t){var r=t[nn];if(r)return r;for(var o=t.parentNode;o;){if(r=o[dn]||o[nn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Hh(t);t!==null;){if(o=t[nn])return o;t=Hh(t)}return r}t=o,o=t.parentNode}return null}function Xi(t){return t=t[nn]||t[dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Br(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function po(t){return t[Yi]||null}var Fa=[],Vr=-1;function Dn(t){return{current:t}}function je(t){0>Vr||(t.current=Fa[Vr],Fa[Vr]=null,Vr--)}function Le(t,r){Vr++,Fa[Vr]=t.current,t.current=r}var Ln={},ct=Dn(Ln),vt=Dn(!1),lr=Ln;function $r(t,r){var o=t.type.contextTypes;if(!o)return Ln;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=r[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function yt(t){return t=t.childContextTypes,t!=null}function mo(){je(vt),je(ct)}function Bh(t,r,o){if(ct.current!==Ln)throw Error(n(168));Le(ct,r),Le(vt,o)}function Vh(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,ae(t)||"Unknown",c));return B({},o,a)}function go(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ln,lr=ct.current,Le(ct,t),Le(vt,vt.current),!0}function $h(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Vh(t,r,lr),a.__reactInternalMemoizedMergedChildContext=t,je(vt),je(ct),Le(ct,t)):je(vt),Le(vt,o)}var hn=null,_o=!1,Ua=!1;function Gh(t){hn===null?hn=[t]:hn.push(t)}function dy(t){_o=!0,Gh(t)}function Mn(){if(!Ua&&hn!==null){Ua=!0;var t=0,r=Pe;try{var o=hn;for(Pe=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}hn=null,_o=!1}catch(c){throw hn!==null&&(hn=hn.slice(t+1)),Kd(oa,Mn),c}finally{Pe=r,Ua=!1}}return null}var Gr=[],qr=0,vo=null,yo=0,bt=[],Ot=0,ar=null,fn=1,pn="";function ur(t,r){Gr[qr++]=yo,Gr[qr++]=vo,vo=t,yo=r}function qh(t,r,o){bt[Ot++]=fn,bt[Ot++]=pn,bt[Ot++]=ar,ar=t;var a=fn;t=pn;var c=32-Wt(a)-1;a&=~(1<<c),o+=1;var h=32-Wt(r)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,fn=1<<32-Wt(r)+c|o<<c|a,pn=h+t}else fn=1<<h|o<<c|a,pn=t}function ja(t){t.return!==null&&(ur(t,1),qh(t,1,0))}function za(t){for(;t===vo;)vo=Gr[--qr],Gr[qr]=null,yo=Gr[--qr],Gr[qr]=null;for(;t===ar;)ar=bt[--Ot],bt[Ot]=null,pn=bt[--Ot],bt[Ot]=null,fn=bt[--Ot],bt[Ot]=null}var Nt=null,xt=null,ze=!1,Bt=null;function Kh(t,r){var o=Ft(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Qh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Nt=t,xt=On(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Nt=t,xt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ar!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Ft(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,Nt=t,xt=null,!0):!1;default:return!1}}function Wa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ha(t){if(ze){var r=xt;if(r){var o=r;if(!Qh(t,r)){if(Wa(t))throw Error(n(418));r=On(o.nextSibling);var a=Nt;r&&Qh(t,r)?Kh(a,o):(t.flags=t.flags&-4097|2,ze=!1,Nt=t)}}else{if(Wa(t))throw Error(n(418));t.flags=t.flags&-4097|2,ze=!1,Nt=t}}}function Yh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function wo(t){if(t!==Nt)return!1;if(!ze)return Yh(t),ze=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Oa(t.type,t.memoizedProps)),r&&(r=xt)){if(Wa(t))throw Xh(),Error(n(418));for(;r;)Kh(t,r),r=On(r.nextSibling)}if(Yh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){xt=On(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}xt=null}}else xt=Nt?On(t.stateNode.nextSibling):null;return!0}function Xh(){for(var t=xt;t;)t=On(t.nextSibling)}function Kr(){xt=Nt=null,ze=!1}function Ba(t){Bt===null?Bt=[t]:Bt.push(t)}var hy=Ce.ReactCurrentBatchConfig;function Ji(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(m){var v=c.refs;m===null?delete v[h]:v[h]=m},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Eo(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Jh(t){var r=t._init;return r(t._payload)}function Zh(t){function r(I,S){if(t){var k=I.deletions;k===null?(I.deletions=[S],I.flags|=16):k.push(S)}}function o(I,S){if(!t)return null;for(;S!==null;)r(I,S),S=S.sibling;return null}function a(I,S){for(I=new Map;S!==null;)S.key!==null?I.set(S.key,S):I.set(S.index,S),S=S.sibling;return I}function c(I,S){return I=Vn(I,S),I.index=0,I.sibling=null,I}function h(I,S,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<S?(I.flags|=2,S):k):(I.flags|=2,S)):(I.flags|=1048576,S)}function m(I){return t&&I.alternate===null&&(I.flags|=2),I}function v(I,S,k,L){return S===null||S.tag!==6?(S=Du(k,I.mode,L),S.return=I,S):(S=c(S,k),S.return=I,S)}function E(I,S,k,L){var ee=k.type;return ee===X?A(I,S,k.props.children,L,k.key):S!==null&&(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===ke&&Jh(ee)===S.type)?(L=c(S,k.props),L.ref=Ji(I,S,k),L.return=I,L):(L=$o(k.type,k.key,k.props,null,I.mode,L),L.ref=Ji(I,S,k),L.return=I,L)}function T(I,S,k,L){return S===null||S.tag!==4||S.stateNode.containerInfo!==k.containerInfo||S.stateNode.implementation!==k.implementation?(S=Lu(k,I.mode,L),S.return=I,S):(S=c(S,k.children||[]),S.return=I,S)}function A(I,S,k,L,ee){return S===null||S.tag!==7?(S=_r(k,I.mode,L,ee),S.return=I,S):(S=c(S,k),S.return=I,S)}function b(I,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Du(""+S,I.mode,k),S.return=I,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Z:return k=$o(S.type,S.key,S.props,null,I.mode,k),k.ref=Ji(I,null,S),k.return=I,k;case F:return S=Lu(S,I.mode,k),S.return=I,S;case ke:var L=S._init;return b(I,L(S._payload),k)}if(Ni(S)||J(S))return S=_r(S,I.mode,k,null),S.return=I,S;Eo(I,S)}return null}function P(I,S,k,L){var ee=S!==null?S.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return ee!==null?null:v(I,S,""+k,L);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Z:return k.key===ee?E(I,S,k,L):null;case F:return k.key===ee?T(I,S,k,L):null;case ke:return ee=k._init,P(I,S,ee(k._payload),L)}if(Ni(k)||J(k))return ee!==null?null:A(I,S,k,L,null);Eo(I,k)}return null}function V(I,S,k,L,ee){if(typeof L=="string"&&L!==""||typeof L=="number")return I=I.get(k)||null,v(S,I,""+L,ee);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Z:return I=I.get(L.key===null?k:L.key)||null,E(S,I,L,ee);case F:return I=I.get(L.key===null?k:L.key)||null,T(S,I,L,ee);case ke:var re=L._init;return V(I,S,k,re(L._payload),ee)}if(Ni(L)||J(L))return I=I.get(k)||null,A(S,I,L,ee,null);Eo(S,L)}return null}function K(I,S,k,L){for(var ee=null,re=null,ie=S,de=S=0,Ze=null;ie!==null&&de<k.length;de++){ie.index>de?(Ze=ie,ie=null):Ze=ie.sibling;var xe=P(I,ie,k[de],L);if(xe===null){ie===null&&(ie=Ze);break}t&&ie&&xe.alternate===null&&r(I,ie),S=h(xe,S,de),re===null?ee=xe:re.sibling=xe,re=xe,ie=Ze}if(de===k.length)return o(I,ie),ze&&ur(I,de),ee;if(ie===null){for(;de<k.length;de++)ie=b(I,k[de],L),ie!==null&&(S=h(ie,S,de),re===null?ee=ie:re.sibling=ie,re=ie);return ze&&ur(I,de),ee}for(ie=a(I,ie);de<k.length;de++)Ze=V(ie,I,de,k[de],L),Ze!==null&&(t&&Ze.alternate!==null&&ie.delete(Ze.key===null?de:Ze.key),S=h(Ze,S,de),re===null?ee=Ze:re.sibling=Ze,re=Ze);return t&&ie.forEach(function($n){return r(I,$n)}),ze&&ur(I,de),ee}function Y(I,S,k,L){var ee=J(k);if(typeof ee!="function")throw Error(n(150));if(k=ee.call(k),k==null)throw Error(n(151));for(var re=ee=null,ie=S,de=S=0,Ze=null,xe=k.next();ie!==null&&!xe.done;de++,xe=k.next()){ie.index>de?(Ze=ie,ie=null):Ze=ie.sibling;var $n=P(I,ie,xe.value,L);if($n===null){ie===null&&(ie=Ze);break}t&&ie&&$n.alternate===null&&r(I,ie),S=h($n,S,de),re===null?ee=$n:re.sibling=$n,re=$n,ie=Ze}if(xe.done)return o(I,ie),ze&&ur(I,de),ee;if(ie===null){for(;!xe.done;de++,xe=k.next())xe=b(I,xe.value,L),xe!==null&&(S=h(xe,S,de),re===null?ee=xe:re.sibling=xe,re=xe);return ze&&ur(I,de),ee}for(ie=a(I,ie);!xe.done;de++,xe=k.next())xe=V(ie,I,de,xe.value,L),xe!==null&&(t&&xe.alternate!==null&&ie.delete(xe.key===null?de:xe.key),S=h(xe,S,de),re===null?ee=xe:re.sibling=xe,re=xe);return t&&ie.forEach(function(Vy){return r(I,Vy)}),ze&&ur(I,de),ee}function qe(I,S,k,L){if(typeof k=="object"&&k!==null&&k.type===X&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Z:e:{for(var ee=k.key,re=S;re!==null;){if(re.key===ee){if(ee=k.type,ee===X){if(re.tag===7){o(I,re.sibling),S=c(re,k.props.children),S.return=I,I=S;break e}}else if(re.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===ke&&Jh(ee)===re.type){o(I,re.sibling),S=c(re,k.props),S.ref=Ji(I,re,k),S.return=I,I=S;break e}o(I,re);break}else r(I,re);re=re.sibling}k.type===X?(S=_r(k.props.children,I.mode,L,k.key),S.return=I,I=S):(L=$o(k.type,k.key,k.props,null,I.mode,L),L.ref=Ji(I,S,k),L.return=I,I=L)}return m(I);case F:e:{for(re=k.key;S!==null;){if(S.key===re)if(S.tag===4&&S.stateNode.containerInfo===k.containerInfo&&S.stateNode.implementation===k.implementation){o(I,S.sibling),S=c(S,k.children||[]),S.return=I,I=S;break e}else{o(I,S);break}else r(I,S);S=S.sibling}S=Lu(k,I.mode,L),S.return=I,I=S}return m(I);case ke:return re=k._init,qe(I,S,re(k._payload),L)}if(Ni(k))return K(I,S,k,L);if(J(k))return Y(I,S,k,L);Eo(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,S!==null&&S.tag===6?(o(I,S.sibling),S=c(S,k),S.return=I,I=S):(o(I,S),S=Du(k,I.mode,L),S.return=I,I=S),m(I)):o(I,S)}return qe}var Qr=Zh(!0),ef=Zh(!1),So=Dn(null),Co=null,Yr=null,Va=null;function $a(){Va=Yr=Co=null}function Ga(t){var r=So.current;je(So),t._currentValue=r}function qa(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function Xr(t,r){Co=t,Va=Yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(wt=!0),t.firstContext=null)}function Dt(t){var r=t._currentValue;if(Va!==t)if(t={context:t,memoizedValue:r,next:null},Yr===null){if(Co===null)throw Error(n(308));Yr=t,Co.dependencies={lanes:0,firstContext:t}}else Yr=Yr.next=t;return r}var cr=null;function Ka(t){cr===null?cr=[t]:cr.push(t)}function tf(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,Ka(r)):(o.next=c.next,c.next=o),r.interleaved=o,mn(t,a)}function mn(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Fn=!1;function Qa(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Un(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,Te&2){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,mn(t,o)}return c=a.interleaved,c===null?(r.next=r,Ka(a)):(r.next=c.next,c.next=r),a.interleaved=r,mn(t,o)}function Io(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ua(t,o)}}function rf(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=r:h=h.next=r}else c=h=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function ko(t,r,o,a){var c=t.updateQueue;Fn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,v=c.shared.pending;if(v!==null){c.shared.pending=null;var E=v,T=E.next;E.next=null,m===null?h=T:m.next=T,m=E;var A=t.alternate;A!==null&&(A=A.updateQueue,v=A.lastBaseUpdate,v!==m&&(v===null?A.firstBaseUpdate=T:v.next=T,A.lastBaseUpdate=E))}if(h!==null){var b=c.baseState;m=0,A=T=E=null,v=h;do{var P=v.lane,V=v.eventTime;if((a&P)===P){A!==null&&(A=A.next={eventTime:V,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var K=t,Y=v;switch(P=r,V=o,Y.tag){case 1:if(K=Y.payload,typeof K=="function"){b=K.call(V,b,P);break e}b=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=Y.payload,P=typeof K=="function"?K.call(V,b,P):K,P==null)break e;b=B({},b,P);break e;case 2:Fn=!0}}v.callback!==null&&v.lane!==0&&(t.flags|=64,P=c.effects,P===null?c.effects=[v]:P.push(v))}else V={eventTime:V,lane:P,tag:v.tag,payload:v.payload,callback:v.callback,next:null},A===null?(T=A=V,E=b):A=A.next=V,m|=P;if(v=v.next,v===null){if(v=c.shared.pending,v===null)break;P=v,v=P.next,P.next=null,c.lastBaseUpdate=P,c.shared.pending=null}}while(!0);if(A===null&&(E=b),c.baseState=E,c.firstBaseUpdate=T,c.lastBaseUpdate=A,r=c.shared.interleaved,r!==null){c=r;do m|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);fr|=m,t.lanes=m,t.memoizedState=b}}function sf(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var Zi={},rn=Dn(Zi),es=Dn(Zi),ts=Dn(Zi);function dr(t){if(t===Zi)throw Error(n(174));return t}function Ya(t,r){switch(Le(ts,r),Le(es,t),Le(rn,Zi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Xl(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Xl(r,t)}je(rn),Le(rn,r)}function Jr(){je(rn),je(es),je(ts)}function of(t){dr(ts.current);var r=dr(rn.current),o=Xl(r,t.type);r!==o&&(Le(es,t),Le(rn,o))}function Xa(t){es.current===t&&(je(rn),je(es))}var We=Dn(0);function To(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ja=[];function Za(){for(var t=0;t<Ja.length;t++)Ja[t]._workInProgressVersionPrimary=null;Ja.length=0}var No=Ce.ReactCurrentDispatcher,eu=Ce.ReactCurrentBatchConfig,hr=0,He=null,Qe=null,Xe=null,xo=!1,ns=!1,rs=0,fy=0;function dt(){throw Error(n(321))}function tu(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!Ht(t[o],r[o]))return!1;return!0}function nu(t,r,o,a,c,h){if(hr=h,He=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,No.current=t===null||t.memoizedState===null?_y:vy,t=o(a,c),ns){h=0;do{if(ns=!1,rs=0,25<=h)throw Error(n(301));h+=1,Xe=Qe=null,r.updateQueue=null,No.current=yy,t=o(a,c)}while(ns)}if(No.current=Ao,r=Qe!==null&&Qe.next!==null,hr=0,Xe=Qe=He=null,xo=!1,r)throw Error(n(300));return t}function ru(){var t=rs!==0;return rs=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?He.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Lt(){if(Qe===null){var t=He.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var r=Xe===null?He.memoizedState:Xe.next;if(r!==null)Xe=r,Qe=t;else{if(t===null)throw Error(n(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Xe===null?He.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function is(t,r){return typeof r=="function"?r(t):r}function iu(t){var r=Lt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=Qe,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var v=m=null,E=null,T=h;do{var A=T.lane;if((hr&A)===A)E!==null&&(E=E.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),a=T.hasEagerState?T.eagerState:t(a,T.action);else{var b={lane:A,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};E===null?(v=E=b,m=a):E=E.next=b,He.lanes|=A,fr|=A}T=T.next}while(T!==null&&T!==h);E===null?m=a:E.next=v,Ht(a,r.memoizedState)||(wt=!0),r.memoizedState=a,r.baseState=m,r.baseQueue=E,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,He.lanes|=h,fr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function su(t){var r=Lt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=r.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);Ht(h,r.memoizedState)||(wt=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function lf(){}function af(t,r){var o=He,a=Lt(),c=r(),h=!Ht(a.memoizedState,c);if(h&&(a.memoizedState=c,wt=!0),a=a.queue,ou(df.bind(null,o,a,t),[t]),a.getSnapshot!==r||h||Xe!==null&&Xe.memoizedState.tag&1){if(o.flags|=2048,ss(9,cf.bind(null,o,a,c,r),void 0,null),Je===null)throw Error(n(349));hr&30||uf(o,r,c)}return c}function uf(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=He.updateQueue,r===null?(r={lastEffect:null,stores:null},He.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function cf(t,r,o,a){r.value=o,r.getSnapshot=a,hf(r)&&ff(t)}function df(t,r,o){return o(function(){hf(r)&&ff(t)})}function hf(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!Ht(t,o)}catch{return!0}}function ff(t){var r=mn(t,1);r!==null&&qt(r,t,1,-1)}function pf(t){var r=sn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},r.queue=t,t=t.dispatch=gy.bind(null,He,t),[r.memoizedState,t]}function ss(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=He.updateQueue,r===null?(r={lastEffect:null,stores:null},He.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function mf(){return Lt().memoizedState}function Ro(t,r,o,a){var c=sn();He.flags|=t,c.memoizedState=ss(1|r,o,void 0,a===void 0?null:a)}function Po(t,r,o,a){var c=Lt();a=a===void 0?null:a;var h=void 0;if(Qe!==null){var m=Qe.memoizedState;if(h=m.destroy,a!==null&&tu(a,m.deps)){c.memoizedState=ss(r,o,h,a);return}}He.flags|=t,c.memoizedState=ss(1|r,o,h,a)}function gf(t,r){return Ro(8390656,8,t,r)}function ou(t,r){return Po(2048,8,t,r)}function _f(t,r){return Po(4,2,t,r)}function vf(t,r){return Po(4,4,t,r)}function yf(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function wf(t,r,o){return o=o!=null?o.concat([t]):null,Po(4,4,yf.bind(null,r,t),o)}function lu(){}function Ef(t,r){var o=Lt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&tu(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function Sf(t,r){var o=Lt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&tu(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function Cf(t,r,o){return hr&21?(Ht(o,r)||(o=Jd(),He.lanes|=o,fr|=o,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=o)}function py(t,r){var o=Pe;Pe=o!==0&&4>o?o:4,t(!0);var a=eu.transition;eu.transition={};try{t(!1),r()}finally{Pe=o,eu.transition=a}}function If(){return Lt().memoizedState}function my(t,r,o){var a=Hn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},kf(t))Tf(r,o);else if(o=tf(t,r,o,a),o!==null){var c=mt();qt(o,t,a,c),Nf(o,r,a)}}function gy(t,r,o){var a=Hn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(kf(t))Tf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var m=r.lastRenderedState,v=h(m,o);if(c.hasEagerState=!0,c.eagerState=v,Ht(v,m)){var E=r.interleaved;E===null?(c.next=c,Ka(r)):(c.next=E.next,E.next=c),r.interleaved=c;return}}catch{}finally{}o=tf(t,r,c,a),o!==null&&(c=mt(),qt(o,t,a,c),Nf(o,r,a))}}function kf(t){var r=t.alternate;return t===He||r!==null&&r===He}function Tf(t,r){ns=xo=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Nf(t,r,o){if(o&4194240){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ua(t,o)}}var Ao={readContext:Dt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},_y={readContext:Dt,useCallback:function(t,r){return sn().memoizedState=[t,r===void 0?null:r],t},useContext:Dt,useEffect:gf,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Ro(4194308,4,yf.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Ro(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ro(4,2,t,r)},useMemo:function(t,r){var o=sn();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=sn();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=my.bind(null,He,t),[a.memoizedState,t]},useRef:function(t){var r=sn();return t={current:t},r.memoizedState=t},useState:pf,useDebugValue:lu,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=pf(!1),r=t[0];return t=py.bind(null,t[1]),sn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=He,c=sn();if(ze){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Je===null)throw Error(n(349));hr&30||uf(a,r,o)}c.memoizedState=o;var h={value:o,getSnapshot:r};return c.queue=h,gf(df.bind(null,a,h,t),[t]),a.flags|=2048,ss(9,cf.bind(null,a,h,o,r),void 0,null),o},useId:function(){var t=sn(),r=Je.identifierPrefix;if(ze){var o=pn,a=fn;o=(a&~(1<<32-Wt(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=rs++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=fy++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},vy={readContext:Dt,useCallback:Ef,useContext:Dt,useEffect:ou,useImperativeHandle:wf,useInsertionEffect:_f,useLayoutEffect:vf,useMemo:Sf,useReducer:iu,useRef:mf,useState:function(){return iu(is)},useDebugValue:lu,useDeferredValue:function(t){var r=Lt();return Cf(r,Qe.memoizedState,t)},useTransition:function(){var t=iu(is)[0],r=Lt().memoizedState;return[t,r]},useMutableSource:lf,useSyncExternalStore:af,useId:If,unstable_isNewReconciler:!1},yy={readContext:Dt,useCallback:Ef,useContext:Dt,useEffect:ou,useImperativeHandle:wf,useInsertionEffect:_f,useLayoutEffect:vf,useMemo:Sf,useReducer:su,useRef:mf,useState:function(){return su(is)},useDebugValue:lu,useDeferredValue:function(t){var r=Lt();return Qe===null?r.memoizedState=t:Cf(r,Qe.memoizedState,t)},useTransition:function(){var t=su(is)[0],r=Lt().memoizedState;return[t,r]},useMutableSource:lf,useSyncExternalStore:af,useId:If,unstable_isNewReconciler:!1};function Vt(t,r){if(t&&t.defaultProps){r=B({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function au(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:B({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var bo={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=mt(),c=Hn(t),h=gn(a,c);h.payload=r,o!=null&&(h.callback=o),r=Un(t,h,c),r!==null&&(qt(r,t,c,a),Io(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=mt(),c=Hn(t),h=gn(a,c);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=Un(t,h,c),r!==null&&(qt(r,t,c,a),Io(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=mt(),a=Hn(t),c=gn(o,a);c.tag=2,r!=null&&(c.callback=r),r=Un(t,c,a),r!==null&&(qt(r,t,a,o),Io(r,t,a))}};function xf(t,r,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):r.prototype&&r.prototype.isPureReactComponent?!$i(o,a)||!$i(c,h):!0}function Rf(t,r,o){var a=!1,c=Ln,h=r.contextType;return typeof h=="object"&&h!==null?h=Dt(h):(c=yt(r)?lr:ct.current,a=r.contextTypes,h=(a=a!=null)?$r(t,c):Ln),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=bo,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function Pf(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&bo.enqueueReplaceState(r,r.state,null)}function uu(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Qa(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=Dt(h):(h=yt(r)?lr:ct.current,c.context=$r(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(au(t,r,h,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&bo.enqueueReplaceState(c,c.state,null),ko(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Zr(t,r){try{var o="",a=r;do o+=fe(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function cu(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function du(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var wy=typeof WeakMap=="function"?WeakMap:Map;function Af(t,r,o){o=gn(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){jo||(jo=!0,Tu=a),du(t,r)},o}function bf(t,r,o){o=gn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){du(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){du(t,r),typeof a!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var m=r.stack;this.componentDidCatch(r.value,{componentStack:m!==null?m:""})}),o}function Of(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new wy;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=Dy.bind(null,t,r,o),r.then(t,t))}function Df(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Lf(t,r,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=gn(-1,1),r.tag=2,Un(o,r,1))),o.lanes|=1),t)}var Ey=Ce.ReactCurrentOwner,wt=!1;function pt(t,r,o,a){r.child=t===null?ef(r,null,o,a):Qr(r,t.child,o,a)}function Mf(t,r,o,a,c){o=o.render;var h=r.ref;return Xr(r,c),a=nu(t,r,o,a,h,c),o=ru(),t!==null&&!wt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,_n(t,r,c)):(ze&&o&&ja(r),r.flags|=1,pt(t,r,a,c),r.child)}function Ff(t,r,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!Ou(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,Uf(t,r,h,a,c)):(t=$o(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:$i,o(m,a)&&t.ref===r.ref)return _n(t,r,c)}return r.flags|=1,t=Vn(h,a),t.ref=r.ref,t.return=r,r.child=t}function Uf(t,r,o,a,c){if(t!==null){var h=t.memoizedProps;if($i(h,a)&&t.ref===r.ref)if(wt=!1,r.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(wt=!0);else return r.lanes=t.lanes,_n(t,r,c)}return hu(t,r,o,a,c)}function jf(t,r,o){var a=r.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(ti,Rt),Rt|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Le(ti,Rt),Rt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Le(ti,Rt),Rt|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,Le(ti,Rt),Rt|=a;return pt(t,r,c,o),r.child}function zf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function hu(t,r,o,a,c){var h=yt(o)?lr:ct.current;return h=$r(r,h),Xr(r,c),o=nu(t,r,o,a,h,c),a=ru(),t!==null&&!wt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,_n(t,r,c)):(ze&&a&&ja(r),r.flags|=1,pt(t,r,o,c),r.child)}function Wf(t,r,o,a,c){if(yt(o)){var h=!0;go(r)}else h=!1;if(Xr(r,c),r.stateNode===null)Do(t,r),Rf(r,o,a),uu(r,o,a,c),a=!0;else if(t===null){var m=r.stateNode,v=r.memoizedProps;m.props=v;var E=m.context,T=o.contextType;typeof T=="object"&&T!==null?T=Dt(T):(T=yt(o)?lr:ct.current,T=$r(r,T));var A=o.getDerivedStateFromProps,b=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function";b||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==a||E!==T)&&Pf(r,m,a,T),Fn=!1;var P=r.memoizedState;m.state=P,ko(r,a,m,c),E=r.memoizedState,v!==a||P!==E||vt.current||Fn?(typeof A=="function"&&(au(r,o,A,a),E=r.memoizedState),(v=Fn||xf(r,o,v,a,P,E,T))?(b||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=E),m.props=a,m.state=E,m.context=T,a=v):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{m=r.stateNode,nf(t,r),v=r.memoizedProps,T=r.type===r.elementType?v:Vt(r.type,v),m.props=T,b=r.pendingProps,P=m.context,E=o.contextType,typeof E=="object"&&E!==null?E=Dt(E):(E=yt(o)?lr:ct.current,E=$r(r,E));var V=o.getDerivedStateFromProps;(A=typeof V=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==b||P!==E)&&Pf(r,m,a,E),Fn=!1,P=r.memoizedState,m.state=P,ko(r,a,m,c);var K=r.memoizedState;v!==b||P!==K||vt.current||Fn?(typeof V=="function"&&(au(r,o,V,a),K=r.memoizedState),(T=Fn||xf(r,o,T,a,P,K,E)||!1)?(A||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,K,E),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,K,E)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&P===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&P===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=K),m.props=a,m.state=K,m.context=E,a=T):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&P===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&P===t.memoizedState||(r.flags|=1024),a=!1)}return fu(t,r,o,a,h,c)}function fu(t,r,o,a,c,h){zf(t,r);var m=(r.flags&128)!==0;if(!a&&!m)return c&&$h(r,o,!1),_n(t,r,h);a=r.stateNode,Ey.current=r;var v=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&m?(r.child=Qr(r,t.child,null,h),r.child=Qr(r,null,v,h)):pt(t,r,v,h),r.memoizedState=a.state,c&&$h(r,o,!0),r.child}function Hf(t){var r=t.stateNode;r.pendingContext?Bh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Bh(t,r.context,!1),Ya(t,r.containerInfo)}function Bf(t,r,o,a,c){return Kr(),Ba(c),r.flags|=256,pt(t,r,o,a),r.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vf(t,r,o){var a=r.pendingProps,c=We.current,h=!1,m=(r.flags&128)!==0,v;if((v=m)||(v=t!==null&&t.memoizedState===null?!1:(c&2)!==0),v?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Le(We,c&1),t===null)return Ha(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(m=a.children,t=a.fallback,h?(a=r.mode,h=r.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Go(m,a,0,null),t=_r(t,a,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=mu(o),r.memoizedState=pu,t):gu(r,m));if(c=t.memoizedState,c!==null&&(v=c.dehydrated,v!==null))return Sy(t,r,m,a,v,c,o);if(h){h=a.fallback,m=r.mode,c=t.child,v=c.sibling;var E={mode:"hidden",children:a.children};return!(m&1)&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=E,r.deletions=null):(a=Vn(c,E),a.subtreeFlags=c.subtreeFlags&14680064),v!==null?h=Vn(v,h):(h=_r(h,m,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,m=t.child.memoizedState,m=m===null?mu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,r.memoizedState=pu,a}return h=t.child,t=h.sibling,a=Vn(h,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function gu(t,r){return r=Go({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Oo(t,r,o,a){return a!==null&&Ba(a),Qr(r,t.child,null,o),t=gu(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Sy(t,r,o,a,c,h,m){if(o)return r.flags&256?(r.flags&=-257,a=cu(Error(n(422))),Oo(t,r,m,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=a.fallback,c=r.mode,a=Go({mode:"visible",children:a.children},c,0,null),h=_r(h,c,m,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,r.mode&1&&Qr(r,t.child,null,m),r.child.memoizedState=mu(m),r.memoizedState=pu,h);if(!(r.mode&1))return Oo(t,r,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var v=a.dgst;return a=v,h=Error(n(419)),a=cu(h,a,void 0),Oo(t,r,m,a)}if(v=(m&t.childLanes)!==0,wt||v){if(a=Je,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,mn(t,c),qt(a,t,c,-1))}return bu(),a=cu(Error(n(421))),Oo(t,r,m,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=Ly.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,xt=On(c.nextSibling),Nt=r,ze=!0,Bt=null,t!==null&&(bt[Ot++]=fn,bt[Ot++]=pn,bt[Ot++]=ar,fn=t.id,pn=t.overflow,ar=r),r=gu(r,a.children),r.flags|=4096,r)}function $f(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),qa(t.return,r,o)}function _u(t,r,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function Gf(t,r,o){var a=r.pendingProps,c=a.revealOrder,h=a.tail;if(pt(t,r,a.children,o),a=We.current,a&2)a=a&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$f(t,o,r);else if(t.tag===19)$f(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Le(We,a),!(r.mode&1))r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&To(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),_u(r,!1,c,o,h);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&To(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}_u(r,!0,o,null,h);break;case"together":_u(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Do(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function _n(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),fr|=r.lanes,!(o&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Vn(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Vn(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function Cy(t,r,o){switch(r.tag){case 3:Hf(r),Kr();break;case 5:of(r);break;case 1:yt(r.type)&&go(r);break;case 4:Ya(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;Le(So,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(Le(We,We.current&1),r.flags|=128,null):o&r.child.childLanes?Vf(t,r,o):(Le(We,We.current&1),t=_n(t,r,o),t!==null?t.sibling:null);Le(We,We.current&1);break;case 19:if(a=(o&r.childLanes)!==0,t.flags&128){if(a)return Gf(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Le(We,We.current),a)break;return null;case 22:case 23:return r.lanes=0,jf(t,r,o)}return _n(t,r,o)}var qf,vu,Kf,Qf;qf=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},vu=function(){},Kf=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,dr(rn.current);var h=null;switch(o){case"input":c=Ne(t,c),a=Ne(t,a),h=[];break;case"select":c=B({},c,{value:void 0}),a=B({},a,{value:void 0}),h=[];break;case"textarea":c=Yl(t,c),a=Yl(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=fo)}Jl(o,a);var m;o=null;for(T in c)if(!a.hasOwnProperty(T)&&c.hasOwnProperty(T)&&c[T]!=null)if(T==="style"){var v=c[T];for(m in v)v.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(l.hasOwnProperty(T)?h||(h=[]):(h=h||[]).push(T,null));for(T in a){var E=a[T];if(v=c!=null?c[T]:void 0,a.hasOwnProperty(T)&&E!==v&&(E!=null||v!=null))if(T==="style")if(v){for(m in v)!v.hasOwnProperty(m)||E&&E.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in E)E.hasOwnProperty(m)&&v[m]!==E[m]&&(o||(o={}),o[m]=E[m])}else o||(h||(h=[]),h.push(T,o)),o=E;else T==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,v=v?v.__html:void 0,E!=null&&v!==E&&(h=h||[]).push(T,E)):T==="children"?typeof E!="string"&&typeof E!="number"||(h=h||[]).push(T,""+E):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(l.hasOwnProperty(T)?(E!=null&&T==="onScroll"&&Ue("scroll",t),h||v===E||(h=[])):(h=h||[]).push(T,E))}o&&(h=h||[]).push("style",o);var T=h;(r.updateQueue=T)&&(r.flags|=4)}},Qf=function(t,r,o,a){o!==a&&(r.flags|=4)};function os(t,r){if(!ze)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function ht(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function Iy(t,r,o){var a=r.pendingProps;switch(za(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(r),null;case 1:return yt(r.type)&&mo(),ht(r),null;case 3:return a=r.stateNode,Jr(),je(vt),je(ct),Za(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(wo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Bt!==null&&(Ru(Bt),Bt=null))),vu(t,r),ht(r),null;case 5:Xa(r);var c=dr(ts.current);if(o=r.type,t!==null&&r.stateNode!=null)Kf(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return ht(r),null}if(t=dr(rn.current),wo(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[nn]=r,a[Yi]=h,t=(r.mode&1)!==0,o){case"dialog":Ue("cancel",a),Ue("close",a);break;case"iframe":case"object":case"embed":Ue("load",a);break;case"video":case"audio":for(c=0;c<qi.length;c++)Ue(qi[c],a);break;case"source":Ue("error",a);break;case"img":case"image":case"link":Ue("error",a),Ue("load",a);break;case"details":Ue("toggle",a);break;case"input":it(a,h),Ue("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Ue("invalid",a);break;case"textarea":Ad(a,h),Ue("invalid",a)}Jl(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var v=h[m];m==="children"?typeof v=="string"?a.textContent!==v&&(h.suppressHydrationWarning!==!0&&ho(a.textContent,v,t),c=["children",v]):typeof v=="number"&&a.textContent!==""+v&&(h.suppressHydrationWarning!==!0&&ho(a.textContent,v,t),c=["children",""+v]):l.hasOwnProperty(m)&&v!=null&&m==="onScroll"&&Ue("scroll",a)}switch(o){case"input":ut(a),Pd(a,h,!0);break;case"textarea":ut(a),Od(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=fo)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[nn]=r,t[Yi]=a,qf(t,r,!1,!1),r.stateNode=t;e:{switch(m=Zl(o,a),o){case"dialog":Ue("cancel",t),Ue("close",t),c=a;break;case"iframe":case"object":case"embed":Ue("load",t),c=a;break;case"video":case"audio":for(c=0;c<qi.length;c++)Ue(qi[c],t);c=a;break;case"source":Ue("error",t),c=a;break;case"img":case"image":case"link":Ue("error",t),Ue("load",t),c=a;break;case"details":Ue("toggle",t),c=a;break;case"input":it(t,a),c=Ne(t,a),Ue("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=B({},a,{value:void 0}),Ue("invalid",t);break;case"textarea":Ad(t,a),c=Yl(t,a),Ue("invalid",t);break;default:c=a}Jl(o,c),v=c;for(h in v)if(v.hasOwnProperty(h)){var E=v[h];h==="style"?Fd(t,E):h==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&Ld(t,E)):h==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&xi(t,E):typeof E=="number"&&xi(t,""+E):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?E!=null&&h==="onScroll"&&Ue("scroll",t):E!=null&&Ie(t,h,E,m))}switch(o){case"input":ut(t),Pd(t,a,!1);break;case"textarea":ut(t),Od(t);break;case"option":a.value!=null&&t.setAttribute("value",""+G(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Or(t,!!a.multiple,h,!1):a.defaultValue!=null&&Or(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=fo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return ht(r),null;case 6:if(t&&r.stateNode!=null)Qf(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=dr(ts.current),dr(rn.current),wo(r)){if(a=r.stateNode,o=r.memoizedProps,a[nn]=r,(h=a.nodeValue!==o)&&(t=Nt,t!==null))switch(t.tag){case 3:ho(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(a.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[nn]=r,r.stateNode=a}return ht(r),null;case 13:if(je(We),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ze&&xt!==null&&r.mode&1&&!(r.flags&128))Xh(),Kr(),r.flags|=98560,h=!1;else if(h=wo(r),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[nn]=r}else Kr(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;ht(r),h=!1}else Bt!==null&&(Ru(Bt),Bt=null),h=!0;if(!h)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(t===null||We.current&1?Ye===0&&(Ye=3):bu())),r.updateQueue!==null&&(r.flags|=4),ht(r),null);case 4:return Jr(),vu(t,r),t===null&&Ki(r.stateNode.containerInfo),ht(r),null;case 10:return Ga(r.type._context),ht(r),null;case 17:return yt(r.type)&&mo(),ht(r),null;case 19:if(je(We),h=r.memoizedState,h===null)return ht(r),null;if(a=(r.flags&128)!==0,m=h.rendering,m===null)if(a)os(h,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(m=To(t),m!==null){for(r.flags|=128,os(h,!1),a=m.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Le(We,We.current&1|2),r.child}t=t.sibling}h.tail!==null&&Ge()>ni&&(r.flags|=128,a=!0,os(h,!1),r.lanes=4194304)}else{if(!a)if(t=To(m),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),os(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!ze)return ht(r),null}else 2*Ge()-h.renderingStartTime>ni&&o!==1073741824&&(r.flags|=128,a=!0,os(h,!1),r.lanes=4194304);h.isBackwards?(m.sibling=r.child,r.child=m):(o=h.last,o!==null?o.sibling=m:r.child=m,h.last=m)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Ge(),r.sibling=null,o=We.current,Le(We,a?o&1|2:o&1),r):(ht(r),null);case 22:case 23:return Au(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?Rt&1073741824&&(ht(r),r.subtreeFlags&6&&(r.flags|=8192)):ht(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function ky(t,r){switch(za(r),r.tag){case 1:return yt(r.type)&&mo(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Jr(),je(vt),je(ct),Za(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return Xa(r),null;case 13:if(je(We),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Kr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return je(We),null;case 4:return Jr(),null;case 10:return Ga(r.type._context),null;case 22:case 23:return Au(),null;case 24:return null;default:return null}}var Lo=!1,ft=!1,Ty=typeof WeakSet=="function"?WeakSet:Set,q=null;function ei(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Be(t,r,a)}else o.current=null}function yu(t,r,o){try{o()}catch(a){Be(t,r,a)}}var Yf=!1;function Ny(t,r){if(Aa=eo,t=Nh(),Ca(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,v=-1,E=-1,T=0,A=0,b=t,P=null;t:for(;;){for(var V;b!==o||c!==0&&b.nodeType!==3||(v=m+c),b!==h||a!==0&&b.nodeType!==3||(E=m+a),b.nodeType===3&&(m+=b.nodeValue.length),(V=b.firstChild)!==null;)P=b,b=V;for(;;){if(b===t)break t;if(P===o&&++T===c&&(v=m),P===h&&++A===a&&(E=m),(V=b.nextSibling)!==null)break;b=P,P=b.parentNode}b=V}o=v===-1||E===-1?null:{start:v,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(ba={focusedElem:t,selectionRange:o},eo=!1,q=r;q!==null;)if(r=q,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,q=t;else for(;q!==null;){r=q;try{var K=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var Y=K.memoizedProps,qe=K.memoizedState,I=r.stateNode,S=I.getSnapshotBeforeUpdate(r.elementType===r.type?Y:Vt(r.type,Y),qe);I.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var k=r.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(L){Be(r,r.return,L)}if(t=r.sibling,t!==null){t.return=r.return,q=t;break}q=r.return}return K=Yf,Yf=!1,K}function ls(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&yu(r,o,h)}c=c.next}while(c!==a)}}function Mo(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function wu(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function Xf(t){var r=t.alternate;r!==null&&(t.alternate=null,Xf(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[nn],delete r[Yi],delete r[Ma],delete r[uy],delete r[cy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jf(t){return t.tag===5||t.tag===3||t.tag===4}function Zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=fo));else if(a!==4&&(t=t.child,t!==null))for(Eu(t,r,o),t=t.sibling;t!==null;)Eu(t,r,o),t=t.sibling}function Su(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Su(t,r,o),t=t.sibling;t!==null;)Su(t,r,o),t=t.sibling}var st=null,$t=!1;function jn(t,r,o){for(o=o.child;o!==null;)ep(t,r,o),o=o.sibling}function ep(t,r,o){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Ks,o)}catch{}switch(o.tag){case 5:ft||ei(o,r);case 6:var a=st,c=$t;st=null,jn(t,r,o),st=a,$t=c,st!==null&&($t?(t=st,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):st.removeChild(o.stateNode));break;case 18:st!==null&&($t?(t=st,o=o.stateNode,t.nodeType===8?La(t.parentNode,o):t.nodeType===1&&La(t,o),ji(t)):La(st,o.stateNode));break;case 4:a=st,c=$t,st=o.stateNode.containerInfo,$t=!0,jn(t,r,o),st=a,$t=c;break;case 0:case 11:case 14:case 15:if(!ft&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&yu(o,r,m),c=c.next}while(c!==a)}jn(t,r,o);break;case 1:if(!ft&&(ei(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(v){Be(o,r,v)}jn(t,r,o);break;case 21:jn(t,r,o);break;case 22:o.mode&1?(ft=(a=ft)||o.memoizedState!==null,jn(t,r,o),ft=a):jn(t,r,o);break;default:jn(t,r,o)}}function tp(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Ty),r.forEach(function(a){var c=My.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Gt(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=r,v=m;e:for(;v!==null;){switch(v.tag){case 5:st=v.stateNode,$t=!1;break e;case 3:st=v.stateNode.containerInfo,$t=!0;break e;case 4:st=v.stateNode.containerInfo,$t=!0;break e}v=v.return}if(st===null)throw Error(n(160));ep(h,m,c),st=null,$t=!1;var E=c.alternate;E!==null&&(E.return=null),c.return=null}catch(T){Be(c,r,T)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)np(r,t),r=r.sibling}function np(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(r,t),on(t),a&4){try{ls(3,t,t.return),Mo(3,t)}catch(Y){Be(t,t.return,Y)}try{ls(5,t,t.return)}catch(Y){Be(t,t.return,Y)}}break;case 1:Gt(r,t),on(t),a&512&&o!==null&&ei(o,o.return);break;case 5:if(Gt(r,t),on(t),a&512&&o!==null&&ei(o,o.return),t.flags&32){var c=t.stateNode;try{xi(c,"")}catch(Y){Be(t,t.return,Y)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,v=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{v==="input"&&h.type==="radio"&&h.name!=null&&zt(c,h),Zl(v,m);var T=Zl(v,h);for(m=0;m<E.length;m+=2){var A=E[m],b=E[m+1];A==="style"?Fd(c,b):A==="dangerouslySetInnerHTML"?Ld(c,b):A==="children"?xi(c,b):Ie(c,A,b,T)}switch(v){case"input":br(c,h);break;case"textarea":bd(c,h);break;case"select":var P=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var V=h.value;V!=null?Or(c,!!h.multiple,V,!1):P!==!!h.multiple&&(h.defaultValue!=null?Or(c,!!h.multiple,h.defaultValue,!0):Or(c,!!h.multiple,h.multiple?[]:"",!1))}c[Yi]=h}catch(Y){Be(t,t.return,Y)}}break;case 6:if(Gt(r,t),on(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Y){Be(t,t.return,Y)}}break;case 3:if(Gt(r,t),on(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{ji(r.containerInfo)}catch(Y){Be(t,t.return,Y)}break;case 4:Gt(r,t),on(t);break;case 13:Gt(r,t),on(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(ku=Ge())),a&4&&tp(t);break;case 22:if(A=o!==null&&o.memoizedState!==null,t.mode&1?(ft=(T=ft)||A,Gt(r,t),ft=T):Gt(r,t),on(t),a&8192){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!A&&t.mode&1)for(q=t,A=t.child;A!==null;){for(b=q=A;q!==null;){switch(P=q,V=P.child,P.tag){case 0:case 11:case 14:case 15:ls(4,P,P.return);break;case 1:ei(P,P.return);var K=P.stateNode;if(typeof K.componentWillUnmount=="function"){a=P,o=P.return;try{r=a,K.props=r.memoizedProps,K.state=r.memoizedState,K.componentWillUnmount()}catch(Y){Be(a,o,Y)}}break;case 5:ei(P,P.return);break;case 22:if(P.memoizedState!==null){sp(b);continue}}V!==null?(V.return=P,q=V):sp(b)}A=A.sibling}e:for(A=null,b=t;;){if(b.tag===5){if(A===null){A=b;try{c=b.stateNode,T?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(v=b.stateNode,E=b.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null,v.style.display=Md("display",m))}catch(Y){Be(t,t.return,Y)}}}else if(b.tag===6){if(A===null)try{b.stateNode.nodeValue=T?"":b.memoizedProps}catch(Y){Be(t,t.return,Y)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===t)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===t)break e;for(;b.sibling===null;){if(b.return===null||b.return===t)break e;A===b&&(A=null),b=b.return}A===b&&(A=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Gt(r,t),on(t),a&4&&tp(t);break;case 21:break;default:Gt(r,t),on(t)}}function on(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(Jf(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(xi(c,""),a.flags&=-33);var h=Zf(t);Su(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,v=Zf(t);Eu(t,v,m);break;default:throw Error(n(161))}}catch(E){Be(t,t.return,E)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function xy(t,r,o){q=t,rp(t)}function rp(t,r,o){for(var a=(t.mode&1)!==0;q!==null;){var c=q,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||Lo;if(!m){var v=c.alternate,E=v!==null&&v.memoizedState!==null||ft;v=Lo;var T=ft;if(Lo=m,(ft=E)&&!T)for(q=c;q!==null;)m=q,E=m.child,m.tag===22&&m.memoizedState!==null?op(c):E!==null?(E.return=m,q=E):op(c);for(;h!==null;)q=h,rp(h),h=h.sibling;q=c,Lo=v,ft=T}ip(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,q=h):ip(t)}}function ip(t){for(;q!==null;){var r=q;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:ft||Mo(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!ft)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:Vt(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&sf(r,h,a);break;case 3:var m=r.updateQueue;if(m!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}sf(r,m,o)}break;case 5:var v=r.stateNode;if(o===null&&r.flags&4){o=v;var E=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var T=r.alternate;if(T!==null){var A=T.memoizedState;if(A!==null){var b=A.dehydrated;b!==null&&ji(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ft||r.flags&512&&wu(r)}catch(P){Be(r,r.return,P)}}if(r===t){q=null;break}if(o=r.sibling,o!==null){o.return=r.return,q=o;break}q=r.return}}function sp(t){for(;q!==null;){var r=q;if(r===t){q=null;break}var o=r.sibling;if(o!==null){o.return=r.return,q=o;break}q=r.return}}function op(t){for(;q!==null;){var r=q;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Mo(4,r)}catch(E){Be(r,o,E)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(E){Be(r,c,E)}}var h=r.return;try{wu(r)}catch(E){Be(r,h,E)}break;case 5:var m=r.return;try{wu(r)}catch(E){Be(r,m,E)}}}catch(E){Be(r,r.return,E)}if(r===t){q=null;break}var v=r.sibling;if(v!==null){v.return=r.return,q=v;break}q=r.return}}var Ry=Math.ceil,Fo=Ce.ReactCurrentDispatcher,Cu=Ce.ReactCurrentOwner,Mt=Ce.ReactCurrentBatchConfig,Te=0,Je=null,Ke=null,ot=0,Rt=0,ti=Dn(0),Ye=0,as=null,fr=0,Uo=0,Iu=0,us=null,Et=null,ku=0,ni=1/0,vn=null,jo=!1,Tu=null,zn=null,zo=!1,Wn=null,Wo=0,cs=0,Nu=null,Ho=-1,Bo=0;function mt(){return Te&6?Ge():Ho!==-1?Ho:Ho=Ge()}function Hn(t){return t.mode&1?Te&2&&ot!==0?ot&-ot:hy.transition!==null?(Bo===0&&(Bo=Jd()),Bo):(t=Pe,t!==0||(t=window.event,t=t===void 0?16:lh(t.type)),t):1}function qt(t,r,o,a){if(50<cs)throw cs=0,Nu=null,Error(n(185));Di(t,o,a),(!(Te&2)||t!==Je)&&(t===Je&&(!(Te&2)&&(Uo|=o),Ye===4&&Bn(t,ot)),St(t,a),o===1&&Te===0&&!(r.mode&1)&&(ni=Ge()+500,_o&&Mn()))}function St(t,r){var o=t.callbackNode;hv(t,r);var a=Xs(t,t===Je?ot:0);if(a===0)o!==null&&Qd(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&Qd(o),r===1)t.tag===0?dy(ap.bind(null,t)):Gh(ap.bind(null,t)),ly(function(){!(Te&6)&&Mn()}),o=null;else{switch(Zd(a)){case 1:o=oa;break;case 4:o=Yd;break;case 16:o=qs;break;case 536870912:o=Xd;break;default:o=qs}o=gp(o,lp.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function lp(t,r){if(Ho=-1,Bo=0,Te&6)throw Error(n(327));var o=t.callbackNode;if(ri()&&t.callbackNode!==o)return null;var a=Xs(t,t===Je?ot:0);if(a===0)return null;if(a&30||a&t.expiredLanes||r)r=Vo(t,a);else{r=a;var c=Te;Te|=2;var h=cp();(Je!==t||ot!==r)&&(vn=null,ni=Ge()+500,mr(t,r));do try{by();break}catch(v){up(t,v)}while(!0);$a(),Fo.current=h,Te=c,Ke!==null?r=0:(Je=null,ot=0,r=Ye)}if(r!==0){if(r===2&&(c=la(t),c!==0&&(a=c,r=xu(t,c))),r===1)throw o=as,mr(t,0),Bn(t,a),St(t,Ge()),o;if(r===6)Bn(t,a);else{if(c=t.current.alternate,!(a&30)&&!Py(c)&&(r=Vo(t,a),r===2&&(h=la(t),h!==0&&(a=h,r=xu(t,h))),r===1))throw o=as,mr(t,0),Bn(t,a),St(t,Ge()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:gr(t,Et,vn);break;case 3:if(Bn(t,a),(a&130023424)===a&&(r=ku+500-Ge(),10<r)){if(Xs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){mt(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Da(gr.bind(null,t,Et,vn),r);break}gr(t,Et,vn);break;case 4:if(Bn(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var m=31-Wt(a);h=1<<m,m=r[m],m>c&&(c=m),a&=~h}if(a=c,a=Ge()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Ry(a/1960))-a,10<a){t.timeoutHandle=Da(gr.bind(null,t,Et,vn),a);break}gr(t,Et,vn);break;case 5:gr(t,Et,vn);break;default:throw Error(n(329))}}}return St(t,Ge()),t.callbackNode===o?lp.bind(null,t):null}function xu(t,r){var o=us;return t.current.memoizedState.isDehydrated&&(mr(t,r).flags|=256),t=Vo(t,r),t!==2&&(r=Et,Et=o,r!==null&&Ru(r)),t}function Ru(t){Et===null?Et=t:Et.push.apply(Et,t)}function Py(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!Ht(h(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Bn(t,r){for(r&=~Iu,r&=~Uo,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Wt(r),a=1<<o;t[o]=-1,r&=~a}}function ap(t){if(Te&6)throw Error(n(327));ri();var r=Xs(t,0);if(!(r&1))return St(t,Ge()),null;var o=Vo(t,r);if(t.tag!==0&&o===2){var a=la(t);a!==0&&(r=a,o=xu(t,a))}if(o===1)throw o=as,mr(t,0),Bn(t,r),St(t,Ge()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,gr(t,Et,vn),St(t,Ge()),null}function Pu(t,r){var o=Te;Te|=1;try{return t(r)}finally{Te=o,Te===0&&(ni=Ge()+500,_o&&Mn())}}function pr(t){Wn!==null&&Wn.tag===0&&!(Te&6)&&ri();var r=Te;Te|=1;var o=Mt.transition,a=Pe;try{if(Mt.transition=null,Pe=1,t)return t()}finally{Pe=a,Mt.transition=o,Te=r,!(Te&6)&&Mn()}}function Au(){Rt=ti.current,je(ti)}function mr(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,oy(o)),Ke!==null)for(o=Ke.return;o!==null;){var a=o;switch(za(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&mo();break;case 3:Jr(),je(vt),je(ct),Za();break;case 5:Xa(a);break;case 4:Jr();break;case 13:je(We);break;case 19:je(We);break;case 10:Ga(a.type._context);break;case 22:case 23:Au()}o=o.return}if(Je=t,Ke=t=Vn(t.current,null),ot=Rt=r,Ye=0,as=null,Iu=Uo=fr=0,Et=us=null,cr!==null){for(r=0;r<cr.length;r++)if(o=cr[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}cr=null}return t}function up(t,r){do{var o=Ke;try{if($a(),No.current=Ao,xo){for(var a=He.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}xo=!1}if(hr=0,Xe=Qe=He=null,ns=!1,rs=0,Cu.current=null,o===null||o.return===null){Ye=1,as=r,Ke=null;break}e:{var h=t,m=o.return,v=o,E=r;if(r=ot,v.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var T=E,A=v,b=A.tag;if(!(A.mode&1)&&(b===0||b===11||b===15)){var P=A.alternate;P?(A.updateQueue=P.updateQueue,A.memoizedState=P.memoizedState,A.lanes=P.lanes):(A.updateQueue=null,A.memoizedState=null)}var V=Df(m);if(V!==null){V.flags&=-257,Lf(V,m,v,h,r),V.mode&1&&Of(h,T,r),r=V,E=T;var K=r.updateQueue;if(K===null){var Y=new Set;Y.add(E),r.updateQueue=Y}else K.add(E);break e}else{if(!(r&1)){Of(h,T,r),bu();break e}E=Error(n(426))}}else if(ze&&v.mode&1){var qe=Df(m);if(qe!==null){!(qe.flags&65536)&&(qe.flags|=256),Lf(qe,m,v,h,r),Ba(Zr(E,v));break e}}h=E=Zr(E,v),Ye!==4&&(Ye=2),us===null?us=[h]:us.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var I=Af(h,E,r);rf(h,I);break e;case 1:v=E;var S=h.type,k=h.stateNode;if(!(h.flags&128)&&(typeof S.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(zn===null||!zn.has(k)))){h.flags|=65536,r&=-r,h.lanes|=r;var L=bf(h,v,r);rf(h,L);break e}}h=h.return}while(h!==null)}hp(o)}catch(ee){r=ee,Ke===o&&o!==null&&(Ke=o=o.return);continue}break}while(!0)}function cp(){var t=Fo.current;return Fo.current=Ao,t===null?Ao:t}function bu(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Je===null||!(fr&268435455)&&!(Uo&268435455)||Bn(Je,ot)}function Vo(t,r){var o=Te;Te|=2;var a=cp();(Je!==t||ot!==r)&&(vn=null,mr(t,r));do try{Ay();break}catch(c){up(t,c)}while(!0);if($a(),Te=o,Fo.current=a,Ke!==null)throw Error(n(261));return Je=null,ot=0,Ye}function Ay(){for(;Ke!==null;)dp(Ke)}function by(){for(;Ke!==null&&!rv();)dp(Ke)}function dp(t){var r=mp(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,r===null?hp(t):Ke=r,Cu.current=null}function hp(t){var r=t;do{var o=r.alternate;if(t=r.return,r.flags&32768){if(o=ky(o,r),o!==null){o.flags&=32767,Ke=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,Ke=null;return}}else if(o=Iy(o,r,Rt),o!==null){Ke=o;return}if(r=r.sibling,r!==null){Ke=r;return}Ke=r=t}while(r!==null);Ye===0&&(Ye=5)}function gr(t,r,o){var a=Pe,c=Mt.transition;try{Mt.transition=null,Pe=1,Oy(t,r,o,a)}finally{Mt.transition=c,Pe=a}return null}function Oy(t,r,o,a){do ri();while(Wn!==null);if(Te&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(fv(t,h),t===Je&&(Ke=Je=null,ot=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||zo||(zo=!0,gp(qs,function(){return ri(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Mt.transition,Mt.transition=null;var m=Pe;Pe=1;var v=Te;Te|=4,Cu.current=null,Ny(t,o),np(o,t),Zv(ba),eo=!!Aa,ba=Aa=null,t.current=o,xy(o),iv(),Te=v,Pe=m,Mt.transition=h}else t.current=o;if(zo&&(zo=!1,Wn=t,Wo=c),h=t.pendingLanes,h===0&&(zn=null),lv(o.stateNode),St(t,Ge()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(jo)throw jo=!1,t=Tu,Tu=null,t;return Wo&1&&t.tag!==0&&ri(),h=t.pendingLanes,h&1?t===Nu?cs++:(cs=0,Nu=t):cs=0,Mn(),null}function ri(){if(Wn!==null){var t=Zd(Wo),r=Mt.transition,o=Pe;try{if(Mt.transition=null,Pe=16>t?16:t,Wn===null)var a=!1;else{if(t=Wn,Wn=null,Wo=0,Te&6)throw Error(n(331));var c=Te;for(Te|=4,q=t.current;q!==null;){var h=q,m=h.child;if(q.flags&16){var v=h.deletions;if(v!==null){for(var E=0;E<v.length;E++){var T=v[E];for(q=T;q!==null;){var A=q;switch(A.tag){case 0:case 11:case 15:ls(8,A,h)}var b=A.child;if(b!==null)b.return=A,q=b;else for(;q!==null;){A=q;var P=A.sibling,V=A.return;if(Xf(A),A===T){q=null;break}if(P!==null){P.return=V,q=P;break}q=V}}}var K=h.alternate;if(K!==null){var Y=K.child;if(Y!==null){K.child=null;do{var qe=Y.sibling;Y.sibling=null,Y=qe}while(Y!==null)}}q=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,q=m;else e:for(;q!==null;){if(h=q,h.flags&2048)switch(h.tag){case 0:case 11:case 15:ls(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,q=I;break e}q=h.return}}var S=t.current;for(q=S;q!==null;){m=q;var k=m.child;if(m.subtreeFlags&2064&&k!==null)k.return=m,q=k;else e:for(m=S;q!==null;){if(v=q,v.flags&2048)try{switch(v.tag){case 0:case 11:case 15:Mo(9,v)}}catch(ee){Be(v,v.return,ee)}if(v===m){q=null;break e}var L=v.sibling;if(L!==null){L.return=v.return,q=L;break e}q=v.return}}if(Te=c,Mn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Ks,t)}catch{}a=!0}return a}finally{Pe=o,Mt.transition=r}}return!1}function fp(t,r,o){r=Zr(o,r),r=Af(t,r,1),t=Un(t,r,1),r=mt(),t!==null&&(Di(t,1,r),St(t,r))}function Be(t,r,o){if(t.tag===3)fp(t,t,o);else for(;r!==null;){if(r.tag===3){fp(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zn===null||!zn.has(a))){t=Zr(o,t),t=bf(r,t,1),r=Un(r,t,1),t=mt(),r!==null&&(Di(r,1,t),St(r,t));break}}r=r.return}}function Dy(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=mt(),t.pingedLanes|=t.suspendedLanes&o,Je===t&&(ot&o)===o&&(Ye===4||Ye===3&&(ot&130023424)===ot&&500>Ge()-ku?mr(t,0):Iu|=o),St(t,r)}function pp(t,r){r===0&&(t.mode&1?(r=Ys,Ys<<=1,!(Ys&130023424)&&(Ys=4194304)):r=1);var o=mt();t=mn(t,r),t!==null&&(Di(t,r,o),St(t,o))}function Ly(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),pp(t,o)}function My(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),pp(t,o)}var mp;mp=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||vt.current)wt=!0;else{if(!(t.lanes&o)&&!(r.flags&128))return wt=!1,Cy(t,r,o);wt=!!(t.flags&131072)}else wt=!1,ze&&r.flags&1048576&&qh(r,yo,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Do(t,r),t=r.pendingProps;var c=$r(r,ct.current);Xr(r,o),c=nu(null,r,a,t,c,o);var h=ru();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,yt(a)?(h=!0,go(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Qa(r),c.updater=bo,r.stateNode=c,c._reactInternals=r,uu(r,a,t,o),r=fu(null,r,a,!0,h,o)):(r.tag=0,ze&&h&&ja(r),pt(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(Do(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=Uy(a),t=Vt(a,t),c){case 0:r=hu(null,r,a,t,o);break e;case 1:r=Wf(null,r,a,t,o);break e;case 11:r=Mf(null,r,a,t,o);break e;case 14:r=Ff(null,r,a,Vt(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Vt(a,c),hu(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Vt(a,c),Wf(t,r,a,c,o);case 3:e:{if(Hf(r),t===null)throw Error(n(387));a=r.pendingProps,h=r.memoizedState,c=h.element,nf(t,r),ko(r,a,null,o);var m=r.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=Zr(Error(n(423)),r),r=Bf(t,r,a,o,c);break e}else if(a!==c){c=Zr(Error(n(424)),r),r=Bf(t,r,a,o,c);break e}else for(xt=On(r.stateNode.containerInfo.firstChild),Nt=r,ze=!0,Bt=null,o=ef(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Kr(),a===c){r=_n(t,r,o);break e}pt(t,r,a,o)}r=r.child}return r;case 5:return of(r),t===null&&Ha(r),a=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,Oa(a,c)?m=null:h!==null&&Oa(a,h)&&(r.flags|=32),zf(t,r),pt(t,r,m,o),r.child;case 6:return t===null&&Ha(r),null;case 13:return Vf(t,r,o);case 4:return Ya(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=Qr(r,null,a,o):pt(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Vt(a,c),Mf(t,r,a,c,o);case 7:return pt(t,r,r.pendingProps,o),r.child;case 8:return pt(t,r,r.pendingProps.children,o),r.child;case 12:return pt(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,h=r.memoizedProps,m=c.value,Le(So,a._currentValue),a._currentValue=m,h!==null)if(Ht(h.value,m)){if(h.children===c.children&&!vt.current){r=_n(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var v=h.dependencies;if(v!==null){m=h.child;for(var E=v.firstContext;E!==null;){if(E.context===a){if(h.tag===1){E=gn(-1,o&-o),E.tag=2;var T=h.updateQueue;if(T!==null){T=T.shared;var A=T.pending;A===null?E.next=E:(E.next=A.next,A.next=E),T.pending=E}}h.lanes|=o,E=h.alternate,E!==null&&(E.lanes|=o),qa(h.return,o,r),v.lanes|=o;break}E=E.next}}else if(h.tag===10)m=h.type===r.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,v=m.alternate,v!==null&&(v.lanes|=o),qa(m,o,r),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===r){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}pt(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,Xr(r,o),c=Dt(c),a=a(c),r.flags|=1,pt(t,r,a,o),r.child;case 14:return a=r.type,c=Vt(a,r.pendingProps),c=Vt(a.type,c),Ff(t,r,a,c,o);case 15:return Uf(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Vt(a,c),Do(t,r),r.tag=1,yt(a)?(t=!0,go(r)):t=!1,Xr(r,o),Rf(r,a,c),uu(r,a,c,o),fu(null,r,a,!0,t,o);case 19:return Gf(t,r,o);case 22:return jf(t,r,o)}throw Error(n(156,r.tag))};function gp(t,r){return Kd(t,r)}function Fy(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,r,o,a){return new Fy(t,r,o,a)}function Ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Uy(t){if(typeof t=="function")return Ou(t)?1:0;if(t!=null){if(t=t.$$typeof,t===D)return 11;if(t===Se)return 14}return 2}function Vn(t,r){var o=t.alternate;return o===null?(o=Ft(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function $o(t,r,o,a,c,h){var m=2;if(a=t,typeof t=="function")Ou(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case X:return _r(o.children,c,h,r);case H:m=8,c|=8;break;case le:return t=Ft(12,o,r,c|2),t.elementType=le,t.lanes=h,t;case Q:return t=Ft(13,o,r,c),t.elementType=Q,t.lanes=h,t;case $:return t=Ft(19,o,r,c),t.elementType=$,t.lanes=h,t;case ye:return Go(o,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case oe:m=10;break e;case W:m=9;break e;case D:m=11;break e;case Se:m=14;break e;case ke:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=Ft(m,o,r,c),r.elementType=t,r.type=a,r.lanes=h,r}function _r(t,r,o,a){return t=Ft(7,t,a,r),t.lanes=o,t}function Go(t,r,o,a){return t=Ft(22,t,a,r),t.elementType=ye,t.lanes=o,t.stateNode={isHidden:!1},t}function Du(t,r,o){return t=Ft(6,t,null,r),t.lanes=o,t}function Lu(t,r,o){return r=Ft(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function jy(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Mu(t,r,o,a,c,h,m,v,E){return t=new jy(t,r,o,v,E),r===1?(r=1,h===!0&&(r|=8)):r=0,h=Ft(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qa(h),t}function zy(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function _p(t){if(!t)return Ln;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(yt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(yt(o))return Vh(t,o,r)}return r}function vp(t,r,o,a,c,h,m,v,E){return t=Mu(o,a,!0,t,c,h,m,v,E),t.context=_p(null),o=t.current,a=mt(),c=Hn(o),h=gn(a,c),h.callback=r??null,Un(o,h,c),t.current.lanes=c,Di(t,c,a),St(t,a),t}function qo(t,r,o,a){var c=r.current,h=mt(),m=Hn(c);return o=_p(o),r.context===null?r.context=o:r.pendingContext=o,r=gn(h,m),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=Un(c,r,m),t!==null&&(qt(t,c,m,h),Io(t,c,m)),m}function Ko(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yp(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function Fu(t,r){yp(t,r),(t=t.alternate)&&yp(t,r)}var wp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uu(t){this._internalRoot=t}Qo.prototype.render=Uu.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));qo(t,r,null,null)},Qo.prototype.unmount=Uu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;pr(function(){qo(null,t,null,null)}),r[dn]=null}};function Qo(t){this._internalRoot=t}Qo.prototype.unstable_scheduleHydration=function(t){if(t){var r=nh();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Pn.length&&r!==0&&r<Pn[o].priority;o++);Pn.splice(o,0,t),o===0&&sh(t)}};function ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ep(){}function Wy(t,r,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var T=Ko(m);h.call(T)}}var m=vp(r,a,t,0,null,!1,!1,"",Ep);return t._reactRootContainer=m,t[dn]=m.current,Ki(t.nodeType===8?t.parentNode:t),pr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var v=a;a=function(){var T=Ko(E);v.call(T)}}var E=Mu(t,0,!1,null,null,!1,!1,"",Ep);return t._reactRootContainer=E,t[dn]=E.current,Ki(t.nodeType===8?t.parentNode:t),pr(function(){qo(r,E,o,a)}),E}function Xo(t,r,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var v=c;c=function(){var E=Ko(m);v.call(E)}}qo(r,m,t,c)}else m=Wy(o,r,t,c,a);return Ko(m)}eh=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Oi(r.pendingLanes);o!==0&&(ua(r,o|1),St(r,Ge()),!(Te&6)&&(ni=Ge()+500,Mn()))}break;case 13:pr(function(){var a=mn(t,1);if(a!==null){var c=mt();qt(a,t,1,c)}}),Fu(t,1)}},ca=function(t){if(t.tag===13){var r=mn(t,134217728);if(r!==null){var o=mt();qt(r,t,134217728,o)}Fu(t,134217728)}},th=function(t){if(t.tag===13){var r=Hn(t),o=mn(t,r);if(o!==null){var a=mt();qt(o,t,r,a)}Fu(t,r)}},nh=function(){return Pe},rh=function(t,r){var o=Pe;try{return Pe=t,r()}finally{Pe=o}},na=function(t,r,o){switch(r){case"input":if(br(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=po(a);if(!c)throw Error(n(90));At(a),br(a,c)}}}break;case"textarea":bd(t,o);break;case"select":r=o.value,r!=null&&Or(t,!!o.multiple,r,!1)}},Wd=Pu,Hd=pr;var Hy={usingClientEntryPoint:!1,Events:[Xi,Br,po,jd,zd,Pu]},ds={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},By={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gd(t),t===null?null:t.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Ks=Jo.inject(By),tn=Jo}catch{}}return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy,Ct.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ju(r))throw Error(n(200));return zy(t,r,null,o)},Ct.createRoot=function(t,r){if(!ju(t))throw Error(n(299));var o=!1,a="",c=wp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=Mu(t,1,!1,null,null,o,!1,a,c),t[dn]=r.current,Ki(t.nodeType===8?t.parentNode:t),new Uu(r)},Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Gd(r),t=t===null?null:t.stateNode,t},Ct.flushSync=function(t){return pr(t)},Ct.hydrate=function(t,r,o){if(!Yo(r))throw Error(n(200));return Xo(null,t,r,!0,o)},Ct.hydrateRoot=function(t,r,o){if(!ju(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=wp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),r=vp(r,null,t,1,o??null,c,!1,h,m),t[dn]=r.current,Ki(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new Qo(r)},Ct.render=function(t,r,o){if(!Yo(r))throw Error(n(200));return Xo(null,t,r,!1,o)},Ct.unmountComponentAtNode=function(t){if(!Yo(t))throw Error(n(40));return t._reactRootContainer?(pr(function(){Xo(null,null,t,!1,function(){t._reactRootContainer=null,t[dn]=null})}),!0):!1},Ct.unstable_batchedUpdates=Pu,Ct.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!Yo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Xo(t,r,o,!1,a)},Ct.version="18.3.1-next-f1338f8080-20240426",Ct}var Rp;function Xy(){if(Rp)return Hu.exports;Rp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Hu.exports=Yy(),Hu.exports}var Pp;function Jy(){if(Pp)return el;Pp=1;var i=Xy();return el.createRoot=i.createRoot,el.hydrateRoot=i.hydrateRoot,el}var Zy=Jy();const e0="modulepreload",t0=function(i){return"/portfolio_web/"+i},Ap={},jt=function(e,n,s){let l=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));l=Promise.allSettled(n.map(p=>{if(p=t0(p),p in Ap)return;Ap[p]=!0;const g=p.endsWith(".css"),w=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${w}`))return;const _=document.createElement("link");if(_.rel=g?"stylesheet":e0,g||(_.as="script"),_.crossOrigin="",_.href=p,f&&_.setAttribute("nonce",f),document.head.appendChild(_),g)return new Promise((y,N)=>{_.addEventListener("load",y),_.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(d){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=d,window.dispatchEvent(f),!f.defaultPrevented)throw d}return l.then(d=>{for(const f of d||[])f.status==="rejected"&&u(f.reason);return e().catch(u)})},n0="/portfolio_web/assets/AINH-Bw65Iapk.png",r0=({onComplete:i})=>{const[e,n]=se.useState(0),[s,l]=se.useState(0),[u,d]=se.useState(!1),[f,p]=se.useState(!1),[g,w]=se.useState(!1),[_,y]=se.useState(!1);se.useEffect(()=>{const x=setTimeout(()=>d(!0),200),M=setTimeout(()=>p(!0),600),z=setTimeout(()=>w(!0),1100),me=setTimeout(()=>y(!0),500);return()=>{clearTimeout(x),clearTimeout(M),clearTimeout(z),clearTimeout(me)}},[]),se.useEffect(()=>{const x=setInterval(()=>{n(M=>{if(M>=100)return clearInterval(x),setTimeout(()=>{l(1),setTimeout(()=>i(),600)},400),100;const z=M<30?Math.random()*8+4:M<70?Math.random()*5+2:Math.random()*3+1;return Math.min(M+z,100)})},100);return()=>clearInterval(x)},[i]);const N=String(Math.round(e)).padStart(3,"0");return O.jsxs(O.Fragment,{children:[O.jsx("style",{children:`
        @keyframes pl-letter-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pl-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.2; transform: scale(0.3); }
        }
        @keyframes pl-shine {
          0%   { left: -50%; }
          100% { left: 120%; }
        }
        @keyframes pl-exit {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-60px); }
        }
        @keyframes pl-count-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pl-letter {
          display: inline-block;
          opacity: 0;
          animation: pl-letter-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .pl-exiting {
          animation: pl-exit 0.6s cubic-bezier(0.76, 0, 0.24, 1) forwards !important;
        }
      `}),O.jsxs("div",{className:s===1?"pl-exiting":"",style:{position:"fixed",inset:0,zIndex:9999,background:"#000000",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"'Josefin Sans', sans-serif",overflow:"hidden"},children:[O.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:32},children:O.jsx("div",{style:{textAlign:"center"},children:O.jsx("div",{style:{opacity:u?1:0,transition:"opacity 0.6s ease",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:O.jsx("img",{src:n0,alt:"AINH Logo",style:{width:"clamp(180px, 28vw, 320px)",height:"auto",display:"block"}})})})}),O.jsxs("div",{style:{position:"absolute",bottom:28,right:32,textAlign:"right",animation:"pl-count-in 0.5s ease 0.4s both"},children:[O.jsxs("div",{className:"font-tusker",style:{fontSize:"clamp(52px, 10vw, 96px)",fontWeight:700,fontStyle:"italic",color:"rgba(255,255,255,0.9)",lineHeight:1,letterSpacing:"-0.02em"},children:[N,O.jsx("span",{style:{fontSize:"0.55em",opacity:.4},children:"%"})]}),O.jsx("p",{style:{fontFamily:"'Josefin Sans', sans-serif",fontSize:8,fontWeight:100,color:"rgba(217,224,227,0.2)",letterSpacing:"0.45em",textTransform:"uppercase",marginTop:4},children:"Loading"})]}),O.jsx("div",{style:{position:"absolute",bottom:36,left:32,display:"flex",gap:8,alignItems:"center"},children:[0,160,320].map(x=>O.jsx("div",{style:{width:3,height:3,borderRadius:"50%",background:"rgba(255,255,255,0.4)",animation:`pl-dot 1.4s ease-in-out ${x}ms infinite`}},x))})]})]})};var il={exports:{}},i0=il.exports,bp;function s0(){return bp||(bp=1,function(i,e){(function(n,s){i.exports=s()})(i0,function(){return function(n){function s(u){if(l[u])return l[u].exports;var d=l[u]={exports:{},id:u,loaded:!1};return n[u].call(d.exports,d,d.exports,s),d.loaded=!0,d.exports}var l={};return s.m=n,s.c=l,s.p="dist/",s(0)}([function(n,s,l){function u($){return $&&$.__esModule?$:{default:$}}var d=Object.assign||function($){for(var Se=1;Se<arguments.length;Se++){var ke=arguments[Se];for(var ye in ke)Object.prototype.hasOwnProperty.call(ke,ye)&&($[ye]=ke[ye])}return $},f=l(1),p=(u(f),l(6)),g=u(p),w=l(7),_=u(w),y=l(8),N=u(y),x=l(9),M=u(x),z=l(10),me=u(z),Ee=l(11),Ie=u(Ee),Ce=l(14),Z=u(Ce),F=[],X=!1,H={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},le=function(){var $=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if($&&(X=!0),X)return F=(0,Ie.default)(F,H),(0,me.default)(F,H.once),F},oe=function(){F=(0,Z.default)(),le()},W=function(){F.forEach(function($,Se){$.node.removeAttribute("data-aos"),$.node.removeAttribute("data-aos-easing"),$.node.removeAttribute("data-aos-duration"),$.node.removeAttribute("data-aos-delay")})},D=function($){return $===!0||$==="mobile"&&M.default.mobile()||$==="phone"&&M.default.phone()||$==="tablet"&&M.default.tablet()||typeof $=="function"&&$()===!0},Q=function($){H=d(H,$),F=(0,Z.default)();var Se=document.all&&!window.atob;return D(H.disable)||Se?W():(H.disableMutationObserver||N.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),H.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",H.easing),document.querySelector("body").setAttribute("data-aos-duration",H.duration),document.querySelector("body").setAttribute("data-aos-delay",H.delay),H.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?le(!0):H.startEvent==="load"?window.addEventListener(H.startEvent,function(){le(!0)}):document.addEventListener(H.startEvent,function(){le(!0)}),window.addEventListener("resize",(0,_.default)(le,H.debounceDelay,!0)),window.addEventListener("orientationchange",(0,_.default)(le,H.debounceDelay,!0)),window.addEventListener("scroll",(0,g.default)(function(){(0,me.default)(F,H.once)},H.throttleDelay)),H.disableMutationObserver||N.default.ready("[data-aos]",oe),F)};n.exports={init:Q,refresh:le,refreshHard:oe}},function(n,s){},,,,,function(n,s){(function(l){function u(D,Q,$){function Se(Ne){var it=ne,zt=fe;return ne=fe=void 0,Ae=Ne,ae=D.apply(zt,it)}function ke(Ne){return Ae=Ne,G=setTimeout(J,Q),ut?Se(Ne):ae}function ye(Ne){var it=Ne-ce,zt=Ne-Ae,br=Q-it;return At?oe(br,pe-zt):br}function j(Ne){var it=Ne-ce,zt=Ne-Ae;return ce===void 0||it>=Q||it<0||At&&zt>=pe}function J(){var Ne=W();return j(Ne)?B(Ne):void(G=setTimeout(J,ye(Ne)))}function B(Ne){return G=void 0,be&&ne?Se(Ne):(ne=fe=void 0,ae)}function C(){G!==void 0&&clearTimeout(G),Ae=0,ne=ce=fe=G=void 0}function R(){return G===void 0?ae:B(W())}function te(){var Ne=W(),it=j(Ne);if(ne=arguments,fe=this,ce=Ne,it){if(G===void 0)return ke(ce);if(At)return G=setTimeout(J,Q),Se(ce)}return G===void 0&&(G=setTimeout(J,Q)),ae}var ne,fe,pe,ae,G,ce,Ae=0,ut=!1,At=!1,be=!0;if(typeof D!="function")throw new TypeError(y);return Q=w(Q)||0,f($)&&(ut=!!$.leading,At="maxWait"in $,pe=At?le(w($.maxWait)||0,Q):pe,be="trailing"in $?!!$.trailing:be),te.cancel=C,te.flush=R,te}function d(D,Q,$){var Se=!0,ke=!0;if(typeof D!="function")throw new TypeError(y);return f($)&&(Se="leading"in $?!!$.leading:Se,ke="trailing"in $?!!$.trailing:ke),u(D,Q,{leading:Se,maxWait:Q,trailing:ke})}function f(D){var Q=typeof D>"u"?"undefined":_(D);return!!D&&(Q=="object"||Q=="function")}function p(D){return!!D&&(typeof D>"u"?"undefined":_(D))=="object"}function g(D){return(typeof D>"u"?"undefined":_(D))=="symbol"||p(D)&&H.call(D)==x}function w(D){if(typeof D=="number")return D;if(g(D))return N;if(f(D)){var Q=typeof D.valueOf=="function"?D.valueOf():D;D=f(Q)?Q+"":Q}if(typeof D!="string")return D===0?D:+D;D=D.replace(M,"");var $=me.test(D);return $||Ee.test(D)?Ie(D.slice(2),$?2:8):z.test(D)?N:+D}var _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},y="Expected a function",N=NaN,x="[object Symbol]",M=/^\s+|\s+$/g,z=/^[-+]0x[0-9a-f]+$/i,me=/^0b[01]+$/i,Ee=/^0o[0-7]+$/i,Ie=parseInt,Ce=(typeof l>"u"?"undefined":_(l))=="object"&&l&&l.Object===Object&&l,Z=(typeof self>"u"?"undefined":_(self))=="object"&&self&&self.Object===Object&&self,F=Ce||Z||Function("return this")(),X=Object.prototype,H=X.toString,le=Math.max,oe=Math.min,W=function(){return F.Date.now()};n.exports=d}).call(s,function(){return this}())},function(n,s){(function(l){function u(W,D,Q){function $(be){var Ne=te,it=ne;return te=ne=void 0,ce=be,pe=W.apply(it,Ne)}function Se(be){return ce=be,ae=setTimeout(j,D),Ae?$(be):pe}function ke(be){var Ne=be-G,it=be-ce,zt=D-Ne;return ut?le(zt,fe-it):zt}function ye(be){var Ne=be-G,it=be-ce;return G===void 0||Ne>=D||Ne<0||ut&&it>=fe}function j(){var be=oe();return ye(be)?J(be):void(ae=setTimeout(j,ke(be)))}function J(be){return ae=void 0,At&&te?$(be):(te=ne=void 0,pe)}function B(){ae!==void 0&&clearTimeout(ae),ce=0,te=G=ne=ae=void 0}function C(){return ae===void 0?pe:J(oe())}function R(){var be=oe(),Ne=ye(be);if(te=arguments,ne=this,G=be,Ne){if(ae===void 0)return Se(G);if(ut)return ae=setTimeout(j,D),$(G)}return ae===void 0&&(ae=setTimeout(j,D)),pe}var te,ne,fe,pe,ae,G,ce=0,Ae=!1,ut=!1,At=!0;if(typeof W!="function")throw new TypeError(_);return D=g(D)||0,d(Q)&&(Ae=!!Q.leading,ut="maxWait"in Q,fe=ut?H(g(Q.maxWait)||0,D):fe,At="trailing"in Q?!!Q.trailing:At),R.cancel=B,R.flush=C,R}function d(W){var D=typeof W>"u"?"undefined":w(W);return!!W&&(D=="object"||D=="function")}function f(W){return!!W&&(typeof W>"u"?"undefined":w(W))=="object"}function p(W){return(typeof W>"u"?"undefined":w(W))=="symbol"||f(W)&&X.call(W)==N}function g(W){if(typeof W=="number")return W;if(p(W))return y;if(d(W)){var D=typeof W.valueOf=="function"?W.valueOf():W;W=d(D)?D+"":D}if(typeof W!="string")return W===0?W:+W;W=W.replace(x,"");var Q=z.test(W);return Q||me.test(W)?Ee(W.slice(2),Q?2:8):M.test(W)?y:+W}var w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},_="Expected a function",y=NaN,N="[object Symbol]",x=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,me=/^0o[0-7]+$/i,Ee=parseInt,Ie=(typeof l>"u"?"undefined":w(l))=="object"&&l&&l.Object===Object&&l,Ce=(typeof self>"u"?"undefined":w(self))=="object"&&self&&self.Object===Object&&self,Z=Ie||Ce||Function("return this")(),F=Object.prototype,X=F.toString,H=Math.max,le=Math.min,oe=function(){return Z.Date.now()};n.exports=u}).call(s,function(){return this}())},function(n,s){function l(w){var _=void 0,y=void 0;for(_=0;_<w.length;_+=1)if(y=w[_],y.dataset&&y.dataset.aos||y.children&&l(y.children))return!0;return!1}function u(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function d(){return!!u()}function f(w,_){var y=window.document,N=u(),x=new N(p);g=_,x.observe(y.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function p(w){w&&w.forEach(function(_){var y=Array.prototype.slice.call(_.addedNodes),N=Array.prototype.slice.call(_.removedNodes),x=y.concat(N);if(l(x))return g()})}Object.defineProperty(s,"__esModule",{value:!0});var g=function(){};s.default={isSupported:d,ready:f}},function(n,s){function l(y,N){if(!(y instanceof N))throw new TypeError("Cannot call a class as a function")}function u(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var d=function(){function y(N,x){for(var M=0;M<x.length;M++){var z=x[M];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(N,z.key,z)}}return function(N,x,M){return x&&y(N.prototype,x),M&&y(N,M),N}}(),f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,g=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,_=function(){function y(){l(this,y)}return d(y,[{key:"phone",value:function(){var N=u();return!(!f.test(N)&&!p.test(N.substr(0,4)))}},{key:"mobile",value:function(){var N=u();return!(!g.test(N)&&!w.test(N.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),y}();s.default=new _},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(d,f,p){var g=d.node.getAttribute("data-aos-once");f>d.position?d.node.classList.add("aos-animate"):typeof g<"u"&&(g==="false"||!p&&g!=="true")&&d.node.classList.remove("aos-animate")},u=function(d,f){var p=window.pageYOffset,g=window.innerHeight;d.forEach(function(w,_){l(w,g+p,f)})};s.default=u},function(n,s,l){function u(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(s,"__esModule",{value:!0});var d=l(12),f=u(d),p=function(g,w){return g.forEach(function(_,y){_.node.classList.add("aos-init"),_.position=(0,f.default)(_.node,w.offset)}),g};s.default=p},function(n,s,l){function u(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(s,"__esModule",{value:!0});var d=l(13),f=u(d),p=function(g,w){var _=0,y=0,N=window.innerHeight,x={offset:g.getAttribute("data-aos-offset"),anchor:g.getAttribute("data-aos-anchor"),anchorPlacement:g.getAttribute("data-aos-anchor-placement")};switch(x.offset&&!isNaN(x.offset)&&(y=parseInt(x.offset)),x.anchor&&document.querySelectorAll(x.anchor)&&(g=document.querySelectorAll(x.anchor)[0]),_=(0,f.default)(g).top,x.anchorPlacement){case"top-bottom":break;case"center-bottom":_+=g.offsetHeight/2;break;case"bottom-bottom":_+=g.offsetHeight;break;case"top-center":_+=N/2;break;case"bottom-center":_+=N/2+g.offsetHeight;break;case"center-center":_+=N/2+g.offsetHeight/2;break;case"top-top":_+=N;break;case"bottom-top":_+=g.offsetHeight+N;break;case"center-top":_+=g.offsetHeight/2+N}return x.anchorPlacement||x.offset||isNaN(w)||(y=w),_+y};s.default=p},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(u){for(var d=0,f=0;u&&!isNaN(u.offsetLeft)&&!isNaN(u.offsetTop);)d+=u.offsetLeft-(u.tagName!="BODY"?u.scrollLeft:0),f+=u.offsetTop-(u.tagName!="BODY"?u.scrollTop:0),u=u.offsetParent;return{top:f,left:d}};s.default=l},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(u){return u=u||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(u,function(d){return{node:d}})};s.default=l}])})}(il)),il.exports}var o0=s0();const l0=Rc(o0),a0=()=>{};var Op={};/**
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
 */const Bm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const U=function(i,e){if(!i)throw yi(e)},yi=function(i){return new Error("Firebase Database ("+Bm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
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
 */const Vm=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},u0=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],f=i[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,f=d?i[l+1]:0,p=l+2<i.length,g=p?i[l+2]:0,w=u>>2,_=(u&3)<<4|f>>4;let y=(f&15)<<2|g>>6,N=g&63;p||(N=64,d||(y=64)),s.push(n[w],n[_],n[y],n[N])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Vm(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):u0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],f=l<i.length?n[i.charAt(l)]:0;++l;const g=l<i.length?n[i.charAt(l)]:64;++l;const _=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||f==null||g==null||_==null)throw new c0;const y=u<<2|f>>4;if(s.push(y),g!==64){const N=f<<4&240|g>>2;if(s.push(N),_!==64){const x=g<<6&192|_;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class c0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $m=function(i){const e=Vm(i);return Ac.encodeByteArray(e,!0)},cl=function(i){return $m(i).replace(/\./g,"")},dl=function(i){try{return Ac.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function d0(i){return Gm(void 0,i)}function Gm(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!h0(n)||(i[n]=Gm(i[n],e[n]));return i}function h0(i){return i!=="__proto__"}/**
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
 */function f0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const p0=()=>f0().__FIREBASE_DEFAULTS__,m0=()=>{if(typeof process>"u"||typeof Op>"u")return;const i=Op.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},g0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&dl(i[1]);return e&&JSON.parse(e)},bc=()=>{try{return a0()||p0()||m0()||g0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},qm=i=>{var e,n;return(n=(e=bc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},_0=i=>{const e=qm(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Km=()=>{var i;return(i=bc())===null||i===void 0?void 0:i.config},Qm=i=>{var e;return(e=bc())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Ls{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function wi(i){return i.endsWith(".cloudworkstations.dev")}async function Ym(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function v0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[cl(JSON.stringify(n)),cl(JSON.stringify(d)),""].join(".")}const vs={};function y0(){const i={prod:[],emulator:[]};for(const e of Object.keys(vs))vs[e]?i.emulator.push(e):i.prod.push(e);return i}function w0(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let Dp=!1;function Xm(i,e){if(typeof window>"u"||typeof document>"u"||!wi(window.location.host)||vs[i]===e||vs[i]||Dp)return;vs[i]=e;function n(y){return`__firebase__banner__${y}`}const s="__firebase__banner",u=y0().prod.length>0;function d(){const y=document.getElementById(s);y&&y.remove()}function f(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function p(y,N){y.setAttribute("width","24"),y.setAttribute("id",N),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function g(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Dp=!0,d()},y}function w(y,N){y.setAttribute("id",N),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function _(){const y=w0(s),N=n("text"),x=document.getElementById(N)||document.createElement("span"),M=n("learnmore"),z=document.getElementById(M)||document.createElement("a"),me=n("preprendIcon"),Ee=document.getElementById(me)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const Ie=y.element;f(Ie),w(z,M);const Ce=g();p(Ee,me),Ie.append(Ee,x,z,Ce),document.body.appendChild(Ie)}u?(x.innerText="Preview backend disconnected.",Ee.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function E0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function S0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Jm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function C0(){const i=_t();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Zm(){return Bm.NODE_ADMIN===!0}function I0(){try{return typeof indexedDB=="object"}catch{return!1}}function k0(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
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
 */const T0="FirebaseError";class rr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=T0,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ms.prototype.create)}}class Ms{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?N0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new rr(l,f,s)}}function N0(i,e){return i.replace(x0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const x0=/\{\$([^}]+)}/g;/**
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
 */function ks(i){return JSON.parse(i)}function rt(i){return JSON.stringify(i)}/**
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
 */const eg=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=ks(dl(u[0])||""),n=ks(dl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},R0=function(i){const e=eg(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},P0=function(i){const e=eg(i).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function cn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function di(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function oc(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function hl(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function Cr(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if(Lp(u)&&Lp(d)){if(!Cr(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Lp(i){return i!==null&&typeof i=="object"}/**
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
 */function Ei(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class A0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)s[_]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let _=16;_<80;_++){const y=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(y<<1|y>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,w;for(let _=0;_<80;_++){_<40?_<20?(g=f^u&(d^f),w=1518500249):(g=u^d^f,w=1859775393):_<60?(g=u&d|f&(u|d),w=2400959708):(g=u^d^f,w=3395469782);const y=(l<<5|l>>>27)+g+p+w+s[_]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=y}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function b0(i,e){const n=new O0(i,e);return n.subscribe.bind(n)}class O0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");D0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=$u),l.error===void 0&&(l.error=$u),l.complete===void 0&&(l.complete=$u);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D0(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function $u(){}function Ol(i,e){return`${i} failed: ${e} argument `}/**
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
 */const L0=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,U(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Dl=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Pt(i){return i&&i._delegate?i._delegate:i}class Ir{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class M0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ls;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(U0(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:F0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F0(i){return i===vr?void 0:i}function U0(i){return i.instantiationMode==="EAGER"}/**
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
 */class j0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new M0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Oe||(Oe={}));const z0={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},W0=Oe.INFO,H0={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},B0=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=H0[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dc{constructor(e){this.name=e,this._logLevel=W0,this._logHandler=B0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?z0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const V0=(i,e)=>e.some(n=>i instanceof n);let Mp,Fp;function $0(){return Mp||(Mp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function G0(){return Fp||(Fp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tg=new WeakMap,lc=new WeakMap,ng=new WeakMap,Gu=new WeakMap,Lc=new WeakMap;function q0(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Xn(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&tg.set(n,i)}).catch(()=>{}),Lc.set(e,i),e}function K0(i){if(lc.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});lc.set(i,e)}let ac={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return lc.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ng.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Q0(i){ac=i(ac)}function Y0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(qu(this),e,...n);return ng.set(s,e.sort?e.sort():[e]),Xn(s)}:G0().includes(i)?function(...e){return i.apply(qu(this),e),Xn(tg.get(this))}:function(...e){return Xn(i.apply(qu(this),e))}}function X0(i){return typeof i=="function"?Y0(i):(i instanceof IDBTransaction&&K0(i),V0(i,$0())?new Proxy(i,ac):i)}function Xn(i){if(i instanceof IDBRequest)return q0(i);if(Gu.has(i))return Gu.get(i);const e=X0(i);return e!==i&&(Gu.set(i,e),Lc.set(e,i)),e}const qu=i=>Lc.get(i);function J0(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),f=Xn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Xn(d.result),p.oldVersion,p.newVersion,Xn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const Z0=["get","getKey","getAll","getAllKeys","count"],ew=["put","add","delete","clear"],Ku=new Map;function Up(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Ku.get(e))return Ku.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=ew.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||Z0.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return Ku.set(e,u),u}Q0(i=>({...i,get:(e,n,s)=>Up(e,n)||i.get(e,n,s),has:(e,n)=>!!Up(e,n)||i.has(e,n)}));/**
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
 */class tw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function nw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uc="@firebase/app",jp="0.13.1";/**
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
 */const In=new Dc("@firebase/app"),rw="@firebase/app-compat",iw="@firebase/analytics-compat",sw="@firebase/analytics",ow="@firebase/app-check-compat",lw="@firebase/app-check",aw="@firebase/auth",uw="@firebase/auth-compat",cw="@firebase/database",dw="@firebase/data-connect",hw="@firebase/database-compat",fw="@firebase/functions",pw="@firebase/functions-compat",mw="@firebase/installations",gw="@firebase/installations-compat",_w="@firebase/messaging",vw="@firebase/messaging-compat",yw="@firebase/performance",ww="@firebase/performance-compat",Ew="@firebase/remote-config",Sw="@firebase/remote-config-compat",Cw="@firebase/storage",Iw="@firebase/storage-compat",kw="@firebase/firestore",Tw="@firebase/ai",Nw="@firebase/firestore-compat",xw="firebase",Rw="11.9.0";/**
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
 */const cc="[DEFAULT]",Pw={[uc]:"fire-core",[rw]:"fire-core-compat",[sw]:"fire-analytics",[iw]:"fire-analytics-compat",[lw]:"fire-app-check",[ow]:"fire-app-check-compat",[aw]:"fire-auth",[uw]:"fire-auth-compat",[cw]:"fire-rtdb",[dw]:"fire-data-connect",[hw]:"fire-rtdb-compat",[fw]:"fire-fn",[pw]:"fire-fn-compat",[mw]:"fire-iid",[gw]:"fire-iid-compat",[_w]:"fire-fcm",[vw]:"fire-fcm-compat",[yw]:"fire-perf",[ww]:"fire-perf-compat",[Ew]:"fire-rc",[Sw]:"fire-rc-compat",[Cw]:"fire-gcs",[Iw]:"fire-gcs-compat",[kw]:"fire-fst",[Nw]:"fire-fst-compat",[Tw]:"fire-vertex","fire-js":"fire-js",[xw]:"fire-js-all"};/**
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
 */const fl=new Map,Aw=new Map,dc=new Map;function zp(i,e){try{i.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function hi(i){const e=i.name;if(dc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;dc.set(e,i);for(const n of fl.values())zp(n,i);for(const n of Aw.values())zp(n,i);return!0}function Mc(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Kt(i){return i==null?!1:i.settings!==void 0}/**
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
 */const bw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Ms("app","Firebase",bw);/**
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
 */class Ow{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const Si=Rw;function rg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:cc,automaticDataCollectionEnabled:!0},e),l=s.name;if(typeof l!="string"||!l)throw Jn.create("bad-app-name",{appName:String(l)});if(n||(n=Km()),!n)throw Jn.create("no-options");const u=fl.get(l);if(u){if(Cr(n,u.options)&&Cr(s,u.config))return u;throw Jn.create("duplicate-app",{appName:l})}const d=new j0(l);for(const p of dc.values())d.addComponent(p);const f=new Ow(n,s,d);return fl.set(l,f),f}function ig(i=cc){const e=fl.get(i);if(!e&&i===cc&&Km())return rg();if(!e)throw Jn.create("no-app",{appName:i});return e}function Zn(i,e,n){var s;let l=(s=Pw[i])!==null&&s!==void 0?s:i;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(f.join(" "));return}hi(new Ir(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const Dw="firebase-heartbeat-database",Lw=1,Ts="firebase-heartbeat-store";let Qu=null;function sg(){return Qu||(Qu=J0(Dw,Lw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ts)}catch(n){console.warn(n)}}}}).catch(i=>{throw Jn.create("idb-open",{originalErrorMessage:i.message})})),Qu}async function Mw(i){try{const n=(await sg()).transaction(Ts),s=await n.objectStore(Ts).get(og(i));return await n.done,s}catch(e){if(e instanceof rr)In.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function Wp(i,e){try{const s=(await sg()).transaction(Ts,"readwrite");await s.objectStore(Ts).put(e,og(i)),await s.done}catch(n){if(n instanceof rr)In.warn(n.message);else{const s=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(s.message)}}}function og(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Fw=1024,Uw=30;class jw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ww(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Hp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>Uw){const d=Hw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){In.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hp(),{heartbeatsToSend:s,unsentEntries:l}=zw(this._heartbeatsCache.heartbeats),u=cl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return In.warn(n),""}}}function Hp(){return new Date().toISOString().substring(0,10)}function zw(i,e=Fw){const n=[];let s=i.slice();for(const l of i){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),Bp(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Bp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ww{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return I0()?k0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Mw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Bp(i){return cl(JSON.stringify({version:2,heartbeats:i})).length}function Hw(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function Bw(i){hi(new Ir("platform-logger",e=>new tw(e),"PRIVATE")),hi(new Ir("heartbeat",e=>new jw(e),"PRIVATE")),Zn(uc,jp,i),Zn(uc,jp,"esm2017"),Zn("fire-js","")}Bw("");var Vw="firebase",$w="11.9.1";/**
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
 */Zn(Vw,$w,"app");function Fc(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(i);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(i,s[l])&&(n[s[l]]=i[s[l]]);return n}function lg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gw=lg,ag=new Ms("auth","Firebase",lg());/**
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
 */const pl=new Dc("@firebase/auth");function qw(i,...e){pl.logLevel<=Oe.WARN&&pl.warn(`Auth (${Si}): ${i}`,...e)}function sl(i,...e){pl.logLevel<=Oe.ERROR&&pl.error(`Auth (${Si}): ${i}`,...e)}/**
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
 */function un(i,...e){throw jc(i,...e)}function Xt(i,...e){return jc(i,...e)}function Uc(i,e,n){const s=Object.assign(Object.assign({},Gw()),{[e]:n});return new Ms("auth","Firebase",s).create(e,{appName:i.name})}function Sr(i){return Uc(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kw(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&un(i,"argument-error"),Uc(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jc(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return ag.create(i,...e)}function he(i,e,...n){if(!i)throw jc(e,...n)}function wn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw sl(e),new Error(e)}function kn(i,e){i||wn(e)}/**
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
 */function hc(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Qw(){return Vp()==="http:"||Vp()==="https:"}function Vp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function Yw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qw()||S0()||"connection"in navigator)?navigator.onLine:!0}function Xw(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Fs{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Oc()||Jm()}get(){return Yw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zc(i,e){kn(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ug{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Jw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Zw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],e1=new Fs(3e4,6e4);function Wc(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ci(i,e,n,s,l={}){return cg(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Ei(Object.assign({key:i.config.apiKey},d)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},u);return E0()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&wi(i.emulatorConfig.host)&&(g.credentials="include"),ug.fetch()(await dg(i,i.config.apiHost,n,f),g)})}async function cg(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},Jw),e);try{const l=new n1(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw tl(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw tl(i,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw tl(i,"email-already-in-use",d);if(p==="USER_DISABLED")throw tl(i,"user-disabled",d);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Uc(i,w,g);un(i,w)}}catch(l){if(l instanceof rr)throw l;un(i,"network-request-failed",{message:String(l)})}}async function t1(i,e,n,s,l={}){const u=await Ci(i,e,n,s,l);return"mfaPendingCredential"in u&&un(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function dg(i,e,n,s){const l=`${e}${n}?${s}`,u=i,d=u.config.emulator?zc(i.config,l):`${i.config.apiScheme}://${l}`;return Zw.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class n1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Xt(this.auth,"network-request-failed")),e1.get())})}}function tl(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Xt(i,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function r1(i,e){return Ci(i,"POST","/v1/accounts:delete",e)}async function ml(i,e){return Ci(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function ys(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function i1(i,e=!1){const n=Pt(i),s=await n.getIdToken(e),l=Hc(s);he(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:ys(Yu(l.auth_time)),issuedAtTime:ys(Yu(l.iat)),expirationTime:ys(Yu(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Yu(i){return Number(i)*1e3}function Hc(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return sl("JWT malformed, contained fewer than 3 sections"),null;try{const l=dl(n);return l?JSON.parse(l):(sl("Failed to decode base64 JWT payload"),null)}catch(l){return sl("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function $p(i){const e=Hc(i);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ns(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rr&&s1(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function s1({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class o1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ys(this.lastLoginAt),this.creationTime=ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gl(i){var e;const n=i.auth,s=await i.getIdToken(),l=await Ns(i,ml(n,{idToken:s}));he(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];i._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?hg(u.providerUserInfo):[],f=a1(i.providerData,d),p=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(f!=null&&f.length),w=p?g:!1,_={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new fc(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,_)}async function l1(i){const e=Pt(i);await gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function a1(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function hg(i){return i.map(e=>{var{providerId:n}=e,s=Fc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function u1(i,e){const n=await cg(i,{},async()=>{const s=Ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=i.config,d=await dg(i,l,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return i.emulatorConfig&&wi(i.emulatorConfig.host)&&(p.credentials="include"),ug.fetch()(d,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function c1(i,e){return Ci(i,"POST","/v2/accounts:revokeToken",Wc(i,e))}/**
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
 */class si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$p(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=$p(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await u1(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new si;return s&&(he(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(he(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(he(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new si,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function Gn(i,e){he(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Qt{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=Fc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new o1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new fc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Ns(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return i1(this,e)}reload(){return l1(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await gl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(Sr(this.auth));const e=await this.getIdToken();return await Ns(this,r1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,w;const _=(s=n.displayName)!==null&&s!==void 0?s:void 0,y=(l=n.email)!==null&&l!==void 0?l:void 0,N=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,x=(d=n.photoURL)!==null&&d!==void 0?d:void 0,M=(f=n.tenantId)!==null&&f!==void 0?f:void 0,z=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,me=(g=n.createdAt)!==null&&g!==void 0?g:void 0,Ee=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:Ie,emailVerified:Ce,isAnonymous:Z,providerData:F,stsTokenManager:X}=n;he(Ie&&X,e,"internal-error");const H=si.fromJSON(this.name,X);he(typeof Ie=="string",e,"internal-error"),Gn(_,e.name),Gn(y,e.name),he(typeof Ce=="boolean",e,"internal-error"),he(typeof Z=="boolean",e,"internal-error"),Gn(N,e.name),Gn(x,e.name),Gn(M,e.name),Gn(z,e.name),Gn(me,e.name),Gn(Ee,e.name);const le=new Qt({uid:Ie,auth:e,email:y,emailVerified:Ce,displayName:_,isAnonymous:Z,photoURL:x,phoneNumber:N,tenantId:M,stsTokenManager:H,createdAt:me,lastLoginAt:Ee});return F&&Array.isArray(F)&&(le.providerData=F.map(oe=>Object.assign({},oe))),z&&(le._redirectEventId=z),le}static async _fromIdTokenResponse(e,n,s=!1){const l=new si;l.updateFromServerResponse(n);const u=new Qt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await gl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];he(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?hg(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new si;f.updateFromIdToken(s);const p=new Qt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new fc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
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
 */const Gp=new Map;function En(i){kn(i instanceof Function,"Expected a class definition");let e=Gp.get(i);return e?(kn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Gp.set(i,e),e)}/**
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
 */class fg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fg.type="NONE";const qp=fg;/**
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
 */function ol(i,e,n){return`firebase:${i}:${e}:${n}`}class oi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=ol(this.userKey,l.apiKey,u),this.fullPersistenceKey=ol("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ml(this.auth,{idToken:e}).catch(()=>{});return n?Qt._fromGetAccountInfoResponse(this.auth,n,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new oi(En(qp),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||En(qp);const d=ol(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const w=await g._get(d);if(w){let _;if(typeof w=="string"){const y=await ml(e,{idToken:w}).catch(()=>{});if(!y)break;_=await Qt._fromGetAccountInfoResponse(e,y,w)}else _=Qt._fromJSON(e,w);g!==u&&(f=_),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new oi(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new oi(u,e,s))}}/**
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
 */function Kp(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_g(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yg(e))return"Blackberry";if(wg(e))return"Webos";if(mg(e))return"Safari";if((e.includes("chrome/")||gg(e))&&!e.includes("edge/"))return"Chrome";if(vg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function pg(i=_t()){return/firefox\//i.test(i)}function mg(i=_t()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gg(i=_t()){return/crios\//i.test(i)}function _g(i=_t()){return/iemobile/i.test(i)}function vg(i=_t()){return/android/i.test(i)}function yg(i=_t()){return/blackberry/i.test(i)}function wg(i=_t()){return/webos/i.test(i)}function Bc(i=_t()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function d1(i=_t()){var e;return Bc(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function h1(){return C0()&&document.documentMode===10}function Eg(i=_t()){return Bc(i)||vg(i)||wg(i)||yg(i)||/windows phone/i.test(i)||_g(i)}/**
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
 */function Sg(i,e=[]){let n;switch(i){case"Browser":n=Kp(_t());break;case"Worker":n=`${Kp(_t())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Si}/${s}`}/**
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
 */class f1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function p1(i,e={}){return Ci(i,"GET","/v2/passwordPolicy",Wc(i,e))}/**
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
 */const m1=6;class g1{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:m1,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class _1{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qp(this),this.idTokenSubscription=new Qp(this),this.beforeStateQueue=new f1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ag,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await oi.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ml(this,{idToken:e}),s=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Kt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(Sr(this));const n=e?Pt(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(Sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(Sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await p1(this),n=new g1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ms("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await c1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await oi.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ll(i){return Pt(i)}class Qp{constructor(e){this.auth=e,this.observer=null,this.addObserver=b0(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function v1(i){Vc=i}function y1(i){return Vc.loadJS(i)}function w1(){return Vc.gapiScript}function E1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function S1(i,e){const n=Mc(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Cr(u,e??{}))return l;un(l,"already-initialized")}return n.initialize({options:e})}function C1(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function I1(i,e,n){const s=Ll(i);he(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=Cg(e),{host:d,port:f}=k1(e),p=f===null?"":`:${f}`,g={url:`${u}//${d}${p}/`},w=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){he(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),he(Cr(g,s.config.emulator)&&Cr(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,wi(d)?(Ym(`${u}//${d}${p}`),Xm("Auth",!0)):T1()}function Cg(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function k1(i){const e=Cg(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Yp(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:Yp(d)}}}function Yp(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function T1(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Ig{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}/**
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
 */async function li(i,e){return t1(i,"POST","/v1/accounts:signInWithIdp",Wc(i,e))}/**
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
 */const N1="http://localhost";class kr extends Ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=Fc(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new kr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,li(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:N1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ei(n)}return e}}/**
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
 */class $c{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Us extends $c{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qn extends Us{constructor(){super("facebook.com")}static credential(e){return kr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class yn extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return yn.credential(n,s)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
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
 */class Kn extends Us{constructor(){super("github.com")}static credential(e){return kr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class Qn extends Us{constructor(){super("twitter.com")}static credential(e,n){return kr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await Qt._fromIdTokenResponse(e,s,l),d=Xp(s);return new fi({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Xp(s);return new fi({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Xp(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class _l extends rr{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,_l.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new _l(e,n,s,l)}}function kg(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?_l._fromErrorAndOperation(i,u,e,s):u})}async function x1(i,e,n=!1){const s=await Ns(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return fi._forOperation(i,"link",s)}/**
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
 */async function R1(i,e,n=!1){const{auth:s}=i;if(Kt(s.app))return Promise.reject(Sr(s));const l="reauthenticate";try{const u=await Ns(i,kg(s,l,e,i),n);he(u.idToken,s,"internal-error");const d=Hc(u.idToken);he(d,s,"internal-error");const{sub:f}=d;return he(i.uid===f,s,"user-mismatch"),fi._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&un(s,"user-mismatch"),u}}/**
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
 */async function P1(i,e,n=!1){if(Kt(i.app))return Promise.reject(Sr(i));const s="signIn",l=await kg(i,s,e),u=await fi._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}function A1(i,e,n,s){return Pt(i).onIdTokenChanged(e,n,s)}function b1(i,e,n){return Pt(i).beforeAuthStateChanged(e,n)}function Xk(i){return Pt(i).signOut()}const vl="__sak";/**
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
 */class Tg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vl,"1"),this.storage.removeItem(vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const O1=1e3,D1=10;class Ng extends Tg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);h1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,D1):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},O1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ng.type="LOCAL";const L1=Ng;/**
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
 */class xg extends Tg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xg.type="SESSION";const Rg=xg;/**
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
 */function M1(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ml{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Ml(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await M1(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ml.receivers=[];/**
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
 */function Gc(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class F1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=Gc("",20);l.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(_){const y=_;if(y.data.eventId===g)switch(y.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(y.data.response);break;default:clearTimeout(w),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function an(){return window}function U1(i){an().location.href=i}/**
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
 */function Pg(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function j1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function z1(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function W1(){return Pg()?self:null}/**
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
 */const Ag="firebaseLocalStorageDb",H1=1,yl="firebaseLocalStorage",bg="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fl(i,e){return i.transaction([yl],e?"readwrite":"readonly").objectStore(yl)}function B1(){const i=indexedDB.deleteDatabase(Ag);return new js(i).toPromise()}function pc(){const i=indexedDB.open(Ag,H1);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(yl,{keyPath:bg})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(yl)?e(s):(s.close(),await B1(),e(await pc()))})})}async function Jp(i,e,n){const s=Fl(i,!0).put({[bg]:e,value:n});return new js(s).toPromise()}async function V1(i,e){const n=Fl(i,!1).get(e),s=await new js(n).toPromise();return s===void 0?null:s.value}function Zp(i,e){const n=Fl(i,!0).delete(e);return new js(n).toPromise()}const $1=800,G1=3;class Og{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>G1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ml._getInstance(W1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await j1(),!this.activeServiceWorker)return;this.sender=new F1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||z1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pc();return await Jp(e,vl,"1"),await Zp(e,vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Jp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>V1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=Fl(l,!1).getAll();return new js(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Og.type="LOCAL";const q1=Og;new Fs(3e4,6e4);/**
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
 */function Dg(i,e){return e?En(e):(he(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class qc extends Ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function K1(i){return P1(i.auth,new qc(i),i.bypassAuthState)}function Q1(i){const{auth:e,user:n}=i;return he(n,e,"internal-error"),R1(n,new qc(i),i.bypassAuthState)}async function Y1(i){const{auth:e,user:n}=i;return he(n,e,"internal-error"),x1(n,new qc(i),i.bypassAuthState)}/**
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
 */class Lg{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return K1;case"linkViaPopup":case"linkViaRedirect":return Y1;case"reauthViaPopup":case"reauthViaRedirect":return Q1;default:un(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const X1=new Fs(2e3,1e4);async function Jk(i,e,n){if(Kt(i.app))return Promise.reject(Xt(i,"operation-not-supported-in-this-environment"));const s=Ll(i);Kw(i,e,$c);const l=Dg(s,n);return new wr(s,"signInViaPopup",e,l).executeNotNull()}class wr extends Lg{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,X1.get())};e()}}wr.currentPopupAction=null;/**
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
 */const J1="pendingRedirect",ll=new Map;class Z1 extends Lg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ll.get(this.auth._key());if(!e){try{const s=await eE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ll.set(this.auth._key(),e)}return this.bypassAuthState||ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eE(i,e){const n=rE(e),s=nE(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function tE(i,e){ll.set(i._key(),e)}function nE(i){return En(i._redirectPersistence)}function rE(i){return ol(J1,i.config.apiKey,i.name)}async function iE(i,e,n=!1){if(Kt(i.app))return Promise.reject(Sr(i));const s=Ll(i),l=Dg(s,e),d=await new Z1(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const sE=10*60*1e3;class oE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Mg(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sE&&this.cachedEventUids.clear(),this.cachedEventUids.has(em(e))}saveEventToCache(e){this.cachedEventUids.add(em(e)),this.lastProcessedEventTime=Date.now()}}function em(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Mg({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lE(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mg(i);default:return!1}}/**
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
 */async function aE(i,e={}){return Ci(i,"GET","/v1/projects",e)}/**
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
 */const uE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cE=/^https?/;async function dE(i){if(i.config.emulator)return;const{authorizedDomains:e}=await aE(i);for(const n of e)try{if(hE(n))return}catch{}un(i,"unauthorized-domain")}function hE(i){const e=hc(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!cE.test(n))return!1;if(uE.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const fE=new Fs(3e4,6e4);function tm(){const i=an().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function pE(i){return new Promise((e,n)=>{var s,l,u;function d(){tm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tm(),n(Xt(i,"network-request-failed"))},timeout:fE.get()})}if(!((l=(s=an().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=an().gapi)===null||u===void 0)&&u.load)d();else{const f=E1("iframefcb");return an()[f]=()=>{gapi.load?d():n(Xt(i,"network-request-failed"))},y1(`${w1()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw al=null,e})}let al=null;function mE(i){return al=al||pE(i),al}/**
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
 */const gE=new Fs(5e3,15e3),_E="__/auth/iframe",vE="emulator/auth/iframe",yE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EE(i){const e=i.config;he(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?zc(e,vE):`https://${i.config.authDomain}/${_E}`,s={apiKey:e.apiKey,appName:i.name,v:Si},l=wE.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ei(s).slice(1)}`}async function SE(i){const e=await mE(i),n=an().gapi;return he(n,i,"internal-error"),e.open({where:document.body,url:EE(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yE,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=Xt(i,"network-request-failed"),f=an().setTimeout(()=>{u(d)},gE.get());function p(){an().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
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
 */const CE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IE=500,kE=600,TE="_blank",NE="http://localhost";class nm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xE(i,e,n,s=IE,l=kE){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},CE),{width:s.toString(),height:l.toString(),top:u,left:d}),g=_t().toLowerCase();n&&(f=gg(g)?TE:n),pg(g)&&(e=e||NE,p.scrollbars="yes");const w=Object.entries(p).reduce((y,[N,x])=>`${y}${N}=${x},`,"");if(d1(g)&&f!=="_self")return RE(e||"",f),new nm(null);const _=window.open(e||"",f,w);he(_,i,"popup-blocked");try{_.focus()}catch{}return new nm(_)}function RE(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const PE="__/auth/handler",AE="emulator/auth/handler",bE=encodeURIComponent("fac");async function rm(i,e,n,s,l,u){he(i.config.authDomain,i,"auth-domain-config-required"),he(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:Si,eventId:l};if(e instanceof $c){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",oc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,_]of Object.entries({}))d[w]=_}if(e instanceof Us){const w=e.getScopes().filter(_=>_!=="");w.length>0&&(d.scopes=w.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await i._getAppCheckToken(),g=p?`#${bE}=${encodeURIComponent(p)}`:"";return`${OE(i)}?${Ei(f).slice(1)}${g}`}function OE({config:i}){return i.emulator?zc(i,AE):`https://${i.authDomain}/${PE}`}/**
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
 */const Xu="webStorageSupport";class DE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rg,this._completeRedirectFn=iE,this._overrideRedirectResult=tE}async _openPopup(e,n,s,l){var u;kn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await rm(e,n,s,hc(),l);return xE(e,d,Gc())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await rm(e,n,s,hc(),l);return U1(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(kn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await SE(e),s=new oE(e);return n.register("authEvent",l=>(he(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xu,{type:Xu},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[Xu];d!==void 0&&n(!!d),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Eg()||mg()||Bc()}}const LE=DE;var im="@firebase/auth",sm="1.10.7";/**
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
 */class ME{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function FE(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UE(i){hi(new Ir("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;he(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sg(i)},g=new _1(s,l,u,p);return C1(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),hi(new Ir("auth-internal",e=>{const n=Ll(e.getProvider("auth").getImmediate());return(s=>new ME(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(im,sm,FE(i)),Zn(im,sm,"esm2017")}/**
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
 */const jE=5*60,zE=Qm("authIdTokenMaxAge")||jE;let om=null;const WE=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>zE)return;const l=n==null?void 0:n.token;om!==l&&(om=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function HE(i=ig()){const e=Mc(i,"auth");if(e.isInitialized())return e.getImmediate();const n=S1(i,{popupRedirectResolver:LE,persistence:[q1,L1,Rg]}),s=Qm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=WE(u.toString());b1(n,d,()=>d(n.currentUser)),A1(n,f=>d(f))}}const l=qm("auth");return l&&I1(n,`http://${l}`),n}function BE(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}v1({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=Xt("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",BE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UE("Browser");var lm={};const am="@firebase/database",um="1.0.19";/**
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
 */let Fg="";function VE(i){Fg=i}/**
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
 */class $E{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ks(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class GE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ug=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $E(e)}}catch{}return new GE},Er=Ug("localStorage"),qE=Ug("sessionStorage");/**
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
 */const ai=new Dc("@firebase/database"),KE=function(){let i=1;return function(){return i++}}(),jg=function(i){const e=L0(i),n=new A0;n.update(e);const s=n.digest();return Ac.encodeByteArray(s)},zs=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=zs.apply(null,s):typeof s=="object"?e+=rt(s):e+=s,e+=" "}return e};let ws=null,cm=!0;const QE=function(i,e){U(!e,"Can't turn on custom loggers persistently."),ai.logLevel=Oe.VERBOSE,ws=ai.log.bind(ai)},lt=function(...i){if(cm===!0&&(cm=!1,ws===null&&qE.get("logging_enabled")===!0&&QE()),ws){const e=zs.apply(null,i);ws(e)}},Ws=function(i){return function(...e){lt(i,...e)}},mc=function(...i){const e="FIREBASE INTERNAL ERROR: "+zs(...i);ai.error(e)},Tn=function(...i){const e=`FIREBASE FATAL ERROR: ${zs(...i)}`;throw ai.error(e),new Error(e)},gt=function(...i){const e="FIREBASE WARNING: "+zs(...i);ai.warn(e)},YE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kc=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},XE=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},pi="[MIN_NAME]",Tr="[MAX_NAME]",Pr=function(i,e){if(i===e)return 0;if(i===pi||e===Tr)return-1;if(e===pi||i===Tr)return 1;{const n=dm(i),s=dm(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},JE=function(i,e){return i===e?0:i<e?-1:1},fs=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+rt(e))},Qc=function(i){if(typeof i!="object"||i===null)return rt(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=rt(e[s]),n+=":",n+=Qc(i[e[s]]);return n+="}",n},zg=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function at(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const Wg=function(i){U(!Kc(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const w=g.join("");let _="";for(p=0;p<64;p+=8){let y=parseInt(w.substr(p,8),2).toString(16);y.length===1&&(y="0"+y),_=_+y}return _.toLowerCase()},ZE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tS(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const nS=new RegExp("^-?(0*)\\d{1,10}$"),rS=-2147483648,iS=2147483647,dm=function(i){if(nS.test(i)){const e=Number(i);if(e>=rS&&e<=iS)return e}return null},Ii=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw gt("Exception was thrown by user callback.",n),e},Math.floor(0))}},sS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Es=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class oS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Kt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){gt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class lS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gt(e)}}class ul{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ul.OWNER="owner";/**
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
 */const Yc="5",Hg="v",Bg="s",Vg="r",$g="f",Gg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qg="ls",Kg="p",gc="ac",Qg="websocket",Yg="long_polling";/**
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
 */class Xg{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Er.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Er.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function aS(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function Jg(i,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let s;if(e===Qg)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===Yg)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aS(i)&&(n.ns=i.namespace);const l=[];return at(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
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
 */class uS{constructor(){this.counters_={}}incrementCounter(e,n=1){cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return d0(this.counters_)}}/**
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
 */const Ju={},Zu={};function Xc(i){const e=i.toString();return Ju[e]||(Ju[e]=new uS),Ju[e]}function cS(i,e){const n=i.toString();return Zu[n]||(Zu[n]=e()),Zu[n]}/**
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
 */class dS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ii(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hm="start",hS="close",fS="pLPCommand",pS="pRTLPCB",Zg="id",e_="pw",t_="ser",mS="cb",gS="seg",_S="ts",vS="d",yS="dframe",n_=1870,r_=30,wS=n_-r_,ES=25e3,SS=3e4;class ii{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ws(e),this.stats_=Xc(n),this.urlFn=p=>(this.appCheckToken&&(p[gc]=this.appCheckToken),Jg(n,Yg,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(SS)),XE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jc((...u)=>{const[d,f,p,g,w]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===hm)this.id=f,this.password=p;else if(d===hS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[hm]="t",s[t_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[mS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Hg]=Yc,this.transportSessionId&&(s[Bg]=this.transportSessionId),this.lastSessionId&&(s[qg]=this.lastSessionId),this.applicationId&&(s[Kg]=this.applicationId),this.appCheckToken&&(s[gc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Gg.test(location.hostname)&&(s[Vg]=$g);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ii.forceAllow_=!0}static forceDisallow(){ii.forceDisallow_=!0}static isAvailable(){return ii.forceAllow_?!0:!ii.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ZE()&&!eS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$m(n),l=zg(s,wS);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[yS]="t",s[Zg]=e,s[e_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Jc{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=KE(),window[fS+this.uniqueCallbackIdentifier]=e,window[pS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Jc.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){lt("frame writing exception"),f.stack&&lt(f.stack),lt(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zg]=this.myID,e[e_]=this.myPW,e[t_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+r_+s.length<=n_;){const d=this.pendingSegs.shift();s=s+"&"+gS+l+"="+d.seg+"&"+_S+l+"="+d.ts+"&"+vS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(ES)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const CS=16384,IS=45e3;let wl=null;typeof MozWebSocket<"u"?wl=MozWebSocket:typeof WebSocket<"u"&&(wl=WebSocket);class ln{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ws(this.connId),this.stats_=Xc(n),this.connURL=ln.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[Hg]=Yc,typeof location<"u"&&location.hostname&&Gg.test(location.hostname)&&(d[Vg]=$g),n&&(d[Bg]=n),s&&(d[qg]=s),l&&(d[gc]=l),u&&(d[Kg]=u),Jg(e,Qg,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Er.set("previous_websocket_failure",!0);try{let s;Zm(),this.mySock=new wl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){ln.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&wl!==null&&!ln.forceDisallow_}static previouslyFailed(){return Er.isInMemoryStorage||Er.get("previous_websocket_failure")===!0}markConnectionHealthy(){Er.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ks(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=zg(n,CS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(IS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ln.responsesRequiredToBeHealthy=2;ln.healthyTimeout=3e4;/**
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
 */class xs{static get ALL_TRANSPORTS(){return[ii,ln]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=ln.isAvailable();let s=n&&!ln.previouslyFailed();if(e.webSocketOnly&&(n||gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ln];else{const l=this.transports_=[];for(const u of xs.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);xs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xs.globalTransportInitialized_=!1;/**
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
 */const kS=6e4,TS=5e3,NS=10*1024,xS=100*1024,ec="t",fm="d",RS="s",pm="r",PS="e",mm="o",gm="a",_m="n",vm="p",AS="h";class bS{constructor(e,n,s,l,u,d,f,p,g,w){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=w,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ws("c:"+this.id+":"),this.transportManager_=new xs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Es(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>NS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ec in e){const n=e[ec];n===gm?this.upgradeIfSecondaryHealthy_():n===pm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===mm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=fs("t",e),s=fs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_m,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=fs("t",e),s=fs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=fs(ec,e);if(fm in e){const s=e[fm];if(n===AS){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===_m){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===RS?this.onConnectionShutdown_(s):n===pm?this.onReset_(s):n===PS?mc("Server Error: "+s):n===mm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Yc!==s&&gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Es(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Es(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Er.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class i_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class s_{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class El extends s_{static getInstance(){return new El}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Oc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ym=32,wm=768;class De{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Re(){return new De("")}function _e(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function tr(i){return i.pieces_.length-i.pieceNum_}function Fe(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new De(i.pieces_,e)}function Zc(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function OS(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function Rs(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function o_(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new De(e,0)}function Ve(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof De)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new De(n,0)}function we(i){return i.pieceNum_>=i.pieces_.length}function It(i,e){const n=_e(i),s=_e(e);if(n===null)return e;if(n===s)return It(Fe(i),Fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function DS(i,e){const n=Rs(i,0),s=Rs(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=Pr(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function ed(i,e){if(tr(i)!==tr(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ut(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(tr(i)>tr(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class LS{constructor(e,n){this.errorPrefix_=n,this.parts_=Rs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Dl(this.parts_[s]);l_(this)}}function MS(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Dl(e),l_(i)}function FS(i){const e=i.parts_.pop();i.byteLength_-=Dl(e),i.parts_.length>0&&(i.byteLength_-=1)}function l_(i){if(i.byteLength_>wm)throw new Error(i.errorPrefix_+"has a key path longer than "+wm+" bytes ("+i.byteLength_+").");if(i.parts_.length>ym)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ym+") or object contains a cycle "+yr(i))}function yr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
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
 */class td extends s_{static getInstance(){return new td}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ps=1e3,US=60*5*1e3,Em=30*1e3,jS=1.3,zS=3e4,WS="server_kill",Sm=3;class Cn extends i_{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Cn.nextPersistentConnectionId_++,this.log_=Ws("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ps,this.maxReconnectDelay_=US,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!Zm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");td.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&El.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(rt(u)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Ls,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;Cn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&cn(e,"w")){const s=di(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||P0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Em)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=R0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mc("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zS&&(this.reconnectDelay_=ps),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Cn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(_){U(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(_)};this.realtime_={close:p,sendRequest:g};const w=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,y]=await Promise.all([this.authTokenProvider_.getToken(w),this.appCheckTokenProvider_.getToken(w)]);d?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=y&&y.token,f=new bS(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,N=>{gt(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(WS)},u))}catch(_){this.log_("Failed to get token: "+_),d||(this.repoInfo_.nodeAdmin&&gt(_),p())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],oc(this.interruptReasons_)&&(this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Qc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new De(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sm&&(this.reconnectDelay_=Em,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fg.replace(/\./g,"-")]=1,Oc()?e["framework.cordova"]=1:Jm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=El.getInstance().currentlyOnline();return oc(this.interruptReasons_)&&e}}Cn.nextPersistentConnectionId_=0;Cn.nextConnectionId_=0;/**
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
 */class Ul{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ve(pi,e),l=new ve(pi,n);return this.compare(s,l)!==0}minPost(){return ve.MIN}}/**
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
 */let nl;class a_ extends Ul{static get __EMPTY_NODE(){return nl}static set __EMPTY_NODE(e){nl=e}compare(e,n){return Pr(e.name,n.name)}isDefinedOn(e){throw yi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ve.MIN}maxPost(){return new ve(Tr,nl)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new ve(e,nl)}toString(){return".key"}}const ui=new a_;/**
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
 */class rl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??tt.RED,this.left=l??kt.EMPTY_NODE,this.right=u??kt.EMPTY_NODE}copy(e,n,s,l,u){return new tt(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return kt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return kt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class HS{copy(e,n,s,l,u){return this}insert(e,n,s){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class kt{constructor(e,n=kt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new kt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new rl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new rl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new rl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new rl(this.root_,null,this.comparator_,!0,e)}}kt.EMPTY_NODE=new HS;/**
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
 */function BS(i,e){return Pr(i.name,e.name)}function nd(i,e){return Pr(i,e)}/**
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
 */let _c;function VS(i){_c=i}const u_=function(i){return typeof i=="number"?"number:"+Wg(i):"string:"+i},c_=function(i){if(i.isLeafNode()){const e=i.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&cn(e,".sv"),"Priority must be a string or number.")}else U(i===_c||i.isEmpty(),"priority of unexpected type.");U(i===_c||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Cm;class et{static set __childrenNodeConstructor(e){Cm=e}static get __childrenNodeConstructor(){return Cm}constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),c_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return we(e)?this:_e(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=_e(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+u_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Wg(this.value_):e+=this.value_,this.lazyHash_=jg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=et.VALUE_TYPE_ORDER.indexOf(n),u=et.VALUE_TYPE_ORDER.indexOf(s);return U(l>=0,"Unknown leaf type: "+n),U(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let d_,h_;function $S(i){d_=i}function GS(i){h_=i}class qS extends Ul{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?Pr(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ve.MIN}maxPost(){return new ve(Tr,new et("[PRIORITY-POST]",h_))}makePost(e,n){const s=d_(e);return new ve(n,new et("[PRIORITY-POST]",s))}toString(){return".priority"}}const $e=new qS;/**
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
 */const KS=Math.log(2);class QS{constructor(e){const n=u=>parseInt(Math.log(u)/KS,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sl=function(i,e,n,s){i.sort(e);const l=function(p,g){const w=g-p;let _,y;if(w===0)return null;if(w===1)return _=i[p],y=n?n(_):_,new tt(y,_.node,tt.BLACK,null,null);{const N=parseInt(w/2,10)+p,x=l(p,N),M=l(N+1,g);return _=i[N],y=n?n(_):_,new tt(y,_.node,tt.BLACK,x,M)}},u=function(p){let g=null,w=null,_=i.length;const y=function(x,M){const z=_-x,me=_;_-=x;const Ee=l(z+1,me),Ie=i[z],Ce=n?n(Ie):Ie;N(new tt(Ce,Ie.node,M,null,Ee))},N=function(x){g?(g.left=x,g=x):(w=x,g=x)};for(let x=0;x<p.count;++x){const M=p.nextBitIsOne(),z=Math.pow(2,p.count-(x+1));M?y(z,tt.BLACK):(y(z,tt.BLACK),y(z,tt.RED))}return w},d=new QS(i.length),f=u(d);return new kt(s||e,f)};/**
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
 */let tc;const ms={};class Sn{static get Default(){return U($e,"ChildrenNode.ts has not been loaded"),tc=tc||new Sn({".priority":ms},{".priority":$e}),tc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=di(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof kt?n:null}hasIndex(e){return cn(this.indexSet_,e.toString())}addIndex(e,n){U(e!==ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(ve.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=Sl(s,e.getCompare()):f=ms;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const w=Object.assign({},this.indexes_);return w[p]=f,new Sn(w,g)}addToIndexes(e,n){const s=hl(this.indexes_,(l,u)=>{const d=di(this.indexSet_,u);if(U(d,"Missing index implementation for "+u),l===ms)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(ve.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Sl(f,d.getCompare())}else return ms;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new ve(e.name,f))),p.insert(e,e.node)}});return new Sn(s,this.indexSet_)}removeFromIndexes(e,n){const s=hl(this.indexes_,l=>{if(l===ms)return l;{const u=n.get(e.name);return u?l.remove(new ve(e.name,u)):l}});return new Sn(s,this.indexSet_)}}/**
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
 */let gs;class ue{static get EMPTY_NODE(){return gs||(gs=new ue(new kt(nd),null,Sn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&c_(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gs}updatePriority(e){return this.children_.isEmpty()?this:new ue(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?gs:n}}getChild(e){const n=_e(e);return n===null?this:this.getImmediateChild(n).getChild(Fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ve(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?gs:this.priorityNode_;return new ue(l,d,u)}}updateChild(e,n){const s=_e(e);if(s===null)return n;{U(_e(e)!==".priority"||tr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Fe(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild($e,(d,f)=>{n[d]=f.val(e),s++,u&&ue.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+u_(this.getPriority().val())+":"),this.forEachChild($e,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":jg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new ve(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ve(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ve(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ve.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ve.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hs?-1:0}withIndex(e){if(e===ui||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ue(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator($e),l=n.getIterator($e);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===ui?null:this.indexMap_.get(e.toString())}}ue.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class YS extends ue{constructor(){super(new kt(nd),ue.EMPTY_NODE,Sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ue.EMPTY_NODE}isEmpty(){return!1}}const Hs=new YS;Object.defineProperties(ve,{MIN:{value:new ve(pi,ue.EMPTY_NODE)},MAX:{value:new ve(Tr,Hs)}});a_.__EMPTY_NODE=ue.EMPTY_NODE;et.__childrenNodeConstructor=ue;VS(Hs);GS(Hs);/**
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
 */const XS=!0;function nt(i,e=null){if(i===null)return ue.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new et(n,nt(e))}if(!(i instanceof Array)&&XS){const n=[];let s=!1;if(at(i,(d,f)=>{if(d.substring(0,1)!=="."){const p=nt(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ve(d,p)))}}),n.length===0)return ue.EMPTY_NODE;const u=Sl(n,BS,d=>d.name,nd);if(s){const d=Sl(n,$e.getCompare());return new ue(u,nt(e),new Sn({".priority":d},{".priority":$e}))}else return new ue(u,nt(e),Sn.Default)}else{let n=ue.EMPTY_NODE;return at(i,(s,l)=>{if(cn(i,s)&&s.substring(0,1)!=="."){const u=nt(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(nt(e))}}$S(nt);/**
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
 */class JS extends Ul{constructor(e){super(),this.indexPath_=e,U(!we(e)&&_e(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?Pr(e.name,n.name):u}makePost(e,n){const s=nt(e),l=ue.EMPTY_NODE.updateChild(this.indexPath_,s);return new ve(n,l)}maxPost(){const e=ue.EMPTY_NODE.updateChild(this.indexPath_,Hs);return new ve(Tr,e)}toString(){return Rs(this.indexPath_,0).join("/")}}/**
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
 */class ZS extends Ul{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Pr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ve.MIN}maxPost(){return ve.MAX}makePost(e,n){const s=nt(e);return new ve(n,s)}toString(){return".value"}}const eC=new ZS;/**
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
 */function f_(i){return{type:"value",snapshotNode:i}}function mi(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function Ps(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function As(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function tC(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
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
 */class rd{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(Ps(n,f)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(mi(n,s)):d.trackChildChange(As(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild($e,(l,u)=>{n.hasChild(l)||s.trackChildChange(Ps(l,u))}),n.isLeafNode()||n.forEachChild($e,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(As(l,u,d))}else s.trackChildChange(mi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ue.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class bs{constructor(e){this.indexedFilter_=new rd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=bs.getStartPost_(e),this.endPost_=bs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new ve(n,s))||(s=ue.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ue.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(ue.EMPTY_NODE);const u=this;return n.forEachChild($e,(d,f)=>{u.matches(new ve(d,f))||(l=l.updateImmediateChild(d,ue.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class nC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new bs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new ve(n,s))||(s=ue.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=ue.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=ue.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(ue.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,ue.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const _=this.index_.getCompare();d=(y,N)=>_(N,y)}else d=this.index_.getCompare();const f=e;U(f.numChildren()===this.limit_,"");const p=new ve(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),w=this.rangedFilter_.matches(p);if(f.hasChild(n)){const _=f.getImmediateChild(n);let y=l.getChildAfterChild(this.index_,g,this.reverse_);for(;y!=null&&(y.name===n||f.hasChild(y.name));)y=l.getChildAfterChild(this.index_,y,this.reverse_);const N=y==null?1:d(y,p);if(w&&!s.isEmpty()&&N>=0)return u!=null&&u.trackChildChange(As(n,s,_)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(Ps(n,_));const M=f.updateImmediateChild(n,ue.EMPTY_NODE);return y!=null&&this.rangedFilter_.matches(y)?(u!=null&&u.trackChildChange(mi(y.name,y.node)),M.updateImmediateChild(y.name,y.node)):M}}else return s.isEmpty()?e:w&&d(g,p)>=0?(u!=null&&(u.trackChildChange(Ps(g.name,g.node)),u.trackChildChange(mi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,ue.EMPTY_NODE)):e}}/**
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
 */class id{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pi}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Tr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new id;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rC(i){return i.loadsAllData()?new rd(i.getIndex()):i.hasLimit()?new nC(i):new bs(i)}function Im(i){const e={};if(i.isDefault())return e;let n;if(i.index_===$e?n="$priority":i.index_===eC?n="$value":i.index_===ui?n="$key":(U(i.index_ instanceof JS,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=rt(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=rt(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+rt(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=rt(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+rt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function km(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==$e&&(e.i=i.index_.toString()),e}/**
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
 */class Cl extends i_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Ws("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=Cl.getListenId_(e,s),f={};this.listens_[d]=f;const p=Im(e._queryParams);this.restRequest_(u+".json",p,(g,w)=>{let _=w;if(g===404&&(_=null,g=null),g===null&&this.onDataUpdate_(u,_,!1,s),di(this.listens_,d)===f){let y;g?g===401?y="permission_denied":y="rest_error:"+g:y="ok",l(y,null)}})}unlisten(e,n){const s=Cl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Im(e._queryParams),s=e._path.toString(),l=new Ls;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ei(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=ks(f.responseText)}catch{gt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&gt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
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
 */class iC{constructor(){this.rootNode_=ue.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Il(){return{value:null,children:new Map}}function p_(i,e,n){if(we(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=_e(e);i.children.has(s)||i.children.set(s,Il());const l=i.children.get(s);e=Fe(e),p_(l,e,n)}}function vc(i,e,n){i.value!==null?n(e,i.value):sC(i,(s,l)=>{const u=new De(e.toString()+"/"+s);vc(l,u,n)})}function sC(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class oC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&at(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
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
 */const Tm=10*1e3,lC=30*1e3,aC=5*60*1e3;class uC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new oC(e);const s=Tm+(lC-Tm)*Math.random();Es(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;at(e,(l,u)=>{u>0&&cn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),Es(this.reportStats_.bind(this),Math.floor(Math.random()*2*aC))}}/**
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
 */var Yt;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yt||(Yt={}));function sd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function od(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ld(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
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
 */class kl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Yt.ACK_USER_WRITE,this.source=sd()}operationForChild(e){if(we(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new De(e));return new kl(Re(),n,this.revert)}}else return U(_e(this.path)===e,"operationForChild called for unrelated child."),new kl(Fe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Os{constructor(e,n){this.source=e,this.path=n,this.type=Yt.LISTEN_COMPLETE}operationForChild(e){return we(this.path)?new Os(this.source,Re()):new Os(this.source,Fe(this.path))}}/**
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
 */class Nr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Yt.OVERWRITE}operationForChild(e){return we(this.path)?new Nr(this.source,Re(),this.snap.getImmediateChild(e)):new Nr(this.source,Fe(this.path),this.snap)}}/**
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
 */class gi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Yt.MERGE}operationForChild(e){if(we(this.path)){const n=this.children.subtree(new De(e));return n.isEmpty()?null:n.value?new Nr(this.source,Re(),n.value):new gi(this.source,Re(),n)}else return U(_e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gi(this.source,Fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class xr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(we(e))return this.isFullyInitialized()&&!this.filtered_;const n=_e(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class cC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function dC(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(tC(d.childName,d.snapshotNode))}),_s(i,l,"child_removed",e,s,n),_s(i,l,"child_added",e,s,n),_s(i,l,"child_moved",u,s,n),_s(i,l,"child_changed",e,s,n),_s(i,l,"value",e,s,n),l}function _s(i,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>fC(i,f,p)),d.forEach(f=>{const p=hC(i,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,i.query_))})})}function hC(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function fC(i,e,n){if(e.childName==null||n.childName==null)throw yi("Should only compare child_ events.");const s=new ve(e.childName,e.snapshotNode),l=new ve(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
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
 */function jl(i,e){return{eventCache:i,serverCache:e}}function Ss(i,e,n,s){return jl(new xr(e,n,s),i.serverCache)}function m_(i,e,n,s){return jl(i.eventCache,new xr(e,n,s))}function yc(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Rr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
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
 */let nc;const pC=()=>(nc||(nc=new kt(JE)),nc);class Me{static fromObject(e){let n=new Me(null);return at(e,(s,l)=>{n=n.set(new De(s),l)}),n}constructor(e,n=pC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Re(),value:this.value};if(we(e))return null;{const s=_e(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Fe(e),n);return u!=null?{path:Ve(new De(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(we(e))return this;{const n=_e(e),s=this.children.get(n);return s!==null?s.subtree(Fe(e)):new Me(null)}}set(e,n){if(we(e))return new Me(n,this.children);{const s=_e(e),u=(this.children.get(s)||new Me(null)).set(Fe(e),n),d=this.children.insert(s,u);return new Me(this.value,d)}}remove(e){if(we(e))return this.children.isEmpty()?new Me(null):new Me(null,this.children);{const n=_e(e),s=this.children.get(n);if(s){const l=s.remove(Fe(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new Me(null):new Me(this.value,u)}else return this}}get(e){if(we(e))return this.value;{const n=_e(e),s=this.children.get(n);return s?s.get(Fe(e)):null}}setTree(e,n){if(we(e))return n;{const s=_e(e),u=(this.children.get(s)||new Me(null)).setTree(Fe(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new Me(this.value,d)}}fold(e){return this.fold_(Re(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Ve(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Re(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(we(e))return null;{const u=_e(e),d=this.children.get(u);return d?d.findOnPath_(Fe(e),Ve(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Re(),n)}foreachOnPath_(e,n,s){if(we(e))return this;{this.value&&s(n,this.value);const l=_e(e),u=this.children.get(l);return u?u.foreachOnPath_(Fe(e),Ve(n,l),s):new Me(null)}}foreach(e){this.foreach_(Re(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new Me(null))}}function Cs(i,e,n){if(we(e))return new Jt(new Me(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=It(l,e);return u=u.updateChild(d,n),new Jt(i.writeTree_.set(l,u))}else{const l=new Me(n),u=i.writeTree_.setTree(e,l);return new Jt(u)}}}function wc(i,e,n){let s=i;return at(n,(l,u)=>{s=Cs(s,Ve(e,l),u)}),s}function Nm(i,e){if(we(e))return Jt.empty();{const n=i.writeTree_.setTree(e,new Me(null));return new Jt(n)}}function Ec(i,e){return Ar(i,e)!=null}function Ar(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(It(n.path,e)):null}function xm(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(s,l)=>{e.push(new ve(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ve(s,l.value))}),e}function er(i,e){if(we(e))return i;{const n=Ar(i,e);return n!=null?new Jt(new Me(n)):new Jt(i.writeTree_.subtree(e))}}function Sc(i){return i.writeTree_.isEmpty()}function _i(i,e){return g_(Re(),i.writeTree_,e)}function g_(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(U(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=g_(Ve(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Ve(i,".priority"),s)),n}}/**
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
 */function ad(i,e){return w_(e,i)}function mC(i,e,n,s,l){U(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=Cs(i.visibleWrites,e,n)),i.lastWriteId=s}function gC(i,e,n,s){U(s>i.lastWriteId,"Stacking an older merge on top of newer ones"),i.allWrites.push({path:e,children:n,writeId:s,visible:!0}),i.visibleWrites=wc(i.visibleWrites,e,n),i.lastWriteId=s}function _C(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function vC(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&yC(f,s.path)?l=!1:Ut(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return wC(i),!0;if(s.snap)i.visibleWrites=Nm(i.visibleWrites,s.path);else{const f=s.children;at(f,p=>{i.visibleWrites=Nm(i.visibleWrites,Ve(s.path,p))})}return!0}else return!1}function yC(i,e){if(i.snap)return Ut(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&Ut(Ve(i.path,n),e))return!0;return!1}function wC(i){i.visibleWrites=__(i.allWrites,EC,Re()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function EC(i){return i.visible}function __(i,e,n){let s=Jt.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let f;if(u.snap)Ut(n,d)?(f=It(n,d),s=Cs(s,f,u.snap)):Ut(d,n)&&(f=It(d,n),s=Cs(s,Re(),u.snap.getChild(f)));else if(u.children){if(Ut(n,d))f=It(n,d),s=wc(s,f,u.children);else if(Ut(d,n))if(f=It(d,n),we(f))s=wc(s,Re(),u.children);else{const p=di(u.children,_e(f));if(p){const g=p.getChild(Fe(f));s=Cs(s,Re(),g)}}}else throw yi("WriteRecord should have .snap or .children")}}return s}function v_(i,e,n,s,l){if(!s&&!l){const u=Ar(i.visibleWrites,e);if(u!=null)return u;{const d=er(i.visibleWrites,e);if(Sc(d))return n;if(n==null&&!Ec(d,Re()))return null;{const f=n||ue.EMPTY_NODE;return _i(d,f)}}}else{const u=er(i.visibleWrites,e);if(!l&&Sc(u))return n;if(!l&&n==null&&!Ec(u,Re()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Ut(g.path,e)||Ut(e,g.path))},f=__(i.allWrites,d,e),p=n||ue.EMPTY_NODE;return _i(f,p)}}}function SC(i,e,n){let s=ue.EMPTY_NODE;const l=Ar(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild($e,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=er(i.visibleWrites,e);return n.forEachChild($e,(d,f)=>{const p=_i(er(u,new De(d)),f);s=s.updateImmediateChild(d,p)}),xm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=er(i.visibleWrites,e);return xm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function CC(i,e,n,s,l){U(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Ve(e,n);if(Ec(i.visibleWrites,u))return null;{const d=er(i.visibleWrites,u);return Sc(d)?l.getChild(n):_i(d,l.getChild(n))}}function IC(i,e,n,s){const l=Ve(e,n),u=Ar(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=er(i.visibleWrites,l);return _i(d,s.getNode().getImmediateChild(n))}else return null}function kC(i,e){return Ar(i.visibleWrites,e)}function TC(i,e,n,s,l,u,d){let f;const p=er(i.visibleWrites,e),g=Ar(p,Re());if(g!=null)f=g;else if(n!=null)f=_i(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const w=[],_=d.getCompare(),y=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let N=y.getNext();for(;N&&w.length<l;)_(N,s)!==0&&w.push(N),N=y.getNext();return w}else return[]}function NC(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function Tl(i,e,n,s){return v_(i.writeTree,i.treePath,e,n,s)}function ud(i,e){return SC(i.writeTree,i.treePath,e)}function Rm(i,e,n,s){return CC(i.writeTree,i.treePath,e,n,s)}function Nl(i,e){return kC(i.writeTree,Ve(i.treePath,e))}function xC(i,e,n,s,l,u){return TC(i.writeTree,i.treePath,e,n,s,l,u)}function cd(i,e,n){return IC(i.writeTree,i.treePath,e,n)}function y_(i,e){return w_(Ve(i.treePath,e),i.writeTree)}function w_(i,e){return{treePath:i,writeTree:e}}/**
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
 */class RC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,As(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Ps(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,mi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,As(s,e.snapshotNode,l.oldSnap));else throw yi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class PC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const E_=new PC;class dd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new xr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rr(this.viewCache_),u=xC(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
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
 */function AC(i){return{filter:i}}function bC(i,e){U(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function OC(i,e,n,s,l){const u=new RC;let d,f;if(n.type===Yt.OVERWRITE){const g=n;g.source.fromUser?d=Cc(i,e,g.path,g.snap,s,l,u):(U(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!we(g.path),d=xl(i,e,g.path,g.snap,s,l,f,u))}else if(n.type===Yt.MERGE){const g=n;g.source.fromUser?d=LC(i,e,g.path,g.children,s,l,u):(U(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=Ic(i,e,g.path,g.children,s,l,f,u))}else if(n.type===Yt.ACK_USER_WRITE){const g=n;g.revert?d=UC(i,e,g.path,s,l,u):d=MC(i,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Yt.LISTEN_COMPLETE)d=FC(i,e,n.path,s,u);else throw yi("Unknown operation type: "+n.type);const p=u.getChanges();return DC(e,d,p),{viewCache:d,changes:p}}function DC(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=yc(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(f_(yc(e)))}}function S_(i,e,n,s,l,u){const d=e.eventCache;if(Nl(s,n)!=null)return e;{let f,p;if(we(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Rr(e),w=g instanceof ue?g:ue.EMPTY_NODE,_=ud(s,w);f=i.filter.updateFullNode(e.eventCache.getNode(),_,u)}else{const g=Tl(s,Rr(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=_e(n);if(g===".priority"){U(tr(n)===1,"Can't have a priority with additional path components");const w=d.getNode();p=e.serverCache.getNode();const _=Rm(s,n,w,p);_!=null?f=i.filter.updatePriority(w,_):f=d.getNode()}else{const w=Fe(n);let _;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const y=Rm(s,n,d.getNode(),p);y!=null?_=d.getNode().getImmediateChild(g).updateChild(w,y):_=d.getNode().getImmediateChild(g)}else _=cd(s,g,e.serverCache);_!=null?f=i.filter.updateChild(d.getNode(),g,_,w,l,u):f=d.getNode()}}return Ss(e,f,d.isFullyInitialized()||we(n),i.filter.filtersNodes())}}function xl(i,e,n,s,l,u,d,f){const p=e.serverCache;let g;const w=d?i.filter:i.filter.getIndexedFilter();if(we(n))g=w.updateFullNode(p.getNode(),s,null);else if(w.filtersNodes()&&!p.isFiltered()){const N=p.getNode().updateChild(n,s);g=w.updateFullNode(p.getNode(),N,null)}else{const N=_e(n);if(!p.isCompleteForPath(n)&&tr(n)>1)return e;const x=Fe(n),z=p.getNode().getImmediateChild(N).updateChild(x,s);N===".priority"?g=w.updatePriority(p.getNode(),z):g=w.updateChild(p.getNode(),N,z,x,E_,null)}const _=m_(e,g,p.isFullyInitialized()||we(n),w.filtersNodes()),y=new dd(l,_,u);return S_(i,_,n,l,y,f)}function Cc(i,e,n,s,l,u,d){const f=e.eventCache;let p,g;const w=new dd(l,e,u);if(we(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),p=Ss(e,g,!0,i.filter.filtersNodes());else{const _=_e(n);if(_===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),p=Ss(e,g,f.isFullyInitialized(),f.isFiltered());else{const y=Fe(n),N=f.getNode().getImmediateChild(_);let x;if(we(y))x=s;else{const M=w.getCompleteChild(_);M!=null?Zc(y)===".priority"&&M.getChild(o_(y)).isEmpty()?x=M:x=M.updateChild(y,s):x=ue.EMPTY_NODE}if(N.equals(x))p=e;else{const M=i.filter.updateChild(f.getNode(),_,x,y,w,d);p=Ss(e,M,f.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function Pm(i,e){return i.eventCache.isCompleteForChild(e)}function LC(i,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const w=Ve(n,p);Pm(e,_e(w))&&(f=Cc(i,f,w,g,l,u,d))}),s.foreach((p,g)=>{const w=Ve(n,p);Pm(e,_e(w))||(f=Cc(i,f,w,g,l,u,d))}),f}function Am(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Ic(i,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;we(n)?g=s:g=new Me(null).setTree(n,s);const w=e.serverCache.getNode();return g.children.inorderTraversal((_,y)=>{if(w.hasChild(_)){const N=e.serverCache.getNode().getImmediateChild(_),x=Am(i,N,y);p=xl(i,p,new De(_),x,l,u,d,f)}}),g.children.inorderTraversal((_,y)=>{const N=!e.serverCache.isCompleteForChild(_)&&y.value===null;if(!w.hasChild(_)&&!N){const x=e.serverCache.getNode().getImmediateChild(_),M=Am(i,x,y);p=xl(i,p,new De(_),M,l,u,d,f)}}),p}function MC(i,e,n,s,l,u,d){if(Nl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(we(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return xl(i,e,n,p.getNode().getChild(n),l,u,f,d);if(we(n)){let g=new Me(null);return p.getNode().forEachChild(ui,(w,_)=>{g=g.set(new De(w),_)}),Ic(i,e,n,g,l,u,f,d)}else return e}else{let g=new Me(null);return s.foreach((w,_)=>{const y=Ve(n,w);p.isCompleteForPath(y)&&(g=g.set(w,p.getNode().getChild(y)))}),Ic(i,e,n,g,l,u,f,d)}}function FC(i,e,n,s,l){const u=e.serverCache,d=m_(e,u.getNode(),u.isFullyInitialized()||we(n),u.isFiltered());return S_(i,d,n,s,E_,l)}function UC(i,e,n,s,l,u){let d;if(Nl(s,n)!=null)return e;{const f=new dd(s,e,l),p=e.eventCache.getNode();let g;if(we(n)||_e(n)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=Tl(s,Rr(e));else{const _=e.serverCache.getNode();U(_ instanceof ue,"serverChildren would be complete if leaf node"),w=ud(s,_)}w=w,g=i.filter.updateFullNode(p,w,u)}else{const w=_e(n);let _=cd(s,w,e.serverCache);_==null&&e.serverCache.isCompleteForChild(w)&&(_=p.getImmediateChild(w)),_!=null?g=i.filter.updateChild(p,w,_,Fe(n),f,u):e.eventCache.getNode().hasChild(w)?g=i.filter.updateChild(p,w,ue.EMPTY_NODE,Fe(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Tl(s,Rr(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||Nl(s,Re())!=null,Ss(e,g,d,i.filter.filtersNodes())}}/**
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
 */class jC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new rd(s.getIndex()),u=rC(s);this.processor_=AC(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(ue.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(ue.EMPTY_NODE,f.getNode(),null),w=new xr(p,d.isFullyInitialized(),l.filtersNodes()),_=new xr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=jl(_,w),this.eventGenerator_=new cC(this.query_)}get query(){return this.query_}}function zC(i){return i.viewCache_.serverCache.getNode()}function WC(i,e){const n=Rr(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!we(e)&&!n.getImmediateChild(_e(e)).isEmpty())?n.getChild(e):null}function bm(i){return i.eventRegistrations_.length===0}function HC(i,e){i.eventRegistrations_.push(e)}function Om(i,e,n){const s=[];if(n){U(e==null,"A cancel should cancel all event registrations.");const l=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=l}else i.eventRegistrations_=[];return s}function Dm(i,e,n,s){e.type===Yt.MERGE&&e.source.queryId!==null&&(U(Rr(i.viewCache_),"We should always have a full cache before handling merges"),U(yc(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=OC(i.processor_,l,e,n,s);return bC(i.processor_,u.viewCache),U(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,C_(i,u.changes,u.viewCache.eventCache.getNode(),null)}function BC(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($e,(u,d)=>{s.push(mi(u,d))}),n.isFullyInitialized()&&s.push(f_(n.getNode())),C_(i,s,n.getNode(),e)}function C_(i,e,n,s){const l=s?[s]:i.eventRegistrations_;return dC(i.eventGenerator_,e,n,l)}/**
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
 */let Rl;class VC{constructor(){this.views=new Map}}function $C(i){U(!Rl,"__referenceConstructor has already been defined"),Rl=i}function GC(){return U(Rl,"Reference.ts has not been loaded"),Rl}function qC(i){return i.views.size===0}function hd(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return U(u!=null,"SyncTree gave us an op for an invalid query."),Dm(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(Dm(d,e,n,s));return u}}function KC(i,e,n,s,l){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let f=Tl(n,l?s:null),p=!1;f?p=!0:s instanceof ue?(f=ud(n,s),p=!1):(f=ue.EMPTY_NODE,p=!1);const g=jl(new xr(f,p,!1),new xr(s,l,!1));return new jC(e,g)}return d}function QC(i,e,n,s,l,u){const d=KC(i,e,s,l,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),HC(d,n),BC(d,n)}function YC(i,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=nr(i);if(l==="default")for(const[p,g]of i.views.entries())d=d.concat(Om(g,n,s)),bm(g)&&(i.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=i.views.get(l);p&&(d=d.concat(Om(p,n,s)),bm(p)&&(i.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!nr(i)&&u.push(new(GC())(e._repo,e._path)),{removed:u,events:d}}function I_(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ci(i,e){let n=null;for(const s of i.views.values())n=n||WC(s,e);return n}function k_(i,e){if(e._queryParams.loadsAllData())return zl(i);{const s=e._queryIdentifier;return i.views.get(s)}}function T_(i,e){return k_(i,e)!=null}function nr(i){return zl(i)!=null}function zl(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Pl;function XC(i){U(!Pl,"__referenceConstructor has already been defined"),Pl=i}function JC(){return U(Pl,"Reference.ts has not been loaded"),Pl}let ZC=1;class Lm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Me(null),this.pendingWriteTree_=NC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function N_(i,e,n,s,l){return mC(i.pendingWriteTree_,e,n,s,l),l?ki(i,new Nr(sd(),e,n)):[]}function eI(i,e,n,s){gC(i.pendingWriteTree_,e,n,s);const l=Me.fromObject(n);return ki(i,new gi(sd(),e,l))}function Yn(i,e,n=!1){const s=_C(i.pendingWriteTree_,e);if(vC(i.pendingWriteTree_,e)){let u=new Me(null);return s.snap!=null?u=u.set(Re(),!0):at(s.children,d=>{u=u.set(new De(d),!0)}),ki(i,new kl(s.path,u,n))}else return[]}function Wl(i,e,n){return ki(i,new Nr(od(),e,n))}function tI(i,e,n){const s=Me.fromObject(n);return ki(i,new gi(od(),e,s))}function nI(i,e){return ki(i,new Os(od(),e))}function rI(i,e,n){const s=pd(i,n);if(s){const l=md(s),u=l.path,d=l.queryId,f=It(u,e),p=new Os(ld(d),f);return gd(i,u,p)}else return[]}function kc(i,e,n,s,l=!1){const u=e._path,d=i.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||T_(d,e))){const p=YC(d,e,n,s);qC(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const w=g.findIndex(y=>y._queryParams.loadsAllData())!==-1,_=i.syncPointTree_.findOnPath(u,(y,N)=>nr(N));if(w&&!_){const y=i.syncPointTree_.subtree(u);if(!y.isEmpty()){const N=oI(y);for(let x=0;x<N.length;++x){const M=N[x],z=M.query,me=P_(i,M);i.listenProvider_.startListening(Is(z),Al(i,z),me.hashFn,me.onComplete)}}}!_&&g.length>0&&!s&&(w?i.listenProvider_.stopListening(Is(e),null):g.forEach(y=>{const N=i.queryToTagMap.get(Hl(y));i.listenProvider_.stopListening(Is(y),N)}))}lI(i,g)}return f}function iI(i,e,n,s){const l=pd(i,s);if(l!=null){const u=md(l),d=u.path,f=u.queryId,p=It(d,e),g=new Nr(ld(f),p,n);return gd(i,d,g)}else return[]}function sI(i,e,n,s){const l=pd(i,s);if(l){const u=md(l),d=u.path,f=u.queryId,p=It(d,e),g=Me.fromObject(n),w=new gi(ld(f),p,g);return gd(i,d,w)}else return[]}function Mm(i,e,n,s=!1){const l=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(l,(y,N)=>{const x=It(y,l);u=u||ci(N,x),d=d||nr(N)});let f=i.syncPointTree_.get(l);f?(d=d||nr(f),u=u||ci(f,Re())):(f=new VC,i.syncPointTree_=i.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=ue.EMPTY_NODE,i.syncPointTree_.subtree(l).foreachChild((N,x)=>{const M=ci(x,Re());M&&(u=u.updateImmediateChild(N,M))}));const g=T_(f,e);if(!g&&!e._queryParams.loadsAllData()){const y=Hl(e);U(!i.queryToTagMap.has(y),"View does not exist, but we have a tag");const N=aI();i.queryToTagMap.set(y,N),i.tagToQueryMap.set(N,y)}const w=ad(i.pendingWriteTree_,l);let _=QC(f,e,n,w,u,p);if(!g&&!d&&!s){const y=k_(f,e);_=_.concat(uI(i,e,y))}return _}function fd(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const p=It(d,e),g=ci(f,p);if(g)return g});return v_(l,e,u,n,!0)}function ki(i,e){return x_(e,i.syncPointTree_,null,ad(i.pendingWriteTree_,Re()))}function x_(i,e,n,s){if(we(i.path))return R_(i,e,n,s);{const l=e.get(Re());n==null&&l!=null&&(n=ci(l,Re()));let u=[];const d=_e(i.path),f=i.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,w=y_(s,d);u=u.concat(x_(f,p,g,w))}return l&&(u=u.concat(hd(l,i,s,n))),u}}function R_(i,e,n,s){const l=e.get(Re());n==null&&l!=null&&(n=ci(l,Re()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=y_(s,d),w=i.operationForChild(d);w&&(u=u.concat(R_(w,f,p,g)))}),l&&(u=u.concat(hd(l,i,s,n))),u}function P_(i,e){const n=e.query,s=Al(i,n);return{hashFn:()=>(zC(e)||ue.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?rI(i,n._path,s):nI(i,n._path);{const u=tS(l,n);return kc(i,n,null,u)}}}}function Al(i,e){const n=Hl(e);return i.queryToTagMap.get(n)}function Hl(i){return i._path.toString()+"$"+i._queryIdentifier}function pd(i,e){return i.tagToQueryMap.get(e)}function md(i){const e=i.indexOf("$");return U(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new De(i.substr(0,e))}}function gd(i,e,n){const s=i.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const l=ad(i.pendingWriteTree_,e);return hd(s,n,l,null)}function oI(i){return i.fold((e,n,s)=>{if(n&&nr(n))return[zl(n)];{let l=[];return n&&(l=I_(n)),at(s,(u,d)=>{l=l.concat(d)}),l}})}function Is(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(JC())(i._repo,i._path):i}function lI(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Hl(s),u=i.queryToTagMap.get(l);i.queryToTagMap.delete(l),i.tagToQueryMap.delete(u)}}}function aI(){return ZC++}function uI(i,e,n){const s=e._path,l=Al(i,e),u=P_(i,n),d=i.listenProvider_.startListening(Is(e),l,u.hashFn,u.onComplete),f=i.syncPointTree_.subtree(s);if(l)U(!nr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,w,_)=>{if(!we(g)&&w&&nr(w))return[zl(w).query];{let y=[];return w&&(y=y.concat(I_(w).map(N=>N.query))),at(_,(N,x)=>{y=y.concat(x)}),y}});for(let g=0;g<p.length;++g){const w=p[g];i.listenProvider_.stopListening(Is(w),Al(i,w))}}return d}/**
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
 */class _d{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new _d(n)}node(){return this.node_}}class vd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new vd(this.syncTree_,n)}node(){return fd(this.syncTree_,this.path_)}}const cI=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},Fm=function(i,e,n){if(!i||typeof i!="object")return i;if(U(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return dI(i[".sv"],e,n);if(typeof i[".sv"]=="object")return hI(i[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},dI=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+i)}},hI=function(i,e,n){i.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const l=e.node();if(U(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},A_=function(i,e,n,s){return yd(e,new vd(n,i),s)},b_=function(i,e,n){return yd(i,new _d(e),n)};function yd(i,e,n){const s=i.getPriority().val(),l=Fm(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=Fm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new et(f,nt(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new et(l))),d.forEachChild($e,(f,p)=>{const g=yd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
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
 */class wd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ed(i,e){let n=e instanceof De?e:new De(e),s=i,l=_e(n);for(;l!==null;){const u=di(s.node.children,l)||{children:{},childCount:0};s=new wd(l,s,u),n=Fe(n),l=_e(n)}return s}function Ti(i){return i.node.value}function O_(i,e){i.node.value=e,Tc(i)}function D_(i){return i.node.childCount>0}function fI(i){return Ti(i)===void 0&&!D_(i)}function Bl(i,e){at(i.node.children,(n,s)=>{e(new wd(n,i,s))})}function L_(i,e,n,s){n&&!s&&e(i),Bl(i,l=>{L_(l,e,!0,s)})}function pI(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Bs(i){return new De(i.parent===null?i.name:Bs(i.parent)+"/"+i.name)}function Tc(i){i.parent!==null&&mI(i.parent,i.name,i)}function mI(i,e,n){const s=fI(n),l=cn(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,Tc(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,Tc(i))}/**
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
 */const gI=/[\[\].#$\/\u0000-\u001F\u007F]/,_I=/[\[\].#$\u0000-\u001F\u007F]/,rc=10*1024*1024,Sd=function(i){return typeof i=="string"&&i.length!==0&&!gI.test(i)},M_=function(i){return typeof i=="string"&&i.length!==0&&!_I.test(i)},vI=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),M_(i)},yI=function(i){return i===null||typeof i=="string"||typeof i=="number"&&!Kc(i)||i&&typeof i=="object"&&cn(i,".sv")},F_=function(i,e,n,s){s&&e===void 0||Vl(Ol(i,"value"),e,n)},Vl=function(i,e,n){const s=n instanceof De?new LS(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+yr(s));if(typeof e=="function")throw new Error(i+"contains a function "+yr(s)+" with contents = "+e.toString());if(Kc(e))throw new Error(i+"contains "+e.toString()+" "+yr(s));if(typeof e=="string"&&e.length>rc/3&&Dl(e)>rc)throw new Error(i+"contains a string greater than "+rc+" utf8 bytes "+yr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(at(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!Sd(d)))throw new Error(i+" contains an invalid key ("+d+") "+yr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);MS(s,d),Vl(i,f,s),FS(s)}),l&&u)throw new Error(i+' contains ".value" child '+yr(s)+" in addition to actual children.")}},wI=function(i,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=Rs(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!Sd(u[d]))throw new Error(i+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(DS);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Ut(l,s))throw new Error(i+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},EI=function(i,e,n,s){const l=Ol(i,"values");if(typeof e!="object"||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];at(e,(d,f)=>{const p=new De(d);if(Vl(l,f,Ve(n,p)),Zc(p)===".priority"&&!yI(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),wI(l,u)},U_=function(i,e,n,s){if(!M_(n))throw new Error(Ol(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},SI=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),U_(i,e,n)},Cd=function(i,e){if(_e(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},CI=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!vI(n))throw new Error(Ol(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class II{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $l(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!ed(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function j_(i,e,n){$l(i,n),z_(i,s=>ed(s,e))}function Zt(i,e,n){$l(i,n),z_(i,s=>Ut(s,e)||Ut(e,s))}function z_(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(kI(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function kI(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();ws&&lt("event: "+n.toString()),Ii(s)}}}/**
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
 */const TI="repo_interrupt",NI=25;class xI{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new II,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Il(),this.transactionQueueTree_=new wd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function RI(i,e,n){if(i.stats_=Xc(i.repoInfo_),i.forceRestClient_||sS())i.server_=new Cl(i.repoInfo_,(s,l,u,d)=>{Um(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>jm(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Cn(i.repoInfo_,e,(s,l,u,d)=>{Um(i,s,l,u,d)},s=>{jm(i,s)},s=>{PI(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=cS(i.repoInfo_,()=>new uC(i.stats_,i.server_)),i.infoData_=new iC,i.infoSyncTree_=new Lm({startListening:(s,l,u,d)=>{let f=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(f=Wl(i.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Id(i,"connected",!1),i.serverSyncTree_=new Lm({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);Zt(i.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function W_(i){const n=i.infoData_.getNode(new De(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gl(i){return cI({timestamp:W_(i)})}function Um(i,e,n,s,l){i.dataUpdateCount++;const u=new De(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=hl(n,g=>nt(g));d=sI(i.serverSyncTree_,u,p,l)}else{const p=nt(n);d=iI(i.serverSyncTree_,u,p,l)}else if(s){const p=hl(n,g=>nt(g));d=tI(i.serverSyncTree_,u,p)}else{const p=nt(n);d=Wl(i.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=vi(i,u)),Zt(i.eventQueue_,f,d)}function jm(i,e){Id(i,"connected",e),e===!1&&OI(i)}function PI(i,e){at(e,(n,s)=>{Id(i,n,s)})}function Id(i,e,n){const s=new De("/.info/"+e),l=nt(n);i.infoData_.updateSnapshot(s,l);const u=Wl(i.infoSyncTree_,s,l);Zt(i.eventQueue_,s,u)}function kd(i){return i.nextWriteId_++}function AI(i,e,n,s,l){ql(i,"set",{path:e.toString(),value:n,priority:s});const u=Gl(i),d=nt(n,s),f=fd(i.serverSyncTree_,e),p=b_(d,f,u),g=kd(i),w=N_(i.serverSyncTree_,e,p,g,!0);$l(i.eventQueue_,w),i.server_.put(e.toString(),d.val(!0),(y,N)=>{const x=y==="ok";x||gt("set at "+e+" failed: "+y);const M=Yn(i.serverSyncTree_,g,!x);Zt(i.eventQueue_,e,M),Nc(i,l,y,N)});const _=Nd(i,e);vi(i,_),Zt(i.eventQueue_,_,[])}function bI(i,e,n,s){ql(i,"update",{path:e.toString(),value:n});let l=!0;const u=Gl(i),d={};if(at(n,(f,p)=>{l=!1,d[f]=A_(Ve(e,f),nt(p),i.serverSyncTree_,u)}),l)lt("update() called with empty data.  Don't do anything."),Nc(i,s,"ok",void 0);else{const f=kd(i),p=eI(i.serverSyncTree_,e,d,f);$l(i.eventQueue_,p),i.server_.merge(e.toString(),n,(g,w)=>{const _=g==="ok";_||gt("update at "+e+" failed: "+g);const y=Yn(i.serverSyncTree_,f,!_),N=y.length>0?vi(i,e):e;Zt(i.eventQueue_,N,y),Nc(i,s,g,w)}),at(n,g=>{const w=Nd(i,Ve(e,g));vi(i,w)}),Zt(i.eventQueue_,e,[])}}function OI(i){ql(i,"onDisconnectEvents");const e=Gl(i),n=Il();vc(i.onDisconnect_,Re(),(l,u)=>{const d=A_(l,u,i.serverSyncTree_,e);p_(n,l,d)});let s=[];vc(n,Re(),(l,u)=>{s=s.concat(Wl(i.serverSyncTree_,l,u));const d=Nd(i,l);vi(i,d)}),i.onDisconnect_=Il(),Zt(i.eventQueue_,Re(),s)}function DI(i,e,n){let s;_e(e._path)===".info"?s=Mm(i.infoSyncTree_,e,n):s=Mm(i.serverSyncTree_,e,n),j_(i.eventQueue_,e._path,s)}function LI(i,e,n){let s;_e(e._path)===".info"?s=kc(i.infoSyncTree_,e,n):s=kc(i.serverSyncTree_,e,n),j_(i.eventQueue_,e._path,s)}function MI(i){i.persistentConnection_&&i.persistentConnection_.interrupt(TI)}function ql(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),lt(n,...e)}function Nc(i,e,n,s){e&&Ii(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function H_(i,e,n){return fd(i.serverSyncTree_,e,n)||ue.EMPTY_NODE}function Td(i,e=i.transactionQueueTree_){if(e||Kl(i,e),Ti(e)){const n=V_(i,e);U(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&FI(i,Bs(e),n)}else D_(e)&&Bl(e,n=>{Td(i,n)})}function FI(i,e,n){const s=n.map(g=>g.currentWriteId),l=H_(i,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const w=n[g];U(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const _=It(e,w.path);u=u.updateChild(_,w.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;i.server_.put(p.toString(),f,g=>{ql(i,"transaction put response",{path:p.toString(),status:g});let w=[];if(g==="ok"){const _=[];for(let y=0;y<n.length;y++)n[y].status=2,w=w.concat(Yn(i.serverSyncTree_,n[y].currentWriteId)),n[y].onComplete&&_.push(()=>n[y].onComplete(null,!0,n[y].currentOutputSnapshotResolved)),n[y].unwatcher();Kl(i,Ed(i.transactionQueueTree_,e)),Td(i,i.transactionQueueTree_),Zt(i.eventQueue_,e,w);for(let y=0;y<_.length;y++)Ii(_[y])}else{if(g==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{gt("transaction at "+p.toString()+" failed: "+g);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=g}vi(i,e)}},d)}function vi(i,e){const n=B_(i,e),s=Bs(n),l=V_(i,n);return UI(i,l,s),s}function UI(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=It(n,p.path);let w=!1,_;if(U(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)w=!0,_=p.abortReason,l=l.concat(Yn(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=NI)w=!0,_="maxretry",l=l.concat(Yn(i.serverSyncTree_,p.currentWriteId,!0));else{const y=H_(i,p.path,d);p.currentInputSnapshot=y;const N=e[f].update(y.val());if(N!==void 0){Vl("transaction failed: Data returned ",N,p.path);let x=nt(N);typeof N=="object"&&N!=null&&cn(N,".priority")||(x=x.updatePriority(y.getPriority()));const z=p.currentWriteId,me=Gl(i),Ee=b_(x,y,me);p.currentOutputSnapshotRaw=x,p.currentOutputSnapshotResolved=Ee,p.currentWriteId=kd(i),d.splice(d.indexOf(z),1),l=l.concat(N_(i.serverSyncTree_,p.path,Ee,p.currentWriteId,p.applyLocally)),l=l.concat(Yn(i.serverSyncTree_,z,!0))}else w=!0,_="nodata",l=l.concat(Yn(i.serverSyncTree_,p.currentWriteId,!0))}Zt(i.eventQueue_,n,l),l=[],w&&(e[f].status=2,function(y){setTimeout(y,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(_==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(_),!1,null))))}Kl(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)Ii(s[f]);Td(i,i.transactionQueueTree_)}function B_(i,e){let n,s=i.transactionQueueTree_;for(n=_e(e);n!==null&&Ti(s)===void 0;)s=Ed(s,n),e=Fe(e),n=_e(e);return s}function V_(i,e){const n=[];return $_(i,e,n),n.sort((s,l)=>s.order-l.order),n}function $_(i,e,n){const s=Ti(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Bl(e,l=>{$_(i,l,n)})}function Kl(i,e){const n=Ti(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,O_(e,n.length>0?n:void 0)}Bl(e,s=>{Kl(i,s)})}function Nd(i,e){const n=Bs(B_(i,e)),s=Ed(i.transactionQueueTree_,e);return pI(s,l=>{ic(i,l)}),ic(i,s),L_(s,l=>{ic(i,l)}),n}function ic(i,e){const n=Ti(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(U(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(U(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Yn(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?O_(e,void 0):n.length=u+1,Zt(i.eventQueue_,Bs(e),l);for(let d=0;d<s.length;d++)Ii(s[d])}}/**
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
 */function jI(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function zI(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):gt(`Invalid query segment '${n}' in query '${i}'`)}return e}const zm=function(i,e){const n=WI(i),s=n.namespace;n.domain==="firebase.com"&&Tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||YE();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Xg(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new De(n.pathString)}},WI=function(i){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let w=i.indexOf("/");w===-1&&(w=i.length);let _=i.indexOf("?");_===-1&&(_=i.length),e=i.substring(0,Math.min(w,_)),w<_&&(l=jI(i.substring(w,_)));const y=zI(i.substring(Math.min(i.length,_)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const N=e.slice(0,g);if(N.toLowerCase()==="localhost")n="localhost";else if(N.split(".").length<=2)n=N;else{const x=e.indexOf(".");s=e.substring(0,x).toLowerCase(),n=e.substring(x+1),u=s}"ns"in y&&(u=y.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
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
 */const Wm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",HI=function(){let i=0;const e=[];return function(n){const s=n===i;i=n;let l;const u=new Array(8);for(l=7;l>=0;l--)u[l]=Wm.charAt(n%64),n=Math.floor(n/64);U(n===0,"Cannot push at time == 0");let d=u.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)d+=Wm.charAt(e[l]);return U(d.length===20,"nextPushId: Length should be 20."),d}}();/**
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
 */class BI{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+rt(this.snapshot.exportVal())}}class VI{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class $I{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class xd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return we(this._path)?null:Zc(this._path)}get ref(){return new ir(this._repo,this._path)}get _queryIdentifier(){const e=km(this._queryParams),n=Qc(e);return n==="{}"?"default":n}get _queryObject(){return km(this._queryParams)}isEqual(e){if(e=Pt(e),!(e instanceof xd))return!1;const n=this._repo===e._repo,s=ed(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+OS(this._path)}}class ir extends xd{constructor(e,n){super(e,n,new id,!1)}get parent(){const e=o_(this._path);return e===null?null:new ir(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new De(e),s=Ds(this.ref,e);return new bl(this._node.getChild(n),s,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new bl(l,Ds(this.ref,s),$e)))}hasChild(e){const n=new De(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Zk(i,e){return i=Pt(i),i._checkNotDeleted("ref"),e!==void 0?Ds(i._root,e):i._root}function Ds(i,e){return i=Pt(i),_e(i._path)===null?SI("child","path",e):U_("child","path",e),new ir(i._repo,Ve(i._path,e))}function eT(i,e){i=Pt(i),Cd("push",i._path),F_("push",e,i._path,!0);const n=W_(i._repo),s=HI(n),l=Ds(i,s),u=Ds(i,s);let d;return e!=null?d=G_(u,e).then(()=>u):d=Promise.resolve(u),l.then=d.then.bind(d),l.catch=d.then.bind(d,void 0),l}function tT(i){return Cd("remove",i._path),G_(i,null)}function G_(i,e){i=Pt(i),Cd("set",i._path),F_("set",e,i._path,!1);const n=new Ls;return AI(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}function nT(i,e){EI("update",e,i._path);const n=new Ls;return bI(i._repo,i._path,e,n.wrapCallback(()=>{})),n.promise}class Rd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new BI("value",this,new bl(e.snapshotNode,new ir(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new VI(this,e,n):null}matches(e){return e instanceof Rd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function GI(i,e,n,s,l){const u=new $I(n,void 0),d=new Rd(u);return DI(i._repo,i,d),()=>LI(i._repo,i,d)}function rT(i,e,n,s){return GI(i,"value",e)}$C(ir);XC(ir);/**
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
 */const qI="FIREBASE_DATABASE_EMULATOR_HOST",xc={};let KI=!1;function QI(i,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),d=wi(u);i.repoInfo_=new Xg(e,d,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(i.authTokenProvider_=s)}function YI(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||Tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=zm(u,l),f=d.repoInfo,p;typeof process<"u"&&lm&&(p=lm[qI]),p?(u=`http://${p}?ns=${f.namespace}`,d=zm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new lS(i.name,i.options,e);CI("Invalid Firebase Database URL",d),we(d.path)||Tn("Database URL must point to the root of a Firebase Database (not including a child path).");const w=JI(f,i,g,new oS(i,n));return new ZI(w,i)}function XI(i,e){const n=xc[e];(!n||n[i.key]!==i)&&Tn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),MI(i),delete n[i.key]}function JI(i,e,n,s){let l=xc[e.name];l||(l={},xc[e.name]=l);let u=l[i.toURLString()];return u&&Tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new xI(i,KI,n,s),l[i.toURLString()]=u,u}class ZI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(RI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ir(this._repo,Re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(XI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Tn("Cannot call "+e+" on a deleted database.")}}function ek(i=ig(),e){const n=Mc(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=_0("database");s&&tk(n,...s)}return n}function tk(i,e,n,s={}){i=Pt(i),i._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=i._repoInternal;if(i._instanceStarted){if(l===i._repoInternal.repoInfo_.host&&Cr(s,u.repoInfo_.emulatorOptions))return;Tn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&Tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new ul(ul.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:v0(s.mockUserToken,i.app.options.projectId);d=new ul(f)}wi(e)&&(Ym(e),Xm("Database",!0)),QI(u,l,s,d)}/**
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
 */function nk(i){VE(Si),hi(new Ir("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return YI(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Zn(am,um,i),Zn(am,um,"esm2017")}Cn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Cn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};nk();const rk={apiKey:"AIzaSyAMDp5WhCZy0tDz-_VcN3bz8HUW2Yp0lw0",authDomain:"personal-portfolio-37a0a.firebaseapp.com",databaseURL:"https://personal-portfolio-37a0a-default-rtdb.firebaseio.com",projectId:"personal-portfolio-37a0a",storageBucket:"personal-portfolio-37a0a.appspot.com",messagingSenderId:"695560029777",appId:"1:695560029777:web:2f666fd6fe7aa39b0c1a70",measurementId:"G-64P0PSRQN5"},q_=rg(rk),ik=HE(q_),iT=ek(q_),sT=new yn,K_=se.createContext();function sk({children:i}){const[e,n]=se.useState(null),[s,l]=se.useState(!0);se.useEffect(()=>ik.onAuthStateChanged(f=>{n(f),l(!1)}),[]);const u={currentUser:e,isAdmin:(e==null?void 0:e.email)==="e2340065@bit.uom.lk"};return O.jsx(K_.Provider,{value:u,children:!s&&i})}function oT(){return se.useContext(K_)}/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Q_=(...i)=>i.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=se.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...f},p)=>se.createElement("svg",{ref:p,...lk,width:e,height:e,stroke:i,strokeWidth:s?Number(n)*24/Number(e):n,className:Q_("lucide",l),...f},[...d.map(([g,w])=>se.createElement(g,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=(i,e)=>{const n=se.forwardRef(({className:s,...l},u)=>se.createElement(ak,{ref:u,iconNode:e,className:Q_(`lucide-${ok(i)}`,s),...l}));return n.displayName=`${i}`,n};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ck=en("Award",uk);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],hk=en("Book",dk);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],pk=en("Briefcase",fk);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],gk=en("House",mk);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]],vk=en("MessageSquareQuote",_k);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]],wk=en("MonitorSmartphone",yk);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],Sk=en("Paintbrush",Ek);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],Ik=en("Palette",Ck);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Tk=en("Search",kk);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],xk=en("Send",Nk);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Pk=en("User",Rk);var sc,Hm;function Ak(){if(Hm)return sc;Hm=1;var i="Expected a function",e=NaN,n="[object Symbol]",s=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,p=typeof Zo=="object"&&Zo&&Zo.Object===Object&&Zo,g=typeof self=="object"&&self&&self.Object===Object&&self,w=p||g||Function("return this")(),_=Object.prototype,y=_.toString,N=Math.max,x=Math.min,M=function(){return w.Date.now()};function z(F,X,H){var le,oe,W,D,Q,$,Se=0,ke=!1,ye=!1,j=!0;if(typeof F!="function")throw new TypeError(i);X=Z(X)||0,Ee(H)&&(ke=!!H.leading,ye="maxWait"in H,W=ye?N(Z(H.maxWait)||0,X):W,j="trailing"in H?!!H.trailing:j);function J(G){var ce=le,Ae=oe;return le=oe=void 0,Se=G,D=F.apply(Ae,ce),D}function B(G){return Se=G,Q=setTimeout(te,X),ke?J(G):D}function C(G){var ce=G-$,Ae=G-Se,ut=X-ce;return ye?x(ut,W-Ae):ut}function R(G){var ce=G-$,Ae=G-Se;return $===void 0||ce>=X||ce<0||ye&&Ae>=W}function te(){var G=M();if(R(G))return ne(G);Q=setTimeout(te,C(G))}function ne(G){return Q=void 0,j&&le?J(G):(le=oe=void 0,D)}function fe(){Q!==void 0&&clearTimeout(Q),Se=0,le=$=oe=Q=void 0}function pe(){return Q===void 0?D:ne(M())}function ae(){var G=M(),ce=R(G);if(le=arguments,oe=this,$=G,ce){if(Q===void 0)return B($);if(ye)return Q=setTimeout(te,X),J($)}return Q===void 0&&(Q=setTimeout(te,X)),D}return ae.cancel=fe,ae.flush=pe,ae}function me(F,X,H){var le=!0,oe=!0;if(typeof F!="function")throw new TypeError(i);return Ee(H)&&(le="leading"in H?!!H.leading:le,oe="trailing"in H?!!H.trailing:oe),z(F,X,{leading:le,maxWait:X,trailing:oe})}function Ee(F){var X=typeof F;return!!F&&(X=="object"||X=="function")}function Ie(F){return!!F&&typeof F=="object"}function Ce(F){return typeof F=="symbol"||Ie(F)&&y.call(F)==n}function Z(F){if(typeof F=="number")return F;if(Ce(F))return e;if(Ee(F)){var X=typeof F.valueOf=="function"?F.valueOf():F;F=Ee(X)?X+"":X}if(typeof F!="string")return F===0?F:+F;F=F.replace(s,"");var H=u.test(F);return H||d.test(F)?f(F.slice(2),H?2:8):l.test(F)?e:+F}return sc=me,sc}var bk=Ak();const Ok=Rc(bk),Dk="/portfolio_web/assets/AINH2-CfjvZ8GA.png",Lk="/portfolio_web/assets/28ddd8026ef34e12f9a9c60c864b3e8e-removebg-preview-CGZkUJwy.webp";function Mk(){const[i,e]=se.useState(!1),[n,s]=se.useState(0),[l,u]=se.useState("home"),[d,f]=se.useState(""),[p,g]=se.useState([]),[w,_]=se.useState(!1),y=se.useRef(null),N=se.useRef(null),x=se.useRef(null),M=se.useRef(null),z=[{icon:O.jsx(gk,{className:"w-4 h-4"}),id:"home",tooltip:"Home"},{icon:O.jsx(Pk,{className:"w-4 h-4"}),id:"about",tooltip:"About"},{icon:O.jsx(hk,{className:"w-4 h-4"}),id:"education-journey",tooltip:"Education Journey"},{icon:O.jsx(wk,{className:"w-4 h-4"}),id:"dexterity",tooltip:"Dexterity"},{icon:O.jsx(ck,{className:"w-4 h-4"}),id:"professional-designations",tooltip:"Certifications"},{icon:O.jsx(pk,{className:"w-4 h-4"}),id:"professional-journey",tooltip:"Professional Journey"},{icon:O.jsx(Sk,{className:"w-4 h-4"}),id:"creative-ventures",tooltip:"Creative Ventures"},{icon:O.jsx(Ik,{className:"w-4 h-4"}),id:"design-scape",tooltip:"Design Scape"},{icon:O.jsx(vk,{className:"w-4 h-4"}),id:"testimonials",tooltip:"Testimonials"},{icon:O.jsx(xk,{className:"w-4 h-4"}),id:"contact",tooltip:"Get in Touch"}];se.useEffect(()=>{const Z=Ok(()=>{const F=window.scrollY;s(F);const X=z.map(H=>document.getElementById(H.id)).filter(Boolean);for(let H of X){const le=H.getBoundingClientRect();if(le.top<=100&&le.bottom>=100){l!==H.id&&u(H.id);break}}},200);return window.addEventListener("scroll",Z,{passive:!0}),()=>window.removeEventListener("scroll",Z)},[l]);const me=(Z,F="")=>{const X=document.getElementById(Z);if(!X)return;const le=X.getBoundingClientRect().top+window.pageYOffset+-80;window.scrollTo({top:le,behavior:"smooth"}),u(Z),F&&Ee(X,F)},Ee=(Z,F)=>{if(!F)return;const X=new RegExp(`(${F})`,"gi");Z.querySelectorAll(".search-highlight").forEach(oe=>{const W=oe.parentNode;W.replaceChild(document.createTextNode(oe.textContent),oe),W.normalize()});const H=document.createTreeWalker(Z,NodeFilter.SHOW_TEXT,{acceptNode:oe=>X.test(oe.textContent)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),le=[];for(;H.nextNode();)le.push(H.currentNode);le.forEach(oe=>{const W=document.createDocumentFragment();let D=0,Q;for(X.lastIndex=0;Q=X.exec(oe.textContent);){const Se=oe.textContent.slice(D,Q.index);Se&&W.appendChild(document.createTextNode(Se));const ke=document.createElement("span");ke.className="search-highlight bg-yellow-300",ke.textContent=Q[0],W.appendChild(ke),D=X.lastIndex}const $=oe.textContent.slice(D);$&&W.appendChild(document.createTextNode($)),oe.parentNode.replaceChild(W,oe)}),setTimeout(()=>{Z.querySelectorAll(".search-highlight").forEach(oe=>{const W=oe.parentNode;W.replaceChild(document.createTextNode(oe.textContent),oe),W.normalize()})},3e3)},Ie=Z=>{Z.preventDefault();const F=d.trim().toLowerCase();if(!F){g([]),_(!1);return}const X=z.map(({id:H,tooltip:le})=>{var $;const oe=document.getElementById(H);if(!oe)return null;const W=($=oe.innerText)==null?void 0:$.toLowerCase(),D=W.indexOf(F);if(D===-1)return null;let Q=W.slice(Math.max(0,D-30),D+F.length+30);return{id:H,tooltip:le,snippet:Q}}).filter(Boolean);g(X),_(!0)};se.useEffect(()=>{const Z=F=>{var X,H,le;(X=y.current)!=null&&X.contains(F.target)||_(!1),!((H=N.current)!=null&&H.contains(F.target))&&!((le=x.current)!=null&&le.contains(F.target))&&e(!1)};return document.addEventListener("mousedown",Z),()=>document.removeEventListener("mousedown",Z)},[]),se.useEffect(()=>{const Z=()=>{window.innerWidth>=768&&e(!1)};return window.addEventListener("resize",Z),()=>window.removeEventListener("resize",Z)},[]);const Ce=Math.min(n/(document.documentElement.scrollHeight-window.innerHeight)*100,100);return O.jsxs(O.Fragment,{children:[O.jsx("div",{style:{width:`${Ce}%`,height:"2px",background:"linear-gradient(to right, #CCFF00, #020408, #FFFFFF)",position:"fixed",top:0,left:0,zIndex:1e3,transition:"width 0.3s ease-in-out",boxShadow:"0 0 10px rgba(249,115,22,0.5)"},role:"progressbar","aria-valuenow":Ce,"aria-valuemin":"0","aria-valuemax":"100","aria-label":"Scroll progress"}),O.jsxs("nav",{ref:M,className:"fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-[#020408]/90 via-[#020408]/80 to-[#020408]/90 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 px-2 py-1.5 flex items-center space-x-3","aria-label":"Main navigation",children:[O.jsx("button",{onClick:()=>me("home"),className:`p-2 rounded-full transition mr-2 ${l==="home"?"text-white bg-gradient-to-br from-[#CCFF00]/80 to-[#020408]/40 shadow-lg scale-110":"text-gray-400 hover:text-white hover:bg-white/10"}`,"aria-label":"Home",children:O.jsx("div",{className:"w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-xs",children:O.jsx("img",{src:Dk,alt:"profile",className:" rounded-full"})})}),O.jsx("div",{className:"hidden md:flex items-center space-x-1",children:z.slice(1).map(Z=>O.jsx("button",{onClick:()=>me(Z.id),className:`relative p-2 rounded-full transition ${l===Z.id?"text-white bg-gradient-to-br from-[#CCFF00]/80 to-[#020408]/40 shadow-lg scale-110":"text-gray-400 hover:text-white hover:bg-white/10"}`,"aria-label":Z.tooltip,children:Z.icon},Z.id))}),O.jsxs("div",{className:"relative md:hidden",children:[O.jsx("button",{ref:x,onClick:()=>e(!i),className:"p-2 rounded-full text-white hover:bg-white/10 transition","aria-expanded":i,"aria-controls":"mobile-menu","aria-label":i?"Close menu":"Open menu",children:O.jsxs("div",{className:"w-4 h-3 flex flex-col justify-between",children:[O.jsx("span",{className:`h-0.5 w-full bg-white rounded transition ${i?"rotate-45 translate-y-1":""}`}),O.jsx("span",{className:`h-0.5 w-full bg-white rounded transition ${i?"opacity-0":""}`}),O.jsx("span",{className:`h-0.5 w-full bg-white rounded transition ${i?"-rotate-45 -translate-y-1":""}`})]})}),O.jsx("div",{id:"mobile-menu",ref:N,className:`absolute bottom-full mb-3 left-[1px] w-48 origin-bottom transform transition-all duration-300 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/20 z-50 ${i?"max-h-96 opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"}`,children:O.jsx("div",{className:"p-2 space-y-1",children:z.slice(1).map(Z=>O.jsxs("button",{onClick:()=>{me(Z.id),e(!1)},className:`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition ${l===Z.id?"bg-gradient-to-r from-[#CCFF00]/70 to-[#020408]/30 text-white":"text-gray-300 hover:bg-white/10 hover:text-white"}`,children:[Z.icon,O.jsx("span",{className:"text-xs",children:Z.tooltip})]},Z.id))})})]}),O.jsxs("form",{onSubmit:Ie,className:"relative ml-3 flex items-center",ref:y,role:"search","aria-label":"Website search",children:[O.jsx("input",{type:"search",autoComplete:"off",placeholder:"Search site...",className:`rounded-full px-3 py-1.5 bg-black/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-sm
              w-28 sm:w-48 md:w-64`,value:d,onChange:Z=>f(Z.target.value),onFocus:()=>_(p.length>0)}),O.jsxs("button",{type:"submit",className:"ml-2 px-3 py-1.5 rounded-full bg-[#CCFF00] hover:bg-[#020408] text-white text-sm transition flex items-center justify-center","aria-label":"Submit search",children:[O.jsx(Tk,{className:"w-4 h-4"}),O.jsx("span",{className:"ml-1 hidden sm:inline",children:"Search"})]}),w&&O.jsxs("ul",{id:"search-results",role:"listbox",className:"absolute bottom-full mb-1 w-72 max-h-64 overflow-auto bg-black/90 backdrop-blur-lg rounded-md shadow-lg border border-[#CCFF00] text-white z-50",children:[p.length===0&&O.jsx("li",{className:"px-3 py-2 text-gray-400",children:"No results found."}),p.map(({id:Z,tooltip:F,snippet:X})=>O.jsxs("li",{role:"option",tabIndex:0,className:"cursor-pointer px-3 py-2 hover:bg-[#CCFF00]",onClick:()=>{me(Z,d),_(!1),f("")},onKeyDown:H=>{(H.key==="Enter"||H.key===" ")&&(H.preventDefault(),me(Z,d),_(!1),f(""))},children:[O.jsx("strong",{children:F}),O.jsx("p",{className:"text-xs mt-1 line-clamp-2",children:X})]},Z))]})]})]}),O.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`fixed bottom-4 right-4 w-16 h-16 shadow-lg flex items-center justify-center transition transform hover:scale-110 hidden sm:flex ${n>window.innerHeight/2?"opacity-100 scale-100":"opacity-0 scale-90 pointer-events-none"} z-40`,"aria-label":"Back to top",children:O.jsx("img",{src:Lk,alt:"Robot - Back to top",className:"w-full h-full object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 robot-float"})}),O.jsx("style",{children:`
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
      `})]})}const Fk=se.lazy(()=>jt(()=>import("./Home-BQW0mLwX.js"),__vite__mapDeps([0,1,2,3,4]))),Uk=se.lazy(()=>jt(()=>import("./videos-BNbs_cTn.js"),[])),jk=se.lazy(()=>jt(()=>import("./AboutUs-CWDZwN8v.js"),__vite__mapDeps([5,6]))),zk=se.lazy(()=>jt(()=>import("./Education-pTEIZ2Qc.js"),__vite__mapDeps([7,8,3,4]))),Wk=se.lazy(()=>jt(()=>import("./SkillsData-DCe-9B_P.js"),[])),Hk=se.lazy(()=>jt(()=>import("./LicensesCertifications-Bvr5SqZc.js"),[])),Bk=se.lazy(()=>jt(()=>import("./WorkExperience-DCYei4tO.js"),[])),Vk=se.lazy(()=>jt(()=>import("./ProjectsData-wbYKG-AW.js"),__vite__mapDeps([9,10,6,8]))),$k=se.lazy(()=>jt(()=>import("./designpage-C8M2b3WL.js"),__vite__mapDeps([11,2,10,12,8]))),Gk=se.lazy(()=>jt(()=>import("./Testimonials-B6PRu2hX.js"),__vite__mapDeps([13,4]))),qk=se.lazy(()=>jt(()=>import("./Contact-aB5Nu9ZZ.js"),__vite__mapDeps([14,1,2]))),Kk=se.lazy(()=>jt(()=>import("./Copyright-DEUtl6by.js"),__vite__mapDeps([15,12,8,4])));function Qk(){const[i,e]=se.useState(!0),[n,s]=se.useState(!1),[l,u]=se.useState(!1),[d,f]=se.useState("right"),p={primaryGradient:"from-white to-slate-200",primaryHoverGradient:"from-slate-200 to-white",secondaryGradient:"from-white to-[#000000]",secondaryHoverGradient:"from-white to-[#111827]",cardGradient:"from-[#000000]/80 via-[#000000]/60 to-[#000000]/40",cardHoverShadow:"hover:shadow-white/20",cardBorder:"hover:border-white/20",glowEffect:"from-white/10 to-white/5",accentColor:"text-white",badgeGradient:"from-white/10 to-white/5",badgeText:"text-white",badgeBorder:"border-white/10"};return se.useEffect(()=>{l0.init({duration:600,once:!0});const g=()=>u(window.innerWidth<768);return g(),window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[]),se.useEffect(()=>{(async()=>{if(!sessionStorage.getItem("portfolio_visit_notified")){const _="ckFnN22nJxqQ",y="+94703052181",N=encodeURIComponent("Someone seeing your Portfolio"),x=`https://api.textmebot.com/send.php?recipient=${y}&apikey=${_}&text=${N}`;try{await fetch(x,{mode:"no-cors"}),console.log("Portfolio visit notification sent."),sessionStorage.setItem("portfolio_visit_notified","true")}catch(M){console.error("Failed to send notification:",M),sessionStorage.setItem("portfolio_visit_notified","true")}}})()},[]),O.jsx(sk,{children:i?O.jsx(r0,{onComplete:()=>e(!1)}):O.jsxs("div",{className:"relative bg-black",children:[O.jsxs("div",{className:"fixed inset-0 z-0",children:[O.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-purple-900/10 to-cyan-900/5"}),O.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-purple-900/15"})]}),O.jsxs("div",{className:"relative z-10",children:[O.jsx(Mk,{}),O.jsxs(se.Suspense,{fallback:O.jsx("div",{className:"h-screen w-full flex justify-center items-center text-white"}),children:[O.jsxs("main",{children:[O.jsx("section",{id:"home",children:O.jsx(Fk,{currentTheme:p,isTransitioning:n,slideDir:d})}),O.jsx("section",{id:"videosection",children:O.jsx(Uk,{})}),O.jsx("section",{id:"about",children:O.jsx(jk,{currentTheme:p})}),O.jsx("section",{id:"education-journey",children:O.jsx(zk,{})}),O.jsx("section",{id:"dexterity",children:O.jsx(Wk,{currentTheme:p})}),O.jsx("section",{id:"professional-designations",children:O.jsx(Hk,{})}),O.jsx("section",{id:"professional-journey",children:O.jsx(Bk,{})}),O.jsx("section",{id:"creative-ventures",children:O.jsx(Vk,{currentTheme:p})}),O.jsx("section",{id:"design-scape",children:O.jsx($k,{})}),O.jsx("section",{id:"testimonials",children:O.jsx(Gk,{})}),O.jsx("section",{id:"contact",children:O.jsx(qk,{currentTheme:p})})]}),O.jsx(Kk,{})]})]})]})})}Zy.createRoot(document.getElementById("root")).render(O.jsx(se.StrictMode,{children:O.jsx(Qk,{})}));export{pk as B,Ik as P,Yk as R,Tk as S,Pk as U,Zk as a,xk as b,en as c,iT as d,ik as e,Xk as f,nT as g,eT as h,tT as i,O as j,Rc as k,rT as o,sT as p,se as r,Jk as s,oT as u};
