const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeaderBar-DBPUmx14.js","assets/myimage-C3KLPR6t.js","assets/user-DtQYW0sc.js","assets/palette-CZTasGea.js","assets/Home-COt1nI3z.js","assets/arrow-right-Dq31oHun.js","assets/AboutUs-vVVczqxc.js","assets/4-DHqHY9a9.js","assets/Education-D1cHh0da.js","assets/external-link-DXW_pwaN.js","assets/button-17grN15c.css","assets/SkillsData-DyJoB2MH.js","assets/proxy-LB1yVbe9.js","assets/index-CoDMbgMV.js","assets/boxes-BeM0iBHI.js","assets/ProjectsData-DPVS_153.js","assets/ProjectsData-CSRAChdu.css","assets/designpage-B9cvjJj4.js","assets/Testimonials-BnRKMACc.js","assets/Copyright-CQJ7hSnr.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();var QI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var cc={exports:{}},zs={},dc={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function Xy(){if(Pp)return Se;Pp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),v=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,F={};function G(I,O,se){this.props=I,this.context=O,this.refs=F,this.updater=se||A}G.prototype.isReactComponent={},G.prototype.setState=function(I,O){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,O,"setState")},G.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function fe(){}fe.prototype=G.prototype;function ye(I,O,se){this.props=I,this.context=O,this.refs=F,this.updater=se||A}var T=ye.prototype=new fe;T.constructor=ye,D(T,G.prototype),T.isPureReactComponent=!0;var we=Array.isArray,Ge=Object.prototype.hasOwnProperty,ge={current:null},ze={key:!0,ref:!0,__self:!0,__source:!0};function _e(I,O,se){var oe,re={},ne=null,W=null;if(O!=null)for(oe in O.ref!==void 0&&(W=O.ref),O.key!==void 0&&(ne=""+O.key),O)Ge.call(O,oe)&&!ze.hasOwnProperty(oe)&&(re[oe]=O[oe]);var ie=arguments.length-2;if(ie===1)re.children=se;else if(1<ie){for(var ve=Array(ie),Oe=0;Oe<ie;Oe++)ve[Oe]=arguments[Oe+2];re.children=ve}if(I&&I.defaultProps)for(oe in ie=I.defaultProps,ie)re[oe]===void 0&&(re[oe]=ie[oe]);return{$$typeof:i,type:I,key:ne,ref:W,props:re,_owner:ge.current}}function xe(I,O){return{$$typeof:i,type:I.type,key:O,ref:I.ref,props:I.props,_owner:I._owner}}function qe(I){return typeof I=="object"&&I!==null&&I.$$typeof===i}function ee(I){var O={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(se){return O[se]})}var B=/\/+/g;function he(I,O){return typeof I=="object"&&I!==null&&I.key!=null?ee(""+I.key):O.toString(36)}function q(I,O,se,oe,re){var ne=typeof I;(ne==="undefined"||ne==="boolean")&&(I=null);var W=!1;if(I===null)W=!0;else switch(ne){case"string":case"number":W=!0;break;case"object":switch(I.$$typeof){case i:case e:W=!0}}if(W)return W=I,re=re(W),I=oe===""?"."+he(W,0):oe,we(re)?(se="",I!=null&&(se=I.replace(B,"$&/")+"/"),q(re,O,se,"",function(Oe){return Oe})):re!=null&&(qe(re)&&(re=xe(re,se+(!re.key||W&&W.key===re.key?"":(""+re.key).replace(B,"$&/")+"/")+I)),O.push(re)),1;if(W=0,oe=oe===""?".":oe+":",we(I))for(var ie=0;ie<I.length;ie++){ne=I[ie];var ve=oe+he(ne,ie);W+=q(ne,O,se,ve,re)}else if(ve=_(I),typeof ve=="function")for(I=ve.call(I),ie=0;!(ne=I.next()).done;)ne=ne.value,ve=oe+he(ne,ie++),W+=q(ne,O,se,ve,re);else if(ne==="object")throw O=String(I),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return W}function be(I,O,se){if(I==null)return I;var oe=[],re=0;return q(I,oe,"","",function(ne){return O.call(se,ne,re++)}),oe}function Me(I){if(I._status===-1){var O=I._result;O=O(),O.then(function(se){(I._status===0||I._status===-1)&&(I._status=1,I._result=se)},function(se){(I._status===0||I._status===-1)&&(I._status=2,I._result=se)}),I._status===-1&&(I._status=0,I._result=O)}if(I._status===1)return I._result.default;throw I._result}var Ne={current:null},V={transition:null},te={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:V,ReactCurrentOwner:ge};function H(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:be,forEach:function(I,O,se){be(I,function(){O.apply(this,arguments)},se)},count:function(I){var O=0;return be(I,function(){O++}),O},toArray:function(I){return be(I,function(O){return O})||[]},only:function(I){if(!qe(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Se.Component=G,Se.Fragment=n,Se.Profiler=l,Se.PureComponent=ye,Se.StrictMode=s,Se.Suspense=p,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Se.act=H,Se.cloneElement=function(I,O,se){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var oe=D({},I.props),re=I.key,ne=I.ref,W=I._owner;if(O!=null){if(O.ref!==void 0&&(ne=O.ref,W=ge.current),O.key!==void 0&&(re=""+O.key),I.type&&I.type.defaultProps)var ie=I.type.defaultProps;for(ve in O)Ge.call(O,ve)&&!ze.hasOwnProperty(ve)&&(oe[ve]=O[ve]===void 0&&ie!==void 0?ie[ve]:O[ve])}var ve=arguments.length-2;if(ve===1)oe.children=se;else if(1<ve){ie=Array(ve);for(var Oe=0;Oe<ve;Oe++)ie[Oe]=arguments[Oe+2];oe.children=ie}return{$$typeof:i,type:I.type,key:re,ref:ne,props:oe,_owner:W}},Se.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},Se.createElement=_e,Se.createFactory=function(I){var O=_e.bind(null,I);return O.type=I,O},Se.createRef=function(){return{current:null}},Se.forwardRef=function(I){return{$$typeof:f,render:I}},Se.isValidElement=qe,Se.lazy=function(I){return{$$typeof:w,_payload:{_status:-1,_result:I},_init:Me}},Se.memo=function(I,O){return{$$typeof:g,type:I,compare:O===void 0?null:O}},Se.startTransition=function(I){var O=V.transition;V.transition={};try{I()}finally{V.transition=O}},Se.unstable_act=H,Se.useCallback=function(I,O){return Ne.current.useCallback(I,O)},Se.useContext=function(I){return Ne.current.useContext(I)},Se.useDebugValue=function(){},Se.useDeferredValue=function(I){return Ne.current.useDeferredValue(I)},Se.useEffect=function(I,O){return Ne.current.useEffect(I,O)},Se.useId=function(){return Ne.current.useId()},Se.useImperativeHandle=function(I,O,se){return Ne.current.useImperativeHandle(I,O,se)},Se.useInsertionEffect=function(I,O){return Ne.current.useInsertionEffect(I,O)},Se.useLayoutEffect=function(I,O){return Ne.current.useLayoutEffect(I,O)},Se.useMemo=function(I,O){return Ne.current.useMemo(I,O)},Se.useReducer=function(I,O,se){return Ne.current.useReducer(I,O,se)},Se.useRef=function(I){return Ne.current.useRef(I)},Se.useState=function(I){return Ne.current.useState(I)},Se.useSyncExternalStore=function(I,O,se){return Ne.current.useSyncExternalStore(I,O,se)},Se.useTransition=function(){return Ne.current.useTransition()},Se.version="18.3.1",Se}var Ap;function Jc(){return Ap||(Ap=1,dc.exports=Xy()),dc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function Jy(){if(Op)return zs;Op=1;var i=Jc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var w,v={},_=null,A=null;g!==void 0&&(_=""+g),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(A=p.ref);for(w in p)s.call(p,w)&&!u.hasOwnProperty(w)&&(v[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)v[w]===void 0&&(v[w]=p[w]);return{$$typeof:e,type:f,key:_,ref:A,props:v,_owner:l.current}}return zs.Fragment=n,zs.jsx=d,zs.jsxs=d,zs}var Dp;function Zy(){return Dp||(Dp=1,cc.exports=Jy()),cc.exports}var K=Zy(),Re=Jc();const Gr=Jm(Re);var Al={},hc={exports:{}},Mt={},fc={exports:{}},pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function e0(){return bp||(bp=1,function(i){function e(V,te){var H=V.length;V.push(te);e:for(;0<H;){var I=H-1>>>1,O=V[I];if(0<l(O,te))V[I]=te,V[H]=O,H=I;else break e}}function n(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var te=V[0],H=V.pop();if(H!==te){V[0]=H;e:for(var I=0,O=V.length,se=O>>>1;I<se;){var oe=2*(I+1)-1,re=V[oe],ne=oe+1,W=V[ne];if(0>l(re,H))ne<O&&0>l(W,re)?(V[I]=W,V[ne]=H,I=ne):(V[I]=re,V[oe]=H,I=oe);else if(ne<O&&0>l(W,H))V[I]=W,V[ne]=H,I=ne;else break e}}return te}function l(V,te){var H=V.sortIndex-te.sortIndex;return H!==0?H:V.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var p=[],g=[],w=1,v=null,_=3,A=!1,D=!1,F=!1,G=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(V){for(var te=n(g);te!==null;){if(te.callback===null)s(g);else if(te.startTime<=V)s(g),te.sortIndex=te.expirationTime,e(p,te);else break;te=n(g)}}function we(V){if(F=!1,T(V),!D)if(n(p)!==null)D=!0,Me(Ge);else{var te=n(g);te!==null&&Ne(we,te.startTime-V)}}function Ge(V,te){D=!1,F&&(F=!1,fe(_e),_e=-1),A=!0;var H=_;try{for(T(te),v=n(p);v!==null&&(!(v.expirationTime>te)||V&&!ee());){var I=v.callback;if(typeof I=="function"){v.callback=null,_=v.priorityLevel;var O=I(v.expirationTime<=te);te=i.unstable_now(),typeof O=="function"?v.callback=O:v===n(p)&&s(p),T(te)}else s(p);v=n(p)}if(v!==null)var se=!0;else{var oe=n(g);oe!==null&&Ne(we,oe.startTime-te),se=!1}return se}finally{v=null,_=H,A=!1}}var ge=!1,ze=null,_e=-1,xe=5,qe=-1;function ee(){return!(i.unstable_now()-qe<xe)}function B(){if(ze!==null){var V=i.unstable_now();qe=V;var te=!0;try{te=ze(!0,V)}finally{te?he():(ge=!1,ze=null)}}else ge=!1}var he;if(typeof ye=="function")he=function(){ye(B)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,be=q.port2;q.port1.onmessage=B,he=function(){be.postMessage(null)}}else he=function(){G(B,0)};function Me(V){ze=V,ge||(ge=!0,he())}function Ne(V,te){_e=G(function(){V(i.unstable_now())},te)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(V){V.callback=null},i.unstable_continueExecution=function(){D||A||(D=!0,Me(Ge))},i.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<V?Math.floor(1e3/V):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return n(p)},i.unstable_next=function(V){switch(_){case 1:case 2:case 3:var te=3;break;default:te=_}var H=_;_=te;try{return V()}finally{_=H}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(V,te){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var H=_;_=V;try{return te()}finally{_=H}},i.unstable_scheduleCallback=function(V,te,H){var I=i.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?I+H:I):H=I,V){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=H+O,V={id:w++,callback:te,priorityLevel:V,startTime:H,expirationTime:O,sortIndex:-1},H>I?(V.sortIndex=H,e(g,V),n(p)===null&&V===n(g)&&(F?(fe(_e),_e=-1):F=!0,Ne(we,H-I))):(V.sortIndex=O,e(p,V),D||A||(D=!0,Me(Ge))),V},i.unstable_shouldYield=ee,i.unstable_wrapCallback=function(V){var te=_;return function(){var H=_;_=te;try{return V.apply(this,arguments)}finally{_=H}}}}(pc)),pc}var Lp;function t0(){return Lp||(Lp=1,fc.exports=e0()),fc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function n0(){if(Mp)return Mt;Mp=1;var i=Jc(),e=t0();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},v={};function _(t){return p.call(v,t)?!0:p.call(w,t)?!1:g.test(t)?v[t]=!0:(w[t]=!0,!1)}function A(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function D(t,r,o,a){if(r===null||typeof r>"u"||A(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function F(t,r,o,a,c,h,m){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=m}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){G[t]=new F(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];G[r]=new F(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){G[t]=new F(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){G[t]=new F(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){G[t]=new F(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){G[t]=new F(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){G[t]=new F(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){G[t]=new F(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){G[t]=new F(t,5,!1,t.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function ye(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(fe,ye);G[r]=new F(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(fe,ye);G[r]=new F(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(fe,ye);G[r]=new F(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){G[t]=new F(t,1,!1,t.toLowerCase(),null,!1,!1)}),G.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){G[t]=new F(t,1,!1,t.toLowerCase(),null,!0,!0)});function T(t,r,o,a){var c=G.hasOwnProperty(r)?G[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(D(r,o,c,a)&&(o=null),a||c===null?_(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var we=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ge=Symbol.for("react.element"),ge=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),_e=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),qe=Symbol.for("react.provider"),ee=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),V=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,I;function O(t){if(I===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+t}var se=!1;function oe(t,r){if(!t||se)return"";se=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(x){var a=x}Reflect.construct(t,[],r)}else{try{r.call()}catch(x){a=x}t.call(r.prototype)}else{try{throw Error()}catch(x){a=x}t()}}catch(x){if(x&&a&&typeof x.stack=="string"){for(var c=x.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,y=h.length-1;1<=m&&0<=y&&c[m]!==h[y];)y--;for(;1<=m&&0<=y;m--,y--)if(c[m]!==h[y]){if(m!==1||y!==1)do if(m--,y--,0>y||c[m]!==h[y]){var S=`
`+c[m].replace(" at new "," at ");return t.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",t.displayName)),S}while(1<=m&&0<=y);break}}}finally{se=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?O(t):""}function re(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=oe(t.type,!1),t;case 11:return t=oe(t.type.render,!1),t;case 1:return t=oe(t.type,!0),t;default:return""}}function ne(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ze:return"Fragment";case ge:return"Portal";case xe:return"Profiler";case _e:return"StrictMode";case he:return"Suspense";case q:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ee:return(t.displayName||"Context")+".Consumer";case qe:return(t._context.displayName||"Context")+".Provider";case B:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case be:return r=t.displayName||null,r!==null?r:ne(t.type)||"Memo";case Me:r=t._payload,t=t._init;try{return ne(t(r))}catch{}}return null}function W(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(r);case 8:return r===_e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ie(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ve(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Oe(t){var r=ve(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function wt(t){t._valueTracker||(t._valueTracker=Oe(t))}function Et(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=ve(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function Ie(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pe(t,r){var o=r.checked;return H({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Ze(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=ie(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function kt(t,r){r=r.checked,r!=null&&T(t,"checked",r,!1)}function zt(t,r){kt(t,r);var o=ie(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Gn(t,r.type,o):r.hasOwnProperty("defaultValue")&&Gn(t,r.type,ie(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Ir(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Gn(t,r,o){(r!=="number"||Ie(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var pn=Array.isArray;function xn(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+ie(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function mn(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return H({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ii(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(pn(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:ie(o)}}function _o(t,r){var o=ie(r.value),a=ie(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Ji(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function yo(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function si(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?yo(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Nn,kr=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Nn=Nn||document.createElement("div"),Nn.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Nn.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Rr(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xa=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(t){xa.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),xr[r]=xr[t]})});function wo(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||xr.hasOwnProperty(t)&&xr[t]?(""+r).trim():r+"px"}function Eo(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=wo(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var Na=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zi(t,r){if(r){if(Na[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function es(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ts=null;function oi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ns=null,gn=null,vn=null;function So(t){if(t=Ts(t)){if(typeof ns!="function")throw Error(n(280));var r=t.stateNode;r&&(r=Go(r),ns(t.stateNode,t.type,r))}}function Co(t){gn?vn?vn.push(t):vn=[t]:gn=t}function To(){if(gn){var t=gn,r=vn;if(vn=gn=null,So(t),r)for(t=0;t<r.length;t++)So(r[t])}}function Nr(t,r){return t(r)}function Io(){}var rs=!1;function is(t,r,o){if(rs)return t(r,o);rs=!0;try{return Nr(t,r,o)}finally{rs=!1,(gn!==null||vn!==null)&&(Io(),To())}}function rt(t,r){var o=t.stateNode;if(o===null)return null;var a=Go(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var ss=!1;if(f)try{var E={};Object.defineProperty(E,"passive",{get:function(){ss=!0}}),window.addEventListener("test",E,E),window.removeEventListener("test",E,E)}catch{ss=!1}function N(t,r,o,a,c,h,m,y,S){var x=Array.prototype.slice.call(arguments,3);try{r.apply(o,x)}catch(L){this.onError(L)}}var P=!1,U=null,J=!1,me=null,Ee={onError:function(t){P=!0,U=t}};function it(t,r,o,a,c,h,m,y,S){P=!1,U=null,N.apply(Ee,arguments)}function et(t,r,o,a,c,h,m,y,S){if(it.apply(this,arguments),P){if(P){var x=U;P=!1,U=null}else throw Error(n(198));J||(J=!0,me=x)}}function at(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function _n(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Zd(t){if(at(t)!==t)throw Error(n(188))}function a_(t){var r=t.alternate;if(!r){if(r=at(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Zd(c),t;if(h===a)return Zd(c),r;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,y=c.child;y;){if(y===o){m=!0,o=c,a=h;break}if(y===a){m=!0,a=c,o=h;break}y=y.sibling}if(!m){for(y=h.child;y;){if(y===o){m=!0,o=h,a=c;break}if(y===a){m=!0,a=h,o=c;break}y=y.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function eh(t){return t=a_(t),t!==null?th(t):null}function th(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=th(t);if(r!==null)return r;t=t.sibling}return null}var nh=e.unstable_scheduleCallback,rh=e.unstable_cancelCallback,u_=e.unstable_shouldYield,c_=e.unstable_requestPaint,tt=e.unstable_now,d_=e.unstable_getCurrentPriorityLevel,Pa=e.unstable_ImmediatePriority,ih=e.unstable_UserBlockingPriority,ko=e.unstable_NormalPriority,h_=e.unstable_LowPriority,sh=e.unstable_IdlePriority,Ro=null,yn=null;function f_(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Ro,t,void 0,(t.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:g_,p_=Math.log,m_=Math.LN2;function g_(t){return t>>>=0,t===0?32:31-(p_(t)/m_|0)|0}var xo=64,No=4194304;function os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Po(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var y=m&~c;y!==0?a=os(y):(h&=m,h!==0&&(a=os(h)))}else m=o&~c,m!==0?a=os(m):h!==0&&(a=os(h));if(a===0)return 0;if(r!==0&&r!==a&&!(r&c)&&(c=a&-a,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if(a&4&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-Zt(r),c=1<<o,a|=t[o],r&=~c;return a}function v_(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function __(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Zt(h),y=1<<m,S=c[m];S===-1?(!(y&o)||y&a)&&(c[m]=v_(y,r)):S<=r&&(t.expiredLanes|=y),h&=~y}}function Aa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function oh(){var t=xo;return xo<<=1,!(xo&4194240)&&(xo=64),t}function Oa(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function ls(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Zt(r),t[r]=o}function y_(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Zt(o),h=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function Da(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-Zt(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var Le=0;function lh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ah,ba,uh,ch,dh,La=!1,Ao=[],qn=null,Yn=null,Kn=null,as=new Map,us=new Map,Qn=[],w_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hh(t,r){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":as.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(r.pointerId)}}function cs(t,r,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},r!==null&&(r=Ts(r),r!==null&&ba(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function E_(t,r,o,a,c){switch(r){case"focusin":return qn=cs(qn,t,r,o,a,c),!0;case"dragenter":return Yn=cs(Yn,t,r,o,a,c),!0;case"mouseover":return Kn=cs(Kn,t,r,o,a,c),!0;case"pointerover":var h=c.pointerId;return as.set(h,cs(as.get(h)||null,t,r,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,us.set(h,cs(us.get(h)||null,t,r,o,a,c)),!0}return!1}function fh(t){var r=Pr(t.target);if(r!==null){var o=at(r);if(o!==null){if(r=o.tag,r===13){if(r=_n(o),r!==null){t.blockedOn=r,dh(t.priority,function(){uh(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oo(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=Fa(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);ts=a,o.target.dispatchEvent(a),ts=null}else return r=Ts(o),r!==null&&ba(r),t.blockedOn=o,!1;r.shift()}return!0}function ph(t,r,o){Oo(t)&&o.delete(r)}function S_(){La=!1,qn!==null&&Oo(qn)&&(qn=null),Yn!==null&&Oo(Yn)&&(Yn=null),Kn!==null&&Oo(Kn)&&(Kn=null),as.forEach(ph),us.forEach(ph)}function ds(t,r){t.blockedOn===r&&(t.blockedOn=null,La||(La=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,S_)))}function hs(t){function r(c){return ds(c,t)}if(0<Ao.length){ds(Ao[0],t);for(var o=1;o<Ao.length;o++){var a=Ao[o];a.blockedOn===t&&(a.blockedOn=null)}}for(qn!==null&&ds(qn,t),Yn!==null&&ds(Yn,t),Kn!==null&&ds(Kn,t),as.forEach(r),us.forEach(r),o=0;o<Qn.length;o++)a=Qn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<Qn.length&&(o=Qn[0],o.blockedOn===null);)fh(o),o.blockedOn===null&&Qn.shift()}var li=we.ReactCurrentBatchConfig,Do=!0;function C_(t,r,o,a){var c=Le,h=li.transition;li.transition=null;try{Le=1,Ma(t,r,o,a)}finally{Le=c,li.transition=h}}function T_(t,r,o,a){var c=Le,h=li.transition;li.transition=null;try{Le=4,Ma(t,r,o,a)}finally{Le=c,li.transition=h}}function Ma(t,r,o,a){if(Do){var c=Fa(t,r,o,a);if(c===null)eu(t,r,a,bo,o),hh(t,a);else if(E_(c,t,r,o,a))a.stopPropagation();else if(hh(t,a),r&4&&-1<w_.indexOf(t)){for(;c!==null;){var h=Ts(c);if(h!==null&&ah(h),h=Fa(t,r,o,a),h===null&&eu(t,r,a,bo,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else eu(t,r,a,null,o)}}var bo=null;function Fa(t,r,o,a){if(bo=null,t=oi(a),t=Pr(t),t!==null)if(r=at(t),r===null)t=null;else if(o=r.tag,o===13){if(t=_n(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return bo=t,null}function mh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d_()){case Pa:return 1;case ih:return 4;case ko:case h_:return 16;case sh:return 536870912;default:return 16}default:return 16}}var Xn=null,Ua=null,Lo=null;function gh(){if(Lo)return Lo;var t,r=Ua,o=r.length,a,c="value"in Xn?Xn.value:Xn.textContent,h=c.length;for(t=0;t<o&&r[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&r[o-a]===c[h-a];a++);return Lo=c.slice(t,1<a?1-a:void 0)}function Mo(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function vh(){return!1}function jt(t){function r(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(o=t[y],this[y]=o?o(h):h[y]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Fo:vh,this.isPropagationStopped=vh,this}return H(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),r}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},za=jt(ai),fs=H({},ai,{view:0,detail:0}),I_=jt(fs),ja,Ba,ps,Uo=H({},fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ps&&(ps&&t.type==="mousemove"?(ja=t.screenX-ps.screenX,Ba=t.screenY-ps.screenY):Ba=ja=0,ps=t),ja)},movementY:function(t){return"movementY"in t?t.movementY:Ba}}),_h=jt(Uo),k_=H({},Uo,{dataTransfer:0}),R_=jt(k_),x_=H({},fs,{relatedTarget:0}),Va=jt(x_),N_=H({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),P_=jt(N_),A_=H({},ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),O_=jt(A_),D_=H({},ai,{data:0}),yh=jt(D_),b_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F_(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=M_[t])?!!r[t]:!1}function Wa(){return F_}var U_=H({},fs,{key:function(t){if(t.key){var r=b_[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Mo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?L_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wa,charCode:function(t){return t.type==="keypress"?Mo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),z_=jt(U_),j_=H({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=jt(j_),B_=H({},fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wa}),V_=jt(B_),W_=H({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),H_=jt(W_),$_=H({},Uo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G_=jt($_),q_=[9,13,27,32],Ha=f&&"CompositionEvent"in window,ms=null;f&&"documentMode"in document&&(ms=document.documentMode);var Y_=f&&"TextEvent"in window&&!ms,Eh=f&&(!Ha||ms&&8<ms&&11>=ms),Sh=" ",Ch=!1;function Th(t,r){switch(t){case"keyup":return q_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ui=!1;function K_(t,r){switch(t){case"compositionend":return Ih(r);case"keypress":return r.which!==32?null:(Ch=!0,Sh);case"textInput":return t=r.data,t===Sh&&Ch?null:t;default:return null}}function Q_(t,r){if(ui)return t==="compositionend"||!Ha&&Th(t,r)?(t=gh(),Lo=Ua=Xn=null,ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Eh&&r.locale!=="ko"?null:r.data;default:return null}}var X_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!X_[t.type]:r==="textarea"}function Rh(t,r,o,a){Co(a),r=Wo(r,"onChange"),0<r.length&&(o=new za("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var gs=null,vs=null;function J_(t){$h(t,0)}function zo(t){var r=pi(t);if(Et(r))return t}function Z_(t,r){if(t==="change")return r}var xh=!1;if(f){var $a;if(f){var Ga="oninput"in document;if(!Ga){var Nh=document.createElement("div");Nh.setAttribute("oninput","return;"),Ga=typeof Nh.oninput=="function"}$a=Ga}else $a=!1;xh=$a&&(!document.documentMode||9<document.documentMode)}function Ph(){gs&&(gs.detachEvent("onpropertychange",Ah),vs=gs=null)}function Ah(t){if(t.propertyName==="value"&&zo(vs)){var r=[];Rh(r,vs,t,oi(t)),is(J_,r)}}function ey(t,r,o){t==="focusin"?(Ph(),gs=r,vs=o,gs.attachEvent("onpropertychange",Ah)):t==="focusout"&&Ph()}function ty(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zo(vs)}function ny(t,r){if(t==="click")return zo(r)}function ry(t,r){if(t==="input"||t==="change")return zo(r)}function iy(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var en=typeof Object.is=="function"?Object.is:iy;function _s(t,r){if(en(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(r,c)||!en(t[c],r[c]))return!1}return!0}function Oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dh(t,r){var o=Oh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Oh(o)}}function bh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?bh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Lh(){for(var t=window,r=Ie();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Ie(t.document)}return r}function qa(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function sy(t){var r=Lh(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&bh(o.ownerDocument.documentElement,o)){if(a!==null&&qa(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Dh(o,h);var m=Dh(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(r),t.extend(m.node,m.offset)):(r.setEnd(m.node,m.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oy=f&&"documentMode"in document&&11>=document.documentMode,ci=null,Ya=null,ys=null,Ka=!1;function Mh(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ka||ci==null||ci!==Ie(a)||(a=ci,"selectionStart"in a&&qa(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ys&&_s(ys,a)||(ys=a,a=Wo(Ya,"onSelect"),0<a.length&&(r=new za("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=ci)))}function jo(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var di={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},Qa={},Fh={};f&&(Fh=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function Bo(t){if(Qa[t])return Qa[t];if(!di[t])return t;var r=di[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Fh)return Qa[t]=r[o];return t}var Uh=Bo("animationend"),zh=Bo("animationiteration"),jh=Bo("animationstart"),Bh=Bo("transitionend"),Vh=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(t,r){Vh.set(t,r),u(r,[t])}for(var Xa=0;Xa<Wh.length;Xa++){var Ja=Wh[Xa],ly=Ja.toLowerCase(),ay=Ja[0].toUpperCase()+Ja.slice(1);Jn(ly,"on"+ay)}Jn(Uh,"onAnimationEnd"),Jn(zh,"onAnimationIteration"),Jn(jh,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(Bh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));function Hh(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,et(a,r,void 0,t),t.currentTarget=null}function $h(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var m=a.length-1;0<=m;m--){var y=a[m],S=y.instance,x=y.currentTarget;if(y=y.listener,S!==h&&c.isPropagationStopped())break e;Hh(c,y,x),h=S}else for(m=0;m<a.length;m++){if(y=a[m],S=y.instance,x=y.currentTarget,y=y.listener,S!==h&&c.isPropagationStopped())break e;Hh(c,y,x),h=S}}}if(J)throw t=me,J=!1,me=null,t}function We(t,r){var o=r[ou];o===void 0&&(o=r[ou]=new Set);var a=t+"__bubble";o.has(a)||(Gh(r,t,2,!1),o.add(a))}function Za(t,r,o){var a=0;r&&(a|=4),Gh(o,t,a,r)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Es(t){if(!t[Vo]){t[Vo]=!0,s.forEach(function(o){o!=="selectionchange"&&(uy.has(o)||Za(o,!1,t),Za(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Vo]||(r[Vo]=!0,Za("selectionchange",!1,r))}}function Gh(t,r,o,a){switch(mh(r)){case 1:var c=C_;break;case 4:c=T_;break;default:c=Ma}o=c.bind(null,r,o,t),c=void 0,!ss||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function eu(t,r,o,a,c){var h=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var y=a.stateNode.containerInfo;if(y===c||y.nodeType===8&&y.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var S=m.tag;if((S===3||S===4)&&(S=m.stateNode.containerInfo,S===c||S.nodeType===8&&S.parentNode===c))return;m=m.return}for(;y!==null;){if(m=Pr(y),m===null)return;if(S=m.tag,S===5||S===6){a=h=m;continue e}y=y.parentNode}}a=a.return}is(function(){var x=h,L=oi(o),M=[];e:{var b=Vh.get(t);if(b!==void 0){var $=za,Q=t;switch(t){case"keypress":if(Mo(o)===0)break e;case"keydown":case"keyup":$=z_;break;case"focusin":Q="focus",$=Va;break;case"focusout":Q="blur",$=Va;break;case"beforeblur":case"afterblur":$=Va;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=_h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=R_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=V_;break;case Uh:case zh:case jh:$=P_;break;case Bh:$=H_;break;case"scroll":$=I_;break;case"wheel":$=G_;break;case"copy":case"cut":case"paste":$=O_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=wh}var X=(r&4)!==0,nt=!X&&t==="scroll",k=X?b!==null?b+"Capture":null:b;X=[];for(var C=x,R;C!==null;){R=C;var z=R.stateNode;if(R.tag===5&&z!==null&&(R=z,k!==null&&(z=rt(C,k),z!=null&&X.push(Ss(C,z,R)))),nt)break;C=C.return}0<X.length&&(b=new $(b,Q,null,o,L),M.push({event:b,listeners:X}))}}if(!(r&7)){e:{if(b=t==="mouseover"||t==="pointerover",$=t==="mouseout"||t==="pointerout",b&&o!==ts&&(Q=o.relatedTarget||o.fromElement)&&(Pr(Q)||Q[Pn]))break e;if(($||b)&&(b=L.window===L?L:(b=L.ownerDocument)?b.defaultView||b.parentWindow:window,$?(Q=o.relatedTarget||o.toElement,$=x,Q=Q?Pr(Q):null,Q!==null&&(nt=at(Q),Q!==nt||Q.tag!==5&&Q.tag!==6)&&(Q=null)):($=null,Q=x),$!==Q)){if(X=_h,z="onMouseLeave",k="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(X=wh,z="onPointerLeave",k="onPointerEnter",C="pointer"),nt=$==null?b:pi($),R=Q==null?b:pi(Q),b=new X(z,C+"leave",$,o,L),b.target=nt,b.relatedTarget=R,z=null,Pr(L)===x&&(X=new X(k,C+"enter",Q,o,L),X.target=R,X.relatedTarget=nt,z=X),nt=z,$&&Q)t:{for(X=$,k=Q,C=0,R=X;R;R=hi(R))C++;for(R=0,z=k;z;z=hi(z))R++;for(;0<C-R;)X=hi(X),C--;for(;0<R-C;)k=hi(k),R--;for(;C--;){if(X===k||k!==null&&X===k.alternate)break t;X=hi(X),k=hi(k)}X=null}else X=null;$!==null&&qh(M,b,$,X,!1),Q!==null&&nt!==null&&qh(M,nt,Q,X,!0)}}e:{if(b=x?pi(x):window,$=b.nodeName&&b.nodeName.toLowerCase(),$==="select"||$==="input"&&b.type==="file")var Z=Z_;else if(kh(b))if(xh)Z=ry;else{Z=ty;var le=ey}else($=b.nodeName)&&$.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(Z=ny);if(Z&&(Z=Z(t,x))){Rh(M,Z,o,L);break e}le&&le(t,b,x),t==="focusout"&&(le=b._wrapperState)&&le.controlled&&b.type==="number"&&Gn(b,"number",b.value)}switch(le=x?pi(x):window,t){case"focusin":(kh(le)||le.contentEditable==="true")&&(ci=le,Ya=x,ys=null);break;case"focusout":ys=Ya=ci=null;break;case"mousedown":Ka=!0;break;case"contextmenu":case"mouseup":case"dragend":Ka=!1,Mh(M,o,L);break;case"selectionchange":if(oy)break;case"keydown":case"keyup":Mh(M,o,L)}var ae;if(Ha)e:{switch(t){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else ui?Th(t,o)&&(ce="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ce="onCompositionStart");ce&&(Eh&&o.locale!=="ko"&&(ui||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&ui&&(ae=gh()):(Xn=L,Ua="value"in Xn?Xn.value:Xn.textContent,ui=!0)),le=Wo(x,ce),0<le.length&&(ce=new yh(ce,t,null,o,L),M.push({event:ce,listeners:le}),ae?ce.data=ae:(ae=Ih(o),ae!==null&&(ce.data=ae)))),(ae=Y_?K_(t,o):Q_(t,o))&&(x=Wo(x,"onBeforeInput"),0<x.length&&(L=new yh("onBeforeInput","beforeinput",null,o,L),M.push({event:L,listeners:x}),L.data=ae))}$h(M,r)})}function Ss(t,r,o){return{instance:t,listener:r,currentTarget:o}}function Wo(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=rt(t,o),h!=null&&a.unshift(Ss(t,h,c)),h=rt(t,r),h!=null&&a.push(Ss(t,h,c))),t=t.return}return a}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qh(t,r,o,a,c){for(var h=r._reactName,m=[];o!==null&&o!==a;){var y=o,S=y.alternate,x=y.stateNode;if(S!==null&&S===a)break;y.tag===5&&x!==null&&(y=x,c?(S=rt(o,h),S!=null&&m.unshift(Ss(o,S,y))):c||(S=rt(o,h),S!=null&&m.push(Ss(o,S,y)))),o=o.return}m.length!==0&&t.push({event:r,listeners:m})}var cy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function Yh(t){return(typeof t=="string"?t:""+t).replace(cy,`
`).replace(dy,"")}function Ho(t,r,o){if(r=Yh(r),Yh(t)!==r&&o)throw Error(n(425))}function $o(){}var tu=null,nu=null;function ru(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,hy=typeof clearTimeout=="function"?clearTimeout:void 0,Kh=typeof Promise=="function"?Promise:void 0,fy=typeof queueMicrotask=="function"?queueMicrotask:typeof Kh<"u"?function(t){return Kh.resolve(null).then(t).catch(py)}:iu;function py(t){setTimeout(function(){throw t})}function su(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),hs(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);hs(r)}function Zn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Qh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var fi=Math.random().toString(36).slice(2),wn="__reactFiber$"+fi,Cs="__reactProps$"+fi,Pn="__reactContainer$"+fi,ou="__reactEvents$"+fi,my="__reactListeners$"+fi,gy="__reactHandles$"+fi;function Pr(t){var r=t[wn];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Pn]||o[wn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Qh(t);t!==null;){if(o=t[wn])return o;t=Qh(t)}return r}t=o,o=t.parentNode}return null}function Ts(t){return t=t[wn]||t[Pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Go(t){return t[Cs]||null}var lu=[],mi=-1;function er(t){return{current:t}}function He(t){0>mi||(t.current=lu[mi],lu[mi]=null,mi--)}function je(t,r){mi++,lu[mi]=t.current,t.current=r}var tr={},St=er(tr),At=er(!1),Ar=tr;function gi(t,r){var o=t.type.contextTypes;if(!o)return tr;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=r[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function Ot(t){return t=t.childContextTypes,t!=null}function qo(){He(At),He(St)}function Xh(t,r,o){if(St.current!==tr)throw Error(n(168));je(St,r),je(At,o)}function Jh(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,W(t)||"Unknown",c));return H({},o,a)}function Yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Ar=St.current,je(St,t),je(At,At.current),!0}function Zh(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Jh(t,r,Ar),a.__reactInternalMemoizedMergedChildContext=t,He(At),He(St),je(St,t)):He(At),je(At,o)}var An=null,Ko=!1,au=!1;function ef(t){An===null?An=[t]:An.push(t)}function vy(t){Ko=!0,ef(t)}function nr(){if(!au&&An!==null){au=!0;var t=0,r=Le;try{var o=An;for(Le=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}An=null,Ko=!1}catch(c){throw An!==null&&(An=An.slice(t+1)),nh(Pa,nr),c}finally{Le=r,au=!1}}return null}var vi=[],_i=0,Qo=null,Xo=0,Gt=[],qt=0,Or=null,On=1,Dn="";function Dr(t,r){vi[_i++]=Xo,vi[_i++]=Qo,Qo=t,Xo=r}function tf(t,r,o){Gt[qt++]=On,Gt[qt++]=Dn,Gt[qt++]=Or,Or=t;var a=On;t=Dn;var c=32-Zt(a)-1;a&=~(1<<c),o+=1;var h=32-Zt(r)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,On=1<<32-Zt(r)+c|o<<c|a,Dn=h+t}else On=1<<h|o<<c|a,Dn=t}function uu(t){t.return!==null&&(Dr(t,1),tf(t,1,0))}function cu(t){for(;t===Qo;)Qo=vi[--_i],vi[_i]=null,Xo=vi[--_i],vi[_i]=null;for(;t===Or;)Or=Gt[--qt],Gt[qt]=null,Dn=Gt[--qt],Gt[qt]=null,On=Gt[--qt],Gt[qt]=null}var Bt=null,Vt=null,$e=!1,tn=null;function nf(t,r){var o=Xt(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function rf(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Bt=t,Vt=Zn(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Bt=t,Vt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Or!==null?{id:On,overflow:Dn}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Xt(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,Bt=t,Vt=null,!0):!1;default:return!1}}function du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hu(t){if($e){var r=Vt;if(r){var o=r;if(!rf(t,r)){if(du(t))throw Error(n(418));r=Zn(o.nextSibling);var a=Bt;r&&rf(t,r)?nf(a,o):(t.flags=t.flags&-4097|2,$e=!1,Bt=t)}}else{if(du(t))throw Error(n(418));t.flags=t.flags&-4097|2,$e=!1,Bt=t}}}function sf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function Jo(t){if(t!==Bt)return!1;if(!$e)return sf(t),$e=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!ru(t.type,t.memoizedProps)),r&&(r=Vt)){if(du(t))throw of(),Error(n(418));for(;r;)nf(t,r),r=Zn(r.nextSibling)}if(sf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Vt=Zn(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Vt=null}}else Vt=Bt?Zn(t.stateNode.nextSibling):null;return!0}function of(){for(var t=Vt;t;)t=Zn(t.nextSibling)}function yi(){Vt=Bt=null,$e=!1}function fu(t){tn===null?tn=[t]:tn.push(t)}var _y=we.ReactCurrentBatchConfig;function Is(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(m){var y=c.refs;m===null?delete y[h]:y[h]=m},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Zo(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function lf(t){var r=t._init;return r(t._payload)}function af(t){function r(k,C){if(t){var R=k.deletions;R===null?(k.deletions=[C],k.flags|=16):R.push(C)}}function o(k,C){if(!t)return null;for(;C!==null;)r(k,C),C=C.sibling;return null}function a(k,C){for(k=new Map;C!==null;)C.key!==null?k.set(C.key,C):k.set(C.index,C),C=C.sibling;return k}function c(k,C){return k=cr(k,C),k.index=0,k.sibling=null,k}function h(k,C,R){return k.index=R,t?(R=k.alternate,R!==null?(R=R.index,R<C?(k.flags|=2,C):R):(k.flags|=2,C)):(k.flags|=1048576,C)}function m(k){return t&&k.alternate===null&&(k.flags|=2),k}function y(k,C,R,z){return C===null||C.tag!==6?(C=ic(R,k.mode,z),C.return=k,C):(C=c(C,R),C.return=k,C)}function S(k,C,R,z){var Z=R.type;return Z===ze?L(k,C,R.props.children,z,R.key):C!==null&&(C.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Me&&lf(Z)===C.type)?(z=c(C,R.props),z.ref=Is(k,C,R),z.return=k,z):(z=Cl(R.type,R.key,R.props,null,k.mode,z),z.ref=Is(k,C,R),z.return=k,z)}function x(k,C,R,z){return C===null||C.tag!==4||C.stateNode.containerInfo!==R.containerInfo||C.stateNode.implementation!==R.implementation?(C=sc(R,k.mode,z),C.return=k,C):(C=c(C,R.children||[]),C.return=k,C)}function L(k,C,R,z,Z){return C===null||C.tag!==7?(C=Br(R,k.mode,z,Z),C.return=k,C):(C=c(C,R),C.return=k,C)}function M(k,C,R){if(typeof C=="string"&&C!==""||typeof C=="number")return C=ic(""+C,k.mode,R),C.return=k,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ge:return R=Cl(C.type,C.key,C.props,null,k.mode,R),R.ref=Is(k,null,C),R.return=k,R;case ge:return C=sc(C,k.mode,R),C.return=k,C;case Me:var z=C._init;return M(k,z(C._payload),R)}if(pn(C)||te(C))return C=Br(C,k.mode,R,null),C.return=k,C;Zo(k,C)}return null}function b(k,C,R,z){var Z=C!==null?C.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return Z!==null?null:y(k,C,""+R,z);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ge:return R.key===Z?S(k,C,R,z):null;case ge:return R.key===Z?x(k,C,R,z):null;case Me:return Z=R._init,b(k,C,Z(R._payload),z)}if(pn(R)||te(R))return Z!==null?null:L(k,C,R,z,null);Zo(k,R)}return null}function $(k,C,R,z,Z){if(typeof z=="string"&&z!==""||typeof z=="number")return k=k.get(R)||null,y(C,k,""+z,Z);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Ge:return k=k.get(z.key===null?R:z.key)||null,S(C,k,z,Z);case ge:return k=k.get(z.key===null?R:z.key)||null,x(C,k,z,Z);case Me:var le=z._init;return $(k,C,R,le(z._payload),Z)}if(pn(z)||te(z))return k=k.get(R)||null,L(C,k,z,Z,null);Zo(C,z)}return null}function Q(k,C,R,z){for(var Z=null,le=null,ae=C,ce=C=0,dt=null;ae!==null&&ce<R.length;ce++){ae.index>ce?(dt=ae,ae=null):dt=ae.sibling;var Ae=b(k,ae,R[ce],z);if(Ae===null){ae===null&&(ae=dt);break}t&&ae&&Ae.alternate===null&&r(k,ae),C=h(Ae,C,ce),le===null?Z=Ae:le.sibling=Ae,le=Ae,ae=dt}if(ce===R.length)return o(k,ae),$e&&Dr(k,ce),Z;if(ae===null){for(;ce<R.length;ce++)ae=M(k,R[ce],z),ae!==null&&(C=h(ae,C,ce),le===null?Z=ae:le.sibling=ae,le=ae);return $e&&Dr(k,ce),Z}for(ae=a(k,ae);ce<R.length;ce++)dt=$(ae,k,ce,R[ce],z),dt!==null&&(t&&dt.alternate!==null&&ae.delete(dt.key===null?ce:dt.key),C=h(dt,C,ce),le===null?Z=dt:le.sibling=dt,le=dt);return t&&ae.forEach(function(dr){return r(k,dr)}),$e&&Dr(k,ce),Z}function X(k,C,R,z){var Z=te(R);if(typeof Z!="function")throw Error(n(150));if(R=Z.call(R),R==null)throw Error(n(151));for(var le=Z=null,ae=C,ce=C=0,dt=null,Ae=R.next();ae!==null&&!Ae.done;ce++,Ae=R.next()){ae.index>ce?(dt=ae,ae=null):dt=ae.sibling;var dr=b(k,ae,Ae.value,z);if(dr===null){ae===null&&(ae=dt);break}t&&ae&&dr.alternate===null&&r(k,ae),C=h(dr,C,ce),le===null?Z=dr:le.sibling=dr,le=dr,ae=dt}if(Ae.done)return o(k,ae),$e&&Dr(k,ce),Z;if(ae===null){for(;!Ae.done;ce++,Ae=R.next())Ae=M(k,Ae.value,z),Ae!==null&&(C=h(Ae,C,ce),le===null?Z=Ae:le.sibling=Ae,le=Ae);return $e&&Dr(k,ce),Z}for(ae=a(k,ae);!Ae.done;ce++,Ae=R.next())Ae=$(ae,k,ce,Ae.value,z),Ae!==null&&(t&&Ae.alternate!==null&&ae.delete(Ae.key===null?ce:Ae.key),C=h(Ae,C,ce),le===null?Z=Ae:le.sibling=Ae,le=Ae);return t&&ae.forEach(function(Qy){return r(k,Qy)}),$e&&Dr(k,ce),Z}function nt(k,C,R,z){if(typeof R=="object"&&R!==null&&R.type===ze&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Ge:e:{for(var Z=R.key,le=C;le!==null;){if(le.key===Z){if(Z=R.type,Z===ze){if(le.tag===7){o(k,le.sibling),C=c(le,R.props.children),C.return=k,k=C;break e}}else if(le.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Me&&lf(Z)===le.type){o(k,le.sibling),C=c(le,R.props),C.ref=Is(k,le,R),C.return=k,k=C;break e}o(k,le);break}else r(k,le);le=le.sibling}R.type===ze?(C=Br(R.props.children,k.mode,z,R.key),C.return=k,k=C):(z=Cl(R.type,R.key,R.props,null,k.mode,z),z.ref=Is(k,C,R),z.return=k,k=z)}return m(k);case ge:e:{for(le=R.key;C!==null;){if(C.key===le)if(C.tag===4&&C.stateNode.containerInfo===R.containerInfo&&C.stateNode.implementation===R.implementation){o(k,C.sibling),C=c(C,R.children||[]),C.return=k,k=C;break e}else{o(k,C);break}else r(k,C);C=C.sibling}C=sc(R,k.mode,z),C.return=k,k=C}return m(k);case Me:return le=R._init,nt(k,C,le(R._payload),z)}if(pn(R))return Q(k,C,R,z);if(te(R))return X(k,C,R,z);Zo(k,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,C!==null&&C.tag===6?(o(k,C.sibling),C=c(C,R),C.return=k,k=C):(o(k,C),C=ic(R,k.mode,z),C.return=k,k=C),m(k)):o(k,C)}return nt}var wi=af(!0),uf=af(!1),el=er(null),tl=null,Ei=null,pu=null;function mu(){pu=Ei=tl=null}function gu(t){var r=el.current;He(el),t._currentValue=r}function vu(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function Si(t,r){tl=t,pu=Ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(Dt=!0),t.firstContext=null)}function Yt(t){var r=t._currentValue;if(pu!==t)if(t={context:t,memoizedValue:r,next:null},Ei===null){if(tl===null)throw Error(n(308));Ei=t,tl.dependencies={lanes:0,firstContext:t}}else Ei=Ei.next=t;return r}var br=null;function _u(t){br===null?br=[t]:br.push(t)}function cf(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,_u(r)):(o.next=c.next,c.next=o),r.interleaved=o,bn(t,a)}function bn(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var rr=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function df(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function ir(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,Pe&2){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,bn(t,o)}return c=a.interleaved,c===null?(r.next=r,_u(a)):(r.next=c.next,c.next=r),a.interleaved=r,bn(t,o)}function nl(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,Da(t,o)}}function hf(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=r:h=h.next=r}else c=h=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function rl(t,r,o,a){var c=t.updateQueue;rr=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,y=c.shared.pending;if(y!==null){c.shared.pending=null;var S=y,x=S.next;S.next=null,m===null?h=x:m.next=x,m=S;var L=t.alternate;L!==null&&(L=L.updateQueue,y=L.lastBaseUpdate,y!==m&&(y===null?L.firstBaseUpdate=x:y.next=x,L.lastBaseUpdate=S))}if(h!==null){var M=c.baseState;m=0,L=x=S=null,y=h;do{var b=y.lane,$=y.eventTime;if((a&b)===b){L!==null&&(L=L.next={eventTime:$,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var Q=t,X=y;switch(b=r,$=o,X.tag){case 1:if(Q=X.payload,typeof Q=="function"){M=Q.call($,M,b);break e}M=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=X.payload,b=typeof Q=="function"?Q.call($,M,b):Q,b==null)break e;M=H({},M,b);break e;case 2:rr=!0}}y.callback!==null&&y.lane!==0&&(t.flags|=64,b=c.effects,b===null?c.effects=[y]:b.push(y))}else $={eventTime:$,lane:b,tag:y.tag,payload:y.payload,callback:y.callback,next:null},L===null?(x=L=$,S=M):L=L.next=$,m|=b;if(y=y.next,y===null){if(y=c.shared.pending,y===null)break;b=y,y=b.next,b.next=null,c.lastBaseUpdate=b,c.shared.pending=null}}while(!0);if(L===null&&(S=M),c.baseState=S,c.firstBaseUpdate=x,c.lastBaseUpdate=L,r=c.shared.interleaved,r!==null){c=r;do m|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);Fr|=m,t.lanes=m,t.memoizedState=M}}function ff(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var ks={},En=er(ks),Rs=er(ks),xs=er(ks);function Lr(t){if(t===ks)throw Error(n(174));return t}function wu(t,r){switch(je(xs,r),je(Rs,t),je(En,ks),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:si(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=si(r,t)}He(En),je(En,r)}function Ci(){He(En),He(Rs),He(xs)}function pf(t){Lr(xs.current);var r=Lr(En.current),o=si(r,t.type);r!==o&&(je(Rs,t),je(En,o))}function Eu(t){Rs.current===t&&(He(En),He(Rs))}var Ye=er(0);function il(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Su=[];function Cu(){for(var t=0;t<Su.length;t++)Su[t]._workInProgressVersionPrimary=null;Su.length=0}var sl=we.ReactCurrentDispatcher,Tu=we.ReactCurrentBatchConfig,Mr=0,Ke=null,ot=null,ut=null,ol=!1,Ns=!1,Ps=0,yy=0;function Ct(){throw Error(n(321))}function Iu(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!en(t[o],r[o]))return!1;return!0}function ku(t,r,o,a,c,h){if(Mr=h,Ke=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,sl.current=t===null||t.memoizedState===null?Cy:Ty,t=o(a,c),Ns){h=0;do{if(Ns=!1,Ps=0,25<=h)throw Error(n(301));h+=1,ut=ot=null,r.updateQueue=null,sl.current=Iy,t=o(a,c)}while(Ns)}if(sl.current=ul,r=ot!==null&&ot.next!==null,Mr=0,ut=ot=Ke=null,ol=!1,r)throw Error(n(300));return t}function Ru(){var t=Ps!==0;return Ps=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Ke.memoizedState=ut=t:ut=ut.next=t,ut}function Kt(){if(ot===null){var t=Ke.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var r=ut===null?Ke.memoizedState:ut.next;if(r!==null)ut=r,ot=t;else{if(t===null)throw Error(n(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},ut===null?Ke.memoizedState=ut=t:ut=ut.next=t}return ut}function As(t,r){return typeof r=="function"?r(t):r}function xu(t){var r=Kt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=ot,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var y=m=null,S=null,x=h;do{var L=x.lane;if((Mr&L)===L)S!==null&&(S=S.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),a=x.hasEagerState?x.eagerState:t(a,x.action);else{var M={lane:L,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};S===null?(y=S=M,m=a):S=S.next=M,Ke.lanes|=L,Fr|=L}x=x.next}while(x!==null&&x!==h);S===null?m=a:S.next=y,en(a,r.memoizedState)||(Dt=!0),r.memoizedState=a,r.baseState=m,r.baseQueue=S,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ke.lanes|=h,Fr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Nu(t){var r=Kt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=r.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);en(h,r.memoizedState)||(Dt=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function mf(){}function gf(t,r){var o=Ke,a=Kt(),c=r(),h=!en(a.memoizedState,c);if(h&&(a.memoizedState=c,Dt=!0),a=a.queue,Pu(yf.bind(null,o,a,t),[t]),a.getSnapshot!==r||h||ut!==null&&ut.memoizedState.tag&1){if(o.flags|=2048,Os(9,_f.bind(null,o,a,c,r),void 0,null),ct===null)throw Error(n(349));Mr&30||vf(o,r,c)}return c}function vf(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Ke.updateQueue,r===null?(r={lastEffect:null,stores:null},Ke.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function _f(t,r,o,a){r.value=o,r.getSnapshot=a,wf(r)&&Ef(t)}function yf(t,r,o){return o(function(){wf(r)&&Ef(t)})}function wf(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!en(t,o)}catch{return!0}}function Ef(t){var r=bn(t,1);r!==null&&on(r,t,1,-1)}function Sf(t){var r=Sn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:t},r.queue=t,t=t.dispatch=Sy.bind(null,Ke,t),[r.memoizedState,t]}function Os(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=Ke.updateQueue,r===null?(r={lastEffect:null,stores:null},Ke.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function Cf(){return Kt().memoizedState}function ll(t,r,o,a){var c=Sn();Ke.flags|=t,c.memoizedState=Os(1|r,o,void 0,a===void 0?null:a)}function al(t,r,o,a){var c=Kt();a=a===void 0?null:a;var h=void 0;if(ot!==null){var m=ot.memoizedState;if(h=m.destroy,a!==null&&Iu(a,m.deps)){c.memoizedState=Os(r,o,h,a);return}}Ke.flags|=t,c.memoizedState=Os(1|r,o,h,a)}function Tf(t,r){return ll(8390656,8,t,r)}function Pu(t,r){return al(2048,8,t,r)}function If(t,r){return al(4,2,t,r)}function kf(t,r){return al(4,4,t,r)}function Rf(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function xf(t,r,o){return o=o!=null?o.concat([t]):null,al(4,4,Rf.bind(null,r,t),o)}function Au(){}function Nf(t,r){var o=Kt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Iu(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function Pf(t,r){var o=Kt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Iu(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function Af(t,r,o){return Mr&21?(en(o,r)||(o=oh(),Ke.lanes|=o,Fr|=o,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=o)}function wy(t,r){var o=Le;Le=o!==0&&4>o?o:4,t(!0);var a=Tu.transition;Tu.transition={};try{t(!1),r()}finally{Le=o,Tu.transition=a}}function Of(){return Kt().memoizedState}function Ey(t,r,o){var a=ar(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Df(t))bf(r,o);else if(o=cf(t,r,o,a),o!==null){var c=xt();on(o,t,a,c),Lf(o,r,a)}}function Sy(t,r,o){var a=ar(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Df(t))bf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var m=r.lastRenderedState,y=h(m,o);if(c.hasEagerState=!0,c.eagerState=y,en(y,m)){var S=r.interleaved;S===null?(c.next=c,_u(r)):(c.next=S.next,S.next=c),r.interleaved=c;return}}catch{}finally{}o=cf(t,r,c,a),o!==null&&(c=xt(),on(o,t,a,c),Lf(o,r,a))}}function Df(t){var r=t.alternate;return t===Ke||r!==null&&r===Ke}function bf(t,r){Ns=ol=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Lf(t,r,o){if(o&4194240){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,Da(t,o)}}var ul={readContext:Yt,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useInsertionEffect:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useMutableSource:Ct,useSyncExternalStore:Ct,useId:Ct,unstable_isNewReconciler:!1},Cy={readContext:Yt,useCallback:function(t,r){return Sn().memoizedState=[t,r===void 0?null:r],t},useContext:Yt,useEffect:Tf,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,ll(4194308,4,Rf.bind(null,r,t),o)},useLayoutEffect:function(t,r){return ll(4194308,4,t,r)},useInsertionEffect:function(t,r){return ll(4,2,t,r)},useMemo:function(t,r){var o=Sn();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=Sn();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=Ey.bind(null,Ke,t),[a.memoizedState,t]},useRef:function(t){var r=Sn();return t={current:t},r.memoizedState=t},useState:Sf,useDebugValue:Au,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=Sf(!1),r=t[0];return t=wy.bind(null,t[1]),Sn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=Ke,c=Sn();if($e){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),ct===null)throw Error(n(349));Mr&30||vf(a,r,o)}c.memoizedState=o;var h={value:o,getSnapshot:r};return c.queue=h,Tf(yf.bind(null,a,h,t),[t]),a.flags|=2048,Os(9,_f.bind(null,a,h,o,r),void 0,null),o},useId:function(){var t=Sn(),r=ct.identifierPrefix;if($e){var o=Dn,a=On;o=(a&~(1<<32-Zt(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ps++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=yy++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Ty={readContext:Yt,useCallback:Nf,useContext:Yt,useEffect:Pu,useImperativeHandle:xf,useInsertionEffect:If,useLayoutEffect:kf,useMemo:Pf,useReducer:xu,useRef:Cf,useState:function(){return xu(As)},useDebugValue:Au,useDeferredValue:function(t){var r=Kt();return Af(r,ot.memoizedState,t)},useTransition:function(){var t=xu(As)[0],r=Kt().memoizedState;return[t,r]},useMutableSource:mf,useSyncExternalStore:gf,useId:Of,unstable_isNewReconciler:!1},Iy={readContext:Yt,useCallback:Nf,useContext:Yt,useEffect:Pu,useImperativeHandle:xf,useInsertionEffect:If,useLayoutEffect:kf,useMemo:Pf,useReducer:Nu,useRef:Cf,useState:function(){return Nu(As)},useDebugValue:Au,useDeferredValue:function(t){var r=Kt();return ot===null?r.memoizedState=t:Af(r,ot.memoizedState,t)},useTransition:function(){var t=Nu(As)[0],r=Kt().memoizedState;return[t,r]},useMutableSource:mf,useSyncExternalStore:gf,useId:Of,unstable_isNewReconciler:!1};function nn(t,r){if(t&&t.defaultProps){r=H({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Ou(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:H({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var cl={isMounted:function(t){return(t=t._reactInternals)?at(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=xt(),c=ar(t),h=Ln(a,c);h.payload=r,o!=null&&(h.callback=o),r=ir(t,h,c),r!==null&&(on(r,t,c,a),nl(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=xt(),c=ar(t),h=Ln(a,c);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=ir(t,h,c),r!==null&&(on(r,t,c,a),nl(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=xt(),a=ar(t),c=Ln(o,a);c.tag=2,r!=null&&(c.callback=r),r=ir(t,c,a),r!==null&&(on(r,t,a,o),nl(r,t,a))}};function Mf(t,r,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):r.prototype&&r.prototype.isPureReactComponent?!_s(o,a)||!_s(c,h):!0}function Ff(t,r,o){var a=!1,c=tr,h=r.contextType;return typeof h=="object"&&h!==null?h=Yt(h):(c=Ot(r)?Ar:St.current,a=r.contextTypes,h=(a=a!=null)?gi(t,c):tr),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=cl,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function Uf(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&cl.enqueueReplaceState(r,r.state,null)}function Du(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},yu(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=Yt(h):(h=Ot(r)?Ar:St.current,c.context=gi(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(Ou(t,r,h,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&cl.enqueueReplaceState(c,c.state,null),rl(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Ti(t,r){try{var o="",a=r;do o+=re(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function bu(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function Lu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var ky=typeof WeakMap=="function"?WeakMap:Map;function zf(t,r,o){o=Ln(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){vl||(vl=!0,Qu=a),Lu(t,r)},o}function jf(t,r,o){o=Ln(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){Lu(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Lu(t,r),typeof a!="function"&&(or===null?or=new Set([this]):or.add(this));var m=r.stack;this.componentDidCatch(r.value,{componentStack:m!==null?m:""})}),o}function Bf(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new ky;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=jy.bind(null,t,r,o),r.then(t,t))}function Vf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Wf(t,r,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Ln(-1,1),r.tag=2,ir(o,r,1))),o.lanes|=1),t)}var Ry=we.ReactCurrentOwner,Dt=!1;function Rt(t,r,o,a){r.child=t===null?uf(r,null,o,a):wi(r,t.child,o,a)}function Hf(t,r,o,a,c){o=o.render;var h=r.ref;return Si(r,c),a=ku(t,r,o,a,h,c),o=Ru(),t!==null&&!Dt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,Mn(t,r,c)):($e&&o&&uu(r),r.flags|=1,Rt(t,r,a,c),r.child)}function $f(t,r,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!rc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,Gf(t,r,h,a,c)):(t=Cl(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:_s,o(m,a)&&t.ref===r.ref)return Mn(t,r,c)}return r.flags|=1,t=cr(h,a),t.ref=r.ref,t.return=r,r.child=t}function Gf(t,r,o,a,c){if(t!==null){var h=t.memoizedProps;if(_s(h,a)&&t.ref===r.ref)if(Dt=!1,r.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(Dt=!0);else return r.lanes=t.lanes,Mn(t,r,c)}return Mu(t,r,o,a,c)}function qf(t,r,o){var a=r.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(ki,Wt),Wt|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,je(ki,Wt),Wt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,je(ki,Wt),Wt|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,je(ki,Wt),Wt|=a;return Rt(t,r,c,o),r.child}function Yf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Mu(t,r,o,a,c){var h=Ot(o)?Ar:St.current;return h=gi(r,h),Si(r,c),o=ku(t,r,o,a,h,c),a=Ru(),t!==null&&!Dt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,Mn(t,r,c)):($e&&a&&uu(r),r.flags|=1,Rt(t,r,o,c),r.child)}function Kf(t,r,o,a,c){if(Ot(o)){var h=!0;Yo(r)}else h=!1;if(Si(r,c),r.stateNode===null)hl(t,r),Ff(r,o,a),Du(r,o,a,c),a=!0;else if(t===null){var m=r.stateNode,y=r.memoizedProps;m.props=y;var S=m.context,x=o.contextType;typeof x=="object"&&x!==null?x=Yt(x):(x=Ot(o)?Ar:St.current,x=gi(r,x));var L=o.getDerivedStateFromProps,M=typeof L=="function"||typeof m.getSnapshotBeforeUpdate=="function";M||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==a||S!==x)&&Uf(r,m,a,x),rr=!1;var b=r.memoizedState;m.state=b,rl(r,a,m,c),S=r.memoizedState,y!==a||b!==S||At.current||rr?(typeof L=="function"&&(Ou(r,o,L,a),S=r.memoizedState),(y=rr||Mf(r,o,y,a,b,S,x))?(M||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=S),m.props=a,m.state=S,m.context=x,a=y):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{m=r.stateNode,df(t,r),y=r.memoizedProps,x=r.type===r.elementType?y:nn(r.type,y),m.props=x,M=r.pendingProps,b=m.context,S=o.contextType,typeof S=="object"&&S!==null?S=Yt(S):(S=Ot(o)?Ar:St.current,S=gi(r,S));var $=o.getDerivedStateFromProps;(L=typeof $=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==M||b!==S)&&Uf(r,m,a,S),rr=!1,b=r.memoizedState,m.state=b,rl(r,a,m,c);var Q=r.memoizedState;y!==M||b!==Q||At.current||rr?(typeof $=="function"&&(Ou(r,o,$,a),Q=r.memoizedState),(x=rr||Mf(r,o,x,a,b,Q,S)||!1)?(L||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,Q,S),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,Q,S)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&b===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&b===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=Q),m.props=a,m.state=Q,m.context=S,a=x):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&b===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&b===t.memoizedState||(r.flags|=1024),a=!1)}return Fu(t,r,o,a,h,c)}function Fu(t,r,o,a,c,h){Yf(t,r);var m=(r.flags&128)!==0;if(!a&&!m)return c&&Zh(r,o,!1),Mn(t,r,h);a=r.stateNode,Ry.current=r;var y=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&m?(r.child=wi(r,t.child,null,h),r.child=wi(r,null,y,h)):Rt(t,r,y,h),r.memoizedState=a.state,c&&Zh(r,o,!0),r.child}function Qf(t){var r=t.stateNode;r.pendingContext?Xh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Xh(t,r.context,!1),wu(t,r.containerInfo)}function Xf(t,r,o,a,c){return yi(),fu(c),r.flags|=256,Rt(t,r,o,a),r.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jf(t,r,o){var a=r.pendingProps,c=Ye.current,h=!1,m=(r.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(c&2)!==0),y?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),je(Ye,c&1),t===null)return hu(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(m=a.children,t=a.fallback,h?(a=r.mode,h=r.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Tl(m,a,0,null),t=Br(t,a,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=zu(o),r.memoizedState=Uu,t):ju(r,m));if(c=t.memoizedState,c!==null&&(y=c.dehydrated,y!==null))return xy(t,r,m,a,y,c,o);if(h){h=a.fallback,m=r.mode,c=t.child,y=c.sibling;var S={mode:"hidden",children:a.children};return!(m&1)&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=S,r.deletions=null):(a=cr(c,S),a.subtreeFlags=c.subtreeFlags&14680064),y!==null?h=cr(y,h):(h=Br(h,m,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,m=t.child.memoizedState,m=m===null?zu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,r.memoizedState=Uu,a}return h=t.child,t=h.sibling,a=cr(h,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function ju(t,r){return r=Tl({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function dl(t,r,o,a){return a!==null&&fu(a),wi(r,t.child,null,o),t=ju(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function xy(t,r,o,a,c,h,m){if(o)return r.flags&256?(r.flags&=-257,a=bu(Error(n(422))),dl(t,r,m,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=a.fallback,c=r.mode,a=Tl({mode:"visible",children:a.children},c,0,null),h=Br(h,c,m,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,r.mode&1&&wi(r,t.child,null,m),r.child.memoizedState=zu(m),r.memoizedState=Uu,h);if(!(r.mode&1))return dl(t,r,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var y=a.dgst;return a=y,h=Error(n(419)),a=bu(h,a,void 0),dl(t,r,m,a)}if(y=(m&t.childLanes)!==0,Dt||y){if(a=ct,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,bn(t,c),on(a,t,c,-1))}return nc(),a=bu(Error(n(421))),dl(t,r,m,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=By.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,Vt=Zn(c.nextSibling),Bt=r,$e=!0,tn=null,t!==null&&(Gt[qt++]=On,Gt[qt++]=Dn,Gt[qt++]=Or,On=t.id,Dn=t.overflow,Or=r),r=ju(r,a.children),r.flags|=4096,r)}function Zf(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),vu(t.return,r,o)}function Bu(t,r,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function ep(t,r,o){var a=r.pendingProps,c=a.revealOrder,h=a.tail;if(Rt(t,r,a.children,o),a=Ye.current,a&2)a=a&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zf(t,o,r);else if(t.tag===19)Zf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(je(Ye,a),!(r.mode&1))r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&il(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),Bu(r,!1,c,o,h);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&il(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Bu(r,!0,o,null,h);break;case"together":Bu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function hl(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Mn(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),Fr|=r.lanes,!(o&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=cr(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=cr(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function Ny(t,r,o){switch(r.tag){case 3:Qf(r),yi();break;case 5:pf(r);break;case 1:Ot(r.type)&&Yo(r);break;case 4:wu(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;je(el,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(je(Ye,Ye.current&1),r.flags|=128,null):o&r.child.childLanes?Jf(t,r,o):(je(Ye,Ye.current&1),t=Mn(t,r,o),t!==null?t.sibling:null);je(Ye,Ye.current&1);break;case 19:if(a=(o&r.childLanes)!==0,t.flags&128){if(a)return ep(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),je(Ye,Ye.current),a)break;return null;case 22:case 23:return r.lanes=0,qf(t,r,o)}return Mn(t,r,o)}var tp,Vu,np,rp;tp=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Vu=function(){},np=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,Lr(En.current);var h=null;switch(o){case"input":c=pe(t,c),a=pe(t,a),h=[];break;case"select":c=H({},c,{value:void 0}),a=H({},a,{value:void 0}),h=[];break;case"textarea":c=mn(t,c),a=mn(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=$o)}Zi(o,a);var m;o=null;for(x in c)if(!a.hasOwnProperty(x)&&c.hasOwnProperty(x)&&c[x]!=null)if(x==="style"){var y=c[x];for(m in y)y.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(l.hasOwnProperty(x)?h||(h=[]):(h=h||[]).push(x,null));for(x in a){var S=a[x];if(y=c!=null?c[x]:void 0,a.hasOwnProperty(x)&&S!==y&&(S!=null||y!=null))if(x==="style")if(y){for(m in y)!y.hasOwnProperty(m)||S&&S.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in S)S.hasOwnProperty(m)&&y[m]!==S[m]&&(o||(o={}),o[m]=S[m])}else o||(h||(h=[]),h.push(x,o)),o=S;else x==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,y=y?y.__html:void 0,S!=null&&y!==S&&(h=h||[]).push(x,S)):x==="children"?typeof S!="string"&&typeof S!="number"||(h=h||[]).push(x,""+S):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(l.hasOwnProperty(x)?(S!=null&&x==="onScroll"&&We("scroll",t),h||y===S||(h=[])):(h=h||[]).push(x,S))}o&&(h=h||[]).push("style",o);var x=h;(r.updateQueue=x)&&(r.flags|=4)}},rp=function(t,r,o,a){o!==a&&(r.flags|=4)};function Ds(t,r){if(!$e)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Tt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function Py(t,r,o){var a=r.pendingProps;switch(cu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(r),null;case 1:return Ot(r.type)&&qo(),Tt(r),null;case 3:return a=r.stateNode,Ci(),He(At),He(St),Cu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,tn!==null&&(Zu(tn),tn=null))),Vu(t,r),Tt(r),null;case 5:Eu(r);var c=Lr(xs.current);if(o=r.type,t!==null&&r.stateNode!=null)np(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return Tt(r),null}if(t=Lr(En.current),Jo(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[wn]=r,a[Cs]=h,t=(r.mode&1)!==0,o){case"dialog":We("cancel",a),We("close",a);break;case"iframe":case"object":case"embed":We("load",a);break;case"video":case"audio":for(c=0;c<ws.length;c++)We(ws[c],a);break;case"source":We("error",a);break;case"img":case"image":case"link":We("error",a),We("load",a);break;case"details":We("toggle",a);break;case"input":Ze(a,h),We("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},We("invalid",a);break;case"textarea":ii(a,h),We("invalid",a)}Zi(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var y=h[m];m==="children"?typeof y=="string"?a.textContent!==y&&(h.suppressHydrationWarning!==!0&&Ho(a.textContent,y,t),c=["children",y]):typeof y=="number"&&a.textContent!==""+y&&(h.suppressHydrationWarning!==!0&&Ho(a.textContent,y,t),c=["children",""+y]):l.hasOwnProperty(m)&&y!=null&&m==="onScroll"&&We("scroll",a)}switch(o){case"input":wt(a),Ir(a,h,!0);break;case"textarea":wt(a),Ji(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=$o)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yo(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[wn]=r,t[Cs]=a,tp(t,r,!1,!1),r.stateNode=t;e:{switch(m=es(o,a),o){case"dialog":We("cancel",t),We("close",t),c=a;break;case"iframe":case"object":case"embed":We("load",t),c=a;break;case"video":case"audio":for(c=0;c<ws.length;c++)We(ws[c],t);c=a;break;case"source":We("error",t),c=a;break;case"img":case"image":case"link":We("error",t),We("load",t),c=a;break;case"details":We("toggle",t),c=a;break;case"input":Ze(t,a),c=pe(t,a),We("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=H({},a,{value:void 0}),We("invalid",t);break;case"textarea":ii(t,a),c=mn(t,a),We("invalid",t);break;default:c=a}Zi(o,c),y=c;for(h in y)if(y.hasOwnProperty(h)){var S=y[h];h==="style"?Eo(t,S):h==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&kr(t,S)):h==="children"?typeof S=="string"?(o!=="textarea"||S!=="")&&Rr(t,S):typeof S=="number"&&Rr(t,""+S):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?S!=null&&h==="onScroll"&&We("scroll",t):S!=null&&T(t,h,S,m))}switch(o){case"input":wt(t),Ir(t,a,!1);break;case"textarea":wt(t),Ji(t);break;case"option":a.value!=null&&t.setAttribute("value",""+ie(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?xn(t,!!a.multiple,h,!1):a.defaultValue!=null&&xn(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=$o)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Tt(r),null;case 6:if(t&&r.stateNode!=null)rp(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=Lr(xs.current),Lr(En.current),Jo(r)){if(a=r.stateNode,o=r.memoizedProps,a[wn]=r,(h=a.nodeValue!==o)&&(t=Bt,t!==null))switch(t.tag){case 3:Ho(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ho(a.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[wn]=r,r.stateNode=a}return Tt(r),null;case 13:if(He(Ye),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($e&&Vt!==null&&r.mode&1&&!(r.flags&128))of(),yi(),r.flags|=98560,h=!1;else if(h=Jo(r),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[wn]=r}else yi(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Tt(r),h=!1}else tn!==null&&(Zu(tn),tn=null),h=!0;if(!h)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(t===null||Ye.current&1?lt===0&&(lt=3):nc())),r.updateQueue!==null&&(r.flags|=4),Tt(r),null);case 4:return Ci(),Vu(t,r),t===null&&Es(r.stateNode.containerInfo),Tt(r),null;case 10:return gu(r.type._context),Tt(r),null;case 17:return Ot(r.type)&&qo(),Tt(r),null;case 19:if(He(Ye),h=r.memoizedState,h===null)return Tt(r),null;if(a=(r.flags&128)!==0,m=h.rendering,m===null)if(a)Ds(h,!1);else{if(lt!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(m=il(t),m!==null){for(r.flags|=128,Ds(h,!1),a=m.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return je(Ye,Ye.current&1|2),r.child}t=t.sibling}h.tail!==null&&tt()>Ri&&(r.flags|=128,a=!0,Ds(h,!1),r.lanes=4194304)}else{if(!a)if(t=il(m),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Ds(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!$e)return Tt(r),null}else 2*tt()-h.renderingStartTime>Ri&&o!==1073741824&&(r.flags|=128,a=!0,Ds(h,!1),r.lanes=4194304);h.isBackwards?(m.sibling=r.child,r.child=m):(o=h.last,o!==null?o.sibling=m:r.child=m,h.last=m)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=tt(),r.sibling=null,o=Ye.current,je(Ye,a?o&1|2:o&1),r):(Tt(r),null);case 22:case 23:return tc(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?Wt&1073741824&&(Tt(r),r.subtreeFlags&6&&(r.flags|=8192)):Tt(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function Ay(t,r){switch(cu(r),r.tag){case 1:return Ot(r.type)&&qo(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ci(),He(At),He(St),Cu(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return Eu(r),null;case 13:if(He(Ye),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));yi()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return He(Ye),null;case 4:return Ci(),null;case 10:return gu(r.type._context),null;case 22:case 23:return tc(),null;case 24:return null;default:return null}}var fl=!1,It=!1,Oy=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Ii(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Qe(t,r,a)}else o.current=null}function Wu(t,r,o){try{o()}catch(a){Qe(t,r,a)}}var ip=!1;function Dy(t,r){if(tu=Do,t=Lh(),qa(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,y=-1,S=-1,x=0,L=0,M=t,b=null;t:for(;;){for(var $;M!==o||c!==0&&M.nodeType!==3||(y=m+c),M!==h||a!==0&&M.nodeType!==3||(S=m+a),M.nodeType===3&&(m+=M.nodeValue.length),($=M.firstChild)!==null;)b=M,M=$;for(;;){if(M===t)break t;if(b===o&&++x===c&&(y=m),b===h&&++L===a&&(S=m),($=M.nextSibling)!==null)break;M=b,b=M.parentNode}M=$}o=y===-1||S===-1?null:{start:y,end:S}}else o=null}o=o||{start:0,end:0}}else o=null;for(nu={focusedElem:t,selectionRange:o},Do=!1,Y=r;Y!==null;)if(r=Y,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,Y=t;else for(;Y!==null;){r=Y;try{var Q=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var X=Q.memoizedProps,nt=Q.memoizedState,k=r.stateNode,C=k.getSnapshotBeforeUpdate(r.elementType===r.type?X:nn(r.type,X),nt);k.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var R=r.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(z){Qe(r,r.return,z)}if(t=r.sibling,t!==null){t.return=r.return,Y=t;break}Y=r.return}return Q=ip,ip=!1,Q}function bs(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Wu(r,o,h)}c=c.next}while(c!==a)}}function pl(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function Hu(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function sp(t){var r=t.alternate;r!==null&&(t.alternate=null,sp(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[wn],delete r[Cs],delete r[ou],delete r[my],delete r[gy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function op(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||op(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=$o));else if(a!==4&&(t=t.child,t!==null))for($u(t,r,o),t=t.sibling;t!==null;)$u(t,r,o),t=t.sibling}function Gu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Gu(t,r,o),t=t.sibling;t!==null;)Gu(t,r,o),t=t.sibling}var gt=null,rn=!1;function sr(t,r,o){for(o=o.child;o!==null;)ap(t,r,o),o=o.sibling}function ap(t,r,o){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Ro,o)}catch{}switch(o.tag){case 5:It||Ii(o,r);case 6:var a=gt,c=rn;gt=null,sr(t,r,o),gt=a,rn=c,gt!==null&&(rn?(t=gt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):gt.removeChild(o.stateNode));break;case 18:gt!==null&&(rn?(t=gt,o=o.stateNode,t.nodeType===8?su(t.parentNode,o):t.nodeType===1&&su(t,o),hs(t)):su(gt,o.stateNode));break;case 4:a=gt,c=rn,gt=o.stateNode.containerInfo,rn=!0,sr(t,r,o),gt=a,rn=c;break;case 0:case 11:case 14:case 15:if(!It&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&Wu(o,r,m),c=c.next}while(c!==a)}sr(t,r,o);break;case 1:if(!It&&(Ii(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(y){Qe(o,r,y)}sr(t,r,o);break;case 21:sr(t,r,o);break;case 22:o.mode&1?(It=(a=It)||o.memoizedState!==null,sr(t,r,o),It=a):sr(t,r,o);break;default:sr(t,r,o)}}function up(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Oy),r.forEach(function(a){var c=Vy.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function sn(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=r,y=m;e:for(;y!==null;){switch(y.tag){case 5:gt=y.stateNode,rn=!1;break e;case 3:gt=y.stateNode.containerInfo,rn=!0;break e;case 4:gt=y.stateNode.containerInfo,rn=!0;break e}y=y.return}if(gt===null)throw Error(n(160));ap(h,m,c),gt=null,rn=!1;var S=c.alternate;S!==null&&(S.return=null),c.return=null}catch(x){Qe(c,r,x)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)cp(r,t),r=r.sibling}function cp(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(sn(r,t),Cn(t),a&4){try{bs(3,t,t.return),pl(3,t)}catch(X){Qe(t,t.return,X)}try{bs(5,t,t.return)}catch(X){Qe(t,t.return,X)}}break;case 1:sn(r,t),Cn(t),a&512&&o!==null&&Ii(o,o.return);break;case 5:if(sn(r,t),Cn(t),a&512&&o!==null&&Ii(o,o.return),t.flags&32){var c=t.stateNode;try{Rr(c,"")}catch(X){Qe(t,t.return,X)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,y=t.type,S=t.updateQueue;if(t.updateQueue=null,S!==null)try{y==="input"&&h.type==="radio"&&h.name!=null&&kt(c,h),es(y,m);var x=es(y,h);for(m=0;m<S.length;m+=2){var L=S[m],M=S[m+1];L==="style"?Eo(c,M):L==="dangerouslySetInnerHTML"?kr(c,M):L==="children"?Rr(c,M):T(c,L,M,x)}switch(y){case"input":zt(c,h);break;case"textarea":_o(c,h);break;case"select":var b=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var $=h.value;$!=null?xn(c,!!h.multiple,$,!1):b!==!!h.multiple&&(h.defaultValue!=null?xn(c,!!h.multiple,h.defaultValue,!0):xn(c,!!h.multiple,h.multiple?[]:"",!1))}c[Cs]=h}catch(X){Qe(t,t.return,X)}}break;case 6:if(sn(r,t),Cn(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(X){Qe(t,t.return,X)}}break;case 3:if(sn(r,t),Cn(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{hs(r.containerInfo)}catch(X){Qe(t,t.return,X)}break;case 4:sn(r,t),Cn(t);break;case 13:sn(r,t),Cn(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Ku=tt())),a&4&&up(t);break;case 22:if(L=o!==null&&o.memoizedState!==null,t.mode&1?(It=(x=It)||L,sn(r,t),It=x):sn(r,t),Cn(t),a&8192){if(x=t.memoizedState!==null,(t.stateNode.isHidden=x)&&!L&&t.mode&1)for(Y=t,L=t.child;L!==null;){for(M=Y=L;Y!==null;){switch(b=Y,$=b.child,b.tag){case 0:case 11:case 14:case 15:bs(4,b,b.return);break;case 1:Ii(b,b.return);var Q=b.stateNode;if(typeof Q.componentWillUnmount=="function"){a=b,o=b.return;try{r=a,Q.props=r.memoizedProps,Q.state=r.memoizedState,Q.componentWillUnmount()}catch(X){Qe(a,o,X)}}break;case 5:Ii(b,b.return);break;case 22:if(b.memoizedState!==null){fp(M);continue}}$!==null?($.return=b,Y=$):fp(M)}L=L.sibling}e:for(L=null,M=t;;){if(M.tag===5){if(L===null){L=M;try{c=M.stateNode,x?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(y=M.stateNode,S=M.memoizedProps.style,m=S!=null&&S.hasOwnProperty("display")?S.display:null,y.style.display=wo("display",m))}catch(X){Qe(t,t.return,X)}}}else if(M.tag===6){if(L===null)try{M.stateNode.nodeValue=x?"":M.memoizedProps}catch(X){Qe(t,t.return,X)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===t)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===t)break e;for(;M.sibling===null;){if(M.return===null||M.return===t)break e;L===M&&(L=null),M=M.return}L===M&&(L=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:sn(r,t),Cn(t),a&4&&up(t);break;case 21:break;default:sn(r,t),Cn(t)}}function Cn(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(op(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Rr(c,""),a.flags&=-33);var h=lp(t);Gu(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,y=lp(t);$u(t,y,m);break;default:throw Error(n(161))}}catch(S){Qe(t,t.return,S)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function by(t,r,o){Y=t,dp(t)}function dp(t,r,o){for(var a=(t.mode&1)!==0;Y!==null;){var c=Y,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||fl;if(!m){var y=c.alternate,S=y!==null&&y.memoizedState!==null||It;y=fl;var x=It;if(fl=m,(It=S)&&!x)for(Y=c;Y!==null;)m=Y,S=m.child,m.tag===22&&m.memoizedState!==null?pp(c):S!==null?(S.return=m,Y=S):pp(c);for(;h!==null;)Y=h,dp(h),h=h.sibling;Y=c,fl=y,It=x}hp(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,Y=h):hp(t)}}function hp(t){for(;Y!==null;){var r=Y;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:It||pl(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!It)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:nn(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&ff(r,h,a);break;case 3:var m=r.updateQueue;if(m!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}ff(r,m,o)}break;case 5:var y=r.stateNode;if(o===null&&r.flags&4){o=y;var S=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&o.focus();break;case"img":S.src&&(o.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var x=r.alternate;if(x!==null){var L=x.memoizedState;if(L!==null){var M=L.dehydrated;M!==null&&hs(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}It||r.flags&512&&Hu(r)}catch(b){Qe(r,r.return,b)}}if(r===t){Y=null;break}if(o=r.sibling,o!==null){o.return=r.return,Y=o;break}Y=r.return}}function fp(t){for(;Y!==null;){var r=Y;if(r===t){Y=null;break}var o=r.sibling;if(o!==null){o.return=r.return,Y=o;break}Y=r.return}}function pp(t){for(;Y!==null;){var r=Y;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{pl(4,r)}catch(S){Qe(r,o,S)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(S){Qe(r,c,S)}}var h=r.return;try{Hu(r)}catch(S){Qe(r,h,S)}break;case 5:var m=r.return;try{Hu(r)}catch(S){Qe(r,m,S)}}}catch(S){Qe(r,r.return,S)}if(r===t){Y=null;break}var y=r.sibling;if(y!==null){y.return=r.return,Y=y;break}Y=r.return}}var Ly=Math.ceil,ml=we.ReactCurrentDispatcher,qu=we.ReactCurrentOwner,Qt=we.ReactCurrentBatchConfig,Pe=0,ct=null,st=null,vt=0,Wt=0,ki=er(0),lt=0,Ls=null,Fr=0,gl=0,Yu=0,Ms=null,bt=null,Ku=0,Ri=1/0,Fn=null,vl=!1,Qu=null,or=null,_l=!1,lr=null,yl=0,Fs=0,Xu=null,wl=-1,El=0;function xt(){return Pe&6?tt():wl!==-1?wl:wl=tt()}function ar(t){return t.mode&1?Pe&2&&vt!==0?vt&-vt:_y.transition!==null?(El===0&&(El=oh()),El):(t=Le,t!==0||(t=window.event,t=t===void 0?16:mh(t.type)),t):1}function on(t,r,o,a){if(50<Fs)throw Fs=0,Xu=null,Error(n(185));ls(t,o,a),(!(Pe&2)||t!==ct)&&(t===ct&&(!(Pe&2)&&(gl|=o),lt===4&&ur(t,vt)),Lt(t,a),o===1&&Pe===0&&!(r.mode&1)&&(Ri=tt()+500,Ko&&nr()))}function Lt(t,r){var o=t.callbackNode;__(t,r);var a=Po(t,t===ct?vt:0);if(a===0)o!==null&&rh(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&rh(o),r===1)t.tag===0?vy(gp.bind(null,t)):ef(gp.bind(null,t)),fy(function(){!(Pe&6)&&nr()}),o=null;else{switch(lh(a)){case 1:o=Pa;break;case 4:o=ih;break;case 16:o=ko;break;case 536870912:o=sh;break;default:o=ko}o=Tp(o,mp.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function mp(t,r){if(wl=-1,El=0,Pe&6)throw Error(n(327));var o=t.callbackNode;if(xi()&&t.callbackNode!==o)return null;var a=Po(t,t===ct?vt:0);if(a===0)return null;if(a&30||a&t.expiredLanes||r)r=Sl(t,a);else{r=a;var c=Pe;Pe|=2;var h=_p();(ct!==t||vt!==r)&&(Fn=null,Ri=tt()+500,zr(t,r));do try{Uy();break}catch(y){vp(t,y)}while(!0);mu(),ml.current=h,Pe=c,st!==null?r=0:(ct=null,vt=0,r=lt)}if(r!==0){if(r===2&&(c=Aa(t),c!==0&&(a=c,r=Ju(t,c))),r===1)throw o=Ls,zr(t,0),ur(t,a),Lt(t,tt()),o;if(r===6)ur(t,a);else{if(c=t.current.alternate,!(a&30)&&!My(c)&&(r=Sl(t,a),r===2&&(h=Aa(t),h!==0&&(a=h,r=Ju(t,h))),r===1))throw o=Ls,zr(t,0),ur(t,a),Lt(t,tt()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:jr(t,bt,Fn);break;case 3:if(ur(t,a),(a&130023424)===a&&(r=Ku+500-tt(),10<r)){if(Po(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){xt(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=iu(jr.bind(null,t,bt,Fn),r);break}jr(t,bt,Fn);break;case 4:if(ur(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var m=31-Zt(a);h=1<<m,m=r[m],m>c&&(c=m),a&=~h}if(a=c,a=tt()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Ly(a/1960))-a,10<a){t.timeoutHandle=iu(jr.bind(null,t,bt,Fn),a);break}jr(t,bt,Fn);break;case 5:jr(t,bt,Fn);break;default:throw Error(n(329))}}}return Lt(t,tt()),t.callbackNode===o?mp.bind(null,t):null}function Ju(t,r){var o=Ms;return t.current.memoizedState.isDehydrated&&(zr(t,r).flags|=256),t=Sl(t,r),t!==2&&(r=bt,bt=o,r!==null&&Zu(r)),t}function Zu(t){bt===null?bt=t:bt.push.apply(bt,t)}function My(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!en(h(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ur(t,r){for(r&=~Yu,r&=~gl,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Zt(r),a=1<<o;t[o]=-1,r&=~a}}function gp(t){if(Pe&6)throw Error(n(327));xi();var r=Po(t,0);if(!(r&1))return Lt(t,tt()),null;var o=Sl(t,r);if(t.tag!==0&&o===2){var a=Aa(t);a!==0&&(r=a,o=Ju(t,a))}if(o===1)throw o=Ls,zr(t,0),ur(t,r),Lt(t,tt()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,jr(t,bt,Fn),Lt(t,tt()),null}function ec(t,r){var o=Pe;Pe|=1;try{return t(r)}finally{Pe=o,Pe===0&&(Ri=tt()+500,Ko&&nr())}}function Ur(t){lr!==null&&lr.tag===0&&!(Pe&6)&&xi();var r=Pe;Pe|=1;var o=Qt.transition,a=Le;try{if(Qt.transition=null,Le=1,t)return t()}finally{Le=a,Qt.transition=o,Pe=r,!(Pe&6)&&nr()}}function tc(){Wt=ki.current,He(ki)}function zr(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,hy(o)),st!==null)for(o=st.return;o!==null;){var a=o;switch(cu(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&qo();break;case 3:Ci(),He(At),He(St),Cu();break;case 5:Eu(a);break;case 4:Ci();break;case 13:He(Ye);break;case 19:He(Ye);break;case 10:gu(a.type._context);break;case 22:case 23:tc()}o=o.return}if(ct=t,st=t=cr(t.current,null),vt=Wt=r,lt=0,Ls=null,Yu=gl=Fr=0,bt=Ms=null,br!==null){for(r=0;r<br.length;r++)if(o=br[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}br=null}return t}function vp(t,r){do{var o=st;try{if(mu(),sl.current=ul,ol){for(var a=Ke.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}ol=!1}if(Mr=0,ut=ot=Ke=null,Ns=!1,Ps=0,qu.current=null,o===null||o.return===null){lt=1,Ls=r,st=null;break}e:{var h=t,m=o.return,y=o,S=r;if(r=vt,y.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var x=S,L=y,M=L.tag;if(!(L.mode&1)&&(M===0||M===11||M===15)){var b=L.alternate;b?(L.updateQueue=b.updateQueue,L.memoizedState=b.memoizedState,L.lanes=b.lanes):(L.updateQueue=null,L.memoizedState=null)}var $=Vf(m);if($!==null){$.flags&=-257,Wf($,m,y,h,r),$.mode&1&&Bf(h,x,r),r=$,S=x;var Q=r.updateQueue;if(Q===null){var X=new Set;X.add(S),r.updateQueue=X}else Q.add(S);break e}else{if(!(r&1)){Bf(h,x,r),nc();break e}S=Error(n(426))}}else if($e&&y.mode&1){var nt=Vf(m);if(nt!==null){!(nt.flags&65536)&&(nt.flags|=256),Wf(nt,m,y,h,r),fu(Ti(S,y));break e}}h=S=Ti(S,y),lt!==4&&(lt=2),Ms===null?Ms=[h]:Ms.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var k=zf(h,S,r);hf(h,k);break e;case 1:y=S;var C=h.type,R=h.stateNode;if(!(h.flags&128)&&(typeof C.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(or===null||!or.has(R)))){h.flags|=65536,r&=-r,h.lanes|=r;var z=jf(h,y,r);hf(h,z);break e}}h=h.return}while(h!==null)}wp(o)}catch(Z){r=Z,st===o&&o!==null&&(st=o=o.return);continue}break}while(!0)}function _p(){var t=ml.current;return ml.current=ul,t===null?ul:t}function nc(){(lt===0||lt===3||lt===2)&&(lt=4),ct===null||!(Fr&268435455)&&!(gl&268435455)||ur(ct,vt)}function Sl(t,r){var o=Pe;Pe|=2;var a=_p();(ct!==t||vt!==r)&&(Fn=null,zr(t,r));do try{Fy();break}catch(c){vp(t,c)}while(!0);if(mu(),Pe=o,ml.current=a,st!==null)throw Error(n(261));return ct=null,vt=0,lt}function Fy(){for(;st!==null;)yp(st)}function Uy(){for(;st!==null&&!u_();)yp(st)}function yp(t){var r=Cp(t.alternate,t,Wt);t.memoizedProps=t.pendingProps,r===null?wp(t):st=r,qu.current=null}function wp(t){var r=t;do{var o=r.alternate;if(t=r.return,r.flags&32768){if(o=Ay(o,r),o!==null){o.flags&=32767,st=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{lt=6,st=null;return}}else if(o=Py(o,r,Wt),o!==null){st=o;return}if(r=r.sibling,r!==null){st=r;return}st=r=t}while(r!==null);lt===0&&(lt=5)}function jr(t,r,o){var a=Le,c=Qt.transition;try{Qt.transition=null,Le=1,zy(t,r,o,a)}finally{Qt.transition=c,Le=a}return null}function zy(t,r,o,a){do xi();while(lr!==null);if(Pe&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(y_(t,h),t===ct&&(st=ct=null,vt=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||_l||(_l=!0,Tp(ko,function(){return xi(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Qt.transition,Qt.transition=null;var m=Le;Le=1;var y=Pe;Pe|=4,qu.current=null,Dy(t,o),cp(o,t),sy(nu),Do=!!tu,nu=tu=null,t.current=o,by(o),c_(),Pe=y,Le=m,Qt.transition=h}else t.current=o;if(_l&&(_l=!1,lr=t,yl=c),h=t.pendingLanes,h===0&&(or=null),f_(o.stateNode),Lt(t,tt()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(vl)throw vl=!1,t=Qu,Qu=null,t;return yl&1&&t.tag!==0&&xi(),h=t.pendingLanes,h&1?t===Xu?Fs++:(Fs=0,Xu=t):Fs=0,nr(),null}function xi(){if(lr!==null){var t=lh(yl),r=Qt.transition,o=Le;try{if(Qt.transition=null,Le=16>t?16:t,lr===null)var a=!1;else{if(t=lr,lr=null,yl=0,Pe&6)throw Error(n(331));var c=Pe;for(Pe|=4,Y=t.current;Y!==null;){var h=Y,m=h.child;if(Y.flags&16){var y=h.deletions;if(y!==null){for(var S=0;S<y.length;S++){var x=y[S];for(Y=x;Y!==null;){var L=Y;switch(L.tag){case 0:case 11:case 15:bs(8,L,h)}var M=L.child;if(M!==null)M.return=L,Y=M;else for(;Y!==null;){L=Y;var b=L.sibling,$=L.return;if(sp(L),L===x){Y=null;break}if(b!==null){b.return=$,Y=b;break}Y=$}}}var Q=h.alternate;if(Q!==null){var X=Q.child;if(X!==null){Q.child=null;do{var nt=X.sibling;X.sibling=null,X=nt}while(X!==null)}}Y=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,Y=m;else e:for(;Y!==null;){if(h=Y,h.flags&2048)switch(h.tag){case 0:case 11:case 15:bs(9,h,h.return)}var k=h.sibling;if(k!==null){k.return=h.return,Y=k;break e}Y=h.return}}var C=t.current;for(Y=C;Y!==null;){m=Y;var R=m.child;if(m.subtreeFlags&2064&&R!==null)R.return=m,Y=R;else e:for(m=C;Y!==null;){if(y=Y,y.flags&2048)try{switch(y.tag){case 0:case 11:case 15:pl(9,y)}}catch(Z){Qe(y,y.return,Z)}if(y===m){Y=null;break e}var z=y.sibling;if(z!==null){z.return=y.return,Y=z;break e}Y=y.return}}if(Pe=c,nr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Ro,t)}catch{}a=!0}return a}finally{Le=o,Qt.transition=r}}return!1}function Ep(t,r,o){r=Ti(o,r),r=zf(t,r,1),t=ir(t,r,1),r=xt(),t!==null&&(ls(t,1,r),Lt(t,r))}function Qe(t,r,o){if(t.tag===3)Ep(t,t,o);else for(;r!==null;){if(r.tag===3){Ep(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(or===null||!or.has(a))){t=Ti(o,t),t=jf(r,t,1),r=ir(r,t,1),t=xt(),r!==null&&(ls(r,1,t),Lt(r,t));break}}r=r.return}}function jy(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=xt(),t.pingedLanes|=t.suspendedLanes&o,ct===t&&(vt&o)===o&&(lt===4||lt===3&&(vt&130023424)===vt&&500>tt()-Ku?zr(t,0):Yu|=o),Lt(t,r)}function Sp(t,r){r===0&&(t.mode&1?(r=No,No<<=1,!(No&130023424)&&(No=4194304)):r=1);var o=xt();t=bn(t,r),t!==null&&(ls(t,r,o),Lt(t,o))}function By(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Sp(t,o)}function Vy(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),Sp(t,o)}var Cp;Cp=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||At.current)Dt=!0;else{if(!(t.lanes&o)&&!(r.flags&128))return Dt=!1,Ny(t,r,o);Dt=!!(t.flags&131072)}else Dt=!1,$e&&r.flags&1048576&&tf(r,Xo,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;hl(t,r),t=r.pendingProps;var c=gi(r,St.current);Si(r,o),c=ku(null,r,a,t,c,o);var h=Ru();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ot(a)?(h=!0,Yo(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,yu(r),c.updater=cl,r.stateNode=c,c._reactInternals=r,Du(r,a,t,o),r=Fu(null,r,a,!0,h,o)):(r.tag=0,$e&&h&&uu(r),Rt(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(hl(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=Hy(a),t=nn(a,t),c){case 0:r=Mu(null,r,a,t,o);break e;case 1:r=Kf(null,r,a,t,o);break e;case 11:r=Hf(null,r,a,t,o);break e;case 14:r=$f(null,r,a,nn(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:nn(a,c),Mu(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:nn(a,c),Kf(t,r,a,c,o);case 3:e:{if(Qf(r),t===null)throw Error(n(387));a=r.pendingProps,h=r.memoizedState,c=h.element,df(t,r),rl(r,a,null,o);var m=r.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=Ti(Error(n(423)),r),r=Xf(t,r,a,o,c);break e}else if(a!==c){c=Ti(Error(n(424)),r),r=Xf(t,r,a,o,c);break e}else for(Vt=Zn(r.stateNode.containerInfo.firstChild),Bt=r,$e=!0,tn=null,o=uf(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(yi(),a===c){r=Mn(t,r,o);break e}Rt(t,r,a,o)}r=r.child}return r;case 5:return pf(r),t===null&&hu(r),a=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,ru(a,c)?m=null:h!==null&&ru(a,h)&&(r.flags|=32),Yf(t,r),Rt(t,r,m,o),r.child;case 6:return t===null&&hu(r),null;case 13:return Jf(t,r,o);case 4:return wu(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=wi(r,null,a,o):Rt(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:nn(a,c),Hf(t,r,a,c,o);case 7:return Rt(t,r,r.pendingProps,o),r.child;case 8:return Rt(t,r,r.pendingProps.children,o),r.child;case 12:return Rt(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,h=r.memoizedProps,m=c.value,je(el,a._currentValue),a._currentValue=m,h!==null)if(en(h.value,m)){if(h.children===c.children&&!At.current){r=Mn(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var y=h.dependencies;if(y!==null){m=h.child;for(var S=y.firstContext;S!==null;){if(S.context===a){if(h.tag===1){S=Ln(-1,o&-o),S.tag=2;var x=h.updateQueue;if(x!==null){x=x.shared;var L=x.pending;L===null?S.next=S:(S.next=L.next,L.next=S),x.pending=S}}h.lanes|=o,S=h.alternate,S!==null&&(S.lanes|=o),vu(h.return,o,r),y.lanes|=o;break}S=S.next}}else if(h.tag===10)m=h.type===r.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,y=m.alternate,y!==null&&(y.lanes|=o),vu(m,o,r),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===r){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}Rt(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,Si(r,o),c=Yt(c),a=a(c),r.flags|=1,Rt(t,r,a,o),r.child;case 14:return a=r.type,c=nn(a,r.pendingProps),c=nn(a.type,c),$f(t,r,a,c,o);case 15:return Gf(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:nn(a,c),hl(t,r),r.tag=1,Ot(a)?(t=!0,Yo(r)):t=!1,Si(r,o),Ff(r,a,c),Du(r,a,c,o),Fu(null,r,a,!0,t,o);case 19:return ep(t,r,o);case 22:return qf(t,r,o)}throw Error(n(156,r.tag))};function Tp(t,r){return nh(t,r)}function Wy(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,r,o,a){return new Wy(t,r,o,a)}function rc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hy(t){if(typeof t=="function")return rc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===B)return 11;if(t===be)return 14}return 2}function cr(t,r){var o=t.alternate;return o===null?(o=Xt(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Cl(t,r,o,a,c,h){var m=2;if(a=t,typeof t=="function")rc(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case ze:return Br(o.children,c,h,r);case _e:m=8,c|=8;break;case xe:return t=Xt(12,o,r,c|2),t.elementType=xe,t.lanes=h,t;case he:return t=Xt(13,o,r,c),t.elementType=he,t.lanes=h,t;case q:return t=Xt(19,o,r,c),t.elementType=q,t.lanes=h,t;case Ne:return Tl(o,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qe:m=10;break e;case ee:m=9;break e;case B:m=11;break e;case be:m=14;break e;case Me:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=Xt(m,o,r,c),r.elementType=t,r.type=a,r.lanes=h,r}function Br(t,r,o,a){return t=Xt(7,t,a,r),t.lanes=o,t}function Tl(t,r,o,a){return t=Xt(22,t,a,r),t.elementType=Ne,t.lanes=o,t.stateNode={isHidden:!1},t}function ic(t,r,o){return t=Xt(6,t,null,r),t.lanes=o,t}function sc(t,r,o){return r=Xt(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function $y(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oa(0),this.expirationTimes=Oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oa(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function oc(t,r,o,a,c,h,m,y,S){return t=new $y(t,r,o,y,S),r===1?(r=1,h===!0&&(r|=8)):r=0,h=Xt(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(h),t}function Gy(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function Ip(t){if(!t)return tr;t=t._reactInternals;e:{if(at(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ot(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Ot(o))return Jh(t,o,r)}return r}function kp(t,r,o,a,c,h,m,y,S){return t=oc(o,a,!0,t,c,h,m,y,S),t.context=Ip(null),o=t.current,a=xt(),c=ar(o),h=Ln(a,c),h.callback=r??null,ir(o,h,c),t.current.lanes=c,ls(t,c,a),Lt(t,a),t}function Il(t,r,o,a){var c=r.current,h=xt(),m=ar(c);return o=Ip(o),r.context===null?r.context=o:r.pendingContext=o,r=Ln(h,m),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=ir(c,r,m),t!==null&&(on(t,c,m,h),nl(t,c,m)),m}function kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function lc(t,r){Rp(t,r),(t=t.alternate)&&Rp(t,r)}var xp=typeof reportError=="function"?reportError:function(t){console.error(t)};function ac(t){this._internalRoot=t}Rl.prototype.render=ac.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Il(t,r,null,null)},Rl.prototype.unmount=ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Ur(function(){Il(null,t,null,null)}),r[Pn]=null}};function Rl(t){this._internalRoot=t}Rl.prototype.unstable_scheduleHydration=function(t){if(t){var r=ch();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Qn.length&&r!==0&&r<Qn[o].priority;o++);Qn.splice(o,0,t),o===0&&fh(t)}};function uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Np(){}function qy(t,r,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var x=kl(m);h.call(x)}}var m=kp(r,a,t,0,null,!1,!1,"",Np);return t._reactRootContainer=m,t[Pn]=m.current,Es(t.nodeType===8?t.parentNode:t),Ur(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var y=a;a=function(){var x=kl(S);y.call(x)}}var S=oc(t,0,!1,null,null,!1,!1,"",Np);return t._reactRootContainer=S,t[Pn]=S.current,Es(t.nodeType===8?t.parentNode:t),Ur(function(){Il(r,S,o,a)}),S}function Nl(t,r,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var y=c;c=function(){var S=kl(m);y.call(S)}}Il(r,m,t,c)}else m=qy(o,r,t,c,a);return kl(m)}ah=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=os(r.pendingLanes);o!==0&&(Da(r,o|1),Lt(r,tt()),!(Pe&6)&&(Ri=tt()+500,nr()))}break;case 13:Ur(function(){var a=bn(t,1);if(a!==null){var c=xt();on(a,t,1,c)}}),lc(t,1)}},ba=function(t){if(t.tag===13){var r=bn(t,134217728);if(r!==null){var o=xt();on(r,t,134217728,o)}lc(t,134217728)}},uh=function(t){if(t.tag===13){var r=ar(t),o=bn(t,r);if(o!==null){var a=xt();on(o,t,r,a)}lc(t,r)}},ch=function(){return Le},dh=function(t,r){var o=Le;try{return Le=t,r()}finally{Le=o}},ns=function(t,r,o){switch(r){case"input":if(zt(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=Go(a);if(!c)throw Error(n(90));Et(a),zt(a,c)}}}break;case"textarea":_o(t,o);break;case"select":r=o.value,r!=null&&xn(t,!!o.multiple,r,!1)}},Nr=ec,Io=Ur;var Yy={usingClientEntryPoint:!1,Events:[Ts,pi,Go,Co,To,ec]},Us={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ky={bundleType:Us.bundleType,version:Us.version,rendererPackageName:Us.rendererPackageName,rendererConfig:Us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=eh(t),t===null?null:t.stateNode},findFiberByHostInstance:Us.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{Ro=Pl.inject(Ky),yn=Pl}catch{}}return Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yy,Mt.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uc(r))throw Error(n(200));return Gy(t,r,null,o)},Mt.createRoot=function(t,r){if(!uc(t))throw Error(n(299));var o=!1,a="",c=xp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=oc(t,1,!1,null,null,o,!1,a,c),t[Pn]=r.current,Es(t.nodeType===8?t.parentNode:t),new ac(r)},Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=eh(r),t=t===null?null:t.stateNode,t},Mt.flushSync=function(t){return Ur(t)},Mt.hydrate=function(t,r,o){if(!xl(r))throw Error(n(200));return Nl(null,t,r,!0,o)},Mt.hydrateRoot=function(t,r,o){if(!uc(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=xp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),r=kp(r,null,t,1,o??null,c,!1,h,m),t[Pn]=r.current,Es(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new Rl(r)},Mt.render=function(t,r,o){if(!xl(r))throw Error(n(200));return Nl(null,t,r,!1,o)},Mt.unmountComponentAtNode=function(t){if(!xl(t))throw Error(n(40));return t._reactRootContainer?(Ur(function(){Nl(null,null,t,!1,function(){t._reactRootContainer=null,t[Pn]=null})}),!0):!1},Mt.unstable_batchedUpdates=ec,Mt.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!xl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Nl(t,r,o,!1,a)},Mt.version="18.3.1-next-f1338f8080-20240426",Mt}var Fp;function r0(){if(Fp)return hc.exports;Fp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),hc.exports=n0(),hc.exports}var Up;function i0(){if(Up)return Al;Up=1;var i=r0();return Al.createRoot=i.createRoot,Al.hydrateRoot=i.hydrateRoot,Al}var s0=i0();const o0="modulepreload",l0=function(i){return"/portfolio_web/"+i},zp={},Ht=function(e,n,s){let l=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));l=Promise.allSettled(n.map(p=>{if(p=l0(p),p in zp)return;zp[p]=!0;const g=p.endsWith(".css"),w=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${w}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":o0,g||(v.as="script"),v.crossOrigin="",v.href=p,f&&v.setAttribute("nonce",f),document.head.appendChild(v),g)return new Promise((_,A)=>{v.addEventListener("load",_),v.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(d){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=d,window.dispatchEvent(f),!f.defaultPrevented)throw d}return l.then(d=>{for(const f of d||[])f.status==="rejected"&&u(f.reason);return e().catch(u)})};var Ll={exports:{}},a0=Ll.exports,jp;function u0(){return jp||(jp=1,function(i,e){(function(n,s){i.exports=s()})(a0,function(){return function(n){function s(u){if(l[u])return l[u].exports;var d=l[u]={exports:{},id:u,loaded:!1};return n[u].call(d.exports,d,d.exports,s),d.loaded=!0,d.exports}var l={};return s.m=n,s.c=l,s.p="dist/",s(0)}([function(n,s,l){function u(q){return q&&q.__esModule?q:{default:q}}var d=Object.assign||function(q){for(var be=1;be<arguments.length;be++){var Me=arguments[be];for(var Ne in Me)Object.prototype.hasOwnProperty.call(Me,Ne)&&(q[Ne]=Me[Ne])}return q},f=l(1),p=(u(f),l(6)),g=u(p),w=l(7),v=u(w),_=l(8),A=u(_),D=l(9),F=u(D),G=l(10),fe=u(G),ye=l(11),T=u(ye),we=l(14),Ge=u(we),ge=[],ze=!1,_e={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},xe=function(){var q=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(q&&(ze=!0),ze)return ge=(0,T.default)(ge,_e),(0,fe.default)(ge,_e.once),ge},qe=function(){ge=(0,Ge.default)(),xe()},ee=function(){ge.forEach(function(q,be){q.node.removeAttribute("data-aos"),q.node.removeAttribute("data-aos-easing"),q.node.removeAttribute("data-aos-duration"),q.node.removeAttribute("data-aos-delay")})},B=function(q){return q===!0||q==="mobile"&&F.default.mobile()||q==="phone"&&F.default.phone()||q==="tablet"&&F.default.tablet()||typeof q=="function"&&q()===!0},he=function(q){_e=d(_e,q),ge=(0,Ge.default)();var be=document.all&&!window.atob;return B(_e.disable)||be?ee():(_e.disableMutationObserver||A.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),_e.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",_e.easing),document.querySelector("body").setAttribute("data-aos-duration",_e.duration),document.querySelector("body").setAttribute("data-aos-delay",_e.delay),_e.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?xe(!0):_e.startEvent==="load"?window.addEventListener(_e.startEvent,function(){xe(!0)}):document.addEventListener(_e.startEvent,function(){xe(!0)}),window.addEventListener("resize",(0,v.default)(xe,_e.debounceDelay,!0)),window.addEventListener("orientationchange",(0,v.default)(xe,_e.debounceDelay,!0)),window.addEventListener("scroll",(0,g.default)(function(){(0,fe.default)(ge,_e.once)},_e.throttleDelay)),_e.disableMutationObserver||A.default.ready("[data-aos]",qe),ge)};n.exports={init:he,refresh:xe,refreshHard:qe}},function(n,s){},,,,,function(n,s){(function(l){function u(B,he,q){function be(pe){var Ze=oe,kt=re;return oe=re=void 0,Oe=pe,W=B.apply(kt,Ze)}function Me(pe){return Oe=pe,ie=setTimeout(te,he),wt?be(pe):W}function Ne(pe){var Ze=pe-ve,kt=pe-Oe,zt=he-Ze;return Et?qe(zt,ne-kt):zt}function V(pe){var Ze=pe-ve,kt=pe-Oe;return ve===void 0||Ze>=he||Ze<0||Et&&kt>=ne}function te(){var pe=ee();return V(pe)?H(pe):void(ie=setTimeout(te,Ne(pe)))}function H(pe){return ie=void 0,Ie&&oe?be(pe):(oe=re=void 0,W)}function I(){ie!==void 0&&clearTimeout(ie),Oe=0,oe=ve=re=ie=void 0}function O(){return ie===void 0?W:H(ee())}function se(){var pe=ee(),Ze=V(pe);if(oe=arguments,re=this,ve=pe,Ze){if(ie===void 0)return Me(ve);if(Et)return ie=setTimeout(te,he),be(ve)}return ie===void 0&&(ie=setTimeout(te,he)),W}var oe,re,ne,W,ie,ve,Oe=0,wt=!1,Et=!1,Ie=!0;if(typeof B!="function")throw new TypeError(_);return he=w(he)||0,f(q)&&(wt=!!q.leading,Et="maxWait"in q,ne=Et?xe(w(q.maxWait)||0,he):ne,Ie="trailing"in q?!!q.trailing:Ie),se.cancel=I,se.flush=O,se}function d(B,he,q){var be=!0,Me=!0;if(typeof B!="function")throw new TypeError(_);return f(q)&&(be="leading"in q?!!q.leading:be,Me="trailing"in q?!!q.trailing:Me),u(B,he,{leading:be,maxWait:he,trailing:Me})}function f(B){var he=typeof B>"u"?"undefined":v(B);return!!B&&(he=="object"||he=="function")}function p(B){return!!B&&(typeof B>"u"?"undefined":v(B))=="object"}function g(B){return(typeof B>"u"?"undefined":v(B))=="symbol"||p(B)&&_e.call(B)==D}function w(B){if(typeof B=="number")return B;if(g(B))return A;if(f(B)){var he=typeof B.valueOf=="function"?B.valueOf():B;B=f(he)?he+"":he}if(typeof B!="string")return B===0?B:+B;B=B.replace(F,"");var q=fe.test(B);return q||ye.test(B)?T(B.slice(2),q?2:8):G.test(B)?A:+B}var v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},_="Expected a function",A=NaN,D="[object Symbol]",F=/^\s+|\s+$/g,G=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,ye=/^0o[0-7]+$/i,T=parseInt,we=(typeof l>"u"?"undefined":v(l))=="object"&&l&&l.Object===Object&&l,Ge=(typeof self>"u"?"undefined":v(self))=="object"&&self&&self.Object===Object&&self,ge=we||Ge||Function("return this")(),ze=Object.prototype,_e=ze.toString,xe=Math.max,qe=Math.min,ee=function(){return ge.Date.now()};n.exports=d}).call(s,function(){return this}())},function(n,s){(function(l){function u(ee,B,he){function q(Ie){var pe=se,Ze=oe;return se=oe=void 0,ve=Ie,ne=ee.apply(Ze,pe)}function be(Ie){return ve=Ie,W=setTimeout(V,B),Oe?q(Ie):ne}function Me(Ie){var pe=Ie-ie,Ze=Ie-ve,kt=B-pe;return wt?xe(kt,re-Ze):kt}function Ne(Ie){var pe=Ie-ie,Ze=Ie-ve;return ie===void 0||pe>=B||pe<0||wt&&Ze>=re}function V(){var Ie=qe();return Ne(Ie)?te(Ie):void(W=setTimeout(V,Me(Ie)))}function te(Ie){return W=void 0,Et&&se?q(Ie):(se=oe=void 0,ne)}function H(){W!==void 0&&clearTimeout(W),ve=0,se=ie=oe=W=void 0}function I(){return W===void 0?ne:te(qe())}function O(){var Ie=qe(),pe=Ne(Ie);if(se=arguments,oe=this,ie=Ie,pe){if(W===void 0)return be(ie);if(wt)return W=setTimeout(V,B),q(ie)}return W===void 0&&(W=setTimeout(V,B)),ne}var se,oe,re,ne,W,ie,ve=0,Oe=!1,wt=!1,Et=!0;if(typeof ee!="function")throw new TypeError(v);return B=g(B)||0,d(he)&&(Oe=!!he.leading,wt="maxWait"in he,re=wt?_e(g(he.maxWait)||0,B):re,Et="trailing"in he?!!he.trailing:Et),O.cancel=H,O.flush=I,O}function d(ee){var B=typeof ee>"u"?"undefined":w(ee);return!!ee&&(B=="object"||B=="function")}function f(ee){return!!ee&&(typeof ee>"u"?"undefined":w(ee))=="object"}function p(ee){return(typeof ee>"u"?"undefined":w(ee))=="symbol"||f(ee)&&ze.call(ee)==A}function g(ee){if(typeof ee=="number")return ee;if(p(ee))return _;if(d(ee)){var B=typeof ee.valueOf=="function"?ee.valueOf():ee;ee=d(B)?B+"":B}if(typeof ee!="string")return ee===0?ee:+ee;ee=ee.replace(D,"");var he=G.test(ee);return he||fe.test(ee)?ye(ee.slice(2),he?2:8):F.test(ee)?_:+ee}var w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(ee){return typeof ee}:function(ee){return ee&&typeof Symbol=="function"&&ee.constructor===Symbol&&ee!==Symbol.prototype?"symbol":typeof ee},v="Expected a function",_=NaN,A="[object Symbol]",D=/^\s+|\s+$/g,F=/^[-+]0x[0-9a-f]+$/i,G=/^0b[01]+$/i,fe=/^0o[0-7]+$/i,ye=parseInt,T=(typeof l>"u"?"undefined":w(l))=="object"&&l&&l.Object===Object&&l,we=(typeof self>"u"?"undefined":w(self))=="object"&&self&&self.Object===Object&&self,Ge=T||we||Function("return this")(),ge=Object.prototype,ze=ge.toString,_e=Math.max,xe=Math.min,qe=function(){return Ge.Date.now()};n.exports=u}).call(s,function(){return this}())},function(n,s){function l(w){var v=void 0,_=void 0;for(v=0;v<w.length;v+=1)if(_=w[v],_.dataset&&_.dataset.aos||_.children&&l(_.children))return!0;return!1}function u(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function d(){return!!u()}function f(w,v){var _=window.document,A=u(),D=new A(p);g=v,D.observe(_.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function p(w){w&&w.forEach(function(v){var _=Array.prototype.slice.call(v.addedNodes),A=Array.prototype.slice.call(v.removedNodes),D=_.concat(A);if(l(D))return g()})}Object.defineProperty(s,"__esModule",{value:!0});var g=function(){};s.default={isSupported:d,ready:f}},function(n,s){function l(_,A){if(!(_ instanceof A))throw new TypeError("Cannot call a class as a function")}function u(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var d=function(){function _(A,D){for(var F=0;F<D.length;F++){var G=D[F];G.enumerable=G.enumerable||!1,G.configurable=!0,"value"in G&&(G.writable=!0),Object.defineProperty(A,G.key,G)}}return function(A,D,F){return D&&_(A.prototype,D),F&&_(A,F),A}}(),f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,g=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,v=function(){function _(){l(this,_)}return d(_,[{key:"phone",value:function(){var A=u();return!(!f.test(A)&&!p.test(A.substr(0,4)))}},{key:"mobile",value:function(){var A=u();return!(!g.test(A)&&!w.test(A.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),_}();s.default=new v},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(d,f,p){var g=d.node.getAttribute("data-aos-once");f>d.position?d.node.classList.add("aos-animate"):typeof g<"u"&&(g==="false"||!p&&g!=="true")&&d.node.classList.remove("aos-animate")},u=function(d,f){var p=window.pageYOffset,g=window.innerHeight;d.forEach(function(w,v){l(w,g+p,f)})};s.default=u},function(n,s,l){function u(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(s,"__esModule",{value:!0});var d=l(12),f=u(d),p=function(g,w){return g.forEach(function(v,_){v.node.classList.add("aos-init"),v.position=(0,f.default)(v.node,w.offset)}),g};s.default=p},function(n,s,l){function u(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(s,"__esModule",{value:!0});var d=l(13),f=u(d),p=function(g,w){var v=0,_=0,A=window.innerHeight,D={offset:g.getAttribute("data-aos-offset"),anchor:g.getAttribute("data-aos-anchor"),anchorPlacement:g.getAttribute("data-aos-anchor-placement")};switch(D.offset&&!isNaN(D.offset)&&(_=parseInt(D.offset)),D.anchor&&document.querySelectorAll(D.anchor)&&(g=document.querySelectorAll(D.anchor)[0]),v=(0,f.default)(g).top,D.anchorPlacement){case"top-bottom":break;case"center-bottom":v+=g.offsetHeight/2;break;case"bottom-bottom":v+=g.offsetHeight;break;case"top-center":v+=A/2;break;case"bottom-center":v+=A/2+g.offsetHeight;break;case"center-center":v+=A/2+g.offsetHeight/2;break;case"top-top":v+=A;break;case"bottom-top":v+=g.offsetHeight+A;break;case"center-top":v+=g.offsetHeight/2+A}return D.anchorPlacement||D.offset||isNaN(w)||(_=w),v+_};s.default=p},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(u){for(var d=0,f=0;u&&!isNaN(u.offsetLeft)&&!isNaN(u.offsetTop);)d+=u.offsetLeft-(u.tagName!="BODY"?u.scrollLeft:0),f+=u.offsetTop-(u.tagName!="BODY"?u.scrollTop:0),u=u.offsetParent;return{top:f,left:d}};s.default=l},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var l=function(u){return u=u||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(u,function(d){return{node:d}})};s.default=l}])})}(Ll)),Ll.exports}var c0=u0();const d0=Jm(c0);var Zm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bp=Gr.createContext&&Gr.createContext(Zm),h0=["attr","size","title"];function f0(i,e){if(i==null)return{};var n=p0(i,e),s,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(l=0;l<u.length;l++)s=u[l],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(i,s)&&(n[s]=i[s])}return n}function p0(i,e){if(i==null)return{};var n={};for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){if(e.indexOf(s)>=0)continue;n[s]=i[s]}return n}function Bl(){return Bl=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=n[s])}return i},Bl.apply(this,arguments)}function Vp(i,e){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable})),n.push.apply(n,s)}return n}function Vl(i){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vp(Object(n),!0).forEach(function(s){m0(i,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):Vp(Object(n)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(n,s))})}return i}function m0(i,e,n){return e=g0(e),e in i?Object.defineProperty(i,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[e]=n,i}function g0(i){var e=v0(i,"string");return typeof e=="symbol"?e:e+""}function v0(i,e){if(typeof i!="object"||!i)return i;var n=i[Symbol.toPrimitive];if(n!==void 0){var s=n.call(i,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function eg(i){return i&&i.map((e,n)=>Gr.createElement(e.tag,Vl({key:n},e.attr),eg(e.child)))}function ti(i){return e=>Gr.createElement(_0,Bl({attr:Vl({},i.attr)},e),eg(i.child))}function _0(i){var e=n=>{var{attr:s,size:l,title:u}=i,d=f0(i,h0),f=l||n.size||"1em",p;return n.className&&(p=n.className),i.className&&(p=(p?p+" ":"")+i.className),Gr.createElement("svg",Bl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,d,{className:p,style:Vl(Vl({color:i.color||n.color},n.style),i.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&Gr.createElement("title",null,u),i.children)};return Bp!==void 0?Gr.createElement(Bp.Consumer,null,n=>e(n)):e(Zm)}function y0(i){return ti({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"},child:[]}]})(i)}function w0(i){return ti({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(i)}function E0(i){return ti({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(i)}function S0(i){return ti({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(i)}function C0(i){return ti({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(i)}function T0(i){return ti({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(i)}function I0(i){return ti({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"},child:[]}]})(i)}/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tg=(...i)=>i.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var R0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=Re.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...f},p)=>Re.createElement("svg",{ref:p,...R0,width:e,height:e,stroke:i,strokeWidth:s?Number(n)*24/Number(e):n,className:tg("lucide",l),...f},[...d.map(([g,w])=>Re.createElement(g,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=(i,e)=>{const n=Re.forwardRef(({className:s,...l},u)=>Re.createElement(x0,{ref:u,iconNode:e,className:tg(`lucide-${k0(i)}`,s),...l}));return n.displayName=`${i}`,n};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],P0=Zc("MessageCircle",N0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],O0=Zc("Sparkles",A0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],b0=Zc("X",D0),L0=[{icon:K.jsx(C0,{}),delay:0,link:"https://www.linkedin.com/in/ishan-nilaksha-686461308/"},{icon:K.jsx(w0,{}),delay:.1,link:"https://www.facebook.com"},{icon:K.jsx(S0,{}),delay:.2,link:"https://www.instagram.com/ishan_hatharasinghe/"},{icon:K.jsx(T0,{}),delay:.3,link:"https://wa.me/0703052181"},{icon:K.jsx(E0,{}),delay:.4,link:"https://github.com/ishanHatharasinghe"},{icon:K.jsx(y0,{}),delay:.5,link:"https://www.behance.net/ishannilaksha"},{icon:K.jsx(I0,{}),delay:.6,link:"https://www.fiverr.com/sellers/vector_ix/"}],M0=()=>{const[i,e]=Re.useState(!1),[n,s]=Re.useState(null),[l,u]=Re.useState({x:0,y:0}),[d,f]=Re.useState(!1),p=Re.useRef(null),g=v=>{const _=v.currentTarget.getBoundingClientRect();u({x:v.clientX-_.left,y:v.clientY-_.top})};Re.useEffect(()=>{function v(_){p.current&&!p.current.contains(_.target)&&e(!1)}return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[p]);const w=()=>{window.innerWidth<768&&setTimeout(()=>e(!1),300)};return K.jsxs(K.Fragment,{children:[i&&K.jsx("div",{className:"fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",onClick:()=>e(!1)}),K.jsx("div",{ref:p,className:"fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-50",children:K.jsxs("div",{className:"relative",children:[K.jsxs("button",{onClick:()=>e(!i),onMouseMove:g,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),className:`
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
            `,children:[K.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-all duration-500"}),K.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"}),d&&K.jsx("div",{className:"absolute pointer-events-none transition-all duration-300",style:{left:l.x,top:l.y,transform:"translate(-50%, -50%)"},children:K.jsx(O0,{className:"w-2 h-2 text-yellow-200 animate-spin"})}),K.jsx("div",{className:`
              relative z-10 flex items-center justify-center
              transform transition-all duration-700 ease-out
              ${i?"rotate-180 scale-100":"rotate-0 scale-100"}
            `,children:i?K.jsx(b0,{className:"w-4 h-4 sm:w-5 sm:h-5"}):K.jsx(P0,{className:"w-4 h-4 sm:w-5 sm:h-5"})}),K.jsx("div",{className:`
              absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-orange-400
              ${i?"animate-ping":""}
              transition-opacity duration-300
            `})]}),K.jsx("div",{className:`
            absolute top-14 sm:top-16 md:top-20 left-0
            transform transition-all duration-700 ease-out
            ${i?"opacity-100 translate-y-0 scale-100 translate-x-0":"opacity-0 -translate-y-8 scale-90 -translate-x-4 pointer-events-none"}
          `,children:K.jsxs("div",{className:`
              w-14 sm:w-16 md:w-18 p-2 space-y-2
              bg-gradient-to-b from-gray-900/95 via-black/95 to-gray-900/95
              backdrop-blur-2xl
              border border-orange-500/30
              rounded-2xl md:rounded-3xl
              shadow-2xl shadow-black/60
              relative
              overflow-hidden
            `,children:[K.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/5 animate-pulse"}),K.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-orange-400/5 to-transparent opacity-50"}),K.jsx("div",{className:"absolute top-2 right-2 w-1 h-1 bg-orange-400 rounded-full animate-bounce opacity-60",style:{animationDelay:"0s"}}),K.jsx("div",{className:"absolute bottom-4 left-3 w-0.5 h-0.5 bg-orange-300 rounded-full animate-bounce opacity-40",style:{animationDelay:"1s"}}),K.jsx("div",{className:"absolute top-1/2 right-1 w-0.5 h-0.5 bg-orange-500 rounded-full animate-bounce opacity-50",style:{animationDelay:"2s"}}),L0.map((v,_)=>K.jsxs("a",{href:v.link,target:"_blank",rel:"noopener noreferrer",onClick:w,onMouseEnter:()=>s(_),onMouseLeave:()=>s(null),className:`
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
                `,style:{animationDelay:`${v.delay}s`,animation:i?"slideInLeft 0.6s ease-out forwards":"none"},children:[K.jsx("div",{className:`
                  absolute inset-0 rounded-xl
                  bg-gradient-to-br from-orange-400/30 to-orange-600/30
                  opacity-0 group-hover/icon:opacity-100
                  transition-all duration-500
                  blur-sm group-hover/icon:blur-none
                `}),K.jsx("div",{className:`
                  absolute inset-0 rounded-xl
                  bg-gradient-to-tr from-white/10 to-transparent
                  opacity-0 group-hover/icon:opacity-100
                  transition-all duration-700
                `}),K.jsx("div",{className:`
                  relative z-10 flex items-center justify-center
                  transform group-hover/icon:rotate-12 group-hover/icon:scale-110
                  transition-all duration-500 ease-out
                  ${n===_?"animate-pulse":""}
                `,children:v.icon}),n===_&&K.jsxs(K.Fragment,{children:[K.jsx("div",{className:"absolute inset-0 rounded-xl bg-orange-500/20 animate-ping"}),K.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/20 to-orange-600/20 animate-pulse"})]}),K.jsx("div",{className:`
                  absolute inset-0 rounded-xl
                  border-2 border-orange-400/50
                  opacity-0 group-hover/icon:opacity-100
                  transition-all duration-300
                  animate-pulse
                `})]},_))]})})]})}),K.jsx("style",{jsx:!0,children:`
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
      `})]})},F0=()=>{};var Wp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(i,e){if(!i)throw Hi(e)},Hi=function(i){return new Error("Firebase Database ("+ng.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},U0=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],f=i[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,f=d?i[l+1]:0,p=l+2<i.length,g=p?i[l+2]:0,w=u>>2,v=(u&3)<<4|f>>4;let _=(f&15)<<2|g>>6,A=g&63;p||(A=64,d||(_=64)),s.push(n[w],n[v],n[_],n[A])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(rg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):U0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],f=l<i.length?n[i.charAt(l)]:0;++l;const g=l<i.length?n[i.charAt(l)]:64;++l;const v=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||f==null||g==null||v==null)throw new z0;const _=u<<2|f>>4;if(s.push(_),g!==64){const A=f<<4&240|g>>2;if(s.push(A),v!==64){const D=g<<6&192|v;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class z0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ig=function(i){const e=rg(i);return ed.encodeByteArray(e,!0)},Wl=function(i){return ig(i).replace(/\./g,"")},Hl=function(i){try{return ed.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(i){return sg(void 0,i)}function sg(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!B0(n)||(i[n]=sg(i[n],e[n]));return i}function B0(i){return i!=="__proto__"}/**
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
 */const W0=()=>V0().__FIREBASE_DEFAULTS__,H0=()=>{if(typeof process>"u"||typeof Wp>"u")return;const i=Wp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},$0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Hl(i[1]);return e&&JSON.parse(e)},td=()=>{try{return F0()||W0()||H0()||$0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},og=i=>{var e,n;return(n=(e=td())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},G0=i=>{const e=og(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},lg=()=>{var i;return(i=td())===null||i===void 0?void 0:i.config},ag=i=>{var e;return(e=td())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function $i(i){return i.endsWith(".cloudworkstations.dev")}async function ug(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function q0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Wl(JSON.stringify(n)),Wl(JSON.stringify(d)),""].join(".")}const $s={};function Y0(){const i={prod:[],emulator:[]};for(const e of Object.keys($s))$s[e]?i.emulator.push(e):i.prod.push(e);return i}function K0(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let Hp=!1;function cg(i,e){if(typeof window>"u"||typeof document>"u"||!$i(window.location.host)||$s[i]===e||$s[i]||Hp)return;$s[i]=e;function n(_){return`__firebase__banner__${_}`}const s="__firebase__banner",u=Y0().prod.length>0;function d(){const _=document.getElementById(s);_&&_.remove()}function f(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function p(_,A){_.setAttribute("width","24"),_.setAttribute("id",A),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function g(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Hp=!0,d()},_}function w(_,A){_.setAttribute("id",A),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function v(){const _=K0(s),A=n("text"),D=document.getElementById(A)||document.createElement("span"),F=n("learnmore"),G=document.getElementById(F)||document.createElement("a"),fe=n("preprendIcon"),ye=document.getElementById(fe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const T=_.element;f(T),w(G,F);const we=g();p(ye,fe),T.append(ye,D,G,we),document.body.appendChild(T)}u?(D.innerText="Preview backend disconnected.",ye.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function Q0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function X0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J0(){const i=Pt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function hg(){return ng.NODE_ADMIN===!0}function Z0(){try{return typeof indexedDB=="object"}catch{return!1}}function e1(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="FirebaseError";class Cr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=t1,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?n1(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new Cr(l,f,s)}}function n1(i,e){return i.replace(r1,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const r1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(i){return JSON.parse(i)}function mt(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=Js(Hl(u[0])||""),n=Js(Hl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},i1=function(i){const e=fg(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},s1=function(i){const e=fg(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Mi(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Nc(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function $l(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function Yr(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if($p(u)&&$p(d)){if(!Yr(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function $p(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const _=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(_<<1|_>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,w;for(let v=0;v<80;v++){v<40?v<20?(g=f^u&(d^f),w=1518500249):(g=u^d^f,w=1859775393):v<60?(g=u&d|f&(u|d),w=2400959708):(g=u^d^f,w=3395469782);const _=(l<<5|l>>>27)+g+p+w+s[v]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=_}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function l1(i,e){const n=new a1(i,e);return n.subscribe.bind(n)}class a1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");u1(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=mc),l.error===void 0&&(l.error=mc),l.complete===void 0&&(l.complete=mc);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function u1(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function mc(){}function ha(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,j(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},fa=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function $t(i){return i&&i._delegate?i._delegate:i}class Kr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vr="[DEFAULT]";/**
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
 */class d1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ao;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(f1(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:h1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function h1(i){return i===Vr?void 0:i}function f1(i){return i.instantiationMode==="EAGER"}/**
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
 */var Fe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Fe||(Fe={}));const m1={debug:Fe.DEBUG,verbose:Fe.VERBOSE,info:Fe.INFO,warn:Fe.WARN,error:Fe.ERROR,silent:Fe.SILENT},g1=Fe.INFO,v1={[Fe.DEBUG]:"log",[Fe.VERBOSE]:"log",[Fe.INFO]:"info",[Fe.WARN]:"warn",[Fe.ERROR]:"error"},_1=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=v1[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rd{constructor(e){this.name=e,this._logLevel=g1,this._logHandler=_1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Fe.DEBUG,...e),this._logHandler(this,Fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Fe.VERBOSE,...e),this._logHandler(this,Fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Fe.INFO,...e),this._logHandler(this,Fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Fe.WARN,...e),this._logHandler(this,Fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Fe.ERROR,...e),this._logHandler(this,Fe.ERROR,...e)}}const y1=(i,e)=>e.some(n=>i instanceof n);let Gp,qp;function w1(){return Gp||(Gp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function E1(){return qp||(qp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pg=new WeakMap,Pc=new WeakMap,mg=new WeakMap,gc=new WeakMap,id=new WeakMap;function S1(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(vr(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&pg.set(n,i)}).catch(()=>{}),id.set(e,i),e}function C1(i){if(Pc.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});Pc.set(i,e)}let Ac={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Pc.get(i);if(e==="objectStoreNames")return i.objectStoreNames||mg.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function T1(i){Ac=i(Ac)}function I1(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(vc(this),e,...n);return mg.set(s,e.sort?e.sort():[e]),vr(s)}:E1().includes(i)?function(...e){return i.apply(vc(this),e),vr(pg.get(this))}:function(...e){return vr(i.apply(vc(this),e))}}function k1(i){return typeof i=="function"?I1(i):(i instanceof IDBTransaction&&C1(i),y1(i,w1())?new Proxy(i,Ac):i)}function vr(i){if(i instanceof IDBRequest)return S1(i);if(gc.has(i))return gc.get(i);const e=k1(i);return e!==i&&(gc.set(i,e),id.set(e,i)),e}const vc=i=>id.get(i);function R1(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),f=vr(d);return s&&d.addEventListener("upgradeneeded",p=>{s(vr(d.result),p.oldVersion,p.newVersion,vr(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const x1=["get","getKey","getAll","getAllKeys","count"],N1=["put","add","delete","clear"],_c=new Map;function Yp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(_c.get(e))return _c.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=N1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||x1.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return _c.set(e,u),u}T1(i=>({...i,get:(e,n,s)=>Yp(e,n)||i.get(e,n,s),has:(e,n)=>!!Yp(e,n)||i.has(e,n)}));/**
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
 */class P1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(A1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function A1(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oc="@firebase/app",Kp="0.13.1";/**
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
 */const Wn=new rd("@firebase/app"),O1="@firebase/app-compat",D1="@firebase/analytics-compat",b1="@firebase/analytics",L1="@firebase/app-check-compat",M1="@firebase/app-check",F1="@firebase/auth",U1="@firebase/auth-compat",z1="@firebase/database",j1="@firebase/data-connect",B1="@firebase/database-compat",V1="@firebase/functions",W1="@firebase/functions-compat",H1="@firebase/installations",$1="@firebase/installations-compat",G1="@firebase/messaging",q1="@firebase/messaging-compat",Y1="@firebase/performance",K1="@firebase/performance-compat",Q1="@firebase/remote-config",X1="@firebase/remote-config-compat",J1="@firebase/storage",Z1="@firebase/storage-compat",ew="@firebase/firestore",tw="@firebase/ai",nw="@firebase/firestore-compat",rw="firebase",iw="11.9.0";/**
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
 */const Dc="[DEFAULT]",sw={[Oc]:"fire-core",[O1]:"fire-core-compat",[b1]:"fire-analytics",[D1]:"fire-analytics-compat",[M1]:"fire-app-check",[L1]:"fire-app-check-compat",[F1]:"fire-auth",[U1]:"fire-auth-compat",[z1]:"fire-rtdb",[j1]:"fire-data-connect",[B1]:"fire-rtdb-compat",[V1]:"fire-fn",[W1]:"fire-fn-compat",[H1]:"fire-iid",[$1]:"fire-iid-compat",[G1]:"fire-fcm",[q1]:"fire-fcm-compat",[Y1]:"fire-perf",[K1]:"fire-perf-compat",[Q1]:"fire-rc",[X1]:"fire-rc-compat",[J1]:"fire-gcs",[Z1]:"fire-gcs-compat",[ew]:"fire-fst",[nw]:"fire-fst-compat",[tw]:"fire-vertex","fire-js":"fire-js",[rw]:"fire-js-all"};/**
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
 */const Gl=new Map,ow=new Map,bc=new Map;function Qp(i,e){try{i.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Fi(i){const e=i.name;if(bc.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;bc.set(e,i);for(const n of Gl.values())Qp(n,i);for(const n of ow.values())Qp(n,i);return!0}function sd(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function an(i){return i==null?!1:i.settings!==void 0}/**
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
 */const lw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new uo("app","Firebase",lw);/**
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
 */class aw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
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
 */const qi=iw;function gg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Dc,automaticDataCollectionEnabled:!0},e),l=s.name;if(typeof l!="string"||!l)throw _r.create("bad-app-name",{appName:String(l)});if(n||(n=lg()),!n)throw _r.create("no-options");const u=Gl.get(l);if(u){if(Yr(n,u.options)&&Yr(s,u.config))return u;throw _r.create("duplicate-app",{appName:l})}const d=new p1(l);for(const p of bc.values())d.addComponent(p);const f=new aw(n,s,d);return Gl.set(l,f),f}function vg(i=Dc){const e=Gl.get(i);if(!e&&i===Dc&&lg())return gg();if(!e)throw _r.create("no-app",{appName:i});return e}function yr(i,e,n){var s;let l=(s=sw[i])!==null&&s!==void 0?s:i;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(f.join(" "));return}Fi(new Kr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const uw="firebase-heartbeat-database",cw=1,Zs="firebase-heartbeat-store";let yc=null;function _g(){return yc||(yc=R1(uw,cw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Zs)}catch(n){console.warn(n)}}}}).catch(i=>{throw _r.create("idb-open",{originalErrorMessage:i.message})})),yc}async function dw(i){try{const n=(await _g()).transaction(Zs),s=await n.objectStore(Zs).get(yg(i));return await n.done,s}catch(e){if(e instanceof Cr)Wn.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function Xp(i,e){try{const s=(await _g()).transaction(Zs,"readwrite");await s.objectStore(Zs).put(e,yg(i)),await s.done}catch(n){if(n instanceof Cr)Wn.warn(n.message);else{const s=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(s.message)}}}function yg(i){return`${i.name}!${i.options.appId}`}/**
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
 */const hw=1024,fw=30;class pw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Jp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>fw){const d=vw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Wn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jp(),{heartbeatsToSend:s,unsentEntries:l}=mw(this._heartbeatsCache.heartbeats),u=Wl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Wn.warn(n),""}}}function Jp(){return new Date().toISOString().substring(0,10)}function mw(i,e=hw){const n=[];let s=i.slice();for(const l of i){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),Zp(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Zp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class gw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z0()?e1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Xp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Xp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Zp(i){return Wl(JSON.stringify({version:2,heartbeats:i})).length}function vw(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function _w(i){Fi(new Kr("platform-logger",e=>new P1(e),"PRIVATE")),Fi(new Kr("heartbeat",e=>new pw(e),"PRIVATE")),yr(Oc,Kp,i),yr(Oc,Kp,"esm2017"),yr("fire-js","")}_w("");var yw="firebase",ww="11.9.1";/**
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
 */yr(yw,ww,"app");function od(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(i);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(i,s[l])&&(n[s[l]]=i[s[l]]);return n}function wg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ew=wg,Eg=new uo("auth","Firebase",wg());/**
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
 */const ql=new rd("@firebase/auth");function Sw(i,...e){ql.logLevel<=Fe.WARN&&ql.warn(`Auth (${qi}): ${i}`,...e)}function Ml(i,...e){ql.logLevel<=Fe.ERROR&&ql.error(`Auth (${qi}): ${i}`,...e)}/**
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
 */function kn(i,...e){throw ad(i,...e)}function dn(i,...e){return ad(i,...e)}function ld(i,e,n){const s=Object.assign(Object.assign({},Ew()),{[e]:n});return new uo("auth","Firebase",s).create(e,{appName:i.name})}function qr(i){return ld(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cw(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&kn(i,"argument-error"),ld(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ad(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return Eg.create(i,...e)}function de(i,e,...n){if(!i)throw ad(e,...n)}function zn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Ml(e),new Error(e)}function Hn(i,e){i||zn(e)}/**
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
 */function Lc(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Tw(){return em()==="http:"||em()==="https:"}function em(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function Iw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tw()||X0()||"connection"in navigator)?navigator.onLine:!0}function kw(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class co{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=nd()||dg()}get(){return Iw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ud(i,e){Hn(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Sg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Rw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Nw=new co(3e4,6e4);function cd(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Yi(i,e,n,s,l={}){return Cg(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Gi(Object.assign({key:i.config.apiKey},d)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},u);return Q0()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&$i(i.emulatorConfig.host)&&(g.credentials="include"),Sg.fetch()(await Tg(i,i.config.apiHost,n,f),g)})}async function Cg(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},Rw),e);try{const l=new Aw(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw Ol(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ol(i,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw Ol(i,"email-already-in-use",d);if(p==="USER_DISABLED")throw Ol(i,"user-disabled",d);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw ld(i,w,g);kn(i,w)}}catch(l){if(l instanceof Cr)throw l;kn(i,"network-request-failed",{message:String(l)})}}async function Pw(i,e,n,s,l={}){const u=await Yi(i,e,n,s,l);return"mfaPendingCredential"in u&&kn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Tg(i,e,n,s){const l=`${e}${n}?${s}`,u=i,d=u.config.emulator?ud(i.config,l):`${i.config.apiScheme}://${l}`;return xw.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class Aw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(dn(this.auth,"network-request-failed")),Nw.get())})}}function Ol(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=dn(i,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function Ow(i,e){return Yi(i,"POST","/v1/accounts:delete",e)}async function Yl(i,e){return Yi(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gs(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dw(i,e=!1){const n=$t(i),s=await n.getIdToken(e),l=dd(s);de(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Gs(wc(l.auth_time)),issuedAtTime:Gs(wc(l.iat)),expirationTime:Gs(wc(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function wc(i){return Number(i)*1e3}function dd(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return Ml("JWT malformed, contained fewer than 3 sections"),null;try{const l=Hl(n);return l?JSON.parse(l):(Ml("Failed to decode base64 JWT payload"),null)}catch(l){return Ml("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function tm(i){const e=dd(i);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function eo(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Cr&&bw(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function bw({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Mc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kl(i){var e;const n=i.auth,s=await i.getIdToken(),l=await eo(i,Yl(n,{idToken:s}));de(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];i._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Ig(u.providerUserInfo):[],f=Fw(i.providerData,d),p=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(f!=null&&f.length),w=p?g:!1,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Mc(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,v)}async function Mw(i){const e=$t(i);await Kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fw(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Ig(i){return i.map(e=>{var{providerId:n}=e,s=od(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Uw(i,e){const n=await Cg(i,{},async()=>{const s=Gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=i.config,d=await Tg(i,l,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return i.emulatorConfig&&$i(i.emulatorConfig.host)&&(p.credentials="include"),Sg.fetch()(d,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zw(i,e){return Yi(i,"POST","/v2/accounts:revokeToken",cd(i,e))}/**
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
 */class Pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=tm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await Uw(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new Pi;return s&&(de(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(de(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(de(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pi,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
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
 */function hr(i,e){de(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class un{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=od(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Mc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await eo(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Dw(this,e)}reload(){return Mw(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Kl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(qr(this.auth));const e=await this.getIdToken();return await eo(this,Ow(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,w;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,_=(l=n.email)!==null&&l!==void 0?l:void 0,A=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,D=(d=n.photoURL)!==null&&d!==void 0?d:void 0,F=(f=n.tenantId)!==null&&f!==void 0?f:void 0,G=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,fe=(g=n.createdAt)!==null&&g!==void 0?g:void 0,ye=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:T,emailVerified:we,isAnonymous:Ge,providerData:ge,stsTokenManager:ze}=n;de(T&&ze,e,"internal-error");const _e=Pi.fromJSON(this.name,ze);de(typeof T=="string",e,"internal-error"),hr(v,e.name),hr(_,e.name),de(typeof we=="boolean",e,"internal-error"),de(typeof Ge=="boolean",e,"internal-error"),hr(A,e.name),hr(D,e.name),hr(F,e.name),hr(G,e.name),hr(fe,e.name),hr(ye,e.name);const xe=new un({uid:T,auth:e,email:_,emailVerified:we,displayName:v,isAnonymous:Ge,photoURL:D,phoneNumber:A,tenantId:F,stsTokenManager:_e,createdAt:fe,lastLoginAt:ye});return ge&&Array.isArray(ge)&&(xe.providerData=ge.map(qe=>Object.assign({},qe))),G&&(xe._redirectEventId=G),xe}static async _fromIdTokenResponse(e,n,s=!1){const l=new Pi;l.updateFromServerResponse(n);const u=new un({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Kl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];de(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Ig(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new Pi;f.updateFromIdToken(s);const p=new un({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Mc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
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
 */const nm=new Map;function jn(i){Hn(i instanceof Function,"Expected a class definition");let e=nm.get(i);return e?(Hn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,nm.set(i,e),e)}/**
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
 */class kg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kg.type="NONE";const rm=kg;/**
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
 */function Fl(i,e,n){return`firebase:${i}:${e}:${n}`}class Ai{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=Fl(this.userKey,l.apiKey,u),this.fullPersistenceKey=Fl("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Yl(this.auth,{idToken:e}).catch(()=>{});return n?un._fromGetAccountInfoResponse(this.auth,n,e):null}return un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ai(jn(rm),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||jn(rm);const d=Fl(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const w=await g._get(d);if(w){let v;if(typeof w=="string"){const _=await Yl(e,{idToken:w}).catch(()=>{});if(!_)break;v=await un._fromGetAccountInfoResponse(e,_,w)}else v=un._fromJSON(e,w);g!==u&&(f=v),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Ai(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new Ai(u,e,s))}}/**
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
 */function im(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Og(e))return"Blackberry";if(Dg(e))return"Webos";if(xg(e))return"Safari";if((e.includes("chrome/")||Ng(e))&&!e.includes("edge/"))return"Chrome";if(Ag(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Rg(i=Pt()){return/firefox\//i.test(i)}function xg(i=Pt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ng(i=Pt()){return/crios\//i.test(i)}function Pg(i=Pt()){return/iemobile/i.test(i)}function Ag(i=Pt()){return/android/i.test(i)}function Og(i=Pt()){return/blackberry/i.test(i)}function Dg(i=Pt()){return/webos/i.test(i)}function hd(i=Pt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function jw(i=Pt()){var e;return hd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Bw(){return J0()&&document.documentMode===10}function bg(i=Pt()){return hd(i)||Ag(i)||Dg(i)||Og(i)||/windows phone/i.test(i)||Pg(i)}/**
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
 */function Lg(i,e=[]){let n;switch(i){case"Browser":n=im(Pt());break;case"Worker":n=`${im(Pt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qi}/${s}`}/**
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
 */async function Ww(i,e={}){return Yi(i,"GET","/v2/passwordPolicy",cd(i,e))}/**
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
 */const Hw=6;class $w{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:Hw,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class Gw{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sm(this),this.idTokenSubscription=new sm(this),this.beforeStateQueue=new Vw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Yl(this,{idToken:e}),s=await un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(qr(this));const n=e?$t(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ww(this),n=new $w(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new uo("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await zw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;if(an(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Sw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pa(i){return $t(i)}class sm{constructor(e){this.auth=e,this.observer=null,this.addObserver=l1(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qw(i){fd=i}function Yw(i){return fd.loadJS(i)}function Kw(){return fd.gapiScript}function Qw(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Xw(i,e){const n=sd(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Yr(u,e??{}))return l;kn(l,"already-initialized")}return n.initialize({options:e})}function Jw(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Zw(i,e,n){const s=pa(i);de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=Mg(e),{host:d,port:f}=eE(e),p=f===null?"":`:${f}`,g={url:`${u}//${d}${p}/`},w=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){de(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),de(Yr(g,s.config.emulator)&&Yr(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,$i(d)?(ug(`${u}//${d}${p}`),cg("Auth",!0)):tE()}function Mg(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function eE(i){const e=Mg(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:om(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:om(d)}}}function om(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function tE(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Fg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}/**
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
 */async function Oi(i,e){return Pw(i,"POST","/v1/accounts:signInWithIdp",cd(i,e))}/**
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
 */const nE="http://localhost";class Qr extends Fg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=od(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new Qr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return Oi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Oi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Oi(e,n)}buildRequest(){const e={requestUri:nE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gi(n)}return e}}/**
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
 */class pd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ho extends pd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fr extends ho{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
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
 */class Un extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Un.credential(n,s)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
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
 */class pr extends ho{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
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
 */class mr extends ho{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return mr.credential(n,s)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
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
 */class Ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await un._fromIdTokenResponse(e,s,l),d=lm(s);return new Ui({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=lm(s);return new Ui({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function lm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Ql extends Cr{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Ql.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Ql(e,n,s,l)}}function Ug(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ql._fromErrorAndOperation(i,u,e,s):u})}async function rE(i,e,n=!1){const s=await eo(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return Ui._forOperation(i,"link",s)}/**
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
 */async function iE(i,e,n=!1){const{auth:s}=i;if(an(s.app))return Promise.reject(qr(s));const l="reauthenticate";try{const u=await eo(i,Ug(s,l,e,i),n);de(u.idToken,s,"internal-error");const d=dd(u.idToken);de(d,s,"internal-error");const{sub:f}=d;return de(i.uid===f,s,"user-mismatch"),Ui._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&kn(s,"user-mismatch"),u}}/**
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
 */async function sE(i,e,n=!1){if(an(i.app))return Promise.reject(qr(i));const s="signIn",l=await Ug(i,s,e),u=await Ui._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}function oE(i,e,n,s){return $t(i).onIdTokenChanged(e,n,s)}function lE(i,e,n){return $t(i).beforeAuthStateChanged(e,n)}function XI(i){return $t(i).signOut()}const Xl="__sak";/**
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
 */class zg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xl,"1"),this.storage.removeItem(Xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const aE=1e3,uE=10;class jg extends zg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);Bw()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,uE):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},aE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jg.type="LOCAL";const cE=jg;/**
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
 */class Bg extends zg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bg.type="SESSION";const Vg=Bg;/**
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
 */class ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new ma(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await dE(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ma.receivers=[];/**
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
 */function md(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class hE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=md("",20);l.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(v){const _=v;if(_.data.eventId===g)switch(_.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(_.data.response);break;default:clearTimeout(w),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function In(){return window}function fE(i){In().location.href=i}/**
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
 */function Wg(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function pE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mE(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function gE(){return Wg()?self:null}/**
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
 */const Hg="firebaseLocalStorageDb",vE=1,Jl="firebaseLocalStorage",$g="fbase_key";class fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ga(i,e){return i.transaction([Jl],e?"readwrite":"readonly").objectStore(Jl)}function _E(){const i=indexedDB.deleteDatabase(Hg);return new fo(i).toPromise()}function Fc(){const i=indexedDB.open(Hg,vE);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Jl,{keyPath:$g})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Jl)?e(s):(s.close(),await _E(),e(await Fc()))})})}async function am(i,e,n){const s=ga(i,!0).put({[$g]:e,value:n});return new fo(s).toPromise()}async function yE(i,e){const n=ga(i,!1).get(e),s=await new fo(n).toPromise();return s===void 0?null:s.value}function um(i,e){const n=ga(i,!0).delete(e);return new fo(n).toPromise()}const wE=800,EE=3;class Gg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>EE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ma._getInstance(gE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pE(),!this.activeServiceWorker)return;this.sender=new hE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fc();return await am(e,Xl,"1"),await um(e,Xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>am(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>yE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>um(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=ga(l,!1).getAll();return new fo(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gg.type="LOCAL";const SE=Gg;new co(3e4,6e4);/**
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
 */function qg(i,e){return e?jn(e):(de(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class gd extends Fg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CE(i){return sE(i.auth,new gd(i),i.bypassAuthState)}function TE(i){const{auth:e,user:n}=i;return de(n,e,"internal-error"),iE(n,new gd(i),i.bypassAuthState)}async function IE(i){const{auth:e,user:n}=i;return de(n,e,"internal-error"),rE(n,new gd(i),i.bypassAuthState)}/**
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
 */class Yg{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CE;case"linkViaPopup":case"linkViaRedirect":return IE;case"reauthViaPopup":case"reauthViaRedirect":return TE;default:kn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kE=new co(2e3,1e4);async function JI(i,e,n){if(an(i.app))return Promise.reject(dn(i,"operation-not-supported-in-this-environment"));const s=pa(i);Cw(i,e,pd);const l=qg(s,n);return new Hr(s,"signInViaPopup",e,l).executeNotNull()}class Hr extends Yg{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=md();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kE.get())};e()}}Hr.currentPopupAction=null;/**
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
 */const RE="pendingRedirect",Ul=new Map;class xE extends Yg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ul.get(this.auth._key());if(!e){try{const s=await NE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ul.set(this.auth._key(),e)}return this.bypassAuthState||Ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NE(i,e){const n=OE(e),s=AE(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function PE(i,e){Ul.set(i._key(),e)}function AE(i){return jn(i._redirectPersistence)}function OE(i){return Fl(RE,i.config.apiKey,i.name)}async function DE(i,e,n=!1){if(an(i.app))return Promise.reject(qr(i));const s=pa(i),l=qg(s,e),d=await new xE(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const bE=10*60*1e3;class LE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ME(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Kg(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bE&&this.cachedEventUids.clear(),this.cachedEventUids.has(cm(e))}saveEventToCache(e){this.cachedEventUids.add(cm(e)),this.lastProcessedEventTime=Date.now()}}function cm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Kg({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ME(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kg(i);default:return!1}}/**
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
 */async function FE(i,e={}){return Yi(i,"GET","/v1/projects",e)}/**
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
 */const UE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zE=/^https?/;async function jE(i){if(i.config.emulator)return;const{authorizedDomains:e}=await FE(i);for(const n of e)try{if(BE(n))return}catch{}kn(i,"unauthorized-domain")}function BE(i){const e=Lc(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!zE.test(n))return!1;if(UE.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const VE=new co(3e4,6e4);function dm(){const i=In().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function WE(i){return new Promise((e,n)=>{var s,l,u;function d(){dm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dm(),n(dn(i,"network-request-failed"))},timeout:VE.get()})}if(!((l=(s=In().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=In().gapi)===null||u===void 0)&&u.load)d();else{const f=Qw("iframefcb");return In()[f]=()=>{gapi.load?d():n(dn(i,"network-request-failed"))},Yw(`${Kw()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw zl=null,e})}let zl=null;function HE(i){return zl=zl||WE(i),zl}/**
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
 */const $E=new co(5e3,15e3),GE="__/auth/iframe",qE="emulator/auth/iframe",YE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QE(i){const e=i.config;de(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?ud(e,qE):`https://${i.config.authDomain}/${GE}`,s={apiKey:e.apiKey,appName:i.name,v:qi},l=KE.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Gi(s).slice(1)}`}async function XE(i){const e=await HE(i),n=In().gapi;return de(n,i,"internal-error"),e.open({where:document.body,url:QE(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YE,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=dn(i,"network-request-failed"),f=In().setTimeout(()=>{u(d)},$E.get());function p(){In().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
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
 */const JE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZE=500,eS=600,tS="_blank",nS="http://localhost";class hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rS(i,e,n,s=ZE,l=eS){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},JE),{width:s.toString(),height:l.toString(),top:u,left:d}),g=Pt().toLowerCase();n&&(f=Ng(g)?tS:n),Rg(g)&&(e=e||nS,p.scrollbars="yes");const w=Object.entries(p).reduce((_,[A,D])=>`${_}${A}=${D},`,"");if(jw(g)&&f!=="_self")return iS(e||"",f),new hm(null);const v=window.open(e||"",f,w);de(v,i,"popup-blocked");try{v.focus()}catch{}return new hm(v)}function iS(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const sS="__/auth/handler",oS="emulator/auth/handler",lS=encodeURIComponent("fac");async function fm(i,e,n,s,l,u){de(i.config.authDomain,i,"auth-domain-config-required"),de(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:qi,eventId:l};if(e instanceof pd){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",Nc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,v]of Object.entries({}))d[w]=v}if(e instanceof ho){const w=e.getScopes().filter(v=>v!=="");w.length>0&&(d.scopes=w.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await i._getAppCheckToken(),g=p?`#${lS}=${encodeURIComponent(p)}`:"";return`${aS(i)}?${Gi(f).slice(1)}${g}`}function aS({config:i}){return i.emulator?ud(i,oS):`https://${i.authDomain}/${sS}`}/**
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
 */const Ec="webStorageSupport";class uS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vg,this._completeRedirectFn=DE,this._overrideRedirectResult=PE}async _openPopup(e,n,s,l){var u;Hn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await fm(e,n,s,Lc(),l);return rS(e,d,md())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await fm(e,n,s,Lc(),l);return fE(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(Hn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await XE(e),s=new LE(e);return n.register("authEvent",l=>(de(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ec,{type:Ec},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[Ec];d!==void 0&&n(!!d),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bg()||xg()||hd()}}const cS=uS;var pm="@firebase/auth",mm="1.10.7";/**
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
 */class dS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fS(i){Fi(new Kr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;de(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lg(i)},g=new Gw(s,l,u,p);return Jw(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Fi(new Kr("auth-internal",e=>{const n=pa(e.getProvider("auth").getImmediate());return(s=>new dS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yr(pm,mm,hS(i)),yr(pm,mm,"esm2017")}/**
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
 */const pS=5*60,mS=ag("authIdTokenMaxAge")||pS;let gm=null;const gS=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>mS)return;const l=n==null?void 0:n.token;gm!==l&&(gm=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function vS(i=vg()){const e=sd(i,"auth");if(e.isInitialized())return e.getImmediate();const n=Xw(i,{popupRedirectResolver:cS,persistence:[SE,cE,Vg]}),s=ag("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=gS(u.toString());lE(n,d,()=>d(n.currentUser)),oE(n,f=>d(f))}}const l=og("auth");return l&&Zw(n,`http://${l}`),n}function _S(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}qw({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=dn("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",_S().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fS("Browser");var vm={};const _m="@firebase/database",ym="1.0.19";/**
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
 */let Qg="";function yS(i){Qg=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),mt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Js(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Rn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wS(e)}}catch{}return new ES},$r=Xg("localStorage"),SS=Xg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new rd("@firebase/database"),CS=function(){let i=1;return function(){return i++}}(),Jg=function(i){const e=c1(i),n=new o1;n.update(e);const s=n.digest();return ed.encodeByteArray(s)},po=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=po.apply(null,s):typeof s=="object"?e+=mt(s):e+=s,e+=" "}return e};let qs=null,wm=!0;const TS=function(i,e){j(!e,"Can't turn on custom loggers persistently."),Di.logLevel=Fe.VERBOSE,qs=Di.log.bind(Di)},_t=function(...i){if(wm===!0&&(wm=!1,qs===null&&SS.get("logging_enabled")===!0&&TS()),qs){const e=po.apply(null,i);qs(e)}},mo=function(i){return function(...e){_t(i,...e)}},Uc=function(...i){const e="FIREBASE INTERNAL ERROR: "+po(...i);Di.error(e)},$n=function(...i){const e=`FIREBASE FATAL ERROR: ${po(...i)}`;throw Di.error(e),new Error(e)},Nt=function(...i){const e="FIREBASE WARNING: "+po(...i);Di.warn(e)},IS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},vd=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},kS=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zi="[MIN_NAME]",Xr="[MAX_NAME]",ni=function(i,e){if(i===e)return 0;if(i===zi||e===Xr)return-1;if(e===zi||i===Xr)return 1;{const n=Em(i),s=Em(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},RS=function(i,e){return i===e?0:i<e?-1:1},js=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+mt(e))},_d=function(i){if(typeof i!="object"||i===null)return mt(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=mt(e[s]),n+=":",n+=_d(i[e[s]]);return n+="}",n},Zg=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function yt(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const ev=function(i){j(!vd(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const w=g.join("");let v="";for(p=0;p<64;p+=8){let _=parseInt(w.substr(p,8),2).toString(16);_.length===1&&(_="0"+_),v=v+_}return v.toLowerCase()},xS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},NS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function PS(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const AS=new RegExp("^-?(0*)\\d{1,10}$"),OS=-2147483648,DS=2147483647,Em=function(i){if(AS.test(i)){const e=Number(i);if(e>=OS&&e<=DS)return e}return null},Ki=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Nt("Exception was thrown by user callback.",n),e},Math.floor(0))}},bS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ys=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class LS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,an(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Nt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Nt(e)}}class jl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}jl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="5",tv="v",nv="s",rv="r",iv="f",sv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ov="ls",lv="p",zc="ac",av="websocket",uv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function FS(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function dv(i,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let s;if(e===av)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===uv)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);FS(i)&&(n.ns=i.namespace);const l=[];return yt(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(){this.counters_={}}incrementCounter(e,n=1){Rn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return j0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc={},Cc={};function wd(i){const e=i.toString();return Sc[e]||(Sc[e]=new US),Sc[e]}function zS(i,e){const n=i.toString();return Cc[n]||(Cc[n]=e()),Cc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ki(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="start",BS="close",VS="pLPCommand",WS="pRTLPCB",hv="id",fv="pw",pv="ser",HS="cb",$S="seg",GS="ts",qS="d",YS="dframe",mv=1870,gv=30,KS=mv-gv,QS=25e3,XS=3e4;class Ni{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=mo(e),this.stats_=wd(n),this.urlFn=p=>(this.appCheckToken&&(p[zc]=this.appCheckToken),dv(n,uv,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new jS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(XS)),kS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ed((...u)=>{const[d,f,p,g,w]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===Sm)this.id=f,this.password=p;else if(d===BS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Sm]="t",s[pv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[HS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[tv]=yd,this.transportSessionId&&(s[nv]=this.transportSessionId),this.lastSessionId&&(s[ov]=this.lastSessionId),this.applicationId&&(s[lv]=this.applicationId),this.appCheckToken&&(s[zc]=this.appCheckToken),typeof location<"u"&&location.hostname&&sv.test(location.hostname)&&(s[rv]=iv);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ni.forceAllow_=!0}static forceDisallow(){Ni.forceDisallow_=!0}static isAvailable(){return Ni.forceAllow_?!0:!Ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!xS()&&!NS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=mt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ig(n),l=Zg(s,KS);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[YS]="t",s[hv]=e,s[fv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=mt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ed{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=CS(),window[VS+this.uniqueCallbackIdentifier]=e,window[WS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ed.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){_t("frame writing exception"),f.stack&&_t(f.stack),_t(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hv]=this.myID,e[fv]=this.myPW,e[pv]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gv+s.length<=mv;){const d=this.pendingSegs.shift();s=s+"&"+$S+l+"="+d.seg+"&"+GS+l+"="+d.ts+"&"+qS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(QS)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=16384,ZS=45e3;let Zl=null;typeof MozWebSocket<"u"?Zl=MozWebSocket:typeof WebSocket<"u"&&(Zl=WebSocket);class Tn{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=mo(this.connId),this.stats_=wd(n),this.connURL=Tn.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[tv]=yd,typeof location<"u"&&location.hostname&&sv.test(location.hostname)&&(d[rv]=iv),n&&(d[nv]=n),s&&(d[ov]=s),l&&(d[zc]=l),u&&(d[lv]=u),dv(e,av,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$r.set("previous_websocket_failure",!0);try{let s;hg(),this.mySock=new Zl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Zl!==null&&!Tn.forceDisallow_}static previouslyFailed(){return $r.isInMemoryStorage||$r.get("previous_websocket_failure")===!0}markConnectionHealthy(){$r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Js(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=mt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Zg(n,JS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ZS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Tn.responsesRequiredToBeHealthy=2;Tn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{static get ALL_TRANSPORTS(){return[Ni,Tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Tn.isAvailable();let s=n&&!Tn.previouslyFailed();if(e.webSocketOnly&&(n||Nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Tn];else{const l=this.transports_=[];for(const u of to.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);to.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}to.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=6e4,tC=5e3,nC=10*1024,rC=100*1024,Tc="t",Cm="d",iC="s",Tm="r",sC="e",Im="o",km="a",Rm="n",xm="p",oC="h";class lC{constructor(e,n,s,l,u,d,f,p,g,w){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=w,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=mo("c:"+this.id+":"),this.transportManager_=new to(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Ys(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tc in e){const n=e[Tc];n===km?this.upgradeIfSecondaryHealthy_():n===Tm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Im&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=js("t",e),s=js("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:xm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:km,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=js("t",e),s=js("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=js(Tc,e);if(Cm in e){const s=e[Cm];if(n===oC){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Rm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===iC?this.onConnectionShutdown_(s):n===Tm?this.onReset_(s):n===sC?Uc("Server Error: "+s):n===Im?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Uc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),yd!==s&&Nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ys(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(eC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ys(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:xm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends _v{static getInstance(){return new ea}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!nd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=32,Pm=768;class Ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function De(){return new Ue("")}function Ce(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Er(i){return i.pieces_.length-i.pieceNum_}function Ve(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new Ue(i.pieces_,e)}function Sd(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function aC(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function no(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function yv(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new Ue(e,0)}function Xe(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof Ue)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new Ue(n,0)}function ke(i){return i.pieceNum_>=i.pieces_.length}function Ft(i,e){const n=Ce(i),s=Ce(e);if(n===null)return e;if(n===s)return Ft(Ve(i),Ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function uC(i,e){const n=no(i,0),s=no(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=ni(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function Cd(i,e){if(Er(i)!==Er(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function Jt(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(Er(i)>Er(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class cC{constructor(e,n){this.errorPrefix_=n,this.parts_=no(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=fa(this.parts_[s]);wv(this)}}function dC(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=fa(e),wv(i)}function hC(i){const e=i.parts_.pop();i.byteLength_-=fa(e),i.parts_.length>0&&(i.byteLength_-=1)}function wv(i){if(i.byteLength_>Pm)throw new Error(i.errorPrefix_+"has a key path longer than "+Pm+" bytes ("+i.byteLength_+").");if(i.parts_.length>Nm)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Nm+") or object contains a cycle "+Wr(i))}function Wr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends _v{static getInstance(){return new Td}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=1e3,fC=60*5*1e3,Am=30*1e3,pC=1.3,mC=3e4,gC="server_kill",Om=3;class Vn extends vv{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Vn.nextPersistentConnectionId_++,this.log_=mo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bs,this.maxReconnectDelay_=fC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!hg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Td.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ea.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(mt(u)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new ao,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;Vn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Rn(e,"w")){const s=Mi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();Nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||s1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Am)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=i1(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+mt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Uc("Unrecognized action received from server: "+mt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mC&&(this.reconnectDelay_=Bs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*pC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Vn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(v){j(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:g};const w=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,_]=await Promise.all([this.authTokenProvider_.getToken(w),this.appCheckTokenProvider_.getToken(w)]);d?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=_&&_.token,f=new lC(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,A=>{Nt(A+" ("+this.repoInfo_.toString()+")"),this.interrupt(gC)},u))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&Nt(v),p())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nc(this.interruptReasons_)&&(this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>_d(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new Ue(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){_t("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Om&&(this.reconnectDelay_=Am,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_t("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Om&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Qg.replace(/\./g,"-")]=1,nd()?e["framework.cordova"]=1:dg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ea.getInstance().currentlyOnline();return Nc(this.interruptReasons_)&&e}}Vn.nextPersistentConnectionId_=0;Vn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Te(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Te(zi,e),l=new Te(zi,n);return this.compare(s,l)!==0}minPost(){return Te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl;class Ev extends va{static get __EMPTY_NODE(){return Dl}static set __EMPTY_NODE(e){Dl=e}compare(e,n){return ni(e.name,n.name)}isDefinedOn(e){throw Hi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Te.MIN}maxPost(){return new Te(Xr,Dl)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new Te(e,Dl)}toString(){return".key"}}const bi=new Ev;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ft{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??ft.RED,this.left=l??Ut.EMPTY_NODE,this.right=u??Ut.EMPTY_NODE}copy(e,n,s,l,u){return new ft(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ut.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ft.RED=!0;ft.BLACK=!1;class vC{copy(e,n,s,l,u){return this}insert(e,n,s){return new ft(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ut{constructor(e,n=Ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ft.BLACK,null,null))}remove(e){return new Ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ft.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bl(this.root_,null,this.comparator_,!0,e)}}Ut.EMPTY_NODE=new vC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(i,e){return ni(i.name,e.name)}function Id(i,e){return ni(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jc;function yC(i){jc=i}const Sv=function(i){return typeof i=="number"?"number:"+ev(i):"string:"+i},Cv=function(i){if(i.isLeafNode()){const e=i.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rn(e,".sv"),"Priority must be a string or number.")}else j(i===jc||i.isEmpty(),"priority of unexpected type.");j(i===jc||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dm;class ht{static set __childrenNodeConstructor(e){Dm=e}static get __childrenNodeConstructor(){return Dm}constructor(e,n=ht.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Cv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ht(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ke(e)?this:Ce(e)===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ht.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Ce(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(j(s!==".priority"||Er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ht.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Sv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ev(this.value_):e+=this.value_,this.lazyHash_=Jg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ht.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ht.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=ht.VALUE_TYPE_ORDER.indexOf(n),u=ht.VALUE_TYPE_ORDER.indexOf(s);return j(l>=0,"Unknown leaf type: "+n),j(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ht.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tv,Iv;function wC(i){Tv=i}function EC(i){Iv=i}class SC extends va{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?ni(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Te.MIN}maxPost(){return new Te(Xr,new ht("[PRIORITY-POST]",Iv))}makePost(e,n){const s=Tv(e);return new Te(n,new ht("[PRIORITY-POST]",s))}toString(){return".priority"}}const Je=new SC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=Math.log(2);class TC{constructor(e){const n=u=>parseInt(Math.log(u)/CC,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ta=function(i,e,n,s){i.sort(e);const l=function(p,g){const w=g-p;let v,_;if(w===0)return null;if(w===1)return v=i[p],_=n?n(v):v,new ft(_,v.node,ft.BLACK,null,null);{const A=parseInt(w/2,10)+p,D=l(p,A),F=l(A+1,g);return v=i[A],_=n?n(v):v,new ft(_,v.node,ft.BLACK,D,F)}},u=function(p){let g=null,w=null,v=i.length;const _=function(D,F){const G=v-D,fe=v;v-=D;const ye=l(G+1,fe),T=i[G],we=n?n(T):T;A(new ft(we,T.node,F,null,ye))},A=function(D){g?(g.left=D,g=D):(w=D,g=D)};for(let D=0;D<p.count;++D){const F=p.nextBitIsOne(),G=Math.pow(2,p.count-(D+1));F?_(G,ft.BLACK):(_(G,ft.BLACK),_(G,ft.RED))}return w},d=new TC(i.length),f=u(d);return new Ut(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic;const Vs={};class Bn{static get Default(){return j(Je,"ChildrenNode.ts has not been loaded"),Ic=Ic||new Bn({".priority":Vs},{".priority":Je}),Ic}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Mi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ut?n:null}hasIndex(e){return Rn(this.indexSet_,e.toString())}addIndex(e,n){j(e!==bi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(Te.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=ta(s,e.getCompare()):f=Vs;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const w=Object.assign({},this.indexes_);return w[p]=f,new Bn(w,g)}addToIndexes(e,n){const s=$l(this.indexes_,(l,u)=>{const d=Mi(this.indexSet_,u);if(j(d,"Missing index implementation for "+u),l===Vs)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(Te.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),ta(f,d.getCompare())}else return Vs;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new Te(e.name,f))),p.insert(e,e.node)}});return new Bn(s,this.indexSet_)}removeFromIndexes(e,n){const s=$l(this.indexes_,l=>{if(l===Vs)return l;{const u=n.get(e.name);return u?l.remove(new Te(e.name,u)):l}});return new Bn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws;class ue{static get EMPTY_NODE(){return Ws||(Ws=new ue(new Ut(Id),null,Bn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Cv(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ws}updatePriority(e){return this.children_.isEmpty()?this:new ue(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ws:n}}getChild(e){const n=Ce(e);return n===null?this:this.getImmediateChild(n).getChild(Ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Te(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?Ws:this.priorityNode_;return new ue(l,d,u)}}updateChild(e,n){const s=Ce(e);if(s===null)return n;{j(Ce(e)!==".priority"||Er(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ve(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Je,(d,f)=>{n[d]=f.val(e),s++,u&&ue.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Sv(this.getPriority().val())+":"),this.forEachChild(Je,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Jg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new Te(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Te(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,Te.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,Te.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===go?-1:0}withIndex(e){if(e===bi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ue(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Je),l=n.getIterator(Je);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===bi?null:this.indexMap_.get(e.toString())}}ue.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class IC extends ue{constructor(){super(new Ut(Id),ue.EMPTY_NODE,Bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ue.EMPTY_NODE}isEmpty(){return!1}}const go=new IC;Object.defineProperties(Te,{MIN:{value:new Te(zi,ue.EMPTY_NODE)},MAX:{value:new Te(Xr,go)}});Ev.__EMPTY_NODE=ue.EMPTY_NODE;ht.__childrenNodeConstructor=ue;yC(go);EC(go);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=!0;function pt(i,e=null){if(i===null)return ue.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new ht(n,pt(e))}if(!(i instanceof Array)&&kC){const n=[];let s=!1;if(yt(i,(d,f)=>{if(d.substring(0,1)!=="."){const p=pt(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new Te(d,p)))}}),n.length===0)return ue.EMPTY_NODE;const u=ta(n,_C,d=>d.name,Id);if(s){const d=ta(n,Je.getCompare());return new ue(u,pt(e),new Bn({".priority":d},{".priority":Je}))}else return new ue(u,pt(e),Bn.Default)}else{let n=ue.EMPTY_NODE;return yt(i,(s,l)=>{if(Rn(i,s)&&s.substring(0,1)!=="."){const u=pt(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(pt(e))}}wC(pt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC extends va{constructor(e){super(),this.indexPath_=e,j(!ke(e)&&Ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?ni(e.name,n.name):u}makePost(e,n){const s=pt(e),l=ue.EMPTY_NODE.updateChild(this.indexPath_,s);return new Te(n,l)}maxPost(){const e=ue.EMPTY_NODE.updateChild(this.indexPath_,go);return new Te(Xr,e)}toString(){return no(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC extends va{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ni(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Te.MIN}maxPost(){return Te.MAX}makePost(e,n){const s=pt(e);return new Te(n,s)}toString(){return".value"}}const NC=new xC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(i){return{type:"value",snapshotNode:i}}function ji(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function ro(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function io(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function PC(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(ro(n,f)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(ji(n,s)):d.trackChildChange(io(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Je,(l,u)=>{n.hasChild(l)||s.trackChildChange(ro(l,u))}),n.isLeafNode()||n.forEachChild(Je,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(io(l,u,d))}else s.trackChildChange(ji(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ue.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.indexedFilter_=new kd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=so.getStartPost_(e),this.endPost_=so.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new Te(n,s))||(s=ue.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ue.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(ue.EMPTY_NODE);const u=this;return n.forEachChild(Je,(d,f)=>{u.matches(new Te(d,f))||(l=l.updateImmediateChild(d,ue.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new so(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new Te(n,s))||(s=ue.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=ue.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=ue.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(ue.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,ue.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const v=this.index_.getCompare();d=(_,A)=>v(A,_)}else d=this.index_.getCompare();const f=e;j(f.numChildren()===this.limit_,"");const p=new Te(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),w=this.rangedFilter_.matches(p);if(f.hasChild(n)){const v=f.getImmediateChild(n);let _=l.getChildAfterChild(this.index_,g,this.reverse_);for(;_!=null&&(_.name===n||f.hasChild(_.name));)_=l.getChildAfterChild(this.index_,_,this.reverse_);const A=_==null?1:d(_,p);if(w&&!s.isEmpty()&&A>=0)return u!=null&&u.trackChildChange(io(n,s,v)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(ro(n,v));const F=f.updateImmediateChild(n,ue.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(u!=null&&u.trackChildChange(ji(_.name,_.node)),F.updateImmediateChild(_.name,_.node)):F}}else return s.isEmpty()?e:w&&d(g,p)>=0?(u!=null&&(u.trackChildChange(ro(g.name,g.node)),u.trackChildChange(ji(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,ue.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zi}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Je}copy(){const e=new Rd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function OC(i){return i.loadsAllData()?new kd(i.getIndex()):i.hasLimit()?new AC(i):new so(i)}function bm(i){const e={};if(i.isDefault())return e;let n;if(i.index_===Je?n="$priority":i.index_===NC?n="$value":i.index_===bi?n="$key":(j(i.index_ instanceof RC,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=mt(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=mt(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+mt(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=mt(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+mt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function Lm(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==Je&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends vv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=mo("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=na.getListenId_(e,s),f={};this.listens_[d]=f;const p=bm(e._queryParams);this.restRequest_(u+".json",p,(g,w)=>{let v=w;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(u,v,!1,s),Mi(this.listens_,d)===f){let _;g?g===401?_="permission_denied":_="rest_error:"+g:_="ok",l(_,null)}})}unlisten(e,n){const s=na.getListenId_(e,n);delete this.listens_[s]}get(e){const n=bm(e._queryParams),s=e._path.toString(),l=new ao;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gi(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Js(f.responseText)}catch{Nt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&Nt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(){this.rootNode_=ue.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(){return{value:null,children:new Map}}function Rv(i,e,n){if(ke(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=Ce(e);i.children.has(s)||i.children.set(s,ra());const l=i.children.get(s);e=Ve(e),Rv(l,e,n)}}function Bc(i,e,n){i.value!==null?n(e,i.value):bC(i,(s,l)=>{const u=new Ue(e.toString()+"/"+s);Bc(l,u,n)})}function bC(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&yt(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=10*1e3,MC=30*1e3,FC=5*60*1e3;class UC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new LC(e);const s=Mm+(MC-Mm)*Math.random();Ys(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;yt(e,(l,u)=>{u>0&&Rn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),Ys(this.reportStats_.bind(this),Math.floor(Math.random()*2*FC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(cn||(cn={}));function xd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Nd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pd(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=cn.ACK_USER_WRITE,this.source=xd()}operationForChild(e){if(ke(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ue(e));return new ia(De(),n,this.revert)}}else return j(Ce(this.path)===e,"operationForChild called for unrelated child."),new ia(Ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.source=e,this.path=n,this.type=cn.LISTEN_COMPLETE}operationForChild(e){return ke(this.path)?new oo(this.source,De()):new oo(this.source,Ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=cn.OVERWRITE}operationForChild(e){return ke(this.path)?new Jr(this.source,De(),this.snap.getImmediateChild(e)):new Jr(this.source,Ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=cn.MERGE}operationForChild(e){if(ke(this.path)){const n=this.children.subtree(new Ue(e));return n.isEmpty()?null:n.value?new Jr(this.source,De(),n.value):new Bi(this.source,De(),n)}else return j(Ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bi(this.source,Ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ke(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jC(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(PC(d.childName,d.snapshotNode))}),Hs(i,l,"child_removed",e,s,n),Hs(i,l,"child_added",e,s,n),Hs(i,l,"child_moved",u,s,n),Hs(i,l,"child_changed",e,s,n),Hs(i,l,"value",e,s,n),l}function Hs(i,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>VC(i,f,p)),d.forEach(f=>{const p=BC(i,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,i.query_))})})}function BC(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function VC(i,e,n){if(e.childName==null||n.childName==null)throw Hi("Should only compare child_ events.");const s=new Te(e.childName,e.snapshotNode),l=new Te(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(i,e){return{eventCache:i,serverCache:e}}function Ks(i,e,n,s){return _a(new Zr(e,n,s),i.serverCache)}function xv(i,e,n,s){return _a(i.eventCache,new Zr(e,n,s))}function Vc(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function ei(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kc;const WC=()=>(kc||(kc=new Ut(RS)),kc);class Be{static fromObject(e){let n=new Be(null);return yt(e,(s,l)=>{n=n.set(new Ue(s),l)}),n}constructor(e,n=WC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:De(),value:this.value};if(ke(e))return null;{const s=Ce(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Ve(e),n);return u!=null?{path:Xe(new Ue(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ke(e))return this;{const n=Ce(e),s=this.children.get(n);return s!==null?s.subtree(Ve(e)):new Be(null)}}set(e,n){if(ke(e))return new Be(n,this.children);{const s=Ce(e),u=(this.children.get(s)||new Be(null)).set(Ve(e),n),d=this.children.insert(s,u);return new Be(this.value,d)}}remove(e){if(ke(e))return this.children.isEmpty()?new Be(null):new Be(null,this.children);{const n=Ce(e),s=this.children.get(n);if(s){const l=s.remove(Ve(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new Be(null):new Be(this.value,u)}else return this}}get(e){if(ke(e))return this.value;{const n=Ce(e),s=this.children.get(n);return s?s.get(Ve(e)):null}}setTree(e,n){if(ke(e))return n;{const s=Ce(e),u=(this.children.get(s)||new Be(null)).setTree(Ve(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new Be(this.value,d)}}fold(e){return this.fold_(De(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Xe(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,De(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ke(e))return null;{const u=Ce(e),d=this.children.get(u);return d?d.findOnPath_(Ve(e),Xe(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,De(),n)}foreachOnPath_(e,n,s){if(ke(e))return this;{this.value&&s(n,this.value);const l=Ce(e),u=this.children.get(l);return u?u.foreachOnPath_(Ve(e),Xe(n,l),s):new Be(null)}}foreach(e){this.foreach_(De(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Xe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.writeTree_=e}static empty(){return new hn(new Be(null))}}function Qs(i,e,n){if(ke(e))return new hn(new Be(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=Ft(l,e);return u=u.updateChild(d,n),new hn(i.writeTree_.set(l,u))}else{const l=new Be(n),u=i.writeTree_.setTree(e,l);return new hn(u)}}}function Wc(i,e,n){let s=i;return yt(n,(l,u)=>{s=Qs(s,Xe(e,l),u)}),s}function Fm(i,e){if(ke(e))return hn.empty();{const n=i.writeTree_.setTree(e,new Be(null));return new hn(n)}}function Hc(i,e){return ri(i,e)!=null}function ri(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(Ft(n.path,e)):null}function Um(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Je,(s,l)=>{e.push(new Te(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new Te(s,l.value))}),e}function wr(i,e){if(ke(e))return i;{const n=ri(i,e);return n!=null?new hn(new Be(n)):new hn(i.writeTree_.subtree(e))}}function $c(i){return i.writeTree_.isEmpty()}function Vi(i,e){return Nv(De(),i.writeTree_,e)}function Nv(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(j(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=Nv(Xe(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Xe(i,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(i,e){return Dv(e,i)}function HC(i,e,n,s,l){j(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=Qs(i.visibleWrites,e,n)),i.lastWriteId=s}function $C(i,e,n,s){j(s>i.lastWriteId,"Stacking an older merge on top of newer ones"),i.allWrites.push({path:e,children:n,writeId:s,visible:!0}),i.visibleWrites=Wc(i.visibleWrites,e,n),i.lastWriteId=s}function GC(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function qC(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&YC(f,s.path)?l=!1:Jt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return KC(i),!0;if(s.snap)i.visibleWrites=Fm(i.visibleWrites,s.path);else{const f=s.children;yt(f,p=>{i.visibleWrites=Fm(i.visibleWrites,Xe(s.path,p))})}return!0}else return!1}function YC(i,e){if(i.snap)return Jt(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&Jt(Xe(i.path,n),e))return!0;return!1}function KC(i){i.visibleWrites=Pv(i.allWrites,QC,De()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function QC(i){return i.visible}function Pv(i,e,n){let s=hn.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let f;if(u.snap)Jt(n,d)?(f=Ft(n,d),s=Qs(s,f,u.snap)):Jt(d,n)&&(f=Ft(d,n),s=Qs(s,De(),u.snap.getChild(f)));else if(u.children){if(Jt(n,d))f=Ft(n,d),s=Wc(s,f,u.children);else if(Jt(d,n))if(f=Ft(d,n),ke(f))s=Wc(s,De(),u.children);else{const p=Mi(u.children,Ce(f));if(p){const g=p.getChild(Ve(f));s=Qs(s,De(),g)}}}else throw Hi("WriteRecord should have .snap or .children")}}return s}function Av(i,e,n,s,l){if(!s&&!l){const u=ri(i.visibleWrites,e);if(u!=null)return u;{const d=wr(i.visibleWrites,e);if($c(d))return n;if(n==null&&!Hc(d,De()))return null;{const f=n||ue.EMPTY_NODE;return Vi(d,f)}}}else{const u=wr(i.visibleWrites,e);if(!l&&$c(u))return n;if(!l&&n==null&&!Hc(u,De()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Jt(g.path,e)||Jt(e,g.path))},f=Pv(i.allWrites,d,e),p=n||ue.EMPTY_NODE;return Vi(f,p)}}}function XC(i,e,n){let s=ue.EMPTY_NODE;const l=ri(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Je,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=wr(i.visibleWrites,e);return n.forEachChild(Je,(d,f)=>{const p=Vi(wr(u,new Ue(d)),f);s=s.updateImmediateChild(d,p)}),Um(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=wr(i.visibleWrites,e);return Um(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function JC(i,e,n,s,l){j(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Xe(e,n);if(Hc(i.visibleWrites,u))return null;{const d=wr(i.visibleWrites,u);return $c(d)?l.getChild(n):Vi(d,l.getChild(n))}}function ZC(i,e,n,s){const l=Xe(e,n),u=ri(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=wr(i.visibleWrites,l);return Vi(d,s.getNode().getImmediateChild(n))}else return null}function eT(i,e){return ri(i.visibleWrites,e)}function tT(i,e,n,s,l,u,d){let f;const p=wr(i.visibleWrites,e),g=ri(p,De());if(g!=null)f=g;else if(n!=null)f=Vi(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const w=[],v=d.getCompare(),_=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let A=_.getNext();for(;A&&w.length<l;)v(A,s)!==0&&w.push(A),A=_.getNext();return w}else return[]}function nT(){return{visibleWrites:hn.empty(),allWrites:[],lastWriteId:-1}}function sa(i,e,n,s){return Av(i.writeTree,i.treePath,e,n,s)}function Od(i,e){return XC(i.writeTree,i.treePath,e)}function zm(i,e,n,s){return JC(i.writeTree,i.treePath,e,n,s)}function oa(i,e){return eT(i.writeTree,Xe(i.treePath,e))}function rT(i,e,n,s,l,u){return tT(i.writeTree,i.treePath,e,n,s,l,u)}function Dd(i,e,n){return ZC(i.writeTree,i.treePath,e,n)}function Ov(i,e){return Dv(Xe(i.treePath,e),i.writeTree)}function Dv(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,io(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,ro(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,ji(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,io(s,e.snapshotNode,l.oldSnap));else throw Hi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const bv=new sT;class bd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Zr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ei(this.viewCache_),u=rT(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(i){return{filter:i}}function lT(i,e){j(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function aT(i,e,n,s,l){const u=new iT;let d,f;if(n.type===cn.OVERWRITE){const g=n;g.source.fromUser?d=Gc(i,e,g.path,g.snap,s,l,u):(j(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ke(g.path),d=la(i,e,g.path,g.snap,s,l,f,u))}else if(n.type===cn.MERGE){const g=n;g.source.fromUser?d=cT(i,e,g.path,g.children,s,l,u):(j(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=qc(i,e,g.path,g.children,s,l,f,u))}else if(n.type===cn.ACK_USER_WRITE){const g=n;g.revert?d=fT(i,e,g.path,s,l,u):d=dT(i,e,g.path,g.affectedTree,s,l,u)}else if(n.type===cn.LISTEN_COMPLETE)d=hT(i,e,n.path,s,u);else throw Hi("Unknown operation type: "+n.type);const p=u.getChanges();return uT(e,d,p),{viewCache:d,changes:p}}function uT(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Vc(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(kv(Vc(e)))}}function Lv(i,e,n,s,l,u){const d=e.eventCache;if(oa(s,n)!=null)return e;{let f,p;if(ke(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=ei(e),w=g instanceof ue?g:ue.EMPTY_NODE,v=Od(s,w);f=i.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const g=sa(s,ei(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=Ce(n);if(g===".priority"){j(Er(n)===1,"Can't have a priority with additional path components");const w=d.getNode();p=e.serverCache.getNode();const v=zm(s,n,w,p);v!=null?f=i.filter.updatePriority(w,v):f=d.getNode()}else{const w=Ve(n);let v;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const _=zm(s,n,d.getNode(),p);_!=null?v=d.getNode().getImmediateChild(g).updateChild(w,_):v=d.getNode().getImmediateChild(g)}else v=Dd(s,g,e.serverCache);v!=null?f=i.filter.updateChild(d.getNode(),g,v,w,l,u):f=d.getNode()}}return Ks(e,f,d.isFullyInitialized()||ke(n),i.filter.filtersNodes())}}function la(i,e,n,s,l,u,d,f){const p=e.serverCache;let g;const w=d?i.filter:i.filter.getIndexedFilter();if(ke(n))g=w.updateFullNode(p.getNode(),s,null);else if(w.filtersNodes()&&!p.isFiltered()){const A=p.getNode().updateChild(n,s);g=w.updateFullNode(p.getNode(),A,null)}else{const A=Ce(n);if(!p.isCompleteForPath(n)&&Er(n)>1)return e;const D=Ve(n),G=p.getNode().getImmediateChild(A).updateChild(D,s);A===".priority"?g=w.updatePriority(p.getNode(),G):g=w.updateChild(p.getNode(),A,G,D,bv,null)}const v=xv(e,g,p.isFullyInitialized()||ke(n),w.filtersNodes()),_=new bd(l,v,u);return Lv(i,v,n,l,_,f)}function Gc(i,e,n,s,l,u,d){const f=e.eventCache;let p,g;const w=new bd(l,e,u);if(ke(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),p=Ks(e,g,!0,i.filter.filtersNodes());else{const v=Ce(n);if(v===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),p=Ks(e,g,f.isFullyInitialized(),f.isFiltered());else{const _=Ve(n),A=f.getNode().getImmediateChild(v);let D;if(ke(_))D=s;else{const F=w.getCompleteChild(v);F!=null?Sd(_)===".priority"&&F.getChild(yv(_)).isEmpty()?D=F:D=F.updateChild(_,s):D=ue.EMPTY_NODE}if(A.equals(D))p=e;else{const F=i.filter.updateChild(f.getNode(),v,D,_,w,d);p=Ks(e,F,f.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function jm(i,e){return i.eventCache.isCompleteForChild(e)}function cT(i,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const w=Xe(n,p);jm(e,Ce(w))&&(f=Gc(i,f,w,g,l,u,d))}),s.foreach((p,g)=>{const w=Xe(n,p);jm(e,Ce(w))||(f=Gc(i,f,w,g,l,u,d))}),f}function Bm(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function qc(i,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;ke(n)?g=s:g=new Be(null).setTree(n,s);const w=e.serverCache.getNode();return g.children.inorderTraversal((v,_)=>{if(w.hasChild(v)){const A=e.serverCache.getNode().getImmediateChild(v),D=Bm(i,A,_);p=la(i,p,new Ue(v),D,l,u,d,f)}}),g.children.inorderTraversal((v,_)=>{const A=!e.serverCache.isCompleteForChild(v)&&_.value===null;if(!w.hasChild(v)&&!A){const D=e.serverCache.getNode().getImmediateChild(v),F=Bm(i,D,_);p=la(i,p,new Ue(v),F,l,u,d,f)}}),p}function dT(i,e,n,s,l,u,d){if(oa(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ke(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return la(i,e,n,p.getNode().getChild(n),l,u,f,d);if(ke(n)){let g=new Be(null);return p.getNode().forEachChild(bi,(w,v)=>{g=g.set(new Ue(w),v)}),qc(i,e,n,g,l,u,f,d)}else return e}else{let g=new Be(null);return s.foreach((w,v)=>{const _=Xe(n,w);p.isCompleteForPath(_)&&(g=g.set(w,p.getNode().getChild(_)))}),qc(i,e,n,g,l,u,f,d)}}function hT(i,e,n,s,l){const u=e.serverCache,d=xv(e,u.getNode(),u.isFullyInitialized()||ke(n),u.isFiltered());return Lv(i,d,n,s,bv,l)}function fT(i,e,n,s,l,u){let d;if(oa(s,n)!=null)return e;{const f=new bd(s,e,l),p=e.eventCache.getNode();let g;if(ke(n)||Ce(n)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=sa(s,ei(e));else{const v=e.serverCache.getNode();j(v instanceof ue,"serverChildren would be complete if leaf node"),w=Od(s,v)}w=w,g=i.filter.updateFullNode(p,w,u)}else{const w=Ce(n);let v=Dd(s,w,e.serverCache);v==null&&e.serverCache.isCompleteForChild(w)&&(v=p.getImmediateChild(w)),v!=null?g=i.filter.updateChild(p,w,v,Ve(n),f,u):e.eventCache.getNode().hasChild(w)?g=i.filter.updateChild(p,w,ue.EMPTY_NODE,Ve(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=sa(s,ei(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||oa(s,De())!=null,Ks(e,g,d,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new kd(s.getIndex()),u=OC(s);this.processor_=oT(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(ue.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(ue.EMPTY_NODE,f.getNode(),null),w=new Zr(p,d.isFullyInitialized(),l.filtersNodes()),v=new Zr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=_a(v,w),this.eventGenerator_=new zC(this.query_)}get query(){return this.query_}}function mT(i){return i.viewCache_.serverCache.getNode()}function gT(i,e){const n=ei(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!ke(e)&&!n.getImmediateChild(Ce(e)).isEmpty())?n.getChild(e):null}function Vm(i){return i.eventRegistrations_.length===0}function vT(i,e){i.eventRegistrations_.push(e)}function Wm(i,e,n){const s=[];if(n){j(e==null,"A cancel should cancel all event registrations.");const l=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=l}else i.eventRegistrations_=[];return s}function Hm(i,e,n,s){e.type===cn.MERGE&&e.source.queryId!==null&&(j(ei(i.viewCache_),"We should always have a full cache before handling merges"),j(Vc(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=aT(i.processor_,l,e,n,s);return lT(i.processor_,u.viewCache),j(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,Mv(i,u.changes,u.viewCache.eventCache.getNode(),null)}function _T(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Je,(u,d)=>{s.push(ji(u,d))}),n.isFullyInitialized()&&s.push(kv(n.getNode())),Mv(i,s,n.getNode(),e)}function Mv(i,e,n,s){const l=s?[s]:i.eventRegistrations_;return jC(i.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa;class yT{constructor(){this.views=new Map}}function wT(i){j(!aa,"__referenceConstructor has already been defined"),aa=i}function ET(){return j(aa,"Reference.ts has not been loaded"),aa}function ST(i){return i.views.size===0}function Ld(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return j(u!=null,"SyncTree gave us an op for an invalid query."),Hm(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(Hm(d,e,n,s));return u}}function CT(i,e,n,s,l){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let f=sa(n,l?s:null),p=!1;f?p=!0:s instanceof ue?(f=Od(n,s),p=!1):(f=ue.EMPTY_NODE,p=!1);const g=_a(new Zr(f,p,!1),new Zr(s,l,!1));return new pT(e,g)}return d}function TT(i,e,n,s,l,u){const d=CT(i,e,s,l,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),vT(d,n),_T(d,n)}function IT(i,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=Sr(i);if(l==="default")for(const[p,g]of i.views.entries())d=d.concat(Wm(g,n,s)),Vm(g)&&(i.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=i.views.get(l);p&&(d=d.concat(Wm(p,n,s)),Vm(p)&&(i.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!Sr(i)&&u.push(new(ET())(e._repo,e._path)),{removed:u,events:d}}function Fv(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Li(i,e){let n=null;for(const s of i.views.values())n=n||gT(s,e);return n}function Uv(i,e){if(e._queryParams.loadsAllData())return ya(i);{const s=e._queryIdentifier;return i.views.get(s)}}function zv(i,e){return Uv(i,e)!=null}function Sr(i){return ya(i)!=null}function ya(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua;function kT(i){j(!ua,"__referenceConstructor has already been defined"),ua=i}function RT(){return j(ua,"Reference.ts has not been loaded"),ua}let xT=1;class $m{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Be(null),this.pendingWriteTree_=nT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function jv(i,e,n,s,l){return HC(i.pendingWriteTree_,e,n,s,l),l?Qi(i,new Jr(xd(),e,n)):[]}function NT(i,e,n,s){$C(i.pendingWriteTree_,e,n,s);const l=Be.fromObject(n);return Qi(i,new Bi(xd(),e,l))}function gr(i,e,n=!1){const s=GC(i.pendingWriteTree_,e);if(qC(i.pendingWriteTree_,e)){let u=new Be(null);return s.snap!=null?u=u.set(De(),!0):yt(s.children,d=>{u=u.set(new Ue(d),!0)}),Qi(i,new ia(s.path,u,n))}else return[]}function wa(i,e,n){return Qi(i,new Jr(Nd(),e,n))}function PT(i,e,n){const s=Be.fromObject(n);return Qi(i,new Bi(Nd(),e,s))}function AT(i,e){return Qi(i,new oo(Nd(),e))}function OT(i,e,n){const s=Fd(i,n);if(s){const l=Ud(s),u=l.path,d=l.queryId,f=Ft(u,e),p=new oo(Pd(d),f);return zd(i,u,p)}else return[]}function Yc(i,e,n,s,l=!1){const u=e._path,d=i.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||zv(d,e))){const p=IT(d,e,n,s);ST(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const w=g.findIndex(_=>_._queryParams.loadsAllData())!==-1,v=i.syncPointTree_.findOnPath(u,(_,A)=>Sr(A));if(w&&!v){const _=i.syncPointTree_.subtree(u);if(!_.isEmpty()){const A=LT(_);for(let D=0;D<A.length;++D){const F=A[D],G=F.query,fe=Wv(i,F);i.listenProvider_.startListening(Xs(G),ca(i,G),fe.hashFn,fe.onComplete)}}}!v&&g.length>0&&!s&&(w?i.listenProvider_.stopListening(Xs(e),null):g.forEach(_=>{const A=i.queryToTagMap.get(Ea(_));i.listenProvider_.stopListening(Xs(_),A)}))}MT(i,g)}return f}function DT(i,e,n,s){const l=Fd(i,s);if(l!=null){const u=Ud(l),d=u.path,f=u.queryId,p=Ft(d,e),g=new Jr(Pd(f),p,n);return zd(i,d,g)}else return[]}function bT(i,e,n,s){const l=Fd(i,s);if(l){const u=Ud(l),d=u.path,f=u.queryId,p=Ft(d,e),g=Be.fromObject(n),w=new Bi(Pd(f),p,g);return zd(i,d,w)}else return[]}function Gm(i,e,n,s=!1){const l=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(l,(_,A)=>{const D=Ft(_,l);u=u||Li(A,D),d=d||Sr(A)});let f=i.syncPointTree_.get(l);f?(d=d||Sr(f),u=u||Li(f,De())):(f=new yT,i.syncPointTree_=i.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=ue.EMPTY_NODE,i.syncPointTree_.subtree(l).foreachChild((A,D)=>{const F=Li(D,De());F&&(u=u.updateImmediateChild(A,F))}));const g=zv(f,e);if(!g&&!e._queryParams.loadsAllData()){const _=Ea(e);j(!i.queryToTagMap.has(_),"View does not exist, but we have a tag");const A=FT();i.queryToTagMap.set(_,A),i.tagToQueryMap.set(A,_)}const w=Ad(i.pendingWriteTree_,l);let v=TT(f,e,n,w,u,p);if(!g&&!d&&!s){const _=Uv(f,e);v=v.concat(UT(i,e,_))}return v}function Md(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const p=Ft(d,e),g=Li(f,p);if(g)return g});return Av(l,e,u,n,!0)}function Qi(i,e){return Bv(e,i.syncPointTree_,null,Ad(i.pendingWriteTree_,De()))}function Bv(i,e,n,s){if(ke(i.path))return Vv(i,e,n,s);{const l=e.get(De());n==null&&l!=null&&(n=Li(l,De()));let u=[];const d=Ce(i.path),f=i.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,w=Ov(s,d);u=u.concat(Bv(f,p,g,w))}return l&&(u=u.concat(Ld(l,i,s,n))),u}}function Vv(i,e,n,s){const l=e.get(De());n==null&&l!=null&&(n=Li(l,De()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=Ov(s,d),w=i.operationForChild(d);w&&(u=u.concat(Vv(w,f,p,g)))}),l&&(u=u.concat(Ld(l,i,s,n))),u}function Wv(i,e){const n=e.query,s=ca(i,n);return{hashFn:()=>(mT(e)||ue.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?OT(i,n._path,s):AT(i,n._path);{const u=PS(l,n);return Yc(i,n,null,u)}}}}function ca(i,e){const n=Ea(e);return i.queryToTagMap.get(n)}function Ea(i){return i._path.toString()+"$"+i._queryIdentifier}function Fd(i,e){return i.tagToQueryMap.get(e)}function Ud(i){const e=i.indexOf("$");return j(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new Ue(i.substr(0,e))}}function zd(i,e,n){const s=i.syncPointTree_.get(e);j(s,"Missing sync point for query tag that we're tracking");const l=Ad(i.pendingWriteTree_,e);return Ld(s,n,l,null)}function LT(i){return i.fold((e,n,s)=>{if(n&&Sr(n))return[ya(n)];{let l=[];return n&&(l=Fv(n)),yt(s,(u,d)=>{l=l.concat(d)}),l}})}function Xs(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(RT())(i._repo,i._path):i}function MT(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Ea(s),u=i.queryToTagMap.get(l);i.queryToTagMap.delete(l),i.tagToQueryMap.delete(u)}}}function FT(){return xT++}function UT(i,e,n){const s=e._path,l=ca(i,e),u=Wv(i,n),d=i.listenProvider_.startListening(Xs(e),l,u.hashFn,u.onComplete),f=i.syncPointTree_.subtree(s);if(l)j(!Sr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,w,v)=>{if(!ke(g)&&w&&Sr(w))return[ya(w).query];{let _=[];return w&&(_=_.concat(Fv(w).map(A=>A.query))),yt(v,(A,D)=>{_=_.concat(D)}),_}});for(let g=0;g<p.length;++g){const w=p[g];i.listenProvider_.stopListening(Xs(w),ca(i,w))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new jd(n)}node(){return this.node_}}class Bd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new Bd(this.syncTree_,n)}node(){return Md(this.syncTree_,this.path_)}}const zT=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},qm=function(i,e,n){if(!i||typeof i!="object")return i;if(j(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return jT(i[".sv"],e,n);if(typeof i[".sv"]=="object")return BT(i[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},jT=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+i)}},BT=function(i,e,n){i.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&j(!1,"Unexpected increment value: "+s);const l=e.node();if(j(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},Hv=function(i,e,n,s){return Vd(e,new Bd(n,i),s)},$v=function(i,e,n){return Vd(i,new jd(e),n)};function Vd(i,e,n){const s=i.getPriority().val(),l=qm(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=qm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new ht(f,pt(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new ht(l))),d.forEachChild(Je,(f,p)=>{const g=Vd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Hd(i,e){let n=e instanceof Ue?e:new Ue(e),s=i,l=Ce(n);for(;l!==null;){const u=Mi(s.node.children,l)||{children:{},childCount:0};s=new Wd(l,s,u),n=Ve(n),l=Ce(n)}return s}function Xi(i){return i.node.value}function Gv(i,e){i.node.value=e,Kc(i)}function qv(i){return i.node.childCount>0}function VT(i){return Xi(i)===void 0&&!qv(i)}function Sa(i,e){yt(i.node.children,(n,s)=>{e(new Wd(n,i,s))})}function Yv(i,e,n,s){n&&!s&&e(i),Sa(i,l=>{Yv(l,e,!0,s)})}function WT(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function vo(i){return new Ue(i.parent===null?i.name:vo(i.parent)+"/"+i.name)}function Kc(i){i.parent!==null&&HT(i.parent,i.name,i)}function HT(i,e,n){const s=VT(n),l=Rn(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,Kc(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,Kc(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=/[\[\].#$\/\u0000-\u001F\u007F]/,GT=/[\[\].#$\u0000-\u001F\u007F]/,Rc=10*1024*1024,$d=function(i){return typeof i=="string"&&i.length!==0&&!$T.test(i)},Kv=function(i){return typeof i=="string"&&i.length!==0&&!GT.test(i)},qT=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Kv(i)},YT=function(i){return i===null||typeof i=="string"||typeof i=="number"&&!vd(i)||i&&typeof i=="object"&&Rn(i,".sv")},Qv=function(i,e,n,s){s&&e===void 0||Ca(ha(i,"value"),e,n)},Ca=function(i,e,n){const s=n instanceof Ue?new cC(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+Wr(s));if(typeof e=="function")throw new Error(i+"contains a function "+Wr(s)+" with contents = "+e.toString());if(vd(e))throw new Error(i+"contains "+e.toString()+" "+Wr(s));if(typeof e=="string"&&e.length>Rc/3&&fa(e)>Rc)throw new Error(i+"contains a string greater than "+Rc+" utf8 bytes "+Wr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(yt(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!$d(d)))throw new Error(i+" contains an invalid key ("+d+") "+Wr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dC(s,d),Ca(i,f,s),hC(s)}),l&&u)throw new Error(i+' contains ".value" child '+Wr(s)+" in addition to actual children.")}},KT=function(i,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=no(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!$d(u[d]))throw new Error(i+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(uC);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Jt(l,s))throw new Error(i+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},QT=function(i,e,n,s){const l=ha(i,"values");if(typeof e!="object"||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];yt(e,(d,f)=>{const p=new Ue(d);if(Ca(l,f,Xe(n,p)),Sd(p)===".priority"&&!YT(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),KT(l,u)},Xv=function(i,e,n,s){if(!Kv(n))throw new Error(ha(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},XT=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xv(i,e,n)},Gd=function(i,e){if(Ce(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},JT=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$d(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!qT(n))throw new Error(ha(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ta(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!Cd(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function Jv(i,e,n){Ta(i,n),Zv(i,s=>Cd(s,e))}function fn(i,e,n){Ta(i,n),Zv(i,s=>Jt(s,e)||Jt(e,s))}function Zv(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(eI(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function eI(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();qs&&_t("event: "+n.toString()),Ki(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="repo_interrupt",nI=25;class rI{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ZT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ra(),this.transactionQueueTree_=new Wd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iI(i,e,n){if(i.stats_=wd(i.repoInfo_),i.forceRestClient_||bS())i.server_=new na(i.repoInfo_,(s,l,u,d)=>{Ym(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Km(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{mt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Vn(i.repoInfo_,e,(s,l,u,d)=>{Ym(i,s,l,u,d)},s=>{Km(i,s)},s=>{sI(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=zS(i.repoInfo_,()=>new UC(i.stats_,i.server_)),i.infoData_=new DC,i.infoSyncTree_=new $m({startListening:(s,l,u,d)=>{let f=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(f=wa(i.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),qd(i,"connected",!1),i.serverSyncTree_=new $m({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);fn(i.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function e_(i){const n=i.infoData_.getNode(new Ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ia(i){return zT({timestamp:e_(i)})}function Ym(i,e,n,s,l){i.dataUpdateCount++;const u=new Ue(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=$l(n,g=>pt(g));d=bT(i.serverSyncTree_,u,p,l)}else{const p=pt(n);d=DT(i.serverSyncTree_,u,p,l)}else if(s){const p=$l(n,g=>pt(g));d=PT(i.serverSyncTree_,u,p)}else{const p=pt(n);d=wa(i.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=Wi(i,u)),fn(i.eventQueue_,f,d)}function Km(i,e){qd(i,"connected",e),e===!1&&aI(i)}function sI(i,e){yt(e,(n,s)=>{qd(i,n,s)})}function qd(i,e,n){const s=new Ue("/.info/"+e),l=pt(n);i.infoData_.updateSnapshot(s,l);const u=wa(i.infoSyncTree_,s,l);fn(i.eventQueue_,s,u)}function Yd(i){return i.nextWriteId_++}function oI(i,e,n,s,l){ka(i,"set",{path:e.toString(),value:n,priority:s});const u=Ia(i),d=pt(n,s),f=Md(i.serverSyncTree_,e),p=$v(d,f,u),g=Yd(i),w=jv(i.serverSyncTree_,e,p,g,!0);Ta(i.eventQueue_,w),i.server_.put(e.toString(),d.val(!0),(_,A)=>{const D=_==="ok";D||Nt("set at "+e+" failed: "+_);const F=gr(i.serverSyncTree_,g,!D);fn(i.eventQueue_,e,F),Qc(i,l,_,A)});const v=Qd(i,e);Wi(i,v),fn(i.eventQueue_,v,[])}function lI(i,e,n,s){ka(i,"update",{path:e.toString(),value:n});let l=!0;const u=Ia(i),d={};if(yt(n,(f,p)=>{l=!1,d[f]=Hv(Xe(e,f),pt(p),i.serverSyncTree_,u)}),l)_t("update() called with empty data.  Don't do anything."),Qc(i,s,"ok",void 0);else{const f=Yd(i),p=NT(i.serverSyncTree_,e,d,f);Ta(i.eventQueue_,p),i.server_.merge(e.toString(),n,(g,w)=>{const v=g==="ok";v||Nt("update at "+e+" failed: "+g);const _=gr(i.serverSyncTree_,f,!v),A=_.length>0?Wi(i,e):e;fn(i.eventQueue_,A,_),Qc(i,s,g,w)}),yt(n,g=>{const w=Qd(i,Xe(e,g));Wi(i,w)}),fn(i.eventQueue_,e,[])}}function aI(i){ka(i,"onDisconnectEvents");const e=Ia(i),n=ra();Bc(i.onDisconnect_,De(),(l,u)=>{const d=Hv(l,u,i.serverSyncTree_,e);Rv(n,l,d)});let s=[];Bc(n,De(),(l,u)=>{s=s.concat(wa(i.serverSyncTree_,l,u));const d=Qd(i,l);Wi(i,d)}),i.onDisconnect_=ra(),fn(i.eventQueue_,De(),s)}function uI(i,e,n){let s;Ce(e._path)===".info"?s=Gm(i.infoSyncTree_,e,n):s=Gm(i.serverSyncTree_,e,n),Jv(i.eventQueue_,e._path,s)}function cI(i,e,n){let s;Ce(e._path)===".info"?s=Yc(i.infoSyncTree_,e,n):s=Yc(i.serverSyncTree_,e,n),Jv(i.eventQueue_,e._path,s)}function dI(i){i.persistentConnection_&&i.persistentConnection_.interrupt(tI)}function ka(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),_t(n,...e)}function Qc(i,e,n,s){e&&Ki(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function t_(i,e,n){return Md(i.serverSyncTree_,e,n)||ue.EMPTY_NODE}function Kd(i,e=i.transactionQueueTree_){if(e||Ra(i,e),Xi(e)){const n=r_(i,e);j(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&hI(i,vo(e),n)}else qv(e)&&Sa(e,n=>{Kd(i,n)})}function hI(i,e,n){const s=n.map(g=>g.currentWriteId),l=t_(i,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const w=n[g];j(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const v=Ft(e,w.path);u=u.updateChild(v,w.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;i.server_.put(p.toString(),f,g=>{ka(i,"transaction put response",{path:p.toString(),status:g});let w=[];if(g==="ok"){const v=[];for(let _=0;_<n.length;_++)n[_].status=2,w=w.concat(gr(i.serverSyncTree_,n[_].currentWriteId)),n[_].onComplete&&v.push(()=>n[_].onComplete(null,!0,n[_].currentOutputSnapshotResolved)),n[_].unwatcher();Ra(i,Hd(i.transactionQueueTree_,e)),Kd(i,i.transactionQueueTree_),fn(i.eventQueue_,e,w);for(let _=0;_<v.length;_++)Ki(v[_])}else{if(g==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{Nt("transaction at "+p.toString()+" failed: "+g);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=g}Wi(i,e)}},d)}function Wi(i,e){const n=n_(i,e),s=vo(n),l=r_(i,n);return fI(i,l,s),s}function fI(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=Ft(n,p.path);let w=!1,v;if(j(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)w=!0,v=p.abortReason,l=l.concat(gr(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=nI)w=!0,v="maxretry",l=l.concat(gr(i.serverSyncTree_,p.currentWriteId,!0));else{const _=t_(i,p.path,d);p.currentInputSnapshot=_;const A=e[f].update(_.val());if(A!==void 0){Ca("transaction failed: Data returned ",A,p.path);let D=pt(A);typeof A=="object"&&A!=null&&Rn(A,".priority")||(D=D.updatePriority(_.getPriority()));const G=p.currentWriteId,fe=Ia(i),ye=$v(D,_,fe);p.currentOutputSnapshotRaw=D,p.currentOutputSnapshotResolved=ye,p.currentWriteId=Yd(i),d.splice(d.indexOf(G),1),l=l.concat(jv(i.serverSyncTree_,p.path,ye,p.currentWriteId,p.applyLocally)),l=l.concat(gr(i.serverSyncTree_,G,!0))}else w=!0,v="nodata",l=l.concat(gr(i.serverSyncTree_,p.currentWriteId,!0))}fn(i.eventQueue_,n,l),l=[],w&&(e[f].status=2,function(_){setTimeout(_,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}Ra(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)Ki(s[f]);Kd(i,i.transactionQueueTree_)}function n_(i,e){let n,s=i.transactionQueueTree_;for(n=Ce(e);n!==null&&Xi(s)===void 0;)s=Hd(s,n),e=Ve(e),n=Ce(e);return s}function r_(i,e){const n=[];return i_(i,e,n),n.sort((s,l)=>s.order-l.order),n}function i_(i,e,n){const s=Xi(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Sa(e,l=>{i_(i,l,n)})}function Ra(i,e){const n=Xi(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,Gv(e,n.length>0?n:void 0)}Sa(e,s=>{Ra(i,s)})}function Qd(i,e){const n=vo(n_(i,e)),s=Hd(i.transactionQueueTree_,e);return WT(s,l=>{xc(i,l)}),xc(i,s),Yv(s,l=>{xc(i,l)}),n}function xc(i,e){const n=Xi(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(j(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(j(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(gr(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?Gv(e,void 0):n.length=u+1,fn(i.eventQueue_,vo(e),l);for(let d=0;d<s.length;d++)Ki(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function mI(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Nt(`Invalid query segment '${n}' in query '${i}'`)}return e}const Qm=function(i,e){const n=gI(i),s=n.namespace;n.domain==="firebase.com"&&$n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&$n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||IS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new cv(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new Ue(n.pathString)}},gI=function(i){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let w=i.indexOf("/");w===-1&&(w=i.length);let v=i.indexOf("?");v===-1&&(v=i.length),e=i.substring(0,Math.min(w,v)),w<v&&(l=pI(i.substring(w,v)));const _=mI(i.substring(Math.min(i.length,v)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const A=e.slice(0,g);if(A.toLowerCase()==="localhost")n="localhost";else if(A.split(".").length<=2)n=A;else{const D=e.indexOf(".");s=e.substring(0,D).toLowerCase(),n=e.substring(D+1),u=s}"ns"in _&&(u=_.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",vI=function(){let i=0;const e=[];return function(n){const s=n===i;i=n;let l;const u=new Array(8);for(l=7;l>=0;l--)u[l]=Xm.charAt(n%64),n=Math.floor(n/64);j(n===0,"Cannot push at time == 0");let d=u.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)d+=Xm.charAt(e[l]);return j(d.length===20,"nextPushId: Length should be 20."),d}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+mt(this.snapshot.exportVal())}}class yI{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Xd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ke(this._path)?null:Sd(this._path)}get ref(){return new Tr(this._repo,this._path)}get _queryIdentifier(){const e=Lm(this._queryParams),n=_d(e);return n==="{}"?"default":n}get _queryObject(){return Lm(this._queryParams)}isEqual(e){if(e=$t(e),!(e instanceof Xd))return!1;const n=this._repo===e._repo,s=Cd(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+aC(this._path)}}class Tr extends Xd{constructor(e,n){super(e,n,new Rd,!1)}get parent(){const e=yv(this._path);return e===null?null:new Tr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class da{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ue(e),s=lo(this.ref,e);return new da(this._node.getChild(n),s,Je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new da(l,lo(this.ref,s),Je)))}hasChild(e){const n=new Ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ZI(i,e){return i=$t(i),i._checkNotDeleted("ref"),e!==void 0?lo(i._root,e):i._root}function lo(i,e){return i=$t(i),Ce(i._path)===null?XT("child","path",e):Xv("child","path",e),new Tr(i._repo,Xe(i._path,e))}function ek(i,e){i=$t(i),Gd("push",i._path),Qv("push",e,i._path,!0);const n=e_(i._repo),s=vI(n),l=lo(i,s),u=lo(i,s);let d;return e!=null?d=s_(u,e).then(()=>u):d=Promise.resolve(u),l.then=d.then.bind(d),l.catch=d.then.bind(d,void 0),l}function tk(i){return Gd("remove",i._path),s_(i,null)}function s_(i,e){i=$t(i),Gd("set",i._path),Qv("set",e,i._path,!1);const n=new ao;return oI(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}function nk(i,e){QT("update",e,i._path);const n=new ao;return lI(i._repo,i._path,e,n.wrapCallback(()=>{})),n.promise}class Jd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new _I("value",this,new da(e.snapshotNode,new Tr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new yI(this,e,n):null}matches(e){return e instanceof Jd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function EI(i,e,n,s,l){const u=new wI(n,void 0),d=new Jd(u);return uI(i._repo,i,d),()=>cI(i._repo,i,d)}function rk(i,e,n,s){return EI(i,"value",e)}wT(Tr);kT(Tr);/**
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
 */const SI="FIREBASE_DATABASE_EMULATOR_HOST",Xc={};let CI=!1;function TI(i,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),d=$i(u);i.repoInfo_=new cv(e,d,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(i.authTokenProvider_=s)}function II(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||$n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=Qm(u,l),f=d.repoInfo,p;typeof process<"u"&&vm&&(p=vm[SI]),p?(u=`http://${p}?ns=${f.namespace}`,d=Qm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new MS(i.name,i.options,e);JT("Invalid Firebase Database URL",d),ke(d.path)||$n("Database URL must point to the root of a Firebase Database (not including a child path).");const w=RI(f,i,g,new LS(i,n));return new xI(w,i)}function kI(i,e){const n=Xc[e];(!n||n[i.key]!==i)&&$n(`Database ${e}(${i.repoInfo_}) has already been deleted.`),dI(i),delete n[i.key]}function RI(i,e,n,s){let l=Xc[e.name];l||(l={},Xc[e.name]=l);let u=l[i.toURLString()];return u&&$n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new rI(i,CI,n,s),l[i.toURLString()]=u,u}class xI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tr(this._repo,De())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$n("Cannot call "+e+" on a deleted database.")}}function NI(i=vg(),e){const n=sd(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=G0("database");s&&PI(n,...s)}return n}function PI(i,e,n,s={}){i=$t(i),i._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=i._repoInternal;if(i._instanceStarted){if(l===i._repoInternal.repoInfo_.host&&Yr(s,u.repoInfo_.emulatorOptions))return;$n("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&$n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new jl(jl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:q0(s.mockUserToken,i.app.options.projectId);d=new jl(f)}$i(e)&&(ug(e),cg("Database",!0)),TI(u,l,s,d)}/**
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
 */function AI(i){yS(qi),Fi(new Kr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return II(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),yr(_m,ym,i),yr(_m,ym,"esm2017")}Vn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Vn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};AI();const OI={apiKey:"AIzaSyAMDp5WhCZy0tDz-_VcN3bz8HUW2Yp0lw0",authDomain:"personal-portfolio-37a0a.firebaseapp.com",databaseURL:"https://personal-portfolio-37a0a-default-rtdb.firebaseio.com",projectId:"personal-portfolio-37a0a",storageBucket:"personal-portfolio-37a0a.appspot.com",messagingSenderId:"695560029777",appId:"1:695560029777:web:2f666fd6fe7aa39b0c1a70",measurementId:"G-64P0PSRQN5"},o_=gg(OI),DI=vS(o_),ik=NI(o_),sk=new Un,l_=Re.createContext();function bI({children:i}){const[e,n]=Re.useState(null),[s,l]=Re.useState(!0);Re.useEffect(()=>DI.onAuthStateChanged(f=>{n(f),l(!1)}),[]);const u={currentUser:e,isAdmin:(e==null?void 0:e.email)==="e2340065@bit.uom.lk"};return K.jsx(l_.Provider,{value:u,children:!s&&i})}function ok(){return Re.useContext(l_)}function LI({SIM_RESOLUTION:i=128,DYE_RESOLUTION:e=1440,CAPTURE_RESOLUTION:n=512,DENSITY_DISSIPATION:s=3.5,VELOCITY_DISSIPATION:l=2,PRESSURE:u=.1,PRESSURE_ITERATIONS:d=20,CURL:f=3,SPLAT_RADIUS:p=.2,SPLAT_FORCE:g=6e3,SHADING:w=!0,COLOR_UPDATE_SPEED:v=10,BACK_COLOR:_={r:.5,g:0,b:0},TRANSPARENT:A=!0}){const D=Re.useRef(null);return Re.useEffect(()=>{const F=D.current;if(!F)return;function G(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}let fe={SIM_RESOLUTION:i,DYE_RESOLUTION:e,CAPTURE_RESOLUTION:n,DENSITY_DISSIPATION:s,VELOCITY_DISSIPATION:l,PRESSURE:u,PRESSURE_ITERATIONS:d,CURL:f,SPLAT_RADIUS:p,SPLAT_FORCE:g,SHADING:w,COLOR_UPDATE_SPEED:v,PAUSED:!1,BACK_COLOR:_,TRANSPARENT:A},ye=[new G];const{gl:T,ext:we}=Ge(F);we.supportLinearFiltering||(fe.DYE_RESOLUTION=256,fe.SHADING=!1);function Ge(E){const N={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let P=E.getContext("webgl2",N);const U=!!P;U||(P=E.getContext("webgl",N)||E.getContext("experimental-webgl",N));let J,me;U?(P.getExtension("EXT_color_buffer_float"),me=P.getExtension("OES_texture_float_linear")):(J=P.getExtension("OES_texture_half_float"),me=P.getExtension("OES_texture_half_float_linear")),P.clearColor(0,0,0,1);const Ee=U?P.HALF_FLOAT:J&&J.HALF_FLOAT_OES;let it,et,at;return U?(it=ge(P,P.RGBA16F,P.RGBA,Ee),et=ge(P,P.RG16F,P.RG,Ee),at=ge(P,P.R16F,P.RED,Ee)):(it=ge(P,P.RGBA,P.RGBA,Ee),et=ge(P,P.RGBA,P.RGBA,Ee),at=ge(P,P.RGBA,P.RGBA,Ee)),{gl:P,ext:{formatRGBA:it,formatRG:et,formatR:at,halfFloatTexType:Ee,supportLinearFiltering:me}}}function ge(E,N,P,U){if(!ze(E,N,P,U))switch(N){case E.R16F:return ge(E,E.RG16F,E.RG,U);case E.RG16F:return ge(E,E.RGBA16F,E.RGBA,U);default:return null}return{internalFormat:N,format:P}}function ze(E,N,P,U){const J=E.createTexture();E.bindTexture(E.TEXTURE_2D,J),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MIN_FILTER,E.NEAREST),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MAG_FILTER,E.NEAREST),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_WRAP_S,E.CLAMP_TO_EDGE),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_WRAP_T,E.CLAMP_TO_EDGE),E.texImage2D(E.TEXTURE_2D,0,N,4,4,0,P,U,null);const me=E.createFramebuffer();return E.bindFramebuffer(E.FRAMEBUFFER,me),E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,J,0),E.checkFramebufferStatus(E.FRAMEBUFFER)===E.FRAMEBUFFER_COMPLETE}class _e{constructor(N,P){this.vertexShader=N,this.fragmentShaderSource=P,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(N){let P=0;for(let J=0;J<N.length;J++)P+=ss(N[J]);let U=this.programs[P];if(U==null){let J=B(T.FRAGMENT_SHADER,this.fragmentShaderSource,N);U=qe(this.vertexShader,J),this.programs[P]=U}U!==this.activeProgram&&(this.uniforms=ee(U),this.activeProgram=U)}bind(){T.useProgram(this.activeProgram)}}class xe{constructor(N,P){this.uniforms={},this.program=qe(N,P),this.uniforms=ee(this.program)}bind(){T.useProgram(this.program)}}function qe(E,N){let P=T.createProgram();return T.attachShader(P,E),T.attachShader(P,N),T.linkProgram(P),T.getProgramParameter(P,T.LINK_STATUS)||console.trace(T.getProgramInfoLog(P)),P}function ee(E){let N=[],P=T.getProgramParameter(E,T.ACTIVE_UNIFORMS);for(let U=0;U<P;U++){let J=T.getActiveUniform(E,U).name;N[J]=T.getUniformLocation(E,J)}return N}function B(E,N,P){N=he(N,P);const U=T.createShader(E);return T.shaderSource(U,N),T.compileShader(U),T.getShaderParameter(U,T.COMPILE_STATUS)||console.trace(T.getShaderInfoLog(U)),U}function he(E,N){if(!N)return E;let P="";return N.forEach(U=>{P+="#define "+U+`
`}),P+E}const q=B(T.VERTEX_SHADER,`
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `),be=B(T.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),Me=B(T.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
     `),Ne=`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `,V=B(T.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
      `),te=B(T.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
            #ifdef MANUAL_FILTERING
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                vec4 result = bilerp(uSource, coord, dyeTexelSize);
            #else
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                vec4 result = texture2D(uSource, coord);
            #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }
      `,we.supportLinearFiltering?null:["MANUAL_FILTERING"]),H=B(T.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `),I=B(T.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `),O=B(T.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),se=B(T.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `),oe=B(T.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),re=(T.bindBuffer(T.ARRAY_BUFFER,T.createBuffer()),T.bufferData(T.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),T.STATIC_DRAW),T.bindBuffer(T.ELEMENT_ARRAY_BUFFER,T.createBuffer()),T.bufferData(T.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),T.STATIC_DRAW),T.vertexAttribPointer(0,2,T.FLOAT,!1,0,0),T.enableVertexAttribArray(0),(E,N=!1)=>{E==null?(T.viewport(0,0,T.drawingBufferWidth,T.drawingBufferHeight),T.bindFramebuffer(T.FRAMEBUFFER,null)):(T.viewport(0,0,E.width,E.height),T.bindFramebuffer(T.FRAMEBUFFER,E.fbo)),N&&(T.clearColor(0,0,0,1),T.clear(T.COLOR_BUFFER_BIT)),T.drawElements(T.TRIANGLES,6,T.UNSIGNED_SHORT,0)});let ne,W,ie,ve,Oe;const wt=new xe(q,be),Et=new xe(q,Me),Ie=new xe(q,V),pe=new xe(q,te),Ze=new xe(q,H),kt=new xe(q,I),zt=new xe(q,O),Ir=new xe(q,se),Gn=new xe(q,oe),pn=new _e(q,Ne);function xn(){let E=is(fe.SIM_RESOLUTION),N=is(fe.DYE_RESOLUTION);const P=we.halfFloatTexType,U=we.formatRGBA,J=we.formatRG,me=we.formatR,Ee=we.supportLinearFiltering?T.LINEAR:T.NEAREST;T.disable(T.BLEND),ne?ne=Ji(ne,N.width,N.height,U.internalFormat,U.format,P,Ee):ne=ii(N.width,N.height,U.internalFormat,U.format,P,Ee),W?W=Ji(W,E.width,E.height,J.internalFormat,J.format,P,Ee):W=ii(E.width,E.height,J.internalFormat,J.format,P,Ee),ie=mn(E.width,E.height,me.internalFormat,me.format,P,T.NEAREST),ve=mn(E.width,E.height,me.internalFormat,me.format,P,T.NEAREST),Oe=ii(E.width,E.height,me.internalFormat,me.format,P,T.NEAREST)}function mn(E,N,P,U,J,me){T.activeTexture(T.TEXTURE0);let Ee=T.createTexture();T.bindTexture(T.TEXTURE_2D,Ee),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MIN_FILTER,me),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MAG_FILTER,me),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_WRAP_S,T.CLAMP_TO_EDGE),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_WRAP_T,T.CLAMP_TO_EDGE),T.texImage2D(T.TEXTURE_2D,0,P,E,N,0,U,J,null);let it=T.createFramebuffer();T.bindFramebuffer(T.FRAMEBUFFER,it),T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ee,0),T.viewport(0,0,E,N),T.clear(T.COLOR_BUFFER_BIT);let et=1/E,at=1/N;return{texture:Ee,fbo:it,width:E,height:N,texelSizeX:et,texelSizeY:at,attach(_n){return T.activeTexture(T.TEXTURE0+_n),T.bindTexture(T.TEXTURE_2D,Ee),_n}}}function ii(E,N,P,U,J,me){let Ee=mn(E,N,P,U,J,me),it=mn(E,N,P,U,J,me);return{width:E,height:N,texelSizeX:Ee.texelSizeX,texelSizeY:Ee.texelSizeY,get read(){return Ee},set read(et){Ee=et},get write(){return it},set write(et){it=et},swap(){let et=Ee;Ee=it,it=et}}}function _o(E,N,P,U,J,me,Ee){let it=mn(N,P,U,J,me,Ee);return wt.bind(),T.uniform1i(wt.uniforms.uTexture,E.attach(0)),re(it),it}function Ji(E,N,P,U,J,me,Ee){return E.width===N&&E.height===P||(E.read=_o(E.read,N,P,U,J,me,Ee),E.write=mn(N,P,U,J,me,Ee),E.width=N,E.height=P,E.texelSizeX=1/N,E.texelSizeY=1/P),E}function yo(){let E=[];fe.SHADING&&E.push("SHADING"),pn.setKeywords(E)}yo(),xn();let si=Date.now(),Nn=0;function kr(){const E=Rr();xr()&&xn(),xa(E),wo(),Eo(E),Na(null),requestAnimationFrame(kr)}function Rr(){let E=Date.now(),N=(E-si)/1e3;return N=Math.min(N,.016666),si=E,N}function xr(){let E=rt(F.clientWidth),N=rt(F.clientHeight);return F.width!==E||F.height!==N?(F.width=E,F.height=N,!0):!1}function xa(E){Nn+=E*fe.COLOR_UPDATE_SPEED,Nn>=1&&(Nn=rs(Nn,0,1),ye.forEach(N=>{N.color=Nr()}))}function wo(){ye.forEach(E=>{E.moved&&(E.moved=!1,es(E))})}function Eo(E){T.disable(T.BLEND),kt.bind(),T.uniform2f(kt.uniforms.texelSize,W.texelSizeX,W.texelSizeY),T.uniform1i(kt.uniforms.uVelocity,W.read.attach(0)),re(ve),zt.bind(),T.uniform2f(zt.uniforms.texelSize,W.texelSizeX,W.texelSizeY),T.uniform1i(zt.uniforms.uVelocity,W.read.attach(0)),T.uniform1i(zt.uniforms.uCurl,ve.attach(1)),T.uniform1f(zt.uniforms.curl,fe.CURL),T.uniform1f(zt.uniforms.dt,E),re(W.write),W.swap(),Ze.bind(),T.uniform2f(Ze.uniforms.texelSize,W.texelSizeX,W.texelSizeY),T.uniform1i(Ze.uniforms.uVelocity,W.read.attach(0)),re(ie),Et.bind(),T.uniform1i(Et.uniforms.uTexture,Oe.read.attach(0)),T.uniform1f(Et.uniforms.value,fe.PRESSURE),re(Oe.write),Oe.swap(),Ir.bind(),T.uniform2f(Ir.uniforms.texelSize,W.texelSizeX,W.texelSizeY),T.uniform1i(Ir.uniforms.uDivergence,ie.attach(0));for(let P=0;P<fe.PRESSURE_ITERATIONS;P++)T.uniform1i(Ir.uniforms.uPressure,Oe.read.attach(1)),re(Oe.write),Oe.swap();Gn.bind(),T.uniform2f(Gn.uniforms.texelSize,W.texelSizeX,W.texelSizeY),T.uniform1i(Gn.uniforms.uPressure,Oe.read.attach(0)),T.uniform1i(Gn.uniforms.uVelocity,W.read.attach(1)),re(W.write),W.swap(),pe.bind(),T.uniform2f(pe.uniforms.texelSize,W.texelSizeX,W.texelSizeY),we.supportLinearFiltering||T.uniform2f(pe.uniforms.dyeTexelSize,W.texelSizeX,W.texelSizeY);let N=W.read.attach(0);T.uniform1i(pe.uniforms.uVelocity,N),T.uniform1i(pe.uniforms.uSource,N),T.uniform1f(pe.uniforms.dt,E),T.uniform1f(pe.uniforms.dissipation,fe.VELOCITY_DISSIPATION),re(W.write),W.swap(),we.supportLinearFiltering||T.uniform2f(pe.uniforms.dyeTexelSize,ne.texelSizeX,ne.texelSizeY),T.uniform1i(pe.uniforms.uVelocity,W.read.attach(0)),T.uniform1i(pe.uniforms.uSource,ne.read.attach(1)),T.uniform1f(pe.uniforms.dissipation,fe.DENSITY_DISSIPATION),re(ne.write),ne.swap()}function Na(E){T.blendFunc(T.ONE,T.ONE_MINUS_SRC_ALPHA),T.enable(T.BLEND),Zi(E)}function Zi(E){let N=T.drawingBufferWidth,P=T.drawingBufferHeight;pn.bind(),fe.SHADING&&T.uniform2f(pn.uniforms.texelSize,1/N,1/P),T.uniform1i(pn.uniforms.uTexture,ne.read.attach(0)),re(E)}function es(E){let N=E.deltaX*fe.SPLAT_FORCE,P=E.deltaY*fe.SPLAT_FORCE;oi(E.texcoordX,E.texcoordY,N,P,E.color)}function ts(E){const N=Nr();N.r*=10,N.g*=10,N.b*=10;let P=10*(Math.random()-.5),U=30*(Math.random()-.5);oi(E.texcoordX,E.texcoordY,P,U,N)}function oi(E,N,P,U,J){Ie.bind(),T.uniform1i(Ie.uniforms.uTarget,W.read.attach(0)),T.uniform1f(Ie.uniforms.aspectRatio,F.width/F.height),T.uniform2f(Ie.uniforms.point,E,N),T.uniform3f(Ie.uniforms.color,P,U,0),T.uniform1f(Ie.uniforms.radius,ns(fe.SPLAT_RADIUS/100)),re(W.write),W.swap(),T.uniform1i(Ie.uniforms.uTarget,ne.read.attach(0)),T.uniform3f(Ie.uniforms.color,J.r,J.g,J.b),re(ne.write),ne.swap()}function ns(E){let N=F.width/F.height;return N>1&&(E*=N),E}function gn(E,N,P,U){E.id=N,E.down=!0,E.moved=!1,E.texcoordX=P/F.width,E.texcoordY=1-U/F.height,E.prevTexcoordX=E.texcoordX,E.prevTexcoordY=E.texcoordY,E.deltaX=0,E.deltaY=0,E.color=Nr()}function vn(E,N,P,U){E.prevTexcoordX=E.texcoordX,E.prevTexcoordY=E.texcoordY,E.texcoordX=N/F.width,E.texcoordY=1-P/F.height,E.deltaX=Co(E.texcoordX-E.prevTexcoordX),E.deltaY=To(E.texcoordY-E.prevTexcoordY),E.moved=Math.abs(E.deltaX)>0||Math.abs(E.deltaY)>0,E.color=U}function So(E){E.down=!1}function Co(E){let N=F.width/F.height;return N<1&&(E*=N),E}function To(E){let N=F.width/F.height;return N>1&&(E/=N),E}function Nr(){let E=Io(Math.random(),1,1);return E.r*=.15,E.g*=.15,E.b*=.15,E}function Io(E,N,P){let U,J,me,Ee,it,et,at,_n;switch(Ee=Math.floor(E*6),it=E*6-Ee,et=P*(1-N),at=P*(1-it*N),_n=P*(1-(1-it)*N),Ee%6){case 0:U=P,J=_n,me=et;break;case 1:U=at,J=P,me=et;break;case 2:U=et,J=P,me=_n;break;case 3:U=et,J=at,me=P;break;case 4:U=_n,J=et,me=P;break;case 5:U=P,J=et,me=at;break}return{r:U,g:J,b:me}}function rs(E,N,P){const U=P-N;return(E-N)%U+N}function is(E){let N=T.drawingBufferWidth/T.drawingBufferHeight;N<1&&(N=1/N);const P=Math.round(E),U=Math.round(E*N);return T.drawingBufferWidth>T.drawingBufferHeight?{width:U,height:P}:{width:P,height:U}}function rt(E){const N=window.devicePixelRatio||1;return Math.floor(E*N)}function ss(E){if(E.length===0)return 0;let N=0;for(let P=0;P<E.length;P++)N=(N<<5)-N+E.charCodeAt(P),N|=0;return N}window.addEventListener("mousedown",E=>{let N=ye[0],P=rt(E.clientX),U=rt(E.clientY);gn(N,-1,P,U),ts(N)}),document.body.addEventListener("mousemove",function E(N){let P=ye[0],U=rt(N.clientX),J=rt(N.clientY),me=Nr();kr(),vn(P,U,J,me),document.body.removeEventListener("mousemove",E)}),window.addEventListener("mousemove",E=>{let N=ye[0],P=rt(E.clientX),U=rt(E.clientY),J=N.color;vn(N,P,U,J)}),document.body.addEventListener("touchstart",function E(N){const P=N.targetTouches;let U=ye[0];for(let J=0;J<P.length;J++){let me=rt(P[J].clientX),Ee=rt(P[J].clientY);kr(),gn(U,P[J].identifier,me,Ee)}document.body.removeEventListener("touchstart",E)}),window.addEventListener("touchstart",E=>{const N=E.targetTouches;let P=ye[0];for(let U=0;U<N.length;U++){let J=rt(N[U].clientX),me=rt(N[U].clientY);gn(P,N[U].identifier,J,me)}}),window.addEventListener("touchmove",E=>{const N=E.targetTouches;let P=ye[0];for(let U=0;U<N.length;U++){let J=rt(N[U].clientX),me=rt(N[U].clientY);vn(P,J,me,P.color)}},!1),window.addEventListener("touchend",E=>{const N=E.changedTouches;let P=ye[0];for(let U=0;U<N.length;U++)So(P)}),kr()},[i,e,n,s,l,u,d,f,p,g,w,v,_,A]),K.jsx("div",{className:"fixed top-0 left-0 z-50 pointer-events-none w-full h-full",children:K.jsx("canvas",{ref:D,id:"fluid",className:"w-screen h-screen block"})})}const MI=Re.lazy(()=>Ht(()=>import("./HeaderBar-DBPUmx14.js"),__vite__mapDeps([0,1,2,3]))),FI=Re.lazy(()=>Ht(()=>import("./Home-COt1nI3z.js"),__vite__mapDeps([4,5]))),UI=Re.lazy(()=>Ht(()=>import("./AboutUs-vVVczqxc.js"),__vite__mapDeps([6,7]))),zI=Re.lazy(()=>Ht(()=>import("./Education-D1cHh0da.js"),__vite__mapDeps([8,9,5,10]))),jI=Re.lazy(()=>Ht(()=>import("./SkillsData-DyJoB2MH.js"),__vite__mapDeps([11,12,13,14,3]))),BI=Re.lazy(()=>Ht(()=>import("./LicensesCertifications-Dar1dnbT.js"),[])),VI=Re.lazy(()=>Ht(()=>import("./WorkExperience-CWM-io6R.js"),[])),WI=Re.lazy(()=>Ht(()=>import("./ProjectsData-DPVS_153.js"),__vite__mapDeps([15,7,12,14,9,16]))),HI=Re.lazy(()=>Ht(()=>import("./designpage-B9cvjJj4.js"),__vite__mapDeps([17,12,9,13]))),$I=Re.lazy(()=>Ht(()=>import("./videos-iOkqNNTb.js"),[])),GI=Re.lazy(()=>Ht(()=>import("./Testimonials-BnRKMACc.js"),__vite__mapDeps([18,2,10]))),qI=Re.lazy(()=>Ht(()=>import("./Contact-CErEwjfp.js"),[])),YI=Re.lazy(()=>Ht(()=>import("./Copyright-CQJ7hSnr.js"),__vite__mapDeps([19,1,12,9,10])));function KI(){return Re.useEffect(()=>{d0.init({duration:800,once:!0})},[]),K.jsx(bI,{children:K.jsxs("div",{children:[K.jsx(M0,{}),K.jsxs(Re.Suspense,{fallback:K.jsx("div",{className:"text-center mt-10",children:"Loading..."}),children:[K.jsx(LI,{}),K.jsx(MI,{}),K.jsxs("main",{children:[K.jsx(ln,{id:"home",Component:FI}),K.jsx(ln,{id:"videosection",Component:$I}),K.jsx(ln,{id:"about",Component:UI}),K.jsx(ln,{id:"education-journey",Component:zI}),K.jsx(ln,{id:"dexterity",Component:jI}),K.jsx(ln,{id:"professional-designations",Component:BI}),K.jsx(ln,{id:"professional-journey",Component:VI}),K.jsx(ln,{id:"creative-ventures",Component:WI}),K.jsx(ln,{id:"design-scape",Component:HI}),K.jsx(ln,{id:"testimonials",Component:GI}),K.jsx(ln,{id:"contact",Component:qI})]}),K.jsx(YI,{})]})]})})}function ln({id:i,Component:e}){return K.jsx("section",{id:i,children:K.jsx(e,{})})}s0.createRoot(document.getElementById("root")).render(K.jsx(Re.StrictMode,{children:K.jsx(KI,{})}));export{d0 as A,C0 as F,ti as G,Gr as R,I0 as S,b0 as X,QI as a,ZI as b,Zc as c,ik as d,DI as e,XI as f,Jm as g,nk as h,ek as i,K as j,tk as k,w0 as l,S0 as m,T0 as n,rk as o,sk as p,E0 as q,Re as r,JI as s,y0 as t,ok as u};
