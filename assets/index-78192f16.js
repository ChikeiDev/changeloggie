(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Ur(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Br(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?fs(r):Br(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(J(e))return e}}const os=/;(?![^(]*\))/g,ss=/:([^]+)/,ls=/\/\*.*?\*\//gs;function fs(e){const t={};return e.replace(ls,"").split(os).forEach(n=>{if(n){const r=n.split(ss);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function zn(e){let t="";if(te(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=zn(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const cs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",us=Ur(cs);function Ri(e){return!!e||e===""}const ln=e=>te(e)?e:e==null?"":R(e)||J(e)&&(e.toString===Di||!L(e.toString))?JSON.stringify(e,Li,2):String(e),Li=(e,t)=>t&&t.__v_isRef?Li(e,t.value):wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:ji(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!R(t)&&!zi(t)?String(t):t,V={},_t=[],Ce=()=>{},ds=()=>!1,ms=/^on[^a-z]/,Hn=e=>ms.test(e),Yr=e=>e.startsWith("onUpdate:"),le=Object.assign,Wr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ps=Object.prototype.hasOwnProperty,D=(e,t)=>ps.call(e,t),R=Array.isArray,wt=e=>Un(e)==="[object Map]",ji=e=>Un(e)==="[object Set]",L=e=>typeof e=="function",te=e=>typeof e=="string",Kr=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",$i=e=>J(e)&&L(e.then)&&L(e.catch),Di=Object.prototype.toString,Un=e=>Di.call(e),hs=e=>Un(e).slice(8,-1),zi=e=>Un(e)==="[object Object]",Xr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},gs=/-(\w)/g,Re=Bn(e=>e.replace(gs,(t,n)=>n?n.toUpperCase():"")),vs=/\B([A-Z])/g,It=Bn(e=>e.replace(vs,"-$1").toLowerCase()),Yn=Bn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ir=Bn(e=>e?`on${Yn(e)}`:""),Tn=(e,t)=>!Object.is(e,t),or=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Nn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},bs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Fa;const ys=()=>Fa||(Fa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let xe;class xs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function _s(e,t=xe){t&&t.active&&t.effects.push(e)}function ws(){return xe}const qr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Hi=e=>(e.w&Qe)>0,Ui=e=>(e.n&Qe)>0,ks=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Qe},As=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Hi(a)&&!Ui(a)?a.delete(e):t[n++]=a,a.w&=~Qe,a.n&=~Qe}t.length=n}},gr=new WeakMap;let Lt=0,Qe=1;const vr=30;let we;const ut=Symbol(""),br=Symbol("");class Vr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_s(this,r)}run(){if(!this.active)return this.fn();let t=we,n=Je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,Je=!0,Qe=1<<++Lt,Lt<=vr?ks(this):Ra(this),this.fn()}finally{Lt<=vr&&As(this),Qe=1<<--Lt,we=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Ra(this),this.onStop&&this.onStop(),this.active=!1)}}function Ra(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Je=!0;const Bi=[];function St(){Bi.push(Je),Je=!1}function Tt(){const e=Bi.pop();Je=e===void 0?!0:e}function me(e,t,n){if(Je&&we){let r=gr.get(e);r||gr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=qr()),Yi(a)}}function Yi(e,t){let n=!1;Lt<=vr?Ui(e)||(e.n|=Qe,n=!Hi(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function De(e,t,n,r,a,i){const o=gr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Xr(n)&&s.push(o.get("length")):(s.push(o.get(ut)),wt(e)&&s.push(o.get(br)));break;case"delete":R(e)||(s.push(o.get(ut)),wt(e)&&s.push(o.get(br)));break;case"set":wt(e)&&s.push(o.get(ut));break}if(s.length===1)s[0]&&yr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);yr(qr(l))}}function yr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&La(r);for(const r of n)r.computed||La(r)}function La(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Os=Ur("__proto__,__v_isRef,__isVue"),Wi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Kr)),Es=Jr(),Cs=Jr(!1,!0),Ps=Jr(!0),ja=Is();function Is(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){St();const r=H(this)[t].apply(this,n);return Tt(),r}}),e}function Ss(e){const t=H(this);return me(t,"has",e),t.hasOwnProperty(e)}function Jr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ks:Ji:t?Vi:qi).get(r))return r;const o=R(r);if(!e){if(o&&D(ja,a))return Reflect.get(ja,a,i);if(a==="hasOwnProperty")return Ss}const s=Reflect.get(r,a,i);return(Kr(a)?Wi.has(a):Os(a))||(e||me(r,"get",a),t)?s:se(s)?o&&Xr(a)?s:s.value:J(s)?e?Gi(s):Zr(s):s}}const Ts=Ki(),Ns=Ki(!0);function Ki(e=!1){return function(n,r,a,i){let o=n[r];if(Bt(o)&&se(o)&&!se(a))return!1;if(!e&&(!xr(a)&&!Bt(a)&&(o=H(o),a=H(a)),!R(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=R(n)&&Xr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?Tn(a,o)&&De(n,"set",r,a):De(n,"add",r,a)),l}}function Ms(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&De(e,"delete",t,void 0),r}function Fs(e,t){const n=Reflect.has(e,t);return(!Kr(t)||!Wi.has(t))&&me(e,"has",t),n}function Rs(e){return me(e,"iterate",R(e)?"length":ut),Reflect.ownKeys(e)}const Xi={get:Es,set:Ts,deleteProperty:Ms,has:Fs,ownKeys:Rs},Ls={get:Ps,set(e,t){return!0},deleteProperty(e,t){return!0}},js=le({},Xi,{get:Cs,set:Ns}),Gr=e=>e,Wn=e=>Reflect.getPrototypeOf(e);function fn(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=Wn(a),s=r?Gr:n?na:ta;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function cn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function un(e,t=!1){return e=e.__v_raw,!t&&me(H(e),"iterate",ut),Reflect.get(e,"size",e)}function $a(e){e=H(e);const t=H(this);return Wn(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function Da(e,t){t=H(t);const n=H(this),{has:r,get:a}=Wn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Tn(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function za(e){const t=H(this),{has:n,get:r}=Wn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&De(t,"delete",e,void 0),i}function Ha(){const e=H(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function dn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?Gr:e?na:ta;return!e&&me(s,"iterate",ut),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function mn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=wt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Gr:t?na:ta;return!t&&me(i,"iterate",l?br:ut),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:this}}function $s(){const e={get(i){return fn(this,i)},get size(){return un(this)},has:cn,add:$a,set:Da,delete:za,clear:Ha,forEach:dn(!1,!1)},t={get(i){return fn(this,i,!1,!0)},get size(){return un(this)},has:cn,add:$a,set:Da,delete:za,clear:Ha,forEach:dn(!1,!0)},n={get(i){return fn(this,i,!0)},get size(){return un(this,!0)},has(i){return cn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:dn(!0,!1)},r={get(i){return fn(this,i,!0,!0)},get size(){return un(this,!0)},has(i){return cn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=mn(i,!1,!1),n[i]=mn(i,!0,!1),t[i]=mn(i,!1,!0),r[i]=mn(i,!0,!0)}),[e,n,t,r]}const[Ds,zs,Hs,Us]=$s();function Qr(e,t){const n=t?e?Us:Hs:e?zs:Ds;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const Bs={get:Qr(!1,!1)},Ys={get:Qr(!1,!0)},Ws={get:Qr(!0,!1)},qi=new WeakMap,Vi=new WeakMap,Ji=new WeakMap,Ks=new WeakMap;function Xs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qs(e){return e.__v_skip||!Object.isExtensible(e)?0:Xs(hs(e))}function Zr(e){return Bt(e)?e:ea(e,!1,Xi,Bs,qi)}function Vs(e){return ea(e,!1,js,Ys,Vi)}function Gi(e){return ea(e,!0,Ls,Ws,Ji)}function ea(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=qs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function kt(e){return Bt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function xr(e){return!!(e&&e.__v_isShallow)}function Qi(e){return kt(e)||Bt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function Zi(e){return Nn(e,"__v_skip",!0),e}const ta=e=>J(e)?Zr(e):e,na=e=>J(e)?Gi(e):e;function Js(e){Je&&we&&(e=H(e),Yi(e.dep||(e.dep=qr())))}function Gs(e,t){e=H(e);const n=e.dep;n&&yr(n)}function se(e){return!!(e&&e.__v_isRef===!0)}function Qs(e){return se(e)?e.value:e}const Zs={get:(e,t,n)=>Qs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function eo(e){return kt(e)?e:new Proxy(e,Zs)}var to;class el{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[to]=!1,this._dirty=!0,this.effect=new Vr(t,()=>{this._dirty||(this._dirty=!0,Gs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return Js(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}to="__v_isReadonly";function tl(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ce):(r=e.get,a=e.set),new el(r,a,i||!a,n)}function Ge(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Kn(i,t,n)}return a}function Pe(e,t,n,r){if(L(e)){const i=Ge(e,t,n,r);return i&&$i(i)&&i.catch(o=>{Kn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Pe(e[i],t,n,r));return a}function Kn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ge(l,null,10,[e,o,s]);return}}nl(e,n,a,r)}function nl(e,t,n,r=!0){console.error(e)}let Yt=!1,_r=!1;const ae=[];let Me=0;const At=[];let $e=null,st=0;const no=Promise.resolve();let ra=null;function rl(e){const t=ra||no;return e?t.then(this?e.bind(this):e):t}function al(e){let t=Me+1,n=ae.length;for(;t<n;){const r=t+n>>>1;Wt(ae[r])<e?t=r+1:n=r}return t}function aa(e){(!ae.length||!ae.includes(e,Yt&&e.allowRecurse?Me+1:Me))&&(e.id==null?ae.push(e):ae.splice(al(e.id),0,e),ro())}function ro(){!Yt&&!_r&&(_r=!0,ra=no.then(io))}function il(e){const t=ae.indexOf(e);t>Me&&ae.splice(t,1)}function ol(e){R(e)?At.push(...e):(!$e||!$e.includes(e,e.allowRecurse?st+1:st))&&At.push(e),ro()}function Ua(e,t=Yt?Me+1:0){for(;t<ae.length;t++){const n=ae[t];n&&n.pre&&(ae.splice(t,1),t--,n())}}function ao(e){if(At.length){const t=[...new Set(At)];if(At.length=0,$e){$e.push(...t);return}for($e=t,$e.sort((n,r)=>Wt(n)-Wt(r)),st=0;st<$e.length;st++)$e[st]();$e=null,st=0}}const Wt=e=>e.id==null?1/0:e.id,sl=(e,t)=>{const n=Wt(e)-Wt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function io(e){_r=!1,Yt=!0,ae.sort(sl);const t=Ce;try{for(Me=0;Me<ae.length;Me++){const n=ae[Me];n&&n.active!==!1&&Ge(n,null,14)}}finally{Me=0,ae.length=0,ao(),Yt=!1,ra=null,(ae.length||At.length)&&io()}}function ll(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||V;v&&(a=n.map(k=>te(k)?k.trim():k)),m&&(a=n.map(bs))}let s,l=r[s=ir(t)]||r[s=ir(Re(t))];!l&&i&&(l=r[s=ir(It(t))]),l&&Pe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Pe(c,e,6,a)}}function oo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=oo(c,t,!0);d&&(s=!0,le(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(J(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):le(o,i),J(e)&&r.set(e,o),o)}function Xn(e,t){return!e||!Hn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,It(t))||D(e,t))}let Ae=null,qn=null;function Mn(e){const t=Ae;return Ae=e,qn=e&&e.type.__scopeId||null,t}function ia(e){qn=e}function oa(){qn=null}function fl(e,t=Ae,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Qa(-1);const i=Mn(t);let o;try{o=e(...a)}finally{Mn(i),r._d&&Qa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function sr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:F,inheritAttrs:N}=e;let z,_;const C=Mn(e);try{if(n.shapeFlag&4){const j=a||r;z=Ne(d.call(j,j,m,i,k,v,F)),_=l}else{const j=t;z=Ne(j.length>1?j(i,{attrs:l,slots:s,emit:c}):j(i,null)),_=t.props?l:cl(l)}}catch(j){Dt.length=0,Kn(j,e,1),z=de(Kt)}let E=z;if(_&&N!==!1){const j=Object.keys(_),{shapeFlag:U}=E;j.length&&U&7&&(o&&j.some(Yr)&&(_=ul(_,o)),E=Et(E,_))}return n.dirs&&(E=Et(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),z=E,Mn(C),z}const cl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hn(n))&&((t||(t={}))[n]=e[n]);return t},ul=(e,t)=>{const n={};for(const r in e)(!Yr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function dl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ba(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Xn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ba(r,o,c):!0:!!o;return!1}function Ba(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Xn(n,i))return!0}return!1}function ml({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const pl=e=>e.__isSuspense;function hl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):ol(e)}function gl(e,t){if(ee){let n=ee.provides;const r=ee.parent&&ee.parent.provides;r===n&&(n=ee.provides=Object.create(r)),n[e]=t}}function On(e,t,n=!1){const r=ee||Ae;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const pn={};function En(e,t,n){return so(e,t,n)}function so(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=V){const s=ws()===(ee==null?void 0:ee.scope)?ee:null;let l,c=!1,d=!1;if(se(e)?(l=()=>e.value,c=xr(e)):kt(e)?(l=()=>e,r=!0):R(e)?(d=!0,c=e.some(E=>kt(E)||xr(E)),l=()=>e.map(E=>{if(se(E))return E.value;if(kt(E))return bt(E);if(L(E))return Ge(E,s,2)})):L(e)?t?l=()=>Ge(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Pe(e,s,3,[v])}:l=Ce,t&&r){const E=l;l=()=>bt(E())}let m,v=E=>{m=_.onStop=()=>{Ge(E,s,4)}},k;if(qt)if(v=Ce,t?n&&Pe(t,s,3,[l(),d?[]:void 0,v]):l(),a==="sync"){const E=df();k=E.__watcherHandles||(E.__watcherHandles=[])}else return Ce;let F=d?new Array(e.length).fill(pn):pn;const N=()=>{if(_.active)if(t){const E=_.run();(r||c||(d?E.some((j,U)=>Tn(j,F[U])):Tn(E,F)))&&(m&&m(),Pe(t,s,3,[E,F===pn?void 0:d&&F[0]===pn?[]:F,v]),F=E)}else _.run()};N.allowRecurse=!!t;let z;a==="sync"?z=N:a==="post"?z=()=>ue(N,s&&s.suspense):(N.pre=!0,s&&(N.id=s.uid),z=()=>aa(N));const _=new Vr(l,z);t?n?N():F=_.run():a==="post"?ue(_.run.bind(_),s&&s.suspense):_.run();const C=()=>{_.stop(),s&&s.scope&&Wr(s.scope.effects,_)};return k&&k.push(C),C}function vl(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?lo(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=ee;Ct(this);const s=so(a,i.bind(r),n);return o?Ct(o):dt(),s}function lo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function bt(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))bt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)bt(e[n],t);else if(ji(e)||wt(e))e.forEach(n=>{bt(n,t)});else if(zi(e))for(const n in e)bt(e[n],t);return e}function sa(e){return L(e)?{setup:e,name:e.name}:e}const Cn=e=>!!e.type.__asyncLoader,fo=e=>e.type.__isKeepAlive;function bl(e,t){co(e,"a",t)}function yl(e,t){co(e,"da",t)}function co(e,t,n=ee){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Vn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)fo(a.parent.vnode)&&xl(r,t,n,a),a=a.parent}}function xl(e,t,n,r){const a=Vn(t,e,r,!0);uo(()=>{Wr(r[t],a)},n)}function Vn(e,t,n=ee,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;St(),Ct(n);const s=Pe(t,n,e,o);return dt(),Tt(),s});return r?a.unshift(i):a.push(i),i}}const Be=e=>(t,n=ee)=>(!qt||e==="sp")&&Vn(e,(...r)=>t(...r),n),_l=Be("bm"),wl=Be("m"),kl=Be("bu"),Al=Be("u"),Ol=Be("bum"),uo=Be("um"),El=Be("sp"),Cl=Be("rtg"),Pl=Be("rtc");function Il(e,t=ee){Vn("ec",e,t)}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(St(),Pe(l,n,8,[e.el,s,e,t]),Tt())}}const mo="components";function Sl(e,t){return Nl(mo,e,!0,t)||e}const Tl=Symbol();function Nl(e,t,n=!0,r=!1){const a=Ae||ee;if(a){const i=a.type;if(e===mo){const s=ff(i,!1);if(s&&(s===t||s===Re(t)||s===Yn(Re(t))))return i}const o=Ya(a[e]||i[e],t)||Ya(a.appContext[e],t);return!o&&r?i:o}}function Ya(e,t){return e&&(e[t]||e[Re(t)]||e[Yn(Re(t))])}function Wa(e,t,n,r){let a;const i=n&&n[r];if(R(e)||te(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(J(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const wr=e=>e?ko(e)?ua(e)||e.proxy:wr(e.parent):null,$t=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wr(e.parent),$root:e=>wr(e.root),$emit:e=>e.emit,$options:e=>la(e),$forceUpdate:e=>e.f||(e.f=()=>aa(e.update)),$nextTick:e=>e.n||(e.n=rl.bind(e.proxy)),$watch:e=>vl.bind(e)}),lr=(e,t)=>e!==V&&!e.__isScriptSetup&&D(e,t),Ml={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(lr(r,t))return o[t]=1,r[t];if(a!==V&&D(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&D(c,t))return o[t]=3,i[t];if(n!==V&&D(n,t))return o[t]=4,n[t];kr&&(o[t]=0)}}const d=$t[t];let m,v;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==V&&D(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,D(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return lr(a,t)?(a[t]=n,!0):r!==V&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==V&&D(e,o)||lr(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D($t,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let kr=!0;function Fl(e){const t=la(e),n=e.proxy,r=e.ctx;kr=!1,t.beforeCreate&&Ka(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:F,activated:N,deactivated:z,beforeDestroy:_,beforeUnmount:C,destroyed:E,unmounted:j,render:U,renderTracked:fe,renderTriggered:re,errorCaptured:be,serverPrefetch:ge,expose:Le,inheritAttrs:Mt,components:rn,directives:an,filters:nr}=t;if(c&&Rl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const Y=o[G];L(Y)&&(r[G]=Y.bind(n))}if(a){const G=a.call(n,n);J(G)&&(e.data=Zr(G))}if(kr=!0,i)for(const G in i){const Y=i[G],nt=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Ce,on=!L(Y)&&L(Y.set)?Y.set.bind(n):Ce,rt=ve({get:nt,set:on});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Ie=>rt.value=Ie})}if(s)for(const G in s)po(s[G],r,n,G);if(l){const G=L(l)?l.call(n):l;Reflect.ownKeys(G).forEach(Y=>{gl(Y,G[Y])})}d&&Ka(d,e,"c");function ie(G,Y){R(Y)?Y.forEach(nt=>G(nt.bind(n))):Y&&G(Y.bind(n))}if(ie(_l,m),ie(wl,v),ie(kl,k),ie(Al,F),ie(bl,N),ie(yl,z),ie(Il,be),ie(Pl,fe),ie(Cl,re),ie(Ol,C),ie(uo,j),ie(El,ge),R(Le))if(Le.length){const G=e.exposed||(e.exposed={});Le.forEach(Y=>{Object.defineProperty(G,Y,{get:()=>n[Y],set:nt=>n[Y]=nt})})}else e.exposed||(e.exposed={});U&&e.render===Ce&&(e.render=U),Mt!=null&&(e.inheritAttrs=Mt),rn&&(e.components=rn),an&&(e.directives=an)}function Rl(e,t,n=Ce,r=!1){R(e)&&(e=Ar(e));for(const a in e){const i=e[a];let o;J(i)?"default"in i?o=On(i.from||a,i.default,!0):o=On(i.from||a):o=On(i),se(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ka(e,t,n){Pe(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function po(e,t,n,r){const a=r.includes(".")?lo(n,r):()=>n[r];if(te(e)){const i=t[e];L(i)&&En(a,i)}else if(L(e))En(a,e.bind(n));else if(J(e))if(R(e))e.forEach(i=>po(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&En(a,i,e)}}function la(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Fn(l,c,o,!0)),Fn(l,t,o)),J(t)&&i.set(t,l),l}function Fn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Fn(e,i,n,!0),a&&a.forEach(o=>Fn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ll[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ll={data:Xa,props:ot,emits:ot,methods:ot,computed:ot,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:ot,directives:ot,watch:$l,provide:Xa,inject:jl};function Xa(e,t){return t?e?function(){return le(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function jl(e,t){return ot(Ar(e),Ar(t))}function Ar(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function ot(e,t){return e?le(le(Object.create(null),e),t):t}function $l(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const r in t)n[r]=oe(e[r],t[r]);return n}function Dl(e,t,n,r=!1){const a={},i={};Nn(i,Gn,1),e.propsDefaults=Object.create(null),ho(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Vs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function zl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Xn(e.emitsOptions,v))continue;const k=t[v];if(l)if(D(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const F=Re(v);a[F]=Or(l,s,F,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{ho(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=It(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Or(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m))&&(delete i[m],c=!0)}c&&De(e,"set","$attrs")}function ho(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(An(l))continue;const c=t[l];let d;a&&D(a,d=Re(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Xn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=H(n),c=s||V;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Or(a,l,m,c[m],e,!D(c,m))}}return o}function Or(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ct(a),r=c[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===It(n))&&(r=!0))}return r}function go(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,k]=go(m,t,!0);le(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return J(e)&&r.set(e,_t),_t;if(R(i))for(let d=0;d<i.length;d++){const m=Re(i[d]);qa(m)&&(o[m]=V)}else if(i)for(const d in i){const m=Re(d);if(qa(m)){const v=i[d],k=o[m]=R(v)||L(v)?{type:v}:Object.assign({},v);if(k){const F=Ga(Boolean,k.type),N=Ga(String,k.type);k[0]=F>-1,k[1]=N<0||F<N,(F>-1||D(k,"default"))&&s.push(m)}}}const c=[o,s];return J(e)&&r.set(e,c),c}function qa(e){return e[0]!=="$"}function Va(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ja(e,t){return Va(e)===Va(t)}function Ga(e,t){return R(t)?t.findIndex(n=>Ja(n,e)):L(t)&&Ja(t,e)?0:-1}const vo=e=>e[0]==="_"||e==="$stable",fa=e=>R(e)?e.map(Ne):[Ne(e)],Hl=(e,t,n)=>{if(t._n)return t;const r=fl((...a)=>fa(t(...a)),n);return r._c=!1,r},bo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(vo(a))continue;const i=e[a];if(L(i))t[a]=Hl(a,i,r);else if(i!=null){const o=fa(i);t[a]=()=>o}}},yo=(e,t)=>{const n=fa(t);e.slots.default=()=>n},Ul=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),Nn(t,"_",n)):bo(t,e.slots={})}else e.slots={},t&&yo(e,t);Nn(e.slots,Gn,1)},Bl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=V;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(le(a,t),!n&&s===1&&delete a._):(i=!t.$stable,bo(t,a)),o=t}else t&&(yo(e,t),o={default:1});if(i)for(const s in a)!vo(s)&&!(s in o)&&delete a[s]};function xo(){return{app:null,config:{isNativeTag:ds,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yl=0;function Wl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!J(a)&&(a=null);const i=xo(),o=new Set;let s=!1;const l=i.app={_uid:Yl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:mf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=de(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ua(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Er(e,t,n,r,a=!1){if(R(e)){e.forEach((v,k)=>Er(v,t&&(R(t)?t[k]:t),n,r,a));return}if(Cn(r)&&!a)return;const i=r.shapeFlag&4?ua(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===V?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(te(c)?(d[c]=null,D(m,c)&&(m[c]=null)):se(c)&&(c.value=null)),L(l))Ge(l,s,12,[o,d]);else{const v=te(l),k=se(l);if(v||k){const F=()=>{if(e.f){const N=v?D(m,l)?m[l]:d[l]:l.value;a?R(N)&&Wr(N,i):R(N)?N.includes(i)||N.push(i):v?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,D(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,ue(F,n)):F()}}}const ue=hl;function Kl(e){return Xl(e)}function Xl(e,t){const n=ys();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Ce,insertStaticContent:F}=e,N=(f,u,p,g=null,h=null,x=null,A=!1,y=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Rt(f,u)&&(g=sn(f),Ie(f,h,x,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:P}=u;switch(b){case Jn:z(f,u,p,g);break;case Kt:_(f,u,p,g);break;case fr:f==null&&C(u,p,g,A);break;case _e:rn(f,u,p,g,h,x,A,y,w);break;default:P&1?U(f,u,p,g,h,x,A,y,w):P&6?an(f,u,p,g,h,x,A,y,w):(P&64||P&128)&&b.process(f,u,p,g,h,x,A,y,w,gt)}S!=null&&h&&Er(S,f&&f.ref,x,u||f,!u)},z=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},_=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},C=(f,u,p,g)=>{[f.el,f.anchor]=F(f.children,u,p,g,f.el,f.anchor)},E=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},j=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},U=(f,u,p,g,h,x,A,y,w)=>{A=A||u.type==="svg",f==null?fe(u,p,g,h,x,A,y,w):ge(f,u,h,x,A,y,w)},fe=(f,u,p,g,h,x,A,y)=>{let w,b;const{type:S,props:P,shapeFlag:T,transition:M,dirs:$}=f;if(w=f.el=o(f.type,x,P&&P.is,P),T&8?d(w,f.children):T&16&&be(f.children,w,null,g,h,x&&S!=="foreignObject",A,y),$&&at(f,null,g,"created"),re(w,f,f.scopeId,A,g),P){for(const B in P)B!=="value"&&!An(B)&&i(w,B,null,P[B],x,f.children,g,h,je);"value"in P&&i(w,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Te(b,g,f)}$&&at(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;W&&M.beforeEnter(w),r(w,u,p),((b=P&&P.onVnodeMounted)||W||$)&&ue(()=>{b&&Te(b,g,f),W&&M.enter(w),$&&at(f,null,g,"mounted")},h)},re=(f,u,p,g,h)=>{if(p&&k(f,p),g)for(let x=0;x<g.length;x++)k(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;re(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},be=(f,u,p,g,h,x,A,y,w=0)=>{for(let b=w;b<f.length;b++){const S=f[b]=y?Ve(f[b]):Ne(f[b]);N(null,S,u,p,g,h,x,A,y)}},ge=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:S}=u;w|=f.patchFlag&16;const P=f.props||V,T=u.props||V;let M;p&&it(p,!1),(M=T.onVnodeBeforeUpdate)&&Te(M,p,u,f),S&&at(u,f,p,"beforeUpdate"),p&&it(p,!0);const $=h&&u.type!=="foreignObject";if(b?Le(f.dynamicChildren,b,y,p,g,$,x):A||Y(f,u,y,null,p,g,$,x,!1),w>0){if(w&16)Mt(y,u,P,T,p,g,h);else if(w&2&&P.class!==T.class&&i(y,"class",null,T.class,h),w&4&&i(y,"style",P.style,T.style,h),w&8){const W=u.dynamicProps;for(let B=0;B<W.length;B++){const Z=W[B],ye=P[Z],vt=T[Z];(vt!==ye||Z==="value")&&i(y,Z,ye,vt,h,f.children,p,g,je)}}w&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Mt(y,u,P,T,p,g,h);((M=T.onVnodeUpdated)||S)&&ue(()=>{M&&Te(M,p,u,f),S&&at(u,f,p,"updated")},g)},Le=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const w=f[y],b=u[y],S=w.el&&(w.type===_e||!Rt(w,b)||w.shapeFlag&70)?m(w.el):p;N(w,b,S,null,g,h,x,A,!0)}},Mt=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==V)for(const y in p)!An(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,je);for(const y in g){if(An(y))continue;const w=g[y],b=p[y];w!==b&&y!=="value"&&i(f,y,b,w,A,u.children,h,x,je)}"value"in g&&i(f,"value",p.value,g.value)}},rn=(f,u,p,g,h,x,A,y,w)=>{const b=u.el=f?f.el:s(""),S=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:T,slotScopeIds:M}=u;M&&(y=y?y.concat(M):M),f==null?(r(b,p,g),r(S,p,g),be(u.children,p,S,h,x,A,y,w)):P>0&&P&64&&T&&f.dynamicChildren?(Le(f.dynamicChildren,T,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&_o(f,u,!0)):Y(f,u,p,S,h,x,A,y,w)},an=(f,u,p,g,h,x,A,y,w)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,w):nr(u,p,g,h,x,A,w):Pa(f,u,w)},nr=(f,u,p,g,h,x,A)=>{const y=f.component=rf(f,g,h);if(fo(f)&&(y.ctx.renderer=gt),af(y),y.asyncDep){if(h&&h.registerDep(y,ie),!f.el){const w=y.subTree=de(Kt);_(null,w,u,p)}return}ie(y,f,u,p,h,x,A)},Pa=(f,u,p)=>{const g=u.component=f.component;if(dl(f,u,p))if(g.asyncDep&&!g.asyncResolved){G(g,u,p);return}else g.next=u,il(g.update),g.update();else u.el=f.el,g.vnode=u},ie=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:P,u:T,parent:M,vnode:$}=f,W=S,B;it(f,!1),S?(S.el=$.el,G(f,S,A)):S=$,P&&or(P),(B=S.props&&S.props.onVnodeBeforeUpdate)&&Te(B,M,S,$),it(f,!0);const Z=sr(f),ye=f.subTree;f.subTree=Z,N(ye,Z,m(ye.el),sn(ye),f,h,x),S.el=Z.el,W===null&&ml(f,Z.el),T&&ue(T,h),(B=S.props&&S.props.onVnodeUpdated)&&ue(()=>Te(B,M,S,$),h)}else{let S;const{el:P,props:T}=u,{bm:M,m:$,parent:W}=f,B=Cn(u);if(it(f,!1),M&&or(M),!B&&(S=T&&T.onVnodeBeforeMount)&&Te(S,W,u),it(f,!0),P&&ar){const Z=()=>{f.subTree=sr(f),ar(P,f.subTree,f,h,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=sr(f);N(null,Z,p,g,f,h,x),u.el=Z.el}if($&&ue($,h),!B&&(S=T&&T.onVnodeMounted)){const Z=u;ue(()=>Te(S,W,Z),h)}(u.shapeFlag&256||W&&Cn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ue(f.a,h),f.isMounted=!0,u=p=g=null}},w=f.effect=new Vr(y,()=>aa(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,it(f,!0),b()},G=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,zl(f,u.props,g,p),Bl(f,u.children,p),St(),Ua(),Tt()},Y=(f,u,p,g,h,x,A,y,w=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,P=u.children,{patchFlag:T,shapeFlag:M}=u;if(T>0){if(T&128){on(b,P,p,g,h,x,A,y,w);return}else if(T&256){nt(b,P,p,g,h,x,A,y,w);return}}M&8?(S&16&&je(b,h,x),P!==b&&d(p,P)):S&16?M&16?on(b,P,p,g,h,x,A,y,w):je(b,h,x,!0):(S&8&&d(p,""),M&16&&be(P,p,g,h,x,A,y,w))},nt=(f,u,p,g,h,x,A,y,w)=>{f=f||_t,u=u||_t;const b=f.length,S=u.length,P=Math.min(b,S);let T;for(T=0;T<P;T++){const M=u[T]=w?Ve(u[T]):Ne(u[T]);N(f[T],M,p,null,h,x,A,y,w)}b>S?je(f,h,x,!0,!1,P):be(u,p,g,h,x,A,y,w,P)},on=(f,u,p,g,h,x,A,y,w)=>{let b=0;const S=u.length;let P=f.length-1,T=S-1;for(;b<=P&&b<=T;){const M=f[b],$=u[b]=w?Ve(u[b]):Ne(u[b]);if(Rt(M,$))N(M,$,p,null,h,x,A,y,w);else break;b++}for(;b<=P&&b<=T;){const M=f[P],$=u[T]=w?Ve(u[T]):Ne(u[T]);if(Rt(M,$))N(M,$,p,null,h,x,A,y,w);else break;P--,T--}if(b>P){if(b<=T){const M=T+1,$=M<S?u[M].el:g;for(;b<=T;)N(null,u[b]=w?Ve(u[b]):Ne(u[b]),p,$,h,x,A,y,w),b++}}else if(b>T)for(;b<=P;)Ie(f[b],h,x,!0),b++;else{const M=b,$=b,W=new Map;for(b=$;b<=T;b++){const pe=u[b]=w?Ve(u[b]):Ne(u[b]);pe.key!=null&&W.set(pe.key,b)}let B,Z=0;const ye=T-$+1;let vt=!1,Ta=0;const Ft=new Array(ye);for(b=0;b<ye;b++)Ft[b]=0;for(b=M;b<=P;b++){const pe=f[b];if(Z>=ye){Ie(pe,h,x,!0);continue}let Se;if(pe.key!=null)Se=W.get(pe.key);else for(B=$;B<=T;B++)if(Ft[B-$]===0&&Rt(pe,u[B])){Se=B;break}Se===void 0?Ie(pe,h,x,!0):(Ft[Se-$]=b+1,Se>=Ta?Ta=Se:vt=!0,N(pe,u[Se],p,null,h,x,A,y,w),Z++)}const Na=vt?ql(Ft):_t;for(B=Na.length-1,b=ye-1;b>=0;b--){const pe=$+b,Se=u[pe],Ma=pe+1<S?u[pe+1].el:g;Ft[b]===0?N(null,Se,p,Ma,h,x,A,y,w):vt&&(B<0||b!==Na[B]?rt(Se,p,Ma,2):B--)}}},rt=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){rt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,gt);return}if(A===_e){r(x,u,p);for(let P=0;P<w.length;P++)rt(w[P],u,p,g);r(f.anchor,u,p);return}if(A===fr){E(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),ue(()=>y.enter(x),h);else{const{leave:P,delayLeave:T,afterLeave:M}=y,$=()=>r(x,u,p),W=()=>{P(x,()=>{$(),M&&M()})};T?T(x,$,W):W()}else r(x,u,p)},Ie=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:S,patchFlag:P,dirs:T}=f;if(y!=null&&Er(y,null,p,f,!0),S&256){u.ctx.deactivate(f);return}const M=S&1&&T,$=!Cn(f);let W;if($&&(W=A&&A.onVnodeBeforeUnmount)&&Te(W,u,f),S&6)is(f.component,p,g);else{if(S&128){f.suspense.unmount(p,g);return}M&&at(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,p,h,gt,g):b&&(x!==_e||P>0&&P&64)?je(b,u,p,!1,!0):(x===_e&&P&384||!h&&S&16)&&je(w,u,p),g&&Ia(f)}($&&(W=A&&A.onVnodeUnmounted)||M)&&ue(()=>{W&&Te(W,u,f),M&&at(f,null,u,"unmounted")},p)},Ia=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===_e){as(p,g);return}if(u===fr){j(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,w=()=>A(p,x);y?y(f.el,x,w):w()}else x()},as=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},is=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&or(g),h.stop(),x&&(x.active=!1,Ie(A,f,u,p)),y&&ue(y,u),ue(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},je=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Ie(f[A],u,p,g,h)},sn=f=>f.shapeFlag&6?sn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Sa=(f,u,p)=>{f==null?u._vnode&&Ie(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),Ua(),ao(),u._vnode=f},gt={p:N,um:Ie,m:rt,r:Ia,mt:nr,mc:be,pc:Y,pbc:Le,n:sn,o:e};let rr,ar;return t&&([rr,ar]=t(gt)),{render:Sa,hydrate:rr,createApp:Wl(Sa,rr)}}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function _o(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ve(a[i]),s.el=o.el),n||_o(o,s)),s.type===Jn&&(s.el=o.el)}}function ql(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Vl=e=>e.__isTeleport,_e=Symbol(void 0),Jn=Symbol(void 0),Kt=Symbol(void 0),fr=Symbol(void 0),Dt=[];let Oe=null;function Xe(e=!1){Dt.push(Oe=e?null:[])}function Jl(){Dt.pop(),Oe=Dt[Dt.length-1]||null}let Xt=1;function Qa(e){Xt+=e}function Gl(e){return e.dynamicChildren=Xt>0?Oe||_t:null,Jl(),Xt>0&&Oe&&Oe.push(e),e}function qe(e,t,n,r,a,i){return Gl(K(e,t,n,r,a,i,!0))}function Cr(e){return e?e.__v_isVNode===!0:!1}function Rt(e,t){return e.type===t.type&&e.key===t.key}const Gn="__vInternal",wo=({key:e})=>e??null,Pn=({ref:e,ref_key:t,ref_for:n})=>e!=null?te(e)||se(e)||L(e)?{i:Ae,r:e,k:t,f:!!n}:e:null;function K(e,t=null,n=null,r=0,a=null,i=e===_e?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wo(t),ref:t&&Pn(t),scopeId:qn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ae};return s?(ca(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),Xt>0&&!o&&Oe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Oe.push(l),l}const de=Ql;function Ql(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Tl)&&(e=Kt),Cr(e)){const s=Et(e,t,!0);return n&&ca(s,n),Xt>0&&!i&&Oe&&(s.shapeFlag&6?Oe[Oe.indexOf(e)]=s:Oe.push(s)),s.patchFlag|=-2,s}if(cf(e)&&(e=e.__vccOpts),t){t=Zl(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=zn(s)),J(l)&&(Qi(l)&&!R(l)&&(l=le({},l)),t.style=Br(l))}const o=te(e)?1:pl(e)?128:Vl(e)?64:J(e)?4:L(e)?2:0;return K(e,t,n,r,a,o,i,!0)}function Zl(e){return e?Qi(e)||Gn in e?le({},e):e:null}function Et(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?ef(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&wo(s),ref:t&&t.ref?n&&a?R(a)?a.concat(Pn(t)):[a,Pn(t)]:Pn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function mt(e=" ",t=0){return de(Jn,null,e,t)}function Ne(e){return e==null||typeof e=="boolean"?de(Kt):R(e)?de(_e,null,e.slice()):typeof e=="object"?Ve(e):de(Jn,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function ca(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ca(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Gn in t)?t._ctx=Ae:a===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),r&64?(n=16,t=[mt(t)]):n=8);e.children=t,e.shapeFlag|=n}function ef(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=zn([t.class,r.class]));else if(a==="style")t.style=Br([t.style,r.style]);else if(Hn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Te(e,t,n,r=null){Pe(e,t,7,[n,r])}const tf=xo();let nf=0;function rf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||tf,i={uid:nf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new xs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:go(r,a),emitsOptions:oo(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ll.bind(null,i),e.ce&&e.ce(i),i}let ee=null;const Ct=e=>{ee=e,e.scope.on()},dt=()=>{ee&&ee.scope.off(),ee=null};function ko(e){return e.vnode.shapeFlag&4}let qt=!1;function af(e,t=!1){qt=t;const{props:n,children:r}=e.vnode,a=ko(e);Dl(e,n,a,t),Ul(e,r);const i=a?of(e,t):void 0;return qt=!1,i}function of(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Zi(new Proxy(e.ctx,Ml));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?lf(e):null;Ct(e),St();const i=Ge(r,e,0,[e.props,a]);if(Tt(),dt(),$i(i)){if(i.then(dt,dt),t)return i.then(o=>{Za(e,o,t)}).catch(o=>{Kn(o,e,0)});e.asyncDep=i}else Za(e,i,t)}else Ao(e,t)}function Za(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=eo(t)),Ao(e,n)}let ei;function Ao(e,t,n){const r=e.type;if(!e.render){if(!t&&ei&&!r.render){const a=r.template||la(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=le(le({isCustomElement:i,delimiters:s},o),l);r.render=ei(a,c)}}e.render=r.render||Ce}Ct(e),St(),Fl(e),Tt(),dt()}function sf(e){return new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}})}function lf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=sf(e))},slots:e.slots,emit:e.emit,expose:t}}function ua(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(eo(Zi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $t)return $t[n](e)},has(t,n){return n in t||n in $t}}))}function ff(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function cf(e){return L(e)&&"__vccOpts"in e}const ve=(e,t)=>tl(e,t,qt);function Oo(e,t,n){const r=arguments.length;return r===2?J(t)&&!R(t)?Cr(t)?de(e,null,[t]):de(e,t):de(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Cr(n)&&(n=[n]),de(e,t,n))}const uf=Symbol(""),df=()=>On(uf),mf="3.2.47",pf="http://www.w3.org/2000/svg",lt=typeof document<"u"?document:null,ti=lt&&lt.createElement("template"),hf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?lt.createElementNS(pf,e):lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ti.innerHTML=r?`<svg>${e}</svg>`:e;const s=ti.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function gf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function vf(e,t,n){const r=e.style,a=te(n);if(n&&!a){if(t&&!te(t))for(const i in t)n[i]==null&&Pr(r,i,"");for(const i in n)Pr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ni=/\s*!important$/;function Pr(e,t,n){if(R(n))n.forEach(r=>Pr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=bf(e,t);ni.test(n)?e.setProperty(It(r),n.replace(ni,""),"important"):e[r]=n}}const ri=["Webkit","Moz","ms"],cr={};function bf(e,t){const n=cr[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return cr[t]=r;r=Yn(r);for(let a=0;a<ri.length;a++){const i=ri[a]+r;if(i in e)return cr[t]=i}return t}const ai="http://www.w3.org/1999/xlink";function yf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ai,t.slice(6,t.length)):e.setAttributeNS(ai,t,n);else{const i=us(t);n==null||i&&!Ri(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function xf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ri(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function _f(e,t,n,r){e.addEventListener(t,n,r)}function wf(e,t,n,r){e.removeEventListener(t,n,r)}function kf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Af(t);if(r){const c=i[t]=Cf(r,a);_f(e,s,c,l)}else o&&(wf(e,s,o,l),i[t]=void 0)}}const ii=/(?:Once|Passive|Capture)$/;function Af(e){let t;if(ii.test(e)){t={};let r;for(;r=e.match(ii);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let ur=0;const Of=Promise.resolve(),Ef=()=>ur||(Of.then(()=>ur=0),ur=Date.now());function Cf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(Pf(r,n.value),t,5,[r])};return n.value=e,n.attached=Ef(),n}function Pf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const oi=/^on[a-z]/,If=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?gf(e,r,a):t==="style"?vf(e,n,r):Hn(t)?Yr(t)||kf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sf(e,t,r,a))?xf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),yf(e,t,r,a))};function Sf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&oi.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||oi.test(t)&&te(n)?!1:t in e}const Tf=le({patchProp:If},hf);let si;function Nf(){return si||(si=Kl(Tf))}const Mf=(...e)=>{const t=Nf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Ff(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Ff(e){return te(e)?document.querySelector(e):e}const da=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Rf={},ma=e=>(ia("data-v-8cc72fc3"),e=e(),oa(),e),Lf={class:"greetings"},jf=ma(()=>K("h1",{class:"heading"},"Changeloggie",-1)),$f=ma(()=>K("h3",null,[mt(" For the "),K("a",{href:"https://discord.gg/6nghTJ4qfQ",target:"_blank",rel:"noopener"},"Palmen"),mt(" resource pack ")],-1)),Df=ma(()=>K("p",null,null,-1)),zf=[jf,$f,Df];function Hf(e,t){return Xe(),qe("div",Lf,zf)}const Uf=da(Rf,[["render",Hf],["__scopeId","data-v-8cc72fc3"]]);const Bf={data(){return{versions:null,text:"Simen#8900"}},mounted(){fetch("https://changelogapp.azurewebsites.net/Versions").then(e=>e.json()).then(e=>this.versions=e).catch(e=>console.log(e.message))},methods:{async copyText(e){try{await navigator.clipboard.writeText(e),alert("Copied")}catch{alert("Cannot copy")}}}},Yf=e=>(ia("data-v-13705534"),e=e(),oa(),e),Wf={key:0},Kf={class:"py-6 px-3 text-left day"},Xf={class:"d-flex flex-items-center timeline"},qf={class:"badge d-inline-block bg-info p-1 rounded-1 mr-2 text-bold text-white mt-2 date-badge"},Vf={class:""},Jf={class:"list-style-none change-log border-test"},Gf={class:"d-flex flex-items-start mb-1 fix-res"},Qf={class:"change-description"},Zf={key:1},ec=Yf(()=>K("p",null,"Loading changelog history....",-1));function tc(e,t,n,r,a,i){return a.versions?(Xe(),qe("div",Wf,[K("section",Kf,[(Xe(!0),qe(_e,null,Wa(a.versions,o=>(Xe(),qe("div",{key:o.id},[K("header",Xf,[K("span",qf,ln(o.VersionId),1),K("h2",Vf,ln(o.VersionDate),1)]),K("ul",Jf,[(Xe(!0),qe(_e,null,Wa(o.VersionChanges,s=>(Xe(),qe("li",Gf,[K("div",{class:zn([s.ChangeTag,"badge type-badge mt-1 mr-3 text-white text-uppercase"])},ln(s.ChangeTag),3),K("div",Qf,ln(s.ChangeDesc),1)]))),256))])]))),128))])])):(Xe(),qe("div",Zf,[ec,K("p",null,[mt("if nothing happens, contact "),K("a",{rel:"noopener noreferrer",href:"#",onClick:t[0]||(t[0]=o=>i.copyText(a.text))},"Simen#8900"),mt(" @ discord")])]))}const nc=da(Bf,[["render",tc],["__scopeId","data-v-13705534"]]);const Eo=e=>(ia("data-v-c7bdd89d"),e=e(),oa(),e),rc={class:"flex-container"},ac={class:"row"},ic={class:"flex-item"},oc={class:"flex-item"},sc={class:"flex-item"},lc={class:"px-3 text-gray text-center alt-text-small"},fc={style:{color:"#cfe0e0"},class:"copyright"},cc=Eo(()=>K("br",null,null,-1)),uc=Eo(()=>K("p",{style:{"font-size":"10px","font-style":"italic",color:"rgba(232,255,255,0.16)"}},"and sometimes cp1987 with some shader stuff",-1)),dc={__name:"App",setup(e){return(t,n)=>{const r=Sl("font-awesome-icon");return Xe(),qe("div",rc,[K("div",ac,[K("div",ic,[K("header",null,[de(Uf)])]),K("div",oc,[K("main",null,[de(nc)])]),K("div",sc,[K("footer",lc,[K("p",fc,[mt("Maintained with "),de(r,{style:{color:"#f370ad"},icon:"fa-solid fa-heart"}),mt(" by simentbe "),cc,uc])])])])])}}},mc=da(dc,[["__scopeId","data-v-c7bdd89d"]]);function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(r){ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Rn(e){return Rn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rn(e)}function pc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hc(e,t,n){return t&&fi(e.prototype,t),n&&fi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pa(e,t){return vc(e)||yc(e,t)||Co(e,t)||_c()}function en(e){return gc(e)||bc(e)||Co(e)||xc()}function gc(e){if(Array.isArray(e))return Ir(e)}function vc(e){if(Array.isArray(e))return e}function bc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Co(e,t){if(e){if(typeof e=="string")return Ir(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ir(e,t)}}function Ir(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ci=function(){},ha={},Po={},Io=null,So={mark:ci,measure:ci};try{typeof window<"u"&&(ha=window),typeof document<"u"&&(Po=document),typeof MutationObserver<"u"&&(Io=MutationObserver),typeof performance<"u"&&(So=performance)}catch{}var wc=ha.navigator||{},ui=wc.userAgent,di=ui===void 0?"":ui,Ze=ha,q=Po,mi=Io,hn=So;Ze.document;var Ye=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",To=~di.indexOf("MSIE")||~di.indexOf("Trident/"),gn,vn,bn,yn,xn,ze="___FONT_AWESOME___",Sr=16,No="fa",Mo="svg-inline--fa",pt="data-fa-i2svg",Tr="data-fa-pseudo-element",kc="data-fa-pseudo-element-pending",ga="data-prefix",va="data-icon",pi="fontawesome-i2svg",Ac="async",Oc=["HTML","HEAD","STYLE","SCRIPT"],Fo=function(){try{return!0}catch{return!1}}(),X="classic",Q="sharp",ba=[X,Q];function tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Vt=tn((gn={},ne(gn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ne(gn,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),gn)),Jt=tn((vn={},ne(vn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ne(vn,Q,{solid:"fass",regular:"fasr",light:"fasl"}),vn)),Gt=tn((bn={},ne(bn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ne(bn,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),bn)),Ec=tn((yn={},ne(yn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ne(yn,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),yn)),Cc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ro="fa-layers-text",Pc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ic=tn((xn={},ne(xn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ne(xn,Q,{900:"fass",400:"fasr",300:"fasl"}),xn)),Lo=[1,2,3,4,5,6,7,8,9,10],Sc=Lo.concat([11,12,13,14,15,16,17,18,19,20]),Tc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qt=new Set;Object.keys(Jt[X]).map(Qt.add.bind(Qt));Object.keys(Jt[Q]).map(Qt.add.bind(Qt));var Nc=[].concat(ba,en(Qt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(Lo.map(function(e){return"".concat(e,"x")})).concat(Sc.map(function(e){return"w-".concat(e)})),zt=Ze.FontAwesomeConfig||{};function Mc(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Fc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var Rc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Rc.forEach(function(e){var t=pa(e,2),n=t[0],r=t[1],a=Fc(Mc(n));a!=null&&(zt[r]=a)})}var jo={styleDefault:"solid",familyDefault:"classic",cssPrefix:No,replacementClass:Mo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};zt.familyPrefix&&(zt.cssPrefix=zt.familyPrefix);var Pt=O(O({},jo),zt);Pt.autoReplaceSvg||(Pt.observeMutations=!1);var I={};Object.keys(jo).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Pt[e]=n,Ht.forEach(function(r){return r(I)})},get:function(){return Pt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Pt.cssPrefix=t,Ht.forEach(function(n){return n(I)})},get:function(){return Pt.cssPrefix}});Ze.FontAwesomeConfig=I;var Ht=[];function Lc(e){return Ht.push(e),function(){Ht.splice(Ht.indexOf(e),1)}}var Ke=Sr,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jc(e){if(!(!e||!Ye)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var $c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zt(){for(var e=12,t="";e-- >0;)t+=$c[Math.random()*62|0];return t}function Nt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ya(e){return e.classList?Nt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function $o(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Dc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat($o(e[n]),'" ')},"").trim()}function Qn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function xa(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function zc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Hc(e){var t=e.transform,n=e.width,r=n===void 0?Sr:n,a=e.height,i=a===void 0?Sr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&To?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Uc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
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

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
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

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Do(){var e=No,t=Mo,n=I.cssPrefix,r=I.replacementClass,a=Uc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var hi=!1;function dr(){I.autoAddCss&&!hi&&(jc(Do()),hi=!0)}var Bc={mixout:function(){return{dom:{css:Do,insertCss:dr}}},hooks:function(){return{beforeDOMElementCreation:function(){dr()},beforeI2svg:function(){dr()}}}},He=Ze||{};He[ze]||(He[ze]={});He[ze].styles||(He[ze].styles={});He[ze].hooks||(He[ze].hooks={});He[ze].shims||(He[ze].shims=[]);var Ee=He[ze],zo=[],Yc=function e(){q.removeEventListener("DOMContentLoaded",e),Ln=1,zo.map(function(t){return t()})},Ln=!1;Ye&&(Ln=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Ln||q.addEventListener("DOMContentLoaded",Yc));function Wc(e){Ye&&(Ln?setTimeout(e,0):zo.push(e))}function nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?$o(e):"<".concat(t," ").concat(Dc(r),">").concat(i.map(nn).join(""),"</").concat(t,">")}function gi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Kc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},mr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Kc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Xc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Nr(e){var t=Xc(e);return t.length===1?t[0].toString(16):null}function qc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Mr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=vi(t);typeof Ee.hooks.addPack=="function"&&!a?Ee.hooks.addPack(e,vi(t)):Ee.styles[e]=O(O({},Ee.styles[e]||{}),i),e==="fas"&&Mr("fa",t)}var _n,wn,kn,yt=Ee.styles,Vc=Ee.shims,Jc=(_n={},ne(_n,X,Object.values(Gt[X])),ne(_n,Q,Object.values(Gt[Q])),_n),_a=null,Ho={},Uo={},Bo={},Yo={},Wo={},Gc=(wn={},ne(wn,X,Object.keys(Vt[X])),ne(wn,Q,Object.keys(Vt[Q])),wn);function Qc(e){return~Nc.indexOf(e)}function Zc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Qc(a)?a:null}var Ko=function(){var t=function(i){return mr(yt,function(o,s,l){return o[l]=mr(s,i,{}),o},{})};Ho=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Uo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Wo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in yt||I.autoFetchSvg,r=mr(Vc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Bo=r.names,Yo=r.unicodes,_a=Zn(I.styleDefault,{family:I.familyDefault})};Lc(function(e){_a=Zn(e.styleDefault,{family:I.familyDefault})});Ko();function wa(e,t){return(Ho[e]||{})[t]}function eu(e,t){return(Uo[e]||{})[t]}function ct(e,t){return(Wo[e]||{})[t]}function Xo(e){return Bo[e]||{prefix:null,iconName:null}}function tu(e){var t=Yo[e],n=wa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return _a}var ka=function(){return{prefix:null,iconName:null,rest:[]}};function Zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=Vt[r][e],i=Jt[r][e]||Jt[r][a],o=e in Ee.styles?e:null;return i||o||null}var bi=(kn={},ne(kn,X,Object.keys(Gt[X])),ne(kn,Q,Object.keys(Gt[Q])),kn);function er(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ne(t,X,"".concat(I.cssPrefix,"-").concat(X)),ne(t,Q,"".concat(I.cssPrefix,"-").concat(Q)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return bi[X].includes(c)}))&&(s=X),(e.includes(i[Q])||e.some(function(c){return bi[Q].includes(c)}))&&(s=Q);var l=e.reduce(function(c,d){var m=Zc(I.cssPrefix,d);if(yt[d]?(d=Jc[s].includes(d)?Ec[s][d]:d,o=d,c.prefix=d):Gc[s].indexOf(d)>-1?(o=d,c.prefix=Zn(d,{family:s})):m?c.iconName=m:d!==I.replacementClass&&d!==i[X]&&d!==i[Q]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Xo(c.iconName):{},k=ct(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!yt.far&&yt.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},ka());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(yt.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=et()||"fas"),l}var nu=function(){function e(){pc(this,e),this.definitions={}}return hc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Mr(s,o[s]);var l=Gt[X][s];l&&Mr(l,o[s]),Ko()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),yi=[],xt={},Ot={},ru=Object.keys(Ot);function au(e,t){var n=t.mixoutsTo;return yi=e,xt={},Object.keys(Ot).forEach(function(r){ru.indexOf(r)===-1&&delete Ot[r]}),yi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Rn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xt[o]||(xt[o]=[]),xt[o].push(i[o])})}r.provides&&r.provides(Ot)}),n}function Fr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ht(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ot[e]?Ot[e].apply(null,t):void 0}function Rr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(t)return t=ct(n,t)||t,gi(qo.definitions,n,t)||gi(Ee.styles,n,t)}var qo=new nu,iu=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,ht("noAuto")},ou={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(ht("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Wc(function(){lu({autoReplaceSvgRoot:n}),ht("watch",t)})}},su={icon:function(t){if(t===null)return null;if(Rn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Zn(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(Cc))){var a=er(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:ct(i,t)||t}}}},he={noAuto:iu,config:I,dom:ou,parse:su,library:qo,findIconDefinition:Rr,toHtml:nn},lu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(Ee.styles).length>0||I.autoFetchSvg)&&Ye&&I.autoReplaceSvg&&he.dom.i2svg({node:r})};function tr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ye){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function fu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(xa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Qn(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function cu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function Aa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,F=r.found?r:n,N=F.width,z=F.height,_=a==="fak",C=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),E={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(z)})},j=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/z*16*.0625,"em")}:{};k&&(E.attributes[pt]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(d||Zt())},children:[l]}),delete E.attributes.title);var U=O(O({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},j),m.styles)}),fe=r.found&&n.found?Ue("generateAbstractMask",U)||{children:[],attributes:{}}:Ue("generateAbstractIcon",U)||{children:[],attributes:{}},re=fe.children,be=fe.attributes;return U.children=re,U.attributes=be,s?cu(U):fu(U)}function xi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[pt]="");var d=O({},o.styles);xa(a)&&(d.transform=Hc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Qn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function uu(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Qn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var pr=Ee.styles;function Lr(e){var t=e[0],n=e[1],r=e.slice(4),a=pa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var du={found:!1,width:512,height:512};function mu(e,t){!Fo&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function jr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=et()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=Xo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&pr[t]&&pr[t][e]){var o=pr[t][e];return r(Lr(o))}mu(e,t),r(O(O({},du),{},{icon:I.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var _i=function(){},$r=I.measurePerformance&&hn&&hn.mark&&hn.measure?hn:{mark:_i,measure:_i},jt='FA "6.4.0"',pu=function(t){return $r.mark("".concat(jt," ").concat(t," begins")),function(){return Vo(t)}},Vo=function(t){$r.mark("".concat(jt," ").concat(t," ends")),$r.measure("".concat(jt," ").concat(t),"".concat(jt," ").concat(t," begins"),"".concat(jt," ").concat(t," ends"))},Oa={begin:pu,end:Vo},In=function(){};function wi(e){var t=e.getAttribute?e.getAttribute(pt):null;return typeof t=="string"}function hu(e){var t=e.getAttribute?e.getAttribute(ga):null,n=e.getAttribute?e.getAttribute(va):null;return t&&n}function gu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function vu(){if(I.autoReplaceSvg===!0)return Sn.replace;var e=Sn[I.autoReplaceSvg];return e||Sn.replace}function bu(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function yu(e){return q.createElement(e)}function Jo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?bu:yu:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Jo(o,{ceFn:r}))}),a}function xu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Sn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Jo(a),n)}),n.getAttribute(pt)===null&&I.keepOriginalSource){var r=q.createComment(xu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ya(n).indexOf(I.replacementClass))return Sn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return nn(s)}).join(`
`);n.setAttribute(pt,""),n.innerHTML=o}};function ki(e){e()}function Go(e,t){var n=typeof t=="function"?t:In;if(e.length===0)n();else{var r=ki;I.mutateApproach===Ac&&(r=Ze.requestAnimationFrame||ki),r(function(){var a=vu(),i=Oa.begin("mutate");e.map(a),i(),n()})}}var Ea=!1;function Qo(){Ea=!0}function Dr(){Ea=!1}var jn=null;function Ai(e){if(mi&&I.observeMutations){var t=e.treeCallback,n=t===void 0?In:t,r=e.nodeCallback,a=r===void 0?In:r,i=e.pseudoElementsCallback,o=i===void 0?In:i,s=e.observeMutationsRoot,l=s===void 0?q:s;jn=new mi(function(c){if(!Ea){var d=et();Nt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!wi(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&wi(m.target)&&~Tc.indexOf(m.attributeName))if(m.attributeName==="class"&&hu(m.target)){var v=er(ya(m.target)),k=v.prefix,F=v.iconName;m.target.setAttribute(ga,k||d),F&&m.target.setAttribute(va,F)}else gu(m.target)&&a(m.target)})}}),Ye&&jn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _u(){jn&&jn.disconnect()}function wu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ku(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=er(ya(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=eu(a.prefix,e.innerText)||wa(a.prefix,Nr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Au(e){var t=Nt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||Zt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ou(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ku(e),r=n.iconName,a=n.prefix,i=n.rest,o=Au(e),s=Fr("parseNodeAttributes",{},e),l=t.styleParser?wu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Eu=Ee.styles;function Zo(e){var t=I.autoReplaceSvg==="nest"?Oi(e,{styleParser:!1}):Oi(e);return~t.extra.classes.indexOf(Ro)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var tt=new Set;ba.map(function(e){tt.add("fa-".concat(e))});Object.keys(Vt[X]).map(tt.add.bind(tt));Object.keys(Vt[Q]).map(tt.add.bind(tt));tt=en(tt);function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(pi,"-").concat(m))},a=function(m){return n.remove("".concat(pi,"-").concat(m))},i=I.autoFetchSvg?tt:ba.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Eu));i.includes("fa")||i.push("fa");var o=[".".concat(Ro,":not([").concat(pt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(pt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Nt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Oa.begin("onTree"),c=s.reduce(function(d,m){try{var v=Zo(m);v&&d.push(v)}catch(k){Fo||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Go(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Cu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zo(e).then(function(n){n&&Go([n],t)})}function Pu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Rr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Rr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Iu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,F=k===void 0?null:k,N=n.classes,z=N===void 0?[]:N,_=n.attributes,C=_===void 0?{}:_,E=n.styles,j=E===void 0?{}:E;if(t){var U=t.prefix,fe=t.iconName,re=t.icon;return tr(O({type:"icon"},t),function(){return ht("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(v?C["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(F||Zt()):(C["aria-hidden"]="true",C.focusable="false")),Aa({icons:{main:Lr(re),mask:l?Lr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:fe,transform:O(O({},Fe),a),symbol:o,title:v,maskId:d,titleId:F,extra:{attributes:C,styles:j,classes:z}})})}},Su={mixout:function(){return{icon:Pu(Iu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ei,n.nodeCallback=Cu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return Ei(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,F){Promise.all([jr(a,s),d.iconName?jr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var z=pa(N,2),_=z[0],C=z[1];k([n,Aa({icons:{main:_,mask:C},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Qn(s);l.length>0&&(a.style=l);var c;return xa(o)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Tu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return tr({type:"layer"},function(){ht("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(en(i)).join(" ")},children:o}]})}}}},Nu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return tr({type:"counter",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),uu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(en(s))}})})}}}},Mu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return tr({type:"text",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),xi({content:n,transform:O(O({},Fe),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(I.cssPrefix,"-layers-text")].concat(en(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(To){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,xi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Fu=new RegExp('"',"ug"),Ci=[1105920,1112319];function Ru(e){var t=e.replace(Fu,""),n=qc(t,0),r=n>=Ci[0]&&n<=Ci[1],a=t.length===2?t[0]===t[1]:!1;return{value:Nr(a?t[0]:t),isSecondary:r||a}}function Pi(e,t){var n="".concat(kc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Nt(e.children),o=i.filter(function(re){return re.getAttribute(Tr)===t})[0],s=Ze.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Pc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Q:X,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Jt[v][l[2].toLowerCase()]:Ic[v][c],F=Ru(m),N=F.value,z=F.isSecondary,_=l[0].startsWith("FontAwesome"),C=wa(k,N),E=C;if(_){var j=tu(N);j.iconName&&j.prefix&&(C=j.iconName,k=j.prefix)}if(C&&!z&&(!o||o.getAttribute(ga)!==k||o.getAttribute(va)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var U=Ou(),fe=U.extra;fe.attributes[Tr]=t,jr(C,k).then(function(re){var be=Aa(O(O({},U),{},{icons:{main:re,mask:ka()},prefix:k,iconName:E,extra:fe,watchable:!0})),ge=q.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=be.map(function(Le){return nn(Le)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Lu(e){return Promise.all([Pi(e,"::before"),Pi(e,"::after")])}function ju(e){return e.parentNode!==document.head&&!~Oc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ii(e){if(Ye)return new Promise(function(t,n){var r=Nt(e.querySelectorAll("*")).filter(ju).map(Lu),a=Oa.begin("searchPseudoElements");Qo(),Promise.all(r).then(function(){a(),Dr(),t()}).catch(function(){a(),Dr(),n()})})}var $u={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ii,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;I.searchPseudoElements&&Ii(a)}}},Si=!1,Du={mixout:function(){return{dom:{unwatch:function(){Qo(),Si=!0}}}},hooks:function(){return{bootstrap:function(){Ai(Fr("mutationObserverCallbacks",{}))},noAuto:function(){_u()},watch:function(n){var r=n.observeMutationsRoot;Si?Dr():Ai(Fr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ti=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},zu={mixout:function(){return{parse:{transform:function(n){return Ti(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ti(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},hr={x:0,y:0,width:"100%",height:"100%"};function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Hu(e){return e.tag==="g"?e.children:[e]}var Uu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?er(a.split(" ").map(function(o){return o.trim()})):ka();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,k=zc({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:O(O({},hr),{},{fill:"white"})},N=d.children?{children:d.children.map(Ni)}:{},z={tag:"g",attributes:O({},k.inner),children:[Ni(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},N))]},_={tag:"g",attributes:O({},k.outer),children:[z]},C="mask-".concat(s||Zt()),E="clip-".concat(s||Zt()),j={tag:"mask",attributes:O(O({},hr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,_]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Hu(v)},j]};return r.push(U,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(C,")")},hr)}),{children:r,attributes:a}}}},Bu={provides:function(t){var n=!1;Ze.matchMedia&&(n=Ze.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Yu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Wu=[Bc,Su,Tu,Nu,Mu,$u,Du,zu,Uu,Bu,Yu];au(Wu,{mixoutsTo:he});he.noAuto;var es=he.config,ts=he.library;he.dom;var $n=he.parse;he.findIconDefinition;he.toHtml;var Ku=he.icon;he.layer;var Xu=he.text;he.counter;function Mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mi(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dn(e){return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dn(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Vu(e,t){if(e==null)return{};var n=qu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zr(e){return Ju(e)||Gu(e)||Qu(e)||Zu()}function Ju(e){if(Array.isArray(e))return Hr(e)}function Gu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qu(e,t){if(e){if(typeof e=="string")return Hr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hr(e,t)}}function Hr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Zu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ed=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ns={exports:{}};(function(e){(function(t){var n=function(_,C,E){if(!c(C)||m(C)||v(C)||k(C)||l(C))return C;var j,U=0,fe=0;if(d(C))for(j=[],fe=C.length;U<fe;U++)j.push(n(_,C[U],E));else{j={};for(var re in C)Object.prototype.hasOwnProperty.call(C,re)&&(j[_(re,E)]=n(_,C[re],E))}return j},r=function(_,C){C=C||{};var E=C.separator||"_",j=C.split||/(?=[A-Z])/;return _.split(j).join(E)},a=function(_){return F(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(C,E){return E?E.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var C=a(_);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(_,C){return r(_,C).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},d=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},v=function(_){return s.call(_)=="[object RegExp]"},k=function(_){return s.call(_)=="[object Boolean]"},F=function(_){return _=_-0,_===_},N=function(_,C){var E=C&&"process"in C?C.process:C;return typeof E!="function"?_:function(j,U){return E(j,_,U)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,C){return n(N(a,C),_)},decamelizeKeys:function(_,C){return n(N(o,C),_,C)},pascalizeKeys:function(_,C){return n(N(i,C),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(ed)})(ns);var td=ns.exports,nd=["class","style"];function rd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=td.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function ad(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ca(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ca(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=ad(d);break;case"style":l.style=rd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Vu(n,nd);return Oo(e.tag,ke(ke(ke({},t),{},{class:a.class,style:ke(ke({},a.style),o)},a.attrs),s),r)}var rs=!1;try{rs=!0}catch{}function id(){if(!rs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ut(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function od(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),ce(t,"fa-swap-opacity",e.swapOpacity),ce(t,"fa-bounce",e.bounce),ce(t,"fa-shake",e.shake),ce(t,"fa-beat",e.beat),ce(t,"fa-fade",e.fade),ce(t,"fa-beat-fade",e.beatFade),ce(t,"fa-flash",e.flash),ce(t,"fa-spin-pulse",e.spinPulse),ce(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fi(e){if(e&&Dn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if($n.icon)return $n.icon(e);if(e===null)return null;if(Dn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var sd=sa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return Fi(t.icon)}),i=ve(function(){return Ut("classes",od(t))}),o=ve(function(){return Ut("transform",typeof t.transform=="string"?$n.transform(t.transform):t.transform)}),s=ve(function(){return Ut("mask",Fi(t.mask))}),l=ve(function(){return Ku(a.value,ke(ke(ke(ke({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});En(l,function(d){if(!d)return id("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ve(function(){return l.value?Ca(l.value.abstract[0],{},r):null});return function(){return c.value}}});sa({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=es.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat(zr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Oo("div",{class:i.value},r.default?r.default():[])}}});sa({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=es.familyPrefix,i=ve(function(){return Ut("classes",[].concat(zr(t.counter?["".concat(a,"-layers-counter")]:[]),zr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return Ut("transform",typeof t.transform=="string"?$n.transform(t.transform):t.transform)}),s=ve(function(){var c=Xu(t.value.toString(),ke(ke({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return Ca(s.value,{},r)});return function(){return l.value}}});var ld={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},fd={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]};ts.add(fd);ts.add(ld);Mf(mc).component("font-awesome-icon",sd).mount("#app");
