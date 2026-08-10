var Vo=Object.defineProperty;var Va=t=>{throw TypeError(t)};var Yo=(t,e,r)=>e in t?Vo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var tt=(t,e,r)=>Yo(t,typeof e!="symbol"?e+"":e,r),mn=(t,e,r)=>e.has(t)||Va("Cannot "+r);var p=(t,e,r)=>(mn(t,e,"read from private field"),r?r.call(t):e.get(t)),q=(t,e,r)=>e.has(t)?Va("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),L=(t,e,r,n)=>(mn(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r),ge=(t,e,r)=>(mn(t,e,"access private method"),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const $n=!1;var yi=Array.isArray,Jo=Array.prototype.indexOf,Ar=Array.prototype.includes,Xs=Array.from,ki=Object.defineProperty,es=Object.getOwnPropertyDescriptor,Go=Object.getOwnPropertyDescriptors,Zo=Object.prototype,Xo=Array.prototype,wi=Object.getPrototypeOf,Ya=Object.isExtensible;function Qo(t){for(var e=0;e<t.length;e++)t[e]()}function xi(){var t,e,r=new Promise((n,s)=>{t=n,e=s});return{promise:r,resolve:t,reject:e}}const xe=2,as=4,Qs=8,$i=1<<24,St=16,it=32,mr=64,Fn=128,Ze=512,be=1024,Pe=2048,Ct=4096,Ue=8192,xt=16384,en=32768,Pr=65536,Ja=1<<17,qn=1<<18,Kr=1<<19,el=1<<20,wt=1<<25,or=32768,En=1<<21,Kn=1<<22,jt=1<<23,Is=Symbol("$state"),tl=Symbol("legacy props"),rl=Symbol(""),yr=new class extends Error{constructor(){super(...arguments);tt(this,"name","StaleReactionError");tt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},tn=3,Kt=8;function sl(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function nl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function al(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function il(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ol(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ll(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function cl(){throw new Error("https://svelte.dev/e/hydration_failed")}function dl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ul(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function fl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function pl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const hl=1,vl=2,Ei=4,ml=8,gl=16,bl=1,_l=2,Si="[",rn="[!",Wn="]",lr={},ke=Symbol(),yl="http://www.w3.org/1999/xhtml";function Es(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function kl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let H=!1;function Be(t){H=t}let W;function _e(t){if(t===null)throw Es(),lr;return W=t}function Or(){return _e(qe(W))}function x(t){if(H){if(qe(W)!==null)throw Es(),lr;W=t}}function Vn(t=1){if(H){for(var e=t,r=W;e--;)r=qe(r);W=r}}function Us(t=!0){for(var e=0,r=W;;){if(r.nodeType===Kt){var n=r.data;if(n===Wn){if(e===0)return r;e-=1}else(n===Si||n===rn)&&(e+=1)}var s=qe(r);t&&r.remove(),r=s}}function Ci(t){if(!t||t.nodeType!==Kt)throw Es(),lr;return t.data}function Ai(t){return t===this.v}function wl(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Pi(t){return!wl(t,this.v)}let xl=!1,Fe=null;function Nr(t){Fe=t}function vt(t,e=!1,r){Fe={p:Fe,i:!1,c:null,e:null,s:t,x:null,l:null}}function mt(t){var e=Fe,r=e.e;if(r!==null){e.e=null;for(var n of r)to(n)}return t!==void 0&&(e.x=t),e.i=!0,Fe=e.p,t??{}}function Oi(){return!0}let Jt=[];function Ni(){var t=Jt;Jt=[],Qo(t)}function ft(t){if(Jt.length===0&&!ts){var e=Jt;queueMicrotask(()=>{e===Jt&&Ni()})}Jt.push(t)}function $l(){for(;Jt.length>0;)Ni()}function zi(t){var e=re;if(e===null)return Y.f|=jt,t;if((e.f&en)===0){if((e.f&Fn)===0)throw t;e.b.error(t)}else zr(t,e)}function zr(t,e){for(;e!==null;){if((e.f&Fn)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t}const El=-7169;function me(t,e){t.f=t.f&El|e}function Yn(t){(t.f&Ze)!==0||t.deps===null?me(t,be):me(t,Ct)}function Ti(t){if(t!==null)for(const e of t)(e.f&xe)===0||(e.f&or)===0||(e.f^=or,Ti(e.deps))}function Mi(t,e,r){(t.f&Pe)!==0?e.add(t):(t.f&Ct)!==0&&r.add(t),Ti(t.deps),me(t,be)}const js=new Set;let K=null,Sn=null,we=null,De=[],sn=null,Cn=!1,ts=!1;var kr,wr,Xt,xr,ys,ks,Qt,$r,ht,An,Pn,ji;const ma=class ma{constructor(){q(this,ht);tt(this,"committed",!1);tt(this,"current",new Map);tt(this,"previous",new Map);q(this,kr,new Set);q(this,wr,new Set);q(this,Xt,0);q(this,xr,0);q(this,ys,null);q(this,ks,new Set);q(this,Qt,new Set);tt(this,"skipped_effects",new Set);tt(this,"is_fork",!1);q(this,$r,!1)}is_deferred(){return this.is_fork||p(this,xr)>0}process(e){var s;De=[],this.apply();var r=[],n=[];for(const a of e)ge(this,ht,An).call(this,a,r,n);if(this.is_deferred()){ge(this,ht,Pn).call(this,n),ge(this,ht,Pn).call(this,r);for(const a of this.skipped_effects)Di(a)}else{for(const a of p(this,kr))a();p(this,kr).clear(),p(this,Xt)===0&&ge(this,ht,ji).call(this),Sn=this,K=null,Ga(n),Ga(r),Sn=null,(s=p(this,ys))==null||s.resolve()}we=null}capture(e,r){r!==ke&&!this.previous.has(e)&&this.previous.set(e,r),(e.f&jt)===0&&(this.current.set(e,e.v),we==null||we.set(e,e.v))}activate(){K=this,this.apply()}deactivate(){K===this&&(K=null,we=null)}flush(){if(this.activate(),De.length>0){if(Ri(),K!==null&&K!==this)return}else p(this,Xt)===0&&this.process([]);this.deactivate()}discard(){for(const e of p(this,wr))e(this);p(this,wr).clear()}increment(e){L(this,Xt,p(this,Xt)+1),e&&L(this,xr,p(this,xr)+1)}decrement(e){L(this,Xt,p(this,Xt)-1),e&&L(this,xr,p(this,xr)-1),!p(this,$r)&&(L(this,$r,!0),ft(()=>{L(this,$r,!1),this.is_deferred()?De.length>0&&this.flush():this.revive()}))}revive(){for(const e of p(this,ks))p(this,Qt).delete(e),me(e,Pe),$t(e);for(const e of p(this,Qt))me(e,Ct),$t(e);this.flush()}oncommit(e){p(this,kr).add(e)}ondiscard(e){p(this,wr).add(e)}settled(){return(p(this,ys)??L(this,ys,xi())).promise}static ensure(){if(K===null){const e=K=new ma;js.add(K),ts||ft(()=>{K===e&&e.flush()})}return K}apply(){}};kr=new WeakMap,wr=new WeakMap,Xt=new WeakMap,xr=new WeakMap,ys=new WeakMap,ks=new WeakMap,Qt=new WeakMap,$r=new WeakMap,ht=new WeakSet,An=function(e,r,n){e.f^=be;for(var s=e.first,a=null;s!==null;){var i=s.f,l=(i&(it|mr))!==0,o=l&&(i&be)!==0,c=o||(i&Ue)!==0||this.skipped_effects.has(s);if(!c&&s.fn!==null){l?s.f^=be:a!==null&&(i&(as|Qs|$i))!==0?a.b.defer_effect(s):(i&as)!==0?r.push(s):Ss(s)&&((i&St)!==0&&p(this,Qt).add(s),os(s));var d=s.first;if(d!==null){s=d;continue}}var f=s.parent;for(s=s.next;s===null&&f!==null;)f===a&&(a=null),s=f.next,f=f.parent}},Pn=function(e){for(var r=0;r<e.length;r+=1)Mi(e[r],p(this,ks),p(this,Qt))},ji=function(){var s;if(js.size>1){this.previous.clear();var e=we,r=!0;for(const a of js){if(a===this){r=!1;continue}const i=[];for(const[o,c]of this.current){if(a.current.has(o))if(r&&c!==a.current.get(o))a.current.set(o,c);else continue;i.push(o)}if(i.length===0)continue;const l=[...a.current.keys()].filter(o=>!this.current.has(o));if(l.length>0){var n=De;De=[];const o=new Set,c=new Map;for(const d of i)Ii(d,l,o,c);if(De.length>0){K=a,a.apply();for(const d of De)ge(s=a,ht,An).call(s,d,[],[]);a.deactivate()}De=n}}K=null,we=e}this.committed=!0,js.delete(this)};let Rt=ma;function G(t){var e=ts;ts=!0;try{for(var r;;){if($l(),De.length===0&&(K==null||K.flush(),De.length===0))return sn=null,r;Ri()}}finally{ts=e}}function Ri(){Cn=!0;var t=null;try{for(var e=0;De.length>0;){var r=Rt.ensure();if(e++>1e3){var n,s;Sl()}r.process(De),It.clear()}}finally{Cn=!1,sn=null}}function Sl(){try{ll()}catch(t){zr(t,sn)}}let rt=null;function Ga(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var n=t[r++];if((n.f&(xt|Ue))===0&&Ss(n)&&(rt=new Set,os(n),n.deps===null&&n.first===null&&n.nodes===null&&(n.teardown===null&&n.ac===null?ao(n):n.fn=null),(rt==null?void 0:rt.size)>0)){It.clear();for(const s of rt){if((s.f&(xt|Ue))!==0)continue;const a=[s];let i=s.parent;for(;i!==null;)rt.has(i)&&(rt.delete(i),a.push(i)),i=i.parent;for(let l=a.length-1;l>=0;l--){const o=a[l];(o.f&(xt|Ue))===0&&os(o)}}rt.clear()}}rt=null}}function Ii(t,e,r,n){if(!r.has(t)&&(r.add(t),t.reactions!==null))for(const s of t.reactions){const a=s.f;(a&xe)!==0?Ii(s,e,r,n):(a&(Kn|St))!==0&&(a&Pe)===0&&Li(s,e,n)&&(me(s,Pe),$t(s))}}function Li(t,e,r){const n=r.get(t);if(n!==void 0)return n;if(t.deps!==null)for(const s of t.deps){if(Ar.call(e,s))return!0;if((s.f&xe)!==0&&Li(s,e,r))return r.set(s,!0),!0}return r.set(t,!1),!1}function $t(t){for(var e=sn=t;e.parent!==null;){e=e.parent;var r=e.f;if(Cn&&e===re&&(r&St)!==0&&(r&qn)===0)return;if((r&(mr|it))!==0){if((r&be)===0)return;e.f^=be}}De.push(e)}function Di(t){if(!((t.f&it)!==0&&(t.f&be)!==0)){me(t,be);for(var e=t.first;e!==null;)Di(e),e=e.next}}function Cl(t){let e=0,r=cr(0),n;return()=>{Zn()&&(u(r),on(()=>(e===0&&(n=cn(()=>t(()=>rs(r)))),e+=1,()=>{ft(()=>{e-=1,e===0&&(n==null||n(),n=void 0,rs(r))})})))}}var Al=Pr|Kr|Fn;function Pl(t,e,r){new Ol(t,e,r)}var Ie,ws,lt,er,ct,Ve,Ne,dt,bt,Mt,tr,_t,Er,rr,Sr,Cr,yt,Gs,he,Bi,Hi,On,Ls,Ds,Nn;class Ol{constructor(e,r,n){q(this,he);tt(this,"parent");tt(this,"is_pending",!1);q(this,Ie);q(this,ws,H?W:null);q(this,lt);q(this,er);q(this,ct);q(this,Ve,null);q(this,Ne,null);q(this,dt,null);q(this,bt,null);q(this,Mt,null);q(this,tr,0);q(this,_t,0);q(this,Er,!1);q(this,rr,!1);q(this,Sr,new Set);q(this,Cr,new Set);q(this,yt,null);q(this,Gs,Cl(()=>(L(this,yt,cr(p(this,tr))),()=>{L(this,yt,null)})));L(this,Ie,e),L(this,lt,r),L(this,er,n),this.parent=re.b,this.is_pending=!!p(this,lt).pending,L(this,ct,ln(()=>{if(re.b=this,H){const a=p(this,ws);Or(),a.nodeType===Kt&&a.data===rn?ge(this,he,Hi).call(this):(ge(this,he,Bi).call(this),p(this,_t)===0&&(this.is_pending=!1))}else{var s=ge(this,he,On).call(this);try{L(this,Ve,Je(()=>n(s)))}catch(a){this.error(a)}p(this,_t)>0?ge(this,he,Ds).call(this):this.is_pending=!1}return()=>{var a;(a=p(this,Mt))==null||a.remove()}},Al)),H&&L(this,Ie,W)}defer_effect(e){Mi(e,p(this,Sr),p(this,Cr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!p(this,lt).pending}update_pending_count(e){ge(this,he,Nn).call(this,e),L(this,tr,p(this,tr)+e),!(!p(this,yt)||p(this,Er))&&(L(this,Er,!0),ft(()=>{L(this,Er,!1),p(this,yt)&&Tr(p(this,yt),p(this,tr))}))}get_effect_pending(){return p(this,Gs).call(this),u(p(this,yt))}error(e){var r=p(this,lt).onerror;let n=p(this,lt).failed;if(p(this,rr)||!r&&!n)throw e;p(this,Ve)&&(Te(p(this,Ve)),L(this,Ve,null)),p(this,Ne)&&(Te(p(this,Ne)),L(this,Ne,null)),p(this,dt)&&(Te(p(this,dt)),L(this,dt,null)),H&&(_e(p(this,ws)),Vn(),_e(Us()));var s=!1,a=!1;const i=()=>{if(s){kl();return}s=!0,a&&pl(),Rt.ensure(),L(this,tr,0),p(this,dt)!==null&&nr(p(this,dt),()=>{L(this,dt,null)}),this.is_pending=this.has_pending_snippet(),L(this,Ve,ge(this,he,Ls).call(this,()=>(L(this,rr,!1),Je(()=>p(this,er).call(this,p(this,Ie)))))),p(this,_t)>0?ge(this,he,Ds).call(this):this.is_pending=!1};ft(()=>{try{a=!0,r==null||r(e,i),a=!1}catch(l){zr(l,p(this,ct)&&p(this,ct).parent)}n&&L(this,dt,ge(this,he,Ls).call(this,()=>{Rt.ensure(),L(this,rr,!0);try{return Je(()=>{n(p(this,Ie),()=>e,()=>i)})}catch(l){return zr(l,p(this,ct).parent),null}finally{L(this,rr,!1)}}))})}}Ie=new WeakMap,ws=new WeakMap,lt=new WeakMap,er=new WeakMap,ct=new WeakMap,Ve=new WeakMap,Ne=new WeakMap,dt=new WeakMap,bt=new WeakMap,Mt=new WeakMap,tr=new WeakMap,_t=new WeakMap,Er=new WeakMap,rr=new WeakMap,Sr=new WeakMap,Cr=new WeakMap,yt=new WeakMap,Gs=new WeakMap,he=new WeakSet,Bi=function(){try{L(this,Ve,Je(()=>p(this,er).call(this,p(this,Ie))))}catch(e){this.error(e)}},Hi=function(){const e=p(this,lt).pending;e&&(L(this,Ne,Je(()=>e(p(this,Ie)))),ft(()=>{var r=ge(this,he,On).call(this);L(this,Ve,ge(this,he,Ls).call(this,()=>(Rt.ensure(),Je(()=>p(this,er).call(this,r))))),p(this,_t)>0?ge(this,he,Ds).call(this):(nr(p(this,Ne),()=>{L(this,Ne,null)}),this.is_pending=!1)}))},On=function(){var e=p(this,Ie);return this.is_pending&&(L(this,Mt,Ae()),p(this,Ie).before(p(this,Mt)),e=p(this,Mt)),e},Ls=function(e){var r=re,n=Y,s=Fe;Qe(p(this,ct)),Me(p(this,ct)),Nr(p(this,ct).ctx);try{return e()}catch(a){return zi(a),null}finally{Qe(r),Me(n),Nr(s)}},Ds=function(){const e=p(this,lt).pending;p(this,Ve)!==null&&(L(this,bt,document.createDocumentFragment()),p(this,bt).append(p(this,Mt)),lo(p(this,Ve),p(this,bt))),p(this,Ne)===null&&L(this,Ne,Je(()=>e(p(this,Ie))))},Nn=function(e){var r;if(!this.has_pending_snippet()){this.parent&&ge(r=this.parent,he,Nn).call(r,e);return}if(L(this,_t,p(this,_t)+e),p(this,_t)===0){this.is_pending=!1;for(const n of p(this,Sr))me(n,Pe),$t(n);for(const n of p(this,Cr))me(n,Ct),$t(n);p(this,Sr).clear(),p(this,Cr).clear(),p(this,Ne)&&nr(p(this,Ne),()=>{L(this,Ne,null)}),p(this,bt)&&(p(this,Ie).before(p(this,bt)),L(this,bt,null))}};function Ui(t,e,r,n){const s=nn;var a=t.filter(h=>!h.settled);if(r.length===0&&a.length===0){n(e.map(s));return}var i=K,l=re,o=Nl(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(h=>h.promise)):null;function d(h){o();try{n(h)}catch(m){(l.f&xt)===0&&zr(m,l)}i==null||i.deactivate(),zn()}if(r.length===0){c.then(()=>d(e.map(s)));return}function f(){o(),Promise.all(r.map(h=>zl(h))).then(h=>d([...e.map(s),...h])).catch(h=>zr(h,l))}c?c.then(f):f()}function Nl(){var t=re,e=Y,r=Fe,n=K;return function(a=!0){Qe(t),Me(e),Nr(r),a&&(n==null||n.activate())}}function zn(){Qe(null),Me(null),Nr(null)}function nn(t){var e=xe|Pe,r=Y!==null&&(Y.f&xe)!==0?Y:null;return re!==null&&(re.f|=Kr),{ctx:Fe,deps:null,effects:null,equals:Ai,f:e,fn:t,reactions:null,rv:0,v:ke,wv:0,parent:r??re,ac:null}}function zl(t,e,r){let n=re;n===null&&nl();var s=n.b,a=void 0,i=cr(ke),l=!Y,o=new Map;return Ul(()=>{var m;var c=xi();a=c.promise;try{Promise.resolve(t()).then(c.resolve,c.reject).then(()=>{d===K&&d.committed&&d.deactivate(),zn()})}catch(b){c.reject(b),zn()}var d=K;if(l){var f=s.is_rendered();s.update_pending_count(1),d.increment(f),(m=o.get(d))==null||m.reject(yr),o.delete(d),o.set(d,c)}const h=(b,z=void 0)=>{if(d.activate(),z)z!==yr&&(i.f|=jt,Tr(i,z));else{(i.f&jt)!==0&&(i.f^=jt),Tr(i,b);for(const[v,w]of o){if(o.delete(v),v===d)break;w.reject(yr)}}l&&(s.update_pending_count(-1),d.decrement(f))};c.promise.then(h,b=>h(null,b||"unknown"))}),Xn(()=>{for(const c of o.values())c.reject(yr)}),new Promise(c=>{function d(f){function h(){f===a?c(i):d(a)}f.then(h,h)}d(a)})}function Ge(t){const e=nn(t);return co(e),e}function Tl(t){const e=nn(t);return e.equals=Pi,e}function Fi(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)Te(e[r])}}function Ml(t){for(var e=t.parent;e!==null;){if((e.f&xe)===0)return(e.f&xt)===0?e:null;e=e.parent}return null}function Jn(t){var e,r=re;Qe(Ml(t));try{t.f&=~or,Fi(t),e=ho(t)}finally{Qe(r)}return e}function qi(t){var e=Jn(t);if(!t.equals(e)&&(t.wv=fo(),(!(K!=null&&K.is_fork)||t.deps===null)&&(t.v=e,t.deps===null))){me(t,be);return}Dt||(we!==null?(Zn()||K!=null&&K.is_fork)&&we.set(t,e):Yn(t))}let Tn=new Set;const It=new Map;let Ki=!1;function cr(t,e){var r={f:0,v:t,reactions:null,equals:Ai,rv:0,wv:0};return r}function ee(t,e){const r=cr(t);return co(r),r}function Wi(t,e=!1,r=!0){const n=cr(t);return e||(n.equals=Pi),n}function k(t,e,r=!1){Y!==null&&(!at||(Y.f&Ja)!==0)&&Oi()&&(Y.f&(xe|St|Kn|Ja))!==0&&(Xe===null||!Ar.call(Xe,t))&&fl();let n=r?nt(e):e;return Tr(t,n)}function Tr(t,e){if(!t.equals(e)){var r=t.v;Dt?It.set(t,e):It.set(t,r),t.v=e;var n=Rt.ensure();if(n.capture(t,r),(t.f&xe)!==0){const s=t;(t.f&Pe)!==0&&Jn(s),Yn(s)}t.wv=fo(),Vi(t,Pe),re!==null&&(re.f&be)!==0&&(re.f&(it|mr))===0&&(We===null?Kl([t]):We.push(t)),!n.is_fork&&Tn.size>0&&!Ki&&jl()}return e}function jl(){Ki=!1;for(const t of Tn)(t.f&be)!==0&&me(t,Ct),Ss(t)&&os(t);Tn.clear()}function rs(t){k(t,t.v+1)}function Vi(t,e){var r=t.reactions;if(r!==null)for(var n=r.length,s=0;s<n;s++){var a=r[s],i=a.f,l=(i&Pe)===0;if(l&&me(a,e),(i&xe)!==0){var o=a;we==null||we.delete(o),(i&or)===0&&(i&Ze&&(a.f|=or),Vi(o,Ct))}else l&&((i&St)!==0&&rt!==null&&rt.add(a),$t(a))}}function nt(t){if(typeof t!="object"||t===null||Is in t)return t;const e=wi(t);if(e!==Zo&&e!==Xo)return t;var r=new Map,n=yi(t),s=ee(0),a=ar,i=l=>{if(ar===a)return l();var o=Y,c=ar;Me(null),ei(a);var d=l();return Me(o),ei(c),d};return n&&r.set("length",ee(t.length)),new Proxy(t,{defineProperty(l,o,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&dl();var d=r.get(o);return d===void 0?d=i(()=>{var f=ee(c.value);return r.set(o,f),f}):k(d,c.value,!0),!0},deleteProperty(l,o){var c=r.get(o);if(c===void 0){if(o in l){const d=i(()=>ee(ke));r.set(o,d),rs(s)}}else k(c,ke),rs(s);return!0},get(l,o,c){var m;if(o===Is)return t;var d=r.get(o),f=o in l;if(d===void 0&&(!f||(m=es(l,o))!=null&&m.writable)&&(d=i(()=>{var b=nt(f?l[o]:ke),z=ee(b);return z}),r.set(o,d)),d!==void 0){var h=u(d);return h===ke?void 0:h}return Reflect.get(l,o,c)},getOwnPropertyDescriptor(l,o){var c=Reflect.getOwnPropertyDescriptor(l,o);if(c&&"value"in c){var d=r.get(o);d&&(c.value=u(d))}else if(c===void 0){var f=r.get(o),h=f==null?void 0:f.v;if(f!==void 0&&h!==ke)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(l,o){var h;if(o===Is)return!0;var c=r.get(o),d=c!==void 0&&c.v!==ke||Reflect.has(l,o);if(c!==void 0||re!==null&&(!d||(h=es(l,o))!=null&&h.writable)){c===void 0&&(c=i(()=>{var m=d?nt(l[o]):ke,b=ee(m);return b}),r.set(o,c));var f=u(c);if(f===ke)return!1}return d},set(l,o,c,d){var T;var f=r.get(o),h=o in l;if(n&&o==="length")for(var m=c;m<f.v;m+=1){var b=r.get(m+"");b!==void 0?k(b,ke):m in l&&(b=i(()=>ee(ke)),r.set(m+"",b))}if(f===void 0)(!h||(T=es(l,o))!=null&&T.writable)&&(f=i(()=>ee(void 0)),k(f,nt(c)),r.set(o,f));else{h=f.v!==ke;var z=i(()=>nt(c));k(f,z)}var v=Reflect.getOwnPropertyDescriptor(l,o);if(v!=null&&v.set&&v.set.call(d,c),!h){if(n&&typeof o=="string"){var w=r.get("length"),C=Number(o);Number.isInteger(C)&&C>=w.v&&k(w,C+1)}rs(s)}return!0},ownKeys(l){u(s);var o=Reflect.ownKeys(l).filter(f=>{var h=r.get(f);return h===void 0||h.v!==ke});for(var[c,d]of r)d.v!==ke&&!(c in l)&&o.push(c);return o},setPrototypeOf(){ul()}})}var Za,Yi,Ji,Gi,Zi;function Mn(){if(Za===void 0){Za=window,Yi=document,Ji=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Gi=es(e,"firstChild").get,Zi=es(e,"nextSibling").get,Ya(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Ya(r)&&(r.__t=void 0)}}function Ae(t=""){return document.createTextNode(t)}function He(t){return Gi.call(t)}function qe(t){return Zi.call(t)}function E(t,e){if(!H)return He(t);var r=He(W);if(r===null)r=W.appendChild(Ae());else if(e&&r.nodeType!==tn){var n=Ae();return r==null||r.before(n),_e(n),n}return _e(r),r}function is(t,e=!1){if(!H){var r=He(t);return r instanceof Comment&&r.data===""?qe(r):r}if(e&&(W==null?void 0:W.nodeType)!==tn){var n=Ae();return W==null||W.before(n),_e(n),n}return W}function O(t,e=1,r=!1){let n=H?W:t;for(var s;e--;)s=n,n=qe(n);if(!H)return n;if(r&&(n==null?void 0:n.nodeType)!==tn){var a=Ae();return n===null?s==null||s.after(a):n.before(a),_e(a),a}return _e(n),n}function Gn(t){t.textContent=""}function Xi(){return!1}function Rl(t){H&&He(t)!==null&&Gn(t)}let Xa=!1;function Qi(){Xa||(Xa=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function an(t){var e=Y,r=re;Me(null),Qe(null);try{return t()}finally{Me(e),Qe(r)}}function Il(t,e,r,n=r){t.addEventListener(e,()=>an(r));const s=t.__on_r;s?t.__on_r=()=>{s(),n(!0)}:t.__on_r=()=>n(!0),Qi()}function Ll(t){re===null&&(Y===null&&ol(),il()),Dt&&al()}function Dl(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function gt(t,e,r){var n=re;n!==null&&(n.f&Ue)!==0&&(t|=Ue);var s={ctx:Fe,deps:null,nodes:null,f:t|Pe|Ze,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};if(r)try{os(s),s.f|=en}catch(l){throw Te(s),l}else e!==null&&$t(s);var a=s;if(r&&a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Kr)===0&&(a=a.first,(t&St)!==0&&(t&Pr)!==0&&a!==null&&(a.f|=Pr)),a!==null&&(a.parent=n,n!==null&&Dl(a,n),Y!==null&&(Y.f&xe)!==0&&(t&mr)===0)){var i=Y;(i.effects??(i.effects=[])).push(a)}return s}function Zn(){return Y!==null&&!at}function Xn(t){const e=gt(Qs,null,!1);return me(e,be),e.teardown=t,e}function eo(t){Ll();var e=re.f,r=!Y&&(e&it)!==0&&(e&en)===0;if(r){var n=Fe;(n.e??(n.e=[])).push(t)}else return to(t)}function to(t){return gt(as|el,t,!1)}function Bl(t){Rt.ensure();const e=gt(mr|Kr,t,!0);return(r={})=>new Promise(n=>{r.outro?nr(e,()=>{Te(e),n(void 0)}):(Te(e),n(void 0))})}function Hl(t){return gt(as,t,!1)}function Ul(t){return gt(Kn|Kr,t,!0)}function on(t,e=0){return gt(Qs|e,t,!0)}function U(t,e=[],r=[],n=[]){Ui(n,e,r,s=>{gt(Qs,()=>t(...s.map(u)),!0)})}function Fl(t,e=[],r=[],n=[]){var s=K,a=r.length>0||n.length>0;a&&s.increment(!0),Ui(n,e,r,i=>{gt(as,()=>t(...i.map(u)),!1),a&&s.decrement(!0)})}function ln(t,e=0){var r=gt(St|e,t,!0);return r}function Je(t){return gt(it|Kr,t,!0)}function ro(t){var e=t.teardown;if(e!==null){const r=Dt,n=Y;Qa(!0),Me(null);try{e.call(null)}finally{Qa(r),Me(n)}}}function so(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const s=r.ac;s!==null&&an(()=>{s.abort(yr)});var n=r.next;(r.f&mr)!==0?r.parent=null:Te(r,e),r=n}}function ql(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&it)===0&&Te(e),e=r}}function Te(t,e=!0){var r=!1;(e||(t.f&qn)!==0)&&t.nodes!==null&&t.nodes.end!==null&&(no(t.nodes.start,t.nodes.end),r=!0),so(t,e&&!r),Fs(t,0),me(t,xt);var n=t.nodes&&t.nodes.t;if(n!==null)for(const a of n)a.stop();ro(t);var s=t.parent;s!==null&&s.first!==null&&ao(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes=t.ac=null}function no(t,e){for(;t!==null;){var r=t===e?null:qe(t);t.remove(),t=r}}function ao(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function nr(t,e,r=!0){var n=[];io(t,n,!0);var s=()=>{r&&Te(t),e&&e()},a=n.length;if(a>0){var i=()=>--a||s();for(var l of n)l.out(i)}else s()}function io(t,e,r){if((t.f&Ue)===0){t.f^=Ue;var n=t.nodes&&t.nodes.t;if(n!==null)for(const l of n)(l.is_global||r)&&e.push(l);for(var s=t.first;s!==null;){var a=s.next,i=(s.f&Pr)!==0||(s.f&it)!==0&&(t.f&St)!==0;io(s,e,i?r:!1),s=a}}}function Qn(t){oo(t,!0)}function oo(t,e){if((t.f&Ue)!==0){t.f^=Ue,(t.f&be)===0&&(me(t,Pe),$t(t));for(var r=t.first;r!==null;){var n=r.next,s=(r.f&Pr)!==0||(r.f&it)!==0;oo(r,s?e:!1),r=n}var a=t.nodes&&t.nodes.t;if(a!==null)for(const i of a)(i.is_global||e)&&i.in()}}function lo(t,e){if(t.nodes)for(var r=t.nodes.start,n=t.nodes.end;r!==null;){var s=r===n?null:qe(r);e.append(r),r=s}}let Bs=!1,Dt=!1;function Qa(t){Dt=t}let Y=null,at=!1;function Me(t){Y=t}let re=null;function Qe(t){re=t}let Xe=null;function co(t){Y!==null&&(Xe===null?Xe=[t]:Xe.push(t))}let ze=null,Re=0,We=null;function Kl(t){We=t}let uo=1,Gt=0,ar=Gt;function ei(t){ar=t}function fo(){return++uo}function Ss(t){var e=t.f;if((e&Pe)!==0)return!0;if(e&xe&&(t.f&=~or),(e&Ct)!==0){for(var r=t.deps,n=r.length,s=0;s<n;s++){var a=r[s];if(Ss(a)&&qi(a),a.wv>t.wv)return!0}(e&Ze)!==0&&we===null&&me(t,be)}return!1}function po(t,e,r=!0){var n=t.reactions;if(n!==null&&!(Xe!==null&&Ar.call(Xe,t)))for(var s=0;s<n.length;s++){var a=n[s];(a.f&xe)!==0?po(a,e,!1):e===a&&(r?me(a,Pe):(a.f&be)!==0&&me(a,Ct),$t(a))}}function ho(t){var z;var e=ze,r=Re,n=We,s=Y,a=Xe,i=Fe,l=at,o=ar,c=t.f;ze=null,Re=0,We=null,Y=(c&(it|mr))===0?t:null,Xe=null,Nr(t.ctx),at=!1,ar=++Gt,t.ac!==null&&(an(()=>{t.ac.abort(yr)}),t.ac=null);try{t.f|=En;var d=t.fn,f=d(),h=t.deps,m=K==null?void 0:K.is_fork;if(ze!==null){var b;if(m||Fs(t,Re),h!==null&&Re>0)for(h.length=Re+ze.length,b=0;b<ze.length;b++)h[Re+b]=ze[b];else t.deps=h=ze;if(Zn()&&(t.f&Ze)!==0)for(b=Re;b<h.length;b++)((z=h[b]).reactions??(z.reactions=[])).push(t)}else!m&&h!==null&&Re<h.length&&(Fs(t,Re),h.length=Re);if(Oi()&&We!==null&&!at&&h!==null&&(t.f&(xe|Ct|Pe))===0)for(b=0;b<We.length;b++)po(We[b],t);if(s!==null&&s!==t){if(Gt++,s.deps!==null)for(let v=0;v<r;v+=1)s.deps[v].rv=Gt;if(e!==null)for(const v of e)v.rv=Gt;We!==null&&(n===null?n=We:n.push(...We))}return(t.f&jt)!==0&&(t.f^=jt),f}catch(v){return zi(v)}finally{t.f^=En,ze=e,Re=r,We=n,Y=s,Xe=a,Nr(i),at=l,ar=o}}function Wl(t,e){let r=e.reactions;if(r!==null){var n=Jo.call(r,t);if(n!==-1){var s=r.length-1;s===0?r=e.reactions=null:(r[n]=r[s],r.pop())}}if(r===null&&(e.f&xe)!==0&&(ze===null||!Ar.call(ze,e))){var a=e;(a.f&Ze)!==0&&(a.f^=Ze,a.f&=~or),Yn(a),Fi(a),Fs(a,0)}}function Fs(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)Wl(t,r[n])}function os(t){var e=t.f;if((e&xt)===0){me(t,be);var r=re,n=Bs;re=t,Bs=!0;try{(e&(St|$i))!==0?ql(t):so(t),ro(t);var s=ho(t);t.teardown=typeof s=="function"?s:null,t.wv=uo;var a;$n&&xl&&(t.f&Pe)!==0&&t.deps}finally{Bs=n,re=r}}}async function Vl(){await Promise.resolve(),G()}function u(t){var e=t.f,r=(e&xe)!==0;if(Y!==null&&!at){var n=re!==null&&(re.f&xt)!==0;if(!n&&(Xe===null||!Ar.call(Xe,t))){var s=Y.deps;if((Y.f&En)!==0)t.rv<Gt&&(t.rv=Gt,ze===null&&s!==null&&s[Re]===t?Re++:ze===null?ze=[t]:ze.push(t));else{(Y.deps??(Y.deps=[])).push(t);var a=t.reactions;a===null?t.reactions=[Y]:Ar.call(a,Y)||a.push(Y)}}}if(Dt&&It.has(t))return It.get(t);if(r){var i=t;if(Dt){var l=i.v;return((i.f&be)===0&&i.reactions!==null||mo(i))&&(l=Jn(i)),It.set(i,l),l}var o=(i.f&Ze)===0&&!at&&Y!==null&&(Bs||(Y.f&Ze)!==0),c=i.deps===null;Ss(i)&&(o&&(i.f|=Ze),qi(i)),o&&!c&&vo(i)}if(we!=null&&we.has(t))return we.get(t);if((t.f&jt)!==0)throw t.v;return t.v}function vo(t){if(t.deps!==null){t.f|=Ze;for(const e of t.deps)(e.reactions??(e.reactions=[])).push(t),(e.f&xe)!==0&&(e.f&Ze)===0&&vo(e)}}function mo(t){if(t.v===ke)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(It.has(e)||(e.f&xe)!==0&&mo(e))return!0;return!1}function cn(t){var e=at;try{return at=!0,t()}finally{at=e}}const Yl=["touchstart","touchmove"];function Jl(t){return Yl.includes(t)}const go=new Set,jn=new Set;function Gl(t,e,r,n={}){function s(a){if(n.capture||Xr.call(e,a),!a.cancelBubble)return an(()=>r==null?void 0:r.call(this,a))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?ft(()=>{e.addEventListener(t,s,n)}):e.addEventListener(t,s,n),s}function Ee(t,e,r,n,s){var a={capture:n,passive:s},i=Gl(t,e,r,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Xn(()=>{e.removeEventListener(t,i,a)})}function Wr(t){for(var e=0;e<t.length;e++)go.add(t[e]);for(var r of jn)r(t)}let ti=null;function Xr(t){var v;var e=this,r=e.ownerDocument,n=t.type,s=((v=t.composedPath)==null?void 0:v.call(t))||[],a=s[0]||t.target;ti=t;var i=0,l=ti===t&&t.__root;if(l){var o=s.indexOf(l);if(o!==-1&&(e===document||e===window)){t.__root=e;return}var c=s.indexOf(e);if(c===-1)return;o<=c&&(i=o)}if(a=s[i]||t.target,a!==e){ki(t,"currentTarget",{configurable:!0,get(){return a||r}});var d=Y,f=re;Me(null),Qe(null);try{for(var h,m=[];a!==null;){var b=a.assignedSlot||a.parentNode||a.host||null;try{var z=a["__"+n];z!=null&&(!a.disabled||t.target===a)&&z.call(a,t)}catch(w){h?m.push(w):h=w}if(t.cancelBubble||b===e||b===null)break;a=b}if(h){for(let w of m)queueMicrotask(()=>{throw w});throw h}}finally{t.__root=e,delete t.currentTarget,Me(d),Qe(f)}}}function bo(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function pt(t,e){var r=re;r.nodes===null&&(r.nodes={start:t,end:e,a:null,t:null})}function B(t,e){var r=(e&bl)!==0,n=(e&_l)!==0,s,a=!t.startsWith("<!>");return()=>{if(H)return pt(W,null),W;s===void 0&&(s=bo(a?t:"<!>"+t),r||(s=He(s)));var i=n||Ji?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=He(i),o=i.lastChild;pt(l,o)}else pt(i,i);return i}}function gn(t=""){if(!H){var e=Ae(t+"");return pt(e,e),e}var r=W;return r.nodeType!==tn&&(r.before(r=Ae()),_e(r)),pt(r,r),r}function qs(){if(H)return pt(W,null),W;var t=document.createDocumentFragment(),e=document.createComment(""),r=Ae();return t.append(e,r),pt(e,r),t}function M(t,e){if(H){var r=re;((r.f&en)===0||r.nodes.end===null)&&(r.nodes.end=W),Or();return}t!==null&&t.before(e)}function fe(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function ea(t,e){return _o(t,e)}function Zl(t,e){Mn(),e.intro=e.intro??!1;const r=e.target,n=H,s=W;try{for(var a=He(r);a&&(a.nodeType!==Kt||a.data!==Si);)a=qe(a);if(!a)throw lr;Be(!0),_e(a);const i=_o(t,{...e,anchor:a});return Be(!1),i}catch(i){if(i instanceof Error&&i.message.split(`
`).some(l=>l.startsWith("https://svelte.dev/e/")))throw i;return i!==lr&&console.warn("Failed to hydrate: ",i),e.recover===!1&&cl(),Mn(),Gn(r),Be(!1),ea(t,e)}finally{Be(n),_e(s)}}const br=new Map;function _o(t,{target:e,anchor:r,props:n={},events:s,context:a,intro:i=!0}){Mn();var l=new Set,o=f=>{for(var h=0;h<f.length;h++){var m=f[h];if(!l.has(m)){l.add(m);var b=Jl(m);e.addEventListener(m,Xr,{passive:b});var z=br.get(m);z===void 0?(document.addEventListener(m,Xr,{passive:b}),br.set(m,1)):br.set(m,z+1)}}};o(Xs(go)),jn.add(o);var c=void 0,d=Bl(()=>{var f=r??e.appendChild(Ae());return Pl(f,{pending:()=>{}},h=>{if(a){vt({});var m=Fe;m.c=a}if(s&&(n.$$events=s),H&&pt(h,null),c=t(h,n)||{},H&&(re.nodes.end=W,W===null||W.nodeType!==Kt||W.data!==Wn))throw Es(),lr;a&&mt()}),()=>{var b;for(var h of l){e.removeEventListener(h,Xr);var m=br.get(h);--m===0?(document.removeEventListener(h,Xr),br.delete(h)):br.set(h,m)}jn.delete(o),f!==r&&((b=f.parentNode)==null||b.removeChild(f))}});return Rn.set(c,d),c}let Rn=new WeakMap;function Xl(t,e){const r=Rn.get(t);return r?(Rn.delete(t),r(e)):Promise.resolve()}var st,ut,Le,sr,xs,$s,Zs;class Ql{constructor(e,r=!0){tt(this,"anchor");q(this,st,new Map);q(this,ut,new Map);q(this,Le,new Map);q(this,sr,new Set);q(this,xs,!0);q(this,$s,()=>{var e=K;if(p(this,st).has(e)){var r=p(this,st).get(e),n=p(this,ut).get(r);if(n)Qn(n),p(this,sr).delete(r);else{var s=p(this,Le).get(r);s&&(p(this,ut).set(r,s.effect),p(this,Le).delete(r),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),n=s.effect)}for(const[a,i]of p(this,st)){if(p(this,st).delete(a),a===e)break;const l=p(this,Le).get(i);l&&(Te(l.effect),p(this,Le).delete(i))}for(const[a,i]of p(this,ut)){if(a===r||p(this,sr).has(a))continue;const l=()=>{if(Array.from(p(this,st).values()).includes(a)){var c=document.createDocumentFragment();lo(i,c),c.append(Ae()),p(this,Le).set(a,{effect:i,fragment:c})}else Te(i);p(this,sr).delete(a),p(this,ut).delete(a)};p(this,xs)||!n?(p(this,sr).add(a),nr(i,l,!1)):l()}}});q(this,Zs,e=>{p(this,st).delete(e);const r=Array.from(p(this,st).values());for(const[n,s]of p(this,Le))r.includes(n)||(Te(s.effect),p(this,Le).delete(n))});this.anchor=e,L(this,xs,r)}ensure(e,r){var n=K,s=Xi();if(r&&!p(this,ut).has(e)&&!p(this,Le).has(e))if(s){var a=document.createDocumentFragment(),i=Ae();a.append(i),p(this,Le).set(e,{effect:Je(()=>r(i)),fragment:a})}else p(this,ut).set(e,Je(()=>r(this.anchor)));if(p(this,st).set(n,e),s){for(const[l,o]of p(this,ut))l===e?n.skipped_effects.delete(o):n.skipped_effects.add(o);for(const[l,o]of p(this,Le))l===e?n.skipped_effects.delete(o.effect):n.skipped_effects.add(o.effect);n.oncommit(p(this,$s)),n.ondiscard(p(this,Zs))}else H&&(this.anchor=W),p(this,$s).call(this)}}st=new WeakMap,ut=new WeakMap,Le=new WeakMap,sr=new WeakMap,xs=new WeakMap,$s=new WeakMap,Zs=new WeakMap;function se(t,e,r=!1){H&&Or();var n=new Ql(t),s=r?Pr:0;function a(i,l){if(H){const c=Ci(t)===rn;if(i===c){var o=Us();_e(o),n.anchor=o,Be(!1),n.ensure(i,l),Be(!0);return}}n.ensure(i,l)}ln(()=>{var i=!1;e((l,o=!0)=>{i=!0,a(o,l)}),i||a(!1,null)},s)}function ec(t,e){return e}function tc(t,e,r){for(var n=[],s=e.length,a,i=e.length,l=0;l<s;l++){let f=e[l];nr(f,()=>{if(a){if(a.pending.delete(f),a.done.add(f),a.pending.size===0){var h=t.outrogroups;In(Xs(a.done)),h.delete(a),h.size===0&&(t.outrogroups=null)}}else i-=1},!1)}if(i===0){var o=n.length===0&&r!==null;if(o){var c=r,d=c.parentNode;Gn(d),d.append(c),t.items.clear()}In(e,!o)}else a={pending:new Set(e),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(a)}function In(t,e=!0){for(var r=0;r<t.length;r++)Te(t[r],e)}var ri;function ls(t,e,r,n,s,a=null){var i=t,l=new Map,o=(e&Ei)!==0;if(o){var c=t;i=H?_e(He(c)):c.appendChild(Ae())}H&&Or();var d=null,f=Tl(()=>{var w=r();return yi(w)?w:w==null?[]:Xs(w)}),h,m=!0;function b(){v.fallback=d,rc(v,h,i,e,n),d!==null&&(h.length===0?(d.f&wt)===0?Qn(d):(d.f^=wt,Qr(d,null,i)):nr(d,()=>{d=null}))}var z=ln(()=>{h=u(f);var w=h.length;let C=!1;if(H){var T=Ci(i)===rn;T!==(w===0)&&(i=Us(),_e(i),Be(!1),C=!0)}for(var I=new Set,Z=K,Q=Xi(),ne=0;ne<w;ne+=1){H&&W.nodeType===Kt&&W.data===Wn&&(i=W,C=!0,Be(!1));var $=h[ne],R=n($,ne),_=m?null:l.get(R);_?(_.v&&Tr(_.v,$),_.i&&Tr(_.i,ne),Q&&Z.skipped_effects.delete(_.e)):(_=sc(l,m?i:ri??(ri=Ae()),$,R,ne,s,e,r),m||(_.e.f|=wt),l.set(R,_)),I.add(R)}if(w===0&&a&&!d&&(m?d=Je(()=>a(i)):(d=Je(()=>a(ri??(ri=Ae()))),d.f|=wt)),H&&w>0&&_e(Us()),!m)if(Q){for(const[j,ae]of l)I.has(j)||Z.skipped_effects.add(ae.e);Z.oncommit(b),Z.ondiscard(()=>{})}else b();C&&Be(!0),u(f)}),v={effect:z,items:l,outrogroups:null,fallback:d};m=!1,H&&(i=W)}function Jr(t){for(;t!==null&&(t.f&it)===0;)t=t.next;return t}function rc(t,e,r,n,s){var _,j,ae,S,N,V,A,D,$e;var a=(n&ml)!==0,i=e.length,l=t.items,o=Jr(t.effect.first),c,d=null,f,h=[],m=[],b,z,v,w;if(a)for(w=0;w<i;w+=1)b=e[w],z=s(b,w),v=l.get(z).e,(v.f&wt)===0&&((j=(_=v.nodes)==null?void 0:_.a)==null||j.measure(),(f??(f=new Set)).add(v));for(w=0;w<i;w+=1){if(b=e[w],z=s(b,w),v=l.get(z).e,t.outrogroups!==null)for(const ye of t.outrogroups)ye.pending.delete(v),ye.done.delete(v);if((v.f&wt)!==0)if(v.f^=wt,v===o)Qr(v,null,r);else{var C=d?d.next:o;v===t.effect.last&&(t.effect.last=v.prev),v.prev&&(v.prev.next=v.next),v.next&&(v.next.prev=v.prev),zt(t,d,v),zt(t,v,C),Qr(v,C,r),d=v,h=[],m=[],o=Jr(d.next);continue}if((v.f&Ue)!==0&&(Qn(v),a&&((S=(ae=v.nodes)==null?void 0:ae.a)==null||S.unfix(),(f??(f=new Set)).delete(v))),v!==o){if(c!==void 0&&c.has(v)){if(h.length<m.length){var T=m[0],I;d=T.prev;var Z=h[0],Q=h[h.length-1];for(I=0;I<h.length;I+=1)Qr(h[I],T,r);for(I=0;I<m.length;I+=1)c.delete(m[I]);zt(t,Z.prev,Q.next),zt(t,d,Z),zt(t,Q,T),o=T,d=Q,w-=1,h=[],m=[]}else c.delete(v),Qr(v,o,r),zt(t,v.prev,v.next),zt(t,v,d===null?t.effect.first:d.next),zt(t,d,v),d=v;continue}for(h=[],m=[];o!==null&&o!==v;)(c??(c=new Set)).add(o),m.push(o),o=Jr(o.next);if(o===null)continue}(v.f&wt)===0&&h.push(v),d=v,o=Jr(v.next)}if(t.outrogroups!==null){for(const ye of t.outrogroups)ye.pending.size===0&&(In(Xs(ye.done)),(N=t.outrogroups)==null||N.delete(ye));t.outrogroups.size===0&&(t.outrogroups=null)}if(o!==null||c!==void 0){var ne=[];if(c!==void 0)for(v of c)(v.f&Ue)===0&&ne.push(v);for(;o!==null;)(o.f&Ue)===0&&o!==t.fallback&&ne.push(o),o=Jr(o.next);var $=ne.length;if($>0){var R=(n&Ei)!==0&&i===0?r:null;if(a){for(w=0;w<$;w+=1)(A=(V=ne[w].nodes)==null?void 0:V.a)==null||A.measure();for(w=0;w<$;w+=1)($e=(D=ne[w].nodes)==null?void 0:D.a)==null||$e.fix()}tc(t,ne,R)}}a&&ft(()=>{var ye,et;if(f!==void 0)for(v of f)(et=(ye=v.nodes)==null?void 0:ye.a)==null||et.apply()})}function sc(t,e,r,n,s,a,i,l){var o=(i&hl)!==0?(i&gl)===0?Wi(r,!1,!1):cr(r):null,c=(i&vl)!==0?cr(s):null;return{v:o,i:c,e:Je(()=>(a(e,o??r,c??s,l),()=>{t.delete(n)}))}}function Qr(t,e,r){if(t.nodes)for(var n=t.nodes.start,s=t.nodes.end,a=e&&(e.f&wt)===0?e.nodes.start:r;n!==null;){var i=qe(n);if(a.before(n),n===s)return;n=i}}function zt(t,e,r){e===null?t.effect.first=r:e.next=r,r===null?t.effect.last=e:r.prev=e}function yo(t,e,r=!1,n=!1,s=!1){var a=t,i="";U(()=>{var l=re;if(i===(i=e()??"")){H&&Or();return}if(l.nodes!==null&&(no(l.nodes.start,l.nodes.end),l.nodes=null),i!==""){if(H){W.data;for(var o=Or(),c=o;o!==null&&(o.nodeType!==Kt||o.data!=="");)c=o,o=qe(o);if(o===null)throw Es(),lr;pt(W,c),a=_e(o);return}var d=i+"";r?d=`<svg>${d}</svg>`:n&&(d=`<math>${d}</math>`);var f=bo(d);if((r||n)&&(f=He(f)),pt(He(f),f.lastChild),r||n)for(;He(f);)a.before(He(f));else a.before(f)}})}function nc(t,e){let r=null,n=H;var s;if(H){r=W;for(var a=He(document.head);a!==null&&(a.nodeType!==Kt||a.data!==t);)a=qe(a);if(a===null)Be(!1);else{var i=qe(a);a.remove(),_e(i)}}H||(s=document.head.appendChild(Ae()));try{ln(()=>e(s),qn)}finally{n&&(Be(!0),_e(r))}}function ac(t,e,r){var n=t==null?"":""+t;return e&&(n=n?n+" "+e:e),n===""?null:n}function Yt(t,e,r,n,s,a){var i=t.__className;if(H||i!==r||i===void 0){var l=ac(r,n);(!H||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):t.className=l),t.__className=r}return a}const ic=Symbol("is custom element"),oc=Symbol("is html");function ko(t){if(H){var e=!1,r=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var n=t.value;Ks(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var s=t.checked;Ks(t,"checked",null),t.checked=s}}};t.__on_r=r,ft(r),Qi()}}function Ks(t,e,r,n){var s=lc(t);H&&(s[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||s[e]!==(s[e]=r)&&(e==="loading"&&(t[rl]=r),r==null?t.removeAttribute(e):typeof r!="string"&&wo(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function ce(t,e,r){var n=Y,s=re;let a=H;H&&Be(!1),Me(null),Qe(null);try{e!=="style"&&(Ln.has(t.getAttribute("is")||t.nodeName)||!customElements||customElements.get(t.getAttribute("is")||t.tagName.toLowerCase())?wo(t).includes(e):r&&typeof r=="object")?t[e]=r:Ks(t,e,r==null?r:String(r))}finally{Me(n),Qe(s),a&&Be(!0)}}function lc(t){return t.__attributes??(t.__attributes={[ic]:t.nodeName.includes("-"),[oc]:t.namespaceURI===yl})}var Ln=new Map;function wo(t){var e=t.getAttribute("is")||t.nodeName,r=Ln.get(e);if(r)return r;Ln.set(e,r=[]);for(var n,s=t,a=Element.prototype;a!==s;){n=Go(s);for(var i in n)n[i].set&&r.push(i);s=wi(s)}return r}function ta(t,e,r=e){var n=new WeakSet;Il(t,"input",async s=>{var a=s?t.defaultValue:t.value;if(a=bn(t)?_n(a):a,r(a),K!==null&&n.add(K),await Vl(),a!==(a=e())){var i=t.selectionStart,l=t.selectionEnd,o=t.value.length;if(t.value=a??"",l!==null){var c=t.value.length;i===l&&l===o&&c>o?(t.selectionStart=c,t.selectionEnd=c):(t.selectionStart=i,t.selectionEnd=Math.min(l,c))}}}),(H&&t.defaultValue!==t.value||cn(e)==null&&t.value)&&(r(bn(t)?_n(t.value):t.value),K!==null&&n.add(K)),on(()=>{var s=e();if(t===document.activeElement){var a=Sn??K;if(n.has(a))return}bn(t)&&s===_n(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function bn(t){var e=t.type;return e==="number"||e==="range"}function _n(t){return t===""?null:+t}function si(t,e){return t===e||(t==null?void 0:t[Is])===e}function xo(t={},e,r,n){return Hl(()=>{var s,a;return on(()=>{s=a,a=[],cn(()=>{t!==r(...a)&&(e(t,...a),s&&si(r(...s),t)&&e(null,...s))})}),()=>{ft(()=>{a&&si(r(...a),t)&&e(null,...a)})}}),t}function cc(t,e,r,n,s){var a=()=>{n(r[t])};r.addEventListener(e,a),s?on(()=>{r[t]=s()}):a(),(r===document.body||r===window||r===document)&&Xn(()=>{r.removeEventListener(e,a)})}function At(t,e,r){var n;t.$$events||(t.$$events={}),(n=t.$$events)[e]||(n[e]=[]),t.$$events[e].push(r)}function Pt(t){for(var e in t)e in this&&(this[e]=t[e])}function te(t,e,r,n){var s=n,a=!0,i=()=>(a&&(a=!1,s=n),s),l;l=t[e],l===void 0&&n!==void 0&&(l=i());var o;o=()=>{var h=t[e];return h===void 0?i():(a=!0,h)};var c=!1,d=nn(()=>(c=!1,o())),f=re;return(function(h,m){if(arguments.length>0){const b=m?u(d):h;return k(d,b),c=!0,s!==void 0&&(s=b),h}return Dt&&c||(f.f&xt)!==0?d.v:u(d)})}function Ot(t){return new dc(t)}var kt,Ye;class dc{constructor(e){q(this,kt);q(this,Ye);var a;var r=new Map,n=(i,l)=>{var o=Wi(l,!1,!1);return r.set(i,o),o};const s=new Proxy({...e.props||{},$$events:{}},{get(i,l){return u(r.get(l)??n(l,Reflect.get(i,l)))},has(i,l){return l===tl?!0:(u(r.get(l)??n(l,Reflect.get(i,l))),Reflect.has(i,l))},set(i,l,o){return k(r.get(l)??n(l,o),o),Reflect.set(i,l,o)}});L(this,Ye,(e.hydrate?Zl:ea)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((a=e==null?void 0:e.props)!=null&&a.$$host)||e.sync===!1)&&G(),L(this,kt,s.$$events);for(const i of Object.keys(p(this,Ye)))i==="$set"||i==="$destroy"||i==="$on"||ki(this,i,{get(){return p(this,Ye)[i]},set(l){p(this,Ye)[i]=l},enumerable:!0});p(this,Ye).$set=i=>{Object.assign(s,i)},p(this,Ye).$destroy=()=>{Xl(p(this,Ye))}}$set(e){p(this,Ye).$set(e)}$on(e,r){p(this,kt)[e]=p(this,kt)[e]||[];const n=(...s)=>r.call(this,...s);return p(this,kt)[e].push(n),()=>{p(this,kt)[e]=p(this,kt)[e].filter(s=>s!==n)}}$destroy(){p(this,Ye).$destroy()}}kt=new WeakMap,Ye=new WeakMap;function uc(t){Fe===null&&sl(),eo(()=>{const e=cn(t);if(typeof e=="function")return e})}const fc="5";var bi;typeof window<"u"&&((bi=window.__svelte??(window.__svelte={})).v??(bi.v=new Set)).add(fc);function $o(t){const e=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),r=[],n=/```(\w*)\n?([\s\S]*?)```/g;let s,a=0;for(;(s=n.exec(e))!==null;)r.push(e.slice(a,s.index)),r.push(`<pre class="code-block"><code class="lang-${s[1]||"text"}">${s[2].replace(/\n$/,"")}</code></pre>`),a=s.index+s[0].length;return r.push(e.slice(a)),r.join("").split(/\n{2,}/).map(i=>i.startsWith("<pre")?i:`<p>${i.replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/\n/g,"<br/>")}</p>`).join("")}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hs=globalThis,ra=Hs.ShadowRoot&&(Hs.ShadyCSS===void 0||Hs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sa=Symbol(),ni=new WeakMap;let Eo=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==sa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(ra&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=ni.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ni.set(r,e))}return e}toString(){return this.cssText}};const So=t=>new Eo(typeof t=="string"?t:t+"",void 0,sa),oe=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,s,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[a+1],t[0]);return new Eo(r,t,sa)},pc=(t,e)=>{if(ra)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),s=Hs.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,t.appendChild(n)}},ai=ra?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return So(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:hc,defineProperty:vc,getOwnPropertyDescriptor:mc,getOwnPropertyNames:gc,getOwnPropertySymbols:bc,getPrototypeOf:_c}=Object,Lt=globalThis,ii=Lt.trustedTypes,yc=ii?ii.emptyScript:"",yn=Lt.reactiveElementPolyfillSupport,ss=(t,e)=>t,Ws={toAttribute(t,e){switch(e){case Boolean:t=t?yc:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},na=(t,e)=>!hc(t,e),oi={attribute:!0,type:String,converter:Ws,reflect:!1,useDefault:!1,hasChanged:na};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Lt.litPropertyMetadata??(Lt.litPropertyMetadata=new WeakMap);let _r=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=oi){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,r);s!==void 0&&vc(this.prototype,e,s)}}static getPropertyDescriptor(e,r,n){const{get:s,set:a}=mc(this.prototype,e)??{get(){return this[r]},set(i){this[r]=i}};return{get:s,set(i){const l=s==null?void 0:s.call(this);a==null||a.call(this,i),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oi}static _$Ei(){if(this.hasOwnProperty(ss("elementProperties")))return;const e=_c(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ss("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ss("properties"))){const r=this.properties,n=[...gc(r),...bc(r)];for(const s of n)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,s]of r)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const s=this._$Eu(r,n);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)r.unshift(ai(s))}else e!==void 0&&r.push(ai(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$ET(e,r){var a;const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const i=(((a=n.converter)==null?void 0:a.toAttribute)!==void 0?n.converter:Ws).toAttribute(r,n.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,r){var a,i;const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const l=n.getPropertyOptions(s),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:Ws;this._$Em=s;const c=o.fromAttribute(r,l.type);this[s]=c??((i=this._$Ej)==null?void 0:i.get(s))??c,this._$Em=null}}requestUpdate(e,r,n,s=!1,a){var i;if(e!==void 0){const l=this.constructor;if(s===!1&&(a=this[e]),n??(n=l.getPropertyOptions(e)),!((n.hasChanged??na)(a,r)||n.useDefault&&n.reflect&&a===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:n,reflect:s,wrapped:a},i){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??r??this[e]),a!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(r=void 0),this._$AL.set(e,r)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,i]of s){const{wrapped:l}=i,o=this[a];l!==!0||this._$AL.has(a)||o===void 0||this.C(a,void 0,i,o)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(r)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};_r.elementStyles=[],_r.shadowRootOptions={mode:"open"},_r[ss("elementProperties")]=new Map,_r[ss("finalized")]=new Map,yn==null||yn({ReactiveElement:_r}),(Lt.reactiveElementVersions??(Lt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=globalThis,li=t=>t,Vs=ns.trustedTypes,ci=Vs?Vs.createPolicy("lit-html",{createHTML:t=>t}):void 0,Co="$lit$",Tt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ao="?"+Tt,kc=`<${Ao}>`,dr=document,cs=()=>dr.createComment(""),ds=t=>t===null||typeof t!="object"&&typeof t!="function",aa=Array.isArray,wc=t=>aa(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",kn=`[ 	
\f\r]`,Gr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,di=/-->/g,ui=/>/g,Vt=RegExp(`>|${kn}(?:([^\\s"'>=/]+)(${kn}*=${kn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fi=/'/g,pi=/"/g,Po=/^(?:script|style|textarea|title)$/i,xc=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),g=xc(1),ur=Symbol.for("lit-noChange"),ue=Symbol.for("lit-nothing"),hi=new WeakMap,Zt=dr.createTreeWalker(dr,129);function Oo(t,e){if(!aa(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ci!==void 0?ci.createHTML(e):e}const $c=(t,e)=>{const r=t.length-1,n=[];let s,a=e===2?"<svg>":e===3?"<math>":"",i=Gr;for(let l=0;l<r;l++){const o=t[l];let c,d,f=-1,h=0;for(;h<o.length&&(i.lastIndex=h,d=i.exec(o),d!==null);)h=i.lastIndex,i===Gr?d[1]==="!--"?i=di:d[1]!==void 0?i=ui:d[2]!==void 0?(Po.test(d[2])&&(s=RegExp("</"+d[2],"g")),i=Vt):d[3]!==void 0&&(i=Vt):i===Vt?d[0]===">"?(i=s??Gr,f=-1):d[1]===void 0?f=-2:(f=i.lastIndex-d[2].length,c=d[1],i=d[3]===void 0?Vt:d[3]==='"'?pi:fi):i===pi||i===fi?i=Vt:i===di||i===ui?i=Gr:(i=Vt,s=void 0);const m=i===Vt&&t[l+1].startsWith("/>")?" ":"";a+=i===Gr?o+kc:f>=0?(n.push(c),o.slice(0,f)+Co+o.slice(f)+Tt+m):o+Tt+(f===-2?l:m)}return[Oo(t,a+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class us{constructor({strings:e,_$litType$:r},n){let s;this.parts=[];let a=0,i=0;const l=e.length-1,o=this.parts,[c,d]=$c(e,r);if(this.el=us.createElement(c,n),Zt.currentNode=this.el.content,r===2||r===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=Zt.nextNode())!==null&&o.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(Co)){const h=d[i++],m=s.getAttribute(f).split(Tt),b=/([.?@])?(.*)/.exec(h);o.push({type:1,index:a,name:b[2],strings:m,ctor:b[1]==="."?Sc:b[1]==="?"?Cc:b[1]==="@"?Ac:dn}),s.removeAttribute(f)}else f.startsWith(Tt)&&(o.push({type:6,index:a}),s.removeAttribute(f));if(Po.test(s.tagName)){const f=s.textContent.split(Tt),h=f.length-1;if(h>0){s.textContent=Vs?Vs.emptyScript:"";for(let m=0;m<h;m++)s.append(f[m],cs()),Zt.nextNode(),o.push({type:2,index:++a});s.append(f[h],cs())}}}else if(s.nodeType===8)if(s.data===Ao)o.push({type:2,index:a});else{let f=-1;for(;(f=s.data.indexOf(Tt,f+1))!==-1;)o.push({type:7,index:a}),f+=Tt.length-1}a++}}static createElement(e,r){const n=dr.createElement("template");return n.innerHTML=e,n}}function Mr(t,e,r=t,n){var i,l;if(e===ur)return e;let s=n!==void 0?(i=r._$Co)==null?void 0:i[n]:r._$Cl;const a=ds(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),a===void 0?s=void 0:(s=new a(t),s._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=s:r._$Cl=s),s!==void 0&&(e=Mr(t,s._$AS(t,e.values),s,n)),e}class Ec{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,s=((e==null?void 0:e.creationScope)??dr).importNode(r,!0);Zt.currentNode=s;let a=Zt.nextNode(),i=0,l=0,o=n[0];for(;o!==void 0;){if(i===o.index){let c;o.type===2?c=new Cs(a,a.nextSibling,this,e):o.type===1?c=new o.ctor(a,o.name,o.strings,this,e):o.type===6&&(c=new Pc(a,this,e)),this._$AV.push(c),o=n[++l]}i!==(o==null?void 0:o.index)&&(a=Zt.nextNode(),i++)}return Zt.currentNode=dr,s}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class Cs{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,s){this.type=2,this._$AH=ue,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Mr(this,e,r),ds(e)?e===ue||e==null||e===""?(this._$AH!==ue&&this._$AR(),this._$AH=ue):e!==this._$AH&&e!==ur&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):wc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ue&&ds(this._$AH)?this._$AA.nextSibling.data=e:this.T(dr.createTextNode(e)),this._$AH=e}$(e){var a;const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=us.createElement(Oo(n.h,n.h[0]),this.options)),n);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(r);else{const i=new Ec(s,this),l=i.u(this.options);i.p(r),this.T(l),this._$AH=i}}_$AC(e){let r=hi.get(e.strings);return r===void 0&&hi.set(e.strings,r=new us(e)),r}k(e){aa(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const a of e)s===r.length?r.push(n=new Cs(this.O(cs()),this.O(cs()),this,this.options)):n=r[s],n._$AI(a),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e!==this._$AB;){const s=li(e).nextSibling;li(e).remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class dn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,s,a){this.type=1,this._$AH=ue,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ue}_$AI(e,r=this,n,s){const a=this.strings;let i=!1;if(a===void 0)e=Mr(this,e,r,0),i=!ds(e)||e!==this._$AH&&e!==ur,i&&(this._$AH=e);else{const l=e;let o,c;for(e=a[0],o=0;o<a.length-1;o++)c=Mr(this,l[n+o],r,o),c===ur&&(c=this._$AH[o]),i||(i=!ds(c)||c!==this._$AH[o]),c===ue?e=ue:e!==ue&&(e+=(c??"")+a[o+1]),this._$AH[o]=c}i&&!s&&this.j(e)}j(e){e===ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Sc extends dn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ue?void 0:e}}class Cc extends dn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ue)}}class Ac extends dn{constructor(e,r,n,s,a){super(e,r,n,s,a),this.type=5}_$AI(e,r=this){if((e=Mr(this,e,r,0)??ue)===ur)return;const n=this._$AH,s=e===ue&&n!==ue||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==ue&&(n===ue||s);s&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class Pc{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Mr(this,e)}}const wn=ns.litHtmlPolyfillSupport;wn==null||wn(us,Cs),(ns.litHtmlVersions??(ns.litHtmlVersions=[])).push("3.3.3");const Oc=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let s=n._$litPart$;if(s===void 0){const a=(r==null?void 0:r.renderBefore)??null;n._$litPart$=s=new Cs(e.insertBefore(cs(),a),a,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ir=globalThis;let X=class extends _r{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oc(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ur}};var _i;X._$litElement$=!0,X.finalized=!0,(_i=ir.litElementHydrateSupport)==null||_i.call(ir,{LitElement:X});const xn=ir.litElementPolyfillSupport;xn==null||xn({LitElement:X});(ir.litElementVersions??(ir.litElementVersions=[])).push("4.2.2");const Nc={surface:{light:"#ffffff",dark:"#171717"},"surface-muted":{light:"#f5f5f5",dark:"#1a1a1a"},"surface-hover":{light:"#f5f5f5",dark:"#1a1a1a"},"surface-active":{light:"#e5e5e5",dark:"#262626"},text:{light:"#171717",dark:"#e5e5e5"},"text-muted":{light:"#a3a3a3",dark:"#737373"},"text-faint":{light:"#737373",dark:"#525252"},"text-inverse":{light:"#fafafa",dark:"#171717"},border:{light:"#e5e5e5",dark:"#262626"},"border-strong":{light:"#d4d4d4",dark:"#404040"},focus:{light:"#a3a3a3",dark:"#525252"},accent:{light:"#c2410c",dark:"#ea580c"},"accent-text":{light:"#fafafa",dark:"#fafafa"},danger:{light:"#dc2626",dark:"#f87171"},"danger-text":{light:"#991b1b",dark:"#fca5a5"},"danger-bg":{light:"#fef2f2",dark:"#450a0a"},"danger-border":{light:"#fecaca",dark:"#7f1d1d"},success:{light:"#16a34a",dark:"#4ade80"},"success-text":{light:"#166534",dark:"#86efac"},"success-bg":{light:"#f0fdf4",dark:"#052e16"},"success-border":{light:"#bbf7d0",dark:"#166534"}},zc=`
  --ask-radius: var(--ask-radius-app, 0.5rem);
  --ask-radius-small: var(--ask-radius-app-small, 0.375rem);
  --ask-radius-pill: var(--ask-radius-app-pill, 9999px);
  --ask-font: var(--ask-font-app, inherit);
  --ask-font-size: var(--ask-font-size-app, 0.8125rem);
  --ask-font-size-small: var(--ask-font-size-app-small, 0.6875rem);
  --ask-spacing: var(--ask-spacing-app, 0.5rem);
`;function Rs(t){return Object.entries(Nc).map(([e,r])=>`  --ask-${e}: var(--ask-${e}-${t}, ${r[t]});`).join(`
`)}const le=So(`
:host {
${Rs("light")}
${zc}
}

/* Explicit dark theme (on the component or any ancestor) */
:host([theme="dark"]),
:host-context([theme="dark"]),
/* Legacy .dark class path */
:host-context(.dark) {
${Rs("dark")}
}

/* Explicit light theme pins light */
:host([theme="light"]),
:host-context([theme="light"]) {
${Rs("light")}
}

/* OS preference, unless the app pinned a theme */
@media (prefers-color-scheme: dark) {
  :host(:not([theme="light"])) {
${Rs("dark")}
  }
}
`);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tc={attribute:!0,type:String,converter:Ws,reflect:!1,hasChanged:na},Mc=(t=Tc,e,r)=>{const{kind:n,metadata:s}=r;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(r.name,t),n==="accessor"){const{name:i}=r;return{set(l){const o=e.get.call(this);e.set.call(this,l),this.requestUpdate(i,o,t,!0,l)},init(l){return l!==void 0&&this.C(i,void 0,t,l),l}}}if(n==="setter"){const{name:i}=r;return function(l){const o=this[i];e.call(this,l),this.requestUpdate(i,o,t,!0,l)}}throw Error("Unsupported decorator location: "+n)};function y(t){return(e,r)=>typeof r=="object"?Mc(t,e,r):((n,s,a)=>{const i=s.hasOwnProperty(a);return s.constructor.createProperty(a,n),i?Object.getOwnPropertyDescriptor(s,a):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function As(t){return y({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function un(t,e){return(r,n,s)=>{const a=i=>{var l;return((l=i.renderRoot)==null?void 0:l.querySelector(t))??null};if(e){const{get:i,set:l}=typeof n=="object"?r:s??(()=>{const o=Symbol();return{get(){return this[o]},set(c){this[o]=c}}})();return vi(r,n,{get(){let o=i.call(this);return o===void 0&&(o=a(this),(o!==null||this.hasUpdated)&&l.call(this,o)),o}})}return vi(r,n,{get(){return a(this)}})}}var jc=Object.defineProperty,No=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&jc(e,r,s),s};const ga=class ga extends X{constructor(){super(...arguments),this.role="user",this.content=""}render(){const e=this.role==="assistant";return g`
      <div class="message-row ${e?"":"message-row--right"}">
        <div
          class="message-bubble ${e?"message-bubble--assistant":"message-bubble--user"}"
          style="${e?"color: var(--ask-text, #171717)":"background: var(--ask-surface-muted, #f5f5f5); color: var(--ask-text, #171717)"}"
        >${this.content}</div>
      </div>
    `}};ga.styles=oe`${le}

    :host {
      display: block;
    }

    /* Layout */
    .message-row {
      display: flex;
      width: 100%;
    }
    .message-row--right {
      justify-content: flex-end;
    }

    /* Bubble: user messages get a background bubble, assistant is flat */
    .message-bubble {
      padding-block: var(--ask-radius-small, 0.375rem);
      font-size: 0.875rem;
      line-height: 1.75;
      white-space: pre-wrap;
      overflow-wrap: break-word;
      overflow: hidden;
    }
    .message-bubble--user {
      max-width: fit-content;
      padding-inline: 0.75rem;
      border-radius: 0.75rem;
      border-top-right-radius: 0.125rem;
    }
    .message-bubble--assistant {
      max-width: 100%;
      padding-inline: var(--ask-radius, 0.5rem);
    }

    /* Theming via CSS custom properties */
    
    
  `;let fs=ga;No([y({type:String})],fs.prototype,"role");No([y({type:String})],fs.prototype,"content");customElements.define("ask-message",fs);var Rc=Object.defineProperty,fn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Rc(e,r,s),s};const ba=class ba extends X{constructor(){super(...arguments),this.content="",this.label="Thought",this.open=!1,this.streaming=!1}_handleToggle(){this.streaming||(this.open=!this.open,this.dispatchEvent(new CustomEvent("ask-toggle",{detail:{open:this.open},bubbles:!0,composed:!0})))}_handleKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleToggle())}render(){const e=this.content&&this.content.length>0,r=this.streaming||this.open;return!e&&!this.streaming?g``:g`
      <div
        class="thinking-header"
        @click=${this._handleToggle}
        role="button"
        tabindex="0"
        aria-expanded=${r}
        @keydown=${this._handleKeydown}
      >
        ${this.streaming?g`<span class="thinking-dots">
              <span class="thinking-dot" style="animation-delay:0ms">.</span>
              <span class="thinking-dot" style="animation-delay:200ms">.</span>
              <span class="thinking-dot" style="animation-delay:400ms">.</span>
            </span>`:""}
        <span class="thinking-label">${this.label}</span>
        ${this.streaming?"":g`<span class="chevron ${r?"chevron--open":""}">▸</span>`}
      </div>
      <div class="thinking-body ${r?"thinking-body--expanded":""}">
        <div class="thinking-body-inner">${this.content}</div>
      </div>
    `}};ba.styles=oe`${le}

    :host {
      display: block;
    }

    /* Header / trigger bar */
    .thinking-header {
      display: flex;
      align-items: center;
      gap: var(--ask-radius-small, 0.375rem);
      cursor: pointer;
      user-select: none;
      padding: var(--ask-radius-small, 0.375rem) var(--ask-radius, 0.5rem);
      border-radius: var(--ask-radius, 0.5rem);
      font-size: 0.875rem;
      line-height: 1.75;
      color: var(--ask-text-faint, #737373);
      transition: background-color 0.15s ease;
    }
    .thinking-header:hover {
      background: var(--ask-thinking-hover-bg, rgba(0, 0, 0, 0.04));
    }

    .thinking-label {
      font-weight: 500;
    }

    /* Chevron (non-streaming) */
    .chevron {
      font-size: 0.75rem;
      opacity: 0.6;
      transition: transform 0.2s ease;
    }
    .chevron--open {
      transform: rotate(90deg);
    }

    /* Animated dots (streaming) — openchamber style */
    @keyframes thinking-dot {
      0%, 80%, 100% { opacity: 0.2; transform: translateY(0); }
      40% { opacity: 1; transform: translateY(-2px); }
    }
    .thinking-dots {
      display: inline-flex;
      gap: 2px;
      line-height: 1;
      color: inherit;
      align-items: center;
    }
    .thinking-dot {
      animation: thinking-dot 1.2s ease-in-out infinite;
      display: inline-block;
    }

    /* Collapsible body — grid-template-rows for smooth height animation */
    .thinking-body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s ease, opacity 0.2s ease;
      opacity: 0;
    }
    .thinking-body--expanded {
      grid-template-rows: 1fr;
      opacity: 1;
    }
    .thinking-body-inner {
      overflow: hidden;
      font-size: 0.875rem;
      line-height: 1.75;
      color: var(--ask-text-faint, #737373);
      padding-left: 1rem;
      padding-bottom: var(--ask-radius, 0.5rem);
      margin-left: 0.25rem;
      white-space: pre-wrap;
      border-left: 2px solid var(--ask-border, #e5e5e5);
    }

    
    
  `;let fr=ba;fn([y({type:String})],fr.prototype,"content");fn([y({type:String})],fr.prototype,"label");fn([y({type:Boolean,reflect:!0})],fr.prototype,"open");fn([y({type:Boolean,reflect:!0})],fr.prototype,"streaming");customElements.define("ask-thinking",fr);var Ic=Object.defineProperty,ia=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Ic(e,r,s),s};const _a=class _a extends X{constructor(){super(...arguments),this.name="Tool",this.status="running",this.duration=0}render(){const e=this.status==="failed",r=this.status==="done";let n,s,a;r?(n="✓",s="",a="done"):e?(n="✕",s="",a="failed"):(n="⚙",s="tool-icon--running",a="running");const i=this.duration>0?`${this.duration}ms`:"";return g`
      <div class="tool-card ${e?"tool-card--failed":""}">
        <span class="tool-icon ${s}">${n}</span>
        <span class="tool-name">${this.name}</span>
        <span class="tool-status">${a}</span>
        ${i?g`<span class="tool-duration">${i}</span>`:""}
      </div>
    `}};_a.styles=oe`${le}

    :host {
      display: block;
    }

    .tool-card {
      display: flex;
      align-items: center;
      gap: var(--ask-radius, 0.5rem);
      padding: var(--ask-radius-small, 0.375rem) 0.75rem;
      border-radius: 0.75rem;
      font-size: 0.8125rem;
      line-height: 1.5;
      color: var(--ask-text-faint, #525252);
      background: var(--ask-surface-muted, #fafafa);
      border: 1px solid var(--ask-border, #e5e5e5);
      transition: background 0.15s, border-color 0.15s;
    }
    .tool-card--failed {
      color: var(--ask-danger-text, #991b1b);
      background: var(--ask-danger-bg, #fef2f2);
      border-color: var(--ask-danger-border, #fecaca);
    }

    .tool-icon {
      flex-shrink: 0;
      font-size: 0.875rem;
    }
    .tool-icon--running {
      animation: tool-spin 1s linear infinite;
    }

    .tool-name {
      font-weight: 500;
      color: var(--ask-border-strong, #404040);
    }
    .tool-card--failed .tool-name {
      color: var(--ask-danger-text, #991b1b);
    }

    .tool-status {
      color: var(--ask-text-muted, #a3a3a3);
    }
    .tool-card--failed .tool-status {
      color: var(--ask-danger-text, #fca5a5);
    }

    .tool-duration {
      margin-left: auto;
      font-family: monospace;
      font-size: 0.6875rem;
      color: var(--ask-text-muted, #a3a3a3);
    }

    @keyframes tool-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    
    
  `;let jr=_a;ia([y({type:String})],jr.prototype,"name");ia([y({type:String})],jr.prototype,"status");ia([y({type:Number})],jr.prototype,"duration");customElements.define("ask-tool-call",jr);var Lc=Object.defineProperty,Ps=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Lc(e,r,s),s};const ya=class ya extends X{constructor(){super(...arguments),this.actionId=0,this.toolName="Tool",this.args="",this.message="",this.status="pending"}render(){const e=this.status==="pending",r=this.status==="pending"?g`<span class="status-chip status-chip--pending">Awaiting approval</span>`:this.status==="approved"?g`<span class="status-chip status-chip--approved">Approved</span>`:g`<span class="status-chip status-chip--rejected">Rejected</span>`;return g`
      <div class="approval ${e?"approval--pending":""}">
        <div class="head">
          <span class="icon">✋</span>
          <span class="tool-name">${this.toolName}</span>
          ${r}
        </div>
        ${this.args?g`<pre class="args">${this.args}</pre>`:""}
        ${this.message?g`<div class="message">${this.message}</div>`:""}
        ${e?g`
          <div class="actions">
            <button class="btn-approve" @click=${this._approve}>Approve</button>
            <button class="btn-reject" @click=${this._reject}>Reject</button>
          </div>
        `:""}
      </div>`}_approve(){this.dispatchEvent(new CustomEvent("approval-approved",{detail:{id:this.actionId},bubbles:!0,composed:!0}))}_reject(){this.dispatchEvent(new CustomEvent("approval-rejected",{detail:{id:this.actionId},bubbles:!0,composed:!0}))}};ya.styles=oe`${le}

    :host {
      display: block;
    }

    .approval {
      border: 1px solid var(--ask-border, #e5e5e5);
      border-radius: 0.75rem;
      background: var(--ask-surface-muted, #fafafa);
      overflow: hidden;
    }

    .approval--pending {
      border-color: var(--ask-accent, #c2410c);
    }

    .head {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.75rem;
      font-size: 0.8125rem;
    }
    .head .icon { font-size: 0.875rem; }
    .head .tool-name {
      font-weight: 600;
      color: var(--ask-border-strong, #404040);
    }
    .head .status-chip {
      margin-left: auto;
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 0.125rem 0.5rem;
      border-radius: 999px;
    }
    .status-chip--pending {
      color: var(--ask-accent-text, #fafafa);
      background: var(--ask-accent, #c2410c);
    }
    .status-chip--approved { color: #14532d; background: #dcfce7; }
    .status-chip--rejected { color: #7f1d1d; background: #fee2e2; }

    .args {
      margin: 0 0.75rem 0.5rem;
      padding: 0.5rem 0.75rem;
      border-radius: 0.5rem;
      background: var(--ask-surface, #ffffff);
      border: 1px solid var(--ask-border, #e5e5e5);
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: 0.6875rem;
      line-height: 1.6;
      color: var(--ask-text-faint, #737373);
      white-space: pre-wrap;
      word-break: break-word;
      max-height: 10rem;
      overflow-y: auto;
    }

    .message {
      margin: 0 0.75rem 0.5rem;
      font-size: 0.75rem;
      color: var(--ask-text-faint, #737373);
    }

    .actions {
      display: flex;
      gap: 0.5rem;
      padding: 0 0.75rem 0.75rem;
    }
    .actions button {
      flex: 1;
      font: inherit;
      font-size: 0.8125rem;
      font-weight: 600;
      padding: 0.5rem 0.75rem;
      border-radius: 0.5rem;
      border: 1px solid var(--ask-border-strong, #d4d4d4);
      cursor: pointer;
      transition: filter 0.15s, border-color 0.15s;
    }
    .actions button:hover { filter: brightness(0.97); }
    .actions button:active { transform: translateY(1px); }
    .btn-approve {
      background: var(--ask-accent, #c2410c);
      border-color: var(--ask-accent, #c2410c);
      color: var(--ask-accent-text, #fafafa);
    }
    .btn-reject {
      background: var(--ask-surface, #ffffff);
      color: var(--ask-danger-text, #991b1b);
      border-color: var(--ask-danger-border, #fecaca);
    }
  `;let Bt=ya;Ps([y({type:Number,attribute:"action-id"})],Bt.prototype,"actionId");Ps([y({type:String,attribute:"tool-name"})],Bt.prototype,"toolName");Ps([y({type:String})],Bt.prototype,"args");Ps([y({type:String})],Bt.prototype,"message");Ps([y({type:String})],Bt.prototype,"status");customElements.define("ask-tool-approval",Bt);var Dc=Object.defineProperty,oa=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Dc(e,r,s),s};const ka=class ka extends X{constructor(){super(...arguments),this.open=!1,this.header=""}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){this.removeEventListener("keydown",this._onKeydown),super.disconnectedCallback()}render(){return g`
      <div class="overlay" @click=${this._onBackdrop}>
        <div class="panel" role="dialog" aria-modal="true" aria-label=${this.header}>
          <div class="head">
            <h3>${this.header}</h3>
            <button class="close" @click=${this._close} aria-label="Close">✕</button>
          </div>
          <div class="body"><slot></slot></div>
          <div class="footer"><slot name="footer"></slot></div>
        </div>
      </div>
    `}_onKeydown(e){e.key==="Escape"&&this.open&&this._close()}_onBackdrop(e){e.target===e.currentTarget&&this._close()}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("dialog-close",{bubbles:!0,composed:!0}))}};ka.styles=oe`${le}

    :host {
      display: none;
    }
    :host([open]) {
      display: block;
    }

    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      z-index: 50;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 15vh 1rem 1rem;
    }

    .panel {
      width: var(--ask-dialog-width, min(28rem, 100%));
      max-height: 80vh;
      overflow-y: auto;
      background: var(--ask-surface, #ffffff);
      border: 1px solid var(--ask-border-strong, #d4d4d4);
      border-radius: 1rem;
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);
      color: var(--ask-text, #171717);
    }

    .head {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1.25rem 0.5rem;
    }
    .head h3 {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .close {
      width: 2rem;
      height: 2rem;
      border: none;
      border-radius: 0.5rem;
      background: transparent;
      color: var(--ask-text-muted, #a3a3a3);
      font-size: 0.875rem;
      cursor: pointer;
      flex-shrink: 0;
    }
    .close:hover {
      background: var(--ask-surface-hover, #f5f5f5);
    }

    .body {
      padding: 0.25rem 1.25rem 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
      padding: 0 1.25rem 1.25rem;
    }
  `;let Rr=ka;oa([y({type:Boolean,reflect:!0})],Rr.prototype,"open");oa([y({type:String})],Rr.prototype,"header");oa([un(".panel")],Rr.prototype,"_panel");customElements.define("ask-dialog",Rr);var Bc=Object.defineProperty,pn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Bc(e,r,s),s};const wa=class wa extends X{constructor(){super(...arguments),this.items=[],this.triggerLabel="",this.open=!1,this._onOutside=e=>{if(!this.open)return;e.composedPath().includes(this)||(this.open=!1,this.dispatchEvent(new CustomEvent("menu-close",{bubbles:!0,composed:!0})))}}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this._onOutside)}disconnectedCallback(){document.removeEventListener("pointerdown",this._onOutside),super.disconnectedCallback()}render(){return g`
      <button class="trigger" @click=${this._toggle} aria-expanded=${this.open?"true":"false"}>
        <slot name="trigger">${this.triggerLabel}</slot>
        <svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      ${this.open?g`
            <div class="menu" role="menu">
              ${this.items.length===0?g`<div class="empty">Nothing here yet.</div>`:this.items.map(e=>g`
                      ${e.separator?g`<div class="separator"></div>`:""}
                      <button
                        class="item ${e.active?"item--active":""}"
                        role="menuitem"
                        @click=${()=>this._select(e)}
                      >
                        ${e.icon?g`<span class="icon">${e.icon}</span>`:""}
                        <span class="texts">
                          <span class="label">${e.label}</span>
                          ${e.description?g`<span class="description">${e.description}</span>`:""}
                        </span>
                        ${e.active?g`<span class="check">✓</span>`:""}
                      </button>
                    `)}
              <slot name="menu-footer"></slot>
            </div>
          `:""}
    `}_toggle(){this.open=!this.open,this.dispatchEvent(new CustomEvent(this.open?"menu-open":"menu-close",{bubbles:!0,composed:!0}))}_select(e){this.open=!1,this.dispatchEvent(new CustomEvent("menu-select",{detail:{id:e.id},bubbles:!0,composed:!0}))}};wa.styles=oe`${le}

    :host {
      display: inline-block;
      position: relative;
    }

    .trigger {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      max-width: 100%;
      font: inherit;
      color: inherit;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 0.625rem;
      padding: 0.375rem 0.625rem;
      cursor: pointer;
    }
    .trigger:hover {
      background: var(--ask-surface-hover, #f5f5f5);
      border-color: var(--ask-border, #e5e5e5);
    }
    .trigger .caret {
      flex-shrink: 0;
      color: var(--ask-text-muted, #a3a3a3);
    }

    .menu {
      position: absolute;
      top: calc(100% + 0.375rem);
      left: 0;
      min-width: var(--ask-menu-width, 18rem);
      max-width: min(24rem, calc(100vw - 2rem));
      max-height: 60vh;
      overflow-y: auto;
      background: var(--ask-surface, #ffffff);
      border: 1px solid var(--ask-border, #e5e5e5);
      border-radius: 0.75rem;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
      padding: 0.375rem;
      z-index: 40;
      color: var(--ask-text, #171717);
    }
    :host([theme="dark"]) .menu { box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6); }

    .item {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      width: 100%;
      text-align: left;
      padding: 0.5rem 0.625rem;
      border: none;
      border-radius: 0.5rem;
      background: transparent;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }
    .item:hover {
      background: var(--ask-surface-hover, #f5f5f5);
    }
    .item--active {
      background: var(--ask-surface-active, #e5e5e5);
    }

    .item .icon {
      flex-shrink: 0;
      width: 1rem;
      text-align: center;
    }
    .item .texts {
      min-width: 0;
      flex: 1;
    }
    .item .label {
      display: block;
      font-size: 0.8125rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .item .description {
      display: block;
      font-size: 0.6875rem;
      font-weight: 400;
      color: var(--ask-text-muted, #a3a3a3);
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .item .check {
      margin-left: auto;
      flex-shrink: 0;
      color: var(--ask-accent, #c2410c);
    }

    .separator {
      height: 1px;
      background: var(--ask-border, #e5e5e5);
      margin: 0.25rem 0.375rem;
    }

    .empty {
      padding: 0.75rem 0.625rem;
      font-size: 0.75rem;
      color: var(--ask-text-muted, #a3a3a3);
      text-align: center;
    }

    .footer-slot {
      border-top: 1px solid var(--ask-border, #e5e5e5);
      margin-top: 0.25rem;
      padding-top: 0.25rem;
    }
  `;let pr=wa;pn([y({type:Array})],pr.prototype,"items");pn([y({type:String})],pr.prototype,"triggerLabel");pn([y({type:Boolean})],pr.prototype,"open");pn([un(".menu")],pr.prototype,"_menu");customElements.define("ask-menu",pr);var Hc=Object.defineProperty,zo=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Hc(e,r,s),s};const xa=class xa extends X{constructor(){super(...arguments),this.value="",this.placeholder="Search…"}render(){return g`
      <div class="wrap">
        <span class="icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.5" y2="16.5" />
          </svg>
        </span>
        <input
          .value=${this.value}
          placeholder=${this.placeholder}
          @input=${this._onInput}
        />
        <button
          class="clear ${this.value?"clear--visible":""}"
          @click=${this._clear}
          aria-label="Clear search"
        >✕</button>
      </div>
    `}_onInput(e){const r=e.target;this.value=r.value,this.dispatchEvent(new CustomEvent("search-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_clear(){this.value="",this.dispatchEvent(new CustomEvent("search-input",{detail:{value:""},bubbles:!0,composed:!0}))}};xa.styles=oe`${le}

    :host {
      display: block;
    }

    .wrap {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.375rem 0.625rem;
      border-radius: 0.625rem;
      border: 1px solid var(--ask-border, #e5e5e5);
      background: var(--ask-surface-muted, #fafafa);
      color: var(--ask-text-muted, #a3a3a3);
      transition: border-color 0.15s;
    }
    .wrap:focus-within {
      border-color: var(--ask-focus, #a3a3a3);
    }

    .icon {
      flex-shrink: 0;
      display: inline-flex;
    }

    input {
      flex: 1;
      min-width: 0;
      border: none;
      outline: none;
      background: transparent;
      font: inherit;
      font-size: 0.8125rem;
      color: var(--ask-text, #171717);
    }
    input::placeholder {
      color: var(--ask-text-muted, #a3a3a3);
    }

    .clear {
      flex-shrink: 0;
      width: 1.25rem;
      height: 1.25rem;
      border: none;
      border-radius: 0.375rem;
      background: transparent;
      color: var(--ask-text-muted, #a3a3a3);
      font-size: 0.75rem;
      cursor: pointer;
      display: none;
    }
    .clear--visible {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .clear:hover {
      background: var(--ask-surface-active, #e5e5e5);
    }
  `;let ps=xa;zo([y({type:String})],ps.prototype,"value");zo([y({type:String})],ps.prototype,"placeholder");customElements.define("ask-search-input",ps);var Uc=Object.defineProperty,Os=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Uc(e,r,s),s};const $a=class $a extends X{constructor(){super(...arguments),this.id="",this.title="",this.meta="",this.active=!1,this.archived=!1}render(){return g`
      <div class="item ${this.active?"item--active":""}" @click=${this._select}>
        <span class="title">${this.title}</span>
        ${this.meta?g`<span class="meta">${this.meta}</span>`:""}
        <div class="actions">
          <button class="mini" title="Rename" @click=${this._emit("conversation-rename")}>✎</button>
          <button class="mini" title=${this.archived?"Unarchive":"Archive"} @click=${this._emit("conversation-archive")}>
            ${this.archived?"↩":"🗄"}
          </button>
          <button class="mini mini--danger" title="Delete" @click=${this._emit("conversation-delete")}>✕</button>
        </div>
      </div>
    `}_select(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("conversation-select",{detail:{id:this.id},bubbles:!0,composed:!0}))}_emit(e){return r=>{r.stopPropagation(),this.dispatchEvent(new CustomEvent(e,{detail:{id:this.id},bubbles:!0,composed:!0}))}}};$a.styles=oe`${le}

    :host {
      display: block;
    }

    .item {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
      padding: 0.625rem 0.75rem;
      border-radius: 0.625rem;
      cursor: pointer;
      border: 1px solid transparent;
    }
    .item:hover {
      background: var(--ask-surface-hover, #f5f5f5);
    }
    .item--active {
      background: var(--ask-surface-active, #e5e5e5);
      border-color: var(--ask-border, #e5e5e5);
    }

    .title {
      font-size: 0.8125rem;
      font-weight: 500;
      color: var(--ask-text, #171717);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .meta {
      font-size: 0.6875rem;
      color: var(--ask-text-muted, #a3a3a3);
    }

    .actions {
      display: none;
      position: absolute;
      right: 0.375rem;
      top: 50%;
      transform: translateY(-50%);
      gap: 0.125rem;
      background: inherit;
      border-radius: 0.5rem;
      padding: 0.125rem;
    }
    .item:hover .actions,
    .item--active .actions {
      display: inline-flex;
    }

    .mini {
      width: 1.5rem;
      height: 1.5rem;
      border: none;
      border-radius: 0.375rem;
      background: transparent;
      color: var(--ask-text-muted, #a3a3a3);
      font-size: 0.75rem;
      cursor: pointer;
    }
    .mini:hover {
      background: var(--ask-surface-active, #e5e5e5);
    }
    .mini--danger:hover {
      color: var(--ask-danger, #dc2626);
    }
  `;let Ht=$a;Os([y({type:String})],Ht.prototype,"id");Os([y({type:String})],Ht.prototype,"title");Os([y({type:String})],Ht.prototype,"meta");Os([y({type:Boolean})],Ht.prototype,"active");Os([y({type:Boolean})],Ht.prototype,"archived");customElements.define("ask-conversation-item",Ht);var Fc=Object.defineProperty,la=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Fc(e,r,s),s};const Ea=class Ea extends X{constructor(){super(...arguments),this.label="",this.count=0,this.expanded=!0}render(){return g`
      <button class="header" @click=${this._toggle} aria-expanded=${this.expanded?"true":"false"}>
        <svg class="chevron ${this.expanded?"chevron--open":""}" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
        <span class="label">${this.label}</span>
        ${this.count>0?g`<span class="count">${this.count}</span>`:""}
      </button>
      ${this.expanded?g`<slot></slot>`:""}
    `}_toggle(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("group-toggle",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};Ea.styles=oe`${le}

    :host {
      display: block;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
      padding: 0.375rem 0.5rem;
      border: none;
      border-radius: 0.5rem;
      background: transparent;
      color: var(--ask-text-muted, #a3a3a3);
      font: inherit;
      cursor: pointer;
      text-align: left;
    }
    .header:hover {
      background: var(--ask-surface-hover, #f5f5f5);
      color: var(--ask-text, #171717);
    }

    .chevron {
      flex-shrink: 0;
      transition: transform 0.15s;
    }
    .chevron--open {
      transform: rotate(90deg);
    }

    .label {
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .count {
      margin-left: auto;
      font-size: 0.6875rem;
      color: var(--ask-text-muted, #a3a3a3);
      flex-shrink: 0;
    }
  `;let Ir=Ea;la([y({type:String})],Ir.prototype,"label");la([y({type:Number})],Ir.prototype,"count");la([y({type:Boolean})],Ir.prototype,"expanded");customElements.define("ask-conversation-group",Ir);var qc=Object.defineProperty,Kc=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&qc(e,r,s),s};const Sa=class Sa extends X{constructor(){super(...arguments),this.todos=[]}render(){if(this.todos.length===0)return g``;const e=this.todos.map(r=>typeof r=="string"?{id:r,title:r,status:"pending"}:r);return g`
      <ul class="todos">
        ${e.map(r=>g`
          <li class="todo todo--${r.status}">
            <span class="dot"></span>
            <span class="title">${r.title}</span>
            <span class="status">${r.status.replace("_"," ")}</span>
          </li>
        `)}
      </ul>`}};Sa.styles=oe`${le}

    :host {
      display: block;
    }

    .todos {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .todo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.375rem 0.75rem;
      border-radius: 0.5rem;
      font-size: 0.8125rem;
      line-height: 1.5;
      color: var(--ask-border-strong, #404040);
      background: var(--ask-surface-muted, #fafafa);
      border: 1px solid var(--ask-border, #e5e5e5);
    }

    .todo .dot {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 999px;
      flex-shrink: 0;
      background: var(--ask-text-muted, #a3a3a3);
    }
    .todo--in_progress .dot { background: var(--ask-accent, #c2410c); animation: todo-pulse 1.2s ease-in-out infinite; }
    .todo--completed .dot { background: #16a34a; }
    .todo--blocked .dot { background: var(--ask-danger, #dc2626); }

    .todo .title { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .todo--completed .title { text-decoration: line-through; color: var(--ask-text-muted, #a3a3a3); }

    .todo .status {
      margin-left: auto;
      font-size: 0.625rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--ask-text-muted, #a3a3a3);
      flex-shrink: 0;
    }

    @keyframes todo-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.35; }
    }
  `;let Ys=Sa;Kc([y({type:Array})],Ys.prototype,"todos");customElements.define("ask-todo-list",Ys);var Wc=Object.defineProperty,To=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Wc(e,r,s),s};const Ca=class Ca extends X{constructor(){super(...arguments),this.plan="",this.status="proposed"}render(){const e=this.status==="proposed",r=this.status==="proposed"?g`<span class="status-chip status-chip--proposed">Proposed</span>`:this.status==="approved"?g`<span class="status-chip status-chip--approved">Approved</span>`:g`<span class="status-chip status-chip--rejected">Rejected</span>`;return g`
      <div class="plan">
        <div class="head">
          <span>📋 Plan</span>
          ${r}
        </div>
        <pre class="body">${this.plan}</pre>
        ${e?g`
          <div class="actions">
            <button class="btn-approve" @click=${this._approve}>Approve plan</button>
            <button class="btn-reject" @click=${this._reject}>Reject plan</button>
          </div>
        `:""}
      </div>`}_approve(){this.dispatchEvent(new CustomEvent("plan-approved",{detail:{plan:this.plan},bubbles:!0,composed:!0}))}_reject(){this.dispatchEvent(new CustomEvent("plan-rejected",{detail:{plan:this.plan},bubbles:!0,composed:!0}))}};Ca.styles=oe`${le}

    :host {
      display: block;
    }

    .plan {
      border: 1px solid var(--ask-accent, #c2410c);
      border-radius: 0.75rem;
      overflow: hidden;
      background: var(--ask-surface-muted, #fafafa);
    }

    .head {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.75rem;
      font-size: 0.8125rem;
      font-weight: 600;
      color: var(--ask-border-strong, #404040);
      background: var(--ask-surface, #ffffff);
      border-bottom: 1px solid var(--ask-border, #e5e5e5);
    }
    .head .status-chip {
      margin-left: auto;
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 0.125rem 0.5rem;
      border-radius: 999px;
    }
    .status-chip--proposed { color: var(--ask-accent-text, #fafafa); background: var(--ask-accent, #c2410c); }
    .status-chip--approved { color: #14532d; background: #dcfce7; }
    .status-chip--rejected { color: #7f1d1d; background: #fee2e2; }

    .body {
      margin: 0;
      padding: 0.75rem;
      font-size: 0.8125rem;
      line-height: 1.6;
      color: var(--ask-text, #171717);
      white-space: pre-wrap;
      word-break: break-word;
      font-family: var(--ask-font, ui-sans-serif, system-ui, sans-serif);
    }

    .actions {
      display: flex;
      gap: 0.5rem;
      padding: 0 0.75rem 0.75rem;
    }
    .actions button {
      flex: 1;
      font: inherit;
      font-size: 0.8125rem;
      font-weight: 600;
      padding: 0.5rem 0.75rem;
      border-radius: 0.5rem;
      border: 1px solid var(--ask-border-strong, #d4d4d4);
      cursor: pointer;
    }
    .btn-approve {
      background: var(--ask-accent, #c2410c);
      border-color: var(--ask-accent, #c2410c);
      color: var(--ask-accent-text, #fafafa);
    }
    .btn-reject {
      background: var(--ask-surface, #ffffff);
      color: var(--ask-danger-text, #991b1b);
      border-color: var(--ask-danger-border, #fecaca);
    }
  `;let hs=Ca;To([y({type:String})],hs.prototype,"plan");To([y({type:String})],hs.prototype,"status");customElements.define("ask-plan",hs);var Vc=Object.defineProperty,Mo=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Vc(e,r,s),s};const Aa=class Aa extends X{constructor(){super(...arguments),this.diff="",this.filename=""}render(){const e=Yc(this.diff);if(e.lines.length===0&&!this.filename)return g`<pre class="diff"><div class="diff--empty">No changes</div></pre>`;const r=this.filename?g`<div class="file-header"><span>${this.filename}</span><span class="hunk-count">+${e.adds} −${e.dels}</span></div>`:e.fileNames.length>0?g`<div class="file-header"><span>${e.fileNames.join(" → ")}</span><span class="hunk-count">+${e.adds} −${e.dels}</span></div>`:"";return g`
      <div class="diff">
        ${r}
        ${e.hunks.map(n=>g`
          <div class="hunk">
            <div class="hunk-header">${n.header}</div>
            ${n.lines.map(s=>{const a=s.type==="add"?"line--add":s.type==="del"?"line--del":"",i=s.type==="add"?"+":s.type==="del"?"−":" ";return g`
                <div class="line ${a}">
                  <span class="old-no">${s.oldNo??""}</span>
                  <span class="new-no">${s.newNo??""}</span>
                  <span class="content"><span class="marker">${i}</span>${s.text}</span>
                </div>`})}
          </div>
        `)}
      </div>`}};Aa.styles=oe`${le}

    :host {
      display: block;
    }

    .diff {
      margin: 0;
      border: 1px solid var(--ask-border, #e5e5e5);
      border-radius: 0.75rem;
      overflow: hidden;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: 0.75rem;
      line-height: 1.6;
      background: var(--ask-surface-muted, #fafafa);
    }

    .file-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.75rem;
      font-size: 0.6875rem;
      font-weight: 600;
      color: var(--ask-text-faint, #737373);
      background: var(--ask-surface, #ffffff);
      border-bottom: 1px solid var(--ask-border, #e5e5e5);
    }

    .file-header .hunk-count {
      margin-left: auto;
      font-weight: 400;
    }

    .hunk {
      padding: 0.25rem 0;
      border-top: 1px solid var(--ask-border, #e5e5e5);
    }
    .hunk:first-of-type {
      border-top: none;
    }

    .hunk-header {
      padding: 0.25rem 0.75rem;
      color: var(--ask-text-faint, #737373);
      background: var(--ask-surface-hover, #f5f5f5);
      font-size: 0.6875rem;
    }

    .line {
      display: grid;
      grid-template-columns: 3.5rem 3.5rem 1fr;
      gap: 0;
      padding: 0 0.75rem;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .line .old-no, .line .new-no {
      color: var(--ask-text-muted, #a3a3a3);
      user-select: none;
      text-align: right;
      padding-right: 0.75rem;
    }
    .line .content {
      min-width: 0;
    }

    .line--add {
      background: var(--ask-diff-add-bg, #f0fdf4);
      color: var(--ask-diff-add-text, #14532d);
    }
    .line--del {
      background: var(--ask-diff-del-bg, #fef2f2);
      color: var(--ask-diff-del-text, #7f1d1d);
    }
    :host([theme="dark"]) .line--add { background: var(--ask-diff-add-bg-dark, #052e16); color: var(--ask-diff-add-text-dark, #86efac); }
    :host([theme="dark"]) .line--del { background: var(--ask-diff-del-bg-dark, #450a0a); color: var(--ask-diff-del-text-dark, #fca5a5); }
    .line--add .marker, .line--del .marker {
      font-weight: 700;
      width: 0.875rem;
      flex-shrink: 0;
    }
    .line .content {
      display: inline-flex;
    }

    .diff--empty {
      padding: 0.75rem;
      color: var(--ask-text-muted, #a3a3a3);
      font-family: var(--ask-font, ui-sans-serif, system-ui, sans-serif);
      font-size: 0.8125rem;
    }
  `;let vs=Aa;Mo([y({type:String})],vs.prototype,"diff");Mo([y({type:String})],vs.prototype,"filename");function Yc(t){const e=[],r=[];let n=0,s=0,a=null,i=0,l=0;for(const c of t.split(`
`)){const d=c.replace(/\r$/,"");if(d.startsWith("+++ ")||d.startsWith("--- ")){r.push(d.slice(4).replace(/^[ab]\//,""));continue}if(d.startsWith("@@")){a={header:d,lines:[]},e.push(a);const f=d.match(/@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/);i=f?parseInt(f[1],10):0,l=f?parseInt(f[2],10):0;continue}a&&(d.startsWith("+")?(a.lines.push({type:"add",text:d.slice(1),oldNo:null,newNo:l}),l+=1,n+=1):d.startsWith("-")?(a.lines.push({type:"del",text:d.slice(1),oldNo:i,newNo:null}),i+=1,s+=1):(a.lines.push({type:"ctx",text:d.slice(1),oldNo:i,newNo:l}),i+=1,l+=1))}const o=e.flatMap(c=>c.lines);return{hunks:e,lines:o,fileNames:r,adds:n,dels:s}}customElements.define("ask-diff",vs);var Jc=Object.defineProperty,ca=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Jc(e,r,s),s};const Pa=class Pa extends X{constructor(){super(...arguments),this.output="",this.maxLines=8,this.expanded=!1}render(){const e=this.output.replace(/\x1b\[[0-9;]*m/g,"");if(!e)return g`<div class="terminal"><div class="output output--empty">No output</div></div>`;const r=e.split(`
`),n=!this.expanded&&r.length>this.maxLines,s=n?r.slice(0,this.maxLines):r,a=`calc(${this.maxLines} * 1.1rem)`;return g`
      <div class="terminal">
        <div class="bar">
          <span class="label">Terminal</span>
          <span class="count">${r.length} lines</span>
          <button @click=${this._copy}>Copy</button>
          ${n?g`<button @click=${this._toggle}>Show all</button>`:""}
        </div>
        <pre class="output" style=${n?`max-height: ${a}`:""}>${s.join(`
`)}</pre>
      </div>`}_toggle(){this.expanded=!this.expanded}async _copy(){var e;try{await navigator.clipboard.writeText(this.output)}catch{const r=(e=this.shadowRoot)==null?void 0:e.querySelector(".output"),n=document.createRange();if(r){n.selectNodeContents(r);const s=window.getSelection();s==null||s.removeAllRanges(),s==null||s.addRange(n)}}}};Pa.styles=oe`${le}

    :host {
      display: block;
    }

    .terminal {
      border: 1px solid var(--ask-border, #e5e5e5);
      border-radius: 0.75rem;
      overflow: hidden;
      background: #0c0c0c;
    }

    .bar {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.375rem 0.75rem;
      background: #161616;
      border-bottom: 1px solid #262626;
    }
    .bar .label {
      font-size: 0.6875rem;
      color: #a3a3a3;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .bar .count {
      font-size: 0.6875rem;
      color: #737373;
    }
    .bar button {
      margin-left: auto;
      font: inherit;
      font-size: 0.6875rem;
      padding: 0.25rem 0.5rem;
      border-radius: 0.375rem;
      border: 1px solid #333;
      background: transparent;
      color: #d4d4d4;
      cursor: pointer;
    }
    .bar button:hover { background: #262626; }

    .output {
      margin: 0;
      padding: 0.75rem;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: 0.6875rem;
      line-height: 1.6;
      color: #d4d4d4;
      white-space: pre-wrap;
      word-break: break-word;
      max-height: 24rem;
      overflow-y: auto;
    }

    .output--empty {
      color: #737373;
      font-family: var(--ask-font, ui-sans-serif, system-ui, sans-serif);
      font-size: 0.75rem;
    }
  `;let Lr=Pa;ca([y({type:String})],Lr.prototype,"output");ca([y({type:Number,attribute:"max-lines"})],Lr.prototype,"maxLines");ca([y({type:Boolean})],Lr.prototype,"expanded");customElements.define("ask-terminal-output",Lr);var Gc=Object.defineProperty,jo=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Gc(e,r,s),s};const Oa=class Oa extends X{constructor(){super(...arguments),this.content="",this.active=!1}render(){return this.active?g`
      <div class="streaming-content">
        ${this.content}<span class="streaming-cursor" aria-hidden="true"></span>
      </div>
    `:g``}};Oa.styles=oe`${le}

    :host {
      display: block;
    }
    :host([hidden]) {
      display: none;
    }

    .streaming-content {
      font-size: 0.875rem;
      line-height: 1.75;
      color: var(--ask-text, #171717);
      white-space: pre-wrap;
    }

    .streaming-cursor {
      display: inline-block;
      width: 2px;
      height: 1.1em;
      margin-left: 2px;
      vertical-align: -0.15em;
      border-radius: 1px;
      background: var(--ask-text-faint, #737373);
      animation: ask-blink 1s step-end infinite;
    }

    @keyframes ask-blink {
      50% { opacity: 0; }
    }
  `;let ms=Oa;jo([y({type:String})],ms.prototype,"content");jo([y({type:Boolean,reflect:!0})],ms.prototype,"active");customElements.define("ask-streaming",ms);var Zc=Object.defineProperty,da=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Zc(e,r,s),s};const Na=class Na extends X{constructor(){super(...arguments),this.code="",this.language="",this._copied=!1}async _handleCopy(){try{await navigator.clipboard.writeText(this.code),this._copied=!0,setTimeout(()=>{this._copied=!1},2e3)}catch{}}render(){return this.code?g`
      <div class="code-wrapper">
        <div class="code-header">
          <span class="code-language">${this.language||"code"}</span>
          <button class="code-copy-btn" @click=${this._handleCopy}>
            ${this._copied?"✅":"📋"} ${this._copied?"Copied":"Copy"}
          </button>
        </div>
        <pre class="code-body"><code>${this.code}</code></pre>
      </div>
    `:g``}};Na.styles=oe`${le}

    :host {
      display: block;
    }

    .code-wrapper {
      position: relative;
      background: var(--ask-surface-muted, #f5f5f5);
      border: 1px solid var(--ask-border, #e5e5e5);
      border-radius: var(--ask-radius, 0.5rem);
      overflow: hidden;
    }

    .code-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--ask-radius-small, 0.375rem) 0.75rem;
      font-size: 0.75rem;
      color: var(--ask-text-faint, #737373);
      background: var(--ask-border, #e5e5e5);
      border-bottom: 1px solid var(--ask-border, #e5e5e5);
    }

    .code-language {
      font-weight: 500;
      font-family: monospace;
      text-transform: lowercase;
    }

    .code-copy-btn {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.125rem var(--ask-radius, 0.5rem);
      border-radius: 0.25rem;
      border: 1px solid var(--ask-border, #e5e5e5);
      background: var(--ask-surface, #fff);
      color: var(--ask-text-faint, #525252);
      font-size: 0.75rem;
      cursor: pointer;
      transition: background 0.1s, opacity 0.1s;
      opacity: 0;
    }
    .code-wrapper:hover .code-copy-btn {
      opacity: 1;
    }
    .code-copy-btn:hover {
      background: var(--ask-border, #e5e5e5);
    }

    .code-body {
      overflow-x: auto;
      padding: 0.75rem 1rem;
      font-family: "SF Mono", Monaco, Menlo, monospace;
      font-size: 0.8125rem;
      line-height: 1.6;
      color: var(--ask-border-strong, #404040);
      white-space: pre;
    }

    
    
  `;let Dr=Na;da([y({type:String})],Dr.prototype,"code");da([y({type:String})],Dr.prototype,"language");da([As()],Dr.prototype,"_copied");customElements.define("ask-code-block",Dr);var Xc=Object.defineProperty,Ns=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Xc(e,r,s),s};const za=class za extends X{constructor(){super(...arguments),this.value="",this.placeholder="Type a message...",this.disabled=!1,this.streaming=!1}_handleInput(e){const r=e.target;this.value=r.value,this._autoResize(),this.dispatchEvent(new CustomEvent("ask-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_autoResize(){const e=this._textarea;e.style.height="auto",e.style.height=Math.min(e.scrollHeight,192)+"px"}_handleKeydown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this._submit())}_submit(){const e=this.value.trim();!e||this.disabled||this.streaming||this.dispatchEvent(new CustomEvent("ask-submit",{detail:{value:e},bubbles:!0,composed:!0}))}_handleStop(){this.dispatchEvent(new CustomEvent("ask-stop",{bubbles:!0,composed:!0}))}_handleKeydownGlobal(e){e.key==="Escape"&&this.streaming&&this._handleStop()}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._handleKeydownGlobal.bind(this))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._handleKeydownGlobal.bind(this))}render(){const e=this.querySelector(":scope > [slot='context']")!==null,r=this.querySelector(":scope > [slot='toolbar']")!==null;return g`
      ${e?g`<div class="input-context" part="context"><slot name="context"></slot></div>`:""}
      <div class="input-card">
        <div class="input-main">
          <textarea
            class="input-textarea"
            .value=${this.value}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            @input=${this._handleInput}
            @keydown=${this._handleKeydown}
            rows="1"
          ></textarea>
          <div class="input-actions">
            ${r?"":this._sendButton()}
            <button
              class="input-btn btn-stop ${this.streaming?"":"btn-hidden"}"
              @click=${this._handleStop}
              aria-label="Stop streaming"
            >
              <svg class="btn-icon" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="6" width="12" height="12" rx="2"/>
              </svg>
            </button>
          </div>
        </div>
        ${r?g`
              <div class="input-toolbar" part="toolbar">
                <slot name="toolbar"></slot>
                <span class="input-toolbar-spacer"></span>
                ${this._sendButton()}
              </div>
            `:""}
      </div>
    `}_sendButton(){return g`
      <button
        class="input-btn btn-send ${this.streaming?"btn-hidden":""}"
        @click=${this._submit}
        ?disabled=${this.disabled||!this.value.trim()}
        aria-label="Send message"
      >
        <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    `}};za.styles=oe`${le}

    :host {
      display: block;
    }

    .input-card {
      display: flex;
      flex-direction: column;
      gap: var(--ask-radius, 0.5rem);
      padding: var(--ask-radius, 0.5rem) 1rem;
      background: var(--ask-surface, #fff);
      border: 1px solid var(--ask-border, #e5e5e5);
      border-radius: 1.125rem;
      transition: border-color 0.15s;
    }
    .input-card:focus-within {
      border-color: var(--ask-text-muted, #a3a3a3);
    }

    .input-main {
      display: flex;
      align-items: flex-end;
      gap: var(--ask-radius, 0.5rem);
    }

    /* Context pill(s) above the input (the thing being chatted about). */
    .input-context {
      display: flex;
      align-items: center;
      gap: var(--ask-radius-small, 0.375rem);
      margin-bottom: 0.375rem;
    }

    /* Bottom toolbar row inside the input: host content (attachments,
     * approve chips, model selector) left, send button right. Rendered
     * only when the host provides toolbar content. */
    .input-toolbar {
      display: flex;
      align-items: center;
      gap: var(--ask-radius, 0.5rem);
    }
    .input-toolbar-spacer {
      flex: 1;
    }

    .input-textarea {
      flex: 1;
      border: none;
      background: transparent;
      resize: none;
      outline: none;
      font-family: inherit;
      font-size: 0.875rem;
      line-height: 1.5;
      color: var(--ask-text, #171717);
      min-height: 1.5rem;
      max-height: 12rem;
      padding: 0;
    }
    .input-textarea::placeholder {
      color: var(--ask-text-muted, #a3a3a3);
    }
    .input-textarea:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .input-actions {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      flex-shrink: 0;
    }

    .input-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: var(--ask-radius-pill, 9999px);
      border: none;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.15s, opacity 0.15s;
    }
    .input-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .btn-send {
      background: var(--ask-text, #171717);
      color: var(--ask-surface, #fff);
    }
    .btn-send:hover:not(:disabled) {
      background: var(--ask-border-strong, #404040);
    }

    .btn-stop {
      background: var(--ask-surface-muted, #f5f5f5);
      color: var(--ask-input-stop-text, #ef4444);
    }
    .btn-stop:hover {
      background: var(--ask-input-stop-hover-bg, #fee2e2);
    }

    .btn-icon {
      width: 1rem;
      height: 1rem;
    }

    .btn-hidden {
      display: none;
    }

    
    
  `;let Ut=za;Ns([y({type:String})],Ut.prototype,"value");Ns([y({type:String})],Ut.prototype,"placeholder");Ns([y({type:Boolean,reflect:!0})],Ut.prototype,"disabled");Ns([y({type:Boolean,reflect:!0})],Ut.prototype,"streaming");Ns([un(".input-textarea",!0)],Ut.prototype,"_textarea");customElements.define("ask-chat-input",Ut);var Qc=Object.defineProperty,hn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Qc(e,r,s),s};const Ta=class Ta extends X{constructor(){super(...arguments),this.src="",this.name="",this.role="assistant",this.size=28}render(){const e=`${this.size}px`;if(this.src)return g`
        <div class="avatar" style="width: ${e}; height: ${e};">
          <img class="avatar-img" src=${this.src} alt=${this.name||"avatar"} />
        </div>
      `;let r;return this.name?r=this.name.charAt(0).toUpperCase():r=this.role==="assistant"?"🤖":"👤",g`
      <div class="avatar" style="width: ${e}; height: ${e};">
        <span class="avatar-fallback">${r}</span>
      </div>
    `}};Ta.styles=oe`${le}

    :host {
      display: inline-flex;
    }

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--ask-radius-small, 0.375rem);
      flex-shrink: 0;
      overflow: hidden;
      background: var(--ask-surface-active, #e5e5e5);
      color: var(--ask-text-faint, #737373);
      font-size: 0.875rem;
      line-height: 1;
      font-weight: 500;
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .avatar-fallback {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    
    
  `;let hr=Ta;hn([y({type:String})],hr.prototype,"src");hn([y({type:String})],hr.prototype,"name");hn([y({type:String})],hr.prototype,"role");hn([y({type:Number})],hr.prototype,"size");customElements.define("ask-avatar",hr);var ed=Object.defineProperty,zs=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&ed(e,r,s),s};const Ma=class Ma extends X{constructor(){super(...arguments),this.name="",this.size=0,this.type="",this.src="",this.removable=!1}_formatSize(e){return e<1024?`${e}B`:e<1048576?`${(e/1024).toFixed(1)}KB`:`${(e/1048576).toFixed(1)}MB`}_handleRemove(){this.dispatchEvent(new CustomEvent("ask-remove",{detail:{name:this.name},bubbles:!0,composed:!0}))}render(){const e=this.type.startsWith("image/"),n=this.type.includes("pdf")?"📕":"📄";return g`
      <div class="attachment-card">
        <div class="attachment-preview">
          ${e?g`<img class="attachment-preview-img" src=${this.src||""} alt=${this.name} />`:g`<span>${n}</span>`}
        </div>
        <div class="attachment-info">
          <span class="attachment-name" title=${this.name}>${this.name}</span>
          <span class="attachment-size">${this._formatSize(this.size)}</span>
        </div>
        ${this.removable?g`
              <button class="attachment-remove" @click=${this._handleRemove} aria-label="Remove ${this.name}">
                ×
              </button>
            `:""}
      </div>
    `}};Ma.styles=oe`${le}

    :host {
      display: block;
    }

    .attachment-card {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      padding: var(--ask-radius, 0.5rem) 0.75rem;
      background: var(--ask-surface-muted, #fafafa);
      border: 1px solid var(--ask-border, #e5e5e5);
      border-radius: 0.75rem;
      position: relative;
    }

    .attachment-preview {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: var(--ask-radius, 0.5rem);
      overflow: hidden;
      flex-shrink: 0;
      background: var(--ask-border, #e5e5e5);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      color: var(--ask-text-muted, #a3a3a3);
    }
    .attachment-preview-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .attachment-info {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
    }
    .attachment-name {
      font-size: 0.8125rem;
      font-weight: 500;
      color: var(--ask-border-strong, #404040);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 11rem;
    }
    .attachment-size {
      font-size: 0.6875rem;
      color: var(--ask-text-muted, #a3a3a3);
    }

    .attachment-remove {
      position: absolute;
      top: -var(--ask-radius-small, 0.375rem);
      right: -var(--ask-radius-small, 0.375rem);
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--ask-radius-pill, 9999px);
      border: none;
      background: var(--ask-border, #262626);
      color: var(--ask-surface, #fff);
      font-size: 0.625rem;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.1s;
    }
    .attachment-card:hover .attachment-remove {
      opacity: 1;
    }
    .attachment-remove:hover {
      background: var(--ask-border-strong, #404040);
    }

    
    
  `;let Ft=Ma;zs([y({type:String})],Ft.prototype,"name");zs([y({type:Number})],Ft.prototype,"size");zs([y({type:String})],Ft.prototype,"type");zs([y({type:String})],Ft.prototype,"src");zs([y({type:Boolean})],Ft.prototype,"removable");customElements.define("ask-attachment",Ft);var td=Object.defineProperty,ua=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&td(e,r,s),s};const ja=class ja extends X{constructor(){super(...arguments),this.message="",this.title="Something went wrong",this.retryable=!1}_handleRetry(){this.dispatchEvent(new CustomEvent("ask-retry",{bubbles:!0,composed:!0}))}render(){return this.message?g`
      <div class="error-card">
        <span class="error-icon">⚠️</span>
        <div class="error-content">
          <div class="error-title">${this.title}</div>
          <div class="error-message">${this.message}</div>
          ${this.retryable?g`<button class="error-retry" @click=${this._handleRetry}>Retry</button>`:""}
        </div>
      </div>
    `:g``}};ja.styles=oe`${le}

    :host {
      display: block;
    }

    .error-card {
      display: inline-flex;
      align-items: flex-start;
      gap: var(--ask-radius, 0.5rem);
      padding: 0.625rem 1rem;
      border-radius: 1rem;
      font-size: 0.8125rem;
      line-height: 1.5;
      background: var(--ask-danger-bg, #fef2f2);
      color: var(--ask-danger-text, #991b1b);
      border: 1px solid var(--ask-danger-border, #fecaca);
    }

    .error-icon {
      flex-shrink: 0;
      font-size: 1rem;
      line-height: 1.25;
    }

    .error-content {
      flex: 1;
      min-width: 0;
    }

    .error-title {
      font-weight: 600;
      font-size: 0.875rem;
    }

    .error-message {
      margin-top: 0.125rem;
      color: var(--ask-danger-text, #7f1d1d);
    }

    .error-retry {
      margin-top: var(--ask-radius, 0.5rem);
      padding: 0.25rem 0.75rem;
      border-radius: var(--ask-radius-small, 0.375rem);
      border: 1px solid var(--ask-danger-border, #fecaca);
      background: var(--ask-surface, #fff);
      color: var(--ask-danger-text, #991b1b);
      font-size: 0.75rem;
      cursor: pointer;
      transition: background 0.1s;
    }
    .error-retry:hover {
      background: var(--ask-danger-bg, #fef2f2);
    }

    
    
  `;let Br=ja;ua([y({type:String})],Br.prototype,"message");ua([y({type:String})],Br.prototype,"title");ua([y({type:Boolean})],Br.prototype,"retryable");customElements.define("ask-error",Br);var rd=Object.defineProperty,Ro=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&rd(e,r,s),s};const Ra=class Ra extends X{constructor(){super(...arguments),this.suggestions="",this.label="Suggestions"}_parsedSuggestions(){try{const e=JSON.parse(this.suggestions);if(Array.isArray(e))return e}catch{}return this.suggestions?this.suggestions.split(",").map(e=>e.trim()).filter(Boolean):[]}_handleSelect(e){this.dispatchEvent(new CustomEvent("ask-select",{detail:{suggestion:e},bubbles:!0,composed:!0}))}render(){const e=this._parsedSuggestions();return e.length===0?g``:g`
      <div class="suggestions-label">${this.label}</div>
      <div class="suggestions-list">
        ${e.map(r=>g`
            <button class="suggestion-chip" @click=${()=>this._handleSelect(r)}>${r}</button>
          `)}
      </div>
    `}};Ra.styles=oe`${le}

    :host {
      display: block;
    }

    .suggestions-label {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--ask-text-faint, #737373);
      margin-bottom: var(--ask-radius-small, 0.375rem);
    }

    .suggestions-list {
      display: flex;
      flex-wrap: wrap;
      gap: var(--ask-radius-small, 0.375rem);
    }

    .suggestion-chip {
      padding: var(--ask-radius-small, 0.375rem) 0.75rem;
      border-radius: var(--ask-radius-pill, 9999px);
      border: 1px solid var(--ask-border, #e5e5e5);
      background: var(--ask-surface, #fff);
      color: var(--ask-border-strong, #404040);
      font-size: 0.8125rem;
      cursor: pointer;
      transition: background 0.1s, border-color 0.1s;
      white-space: nowrap;
    }
    .suggestion-chip:hover {
      background: var(--ask-surface-hover, #f5f5f5);
      border-color: var(--ask-text-muted, #a3a3a3);
    }

    
    
  `;let gs=Ra;Ro([y({type:String})],gs.prototype,"suggestions");Ro([y({type:String})],gs.prototype,"label");customElements.define("ask-suggestions",gs);var sd=Object.defineProperty,fa=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&sd(e,r,s),s};const Ia=class Ia extends X{constructor(){super(...arguments),this.options="",this.value="",this.label=""}_parsedOptions(){try{const e=JSON.parse(this.options);if(Array.isArray(e))return e}catch{}return[]}_handleChange(e){const r=e.target;this.value=r.value,this.dispatchEvent(new CustomEvent("ask-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const e=this._parsedOptions();return g`
      <div class="selector-wrapper">
        ${this.label?g`<span class="selector-label">${this.label}</span>`:""}
        <select class="selector-select" @change=${this._handleChange} .value=${this.value}>
          ${e.map(r=>g`
              <option value=${r.value} ?selected=${r.value===this.value}>${r.label}</option>
            `)}
        </select>
      </div>
    `}};Ia.styles=oe`${le}

    :host {
      display: block;
    }

    .selector-wrapper {
      display: flex;
      align-items: center;
      gap: var(--ask-radius, 0.5rem);
    }

    .selector-label {
      font-size: 0.8125rem;
      font-weight: 500;
      color: var(--ask-text-faint, #525252);
      white-space: nowrap;
    }

    .selector-select {
      flex: 1;
      padding: var(--ask-radius-small, 0.375rem) 0.625rem;
      border-radius: var(--ask-radius, 0.5rem);
      border: 1px solid var(--ask-border, #e5e5e5);
      background: var(--ask-surface, #fff);
      color: var(--ask-text, #171717);
      font-size: 0.8125rem;
      font-family: inherit;
      outline: none;
      cursor: pointer;
      min-width: 0;
      appearance: auto;
    }
    .selector-select:focus {
      border-color: var(--ask-text-muted, #a3a3a3);
    }

    
    
  `;let Hr=Ia;fa([y({type:String})],Hr.prototype,"options");fa([y({type:String})],Hr.prototype,"value");fa([y({type:String})],Hr.prototype,"label");customElements.define("ask-model-selector",Hr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nd={CHILD:2},ad=t=>(...e)=>({_$litDirective$:t,values:e});class id{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Dn extends id{constructor(e){if(super(e),this.it=ue,e.type!==nd.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ue||e==null)return this._t=void 0,this.it=e;if(e===ur)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Dn.directiveName="unsafeHTML",Dn.resultType=1;const Bn=ad(Dn);var od=Object.defineProperty,Io=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&od(e,r,s),s};function ld(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function cd(t){let e=ld(t);return e=e.replace(/`([^`]+)`/g,"<code>$1</code>"),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),e=e.replace(/\n/g,"<br>"),e}const La=class La extends X{constructor(){super(...arguments),this.content="",this.html=""}render(){if(this.html)return g`
        <div class="markdown-content">${Bn(this.html)}</div>
      `;if(!this.content)return g``;const e=cd(this.content);return g`
      <div class="markdown-content">${Bn(e)}</div>
    `}};La.styles=oe`${le}

    :host {
      display: block;
    }

    .markdown-content {
      font-size: 0.875rem;
      line-height: 1.75;
      color: var(--ask-text, #171717);
      word-wrap: break-word;
    }

    .markdown-content code {
      background: var(--ask-surface-muted, #f5f5f5);
      padding: 0.125rem var(--ask-radius-small, 0.375rem);
      border-radius: 0.25rem;
      font-family: "SF Mono", Monaco, Menlo, monospace;
      font-size: 0.8125em;
      color: var(--ask-border-strong, #404040);
    }

    .markdown-content a {
      color: var(--ask-markdown-link, #3b82f6);
      text-decoration: underline;
    }
    .markdown-content a:hover {
      opacity: 0.8;
    }

    .markdown-content strong {
      font-weight: 600;
    }

    .markdown-content em {
      font-style: italic;
    }

    .markdown-content br {
      content: "";
      display: block;
      margin: 0.25rem 0;
    }

    
    
  `;let bs=La;Io([y({type:String})],bs.prototype,"content");Io([y({type:String})],bs.prototype,"html");customElements.define("ask-markdown",bs);var dd=Object.defineProperty,Ts=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&dd(e,r,s),s};const Da=class Da extends X{constructor(){super(...arguments),this.accept="",this.multiple=!0,this.disabled=!1,this.files=""}_handleKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleClick())}_handleClick(){this.disabled||this._input.click()}_handleFileChange(e){const r=e.target,n=r.files;if(!n||n.length===0)return;const s=[];for(let l=0;l<n.length;l++){const o=n[l],c={name:o.name,size:o.size,type:o.type};o.type.startsWith("image/")&&(c.src=URL.createObjectURL(o)),s.push(c)}const i=[...this._parsedFiles(),...s];this.files=JSON.stringify(i),r.value="",this.dispatchEvent(new CustomEvent("ask-files-select",{detail:{files:s},bubbles:!0,composed:!0}))}_handleRemove(e){const r=e.detail.name,n=this._parsedFiles().filter(s=>s.name!==r);this.files=JSON.stringify(n),this.dispatchEvent(new CustomEvent("ask-file-remove",{detail:{name:r},bubbles:!0,composed:!0}))}_parsedFiles(){try{const e=JSON.parse(this.files);if(Array.isArray(e))return e}catch{}return[]}render(){const e=this._parsedFiles();return g`
      <div class="dropzone ${this.disabled?"dropzone--disabled":""}" role="button" tabindex="0" aria-disabled=${this.disabled} @click=${this._handleClick} @keydown=${this._handleKeydown}>
        <div class="dropzone-icon">📎</div>
        <div>Click to attach files</div>
        <input
          class="dropzone-input"
          type="file"
          ?multiple=${this.multiple}
          accept=${this.accept}
          ?disabled=${this.disabled}
          @change=${this._handleFileChange}
        />
      </div>
      ${e.length>0?g`
            <div class="file-list">
              ${e.map(r=>g`
                  <ask-attachment
                    name=${r.name}
                    size=${r.size}
                    type=${r.type}
                    src=${r.src||""}
                    removable
                    @ask-remove=${this._handleRemove}
                  ></ask-attachment>
                `)}
            </div>
          `:""}
    `}};Da.styles=oe`${le}

    :host {
      display: block;
    }

    .dropzone {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--ask-radius, 0.5rem);
      padding: 1.5rem 1rem;
      border: 2px dashed var(--ask-border-strong, #d4d4d4);
      border-radius: 0.75rem;
      background: var(--ask-surface-muted, #fafafa);
      color: var(--ask-text-muted, #a3a3a3);
      font-size: 0.8125rem;
      cursor: pointer;
      transition: border-color 0.15s, background 0.15s;
      text-align: center;
    }
    .dropzone:hover {
      border-color: var(--ask-text-muted, #a3a3a3);
      background: var(--ask-surface-hover, #f5f5f5);
    }
    .dropzone:has(input:focus-visible) {
      border-color: var(--ask-text-muted, #a3a3a3);
    }
    .dropzone--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .dropzone-icon {
      font-size: 1.5rem;
    }

    .dropzone-input {
      display: none;
    }

    .file-list {
      display: flex;
      flex-wrap: wrap;
      gap: var(--ask-radius, 0.5rem);
      margin-top: var(--ask-radius, 0.5rem);
    }

    
    
  `;let qt=Da;Ts([y({type:String})],qt.prototype,"accept");Ts([y({type:Boolean})],qt.prototype,"multiple");Ts([y({type:Boolean})],qt.prototype,"disabled");Ts([y({type:String})],qt.prototype,"files");Ts([un(".dropzone-input",!0)],qt.prototype,"_input");customElements.define("ask-file-upload",qt);var ud=Object.defineProperty,pa=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&ud(e,r,s),s};function mi(t){const e=Date.now()-new Date(t).getTime(),r=Math.floor(e/1e3);if(r<60)return"just now";const n=Math.floor(r/60);if(n<60)return`${n}m ago`;const s=Math.floor(n/60);if(s<24)return`${s}h ago`;const a=Math.floor(s/24);return a<30?`${a}d ago`:new Date(t).toLocaleDateString()}const Ba=class Ba extends X{constructor(){super(...arguments),this.items="",this.activeId="",this._search=""}_parsedItems(){try{const e=JSON.parse(this.items);if(Array.isArray(e))return e}catch{}return[]}_handleSearch(e){this._search=e.target.value}_handleItemKeydown(e,r){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleSelect(r))}_handleSelect(e){this.dispatchEvent(new CustomEvent("ask-select",{detail:{id:e},bubbles:!0,composed:!0}))}render(){const e=this._parsedItems(),r=this._search.toLowerCase(),n=e.filter(i=>r?i.title.toLowerCase().includes(r)||`${i.messageCount||0} messages`.includes(r):!0),s=n.some(i=>i.status!=="closed"),a=n.some(i=>i.status==="closed");return e.length===0?g`
        <div class="empty-state">
          <p>No conversations yet</p>
        </div>
      `:g`
      <input
        class="search-input"
        type="search"
        placeholder="Search conversations..."
        @input=${this._handleSearch}
        .value=${this._search}
      />

      ${s?g`
            <div class="section-header">Open</div>
            ${n.filter(i=>i.status!=="closed").map(i=>g`
                  <div
                    class="conversation-item ${i.id===this.activeId?"conversation-item--active":""}"
        role="button"
        tabindex="0"
        @click=${()=>this._handleSelect(i.id)}
        @keydown=${l=>this._handleItemKeydown(l,i.id)}
                  >
                    <div class="item-content">
                      <div class="item-title">${i.title||"Untitled"}</div>
                      <div class="item-meta">
                        <span>${i.messageCount||0} messages</span>
                        ${i.timestamp?g`<span>·</span><span>${mi(i.timestamp)}</span>`:""}
                      </div>
                    </div>
                  </div>
                `)}
          `:""}

      ${a?g`
            <div class="section-header">Closed</div>
            ${n.filter(i=>i.status==="closed").map(i=>g`
                  <div
                    class="conversation-item ${i.id===this.activeId?"conversation-item--active":""}"
        role="button"
        tabindex="0"
        @click=${()=>this._handleSelect(i.id)}
        @keydown=${l=>this._handleItemKeydown(l,i.id)}
                  >
                    <div class="item-content">
                      <div class="item-title">${i.title||"Untitled"}</div>
                      <div class="item-meta">
                        <span>${i.messageCount||0} messages</span>
                        ${i.timestamp?g`<span>·</span><span>${mi(i.timestamp)}</span>`:""}
                      </div>
                    </div>
                  </div>
                `)}
          `:""}
    `}};Ba.styles=oe`${le}

    :host {
      display: block;
    }

    .search-input {
      width: 100%;
      padding: var(--ask-radius, 0.5rem) 0.75rem;
      margin-bottom: var(--ask-radius, 0.5rem);
      border-radius: var(--ask-radius, 0.5rem);
      border: 1px solid var(--ask-border, #e5e5e5);
      background: var(--ask-surface, #fff);
      color: var(--ask-text, #171717);
      font-size: 0.8125rem;
      outline: none;
      box-sizing: border-box;
    }
    .search-input::placeholder {
      color: var(--ask-text-muted, #a3a3a3);
    }
    .search-input:focus {
      border-color: var(--ask-text-muted, #a3a3a3);
    }

    .section-header {
      padding: var(--ask-radius, 0.5rem) 0.625rem 0.25rem;
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--ask-text-muted, #a3a3a3);
    }

    .conversation-item {
      display: flex;
      align-items: center;
      gap: var(--ask-radius, 0.5rem);
      padding: var(--ask-radius, 0.5rem) 0.625rem;
      border-radius: var(--ask-radius-small, 0.375rem);
      cursor: pointer;
      text-decoration: none;
      color: var(--ask-text, #171717);
      margin-bottom: 1px;
      transition: background 0.1s;
      border: 1px solid transparent;
    }
    .conversation-item:hover {
      background: var(--ask-surface-hover, #f5f5f5);
    }
    .conversation-item--active {
      background: var(--ask-border, #e5e5e5);
      border-color: var(--ask-border-strong, #d4d4d4);
    }

    .item-content {
      flex: 1;
      min-width: 0;
    }
    .item-title {
      font-size: 0.8125rem;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .item-meta {
      font-size: 0.6875rem;
      color: var(--ask-text-muted, #a3a3a3);
      margin-top: 0.125rem;
      display: flex;
      gap: 0.25rem;
    }

    .empty-state {
      padding: 2rem 1rem;
      text-align: center;
      color: var(--ask-text-muted, #a3a3a3);
      font-size: 0.8125rem;
    }

    
    
  `;let Ur=Ba;pa([y({type:String})],Ur.prototype,"items");pa([y({type:String})],Ur.prototype,"activeId");pa([As()],Ur.prototype,"_search");customElements.define("ask-conversation-list",Ur);var fd=Object.defineProperty,Vr=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&fd(e,r,s),s};const Ha=class Ha extends X{constructor(){super(...arguments),this.groups="",this.activeId="",this.newChatLabel="New chat",this.storageKey="ask-sidebar",this._collapsed={},this._expanded={}}connectedCallback(){super.connectedCallback(),this._loadState()}_loadState(){try{const e=sessionStorage.getItem(this.storageKey);if(!e)return;const r=JSON.parse(e);this._collapsed=r.collapsed||{},this._expanded=r.expanded||{}}catch{}}_saveState(){try{sessionStorage.setItem(this.storageKey,JSON.stringify({collapsed:this._collapsed,expanded:this._expanded}))}catch{}}_parsedGroups(){try{const e=JSON.parse(this.groups);if(Array.isArray(e))return e}catch{}return[]}_emit(e,r){this.dispatchEvent(new CustomEvent(e,{detail:r,bubbles:!0,composed:!0}))}_group(e){return this._parsedGroups().find(r=>r.id===e)}_findNode(e){for(const r of this._parsedGroups()){const n=this._searchNode(r.nodes,e);if(n)return n}}_searchNode(e,r){for(const n of e){if(n.id===r)return n;const s=this._searchNode(n.children??[],r);if(s)return s}}_toggleGroup(e){this._collapsed={...this._collapsed,[e]:!this._isCollapsed(e)},this._saveState()}_toggleNode(e){const r=this._findNode(e),n=r?!this._isExpanded(r):!(this._expanded[e]??!1);this._expanded={...this._expanded,[e]:n},this._saveState()}_isCollapsed(e){var r;return this._collapsed[e]??((r=this._group(e))==null?void 0:r.collapsed)??!1}_isExpanded(e){return this._expanded[e.id]??this._containsActive(e)}_containsActive(e){return e.id===this.activeId?!0:(e.children??[]).some(r=>r.id===this.activeId)}_node(e,r){if((e.children??[]).length>0){const s=this._isExpanded(e);return g`
        <div>
          <button
            class="node node--indent-${r} ${this._containsActive(e)?"node--active":""}"
            @click=${()=>this._toggleNode(e.id)}
          >
            <span class="chevron ${s?"chevron--open":""}">▸</span>
            <span class="node-dot ${e.kind==="site"?"node-dot--accent":""}"></span>
            <span class="node-content">
              <span class="node-label">${e.label}</span>
              ${e.sub?g`<span class="node-sub">${e.sub}</span>`:""}
            </span>
          </button>
          ${s?g`${(e.children??[]).map(a=>this._node(a,r+1))}`:""}
        </div>
      `}return g`
      <button
        class="node node--indent-${r} ${e.id===this.activeId?"node--active":""}"
        @click=${()=>this._emit("ask-select",{id:e.id})}
      >
        <span class="node-dot ${e.kind==="site"?"node-dot--accent":""}"></span>
        <span class="node-content">
          <span class="node-label">${e.label}</span>
          ${e.sub?g`<span class="node-sub">${e.sub}</span>`:""}
        </span>
      </button>
    `}render(){const e=this._parsedGroups();return g`
      <button class="new-chat" @click=${()=>this._emit("ask-new-chat",{})}>
        ＋ ${this.newChatLabel}
      </button>

      ${e.length===0?g`<div class="empty">No conversations yet</div>`:e.map(r=>g`
              <div class="group">
                <button class="group-header" @click=${()=>this._toggleGroup(r.id)}>
                  <span class="chevron ${this._isCollapsed(r.id)?"":"chevron--open"}">▸</span>
                  ${r.label}
                </button>
                ${this._isCollapsed(r.id)?"":g`<div class="group-nodes">${r.nodes.map(n=>this._node(n,0))}</div>`}
              </div>
            `)}
    `}};Ha.styles=oe`${le}

    :host {
      display: block;
      font-family: var(--ask-sidebar-font, inherit);
      color: var(--ask-text, #171717);
    }

    .new-chat {
      display: flex;
      align-items: center;
      gap: var(--ask-radius, 0.5rem);
      width: 100%;
      padding: var(--ask-radius, 0.5rem) 0.625rem;
      margin-bottom: var(--ask-radius, 0.5rem);
      border-radius: var(--ask-radius, 0.5rem);
      border: 1px solid var(--ask-border, #e5e5e5);
      background: var(--ask-text, #171717);
      color: var(--ask-text-inverse, #fafafa);
      font-size: 0.8125rem;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.1s;
    }
    .new-chat:hover {
      opacity: 0.9;
    }

    .group {
      margin-bottom: 0.25rem;
    }
    .group-header {
      display: flex;
      align-items: center;
      gap: var(--ask-radius-small, 0.375rem);
      width: 100%;
      padding: var(--ask-radius-small, 0.375rem) 0.625rem;
      border: 0;
      background: transparent;
      color: var(--ask-text-muted, #a3a3a3);
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      text-align: left;
      cursor: pointer;
      border-radius: var(--ask-radius-small, 0.375rem);
    }
    .group-header:hover {
      background: var(--ask-surface-hover, #f5f5f5);
      color: var(--ask-text, #171717);
    }
    .chevron {
      display: inline-block;
      font-size: 0.625rem;
      transition: transform 0.12s;
      color: var(--ask-text-muted, #a3a3a3);
    }
    .chevron--open {
      transform: rotate(90deg);
    }

    .group-nodes {
      margin-top: 1px;
    }

    .node {
      display: flex;
      align-items: center;
      gap: var(--ask-radius, 0.5rem);
      width: 100%;
      padding: var(--ask-radius, 0.5rem) 0.625rem;
      border: 1px solid transparent;
      border-radius: var(--ask-radius-small, 0.375rem);
      background: transparent;
      color: var(--ask-text, #171717);
      font-size: 0.8125rem;
      text-align: left;
      cursor: pointer;
      margin-bottom: 1px;
      transition: background 0.1s;
      box-sizing: border-box;
    }
    .node:hover {
      background: var(--ask-surface-hover, #f5f5f5);
    }
    .node--active {
      background: var(--ask-surface-active, #e5e5e5);
      border-color: var(--ask-border-strong, #d4d4d4);
    }
    .node--indent-1 {
      padding-left: 1.5rem;
    }
    .node--indent-2 {
      padding-left: 2.25rem;
    }

    .node-content {
      flex: 1;
      min-width: 0;
    }
    .node-label {
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .node-sub {
      font-size: 0.6875rem;
      color: var(--ask-text-muted, #a3a3a3);
      margin-top: 0.125rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .node-dot {
      width: 6px;
      height: 6px;
      border-radius: var(--ask-radius-pill, 9999px);
      flex-shrink: 0;
      background: var(--ask-text-muted, #a3a3a3);
    }
    .node-dot--accent {
      background: var(--ask-accent, #c2410c);
    }

    .empty {
      padding: 1rem 0.625rem;
      font-size: 0.75rem;
      color: var(--ask-text-muted, #a3a3a3);
    }

    
    
  `;let Et=Ha;Vr([y({type:String})],Et.prototype,"groups");Vr([y({type:String,attribute:"active-id"})],Et.prototype,"activeId");Vr([y({type:String,attribute:"new-chat-label"})],Et.prototype,"newChatLabel");Vr([y({type:String,attribute:"storage-key"})],Et.prototype,"storageKey");Vr([As()],Et.prototype,"_collapsed");Vr([As()],Et.prototype,"_expanded");customElements.define("ask-sidebar",Et);var pd=Object.defineProperty,ha=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&pd(e,r,s),s};const Ua=class Ua extends X{constructor(){super(...arguments),this.recording=!1,this.disabled=!1,this._elapsed=0,this._timerId=null}_handleClick(){this.disabled||(this.recording?this._stopRecording():this._startRecording())}_startRecording(){this.recording=!0,this._elapsed=0,this._timerId=setInterval(()=>{this._elapsed++},1e3),this.dispatchEvent(new CustomEvent("ask-record-start",{bubbles:!0,composed:!0}))}_stopRecording(){this.recording=!1,this._timerId&&(clearInterval(this._timerId),this._timerId=null),this.dispatchEvent(new CustomEvent("ask-record-stop",{detail:{elapsed:this._elapsed},bubbles:!0,composed:!0}))}disconnectedCallback(){super.disconnectedCallback(),this._timerId&&clearInterval(this._timerId)}_formatTime(e){const r=Math.floor(e/60),n=e%60;return`${r}:${n.toString().padStart(2,"0")}`}render(){return g`
      <button
        class="voice-btn ${this.recording?"voice-btn--recording":""}"
        @click=${this._handleClick}
        ?disabled=${this.disabled}
        aria-label=${this.recording?"Stop recording":"Start recording"}
      >
        ${this.recording?"⏹":"🎤"}
      </button>
      ${this.recording?g`<span class="voice-timer">${this._formatTime(this._elapsed)}</span>`:""}
    `}};Ua.styles=oe`${le}

    :host {
      display: inline-flex;
    }

    .voice-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: var(--ask-radius-pill, 9999px);
      border: 1px solid var(--ask-border, #e5e5e5);
      background: var(--ask-surface, #fff);
      color: var(--ask-text-faint, #525252);
      cursor: pointer;
      font-size: 1.125rem;
      transition: background 0.15s, border-color 0.15s, box-shadow 0.15s;
      position: relative;
    }
    .voice-btn:hover:not(:disabled) {
      background: var(--ask-surface-hover, #f5f5f5);
    }
    .voice-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .voice-btn--recording {
      background: var(--ask-danger-bg, #fef2f2);
      border-color: var(--ask-danger-text, #fca5a5);
      color: var(--ask-voice-recording-text, #ef4444);
      animation: voice-pulse 1.5s ease-in-out infinite;
    }

    .voice-timer {
      font-size: 0.75rem;
      font-family: monospace;
      color: var(--ask-voice-timer, #ef4444);
      margin-left: var(--ask-radius, 0.5rem);
      align-self: center;
    }

    @keyframes voice-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.3); }
      50% { box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); }
    }

    
    
  `;let Fr=Ua;ha([y({type:Boolean,reflect:!0})],Fr.prototype,"recording");ha([y({type:Boolean})],Fr.prototype,"disabled");ha([As()],Fr.prototype,"_elapsed");customElements.define("ask-voice-input",Fr);var hd=Object.defineProperty,Lo=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&hd(e,r,s),s};const Fa=class Fa extends X{constructor(){super(...arguments),this.visible=!1,this.badge=0}_handleClick(){this.dispatchEvent(new CustomEvent("ask-scroll",{bubbles:!0,composed:!0}))}render(){return g`
      <button
        class="scroll-btn ${this.visible?"scroll-btn--visible":""}"
        @click=${this._handleClick}
        aria-label="Scroll to bottom"
        ?hidden=${!this.visible}
      >
        <svg class="scroll-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
        ${this.badge>0?g`<span class="scroll-badge">${this.badge>99?"99+":this.badge}</span>`:""}
      </button>
    `}};Fa.styles=oe`${le}

    :host {
      display: block;
      position: sticky;
      bottom: 0;
      z-index: 10;
      pointer-events: none;
    }

    .scroll-btn {
      position: absolute;
      bottom: var(--ask-radius, 0.5rem);
      right: var(--ask-radius, 0.5rem);
      width: 2.25rem;
      height: 2.25rem;
      border-radius: var(--ask-radius-pill, 9999px);
      border: 1px solid var(--ask-border, #e5e5e5);
      background: var(--ask-surface, #fff);
      color: var(--ask-text-faint, #525252);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      pointer-events: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s ease, transform 0.2s ease;
      opacity: 0;
      transform: translateY(var(--ask-radius, 0.5rem));
    }
    .scroll-btn--visible {
      opacity: 1;
      transform: translateY(0);
    }
    .scroll-btn:hover {
      background: var(--ask-surface-hover, #f5f5f5);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .scroll-icon {
      width: 1.125rem;
      height: 1.125rem;
    }

    .scroll-badge {
      position: absolute;
      top: -var(--ask-radius-small, 0.375rem);
      right: -var(--ask-radius-small, 0.375rem);
      min-width: 1.125rem;
      height: 1.125rem;
      border-radius: var(--ask-radius-pill, 9999px);
      background: var(--ask-scroll-badge-bg, #ef4444);
      color: var(--ask-surface, #fff);
      font-size: 0.625rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 0.25rem;
      line-height: 1;
    }

    
    
  `;let _s=Fa;Lo([y({type:Boolean,reflect:!0})],_s.prototype,"visible");Lo([y({type:Number})],_s.prototype,"badge");customElements.define("ask-scroll-bottom",_s);var vd=Object.defineProperty,vn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&vd(e,r,s),s};const qa=class qa extends X{constructor(){super(...arguments),this.verificationUri="",this.userCode="",this.pending=!1,this.expiresLabel=""}_authorize(){this.dispatchEvent(new CustomEvent("ask-authorize",{bubbles:!0,composed:!0}))}render(){return g`
      ${this.pending?g`<div class="notice">
            Not authorized yet — open the link, enter the code, then try again.
          </div>`:""}

      <ol>
        <li>
          <span style="font-weight:500">1. Open this link</span> on any device
          with a browser:
          <div>
            <a href=${this.verificationUri} target="_blank" rel="noopener">${this.verificationUri}</a>
          </div>
        </li>
        <li>
          <span style="font-weight:500">2. Enter this code:</span>
          <div class="code">${this.userCode}</div>
        </li>
        <li>
          <span style="font-weight:500">3. Authorize, then come back and finish:</span>
          <div>
            <button class="authorize" @click=${this._authorize} part="authorize-button">
              I've authorized — complete
            </button>
          </div>
        </li>
      </ol>

      ${this.expiresLabel?g`<p class="meta">The code expires ${this.expiresLabel}. Your tokens are encrypted at rest.</p>`:""}
    `}};qa.styles=oe`
    ${le}

    :host {
      display: block;
      font-family: var(--ask-font, inherit);
      color: var(--ask-text, #171717);
    }

    .notice {
      margin-bottom: var(--ask-radius, 0.5rem);
      padding: 0.625rem 1rem;
      border-radius: var(--ask-radius, 0.5rem);
      border: 1px solid var(--ask-warning-border, #fcd34d);
      background: var(--ask-warning-bg, #fffbeb);
      color: var(--ask-warning-text, #92400e);
      font-size: 0.8125rem;
    }

    ol {
      margin: 0;
      padding-left: 1.25rem;
      display: grid;
      gap: var(--ask-spacing, 0.75rem);
      font-size: 0.875rem;
      line-height: 1.5;
    }

    a {
      color: var(--ask-accent, #c2410c);
      text-decoration: underline;
      word-break: break-all;
    }

    .code {
      margin-top: 0.25rem;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.2em;
      color: var(--ask-accent, #c2410c);
    }

    .authorize {
      margin-top: 0.375rem;
      padding: 0.5rem 1rem;
      border: 0;
      border-radius: var(--ask-radius, 0.5rem);
      background: var(--ask-accent, #c2410c);
      color: var(--ask-accent-text, #fafafa);
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.1s;
    }
    .authorize:hover {
      opacity: 0.9;
    }

    .meta {
      margin-top: 1rem;
      font-size: 0.75rem;
      color: var(--ask-text-muted, #a3a3a3);
    }
  `;let vr=qa;vn([y({type:String,attribute:"verification-uri"})],vr.prototype,"verificationUri");vn([y({type:String,attribute:"user-code"})],vr.prototype,"userCode");vn([y({type:Boolean,reflect:!0})],vr.prototype,"pending");vn([y({type:String,attribute:"expires-label"})],vr.prototype,"expiresLabel");customElements.define("ask-device-auth",vr);var md=Object.defineProperty,va=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&md(e,r,s),s};const gi={explore:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
    </svg>`,build:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>`,review:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12a9 9 0 1 1-9-9"/>
      <path d="M12 6v6l3 3"/>
    </svg>`,fix:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="8" y="8" width="8" height="8" rx="1.5"/>
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>
    </svg>`},Ka=class Ka extends X{constructor(){super(...arguments),this.variant="explore",this.label="",this.description=""}_accent(){const e={explore:"var(--ask-prompt-explore, #4f9cf9)",build:"var(--ask-prompt-build, #a78bfa)",review:"var(--ask-prompt-review, #34d399)",fix:"var(--ask-prompt-fix, #fb923c)",custom:"var(--ask-prompt-custom, var(--ask-accent, #c2410c))"};return e[this.variant]??e.custom}_icon(){return this.variant==="custom"?ue:g`<span class="icon" part="icon">${Bn(gi[this.variant]??gi.explore)}</span>`}_click(){this.dispatchEvent(new CustomEvent("ask-prompt",{detail:{label:this.label,variant:this.variant},bubbles:!0,composed:!0}))}render(){return g`
      <button class="card" style="--ask-prompt-accent: ${this._accent()}" @click=${this._click}>
        ${this.variant==="custom"?g`<span class="icon" part="icon"><slot></slot></span>`:this._icon()}
        <span class="label">${this.label}</span>
        ${this.description?g`<span class="description">${this.description}</span>`:ue}
      </button>
    `}};Ka.styles=oe`${le}

    :host {
      display: block;
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
      width: 100%;
      padding: 1rem;
      border: 1px solid var(--ask-border, #e5e5e5);
      border-radius: var(--ask-radius, 0.5rem);
      background: var(--ask-surface-muted, #f5f5f5);
      color: var(--ask-text, #171717);
      font-family: var(--ask-font, inherit);
      font-size: var(--ask-font-size, 0.8125rem);
      text-align: left;
      cursor: pointer;
      transition: border-color 0.15s, background 0.15s;
    }
    .card:hover {
      border-color: var(--ask-border-strong, #d4d4d4);
      background: var(--ask-surface-hover, #f5f5f5);
    }
    .card:focus-visible {
      outline: 2px solid var(--ask-focus, #a3a3a3);
      outline-offset: 1px;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      color: var(--ask-prompt-accent, var(--ask-accent, #c2410c));
    }
    .icon svg {
      width: 100%;
      height: 100%;
    }

    .label {
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.35;
      color: var(--ask-text, #171717);
    }

    .description {
      margin-top: 0.25rem;
      font-size: 0.75rem;
      color: var(--ask-text-muted, #a3a3a3);
      line-height: 1.4;
    }
  `;let qr=Ka;va([y({type:String})],qr.prototype,"variant");va([y({type:String})],qr.prototype,"label");va([y({type:String})],qr.prototype,"description");customElements.define("ask-prompt-card",qr);var gd=Object.defineProperty,bd=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&gd(e,r,s),s};const Wa=class Wa extends X{constructor(){super(...arguments),this.heading=""}render(){return g`
      <div class="empty">
        <span class="icon" part="icon">
          <slot name="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17.5 19a4.5 4.5 0 1 0-.42-8.98 6 6 0 1 0-10.55 5.29"/>
              <path d="M8 14l3 3 5-6"/>
            </svg>
          </slot>
        </span>
        ${this.heading?g`<h2 class="heading">${this.heading}</h2>`:""}
        <div class="body" part="body"><slot></slot></div>
      </div>
    `}};Wa.styles=oe`${le}

    :host {
      display: block;
    }

    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.25rem;
      padding: 2rem 1rem;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      border-radius: var(--ask-radius-pill, 9999px);
      border: 1px solid var(--ask-border, #e5e5e5);
      color: var(--ask-text-muted, #a3a3a3);
    }
    .icon svg {
      width: 1.75rem;
      height: 1.75rem;
    }

    .heading {
      font-size: 1.75rem;
      font-weight: 400;
      line-height: 1.3;
      color: var(--ask-text, #171717);
      max-width: 30rem;
    }

    .body {
      width: 100%;
      max-width: 52rem;
    }
  `;let Js=Wa;bd([y({type:String})],Js.prototype,"heading");customElements.define("ask-empty-state",Js);const Se="";async function Oe(t){if(!t.ok){const e=await t.json().catch(()=>({}));throw new Error(e.error||`HTTP ${t.status}`)}return t.json()}async function _d(){return Oe(await fetch(`${Se}/api/config`))}async function yd(){return Oe(await fetch(`${Se}/api/workspaces`))}async function kd(t){const e=encodeURIComponent(t);return Oe(await fetch(`${Se}/api/workspaces/${e}/agents`))}async function wd(t){return Oe(await fetch(`${Se}/api/workspaces`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t})}))}async function Hn(){return Oe(await fetch(`${Se}/api/conversations`))}async function xd(t){return Oe(await fetch(`${Se}/api/conversations/${t}`))}async function $d(t,e){await Oe(await fetch(`${Se}/api/conversations/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e})}))}async function Ed(t){await Oe(await fetch(`${Se}/api/conversations/${t}`,{method:"DELETE"}))}async function Sd(t){await Oe(await fetch(`${Se}/api/conversations/${t}/archive`,{method:"POST"}))}async function Cd(t,e){await Oe(await fetch(`${Se}/api/conversations/${t}/approvals/${e}/approve`,{method:"POST"}))}async function Ad(t,e){await Oe(await fetch(`${Se}/api/conversations/${t}/approvals/${e}/reject`,{method:"POST"}))}async function Pd(t){await Oe(await fetch(`${Se}/api/conversations/${t}/approvals/approve-all`,{method:"POST"}))}async function Od(t){await Oe(await fetch(`${Se}/api/conversations/${t}/plan/approve`,{method:"POST"}))}async function Nd(t){await Oe(await fetch(`${Se}/api/conversations/${t}/plan/reject`,{method:"POST"}))}async function zd(t){await Oe(await fetch(`${Se}/api/conversations/${t}/abort`,{method:"POST"}))}function Td(t,e,r,n,s,a,i,l){const o=new AbortController;return(async()=>{var c,d;try{const f=await fetch(`${Se}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,conversation_id:e||void 0,model:r||void 0,workspace:n||void 0,agent:s||void 0}),signal:o.signal});if(!f.ok||!f.body)throw new Error(`HTTP ${f.status}`);const h=f.body.getReader(),m=new TextDecoder;let b="";for(;;){const{done:z,value:v}=await h.read();if(z)break;b+=m.decode(v,{stream:!0});let w;for(;(w=b.indexOf(`

`))!==-1;){const C=b.slice(0,w);b=b.slice(w+2);const T=(c=C.match(/^event: (.+)$/m))==null?void 0:c[1],I=(d=C.match(/^data: (.+)$/m))==null?void 0:d[1];if(!T||I===void 0)continue;if(T==="conversation.created"){i(I);continue}let Z={};try{Z=JSON.parse(I)}catch{}a({type:T,data:Z})}}}catch(f){f.name!=="AbortError"&&a({type:"error",data:{error:f.message}})}finally{l()}})(),o}function Md(t,e,r){switch(e){case"message.delta":t.text+=r.delta??"";break;case"message.thinking":t.thinking+=r.delta??"";break;case"tool.start":{const n=String(r.id??`${r.name}-${t.tools.size}`);t.tools=new Map(t.tools).set(n,{id:n,name:r.name,args:r.args,status:"running"});break}case"tool.delta":{const n=String(r.id),s=t.tools.get(n);s&&(t.tools=new Map(t.tools).set(n,{...s,partial:(s.partial??"")+(r.partial??"")}));break}case"tool.end":{const n=String(r.id),s=t.tools.get(n)??{id:n,name:r.name,status:"done"};t.tools=new Map(t.tools).set(n,{...s,output:r.output,isError:r.isError,durationMs:r.durationMs,status:r.isError?"failed":"done"});break}case"approval.required":t.approvals.push({id:r.id,toolName:r.toolName,args:r.args,message:r.message,autoApprovable:r.autoApprovable,status:"pending"});break;case"approval.updated":{const n=t.approvals.find(s=>s.id===r.id);n&&(n.status=r.status);break}case"plan.proposed":t.plan=r.plan,t.planStatus="proposed";break;case"plan.approved":t.plan=r.plan??t.plan,t.planStatus="approved";break;case"plan.rejected":t.plan=r.plan??t.plan,t.planStatus="rejected";break;case"todos.updated":t.todos=r.todos??[];break;case"turn.completed":t.status="completed",r.response&&!t.text&&(t.text=r.response);break;case"turn.failed":t.status="failed";break;case"turn.aborted":t.status="aborted";break}}function Zr(){return{text:"",thinking:"",tools:new Map,approvals:[],todos:[],plan:null,planStatus:null,status:"streaming"}}var jd=B('<div class="block svelte-1l486hy"><ask-todo-list></ask-todo-list></div>',2),Rd=B('<div class="block svelte-1l486hy"><ask-plan></ask-plan></div>',2),Id=B('<span class="tool-status running svelte-1l486hy">running…</span>'),Ld=B('<span class="tool-status failed svelte-1l486hy">failed</span>'),Dd=B('<span class="tool-status done svelte-1l486hy"> </span>'),Bd=B('<pre class="tool-args svelte-1l486hy"> </pre>'),Hd=B("<ask-diff></ask-diff>",2),Ud=B("<ask-terminal-output></ask-terminal-output>",2),Fd=B('<div class="tool svelte-1l486hy"><div class="tool-head svelte-1l486hy"><span class="tool-icon svelte-1l486hy"> </span> <span class="tool-name svelte-1l486hy"> </span> <!></div> <!> <!></div>'),qd=B('<div class="block tools svelte-1l486hy"></div>'),Kd=B('<button class="approve-all svelte-1l486hy"> </button>'),Wd=B("<ask-tool-approval></ask-tool-approval>",2),Vd=B('<div class="block approvals svelte-1l486hy"><!> <!></div>'),Yd=B('<div class="tool-stream svelte-1l486hy"><!> <!> <!> <!></div>');function Do(t,e){if(new.target)return Ot({component:Do,...t});vt(e,!0);let r=te(e,"turn"),n=te(e,"conversationId");const s=Ge(()=>Array.from(r().tools.values())),a=Ge(()=>r().approvals.filter($=>$.status==="pending"));function i($){switch($){case"bash":return"⌘";case"read":return"👁";case"write":return"✎";case"edit":return"✎";case"grep":return"🔎";case"glob":return"🗂";case"apply_patch":return"▤";case"todo_write":return"☑";default:return"⚙"}}function l($){return $.startsWith("diff --git")||$.includes("--- a/")&&$.includes("+++ b/")||$.includes(`
@@ -`)}function o($){return $.args===void 0||$.args===null?"":typeof $.args=="string"?$.args:JSON.stringify($.args,null,2)}async function c($){if(!n())return;await Cd(n(),$);const R=r().approvals.find(_=>_.id===$);R&&(R.status="approved")}async function d($){if(!n())return;await Ad(n(),$);const R=r().approvals.find(_=>_.id===$);R&&(R.status="rejected")}async function f(){if(n()){await Pd(n());for(const $ of r().approvals)$.status==="pending"&&($.status="approved")}}async function h(){n()&&(await Od(n()),r().planStatus="approved")}async function m(){n()&&(await Nd(n()),r().planStatus="rejected")}var b={get turn(){return r()},set turn($){r($),G()},get conversationId(){return n()},set conversationId($){n($),G()},$set:Pt,$on:($,R)=>At(e,$,R)},z=Yd(),v=E(z);{var w=$=>{var R=jd(),_=E(R);U(()=>ce(_,"todos",r().todos)),Yt(_,1,"svelte-1l486hy"),x(R),M($,R)};se(v,$=>{r().todos.length>0&&$(w)})}var C=O(v,2);{var T=$=>{var R=Rd(),_=E(R);U(()=>ce(_,"plan",r().plan)),U(()=>ce(_,"status",r().planStatus)),Yt(_,1,"svelte-1l486hy"),x(R),Ee("plan-approved",_,h),Ee("plan-rejected",_,m),M($,R)};se(C,$=>{r().plan!==null&&r().planStatus&&$(T)})}var I=O(C,2);{var Z=$=>{var R=qd();ls(R,21,()=>u(s),_=>_.id,(_,j)=>{var ae=Fd(),S=E(ae),N=E(S),V=E(N,!0);x(N);var A=O(N,2),D=E(A,!0);x(A);var $e=O(A,2);{var ye=F=>{var ve=Id();M(F,ve)},et=F=>{var ve=qs(),ot=is(ve);{var Wt=Ce=>{var P=Ld();M(Ce,P)},Yr=Ce=>{var P=Dd(),J=E(P);x(P),U(de=>fe(J,`done${de??""}`),[()=>u(j).durationMs?` · ${(u(j).durationMs/1e3).toFixed(1)}s`:""]),M(Ce,P)};se(ot,Ce=>{u(j).isError?Ce(Wt):Ce(Yr,!1)},!0)}M(F,ve)};se($e,F=>{u(j).status==="running"?F(ye):F(et,!1)})}x(S);var Ke=O(S,2);{var je=F=>{var ve=Bd(),ot=E(ve,!0);x(ve),U(Wt=>fe(ot,Wt),[()=>o(u(j))]),M(F,ve)};se(Ke,F=>{o(u(j))&&F(je)})}var pe=O(Ke,2);{var ie=F=>{var ve=qs(),ot=is(ve);{var Wt=Ce=>{var P=Hd();U(()=>ce(P,"diff",u(j).output)),Yt(P,1,"svelte-1l486hy"),M(Ce,P)},Yr=Ce=>{var P=Ud();U(()=>ce(P,"output",u(j).output)),ce(P,"max-lines",6),Yt(P,1,"svelte-1l486hy"),M(Ce,P)};se(ot,Ce=>{l(u(j).output)?Ce(Wt):Ce(Yr,!1)})}M(F,ve)};se(pe,F=>{u(j).status!=="running"&&u(j).output&&F(ie)})}x(ae),U(F=>{fe(V,F),fe(D,u(j).name)},[()=>i(u(j).name)]),M(_,ae)}),x(R),M($,R)};se(I,$=>{u(s).length>0&&$(Z)})}var Q=O(I,2);{var ne=$=>{var R=Vd(),_=E(R);{var j=S=>{var N=Kd();N.__click=f;var V=E(N);x(N),U(()=>fe(V,`Approve all (${u(a).length??""})`)),M(S,N)};se(_,S=>{u(a).length>1&&S(j)})}var ae=O(_,2);ls(ae,17,()=>r().approvals,S=>S.id,(S,N)=>{var V=Wd();U(()=>ce(V,"action-id",u(N).id)),U(()=>ce(V,"tool-name",u(N).toolName)),U(()=>ce(V,"args",typeof u(N).args=="string"?u(N).args:JSON.stringify(u(N).args??{},null,2))),U(()=>ce(V,"message",u(N).message??"")),U(()=>ce(V,"status",u(N).status)),Yt(V,1,"svelte-1l486hy"),Ee("approval-approved",V,()=>c(u(N).id)),Ee("approval-rejected",V,()=>d(u(N).id)),M(S,V)}),x(R),M($,R)};se(Q,$=>{r().approvals.length>0&&$(ne)})}return x(z),M(t,z),mt(b)}Wr(["click"]);var Jd=B('<details class="thinking svelte-kpbn6d"><summary class="svelte-kpbn6d"><span class="thinking-label svelte-kpbn6d"> </span> <span class="thinking-toggle svelte-kpbn6d"> </span></summary> <div class="thinking-body svelte-kpbn6d"> </div></details>'),Gd=B('<div class="markdown svelte-kpbn6d"><!></div>'),Zd=B('<div class="typing svelte-kpbn6d"><span class="svelte-kpbn6d"></span><span class="svelte-kpbn6d"></span><span class="svelte-kpbn6d"></span></div>'),Xd=B('<div class="assistant svelte-kpbn6d"><!> <!> <!> <!></div>');function Un(t,e){if(new.target)return Ot({component:Un,...t});vt(e,!0);let r=te(e,"content"),n=te(e,"turn"),s=te(e,"streaming",7,!1),a=te(e,"conversationId",7,null),i=ee(!1);const l=Ge(()=>n()!==void 0&&(n().tools.size>0||n().approvals.length>0||n().plan!==null||n().todos.length>0));var o={get content(){return r()},set content(C){r(C),G()},get turn(){return n()},set turn(C){n(C),G()},get streaming(){return s()},set streaming(C=!1){s(C),G()},get conversationId(){return a()},set conversationId(C=null){a(C),G()},$set:Pt,$on:(C,T)=>At(e,C,T)},c=Xd(),d=E(c);{var f=C=>{var T=Jd(),I=E(T),Z=E(I),Q=E(Z);x(Z);var ne=O(Z,2),$=E(ne,!0);x(ne),x(I);var R=O(I,2),_=E(R,!0);x(R),x(T),U(()=>{fe(Q,`Thinking${s()?"…":""}`),fe($,u(i)?"Hide":"Show"),fe(_,n().thinking)}),cc("open","toggle",T,j=>k(i,j),()=>u(i)),M(C,T)};se(d,C=>{n()!==void 0&&n().thinking&&C(f)})}var h=O(d,2);{var m=C=>{var T=Gd(),I=E(T);yo(I,()=>$o(r())),x(T),M(C,T)};se(h,C=>{r()&&C(m)})}var b=O(h,2);{var z=C=>{Do(C,{get turn(){return n()},get conversationId(){return a()}})};se(b,C=>{n()!==void 0&&u(l)&&C(z)})}var v=O(b,2);{var w=C=>{var T=Zd();M(C,T)};se(v,C=>{s()&&!r()&&!u(l)&&C(w)})}return x(c),M(t,c),mt(o)}var Qd=B('<div class="user svelte-10oznxe"><div class="bubble svelte-10oznxe"><!></div></div>');function Bo(t,e){if(new.target)return Ot({component:Bo,...t});vt(e,!0);let r=te(e,"content");var n={get content(){return r()},set content(l){r(l),G()},$set:Pt,$on:(l,o)=>At(e,l,o)},s=Qd(),a=E(s),i=E(a);return yo(i,()=>$o(r())),x(a),x(s),M(t,s),mt(n)}var eu=B(`<div class="empty svelte-xdaci2"><div class="empty-logo svelte-xdaci2">🔧</div> <h1 class="svelte-xdaci2"> </h1> <p class="svelte-xdaci2">Point the agent at your project and let it fire away. It can read,
        write, and run commands — watch every tool call live and approve
        what needs approving.</p></div>`),tu=B('<div class="chat svelte-xdaci2"><!> <!> <!></div>');function Ho(t,e){if(new.target)return Ot({component:Ho,...t});vt(e,!0);let r=te(e,"messages"),n=te(e,"turn"),s=te(e,"streaming"),a=te(e,"conversationId"),i,l=ee(!0);eo(()=>{u(l)&&i&&(i.scrollTop=i.scrollHeight)});function o(){if(!i)return;const v=i.scrollHeight-i.scrollTop-i.clientHeight<80;k(l,v)}var c={get messages(){return r()},set messages(v){r(v),G()},get turn(){return n()},set turn(v){n(v),G()},get streaming(){return s()},set streaming(v){s(v),G()},get conversationId(){return a()},set conversationId(v){a(v),G()},$set:Pt,$on:(v,w)=>At(e,v,w)},d=tu(),f=E(d);{var h=v=>{var w=eu(),C=O(E(w),2),T=E(C,!0);x(C),Vn(2),x(w),U(()=>fe(T,a()?"Continue the conversation":"ask-coding-harness")),M(v,w)};se(f,v=>{r().length===0&&!s()&&v(h)})}var m=O(f,2);ls(m,17,r,ec,(v,w)=>{var C=qs(),T=is(C);{var I=Q=>{Bo(Q,{get content(){return u(w).content}})},Z=Q=>{Un(Q,{get content(){return u(w).content}})};se(T,Q=>{u(w).role==="user"?Q(I):Q(Z,!1)})}M(v,C)});var b=O(m,2);{var z=v=>{Un(v,{get content(){return n().text},get turn(){return n()},get streaming(){return s()},get conversationId(){return a()}})};se(b,v=>{(s()||n().text.trim()||n().tools.size>0||n().approvals.length>0||n().plan||n().todos.length>0)&&v(z)})}return x(d),xo(d,v=>i=v,()=>i),Ee("scroll",d,o),M(t,d),mt(c)}var ru=B('<div class="ws-name svelte-181dlmc"> </div>'),su=B('<div class="empty svelte-181dlmc"> </div>'),nu=B('<div class="rename-row svelte-181dlmc"><input class="svelte-181dlmc"/></div>'),au=B("<ask-conversation-item></ask-conversation-item>",2),iu=B('<div class="sidebar svelte-181dlmc"><div class="head svelte-181dlmc"><!> <button class="new svelte-181dlmc"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> New conversation</button> <button class="close svelte-181dlmc" aria-label="Close sidebar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div> <div class="search svelte-181dlmc"><ask-search-input></ask-search-input></div> <div class="list svelte-181dlmc"><!> <ask-conversation-group></ask-conversation-group></div></div>',2);function Uo(t,e){if(new.target)return Ot({component:Uo,...t});vt(e,!0);let r=te(e,"conversations"),n=te(e,"currentId"),s=te(e,"workspaceName"),a=te(e,"streaming"),i=te(e,"onSelect"),l=te(e,"onNew"),o=te(e,"onChanged"),c=te(e,"onClose"),d=ee(""),f=ee(null),h=ee("");const m=Ge(()=>u(d).trim()?r().filter(A=>A.title.toLowerCase().includes(u(d).trim().toLowerCase())):r());async function b(){o()(await Hn())}async function z(A){const D=u(h).trim();D&&(await $d(A,D),await b()),k(f,null)}async function v(A){await Sd(A),await b()}async function w(A){confirm("Delete this conversation?")&&(await Ed(A),await b())}function C(A){i()(A.detail.id)}var T={get conversations(){return r()},set conversations(A){r(A),G()},get currentId(){return n()},set currentId(A){n(A),G()},get workspaceName(){return s()},set workspaceName(A){s(A),G()},get streaming(){return a()},set streaming(A){a(A),G()},get onSelect(){return i()},set onSelect(A){i(A),G()},get onNew(){return l()},set onNew(A){l(A),G()},get onChanged(){return o()},set onChanged(A){o(A),G()},get onClose(){return c()},set onClose(A){c(A),G()},$set:Pt,$on:(A,D)=>At(e,A,D)},I=iu(),Z=E(I),Q=E(Z);{var ne=A=>{var D=ru(),$e=E(D,!0);x(D),U(()=>fe($e,s())),M(A,D)};se(Q,A=>{s()&&A(ne)})}var $=O(Q,2);$.__click=function(...A){var D;(D=l())==null||D.apply(this,A)};var R=O($,2);R.__click=function(...A){var D;(D=c())==null||D.apply(this,A)},x(Z);var _=O(Z,2),j=E(_);ce(j,"placeholder","Filter conversations…"),x(_);var ae=O(_,2),S=E(ae);{var N=A=>{var D=su(),$e=E(D,!0);x(D),U(()=>fe($e,r().length===0?"No conversations yet.":"No matches.")),M(A,D)};se(S,A=>{u(m).length===0&&A(N)})}var V=O(S,2);return U(()=>ce(V,"label",s()??"Conversations")),U(()=>ce(V,"count",u(m).length)),ls(V,21,()=>u(m),A=>A.id,(A,D)=>{var $e=qs(),ye=is($e);{var et=je=>{var pe=nu();pe.__click=F=>F.stopPropagation();var ie=E(pe);ko(ie),ie.__keydown=F=>{F.key==="Enter"&&z(u(D).id),F.key==="Escape"&&k(f,null)},x(pe),ta(ie,()=>u(h),F=>k(h,F)),M(je,pe)},Ke=je=>{var pe=au();U(()=>ce(pe,"id",u(D).id)),U(()=>ce(pe,"title",u(D).title)),U(()=>ce(pe,"meta",`${u(D).message_count} msgs`)),U(()=>ce(pe,"active",u(D).id===n())),U(()=>ce(pe,"archived",u(D).archived)),Ee("conversation-select",pe,C),Ee("conversation-rename",pe,ie=>{k(f,ie.detail.id,!0),k(h,u(D).title,!0)}),Ee("conversation-archive",pe,()=>v(u(D).id)),Ee("conversation-delete",pe,()=>w(u(D).id)),M(je,pe)};se(ye,je=>{u(f)===u(D).id?je(et):je(Ke,!1)})}M(A,$e)}),x(V),x(ae),x(I),U(()=>$.disabled=a()),Ee("search-input",j,A=>k(d,A.detail.value,!0)),M(t,I),mt(T)}Wr(["click","keydown"]);var ou=B('<button class="send stop svelte-1n8df3y" aria-label="Stop"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>'),lu=B('<button class="send svelte-1n8df3y" aria-label="Send"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>'),cu=B('<div class="hint svelte-1n8df3y"><span class="model-chip svelte-1n8df3y"> </span> <span class="agent-chip svelte-1n8df3y"><ask-menu><span slot="trigger"> </span></ask-menu></span> <span class="shortcut svelte-1n8df3y">Shift+Enter for a new line</span></div>',2),du=B('<div class="composer svelte-1n8df3y"><div class="box svelte-1n8df3y"><textarea rows="1" class="svelte-1n8df3y"></textarea> <!></div> <!></div>');function Fo(t,e){if(new.target)return Ot({component:Fo,...t});vt(e,!0);let r=te(e,"streaming"),n=te(e,"model"),s=te(e,"disabled"),a=te(e,"agents"),i=te(e,"currentAgent"),l=te(e,"onSend"),o=te(e,"onStop"),c=te(e,"onAgentChange");const d=Ge(()=>[{id:"",label:"Default agent",description:"workspace defaults",icon:"🤖",active:!i()},...a().map(_=>({id:_.name,label:_.name,description:"agents/"+_.name,icon:"🧩",active:_.name===i()}))]);function f(_){c()(_.detail.id||null)}let h=ee(""),m;function b(){const _=u(h).trim();!_||r()||s()||(l()(_),k(h,""),m&&(m.style.height="auto"))}function z(_){_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),b())}function v(){m&&(m.style.height="auto",m.style.height=Math.min(m.scrollHeight,180)+"px")}var w={get streaming(){return r()},set streaming(_){r(_),G()},get model(){return n()},set model(_){n(_),G()},get disabled(){return s()},set disabled(_){s(_),G()},get agents(){return a()},set agents(_){a(_),G()},get currentAgent(){return i()},set currentAgent(_){i(_),G()},get onSend(){return l()},set onSend(_){l(_),G()},get onStop(){return o()},set onStop(_){o(_),G()},get onAgentChange(){return c()},set onAgentChange(_){c(_),G()},$set:Pt,$on:(_,j)=>At(e,_,j)},C=du(),T=E(C),I=E(T);Rl(I),I.__keydown=z,I.__input=v,xo(I,_=>m=_,()=>m);var Z=O(I,2);{var Q=_=>{var j=ou();j.__click=function(...ae){var S;(S=o())==null||S.apply(this,ae)},M(_,j)},ne=_=>{var j=lu();j.__click=b,U(ae=>j.disabled=ae,[()=>s()||!u(h).trim()]),M(_,j)};se(Z,_=>{r()?_(Q):_(ne,!1)})}x(T);var $=O(T,2);{var R=_=>{var j=cu(),ae=E(j),S=E(ae,!0);x(ae);var N=O(ae,2),V=E(N);U(()=>ce(V,"items",u(d))),Yt(V,1,"agent-menu");var A=E(V),D=E(A,!0);x(A),x(V),x(N),Vn(2),x(j),U(()=>{fe(S,n()),fe(D,i()?`agent: ${i()}`:"default agent")}),Ee("menu-select",V,f),M(_,j)};se($,_=>{n()&&_(R)})}return x(C),U(()=>Ks(I,"placeholder",s()?"Connecting to the harness server…":"Ask the agent to do something…")),ta(I,()=>u(h),_=>k(h,_)),M(t,C),mt(w)}Wr(["keydown","input","click"]);var uu=B("<button> </button>"),fu=B('<p class="hint svelte-1u3w06f">Saved locally. New messages use this model.</p>'),pu=B('<section class="svelte-1u3w06f"><h3 class="svelte-1u3w06f">Workspace</h3> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Name</span> <span class="value mono svelte-1u3w06f"> </span></div> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Root</span> <span class="value mono svelte-1u3w06f"> </span></div> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Git branch</span> <span class="value svelte-1u3w06f"> </span></div> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Agent</span> <span class="value mono svelte-1u3w06f"> </span></div> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Features</span> <span class="value svelte-1u3w06f"><!> <!> <!></span></div></section> <section class="svelte-1u3w06f"><h3 class="svelte-1u3w06f">Model</h3> <div class="models svelte-1u3w06f"></div> <!></section>',1),hu=B('<p class="hint svelte-1u3w06f">No server config available.</p>'),vu=B("<ask-dialog><!></ask-dialog>",2);function qo(t,e){var h;if(new.target)return Ot({component:qo,...t});vt(e,!0);let r=te(e,"config"),n=te(e,"onClose"),s=ee(nt(localStorage.getItem("ach_model")||((h=r())==null?void 0:h.defaultModel)||""));const a=Ge(()=>{var m;return u(s)!==(localStorage.getItem("ach_model")||((m=r())==null?void 0:m.defaultModel)||"")});function i(m){k(s,m,!0),localStorage.setItem("ach_model",m)}var l={get config(){return r()},set config(m){r(m),G()},get onClose(){return n()},set onClose(m){n(m),G()},$set:Pt,$on:(m,b)=>At(e,m,b)},o=vu();ce(o,"open",!0),ce(o,"header","Settings");var c=E(o);{var d=m=>{var b=pu(),z=is(b),v=O(E(z),2),w=O(E(v),2),C=E(w,!0);x(w),x(v);var T=O(v,2),I=O(E(T),2),Z=E(I,!0);x(I),x(T);var Q=O(T,2),ne=O(E(Q),2),$=E(ne,!0);x(ne),x(Q);var R=O(Q,2),_=O(E(R),2),j=E(_,!0);x(_),x(R);var ae=O(R,2),S=O(E(ae),2),N=E(S);{var V=ie=>{var F=gn("approvals ·");M(ie,F)};se(N,ie=>{r().features.approvals&&ie(V)})}var A=O(N,2);{var D=ie=>{var F=gn("plan mode ·");M(ie,F)};se(A,ie=>{r().features.planMode&&ie(D)})}var $e=O(A,2);{var ye=ie=>{var F=gn("todos");M(ie,F)};se($e,ie=>{r().features.todos&&ie(ye)})}x(S),x(ae),x(z);var et=O(z,2),Ke=O(E(et),2);ls(Ke,20,()=>r().models,ie=>ie,(ie,F)=>{var ve=uu();ve.__click=()=>i(F);var ot=E(ve,!0);x(ve),U(()=>{Yt(ve,1,`model ${F===u(s)?"active":""}`,"svelte-1u3w06f"),fe(ot,F)}),M(ie,ve)}),x(Ke);var je=O(Ke,2);{var pe=ie=>{var F=fu();M(ie,F)};se(je,ie=>{u(a)&&ie(pe)})}x(et),U(()=>{fe(C,r().workspace.name),fe(Z,r().workspace.root),fe($,r().workspace.gitBranch??"—"),fe(j,r().currentAdapter)}),M(m,b)},f=m=>{var b=hu();M(m,b)};se(c,m=>{r()?m(d):m(f,!1)})}return x(o),Ee("dialog-close",o,function(...m){var b;(b=n())==null||b.apply(this,m)}),M(t,o),mt(l)}Wr(["click"]);var mu=B('<div class="error svelte-1xx308a"> </div>'),gu=B(`<div class="switcher svelte-1xx308a"><ask-menu><span slot="trigger" class="trigger-name svelte-1xx308a"> </span> <div slot="menu-footer" class="menu-footer svelte-1xx308a"><button class="open-ws svelte-1xx308a">＋ Open workspace…</button></div></ask-menu> <ask-dialog><p class="hint svelte-1xx308a">Path to a project directory on this machine. The agent gets full access to it —
      same trust model as running a coding agent in your terminal.</p> <input class="path-input svelte-1xx308a" placeholder="/path/to/project"/> <!> <div slot="footer"><button class="btn cancel svelte-1xx308a">Cancel</button> <button class="btn go svelte-1xx308a"> </button></div></ask-dialog></div>`,2);function Ko(t,e){if(new.target)return Ot({component:Ko,...t});vt(e,!0);let r=te(e,"workspaces"),n=te(e,"current"),s=te(e,"onSelect"),a=te(e,"onOpened"),i=ee(!1),l=ee(!1),o=ee(""),c=ee(!1),d=ee(null);const f=Ge(()=>r().map(S=>{var N;return{id:S.root,label:S.name,description:S.root,icon:"📁",active:S.root===((N=n())==null?void 0:N.root)}}));function h(S){const N=r().find(V=>V.root===S.detail.id);N&&s()(N)}async function m(){const S=u(o).trim();if(!(!S||u(c))){k(c,!0),k(d,null);try{const N=await wd(S);k(l,!1),k(o,""),a()(N)}catch(N){k(d,N.message||"Could not open that workspace",!0)}finally{k(c,!1)}}}var b={get workspaces(){return r()},set workspaces(S){r(S),G()},get current(){return n()},set current(S){n(S),G()},get onSelect(){return s()},set onSelect(S){s(S),G()},get onOpened(){return a()},set onOpened(S){a(S),G()},$set:Pt,$on:(S,N)=>At(e,S,N)},z=gu(),v=E(z);U(()=>ce(v,"items",u(f))),U(()=>{var S;return ce(v,"trigger-label",((S=n())==null?void 0:S.name)??"No workspace")});var w=E(v),C=E(w,!0);x(w);var T=O(w,2),I=E(T);I.__click=()=>{k(l,!0),k(i,!1)},x(T),x(v);var Z=O(v,2);U(()=>ce(Z,"open",u(l))),ce(Z,"header","Open workspace");var Q=O(E(Z),2);ko(Q),Q.__keydown=S=>{S.key==="Enter"&&m(),S.key==="Escape"&&k(l,!1)};var ne=O(Q,2);{var $=S=>{var N=mu(),V=E(N,!0);x(N),U(()=>fe(V,u(d))),M(S,N)};se(ne,S=>{u(d)&&S($)})}var R=O(ne,2),_=E(R);_.__click=()=>k(l,!1);var j=O(_,2);j.__click=m;var ae=E(j,!0);return x(j),x(R),x(Z),x(z),U(S=>{var N;fe(C,((N=n())==null?void 0:N.name)??"No workspace"),j.disabled=S,fe(ae,u(c)?"Opening…":"Open")},[()=>u(c)||!u(o).trim()]),Ee("menu-select",v,h),Ee("menu-open",v,()=>k(i,!0)),Ee("menu-close",v,()=>k(i,!1)),Ee("dialog-close",Z,()=>k(l,!1)),ta(Q,()=>u(o),S=>k(o,S)),M(t,z),mt(b)}Wr(["click","keydown"]);var bu=B('<button class="icon-btn stop svelte-1n46o8q" aria-label="Stop"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>'),_u=B('<div class="sidebar-wrap svelte-1n46o8q"><!></div>'),yu=B('<div class="banner-error svelte-1n46o8q"> </div>'),ku=B('<div class="app svelte-1n46o8q"><header class="topbar svelte-1n46o8q"><button class="icon-btn hamburger svelte-1n46o8q" aria-label="Toggle sidebar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button> <div class="workspace svelte-1n46o8q"><!></div> <div class="topbar-actions svelte-1n46o8q"><!> <button class="icon-btn svelte-1n46o8q" aria-label="Settings"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></button></div></header> <div class="body svelte-1n46o8q"><!> <main class="main svelte-1n46o8q"><!> <!> <!></main></div> <!></div>');function Wo(t,e){if(new.target)return Ot({component:Wo,...t});vt(e,!0);let r=ee(null),n=ee(nt([])),s=ee(nt([])),a=ee(null),i=ee(nt([])),l=ee(null),o=ee(null),c=ee(nt([])),d=ee(nt(Zr())),f=ee(!1),h=ee(!1),m=ee(!1),b=ee(null),z=null;const v=Ge(()=>window.innerWidth<768);uc(async()=>{var P;try{k(r,await _d(),!0),k(n,await Hn(),!0),k(s,await yd(),!0),k(a,u(s).find(J=>{var de;return J.root===((de=u(r))==null?void 0:de.workspace.root)})??u(s)[0]??((P=u(r))==null?void 0:P.workspace)??null,!0),u(a)&&await C(u(a))}catch(J){k(b,`Cannot reach the harness server: ${J.message}`)}});async function w(P){if(!u(f))try{const J=await xd(P);if(k(o,J.id,!0),k(c,(J.messages??[]).map(de=>({role:de.role,content:de.content})),!0),k(d,Zr(),!0),k(m,!1),k(h,!1),k(b,null),k(l,J.agent??null,!0),J.directory){const de=u(s).find(gr=>gr.root===J.directory);de&&k(a,de,!0)}}catch(J){k(b,J.message,!0)}}async function C(P){try{k(i,await kd(P.root),!0)}catch{k(i,[],!0)}}function T(P){u(f)||(k(a,P,!0),k(o,null),k(c,[],!0),k(d,Zr(),!0),k(b,null),k(l,null),C(P))}function I(P){k(s,[...u(s).filter(J=>J.root!==P.root),P],!0),T(P)}function Z(){u(f)||(k(o,null),k(c,[],!0),k(d,Zr(),!0),k(b,null),k(h,!1))}function Q(P){var de,gr;if(u(f)||!P.trim())return;u(d).text.trim()&&(u(c).length===0||u(c)[u(c).length-1].role!=="assistant")&&k(c,[...u(c),{role:"assistant",content:u(d).text.trim()}],!0);const J={role:"user",content:P.trim()};k(c,[...u(c),J],!0),k(d,Zr(),!0),k(f,!0),k(b,null),z=Td(J.content,u(o),(de=u(r))==null?void 0:de.defaultModel,(gr=u(a))==null?void 0:gr.root,u(l)??void 0,Nt=>{if(Nt.type==="error"){k(b,Nt.data.error,!0),u(d).status="failed";return}Md(u(d),Nt.type,Nt.data)},Nt=>{k(o,Nt,!0),$()},()=>{k(f,!1),$()})}function ne(){z&&z.abort(),u(o)&&zd(u(o)).catch(()=>{})}async function $(){try{k(n,await Hn(),!0)}catch{}}function R(P){k(n,P,!0)}function _(P){w(P)}var j={$set:Pt,$on:(P,J)=>At(e,P,J)},ae=ku();nc("1n46o8q",P=>{Fl(()=>{var J;Yi.title=((J=u(r))==null?void 0:J.workspace.name)??"ask-coding-harness"??""})});var S=E(ae),N=E(S);N.__click=()=>k(h,!u(h));var V=O(N,2),A=E(V);Ko(A,{get workspaces(){return u(s)},get current(){return u(a)},onSelect:T,onOpened:I}),x(V);var D=O(V,2),$e=E(D);{var ye=P=>{var J=bu();J.__click=ne,M(P,J)};se($e,P=>{u(f)&&P(ye)})}var et=O($e,2);et.__click=()=>k(m,!u(m)),x(D),x(S);var Ke=O(S,2),je=E(Ke);{var pe=P=>{var J=_u(),de=E(J);{let gr=Ge(()=>u(n).filter(Ms=>!u(a)||Ms.directory===u(a).root)),Nt=Ge(()=>{var Ms;return(Ms=u(a))==null?void 0:Ms.name});Uo(de,{get conversations(){return u(gr)},get currentId(){return u(o)},get workspaceName(){return u(Nt)},onSelect:_,onNew:Z,onChanged:R,onClose:()=>k(h,!1),get streaming(){return u(f)}})}x(J),M(P,J)};se(je,P=>{(u(h)||!u(v))&&P(pe)})}var ie=O(je,2),F=E(ie);{var ve=P=>{var J=yu(),de=E(J,!0);x(J),U(()=>fe(de,u(b))),M(P,J)};se(F,P=>{u(b)&&!u(f)&&P(ve)})}var ot=O(F,2);Ho(ot,{get messages(){return u(c)},get turn(){return u(d)},get streaming(){return u(f)},get conversationId(){return u(o)}});var Wt=O(ot,2);{let P=Ge(()=>{var de;return(de=u(r))==null?void 0:de.defaultModel}),J=Ge(()=>!u(r));Fo(Wt,{get streaming(){return u(f)},get model(){return u(P)},get agents(){return u(i)},get currentAgent(){return u(l)},onSend:Q,onStop:ne,onAgentChange:de=>k(l,de,!0),get disabled(){return u(J)}})}x(ie),x(Ke);var Yr=O(Ke,2);{var Ce=P=>{qo(P,{get config(){return u(r)},onClose:()=>k(m,!1)})};se(Yr,P=>{u(m)&&P(Ce)})}return x(ae),M(t,ae),mt(j)}Wr(["click"]);ea(Wo,{target:document.getElementById("app")});
