/*! For license information please see main.ad12034f.js.LICENSE.txt */
(()=>{"use strict";var t={672:(t,e,n)=>{var o=n(43);function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(s(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},a=Symbol.for("react.portal");var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(t,e){return"font"===t?"":"string"===typeof e?"use-credentials"===e?e:"":void 0}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,e.createPortal=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)throw Error(s(299));return function(t,e,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:a,key:null==o?null:""+o,children:t,containerInfo:e,implementation:n}}(t,e,null,n)},e.flushSync=function(t){var e=c.T,n=r.p;try{if(c.T=null,r.p=2,t)return t()}finally{c.T=e,r.p=n,r.d.f()}},e.preconnect=function(t,e){"string"===typeof t&&(e?e="string"===typeof(e=e.crossOrigin)?"use-credentials"===e?e:"":void 0:e=null,r.d.C(t,e))},e.prefetchDNS=function(t){"string"===typeof t&&r.d.D(t)},e.preinit=function(t,e){if("string"===typeof t&&e&&"string"===typeof e.as){var n=e.as,o=u(n,e.crossOrigin),s="string"===typeof e.integrity?e.integrity:void 0,i="string"===typeof e.fetchPriority?e.fetchPriority:void 0;"style"===n?r.d.S(t,"string"===typeof e.precedence?e.precedence:void 0,{crossOrigin:o,integrity:s,fetchPriority:i}):"script"===n&&r.d.X(t,{crossOrigin:o,integrity:s,fetchPriority:i,nonce:"string"===typeof e.nonce?e.nonce:void 0})}},e.preinitModule=function(t,e){if("string"===typeof t)if("object"===typeof e&&null!==e){if(null==e.as||"script"===e.as){var n=u(e.as,e.crossOrigin);r.d.M(t,{crossOrigin:n,integrity:"string"===typeof e.integrity?e.integrity:void 0,nonce:"string"===typeof e.nonce?e.nonce:void 0})}}else null==e&&r.d.M(t)},e.preload=function(t,e){if("string"===typeof t&&"object"===typeof e&&null!==e&&"string"===typeof e.as){var n=e.as,o=u(n,e.crossOrigin);r.d.L(t,n,{crossOrigin:o,integrity:"string"===typeof e.integrity?e.integrity:void 0,nonce:"string"===typeof e.nonce?e.nonce:void 0,type:"string"===typeof e.type?e.type:void 0,fetchPriority:"string"===typeof e.fetchPriority?e.fetchPriority:void 0,referrerPolicy:"string"===typeof e.referrerPolicy?e.referrerPolicy:void 0,imageSrcSet:"string"===typeof e.imageSrcSet?e.imageSrcSet:void 0,imageSizes:"string"===typeof e.imageSizes?e.imageSizes:void 0,media:"string"===typeof e.media?e.media:void 0})}},e.preloadModule=function(t,e){if("string"===typeof t)if(e){var n=u(e.as,e.crossOrigin);r.d.m(t,{as:"string"===typeof e.as&&"script"!==e.as?e.as:void 0,crossOrigin:n,integrity:"string"===typeof e.integrity?e.integrity:void 0})}else r.d.m(t)},e.requestFormReset=function(t){r.d.r(t)},e.unstable_batchedUpdates=function(t,e){return t(e)},e.useFormState=function(t,e,n){return c.H.useFormState(t,e,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version="19.0.0"},950:(t,e,n)=>{!function t(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}(),t.exports=n(672)},799:(t,e)=>{var n=Symbol.for("react.transitional.element");function o(t,e,o){var s=null;if(void 0!==o&&(s=""+o),void 0!==e.key&&(s=""+e.key),"key"in e)for(var i in o={},e)"key"!==i&&(o[i]=e[i]);else o=e;return e=o.ref,{$$typeof:n,type:t,key:s,ref:void 0!==e?e:null,props:o}}Symbol.for("react.fragment"),e.jsx=o,e.jsxs=o},288:(t,e)=>{var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),a=Symbol.for("react.consumer"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function v(t,e,n){this.props=t,this.context=e,this.refs=g,this.updater=n||p}function m(){}function E(t,e,n){this.props=t,this.context=e,this.refs=g,this.updater=n||p}v.prototype.isReactComponent={},v.prototype.setState=function(t,e){if("object"!==typeof t&&"function"!==typeof t&&null!=t)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},v.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},m.prototype=v.prototype;var _=E.prototype=new m;_.constructor=E,y(_,v.prototype),_.isPureReactComponent=!0;var C=Array.isArray,O={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function T(t,e,o,s,i,r){return o=r.ref,{$$typeof:n,type:t,key:e,ref:void 0!==o?o:null,props:r}}function b(t){return"object"===typeof t&&null!==t&&t.$$typeof===n}var R=/\/+/g;function A(t,e){return"object"===typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function w(){}function I(t,e,s,i,r){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var c,u,l=!1;if(null===t)l=!0;else switch(a){case"bigint":case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case n:case o:l=!0;break;case f:return I((l=t._init)(t._payload),e,s,i,r)}}if(l)return r=r(t),l=""===i?"."+A(t,0):i,C(r)?(s="",null!=l&&(s=l.replace(R,"$&/")+"/"),I(r,e,s,"",(function(t){return t}))):null!=r&&(b(r)&&(c=r,u=s+(null==r.key||t&&t.key===r.key?"":(""+r.key).replace(R,"$&/")+"/")+l,r=T(c.type,u,void 0,0,0,c.props)),e.push(r)),1;l=0;var d,p=""===i?".":i+":";if(C(t))for(var y=0;y<t.length;y++)l+=I(i=t[y],e,s,a=p+A(i,y),r);else if("function"===typeof(y=null===(d=t)||"object"!==typeof d?null:"function"===typeof(d=h&&d[h]||d["@@iterator"])?d:null))for(t=y.call(t),y=0;!(i=t.next()).done;)l+=I(i=i.value,e,s,a=p+A(i,y++),r);else if("object"===a){if("function"===typeof t.then)return I(function(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch("string"===typeof t.status?t.then(w,w):(t.status="pending",t.then((function(e){"pending"===t.status&&(t.status="fulfilled",t.value=e)}),(function(e){"pending"===t.status&&(t.status="rejected",t.reason=e)}))),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}(t),e,s,i,r);throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return l}function N(t,e,n){if(null==t)return t;var o=[],s=0;return I(t,o,"","",(function(t){return e.call(n,t,s++)})),o}function x(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var H="function"===typeof reportError?reportError:function(t){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof t&&null!==t&&"string"===typeof t.message?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",t);console.error(t)};function M(){}e.Children={map:N,forEach:function(t,e,n){N(t,(function(){e.apply(this,arguments)}),n)},count:function(t){var e=0;return N(t,(function(){e++})),e},toArray:function(t){return N(t,(function(t){return t}))||[]},only:function(t){if(!b(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},e.Component=v,e.Fragment=s,e.Profiler=r,e.PureComponent=E,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,e.act=function(){throw Error("act(...) is not supported in production builds of React.")},e.cache=function(t){return function(){return t.apply(null,arguments)}},e.cloneElement=function(t,e,n){if(null===t||void 0===t)throw Error("The argument must be a React element, but you passed "+t+".");var o=y({},t.props),s=t.key;if(null!=e)for(i in void 0!==e.ref&&void 0,void 0!==e.key&&(s=""+e.key),e)!S.call(e,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===e.ref||(o[i]=e[i]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var r=Array(i),a=0;a<i;a++)r[a]=arguments[a+2];o.children=r}return T(t.type,s,void 0,0,0,o)},e.createContext=function(t){return(t={$$typeof:c,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider=t,t.Consumer={$$typeof:a,_context:t},t},e.createElement=function(t,e,n){var o,s={},i=null;if(null!=e)for(o in void 0!==e.key&&(i=""+e.key),e)S.call(e,o)&&"key"!==o&&"__self"!==o&&"__source"!==o&&(s[o]=e[o]);var r=arguments.length-2;if(1===r)s.children=n;else if(1<r){for(var a=Array(r),c=0;c<r;c++)a[c]=arguments[c+2];s.children=a}if(t&&t.defaultProps)for(o in r=t.defaultProps)void 0===s[o]&&(s[o]=r[o]);return T(t,i,void 0,0,0,s)},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:u,render:t}},e.isValidElement=b,e.lazy=function(t){return{$$typeof:f,_payload:{_status:-1,_result:t},_init:x}},e.memo=function(t,e){return{$$typeof:d,type:t,compare:void 0===e?null:e}},e.startTransition=function(t){var e=O.T,n={};O.T=n;try{var o=t(),s=O.S;null!==s&&s(n,o),"object"===typeof o&&null!==o&&"function"===typeof o.then&&o.then(M,H)}catch(i){H(i)}finally{O.T=e}},e.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},e.use=function(t){return O.H.use(t)},e.useActionState=function(t,e,n){return O.H.useActionState(t,e,n)},e.useCallback=function(t,e){return O.H.useCallback(t,e)},e.useContext=function(t){return O.H.useContext(t)},e.useDebugValue=function(){},e.useDeferredValue=function(t,e){return O.H.useDeferredValue(t,e)},e.useEffect=function(t,e){return O.H.useEffect(t,e)},e.useId=function(){return O.H.useId()},e.useImperativeHandle=function(t,e,n){return O.H.useImperativeHandle(t,e,n)},e.useInsertionEffect=function(t,e){return O.H.useInsertionEffect(t,e)},e.useLayoutEffect=function(t,e){return O.H.useLayoutEffect(t,e)},e.useMemo=function(t,e){return O.H.useMemo(t,e)},e.useOptimistic=function(t,e){return O.H.useOptimistic(t,e)},e.useReducer=function(t,e,n){return O.H.useReducer(t,e,n)},e.useRef=function(t){return O.H.useRef(t)},e.useState=function(t){return O.H.useState(t)},e.useSyncExternalStore=function(t,e,n){return O.H.useSyncExternalStore(t,e,n)},e.useTransition=function(){return O.H.useTransition()},e.version="19.0.0"},43:(t,e,n)=>{t.exports=n(288)},579:(t,e,n)=>{t.exports=n(799)}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}var o,s,i,r=n(43),a=n(950);!function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"}(o||(o={})),function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"}(s||(s={})),function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"}(i||(i={}));const c=["user","model","function","system"];var u,l,d,f,h,p,y;!function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"}(u||(u={})),function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"}(l||(l={})),function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"}(d||(d={})),function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"}(f||(f={})),function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"}(h||(h={})),function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"}(p||(p={})),function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"}(y||(y={}));class g extends Error{constructor(t){super("[GoogleGenerativeAI Error]: ".concat(t))}}class v extends g{constructor(t,e){super(t),this.response=e}}class m extends g{constructor(t,e,n,o){super(t),this.status=e,this.statusText=n,this.errorDetails=o}}class E extends g{}var _;!function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"}(_||(_={}));class C{constructor(t,e,n,o,s){this.model=t,this.task=e,this.apiKey=n,this.stream=o,this.requestOptions=s}toString(){var t,e;const n=(null===(t=this.requestOptions)||void 0===t?void 0:t.apiVersion)||"v1beta",o=(null===(e=this.requestOptions)||void 0===e?void 0:e.baseUrl)||"https://generativelanguage.googleapis.com";let s="".concat(o,"/").concat(n,"/").concat(this.model,":").concat(this.task);return this.stream&&(s+="?alt=sse"),s}}async function O(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(t){const e=[];return(null===t||void 0===t?void 0:t.apiClient)&&e.push(t.apiClient),e.push("".concat("genai-js","/").concat("0.19.0")),e.join(" ")}(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let o=null===(e=t.requestOptions)||void 0===e?void 0:e.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(s){throw new E("unable to convert customHeaders value ".concat(JSON.stringify(o)," to Headers: ").concat(s.message))}for(const[t,e]of o.entries()){if("x-goog-api-key"===t)throw new E("Cannot set reserved header name ".concat(t));if("x-goog-api-client"===t)throw new E("Header name ".concat(t," can only be set using the apiClient field"));n.append(t,e)}}return n}async function S(t,e,n,o,s){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:fetch;const{url:a,fetchOptions:c}=await async function(t,e,n,o,s,i){const r=new C(t,e,n,o,i);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},T(i)),{method:"POST",headers:await O(r),body:s})}}(t,e,n,o,s,i);return async function(t,e){let n,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:fetch;try{n=await o(t,e)}catch(s){!function(t,e){let n=t;t instanceof m||t instanceof E||(n=new g("Error fetching from ".concat(e.toString(),": ").concat(t.message)),n.stack=t.stack);throw n}(s,t)}n.ok||await async function(t,e){let n,o="";try{const e=await t.json();o=e.error.message,e.error.details&&(o+=" ".concat(JSON.stringify(e.error.details)),n=e.error.details)}catch(s){}throw new m("Error fetching from ".concat(e.toString(),": [").concat(t.status," ").concat(t.statusText,"] ").concat(o),t.status,t.statusText,n)}(n,t);return n}(a,c,r)}function T(t){const e={};if(void 0!==(null===t||void 0===t?void 0:t.signal)||(null===t||void 0===t?void 0:t.timeout)>=0){const n=new AbortController;(null===t||void 0===t?void 0:t.timeout)>=0&&setTimeout((()=>n.abort()),t.timeout),(null===t||void 0===t?void 0:t.signal)&&t.signal.addEventListener("abort",(()=>{n.abort()})),e.signal=n.signal}return e}function b(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn("This response had ".concat(t.candidates.length," ")+"candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates."),w(t.candidates[0]))throw new v("".concat(I(t)),t);return function(t){var e,n,o,s;const i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(const r of null===(s=null===(o=t.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)r.text&&i.push(r.text),r.executableCode&&i.push("\n```"+r.executableCode.language+"\n"+r.executableCode.code+"\n```\n"),r.codeExecutionResult&&i.push("\n```\n"+r.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(t)}if(t.promptFeedback)throw new v("Text not available. ".concat(I(t)),t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn("This response had ".concat(t.candidates.length," ")+"candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates."),w(t.candidates[0]))throw new v("".concat(I(t)),t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),R(t)[0]}if(t.promptFeedback)throw new v("Function call not available. ".concat(I(t)),t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn("This response had ".concat(t.candidates.length," ")+"candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates."),w(t.candidates[0]))throw new v("".concat(I(t)),t);return R(t)}if(t.promptFeedback)throw new v("Function call not available. ".concat(I(t)),t)},t}function R(t){var e,n,o,s;const i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(const r of null===(s=null===(o=t.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)r.functionCall&&i.push(r.functionCall);return i.length>0?i:void 0}const A=[h.RECITATION,h.SAFETY,h.LANGUAGE];function w(t){return!!t.finishReason&&A.includes(t.finishReason)}function I(t){var e,n,o;let s="";if(t.candidates&&0!==t.candidates.length||!t.promptFeedback){if(null===(o=t.candidates)||void 0===o?void 0:o[0]){const e=t.candidates[0];w(e)&&(s+="Candidate was blocked due to ".concat(e.finishReason),e.finishMessage&&(s+=": ".concat(e.finishMessage)))}}else s+="Response was blocked",(null===(e=t.promptFeedback)||void 0===e?void 0:e.blockReason)&&(s+=" due to ".concat(t.promptFeedback.blockReason)),(null===(n=t.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(s+=": ".concat(t.promptFeedback.blockReasonMessage));return s}function N(t){return this instanceof N?(this.v=t,this):new N(t)}function x(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,s=n.apply(t,e||[]),i=[];return o={},r("next"),r("throw"),r("return"),o[Symbol.asyncIterator]=function(){return this},o;function r(t){s[t]&&(o[t]=function(e){return new Promise((function(n,o){i.push([t,e,n,o])>1||a(t,e)}))})}function a(t,e){try{(n=s[t](e)).value instanceof N?Promise.resolve(n.value.v).then(c,u):l(i[0][2],n)}catch(o){l(i[0][3],o)}var n}function c(t){a("next",t)}function u(t){a("throw",t)}function l(t,e){t(e),i.shift(),i.length&&a(i[0][0],i[0][1])}}"function"===typeof SuppressedError&&SuppressedError;const H=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function M(t){const e=function(t){const e=t.getReader();return new ReadableStream({start(t){let n="";return o();function o(){return e.read().then((e=>{let{value:s,done:i}=e;if(i)return n.trim()?void t.error(new g("Failed to parse stream")):void t.close();n+=s;let r,a=n.match(H);for(;a;){try{r=JSON.parse(a[1])}catch(c){return void t.error(new g('Error parsing JSON response: "'.concat(a[1],'"')))}t.enqueue(r),n=n.substring(a[0].length),a=n.match(H)}return o()}))}}})}(t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))),[n,o]=e.tee();return{stream:D(n),response:j(o)}}async function j(t){const e=[],n=t.getReader();for(;;){const{done:t,value:o}=await n.read();if(t)return b(L(e));e.push(o)}}function D(t){return x(this,arguments,(function*(){const e=t.getReader();for(;;){const{value:t,done:n}=yield N(e.read());if(n)break;yield yield N(b(t))}}))}function L(t){const e=t[t.length-1],n={promptFeedback:null===e||void 0===e?void 0:e.promptFeedback};for(const o of t){if(o.candidates)for(const t of o.candidates){const e=t.index;if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:t.index}),n.candidates[e].citationMetadata=t.citationMetadata,n.candidates[e].finishReason=t.finishReason,n.candidates[e].finishMessage=t.finishMessage,n.candidates[e].safetyRatings=t.safetyRatings,t.content&&t.content.parts){n.candidates[e].content||(n.candidates[e].content={role:t.content.role||"user",parts:[]});const o={};for(const s of t.content.parts)s.text&&(o.text=s.text),s.functionCall&&(o.functionCall=s.functionCall),s.executableCode&&(o.executableCode=s.executableCode),s.codeExecutionResult&&(o.codeExecutionResult=s.codeExecutionResult),0===Object.keys(o).length&&(o.text=""),n.candidates[e].content.parts.push(o)}}o.usageMetadata&&(n.usageMetadata=o.usageMetadata)}return n}async function P(t,e,n,o){return M(await S(e,_.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),o))}async function U(t,e,n,o){const s=await S(e,_.GENERATE_CONTENT,t,!1,JSON.stringify(n),o);return{response:b(await s.json())}}function k(t){if(null!=t)return"string"===typeof t?{role:"system",parts:[{text:t}]}:t.text?{role:"system",parts:[t]}:t.parts?t.role?t:{role:"system",parts:t.parts}:void 0}function G(t){let e=[];if("string"===typeof t)e=[{text:t}];else for(const n of t)"string"===typeof n?e.push({text:n}):e.push(n);return function(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let o=!1,s=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),s=!0):(e.parts.push(i),o=!0);if(o&&s)throw new g("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new g("No content is provided for sending chat message.");if(o)return e;return n}(e)}function F(t){let e;if(t.contents)e=t;else{e={contents:[G(t)]}}return t.systemInstruction&&(e.systemInstruction=k(t.systemInstruction)),e}const K=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],B={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};const Y="SILENT_ERROR";class q{constructor(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.model=e,this.params=n,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,(null===n||void 0===n?void 0:n.history)&&(!function(t){let e=!1;for(const n of t){const{role:t,parts:o}=n;if(!e&&"user"!==t)throw new g("First content should be with role 'user', got ".concat(t));if(!c.includes(t))throw new g("Each item should include role field. Got ".concat(t," but valid roles are: ").concat(JSON.stringify(c)));if(!Array.isArray(o))throw new g("Content should have 'parts' property with an array of Parts");if(0===o.length)throw new g("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const e of o)for(const t of K)t in e&&(s[t]+=1);const i=B[t];for(const e of K)if(!i.includes(e)&&s[e]>0)throw new g("Content with role '".concat(t,"' can't contain '").concat(e,"' part"));e=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var n,o,s,i,r,a;await this._sendPromise;const c=G(t),u={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(r=this.params)||void 0===r?void 0:r.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,c]},l=Object.assign(Object.assign({},this._requestOptions),e);let d;return this._sendPromise=this._sendPromise.then((()=>U(this._apiKey,this.model,u,l))).then((t=>{var e;if(t.response.candidates&&t.response.candidates.length>0){this._history.push(c);const n=Object.assign({parts:[],role:"model"},null===(e=t.response.candidates)||void 0===e?void 0:e[0].content);this._history.push(n)}else{const e=I(t.response);e&&console.warn("sendMessage() was unsuccessful. ".concat(e,". Inspect response object for details."))}d=t})),await this._sendPromise,d}async sendMessageStream(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var n,o,s,i,r,a;await this._sendPromise;const c=G(t),u={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(r=this.params)||void 0===r?void 0:r.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,c]},l=Object.assign(Object.assign({},this._requestOptions),e),d=P(this._apiKey,this.model,u,l);return this._sendPromise=this._sendPromise.then((()=>d)).catch((t=>{throw new Error(Y)})).then((t=>t.response)).then((t=>{if(t.candidates&&t.candidates.length>0){this._history.push(c);const e=Object.assign({},t.candidates[0].content);e.role||(e.role="model"),this._history.push(e)}else{const e=I(t);e&&console.warn("sendMessageStream() was unsuccessful. ".concat(e,". Inspect response object for details."))}})).catch((t=>{t.message!==Y&&console.error(t)})),d}}class ${constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.apiKey=t,this._requestOptions=n,e.model.includes("/")?this.model=e.model:this.model="models/".concat(e.model),this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=k(e.systemInstruction),this.cachedContent=e.cachedContent}async generateContent(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var n;const o=F(t),s=Object.assign(Object.assign({},this._requestOptions),e);return U(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}async generateContentStream(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var n;const o=F(t),s=Object.assign(Object.assign({},this._requestOptions),e);return P(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}startChat(t){var e;return new q(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(e=this.cachedContent)||void 0===e?void 0:e.name},t),this._requestOptions)}async countTokens(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=function(t,e){var n;let o={model:null===e||void 0===e?void 0:e.model,generationConfig:null===e||void 0===e?void 0:e.generationConfig,safetySettings:null===e||void 0===e?void 0:e.safetySettings,tools:null===e||void 0===e?void 0:e.tools,toolConfig:null===e||void 0===e?void 0:e.toolConfig,systemInstruction:null===e||void 0===e?void 0:e.systemInstruction,cachedContent:null===(n=null===e||void 0===e?void 0:e.cachedContent)||void 0===n?void 0:n.name,contents:[]};const s=null!=t.generateContentRequest;if(t.contents){if(s)throw new E("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=t.contents}else if(s)o=Object.assign(Object.assign({},o),t.generateContentRequest);else{const e=G(t);o.contents=[e]}return{generateContentRequest:o}}(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),e);return async function(t,e,n,o){return(await S(e,_.COUNT_TOKENS,t,!1,JSON.stringify(n),o)).json()}(this.apiKey,this.model,n,o)}async embedContent(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=function(t){if("string"===typeof t||Array.isArray(t))return{content:G(t)};return t}(t),o=Object.assign(Object.assign({},this._requestOptions),e);return async function(t,e,n,o){return(await S(e,_.EMBED_CONTENT,t,!1,JSON.stringify(n),o)).json()}(this.apiKey,this.model,n,o)}async batchEmbedContents(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=Object.assign(Object.assign({},this._requestOptions),e);return async function(t,e,n,o){const s=n.requests.map((t=>Object.assign(Object.assign({},t),{model:e})));return(await S(e,_.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:s}),o)).json()}(this.apiKey,this.model,t,n)}}class V{constructor(t){this.apiKey=t}getGenerativeModel(t,e){if(!t.model)throw new g("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new $(this.apiKey,t,e)}getGenerativeModelFromCachedContent(t,e,n){if(!t.name)throw new E("Cached content must contain a `name` field.");if(!t.model)throw new E("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const i of o)if((null===e||void 0===e?void 0:e[i])&&t[i]&&(null===e||void 0===e?void 0:e[i])!==t[i]){if("model"===i){if((e.model.startsWith("models/")?e.model.replace("models/",""):e.model)===(t.model.startsWith("models/")?t.model.replace("models/",""):t.model))continue}throw new E('Different value for "'.concat(i,'" specified in modelParams')+" (".concat(e[i],") and cachedContent (").concat(t[i],")"))}const s=Object.assign(Object.assign({},e),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new $(this.apiKey,s,n)}}var W=n(579);const J=()=>{const[t,e]=(0,r.useState)(""),[n,o]=(0,r.useState)(!1),[s,i]=(0,r.useState)(!1),a=new V("AIzaSyDcki_ONAtWWxUw6zSOjwrVHefbqWsS6D4").getGenerativeModel({model:"gemini-1.5-flash"}),c=async()=>{if(""!==t.trim()){o(!0),i(!0);try{const e=await a.generateContent(t),n=await e.response.text();alert(n)}catch(n){console.error("Error sending message:",n)}finally{e(""),o(!1),i(!1)}}};return(0,W.jsxs)("div",{children:[(0,W.jsx)("h1",{children:"LLM Evaluation App"}),(0,W.jsx)("textarea",{placeholder:"Type your message...",value:t,onChange:t=>{e(t.target.value)},onKeyDown:t=>{"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c())},disabled:n}),(0,W.jsx)("button",{onClick:c,disabled:n||s,children:"Send"})]})};a.render((0,W.jsx)(r.StrictMode,{children:(0,W.jsx)(J,{})}),document.getElementById("root"))})();
//# sourceMappingURL=main.ad12034f.js.map