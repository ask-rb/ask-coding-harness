var So=Object.defineProperty;var Sa=t=>{throw TypeError(t)};var Co=(t,e,r)=>e in t?So(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Xe=(t,e,r)=>Co(t,typeof e!="symbol"?e+"":e,r),tn=(t,e,r)=>e.has(t)||Sa("Cannot "+r);var u=(t,e,r)=>(tn(t,e,"read from private field"),r?r.call(t):e.get(t)),D=(t,e,r)=>e.has(t)?Sa("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),M=(t,e,r,n)=>(tn(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r),he=(t,e,r)=>(tn(t,e,"access private method"),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const dn=!1;var Xa=Array.isArray,Ao=Array.prototype.indexOf,wr=Array.prototype.includes,Hs=Array.from,Qa=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Po=Object.getOwnPropertyDescriptors,No=Object.prototype,To=Array.prototype,ei=Object.getPrototypeOf,Ca=Object.isExtensible;function Oo(t){for(var e=0;e<t.length;e++)t[e]()}function ti(){var t,e,r=new Promise((n,s)=>{t=n,e=s});return{promise:r,resolve:t,reject:e}}const be=2,Gr=4,Us=8,ri=1<<24,kt=16,st=32,ur=64,Nn=128,Ve=512,ve=1024,Ee=2048,wt=4096,De=8192,_t=16384,Bs=32768,$r=65536,Aa=1<<17,Tn=1<<18,Ir=1<<19,zo=1<<20,gt=1<<25,sr=32768,un=1<<21,On=1<<22,At=1<<23,Ss=Symbol("$state"),Mo=Symbol("legacy props"),jo=Symbol(""),hr=new class extends Error{constructor(){super(...arguments);Xe(this,"name","StaleReactionError");Xe(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Fs=3,It=8;function Ro(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Io(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Lo(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Do(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ho(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Uo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Bo(){throw new Error("https://svelte.dev/e/hydration_failed")}function Fo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function qo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ko(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Wo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Vo=1,Yo=2,si=4,Go=8,Jo=16,Zo=1,Xo=2,ni="[",qs="[!",zn="]",nr={},me=Symbol(),Qo="http://www.w3.org/1999/xhtml";function hs(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function el(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let I=!1;function Ie(t){I=t}let U;function ge(t){if(t===null)throw hs(),nr;return U=t}function xr(){return ge(Ue(U))}function x(t){if(I){if(Ue(U)!==null)throw hs(),nr;U=t}}function Mn(t=1){if(I){for(var e=t,r=U;e--;)r=Ue(r);U=r}}function Ts(t=!0){for(var e=0,r=U;;){if(r.nodeType===It){var n=r.data;if(n===zn){if(e===0)return r;e-=1}else(n===ni||n===qs)&&(e+=1)}var s=Ue(r);t&&r.remove(),r=s}}function ai(t){if(!t||t.nodeType!==It)throw hs(),nr;return t.data}function ii(t){return t===this.v}function tl(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function oi(t){return!tl(t,this.v)}let rl=!1,He=null;function Er(t){He=t}function $t(t,e=!1,r){He={p:He,i:!1,c:null,e:null,s:t,x:null,l:null}}function xt(t){var e=He,r=e.e;if(r!==null){e.e=null;for(var n of r)zi(n)}return t!==void 0&&(e.x=t),e.i=!0,He=e.p,t??{}}function li(){return!0}let qt=[];function ci(){var t=qt;qt=[],Oo(t)}function lt(t){if(qt.length===0&&!Kr){var e=qt;queueMicrotask(()=>{e===qt&&ci()})}qt.push(t)}function sl(){for(;qt.length>0;)ci()}function di(t){var e=q;if(e===null)return B.f|=At,t;if((e.f&Bs)===0){if((e.f&Nn)===0)throw t;e.b.error(t)}else Sr(t,e)}function Sr(t,e){for(;e!==null;){if((e.f&Nn)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t}const nl=-7169;function ue(t,e){t.f=t.f&nl|e}function jn(t){(t.f&Ve)!==0||t.deps===null?ue(t,ve):ue(t,wt)}function ui(t){if(t!==null)for(const e of t)(e.f&be)===0||(e.f&sr)===0||(e.f^=sr,ui(e.deps))}function fi(t,e,r){(t.f&Ee)!==0?e.add(t):(t.f&wt)!==0&&r.add(t),ui(t.deps),ue(t,ve)}const $s=new Set;let H=null,fn=null,_e=null,Re=[],Ks=null,pn=!1,Kr=!1;var vr,gr,Vt,mr,cs,ds,Yt,_r,dt,hn,vn,pi;const ea=class ea{constructor(){D(this,dt);Xe(this,"committed",!1);Xe(this,"current",new Map);Xe(this,"previous",new Map);D(this,vr,new Set);D(this,gr,new Set);D(this,Vt,0);D(this,mr,0);D(this,cs,null);D(this,ds,new Set);D(this,Yt,new Set);Xe(this,"skipped_effects",new Set);Xe(this,"is_fork",!1);D(this,_r,!1)}is_deferred(){return this.is_fork||u(this,mr)>0}process(e){var s;Re=[],this.apply();var r=[],n=[];for(const a of e)he(this,dt,hn).call(this,a,r,n);if(this.is_deferred()){he(this,dt,vn).call(this,n),he(this,dt,vn).call(this,r);for(const a of this.skipped_effects)mi(a)}else{for(const a of u(this,vr))a();u(this,vr).clear(),u(this,Vt)===0&&he(this,dt,pi).call(this),fn=this,H=null,Pa(n),Pa(r),fn=null,(s=u(this,cs))==null||s.resolve()}_e=null}capture(e,r){r!==me&&!this.previous.has(e)&&this.previous.set(e,r),(e.f&At)===0&&(this.current.set(e,e.v),_e==null||_e.set(e,e.v))}activate(){H=this,this.apply()}deactivate(){H===this&&(H=null,_e=null)}flush(){if(this.activate(),Re.length>0){if(hi(),H!==null&&H!==this)return}else u(this,Vt)===0&&this.process([]);this.deactivate()}discard(){for(const e of u(this,gr))e(this);u(this,gr).clear()}increment(e){M(this,Vt,u(this,Vt)+1),e&&M(this,mr,u(this,mr)+1)}decrement(e){M(this,Vt,u(this,Vt)-1),e&&M(this,mr,u(this,mr)-1),!u(this,_r)&&(M(this,_r,!0),lt(()=>{M(this,_r,!1),this.is_deferred()?Re.length>0&&this.flush():this.revive()}))}revive(){for(const e of u(this,ds))u(this,Yt).delete(e),ue(e,Ee),bt(e);for(const e of u(this,Yt))ue(e,wt),bt(e);this.flush()}oncommit(e){u(this,vr).add(e)}ondiscard(e){u(this,gr).add(e)}settled(){return(u(this,cs)??M(this,cs,ti())).promise}static ensure(){if(H===null){const e=H=new ea;$s.add(H),Kr||lt(()=>{H===e&&e.flush()})}return H}apply(){}};vr=new WeakMap,gr=new WeakMap,Vt=new WeakMap,mr=new WeakMap,cs=new WeakMap,ds=new WeakMap,Yt=new WeakMap,_r=new WeakMap,dt=new WeakSet,hn=function(e,r,n){e.f^=ve;for(var s=e.first,a=null;s!==null;){var i=s.f,l=(i&(st|ur))!==0,o=l&&(i&ve)!==0,c=o||(i&De)!==0||this.skipped_effects.has(s);if(!c&&s.fn!==null){l?s.f^=ve:a!==null&&(i&(Gr|Us|ri))!==0?a.b.defer_effect(s):(i&Gr)!==0?r.push(s):vs(s)&&((i&kt)!==0&&u(this,Yt).add(s),Jr(s));var d=s.first;if(d!==null){s=d;continue}}var p=s.parent;for(s=s.next;s===null&&p!==null;)p===a&&(a=null),s=p.next,p=p.parent}},vn=function(e){for(var r=0;r<e.length;r+=1)fi(e[r],u(this,ds),u(this,Yt))},pi=function(){var s;if($s.size>1){this.previous.clear();var e=_e,r=!0;for(const a of $s){if(a===this){r=!1;continue}const i=[];for(const[o,c]of this.current){if(a.current.has(o))if(r&&c!==a.current.get(o))a.current.set(o,c);else continue;i.push(o)}if(i.length===0)continue;const l=[...a.current.keys()].filter(o=>!this.current.has(o));if(l.length>0){var n=Re;Re=[];const o=new Set,c=new Map;for(const d of i)vi(d,l,o,c);if(Re.length>0){H=a,a.apply();for(const d of Re)he(s=a,dt,hn).call(s,d,[],[]);a.deactivate()}Re=n}}H=null,_e=e}this.committed=!0,$s.delete(this)};let Pt=ea;function Z(t){var e=Kr;Kr=!0;try{for(var r;;){if(sl(),Re.length===0&&(H==null||H.flush(),Re.length===0))return Ks=null,r;hi()}}finally{Kr=e}}function hi(){pn=!0;var t=null;try{for(var e=0;Re.length>0;){var r=Pt.ensure();if(e++>1e3){var n,s;al()}r.process(Re),Nt.clear()}}finally{pn=!1,Ks=null}}function al(){try{Uo()}catch(t){Sr(t,Ks)}}let et=null;function Pa(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var n=t[r++];if((n.f&(_t|De))===0&&vs(n)&&(et=new Set,Jr(n),n.deps===null&&n.first===null&&n.nodes===null&&(n.teardown===null&&n.ac===null?Ii(n):n.fn=null),(et==null?void 0:et.size)>0)){Nt.clear();for(const s of et){if((s.f&(_t|De))!==0)continue;const a=[s];let i=s.parent;for(;i!==null;)et.has(i)&&(et.delete(i),a.push(i)),i=i.parent;for(let l=a.length-1;l>=0;l--){const o=a[l];(o.f&(_t|De))===0&&Jr(o)}}et.clear()}}et=null}}function vi(t,e,r,n){if(!r.has(t)&&(r.add(t),t.reactions!==null))for(const s of t.reactions){const a=s.f;(a&be)!==0?vi(s,e,r,n):(a&(On|kt))!==0&&(a&Ee)===0&&gi(s,e,n)&&(ue(s,Ee),bt(s))}}function gi(t,e,r){const n=r.get(t);if(n!==void 0)return n;if(t.deps!==null)for(const s of t.deps){if(wr.call(e,s))return!0;if((s.f&be)!==0&&gi(s,e,r))return r.set(s,!0),!0}return r.set(t,!1),!1}function bt(t){for(var e=Ks=t;e.parent!==null;){e=e.parent;var r=e.f;if(pn&&e===q&&(r&kt)!==0&&(r&Tn)===0)return;if((r&(ur|st))!==0){if((r&ve)===0)return;e.f^=ve}}Re.push(e)}function mi(t){if(!((t.f&st)!==0&&(t.f&ve)!==0)){ue(t,ve);for(var e=t.first;e!==null;)mi(e),e=e.next}}function il(t){let e=0,r=ar(0),n;return()=>{Ln()&&(v(r),Ys(()=>(e===0&&(n=Js(()=>t(()=>Wr(r)))),e+=1,()=>{lt(()=>{e-=1,e===0&&(n==null||n(),n=void 0,Wr(r))})})))}}var ol=$r|Ir|Nn;function ll(t,e,r){new cl(t,e,r)}var Me,us,nt,Gt,at,qe,Pe,it,ft,Ct,Jt,pt,br,Zt,yr,kr,ht,Ls,de,_i,bi,gn,Cs,As,mn;class cl{constructor(e,r,n){D(this,de);Xe(this,"parent");Xe(this,"is_pending",!1);D(this,Me);D(this,us,I?U:null);D(this,nt);D(this,Gt);D(this,at);D(this,qe,null);D(this,Pe,null);D(this,it,null);D(this,ft,null);D(this,Ct,null);D(this,Jt,0);D(this,pt,0);D(this,br,!1);D(this,Zt,!1);D(this,yr,new Set);D(this,kr,new Set);D(this,ht,null);D(this,Ls,il(()=>(M(this,ht,ar(u(this,Jt))),()=>{M(this,ht,null)})));M(this,Me,e),M(this,nt,r),M(this,Gt,n),this.parent=q.b,this.is_pending=!!u(this,nt).pending,M(this,at,Gs(()=>{if(q.b=this,I){const a=u(this,us);xr(),a.nodeType===It&&a.data===qs?he(this,de,bi).call(this):(he(this,de,_i).call(this),u(this,pt)===0&&(this.is_pending=!1))}else{var s=he(this,de,gn).call(this);try{M(this,qe,We(()=>n(s)))}catch(a){this.error(a)}u(this,pt)>0?he(this,de,As).call(this):this.is_pending=!1}return()=>{var a;(a=u(this,Ct))==null||a.remove()}},ol)),I&&M(this,Me,U)}defer_effect(e){fi(e,u(this,yr),u(this,kr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,nt).pending}update_pending_count(e){he(this,de,mn).call(this,e),M(this,Jt,u(this,Jt)+e),!(!u(this,ht)||u(this,br))&&(M(this,br,!0),lt(()=>{M(this,br,!1),u(this,ht)&&Cr(u(this,ht),u(this,Jt))}))}get_effect_pending(){return u(this,Ls).call(this),v(u(this,ht))}error(e){var r=u(this,nt).onerror;let n=u(this,nt).failed;if(u(this,Zt)||!r&&!n)throw e;u(this,qe)&&(Te(u(this,qe)),M(this,qe,null)),u(this,Pe)&&(Te(u(this,Pe)),M(this,Pe,null)),u(this,it)&&(Te(u(this,it)),M(this,it,null)),I&&(ge(u(this,us)),Mn(),ge(Ts()));var s=!1,a=!1;const i=()=>{if(s){el();return}s=!0,a&&Wo(),Pt.ensure(),M(this,Jt,0),u(this,it)!==null&&er(u(this,it),()=>{M(this,it,null)}),this.is_pending=this.has_pending_snippet(),M(this,qe,he(this,de,Cs).call(this,()=>(M(this,Zt,!1),We(()=>u(this,Gt).call(this,u(this,Me)))))),u(this,pt)>0?he(this,de,As).call(this):this.is_pending=!1};lt(()=>{try{a=!0,r==null||r(e,i),a=!1}catch(l){Sr(l,u(this,at)&&u(this,at).parent)}n&&M(this,it,he(this,de,Cs).call(this,()=>{Pt.ensure(),M(this,Zt,!0);try{return We(()=>{n(u(this,Me),()=>e,()=>i)})}catch(l){return Sr(l,u(this,at).parent),null}finally{M(this,Zt,!1)}}))})}}Me=new WeakMap,us=new WeakMap,nt=new WeakMap,Gt=new WeakMap,at=new WeakMap,qe=new WeakMap,Pe=new WeakMap,it=new WeakMap,ft=new WeakMap,Ct=new WeakMap,Jt=new WeakMap,pt=new WeakMap,br=new WeakMap,Zt=new WeakMap,yr=new WeakMap,kr=new WeakMap,ht=new WeakMap,Ls=new WeakMap,de=new WeakSet,_i=function(){try{M(this,qe,We(()=>u(this,Gt).call(this,u(this,Me))))}catch(e){this.error(e)}},bi=function(){const e=u(this,nt).pending;e&&(M(this,Pe,We(()=>e(u(this,Me)))),lt(()=>{var r=he(this,de,gn).call(this);M(this,qe,he(this,de,Cs).call(this,()=>(Pt.ensure(),We(()=>u(this,Gt).call(this,r))))),u(this,pt)>0?he(this,de,As).call(this):(er(u(this,Pe),()=>{M(this,Pe,null)}),this.is_pending=!1)}))},gn=function(){var e=u(this,Me);return this.is_pending&&(M(this,Ct,xe()),u(this,Me).before(u(this,Ct)),e=u(this,Ct)),e},Cs=function(e){var r=q,n=B,s=He;Ge(u(this,at)),Oe(u(this,at)),Er(u(this,at).ctx);try{return e()}catch(a){return di(a),null}finally{Ge(r),Oe(n),Er(s)}},As=function(){const e=u(this,nt).pending;u(this,qe)!==null&&(M(this,ft,document.createDocumentFragment()),u(this,ft).append(u(this,Ct)),Hi(u(this,qe),u(this,ft))),u(this,Pe)===null&&M(this,Pe,We(()=>e(u(this,Me))))},mn=function(e){var r;if(!this.has_pending_snippet()){this.parent&&he(r=this.parent,de,mn).call(r,e);return}if(M(this,pt,u(this,pt)+e),u(this,pt)===0){this.is_pending=!1;for(const n of u(this,yr))ue(n,Ee),bt(n);for(const n of u(this,kr))ue(n,wt),bt(n);u(this,yr).clear(),u(this,kr).clear(),u(this,Pe)&&er(u(this,Pe),()=>{M(this,Pe,null)}),u(this,ft)&&(u(this,Me).before(u(this,ft)),M(this,ft,null))}};function yi(t,e,r,n){const s=Ws;var a=t.filter(h=>!h.settled);if(r.length===0&&a.length===0){n(e.map(s));return}var i=H,l=q,o=dl(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(h=>h.promise)):null;function d(h){o();try{n(h)}catch(_){(l.f&_t)===0&&Sr(_,l)}i==null||i.deactivate(),_n()}if(r.length===0){c.then(()=>d(e.map(s)));return}function p(){o(),Promise.all(r.map(h=>ul(h))).then(h=>d([...e.map(s),...h])).catch(h=>Sr(h,l))}c?c.then(p):p()}function dl(){var t=q,e=B,r=He,n=H;return function(a=!0){Ge(t),Oe(e),Er(r),a&&(n==null||n.activate())}}function _n(){Ge(null),Oe(null),Er(null)}function Ws(t){var e=be|Ee,r=B!==null&&(B.f&be)!==0?B:null;return q!==null&&(q.f|=Ir),{ctx:He,deps:null,effects:null,equals:ii,f:e,fn:t,reactions:null,rv:0,v:me,wv:0,parent:r??q,ac:null}}function ul(t,e,r){let n=q;n===null&&Io();var s=n.b,a=void 0,i=ar(me),l=!B,o=new Map;return kl(()=>{var _;var c=ti();a=c.promise;try{Promise.resolve(t()).then(c.resolve,c.reject).then(()=>{d===H&&d.committed&&d.deactivate(),_n()})}catch(y){c.reject(y),_n()}var d=H;if(l){var p=s.is_rendered();s.update_pending_count(1),d.increment(p),(_=o.get(d))==null||_.reject(hr),o.delete(d),o.set(d,c)}const h=(y,P=void 0)=>{if(d.activate(),P)P!==hr&&(i.f|=At,Cr(i,P));else{(i.f&At)!==0&&(i.f^=At),Cr(i,y);for(const[f,b]of o){if(o.delete(f),f===d)break;b.reject(hr)}}l&&(s.update_pending_count(-1),d.decrement(p))};c.promise.then(h,y=>h(null,y||"unknown"))}),Dn(()=>{for(const c of o.values())c.reject(hr)}),new Promise(c=>{function d(p){function h(){p===a?c(i):d(a)}p.then(h,h)}d(a)})}function Qt(t){const e=Ws(t);return Ui(e),e}function fl(t){const e=Ws(t);return e.equals=oi,e}function ki(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)Te(e[r])}}function pl(t){for(var e=t.parent;e!==null;){if((e.f&be)===0)return(e.f&_t)===0?e:null;e=e.parent}return null}function Rn(t){var e,r=q;Ge(pl(t));try{t.f&=~sr,ki(t),e=Ki(t)}finally{Ge(r)}return e}function wi(t){var e=Rn(t);if(!t.equals(e)&&(t.wv=Fi(),(!(H!=null&&H.is_fork)||t.deps===null)&&(t.v=e,t.deps===null))){ue(t,ve);return}Ot||(_e!==null?(Ln()||H!=null&&H.is_fork)&&_e.set(t,e):jn(t))}let bn=new Set;const Nt=new Map;let $i=!1;function ar(t,e){var r={f:0,v:t,reactions:null,equals:ii,rv:0,wv:0};return r}function se(t,e){const r=ar(t);return Ui(r),r}function xi(t,e=!1,r=!0){const n=ar(t);return e||(n.equals=oi),n}function T(t,e,r=!1){B!==null&&(!rt||(B.f&Aa)!==0)&&li()&&(B.f&(be|kt|On|Aa))!==0&&(Ye===null||!wr.call(Ye,t))&&Ko();let n=r?mt(e):e;return Cr(t,n)}function Cr(t,e){if(!t.equals(e)){var r=t.v;Ot?Nt.set(t,e):Nt.set(t,r),t.v=e;var n=Pt.ensure();if(n.capture(t,r),(t.f&be)!==0){const s=t;(t.f&Ee)!==0&&Rn(s),jn(s)}t.wv=Fi(),Ei(t,Ee),q!==null&&(q.f&ve)!==0&&(q.f&(st|ur))===0&&(Fe===null?xl([t]):Fe.push(t)),!n.is_fork&&bn.size>0&&!$i&&hl()}return e}function hl(){$i=!1;for(const t of bn)(t.f&ve)!==0&&ue(t,wt),vs(t)&&Jr(t);bn.clear()}function Wr(t){T(t,t.v+1)}function Ei(t,e){var r=t.reactions;if(r!==null)for(var n=r.length,s=0;s<n;s++){var a=r[s],i=a.f,l=(i&Ee)===0;if(l&&ue(a,e),(i&be)!==0){var o=a;_e==null||_e.delete(o),(i&sr)===0&&(i&Ve&&(a.f|=sr),Ei(o,wt))}else l&&((i&kt)!==0&&et!==null&&et.add(a),bt(a))}}function mt(t){if(typeof t!="object"||t===null||Ss in t)return t;const e=ei(t);if(e!==No&&e!==To)return t;var r=new Map,n=Xa(t),s=se(0),a=tr,i=l=>{if(tr===a)return l();var o=B,c=tr;Oe(null),za(a);var d=l();return Oe(o),za(c),d};return n&&r.set("length",se(t.length)),new Proxy(t,{defineProperty(l,o,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Fo();var d=r.get(o);return d===void 0?d=i(()=>{var p=se(c.value);return r.set(o,p),p}):T(d,c.value,!0),!0},deleteProperty(l,o){var c=r.get(o);if(c===void 0){if(o in l){const d=i(()=>se(me));r.set(o,d),Wr(s)}}else T(c,me),Wr(s);return!0},get(l,o,c){var _;if(o===Ss)return t;var d=r.get(o),p=o in l;if(d===void 0&&(!p||(_=qr(l,o))!=null&&_.writable)&&(d=i(()=>{var y=mt(p?l[o]:me),P=se(y);return P}),r.set(o,d)),d!==void 0){var h=v(d);return h===me?void 0:h}return Reflect.get(l,o,c)},getOwnPropertyDescriptor(l,o){var c=Reflect.getOwnPropertyDescriptor(l,o);if(c&&"value"in c){var d=r.get(o);d&&(c.value=v(d))}else if(c===void 0){var p=r.get(o),h=p==null?void 0:p.v;if(p!==void 0&&h!==me)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(l,o){var h;if(o===Ss)return!0;var c=r.get(o),d=c!==void 0&&c.v!==me||Reflect.has(l,o);if(c!==void 0||q!==null&&(!d||(h=qr(l,o))!=null&&h.writable)){c===void 0&&(c=i(()=>{var _=d?mt(l[o]):me,y=se(_);return y}),r.set(o,c));var p=v(c);if(p===me)return!1}return d},set(l,o,c,d){var j;var p=r.get(o),h=o in l;if(n&&o==="length")for(var _=c;_<p.v;_+=1){var y=r.get(_+"");y!==void 0?T(y,me):_ in l&&(y=i(()=>se(me)),r.set(_+"",y))}if(p===void 0)(!h||(j=qr(l,o))!=null&&j.writable)&&(p=i(()=>se(void 0)),T(p,mt(c)),r.set(o,p));else{h=p.v!==me;var P=i(()=>mt(c));T(p,P)}var f=Reflect.getOwnPropertyDescriptor(l,o);if(f!=null&&f.set&&f.set.call(d,c),!h){if(n&&typeof o=="string"){var b=r.get("length"),E=Number(o);Number.isInteger(E)&&E>=b.v&&T(b,E+1)}Wr(s)}return!0},ownKeys(l){v(s);var o=Reflect.ownKeys(l).filter(p=>{var h=r.get(p);return h===void 0||h.v!==me});for(var[c,d]of r)d.v!==me&&!(c in l)&&o.push(c);return o},setPrototypeOf(){qo()}})}var Na,Si,Ci,Ai,Pi;function yn(){if(Na===void 0){Na=window,Si=document,Ci=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Ai=qr(e,"firstChild").get,Pi=qr(e,"nextSibling").get,Ca(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Ca(r)&&(r.__t=void 0)}}function xe(t=""){return document.createTextNode(t)}function Le(t){return Ai.call(t)}function Ue(t){return Pi.call(t)}function S(t,e){if(!I)return Le(t);var r=Le(U);if(r===null)r=U.appendChild(xe());else if(e&&r.nodeType!==Fs){var n=xe();return r==null||r.before(n),ge(n),n}return ge(r),r}function Os(t,e=!1){if(!I){var r=Le(t);return r instanceof Comment&&r.data===""?Ue(r):r}if(e&&(U==null?void 0:U.nodeType)!==Fs){var n=xe();return U==null||U.before(n),ge(n),n}return U}function A(t,e=1,r=!1){let n=I?U:t;for(var s;e--;)s=n,n=Ue(n);if(!I)return n;if(r&&(n==null?void 0:n.nodeType)!==Fs){var a=xe();return n===null?s==null||s.after(a):n.before(a),ge(a),a}return ge(n),n}function In(t){t.textContent=""}function Ni(){return!1}function vl(t){I&&Le(t)!==null&&In(t)}let Ta=!1;function Ti(){Ta||(Ta=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function Vs(t){var e=B,r=q;Oe(null),Ge(null);try{return t()}finally{Oe(e),Ge(r)}}function gl(t,e,r,n=r){t.addEventListener(e,()=>Vs(r));const s=t.__on_r;s?t.__on_r=()=>{s(),n(!0)}:t.__on_r=()=>n(!0),Ti()}function ml(t){q===null&&(B===null&&Ho(),Do()),Ot&&Lo()}function _l(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function ut(t,e,r){var n=q;n!==null&&(n.f&De)!==0&&(t|=De);var s={ctx:He,deps:null,nodes:null,f:t|Ee|Ve,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};if(r)try{Jr(s),s.f|=Bs}catch(l){throw Te(s),l}else e!==null&&bt(s);var a=s;if(r&&a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Ir)===0&&(a=a.first,(t&kt)!==0&&(t&$r)!==0&&a!==null&&(a.f|=$r)),a!==null&&(a.parent=n,n!==null&&_l(a,n),B!==null&&(B.f&be)!==0&&(t&ur)===0)){var i=B;(i.effects??(i.effects=[])).push(a)}return s}function Ln(){return B!==null&&!rt}function Dn(t){const e=ut(Us,null,!1);return ue(e,ve),e.teardown=t,e}function Oi(t){ml();var e=q.f,r=!B&&(e&st)!==0&&(e&Bs)===0;if(r){var n=He;(n.e??(n.e=[])).push(t)}else return zi(t)}function zi(t){return ut(Gr|zo,t,!1)}function bl(t){Pt.ensure();const e=ut(ur|Ir,t,!0);return(r={})=>new Promise(n=>{r.outro?er(e,()=>{Te(e),n(void 0)}):(Te(e),n(void 0))})}function yl(t){return ut(Gr,t,!1)}function kl(t){return ut(On|Ir,t,!0)}function Ys(t,e=0){return ut(Us|e,t,!0)}function J(t,e=[],r=[],n=[]){yi(n,e,r,s=>{ut(Us,()=>t(...s.map(v)),!0)})}function wl(t,e=[],r=[],n=[]){var s=H,a=r.length>0||n.length>0;a&&s.increment(!0),yi(n,e,r,i=>{ut(Gr,()=>t(...i.map(v)),!1),a&&s.decrement(!0)})}function Gs(t,e=0){var r=ut(kt|e,t,!0);return r}function We(t){return ut(st|Ir,t,!0)}function Mi(t){var e=t.teardown;if(e!==null){const r=Ot,n=B;Oa(!0),Oe(null);try{e.call(null)}finally{Oa(r),Oe(n)}}}function ji(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const s=r.ac;s!==null&&Vs(()=>{s.abort(hr)});var n=r.next;(r.f&ur)!==0?r.parent=null:Te(r,e),r=n}}function $l(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&st)===0&&Te(e),e=r}}function Te(t,e=!0){var r=!1;(e||(t.f&Tn)!==0)&&t.nodes!==null&&t.nodes.end!==null&&(Ri(t.nodes.start,t.nodes.end),r=!0),ji(t,e&&!r),zs(t,0),ue(t,_t);var n=t.nodes&&t.nodes.t;if(n!==null)for(const a of n)a.stop();Mi(t);var s=t.parent;s!==null&&s.first!==null&&Ii(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes=t.ac=null}function Ri(t,e){for(;t!==null;){var r=t===e?null:Ue(t);t.remove(),t=r}}function Ii(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function er(t,e,r=!0){var n=[];Li(t,n,!0);var s=()=>{r&&Te(t),e&&e()},a=n.length;if(a>0){var i=()=>--a||s();for(var l of n)l.out(i)}else s()}function Li(t,e,r){if((t.f&De)===0){t.f^=De;var n=t.nodes&&t.nodes.t;if(n!==null)for(const l of n)(l.is_global||r)&&e.push(l);for(var s=t.first;s!==null;){var a=s.next,i=(s.f&$r)!==0||(s.f&st)!==0&&(t.f&kt)!==0;Li(s,e,i?r:!1),s=a}}}function Hn(t){Di(t,!0)}function Di(t,e){if((t.f&De)!==0){t.f^=De,(t.f&ve)===0&&(ue(t,Ee),bt(t));for(var r=t.first;r!==null;){var n=r.next,s=(r.f&$r)!==0||(r.f&st)!==0;Di(r,s?e:!1),r=n}var a=t.nodes&&t.nodes.t;if(a!==null)for(const i of a)(i.is_global||e)&&i.in()}}function Hi(t,e){if(t.nodes)for(var r=t.nodes.start,n=t.nodes.end;r!==null;){var s=r===n?null:Ue(r);e.append(r),r=s}}let Ps=!1,Ot=!1;function Oa(t){Ot=t}let B=null,rt=!1;function Oe(t){B=t}let q=null;function Ge(t){q=t}let Ye=null;function Ui(t){B!==null&&(Ye===null?Ye=[t]:Ye.push(t))}let Ne=null,ze=0,Fe=null;function xl(t){Fe=t}let Bi=1,Kt=0,tr=Kt;function za(t){tr=t}function Fi(){return++Bi}function vs(t){var e=t.f;if((e&Ee)!==0)return!0;if(e&be&&(t.f&=~sr),(e&wt)!==0){for(var r=t.deps,n=r.length,s=0;s<n;s++){var a=r[s];if(vs(a)&&wi(a),a.wv>t.wv)return!0}(e&Ve)!==0&&_e===null&&ue(t,ve)}return!1}function qi(t,e,r=!0){var n=t.reactions;if(n!==null&&!(Ye!==null&&wr.call(Ye,t)))for(var s=0;s<n.length;s++){var a=n[s];(a.f&be)!==0?qi(a,e,!1):e===a&&(r?ue(a,Ee):(a.f&ve)!==0&&ue(a,wt),bt(a))}}function Ki(t){var P;var e=Ne,r=ze,n=Fe,s=B,a=Ye,i=He,l=rt,o=tr,c=t.f;Ne=null,ze=0,Fe=null,B=(c&(st|ur))===0?t:null,Ye=null,Er(t.ctx),rt=!1,tr=++Kt,t.ac!==null&&(Vs(()=>{t.ac.abort(hr)}),t.ac=null);try{t.f|=un;var d=t.fn,p=d(),h=t.deps,_=H==null?void 0:H.is_fork;if(Ne!==null){var y;if(_||zs(t,ze),h!==null&&ze>0)for(h.length=ze+Ne.length,y=0;y<Ne.length;y++)h[ze+y]=Ne[y];else t.deps=h=Ne;if(Ln()&&(t.f&Ve)!==0)for(y=ze;y<h.length;y++)((P=h[y]).reactions??(P.reactions=[])).push(t)}else!_&&h!==null&&ze<h.length&&(zs(t,ze),h.length=ze);if(li()&&Fe!==null&&!rt&&h!==null&&(t.f&(be|wt|Ee))===0)for(y=0;y<Fe.length;y++)qi(Fe[y],t);if(s!==null&&s!==t){if(Kt++,s.deps!==null)for(let f=0;f<r;f+=1)s.deps[f].rv=Kt;if(e!==null)for(const f of e)f.rv=Kt;Fe!==null&&(n===null?n=Fe:n.push(...Fe))}return(t.f&At)!==0&&(t.f^=At),p}catch(f){return di(f)}finally{t.f^=un,Ne=e,ze=r,Fe=n,B=s,Ye=a,Er(i),rt=l,tr=o}}function El(t,e){let r=e.reactions;if(r!==null){var n=Ao.call(r,t);if(n!==-1){var s=r.length-1;s===0?r=e.reactions=null:(r[n]=r[s],r.pop())}}if(r===null&&(e.f&be)!==0&&(Ne===null||!wr.call(Ne,e))){var a=e;(a.f&Ve)!==0&&(a.f^=Ve,a.f&=~sr),jn(a),ki(a),zs(a,0)}}function zs(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)El(t,r[n])}function Jr(t){var e=t.f;if((e&_t)===0){ue(t,ve);var r=q,n=Ps;q=t,Ps=!0;try{(e&(kt|ri))!==0?$l(t):ji(t),Mi(t);var s=Ki(t);t.teardown=typeof s=="function"?s:null,t.wv=Bi;var a;dn&&rl&&(t.f&Ee)!==0&&t.deps}finally{Ps=n,q=r}}}async function Sl(){await Promise.resolve(),Z()}function v(t){var e=t.f,r=(e&be)!==0;if(B!==null&&!rt){var n=q!==null&&(q.f&_t)!==0;if(!n&&(Ye===null||!wr.call(Ye,t))){var s=B.deps;if((B.f&un)!==0)t.rv<Kt&&(t.rv=Kt,Ne===null&&s!==null&&s[ze]===t?ze++:Ne===null?Ne=[t]:Ne.push(t));else{(B.deps??(B.deps=[])).push(t);var a=t.reactions;a===null?t.reactions=[B]:wr.call(a,B)||a.push(B)}}}if(Ot&&Nt.has(t))return Nt.get(t);if(r){var i=t;if(Ot){var l=i.v;return((i.f&ve)===0&&i.reactions!==null||Vi(i))&&(l=Rn(i)),Nt.set(i,l),l}var o=(i.f&Ve)===0&&!rt&&B!==null&&(Ps||(B.f&Ve)!==0),c=i.deps===null;vs(i)&&(o&&(i.f|=Ve),wi(i)),o&&!c&&Wi(i)}if(_e!=null&&_e.has(t))return _e.get(t);if((t.f&At)!==0)throw t.v;return t.v}function Wi(t){if(t.deps!==null){t.f|=Ve;for(const e of t.deps)(e.reactions??(e.reactions=[])).push(t),(e.f&be)!==0&&(e.f&Ve)===0&&Wi(e)}}function Vi(t){if(t.v===me)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(Nt.has(e)||(e.f&be)!==0&&Vi(e))return!0;return!1}function Js(t){var e=rt;try{return rt=!0,t()}finally{rt=e}}const Cl=["touchstart","touchmove"];function Al(t){return Cl.includes(t)}const Yi=new Set,kn=new Set;function Pl(t,e,r,n={}){function s(a){if(n.capture||Br.call(e,a),!a.cancelBubble)return Vs(()=>r==null?void 0:r.call(this,a))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?lt(()=>{e.addEventListener(t,s,n)}):e.addEventListener(t,s,n),s}function Ur(t,e,r,n,s){var a={capture:n,passive:s},i=Pl(t,e,r,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Dn(()=>{e.removeEventListener(t,i,a)})}function gs(t){for(var e=0;e<t.length;e++)Yi.add(t[e]);for(var r of kn)r(t)}let Ma=null;function Br(t){var f;var e=this,r=e.ownerDocument,n=t.type,s=((f=t.composedPath)==null?void 0:f.call(t))||[],a=s[0]||t.target;Ma=t;var i=0,l=Ma===t&&t.__root;if(l){var o=s.indexOf(l);if(o!==-1&&(e===document||e===window)){t.__root=e;return}var c=s.indexOf(e);if(c===-1)return;o<=c&&(i=o)}if(a=s[i]||t.target,a!==e){Qa(t,"currentTarget",{configurable:!0,get(){return a||r}});var d=B,p=q;Oe(null),Ge(null);try{for(var h,_=[];a!==null;){var y=a.assignedSlot||a.parentNode||a.host||null;try{var P=a["__"+n];P!=null&&(!a.disabled||t.target===a)&&P.call(a,t)}catch(b){h?_.push(b):h=b}if(t.cancelBubble||y===e||y===null)break;a=y}if(h){for(let b of _)queueMicrotask(()=>{throw b});throw h}}finally{t.__root=e,delete t.currentTarget,Oe(d),Ge(p)}}}function Gi(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function ct(t,e){var r=q;r.nodes===null&&(r.nodes={start:t,end:e,a:null,t:null})}function L(t,e){var r=(e&Zo)!==0,n=(e&Xo)!==0,s,a=!t.startsWith("<!>");return()=>{if(I)return ct(U,null),U;s===void 0&&(s=Gi(a?t:"<!>"+t),r||(s=Le(s)));var i=n||Ci?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=Le(i),o=i.lastChild;ct(l,o)}else ct(i,i);return i}}function rn(t=""){if(!I){var e=xe(t+"");return ct(e,e),e}var r=U;return r.nodeType!==Fs&&(r.before(r=xe()),ge(r)),ct(r,r),r}function wn(){if(I)return ct(U,null),U;var t=document.createDocumentFragment(),e=document.createComment(""),r=xe();return t.append(e,r),ct(e,r),t}function O(t,e){if(I){var r=q;((r.f&Bs)===0||r.nodes.end===null)&&(r.nodes.end=U),xr();return}t!==null&&t.before(e)}function oe(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function Un(t,e){return Ji(t,e)}function Nl(t,e){yn(),e.intro=e.intro??!1;const r=e.target,n=I,s=U;try{for(var a=Le(r);a&&(a.nodeType!==It||a.data!==ni);)a=Ue(a);if(!a)throw nr;Ie(!0),ge(a);const i=Ji(t,{...e,anchor:a});return Ie(!1),i}catch(i){if(i instanceof Error&&i.message.split(`
`).some(l=>l.startsWith("https://svelte.dev/e/")))throw i;return i!==nr&&console.warn("Failed to hydrate: ",i),e.recover===!1&&Bo(),yn(),In(r),Ie(!1),Un(t,e)}finally{Ie(n),ge(s)}}const fr=new Map;function Ji(t,{target:e,anchor:r,props:n={},events:s,context:a,intro:i=!0}){yn();var l=new Set,o=p=>{for(var h=0;h<p.length;h++){var _=p[h];if(!l.has(_)){l.add(_);var y=Al(_);e.addEventListener(_,Br,{passive:y});var P=fr.get(_);P===void 0?(document.addEventListener(_,Br,{passive:y}),fr.set(_,1)):fr.set(_,P+1)}}};o(Hs(Yi)),kn.add(o);var c=void 0,d=bl(()=>{var p=r??e.appendChild(xe());return ll(p,{pending:()=>{}},h=>{if(a){$t({});var _=He;_.c=a}if(s&&(n.$$events=s),I&&ct(h,null),c=t(h,n)||{},I&&(q.nodes.end=U,U===null||U.nodeType!==It||U.data!==zn))throw hs(),nr;a&&xt()}),()=>{var y;for(var h of l){e.removeEventListener(h,Br);var _=fr.get(h);--_===0?(document.removeEventListener(h,Br),fr.delete(h)):fr.set(h,_)}kn.delete(o),p!==r&&((y=p.parentNode)==null||y.removeChild(p))}});return $n.set(c,d),c}let $n=new WeakMap;function Tl(t,e){const r=$n.get(t);return r?($n.delete(t),r(e)):Promise.resolve()}var tt,ot,je,Xt,fs,ps,Ds;class Ol{constructor(e,r=!0){Xe(this,"anchor");D(this,tt,new Map);D(this,ot,new Map);D(this,je,new Map);D(this,Xt,new Set);D(this,fs,!0);D(this,ps,()=>{var e=H;if(u(this,tt).has(e)){var r=u(this,tt).get(e),n=u(this,ot).get(r);if(n)Hn(n),u(this,Xt).delete(r);else{var s=u(this,je).get(r);s&&(u(this,ot).set(r,s.effect),u(this,je).delete(r),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),n=s.effect)}for(const[a,i]of u(this,tt)){if(u(this,tt).delete(a),a===e)break;const l=u(this,je).get(i);l&&(Te(l.effect),u(this,je).delete(i))}for(const[a,i]of u(this,ot)){if(a===r||u(this,Xt).has(a))continue;const l=()=>{if(Array.from(u(this,tt).values()).includes(a)){var c=document.createDocumentFragment();Hi(i,c),c.append(xe()),u(this,je).set(a,{effect:i,fragment:c})}else Te(i);u(this,Xt).delete(a),u(this,ot).delete(a)};u(this,fs)||!n?(u(this,Xt).add(a),er(i,l,!1)):l()}}});D(this,Ds,e=>{u(this,tt).delete(e);const r=Array.from(u(this,tt).values());for(const[n,s]of u(this,je))r.includes(n)||(Te(s.effect),u(this,je).delete(n))});this.anchor=e,M(this,fs,r)}ensure(e,r){var n=H,s=Ni();if(r&&!u(this,ot).has(e)&&!u(this,je).has(e))if(s){var a=document.createDocumentFragment(),i=xe();a.append(i),u(this,je).set(e,{effect:We(()=>r(i)),fragment:a})}else u(this,ot).set(e,We(()=>r(this.anchor)));if(u(this,tt).set(n,e),s){for(const[l,o]of u(this,ot))l===e?n.skipped_effects.delete(o):n.skipped_effects.add(o);for(const[l,o]of u(this,je))l===e?n.skipped_effects.delete(o.effect):n.skipped_effects.add(o.effect);n.oncommit(u(this,ps)),n.ondiscard(u(this,Ds))}else I&&(this.anchor=U),u(this,ps).call(this)}}tt=new WeakMap,ot=new WeakMap,je=new WeakMap,Xt=new WeakMap,fs=new WeakMap,ps=new WeakMap,Ds=new WeakMap;function W(t,e,r=!1){I&&xr();var n=new Ol(t),s=r?$r:0;function a(i,l){if(I){const c=ai(t)===qs;if(i===c){var o=Ts();ge(o),n.anchor=o,Ie(!1),n.ensure(i,l),Ie(!0);return}}n.ensure(i,l)}Gs(()=>{var i=!1;e((l,o=!0)=>{i=!0,a(o,l)}),i||a(!1,null)},s)}function zl(t,e){return e}function Ml(t,e,r){for(var n=[],s=e.length,a,i=e.length,l=0;l<s;l++){let p=e[l];er(p,()=>{if(a){if(a.pending.delete(p),a.done.add(p),a.pending.size===0){var h=t.outrogroups;xn(Hs(a.done)),h.delete(a),h.size===0&&(t.outrogroups=null)}}else i-=1},!1)}if(i===0){var o=n.length===0&&r!==null;if(o){var c=r,d=c.parentNode;In(d),d.append(c),t.items.clear()}xn(e,!o)}else a={pending:new Set(e),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(a)}function xn(t,e=!0){for(var r=0;r<t.length;r++)Te(t[r],e)}var ja;function Zr(t,e,r,n,s,a=null){var i=t,l=new Map,o=(e&si)!==0;if(o){var c=t;i=I?ge(Le(c)):c.appendChild(xe())}I&&xr();var d=null,p=fl(()=>{var b=r();return Xa(b)?b:b==null?[]:Hs(b)}),h,_=!0;function y(){f.fallback=d,jl(f,h,i,e,n),d!==null&&(h.length===0?(d.f&gt)===0?Hn(d):(d.f^=gt,Fr(d,null,i)):er(d,()=>{d=null}))}var P=Gs(()=>{h=v(p);var b=h.length;let E=!1;if(I){var j=ai(i)===qs;j!==(b===0)&&(i=Ts(),ge(i),Ie(!1),E=!0)}for(var K=new Set,C=H,R=Ni(),F=0;F<b;F+=1){I&&U.nodeType===It&&U.data===zn&&(i=U,E=!0,Ie(!1));var g=h[F],w=n(g,F),z=_?null:l.get(w);z?(z.v&&Cr(z.v,g),z.i&&Cr(z.i,F),R&&C.skipped_effects.delete(z.e)):(z=Rl(l,_?i:ja??(ja=xe()),g,w,F,s,e,r),_||(z.e.f|=gt),l.set(w,z)),K.add(w)}if(b===0&&a&&!d&&(_?d=We(()=>a(i)):(d=We(()=>a(ja??(ja=xe()))),d.f|=gt)),I&&b>0&&ge(Ts()),!_)if(R){for(const[Y,fe]of l)K.has(Y)||C.skipped_effects.add(fe.e);C.oncommit(y),C.ondiscard(()=>{})}else y();E&&Ie(!0),v(p)}),f={effect:P,items:l,outrogroups:null,fallback:d};_=!1,I&&(i=U)}function Dr(t){for(;t!==null&&(t.f&st)===0;)t=t.next;return t}function jl(t,e,r,n,s){var z,Y,fe,ne,V,re,Se,Ce,ke;var a=(n&Go)!==0,i=e.length,l=t.items,o=Dr(t.effect.first),c,d=null,p,h=[],_=[],y,P,f,b;if(a)for(b=0;b<i;b+=1)y=e[b],P=s(y,b),f=l.get(P).e,(f.f&gt)===0&&((Y=(z=f.nodes)==null?void 0:z.a)==null||Y.measure(),(p??(p=new Set)).add(f));for(b=0;b<i;b+=1){if(y=e[b],P=s(y,b),f=l.get(P).e,t.outrogroups!==null)for(const pe of t.outrogroups)pe.pending.delete(f),pe.done.delete(f);if((f.f&gt)!==0)if(f.f^=gt,f===o)Fr(f,null,r);else{var E=d?d.next:o;f===t.effect.last&&(t.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),Et(t,d,f),Et(t,f,E),Fr(f,E,r),d=f,h=[],_=[],o=Dr(d.next);continue}if((f.f&De)!==0&&(Hn(f),a&&((ne=(fe=f.nodes)==null?void 0:fe.a)==null||ne.unfix(),(p??(p=new Set)).delete(f))),f!==o){if(c!==void 0&&c.has(f)){if(h.length<_.length){var j=_[0],K;d=j.prev;var C=h[0],R=h[h.length-1];for(K=0;K<h.length;K+=1)Fr(h[K],j,r);for(K=0;K<_.length;K+=1)c.delete(_[K]);Et(t,C.prev,R.next),Et(t,d,C),Et(t,R,j),o=j,d=R,b-=1,h=[],_=[]}else c.delete(f),Fr(f,o,r),Et(t,f.prev,f.next),Et(t,f,d===null?t.effect.first:d.next),Et(t,d,f),d=f;continue}for(h=[],_=[];o!==null&&o!==f;)(c??(c=new Set)).add(o),_.push(o),o=Dr(o.next);if(o===null)continue}(f.f&gt)===0&&h.push(f),d=f,o=Dr(f.next)}if(t.outrogroups!==null){for(const pe of t.outrogroups)pe.pending.size===0&&(xn(Hs(pe.done)),(V=t.outrogroups)==null||V.delete(pe));t.outrogroups.size===0&&(t.outrogroups=null)}if(o!==null||c!==void 0){var F=[];if(c!==void 0)for(f of c)(f.f&De)===0&&F.push(f);for(;o!==null;)(o.f&De)===0&&o!==t.fallback&&F.push(o),o=Dr(o.next);var g=F.length;if(g>0){var w=(n&si)!==0&&i===0?r:null;if(a){for(b=0;b<g;b+=1)(Se=(re=F[b].nodes)==null?void 0:re.a)==null||Se.measure();for(b=0;b<g;b+=1)(ke=(Ce=F[b].nodes)==null?void 0:Ce.a)==null||ke.fix()}Ml(t,F,w)}}a&&lt(()=>{var pe,Ze;if(p!==void 0)for(f of p)(Ze=(pe=f.nodes)==null?void 0:pe.a)==null||Ze.apply()})}function Rl(t,e,r,n,s,a,i,l){var o=(i&Vo)!==0?(i&Jo)===0?xi(r,!1,!1):ar(r):null,c=(i&Yo)!==0?ar(s):null;return{v:o,i:c,e:We(()=>(a(e,o??r,c??s,l),()=>{t.delete(n)}))}}function Fr(t,e,r){if(t.nodes)for(var n=t.nodes.start,s=t.nodes.end,a=e&&(e.f&gt)===0?e.nodes.start:r;n!==null;){var i=Ue(n);if(a.before(n),n===s)return;n=i}}function Et(t,e,r){e===null?t.effect.first=r:e.next=r,r===null?t.effect.last=e:r.prev=e}function Zi(t,e,r=!1,n=!1,s=!1){var a=t,i="";J(()=>{var l=q;if(i===(i=e()??"")){I&&xr();return}if(l.nodes!==null&&(Ri(l.nodes.start,l.nodes.end),l.nodes=null),i!==""){if(I){U.data;for(var o=xr(),c=o;o!==null&&(o.nodeType!==It||o.data!=="");)c=o,o=Ue(o);if(o===null)throw hs(),nr;ct(U,c),a=ge(o);return}var d=i+"";r?d=`<svg>${d}</svg>`:n&&(d=`<math>${d}</math>`);var p=Gi(d);if((r||n)&&(p=Le(p)),ct(Le(p),p.lastChild),r||n)for(;Le(p);)a.before(Le(p));else a.before(p)}})}function Il(t,e){let r=null,n=I;var s;if(I){r=U;for(var a=Le(document.head);a!==null&&(a.nodeType!==It||a.data!==t);)a=Ue(a);if(a===null)Ie(!1);else{var i=Ue(a);a.remove(),ge(i)}}I||(s=document.head.appendChild(xe()));try{Gs(()=>e(s),Tn)}finally{n&&(Ie(!0),ge(r))}}function Ll(t,e,r){var n=t==null?"":""+t;return e&&(n=n?n+" "+e:e),n===""?null:n}function Ft(t,e,r,n,s,a){var i=t.__className;if(I||i!==r||i===void 0){var l=Ll(r,n);(!I||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):t.className=l),t.__className=r}return a}const Dl=Symbol("is custom element"),Hl=Symbol("is html");function Ul(t){if(I){var e=!1,r=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var n=t.value;Xr(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var s=t.checked;Xr(t,"checked",null),t.checked=s}}};t.__on_r=r,lt(r),Ti()}}function Xr(t,e,r,n){var s=Bl(t);I&&(s[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||s[e]!==(s[e]=r)&&(e==="loading"&&(t[jo]=r),r==null?t.removeAttribute(e):typeof r!="string"&&Xi(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function Qe(t,e,r){var n=B,s=q;let a=I;I&&Ie(!1),Oe(null),Ge(null);try{e!=="style"&&(En.has(t.getAttribute("is")||t.nodeName)||!customElements||customElements.get(t.getAttribute("is")||t.tagName.toLowerCase())?Xi(t).includes(e):r&&typeof r=="object")?t[e]=r:Xr(t,e,r==null?r:String(r))}finally{Oe(n),Ge(s),a&&Ie(!0)}}function Bl(t){return t.__attributes??(t.__attributes={[Dl]:t.nodeName.includes("-"),[Hl]:t.namespaceURI===Qo})}var En=new Map;function Xi(t){var e=t.getAttribute("is")||t.nodeName,r=En.get(e);if(r)return r;En.set(e,r=[]);for(var n,s=t,a=Element.prototype;a!==s;){n=Po(s);for(var i in n)n[i].set&&r.push(i);s=ei(s)}return r}function Qi(t,e,r=e){var n=new WeakSet;gl(t,"input",async s=>{var a=s?t.defaultValue:t.value;if(a=sn(t)?nn(a):a,r(a),H!==null&&n.add(H),await Sl(),a!==(a=e())){var i=t.selectionStart,l=t.selectionEnd,o=t.value.length;if(t.value=a??"",l!==null){var c=t.value.length;i===l&&l===o&&c>o?(t.selectionStart=c,t.selectionEnd=c):(t.selectionStart=i,t.selectionEnd=Math.min(l,c))}}}),(I&&t.defaultValue!==t.value||Js(e)==null&&t.value)&&(r(sn(t)?nn(t.value):t.value),H!==null&&n.add(H)),Ys(()=>{var s=e();if(t===document.activeElement){var a=fn??H;if(n.has(a))return}sn(t)&&s===nn(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function sn(t){var e=t.type;return e==="number"||e==="range"}function nn(t){return t===""?null:+t}function Ra(t,e){return t===e||(t==null?void 0:t[Ss])===e}function eo(t={},e,r,n){return yl(()=>{var s,a;return Ys(()=>{s=a,a=[],Js(()=>{t!==r(...a)&&(e(t,...a),s&&Ra(r(...s),t)&&e(null,...s))})}),()=>{lt(()=>{a&&Ra(r(...a),t)&&e(null,...a)})}}),t}function Fl(t,e,r,n,s){var a=()=>{n(r[t])};r.addEventListener(e,a),s?Ys(()=>{r[t]=s()}):a(),(r===document.body||r===window||r===document)&&Dn(()=>{r.removeEventListener(e,a)})}function Lt(t,e,r){var n;t.$$events||(t.$$events={}),(n=t.$$events)[e]||(n[e]=[]),t.$$events[e].push(r)}function Dt(t){for(var e in t)e in this&&(this[e]=t[e])}function X(t,e,r,n){var s=n,a=!0,i=()=>(a&&(a=!1,s=n),s),l;l=t[e],l===void 0&&n!==void 0&&(l=i());var o;o=()=>{var h=t[e];return h===void 0?i():(a=!0,h)};var c=!1,d=Ws(()=>(c=!1,o())),p=q;return(function(h,_){if(arguments.length>0){const y=_?v(d):h;return T(d,y),c=!0,s!==void 0&&(s=y),h}return Ot&&c||(p.f&_t)!==0?d.v:v(d)})}function Ht(t){return new ql(t)}var vt,Ke;class ql{constructor(e){D(this,vt);D(this,Ke);var a;var r=new Map,n=(i,l)=>{var o=xi(l,!1,!1);return r.set(i,o),o};const s=new Proxy({...e.props||{},$$events:{}},{get(i,l){return v(r.get(l)??n(l,Reflect.get(i,l)))},has(i,l){return l===Mo?!0:(v(r.get(l)??n(l,Reflect.get(i,l))),Reflect.has(i,l))},set(i,l,o){return T(r.get(l)??n(l,o),o),Reflect.set(i,l,o)}});M(this,Ke,(e.hydrate?Nl:Un)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((a=e==null?void 0:e.props)!=null&&a.$$host)||e.sync===!1)&&Z(),M(this,vt,s.$$events);for(const i of Object.keys(u(this,Ke)))i==="$set"||i==="$destroy"||i==="$on"||Qa(this,i,{get(){return u(this,Ke)[i]},set(l){u(this,Ke)[i]=l},enumerable:!0});u(this,Ke).$set=i=>{Object.assign(s,i)},u(this,Ke).$destroy=()=>{Tl(u(this,Ke))}}$set(e){u(this,Ke).$set(e)}$on(e,r){u(this,vt)[e]=u(this,vt)[e]||[];const n=(...s)=>r.call(this,...s);return u(this,vt)[e].push(n),()=>{u(this,vt)[e]=u(this,vt)[e].filter(s=>s!==n)}}$destroy(){u(this,Ke).$destroy()}}vt=new WeakMap,Ke=new WeakMap;function Kl(t){He===null&&Ro(),Oi(()=>{const e=Js(t);if(typeof e=="function")return e})}const Wl="5";var Ja;typeof window<"u"&&((Ja=window.__svelte??(window.__svelte={})).v??(Ja.v=new Set)).add(Wl);function to(t){const e=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),r=[],n=/```(\w*)\n?([\s\S]*?)```/g;let s,a=0;for(;(s=n.exec(e))!==null;)r.push(e.slice(a,s.index)),r.push(`<pre class="code-block"><code class="lang-${s[1]||"text"}">${s[2].replace(/\n$/,"")}</code></pre>`),a=s.index+s[0].length;return r.push(e.slice(a)),r.join("").split(/\n{2,}/).map(i=>i.startsWith("<pre")?i:`<p>${i.replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/\n/g,"<br/>")}</p>`).join("")}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ns=globalThis,Bn=Ns.ShadowRoot&&(Ns.ShadyCSS===void 0||Ns.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fn=Symbol(),Ia=new WeakMap;let ro=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Fn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Bn&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=Ia.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ia.set(r,e))}return e}toString(){return this.cssText}};const so=t=>new ro(typeof t=="string"?t:t+"",void 0,Fn),Q=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,s,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[a+1],t[0]);return new ro(r,t,Fn)},Vl=(t,e)=>{if(Bn)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),s=Ns.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,t.appendChild(n)}},La=Bn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return so(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Yl,defineProperty:Gl,getOwnPropertyDescriptor:Jl,getOwnPropertyNames:Zl,getOwnPropertySymbols:Xl,getPrototypeOf:Ql}=Object,Tt=globalThis,Da=Tt.trustedTypes,ec=Da?Da.emptyScript:"",an=Tt.reactiveElementPolyfillSupport,Vr=(t,e)=>t,Ms={toAttribute(t,e){switch(e){case Boolean:t=t?ec:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},qn=(t,e)=>!Yl(t,e),Ha={attribute:!0,type:String,converter:Ms,reflect:!1,useDefault:!1,hasChanged:qn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Tt.litPropertyMetadata??(Tt.litPropertyMetadata=new WeakMap);let pr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Ha){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,r);s!==void 0&&Gl(this.prototype,e,s)}}static getPropertyDescriptor(e,r,n){const{get:s,set:a}=Jl(this.prototype,e)??{get(){return this[r]},set(i){this[r]=i}};return{get:s,set(i){const l=s==null?void 0:s.call(this);a==null||a.call(this,i),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ha}static _$Ei(){if(this.hasOwnProperty(Vr("elementProperties")))return;const e=Ql(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Vr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Vr("properties"))){const r=this.properties,n=[...Zl(r),...Xl(r)];for(const s of n)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,s]of r)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const s=this._$Eu(r,n);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)r.unshift(La(s))}else e!==void 0&&r.push(La(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Vl(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$ET(e,r){var a;const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const i=(((a=n.converter)==null?void 0:a.toAttribute)!==void 0?n.converter:Ms).toAttribute(r,n.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,r){var a,i;const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const l=n.getPropertyOptions(s),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:Ms;this._$Em=s;const c=o.fromAttribute(r,l.type);this[s]=c??((i=this._$Ej)==null?void 0:i.get(s))??c,this._$Em=null}}requestUpdate(e,r,n,s=!1,a){var i;if(e!==void 0){const l=this.constructor;if(s===!1&&(a=this[e]),n??(n=l.getPropertyOptions(e)),!((n.hasChanged??qn)(a,r)||n.useDefault&&n.reflect&&a===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:n,reflect:s,wrapped:a},i){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??r??this[e]),a!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(r=void 0),this._$AL.set(e,r)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,i]of s){const{wrapped:l}=i,o=this[a];l!==!0||this._$AL.has(a)||o===void 0||this.C(a,void 0,i,o)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(r)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};pr.elementStyles=[],pr.shadowRootOptions={mode:"open"},pr[Vr("elementProperties")]=new Map,pr[Vr("finalized")]=new Map,an==null||an({ReactiveElement:pr}),(Tt.reactiveElementVersions??(Tt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yr=globalThis,Ua=t=>t,js=Yr.trustedTypes,Ba=js?js.createPolicy("lit-html",{createHTML:t=>t}):void 0,no="$lit$",St=`lit$${Math.random().toFixed(9).slice(2)}$`,ao="?"+St,tc=`<${ao}>`,ir=document,Qr=()=>ir.createComment(""),es=t=>t===null||typeof t!="object"&&typeof t!="function",Kn=Array.isArray,rc=t=>Kn(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",on=`[ 	
\f\r]`,Hr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fa=/-->/g,qa=/>/g,Bt=RegExp(`>|${on}(?:([^\\s"'>=/]+)(${on}*=${on}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ka=/'/g,Wa=/"/g,io=/^(?:script|style|textarea|title)$/i,sc=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),m=sc(1),or=Symbol.for("lit-noChange"),ie=Symbol.for("lit-nothing"),Va=new WeakMap,Wt=ir.createTreeWalker(ir,129);function oo(t,e){if(!Kn(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ba!==void 0?Ba.createHTML(e):e}const nc=(t,e)=>{const r=t.length-1,n=[];let s,a=e===2?"<svg>":e===3?"<math>":"",i=Hr;for(let l=0;l<r;l++){const o=t[l];let c,d,p=-1,h=0;for(;h<o.length&&(i.lastIndex=h,d=i.exec(o),d!==null);)h=i.lastIndex,i===Hr?d[1]==="!--"?i=Fa:d[1]!==void 0?i=qa:d[2]!==void 0?(io.test(d[2])&&(s=RegExp("</"+d[2],"g")),i=Bt):d[3]!==void 0&&(i=Bt):i===Bt?d[0]===">"?(i=s??Hr,p=-1):d[1]===void 0?p=-2:(p=i.lastIndex-d[2].length,c=d[1],i=d[3]===void 0?Bt:d[3]==='"'?Wa:Ka):i===Wa||i===Ka?i=Bt:i===Fa||i===qa?i=Hr:(i=Bt,s=void 0);const _=i===Bt&&t[l+1].startsWith("/>")?" ":"";a+=i===Hr?o+tc:p>=0?(n.push(c),o.slice(0,p)+no+o.slice(p)+St+_):o+St+(p===-2?l:_)}return[oo(t,a+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class ts{constructor({strings:e,_$litType$:r},n){let s;this.parts=[];let a=0,i=0;const l=e.length-1,o=this.parts,[c,d]=nc(e,r);if(this.el=ts.createElement(c,n),Wt.currentNode=this.el.content,r===2||r===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=Wt.nextNode())!==null&&o.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(no)){const h=d[i++],_=s.getAttribute(p).split(St),y=/([.?@])?(.*)/.exec(h);o.push({type:1,index:a,name:y[2],strings:_,ctor:y[1]==="."?ic:y[1]==="?"?oc:y[1]==="@"?lc:Zs}),s.removeAttribute(p)}else p.startsWith(St)&&(o.push({type:6,index:a}),s.removeAttribute(p));if(io.test(s.tagName)){const p=s.textContent.split(St),h=p.length-1;if(h>0){s.textContent=js?js.emptyScript:"";for(let _=0;_<h;_++)s.append(p[_],Qr()),Wt.nextNode(),o.push({type:2,index:++a});s.append(p[h],Qr())}}}else if(s.nodeType===8)if(s.data===ao)o.push({type:2,index:a});else{let p=-1;for(;(p=s.data.indexOf(St,p+1))!==-1;)o.push({type:7,index:a}),p+=St.length-1}a++}}static createElement(e,r){const n=ir.createElement("template");return n.innerHTML=e,n}}function Ar(t,e,r=t,n){var i,l;if(e===or)return e;let s=n!==void 0?(i=r._$Co)==null?void 0:i[n]:r._$Cl;const a=es(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),a===void 0?s=void 0:(s=new a(t),s._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=s:r._$Cl=s),s!==void 0&&(e=Ar(t,s._$AS(t,e.values),s,n)),e}class ac{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,s=((e==null?void 0:e.creationScope)??ir).importNode(r,!0);Wt.currentNode=s;let a=Wt.nextNode(),i=0,l=0,o=n[0];for(;o!==void 0;){if(i===o.index){let c;o.type===2?c=new ms(a,a.nextSibling,this,e):o.type===1?c=new o.ctor(a,o.name,o.strings,this,e):o.type===6&&(c=new cc(a,this,e)),this._$AV.push(c),o=n[++l]}i!==(o==null?void 0:o.index)&&(a=Wt.nextNode(),i++)}return Wt.currentNode=ir,s}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class ms{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,s){this.type=2,this._$AH=ie,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ar(this,e,r),es(e)?e===ie||e==null||e===""?(this._$AH!==ie&&this._$AR(),this._$AH=ie):e!==this._$AH&&e!==or&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):rc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ie&&es(this._$AH)?this._$AA.nextSibling.data=e:this.T(ir.createTextNode(e)),this._$AH=e}$(e){var a;const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ts.createElement(oo(n.h,n.h[0]),this.options)),n);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(r);else{const i=new ac(s,this),l=i.u(this.options);i.p(r),this.T(l),this._$AH=i}}_$AC(e){let r=Va.get(e.strings);return r===void 0&&Va.set(e.strings,r=new ts(e)),r}k(e){Kn(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const a of e)s===r.length?r.push(n=new ms(this.O(Qr()),this.O(Qr()),this,this.options)):n=r[s],n._$AI(a),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e!==this._$AB;){const s=Ua(e).nextSibling;Ua(e).remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Zs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,s,a){this.type=1,this._$AH=ie,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ie}_$AI(e,r=this,n,s){const a=this.strings;let i=!1;if(a===void 0)e=Ar(this,e,r,0),i=!es(e)||e!==this._$AH&&e!==or,i&&(this._$AH=e);else{const l=e;let o,c;for(e=a[0],o=0;o<a.length-1;o++)c=Ar(this,l[n+o],r,o),c===or&&(c=this._$AH[o]),i||(i=!es(c)||c!==this._$AH[o]),c===ie?e=ie:e!==ie&&(e+=(c??"")+a[o+1]),this._$AH[o]=c}i&&!s&&this.j(e)}j(e){e===ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ic extends Zs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ie?void 0:e}}class oc extends Zs{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ie)}}class lc extends Zs{constructor(e,r,n,s,a){super(e,r,n,s,a),this.type=5}_$AI(e,r=this){if((e=Ar(this,e,r,0)??ie)===or)return;const n=this._$AH,s=e===ie&&n!==ie||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==ie&&(n===ie||s);s&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class cc{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ar(this,e)}}const ln=Yr.litHtmlPolyfillSupport;ln==null||ln(ts,ms),(Yr.litHtmlVersions??(Yr.litHtmlVersions=[])).push("3.3.3");const dc=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let s=n._$litPart$;if(s===void 0){const a=(r==null?void 0:r.renderBefore)??null;n._$litPart$=s=new ms(e.insertBefore(Qr(),a),a,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rr=globalThis;let G=class extends pr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=dc(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return or}};var Za;G._$litElement$=!0,G.finalized=!0,(Za=rr.litElementHydrateSupport)==null||Za.call(rr,{LitElement:G});const cn=rr.litElementPolyfillSupport;cn==null||cn({LitElement:G});(rr.litElementVersions??(rr.litElementVersions=[])).push("4.2.2");const uc={surface:{light:"#ffffff",dark:"#171717"},"surface-muted":{light:"#f5f5f5",dark:"#1a1a1a"},"surface-hover":{light:"#f5f5f5",dark:"#1a1a1a"},"surface-active":{light:"#e5e5e5",dark:"#262626"},text:{light:"#171717",dark:"#e5e5e5"},"text-muted":{light:"#a3a3a3",dark:"#737373"},"text-faint":{light:"#737373",dark:"#525252"},"text-inverse":{light:"#fafafa",dark:"#171717"},border:{light:"#e5e5e5",dark:"#262626"},"border-strong":{light:"#d4d4d4",dark:"#404040"},focus:{light:"#a3a3a3",dark:"#525252"},accent:{light:"#c2410c",dark:"#ea580c"},"accent-text":{light:"#fafafa",dark:"#fafafa"},danger:{light:"#dc2626",dark:"#f87171"},"danger-text":{light:"#991b1b",dark:"#fca5a5"},"danger-bg":{light:"#fef2f2",dark:"#450a0a"},"danger-border":{light:"#fecaca",dark:"#7f1d1d"},success:{light:"#16a34a",dark:"#4ade80"},"success-text":{light:"#166534",dark:"#86efac"},"success-bg":{light:"#f0fdf4",dark:"#052e16"},"success-border":{light:"#bbf7d0",dark:"#166534"}},fc=`
  --ask-radius: var(--ask-radius-app, 0.5rem);
  --ask-radius-small: var(--ask-radius-app-small, 0.375rem);
  --ask-radius-pill: var(--ask-radius-app-pill, 9999px);
  --ask-font: var(--ask-font-app, inherit);
  --ask-font-size: var(--ask-font-size-app, 0.8125rem);
  --ask-font-size-small: var(--ask-font-size-app-small, 0.6875rem);
  --ask-spacing: var(--ask-spacing-app, 0.5rem);
`;function xs(t){return Object.entries(uc).map(([e,r])=>`  --ask-${e}: var(--ask-${e}-${t}, ${r[t]});`).join(`
`)}const ee=so(`
:host {
${xs("light")}
${fc}
}

/* Explicit dark theme (on the component or any ancestor) */
:host([theme="dark"]),
:host-context([theme="dark"]),
/* Legacy .dark class path */
:host-context(.dark) {
${xs("dark")}
}

/* Explicit light theme pins light */
:host([theme="light"]),
:host-context([theme="light"]) {
${xs("light")}
}

/* OS preference, unless the app pinned a theme */
@media (prefers-color-scheme: dark) {
  :host(:not([theme="light"])) {
${xs("dark")}
  }
}
`);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pc={attribute:!0,type:String,converter:Ms,reflect:!1,hasChanged:qn},hc=(t=pc,e,r)=>{const{kind:n,metadata:s}=r;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(r.name,t),n==="accessor"){const{name:i}=r;return{set(l){const o=e.get.call(this);e.set.call(this,l),this.requestUpdate(i,o,t,!0,l)},init(l){return l!==void 0&&this.C(i,void 0,t,l),l}}}if(n==="setter"){const{name:i}=r;return function(l){const o=this[i];e.call(this,l),this.requestUpdate(i,o,t,!0,l)}}throw Error("Unsupported decorator location: "+n)};function k(t){return(e,r)=>typeof r=="object"?hc(t,e,r):((n,s,a)=>{const i=s.hasOwnProperty(a);return s.constructor.createProperty(a,n),i?Object.getOwnPropertyDescriptor(s,a):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _s(t){return k({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vc=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lo(t,e){return(r,n,s)=>{const a=i=>{var l;return((l=i.renderRoot)==null?void 0:l.querySelector(t))??null};{const{get:i,set:l}=typeof n=="object"?r:s??(()=>{const o=Symbol();return{get(){return this[o]},set(c){this[o]=c}}})();return vc(r,n,{get(){let o=i.call(this);return o===void 0&&(o=a(this),(o!==null||this.hasUpdated)&&l.call(this,o)),o}})}}}var gc=Object.defineProperty,co=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&gc(e,r,s),s};const ta=class ta extends G{constructor(){super(...arguments),this.role="user",this.content=""}render(){const e=this.role==="assistant";return m`
      <div class="message-row ${e?"":"message-row--right"}">
        <div
          class="message-bubble ${e?"message-bubble--assistant":"message-bubble--user"}"
          style="${e?"color: var(--ask-text, #171717)":"background: var(--ask-surface-muted, #f5f5f5); color: var(--ask-text, #171717)"}"
        >${this.content}</div>
      </div>
    `}};ta.styles=Q`${ee}

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
    
    
  `;let rs=ta;co([k({type:String})],rs.prototype,"role");co([k({type:String})],rs.prototype,"content");customElements.define("ask-message",rs);var mc=Object.defineProperty,Xs=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&mc(e,r,s),s};const ra=class ra extends G{constructor(){super(...arguments),this.content="",this.label="Thought",this.open=!1,this.streaming=!1}_handleToggle(){this.streaming||(this.open=!this.open,this.dispatchEvent(new CustomEvent("ask-toggle",{detail:{open:this.open},bubbles:!0,composed:!0})))}_handleKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleToggle())}render(){const e=this.content&&this.content.length>0,r=this.streaming||this.open;return!e&&!this.streaming?m``:m`
      <div
        class="thinking-header"
        @click=${this._handleToggle}
        role="button"
        tabindex="0"
        aria-expanded=${r}
        @keydown=${this._handleKeydown}
      >
        ${this.streaming?m`<span class="thinking-dots">
              <span class="thinking-dot" style="animation-delay:0ms">.</span>
              <span class="thinking-dot" style="animation-delay:200ms">.</span>
              <span class="thinking-dot" style="animation-delay:400ms">.</span>
            </span>`:""}
        <span class="thinking-label">${this.label}</span>
        ${this.streaming?"":m`<span class="chevron ${r?"chevron--open":""}">▸</span>`}
      </div>
      <div class="thinking-body ${r?"thinking-body--expanded":""}">
        <div class="thinking-body-inner">${this.content}</div>
      </div>
    `}};ra.styles=Q`${ee}

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

    
    
  `;let lr=ra;Xs([k({type:String})],lr.prototype,"content");Xs([k({type:String})],lr.prototype,"label");Xs([k({type:Boolean,reflect:!0})],lr.prototype,"open");Xs([k({type:Boolean,reflect:!0})],lr.prototype,"streaming");customElements.define("ask-thinking",lr);var _c=Object.defineProperty,Wn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&_c(e,r,s),s};const sa=class sa extends G{constructor(){super(...arguments),this.name="Tool",this.status="running",this.duration=0}render(){const e=this.status==="failed",r=this.status==="done";let n,s,a;r?(n="✓",s="",a="done"):e?(n="✕",s="",a="failed"):(n="⚙",s="tool-icon--running",a="running");const i=this.duration>0?`${this.duration}ms`:"";return m`
      <div class="tool-card ${e?"tool-card--failed":""}">
        <span class="tool-icon ${s}">${n}</span>
        <span class="tool-name">${this.name}</span>
        <span class="tool-status">${a}</span>
        ${i?m`<span class="tool-duration">${i}</span>`:""}
      </div>
    `}};sa.styles=Q`${ee}

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

    
    
  `;let Pr=sa;Wn([k({type:String})],Pr.prototype,"name");Wn([k({type:String})],Pr.prototype,"status");Wn([k({type:Number})],Pr.prototype,"duration");customElements.define("ask-tool-call",Pr);var bc=Object.defineProperty,bs=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&bc(e,r,s),s};const na=class na extends G{constructor(){super(...arguments),this.actionId=0,this.toolName="Tool",this.args="",this.message="",this.status="pending"}render(){const e=this.status==="pending",r=this.status==="pending"?m`<span class="status-chip status-chip--pending">Awaiting approval</span>`:this.status==="approved"?m`<span class="status-chip status-chip--approved">Approved</span>`:m`<span class="status-chip status-chip--rejected">Rejected</span>`;return m`
      <div class="approval ${e?"approval--pending":""}">
        <div class="head">
          <span class="icon">✋</span>
          <span class="tool-name">${this.toolName}</span>
          ${r}
        </div>
        ${this.args?m`<pre class="args">${this.args}</pre>`:""}
        ${this.message?m`<div class="message">${this.message}</div>`:""}
        ${e?m`
          <div class="actions">
            <button class="btn-approve" @click=${this._approve}>Approve</button>
            <button class="btn-reject" @click=${this._reject}>Reject</button>
          </div>
        `:""}
      </div>`}_approve(){this.dispatchEvent(new CustomEvent("approval-approved",{detail:{id:this.actionId},bubbles:!0,composed:!0}))}_reject(){this.dispatchEvent(new CustomEvent("approval-rejected",{detail:{id:this.actionId},bubbles:!0,composed:!0}))}};na.styles=Q`${ee}

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
  `;let zt=na;bs([k({type:Number,attribute:"action-id"})],zt.prototype,"actionId");bs([k({type:String,attribute:"tool-name"})],zt.prototype,"toolName");bs([k({type:String})],zt.prototype,"args");bs([k({type:String})],zt.prototype,"message");bs([k({type:String})],zt.prototype,"status");customElements.define("ask-tool-approval",zt);var yc=Object.defineProperty,kc=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&yc(e,r,s),s};const aa=class aa extends G{constructor(){super(...arguments),this.todos=[]}render(){if(this.todos.length===0)return m``;const e=this.todos.map(r=>typeof r=="string"?{id:r,title:r,status:"pending"}:r);return m`
      <ul class="todos">
        ${e.map(r=>m`
          <li class="todo todo--${r.status}">
            <span class="dot"></span>
            <span class="title">${r.title}</span>
            <span class="status">${r.status.replace("_"," ")}</span>
          </li>
        `)}
      </ul>`}};aa.styles=Q`${ee}

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
  `;let Rs=aa;kc([k({type:Array})],Rs.prototype,"todos");customElements.define("ask-todo-list",Rs);var wc=Object.defineProperty,uo=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&wc(e,r,s),s};const ia=class ia extends G{constructor(){super(...arguments),this.plan="",this.status="proposed"}render(){const e=this.status==="proposed",r=this.status==="proposed"?m`<span class="status-chip status-chip--proposed">Proposed</span>`:this.status==="approved"?m`<span class="status-chip status-chip--approved">Approved</span>`:m`<span class="status-chip status-chip--rejected">Rejected</span>`;return m`
      <div class="plan">
        <div class="head">
          <span>📋 Plan</span>
          ${r}
        </div>
        <pre class="body">${this.plan}</pre>
        ${e?m`
          <div class="actions">
            <button class="btn-approve" @click=${this._approve}>Approve plan</button>
            <button class="btn-reject" @click=${this._reject}>Reject plan</button>
          </div>
        `:""}
      </div>`}_approve(){this.dispatchEvent(new CustomEvent("plan-approved",{detail:{plan:this.plan},bubbles:!0,composed:!0}))}_reject(){this.dispatchEvent(new CustomEvent("plan-rejected",{detail:{plan:this.plan},bubbles:!0,composed:!0}))}};ia.styles=Q`${ee}

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
  `;let ss=ia;uo([k({type:String})],ss.prototype,"plan");uo([k({type:String})],ss.prototype,"status");customElements.define("ask-plan",ss);var $c=Object.defineProperty,fo=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&$c(e,r,s),s};const oa=class oa extends G{constructor(){super(...arguments),this.diff="",this.filename=""}render(){const e=xc(this.diff);if(e.lines.length===0&&!this.filename)return m`<pre class="diff"><div class="diff--empty">No changes</div></pre>`;const r=this.filename?m`<div class="file-header"><span>${this.filename}</span><span class="hunk-count">+${e.adds} −${e.dels}</span></div>`:e.fileNames.length>0?m`<div class="file-header"><span>${e.fileNames.join(" → ")}</span><span class="hunk-count">+${e.adds} −${e.dels}</span></div>`:"";return m`
      <div class="diff">
        ${r}
        ${e.hunks.map(n=>m`
          <div class="hunk">
            <div class="hunk-header">${n.header}</div>
            ${n.lines.map(s=>{const a=s.type==="add"?"line--add":s.type==="del"?"line--del":"",i=s.type==="add"?"+":s.type==="del"?"−":" ";return m`
                <div class="line ${a}">
                  <span class="old-no">${s.oldNo??""}</span>
                  <span class="new-no">${s.newNo??""}</span>
                  <span class="content"><span class="marker">${i}</span>${s.text}</span>
                </div>`})}
          </div>
        `)}
      </div>`}};oa.styles=Q`${ee}

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
  `;let ns=oa;fo([k({type:String})],ns.prototype,"diff");fo([k({type:String})],ns.prototype,"filename");function xc(t){const e=[],r=[];let n=0,s=0,a=null,i=0,l=0;for(const c of t.split(`
`)){const d=c.replace(/\r$/,"");if(d.startsWith("+++ ")||d.startsWith("--- ")){r.push(d.slice(4).replace(/^[ab]\//,""));continue}if(d.startsWith("@@")){a={header:d,lines:[]},e.push(a);const p=d.match(/@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/);i=p?parseInt(p[1],10):0,l=p?parseInt(p[2],10):0;continue}a&&(d.startsWith("+")?(a.lines.push({type:"add",text:d.slice(1),oldNo:null,newNo:l}),l+=1,n+=1):d.startsWith("-")?(a.lines.push({type:"del",text:d.slice(1),oldNo:i,newNo:null}),i+=1,s+=1):(a.lines.push({type:"ctx",text:d.slice(1),oldNo:i,newNo:l}),i+=1,l+=1))}const o=e.flatMap(c=>c.lines);return{hunks:e,lines:o,fileNames:r,adds:n,dels:s}}customElements.define("ask-diff",ns);var Ec=Object.defineProperty,Vn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Ec(e,r,s),s};const la=class la extends G{constructor(){super(...arguments),this.output="",this.maxLines=8,this.expanded=!1}render(){const e=this.output.replace(/\x1b\[[0-9;]*m/g,"");if(!e)return m`<div class="terminal"><div class="output output--empty">No output</div></div>`;const r=e.split(`
`),n=!this.expanded&&r.length>this.maxLines,s=n?r.slice(0,this.maxLines):r,a=`calc(${this.maxLines} * 1.1rem)`;return m`
      <div class="terminal">
        <div class="bar">
          <span class="label">Terminal</span>
          <span class="count">${r.length} lines</span>
          <button @click=${this._copy}>Copy</button>
          ${n?m`<button @click=${this._toggle}>Show all</button>`:""}
        </div>
        <pre class="output" style=${n?`max-height: ${a}`:""}>${s.join(`
`)}</pre>
      </div>`}_toggle(){this.expanded=!this.expanded}async _copy(){var e;try{await navigator.clipboard.writeText(this.output)}catch{const r=(e=this.shadowRoot)==null?void 0:e.querySelector(".output"),n=document.createRange();if(r){n.selectNodeContents(r);const s=window.getSelection();s==null||s.removeAllRanges(),s==null||s.addRange(n)}}}};la.styles=Q`${ee}

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
  `;let Nr=la;Vn([k({type:String})],Nr.prototype,"output");Vn([k({type:Number,attribute:"max-lines"})],Nr.prototype,"maxLines");Vn([k({type:Boolean})],Nr.prototype,"expanded");customElements.define("ask-terminal-output",Nr);var Sc=Object.defineProperty,po=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Sc(e,r,s),s};const ca=class ca extends G{constructor(){super(...arguments),this.content="",this.active=!1}render(){return this.active?m`
      <div class="streaming-content">
        ${this.content}<span class="streaming-cursor" aria-hidden="true"></span>
      </div>
    `:m``}};ca.styles=Q`${ee}

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
  `;let as=ca;po([k({type:String})],as.prototype,"content");po([k({type:Boolean,reflect:!0})],as.prototype,"active");customElements.define("ask-streaming",as);var Cc=Object.defineProperty,Yn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Cc(e,r,s),s};const da=class da extends G{constructor(){super(...arguments),this.code="",this.language="",this._copied=!1}async _handleCopy(){try{await navigator.clipboard.writeText(this.code),this._copied=!0,setTimeout(()=>{this._copied=!1},2e3)}catch{}}render(){return this.code?m`
      <div class="code-wrapper">
        <div class="code-header">
          <span class="code-language">${this.language||"code"}</span>
          <button class="code-copy-btn" @click=${this._handleCopy}>
            ${this._copied?"✅":"📋"} ${this._copied?"Copied":"Copy"}
          </button>
        </div>
        <pre class="code-body"><code>${this.code}</code></pre>
      </div>
    `:m``}};da.styles=Q`${ee}

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

    
    
  `;let Tr=da;Yn([k({type:String})],Tr.prototype,"code");Yn([k({type:String})],Tr.prototype,"language");Yn([_s()],Tr.prototype,"_copied");customElements.define("ask-code-block",Tr);var Ac=Object.defineProperty,ys=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Ac(e,r,s),s};const ua=class ua extends G{constructor(){super(...arguments),this.value="",this.placeholder="Type a message...",this.disabled=!1,this.streaming=!1}_handleInput(e){const r=e.target;this.value=r.value,this._autoResize(),this.dispatchEvent(new CustomEvent("ask-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_autoResize(){const e=this._textarea;e.style.height="auto",e.style.height=Math.min(e.scrollHeight,192)+"px"}_handleKeydown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this._submit())}_submit(){const e=this.value.trim();!e||this.disabled||this.streaming||this.dispatchEvent(new CustomEvent("ask-submit",{detail:{value:e},bubbles:!0,composed:!0}))}_handleStop(){this.dispatchEvent(new CustomEvent("ask-stop",{bubbles:!0,composed:!0}))}_handleKeydownGlobal(e){e.key==="Escape"&&this.streaming&&this._handleStop()}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._handleKeydownGlobal.bind(this))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._handleKeydownGlobal.bind(this))}render(){const e=this.querySelector(":scope > [slot='context']")!==null,r=this.querySelector(":scope > [slot='toolbar']")!==null;return m`
      ${e?m`<div class="input-context" part="context"><slot name="context"></slot></div>`:""}
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
        ${r?m`
              <div class="input-toolbar" part="toolbar">
                <slot name="toolbar"></slot>
                <span class="input-toolbar-spacer"></span>
                ${this._sendButton()}
              </div>
            `:""}
      </div>
    `}_sendButton(){return m`
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
    `}};ua.styles=Q`${ee}

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

    
    
  `;let Mt=ua;ys([k({type:String})],Mt.prototype,"value");ys([k({type:String})],Mt.prototype,"placeholder");ys([k({type:Boolean,reflect:!0})],Mt.prototype,"disabled");ys([k({type:Boolean,reflect:!0})],Mt.prototype,"streaming");ys([lo(".input-textarea")],Mt.prototype,"_textarea");customElements.define("ask-chat-input",Mt);var Pc=Object.defineProperty,Qs=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Pc(e,r,s),s};const fa=class fa extends G{constructor(){super(...arguments),this.src="",this.name="",this.role="assistant",this.size=28}render(){const e=`${this.size}px`;if(this.src)return m`
        <div class="avatar" style="width: ${e}; height: ${e};">
          <img class="avatar-img" src=${this.src} alt=${this.name||"avatar"} />
        </div>
      `;let r;return this.name?r=this.name.charAt(0).toUpperCase():r=this.role==="assistant"?"🤖":"👤",m`
      <div class="avatar" style="width: ${e}; height: ${e};">
        <span class="avatar-fallback">${r}</span>
      </div>
    `}};fa.styles=Q`${ee}

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

    
    
  `;let cr=fa;Qs([k({type:String})],cr.prototype,"src");Qs([k({type:String})],cr.prototype,"name");Qs([k({type:String})],cr.prototype,"role");Qs([k({type:Number})],cr.prototype,"size");customElements.define("ask-avatar",cr);var Nc=Object.defineProperty,ks=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Nc(e,r,s),s};const pa=class pa extends G{constructor(){super(...arguments),this.name="",this.size=0,this.type="",this.src="",this.removable=!1}_formatSize(e){return e<1024?`${e}B`:e<1048576?`${(e/1024).toFixed(1)}KB`:`${(e/1048576).toFixed(1)}MB`}_handleRemove(){this.dispatchEvent(new CustomEvent("ask-remove",{detail:{name:this.name},bubbles:!0,composed:!0}))}render(){const e=this.type.startsWith("image/"),n=this.type.includes("pdf")?"📕":"📄";return m`
      <div class="attachment-card">
        <div class="attachment-preview">
          ${e?m`<img class="attachment-preview-img" src=${this.src||""} alt=${this.name} />`:m`<span>${n}</span>`}
        </div>
        <div class="attachment-info">
          <span class="attachment-name" title=${this.name}>${this.name}</span>
          <span class="attachment-size">${this._formatSize(this.size)}</span>
        </div>
        ${this.removable?m`
              <button class="attachment-remove" @click=${this._handleRemove} aria-label="Remove ${this.name}">
                ×
              </button>
            `:""}
      </div>
    `}};pa.styles=Q`${ee}

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

    
    
  `;let jt=pa;ks([k({type:String})],jt.prototype,"name");ks([k({type:Number})],jt.prototype,"size");ks([k({type:String})],jt.prototype,"type");ks([k({type:String})],jt.prototype,"src");ks([k({type:Boolean})],jt.prototype,"removable");customElements.define("ask-attachment",jt);var Tc=Object.defineProperty,Gn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Tc(e,r,s),s};const ha=class ha extends G{constructor(){super(...arguments),this.message="",this.title="Something went wrong",this.retryable=!1}_handleRetry(){this.dispatchEvent(new CustomEvent("ask-retry",{bubbles:!0,composed:!0}))}render(){return this.message?m`
      <div class="error-card">
        <span class="error-icon">⚠️</span>
        <div class="error-content">
          <div class="error-title">${this.title}</div>
          <div class="error-message">${this.message}</div>
          ${this.retryable?m`<button class="error-retry" @click=${this._handleRetry}>Retry</button>`:""}
        </div>
      </div>
    `:m``}};ha.styles=Q`${ee}

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

    
    
  `;let Or=ha;Gn([k({type:String})],Or.prototype,"message");Gn([k({type:String})],Or.prototype,"title");Gn([k({type:Boolean})],Or.prototype,"retryable");customElements.define("ask-error",Or);var Oc=Object.defineProperty,ho=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Oc(e,r,s),s};const va=class va extends G{constructor(){super(...arguments),this.suggestions="",this.label="Suggestions"}_parsedSuggestions(){try{const e=JSON.parse(this.suggestions);if(Array.isArray(e))return e}catch{}return this.suggestions?this.suggestions.split(",").map(e=>e.trim()).filter(Boolean):[]}_handleSelect(e){this.dispatchEvent(new CustomEvent("ask-select",{detail:{suggestion:e},bubbles:!0,composed:!0}))}render(){const e=this._parsedSuggestions();return e.length===0?m``:m`
      <div class="suggestions-label">${this.label}</div>
      <div class="suggestions-list">
        ${e.map(r=>m`
            <button class="suggestion-chip" @click=${()=>this._handleSelect(r)}>${r}</button>
          `)}
      </div>
    `}};va.styles=Q`${ee}

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

    
    
  `;let is=va;ho([k({type:String})],is.prototype,"suggestions");ho([k({type:String})],is.prototype,"label");customElements.define("ask-suggestions",is);var zc=Object.defineProperty,Jn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&zc(e,r,s),s};const ga=class ga extends G{constructor(){super(...arguments),this.options="",this.value="",this.label=""}_parsedOptions(){try{const e=JSON.parse(this.options);if(Array.isArray(e))return e}catch{}return[]}_handleChange(e){const r=e.target;this.value=r.value,this.dispatchEvent(new CustomEvent("ask-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const e=this._parsedOptions();return m`
      <div class="selector-wrapper">
        ${this.label?m`<span class="selector-label">${this.label}</span>`:""}
        <select class="selector-select" @change=${this._handleChange} .value=${this.value}>
          ${e.map(r=>m`
              <option value=${r.value} ?selected=${r.value===this.value}>${r.label}</option>
            `)}
        </select>
      </div>
    `}};ga.styles=Q`${ee}

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

    
    
  `;let zr=ga;Jn([k({type:String})],zr.prototype,"options");Jn([k({type:String})],zr.prototype,"value");Jn([k({type:String})],zr.prototype,"label");customElements.define("ask-model-selector",zr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mc={CHILD:2},jc=t=>(...e)=>({_$litDirective$:t,values:e});class Rc{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Sn extends Rc{constructor(e){if(super(e),this.it=ie,e.type!==Mc.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ie||e==null)return this._t=void 0,this.it=e;if(e===or)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Sn.directiveName="unsafeHTML",Sn.resultType=1;const Cn=jc(Sn);var Ic=Object.defineProperty,vo=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Ic(e,r,s),s};function Lc(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Dc(t){let e=Lc(t);return e=e.replace(/`([^`]+)`/g,"<code>$1</code>"),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),e=e.replace(/\n/g,"<br>"),e}const ma=class ma extends G{constructor(){super(...arguments),this.content="",this.html=""}render(){if(this.html)return m`
        <div class="markdown-content">${Cn(this.html)}</div>
      `;if(!this.content)return m``;const e=Dc(this.content);return m`
      <div class="markdown-content">${Cn(e)}</div>
    `}};ma.styles=Q`${ee}

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

    
    
  `;let os=ma;vo([k({type:String})],os.prototype,"content");vo([k({type:String})],os.prototype,"html");customElements.define("ask-markdown",os);var Hc=Object.defineProperty,ws=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Hc(e,r,s),s};const _a=class _a extends G{constructor(){super(...arguments),this.accept="",this.multiple=!0,this.disabled=!1,this.files=""}_handleKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleClick())}_handleClick(){this.disabled||this._input.click()}_handleFileChange(e){const r=e.target,n=r.files;if(!n||n.length===0)return;const s=[];for(let l=0;l<n.length;l++){const o=n[l],c={name:o.name,size:o.size,type:o.type};o.type.startsWith("image/")&&(c.src=URL.createObjectURL(o)),s.push(c)}const i=[...this._parsedFiles(),...s];this.files=JSON.stringify(i),r.value="",this.dispatchEvent(new CustomEvent("ask-files-select",{detail:{files:s},bubbles:!0,composed:!0}))}_handleRemove(e){const r=e.detail.name,n=this._parsedFiles().filter(s=>s.name!==r);this.files=JSON.stringify(n),this.dispatchEvent(new CustomEvent("ask-file-remove",{detail:{name:r},bubbles:!0,composed:!0}))}_parsedFiles(){try{const e=JSON.parse(this.files);if(Array.isArray(e))return e}catch{}return[]}render(){const e=this._parsedFiles();return m`
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
      ${e.length>0?m`
            <div class="file-list">
              ${e.map(r=>m`
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
    `}};_a.styles=Q`${ee}

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

    
    
  `;let Rt=_a;ws([k({type:String})],Rt.prototype,"accept");ws([k({type:Boolean})],Rt.prototype,"multiple");ws([k({type:Boolean})],Rt.prototype,"disabled");ws([k({type:String})],Rt.prototype,"files");ws([lo(".dropzone-input")],Rt.prototype,"_input");customElements.define("ask-file-upload",Rt);var Uc=Object.defineProperty,Zn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Uc(e,r,s),s};function Ya(t){const e=Date.now()-new Date(t).getTime(),r=Math.floor(e/1e3);if(r<60)return"just now";const n=Math.floor(r/60);if(n<60)return`${n}m ago`;const s=Math.floor(n/60);if(s<24)return`${s}h ago`;const a=Math.floor(s/24);return a<30?`${a}d ago`:new Date(t).toLocaleDateString()}const ba=class ba extends G{constructor(){super(...arguments),this.items="",this.activeId="",this._search=""}_parsedItems(){try{const e=JSON.parse(this.items);if(Array.isArray(e))return e}catch{}return[]}_handleSearch(e){this._search=e.target.value}_handleItemKeydown(e,r){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleSelect(r))}_handleSelect(e){this.dispatchEvent(new CustomEvent("ask-select",{detail:{id:e},bubbles:!0,composed:!0}))}render(){const e=this._parsedItems(),r=this._search.toLowerCase(),n=e.filter(i=>r?i.title.toLowerCase().includes(r)||`${i.messageCount||0} messages`.includes(r):!0),s=n.some(i=>i.status!=="closed"),a=n.some(i=>i.status==="closed");return e.length===0?m`
        <div class="empty-state">
          <p>No conversations yet</p>
        </div>
      `:m`
      <input
        class="search-input"
        type="search"
        placeholder="Search conversations..."
        @input=${this._handleSearch}
        .value=${this._search}
      />

      ${s?m`
            <div class="section-header">Open</div>
            ${n.filter(i=>i.status!=="closed").map(i=>m`
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
                        ${i.timestamp?m`<span>·</span><span>${Ya(i.timestamp)}</span>`:""}
                      </div>
                    </div>
                  </div>
                `)}
          `:""}

      ${a?m`
            <div class="section-header">Closed</div>
            ${n.filter(i=>i.status==="closed").map(i=>m`
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
                        ${i.timestamp?m`<span>·</span><span>${Ya(i.timestamp)}</span>`:""}
                      </div>
                    </div>
                  </div>
                `)}
          `:""}
    `}};ba.styles=Q`${ee}

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

    
    
  `;let Mr=ba;Zn([k({type:String})],Mr.prototype,"items");Zn([k({type:String})],Mr.prototype,"activeId");Zn([_s()],Mr.prototype,"_search");customElements.define("ask-conversation-list",Mr);var Bc=Object.defineProperty,Lr=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Bc(e,r,s),s};const ya=class ya extends G{constructor(){super(...arguments),this.groups="",this.activeId="",this.newChatLabel="New chat",this.storageKey="ask-sidebar",this._collapsed={},this._expanded={}}connectedCallback(){super.connectedCallback(),this._loadState()}_loadState(){try{const e=sessionStorage.getItem(this.storageKey);if(!e)return;const r=JSON.parse(e);this._collapsed=r.collapsed||{},this._expanded=r.expanded||{}}catch{}}_saveState(){try{sessionStorage.setItem(this.storageKey,JSON.stringify({collapsed:this._collapsed,expanded:this._expanded}))}catch{}}_parsedGroups(){try{const e=JSON.parse(this.groups);if(Array.isArray(e))return e}catch{}return[]}_emit(e,r){this.dispatchEvent(new CustomEvent(e,{detail:r,bubbles:!0,composed:!0}))}_group(e){return this._parsedGroups().find(r=>r.id===e)}_findNode(e){for(const r of this._parsedGroups()){const n=this._searchNode(r.nodes,e);if(n)return n}}_searchNode(e,r){for(const n of e){if(n.id===r)return n;const s=this._searchNode(n.children??[],r);if(s)return s}}_toggleGroup(e){this._collapsed={...this._collapsed,[e]:!this._isCollapsed(e)},this._saveState()}_toggleNode(e){const r=this._findNode(e),n=r?!this._isExpanded(r):!(this._expanded[e]??!1);this._expanded={...this._expanded,[e]:n},this._saveState()}_isCollapsed(e){var r;return this._collapsed[e]??((r=this._group(e))==null?void 0:r.collapsed)??!1}_isExpanded(e){return this._expanded[e.id]??this._containsActive(e)}_containsActive(e){return e.id===this.activeId?!0:(e.children??[]).some(r=>r.id===this.activeId)}_node(e,r){if((e.children??[]).length>0){const s=this._isExpanded(e);return m`
        <div>
          <button
            class="node node--indent-${r} ${this._containsActive(e)?"node--active":""}"
            @click=${()=>this._toggleNode(e.id)}
          >
            <span class="chevron ${s?"chevron--open":""}">▸</span>
            <span class="node-dot ${e.kind==="site"?"node-dot--accent":""}"></span>
            <span class="node-content">
              <span class="node-label">${e.label}</span>
              ${e.sub?m`<span class="node-sub">${e.sub}</span>`:""}
            </span>
          </button>
          ${s?m`${(e.children??[]).map(a=>this._node(a,r+1))}`:""}
        </div>
      `}return m`
      <button
        class="node node--indent-${r} ${e.id===this.activeId?"node--active":""}"
        @click=${()=>this._emit("ask-select",{id:e.id})}
      >
        <span class="node-dot ${e.kind==="site"?"node-dot--accent":""}"></span>
        <span class="node-content">
          <span class="node-label">${e.label}</span>
          ${e.sub?m`<span class="node-sub">${e.sub}</span>`:""}
        </span>
      </button>
    `}render(){const e=this._parsedGroups();return m`
      <button class="new-chat" @click=${()=>this._emit("ask-new-chat",{})}>
        ＋ ${this.newChatLabel}
      </button>

      ${e.length===0?m`<div class="empty">No conversations yet</div>`:e.map(r=>m`
              <div class="group">
                <button class="group-header" @click=${()=>this._toggleGroup(r.id)}>
                  <span class="chevron ${this._isCollapsed(r.id)?"":"chevron--open"}">▸</span>
                  ${r.label}
                </button>
                ${this._isCollapsed(r.id)?"":m`<div class="group-nodes">${r.nodes.map(n=>this._node(n,0))}</div>`}
              </div>
            `)}
    `}};ya.styles=Q`${ee}

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

    
    
  `;let yt=ya;Lr([k({type:String})],yt.prototype,"groups");Lr([k({type:String,attribute:"active-id"})],yt.prototype,"activeId");Lr([k({type:String,attribute:"new-chat-label"})],yt.prototype,"newChatLabel");Lr([k({type:String,attribute:"storage-key"})],yt.prototype,"storageKey");Lr([_s()],yt.prototype,"_collapsed");Lr([_s()],yt.prototype,"_expanded");customElements.define("ask-sidebar",yt);var Fc=Object.defineProperty,Xn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Fc(e,r,s),s};const ka=class ka extends G{constructor(){super(...arguments),this.recording=!1,this.disabled=!1,this._elapsed=0,this._timerId=null}_handleClick(){this.disabled||(this.recording?this._stopRecording():this._startRecording())}_startRecording(){this.recording=!0,this._elapsed=0,this._timerId=setInterval(()=>{this._elapsed++},1e3),this.dispatchEvent(new CustomEvent("ask-record-start",{bubbles:!0,composed:!0}))}_stopRecording(){this.recording=!1,this._timerId&&(clearInterval(this._timerId),this._timerId=null),this.dispatchEvent(new CustomEvent("ask-record-stop",{detail:{elapsed:this._elapsed},bubbles:!0,composed:!0}))}disconnectedCallback(){super.disconnectedCallback(),this._timerId&&clearInterval(this._timerId)}_formatTime(e){const r=Math.floor(e/60),n=e%60;return`${r}:${n.toString().padStart(2,"0")}`}render(){return m`
      <button
        class="voice-btn ${this.recording?"voice-btn--recording":""}"
        @click=${this._handleClick}
        ?disabled=${this.disabled}
        aria-label=${this.recording?"Stop recording":"Start recording"}
      >
        ${this.recording?"⏹":"🎤"}
      </button>
      ${this.recording?m`<span class="voice-timer">${this._formatTime(this._elapsed)}</span>`:""}
    `}};ka.styles=Q`${ee}

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

    
    
  `;let jr=ka;Xn([k({type:Boolean,reflect:!0})],jr.prototype,"recording");Xn([k({type:Boolean})],jr.prototype,"disabled");Xn([_s()],jr.prototype,"_elapsed");customElements.define("ask-voice-input",jr);var qc=Object.defineProperty,go=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&qc(e,r,s),s};const wa=class wa extends G{constructor(){super(...arguments),this.visible=!1,this.badge=0}_handleClick(){this.dispatchEvent(new CustomEvent("ask-scroll",{bubbles:!0,composed:!0}))}render(){return m`
      <button
        class="scroll-btn ${this.visible?"scroll-btn--visible":""}"
        @click=${this._handleClick}
        aria-label="Scroll to bottom"
        ?hidden=${!this.visible}
      >
        <svg class="scroll-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
        ${this.badge>0?m`<span class="scroll-badge">${this.badge>99?"99+":this.badge}</span>`:""}
      </button>
    `}};wa.styles=Q`${ee}

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

    
    
  `;let ls=wa;go([k({type:Boolean,reflect:!0})],ls.prototype,"visible");go([k({type:Number})],ls.prototype,"badge");customElements.define("ask-scroll-bottom",ls);var Kc=Object.defineProperty,en=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Kc(e,r,s),s};const $a=class $a extends G{constructor(){super(...arguments),this.verificationUri="",this.userCode="",this.pending=!1,this.expiresLabel=""}_authorize(){this.dispatchEvent(new CustomEvent("ask-authorize",{bubbles:!0,composed:!0}))}render(){return m`
      ${this.pending?m`<div class="notice">
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

      ${this.expiresLabel?m`<p class="meta">The code expires ${this.expiresLabel}. Your tokens are encrypted at rest.</p>`:""}
    `}};$a.styles=Q`
    ${ee}

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
  `;let dr=$a;en([k({type:String,attribute:"verification-uri"})],dr.prototype,"verificationUri");en([k({type:String,attribute:"user-code"})],dr.prototype,"userCode");en([k({type:Boolean,reflect:!0})],dr.prototype,"pending");en([k({type:String,attribute:"expires-label"})],dr.prototype,"expiresLabel");customElements.define("ask-device-auth",dr);var Wc=Object.defineProperty,Qn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Wc(e,r,s),s};const Ga={explore:`
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
    </svg>`},xa=class xa extends G{constructor(){super(...arguments),this.variant="explore",this.label="",this.description=""}_accent(){const e={explore:"var(--ask-prompt-explore, #4f9cf9)",build:"var(--ask-prompt-build, #a78bfa)",review:"var(--ask-prompt-review, #34d399)",fix:"var(--ask-prompt-fix, #fb923c)",custom:"var(--ask-prompt-custom, var(--ask-accent, #c2410c))"};return e[this.variant]??e.custom}_icon(){return this.variant==="custom"?ie:m`<span class="icon" part="icon">${Cn(Ga[this.variant]??Ga.explore)}</span>`}_click(){this.dispatchEvent(new CustomEvent("ask-prompt",{detail:{label:this.label,variant:this.variant},bubbles:!0,composed:!0}))}render(){return m`
      <button class="card" style="--ask-prompt-accent: ${this._accent()}" @click=${this._click}>
        ${this.variant==="custom"?m`<span class="icon" part="icon"><slot></slot></span>`:this._icon()}
        <span class="label">${this.label}</span>
        ${this.description?m`<span class="description">${this.description}</span>`:ie}
      </button>
    `}};xa.styles=Q`${ee}

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
  `;let Rr=xa;Qn([k({type:String})],Rr.prototype,"variant");Qn([k({type:String})],Rr.prototype,"label");Qn([k({type:String})],Rr.prototype,"description");customElements.define("ask-prompt-card",Rr);var Vc=Object.defineProperty,Yc=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Vc(e,r,s),s};const Ea=class Ea extends G{constructor(){super(...arguments),this.heading=""}render(){return m`
      <div class="empty">
        <span class="icon" part="icon">
          <slot name="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17.5 19a4.5 4.5 0 1 0-.42-8.98 6 6 0 1 0-10.55 5.29"/>
              <path d="M8 14l3 3 5-6"/>
            </svg>
          </slot>
        </span>
        ${this.heading?m`<h2 class="heading">${this.heading}</h2>`:""}
        <div class="body" part="body"><slot></slot></div>
      </div>
    `}};Ea.styles=Q`${ee}

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
  `;let Is=Ea;Yc([k({type:String})],Is.prototype,"heading");customElements.define("ask-empty-state",Is);const Be="";async function Je(t){if(!t.ok){const e=await t.json().catch(()=>({}));throw new Error(e.error||`HTTP ${t.status}`)}return t.json()}async function Gc(){return Je(await fetch(`${Be}/api/config`))}async function An(){return Je(await fetch(`${Be}/api/conversations`))}async function Jc(t){return Je(await fetch(`${Be}/api/conversations/${t}`))}async function Zc(t,e){await Je(await fetch(`${Be}/api/conversations/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e})}))}async function Xc(t){await Je(await fetch(`${Be}/api/conversations/${t}`,{method:"DELETE"}))}async function Qc(t){await Je(await fetch(`${Be}/api/conversations/${t}/archive`,{method:"POST"}))}async function ed(t,e){await Je(await fetch(`${Be}/api/conversations/${t}/approvals/${e}/approve`,{method:"POST"}))}async function td(t,e){await Je(await fetch(`${Be}/api/conversations/${t}/approvals/${e}/reject`,{method:"POST"}))}async function rd(t){await Je(await fetch(`${Be}/api/conversations/${t}/approvals/approve-all`,{method:"POST"}))}async function sd(t){await Je(await fetch(`${Be}/api/conversations/${t}/plan/approve`,{method:"POST"}))}async function nd(t){await Je(await fetch(`${Be}/api/conversations/${t}/plan/reject`,{method:"POST"}))}async function ad(t){await Je(await fetch(`${Be}/api/conversations/${t}/abort`,{method:"POST"}))}function id(t,e,r,n,s,a){const i=new AbortController;return(async()=>{var l,o;try{const c=await fetch(`${Be}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,conversation_id:e||void 0,model:r||void 0}),signal:i.signal});if(!c.ok||!c.body)throw new Error(`HTTP ${c.status}`);const d=c.body.getReader(),p=new TextDecoder;let h="";for(;;){const{done:_,value:y}=await d.read();if(_)break;h+=p.decode(y,{stream:!0});let P;for(;(P=h.indexOf(`

`))!==-1;){const f=h.slice(0,P);h=h.slice(P+2);const b=(l=f.match(/^event: (.+)$/m))==null?void 0:l[1],E=(o=f.match(/^data: (.+)$/m))==null?void 0:o[1];if(!b||E===void 0)continue;if(b==="conversation.created"){s(E);continue}let j={};try{j=JSON.parse(E)}catch{}n({type:b,data:j})}}}catch(c){c.name!=="AbortError"&&n({type:"error",data:{error:c.message}})}finally{a()}})(),i}function od(t,e,r){switch(e){case"message.delta":t.text+=r.delta??"";break;case"message.thinking":t.thinking+=r.delta??"";break;case"tool.start":{const n=String(r.id??`${r.name}-${t.tools.size}`);t.tools=new Map(t.tools).set(n,{id:n,name:r.name,args:r.args,status:"running"});break}case"tool.delta":{const n=String(r.id),s=t.tools.get(n);s&&(t.tools=new Map(t.tools).set(n,{...s,partial:(s.partial??"")+(r.partial??"")}));break}case"tool.end":{const n=String(r.id),s=t.tools.get(n)??{id:n,name:r.name,status:"done"};t.tools=new Map(t.tools).set(n,{...s,output:r.output,isError:r.isError,durationMs:r.durationMs,status:r.isError?"failed":"done"});break}case"approval.required":t.approvals.push({id:r.id,toolName:r.toolName,args:r.args,message:r.message,autoApprovable:r.autoApprovable,status:"pending"});break;case"approval.updated":{const n=t.approvals.find(s=>s.id===r.id);n&&(n.status=r.status);break}case"plan.proposed":t.plan=r.plan,t.planStatus="proposed";break;case"plan.approved":t.plan=r.plan??t.plan,t.planStatus="approved";break;case"plan.rejected":t.plan=r.plan??t.plan,t.planStatus="rejected";break;case"todos.updated":t.todos=r.todos??[];break;case"turn.completed":t.status="completed",r.response&&!t.text&&(t.text=r.response);break;case"turn.failed":t.status="failed";break;case"turn.aborted":t.status="aborted";break}}function Es(){return{text:"",thinking:"",tools:new Map,approvals:[],todos:[],plan:null,planStatus:null,status:"streaming"}}var ld=L('<div class="block svelte-1l486hy"><ask-todo-list></ask-todo-list></div>',2),cd=L('<div class="block svelte-1l486hy"><ask-plan></ask-plan></div>',2),dd=L('<span class="tool-status running svelte-1l486hy">running…</span>'),ud=L('<span class="tool-status failed svelte-1l486hy">failed</span>'),fd=L('<span class="tool-status done svelte-1l486hy"> </span>'),pd=L('<pre class="tool-args svelte-1l486hy"> </pre>'),hd=L("<ask-diff></ask-diff>",2),vd=L("<ask-terminal-output></ask-terminal-output>",2),gd=L('<div class="tool svelte-1l486hy"><div class="tool-head svelte-1l486hy"><span class="tool-icon svelte-1l486hy"> </span> <span class="tool-name svelte-1l486hy"> </span> <!></div> <!> <!></div>'),md=L('<div class="block tools svelte-1l486hy"></div>'),_d=L('<button class="approve-all svelte-1l486hy"> </button>'),bd=L("<ask-tool-approval></ask-tool-approval>",2),yd=L('<div class="block approvals svelte-1l486hy"><!> <!></div>'),kd=L('<div class="tool-stream svelte-1l486hy"><!> <!> <!> <!></div>');function mo(t,e){if(new.target)return Ht({component:mo,...t});$t(e,!0);let r=X(e,"turn"),n=X(e,"conversationId");const s=Qt(()=>Array.from(r().tools.values())),a=Qt(()=>r().approvals.filter(g=>g.status==="pending"));function i(g){switch(g){case"bash":return"⌘";case"read":return"👁";case"write":return"✎";case"edit":return"✎";case"grep":return"🔎";case"glob":return"🗂";case"apply_patch":return"▤";case"todo_write":return"☑";default:return"⚙"}}function l(g){return g.startsWith("diff --git")||g.includes("--- a/")&&g.includes("+++ b/")||g.includes(`
@@ -`)}function o(g){return g.args===void 0||g.args===null?"":typeof g.args=="string"?g.args:JSON.stringify(g.args,null,2)}async function c(g){if(!n())return;await ed(n(),g);const w=r().approvals.find(z=>z.id===g);w&&(w.status="approved")}async function d(g){if(!n())return;await td(n(),g);const w=r().approvals.find(z=>z.id===g);w&&(w.status="rejected")}async function p(){if(n()){await rd(n());for(const g of r().approvals)g.status==="pending"&&(g.status="approved")}}async function h(){n()&&(await sd(n()),r().planStatus="approved")}async function _(){n()&&(await nd(n()),r().planStatus="rejected")}var y={get turn(){return r()},set turn(g){r(g),Z()},get conversationId(){return n()},set conversationId(g){n(g),Z()},$set:Dt,$on:(g,w)=>Lt(e,g,w)},P=kd(),f=S(P);{var b=g=>{var w=ld(),z=S(w);J(()=>Qe(z,"todos",r().todos)),Ft(z,1,"svelte-1l486hy"),x(w),O(g,w)};W(f,g=>{r().todos.length>0&&g(b)})}var E=A(f,2);{var j=g=>{var w=cd(),z=S(w);J(()=>Qe(z,"plan",r().plan)),J(()=>Qe(z,"status",r().planStatus)),Ft(z,1,"svelte-1l486hy"),x(w),Ur("plan-approved",z,h),Ur("plan-rejected",z,_),O(g,w)};W(E,g=>{r().plan!==null&&r().planStatus&&g(j)})}var K=A(E,2);{var C=g=>{var w=md();Zr(w,21,()=>v(s),z=>z.id,(z,Y)=>{var fe=gd(),ne=S(fe),V=S(ne),re=S(V,!0);x(V);var Se=A(V,2),Ce=S(Se,!0);x(Se);var ke=A(Se,2);{var pe=ce=>{var $e=dd();O(ce,$e)},Ze=ce=>{var $e=wn(),$=Os($e);{var N=ae=>{var Ae=ud();O(ae,Ae)},te=ae=>{var Ae=fd(),xo=S(Ae);x(Ae),J(Eo=>oe(xo,`done${Eo??""}`),[()=>v(Y).durationMs?` · ${(v(Y).durationMs/1e3).toFixed(1)}s`:""]),O(ae,Ae)};W($,ae=>{v(Y).isError?ae(N):ae(te,!1)},!0)}O(ce,$e)};W(ke,ce=>{v(Y).status==="running"?ce(pe):ce(Ze,!1)})}x(ne);var le=A(ne,2);{var we=ce=>{var $e=pd(),$=S($e,!0);x($e),J(N=>oe($,N),[()=>o(v(Y))]),O(ce,$e)};W(le,ce=>{o(v(Y))&&ce(we)})}var ye=A(le,2);{var Ut=ce=>{var $e=wn(),$=Os($e);{var N=ae=>{var Ae=hd();J(()=>Qe(Ae,"diff",v(Y).output)),Ft(Ae,1,"svelte-1l486hy"),O(ae,Ae)},te=ae=>{var Ae=vd();J(()=>Qe(Ae,"output",v(Y).output)),Qe(Ae,"max-lines",6),Ft(Ae,1,"svelte-1l486hy"),O(ae,Ae)};W($,ae=>{l(v(Y).output)?ae(N):ae(te,!1)})}O(ce,$e)};W(ye,ce=>{v(Y).status!=="running"&&v(Y).output&&ce(Ut)})}x(fe),J(ce=>{oe(re,ce),oe(Ce,v(Y).name)},[()=>i(v(Y).name)]),O(z,fe)}),x(w),O(g,w)};W(K,g=>{v(s).length>0&&g(C)})}var R=A(K,2);{var F=g=>{var w=yd(),z=S(w);{var Y=ne=>{var V=_d();V.__click=p;var re=S(V);x(V),J(()=>oe(re,`Approve all (${v(a).length??""})`)),O(ne,V)};W(z,ne=>{v(a).length>1&&ne(Y)})}var fe=A(z,2);Zr(fe,17,()=>r().approvals,ne=>ne.id,(ne,V)=>{var re=bd();J(()=>Qe(re,"action-id",v(V).id)),J(()=>Qe(re,"tool-name",v(V).toolName)),J(()=>Qe(re,"args",typeof v(V).args=="string"?v(V).args:JSON.stringify(v(V).args??{},null,2))),J(()=>Qe(re,"message",v(V).message??"")),J(()=>Qe(re,"status",v(V).status)),Ft(re,1,"svelte-1l486hy"),Ur("approval-approved",re,()=>c(v(V).id)),Ur("approval-rejected",re,()=>d(v(V).id)),O(ne,re)}),x(w),O(g,w)};W(R,g=>{r().approvals.length>0&&g(F)})}return x(P),O(t,P),xt(y)}gs(["click"]);var wd=L('<details class="thinking svelte-kpbn6d"><summary class="svelte-kpbn6d"><span class="thinking-label svelte-kpbn6d"> </span> <span class="thinking-toggle svelte-kpbn6d"> </span></summary> <div class="thinking-body svelte-kpbn6d"> </div></details>'),$d=L('<div class="markdown svelte-kpbn6d"><!></div>'),xd=L('<div class="typing svelte-kpbn6d"><span class="svelte-kpbn6d"></span><span class="svelte-kpbn6d"></span><span class="svelte-kpbn6d"></span></div>'),Ed=L('<div class="assistant svelte-kpbn6d"><!> <!> <!> <!></div>');function Pn(t,e){if(new.target)return Ht({component:Pn,...t});$t(e,!0);let r=X(e,"content"),n=X(e,"turn"),s=X(e,"streaming",7,!1),a=X(e,"conversationId",7,null),i=se(!1);const l=Qt(()=>n()!==void 0&&(n().tools.size>0||n().approvals.length>0||n().plan!==null||n().todos.length>0));var o={get content(){return r()},set content(E){r(E),Z()},get turn(){return n()},set turn(E){n(E),Z()},get streaming(){return s()},set streaming(E=!1){s(E),Z()},get conversationId(){return a()},set conversationId(E=null){a(E),Z()},$set:Dt,$on:(E,j)=>Lt(e,E,j)},c=Ed(),d=S(c);{var p=E=>{var j=wd(),K=S(j),C=S(K),R=S(C);x(C);var F=A(C,2),g=S(F,!0);x(F),x(K);var w=A(K,2),z=S(w,!0);x(w),x(j),J(()=>{oe(R,`Thinking${s()?"…":""}`),oe(g,v(i)?"Hide":"Show"),oe(z,n().thinking)}),Fl("open","toggle",j,Y=>T(i,Y),()=>v(i)),O(E,j)};W(d,E=>{n()!==void 0&&n().thinking&&E(p)})}var h=A(d,2);{var _=E=>{var j=$d(),K=S(j);Zi(K,()=>to(r())),x(j),O(E,j)};W(h,E=>{r()&&E(_)})}var y=A(h,2);{var P=E=>{mo(E,{get turn(){return n()},get conversationId(){return a()}})};W(y,E=>{n()!==void 0&&v(l)&&E(P)})}var f=A(y,2);{var b=E=>{var j=xd();O(E,j)};W(f,E=>{s()&&!r()&&!v(l)&&E(b)})}return x(c),O(t,c),xt(o)}var Sd=L('<div class="user svelte-10oznxe"><div class="bubble svelte-10oznxe"><!></div></div>');function _o(t,e){if(new.target)return Ht({component:_o,...t});$t(e,!0);let r=X(e,"content");var n={get content(){return r()},set content(l){r(l),Z()},$set:Dt,$on:(l,o)=>Lt(e,l,o)},s=Sd(),a=S(s),i=S(a);return Zi(i,()=>to(r())),x(a),x(s),O(t,s),xt(n)}var Cd=L(`<div class="empty svelte-xdaci2"><div class="empty-logo svelte-xdaci2">🔧</div> <h1 class="svelte-xdaci2"> </h1> <p class="svelte-xdaci2">Point the agent at your project and let it fire away. It can read,
        write, and run commands — watch every tool call live and approve
        what needs approving.</p></div>`),Ad=L('<div class="chat svelte-xdaci2"><!> <!> <!></div>');function bo(t,e){if(new.target)return Ht({component:bo,...t});$t(e,!0);let r=X(e,"messages"),n=X(e,"turn"),s=X(e,"streaming"),a=X(e,"conversationId"),i,l=se(!0);Oi(()=>{v(l)&&i&&(i.scrollTop=i.scrollHeight)});function o(){if(!i)return;const f=i.scrollHeight-i.scrollTop-i.clientHeight<80;T(l,f)}var c={get messages(){return r()},set messages(f){r(f),Z()},get turn(){return n()},set turn(f){n(f),Z()},get streaming(){return s()},set streaming(f){s(f),Z()},get conversationId(){return a()},set conversationId(f){a(f),Z()},$set:Dt,$on:(f,b)=>Lt(e,f,b)},d=Ad(),p=S(d);{var h=f=>{var b=Cd(),E=A(S(b),2),j=S(E,!0);x(E),Mn(2),x(b),J(()=>oe(j,a()?"Continue the conversation":"ask-coding-harness")),O(f,b)};W(p,f=>{r().length===0&&!s()&&f(h)})}var _=A(p,2);Zr(_,17,r,zl,(f,b)=>{var E=wn(),j=Os(E);{var K=R=>{_o(R,{get content(){return v(b).content}})},C=R=>{Pn(R,{get content(){return v(b).content}})};W(j,R=>{v(b).role==="user"?R(K):R(C,!1)})}O(f,E)});var y=A(_,2);{var P=f=>{Pn(f,{get content(){return n().text},get turn(){return n()},get streaming(){return s()},get conversationId(){return a()}})};W(y,f=>{(s()||n().text.trim()||n().tools.size>0||n().approvals.length>0||n().plan||n().todos.length>0)&&f(P)})}return x(d),eo(d,f=>i=f,()=>i),Ur("scroll",d,o),O(t,d),xt(c)}var Pd=L('<div class="empty svelte-181dlmc">No conversations yet.</div>'),Nd=L('<input class="svelte-181dlmc"/>'),Td=L('<span class="title svelte-181dlmc"> </span>'),Od=L('<div><!> <span class="meta svelte-181dlmc"> </span> <div class="actions svelte-181dlmc"><button class="mini svelte-181dlmc" title="Rename">✎</button> <button class="mini svelte-181dlmc"> </button> <button class="mini danger svelte-181dlmc" title="Delete">✕</button></div></div>'),zd=L('<div class="sidebar svelte-181dlmc"><div class="head svelte-181dlmc"><button class="new svelte-181dlmc"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> New conversation</button> <button class="close svelte-181dlmc" aria-label="Close sidebar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div> <div class="list svelte-181dlmc"><!> <!></div></div>');function yo(t,e){if(new.target)return Ht({component:yo,...t});$t(e,!0);let r=X(e,"conversations"),n=X(e,"currentId"),s=X(e,"streaming"),a=X(e,"onSelect"),i=X(e,"onNew"),l=X(e,"onChanged"),o=X(e,"onClose"),c=se(null),d=se("");async function p(){l()(await An())}async function h(g){const w=v(d).trim();w&&(await Zc(g,w),await p()),T(c,null)}async function _(g){await Qc(g),await p()}async function y(g){confirm("Delete this conversation?")&&(await Xc(g),await p())}var P={get conversations(){return r()},set conversations(g){r(g),Z()},get currentId(){return n()},set currentId(g){n(g),Z()},get streaming(){return s()},set streaming(g){s(g),Z()},get onSelect(){return a()},set onSelect(g){a(g),Z()},get onNew(){return i()},set onNew(g){i(g),Z()},get onChanged(){return l()},set onChanged(g){l(g),Z()},get onClose(){return o()},set onClose(g){o(g),Z()},$set:Dt,$on:(g,w)=>Lt(e,g,w)},f=zd(),b=S(f),E=S(b);E.__click=function(...g){var w;(w=i())==null||w.apply(this,g)};var j=A(E,2);j.__click=function(...g){var w;(w=o())==null||w.apply(this,g)},x(b);var K=A(b,2),C=S(K);{var R=g=>{var w=Pd();O(g,w)};W(C,g=>{r().length===0&&g(R)})}var F=A(C,2);return Zr(F,17,r,g=>g.id,(g,w)=>{var z=Od();z.__click=()=>a()(v(w).id);var Y=S(z);{var fe=le=>{var we=Nd();Ul(we),we.__keydown=ye=>{ye.key==="Enter"&&h(v(w).id),ye.key==="Escape"&&T(c,null)},we.__click=ye=>ye.stopPropagation(),Qi(we,()=>v(d),ye=>T(d,ye)),O(le,we)},ne=le=>{var we=Td(),ye=S(we,!0);x(we),J(()=>oe(ye,v(w).title)),O(le,we)};W(Y,le=>{v(c)===v(w).id?le(fe):le(ne,!1)})}var V=A(Y,2),re=S(V);x(V);var Se=A(V,2),Ce=S(Se);Ce.__click=le=>{le.stopPropagation(),T(c,v(w).id,!0),T(d,v(w).title,!0)};var ke=A(Ce,2);ke.__click=le=>{le.stopPropagation(),_(v(w).id)};var pe=S(ke,!0);x(ke);var Ze=A(ke,2);Ze.__click=le=>{le.stopPropagation(),y(v(w).id)},x(Se),x(z),J(()=>{Ft(z,1,`item ${v(w).id===n()?"active":""}`,"svelte-181dlmc"),oe(re,`${v(w).message_count??""} msgs`),Xr(ke,"title",v(w).archived?"Unarchive":"Archive"),oe(pe,v(w).archived?"↩":"🗄")}),O(g,z)}),x(K),x(f),J(()=>E.disabled=s()),O(t,f),xt(P)}gs(["click","keydown"]);var Md=L('<button class="send stop svelte-1n8df3y" aria-label="Stop"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>'),jd=L('<button class="send svelte-1n8df3y" aria-label="Send"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>'),Rd=L('<div class="hint svelte-1n8df3y"><span class="model-chip svelte-1n8df3y"> </span> <span class="shortcut svelte-1n8df3y">Shift+Enter for a new line</span></div>'),Id=L('<div class="composer svelte-1n8df3y"><div class="box svelte-1n8df3y"><textarea rows="1" class="svelte-1n8df3y"></textarea> <!></div> <!></div>');function ko(t,e){if(new.target)return Ht({component:ko,...t});$t(e,!0);let r=X(e,"streaming"),n=X(e,"model"),s=X(e,"disabled"),a=X(e,"onSend"),i=X(e,"onStop"),l=se(""),o;function c(){const C=v(l).trim();!C||r()||s()||(a()(C),T(l,""),o&&(o.style.height="auto"))}function d(C){C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),c())}function p(){o&&(o.style.height="auto",o.style.height=Math.min(o.scrollHeight,180)+"px")}var h={get streaming(){return r()},set streaming(C){r(C),Z()},get model(){return n()},set model(C){n(C),Z()},get disabled(){return s()},set disabled(C){s(C),Z()},get onSend(){return a()},set onSend(C){a(C),Z()},get onStop(){return i()},set onStop(C){i(C),Z()},$set:Dt,$on:(C,R)=>Lt(e,C,R)},_=Id(),y=S(_),P=S(y);vl(P),P.__keydown=d,P.__input=p,eo(P,C=>o=C,()=>o);var f=A(P,2);{var b=C=>{var R=Md();R.__click=function(...F){var g;(g=i())==null||g.apply(this,F)},O(C,R)},E=C=>{var R=jd();R.__click=c,J(F=>R.disabled=F,[()=>s()||!v(l).trim()]),O(C,R)};W(f,C=>{r()?C(b):C(E,!1)})}x(y);var j=A(y,2);{var K=C=>{var R=Rd(),F=S(R),g=S(F,!0);x(F),Mn(2),x(R),J(()=>oe(g,n())),O(C,R)};W(j,C=>{n()&&C(K)})}return x(_),J(()=>Xr(P,"placeholder",s()?"Connecting to the harness server…":"Ask the agent to do something…")),Qi(P,()=>v(l),C=>T(l,C)),O(t,_),xt(h)}gs(["keydown","input","click"]);var Ld=L("<button> </button>"),Dd=L('<p class="hint svelte-1u3w06f">Saved locally. New messages use this model.</p>'),Hd=L('<section class="svelte-1u3w06f"><h3 class="svelte-1u3w06f">Workspace</h3> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Name</span> <span class="value mono svelte-1u3w06f"> </span></div> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Root</span> <span class="value mono svelte-1u3w06f"> </span></div> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Git branch</span> <span class="value svelte-1u3w06f"> </span></div> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Agent</span> <span class="value mono svelte-1u3w06f"> </span></div> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Features</span> <span class="value svelte-1u3w06f"><!> <!> <!></span></div></section> <section class="svelte-1u3w06f"><h3 class="svelte-1u3w06f">Model</h3> <div class="models svelte-1u3w06f"></div> <!></section>',1),Ud=L('<p class="hint svelte-1u3w06f">No server config available.</p>'),Bd=L('<div class="overlay svelte-1u3w06f"><div class="panel svelte-1u3w06f"><div class="head svelte-1u3w06f"><h2 class="svelte-1u3w06f">Settings</h2> <button class="close svelte-1u3w06f">✕</button></div> <!></div></div>');function wo(t,e){var P;if(new.target)return Ht({component:wo,...t});$t(e,!0);let r=X(e,"config"),n=X(e,"onClose"),s=se(mt(localStorage.getItem("ach_model")||((P=r())==null?void 0:P.defaultModel)||""));const a=Qt(()=>{var f;return v(s)!==(localStorage.getItem("ach_model")||((f=r())==null?void 0:f.defaultModel)||"")});function i(f){T(s,f,!0),localStorage.setItem("ach_model",f)}var l={get config(){return r()},set config(f){r(f),Z()},get onClose(){return n()},set onClose(f){n(f),Z()},$set:Dt,$on:(f,b)=>Lt(e,f,b)},o=Bd();o.__click=function(...f){var b;(b=n())==null||b.apply(this,f)};var c=S(o);c.__click=f=>f.stopPropagation();var d=S(c),p=A(S(d),2);p.__click=function(...f){var b;(b=n())==null||b.apply(this,f)},x(d);var h=A(d,2);{var _=f=>{var b=Hd(),E=Os(b),j=A(S(E),2),K=A(S(j),2),C=S(K,!0);x(K),x(j);var R=A(j,2),F=A(S(R),2),g=S(F,!0);x(F),x(R);var w=A(R,2),z=A(S(w),2),Y=S(z,!0);x(z),x(w);var fe=A(w,2),ne=A(S(fe),2),V=S(ne,!0);x(ne),x(fe);var re=A(fe,2),Se=A(S(re),2),Ce=S(Se);{var ke=$=>{var N=rn("approvals ·");O($,N)};W(Ce,$=>{r().features.approvals&&$(ke)})}var pe=A(Ce,2);{var Ze=$=>{var N=rn("plan mode ·");O($,N)};W(pe,$=>{r().features.planMode&&$(Ze)})}var le=A(pe,2);{var we=$=>{var N=rn("todos");O($,N)};W(le,$=>{r().features.todos&&$(we)})}x(Se),x(re),x(E);var ye=A(E,2),Ut=A(S(ye),2);Zr(Ut,20,()=>r().models,$=>$,($,N)=>{var te=Ld();te.__click=()=>i(N);var ae=S(te,!0);x(te),J(()=>{Ft(te,1,`model ${N===v(s)?"active":""}`,"svelte-1u3w06f"),oe(ae,N)}),O($,te)}),x(Ut);var ce=A(Ut,2);{var $e=$=>{var N=Dd();O($,N)};W(ce,$=>{v(a)&&$($e)})}x(ye),J(()=>{oe(C,r().workspace.name),oe(g,r().workspace.root),oe(Y,r().workspace.gitBranch??"—"),oe(V,r().currentAdapter)}),O(f,b)},y=f=>{var b=Ud();O(f,b)};W(h,f=>{r()?f(_):f(y,!1)})}return x(c),x(o),O(t,o),xt(l)}gs(["click"]);var Fd=L('<span class="branch svelte-1n46o8q"> </span>'),qd=L('<button class="icon-btn stop svelte-1n46o8q" aria-label="Stop"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>'),Kd=L('<div class="sidebar-wrap svelte-1n46o8q"><!></div>'),Wd=L('<div class="banner-error svelte-1n46o8q"> </div>'),Vd=L('<div class="app svelte-1n46o8q"><header class="topbar svelte-1n46o8q"><button class="icon-btn hamburger svelte-1n46o8q" aria-label="Toggle sidebar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button> <div class="workspace svelte-1n46o8q"><span class="workspace-name svelte-1n46o8q"> </span> <!></div> <div class="topbar-actions svelte-1n46o8q"><!> <button class="icon-btn svelte-1n46o8q" aria-label="Settings"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></button></div></header> <div class="body svelte-1n46o8q"><!> <main class="main svelte-1n46o8q"><!> <!> <!></main></div> <!></div>');function $o(t,e){if(new.target)return Ht({component:$o,...t});$t(e,!0);let r=se(null),n=se(mt([])),s=se(null),a=se(mt([])),i=se(mt(Es())),l=se(!1),o=se(!1),c=se(!1),d=se(null),p=null;const h=Qt(()=>window.innerWidth<768);Kl(async()=>{try{T(r,await Gc(),!0),T(n,await An(),!0)}catch($){T(d,`Cannot reach the harness server: ${$.message}`)}});async function _($){if(!v(l))try{const N=await Jc($);T(s,N.id,!0),T(a,(N.messages??[]).map(te=>({role:te.role,content:te.content})),!0),T(i,Es(),!0),T(c,!1),T(o,!1),T(d,null)}catch(N){T(d,N.message,!0)}}function y(){v(l)||(T(s,null),T(a,[],!0),T(i,Es(),!0),T(d,null),T(o,!1))}function P($){var te;if(v(l)||!$.trim())return;v(i).text.trim()&&(v(a).length===0||v(a)[v(a).length-1].role!=="assistant")&&T(a,[...v(a),{role:"assistant",content:v(i).text.trim()}],!0);const N={role:"user",content:$.trim()};T(a,[...v(a),N],!0),T(i,Es(),!0),T(l,!0),T(d,null),p=id(N.content,v(s),(te=v(r))==null?void 0:te.defaultModel,ae=>{if(ae.type==="error"){T(d,ae.data.error,!0),v(i).status="failed";return}od(v(i),ae.type,ae.data)},ae=>{T(s,ae,!0),b()},()=>{T(l,!1),b()})}function f(){p&&p.abort(),v(s)&&ad(v(s)).catch(()=>{})}async function b(){try{T(n,await An(),!0)}catch{}}function E($){T(n,$,!0)}function j($){_($)}var K={$set:Dt,$on:($,N)=>Lt(e,$,N)},C=Vd();Il("1n46o8q",$=>{wl(()=>{var N;Si.title=((N=v(r))==null?void 0:N.workspace.name)??"ask-coding-harness"??""})});var R=S(C),F=S(R);F.__click=()=>T(o,!v(o));var g=A(F,2),w=S(g),z=S(w,!0);x(w);var Y=A(w,2);{var fe=$=>{var N=Fd(),te=S(N,!0);x(N),J(()=>oe(te,v(r).workspace.gitBranch)),O($,N)};W(Y,$=>{var N;(N=v(r))!=null&&N.workspace.gitBranch&&$(fe)})}x(g);var ne=A(g,2),V=S(ne);{var re=$=>{var N=qd();N.__click=f,O($,N)};W(V,$=>{v(l)&&$(re)})}var Se=A(V,2);Se.__click=()=>T(c,!v(c)),x(ne),x(R);var Ce=A(R,2),ke=S(Ce);{var pe=$=>{var N=Kd(),te=S(N);yo(te,{get conversations(){return v(n)},get currentId(){return v(s)},onSelect:j,onNew:y,onChanged:E,onClose:()=>T(o,!1),get streaming(){return v(l)}}),x(N),O($,N)};W(ke,$=>{(v(o)||!v(h))&&$(pe)})}var Ze=A(ke,2),le=S(Ze);{var we=$=>{var N=Wd(),te=S(N,!0);x(N),J(()=>oe(te,v(d))),O($,N)};W(le,$=>{v(d)&&!v(l)&&$(we)})}var ye=A(le,2);bo(ye,{get messages(){return v(a)},get turn(){return v(i)},get streaming(){return v(l)},get conversationId(){return v(s)}});var Ut=A(ye,2);{let $=Qt(()=>{var te;return(te=v(r))==null?void 0:te.defaultModel}),N=Qt(()=>!v(r));ko(Ut,{get streaming(){return v(l)},get model(){return v($)},onSend:P,onStop:f,get disabled(){return v(N)}})}x(Ze),x(Ce);var ce=A(Ce,2);{var $e=$=>{wo($,{get config(){return v(r)},onClose:()=>T(c,!1)})};W(ce,$=>{v(c)&&$($e)})}return x(C),J(()=>{var $;return oe(z,(($=v(r))==null?void 0:$.workspace.name)??"…")}),O(t,C),xt(K)}gs(["click"]);Un($o,{target:document.getElementById("app")});
