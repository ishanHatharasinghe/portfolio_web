const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeaderBar-DgvuBGhl.js","assets/myimage-BzDHDR2c.js","assets/user-COmYQm0m.js","assets/palette-D3McFNe5.js","assets/AboutUs-Bs1ghNRp.js","assets/4-CWsi-qAi.js","assets/Education-zTWoo0Nw.js","assets/external-link-C_OEjmz8.js","assets/SkillsData-BIJFxg3L.js","assets/proxy-CCqxLpC_.js","assets/index-slOrpUFO.js","assets/boxes-CFJ-RGjJ.js","assets/ProjectsData-DkZ7SrSe.js","assets/ProjectsData-CSRAChdu.css","assets/designpage-CKfYKTcf.js","assets/Testimonials-Bc_YfvUC.js","assets/Copyright-LoeTsFgf.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();var lI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Gu={exports:{}},ps={},qu={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function iy(){if(Tp)return he;Tp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),v=Symbol.iterator;function _(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,j={};function V(k,b,X){this.props=k,this.context=b,this.refs=j,this.updater=X||N}V.prototype.isReactComponent={},V.prototype.setState=function(k,b){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,b,"setState")},V.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function ke(){}ke.prototype=V.prototype;function Z(k,b,X){this.props=k,this.context=b,this.refs=j,this.updater=X||N}var _e=Z.prototype=new ke;_e.constructor=Z,R(_e,V.prototype),_e.isPureReactComponent=!0;var Ee=Array.isArray,Fe=Object.prototype.hasOwnProperty,ee={current:null},ge={key:!0,ref:!0,__self:!0,__source:!0};function ce(k,b,X){var J,ae={},ue=null,le=null;if(b!=null)for(J in b.ref!==void 0&&(le=b.ref),b.key!==void 0&&(ue=""+b.key),b)Fe.call(b,J)&&!ge.hasOwnProperty(J)&&(ae[J]=b[J]);var te=arguments.length-2;if(te===1)ae.children=X;else if(1<te){for(var de=Array(te),He=0;He<te;He++)de[He]=arguments[He+2];ae.children=de}if(k&&k.defaultProps)for(J in te=k.defaultProps,te)ae[J]===void 0&&(ae[J]=te[J]);return{$$typeof:i,type:k,key:ue,ref:le,props:ae,_owner:ee.current}}function Re(k,b){return{$$typeof:i,type:k.type,key:b,ref:k.ref,props:k.props,_owner:k._owner}}function Me(k){return typeof k=="object"&&k!==null&&k.$$typeof===i}function $(k){var b={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(X){return b[X]})}var F=/\/+/g;function oe(k,b){return typeof k=="object"&&k!==null&&k.key!=null?$(""+k.key):b.toString(36)}function K(k,b,X,J,ae){var ue=typeof k;(ue==="undefined"||ue==="boolean")&&(k=null);var le=!1;if(k===null)le=!0;else switch(ue){case"string":case"number":le=!0;break;case"object":switch(k.$$typeof){case i:case e:le=!0}}if(le)return le=k,ae=ae(le),k=J===""?"."+oe(le,0):J,Ee(ae)?(X="",k!=null&&(X=k.replace(F,"$&/")+"/"),K(ae,b,X,"",function(He){return He})):ae!=null&&(Me(ae)&&(ae=Re(ae,X+(!ae.key||le&&le.key===ae.key?"":(""+ae.key).replace(F,"$&/")+"/")+k)),b.push(ae)),1;if(le=0,J=J===""?".":J+":",Ee(k))for(var te=0;te<k.length;te++){ue=k[te];var de=J+oe(ue,te);le+=K(ue,b,X,de,ae)}else if(de=_(k),typeof de=="function")for(k=de.call(k),te=0;!(ue=k.next()).done;)ue=ue.value,de=J+oe(ue,te++),le+=K(ue,b,X,de,ae);else if(ue==="object")throw b=String(k),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return le}function be(k,b,X){if(k==null)return k;var J=[],ae=0;return K(k,J,"","",function(ue){return b.call(X,ue,ae++)}),J}function Pe(k){if(k._status===-1){var b=k._result;b=b(),b.then(function(X){(k._status===0||k._status===-1)&&(k._status=1,k._result=X)},function(X){(k._status===0||k._status===-1)&&(k._status=2,k._result=X)}),k._status===-1&&(k._status=0,k._result=b)}if(k._status===1)return k._result.default;throw k._result}var Se={current:null},L={transition:null},q={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:L,ReactCurrentOwner:ee};function z(){throw Error("act(...) is not supported in production builds of React.")}return he.Children={map:be,forEach:function(k,b,X){be(k,function(){b.apply(this,arguments)},X)},count:function(k){var b=0;return be(k,function(){b++}),b},toArray:function(k){return be(k,function(b){return b})||[]},only:function(k){if(!Me(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},he.Component=V,he.Fragment=n,he.Profiler=l,he.PureComponent=Z,he.StrictMode=s,he.Suspense=p,he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,he.act=z,he.cloneElement=function(k,b,X){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var J=R({},k.props),ae=k.key,ue=k.ref,le=k._owner;if(b!=null){if(b.ref!==void 0&&(ue=b.ref,le=ee.current),b.key!==void 0&&(ae=""+b.key),k.type&&k.type.defaultProps)var te=k.type.defaultProps;for(de in b)Fe.call(b,de)&&!ge.hasOwnProperty(de)&&(J[de]=b[de]===void 0&&te!==void 0?te[de]:b[de])}var de=arguments.length-2;if(de===1)J.children=X;else if(1<de){te=Array(de);for(var He=0;He<de;He++)te[He]=arguments[He+2];J.children=te}return{$$typeof:i,type:k.type,key:ae,ref:ue,props:J,_owner:le}},he.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:u,_context:k},k.Consumer=k},he.createElement=ce,he.createFactory=function(k){var b=ce.bind(null,k);return b.type=k,b},he.createRef=function(){return{current:null}},he.forwardRef=function(k){return{$$typeof:f,render:k}},he.isValidElement=Me,he.lazy=function(k){return{$$typeof:w,_payload:{_status:-1,_result:k},_init:Pe}},he.memo=function(k,b){return{$$typeof:g,type:k,compare:b===void 0?null:b}},he.startTransition=function(k){var b=L.transition;L.transition={};try{k()}finally{L.transition=b}},he.unstable_act=z,he.useCallback=function(k,b){return Se.current.useCallback(k,b)},he.useContext=function(k){return Se.current.useContext(k)},he.useDebugValue=function(){},he.useDeferredValue=function(k){return Se.current.useDeferredValue(k)},he.useEffect=function(k,b){return Se.current.useEffect(k,b)},he.useId=function(){return Se.current.useId()},he.useImperativeHandle=function(k,b,X){return Se.current.useImperativeHandle(k,b,X)},he.useInsertionEffect=function(k,b){return Se.current.useInsertionEffect(k,b)},he.useLayoutEffect=function(k,b){return Se.current.useLayoutEffect(k,b)},he.useMemo=function(k,b){return Se.current.useMemo(k,b)},he.useReducer=function(k,b,X){return Se.current.useReducer(k,b,X)},he.useRef=function(k){return Se.current.useRef(k)},he.useState=function(k){return Se.current.useState(k)},he.useSyncExternalStore=function(k,b,X){return Se.current.useSyncExternalStore(k,b,X)},he.useTransition=function(){return Se.current.useTransition()},he.version="18.3.1",he}var xp;function Dc(){return xp||(xp=1,qu.exports=iy()),qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function sy(){if(Np)return ps;Np=1;var i=Dc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var w,v={},_=null,N=null;g!==void 0&&(_=""+g),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(N=p.ref);for(w in p)s.call(p,w)&&!u.hasOwnProperty(w)&&(v[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)v[w]===void 0&&(v[w]=p[w]);return{$$typeof:e,type:f,key:_,ref:N,props:v,_owner:l.current}}return ps.Fragment=n,ps.jsx=d,ps.jsxs=d,ps}var bp;function oy(){return bp||(bp=1,Gu.exports=sy()),Gu.exports}var S=oy(),ne=Dc();const Cr=Zm(ne);var tl={},Ku={exports:{}},St={},Qu={exports:{}},Yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function ly(){return Rp||(Rp=1,function(i){function e(L,q){var z=L.length;L.push(q);e:for(;0<z;){var k=z-1>>>1,b=L[k];if(0<l(b,q))L[k]=q,L[z]=b,z=k;else break e}}function n(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var q=L[0],z=L.pop();if(z!==q){L[0]=z;e:for(var k=0,b=L.length,X=b>>>1;k<X;){var J=2*(k+1)-1,ae=L[J],ue=J+1,le=L[ue];if(0>l(ae,z))ue<b&&0>l(le,ae)?(L[k]=le,L[ue]=z,k=ue):(L[k]=ae,L[J]=z,k=J);else if(ue<b&&0>l(le,z))L[k]=le,L[ue]=z,k=ue;else break e}}return q}function l(L,q){var z=L.sortIndex-q.sortIndex;return z!==0?z:L.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var p=[],g=[],w=1,v=null,_=3,N=!1,R=!1,j=!1,V=typeof setTimeout=="function"?setTimeout:null,ke=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _e(L){for(var q=n(g);q!==null;){if(q.callback===null)s(g);else if(q.startTime<=L)s(g),q.sortIndex=q.expirationTime,e(p,q);else break;q=n(g)}}function Ee(L){if(j=!1,_e(L),!R)if(n(p)!==null)R=!0,Pe(Fe);else{var q=n(g);q!==null&&Se(Ee,q.startTime-L)}}function Fe(L,q){R=!1,j&&(j=!1,ke(ce),ce=-1),N=!0;var z=_;try{for(_e(q),v=n(p);v!==null&&(!(v.expirationTime>q)||L&&!$());){var k=v.callback;if(typeof k=="function"){v.callback=null,_=v.priorityLevel;var b=k(v.expirationTime<=q);q=i.unstable_now(),typeof b=="function"?v.callback=b:v===n(p)&&s(p),_e(q)}else s(p);v=n(p)}if(v!==null)var X=!0;else{var J=n(g);J!==null&&Se(Ee,J.startTime-q),X=!1}return X}finally{v=null,_=z,N=!1}}var ee=!1,ge=null,ce=-1,Re=5,Me=-1;function $(){return!(i.unstable_now()-Me<Re)}function F(){if(ge!==null){var L=i.unstable_now();Me=L;var q=!0;try{q=ge(!0,L)}finally{q?oe():(ee=!1,ge=null)}}else ee=!1}var oe;if(typeof Z=="function")oe=function(){Z(F)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,be=K.port2;K.port1.onmessage=F,oe=function(){be.postMessage(null)}}else oe=function(){V(F,0)};function Pe(L){ge=L,ee||(ee=!0,oe())}function Se(L,q){ce=V(function(){L(i.unstable_now())},q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(L){L.callback=null},i.unstable_continueExecution=function(){R||N||(R=!0,Pe(Fe))},i.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<L?Math.floor(1e3/L):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return n(p)},i.unstable_next=function(L){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var z=_;_=q;try{return L()}finally{_=z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=_;_=L;try{return q()}finally{_=z}},i.unstable_scheduleCallback=function(L,q,z){var k=i.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?k+z:k):z=k,L){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=z+b,L={id:w++,callback:q,priorityLevel:L,startTime:z,expirationTime:b,sortIndex:-1},z>k?(L.sortIndex=z,e(g,L),n(p)===null&&L===n(g)&&(j?(ke(ce),ce=-1):j=!0,Se(Ee,z-k))):(L.sortIndex=b,e(p,L),R||N||(R=!0,Pe(Fe))),L},i.unstable_shouldYield=$,i.unstable_wrapCallback=function(L){var q=_;return function(){var z=_;_=q;try{return L.apply(this,arguments)}finally{_=z}}}}(Yu)),Yu}var Pp;function ay(){return Pp||(Pp=1,Qu.exports=ly()),Qu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function uy(){if(Op)return St;Op=1;var i=Dc(),e=ay();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},v={};function _(t){return p.call(v,t)?!0:p.call(w,t)?!1:g.test(t)?v[t]=!0:(w[t]=!0,!1)}function N(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,r,o,a){if(r===null||typeof r>"u"||N(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function j(t,r,o,a,c,h,m){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=m}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){V[t]=new j(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];V[r]=new j(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){V[t]=new j(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){V[t]=new j(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){V[t]=new j(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){V[t]=new j(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){V[t]=new j(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){V[t]=new j(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){V[t]=new j(t,5,!1,t.toLowerCase(),null,!1,!1)});var ke=/[\-:]([a-z])/g;function Z(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(ke,Z);V[r]=new j(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(ke,Z);V[r]=new j(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(ke,Z);V[r]=new j(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){V[t]=new j(t,1,!1,t.toLowerCase(),null,!1,!1)}),V.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){V[t]=new j(t,1,!1,t.toLowerCase(),null,!0,!0)});function _e(t,r,o,a){var c=V.hasOwnProperty(r)?V[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(R(r,o,c,a)&&(o=null),a||c===null?_(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var Ee=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fe=Symbol.for("react.element"),ee=Symbol.for("react.portal"),ge=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),Re=Symbol.for("react.profiler"),Me=Symbol.for("react.provider"),$=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),L=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=L&&t[L]||t["@@iterator"],typeof t=="function"?t:null)}var z=Object.assign,k;function b(t){if(k===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);k=r&&r[1]||""}return`
`+k+t}var X=!1;function J(t,r){if(!t||X)return"";X=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(x){var a=x}Reflect.construct(t,[],r)}else{try{r.call()}catch(x){a=x}t.call(r.prototype)}else{try{throw Error()}catch(x){a=x}t()}}catch(x){if(x&&a&&typeof x.stack=="string"){for(var c=x.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,y=h.length-1;1<=m&&0<=y&&c[m]!==h[y];)y--;for(;1<=m&&0<=y;m--,y--)if(c[m]!==h[y]){if(m!==1||y!==1)do if(m--,y--,0>y||c[m]!==h[y]){var E=`
`+c[m].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=m&&0<=y);break}}}finally{X=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?b(t):""}function ae(t){switch(t.tag){case 5:return b(t.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return t=J(t.type,!1),t;case 11:return t=J(t.type.render,!1),t;case 1:return t=J(t.type,!0),t;default:return""}}function ue(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ge:return"Fragment";case ee:return"Portal";case Re:return"Profiler";case ce:return"StrictMode";case oe:return"Suspense";case K:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $:return(t.displayName||"Context")+".Consumer";case Me:return(t._context.displayName||"Context")+".Provider";case F:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case be:return r=t.displayName||null,r!==null?r:ue(t.type)||"Memo";case Pe:r=t._payload,t=t._init;try{return ue(t(r))}catch{}}return null}function le(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(r);case 8:return r===ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function de(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function He(t){var r=de(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function It(t){t._valueTracker||(t._valueTracker=He(t))}function Pt(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=de(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function Te(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ye(t,r){var o=r.checked;return z({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function it(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=te(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ut(t,r){r=r.checked,r!=null&&_e(t,"checked",r,!1)}function Dr(t,r){Ut(t,r);var o=te(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?ta(t,r.type,o):r.hasOwnProperty("defaultValue")&&ta(t,r.type,te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Dd(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ta(t,r,o){(r!=="number"||Te(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var bi=Array.isArray;function Mr(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+te(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function na(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return z({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Md(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(bi(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:te(o)}}function Ld(t,r){var o=te(r.value),a=te(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function jd(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Fd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ra(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Fd(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gs,zd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Gs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Ri(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uv=["Webkit","ms","Moz","O"];Object.keys(Pi).forEach(function(t){uv.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Pi[r]=Pi[t]})});function Ud(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Pi.hasOwnProperty(t)&&Pi[t]?(""+r).trim():r+"px"}function Vd(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=Ud(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var cv=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(t,r){if(r){if(cv[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function sa(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oa=null;function la(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var aa=null,Lr=null,jr=null;function Hd(t){if(t=Zi(t)){if(typeof aa!="function")throw Error(n(280));var r=t.stateNode;r&&(r=go(r),aa(t.stateNode,t.type,r))}}function Wd(t){Lr?jr?jr.push(t):jr=[t]:Lr=t}function Bd(){if(Lr){var t=Lr,r=jr;if(jr=Lr=null,Hd(t),r)for(t=0;t<r.length;t++)Hd(r[t])}}function $d(t,r){return t(r)}function Gd(){}var ua=!1;function qd(t,r,o){if(ua)return t(r,o);ua=!0;try{return $d(t,r,o)}finally{ua=!1,(Lr!==null||jr!==null)&&(Gd(),Bd())}}function Oi(t,r){var o=t.stateNode;if(o===null)return null;var a=go(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var ca=!1;if(f)try{var Ai={};Object.defineProperty(Ai,"passive",{get:function(){ca=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{ca=!1}function dv(t,r,o,a,c,h,m,y,E){var x=Array.prototype.slice.call(arguments,3);try{r.apply(o,x)}catch(O){this.onError(O)}}var Di=!1,qs=null,Ks=!1,da=null,hv={onError:function(t){Di=!0,qs=t}};function fv(t,r,o,a,c,h,m,y,E){Di=!1,qs=null,dv.apply(hv,arguments)}function pv(t,r,o,a,c,h,m,y,E){if(fv.apply(this,arguments),Di){if(Di){var x=qs;Di=!1,qs=null}else throw Error(n(198));Ks||(Ks=!0,da=x)}}function or(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Kd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Qd(t){if(or(t)!==t)throw Error(n(188))}function mv(t){var r=t.alternate;if(!r){if(r=or(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Qd(c),t;if(h===a)return Qd(c),r;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,y=c.child;y;){if(y===o){m=!0,o=c,a=h;break}if(y===a){m=!0,a=c,o=h;break}y=y.sibling}if(!m){for(y=h.child;y;){if(y===o){m=!0,o=h,a=c;break}if(y===a){m=!0,a=h,o=c;break}y=y.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Yd(t){return t=mv(t),t!==null?Xd(t):null}function Xd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Xd(t);if(r!==null)return r;t=t.sibling}return null}var Jd=e.unstable_scheduleCallback,Zd=e.unstable_cancelCallback,gv=e.unstable_shouldYield,vv=e.unstable_requestPaint,Ge=e.unstable_now,_v=e.unstable_getCurrentPriorityLevel,ha=e.unstable_ImmediatePriority,eh=e.unstable_UserBlockingPriority,Qs=e.unstable_NormalPriority,yv=e.unstable_LowPriority,th=e.unstable_IdlePriority,Ys=null,en=null;function wv(t){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Ys,t,void 0,(t.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:Cv,Ev=Math.log,Sv=Math.LN2;function Cv(t){return t>>>=0,t===0?32:31-(Ev(t)/Sv|0)|0}var Xs=64,Js=4194304;function Mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zs(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var y=m&~c;y!==0?a=Mi(y):(h&=m,h!==0&&(a=Mi(h)))}else m=o&~c,m!==0?a=Mi(m):h!==0&&(a=Mi(h));if(a===0)return 0;if(r!==0&&r!==a&&!(r&c)&&(c=a&-a,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if(a&4&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-Vt(r),c=1<<o,a|=t[o],r&=~c;return a}function kv(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iv(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Vt(h),y=1<<m,E=c[m];E===-1?(!(y&o)||y&a)&&(c[m]=kv(y,r)):E<=r&&(t.expiredLanes|=y),h&=~y}}function fa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nh(){var t=Xs;return Xs<<=1,!(Xs&4194240)&&(Xs=64),t}function pa(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Li(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Vt(r),t[r]=o}function Tv(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Vt(o),h=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function ma(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-Vt(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var Ie=0;function rh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ih,ga,sh,oh,lh,va=!1,eo=[],xn=null,Nn=null,bn=null,ji=new Map,Fi=new Map,Rn=[],xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ah(t,r){switch(t){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":ji.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(r.pointerId)}}function zi(t,r,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},r!==null&&(r=Zi(r),r!==null&&ga(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function Nv(t,r,o,a,c){switch(r){case"focusin":return xn=zi(xn,t,r,o,a,c),!0;case"dragenter":return Nn=zi(Nn,t,r,o,a,c),!0;case"mouseover":return bn=zi(bn,t,r,o,a,c),!0;case"pointerover":var h=c.pointerId;return ji.set(h,zi(ji.get(h)||null,t,r,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Fi.set(h,zi(Fi.get(h)||null,t,r,o,a,c)),!0}return!1}function uh(t){var r=lr(t.target);if(r!==null){var o=or(r);if(o!==null){if(r=o.tag,r===13){if(r=Kd(o),r!==null){t.blockedOn=r,lh(t.priority,function(){sh(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function to(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=ya(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);oa=a,o.target.dispatchEvent(a),oa=null}else return r=Zi(o),r!==null&&ga(r),t.blockedOn=o,!1;r.shift()}return!0}function ch(t,r,o){to(t)&&o.delete(r)}function bv(){va=!1,xn!==null&&to(xn)&&(xn=null),Nn!==null&&to(Nn)&&(Nn=null),bn!==null&&to(bn)&&(bn=null),ji.forEach(ch),Fi.forEach(ch)}function Ui(t,r){t.blockedOn===r&&(t.blockedOn=null,va||(va=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,bv)))}function Vi(t){function r(c){return Ui(c,t)}if(0<eo.length){Ui(eo[0],t);for(var o=1;o<eo.length;o++){var a=eo[o];a.blockedOn===t&&(a.blockedOn=null)}}for(xn!==null&&Ui(xn,t),Nn!==null&&Ui(Nn,t),bn!==null&&Ui(bn,t),ji.forEach(r),Fi.forEach(r),o=0;o<Rn.length;o++)a=Rn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<Rn.length&&(o=Rn[0],o.blockedOn===null);)uh(o),o.blockedOn===null&&Rn.shift()}var Fr=Ee.ReactCurrentBatchConfig,no=!0;function Rv(t,r,o,a){var c=Ie,h=Fr.transition;Fr.transition=null;try{Ie=1,_a(t,r,o,a)}finally{Ie=c,Fr.transition=h}}function Pv(t,r,o,a){var c=Ie,h=Fr.transition;Fr.transition=null;try{Ie=4,_a(t,r,o,a)}finally{Ie=c,Fr.transition=h}}function _a(t,r,o,a){if(no){var c=ya(t,r,o,a);if(c===null)La(t,r,a,ro,o),ah(t,a);else if(Nv(c,t,r,o,a))a.stopPropagation();else if(ah(t,a),r&4&&-1<xv.indexOf(t)){for(;c!==null;){var h=Zi(c);if(h!==null&&ih(h),h=ya(t,r,o,a),h===null&&La(t,r,a,ro,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else La(t,r,a,null,o)}}var ro=null;function ya(t,r,o,a){if(ro=null,t=la(a),t=lr(t),t!==null)if(r=or(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Kd(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ro=t,null}function dh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_v()){case ha:return 1;case eh:return 4;case Qs:case yv:return 16;case th:return 536870912;default:return 16}default:return 16}}var Pn=null,wa=null,io=null;function hh(){if(io)return io;var t,r=wa,o=r.length,a,c="value"in Pn?Pn.value:Pn.textContent,h=c.length;for(t=0;t<o&&r[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&r[o-a]===c[h-a];a++);return io=c.slice(t,1<a?1-a:void 0)}function so(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function fh(){return!1}function Tt(t){function r(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(o=t[y],this[y]=o?o(h):h[y]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?oo:fh,this.isPropagationStopped=fh,this}return z(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),r}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ea=Tt(zr),Hi=z({},zr,{view:0,detail:0}),Ov=Tt(Hi),Sa,Ca,Wi,lo=z({},Hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ia,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wi&&(Wi&&t.type==="mousemove"?(Sa=t.screenX-Wi.screenX,Ca=t.screenY-Wi.screenY):Ca=Sa=0,Wi=t),Sa)},movementY:function(t){return"movementY"in t?t.movementY:Ca}}),ph=Tt(lo),Av=z({},lo,{dataTransfer:0}),Dv=Tt(Av),Mv=z({},Hi,{relatedTarget:0}),ka=Tt(Mv),Lv=z({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Tt(Lv),Fv=z({},zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zv=Tt(Fv),Uv=z({},zr,{data:0}),mh=Tt(Uv),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Wv[t])?!!r[t]:!1}function Ia(){return Bv}var $v=z({},Hi,{key:function(t){if(t.key){var r=Vv[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ia,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gv=Tt($v),qv=z({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=Tt(qv),Kv=z({},Hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ia}),Qv=Tt(Kv),Yv=z({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=Tt(Yv),Jv=z({},lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zv=Tt(Jv),e_=[9,13,27,32],Ta=f&&"CompositionEvent"in window,Bi=null;f&&"documentMode"in document&&(Bi=document.documentMode);var t_=f&&"TextEvent"in window&&!Bi,vh=f&&(!Ta||Bi&&8<Bi&&11>=Bi),_h=" ",yh=!1;function wh(t,r){switch(t){case"keyup":return e_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function n_(t,r){switch(t){case"compositionend":return Eh(r);case"keypress":return r.which!==32?null:(yh=!0,_h);case"textInput":return t=r.data,t===_h&&yh?null:t;default:return null}}function r_(t,r){if(Ur)return t==="compositionend"||!Ta&&wh(t,r)?(t=hh(),io=wa=Pn=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return vh&&r.locale!=="ko"?null:r.data;default:return null}}var i_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!i_[t.type]:r==="textarea"}function Ch(t,r,o,a){Wd(a),r=fo(r,"onChange"),0<r.length&&(o=new Ea("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var $i=null,Gi=null;function s_(t){Vh(t,0)}function ao(t){var r=$r(t);if(Pt(r))return t}function o_(t,r){if(t==="change")return r}var kh=!1;if(f){var xa;if(f){var Na="oninput"in document;if(!Na){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),Na=typeof Ih.oninput=="function"}xa=Na}else xa=!1;kh=xa&&(!document.documentMode||9<document.documentMode)}function Th(){$i&&($i.detachEvent("onpropertychange",xh),Gi=$i=null)}function xh(t){if(t.propertyName==="value"&&ao(Gi)){var r=[];Ch(r,Gi,t,la(t)),qd(s_,r)}}function l_(t,r,o){t==="focusin"?(Th(),$i=r,Gi=o,$i.attachEvent("onpropertychange",xh)):t==="focusout"&&Th()}function a_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ao(Gi)}function u_(t,r){if(t==="click")return ao(r)}function c_(t,r){if(t==="input"||t==="change")return ao(r)}function d_(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Ht=typeof Object.is=="function"?Object.is:d_;function qi(t,r){if(Ht(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(r,c)||!Ht(t[c],r[c]))return!1}return!0}function Nh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bh(t,r){var o=Nh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Nh(o)}}function Rh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Rh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Ph(){for(var t=window,r=Te();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Te(t.document)}return r}function ba(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function h_(t){var r=Ph(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Rh(o.ownerDocument.documentElement,o)){if(a!==null&&ba(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=bh(o,h);var m=bh(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(r),t.extend(m.node,m.offset)):(r.setEnd(m.node,m.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var f_=f&&"documentMode"in document&&11>=document.documentMode,Vr=null,Ra=null,Ki=null,Pa=!1;function Oh(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Pa||Vr==null||Vr!==Te(a)||(a=Vr,"selectionStart"in a&&ba(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ki&&qi(Ki,a)||(Ki=a,a=fo(Ra,"onSelect"),0<a.length&&(r=new Ea("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=Vr)))}function uo(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Hr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Oa={},Ah={};f&&(Ah=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function co(t){if(Oa[t])return Oa[t];if(!Hr[t])return t;var r=Hr[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Ah)return Oa[t]=r[o];return t}var Dh=co("animationend"),Mh=co("animationiteration"),Lh=co("animationstart"),jh=co("transitionend"),Fh=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(t,r){Fh.set(t,r),u(r,[t])}for(var Aa=0;Aa<zh.length;Aa++){var Da=zh[Aa],p_=Da.toLowerCase(),m_=Da[0].toUpperCase()+Da.slice(1);On(p_,"on"+m_)}On(Dh,"onAnimationEnd"),On(Mh,"onAnimationIteration"),On(Lh,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On(jh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function Uh(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,pv(a,r,void 0,t),t.currentTarget=null}function Vh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var m=a.length-1;0<=m;m--){var y=a[m],E=y.instance,x=y.currentTarget;if(y=y.listener,E!==h&&c.isPropagationStopped())break e;Uh(c,y,x),h=E}else for(m=0;m<a.length;m++){if(y=a[m],E=y.instance,x=y.currentTarget,y=y.listener,E!==h&&c.isPropagationStopped())break e;Uh(c,y,x),h=E}}}if(Ks)throw t=da,Ks=!1,da=null,t}function Le(t,r){var o=r[Ha];o===void 0&&(o=r[Ha]=new Set);var a=t+"__bubble";o.has(a)||(Hh(r,t,2,!1),o.add(a))}function Ma(t,r,o){var a=0;r&&(a|=4),Hh(o,t,a,r)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Yi(t){if(!t[ho]){t[ho]=!0,s.forEach(function(o){o!=="selectionchange"&&(g_.has(o)||Ma(o,!1,t),Ma(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ho]||(r[ho]=!0,Ma("selectionchange",!1,r))}}function Hh(t,r,o,a){switch(dh(r)){case 1:var c=Rv;break;case 4:c=Pv;break;default:c=_a}o=c.bind(null,r,o,t),c=void 0,!ca||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function La(t,r,o,a,c){var h=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var y=a.stateNode.containerInfo;if(y===c||y.nodeType===8&&y.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var E=m.tag;if((E===3||E===4)&&(E=m.stateNode.containerInfo,E===c||E.nodeType===8&&E.parentNode===c))return;m=m.return}for(;y!==null;){if(m=lr(y),m===null)return;if(E=m.tag,E===5||E===6){a=h=m;continue e}y=y.parentNode}}a=a.return}qd(function(){var x=h,O=la(o),A=[];e:{var P=Fh.get(t);if(P!==void 0){var U=Ea,W=t;switch(t){case"keypress":if(so(o)===0)break e;case"keydown":case"keyup":U=Gv;break;case"focusin":W="focus",U=ka;break;case"focusout":W="blur",U=ka;break;case"beforeblur":case"afterblur":U=ka;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Qv;break;case Dh:case Mh:case Lh:U=jv;break;case jh:U=Xv;break;case"scroll":U=Ov;break;case"wheel":U=Zv;break;case"copy":case"cut":case"paste":U=zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=gh}var B=(r&4)!==0,qe=!B&&t==="scroll",I=B?P!==null?P+"Capture":null:P;B=[];for(var C=x,T;C!==null;){T=C;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,I!==null&&(D=Oi(C,I),D!=null&&B.push(Xi(C,D,T)))),qe)break;C=C.return}0<B.length&&(P=new U(P,W,null,o,O),A.push({event:P,listeners:B}))}}if(!(r&7)){e:{if(P=t==="mouseover"||t==="pointerover",U=t==="mouseout"||t==="pointerout",P&&o!==oa&&(W=o.relatedTarget||o.fromElement)&&(lr(W)||W[cn]))break e;if((U||P)&&(P=O.window===O?O:(P=O.ownerDocument)?P.defaultView||P.parentWindow:window,U?(W=o.relatedTarget||o.toElement,U=x,W=W?lr(W):null,W!==null&&(qe=or(W),W!==qe||W.tag!==5&&W.tag!==6)&&(W=null)):(U=null,W=x),U!==W)){if(B=ph,D="onMouseLeave",I="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(B=gh,D="onPointerLeave",I="onPointerEnter",C="pointer"),qe=U==null?P:$r(U),T=W==null?P:$r(W),P=new B(D,C+"leave",U,o,O),P.target=qe,P.relatedTarget=T,D=null,lr(O)===x&&(B=new B(I,C+"enter",W,o,O),B.target=T,B.relatedTarget=qe,D=B),qe=D,U&&W)t:{for(B=U,I=W,C=0,T=B;T;T=Wr(T))C++;for(T=0,D=I;D;D=Wr(D))T++;for(;0<C-T;)B=Wr(B),C--;for(;0<T-C;)I=Wr(I),T--;for(;C--;){if(B===I||I!==null&&B===I.alternate)break t;B=Wr(B),I=Wr(I)}B=null}else B=null;U!==null&&Wh(A,P,U,B,!1),W!==null&&qe!==null&&Wh(A,qe,W,B,!0)}}e:{if(P=x?$r(x):window,U=P.nodeName&&P.nodeName.toLowerCase(),U==="select"||U==="input"&&P.type==="file")var G=o_;else if(Sh(P))if(kh)G=c_;else{G=a_;var Q=l_}else(U=P.nodeName)&&U.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&(G=u_);if(G&&(G=G(t,x))){Ch(A,G,o,O);break e}Q&&Q(t,P,x),t==="focusout"&&(Q=P._wrapperState)&&Q.controlled&&P.type==="number"&&ta(P,"number",P.value)}switch(Q=x?$r(x):window,t){case"focusin":(Sh(Q)||Q.contentEditable==="true")&&(Vr=Q,Ra=x,Ki=null);break;case"focusout":Ki=Ra=Vr=null;break;case"mousedown":Pa=!0;break;case"contextmenu":case"mouseup":case"dragend":Pa=!1,Oh(A,o,O);break;case"selectionchange":if(f_)break;case"keydown":case"keyup":Oh(A,o,O)}var Y;if(Ta)e:{switch(t){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else Ur?wh(t,o)&&(ie="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ie="onCompositionStart");ie&&(vh&&o.locale!=="ko"&&(Ur||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Ur&&(Y=hh()):(Pn=O,wa="value"in Pn?Pn.value:Pn.textContent,Ur=!0)),Q=fo(x,ie),0<Q.length&&(ie=new mh(ie,t,null,o,O),A.push({event:ie,listeners:Q}),Y?ie.data=Y:(Y=Eh(o),Y!==null&&(ie.data=Y)))),(Y=t_?n_(t,o):r_(t,o))&&(x=fo(x,"onBeforeInput"),0<x.length&&(O=new mh("onBeforeInput","beforeinput",null,o,O),A.push({event:O,listeners:x}),O.data=Y))}Vh(A,r)})}function Xi(t,r,o){return{instance:t,listener:r,currentTarget:o}}function fo(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Oi(t,o),h!=null&&a.unshift(Xi(t,h,c)),h=Oi(t,r),h!=null&&a.push(Xi(t,h,c))),t=t.return}return a}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wh(t,r,o,a,c){for(var h=r._reactName,m=[];o!==null&&o!==a;){var y=o,E=y.alternate,x=y.stateNode;if(E!==null&&E===a)break;y.tag===5&&x!==null&&(y=x,c?(E=Oi(o,h),E!=null&&m.unshift(Xi(o,E,y))):c||(E=Oi(o,h),E!=null&&m.push(Xi(o,E,y)))),o=o.return}m.length!==0&&t.push({event:r,listeners:m})}var v_=/\r\n?/g,__=/\u0000|\uFFFD/g;function Bh(t){return(typeof t=="string"?t:""+t).replace(v_,`
`).replace(__,"")}function po(t,r,o){if(r=Bh(r),Bh(t)!==r&&o)throw Error(n(425))}function mo(){}var ja=null,Fa=null;function za(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ua=typeof setTimeout=="function"?setTimeout:void 0,y_=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,w_=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(t){return $h.resolve(null).then(t).catch(E_)}:Ua;function E_(t){setTimeout(function(){throw t})}function Va(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Vi(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Vi(r)}function An(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Gh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Br=Math.random().toString(36).slice(2),tn="__reactFiber$"+Br,Ji="__reactProps$"+Br,cn="__reactContainer$"+Br,Ha="__reactEvents$"+Br,S_="__reactListeners$"+Br,C_="__reactHandles$"+Br;function lr(t){var r=t[tn];if(r)return r;for(var o=t.parentNode;o;){if(r=o[cn]||o[tn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Gh(t);t!==null;){if(o=t[tn])return o;t=Gh(t)}return r}t=o,o=t.parentNode}return null}function Zi(t){return t=t[tn]||t[cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function go(t){return t[Ji]||null}var Wa=[],Gr=-1;function Dn(t){return{current:t}}function je(t){0>Gr||(t.current=Wa[Gr],Wa[Gr]=null,Gr--)}function Oe(t,r){Gr++,Wa[Gr]=t.current,t.current=r}var Mn={},ut=Dn(Mn),vt=Dn(!1),ar=Mn;function qr(t,r){var o=t.type.contextTypes;if(!o)return Mn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=r[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function _t(t){return t=t.childContextTypes,t!=null}function vo(){je(vt),je(ut)}function qh(t,r,o){if(ut.current!==Mn)throw Error(n(168));Oe(ut,r),Oe(vt,o)}function Kh(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,le(t)||"Unknown",c));return z({},o,a)}function _o(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mn,ar=ut.current,Oe(ut,t),Oe(vt,vt.current),!0}function Qh(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Kh(t,r,ar),a.__reactInternalMemoizedMergedChildContext=t,je(vt),je(ut),Oe(ut,t)):je(vt),Oe(vt,o)}var dn=null,yo=!1,Ba=!1;function Yh(t){dn===null?dn=[t]:dn.push(t)}function k_(t){yo=!0,Yh(t)}function Ln(){if(!Ba&&dn!==null){Ba=!0;var t=0,r=Ie;try{var o=dn;for(Ie=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}dn=null,yo=!1}catch(c){throw dn!==null&&(dn=dn.slice(t+1)),Jd(ha,Ln),c}finally{Ie=r,Ba=!1}}return null}var Kr=[],Qr=0,wo=null,Eo=0,Ot=[],At=0,ur=null,hn=1,fn="";function cr(t,r){Kr[Qr++]=Eo,Kr[Qr++]=wo,wo=t,Eo=r}function Xh(t,r,o){Ot[At++]=hn,Ot[At++]=fn,Ot[At++]=ur,ur=t;var a=hn;t=fn;var c=32-Vt(a)-1;a&=~(1<<c),o+=1;var h=32-Vt(r)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,hn=1<<32-Vt(r)+c|o<<c|a,fn=h+t}else hn=1<<h|o<<c|a,fn=t}function $a(t){t.return!==null&&(cr(t,1),Xh(t,1,0))}function Ga(t){for(;t===wo;)wo=Kr[--Qr],Kr[Qr]=null,Eo=Kr[--Qr],Kr[Qr]=null;for(;t===ur;)ur=Ot[--At],Ot[At]=null,fn=Ot[--At],Ot[At]=null,hn=Ot[--At],Ot[At]=null}var xt=null,Nt=null,ze=!1,Wt=null;function Jh(t,r){var o=jt(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Zh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,xt=t,Nt=An(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,xt=t,Nt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ur!==null?{id:hn,overflow:fn}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=jt(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,xt=t,Nt=null,!0):!1;default:return!1}}function qa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ka(t){if(ze){var r=Nt;if(r){var o=r;if(!Zh(t,r)){if(qa(t))throw Error(n(418));r=An(o.nextSibling);var a=xt;r&&Zh(t,r)?Jh(a,o):(t.flags=t.flags&-4097|2,ze=!1,xt=t)}}else{if(qa(t))throw Error(n(418));t.flags=t.flags&-4097|2,ze=!1,xt=t}}}function ef(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function So(t){if(t!==xt)return!1;if(!ze)return ef(t),ze=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!za(t.type,t.memoizedProps)),r&&(r=Nt)){if(qa(t))throw tf(),Error(n(418));for(;r;)Jh(t,r),r=An(r.nextSibling)}if(ef(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Nt=An(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Nt=null}}else Nt=xt?An(t.stateNode.nextSibling):null;return!0}function tf(){for(var t=Nt;t;)t=An(t.nextSibling)}function Yr(){Nt=xt=null,ze=!1}function Qa(t){Wt===null?Wt=[t]:Wt.push(t)}var I_=Ee.ReactCurrentBatchConfig;function es(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(m){var y=c.refs;m===null?delete y[h]:y[h]=m},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Co(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function nf(t){var r=t._init;return r(t._payload)}function rf(t){function r(I,C){if(t){var T=I.deletions;T===null?(I.deletions=[C],I.flags|=16):T.push(C)}}function o(I,C){if(!t)return null;for(;C!==null;)r(I,C),C=C.sibling;return null}function a(I,C){for(I=new Map;C!==null;)C.key!==null?I.set(C.key,C):I.set(C.index,C),C=C.sibling;return I}function c(I,C){return I=Bn(I,C),I.index=0,I.sibling=null,I}function h(I,C,T){return I.index=T,t?(T=I.alternate,T!==null?(T=T.index,T<C?(I.flags|=2,C):T):(I.flags|=2,C)):(I.flags|=1048576,C)}function m(I){return t&&I.alternate===null&&(I.flags|=2),I}function y(I,C,T,D){return C===null||C.tag!==6?(C=Uu(T,I.mode,D),C.return=I,C):(C=c(C,T),C.return=I,C)}function E(I,C,T,D){var G=T.type;return G===ge?O(I,C,T.props.children,D,T.key):C!==null&&(C.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Pe&&nf(G)===C.type)?(D=c(C,T.props),D.ref=es(I,C,T),D.return=I,D):(D=qo(T.type,T.key,T.props,null,I.mode,D),D.ref=es(I,C,T),D.return=I,D)}function x(I,C,T,D){return C===null||C.tag!==4||C.stateNode.containerInfo!==T.containerInfo||C.stateNode.implementation!==T.implementation?(C=Vu(T,I.mode,D),C.return=I,C):(C=c(C,T.children||[]),C.return=I,C)}function O(I,C,T,D,G){return C===null||C.tag!==7?(C=_r(T,I.mode,D,G),C.return=I,C):(C=c(C,T),C.return=I,C)}function A(I,C,T){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Uu(""+C,I.mode,T),C.return=I,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Fe:return T=qo(C.type,C.key,C.props,null,I.mode,T),T.ref=es(I,null,C),T.return=I,T;case ee:return C=Vu(C,I.mode,T),C.return=I,C;case Pe:var D=C._init;return A(I,D(C._payload),T)}if(bi(C)||q(C))return C=_r(C,I.mode,T,null),C.return=I,C;Co(I,C)}return null}function P(I,C,T,D){var G=C!==null?C.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return G!==null?null:y(I,C,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Fe:return T.key===G?E(I,C,T,D):null;case ee:return T.key===G?x(I,C,T,D):null;case Pe:return G=T._init,P(I,C,G(T._payload),D)}if(bi(T)||q(T))return G!==null?null:O(I,C,T,D,null);Co(I,T)}return null}function U(I,C,T,D,G){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(T)||null,y(C,I,""+D,G);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Fe:return I=I.get(D.key===null?T:D.key)||null,E(C,I,D,G);case ee:return I=I.get(D.key===null?T:D.key)||null,x(C,I,D,G);case Pe:var Q=D._init;return U(I,C,T,Q(D._payload),G)}if(bi(D)||q(D))return I=I.get(T)||null,O(C,I,D,G,null);Co(C,D)}return null}function W(I,C,T,D){for(var G=null,Q=null,Y=C,ie=C=0,Ze=null;Y!==null&&ie<T.length;ie++){Y.index>ie?(Ze=Y,Y=null):Ze=Y.sibling;var we=P(I,Y,T[ie],D);if(we===null){Y===null&&(Y=Ze);break}t&&Y&&we.alternate===null&&r(I,Y),C=h(we,C,ie),Q===null?G=we:Q.sibling=we,Q=we,Y=Ze}if(ie===T.length)return o(I,Y),ze&&cr(I,ie),G;if(Y===null){for(;ie<T.length;ie++)Y=A(I,T[ie],D),Y!==null&&(C=h(Y,C,ie),Q===null?G=Y:Q.sibling=Y,Q=Y);return ze&&cr(I,ie),G}for(Y=a(I,Y);ie<T.length;ie++)Ze=U(Y,I,ie,T[ie],D),Ze!==null&&(t&&Ze.alternate!==null&&Y.delete(Ze.key===null?ie:Ze.key),C=h(Ze,C,ie),Q===null?G=Ze:Q.sibling=Ze,Q=Ze);return t&&Y.forEach(function($n){return r(I,$n)}),ze&&cr(I,ie),G}function B(I,C,T,D){var G=q(T);if(typeof G!="function")throw Error(n(150));if(T=G.call(T),T==null)throw Error(n(151));for(var Q=G=null,Y=C,ie=C=0,Ze=null,we=T.next();Y!==null&&!we.done;ie++,we=T.next()){Y.index>ie?(Ze=Y,Y=null):Ze=Y.sibling;var $n=P(I,Y,we.value,D);if($n===null){Y===null&&(Y=Ze);break}t&&Y&&$n.alternate===null&&r(I,Y),C=h($n,C,ie),Q===null?G=$n:Q.sibling=$n,Q=$n,Y=Ze}if(we.done)return o(I,Y),ze&&cr(I,ie),G;if(Y===null){for(;!we.done;ie++,we=T.next())we=A(I,we.value,D),we!==null&&(C=h(we,C,ie),Q===null?G=we:Q.sibling=we,Q=we);return ze&&cr(I,ie),G}for(Y=a(I,Y);!we.done;ie++,we=T.next())we=U(Y,I,ie,we.value,D),we!==null&&(t&&we.alternate!==null&&Y.delete(we.key===null?ie:we.key),C=h(we,C,ie),Q===null?G=we:Q.sibling=we,Q=we);return t&&Y.forEach(function(ry){return r(I,ry)}),ze&&cr(I,ie),G}function qe(I,C,T,D){if(typeof T=="object"&&T!==null&&T.type===ge&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Fe:e:{for(var G=T.key,Q=C;Q!==null;){if(Q.key===G){if(G=T.type,G===ge){if(Q.tag===7){o(I,Q.sibling),C=c(Q,T.props.children),C.return=I,I=C;break e}}else if(Q.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Pe&&nf(G)===Q.type){o(I,Q.sibling),C=c(Q,T.props),C.ref=es(I,Q,T),C.return=I,I=C;break e}o(I,Q);break}else r(I,Q);Q=Q.sibling}T.type===ge?(C=_r(T.props.children,I.mode,D,T.key),C.return=I,I=C):(D=qo(T.type,T.key,T.props,null,I.mode,D),D.ref=es(I,C,T),D.return=I,I=D)}return m(I);case ee:e:{for(Q=T.key;C!==null;){if(C.key===Q)if(C.tag===4&&C.stateNode.containerInfo===T.containerInfo&&C.stateNode.implementation===T.implementation){o(I,C.sibling),C=c(C,T.children||[]),C.return=I,I=C;break e}else{o(I,C);break}else r(I,C);C=C.sibling}C=Vu(T,I.mode,D),C.return=I,I=C}return m(I);case Pe:return Q=T._init,qe(I,C,Q(T._payload),D)}if(bi(T))return W(I,C,T,D);if(q(T))return B(I,C,T,D);Co(I,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,C!==null&&C.tag===6?(o(I,C.sibling),C=c(C,T),C.return=I,I=C):(o(I,C),C=Uu(T,I.mode,D),C.return=I,I=C),m(I)):o(I,C)}return qe}var Xr=rf(!0),sf=rf(!1),ko=Dn(null),Io=null,Jr=null,Ya=null;function Xa(){Ya=Jr=Io=null}function Ja(t){var r=ko.current;je(ko),t._currentValue=r}function Za(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function Zr(t,r){Io=t,Ya=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(yt=!0),t.firstContext=null)}function Dt(t){var r=t._currentValue;if(Ya!==t)if(t={context:t,memoizedValue:r,next:null},Jr===null){if(Io===null)throw Error(n(308));Jr=t,Io.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return r}var dr=null;function eu(t){dr===null?dr=[t]:dr.push(t)}function of(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,eu(r)):(o.next=c.next,c.next=o),r.interleaved=o,pn(t,a)}function pn(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var jn=!1;function tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Fn(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,ve&2){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,pn(t,o)}return c=a.interleaved,c===null?(r.next=r,eu(a)):(r.next=c.next,c.next=r),a.interleaved=r,pn(t,o)}function To(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ma(t,o)}}function af(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=r:h=h.next=r}else c=h=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function xo(t,r,o,a){var c=t.updateQueue;jn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,y=c.shared.pending;if(y!==null){c.shared.pending=null;var E=y,x=E.next;E.next=null,m===null?h=x:m.next=x,m=E;var O=t.alternate;O!==null&&(O=O.updateQueue,y=O.lastBaseUpdate,y!==m&&(y===null?O.firstBaseUpdate=x:y.next=x,O.lastBaseUpdate=E))}if(h!==null){var A=c.baseState;m=0,O=x=E=null,y=h;do{var P=y.lane,U=y.eventTime;if((a&P)===P){O!==null&&(O=O.next={eventTime:U,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var W=t,B=y;switch(P=r,U=o,B.tag){case 1:if(W=B.payload,typeof W=="function"){A=W.call(U,A,P);break e}A=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=B.payload,P=typeof W=="function"?W.call(U,A,P):W,P==null)break e;A=z({},A,P);break e;case 2:jn=!0}}y.callback!==null&&y.lane!==0&&(t.flags|=64,P=c.effects,P===null?c.effects=[y]:P.push(y))}else U={eventTime:U,lane:P,tag:y.tag,payload:y.payload,callback:y.callback,next:null},O===null?(x=O=U,E=A):O=O.next=U,m|=P;if(y=y.next,y===null){if(y=c.shared.pending,y===null)break;P=y,y=P.next,P.next=null,c.lastBaseUpdate=P,c.shared.pending=null}}while(!0);if(O===null&&(E=A),c.baseState=E,c.firstBaseUpdate=x,c.lastBaseUpdate=O,r=c.shared.interleaved,r!==null){c=r;do m|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);pr|=m,t.lanes=m,t.memoizedState=A}}function uf(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var ts={},nn=Dn(ts),ns=Dn(ts),rs=Dn(ts);function hr(t){if(t===ts)throw Error(n(174));return t}function nu(t,r){switch(Oe(rs,r),Oe(ns,t),Oe(nn,ts),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ra(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=ra(r,t)}je(nn),Oe(nn,r)}function ei(){je(nn),je(ns),je(rs)}function cf(t){hr(rs.current);var r=hr(nn.current),o=ra(r,t.type);r!==o&&(Oe(ns,t),Oe(nn,o))}function ru(t){ns.current===t&&(je(nn),je(ns))}var Ue=Dn(0);function No(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var iu=[];function su(){for(var t=0;t<iu.length;t++)iu[t]._workInProgressVersionPrimary=null;iu.length=0}var bo=Ee.ReactCurrentDispatcher,ou=Ee.ReactCurrentBatchConfig,fr=0,Ve=null,Qe=null,Xe=null,Ro=!1,is=!1,ss=0,T_=0;function ct(){throw Error(n(321))}function lu(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!Ht(t[o],r[o]))return!1;return!0}function au(t,r,o,a,c,h){if(fr=h,Ve=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,bo.current=t===null||t.memoizedState===null?R_:P_,t=o(a,c),is){h=0;do{if(is=!1,ss=0,25<=h)throw Error(n(301));h+=1,Xe=Qe=null,r.updateQueue=null,bo.current=O_,t=o(a,c)}while(is)}if(bo.current=Ao,r=Qe!==null&&Qe.next!==null,fr=0,Xe=Qe=Ve=null,Ro=!1,r)throw Error(n(300));return t}function uu(){var t=ss!==0;return ss=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Ve.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Mt(){if(Qe===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var r=Xe===null?Ve.memoizedState:Xe.next;if(r!==null)Xe=r,Qe=t;else{if(t===null)throw Error(n(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Xe===null?Ve.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function os(t,r){return typeof r=="function"?r(t):r}function cu(t){var r=Mt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=Qe,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var y=m=null,E=null,x=h;do{var O=x.lane;if((fr&O)===O)E!==null&&(E=E.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),a=x.hasEagerState?x.eagerState:t(a,x.action);else{var A={lane:O,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};E===null?(y=E=A,m=a):E=E.next=A,Ve.lanes|=O,pr|=O}x=x.next}while(x!==null&&x!==h);E===null?m=a:E.next=y,Ht(a,r.memoizedState)||(yt=!0),r.memoizedState=a,r.baseState=m,r.baseQueue=E,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ve.lanes|=h,pr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function du(t){var r=Mt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=r.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);Ht(h,r.memoizedState)||(yt=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function df(){}function hf(t,r){var o=Ve,a=Mt(),c=r(),h=!Ht(a.memoizedState,c);if(h&&(a.memoizedState=c,yt=!0),a=a.queue,hu(mf.bind(null,o,a,t),[t]),a.getSnapshot!==r||h||Xe!==null&&Xe.memoizedState.tag&1){if(o.flags|=2048,ls(9,pf.bind(null,o,a,c,r),void 0,null),Je===null)throw Error(n(349));fr&30||ff(o,r,c)}return c}function ff(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Ve.updateQueue,r===null?(r={lastEffect:null,stores:null},Ve.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function pf(t,r,o,a){r.value=o,r.getSnapshot=a,gf(r)&&vf(t)}function mf(t,r,o){return o(function(){gf(r)&&vf(t)})}function gf(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!Ht(t,o)}catch{return!0}}function vf(t){var r=pn(t,1);r!==null&&qt(r,t,1,-1)}function _f(t){var r=rn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},r.queue=t,t=t.dispatch=b_.bind(null,Ve,t),[r.memoizedState,t]}function ls(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=Ve.updateQueue,r===null?(r={lastEffect:null,stores:null},Ve.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function yf(){return Mt().memoizedState}function Po(t,r,o,a){var c=rn();Ve.flags|=t,c.memoizedState=ls(1|r,o,void 0,a===void 0?null:a)}function Oo(t,r,o,a){var c=Mt();a=a===void 0?null:a;var h=void 0;if(Qe!==null){var m=Qe.memoizedState;if(h=m.destroy,a!==null&&lu(a,m.deps)){c.memoizedState=ls(r,o,h,a);return}}Ve.flags|=t,c.memoizedState=ls(1|r,o,h,a)}function wf(t,r){return Po(8390656,8,t,r)}function hu(t,r){return Oo(2048,8,t,r)}function Ef(t,r){return Oo(4,2,t,r)}function Sf(t,r){return Oo(4,4,t,r)}function Cf(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function kf(t,r,o){return o=o!=null?o.concat([t]):null,Oo(4,4,Cf.bind(null,r,t),o)}function fu(){}function If(t,r){var o=Mt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&lu(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function Tf(t,r){var o=Mt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&lu(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function xf(t,r,o){return fr&21?(Ht(o,r)||(o=nh(),Ve.lanes|=o,pr|=o,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=o)}function x_(t,r){var o=Ie;Ie=o!==0&&4>o?o:4,t(!0);var a=ou.transition;ou.transition={};try{t(!1),r()}finally{Ie=o,ou.transition=a}}function Nf(){return Mt().memoizedState}function N_(t,r,o){var a=Hn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},bf(t))Rf(r,o);else if(o=of(t,r,o,a),o!==null){var c=pt();qt(o,t,a,c),Pf(o,r,a)}}function b_(t,r,o){var a=Hn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(bf(t))Rf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var m=r.lastRenderedState,y=h(m,o);if(c.hasEagerState=!0,c.eagerState=y,Ht(y,m)){var E=r.interleaved;E===null?(c.next=c,eu(r)):(c.next=E.next,E.next=c),r.interleaved=c;return}}catch{}finally{}o=of(t,r,c,a),o!==null&&(c=pt(),qt(o,t,a,c),Pf(o,r,a))}}function bf(t){var r=t.alternate;return t===Ve||r!==null&&r===Ve}function Rf(t,r){is=Ro=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Pf(t,r,o){if(o&4194240){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ma(t,o)}}var Ao={readContext:Dt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},R_={readContext:Dt,useCallback:function(t,r){return rn().memoizedState=[t,r===void 0?null:r],t},useContext:Dt,useEffect:wf,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Po(4194308,4,Cf.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Po(4194308,4,t,r)},useInsertionEffect:function(t,r){return Po(4,2,t,r)},useMemo:function(t,r){var o=rn();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=rn();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=N_.bind(null,Ve,t),[a.memoizedState,t]},useRef:function(t){var r=rn();return t={current:t},r.memoizedState=t},useState:_f,useDebugValue:fu,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=_f(!1),r=t[0];return t=x_.bind(null,t[1]),rn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=Ve,c=rn();if(ze){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Je===null)throw Error(n(349));fr&30||ff(a,r,o)}c.memoizedState=o;var h={value:o,getSnapshot:r};return c.queue=h,wf(mf.bind(null,a,h,t),[t]),a.flags|=2048,ls(9,pf.bind(null,a,h,o,r),void 0,null),o},useId:function(){var t=rn(),r=Je.identifierPrefix;if(ze){var o=fn,a=hn;o=(a&~(1<<32-Vt(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=ss++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=T_++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},P_={readContext:Dt,useCallback:If,useContext:Dt,useEffect:hu,useImperativeHandle:kf,useInsertionEffect:Ef,useLayoutEffect:Sf,useMemo:Tf,useReducer:cu,useRef:yf,useState:function(){return cu(os)},useDebugValue:fu,useDeferredValue:function(t){var r=Mt();return xf(r,Qe.memoizedState,t)},useTransition:function(){var t=cu(os)[0],r=Mt().memoizedState;return[t,r]},useMutableSource:df,useSyncExternalStore:hf,useId:Nf,unstable_isNewReconciler:!1},O_={readContext:Dt,useCallback:If,useContext:Dt,useEffect:hu,useImperativeHandle:kf,useInsertionEffect:Ef,useLayoutEffect:Sf,useMemo:Tf,useReducer:du,useRef:yf,useState:function(){return du(os)},useDebugValue:fu,useDeferredValue:function(t){var r=Mt();return Qe===null?r.memoizedState=t:xf(r,Qe.memoizedState,t)},useTransition:function(){var t=du(os)[0],r=Mt().memoizedState;return[t,r]},useMutableSource:df,useSyncExternalStore:hf,useId:Nf,unstable_isNewReconciler:!1};function Bt(t,r){if(t&&t.defaultProps){r=z({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function pu(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:z({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Do={isMounted:function(t){return(t=t._reactInternals)?or(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=pt(),c=Hn(t),h=mn(a,c);h.payload=r,o!=null&&(h.callback=o),r=Fn(t,h,c),r!==null&&(qt(r,t,c,a),To(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=pt(),c=Hn(t),h=mn(a,c);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=Fn(t,h,c),r!==null&&(qt(r,t,c,a),To(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=pt(),a=Hn(t),c=mn(o,a);c.tag=2,r!=null&&(c.callback=r),r=Fn(t,c,a),r!==null&&(qt(r,t,a,o),To(r,t,a))}};function Of(t,r,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):r.prototype&&r.prototype.isPureReactComponent?!qi(o,a)||!qi(c,h):!0}function Af(t,r,o){var a=!1,c=Mn,h=r.contextType;return typeof h=="object"&&h!==null?h=Dt(h):(c=_t(r)?ar:ut.current,a=r.contextTypes,h=(a=a!=null)?qr(t,c):Mn),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Do,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function Df(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&Do.enqueueReplaceState(r,r.state,null)}function mu(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},tu(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=Dt(h):(h=_t(r)?ar:ut.current,c.context=qr(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(pu(t,r,h,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&Do.enqueueReplaceState(c,c.state,null),xo(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,r){try{var o="",a=r;do o+=ae(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function gu(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function vu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var A_=typeof WeakMap=="function"?WeakMap:Map;function Mf(t,r,o){o=mn(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){Vo||(Vo=!0,Ou=a),vu(t,r)},o}function Lf(t,r,o){o=mn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){vu(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){vu(t,r),typeof a!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var m=r.stack;this.componentDidCatch(r.value,{componentStack:m!==null?m:""})}),o}function jf(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new A_;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=q_.bind(null,t,r,o),r.then(t,t))}function Ff(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function zf(t,r,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=mn(-1,1),r.tag=2,Fn(o,r,1))),o.lanes|=1),t)}var D_=Ee.ReactCurrentOwner,yt=!1;function ft(t,r,o,a){r.child=t===null?sf(r,null,o,a):Xr(r,t.child,o,a)}function Uf(t,r,o,a,c){o=o.render;var h=r.ref;return Zr(r,c),a=au(t,r,o,a,h,c),o=uu(),t!==null&&!yt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,gn(t,r,c)):(ze&&o&&$a(r),r.flags|=1,ft(t,r,a,c),r.child)}function Vf(t,r,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!zu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,Hf(t,r,h,a,c)):(t=qo(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:qi,o(m,a)&&t.ref===r.ref)return gn(t,r,c)}return r.flags|=1,t=Bn(h,a),t.ref=r.ref,t.return=r,r.child=t}function Hf(t,r,o,a,c){if(t!==null){var h=t.memoizedProps;if(qi(h,a)&&t.ref===r.ref)if(yt=!1,r.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(yt=!0);else return r.lanes=t.lanes,gn(t,r,c)}return _u(t,r,o,a,c)}function Wf(t,r,o){var a=r.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(ri,bt),bt|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Oe(ri,bt),bt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Oe(ri,bt),bt|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,Oe(ri,bt),bt|=a;return ft(t,r,c,o),r.child}function Bf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function _u(t,r,o,a,c){var h=_t(o)?ar:ut.current;return h=qr(r,h),Zr(r,c),o=au(t,r,o,a,h,c),a=uu(),t!==null&&!yt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,gn(t,r,c)):(ze&&a&&$a(r),r.flags|=1,ft(t,r,o,c),r.child)}function $f(t,r,o,a,c){if(_t(o)){var h=!0;_o(r)}else h=!1;if(Zr(r,c),r.stateNode===null)Lo(t,r),Af(r,o,a),mu(r,o,a,c),a=!0;else if(t===null){var m=r.stateNode,y=r.memoizedProps;m.props=y;var E=m.context,x=o.contextType;typeof x=="object"&&x!==null?x=Dt(x):(x=_t(o)?ar:ut.current,x=qr(r,x));var O=o.getDerivedStateFromProps,A=typeof O=="function"||typeof m.getSnapshotBeforeUpdate=="function";A||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==a||E!==x)&&Df(r,m,a,x),jn=!1;var P=r.memoizedState;m.state=P,xo(r,a,m,c),E=r.memoizedState,y!==a||P!==E||vt.current||jn?(typeof O=="function"&&(pu(r,o,O,a),E=r.memoizedState),(y=jn||Of(r,o,y,a,P,E,x))?(A||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=E),m.props=a,m.state=E,m.context=x,a=y):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{m=r.stateNode,lf(t,r),y=r.memoizedProps,x=r.type===r.elementType?y:Bt(r.type,y),m.props=x,A=r.pendingProps,P=m.context,E=o.contextType,typeof E=="object"&&E!==null?E=Dt(E):(E=_t(o)?ar:ut.current,E=qr(r,E));var U=o.getDerivedStateFromProps;(O=typeof U=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==A||P!==E)&&Df(r,m,a,E),jn=!1,P=r.memoizedState,m.state=P,xo(r,a,m,c);var W=r.memoizedState;y!==A||P!==W||vt.current||jn?(typeof U=="function"&&(pu(r,o,U,a),W=r.memoizedState),(x=jn||Of(r,o,x,a,P,W,E)||!1)?(O||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,W,E),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,W,E)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=W),m.props=a,m.state=W,m.context=E,a=x):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(r.flags|=1024),a=!1)}return yu(t,r,o,a,h,c)}function yu(t,r,o,a,c,h){Bf(t,r);var m=(r.flags&128)!==0;if(!a&&!m)return c&&Qh(r,o,!1),gn(t,r,h);a=r.stateNode,D_.current=r;var y=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&m?(r.child=Xr(r,t.child,null,h),r.child=Xr(r,null,y,h)):ft(t,r,y,h),r.memoizedState=a.state,c&&Qh(r,o,!0),r.child}function Gf(t){var r=t.stateNode;r.pendingContext?qh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&qh(t,r.context,!1),nu(t,r.containerInfo)}function qf(t,r,o,a,c){return Yr(),Qa(c),r.flags|=256,ft(t,r,o,a),r.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function Eu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Kf(t,r,o){var a=r.pendingProps,c=Ue.current,h=!1,m=(r.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(c&2)!==0),y?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Oe(Ue,c&1),t===null)return Ka(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(m=a.children,t=a.fallback,h?(a=r.mode,h=r.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Ko(m,a,0,null),t=_r(t,a,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=Eu(o),r.memoizedState=wu,t):Su(r,m));if(c=t.memoizedState,c!==null&&(y=c.dehydrated,y!==null))return M_(t,r,m,a,y,c,o);if(h){h=a.fallback,m=r.mode,c=t.child,y=c.sibling;var E={mode:"hidden",children:a.children};return!(m&1)&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=E,r.deletions=null):(a=Bn(c,E),a.subtreeFlags=c.subtreeFlags&14680064),y!==null?h=Bn(y,h):(h=_r(h,m,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,m=t.child.memoizedState,m=m===null?Eu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,r.memoizedState=wu,a}return h=t.child,t=h.sibling,a=Bn(h,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function Su(t,r){return r=Ko({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Mo(t,r,o,a){return a!==null&&Qa(a),Xr(r,t.child,null,o),t=Su(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function M_(t,r,o,a,c,h,m){if(o)return r.flags&256?(r.flags&=-257,a=gu(Error(n(422))),Mo(t,r,m,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=a.fallback,c=r.mode,a=Ko({mode:"visible",children:a.children},c,0,null),h=_r(h,c,m,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,r.mode&1&&Xr(r,t.child,null,m),r.child.memoizedState=Eu(m),r.memoizedState=wu,h);if(!(r.mode&1))return Mo(t,r,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var y=a.dgst;return a=y,h=Error(n(419)),a=gu(h,a,void 0),Mo(t,r,m,a)}if(y=(m&t.childLanes)!==0,yt||y){if(a=Je,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,pn(t,c),qt(a,t,c,-1))}return Fu(),a=gu(Error(n(421))),Mo(t,r,m,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=K_.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,Nt=An(c.nextSibling),xt=r,ze=!0,Wt=null,t!==null&&(Ot[At++]=hn,Ot[At++]=fn,Ot[At++]=ur,hn=t.id,fn=t.overflow,ur=r),r=Su(r,a.children),r.flags|=4096,r)}function Qf(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),Za(t.return,r,o)}function Cu(t,r,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function Yf(t,r,o){var a=r.pendingProps,c=a.revealOrder,h=a.tail;if(ft(t,r,a.children,o),a=Ue.current,a&2)a=a&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qf(t,o,r);else if(t.tag===19)Qf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Oe(Ue,a),!(r.mode&1))r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&No(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),Cu(r,!1,c,o,h);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&No(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Cu(r,!0,o,null,h);break;case"together":Cu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Lo(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function gn(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),pr|=r.lanes,!(o&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Bn(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Bn(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function L_(t,r,o){switch(r.tag){case 3:Gf(r),Yr();break;case 5:cf(r);break;case 1:_t(r.type)&&_o(r);break;case 4:nu(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;Oe(ko,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(Oe(Ue,Ue.current&1),r.flags|=128,null):o&r.child.childLanes?Kf(t,r,o):(Oe(Ue,Ue.current&1),t=gn(t,r,o),t!==null?t.sibling:null);Oe(Ue,Ue.current&1);break;case 19:if(a=(o&r.childLanes)!==0,t.flags&128){if(a)return Yf(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Oe(Ue,Ue.current),a)break;return null;case 22:case 23:return r.lanes=0,Wf(t,r,o)}return gn(t,r,o)}var Xf,ku,Jf,Zf;Xf=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ku=function(){},Jf=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,hr(nn.current);var h=null;switch(o){case"input":c=ye(t,c),a=ye(t,a),h=[];break;case"select":c=z({},c,{value:void 0}),a=z({},a,{value:void 0}),h=[];break;case"textarea":c=na(t,c),a=na(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=mo)}ia(o,a);var m;o=null;for(x in c)if(!a.hasOwnProperty(x)&&c.hasOwnProperty(x)&&c[x]!=null)if(x==="style"){var y=c[x];for(m in y)y.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(l.hasOwnProperty(x)?h||(h=[]):(h=h||[]).push(x,null));for(x in a){var E=a[x];if(y=c!=null?c[x]:void 0,a.hasOwnProperty(x)&&E!==y&&(E!=null||y!=null))if(x==="style")if(y){for(m in y)!y.hasOwnProperty(m)||E&&E.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in E)E.hasOwnProperty(m)&&y[m]!==E[m]&&(o||(o={}),o[m]=E[m])}else o||(h||(h=[]),h.push(x,o)),o=E;else x==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,y=y?y.__html:void 0,E!=null&&y!==E&&(h=h||[]).push(x,E)):x==="children"?typeof E!="string"&&typeof E!="number"||(h=h||[]).push(x,""+E):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(l.hasOwnProperty(x)?(E!=null&&x==="onScroll"&&Le("scroll",t),h||y===E||(h=[])):(h=h||[]).push(x,E))}o&&(h=h||[]).push("style",o);var x=h;(r.updateQueue=x)&&(r.flags|=4)}},Zf=function(t,r,o,a){o!==a&&(r.flags|=4)};function as(t,r){if(!ze)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function dt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function j_(t,r,o){var a=r.pendingProps;switch(Ga(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(r),null;case 1:return _t(r.type)&&vo(),dt(r),null;case 3:return a=r.stateNode,ei(),je(vt),je(ut),su(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(So(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Wt!==null&&(Mu(Wt),Wt=null))),ku(t,r),dt(r),null;case 5:ru(r);var c=hr(rs.current);if(o=r.type,t!==null&&r.stateNode!=null)Jf(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return dt(r),null}if(t=hr(nn.current),So(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[tn]=r,a[Ji]=h,t=(r.mode&1)!==0,o){case"dialog":Le("cancel",a),Le("close",a);break;case"iframe":case"object":case"embed":Le("load",a);break;case"video":case"audio":for(c=0;c<Qi.length;c++)Le(Qi[c],a);break;case"source":Le("error",a);break;case"img":case"image":case"link":Le("error",a),Le("load",a);break;case"details":Le("toggle",a);break;case"input":it(a,h),Le("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Le("invalid",a);break;case"textarea":Md(a,h),Le("invalid",a)}ia(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var y=h[m];m==="children"?typeof y=="string"?a.textContent!==y&&(h.suppressHydrationWarning!==!0&&po(a.textContent,y,t),c=["children",y]):typeof y=="number"&&a.textContent!==""+y&&(h.suppressHydrationWarning!==!0&&po(a.textContent,y,t),c=["children",""+y]):l.hasOwnProperty(m)&&y!=null&&m==="onScroll"&&Le("scroll",a)}switch(o){case"input":It(a),Dd(a,h,!0);break;case"textarea":It(a),jd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=mo)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[tn]=r,t[Ji]=a,Xf(t,r,!1,!1),r.stateNode=t;e:{switch(m=sa(o,a),o){case"dialog":Le("cancel",t),Le("close",t),c=a;break;case"iframe":case"object":case"embed":Le("load",t),c=a;break;case"video":case"audio":for(c=0;c<Qi.length;c++)Le(Qi[c],t);c=a;break;case"source":Le("error",t),c=a;break;case"img":case"image":case"link":Le("error",t),Le("load",t),c=a;break;case"details":Le("toggle",t),c=a;break;case"input":it(t,a),c=ye(t,a),Le("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=z({},a,{value:void 0}),Le("invalid",t);break;case"textarea":Md(t,a),c=na(t,a),Le("invalid",t);break;default:c=a}ia(o,c),y=c;for(h in y)if(y.hasOwnProperty(h)){var E=y[h];h==="style"?Vd(t,E):h==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&zd(t,E)):h==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&Ri(t,E):typeof E=="number"&&Ri(t,""+E):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?E!=null&&h==="onScroll"&&Le("scroll",t):E!=null&&_e(t,h,E,m))}switch(o){case"input":It(t),Dd(t,a,!1);break;case"textarea":It(t),jd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+te(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Mr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Mr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=mo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return dt(r),null;case 6:if(t&&r.stateNode!=null)Zf(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=hr(rs.current),hr(nn.current),So(r)){if(a=r.stateNode,o=r.memoizedProps,a[tn]=r,(h=a.nodeValue!==o)&&(t=xt,t!==null))switch(t.tag){case 3:po(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(a.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[tn]=r,r.stateNode=a}return dt(r),null;case 13:if(je(Ue),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ze&&Nt!==null&&r.mode&1&&!(r.flags&128))tf(),Yr(),r.flags|=98560,h=!1;else if(h=So(r),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[tn]=r}else Yr(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;dt(r),h=!1}else Wt!==null&&(Mu(Wt),Wt=null),h=!0;if(!h)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(t===null||Ue.current&1?Ye===0&&(Ye=3):Fu())),r.updateQueue!==null&&(r.flags|=4),dt(r),null);case 4:return ei(),ku(t,r),t===null&&Yi(r.stateNode.containerInfo),dt(r),null;case 10:return Ja(r.type._context),dt(r),null;case 17:return _t(r.type)&&vo(),dt(r),null;case 19:if(je(Ue),h=r.memoizedState,h===null)return dt(r),null;if(a=(r.flags&128)!==0,m=h.rendering,m===null)if(a)as(h,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(m=No(t),m!==null){for(r.flags|=128,as(h,!1),a=m.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Oe(Ue,Ue.current&1|2),r.child}t=t.sibling}h.tail!==null&&Ge()>ii&&(r.flags|=128,a=!0,as(h,!1),r.lanes=4194304)}else{if(!a)if(t=No(m),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),as(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!ze)return dt(r),null}else 2*Ge()-h.renderingStartTime>ii&&o!==1073741824&&(r.flags|=128,a=!0,as(h,!1),r.lanes=4194304);h.isBackwards?(m.sibling=r.child,r.child=m):(o=h.last,o!==null?o.sibling=m:r.child=m,h.last=m)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Ge(),r.sibling=null,o=Ue.current,Oe(Ue,a?o&1|2:o&1),r):(dt(r),null);case 22:case 23:return ju(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?bt&1073741824&&(dt(r),r.subtreeFlags&6&&(r.flags|=8192)):dt(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function F_(t,r){switch(Ga(r),r.tag){case 1:return _t(r.type)&&vo(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return ei(),je(vt),je(ut),su(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return ru(r),null;case 13:if(je(Ue),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Yr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return je(Ue),null;case 4:return ei(),null;case 10:return Ja(r.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var jo=!1,ht=!1,z_=typeof WeakSet=="function"?WeakSet:Set,H=null;function ni(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){We(t,r,a)}else o.current=null}function Iu(t,r,o){try{o()}catch(a){We(t,r,a)}}var ep=!1;function U_(t,r){if(ja=no,t=Ph(),ba(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,y=-1,E=-1,x=0,O=0,A=t,P=null;t:for(;;){for(var U;A!==o||c!==0&&A.nodeType!==3||(y=m+c),A!==h||a!==0&&A.nodeType!==3||(E=m+a),A.nodeType===3&&(m+=A.nodeValue.length),(U=A.firstChild)!==null;)P=A,A=U;for(;;){if(A===t)break t;if(P===o&&++x===c&&(y=m),P===h&&++O===a&&(E=m),(U=A.nextSibling)!==null)break;A=P,P=A.parentNode}A=U}o=y===-1||E===-1?null:{start:y,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(Fa={focusedElem:t,selectionRange:o},no=!1,H=r;H!==null;)if(r=H,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,H=t;else for(;H!==null;){r=H;try{var W=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var B=W.memoizedProps,qe=W.memoizedState,I=r.stateNode,C=I.getSnapshotBeforeUpdate(r.elementType===r.type?B:Bt(r.type,B),qe);I.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var T=r.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(D){We(r,r.return,D)}if(t=r.sibling,t!==null){t.return=r.return,H=t;break}H=r.return}return W=ep,ep=!1,W}function us(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Iu(r,o,h)}c=c.next}while(c!==a)}}function Fo(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function Tu(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function tp(t){var r=t.alternate;r!==null&&(t.alternate=null,tp(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[tn],delete r[Ji],delete r[Ha],delete r[S_],delete r[C_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function np(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=mo));else if(a!==4&&(t=t.child,t!==null))for(xu(t,r,o),t=t.sibling;t!==null;)xu(t,r,o),t=t.sibling}function Nu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Nu(t,r,o),t=t.sibling;t!==null;)Nu(t,r,o),t=t.sibling}var st=null,$t=!1;function zn(t,r,o){for(o=o.child;o!==null;)ip(t,r,o),o=o.sibling}function ip(t,r,o){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Ys,o)}catch{}switch(o.tag){case 5:ht||ni(o,r);case 6:var a=st,c=$t;st=null,zn(t,r,o),st=a,$t=c,st!==null&&($t?(t=st,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):st.removeChild(o.stateNode));break;case 18:st!==null&&($t?(t=st,o=o.stateNode,t.nodeType===8?Va(t.parentNode,o):t.nodeType===1&&Va(t,o),Vi(t)):Va(st,o.stateNode));break;case 4:a=st,c=$t,st=o.stateNode.containerInfo,$t=!0,zn(t,r,o),st=a,$t=c;break;case 0:case 11:case 14:case 15:if(!ht&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&Iu(o,r,m),c=c.next}while(c!==a)}zn(t,r,o);break;case 1:if(!ht&&(ni(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(y){We(o,r,y)}zn(t,r,o);break;case 21:zn(t,r,o);break;case 22:o.mode&1?(ht=(a=ht)||o.memoizedState!==null,zn(t,r,o),ht=a):zn(t,r,o);break;default:zn(t,r,o)}}function sp(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new z_),r.forEach(function(a){var c=Q_.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Gt(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=r,y=m;e:for(;y!==null;){switch(y.tag){case 5:st=y.stateNode,$t=!1;break e;case 3:st=y.stateNode.containerInfo,$t=!0;break e;case 4:st=y.stateNode.containerInfo,$t=!0;break e}y=y.return}if(st===null)throw Error(n(160));ip(h,m,c),st=null,$t=!1;var E=c.alternate;E!==null&&(E.return=null),c.return=null}catch(x){We(c,r,x)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)op(r,t),r=r.sibling}function op(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(r,t),sn(t),a&4){try{us(3,t,t.return),Fo(3,t)}catch(B){We(t,t.return,B)}try{us(5,t,t.return)}catch(B){We(t,t.return,B)}}break;case 1:Gt(r,t),sn(t),a&512&&o!==null&&ni(o,o.return);break;case 5:if(Gt(r,t),sn(t),a&512&&o!==null&&ni(o,o.return),t.flags&32){var c=t.stateNode;try{Ri(c,"")}catch(B){We(t,t.return,B)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,y=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{y==="input"&&h.type==="radio"&&h.name!=null&&Ut(c,h),sa(y,m);var x=sa(y,h);for(m=0;m<E.length;m+=2){var O=E[m],A=E[m+1];O==="style"?Vd(c,A):O==="dangerouslySetInnerHTML"?zd(c,A):O==="children"?Ri(c,A):_e(c,O,A,x)}switch(y){case"input":Dr(c,h);break;case"textarea":Ld(c,h);break;case"select":var P=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var U=h.value;U!=null?Mr(c,!!h.multiple,U,!1):P!==!!h.multiple&&(h.defaultValue!=null?Mr(c,!!h.multiple,h.defaultValue,!0):Mr(c,!!h.multiple,h.multiple?[]:"",!1))}c[Ji]=h}catch(B){We(t,t.return,B)}}break;case 6:if(Gt(r,t),sn(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(B){We(t,t.return,B)}}break;case 3:if(Gt(r,t),sn(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Vi(r.containerInfo)}catch(B){We(t,t.return,B)}break;case 4:Gt(r,t),sn(t);break;case 13:Gt(r,t),sn(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Pu=Ge())),a&4&&sp(t);break;case 22:if(O=o!==null&&o.memoizedState!==null,t.mode&1?(ht=(x=ht)||O,Gt(r,t),ht=x):Gt(r,t),sn(t),a&8192){if(x=t.memoizedState!==null,(t.stateNode.isHidden=x)&&!O&&t.mode&1)for(H=t,O=t.child;O!==null;){for(A=H=O;H!==null;){switch(P=H,U=P.child,P.tag){case 0:case 11:case 14:case 15:us(4,P,P.return);break;case 1:ni(P,P.return);var W=P.stateNode;if(typeof W.componentWillUnmount=="function"){a=P,o=P.return;try{r=a,W.props=r.memoizedProps,W.state=r.memoizedState,W.componentWillUnmount()}catch(B){We(a,o,B)}}break;case 5:ni(P,P.return);break;case 22:if(P.memoizedState!==null){up(A);continue}}U!==null?(U.return=P,H=U):up(A)}O=O.sibling}e:for(O=null,A=t;;){if(A.tag===5){if(O===null){O=A;try{c=A.stateNode,x?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(y=A.stateNode,E=A.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null,y.style.display=Ud("display",m))}catch(B){We(t,t.return,B)}}}else if(A.tag===6){if(O===null)try{A.stateNode.nodeValue=x?"":A.memoizedProps}catch(B){We(t,t.return,B)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===t)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===t)break e;for(;A.sibling===null;){if(A.return===null||A.return===t)break e;O===A&&(O=null),A=A.return}O===A&&(O=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:Gt(r,t),sn(t),a&4&&sp(t);break;case 21:break;default:Gt(r,t),sn(t)}}function sn(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(np(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Ri(c,""),a.flags&=-33);var h=rp(t);Nu(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,y=rp(t);xu(t,y,m);break;default:throw Error(n(161))}}catch(E){We(t,t.return,E)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function V_(t,r,o){H=t,lp(t)}function lp(t,r,o){for(var a=(t.mode&1)!==0;H!==null;){var c=H,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||jo;if(!m){var y=c.alternate,E=y!==null&&y.memoizedState!==null||ht;y=jo;var x=ht;if(jo=m,(ht=E)&&!x)for(H=c;H!==null;)m=H,E=m.child,m.tag===22&&m.memoizedState!==null?cp(c):E!==null?(E.return=m,H=E):cp(c);for(;h!==null;)H=h,lp(h),h=h.sibling;H=c,jo=y,ht=x}ap(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,H=h):ap(t)}}function ap(t){for(;H!==null;){var r=H;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:ht||Fo(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!ht)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:Bt(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&uf(r,h,a);break;case 3:var m=r.updateQueue;if(m!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}uf(r,m,o)}break;case 5:var y=r.stateNode;if(o===null&&r.flags&4){o=y;var E=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var x=r.alternate;if(x!==null){var O=x.memoizedState;if(O!==null){var A=O.dehydrated;A!==null&&Vi(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ht||r.flags&512&&Tu(r)}catch(P){We(r,r.return,P)}}if(r===t){H=null;break}if(o=r.sibling,o!==null){o.return=r.return,H=o;break}H=r.return}}function up(t){for(;H!==null;){var r=H;if(r===t){H=null;break}var o=r.sibling;if(o!==null){o.return=r.return,H=o;break}H=r.return}}function cp(t){for(;H!==null;){var r=H;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Fo(4,r)}catch(E){We(r,o,E)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(E){We(r,c,E)}}var h=r.return;try{Tu(r)}catch(E){We(r,h,E)}break;case 5:var m=r.return;try{Tu(r)}catch(E){We(r,m,E)}}}catch(E){We(r,r.return,E)}if(r===t){H=null;break}var y=r.sibling;if(y!==null){y.return=r.return,H=y;break}H=r.return}}var H_=Math.ceil,zo=Ee.ReactCurrentDispatcher,bu=Ee.ReactCurrentOwner,Lt=Ee.ReactCurrentBatchConfig,ve=0,Je=null,Ke=null,ot=0,bt=0,ri=Dn(0),Ye=0,cs=null,pr=0,Uo=0,Ru=0,ds=null,wt=null,Pu=0,ii=1/0,vn=null,Vo=!1,Ou=null,Un=null,Ho=!1,Vn=null,Wo=0,hs=0,Au=null,Bo=-1,$o=0;function pt(){return ve&6?Ge():Bo!==-1?Bo:Bo=Ge()}function Hn(t){return t.mode&1?ve&2&&ot!==0?ot&-ot:I_.transition!==null?($o===0&&($o=nh()),$o):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:dh(t.type)),t):1}function qt(t,r,o,a){if(50<hs)throw hs=0,Au=null,Error(n(185));Li(t,o,a),(!(ve&2)||t!==Je)&&(t===Je&&(!(ve&2)&&(Uo|=o),Ye===4&&Wn(t,ot)),Et(t,a),o===1&&ve===0&&!(r.mode&1)&&(ii=Ge()+500,yo&&Ln()))}function Et(t,r){var o=t.callbackNode;Iv(t,r);var a=Zs(t,t===Je?ot:0);if(a===0)o!==null&&Zd(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&Zd(o),r===1)t.tag===0?k_(hp.bind(null,t)):Yh(hp.bind(null,t)),w_(function(){!(ve&6)&&Ln()}),o=null;else{switch(rh(a)){case 1:o=ha;break;case 4:o=eh;break;case 16:o=Qs;break;case 536870912:o=th;break;default:o=Qs}o=wp(o,dp.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function dp(t,r){if(Bo=-1,$o=0,ve&6)throw Error(n(327));var o=t.callbackNode;if(si()&&t.callbackNode!==o)return null;var a=Zs(t,t===Je?ot:0);if(a===0)return null;if(a&30||a&t.expiredLanes||r)r=Go(t,a);else{r=a;var c=ve;ve|=2;var h=pp();(Je!==t||ot!==r)&&(vn=null,ii=Ge()+500,gr(t,r));do try{$_();break}catch(y){fp(t,y)}while(!0);Xa(),zo.current=h,ve=c,Ke!==null?r=0:(Je=null,ot=0,r=Ye)}if(r!==0){if(r===2&&(c=fa(t),c!==0&&(a=c,r=Du(t,c))),r===1)throw o=cs,gr(t,0),Wn(t,a),Et(t,Ge()),o;if(r===6)Wn(t,a);else{if(c=t.current.alternate,!(a&30)&&!W_(c)&&(r=Go(t,a),r===2&&(h=fa(t),h!==0&&(a=h,r=Du(t,h))),r===1))throw o=cs,gr(t,0),Wn(t,a),Et(t,Ge()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:vr(t,wt,vn);break;case 3:if(Wn(t,a),(a&130023424)===a&&(r=Pu+500-Ge(),10<r)){if(Zs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){pt(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Ua(vr.bind(null,t,wt,vn),r);break}vr(t,wt,vn);break;case 4:if(Wn(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var m=31-Vt(a);h=1<<m,m=r[m],m>c&&(c=m),a&=~h}if(a=c,a=Ge()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*H_(a/1960))-a,10<a){t.timeoutHandle=Ua(vr.bind(null,t,wt,vn),a);break}vr(t,wt,vn);break;case 5:vr(t,wt,vn);break;default:throw Error(n(329))}}}return Et(t,Ge()),t.callbackNode===o?dp.bind(null,t):null}function Du(t,r){var o=ds;return t.current.memoizedState.isDehydrated&&(gr(t,r).flags|=256),t=Go(t,r),t!==2&&(r=wt,wt=o,r!==null&&Mu(r)),t}function Mu(t){wt===null?wt=t:wt.push.apply(wt,t)}function W_(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!Ht(h(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Wn(t,r){for(r&=~Ru,r&=~Uo,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Vt(r),a=1<<o;t[o]=-1,r&=~a}}function hp(t){if(ve&6)throw Error(n(327));si();var r=Zs(t,0);if(!(r&1))return Et(t,Ge()),null;var o=Go(t,r);if(t.tag!==0&&o===2){var a=fa(t);a!==0&&(r=a,o=Du(t,a))}if(o===1)throw o=cs,gr(t,0),Wn(t,r),Et(t,Ge()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,vr(t,wt,vn),Et(t,Ge()),null}function Lu(t,r){var o=ve;ve|=1;try{return t(r)}finally{ve=o,ve===0&&(ii=Ge()+500,yo&&Ln())}}function mr(t){Vn!==null&&Vn.tag===0&&!(ve&6)&&si();var r=ve;ve|=1;var o=Lt.transition,a=Ie;try{if(Lt.transition=null,Ie=1,t)return t()}finally{Ie=a,Lt.transition=o,ve=r,!(ve&6)&&Ln()}}function ju(){bt=ri.current,je(ri)}function gr(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,y_(o)),Ke!==null)for(o=Ke.return;o!==null;){var a=o;switch(Ga(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&vo();break;case 3:ei(),je(vt),je(ut),su();break;case 5:ru(a);break;case 4:ei();break;case 13:je(Ue);break;case 19:je(Ue);break;case 10:Ja(a.type._context);break;case 22:case 23:ju()}o=o.return}if(Je=t,Ke=t=Bn(t.current,null),ot=bt=r,Ye=0,cs=null,Ru=Uo=pr=0,wt=ds=null,dr!==null){for(r=0;r<dr.length;r++)if(o=dr[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}dr=null}return t}function fp(t,r){do{var o=Ke;try{if(Xa(),bo.current=Ao,Ro){for(var a=Ve.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Ro=!1}if(fr=0,Xe=Qe=Ve=null,is=!1,ss=0,bu.current=null,o===null||o.return===null){Ye=1,cs=r,Ke=null;break}e:{var h=t,m=o.return,y=o,E=r;if(r=ot,y.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var x=E,O=y,A=O.tag;if(!(O.mode&1)&&(A===0||A===11||A===15)){var P=O.alternate;P?(O.updateQueue=P.updateQueue,O.memoizedState=P.memoizedState,O.lanes=P.lanes):(O.updateQueue=null,O.memoizedState=null)}var U=Ff(m);if(U!==null){U.flags&=-257,zf(U,m,y,h,r),U.mode&1&&jf(h,x,r),r=U,E=x;var W=r.updateQueue;if(W===null){var B=new Set;B.add(E),r.updateQueue=B}else W.add(E);break e}else{if(!(r&1)){jf(h,x,r),Fu();break e}E=Error(n(426))}}else if(ze&&y.mode&1){var qe=Ff(m);if(qe!==null){!(qe.flags&65536)&&(qe.flags|=256),zf(qe,m,y,h,r),Qa(ti(E,y));break e}}h=E=ti(E,y),Ye!==4&&(Ye=2),ds===null?ds=[h]:ds.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var I=Mf(h,E,r);af(h,I);break e;case 1:y=E;var C=h.type,T=h.stateNode;if(!(h.flags&128)&&(typeof C.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Un===null||!Un.has(T)))){h.flags|=65536,r&=-r,h.lanes|=r;var D=Lf(h,y,r);af(h,D);break e}}h=h.return}while(h!==null)}gp(o)}catch(G){r=G,Ke===o&&o!==null&&(Ke=o=o.return);continue}break}while(!0)}function pp(){var t=zo.current;return zo.current=Ao,t===null?Ao:t}function Fu(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Je===null||!(pr&268435455)&&!(Uo&268435455)||Wn(Je,ot)}function Go(t,r){var o=ve;ve|=2;var a=pp();(Je!==t||ot!==r)&&(vn=null,gr(t,r));do try{B_();break}catch(c){fp(t,c)}while(!0);if(Xa(),ve=o,zo.current=a,Ke!==null)throw Error(n(261));return Je=null,ot=0,Ye}function B_(){for(;Ke!==null;)mp(Ke)}function $_(){for(;Ke!==null&&!gv();)mp(Ke)}function mp(t){var r=yp(t.alternate,t,bt);t.memoizedProps=t.pendingProps,r===null?gp(t):Ke=r,bu.current=null}function gp(t){var r=t;do{var o=r.alternate;if(t=r.return,r.flags&32768){if(o=F_(o,r),o!==null){o.flags&=32767,Ke=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,Ke=null;return}}else if(o=j_(o,r,bt),o!==null){Ke=o;return}if(r=r.sibling,r!==null){Ke=r;return}Ke=r=t}while(r!==null);Ye===0&&(Ye=5)}function vr(t,r,o){var a=Ie,c=Lt.transition;try{Lt.transition=null,Ie=1,G_(t,r,o,a)}finally{Lt.transition=c,Ie=a}return null}function G_(t,r,o,a){do si();while(Vn!==null);if(ve&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Tv(t,h),t===Je&&(Ke=Je=null,ot=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Ho||(Ho=!0,wp(Qs,function(){return si(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Lt.transition,Lt.transition=null;var m=Ie;Ie=1;var y=ve;ve|=4,bu.current=null,U_(t,o),op(o,t),h_(Fa),no=!!ja,Fa=ja=null,t.current=o,V_(o),vv(),ve=y,Ie=m,Lt.transition=h}else t.current=o;if(Ho&&(Ho=!1,Vn=t,Wo=c),h=t.pendingLanes,h===0&&(Un=null),wv(o.stateNode),Et(t,Ge()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Vo)throw Vo=!1,t=Ou,Ou=null,t;return Wo&1&&t.tag!==0&&si(),h=t.pendingLanes,h&1?t===Au?hs++:(hs=0,Au=t):hs=0,Ln(),null}function si(){if(Vn!==null){var t=rh(Wo),r=Lt.transition,o=Ie;try{if(Lt.transition=null,Ie=16>t?16:t,Vn===null)var a=!1;else{if(t=Vn,Vn=null,Wo=0,ve&6)throw Error(n(331));var c=ve;for(ve|=4,H=t.current;H!==null;){var h=H,m=h.child;if(H.flags&16){var y=h.deletions;if(y!==null){for(var E=0;E<y.length;E++){var x=y[E];for(H=x;H!==null;){var O=H;switch(O.tag){case 0:case 11:case 15:us(8,O,h)}var A=O.child;if(A!==null)A.return=O,H=A;else for(;H!==null;){O=H;var P=O.sibling,U=O.return;if(tp(O),O===x){H=null;break}if(P!==null){P.return=U,H=P;break}H=U}}}var W=h.alternate;if(W!==null){var B=W.child;if(B!==null){W.child=null;do{var qe=B.sibling;B.sibling=null,B=qe}while(B!==null)}}H=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,H=m;else e:for(;H!==null;){if(h=H,h.flags&2048)switch(h.tag){case 0:case 11:case 15:us(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,H=I;break e}H=h.return}}var C=t.current;for(H=C;H!==null;){m=H;var T=m.child;if(m.subtreeFlags&2064&&T!==null)T.return=m,H=T;else e:for(m=C;H!==null;){if(y=H,y.flags&2048)try{switch(y.tag){case 0:case 11:case 15:Fo(9,y)}}catch(G){We(y,y.return,G)}if(y===m){H=null;break e}var D=y.sibling;if(D!==null){D.return=y.return,H=D;break e}H=y.return}}if(ve=c,Ln(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Ys,t)}catch{}a=!0}return a}finally{Ie=o,Lt.transition=r}}return!1}function vp(t,r,o){r=ti(o,r),r=Mf(t,r,1),t=Fn(t,r,1),r=pt(),t!==null&&(Li(t,1,r),Et(t,r))}function We(t,r,o){if(t.tag===3)vp(t,t,o);else for(;r!==null;){if(r.tag===3){vp(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Un===null||!Un.has(a))){t=ti(o,t),t=Lf(r,t,1),r=Fn(r,t,1),t=pt(),r!==null&&(Li(r,1,t),Et(r,t));break}}r=r.return}}function q_(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=pt(),t.pingedLanes|=t.suspendedLanes&o,Je===t&&(ot&o)===o&&(Ye===4||Ye===3&&(ot&130023424)===ot&&500>Ge()-Pu?gr(t,0):Ru|=o),Et(t,r)}function _p(t,r){r===0&&(t.mode&1?(r=Js,Js<<=1,!(Js&130023424)&&(Js=4194304)):r=1);var o=pt();t=pn(t,r),t!==null&&(Li(t,r,o),Et(t,o))}function K_(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),_p(t,o)}function Q_(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),_p(t,o)}var yp;yp=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||vt.current)yt=!0;else{if(!(t.lanes&o)&&!(r.flags&128))return yt=!1,L_(t,r,o);yt=!!(t.flags&131072)}else yt=!1,ze&&r.flags&1048576&&Xh(r,Eo,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Lo(t,r),t=r.pendingProps;var c=qr(r,ut.current);Zr(r,o),c=au(null,r,a,t,c,o);var h=uu();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,_t(a)?(h=!0,_o(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,tu(r),c.updater=Do,r.stateNode=c,c._reactInternals=r,mu(r,a,t,o),r=yu(null,r,a,!0,h,o)):(r.tag=0,ze&&h&&$a(r),ft(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(Lo(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=X_(a),t=Bt(a,t),c){case 0:r=_u(null,r,a,t,o);break e;case 1:r=$f(null,r,a,t,o);break e;case 11:r=Uf(null,r,a,t,o);break e;case 14:r=Vf(null,r,a,Bt(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Bt(a,c),_u(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Bt(a,c),$f(t,r,a,c,o);case 3:e:{if(Gf(r),t===null)throw Error(n(387));a=r.pendingProps,h=r.memoizedState,c=h.element,lf(t,r),xo(r,a,null,o);var m=r.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=ti(Error(n(423)),r),r=qf(t,r,a,o,c);break e}else if(a!==c){c=ti(Error(n(424)),r),r=qf(t,r,a,o,c);break e}else for(Nt=An(r.stateNode.containerInfo.firstChild),xt=r,ze=!0,Wt=null,o=sf(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Yr(),a===c){r=gn(t,r,o);break e}ft(t,r,a,o)}r=r.child}return r;case 5:return cf(r),t===null&&Ka(r),a=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,za(a,c)?m=null:h!==null&&za(a,h)&&(r.flags|=32),Bf(t,r),ft(t,r,m,o),r.child;case 6:return t===null&&Ka(r),null;case 13:return Kf(t,r,o);case 4:return nu(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=Xr(r,null,a,o):ft(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Bt(a,c),Uf(t,r,a,c,o);case 7:return ft(t,r,r.pendingProps,o),r.child;case 8:return ft(t,r,r.pendingProps.children,o),r.child;case 12:return ft(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,h=r.memoizedProps,m=c.value,Oe(ko,a._currentValue),a._currentValue=m,h!==null)if(Ht(h.value,m)){if(h.children===c.children&&!vt.current){r=gn(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var y=h.dependencies;if(y!==null){m=h.child;for(var E=y.firstContext;E!==null;){if(E.context===a){if(h.tag===1){E=mn(-1,o&-o),E.tag=2;var x=h.updateQueue;if(x!==null){x=x.shared;var O=x.pending;O===null?E.next=E:(E.next=O.next,O.next=E),x.pending=E}}h.lanes|=o,E=h.alternate,E!==null&&(E.lanes|=o),Za(h.return,o,r),y.lanes|=o;break}E=E.next}}else if(h.tag===10)m=h.type===r.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,y=m.alternate,y!==null&&(y.lanes|=o),Za(m,o,r),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===r){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}ft(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,Zr(r,o),c=Dt(c),a=a(c),r.flags|=1,ft(t,r,a,o),r.child;case 14:return a=r.type,c=Bt(a,r.pendingProps),c=Bt(a.type,c),Vf(t,r,a,c,o);case 15:return Hf(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Bt(a,c),Lo(t,r),r.tag=1,_t(a)?(t=!0,_o(r)):t=!1,Zr(r,o),Af(r,a,c),mu(r,a,c,o),yu(null,r,a,!0,t,o);case 19:return Yf(t,r,o);case 22:return Wf(t,r,o)}throw Error(n(156,r.tag))};function wp(t,r){return Jd(t,r)}function Y_(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,r,o,a){return new Y_(t,r,o,a)}function zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function X_(t){if(typeof t=="function")return zu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===F)return 11;if(t===be)return 14}return 2}function Bn(t,r){var o=t.alternate;return o===null?(o=jt(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function qo(t,r,o,a,c,h){var m=2;if(a=t,typeof t=="function")zu(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case ge:return _r(o.children,c,h,r);case ce:m=8,c|=8;break;case Re:return t=jt(12,o,r,c|2),t.elementType=Re,t.lanes=h,t;case oe:return t=jt(13,o,r,c),t.elementType=oe,t.lanes=h,t;case K:return t=jt(19,o,r,c),t.elementType=K,t.lanes=h,t;case Se:return Ko(o,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Me:m=10;break e;case $:m=9;break e;case F:m=11;break e;case be:m=14;break e;case Pe:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=jt(m,o,r,c),r.elementType=t,r.type=a,r.lanes=h,r}function _r(t,r,o,a){return t=jt(7,t,a,r),t.lanes=o,t}function Ko(t,r,o,a){return t=jt(22,t,a,r),t.elementType=Se,t.lanes=o,t.stateNode={isHidden:!1},t}function Uu(t,r,o){return t=jt(6,t,null,r),t.lanes=o,t}function Vu(t,r,o){return r=jt(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function J_(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pa(0),this.expirationTimes=pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pa(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Hu(t,r,o,a,c,h,m,y,E){return t=new J_(t,r,o,y,E),r===1?(r=1,h===!0&&(r|=8)):r=0,h=jt(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},tu(h),t}function Z_(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function Ep(t){if(!t)return Mn;t=t._reactInternals;e:{if(or(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(_t(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(_t(o))return Kh(t,o,r)}return r}function Sp(t,r,o,a,c,h,m,y,E){return t=Hu(o,a,!0,t,c,h,m,y,E),t.context=Ep(null),o=t.current,a=pt(),c=Hn(o),h=mn(a,c),h.callback=r??null,Fn(o,h,c),t.current.lanes=c,Li(t,c,a),Et(t,a),t}function Qo(t,r,o,a){var c=r.current,h=pt(),m=Hn(c);return o=Ep(o),r.context===null?r.context=o:r.pendingContext=o,r=mn(h,m),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=Fn(c,r,m),t!==null&&(qt(t,c,m,h),To(t,c,m)),m}function Yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function Wu(t,r){Cp(t,r),(t=t.alternate)&&Cp(t,r)}var kp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bu(t){this._internalRoot=t}Xo.prototype.render=Bu.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Qo(t,r,null,null)},Xo.prototype.unmount=Bu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;mr(function(){Qo(null,t,null,null)}),r[cn]=null}};function Xo(t){this._internalRoot=t}Xo.prototype.unstable_scheduleHydration=function(t){if(t){var r=oh();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Rn.length&&r!==0&&r<Rn[o].priority;o++);Rn.splice(o,0,t),o===0&&uh(t)}};function $u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function ey(t,r,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var x=Yo(m);h.call(x)}}var m=Sp(r,a,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=m,t[cn]=m.current,Yi(t.nodeType===8?t.parentNode:t),mr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var y=a;a=function(){var x=Yo(E);y.call(x)}}var E=Hu(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=E,t[cn]=E.current,Yi(t.nodeType===8?t.parentNode:t),mr(function(){Qo(r,E,o,a)}),E}function Zo(t,r,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var y=c;c=function(){var E=Yo(m);y.call(E)}}Qo(r,m,t,c)}else m=ey(o,r,t,c,a);return Yo(m)}ih=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Mi(r.pendingLanes);o!==0&&(ma(r,o|1),Et(r,Ge()),!(ve&6)&&(ii=Ge()+500,Ln()))}break;case 13:mr(function(){var a=pn(t,1);if(a!==null){var c=pt();qt(a,t,1,c)}}),Wu(t,1)}},ga=function(t){if(t.tag===13){var r=pn(t,134217728);if(r!==null){var o=pt();qt(r,t,134217728,o)}Wu(t,134217728)}},sh=function(t){if(t.tag===13){var r=Hn(t),o=pn(t,r);if(o!==null){var a=pt();qt(o,t,r,a)}Wu(t,r)}},oh=function(){return Ie},lh=function(t,r){var o=Ie;try{return Ie=t,r()}finally{Ie=o}},aa=function(t,r,o){switch(r){case"input":if(Dr(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=go(a);if(!c)throw Error(n(90));Pt(a),Dr(a,c)}}}break;case"textarea":Ld(t,o);break;case"select":r=o.value,r!=null&&Mr(t,!!o.multiple,r,!1)}},$d=Lu,Gd=mr;var ty={usingClientEntryPoint:!1,Events:[Zi,$r,go,Wd,Bd,Lu]},fs={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ny={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yd(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Ys=el.inject(ny),en=el}catch{}}return St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ty,St.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$u(r))throw Error(n(200));return Z_(t,r,null,o)},St.createRoot=function(t,r){if(!$u(t))throw Error(n(299));var o=!1,a="",c=kp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=Hu(t,1,!1,null,null,o,!1,a,c),t[cn]=r.current,Yi(t.nodeType===8?t.parentNode:t),new Bu(r)},St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Yd(r),t=t===null?null:t.stateNode,t},St.flushSync=function(t){return mr(t)},St.hydrate=function(t,r,o){if(!Jo(r))throw Error(n(200));return Zo(null,t,r,!0,o)},St.hydrateRoot=function(t,r,o){if(!$u(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=kp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),r=Sp(r,null,t,1,o??null,c,!1,h,m),t[cn]=r.current,Yi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new Xo(r)},St.render=function(t,r,o){if(!Jo(r))throw Error(n(200));return Zo(null,t,r,!1,o)},St.unmountComponentAtNode=function(t){if(!Jo(t))throw Error(n(40));return t._reactRootContainer?(mr(function(){Zo(null,null,t,!1,function(){t._reactRootContainer=null,t[cn]=null})}),!0):!1},St.unstable_batchedUpdates=Lu,St.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!Jo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Zo(t,r,o,!1,a)},St.version="18.3.1-next-f1338f8080-20240426",St}var Ap;function cy(){if(Ap)return Ku.exports;Ap=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Ku.exports=uy(),Ku.exports}var Dp;function dy(){if(Dp)return tl;Dp=1;var i=cy();return tl.createRoot=i.createRoot,tl.hydrateRoot=i.hydrateRoot,tl}var hy=dy();const fy="modulepreload",py=function(i){return"/portfolio_web/"+i},Mp={},zt=function(e,n,s){let l=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));l=Promise.allSettled(n.map(p=>{if(p=py(p),p in Mp)return;Mp[p]=!0;const g=p.endsWith(".css"),w=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${w}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":fy,g||(v.as="script"),v.crossOrigin="",v.href=p,f&&v.setAttribute("nonce",f),document.head.appendChild(v),g)return new Promise((_,N)=>{v.addEventListener("load",_),v.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(d){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=d,window.dispatchEvent(f),!f.defaultPrevented)throw d}return l.then(d=>{for(const f of d||[])f.status==="rejected"&&u(f.reason);return e().catch(u)})};var ol={exports:{}},my=ol.exports,Lp;function gy(){return Lp||(Lp=1,function(i,e){(function(n,s){i.exports=s()})(my,function(){return function(n){function s(u){if(l[u])return l[u].exports;var d=l[u]={exports:{},id:u,loaded:!1};return n[u].call(d.exports,d,d.exports,s),d.loaded=!0,d.exports}var l={};return s.m=n,s.c=l,s.p="dist/",s(0)}([function(n,s,l){function u(K){return K&&K.__esModule?K:{default:K}}var d=Object.assign||function(K){for(var be=1;be<arguments.length;be++){var Pe=arguments[be];for(var Se in Pe)Object.prototype.hasOwnProperty.call(Pe,Se)&&(K[Se]=Pe[Se])}return K},f=l(1),p=(u(f),l(6)),g=u(p),w=l(7),v=u(w),_=l(8),N=u(_),R=l(9),j=u(R),V=l(10),ke=u(V),Z=l(11),_e=u(Z),Ee=l(14),Fe=u(Ee),ee=[],ge=!1,ce={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},Re=function(){var K=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(K&&(ge=!0),ge)return ee=(0,_e.default)(ee,ce),(0,ke.default)(ee,ce.once),ee},Me=function(){ee=(0,Fe.default)(),Re()},$=function(){ee.forEach(function(K,be){K.node.removeAttribute("data-aos"),K.node.removeAttribute("data-aos-easing"),K.node.removeAttribute("data-aos-duration"),K.node.removeAttribute("data-aos-delay")})},F=function(K){return K===!0||K==="mobile"&&j.default.mobile()||K==="phone"&&j.default.phone()||K==="tablet"&&j.default.tablet()||typeof K=="function"&&K()===!0},oe=function(K){ce=d(ce,K),ee=(0,Fe.default)();var be=document.all&&!window.atob;return F(ce.disable)||be?$():(ce.disableMutationObserver||N.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),ce.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",ce.easing),document.querySelector("body").setAttribute("data-aos-duration",ce.duration),document.querySelector("body").setAttribute("data-aos-delay",ce.delay),ce.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?Re(!0):ce.startEvent==="load"?window.addEventListener(ce.startEvent,function(){Re(!0)}):document.addEventListener(ce.startEvent,function(){Re(!0)}),window.addEventListener("resize",(0,v.default)(Re,ce.debounceDelay,!0)),window.addEventListener("orientationchange",(0,v.default)(Re,ce.debounceDelay,!0)),window.addEventListener("scroll",(0,g.default)(function(){(0,ke.default)(ee,ce.once)},ce.throttleDelay)),ce.disableMutationObserver||N.default.ready("[data-aos]",Me),ee)};n.exports={init:oe,refresh:Re,refreshHard:Me}},function(n,s){},,,,,function(n,s){(function(l){function u(F,oe,K){function be(ye){var it=J,Ut=ae;return J=ae=void 0,He=ye,le=F.apply(Ut,it)}function Pe(ye){return He=ye,te=setTimeout(q,oe),It?be(ye):le}function Se(ye){var it=ye-de,Ut=ye-He,Dr=oe-it;return Pt?Me(Dr,ue-Ut):Dr}function L(ye){var it=ye-de,Ut=ye-He;return de===void 0||it>=oe||it<0||Pt&&Ut>=ue}function q(){var ye=$();return L(ye)?z(ye):void(te=setTimeout(q,Se(ye)))}function z(ye){return te=void 0,Te&&J?be(ye):(J=ae=void 0,le)}function k(){te!==void 0&&clearTimeout(te),He=0,J=de=ae=te=void 0}function b(){return te===void 0?le:z($())}function X(){var ye=$(),it=L(ye);if(J=arguments,ae=this,de=ye,it){if(te===void 0)return Pe(de);if(Pt)return te=setTimeout(q,oe),be(de)}return te===void 0&&(te=setTimeout(q,oe)),le}var J,ae,ue,le,te,de,He=0,It=!1,Pt=!1,Te=!0;if(typeof F!="function")throw new TypeError(_);return oe=w(oe)||0,f(K)&&(It=!!K.leading,Pt="maxWait"in K,ue=Pt?Re(w(K.maxWait)||0,oe):ue,Te="trailing"in K?!!K.trailing:Te),X.cancel=k,X.flush=b,X}function d(F,oe,K){var be=!0,Pe=!0;if(typeof F!="function")throw new TypeError(_);return f(K)&&(be="leading"in K?!!K.leading:be,Pe="trailing"in K?!!K.trailing:Pe),u(F,oe,{leading:be,maxWait:oe,trailing:Pe})}function f(F){var oe=typeof F>"u"?"undefined":v(F);return!!F&&(oe=="object"||oe=="function")}function p(F){return!!F&&(typeof F>"u"?"undefined":v(F))=="object"}function g(F){return(typeof F>"u"?"undefined":v(F))=="symbol"||p(F)&&ce.call(F)==R}function w(F){if(typeof F=="number")return F;if(g(F))return N;if(f(F)){var oe=typeof F.valueOf=="function"?F.valueOf():F;F=f(oe)?oe+"":oe}if(typeof F!="string")return F===0?F:+F;F=F.replace(j,"");var K=ke.test(F);return K||Z.test(F)?_e(F.slice(2),K?2:8):V.test(F)?N:+F}var v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},_="Expected a function",N=NaN,R="[object Symbol]",j=/^\s+|\s+$/g,V=/^[-+]0x[0-9a-f]+$/i,ke=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,_e=parseInt,Ee=(typeof l>"u"?"undefined":v(l))=="object"&&l&&l.Object===Object&&l,Fe=(typeof self>"u"?"undefined":v(self))=="object"&&self&&self.Object===Object&&self,ee=Ee||Fe||Function("return this")(),ge=Object.prototype,ce=ge.toString,Re=Math.max,Me=Math.min,$=function(){return ee.Date.now()};n.exports=d}).call(s,function(){return this}())},function(n,s){(function(l){function u($,F,oe){function K(Te){var ye=X,it=J;return X=J=void 0,de=Te,ue=$.apply(it,ye)}function be(Te){return de=Te,le=setTimeout(L,F),He?K(Te):ue}function Pe(Te){var ye=Te-te,it=Te-de,Ut=F-ye;return It?Re(Ut,ae-it):Ut}function Se(Te){var ye=Te-te,it=Te-de;return te===void 0||ye>=F||ye<0||It&&it>=ae}function L(){var Te=Me();return Se(Te)?q(Te):void(le=setTimeout(L,Pe(Te)))}function q(Te){return le=void 0,Pt&&X?K(Te):(X=J=void 0,ue)}function z(){le!==void 0&&clearTimeout(le),de=0,X=te=J=le=void 0}function k(){return le===void 0?ue:q(Me())}function b(){var Te=Me(),ye=Se(Te);if(X=arguments,J=this,te=Te,ye){if(le===void 0)return be(te);if(It)return le=setTimeout(L,F),K(te)}return le===void 0&&(le=setTimeout(L,F)),ue}var X,J,ae,ue,le,te,de=0,He=!1,It=!1,Pt=!0;if(typeof $!="function")throw new TypeError(v);return F=g(F)||0,d(oe)&&(He=!!oe.leading,It="maxWait"in oe,ae=It?ce(g(oe.maxWait)||0,F):ae,Pt="trailing"in oe?!!oe.trailing:Pt),b.cancel=z,b.flush=k,b}function d($){var F=typeof $>"u"?"undefined":w($);return!!$&&(F=="object"||F=="function")}function f($){return!!$&&(typeof $>"u"?"undefined":w($))=="object"}function p($){return(typeof $>"u"?"undefined":w($))=="symbol"||f($)&&ge.call($)==N}function g($){if(typeof $=="number")return $;if(p($))return _;if(d($)){var F=typeof $.valueOf=="function"?$.valueOf():$;$=d(F)?F+"":F}if(typeof $!="string")return $===0?$:+$;$=$.replace(R,"");var oe=V.test($);return oe||ke.test($)?Z($.slice(2),oe?2:8):j.test($)?_:+$}var w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function($){return typeof $}:function($){return $&&typeof Symbol=="function"&&$.constructor===Symbol&&$!==Symbol.prototype?"symbol":typeof $},v="Expected a function",_=NaN,N="[object Symbol]",R=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,ke=/^0o[0-7]+$/i,Z=parseInt,_e=(typeof l>"u"?"undefined":w(l))=="object"&&l&&l.Object===Object&&l,Ee=(typeof self>"u"?"undefined":w(self))=="object"&&self&&self.Object===Object&&self,Fe=_e||Ee||Function("return this")(),ee=Object.prototype,ge=ee.toString,ce=Math.max,Re=Math.min,Me=function(){return Fe.Date.now()};n.exports=u}).call(s,function(){return this}())},function(n,s){function l(w){var v=void 0,_=void 0;for(v=0;v<w.length;v+=1)if(_=w[v],_.dataset&&_.dataset.aos||_.children&&l(_.children))return!0;return!1}function u(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function d(){return!!u()}function f(w,v){var _=window.document,N=u(),R=new N(p);g=v,R.observe(_.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function p(w){w&&w.forEach(function(v){var _=Array.prototype.slice.call(v.addedNodes),N=Array.prototype.slice.call(v.removedNodes),R=_.concat(N);if(l(R))return g()})}Object.defineProperty(s,"__esModule",{value:!0});var g=function(){};s.default={isSupported:d,ready:f}},function(n,s){function l(_,N){if(!(_ instanceof N))throw new TypeError("Cannot call a class as a function")}function u(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var d=function(){function _(N,R){for(var j=0;j<R.length;j++){var V=R[j];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(N,V.key,V)}}return function(N,R,j){return R&&_(N.prototype,R),j&&_(N,j),N}}(),f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,g=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,v=function(){function _(){l(this,_)}return d(_,[{key:"phone",value:function(){var N=u();return!(!f.test(N)&&!p.test(N.substr(0,4)))}},{key:"mobile",value:function(){var N=u();return!(!g.test(N)&&!w.test(N.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),_}();s.default=new v},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(d,f,p){var g=d.node.getAttribute("data-aos-once");f>d.position?d.node.classList.add("aos-animate"):typeof g<"u"&&(g==="false"||!p&&g!=="true")&&d.node.classList.remove("aos-animate")},u=function(d,f){var p=window.pageYOffset,g=window.innerHeight;d.forEach(function(w,v){l(w,g+p,f)})};s.default=u},function(n,s,l){function u(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(s,"__esModule",{value:!0});var d=l(12),f=u(d),p=function(g,w){return g.forEach(function(v,_){v.node.classList.add("aos-init"),v.position=(0,f.default)(v.node,w.offset)}),g};s.default=p},function(n,s,l){function u(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(s,"__esModule",{value:!0});var d=l(13),f=u(d),p=function(g,w){var v=0,_=0,N=window.innerHeight,R={offset:g.getAttribute("data-aos-offset"),anchor:g.getAttribute("data-aos-anchor"),anchorPlacement:g.getAttribute("data-aos-anchor-placement")};switch(R.offset&&!isNaN(R.offset)&&(_=parseInt(R.offset)),R.anchor&&document.querySelectorAll(R.anchor)&&(g=document.querySelectorAll(R.anchor)[0]),v=(0,f.default)(g).top,R.anchorPlacement){case"top-bottom":break;case"center-bottom":v+=g.offsetHeight/2;break;case"bottom-bottom":v+=g.offsetHeight;break;case"top-center":v+=N/2;break;case"bottom-center":v+=N/2+g.offsetHeight;break;case"center-center":v+=N/2+g.offsetHeight/2;break;case"top-top":v+=N;break;case"bottom-top":v+=g.offsetHeight+N;break;case"center-top":v+=g.offsetHeight/2+N}return R.anchorPlacement||R.offset||isNaN(w)||(_=w),v+_};s.default=p},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(u){for(var d=0,f=0;u&&!isNaN(u.offsetLeft)&&!isNaN(u.offsetTop);)d+=u.offsetLeft-(u.tagName!="BODY"?u.scrollLeft:0),f+=u.offsetTop-(u.tagName!="BODY"?u.scrollTop:0),u=u.offsetParent;return{top:f,left:d}};s.default=l},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(u){return u=u||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(u,function(d){return{node:d}})};s.default=l}])})}(ol)),ol.exports}var vy=gy();const _y=Zm(vy);var eg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},jp=Cr.createContext&&Cr.createContext(eg),yy=["attr","size","title"];function wy(i,e){if(i==null)return{};var n=Ey(i,e),s,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(l=0;l<u.length;l++)s=u[l],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(i,s)&&(n[s]=i[s])}return n}function Ey(i,e){if(i==null)return{};var n={};for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){if(e.indexOf(s)>=0)continue;n[s]=i[s]}return n}function hl(){return hl=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=n[s])}return i},hl.apply(this,arguments)}function Fp(i,e){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable})),n.push.apply(n,s)}return n}function fl(i){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Fp(Object(n),!0).forEach(function(s){Sy(i,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):Fp(Object(n)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(n,s))})}return i}function Sy(i,e,n){return e=Cy(e),e in i?Object.defineProperty(i,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[e]=n,i}function Cy(i){var e=ky(i,"string");return typeof e=="symbol"?e:e+""}function ky(i,e){if(typeof i!="object"||!i)return i;var n=i[Symbol.toPrimitive];if(n!==void 0){var s=n.call(i,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function tg(i){return i&&i.map((e,n)=>Cr.createElement(e.tag,fl({key:n},e.attr),tg(e.child)))}function rr(i){return e=>Cr.createElement(Iy,hl({attr:fl({},i.attr)},e),tg(i.child))}function Iy(i){var e=n=>{var{attr:s,size:l,title:u}=i,d=wy(i,yy),f=l||n.size||"1em",p;return n.className&&(p=n.className),i.className&&(p=(p?p+" ":"")+i.className),Cr.createElement("svg",hl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,d,{className:p,style:fl(fl({color:i.color||n.color},n.style),i.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&Cr.createElement("title",null,u),i.children)};return jp!==void 0?Cr.createElement(jp.Consumer,null,n=>e(n)):e(eg)}function Ty(i){return rr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"},child:[]}]})(i)}function xy(i){return rr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(i)}function Ny(i){return rr({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(i)}function by(i){return rr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(i)}function Ry(i){return rr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(i)}function zp(i){return rr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(i)}function Py(i){return rr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(i)}function Oy(i){return rr({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"},child:[]}]})(i)}/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ng=(...i)=>i.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=ne.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...f},p)=>ne.createElement("svg",{ref:p,...Dy,width:e,height:e,stroke:i,strokeWidth:s?Number(n)*24/Number(e):n,className:ng("lucide",l),...f},[...d.map(([g,w])=>ne.createElement(g,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=(i,e)=>{const n=ne.forwardRef(({className:s,...l},u)=>ne.createElement(My,{ref:u,iconNode:e,className:ng(`lucide-${Ay(i)}`,s),...l}));return n.displayName=`${i}`,n};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],nl=Fl("ArrowRight",Ly);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Fy=Fl("MessageCircle",jy);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Uy=Fl("Sparkles",zy);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Hy=Fl("X",Vy),Wy=[{icon:S.jsx(Ry,{}),delay:0,link:"https://www.linkedin.com/in/ishan-nilaksha-686461308/"},{icon:S.jsx(xy,{}),delay:.1,link:"https://www.facebook.com"},{icon:S.jsx(by,{}),delay:.2,link:"https://www.instagram.com/ishan_hatharasinghe/"},{icon:S.jsx(Py,{}),delay:.3,link:"https://wa.me/0703052181"},{icon:S.jsx(Ny,{}),delay:.4,link:"https://github.com/ishanHatharasinghe"},{icon:S.jsx(Ty,{}),delay:.5,link:"https://www.behance.net/ishannilaksha"},{icon:S.jsx(Oy,{}),delay:.6,link:"https://www.fiverr.com/sellers/vector_ix/"}],By=()=>{const[i,e]=ne.useState(!1),[n,s]=ne.useState(null),[l,u]=ne.useState({x:0,y:0}),[d,f]=ne.useState(!1),p=ne.useRef(null),g=v=>{const _=v.currentTarget.getBoundingClientRect();u({x:v.clientX-_.left,y:v.clientY-_.top})};ne.useEffect(()=>{function v(_){p.current&&!p.current.contains(_.target)&&e(!1)}return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[p]);const w=()=>{window.innerWidth<768&&setTimeout(()=>e(!1),300)};return S.jsxs(S.Fragment,{children:[i&&S.jsx("div",{className:"fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",onClick:()=>e(!1)}),S.jsx("div",{ref:p,className:"fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-50",children:S.jsxs("div",{className:"relative",children:[S.jsxs("button",{onClick:()=>e(!i),onMouseMove:g,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),className:`
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
            `,children:i?S.jsx(Hy,{className:"w-4 h-4 sm:w-5 sm:h-5"}):S.jsx(Fy,{className:"w-4 h-4 sm:w-5 sm:h-5"})}),S.jsx("div",{className:`
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
            `,children:[S.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/5 animate-pulse"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-orange-400/5 to-transparent opacity-50"}),S.jsx("div",{className:"absolute top-2 right-2 w-1 h-1 bg-orange-400 rounded-full animate-bounce opacity-60",style:{animationDelay:"0s"}}),S.jsx("div",{className:"absolute bottom-4 left-3 w-0.5 h-0.5 bg-orange-300 rounded-full animate-bounce opacity-40",style:{animationDelay:"1s"}}),S.jsx("div",{className:"absolute top-1/2 right-1 w-0.5 h-0.5 bg-orange-500 rounded-full animate-bounce opacity-50",style:{animationDelay:"2s"}}),Wy.map((v,_)=>S.jsxs("a",{href:v.link,target:"_blank",rel:"noopener noreferrer",onClick:w,onMouseEnter:()=>s(_),onMouseLeave:()=>s(null),className:`
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
 */const M=function(i,e){if(!i)throw Ei(e)},Ei=function(i){return new Error("Firebase Database ("+rg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Gy=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],f=i[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Mc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,f=d?i[l+1]:0,p=l+2<i.length,g=p?i[l+2]:0,w=u>>2,v=(u&3)<<4|f>>4;let _=(f&15)<<2|g>>6,N=g&63;p||(N=64,d||(_=64)),s.push(n[w],n[v],n[_],n[N])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ig(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Gy(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],f=l<i.length?n[i.charAt(l)]:0;++l;const g=l<i.length?n[i.charAt(l)]:64;++l;const v=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||f==null||g==null||v==null)throw new qy;const _=u<<2|f>>4;if(s.push(_),g!==64){const N=f<<4&240|g>>2;if(s.push(N),v!==64){const R=g<<6&192|v;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class qy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sg=function(i){const e=ig(i);return Mc.encodeByteArray(e,!0)},pl=function(i){return sg(i).replace(/\./g,"")},ml=function(i){try{return Mc.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xy=()=>Yy().__FIREBASE_DEFAULTS__,Jy=()=>{if(typeof process>"u"||typeof Up>"u")return;const i=Up.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Zy=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&ml(i[1]);return e&&JSON.parse(e)},Lc=()=>{try{return $y()||Xy()||Jy()||Zy()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},lg=i=>{var e,n;return(n=(e=Lc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},e1=i=>{const e=lg(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ag=()=>{var i;return(i=Lc())===null||i===void 0?void 0:i.config},ug=i=>{var e;return(e=Lc())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function t1(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[pl(JSON.stringify(n)),pl(JSON.stringify(d)),""].join(".")}const ws={};function n1(){const i={prod:[],emulator:[]};for(const e of Object.keys(ws))ws[e]?i.emulator.push(e):i.prod.push(e);return i}function r1(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let Vp=!1;function dg(i,e){if(typeof window>"u"||typeof document>"u"||!Si(window.location.host)||ws[i]===e||ws[i]||Vp)return;ws[i]=e;function n(_){return`__firebase__banner__${_}`}const s="__firebase__banner",u=n1().prod.length>0;function d(){const _=document.getElementById(s);_&&_.remove()}function f(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function p(_,N){_.setAttribute("width","24"),_.setAttribute("id",N),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function g(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Vp=!0,d()},_}function w(_,N){_.setAttribute("id",N),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function v(){const _=r1(s),N=n("text"),R=document.getElementById(N)||document.createElement("span"),j=n("learnmore"),V=document.getElementById(j)||document.createElement("a"),ke=n("preprendIcon"),Z=document.getElementById(ke)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const _e=_.element;f(_e),w(V,j);const Ee=g();p(Z,ke),_e.append(Z,R,V,Ee),document.body.appendChild(_e)}u?(R.innerText="Preview backend disconnected.",Z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function xs(i){return JSON.parse(i)}function rt(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=xs(ml(u[0])||""),n=xs(ml(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},h1=function(i){const e=pg(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},f1=function(i){const e=pg(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function fi(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function dc(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function gl(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function Ir(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if(Hp(u)&&Hp(d)){if(!Ir(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Hp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class p1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const _=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(_<<1|_>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,w;for(let v=0;v<80;v++){v<40?v<20?(g=f^u&(d^f),w=1518500249):(g=u^d^f,w=1859775393):v<60?(g=u&d|f&(u|d),w=2400959708):(g=u^d^f,w=3395469782);const _=(l<<5|l>>>27)+g+p+w+s[v]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=_}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function m1(i,e){const n=new g1(i,e);return n.subscribe.bind(n)}class g1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");v1(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Xu),l.error===void 0&&(l.error=Xu),l.complete===void 0&&(l.complete=Xu);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function v1(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Xu(){}function zl(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,M(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Ul=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Rt(i){return i&&i._delegate?i._delegate:i}class Tr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var xe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(xe||(xe={}));const C1={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},k1=xe.INFO,I1={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},T1=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=I1[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=k1,this._logHandler=T1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?C1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const x1=(i,e)=>e.some(n=>i instanceof n);let Wp,Bp;function N1(){return Wp||(Wp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b1(){return Bp||(Bp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mg=new WeakMap,hc=new WeakMap,gg=new WeakMap,Ju=new WeakMap,zc=new WeakMap;function R1(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Xn(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&mg.set(n,i)}).catch(()=>{}),zc.set(e,i),e}function P1(i){if(hc.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});hc.set(i,e)}let fc={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return hc.get(i);if(e==="objectStoreNames")return i.objectStoreNames||gg.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function O1(i){fc=i(fc)}function A1(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Zu(this),e,...n);return gg.set(s,e.sort?e.sort():[e]),Xn(s)}:b1().includes(i)?function(...e){return i.apply(Zu(this),e),Xn(mg.get(this))}:function(...e){return Xn(i.apply(Zu(this),e))}}function D1(i){return typeof i=="function"?A1(i):(i instanceof IDBTransaction&&P1(i),x1(i,N1())?new Proxy(i,fc):i)}function Xn(i){if(i instanceof IDBRequest)return R1(i);if(Ju.has(i))return Ju.get(i);const e=D1(i);return e!==i&&(Ju.set(i,e),zc.set(e,i)),e}const Zu=i=>zc.get(i);function M1(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),f=Xn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Xn(d.result),p.oldVersion,p.newVersion,Xn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const L1=["get","getKey","getAll","getAllKeys","count"],j1=["put","add","delete","clear"],ec=new Map;function $p(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(ec.get(e))return ec.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=j1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||L1.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return ec.set(e,u),u}O1(i=>({...i,get:(e,n,s)=>$p(e,n)||i.get(e,n,s),has:(e,n)=>!!$p(e,n)||i.has(e,n)}));/**
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
 */class F1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(z1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function z1(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pc="@firebase/app",Gp="0.13.1";/**
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
 */const kn=new Fc("@firebase/app"),U1="@firebase/app-compat",V1="@firebase/analytics-compat",H1="@firebase/analytics",W1="@firebase/app-check-compat",B1="@firebase/app-check",$1="@firebase/auth",G1="@firebase/auth-compat",q1="@firebase/database",K1="@firebase/data-connect",Q1="@firebase/database-compat",Y1="@firebase/functions",X1="@firebase/functions-compat",J1="@firebase/installations",Z1="@firebase/installations-compat",ew="@firebase/messaging",tw="@firebase/messaging-compat",nw="@firebase/performance",rw="@firebase/performance-compat",iw="@firebase/remote-config",sw="@firebase/remote-config-compat",ow="@firebase/storage",lw="@firebase/storage-compat",aw="@firebase/firestore",uw="@firebase/ai",cw="@firebase/firestore-compat",dw="firebase",hw="11.9.0";/**
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
 */const mc="[DEFAULT]",fw={[pc]:"fire-core",[U1]:"fire-core-compat",[H1]:"fire-analytics",[V1]:"fire-analytics-compat",[B1]:"fire-app-check",[W1]:"fire-app-check-compat",[$1]:"fire-auth",[G1]:"fire-auth-compat",[q1]:"fire-rtdb",[K1]:"fire-data-connect",[Q1]:"fire-rtdb-compat",[Y1]:"fire-fn",[X1]:"fire-fn-compat",[J1]:"fire-iid",[Z1]:"fire-iid-compat",[ew]:"fire-fcm",[tw]:"fire-fcm-compat",[nw]:"fire-perf",[rw]:"fire-perf-compat",[iw]:"fire-rc",[sw]:"fire-rc-compat",[ow]:"fire-gcs",[lw]:"fire-gcs-compat",[aw]:"fire-fst",[cw]:"fire-fst-compat",[uw]:"fire-vertex","fire-js":"fire-js",[dw]:"fire-js-all"};/**
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
 */const vl=new Map,pw=new Map,gc=new Map;function qp(i,e){try{i.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function pi(i){const e=i.name;if(gc.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;gc.set(e,i);for(const n of vl.values())qp(n,i);for(const n of pw.values())qp(n,i);return!0}function Uc(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Kt(i){return i==null?!1:i.settings!==void 0}/**
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
 */class gw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const ki=hw;function vg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:mc,automaticDataCollectionEnabled:!0},e),l=s.name;if(typeof l!="string"||!l)throw Jn.create("bad-app-name",{appName:String(l)});if(n||(n=ag()),!n)throw Jn.create("no-options");const u=vl.get(l);if(u){if(Ir(n,u.options)&&Ir(s,u.config))return u;throw Jn.create("duplicate-app",{appName:l})}const d=new S1(l);for(const p of gc.values())d.addComponent(p);const f=new gw(n,s,d);return vl.set(l,f),f}function _g(i=mc){const e=vl.get(i);if(!e&&i===mc&&ag())return vg();if(!e)throw Jn.create("no-app",{appName:i});return e}function Zn(i,e,n){var s;let l=(s=fw[i])!==null&&s!==void 0?s:i;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(f.join(" "));return}pi(new Tr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const vw="firebase-heartbeat-database",_w=1,Ns="firebase-heartbeat-store";let tc=null;function yg(){return tc||(tc=M1(vw,_w,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ns)}catch(n){console.warn(n)}}}}).catch(i=>{throw Jn.create("idb-open",{originalErrorMessage:i.message})})),tc}async function yw(i){try{const n=(await yg()).transaction(Ns),s=await n.objectStore(Ns).get(wg(i));return await n.done,s}catch(e){if(e instanceof ir)kn.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function Kp(i,e){try{const s=(await yg()).transaction(Ns,"readwrite");await s.objectStore(Ns).put(e,wg(i)),await s.done}catch(n){if(n instanceof ir)kn.warn(n.message);else{const s=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(s.message)}}}function wg(i){return`${i.name}!${i.options.appId}`}/**
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
 */function Tw(i){pi(new Tr("platform-logger",e=>new F1(e),"PRIVATE")),pi(new Tr("heartbeat",e=>new Sw(e),"PRIVATE")),Zn(pc,Gp,i),Zn(pc,Gp,"esm2017"),Zn("fire-js","")}Tw("");var xw="firebase",Nw="11.9.1";/**
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
 */Zn(xw,Nw,"app");function Vc(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(i);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(i,s[l])&&(n[s[l]]=i[s[l]]);return n}function Eg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bw=Eg,Sg=new Fs("auth","Firebase",Eg());/**
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
 */const _l=new Fc("@firebase/auth");function Rw(i,...e){_l.logLevel<=xe.WARN&&_l.warn(`Auth (${ki}): ${i}`,...e)}function ll(i,...e){_l.logLevel<=xe.ERROR&&_l.error(`Auth (${ki}): ${i}`,...e)}/**
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
 */function an(i,...e){throw Wc(i,...e)}function Xt(i,...e){return Wc(i,...e)}function Hc(i,e,n){const s=Object.assign(Object.assign({},bw()),{[e]:n});return new Fs("auth","Firebase",s).create(e,{appName:i.name})}function kr(i){return Hc(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pw(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&an(i,"argument-error"),Hc(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wc(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return Sg.create(i,...e)}function se(i,e,...n){if(!i)throw Wc(e,...n)}function wn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ll(e),new Error(e)}function In(i,e){i||wn(e)}/**
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
 */function vc(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Ow(){return Xp()==="http:"||Xp()==="https:"}function Xp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function Aw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ow()||s1()||"connection"in navigator)?navigator.onLine:!0}function Dw(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=jc()||hg()}get(){return Aw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bc(i,e){In(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */const Mw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Lw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jw=new zs(3e4,6e4);function $c(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ii(i,e,n,s,l={}){return kg(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Ci(Object.assign({key:i.config.apiKey},d)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},u);return i1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Si(i.emulatorConfig.host)&&(g.credentials="include"),Cg.fetch()(await Ig(i,i.config.apiHost,n,f),g)})}async function kg(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},Mw),e);try{const l=new zw(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw rl(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(i,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw rl(i,"email-already-in-use",d);if(p==="USER_DISABLED")throw rl(i,"user-disabled",d);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Hc(i,w,g);an(i,w)}}catch(l){if(l instanceof ir)throw l;an(i,"network-request-failed",{message:String(l)})}}async function Fw(i,e,n,s,l={}){const u=await Ii(i,e,n,s,l);return"mfaPendingCredential"in u&&an(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Ig(i,e,n,s){const l=`${e}${n}?${s}`,u=i,d=u.config.emulator?Bc(i.config,l):`${i.config.apiScheme}://${l}`;return Lw.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class zw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Xt(this.auth,"network-request-failed")),jw.get())})}}function rl(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Xt(i,e,s);return l.customData._tokenResponse=n,l}/**
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
 */function Es(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vw(i,e=!1){const n=Rt(i),s=await n.getIdToken(e),l=Gc(s);se(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Es(nc(l.auth_time)),issuedAtTime:Es(nc(l.iat)),expirationTime:Es(nc(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function nc(i){return Number(i)*1e3}function Gc(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const l=ml(n);return l?JSON.parse(l):(ll("Failed to decode base64 JWT payload"),null)}catch(l){return ll("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Jp(i){const e=Gc(i);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bs(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ir&&Hw(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Hw({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Ww{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _c{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wl(i){var e;const n=i.auth,s=await i.getIdToken(),l=await bs(i,yl(n,{idToken:s}));se(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];i._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Tg(u.providerUserInfo):[],f=$w(i.providerData,d),p=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(f!=null&&f.length),w=p?g:!1,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new _c(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,v)}async function Bw(i){const e=Rt(i);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $w(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Tg(i){return i.map(e=>{var{providerId:n}=e,s=Vc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=Jp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await Gw(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new li;return s&&(se(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(se(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(se(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function Gn(i,e){se(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Qt{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=Vc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ww(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new _c(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await bs(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vw(this,e)}reload(){return Bw(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(kr(this.auth));const e=await this.getIdToken();return await bs(this,Uw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,w;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,_=(l=n.email)!==null&&l!==void 0?l:void 0,N=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,R=(d=n.photoURL)!==null&&d!==void 0?d:void 0,j=(f=n.tenantId)!==null&&f!==void 0?f:void 0,V=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,ke=(g=n.createdAt)!==null&&g!==void 0?g:void 0,Z=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:_e,emailVerified:Ee,isAnonymous:Fe,providerData:ee,stsTokenManager:ge}=n;se(_e&&ge,e,"internal-error");const ce=li.fromJSON(this.name,ge);se(typeof _e=="string",e,"internal-error"),Gn(v,e.name),Gn(_,e.name),se(typeof Ee=="boolean",e,"internal-error"),se(typeof Fe=="boolean",e,"internal-error"),Gn(N,e.name),Gn(R,e.name),Gn(j,e.name),Gn(V,e.name),Gn(ke,e.name),Gn(Z,e.name);const Re=new Qt({uid:_e,auth:e,email:_,emailVerified:Ee,displayName:v,isAnonymous:Fe,photoURL:R,phoneNumber:N,tenantId:j,stsTokenManager:ce,createdAt:ke,lastLoginAt:Z});return ee&&Array.isArray(ee)&&(Re.providerData=ee.map(Me=>Object.assign({},Me))),V&&(Re._redirectEventId=V),Re}static async _fromIdTokenResponse(e,n,s=!1){const l=new li;l.updateFromServerResponse(n);const u=new Qt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await wl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];se(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Tg(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new li;f.updateFromIdToken(s);const p=new Qt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new _c(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
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
 */class xg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xg.type="NONE";const em=xg;/**
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
 */function tm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ng(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ag(e))return"Blackberry";if(Dg(e))return"Webos";if(bg(e))return"Safari";if((e.includes("chrome/")||Rg(e))&&!e.includes("edge/"))return"Chrome";if(Og(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ng(i=gt()){return/firefox\//i.test(i)}function bg(i=gt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rg(i=gt()){return/crios\//i.test(i)}function Pg(i=gt()){return/iemobile/i.test(i)}function Og(i=gt()){return/android/i.test(i)}function Ag(i=gt()){return/blackberry/i.test(i)}function Dg(i=gt()){return/webos/i.test(i)}function qc(i=gt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Kw(i=gt()){var e;return qc(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qw(){return o1()&&document.documentMode===10}function Mg(i=gt()){return qc(i)||Og(i)||Dg(i)||Ag(i)||/windows phone/i.test(i)||Pg(i)}/**
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
 */function Lg(i,e=[]){let n;switch(i){case"Browser":n=tm(gt());break;case"Worker":n=`${tm(gt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${s}`}/**
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
 */class eE{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nm(this),this.idTokenSubscription=new nm(this),this.beforeStateQueue=new Yw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yl(this,{idToken:e}),s=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Kt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(kr(this));const n=e?Rt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xw(this),n=new Zw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await qw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Rw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vl(i){return Rt(i)}class nm{constructor(e){this.auth=e,this.observer=null,this.addObserver=m1(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function sE(i,e){const n=Uc(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Ir(u,e??{}))return l;an(l,"already-initialized")}return n.initialize({options:e})}function oE(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function lE(i,e,n){const s=Vl(i);se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=jg(e),{host:d,port:f}=aE(e),p=f===null?"":`:${f}`,g={url:`${u}//${d}${p}/`},w=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){se(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),se(Ir(g,s.config.emulator)&&Ir(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Si(d)?(cg(`${u}//${d}${p}`),dg("Auth",!0)):uE()}function jg(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function aE(i){const e=jg(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:rm(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:rm(d)}}}function rm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function uE(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */const cE="http://localhost";class xr extends Fg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=Vc(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new xr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return ui(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ui(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ui(e,n)}buildRequest(){const e={requestUri:cE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
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
 */class qn extends Us{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class yn extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return yn.credential(n,s)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
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
 */class Kn extends Us{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class Qn extends Us{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */async function hE(i,e,n=!1){const{auth:s}=i;if(Kt(s.app))return Promise.reject(kr(s));const l="reauthenticate";try{const u=await bs(i,zg(s,l,e,i),n);se(u.idToken,s,"internal-error");const d=Gc(u.idToken);se(d,s,"internal-error");const{sub:f}=d;return se(i.uid===f,s,"user-mismatch"),mi._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&an(s,"user-mismatch"),u}}/**
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
 */async function fE(i,e,n=!1){if(Kt(i.app))return Promise.reject(kr(i));const s="signIn",l=await zg(i,s,e),u=await mi._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}function pE(i,e,n,s){return Rt(i).onIdTokenChanged(e,n,s)}function mE(i,e,n){return Rt(i).beforeAuthStateChanged(e,n)}function aI(i){return Rt(i).signOut()}const Sl="__sak";/**
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
 */const gE=1e3,vE=10;class Vg extends Ug{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);Qw()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,vE):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},gE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vg.type="LOCAL";const _E=Vg;/**
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
 */class Hg extends Ug{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hg.type="SESSION";const Wg=Hg;/**
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
 */class Hl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Hl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await yE(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hl.receivers=[];/**
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
 */function ln(){return window}function EE(i){ln().location.href=i}/**
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
 */function Bg(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function SE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CE(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function kE(){return Bg()?self:null}/**
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
 */const $g="firebaseLocalStorageDb",IE=1,Cl="firebaseLocalStorage",Gg="fbase_key";class Vs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wl(i,e){return i.transaction([Cl],e?"readwrite":"readonly").objectStore(Cl)}function TE(){const i=indexedDB.deleteDatabase($g);return new Vs(i).toPromise()}function yc(){const i=indexedDB.open($g,IE);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Cl,{keyPath:Gg})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Cl)?e(s):(s.close(),await TE(),e(await yc()))})})}async function sm(i,e,n){const s=Wl(i,!0).put({[Gg]:e,value:n});return new Vs(s).toPromise()}async function xE(i,e){const n=Wl(i,!1).get(e),s=await new Vs(n).toPromise();return s===void 0?null:s.value}function om(i,e){const n=Wl(i,!0).delete(e);return new Vs(n).toPromise()}const NE=800,bE=3;class qg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>bE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hl._getInstance(kE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SE(),!this.activeServiceWorker)return;this.sender=new wE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yc();return await sm(e,Sl,"1"),await om(e,Sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>xE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>om(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=Wl(l,!1).getAll();return new Vs(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qg.type="LOCAL";const RE=qg;new zs(3e4,6e4);/**
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
 */function Kg(i,e){return e?En(e):(se(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Xc extends Fg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PE(i){return fE(i.auth,new Xc(i),i.bypassAuthState)}function OE(i){const{auth:e,user:n}=i;return se(n,e,"internal-error"),hE(n,new Xc(i),i.bypassAuthState)}async function AE(i){const{auth:e,user:n}=i;return se(n,e,"internal-error"),dE(n,new Xc(i),i.bypassAuthState)}/**
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
 */class Qg{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PE;case"linkViaPopup":case"linkViaRedirect":return AE;case"reauthViaPopup":case"reauthViaRedirect":return OE;default:an(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const DE=new zs(2e3,1e4);async function uI(i,e,n){if(Kt(i.app))return Promise.reject(Xt(i,"operation-not-supported-in-this-environment"));const s=Vl(i);Pw(i,e,Qc);const l=Kg(s,n);return new Er(s,"signInViaPopup",e,l).executeNotNull()}class Er extends Qg{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DE.get())};e()}}Er.currentPopupAction=null;/**
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
 */const ME="pendingRedirect",ul=new Map;class LE extends Qg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const s=await jE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jE(i,e){const n=UE(e),s=zE(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function FE(i,e){ul.set(i._key(),e)}function zE(i){return En(i._redirectPersistence)}function UE(i){return al(ME,i.config.apiKey,i.name)}async function VE(i,e,n=!1){if(Kt(i.app))return Promise.reject(kr(i));const s=Vl(i),l=Kg(s,e),d=await new LE(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const HE=10*60*1e3;class WE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Yg(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HE&&this.cachedEventUids.clear(),this.cachedEventUids.has(lm(e))}saveEventToCache(e){this.cachedEventUids.add(lm(e)),this.lastProcessedEventTime=Date.now()}}function lm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Yg({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BE(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yg(i);default:return!1}}/**
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
 */const GE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qE=/^https?/;async function KE(i){if(i.config.emulator)return;const{authorizedDomains:e}=await $E(i);for(const n of e)try{if(QE(n))return}catch{}an(i,"unauthorized-domain")}function QE(i){const e=vc(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!qE.test(n))return!1;if(GE.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const YE=new zs(3e4,6e4);function am(){const i=ln().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function XE(i){return new Promise((e,n)=>{var s,l,u;function d(){am(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{am(),n(Xt(i,"network-request-failed"))},timeout:YE.get()})}if(!((l=(s=ln().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=ln().gapi)===null||u===void 0)&&u.load)d();else{const f=iE("iframefcb");return ln()[f]=()=>{gapi.load?d():n(Xt(i,"network-request-failed"))},nE(`${rE()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw cl=null,e})}let cl=null;function JE(i){return cl=cl||XE(i),cl}/**
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
 */const ZE=new zs(5e3,15e3),eS="__/auth/iframe",tS="emulator/auth/iframe",nS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iS(i){const e=i.config;se(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Bc(e,tS):`https://${i.config.authDomain}/${eS}`,s={apiKey:e.apiKey,appName:i.name,v:ki},l=rS.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ci(s).slice(1)}`}async function sS(i){const e=await JE(i),n=ln().gapi;return se(n,i,"internal-error"),e.open({where:document.body,url:iS(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nS,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=Xt(i,"network-request-failed"),f=ln().setTimeout(()=>{u(d)},ZE.get());function p(){ln().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
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
 */const oS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lS=500,aS=600,uS="_blank",cS="http://localhost";class um{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dS(i,e,n,s=lS,l=aS){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},oS),{width:s.toString(),height:l.toString(),top:u,left:d}),g=gt().toLowerCase();n&&(f=Rg(g)?uS:n),Ng(g)&&(e=e||cS,p.scrollbars="yes");const w=Object.entries(p).reduce((_,[N,R])=>`${_}${N}=${R},`,"");if(Kw(g)&&f!=="_self")return hS(e||"",f),new um(null);const v=window.open(e||"",f,w);se(v,i,"popup-blocked");try{v.focus()}catch{}return new um(v)}function hS(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const fS="__/auth/handler",pS="emulator/auth/handler",mS=encodeURIComponent("fac");async function cm(i,e,n,s,l,u){se(i.config.authDomain,i,"auth-domain-config-required"),se(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:ki,eventId:l};if(e instanceof Qc){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",dc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,v]of Object.entries({}))d[w]=v}if(e instanceof Us){const w=e.getScopes().filter(v=>v!=="");w.length>0&&(d.scopes=w.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await i._getAppCheckToken(),g=p?`#${mS}=${encodeURIComponent(p)}`:"";return`${gS(i)}?${Ci(f).slice(1)}${g}`}function gS({config:i}){return i.emulator?Bc(i,pS):`https://${i.authDomain}/${fS}`}/**
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
 */const rc="webStorageSupport";class vS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wg,this._completeRedirectFn=VE,this._overrideRedirectResult=FE}async _openPopup(e,n,s,l){var u;In((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await cm(e,n,s,vc(),l);return dS(e,d,Yc())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await cm(e,n,s,vc(),l);return EE(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(In(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await sS(e),s=new WE(e);return n.register("authEvent",l=>(se(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rc,{type:rc},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[rc];d!==void 0&&n(!!d),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mg()||bg()||qc()}}const _S=vS;var dm="@firebase/auth",hm="1.10.7";/**
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
 */class yS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ES(i){pi(new Tr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;se(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lg(i)},g=new eE(s,l,u,p);return oE(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),pi(new Tr("auth-internal",e=>{const n=Vl(e.getProvider("auth").getImmediate());return(s=>new yS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(dm,hm,wS(i)),Zn(dm,hm,"esm2017")}/**
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
 */const SS=5*60,CS=ug("authIdTokenMaxAge")||SS;let fm=null;const kS=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>CS)return;const l=n==null?void 0:n.token;fm!==l&&(fm=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function IS(i=_g()){const e=Uc(i,"auth");if(e.isInitialized())return e.getImmediate();const n=sE(i,{popupRedirectResolver:_S,persistence:[RE,_E,Wg]}),s=ug("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=kS(u.toString());mE(n,d,()=>d(n.currentUser)),pE(n,f=>d(f))}}const l=lg("auth");return l&&lE(n,`http://${l}`),n}function TS(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}tE({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=Xt("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",TS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ES("Browser");var pm={};const mm="@firebase/database",gm="1.0.19";/**
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
 */let Xg="";function xS(i){Xg=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new NS(e)}}catch{}return new bS},Sr=Jg("localStorage"),RS=Jg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Fc("@firebase/database"),PS=function(){let i=1;return function(){return i++}}(),Zg=function(i){const e=_1(i),n=new p1;n.update(e);const s=n.digest();return Mc.encodeByteArray(s)},Hs=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Hs.apply(null,s):typeof s=="object"?e+=rt(s):e+=s,e+=" "}return e};let Ss=null,vm=!0;const OS=function(i,e){M(!e,"Can't turn on custom loggers persistently."),ci.logLevel=xe.VERBOSE,Ss=ci.log.bind(ci)},lt=function(...i){if(vm===!0&&(vm=!1,Ss===null&&RS.get("logging_enabled")===!0&&OS()),Ss){const e=Hs.apply(null,i);Ss(e)}},Ws=function(i){return function(...e){lt(i,...e)}},wc=function(...i){const e="FIREBASE INTERNAL ERROR: "+Hs(...i);ci.error(e)},Tn=function(...i){const e=`FIREBASE FATAL ERROR: ${Hs(...i)}`;throw ci.error(e),new Error(e)},mt=function(...i){const e="FIREBASE WARNING: "+Hs(...i);ci.warn(e)},AS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jc=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},DS=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},gi="[MIN_NAME]",Nr="[MAX_NAME]",Or=function(i,e){if(i===e)return 0;if(i===gi||e===Nr)return-1;if(e===gi||i===Nr)return 1;{const n=_m(i),s=_m(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},MS=function(i,e){return i===e?0:i<e?-1:1},ms=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+rt(e))},Zc=function(i){if(typeof i!="object"||i===null)return rt(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=rt(e[s]),n+=":",n+=Zc(i[e[s]]);return n+="}",n},e0=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function at(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const t0=function(i){M(!Jc(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const w=g.join("");let v="";for(p=0;p<64;p+=8){let _=parseInt(w.substr(p,8),2).toString(16);_.length===1&&(_="0"+_),v=v+_}return v.toLowerCase()},LS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function FS(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const zS=new RegExp("^-?(0*)\\d{1,10}$"),US=-2147483648,VS=2147483647,_m=function(i){if(zS.test(i)){const e=Number(i);if(e>=US&&e<=VS)return e}return null},Ti=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw mt("Exception was thrown by user callback.",n),e},Math.floor(0))}},HS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Cs=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class WS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Kt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){mt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',mt(e)}}class dl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}dl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="5",n0="v",r0="s",i0="r",s0="f",o0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,l0="ls",a0="p",Ec="ac",u0="websocket",c0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $S(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function h0(i,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let s;if(e===u0)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===c0)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$S(i)&&(n.ns=i.namespace);const l=[];return at(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.counters_={}}incrementCounter(e,n=1){un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ky(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic={},sc={};function td(i){const e=i.toString();return ic[e]||(ic[e]=new GS),ic[e]}function qS(i,e){const n=i.toString();return sc[n]||(sc[n]=e()),sc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ti(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="start",QS="close",YS="pLPCommand",XS="pRTLPCB",f0="id",p0="pw",m0="ser",JS="cb",ZS="seg",eC="ts",tC="d",nC="dframe",g0=1870,v0=30,rC=g0-v0,iC=25e3,sC=3e4;class oi{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ws(e),this.stats_=td(n),this.urlFn=p=>(this.appCheckToken&&(p[Ec]=this.appCheckToken),h0(n,c0,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new KS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sC)),DS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nd((...u)=>{const[d,f,p,g,w]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===ym)this.id=f,this.password=p;else if(d===QS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[ym]="t",s[m0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[JS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[n0]=ed,this.transportSessionId&&(s[r0]=this.transportSessionId),this.lastSessionId&&(s[l0]=this.lastSessionId),this.applicationId&&(s[a0]=this.applicationId),this.appCheckToken&&(s[Ec]=this.appCheckToken),typeof location<"u"&&location.hostname&&o0.test(location.hostname)&&(s[i0]=s0);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oi.forceAllow_=!0}static forceDisallow(){oi.forceDisallow_=!0}static isAvailable(){return oi.forceAllow_?!0:!oi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!LS()&&!jS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=sg(n),l=e0(s,rC);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[nC]="t",s[f0]=e,s[p0]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class nd{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=PS(),window[YS+this.uniqueCallbackIdentifier]=e,window[XS+this.uniqueCallbackIdentifier]=n,this.myIFrame=nd.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){lt("frame writing exception"),f.stack&&lt(f.stack),lt(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[f0]=this.myID,e[p0]=this.myPW,e[m0]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+v0+s.length<=g0;){const d=this.pendingSegs.shift();s=s+"&"+ZS+l+"="+d.seg+"&"+eC+l+"="+d.ts+"&"+tC+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(iC)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=16384,lC=45e3;let kl=null;typeof MozWebSocket<"u"?kl=MozWebSocket:typeof WebSocket<"u"&&(kl=WebSocket);class on{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ws(this.connId),this.stats_=td(n),this.connURL=on.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[n0]=ed,typeof location<"u"&&location.hostname&&o0.test(location.hostname)&&(d[i0]=s0),n&&(d[r0]=n),s&&(d[l0]=s),l&&(d[Ec]=l),u&&(d[a0]=u),h0(e,u0,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Sr.set("previous_websocket_failure",!0);try{let s;fg(),this.mySock=new kl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){on.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&kl!==null&&!on.forceDisallow_}static previouslyFailed(){return Sr.isInMemoryStorage||Sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=xs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=e0(n,oC);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}on.responsesRequiredToBeHealthy=2;on.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{static get ALL_TRANSPORTS(){return[oi,on]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=on.isAvailable();let s=n&&!on.previouslyFailed();if(e.webSocketOnly&&(n||mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[on];else{const l=this.transports_=[];for(const u of Rs.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Rs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=6e4,uC=5e3,cC=10*1024,dC=100*1024,oc="t",wm="d",hC="s",Em="r",fC="e",Sm="o",Cm="a",km="n",Im="p",pC="h";class mC{constructor(e,n,s,l,u,d,f,p,g,w){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=w,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ws("c:"+this.id+":"),this.transportManager_=new Rs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Cs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(oc in e){const n=e[oc];n===Cm?this.upgradeIfSecondaryHealthy_():n===Em?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ms("t",e),s=ms("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Im,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:km,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ms("t",e),s=ms("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ms(oc,e);if(wm in e){const s=e[wm];if(n===pC){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===km){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hC?this.onConnectionShutdown_(s):n===Em?this.onReset_(s):n===fC?wc("Server Error: "+s):n===Sm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ed!==s&&mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Cs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Cs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Im,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends y0{static getInstance(){return new Il}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=32,xm=768;class Ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ce(){return new Ne("")}function fe(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function tr(i){return i.pieces_.length-i.pieceNum_}function De(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new Ne(i.pieces_,e)}function rd(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function gC(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function Ps(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function w0(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new Ne(e,0)}function Be(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof Ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new Ne(n,0)}function me(i){return i.pieceNum_>=i.pieces_.length}function Ct(i,e){const n=fe(i),s=fe(e);if(n===null)return e;if(n===s)return Ct(De(i),De(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function vC(i,e){const n=Ps(i,0),s=Ps(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=Or(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function id(i,e){if(tr(i)!==tr(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ft(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(tr(i)>tr(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class _C{constructor(e,n){this.errorPrefix_=n,this.parts_=Ps(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ul(this.parts_[s]);E0(this)}}function yC(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Ul(e),E0(i)}function wC(i){const e=i.parts_.pop();i.byteLength_-=Ul(e),i.parts_.length>0&&(i.byteLength_-=1)}function E0(i){if(i.byteLength_>xm)throw new Error(i.errorPrefix_+"has a key path longer than "+xm+" bytes ("+i.byteLength_+").");if(i.parts_.length>Tm)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Tm+") or object contains a cycle "+wr(i))}function wr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd extends y0{static getInstance(){return new sd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=1e3,EC=60*5*1e3,Nm=30*1e3,SC=1.3,CC=3e4,kC="server_kill",bm=3;class Cn extends _0{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Cn.nextPersistentConnectionId_++,this.log_=Ws("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gs,this.maxReconnectDelay_=EC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!fg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Il.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(rt(u)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new js,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;Cn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&un(e,"w")){const s=fi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||f1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=h1(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wc("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CC&&(this.reconnectDelay_=gs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Cn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(v){M(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:g};const w=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,_]=await Promise.all([this.authTokenProvider_.getToken(w),this.appCheckTokenProvider_.getToken(w)]);d?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=_&&_.token,f=new mC(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,N=>{mt(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(kC)},u))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&mt(v),p())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],dc(this.interruptReasons_)&&(this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Zc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new Ne(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bm&&(this.reconnectDelay_=Nm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Xg.replace(/\./g,"-")]=1,jc()?e["framework.cordova"]=1:hg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Il.getInstance().currentlyOnline();return dc(this.interruptReasons_)&&e}}Cn.nextPersistentConnectionId_=0;Cn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new pe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new pe(gi,e),l=new pe(gi,n);return this.compare(s,l)!==0}minPost(){return pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il;class S0 extends Bl{static get __EMPTY_NODE(){return il}static set __EMPTY_NODE(e){il=e}compare(e,n){return Or(e.name,n.name)}isDefinedOn(e){throw Ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(Nr,il)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,il)}toString(){return".key"}}const di=new S0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function TC(i,e){return Or(i.name,e.name)}function od(i,e){return Or(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc;function xC(i){Sc=i}const C0=function(i){return typeof i=="number"?"number:"+t0(i):"string:"+i},k0=function(i){if(i.isLeafNode()){const e=i.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&un(e,".sv"),"Priority must be a string or number.")}else M(i===Sc||i.isEmpty(),"priority of unexpected type.");M(i===Sc||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rm;class et{static set __childrenNodeConstructor(e){Rm=e}static get __childrenNodeConstructor(){return Rm}constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),k0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:fe(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=fe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(M(s!==".priority"||tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(De(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+C0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=t0(this.value_):e+=this.value_,this.lazyHash_=Zg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=et.VALUE_TYPE_ORDER.indexOf(n),u=et.VALUE_TYPE_ORDER.indexOf(s);return M(l>=0,"Unknown leaf type: "+n),M(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I0,T0;function NC(i){I0=i}function bC(i){T0=i}class RC extends Bl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?Or(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(Nr,new et("[PRIORITY-POST]",T0))}makePost(e,n){const s=I0(e);return new pe(n,new et("[PRIORITY-POST]",s))}toString(){return".priority"}}const $e=new RC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=Math.log(2);class OC{constructor(e){const n=u=>parseInt(Math.log(u)/PC,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tl=function(i,e,n,s){i.sort(e);const l=function(p,g){const w=g-p;let v,_;if(w===0)return null;if(w===1)return v=i[p],_=n?n(v):v,new tt(_,v.node,tt.BLACK,null,null);{const N=parseInt(w/2,10)+p,R=l(p,N),j=l(N+1,g);return v=i[N],_=n?n(v):v,new tt(_,v.node,tt.BLACK,R,j)}},u=function(p){let g=null,w=null,v=i.length;const _=function(R,j){const V=v-R,ke=v;v-=R;const Z=l(V+1,ke),_e=i[V],Ee=n?n(_e):_e;N(new tt(Ee,_e.node,j,null,Z))},N=function(R){g?(g.left=R,g=R):(w=R,g=R)};for(let R=0;R<p.count;++R){const j=p.nextBitIsOne(),V=Math.pow(2,p.count-(R+1));j?_(V,tt.BLACK):(_(V,tt.BLACK),_(V,tt.RED))}return w},d=new OC(i.length),f=u(d);return new kt(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lc;const vs={};class Sn{static get Default(){return M($e,"ChildrenNode.ts has not been loaded"),lc=lc||new Sn({".priority":vs},{".priority":$e}),lc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=fi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof kt?n:null}hasIndex(e){return un(this.indexSet_,e.toString())}addIndex(e,n){M(e!==di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(pe.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=Tl(s,e.getCompare()):f=vs;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const w=Object.assign({},this.indexes_);return w[p]=f,new Sn(w,g)}addToIndexes(e,n){const s=gl(this.indexes_,(l,u)=>{const d=fi(this.indexSet_,u);if(M(d,"Missing index implementation for "+u),l===vs)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(pe.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Tl(f,d.getCompare())}else return vs;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new pe(e.name,f))),p.insert(e,e.node)}});return new Sn(s,this.indexSet_)}removeFromIndexes(e,n){const s=gl(this.indexes_,l=>{if(l===vs)return l;{const u=n.get(e.name);return u?l.remove(new pe(e.name,u)):l}});return new Sn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s;class re{static get EMPTY_NODE(){return _s||(_s=new re(new kt(od),null,Sn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&k0(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_s}updatePriority(e){return this.children_.isEmpty()?this:new re(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_s:n}}getChild(e){const n=fe(e);return n===null?this:this.getImmediateChild(n).getChild(De(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new pe(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?_s:this.priorityNode_;return new re(l,d,u)}}updateChild(e,n){const s=fe(e);if(s===null)return n;{M(fe(e)!==".priority"||tr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(De(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild($e,(d,f)=>{n[d]=f.val(e),s++,u&&re.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+C0(this.getPriority().val())+":"),this.forEachChild($e,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Zg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new pe(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,pe.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bs?-1:0}withIndex(e){if(e===di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new re(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator($e),l=n.getIterator($e);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===di?null:this.indexMap_.get(e.toString())}}re.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class AC extends re{constructor(){super(new kt(od),re.EMPTY_NODE,Sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return re.EMPTY_NODE}isEmpty(){return!1}}const Bs=new AC;Object.defineProperties(pe,{MIN:{value:new pe(gi,re.EMPTY_NODE)},MAX:{value:new pe(Nr,Bs)}});S0.__EMPTY_NODE=re.EMPTY_NODE;et.__childrenNodeConstructor=re;xC(Bs);bC(Bs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=!0;function nt(i,e=null){if(i===null)return re.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new et(n,nt(e))}if(!(i instanceof Array)&&DC){const n=[];let s=!1;if(at(i,(d,f)=>{if(d.substring(0,1)!=="."){const p=nt(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new pe(d,p)))}}),n.length===0)return re.EMPTY_NODE;const u=Tl(n,TC,d=>d.name,od);if(s){const d=Tl(n,$e.getCompare());return new re(u,nt(e),new Sn({".priority":d},{".priority":$e}))}else return new re(u,nt(e),Sn.Default)}else{let n=re.EMPTY_NODE;return at(i,(s,l)=>{if(un(i,s)&&s.substring(0,1)!=="."){const u=nt(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(nt(e))}}NC(nt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC extends Bl{constructor(e){super(),this.indexPath_=e,M(!me(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?Or(e.name,n.name):u}makePost(e,n){const s=nt(e),l=re.EMPTY_NODE.updateChild(this.indexPath_,s);return new pe(n,l)}maxPost(){const e=re.EMPTY_NODE.updateChild(this.indexPath_,Bs);return new pe(Nr,e)}toString(){return Ps(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC extends Bl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Or(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const s=nt(e);return new pe(n,s)}toString(){return".value"}}const jC=new LC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(i){return{type:"value",snapshotNode:i}}function vi(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function Os(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function As(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function FC(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){M(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(Os(n,f)):M(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(vi(n,s)):d.trackChildChange(As(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild($e,(l,u)=>{n.hasChild(l)||s.trackChildChange(Os(l,u))}),n.isLeafNode()||n.forEachChild($e,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(As(l,u,d))}else s.trackChildChange(vi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?re.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.indexedFilter_=new ld(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ds.getStartPost_(e),this.endPost_=Ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new pe(n,s))||(s=re.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=re.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(re.EMPTY_NODE);const u=this;return n.forEachChild($e,(d,f)=>{u.matches(new pe(d,f))||(l=l.updateImmediateChild(d,re.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new pe(n,s))||(s=re.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=re.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=re.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(re.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,re.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const v=this.index_.getCompare();d=(_,N)=>v(N,_)}else d=this.index_.getCompare();const f=e;M(f.numChildren()===this.limit_,"");const p=new pe(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),w=this.rangedFilter_.matches(p);if(f.hasChild(n)){const v=f.getImmediateChild(n);let _=l.getChildAfterChild(this.index_,g,this.reverse_);for(;_!=null&&(_.name===n||f.hasChild(_.name));)_=l.getChildAfterChild(this.index_,_,this.reverse_);const N=_==null?1:d(_,p);if(w&&!s.isEmpty()&&N>=0)return u!=null&&u.trackChildChange(As(n,s,v)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(Os(n,v));const j=f.updateImmediateChild(n,re.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(u!=null&&u.trackChildChange(vi(_.name,_.node)),j.updateImmediateChild(_.name,_.node)):j}}else return s.isEmpty()?e:w&&d(g,p)>=0?(u!=null&&(u.trackChildChange(Os(g.name,g.node)),u.trackChildChange(vi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,re.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gi}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new ad;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function UC(i){return i.loadsAllData()?new ld(i.getIndex()):i.hasLimit()?new zC(i):new Ds(i)}function Pm(i){const e={};if(i.isDefault())return e;let n;if(i.index_===$e?n="$priority":i.index_===jC?n="$value":i.index_===di?n="$key":(M(i.index_ instanceof MC,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=rt(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=rt(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+rt(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=rt(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+rt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function Om(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==$e&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends _0{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Ws("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=xl.getListenId_(e,s),f={};this.listens_[d]=f;const p=Pm(e._queryParams);this.restRequest_(u+".json",p,(g,w)=>{let v=w;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(u,v,!1,s),fi(this.listens_,d)===f){let _;g?g===401?_="permission_denied":_="rest_error:"+g:_="ok",l(_,null)}})}unlisten(e,n){const s=xl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Pm(e._queryParams),s=e._path.toString(),l=new js;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ci(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=xs(f.responseText)}catch{mt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&mt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.rootNode_=re.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){return{value:null,children:new Map}}function N0(i,e,n){if(me(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=fe(e);i.children.has(s)||i.children.set(s,Nl());const l=i.children.get(s);e=De(e),N0(l,e,n)}}function Cc(i,e,n){i.value!==null?n(e,i.value):HC(i,(s,l)=>{const u=new Ne(e.toString()+"/"+s);Cc(l,u,n)})}function HC(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&at(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=10*1e3,BC=30*1e3,$C=5*60*1e3;class GC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new WC(e);const s=Am+(BC-Am)*Math.random();Cs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;at(e,(l,u)=>{u>0&&un(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),Cs(this.reportStats_.bind(this),Math.floor(Math.random()*2*$C))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Yt.ACK_USER_WRITE,this.source=ud()}operationForChild(e){if(me(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ne(e));return new bl(Ce(),n,this.revert)}}else return M(fe(this.path)===e,"operationForChild called for unrelated child."),new bl(De(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.source=e,this.path=n,this.type=Yt.LISTEN_COMPLETE}operationForChild(e){return me(this.path)?new Ms(this.source,Ce()):new Ms(this.source,De(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Yt.OVERWRITE}operationForChild(e){return me(this.path)?new br(this.source,Ce(),this.snap.getImmediateChild(e)):new br(this.source,De(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Yt.MERGE}operationForChild(e){if(me(this.path)){const n=this.children.subtree(new Ne(e));return n.isEmpty()?null:n.value?new br(this.source,Ce(),n.value):new _i(this.source,Ce(),n)}else return M(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _i(this.source,De(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(me(e))return this.isFullyInitialized()&&!this.filtered_;const n=fe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function KC(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(FC(d.childName,d.snapshotNode))}),ys(i,l,"child_removed",e,s,n),ys(i,l,"child_added",e,s,n),ys(i,l,"child_moved",u,s,n),ys(i,l,"child_changed",e,s,n),ys(i,l,"value",e,s,n),l}function ys(i,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>YC(i,f,p)),d.forEach(f=>{const p=QC(i,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,i.query_))})})}function QC(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function YC(i,e,n){if(e.childName==null||n.childName==null)throw Ei("Should only compare child_ events.");const s=new pe(e.childName,e.snapshotNode),l=new pe(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(i,e){return{eventCache:i,serverCache:e}}function ks(i,e,n,s){return $l(new Rr(e,n,s),i.serverCache)}function b0(i,e,n,s){return $l(i.eventCache,new Rr(e,n,s))}function kc(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Pr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac;const XC=()=>(ac||(ac=new kt(MS)),ac);class Ae{static fromObject(e){let n=new Ae(null);return at(e,(s,l)=>{n=n.set(new Ne(s),l)}),n}constructor(e,n=XC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ce(),value:this.value};if(me(e))return null;{const s=fe(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(De(e),n);return u!=null?{path:Be(new Ne(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const n=fe(e),s=this.children.get(n);return s!==null?s.subtree(De(e)):new Ae(null)}}set(e,n){if(me(e))return new Ae(n,this.children);{const s=fe(e),u=(this.children.get(s)||new Ae(null)).set(De(e),n),d=this.children.insert(s,u);return new Ae(this.value,d)}}remove(e){if(me(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const n=fe(e),s=this.children.get(n);if(s){const l=s.remove(De(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new Ae(null):new Ae(this.value,u)}else return this}}get(e){if(me(e))return this.value;{const n=fe(e),s=this.children.get(n);return s?s.get(De(e)):null}}setTree(e,n){if(me(e))return n;{const s=fe(e),u=(this.children.get(s)||new Ae(null)).setTree(De(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new Ae(this.value,d)}}fold(e){return this.fold_(Ce(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Be(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ce(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(me(e))return null;{const u=fe(e),d=this.children.get(u);return d?d.findOnPath_(De(e),Be(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ce(),n)}foreachOnPath_(e,n,s){if(me(e))return this;{this.value&&s(n,this.value);const l=fe(e),u=this.children.get(l);return u?u.foreachOnPath_(De(e),Be(n,l),s):new Ae(null)}}foreach(e){this.foreach_(Ce(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Be(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new Ae(null))}}function Is(i,e,n){if(me(e))return new Jt(new Ae(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=Ct(l,e);return u=u.updateChild(d,n),new Jt(i.writeTree_.set(l,u))}else{const l=new Ae(n),u=i.writeTree_.setTree(e,l);return new Jt(u)}}}function Ic(i,e,n){let s=i;return at(n,(l,u)=>{s=Is(s,Be(e,l),u)}),s}function Dm(i,e){if(me(e))return Jt.empty();{const n=i.writeTree_.setTree(e,new Ae(null));return new Jt(n)}}function Tc(i,e){return Ar(i,e)!=null}function Ar(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(Ct(n.path,e)):null}function Mm(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(s,l)=>{e.push(new pe(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new pe(s,l.value))}),e}function er(i,e){if(me(e))return i;{const n=Ar(i,e);return n!=null?new Jt(new Ae(n)):new Jt(i.writeTree_.subtree(e))}}function xc(i){return i.writeTree_.isEmpty()}function yi(i,e){return R0(Ce(),i.writeTree_,e)}function R0(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(M(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=R0(Be(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Be(i,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(i,e){return D0(e,i)}function JC(i,e,n,s,l){M(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=Is(i.visibleWrites,e,n)),i.lastWriteId=s}function ZC(i,e,n,s){M(s>i.lastWriteId,"Stacking an older merge on top of newer ones"),i.allWrites.push({path:e,children:n,writeId:s,visible:!0}),i.visibleWrites=Ic(i.visibleWrites,e,n),i.lastWriteId=s}function e2(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function t2(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&n2(f,s.path)?l=!1:Ft(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return r2(i),!0;if(s.snap)i.visibleWrites=Dm(i.visibleWrites,s.path);else{const f=s.children;at(f,p=>{i.visibleWrites=Dm(i.visibleWrites,Be(s.path,p))})}return!0}else return!1}function n2(i,e){if(i.snap)return Ft(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&Ft(Be(i.path,n),e))return!0;return!1}function r2(i){i.visibleWrites=P0(i.allWrites,i2,Ce()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function i2(i){return i.visible}function P0(i,e,n){let s=Jt.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let f;if(u.snap)Ft(n,d)?(f=Ct(n,d),s=Is(s,f,u.snap)):Ft(d,n)&&(f=Ct(d,n),s=Is(s,Ce(),u.snap.getChild(f)));else if(u.children){if(Ft(n,d))f=Ct(n,d),s=Ic(s,f,u.children);else if(Ft(d,n))if(f=Ct(d,n),me(f))s=Ic(s,Ce(),u.children);else{const p=fi(u.children,fe(f));if(p){const g=p.getChild(De(f));s=Is(s,Ce(),g)}}}else throw Ei("WriteRecord should have .snap or .children")}}return s}function O0(i,e,n,s,l){if(!s&&!l){const u=Ar(i.visibleWrites,e);if(u!=null)return u;{const d=er(i.visibleWrites,e);if(xc(d))return n;if(n==null&&!Tc(d,Ce()))return null;{const f=n||re.EMPTY_NODE;return yi(d,f)}}}else{const u=er(i.visibleWrites,e);if(!l&&xc(u))return n;if(!l&&n==null&&!Tc(u,Ce()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Ft(g.path,e)||Ft(e,g.path))},f=P0(i.allWrites,d,e),p=n||re.EMPTY_NODE;return yi(f,p)}}}function s2(i,e,n){let s=re.EMPTY_NODE;const l=Ar(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild($e,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=er(i.visibleWrites,e);return n.forEachChild($e,(d,f)=>{const p=yi(er(u,new Ne(d)),f);s=s.updateImmediateChild(d,p)}),Mm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=er(i.visibleWrites,e);return Mm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function o2(i,e,n,s,l){M(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Be(e,n);if(Tc(i.visibleWrites,u))return null;{const d=er(i.visibleWrites,u);return xc(d)?l.getChild(n):yi(d,l.getChild(n))}}function l2(i,e,n,s){const l=Be(e,n),u=Ar(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=er(i.visibleWrites,l);return yi(d,s.getNode().getImmediateChild(n))}else return null}function a2(i,e){return Ar(i.visibleWrites,e)}function u2(i,e,n,s,l,u,d){let f;const p=er(i.visibleWrites,e),g=Ar(p,Ce());if(g!=null)f=g;else if(n!=null)f=yi(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const w=[],v=d.getCompare(),_=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let N=_.getNext();for(;N&&w.length<l;)v(N,s)!==0&&w.push(N),N=_.getNext();return w}else return[]}function c2(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function Rl(i,e,n,s){return O0(i.writeTree,i.treePath,e,n,s)}function fd(i,e){return s2(i.writeTree,i.treePath,e)}function Lm(i,e,n,s){return o2(i.writeTree,i.treePath,e,n,s)}function Pl(i,e){return a2(i.writeTree,Be(i.treePath,e))}function d2(i,e,n,s,l,u){return u2(i.writeTree,i.treePath,e,n,s,l,u)}function pd(i,e,n){return l2(i.writeTree,i.treePath,e,n)}function A0(i,e){return D0(Be(i.treePath,e),i.writeTree)}function D0(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,As(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Os(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,vi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,As(s,e.snapshotNode,l.oldSnap));else throw Ei("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const M0=new f2;class md{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Rr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pr(this.viewCache_),u=d2(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(i){return{filter:i}}function m2(i,e){M(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function g2(i,e,n,s,l){const u=new h2;let d,f;if(n.type===Yt.OVERWRITE){const g=n;g.source.fromUser?d=Nc(i,e,g.path,g.snap,s,l,u):(M(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!me(g.path),d=Ol(i,e,g.path,g.snap,s,l,f,u))}else if(n.type===Yt.MERGE){const g=n;g.source.fromUser?d=_2(i,e,g.path,g.children,s,l,u):(M(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=bc(i,e,g.path,g.children,s,l,f,u))}else if(n.type===Yt.ACK_USER_WRITE){const g=n;g.revert?d=E2(i,e,g.path,s,l,u):d=y2(i,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Yt.LISTEN_COMPLETE)d=w2(i,e,n.path,s,u);else throw Ei("Unknown operation type: "+n.type);const p=u.getChanges();return v2(e,d,p),{viewCache:d,changes:p}}function v2(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=kc(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(x0(kc(e)))}}function L0(i,e,n,s,l,u){const d=e.eventCache;if(Pl(s,n)!=null)return e;{let f,p;if(me(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Pr(e),w=g instanceof re?g:re.EMPTY_NODE,v=fd(s,w);f=i.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const g=Rl(s,Pr(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=fe(n);if(g===".priority"){M(tr(n)===1,"Can't have a priority with additional path components");const w=d.getNode();p=e.serverCache.getNode();const v=Lm(s,n,w,p);v!=null?f=i.filter.updatePriority(w,v):f=d.getNode()}else{const w=De(n);let v;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const _=Lm(s,n,d.getNode(),p);_!=null?v=d.getNode().getImmediateChild(g).updateChild(w,_):v=d.getNode().getImmediateChild(g)}else v=pd(s,g,e.serverCache);v!=null?f=i.filter.updateChild(d.getNode(),g,v,w,l,u):f=d.getNode()}}return ks(e,f,d.isFullyInitialized()||me(n),i.filter.filtersNodes())}}function Ol(i,e,n,s,l,u,d,f){const p=e.serverCache;let g;const w=d?i.filter:i.filter.getIndexedFilter();if(me(n))g=w.updateFullNode(p.getNode(),s,null);else if(w.filtersNodes()&&!p.isFiltered()){const N=p.getNode().updateChild(n,s);g=w.updateFullNode(p.getNode(),N,null)}else{const N=fe(n);if(!p.isCompleteForPath(n)&&tr(n)>1)return e;const R=De(n),V=p.getNode().getImmediateChild(N).updateChild(R,s);N===".priority"?g=w.updatePriority(p.getNode(),V):g=w.updateChild(p.getNode(),N,V,R,M0,null)}const v=b0(e,g,p.isFullyInitialized()||me(n),w.filtersNodes()),_=new md(l,v,u);return L0(i,v,n,l,_,f)}function Nc(i,e,n,s,l,u,d){const f=e.eventCache;let p,g;const w=new md(l,e,u);if(me(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),p=ks(e,g,!0,i.filter.filtersNodes());else{const v=fe(n);if(v===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),p=ks(e,g,f.isFullyInitialized(),f.isFiltered());else{const _=De(n),N=f.getNode().getImmediateChild(v);let R;if(me(_))R=s;else{const j=w.getCompleteChild(v);j!=null?rd(_)===".priority"&&j.getChild(w0(_)).isEmpty()?R=j:R=j.updateChild(_,s):R=re.EMPTY_NODE}if(N.equals(R))p=e;else{const j=i.filter.updateChild(f.getNode(),v,R,_,w,d);p=ks(e,j,f.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function jm(i,e){return i.eventCache.isCompleteForChild(e)}function _2(i,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const w=Be(n,p);jm(e,fe(w))&&(f=Nc(i,f,w,g,l,u,d))}),s.foreach((p,g)=>{const w=Be(n,p);jm(e,fe(w))||(f=Nc(i,f,w,g,l,u,d))}),f}function Fm(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function bc(i,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;me(n)?g=s:g=new Ae(null).setTree(n,s);const w=e.serverCache.getNode();return g.children.inorderTraversal((v,_)=>{if(w.hasChild(v)){const N=e.serverCache.getNode().getImmediateChild(v),R=Fm(i,N,_);p=Ol(i,p,new Ne(v),R,l,u,d,f)}}),g.children.inorderTraversal((v,_)=>{const N=!e.serverCache.isCompleteForChild(v)&&_.value===null;if(!w.hasChild(v)&&!N){const R=e.serverCache.getNode().getImmediateChild(v),j=Fm(i,R,_);p=Ol(i,p,new Ne(v),j,l,u,d,f)}}),p}function y2(i,e,n,s,l,u,d){if(Pl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(me(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Ol(i,e,n,p.getNode().getChild(n),l,u,f,d);if(me(n)){let g=new Ae(null);return p.getNode().forEachChild(di,(w,v)=>{g=g.set(new Ne(w),v)}),bc(i,e,n,g,l,u,f,d)}else return e}else{let g=new Ae(null);return s.foreach((w,v)=>{const _=Be(n,w);p.isCompleteForPath(_)&&(g=g.set(w,p.getNode().getChild(_)))}),bc(i,e,n,g,l,u,f,d)}}function w2(i,e,n,s,l){const u=e.serverCache,d=b0(e,u.getNode(),u.isFullyInitialized()||me(n),u.isFiltered());return L0(i,d,n,s,M0,l)}function E2(i,e,n,s,l,u){let d;if(Pl(s,n)!=null)return e;{const f=new md(s,e,l),p=e.eventCache.getNode();let g;if(me(n)||fe(n)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=Rl(s,Pr(e));else{const v=e.serverCache.getNode();M(v instanceof re,"serverChildren would be complete if leaf node"),w=fd(s,v)}w=w,g=i.filter.updateFullNode(p,w,u)}else{const w=fe(n);let v=pd(s,w,e.serverCache);v==null&&e.serverCache.isCompleteForChild(w)&&(v=p.getImmediateChild(w)),v!=null?g=i.filter.updateChild(p,w,v,De(n),f,u):e.eventCache.getNode().hasChild(w)?g=i.filter.updateChild(p,w,re.EMPTY_NODE,De(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Rl(s,Pr(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||Pl(s,Ce())!=null,ks(e,g,d,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new ld(s.getIndex()),u=UC(s);this.processor_=p2(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(re.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(re.EMPTY_NODE,f.getNode(),null),w=new Rr(p,d.isFullyInitialized(),l.filtersNodes()),v=new Rr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=$l(v,w),this.eventGenerator_=new qC(this.query_)}get query(){return this.query_}}function C2(i){return i.viewCache_.serverCache.getNode()}function k2(i,e){const n=Pr(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!me(e)&&!n.getImmediateChild(fe(e)).isEmpty())?n.getChild(e):null}function zm(i){return i.eventRegistrations_.length===0}function I2(i,e){i.eventRegistrations_.push(e)}function Um(i,e,n){const s=[];if(n){M(e==null,"A cancel should cancel all event registrations.");const l=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=l}else i.eventRegistrations_=[];return s}function Vm(i,e,n,s){e.type===Yt.MERGE&&e.source.queryId!==null&&(M(Pr(i.viewCache_),"We should always have a full cache before handling merges"),M(kc(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=g2(i.processor_,l,e,n,s);return m2(i.processor_,u.viewCache),M(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,j0(i,u.changes,u.viewCache.eventCache.getNode(),null)}function T2(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($e,(u,d)=>{s.push(vi(u,d))}),n.isFullyInitialized()&&s.push(x0(n.getNode())),j0(i,s,n.getNode(),e)}function j0(i,e,n,s){const l=s?[s]:i.eventRegistrations_;return KC(i.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al;class x2{constructor(){this.views=new Map}}function N2(i){M(!Al,"__referenceConstructor has already been defined"),Al=i}function b2(){return M(Al,"Reference.ts has not been loaded"),Al}function R2(i){return i.views.size===0}function gd(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return M(u!=null,"SyncTree gave us an op for an invalid query."),Vm(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(Vm(d,e,n,s));return u}}function P2(i,e,n,s,l){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let f=Rl(n,l?s:null),p=!1;f?p=!0:s instanceof re?(f=fd(n,s),p=!1):(f=re.EMPTY_NODE,p=!1);const g=$l(new Rr(f,p,!1),new Rr(s,l,!1));return new S2(e,g)}return d}function O2(i,e,n,s,l,u){const d=P2(i,e,s,l,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),I2(d,n),T2(d,n)}function A2(i,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=nr(i);if(l==="default")for(const[p,g]of i.views.entries())d=d.concat(Um(g,n,s)),zm(g)&&(i.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=i.views.get(l);p&&(d=d.concat(Um(p,n,s)),zm(p)&&(i.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!nr(i)&&u.push(new(b2())(e._repo,e._path)),{removed:u,events:d}}function F0(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hi(i,e){let n=null;for(const s of i.views.values())n=n||k2(s,e);return n}function z0(i,e){if(e._queryParams.loadsAllData())return Gl(i);{const s=e._queryIdentifier;return i.views.get(s)}}function U0(i,e){return z0(i,e)!=null}function nr(i){return Gl(i)!=null}function Gl(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl;function D2(i){M(!Dl,"__referenceConstructor has already been defined"),Dl=i}function M2(){return M(Dl,"Reference.ts has not been loaded"),Dl}let L2=1;class Hm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=c2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function V0(i,e,n,s,l){return JC(i.pendingWriteTree_,e,n,s,l),l?xi(i,new br(ud(),e,n)):[]}function j2(i,e,n,s){ZC(i.pendingWriteTree_,e,n,s);const l=Ae.fromObject(n);return xi(i,new _i(ud(),e,l))}function Yn(i,e,n=!1){const s=e2(i.pendingWriteTree_,e);if(t2(i.pendingWriteTree_,e)){let u=new Ae(null);return s.snap!=null?u=u.set(Ce(),!0):at(s.children,d=>{u=u.set(new Ne(d),!0)}),xi(i,new bl(s.path,u,n))}else return[]}function ql(i,e,n){return xi(i,new br(cd(),e,n))}function F2(i,e,n){const s=Ae.fromObject(n);return xi(i,new _i(cd(),e,s))}function z2(i,e){return xi(i,new Ms(cd(),e))}function U2(i,e,n){const s=_d(i,n);if(s){const l=yd(s),u=l.path,d=l.queryId,f=Ct(u,e),p=new Ms(dd(d),f);return wd(i,u,p)}else return[]}function Rc(i,e,n,s,l=!1){const u=e._path,d=i.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||U0(d,e))){const p=A2(d,e,n,s);R2(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const w=g.findIndex(_=>_._queryParams.loadsAllData())!==-1,v=i.syncPointTree_.findOnPath(u,(_,N)=>nr(N));if(w&&!v){const _=i.syncPointTree_.subtree(u);if(!_.isEmpty()){const N=W2(_);for(let R=0;R<N.length;++R){const j=N[R],V=j.query,ke=B0(i,j);i.listenProvider_.startListening(Ts(V),Ml(i,V),ke.hashFn,ke.onComplete)}}}!v&&g.length>0&&!s&&(w?i.listenProvider_.stopListening(Ts(e),null):g.forEach(_=>{const N=i.queryToTagMap.get(Kl(_));i.listenProvider_.stopListening(Ts(_),N)}))}B2(i,g)}return f}function V2(i,e,n,s){const l=_d(i,s);if(l!=null){const u=yd(l),d=u.path,f=u.queryId,p=Ct(d,e),g=new br(dd(f),p,n);return wd(i,d,g)}else return[]}function H2(i,e,n,s){const l=_d(i,s);if(l){const u=yd(l),d=u.path,f=u.queryId,p=Ct(d,e),g=Ae.fromObject(n),w=new _i(dd(f),p,g);return wd(i,d,w)}else return[]}function Wm(i,e,n,s=!1){const l=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(l,(_,N)=>{const R=Ct(_,l);u=u||hi(N,R),d=d||nr(N)});let f=i.syncPointTree_.get(l);f?(d=d||nr(f),u=u||hi(f,Ce())):(f=new x2,i.syncPointTree_=i.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=re.EMPTY_NODE,i.syncPointTree_.subtree(l).foreachChild((N,R)=>{const j=hi(R,Ce());j&&(u=u.updateImmediateChild(N,j))}));const g=U0(f,e);if(!g&&!e._queryParams.loadsAllData()){const _=Kl(e);M(!i.queryToTagMap.has(_),"View does not exist, but we have a tag");const N=$2();i.queryToTagMap.set(_,N),i.tagToQueryMap.set(N,_)}const w=hd(i.pendingWriteTree_,l);let v=O2(f,e,n,w,u,p);if(!g&&!d&&!s){const _=z0(f,e);v=v.concat(G2(i,e,_))}return v}function vd(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const p=Ct(d,e),g=hi(f,p);if(g)return g});return O0(l,e,u,n,!0)}function xi(i,e){return H0(e,i.syncPointTree_,null,hd(i.pendingWriteTree_,Ce()))}function H0(i,e,n,s){if(me(i.path))return W0(i,e,n,s);{const l=e.get(Ce());n==null&&l!=null&&(n=hi(l,Ce()));let u=[];const d=fe(i.path),f=i.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,w=A0(s,d);u=u.concat(H0(f,p,g,w))}return l&&(u=u.concat(gd(l,i,s,n))),u}}function W0(i,e,n,s){const l=e.get(Ce());n==null&&l!=null&&(n=hi(l,Ce()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=A0(s,d),w=i.operationForChild(d);w&&(u=u.concat(W0(w,f,p,g)))}),l&&(u=u.concat(gd(l,i,s,n))),u}function B0(i,e){const n=e.query,s=Ml(i,n);return{hashFn:()=>(C2(e)||re.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?U2(i,n._path,s):z2(i,n._path);{const u=FS(l,n);return Rc(i,n,null,u)}}}}function Ml(i,e){const n=Kl(e);return i.queryToTagMap.get(n)}function Kl(i){return i._path.toString()+"$"+i._queryIdentifier}function _d(i,e){return i.tagToQueryMap.get(e)}function yd(i){const e=i.indexOf("$");return M(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new Ne(i.substr(0,e))}}function wd(i,e,n){const s=i.syncPointTree_.get(e);M(s,"Missing sync point for query tag that we're tracking");const l=hd(i.pendingWriteTree_,e);return gd(s,n,l,null)}function W2(i){return i.fold((e,n,s)=>{if(n&&nr(n))return[Gl(n)];{let l=[];return n&&(l=F0(n)),at(s,(u,d)=>{l=l.concat(d)}),l}})}function Ts(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(M2())(i._repo,i._path):i}function B2(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Kl(s),u=i.queryToTagMap.get(l);i.queryToTagMap.delete(l),i.tagToQueryMap.delete(u)}}}function $2(){return L2++}function G2(i,e,n){const s=e._path,l=Ml(i,e),u=B0(i,n),d=i.listenProvider_.startListening(Ts(e),l,u.hashFn,u.onComplete),f=i.syncPointTree_.subtree(s);if(l)M(!nr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,w,v)=>{if(!me(g)&&w&&nr(w))return[Gl(w).query];{let _=[];return w&&(_=_.concat(F0(w).map(N=>N.query))),at(v,(N,R)=>{_=_.concat(R)}),_}});for(let g=0;g<p.length;++g){const w=p[g];i.listenProvider_.stopListening(Ts(w),Ml(i,w))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ed(n)}node(){return this.node_}}class Sd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new Sd(this.syncTree_,n)}node(){return vd(this.syncTree_,this.path_)}}const q2=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},Bm=function(i,e,n){if(!i||typeof i!="object")return i;if(M(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return K2(i[".sv"],e,n);if(typeof i[".sv"]=="object")return Q2(i[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},K2=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+i)}},Q2=function(i,e,n){i.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&M(!1,"Unexpected increment value: "+s);const l=e.node();if(M(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},$0=function(i,e,n,s){return Cd(e,new Sd(n,i),s)},G0=function(i,e,n){return Cd(i,new Ed(e),n)};function Cd(i,e,n){const s=i.getPriority().val(),l=Bm(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=Bm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new et(f,nt(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new et(l))),d.forEachChild($e,(f,p)=>{const g=Cd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Id(i,e){let n=e instanceof Ne?e:new Ne(e),s=i,l=fe(n);for(;l!==null;){const u=fi(s.node.children,l)||{children:{},childCount:0};s=new kd(l,s,u),n=De(n),l=fe(n)}return s}function Ni(i){return i.node.value}function q0(i,e){i.node.value=e,Pc(i)}function K0(i){return i.node.childCount>0}function Y2(i){return Ni(i)===void 0&&!K0(i)}function Ql(i,e){at(i.node.children,(n,s)=>{e(new kd(n,i,s))})}function Q0(i,e,n,s){n&&!s&&e(i),Ql(i,l=>{Q0(l,e,!0,s)})}function X2(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function $s(i){return new Ne(i.parent===null?i.name:$s(i.parent)+"/"+i.name)}function Pc(i){i.parent!==null&&J2(i.parent,i.name,i)}function J2(i,e,n){const s=Y2(n),l=un(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,Pc(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,Pc(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2=/[\[\].#$\/\u0000-\u001F\u007F]/,ek=/[\[\].#$\u0000-\u001F\u007F]/,uc=10*1024*1024,Td=function(i){return typeof i=="string"&&i.length!==0&&!Z2.test(i)},Y0=function(i){return typeof i=="string"&&i.length!==0&&!ek.test(i)},tk=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Y0(i)},nk=function(i){return i===null||typeof i=="string"||typeof i=="number"&&!Jc(i)||i&&typeof i=="object"&&un(i,".sv")},X0=function(i,e,n,s){s&&e===void 0||Yl(zl(i,"value"),e,n)},Yl=function(i,e,n){const s=n instanceof Ne?new _C(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+wr(s));if(typeof e=="function")throw new Error(i+"contains a function "+wr(s)+" with contents = "+e.toString());if(Jc(e))throw new Error(i+"contains "+e.toString()+" "+wr(s));if(typeof e=="string"&&e.length>uc/3&&Ul(e)>uc)throw new Error(i+"contains a string greater than "+uc+" utf8 bytes "+wr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(at(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!Td(d)))throw new Error(i+" contains an invalid key ("+d+") "+wr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yC(s,d),Yl(i,f,s),wC(s)}),l&&u)throw new Error(i+' contains ".value" child '+wr(s)+" in addition to actual children.")}},rk=function(i,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=Ps(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!Td(u[d]))throw new Error(i+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(vC);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Ft(l,s))throw new Error(i+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},ik=function(i,e,n,s){const l=zl(i,"values");if(typeof e!="object"||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];at(e,(d,f)=>{const p=new Ne(d);if(Yl(l,f,Be(n,p)),rd(p)===".priority"&&!nk(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),rk(l,u)},J0=function(i,e,n,s){if(!Y0(n))throw new Error(zl(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sk=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),J0(i,e,n)},xd=function(i,e){if(fe(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},ok=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Td(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!tk(n))throw new Error(zl(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xl(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!id(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function Z0(i,e,n){Xl(i,n),ev(i,s=>id(s,e))}function Zt(i,e,n){Xl(i,n),ev(i,s=>Ft(s,e)||Ft(e,s))}function ev(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(ak(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function ak(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();Ss&&lt("event: "+n.toString()),Ti(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="repo_interrupt",ck=25;class dk{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nl(),this.transactionQueueTree_=new kd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hk(i,e,n){if(i.stats_=td(i.repoInfo_),i.forceRestClient_||HS())i.server_=new xl(i.repoInfo_,(s,l,u,d)=>{$m(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Gm(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Cn(i.repoInfo_,e,(s,l,u,d)=>{$m(i,s,l,u,d)},s=>{Gm(i,s)},s=>{fk(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=qS(i.repoInfo_,()=>new GC(i.stats_,i.server_)),i.infoData_=new VC,i.infoSyncTree_=new Hm({startListening:(s,l,u,d)=>{let f=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(f=ql(i.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Nd(i,"connected",!1),i.serverSyncTree_=new Hm({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);Zt(i.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function tv(i){const n=i.infoData_.getNode(new Ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Jl(i){return q2({timestamp:tv(i)})}function $m(i,e,n,s,l){i.dataUpdateCount++;const u=new Ne(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=gl(n,g=>nt(g));d=H2(i.serverSyncTree_,u,p,l)}else{const p=nt(n);d=V2(i.serverSyncTree_,u,p,l)}else if(s){const p=gl(n,g=>nt(g));d=F2(i.serverSyncTree_,u,p)}else{const p=nt(n);d=ql(i.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=wi(i,u)),Zt(i.eventQueue_,f,d)}function Gm(i,e){Nd(i,"connected",e),e===!1&&gk(i)}function fk(i,e){at(e,(n,s)=>{Nd(i,n,s)})}function Nd(i,e,n){const s=new Ne("/.info/"+e),l=nt(n);i.infoData_.updateSnapshot(s,l);const u=ql(i.infoSyncTree_,s,l);Zt(i.eventQueue_,s,u)}function bd(i){return i.nextWriteId_++}function pk(i,e,n,s,l){Zl(i,"set",{path:e.toString(),value:n,priority:s});const u=Jl(i),d=nt(n,s),f=vd(i.serverSyncTree_,e),p=G0(d,f,u),g=bd(i),w=V0(i.serverSyncTree_,e,p,g,!0);Xl(i.eventQueue_,w),i.server_.put(e.toString(),d.val(!0),(_,N)=>{const R=_==="ok";R||mt("set at "+e+" failed: "+_);const j=Yn(i.serverSyncTree_,g,!R);Zt(i.eventQueue_,e,j),Oc(i,l,_,N)});const v=Pd(i,e);wi(i,v),Zt(i.eventQueue_,v,[])}function mk(i,e,n,s){Zl(i,"update",{path:e.toString(),value:n});let l=!0;const u=Jl(i),d={};if(at(n,(f,p)=>{l=!1,d[f]=$0(Be(e,f),nt(p),i.serverSyncTree_,u)}),l)lt("update() called with empty data.  Don't do anything."),Oc(i,s,"ok",void 0);else{const f=bd(i),p=j2(i.serverSyncTree_,e,d,f);Xl(i.eventQueue_,p),i.server_.merge(e.toString(),n,(g,w)=>{const v=g==="ok";v||mt("update at "+e+" failed: "+g);const _=Yn(i.serverSyncTree_,f,!v),N=_.length>0?wi(i,e):e;Zt(i.eventQueue_,N,_),Oc(i,s,g,w)}),at(n,g=>{const w=Pd(i,Be(e,g));wi(i,w)}),Zt(i.eventQueue_,e,[])}}function gk(i){Zl(i,"onDisconnectEvents");const e=Jl(i),n=Nl();Cc(i.onDisconnect_,Ce(),(l,u)=>{const d=$0(l,u,i.serverSyncTree_,e);N0(n,l,d)});let s=[];Cc(n,Ce(),(l,u)=>{s=s.concat(ql(i.serverSyncTree_,l,u));const d=Pd(i,l);wi(i,d)}),i.onDisconnect_=Nl(),Zt(i.eventQueue_,Ce(),s)}function vk(i,e,n){let s;fe(e._path)===".info"?s=Wm(i.infoSyncTree_,e,n):s=Wm(i.serverSyncTree_,e,n),Z0(i.eventQueue_,e._path,s)}function _k(i,e,n){let s;fe(e._path)===".info"?s=Rc(i.infoSyncTree_,e,n):s=Rc(i.serverSyncTree_,e,n),Z0(i.eventQueue_,e._path,s)}function yk(i){i.persistentConnection_&&i.persistentConnection_.interrupt(uk)}function Zl(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),lt(n,...e)}function Oc(i,e,n,s){e&&Ti(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function nv(i,e,n){return vd(i.serverSyncTree_,e,n)||re.EMPTY_NODE}function Rd(i,e=i.transactionQueueTree_){if(e||ea(i,e),Ni(e)){const n=iv(i,e);M(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&wk(i,$s(e),n)}else K0(e)&&Ql(e,n=>{Rd(i,n)})}function wk(i,e,n){const s=n.map(g=>g.currentWriteId),l=nv(i,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const w=n[g];M(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const v=Ct(e,w.path);u=u.updateChild(v,w.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;i.server_.put(p.toString(),f,g=>{Zl(i,"transaction put response",{path:p.toString(),status:g});let w=[];if(g==="ok"){const v=[];for(let _=0;_<n.length;_++)n[_].status=2,w=w.concat(Yn(i.serverSyncTree_,n[_].currentWriteId)),n[_].onComplete&&v.push(()=>n[_].onComplete(null,!0,n[_].currentOutputSnapshotResolved)),n[_].unwatcher();ea(i,Id(i.transactionQueueTree_,e)),Rd(i,i.transactionQueueTree_),Zt(i.eventQueue_,e,w);for(let _=0;_<v.length;_++)Ti(v[_])}else{if(g==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{mt("transaction at "+p.toString()+" failed: "+g);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=g}wi(i,e)}},d)}function wi(i,e){const n=rv(i,e),s=$s(n),l=iv(i,n);return Ek(i,l,s),s}function Ek(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=Ct(n,p.path);let w=!1,v;if(M(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)w=!0,v=p.abortReason,l=l.concat(Yn(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=ck)w=!0,v="maxretry",l=l.concat(Yn(i.serverSyncTree_,p.currentWriteId,!0));else{const _=nv(i,p.path,d);p.currentInputSnapshot=_;const N=e[f].update(_.val());if(N!==void 0){Yl("transaction failed: Data returned ",N,p.path);let R=nt(N);typeof N=="object"&&N!=null&&un(N,".priority")||(R=R.updatePriority(_.getPriority()));const V=p.currentWriteId,ke=Jl(i),Z=G0(R,_,ke);p.currentOutputSnapshotRaw=R,p.currentOutputSnapshotResolved=Z,p.currentWriteId=bd(i),d.splice(d.indexOf(V),1),l=l.concat(V0(i.serverSyncTree_,p.path,Z,p.currentWriteId,p.applyLocally)),l=l.concat(Yn(i.serverSyncTree_,V,!0))}else w=!0,v="nodata",l=l.concat(Yn(i.serverSyncTree_,p.currentWriteId,!0))}Zt(i.eventQueue_,n,l),l=[],w&&(e[f].status=2,function(_){setTimeout(_,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}ea(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)Ti(s[f]);Rd(i,i.transactionQueueTree_)}function rv(i,e){let n,s=i.transactionQueueTree_;for(n=fe(e);n!==null&&Ni(s)===void 0;)s=Id(s,n),e=De(e),n=fe(e);return s}function iv(i,e){const n=[];return sv(i,e,n),n.sort((s,l)=>s.order-l.order),n}function sv(i,e,n){const s=Ni(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Ql(e,l=>{sv(i,l,n)})}function ea(i,e){const n=Ni(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,q0(e,n.length>0?n:void 0)}Ql(e,s=>{ea(i,s)})}function Pd(i,e){const n=$s(rv(i,e)),s=Id(i.transactionQueueTree_,e);return X2(s,l=>{cc(i,l)}),cc(i,s),Q0(s,l=>{cc(i,l)}),n}function cc(i,e){const n=Ni(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(M(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(M(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Yn(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?q0(e,void 0):n.length=u+1,Zt(i.eventQueue_,$s(e),l);for(let d=0;d<s.length;d++)Ti(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function Ck(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):mt(`Invalid query segment '${n}' in query '${i}'`)}return e}const qm=function(i,e){const n=kk(i),s=n.namespace;n.domain==="firebase.com"&&Tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||AS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new d0(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new Ne(n.pathString)}},kk=function(i){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let w=i.indexOf("/");w===-1&&(w=i.length);let v=i.indexOf("?");v===-1&&(v=i.length),e=i.substring(0,Math.min(w,v)),w<v&&(l=Sk(i.substring(w,v)));const _=Ck(i.substring(Math.min(i.length,v)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const N=e.slice(0,g);if(N.toLowerCase()==="localhost")n="localhost";else if(N.split(".").length<=2)n=N;else{const R=e.indexOf(".");s=e.substring(0,R).toLowerCase(),n=e.substring(R+1),u=s}"ns"in _&&(u=_.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ik=function(){let i=0;const e=[];return function(n){const s=n===i;i=n;let l;const u=new Array(8);for(l=7;l>=0;l--)u[l]=Km.charAt(n%64),n=Math.floor(n/64);M(n===0,"Cannot push at time == 0");let d=u.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)d+=Km.charAt(e[l]);return M(d.length===20,"nextPushId: Length should be 20."),d}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+rt(this.snapshot.exportVal())}}class xk{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return M(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Od{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return me(this._path)?null:rd(this._path)}get ref(){return new sr(this._repo,this._path)}get _queryIdentifier(){const e=Om(this._queryParams),n=Zc(e);return n==="{}"?"default":n}get _queryObject(){return Om(this._queryParams)}isEqual(e){if(e=Rt(e),!(e instanceof Od))return!1;const n=this._repo===e._repo,s=id(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+gC(this._path)}}class sr extends Od{constructor(e,n){super(e,n,new ad,!1)}get parent(){const e=w0(this._path);return e===null?null:new sr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ll{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ne(e),s=Ls(this.ref,e);return new Ll(this._node.getChild(n),s,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Ll(l,Ls(this.ref,s),$e)))}hasChild(e){const n=new Ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function cI(i,e){return i=Rt(i),i._checkNotDeleted("ref"),e!==void 0?Ls(i._root,e):i._root}function Ls(i,e){return i=Rt(i),fe(i._path)===null?sk("child","path",e):J0("child","path",e),new sr(i._repo,Be(i._path,e))}function dI(i,e){i=Rt(i),xd("push",i._path),X0("push",e,i._path,!0);const n=tv(i._repo),s=Ik(n),l=Ls(i,s),u=Ls(i,s);let d;return e!=null?d=ov(u,e).then(()=>u):d=Promise.resolve(u),l.then=d.then.bind(d),l.catch=d.then.bind(d,void 0),l}function hI(i){return xd("remove",i._path),ov(i,null)}function ov(i,e){i=Rt(i),xd("set",i._path),X0("set",e,i._path,!1);const n=new js;return pk(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}function fI(i,e){ik("update",e,i._path);const n=new js;return mk(i._repo,i._path,e,n.wrapCallback(()=>{})),n.promise}class Ad{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Tk("value",this,new Ll(e.snapshotNode,new sr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new xk(this,e,n):null}matches(e){return e instanceof Ad?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function bk(i,e,n,s,l){const u=new Nk(n,void 0),d=new Ad(u);return vk(i._repo,i,d),()=>_k(i._repo,i,d)}function pI(i,e,n,s){return bk(i,"value",e)}N2(sr);D2(sr);/**
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
 */const Rk="FIREBASE_DATABASE_EMULATOR_HOST",Ac={};let Pk=!1;function Ok(i,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),d=Si(u);i.repoInfo_=new d0(e,d,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(i.authTokenProvider_=s)}function Ak(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||Tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=qm(u,l),f=d.repoInfo,p;typeof process<"u"&&pm&&(p=pm[Rk]),p?(u=`http://${p}?ns=${f.namespace}`,d=qm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new BS(i.name,i.options,e);ok("Invalid Firebase Database URL",d),me(d.path)||Tn("Database URL must point to the root of a Firebase Database (not including a child path).");const w=Mk(f,i,g,new WS(i,n));return new Lk(w,i)}function Dk(i,e){const n=Ac[e];(!n||n[i.key]!==i)&&Tn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),yk(i),delete n[i.key]}function Mk(i,e,n,s){let l=Ac[e.name];l||(l={},Ac[e.name]=l);let u=l[i.toURLString()];return u&&Tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new dk(i,Pk,n,s),l[i.toURLString()]=u,u}class Lk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sr(this._repo,Ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Dk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Tn("Cannot call "+e+" on a deleted database.")}}function jk(i=_g(),e){const n=Uc(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=e1("database");s&&Fk(n,...s)}return n}function Fk(i,e,n,s={}){i=Rt(i),i._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=i._repoInternal;if(i._instanceStarted){if(l===i._repoInternal.repoInfo_.host&&Ir(s,u.repoInfo_.emulatorOptions))return;Tn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&Tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new dl(dl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:t1(s.mockUserToken,i.app.options.projectId);d=new dl(f)}Si(e)&&(cg(e),dg("Database",!0)),Ok(u,l,s,d)}/**
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
 */function zk(i){xS(ki),pi(new Tr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return Ak(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Zn(mm,gm,i),Zn(mm,gm,"esm2017")}Cn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Cn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};zk();const Uk={apiKey:"AIzaSyAMDp5WhCZy0tDz-_VcN3bz8HUW2Yp0lw0",authDomain:"personal-portfolio-37a0a.firebaseapp.com",databaseURL:"https://personal-portfolio-37a0a-default-rtdb.firebaseio.com",projectId:"personal-portfolio-37a0a",storageBucket:"personal-portfolio-37a0a.appspot.com",messagingSenderId:"695560029777",appId:"1:695560029777:web:2f666fd6fe7aa39b0c1a70",measurementId:"G-64P0PSRQN5"},lv=vg(Uk),Vk=IS(lv),mI=jk(lv),gI=new yn,av=ne.createContext();function Hk({children:i}){const[e,n]=ne.useState(null),[s,l]=ne.useState(!0);ne.useEffect(()=>Vk.onAuthStateChanged(f=>{n(f),l(!1)}),[]);const u={currentUser:e,isAdmin:(e==null?void 0:e.email)==="e2340065@bit.uom.lk"};return S.jsx(av.Provider,{value:u,children:!s&&i})}function vI(){return ne.useContext(av)}const Wk="/portfolio_web/assets/bg3-ZfyVyyz0.jpg",Qm="/portfolio_web/assets/my2-u5NpehRh.png",Bk="/portfolio_web/assets/ChatGPT%20Image%20Aug%209_%202025_%2001_07_11%20PM-DwprKBJo.png",$k="/portfolio_web/assets/ChatGPT%20Image%20Aug%209_%202025_%2001_24_56%20PM-CcvildA-.png",Ym="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0BAMAAAA5+MK5AAAAAXNSR0IArs4c6QAAADBQTFRFR3BM////8vn24fDrw9ztwOa+otqfnr/dgc19T8zyaMNkZJjITbhIArbtLnS0AValA0TB9AAAAAF0Uk5TAEDm2GYAAA2lSURBVHja7Ni/ahRRGIZxb+GcmcJthBURRRT8V0RJEbGxWEFsLOwEK+/AQrCy3XQW01inEewtBAnhNCY2W3yN2KUNpAjkhA8Svl0mF5Cc93mqbX/sGd6Zc4WIiIiIiIguSUko6NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06BeL/uj5A1H6ZLDFVJM+M7O5JL0bzGxPkj4xM1tI0td16YMs/YZ5fxXpa+btKtIH8zYE6Z15kq80k3jU1ejr5m0K0vNg3lSQ3sd5V6LHtG3K0WPaBOk5pk2LHtMmSJ+ZN5ejx7TJ0eOrTY0e0yZHj2mTo8e0CdJvx6MuRY9pE6R3Q5x3KXp8tanRY9rk6DFtavS4kExi9Ji2PTl6TJscPaZNjh5fbWr0uICXo8e0CdL7mDYlekzbriJ9ZnHe88M0Kl9vjz6etu7j/o+R/M2Xd83RxxfwT2s93kir3Spl51Wb9LsxbflnrfVfWil/KKV8a4w+nra+1loP00rdVinld2P08bRdc/pxWulqKaVsN0mfmPcneZ/Oob91+k6b9DjvXfWO0nJ5q/F/fXHff96p3kFa7mbxfjVJ72PaXlbve1ruSfE+N0nPTp+fTVvsekxbu7u+dnbe++odTVPKj9+/Pp224m1P26R3L74+S9696v1PKZ1wa/4sDQNhHP4MdzEqCEIKKohLBCdFENxFJB3ERaTFwUUUHARFBAfpl1ARRDqJ4ODgVAnlvoR/NsGODoLRl+b6I/RtoYPL7yFL05b24Zo+l0sm6y5dzadywhXr6UupZAR7nAm7edBOkTa3SakOgsxX3db8BC6oo+rE6kibFd8UaWswqyNtd/6/ramkjVG9mDaMeg1pY1VH2ow/1htImyFXX8yENyOs57/yaaSNWf0pT5swUXepzHJ2nLBKrj7U8mkTwmqspI1Qvf9ZW4Nc3SJtAGmjHvWWTxtA2qjVR5QFmtAJz4ZaHWkDPm2X3OpIG0DaeNWRtm8DfNrSiFpdT9uwE64NufpK77RRq+tpszUnxHzq/GnT1fVVilfl935Jrm7baVvS0sasjrRFWtqI1ZG2dzVt1Op62haQNmJ1q6WtjrQRq09lwpeaNmJ1pO1FSdsFpTp/2nT1AdJGrT6mpG0UaWNWX1FuI9lwwgm5etBOW9ydtmZMrj7SM20NQ64+pqRtWJ/KWVsqMamPKwvwo1ra7PLh4+fjw/5sfqAc/OHXMQ+KyH4QJpVyUsFjO1eunlWTWewJ5BXtLVnr7J/725GYwD+Dzb8eW2zMRDkpJwOOOtKGUVfSFhy2MuHnYw8XpV+xyuPp7sVM8Up1sH3rhJtKhM8DzZstg7nFc+c5kEahA36UNuS9g6kPdafNhModkkcQu++vjgUfKEA9OHee64I65E/xvvQf1MET0oZv23Xb1HyWgftIVwdLhenRb3t39Nq2EccB/G842VsGgcLJaxsoFJR0a6Fhw60hD4EMd2SM0JdmbJSxF2+BPARiWlgRYf/EOlpM8UubQB4KNutICab/RNeCHwwSYwE/GKTpTnf5+aLMUts4keH7Jaa2Yhd98rs7XU5SO0QvREt+ZOeabubW6VSdXfLDLmdmPm6+emxO+dqGbDuN/szoPUS3Voxd/u54+kv+7lWfz06nLKzpGlE+W3aSRad00+gHxm9CRJ95RaFzmQne6tirnj1tU/ZmJN0cN29rOi0DUPaOp/9FVT9reiE0UxtJp6MlafepBSTKnuTtv3vV58dEn449vede/MQ5Qm95MvJ7nkyNjhYaQ2Ncx3W39EhHB9O7D9y7ejs/rPpH7pbb2HKb8njoNlzXfRDT913KmKpO56DX5uy5BV9New16aU7kquzlczKcTlUT/YJ6/rVtlz6PW0OHa/oLblu2VVpRZdRVt0qzJXu2JNvL6lypNFeaZZL+yKaw8dHrNM8vtMLwH5OuMyXpieOkolO3d9jQz+Gepv85fMLrnq66MVhWR8w75sdJ32axfTOsZaBTVye6fN5ZZXGuqYHOpLOVYfrLbPTxVp2chY1ydroekfaTa/tWPM3j6hu/EzJT1f84FbpVNy43sVl2+oym627fcY58r0pVp613qOp5aPB9zlTS6OeXo+hiEF0+3zOmuFJJdELmoepED7Yz0XXhHBq0hEE/v390Hewh0Wkjz0Vfp4Nb8EsmuqLcO9zJhqDLIlN7p3WBPerrxj20qVU/nQZ/KYyzyzPRraasiu7ed4VB7jBZ6H6ql0bVrZ8UKwdVJ6dIb42n0nXBuN6ha4pudnU9u+tEdJqdNdXQl171lz8chrHT+PUl2L2RQtc72qnqmwpmhEHNYV4kbyDkgm7kMU+rupnxNHhq8Tq9cjpdWu6rfbyn6DPJtX1Jdwy6mu6lVN3MWKteaJN94KTSmezsahyr/j/9doKuejpV/czp7LpP9i4fTafdnhdoPky/k6RXFZ3yK6eqn1mDpyySffQcnvbUYfG9ghmrTums5qnqzLpK9n4KXR/Z1fE3K53yKBd9nezFFi24jqDTxGTvk7iJD4/wv///CN/siK841VyM8BRrQeOfpdBVyVbkWoSmf5yYiFjDx/W9ZZFvtiTmYUrVzVWasVWdYn+6EdPfptBVEdScVNL1RCRxBcP+kYnsj+ptqbM5fhqzOYp1XXX2FDp134eSTnN42mFdbT2RNUrK8zKHt7h55c2Ap9Bp2fmOoovmrV6bt5i8IHoc2QucvMzhp+l3tsupdBrBlEHRpYWKRb/FUoMnRDUvv68vDRzypdFpX2XZiD6vmrLO+eQqDdHzskrTpnOxxSx05RW1IboQGkf2FTVhJzpN7PNS9aIvz67KTGekF14pKNGtprbqm4ZVXQ261cxY9THTyRQo+5Kks9F0Wprimk4Ldb8ymYKgya5u9vUL8RCRgxGe1qe6juD58mk6nc3rmhJ9Zui0uvVj/MKhqtPyRX5G+Lpeplh/bk5pBs9VdpN06fmD6GoKI9JYnvvmNzrVaszm6Oxk2irNMuWWalGujnNCdMsPj+RpTKcMknTpXCW6HtjMrGq6mUdZ5vCUF3Ejo5wYvR6aCZyRdDqyd6om/aNm4vqJ4+n3qeoZ6bdPmE4jPEXyUui6xPuc6EpAIUyC3uFU9TOkJ68nCWqZ6Oe///47RnQaxIx2naAbi9H7Z9XgKRvDzi5PpVNMOrvQHG7uTpJOh/58VJ0VFo1lyfens8+bJJxlx9I7txj7wL5ePQk6rUuS/H3pVHeqbZK+X2UsP1WX1g0vSm/XUS+94XTlplb07A3TIazbcB/Qy8LdrSdPngxdJxpfL+M2tsSXe7j920aj8Zj+juhbml6I33sY9yFj16It9HUydEqpUqnMMh3bCItilaInnCVixW+glD5b/to23kChrfSSXtD7jfDE7pwE3USM4YNjTZJ++gEddNBBBx100EEHHfT80q9UotxkhQpnyVhXbs6yd4t1Y2Lo8VlYNhWUj2FsyOvOsubqz+JMT8Anhd7y/MDrHU+/FAZe2GVZU38jPjM5dNv+qm/bx9Pbgxv25kHmpi7phbUJGua+jHARvbIhF3M+bXn6LOWUvP6mHKEWvZ74o7Xd8rbFObw3m94OU9vVZ6K3twfrTvz/jBU3vV3OWMG72OqV809vyXNT1mbgBTUmc063hOthINu978XLfPVBfFfcxdDzxWfaoR/U5AUMZTbVk/cR++F2RA/bYXiQe3oYPPf7nBX9nSvtv/XFCbolDypLgcMsP1iT9w/Vw93F8GkkHNxcDHj02Z1Kq8yK7X6Fs+kgIvvdSnvAI/pgrR3kn/6aXQ7iPb98oOh9FkVInrJi9GB+nxUFuT5grP2aWdGj4NfY9YAzWw9z04F4lKOHE9Ffs+kw93TRViPCuUFlbaNvVD3iOpJp+ZFN0v+NHoK9s7Dg1/SPiOjnZMXL8jEV8rzTA0F34n8LQlG+GHBF54yJXiArL+h/K3p8Bnfp4Aj9sviZSTpnxQmg66qvr6+v6etQambVE/Td6M3OqKrziak6l5MxizFFfsvZxWcR8Znq6ybdEi2BMzlGlAT9rdnXJ6rqjhjhK5txseVIvt7ui2Gtshk4iaqL7QtdMU7sLrRq4uU6M0b4yaq6VQ+8UNL1RTjb4rgez2dNenxc7+vjurxaqSzp1lLoic9NStUdQRczM3HdlcpVX76wFsOew6jqX0m62O7LyVqxHeyIP/yeI+jy1ukuzzM9e/gHfBRLFaCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDfrp0BEEQBEEQBEEQZDLyH9wYMNdu2VOuAAAAAElFTkSuQmCC",Xm="/portfolio_web/assets/ChatGPT%20Image%20Aug%208_%202025_%2005_29_32%20PM-CBdGGeRS.png",Jm="/portfolio_web/assets/cv-DNwIthtI.pdf",Gk=()=>{const[i,e]=ne.useState(!1),[n,s]=ne.useState(0),[l,u]=ne.useState("home"),[d,f]=ne.useState(!0),[p,g]=ne.useState(0),[w,v]=ne.useState(0),[_,N]=ne.useState(!1),[R,j]=ne.useState(!1),V=[Bk,$k],Z=[{primaryGradient:"from-purple-600 to-blue-600",primaryHoverGradient:"from-purple-500 to-blue-500",secondaryGradient:"from-orange-600 to-red-600",secondaryHoverGradient:"from-orange-500 to-red-500",cardGradient:"from-black/70 via-purple-900/20 to-blue-900/10",cardHoverShadow:"hover:shadow-purple-500/40",cardBorder:"hover:border-purple-400/50",glowEffect:"from-purple-500/20 to-blue-500/15",robotGlow:"from-orange-500/25 via-purple-500/15 to-cyan-500/20",accentColor:"text-cyan-400",badgeGradient:"from-purple-500/30 to-purple-600/20",badgeText:"text-purple-200",badgeBorder:"border-purple-400/40"},{primaryGradient:"from-emerald-600 to-teal-600",primaryHoverGradient:"from-emerald-500 to-teal-500",secondaryGradient:"from-amber-600 to-orange-600",secondaryHoverGradient:"from-amber-500 to-orange-500",cardGradient:"from-black/70 via-emerald-900/20 to-teal-900/10",cardHoverShadow:"hover:shadow-emerald-500/40",cardBorder:"hover:border-emerald-400/50",glowEffect:"from-emerald-500/20 to-teal-500/15",robotGlow:"from-amber-500/25 via-emerald-500/15 to-teal-500/20",accentColor:"text-emerald-400",badgeGradient:"from-emerald-500/30 to-emerald-600/20",badgeText:"text-emerald-200",badgeBorder:"border-emerald-400/40"}][w];ne.useEffect(()=>{const ee=()=>{j(window.innerWidth<768)};return ee(),window.addEventListener("resize",ee),()=>window.removeEventListener("resize",ee)},[]),ne.useEffect(()=>{if(!R){const ee=setInterval(()=>{_e()},5e3);return()=>clearInterval(ee)}},[w,R]);const _e=()=>{R||(N(!0),setTimeout(()=>{v(ee=>(ee+1)%V.length),setTimeout(()=>{N(!1)},300)},300))},Ee=["Home","About","Education","Skills","Licenses & Certifications","Work Experience","Projects","Contact"];ne.useEffect(()=>{const ee=()=>{const ge=window.scrollY;f(ge<p),g(ge),s(ge);const Re=Ee.map(Me=>document.getElementById(Me.toLowerCase().replace(/ & /g,"-").replace(" ","-"))).reduce((Me,$)=>$&&$.getBoundingClientRect().top>=100?$.id:Me,l);u(Re)};return window.addEventListener("scroll",ee),()=>window.removeEventListener("scroll",ee)},[l,p]);const Fe=ee=>{const ge=document.getElementById(ee);ge?(ge.scrollIntoView({behavior:"smooth"}),e(!1),u(ee)):console.error(`Section with id "${ee}" not found.`)};return S.jsxs("div",{className:"h-auto relative min-h-auto w-full bg-black overflow-hidden transition-all duration-1000",children:[S.jsxs("div",{className:"absolute inset-0",children:[S.jsx("img",{src:Wk,alt:"background",className:"w-full h-full object-cover opacity-100"}),S.jsx("div",{className:`absolute inset-0 bg-gradient-to-t from-black via-purple-900/10 to-cyan-900/5 transition-all duration-1000 ${w===1?"via-emerald-900/10 to-teal-900/5":""}`}),S.jsx("div",{className:`absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-purple-900/15 transition-all duration-1000 ${w===1?"via-emerald-900/5 to-teal-900/15":""}`})]}),!R&&S.jsxs("div",{className:"absolute top-6 right-6 z-50 flex items-center gap-3",children:[S.jsx("div",{className:"flex gap-2",children:V.map((ee,ge)=>S.jsx("button",{onClick:()=>{ge!==w&&(v(ge),N(!0),setTimeout(()=>N(!1),600))},className:`w-3 h-3 rounded-full transition-all duration-500 border-2 ${ge===w?`bg-gradient-to-r ${Z.primaryGradient} border-white/60 shadow-lg`:"bg-white/20 border-white/30 hover:border-white/50"}`},ge))}),S.jsx("button",{onClick:_e,className:`px-3 py-1 rounded-full bg-gradient-to-r ${Z.primaryGradient} text-white text-xs font-medium hover:scale-105 transition-all duration-300 shadow-lg`,children:"Switch"})]}),S.jsx("div",{className:"relative min-h-screen flex flex-col justify-between items-center px-6 mt-4 mb-4 z-10",children:S.jsxs("div",{className:"rounded-[70px] w-full h-full p-2 border border-white/20 bg-gradient-to-br from-white/5 to-transparent shadow-2xl shadow-purple-500/10",children:[S.jsx("div",{className:"w-full text-center",children:S.jsx("h3",{className:"mt-2 font-italiana text-white text-[12px] md:text-base font-extralight tracking-wider bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent",children:"Electronics Engineer | Software Developer | Designer"})}),S.jsxs("div",{className:"h-full flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto",children:[S.jsxs("div",{className:"hidden md:grid grid-cols-1 md:grid-cols-3 gap-[70px] w-full px-4 flex justify-center",children:[S.jsx("div",{className:"group relative w-60 md:w-80 mt-[300px] z-30",children:S.jsxs("div",{className:`flex flex-col items-center justify-center relative border border-white/20 bg-gradient-to-br from-black/60 via-black/40 to-purple-900/20 backdrop-blur-xl rounded-[2rem] p-1 transition-all duration-700 shadow-2xl shadow-purple-500/20 group-hover:shadow-orange-500/30 ${w===1?"to-emerald-900/20 shadow-emerald-500/20 group-hover:shadow-amber-500/30":""}`,children:[S.jsx(zp,{className:`absolute top-4 left-4 ${Z.accentColor} text-2xl animate-spin-slow transition-colors duration-1000`}),S.jsxs("p",{className:"mb-3 font-italiana text-gray-300 text-[13px] md:text-sm text-center leading-relaxed relative z-10",children:[S.jsxs("div",{className:"relative overflow-hidden rounded-2xl mb-4 group/img",children:[S.jsx("img",{src:Qm,alt:"profile",className:"w-full rounded-2xl transition-all duration-700 group-hover:scale-[1.1] group/img:brightness-110"}),S.jsx("div",{className:`absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${w===1?"from-emerald-500/10":""}`})]}),S.jsx("span",{className:"bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent",children:"I CRAFT THE FUTURE ONE INNOVATIVE SOLUTION AT A TIME"})]}),S.jsxs("div",{className:"flex flex-col gap-3 relative z-10",children:[S.jsxs("button",{className:`button relative overflow-hidden group/btn bg-gradient-to-r ${Z.primaryGradient} hover:${Z.primaryHoverGradient.replace("hover:","")} transition-all duration-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40`,onClick:()=>Fe("contact"),children:[S.jsx("span",{className:"relative z-10",children:"Connect with me"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"})]}),S.jsxs("button",{className:`button relative overflow-hidden group/btn bg-gradient-to-r ${Z.secondaryGradient} hover:${Z.secondaryHoverGradient.replace("hover:","")} transition-all duration-500 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40`,onClick:()=>window.open(Jm,"_blank"),children:[S.jsx("span",{className:"relative z-10",children:"Download resume"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"})]})]})]})}),S.jsxs("div",{className:"relative flex flex-col items-center justify-center z-20",children:[S.jsxs("div",{className:"mb-[600px] relative text-center mt-3 z-10",children:[S.jsxs("div",{className:"flex items-center justify-center gap-2",children:[S.jsx("span",{className:"absolute top-6 left-12 font-italiana text-white/90 text-[20px] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",children:"At the"}),S.jsx("h1",{className:"font-italiana text-5xl md:text-[200px] text-white tracking-wide bg-gradient-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl",children:"intersection"})]}),S.jsx("p",{className:"absolute top-30 right-0 text-right font-italiana text-white text-sm md:text-lg tracking-wider bg-gradient-to-l from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent",children:"of electronics and code"})]}),S.jsx("div",{className:"absolute top-0 flex justify-center items-center z-20 mt-[100px]",children:S.jsx("div",{className:"relative group h-[80vh] w-[100vw] object-cover"})})]}),S.jsxs("div",{className:"absolute bottom-0 mt-[300px] group relative z-30",children:[S.jsx("div",{className:"mb-3 relative absolute top-40 left-24 group/card",children:S.jsxs("div",{className:`border border-white/30 bg-gradient-to-br ${Z.cardGradient} backdrop-blur-2xl rounded-3xl p-4 transition-all duration-700 hover:scale-[1.12] hover:rotate-2 hover:shadow-2xl ${Z.cardHoverShadow} ${Z.cardBorder} relative overflow-hidden`,children:[S.jsx("div",{className:`absolute inset-0 rounded-3xl bg-gradient-to-r ${Z.glowEffect} opacity-0 group-hover/card:opacity-100 transition-opacity duration-700`}),S.jsx("div",{className:`absolute inset-0 rounded-3xl bg-gradient-to-br ${Z.glowEffect} opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 blur-lg`}),S.jsxs("div",{className:"absolute inset-0 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000",children:[S.jsx("div",{className:`absolute top-4 right-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse ${w===1?"bg-emerald-400":""}`}),S.jsx("div",{className:`absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300 ${w===1?"bg-teal-400":""}`}),S.jsx("div",{className:`absolute top-1/2 right-8 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-pulse delay-700 ${w===1?"bg-emerald-400":""}`})]}),S.jsx("div",{className:"relative z-10",children:S.jsxs("div",{className:"flex items-center gap-6 mb-6",children:[S.jsxs("div",{className:"relative",children:[S.jsxs("div",{className:`w-16 h-16 rounded-2xl overflow-hidden transition-all duration-700 group-hover/card:scale-[1.2] group-hover/card:rotate-12 shadow-xl shadow-purple-500/30 border border-white/20 ${w===1?"shadow-emerald-500/30":""}`,children:[S.jsx("img",{src:Ym,alt:"Masked Image",className:"w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 group-hover/card:brightness-110"}),S.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${Z.glowEffect} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`})]}),S.jsx("div",{className:"absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 rounded-full animate-pulse shadow-xl shadow-green-400/60 border-2 border-white/30"}),S.jsx("div",{className:"absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400/50 to-emerald-400/50 rounded-full animate-ping"})]}),S.jsxs("div",{className:"flex flex-col flex-1",children:[S.jsx("div",{className:"flex items-center justify-between mb-2"}),S.jsx("h3",{className:"font-italiana text-white text-xs font-light tracking-wide bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent",children:"MOBITEL Market Edge Sales Management System"}),S.jsx(nl,{className:`w-5 h-5 text-white/60 transition-all duration-500 group-hover/card:${Z.accentColor} group-hover/card:translate-x-2 group-hover/card:scale-110 drop-shadow-lg`}),S.jsx("p",{className:"text-gray-400 text-xs leading-relaxed bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent",children:"AI-Powered Sales System"}),S.jsxs("div",{className:"mt-3 flex gap-2",children:[S.jsx("span",{className:`px-3 py-1 bg-gradient-to-r ${Z.badgeGradient} ${Z.badgeText} text-xs rounded-full ${Z.badgeBorder} shadow-lg shadow-purple-500/20 backdrop-blur-sm transition-all duration-1000`,children:"Enterprise"}),S.jsx("span",{className:`px-3 py-1 bg-gradient-to-r from-blue-500/30 to-blue-600/20 text-blue-200 text-xs rounded-full border border-blue-400/40 shadow-lg shadow-blue-500/20 backdrop-blur-sm transition-all duration-1000 ${w===1?"from-teal-500/30 to-teal-600/20 text-teal-200 border-teal-400/40 shadow-teal-500/20":""}`,children:"Sales"})]})]})]})})]})}),S.jsx("div",{className:"relative absolute left-12 top-40 group/card",children:S.jsxs("div",{className:`border border-white/25 bg-gradient-to-br from-black/60 via-cyan-900/10 to-teal-900/5 backdrop-blur-xl rounded-2xl p-6 transition-all duration-600 hover:scale-[1.08] hover:-rotate-2 hover:shadow-xl hover:shadow-cyan-500/30 hover:border-cyan-400/40 relative overflow-hidden ${w===1?"via-emerald-900/10 to-emerald-900/5 hover:shadow-emerald-500/30 hover:border-emerald-400/40":""}`,children:[S.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/15 to-teal-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-600 ${w===1?"from-emerald-500/15 to-emerald-500/10":""}`}),S.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-400/5 to-yellow-400/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-600 blur-sm ${w===1?"from-amber-400/5 to-amber-400/10":""}`}),S.jsx("div",{className:"relative z-10",children:S.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[S.jsxs("div",{className:"relative",children:[S.jsxs("div",{className:`w-12 h-12 rounded-xl overflow-hidden transition-all duration-600 group-hover/card:scale-[1.15] group-hover/card:-rotate-6 shadow-lg shadow-cyan-500/20 border border-white/20 ${w===1?"shadow-emerald-500/20":""}`,children:[S.jsx("img",{src:Xm,alt:"Masked Image",className:"w-full h-full object-cover transition-transform duration-600 group-hover/card:scale-105 group-hover/card:brightness-110"}),S.jsx("div",{className:`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-orange-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ${w===1?"from-emerald-500/10 to-amber-500/10":""}`})]}),S.jsx("div",{className:`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 rounded-full shadow-lg shadow-orange-400/50 border border-white/30 transition-all duration-1000 ${w===1?"from-amber-400 via-amber-400 to-yellow-400 shadow-amber-400/50":""}`})]}),S.jsxs("div",{className:"flex flex-col flex-1",children:[S.jsxs("div",{className:"flex items-center gap-3 mb-1",children:[S.jsx("h3",{className:`font-italiana text-white text-sm font-light tracking-wide bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent transition-all duration-1000 ${w===1?"to-emerald-200":""}`,children:"ChayaSmart+"}),S.jsx(nl,{className:`w-4 h-4 text-white/60 transition-all duration-400 group-hover/card:text-cyan-400 group-hover/card:translate-x-1 group-hover/card:scale-110 ${w===1?"group-hover/card:text-emerald-400":""}`})]}),S.jsx("p",{className:"text-gray-400 text-xs leading-relaxed bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent",children:"Tea Estate Management System"}),S.jsx("div",{className:"mt-2",children:S.jsx("span",{className:`px-2 py-0.5 bg-gradient-to-r from-cyan-500/25 to-teal-500/20 text-cyan-200 text-xs rounded-md border border-cyan-400/30 shadow-md shadow-cyan-500/20 backdrop-blur-sm transition-all duration-1000 ${w===1?"from-emerald-500/25 to-emerald-500/20 text-emerald-200 border-emerald-400/30 shadow-emerald-500/20":""}`,children:"Platform"})})]})]})})]})})]}),S.jsxs("div",{className:"absolute top-[600px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20 group",children:[S.jsx("div",{className:`absolute w-[100%] h-[100%] bg-gradient-to-r ${Z.robotGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000`}),S.jsx("div",{className:`absolute w-[100%] h-[100%] bg-gradient-to-r ${Z.glowEffect} rounded-full blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-700 delay-200`}),S.jsx("div",{className:`relative transition-all duration-700 group-hover:scale-[1.05] group-hover:brightness-110 drop-shadow-2xl ${_?"scale-95 opacity-70":"scale-100 opacity-100"}`,children:S.jsx("img",{src:V[w],alt:"robot",loading:"lazy",className:`h-[1000px] filter drop-shadow-2xl transition-all duration-600 ${_?"blur-sm":"blur-0"}`})})]})]}),S.jsxs("div",{className:"md:hidden h-full flex flex-col items-center justify-center w-full px-4 py-8",children:[S.jsxs("div",{className:"w-full text-center mb-12",children:[S.jsx("h1",{className:"font-italiana text-4xl text-white tracking-wide bg-gradient-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-lg mb-1",children:"At the intersection"}),S.jsx("p",{className:"font-italiana text-white text-lg tracking-wider bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent",children:"of electronics and code"})]}),S.jsx("div",{className:"group relative w-full max-w-sm mx-auto mb-10",children:S.jsxs("div",{className:"flex flex-col items-center justify-center relative border border-white/20 bg-gradient-to-br from-black/70 via-black/50 to-purple-900/20 backdrop-blur-xl rounded-3xl p-6 transition-all duration-500 shadow-xl shadow-purple-500/20",children:[S.jsx(zp,{className:"absolute top-4 left-4 text-cyan-400 text-2xl animate-spin-slow"}),S.jsxs("div",{className:"relative overflow-hidden rounded-2xl mb-6 w-full",children:[S.jsx("img",{src:Qm,alt:"profile",loading:"lazy",className:"w-full rounded-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-110"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]}),S.jsx("p",{className:"mb-6 font-italiana text-gray-300 text-sm text-center leading-relaxed",children:S.jsx("span",{className:"bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent",children:"I CRAFT THE FUTURE ONE INNOVATIVE SOLUTION AT A TIME"})}),S.jsxs("div",{className:"flex flex-col gap-3 w-full",children:[S.jsx("button",{className:"button w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-500 shadow-lg shadow-purple-500/25",onClick:()=>Fe("contact"),children:"Connect with me"}),S.jsx("button",{className:"button w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all duration-500 shadow-lg shadow-orange-500/25",onClick:()=>window.open(Jm,"_blank"),children:"Download resume"})]})]})}),S.jsxs("div",{className:"w-full max-w-md mx-auto space-y-6 mb-8",children:[S.jsx("div",{className:"group/card",children:S.jsxs("div",{className:"border border-white/25 bg-gradient-to-br from-black/70 via-purple-900/15 to-blue-900/10 backdrop-blur-xl rounded-2xl p-5 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden",children:[S.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/8 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"}),S.jsx("div",{className:"relative z-10",children:S.jsxs("div",{className:"flex items-start gap-4",children:[S.jsxs("div",{className:"relative flex-shrink-0",children:[S.jsx("div",{className:"w-14 h-14 rounded-xl overflow-hidden shadow-lg shadow-purple-500/20 border border-white/20",children:S.jsx("img",{src:Ym,alt:"MOBITEL Market Edge",className:"w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"})}),S.jsx("div",{className:"absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-400/50 border-2 border-white/30"})]}),S.jsxs("div",{className:"flex-1 min-w-0",children:[S.jsxs("div",{className:"flex items-start justify-between mb-2",children:[S.jsx("h3",{className:"font-italiana text-white text-sm font-light tracking-wide bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent",children:"MOBITEL Market Edge"}),S.jsx(nl,{className:"w-4 h-4 text-white/60 transition-all duration-400 group-hover/card:text-cyan-400 group-hover/card:translate-x-1 flex-shrink-0 ml-2"})]}),S.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-3",children:"AI-Powered Sales Management System"}),S.jsxs("div",{className:"flex flex-wrap gap-2",children:[S.jsx("span",{className:"px-3 py-1 bg-gradient-to-r from-purple-500/25 to-purple-600/20 text-purple-200 text-xs rounded-full border border-purple-400/40 shadow-sm",children:"Enterprise"}),S.jsx("span",{className:"px-3 py-1 bg-gradient-to-r from-blue-500/25 to-blue-600/20 text-blue-200 text-xs rounded-full border border-blue-400/40 shadow-sm",children:"Sales"})]})]})]})})]})}),S.jsx("div",{className:"group/card",children:S.jsxs("div",{className:"border border-white/20 bg-gradient-to-br from-black/70 via-cyan-900/10 to-teal-900/8 backdrop-blur-xl rounded-2xl p-5 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden",children:[S.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-teal-500/8 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"}),S.jsx("div",{className:"relative z-10",children:S.jsxs("div",{className:"flex items-start gap-4",children:[S.jsxs("div",{className:"relative flex-shrink-0",children:[S.jsx("div",{className:"w-14 h-14 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/15 border border-white/20",children:S.jsx("img",{src:Xm,alt:"ChayaSmart+",className:"w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"})}),S.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full shadow-lg shadow-orange-400/40 border border-white/20"})]}),S.jsxs("div",{className:"flex-1 min-w-0",children:[S.jsxs("div",{className:"flex items-start justify-between mb-2",children:[S.jsx("h3",{className:"font-italiana text-white text-sm font-light tracking-wide bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent",children:"ChayaSmart+"}),S.jsx(nl,{className:"w-4 h-4 text-white/60 transition-all duration-400 group-hover/card:text-cyan-400 group-hover/card:translate-x-1 flex-shrink-0 ml-2"})]}),S.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-3",children:"Tea Estate Management System"}),S.jsx("div",{className:"flex flex-wrap gap-2",children:S.jsx("span",{className:"px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-teal-500/15 text-cyan-200 text-xs rounded-full border border-cyan-400/25 shadow-sm",children:"Platform"})})]})]})})]})})]})]})]})]})}),!R&&S.jsx("div",{className:`absolute inset-0 pointer-events-none transition-all duration-1000 ${_?"bg-black/20":"bg-transparent"}`})]})},qk=ne.lazy(()=>zt(()=>import("./HeaderBar-DgvuBGhl.js"),__vite__mapDeps([0,1,2,3]))),Kk=ne.lazy(()=>zt(()=>import("./videos-BXPdA35p.js"),[])),Qk=ne.lazy(()=>zt(()=>import("./AboutUs-Bs1ghNRp.js"),__vite__mapDeps([4,5]))),Yk=ne.lazy(()=>zt(()=>import("./Education-zTWoo0Nw.js"),__vite__mapDeps([6,7]))),Xk=ne.lazy(()=>zt(()=>import("./SkillsData-BIJFxg3L.js"),__vite__mapDeps([8,9,10,11,3]))),Jk=ne.lazy(()=>zt(()=>import("./LicensesCertifications-MSaD3elo.js"),[])),Zk=ne.lazy(()=>zt(()=>import("./WorkExperience-DONaE5oy.js"),[])),eI=ne.lazy(()=>zt(()=>import("./ProjectsData-DkZ7SrSe.js"),__vite__mapDeps([12,5,9,11,7,13]))),tI=ne.lazy(()=>zt(()=>import("./designpage-CKfYKTcf.js"),__vite__mapDeps([14,9,7,10]))),nI=ne.lazy(()=>zt(()=>import("./Testimonials-Bc_YfvUC.js"),__vite__mapDeps([15,2]))),rI=ne.lazy(()=>zt(()=>import("./Contact-CHTO-a64.js"),[])),iI=ne.lazy(()=>zt(()=>import("./Copyright-LoeTsFgf.js"),__vite__mapDeps([16,1,9,7])));function sI(){return ne.useEffect(()=>{_y.init({duration:600,once:!0})},[]),S.jsx(Hk,{children:S.jsxs("div",{children:[S.jsx(By,{}),S.jsx(ne.Suspense,{fallback:S.jsx(jl,{}),children:S.jsx(qk,{})}),S.jsxs("main",{children:[S.jsx("section",{id:"home",children:S.jsx(Gk,{})}),S.jsx(oI,{id:"videosection",Component:Kk}),S.jsx(_n,{id:"about",Component:Qk}),S.jsx(_n,{id:"education-journey",Component:Yk}),S.jsx(_n,{id:"dexterity",Component:Xk}),S.jsx(_n,{id:"professional-designations",Component:Jk}),S.jsx(_n,{id:"professional-journey",Component:Zk}),S.jsx(_n,{id:"creative-ventures",Component:eI}),S.jsx(_n,{id:"design-scape",Component:tI}),S.jsx(_n,{id:"testimonials",Component:nI}),S.jsx(_n,{id:"contact",Component:rI})]}),S.jsx(ne.Suspense,{fallback:S.jsx(jl,{}),children:S.jsx(iI,{})})]})})}function _n({id:i,Component:e}){const[n,s]=ne.useState(!1);return ne.useEffect(()=>{const l=document.getElementById(i);if(!l)return;const u=new IntersectionObserver(([d])=>{d.isIntersecting&&(s(!0),u.disconnect())});return u.observe(l),()=>u.disconnect()},[i]),S.jsx("section",{id:i,children:n?S.jsx(ne.Suspense,{fallback:S.jsx(jl,{}),children:S.jsx(e,{})}):S.jsx("div",{style:{height:"50vh"}})})}function oI({id:i,Component:e}){return S.jsx("section",{id:i,children:S.jsx(ne.Suspense,{fallback:S.jsx(jl,{}),children:S.jsx(e,{})})})}function jl(){return S.jsx("div",{className:"text-center py-10 text-gray-400 animate-pulse text-sm",children:"Loading..."})}hy.createRoot(document.getElementById("root")).render(S.jsx(ne.StrictMode,{children:S.jsx(sI,{})}));export{nl as A,Ry as F,rr as G,Cr as R,Oy as S,Hy as X,lI as a,$k as b,Fl as c,cI as d,mI as e,Vk as f,Zm as g,aI as h,fI as i,S as j,dI as k,hI as l,_y as m,xy as n,pI as o,gI as p,by as q,ne as r,uI as s,Py as t,vI as u,Ny as v,Ty as w};
