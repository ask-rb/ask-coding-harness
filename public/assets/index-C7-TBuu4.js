var qo=Object.defineProperty;var qa=t=>{throw TypeError(t)};var Ko=(t,e,r)=>e in t?qo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var et=(t,e,r)=>Ko(t,typeof e!="symbol"?e+"":e,r),pn=(t,e,r)=>e.has(t)||qa("Cannot "+r);var u=(t,e,r)=>(pn(t,e,"read from private field"),r?r.call(t):e.get(t)),F=(t,e,r)=>e.has(t)?qa("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),L=(t,e,r,n)=>(pn(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r),_e=(t,e,r)=>(pn(t,e,"access private method"),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const kn=!1;var gi=Array.isArray,Wo=Array.prototype.indexOf,Cr=Array.prototype.includes,Js=Array.from,bi=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,Vo=Object.getOwnPropertyDescriptors,Yo=Object.prototype,Jo=Array.prototype,_i=Object.getPrototypeOf,Ka=Object.isExtensible;function Go(t){for(var e=0;e<t.length;e++)t[e]()}function yi(){var t,e,r=new Promise((n,s)=>{t=n,e=s});return{promise:r,resolve:t,reject:e}}const Ee=2,ss=4,Gs=8,ki=1<<24,Ct=16,at=32,hr=64,Dn=128,Je=512,ye=1024,Ae=2048,At=4096,Ue=8192,$t=16384,Zs=32768,Ar=65536,Wa=1<<17,Hn=1<<18,qr=1<<19,Zo=1<<20,xt=1<<25,ar=32768,wn=1<<21,Un=1<<22,jt=1<<23,Ms=Symbol("$state"),Xo=Symbol("legacy props"),Qo=Symbol(""),_r=new class extends Error{constructor(){super(...arguments);et(this,"name","StaleReactionError");et(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Xs=3,Kt=8;function el(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function tl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function rl(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nl(t){throw new Error("https://svelte.dev/e/effect_orphan")}function al(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function il(){throw new Error("https://svelte.dev/e/hydration_failed")}function ol(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ll(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function dl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ul=1,fl=2,wi=4,pl=8,hl=16,vl=1,ml=2,xi="[",Qs="[!",Fn="]",ir={},xe=Symbol(),gl="http://www.w3.org/1999/xhtml";function xs(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function bl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let D=!1;function De(t){D=t}let W;function ke(t){if(t===null)throw xs(),ir;return W=t}function Pr(){return ke(qe(W))}function x(t){if(D){if(qe(W)!==null)throw xs(),ir;W=t}}function qn(t=1){if(D){for(var e=t,r=W;e--;)r=qe(r);W=r}}function Bs(t=!0){for(var e=0,r=W;;){if(r.nodeType===Kt){var n=r.data;if(n===Fn){if(e===0)return r;e-=1}else(n===xi||n===Qs)&&(e+=1)}var s=qe(r);t&&r.remove(),r=s}}function $i(t){if(!t||t.nodeType!==Kt)throw xs(),ir;return t.data}function Ei(t){return t===this.v}function _l(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Si(t){return!_l(t,this.v)}let yl=!1,Fe=null;function Or(t){Fe=t}function vt(t,e=!1,r){Fe={p:Fe,i:!1,c:null,e:null,s:t,x:null,l:null}}function mt(t){var e=Fe,r=e.e;if(r!==null){e.e=null;for(var n of r)Xi(n)}return t!==void 0&&(e.x=t),e.i=!0,Fe=e.p,t??{}}function Ci(){return!0}let Vt=[];function Ai(){var t=Vt;Vt=[],Go(t)}function ft(t){if(Vt.length===0&&!Qr){var e=Vt;queueMicrotask(()=>{e===Vt&&Ai()})}Vt.push(t)}function kl(){for(;Vt.length>0;)Ai()}function Pi(t){var e=Q;if(e===null)return J.f|=jt,t;if((e.f&Zs)===0){if((e.f&Dn)===0)throw t;e.b.error(t)}else Nr(t,e)}function Nr(t,e){for(;e!==null;){if((e.f&Dn)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t}const wl=-7169;function ge(t,e){t.f=t.f&wl|e}function Kn(t){(t.f&Je)!==0||t.deps===null?ge(t,ye):ge(t,At)}function Oi(t){if(t!==null)for(const e of t)(e.f&Ee)===0||(e.f&ar)===0||(e.f^=ar,Oi(e.deps))}function Ni(t,e,r){(t.f&Ae)!==0?e.add(t):(t.f&At)!==0&&r.add(t),Oi(t.deps),ge(t,ye)}const zs=new Set;let K=null,xn=null,$e=null,Be=[],en=null,$n=!1,Qr=!1;var yr,kr,Gt,wr,bs,_s,Zt,xr,ht,En,Sn,zi;const pa=class pa{constructor(){F(this,ht);et(this,"committed",!1);et(this,"current",new Map);et(this,"previous",new Map);F(this,yr,new Set);F(this,kr,new Set);F(this,Gt,0);F(this,wr,0);F(this,bs,null);F(this,_s,new Set);F(this,Zt,new Set);et(this,"skipped_effects",new Set);et(this,"is_fork",!1);F(this,xr,!1)}is_deferred(){return this.is_fork||u(this,wr)>0}process(e){var s;Be=[],this.apply();var r=[],n=[];for(const a of e)_e(this,ht,En).call(this,a,r,n);if(this.is_deferred()){_e(this,ht,Sn).call(this,n),_e(this,ht,Sn).call(this,r);for(const a of this.skipped_effects)Ri(a)}else{for(const a of u(this,yr))a();u(this,yr).clear(),u(this,Gt)===0&&_e(this,ht,zi).call(this),xn=this,K=null,Va(n),Va(r),xn=null,(s=u(this,bs))==null||s.resolve()}$e=null}capture(e,r){r!==xe&&!this.previous.has(e)&&this.previous.set(e,r),(e.f&jt)===0&&(this.current.set(e,e.v),$e==null||$e.set(e,e.v))}activate(){K=this,this.apply()}deactivate(){K===this&&(K=null,$e=null)}flush(){if(this.activate(),Be.length>0){if(Ti(),K!==null&&K!==this)return}else u(this,Gt)===0&&this.process([]);this.deactivate()}discard(){for(const e of u(this,kr))e(this);u(this,kr).clear()}increment(e){L(this,Gt,u(this,Gt)+1),e&&L(this,wr,u(this,wr)+1)}decrement(e){L(this,Gt,u(this,Gt)-1),e&&L(this,wr,u(this,wr)-1),!u(this,xr)&&(L(this,xr,!0),ft(()=>{L(this,xr,!1),this.is_deferred()?Be.length>0&&this.flush():this.revive()}))}revive(){for(const e of u(this,_s))u(this,Zt).delete(e),ge(e,Ae),Et(e);for(const e of u(this,Zt))ge(e,At),Et(e);this.flush()}oncommit(e){u(this,yr).add(e)}ondiscard(e){u(this,kr).add(e)}settled(){return(u(this,bs)??L(this,bs,yi())).promise}static ensure(){if(K===null){const e=K=new pa;zs.add(K),Qr||ft(()=>{K===e&&e.flush()})}return K}apply(){}};yr=new WeakMap,kr=new WeakMap,Gt=new WeakMap,wr=new WeakMap,bs=new WeakMap,_s=new WeakMap,Zt=new WeakMap,xr=new WeakMap,ht=new WeakSet,En=function(e,r,n){e.f^=ye;for(var s=e.first,a=null;s!==null;){var i=s.f,l=(i&(at|hr))!==0,o=l&&(i&ye)!==0,c=o||(i&Ue)!==0||this.skipped_effects.has(s);if(!c&&s.fn!==null){l?s.f^=ye:a!==null&&(i&(ss|Gs|ki))!==0?a.b.defer_effect(s):(i&ss)!==0?r.push(s):$s(s)&&((i&Ct)!==0&&u(this,Zt).add(s),as(s));var d=s.first;if(d!==null){s=d;continue}}var h=s.parent;for(s=s.next;s===null&&h!==null;)h===a&&(a=null),s=h.next,h=h.parent}},Sn=function(e){for(var r=0;r<e.length;r+=1)Ni(e[r],u(this,_s),u(this,Zt))},zi=function(){var s;if(zs.size>1){this.previous.clear();var e=$e,r=!0;for(const a of zs){if(a===this){r=!1;continue}const i=[];for(const[o,c]of this.current){if(a.current.has(o))if(r&&c!==a.current.get(o))a.current.set(o,c);else continue;i.push(o)}if(i.length===0)continue;const l=[...a.current.keys()].filter(o=>!this.current.has(o));if(l.length>0){var n=Be;Be=[];const o=new Set,c=new Map;for(const d of i)Mi(d,l,o,c);if(Be.length>0){K=a,a.apply();for(const d of Be)_e(s=a,ht,En).call(s,d,[],[]);a.deactivate()}Be=n}}K=null,$e=e}this.committed=!0,zs.delete(this)};let Rt=pa;function re(t){var e=Qr;Qr=!0;try{for(var r;;){if(kl(),Be.length===0&&(K==null||K.flush(),Be.length===0))return en=null,r;Ti()}}finally{Qr=e}}function Ti(){$n=!0;var t=null;try{for(var e=0;Be.length>0;){var r=Rt.ensure();if(e++>1e3){var n,s;xl()}r.process(Be),It.clear()}}finally{$n=!1,en=null}}function xl(){try{al()}catch(t){Nr(t,en)}}let tt=null;function Va(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var n=t[r++];if((n.f&($t|Ue))===0&&$s(n)&&(tt=new Set,as(n),n.deps===null&&n.first===null&&n.nodes===null&&(n.teardown===null&&n.ac===null?ro(n):n.fn=null),(tt==null?void 0:tt.size)>0)){It.clear();for(const s of tt){if((s.f&($t|Ue))!==0)continue;const a=[s];let i=s.parent;for(;i!==null;)tt.has(i)&&(tt.delete(i),a.push(i)),i=i.parent;for(let l=a.length-1;l>=0;l--){const o=a[l];(o.f&($t|Ue))===0&&as(o)}}tt.clear()}}tt=null}}function Mi(t,e,r,n){if(!r.has(t)&&(r.add(t),t.reactions!==null))for(const s of t.reactions){const a=s.f;(a&Ee)!==0?Mi(s,e,r,n):(a&(Un|Ct))!==0&&(a&Ae)===0&&ji(s,e,n)&&(ge(s,Ae),Et(s))}}function ji(t,e,r){const n=r.get(t);if(n!==void 0)return n;if(t.deps!==null)for(const s of t.deps){if(Cr.call(e,s))return!0;if((s.f&Ee)!==0&&ji(s,e,r))return r.set(s,!0),!0}return r.set(t,!1),!1}function Et(t){for(var e=en=t;e.parent!==null;){e=e.parent;var r=e.f;if($n&&e===Q&&(r&Ct)!==0&&(r&Hn)===0)return;if((r&(hr|at))!==0){if((r&ye)===0)return;e.f^=ye}}Be.push(e)}function Ri(t){if(!((t.f&at)!==0&&(t.f&ye)!==0)){ge(t,ye);for(var e=t.first;e!==null;)Ri(e),e=e.next}}function $l(t){let e=0,r=or(0),n;return()=>{Yn()&&(f(r),sn(()=>(e===0&&(n=an(()=>t(()=>es(r)))),e+=1,()=>{ft(()=>{e-=1,e===0&&(n==null||n(),n=void 0,es(r))})})))}}var El=Ar|qr|Dn;function Sl(t,e,r){new Cl(t,e,r)}var Ie,ys,ot,Xt,lt,We,Oe,ct,_t,Mt,Qt,yt,$r,er,Er,Sr,kt,Vs,ve,Ii,Li,Cn,js,Rs,An;class Cl{constructor(e,r,n){F(this,ve);et(this,"parent");et(this,"is_pending",!1);F(this,Ie);F(this,ys,D?W:null);F(this,ot);F(this,Xt);F(this,lt);F(this,We,null);F(this,Oe,null);F(this,ct,null);F(this,_t,null);F(this,Mt,null);F(this,Qt,0);F(this,yt,0);F(this,$r,!1);F(this,er,!1);F(this,Er,new Set);F(this,Sr,new Set);F(this,kt,null);F(this,Vs,$l(()=>(L(this,kt,or(u(this,Qt))),()=>{L(this,kt,null)})));L(this,Ie,e),L(this,ot,r),L(this,Xt,n),this.parent=Q.b,this.is_pending=!!u(this,ot).pending,L(this,lt,nn(()=>{if(Q.b=this,D){const a=u(this,ys);Pr(),a.nodeType===Kt&&a.data===Qs?_e(this,ve,Li).call(this):(_e(this,ve,Ii).call(this),u(this,yt)===0&&(this.is_pending=!1))}else{var s=_e(this,ve,Cn).call(this);try{L(this,We,Ye(()=>n(s)))}catch(a){this.error(a)}u(this,yt)>0?_e(this,ve,Rs).call(this):this.is_pending=!1}return()=>{var a;(a=u(this,Mt))==null||a.remove()}},El)),D&&L(this,Ie,W)}defer_effect(e){Ni(e,u(this,Er),u(this,Sr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,ot).pending}update_pending_count(e){_e(this,ve,An).call(this,e),L(this,Qt,u(this,Qt)+e),!(!u(this,kt)||u(this,$r))&&(L(this,$r,!0),ft(()=>{L(this,$r,!1),u(this,kt)&&zr(u(this,kt),u(this,Qt))}))}get_effect_pending(){return u(this,Vs).call(this),f(u(this,kt))}error(e){var r=u(this,ot).onerror;let n=u(this,ot).failed;if(u(this,er)||!r&&!n)throw e;u(this,We)&&(ze(u(this,We)),L(this,We,null)),u(this,Oe)&&(ze(u(this,Oe)),L(this,Oe,null)),u(this,ct)&&(ze(u(this,ct)),L(this,ct,null)),D&&(ke(u(this,ys)),qn(),ke(Bs()));var s=!1,a=!1;const i=()=>{if(s){bl();return}s=!0,a&&dl(),Rt.ensure(),L(this,Qt,0),u(this,ct)!==null&&rr(u(this,ct),()=>{L(this,ct,null)}),this.is_pending=this.has_pending_snippet(),L(this,We,_e(this,ve,js).call(this,()=>(L(this,er,!1),Ye(()=>u(this,Xt).call(this,u(this,Ie)))))),u(this,yt)>0?_e(this,ve,Rs).call(this):this.is_pending=!1};ft(()=>{try{a=!0,r==null||r(e,i),a=!1}catch(l){Nr(l,u(this,lt)&&u(this,lt).parent)}n&&L(this,ct,_e(this,ve,js).call(this,()=>{Rt.ensure(),L(this,er,!0);try{return Ye(()=>{n(u(this,Ie),()=>e,()=>i)})}catch(l){return Nr(l,u(this,lt).parent),null}finally{L(this,er,!1)}}))})}}Ie=new WeakMap,ys=new WeakMap,ot=new WeakMap,Xt=new WeakMap,lt=new WeakMap,We=new WeakMap,Oe=new WeakMap,ct=new WeakMap,_t=new WeakMap,Mt=new WeakMap,Qt=new WeakMap,yt=new WeakMap,$r=new WeakMap,er=new WeakMap,Er=new WeakMap,Sr=new WeakMap,kt=new WeakMap,Vs=new WeakMap,ve=new WeakSet,Ii=function(){try{L(this,We,Ye(()=>u(this,Xt).call(this,u(this,Ie))))}catch(e){this.error(e)}},Li=function(){const e=u(this,ot).pending;e&&(L(this,Oe,Ye(()=>e(u(this,Ie)))),ft(()=>{var r=_e(this,ve,Cn).call(this);L(this,We,_e(this,ve,js).call(this,()=>(Rt.ensure(),Ye(()=>u(this,Xt).call(this,r))))),u(this,yt)>0?_e(this,ve,Rs).call(this):(rr(u(this,Oe),()=>{L(this,Oe,null)}),this.is_pending=!1)}))},Cn=function(){var e=u(this,Ie);return this.is_pending&&(L(this,Mt,Ce()),u(this,Ie).before(u(this,Mt)),e=u(this,Mt)),e},js=function(e){var r=Q,n=J,s=Fe;Ze(u(this,lt)),Te(u(this,lt)),Or(u(this,lt).ctx);try{return e()}catch(a){return Pi(a),null}finally{Ze(r),Te(n),Or(s)}},Rs=function(){const e=u(this,ot).pending;u(this,We)!==null&&(L(this,_t,document.createDocumentFragment()),u(this,_t).append(u(this,Mt)),ao(u(this,We),u(this,_t))),u(this,Oe)===null&&L(this,Oe,Ye(()=>e(u(this,Ie))))},An=function(e){var r;if(!this.has_pending_snippet()){this.parent&&_e(r=this.parent,ve,An).call(r,e);return}if(L(this,yt,u(this,yt)+e),u(this,yt)===0){this.is_pending=!1;for(const n of u(this,Er))ge(n,Ae),Et(n);for(const n of u(this,Sr))ge(n,At),Et(n);u(this,Er).clear(),u(this,Sr).clear(),u(this,Oe)&&rr(u(this,Oe),()=>{L(this,Oe,null)}),u(this,_t)&&(u(this,Ie).before(u(this,_t)),L(this,_t,null))}};function Bi(t,e,r,n){const s=tn;var a=t.filter(p=>!p.settled);if(r.length===0&&a.length===0){n(e.map(s));return}var i=K,l=Q,o=Al(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(p=>p.promise)):null;function d(p){o();try{n(p)}catch(m){(l.f&$t)===0&&Nr(m,l)}i==null||i.deactivate(),Pn()}if(r.length===0){c.then(()=>d(e.map(s)));return}function h(){o(),Promise.all(r.map(p=>Pl(p))).then(p=>d([...e.map(s),...p])).catch(p=>Nr(p,l))}c?c.then(h):h()}function Al(){var t=Q,e=J,r=Fe,n=K;return function(a=!0){Ze(t),Te(e),Or(r),a&&(n==null||n.activate())}}function Pn(){Ze(null),Te(null),Or(null)}function tn(t){var e=Ee|Ae,r=J!==null&&(J.f&Ee)!==0?J:null;return Q!==null&&(Q.f|=qr),{ctx:Fe,deps:null,effects:null,equals:Ei,f:e,fn:t,reactions:null,rv:0,v:xe,wv:0,parent:r??Q,ac:null}}function Pl(t,e,r){let n=Q;n===null&&tl();var s=n.b,a=void 0,i=or(xe),l=!J,o=new Map;return Bl(()=>{var m;var c=yi();a=c.promise;try{Promise.resolve(t()).then(c.resolve,c.reject).then(()=>{d===K&&d.committed&&d.deactivate(),Pn()})}catch(_){c.reject(_),Pn()}var d=K;if(l){var h=s.is_rendered();s.update_pending_count(1),d.increment(h),(m=o.get(d))==null||m.reject(_r),o.delete(d),o.set(d,c)}const p=(_,P=void 0)=>{if(d.activate(),P)P!==_r&&(i.f|=jt,zr(i,P));else{(i.f&jt)!==0&&(i.f^=jt),zr(i,_);for(const[v,w]of o){if(o.delete(v),v===d)break;w.reject(_r)}}l&&(s.update_pending_count(-1),d.decrement(h))};c.promise.then(p,_=>p(null,_||"unknown"))}),Jn(()=>{for(const c of o.values())c.reject(_r)}),new Promise(c=>{function d(h){function p(){h===a?c(i):d(a)}h.then(p,p)}d(a)})}function st(t){const e=tn(t);return io(e),e}function Ol(t){const e=tn(t);return e.equals=Si,e}function Di(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)ze(e[r])}}function Nl(t){for(var e=t.parent;e!==null;){if((e.f&Ee)===0)return(e.f&$t)===0?e:null;e=e.parent}return null}function Wn(t){var e,r=Q;Ze(Nl(t));try{t.f&=~ar,Di(t),e=uo(t)}finally{Ze(r)}return e}function Hi(t){var e=Wn(t);if(!t.equals(e)&&(t.wv=lo(),(!(K!=null&&K.is_fork)||t.deps===null)&&(t.v=e,t.deps===null))){ge(t,ye);return}Bt||($e!==null?(Yn()||K!=null&&K.is_fork)&&$e.set(t,e):Kn(t))}let On=new Set;const It=new Map;let Ui=!1;function or(t,e){var r={f:0,v:t,reactions:null,equals:Ei,rv:0,wv:0};return r}function se(t,e){const r=or(t);return io(r),r}function Fi(t,e=!1,r=!0){const n=or(t);return e||(n.equals=Si),n}function y(t,e,r=!1){J!==null&&(!nt||(J.f&Wa)!==0)&&Ci()&&(J.f&(Ee|Ct|Un|Wa))!==0&&(Ge===null||!Cr.call(Ge,t))&&cl();let n=r?ut(e):e;return zr(t,n)}function zr(t,e){if(!t.equals(e)){var r=t.v;Bt?It.set(t,e):It.set(t,r),t.v=e;var n=Rt.ensure();if(n.capture(t,r),(t.f&Ee)!==0){const s=t;(t.f&Ae)!==0&&Wn(s),Kn(s)}t.wv=lo(),qi(t,Ae),Q!==null&&(Q.f&ye)!==0&&(Q.f&(at|hr))===0&&(Ke===null?Ul([t]):Ke.push(t)),!n.is_fork&&On.size>0&&!Ui&&zl()}return e}function zl(){Ui=!1;for(const t of On)(t.f&ye)!==0&&ge(t,At),$s(t)&&as(t);On.clear()}function es(t){y(t,t.v+1)}function qi(t,e){var r=t.reactions;if(r!==null)for(var n=r.length,s=0;s<n;s++){var a=r[s],i=a.f,l=(i&Ae)===0;if(l&&ge(a,e),(i&Ee)!==0){var o=a;$e==null||$e.delete(o),(i&ar)===0&&(i&Je&&(a.f|=ar),qi(o,At))}else l&&((i&Ct)!==0&&tt!==null&&tt.add(a),Et(a))}}function ut(t){if(typeof t!="object"||t===null||Ms in t)return t;const e=_i(t);if(e!==Yo&&e!==Jo)return t;var r=new Map,n=gi(t),s=se(0),a=sr,i=l=>{if(sr===a)return l();var o=J,c=sr;Te(null),Za(a);var d=l();return Te(o),Za(c),d};return n&&r.set("length",se(t.length)),new Proxy(t,{defineProperty(l,o,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ol();var d=r.get(o);return d===void 0?d=i(()=>{var h=se(c.value);return r.set(o,h),h}):y(d,c.value,!0),!0},deleteProperty(l,o){var c=r.get(o);if(c===void 0){if(o in l){const d=i(()=>se(xe));r.set(o,d),es(s)}}else y(c,xe),es(s);return!0},get(l,o,c){var m;if(o===Ms)return t;var d=r.get(o),h=o in l;if(d===void 0&&(!h||(m=Xr(l,o))!=null&&m.writable)&&(d=i(()=>{var _=ut(h?l[o]:xe),P=se(_);return P}),r.set(o,d)),d!==void 0){var p=f(d);return p===xe?void 0:p}return Reflect.get(l,o,c)},getOwnPropertyDescriptor(l,o){var c=Reflect.getOwnPropertyDescriptor(l,o);if(c&&"value"in c){var d=r.get(o);d&&(c.value=f(d))}else if(c===void 0){var h=r.get(o),p=h==null?void 0:h.v;if(h!==void 0&&p!==xe)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return c},has(l,o){var p;if(o===Ms)return!0;var c=r.get(o),d=c!==void 0&&c.v!==xe||Reflect.has(l,o);if(c!==void 0||Q!==null&&(!d||(p=Xr(l,o))!=null&&p.writable)){c===void 0&&(c=i(()=>{var m=d?ut(l[o]):xe,_=se(m);return _}),r.set(o,c));var h=f(c);if(h===xe)return!1}return d},set(l,o,c,d){var j;var h=r.get(o),p=o in l;if(n&&o==="length")for(var m=c;m<h.v;m+=1){var _=r.get(m+"");_!==void 0?y(_,xe):m in l&&(_=i(()=>se(xe)),r.set(m+"",_))}if(h===void 0)(!p||(j=Xr(l,o))!=null&&j.writable)&&(h=i(()=>se(void 0)),y(h,ut(c)),r.set(o,h));else{p=h.v!==xe;var P=i(()=>ut(c));y(h,P)}var v=Reflect.getOwnPropertyDescriptor(l,o);if(v!=null&&v.set&&v.set.call(d,c),!p){if(n&&typeof o=="string"){var w=r.get("length"),S=Number(o);Number.isInteger(S)&&S>=w.v&&y(w,S+1)}es(s)}return!0},ownKeys(l){f(s);var o=Reflect.ownKeys(l).filter(h=>{var p=r.get(h);return p===void 0||p.v!==xe});for(var[c,d]of r)d.v!==xe&&!(c in l)&&o.push(c);return o},setPrototypeOf(){ll()}})}var Ya,Ki,Wi,Vi,Yi;function Nn(){if(Ya===void 0){Ya=window,Ki=document,Wi=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Vi=Xr(e,"firstChild").get,Yi=Xr(e,"nextSibling").get,Ka(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Ka(r)&&(r.__t=void 0)}}function Ce(t=""){return document.createTextNode(t)}function He(t){return Vi.call(t)}function qe(t){return Yi.call(t)}function E(t,e){if(!D)return He(t);var r=He(W);if(r===null)r=W.appendChild(Ce());else if(e&&r.nodeType!==Xs){var n=Ce();return r==null||r.before(n),ke(n),n}return ke(r),r}function ns(t,e=!1){if(!D){var r=He(t);return r instanceof Comment&&r.data===""?qe(r):r}if(e&&(W==null?void 0:W.nodeType)!==Xs){var n=Ce();return W==null||W.before(n),ke(n),n}return W}function O(t,e=1,r=!1){let n=D?W:t;for(var s;e--;)s=n,n=qe(n);if(!D)return n;if(r&&(n==null?void 0:n.nodeType)!==Xs){var a=Ce();return n===null?s==null||s.after(a):n.before(a),ke(a),a}return ke(n),n}function Vn(t){t.textContent=""}function Ji(){return!1}function Tl(t){D&&He(t)!==null&&Vn(t)}let Ja=!1;function Gi(){Ja||(Ja=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function rn(t){var e=J,r=Q;Te(null),Ze(null);try{return t()}finally{Te(e),Ze(r)}}function Ml(t,e,r,n=r){t.addEventListener(e,()=>rn(r));const s=t.__on_r;s?t.__on_r=()=>{s(),n(!0)}:t.__on_r=()=>n(!0),Gi()}function jl(t){Q===null&&(J===null&&nl(),sl()),Bt&&rl()}function Rl(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function gt(t,e,r){var n=Q;n!==null&&(n.f&Ue)!==0&&(t|=Ue);var s={ctx:Fe,deps:null,nodes:null,f:t|Ae|Je,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};if(r)try{as(s),s.f|=Zs}catch(l){throw ze(s),l}else e!==null&&Et(s);var a=s;if(r&&a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&qr)===0&&(a=a.first,(t&Ct)!==0&&(t&Ar)!==0&&a!==null&&(a.f|=Ar)),a!==null&&(a.parent=n,n!==null&&Rl(a,n),J!==null&&(J.f&Ee)!==0&&(t&hr)===0)){var i=J;(i.effects??(i.effects=[])).push(a)}return s}function Yn(){return J!==null&&!nt}function Jn(t){const e=gt(Gs,null,!1);return ge(e,ye),e.teardown=t,e}function Zi(t){jl();var e=Q.f,r=!J&&(e&at)!==0&&(e&Zs)===0;if(r){var n=Fe;(n.e??(n.e=[])).push(t)}else return Xi(t)}function Xi(t){return gt(ss|Zo,t,!1)}function Il(t){Rt.ensure();const e=gt(hr|qr,t,!0);return(r={})=>new Promise(n=>{r.outro?rr(e,()=>{ze(e),n(void 0)}):(ze(e),n(void 0))})}function Ll(t){return gt(ss,t,!1)}function Bl(t){return gt(Un|qr,t,!0)}function sn(t,e=0){return gt(Gs|e,t,!0)}function q(t,e=[],r=[],n=[]){Bi(n,e,r,s=>{gt(Gs,()=>t(...s.map(f)),!0)})}function Dl(t,e=[],r=[],n=[]){var s=K,a=r.length>0||n.length>0;a&&s.increment(!0),Bi(n,e,r,i=>{gt(ss,()=>t(...i.map(f)),!1),a&&s.decrement(!0)})}function nn(t,e=0){var r=gt(Ct|e,t,!0);return r}function Ye(t){return gt(at|qr,t,!0)}function Qi(t){var e=t.teardown;if(e!==null){const r=Bt,n=J;Ga(!0),Te(null);try{e.call(null)}finally{Ga(r),Te(n)}}}function eo(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const s=r.ac;s!==null&&rn(()=>{s.abort(_r)});var n=r.next;(r.f&hr)!==0?r.parent=null:ze(r,e),r=n}}function Hl(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&at)===0&&ze(e),e=r}}function ze(t,e=!0){var r=!1;(e||(t.f&Hn)!==0)&&t.nodes!==null&&t.nodes.end!==null&&(to(t.nodes.start,t.nodes.end),r=!0),eo(t,e&&!r),Ds(t,0),ge(t,$t);var n=t.nodes&&t.nodes.t;if(n!==null)for(const a of n)a.stop();Qi(t);var s=t.parent;s!==null&&s.first!==null&&ro(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes=t.ac=null}function to(t,e){for(;t!==null;){var r=t===e?null:qe(t);t.remove(),t=r}}function ro(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function rr(t,e,r=!0){var n=[];so(t,n,!0);var s=()=>{r&&ze(t),e&&e()},a=n.length;if(a>0){var i=()=>--a||s();for(var l of n)l.out(i)}else s()}function so(t,e,r){if((t.f&Ue)===0){t.f^=Ue;var n=t.nodes&&t.nodes.t;if(n!==null)for(const l of n)(l.is_global||r)&&e.push(l);for(var s=t.first;s!==null;){var a=s.next,i=(s.f&Ar)!==0||(s.f&at)!==0&&(t.f&Ct)!==0;so(s,e,i?r:!1),s=a}}}function Gn(t){no(t,!0)}function no(t,e){if((t.f&Ue)!==0){t.f^=Ue,(t.f&ye)===0&&(ge(t,Ae),Et(t));for(var r=t.first;r!==null;){var n=r.next,s=(r.f&Ar)!==0||(r.f&at)!==0;no(r,s?e:!1),r=n}var a=t.nodes&&t.nodes.t;if(a!==null)for(const i of a)(i.is_global||e)&&i.in()}}function ao(t,e){if(t.nodes)for(var r=t.nodes.start,n=t.nodes.end;r!==null;){var s=r===n?null:qe(r);e.append(r),r=s}}let Is=!1,Bt=!1;function Ga(t){Bt=t}let J=null,nt=!1;function Te(t){J=t}let Q=null;function Ze(t){Q=t}let Ge=null;function io(t){J!==null&&(Ge===null?Ge=[t]:Ge.push(t))}let Ne=null,Re=0,Ke=null;function Ul(t){Ke=t}let oo=1,Yt=0,sr=Yt;function Za(t){sr=t}function lo(){return++oo}function $s(t){var e=t.f;if((e&Ae)!==0)return!0;if(e&Ee&&(t.f&=~ar),(e&At)!==0){for(var r=t.deps,n=r.length,s=0;s<n;s++){var a=r[s];if($s(a)&&Hi(a),a.wv>t.wv)return!0}(e&Je)!==0&&$e===null&&ge(t,ye)}return!1}function co(t,e,r=!0){var n=t.reactions;if(n!==null&&!(Ge!==null&&Cr.call(Ge,t)))for(var s=0;s<n.length;s++){var a=n[s];(a.f&Ee)!==0?co(a,e,!1):e===a&&(r?ge(a,Ae):(a.f&ye)!==0&&ge(a,At),Et(a))}}function uo(t){var P;var e=Ne,r=Re,n=Ke,s=J,a=Ge,i=Fe,l=nt,o=sr,c=t.f;Ne=null,Re=0,Ke=null,J=(c&(at|hr))===0?t:null,Ge=null,Or(t.ctx),nt=!1,sr=++Yt,t.ac!==null&&(rn(()=>{t.ac.abort(_r)}),t.ac=null);try{t.f|=wn;var d=t.fn,h=d(),p=t.deps,m=K==null?void 0:K.is_fork;if(Ne!==null){var _;if(m||Ds(t,Re),p!==null&&Re>0)for(p.length=Re+Ne.length,_=0;_<Ne.length;_++)p[Re+_]=Ne[_];else t.deps=p=Ne;if(Yn()&&(t.f&Je)!==0)for(_=Re;_<p.length;_++)((P=p[_]).reactions??(P.reactions=[])).push(t)}else!m&&p!==null&&Re<p.length&&(Ds(t,Re),p.length=Re);if(Ci()&&Ke!==null&&!nt&&p!==null&&(t.f&(Ee|At|Ae))===0)for(_=0;_<Ke.length;_++)co(Ke[_],t);if(s!==null&&s!==t){if(Yt++,s.deps!==null)for(let v=0;v<r;v+=1)s.deps[v].rv=Yt;if(e!==null)for(const v of e)v.rv=Yt;Ke!==null&&(n===null?n=Ke:n.push(...Ke))}return(t.f&jt)!==0&&(t.f^=jt),h}catch(v){return Pi(v)}finally{t.f^=wn,Ne=e,Re=r,Ke=n,J=s,Ge=a,Or(i),nt=l,sr=o}}function Fl(t,e){let r=e.reactions;if(r!==null){var n=Wo.call(r,t);if(n!==-1){var s=r.length-1;s===0?r=e.reactions=null:(r[n]=r[s],r.pop())}}if(r===null&&(e.f&Ee)!==0&&(Ne===null||!Cr.call(Ne,e))){var a=e;(a.f&Je)!==0&&(a.f^=Je,a.f&=~ar),Kn(a),Di(a),Ds(a,0)}}function Ds(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)Fl(t,r[n])}function as(t){var e=t.f;if((e&$t)===0){ge(t,ye);var r=Q,n=Is;Q=t,Is=!0;try{(e&(Ct|ki))!==0?Hl(t):eo(t),Qi(t);var s=uo(t);t.teardown=typeof s=="function"?s:null,t.wv=oo;var a;kn&&yl&&(t.f&Ae)!==0&&t.deps}finally{Is=n,Q=r}}}async function ql(){await Promise.resolve(),re()}function f(t){var e=t.f,r=(e&Ee)!==0;if(J!==null&&!nt){var n=Q!==null&&(Q.f&$t)!==0;if(!n&&(Ge===null||!Cr.call(Ge,t))){var s=J.deps;if((J.f&wn)!==0)t.rv<Yt&&(t.rv=Yt,Ne===null&&s!==null&&s[Re]===t?Re++:Ne===null?Ne=[t]:Ne.push(t));else{(J.deps??(J.deps=[])).push(t);var a=t.reactions;a===null?t.reactions=[J]:Cr.call(a,J)||a.push(J)}}}if(Bt&&It.has(t))return It.get(t);if(r){var i=t;if(Bt){var l=i.v;return((i.f&ye)===0&&i.reactions!==null||po(i))&&(l=Wn(i)),It.set(i,l),l}var o=(i.f&Je)===0&&!nt&&J!==null&&(Is||(J.f&Je)!==0),c=i.deps===null;$s(i)&&(o&&(i.f|=Je),Hi(i)),o&&!c&&fo(i)}if($e!=null&&$e.has(t))return $e.get(t);if((t.f&jt)!==0)throw t.v;return t.v}function fo(t){if(t.deps!==null){t.f|=Je;for(const e of t.deps)(e.reactions??(e.reactions=[])).push(t),(e.f&Ee)!==0&&(e.f&Je)===0&&fo(e)}}function po(t){if(t.v===xe)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(It.has(e)||(e.f&Ee)!==0&&po(e))return!0;return!1}function an(t){var e=nt;try{return nt=!0,t()}finally{nt=e}}const Kl=["touchstart","touchmove"];function Wl(t){return Kl.includes(t)}const ho=new Set,zn=new Set;function Vl(t,e,r,n={}){function s(a){if(n.capture||Gr.call(e,a),!a.cancelBubble)return rn(()=>r==null?void 0:r.call(this,a))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?ft(()=>{e.addEventListener(t,s,n)}):e.addEventListener(t,s,n),s}function Se(t,e,r,n,s){var a={capture:n,passive:s},i=Vl(t,e,r,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Jn(()=>{e.removeEventListener(t,i,a)})}function Kr(t){for(var e=0;e<t.length;e++)ho.add(t[e]);for(var r of zn)r(t)}let Xa=null;function Gr(t){var v;var e=this,r=e.ownerDocument,n=t.type,s=((v=t.composedPath)==null?void 0:v.call(t))||[],a=s[0]||t.target;Xa=t;var i=0,l=Xa===t&&t.__root;if(l){var o=s.indexOf(l);if(o!==-1&&(e===document||e===window)){t.__root=e;return}var c=s.indexOf(e);if(c===-1)return;o<=c&&(i=o)}if(a=s[i]||t.target,a!==e){bi(t,"currentTarget",{configurable:!0,get(){return a||r}});var d=J,h=Q;Te(null),Ze(null);try{for(var p,m=[];a!==null;){var _=a.assignedSlot||a.parentNode||a.host||null;try{var P=a["__"+n];P!=null&&(!a.disabled||t.target===a)&&P.call(a,t)}catch(w){p?m.push(w):p=w}if(t.cancelBubble||_===e||_===null)break;a=_}if(p){for(let w of m)queueMicrotask(()=>{throw w});throw p}}finally{t.__root=e,delete t.currentTarget,Te(d),Ze(h)}}}function vo(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function pt(t,e){var r=Q;r.nodes===null&&(r.nodes={start:t,end:e,a:null,t:null})}function B(t,e){var r=(e&vl)!==0,n=(e&ml)!==0,s,a=!t.startsWith("<!>");return()=>{if(D)return pt(W,null),W;s===void 0&&(s=vo(a?t:"<!>"+t),r||(s=He(s)));var i=n||Wi?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=He(i),o=i.lastChild;pt(l,o)}else pt(i,i);return i}}function hn(t=""){if(!D){var e=Ce(t+"");return pt(e,e),e}var r=W;return r.nodeType!==Xs&&(r.before(r=Ce()),ke(r)),pt(r,r),r}function Hs(){if(D)return pt(W,null),W;var t=document.createDocumentFragment(),e=document.createComment(""),r=Ce();return t.append(e,r),pt(e,r),t}function T(t,e){if(D){var r=Q;((r.f&Zs)===0||r.nodes.end===null)&&(r.nodes.end=W),Pr();return}t!==null&&t.before(e)}function he(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function Zn(t,e){return mo(t,e)}function Yl(t,e){Nn(),e.intro=e.intro??!1;const r=e.target,n=D,s=W;try{for(var a=He(r);a&&(a.nodeType!==Kt||a.data!==xi);)a=qe(a);if(!a)throw ir;De(!0),ke(a);const i=mo(t,{...e,anchor:a});return De(!1),i}catch(i){if(i instanceof Error&&i.message.split(`
`).some(l=>l.startsWith("https://svelte.dev/e/")))throw i;return i!==ir&&console.warn("Failed to hydrate: ",i),e.recover===!1&&il(),Nn(),Vn(r),De(!1),Zn(t,e)}finally{De(n),ke(s)}}const mr=new Map;function mo(t,{target:e,anchor:r,props:n={},events:s,context:a,intro:i=!0}){Nn();var l=new Set,o=h=>{for(var p=0;p<h.length;p++){var m=h[p];if(!l.has(m)){l.add(m);var _=Wl(m);e.addEventListener(m,Gr,{passive:_});var P=mr.get(m);P===void 0?(document.addEventListener(m,Gr,{passive:_}),mr.set(m,1)):mr.set(m,P+1)}}};o(Js(ho)),zn.add(o);var c=void 0,d=Il(()=>{var h=r??e.appendChild(Ce());return Sl(h,{pending:()=>{}},p=>{if(a){vt({});var m=Fe;m.c=a}if(s&&(n.$$events=s),D&&pt(p,null),c=t(p,n)||{},D&&(Q.nodes.end=W,W===null||W.nodeType!==Kt||W.data!==Fn))throw xs(),ir;a&&mt()}),()=>{var _;for(var p of l){e.removeEventListener(p,Gr);var m=mr.get(p);--m===0?(document.removeEventListener(p,Gr),mr.delete(p)):mr.set(p,m)}zn.delete(o),h!==r&&((_=h.parentNode)==null||_.removeChild(h))}});return Tn.set(c,d),c}let Tn=new WeakMap;function Jl(t,e){const r=Tn.get(t);return r?(Tn.delete(t),r(e)):Promise.resolve()}var rt,dt,Le,tr,ks,ws,Ys;class Gl{constructor(e,r=!0){et(this,"anchor");F(this,rt,new Map);F(this,dt,new Map);F(this,Le,new Map);F(this,tr,new Set);F(this,ks,!0);F(this,ws,()=>{var e=K;if(u(this,rt).has(e)){var r=u(this,rt).get(e),n=u(this,dt).get(r);if(n)Gn(n),u(this,tr).delete(r);else{var s=u(this,Le).get(r);s&&(u(this,dt).set(r,s.effect),u(this,Le).delete(r),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),n=s.effect)}for(const[a,i]of u(this,rt)){if(u(this,rt).delete(a),a===e)break;const l=u(this,Le).get(i);l&&(ze(l.effect),u(this,Le).delete(i))}for(const[a,i]of u(this,dt)){if(a===r||u(this,tr).has(a))continue;const l=()=>{if(Array.from(u(this,rt).values()).includes(a)){var c=document.createDocumentFragment();ao(i,c),c.append(Ce()),u(this,Le).set(a,{effect:i,fragment:c})}else ze(i);u(this,tr).delete(a),u(this,dt).delete(a)};u(this,ks)||!n?(u(this,tr).add(a),rr(i,l,!1)):l()}}});F(this,Ys,e=>{u(this,rt).delete(e);const r=Array.from(u(this,rt).values());for(const[n,s]of u(this,Le))r.includes(n)||(ze(s.effect),u(this,Le).delete(n))});this.anchor=e,L(this,ks,r)}ensure(e,r){var n=K,s=Ji();if(r&&!u(this,dt).has(e)&&!u(this,Le).has(e))if(s){var a=document.createDocumentFragment(),i=Ce();a.append(i),u(this,Le).set(e,{effect:Ye(()=>r(i)),fragment:a})}else u(this,dt).set(e,Ye(()=>r(this.anchor)));if(u(this,rt).set(n,e),s){for(const[l,o]of u(this,dt))l===e?n.skipped_effects.delete(o):n.skipped_effects.add(o);for(const[l,o]of u(this,Le))l===e?n.skipped_effects.delete(o.effect):n.skipped_effects.add(o.effect);n.oncommit(u(this,ws)),n.ondiscard(u(this,Ys))}else D&&(this.anchor=W),u(this,ws).call(this)}}rt=new WeakMap,dt=new WeakMap,Le=new WeakMap,tr=new WeakMap,ks=new WeakMap,ws=new WeakMap,Ys=new WeakMap;function te(t,e,r=!1){D&&Pr();var n=new Gl(t),s=r?Ar:0;function a(i,l){if(D){const c=$i(t)===Qs;if(i===c){var o=Bs();ke(o),n.anchor=o,De(!1),n.ensure(i,l),De(!0);return}}n.ensure(i,l)}nn(()=>{var i=!1;e((l,o=!0)=>{i=!0,a(o,l)}),i||a(!1,null)},s)}function Zl(t,e){return e}function Xl(t,e,r){for(var n=[],s=e.length,a,i=e.length,l=0;l<s;l++){let h=e[l];rr(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var p=t.outrogroups;Mn(Js(a.done)),p.delete(a),p.size===0&&(t.outrogroups=null)}}else i-=1},!1)}if(i===0){var o=n.length===0&&r!==null;if(o){var c=r,d=c.parentNode;Vn(d),d.append(c),t.items.clear()}Mn(e,!o)}else a={pending:new Set(e),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(a)}function Mn(t,e=!0){for(var r=0;r<t.length;r++)ze(t[r],e)}var Qa;function is(t,e,r,n,s,a=null){var i=t,l=new Map,o=(e&wi)!==0;if(o){var c=t;i=D?ke(He(c)):c.appendChild(Ce())}D&&Pr();var d=null,h=Ol(()=>{var w=r();return gi(w)?w:w==null?[]:Js(w)}),p,m=!0;function _(){v.fallback=d,Ql(v,p,i,e,n),d!==null&&(p.length===0?(d.f&xt)===0?Gn(d):(d.f^=xt,Zr(d,null,i)):rr(d,()=>{d=null}))}var P=nn(()=>{p=f(h);var w=p.length;let S=!1;if(D){var j=$i(i)===Qs;j!==(w===0)&&(i=Bs(),ke(i),De(!1),S=!0)}for(var H=new Set,$=K,R=Ji(),G=0;G<w;G+=1){D&&W.nodeType===Kt&&W.data===Fn&&(i=W,S=!0,De(!1));var k=p[G],M=n(k,G),N=m?null:l.get(M);N?(N.v&&zr(N.v,k),N.i&&zr(N.i,G),R&&$.skipped_effects.delete(N.e)):(N=ec(l,m?i:Qa??(Qa=Ce()),k,M,G,s,e,r),m||(N.e.f|=xt),l.set(M,N)),H.add(M)}if(w===0&&a&&!d&&(m?d=Ye(()=>a(i)):(d=Ye(()=>a(Qa??(Qa=Ce()))),d.f|=xt)),D&&w>0&&ke(Bs()),!m)if(R){for(const[Z,de]of l)H.has(Z)||$.skipped_effects.add(de.e);$.oncommit(_),$.ondiscard(()=>{})}else _();S&&De(!0),f(h)}),v={effect:P,items:l,outrogroups:null,fallback:d};m=!1,D&&(i=W)}function Vr(t){for(;t!==null&&(t.f&at)===0;)t=t.next;return t}function Ql(t,e,r,n,s){var N,Z,de,A,z,ne,C,U,we;var a=(n&pl)!==0,i=e.length,l=t.items,o=Vr(t.effect.first),c,d=null,h,p=[],m=[],_,P,v,w;if(a)for(w=0;w<i;w+=1)_=e[w],P=s(_,w),v=l.get(P).e,(v.f&xt)===0&&((Z=(N=v.nodes)==null?void 0:N.a)==null||Z.measure(),(h??(h=new Set)).add(v));for(w=0;w<i;w+=1){if(_=e[w],P=s(_,w),v=l.get(P).e,t.outrogroups!==null)for(const be of t.outrogroups)be.pending.delete(v),be.done.delete(v);if((v.f&xt)!==0)if(v.f^=xt,v===o)Zr(v,null,r);else{var S=d?d.next:o;v===t.effect.last&&(t.effect.last=v.prev),v.prev&&(v.prev.next=v.next),v.next&&(v.next.prev=v.prev),zt(t,d,v),zt(t,v,S),Zr(v,S,r),d=v,p=[],m=[],o=Vr(d.next);continue}if((v.f&Ue)!==0&&(Gn(v),a&&((A=(de=v.nodes)==null?void 0:de.a)==null||A.unfix(),(h??(h=new Set)).delete(v))),v!==o){if(c!==void 0&&c.has(v)){if(p.length<m.length){var j=m[0],H;d=j.prev;var $=p[0],R=p[p.length-1];for(H=0;H<p.length;H+=1)Zr(p[H],j,r);for(H=0;H<m.length;H+=1)c.delete(m[H]);zt(t,$.prev,R.next),zt(t,d,$),zt(t,R,j),o=j,d=R,w-=1,p=[],m=[]}else c.delete(v),Zr(v,o,r),zt(t,v.prev,v.next),zt(t,v,d===null?t.effect.first:d.next),zt(t,d,v),d=v;continue}for(p=[],m=[];o!==null&&o!==v;)(c??(c=new Set)).add(o),m.push(o),o=Vr(o.next);if(o===null)continue}(v.f&xt)===0&&p.push(v),d=v,o=Vr(v.next)}if(t.outrogroups!==null){for(const be of t.outrogroups)be.pending.size===0&&(Mn(Js(be.done)),(z=t.outrogroups)==null||z.delete(be));t.outrogroups.size===0&&(t.outrogroups=null)}if(o!==null||c!==void 0){var G=[];if(c!==void 0)for(v of c)(v.f&Ue)===0&&G.push(v);for(;o!==null;)(o.f&Ue)===0&&o!==t.fallback&&G.push(o),o=Vr(o.next);var k=G.length;if(k>0){var M=(n&wi)!==0&&i===0?r:null;if(a){for(w=0;w<k;w+=1)(C=(ne=G[w].nodes)==null?void 0:ne.a)==null||C.measure();for(w=0;w<k;w+=1)(we=(U=G[w].nodes)==null?void 0:U.a)==null||we.fix()}Xl(t,G,M)}}a&&ft(()=>{var be,Xe;if(h!==void 0)for(v of h)(Xe=(be=v.nodes)==null?void 0:be.a)==null||Xe.apply()})}function ec(t,e,r,n,s,a,i,l){var o=(i&ul)!==0?(i&hl)===0?Fi(r,!1,!1):or(r):null,c=(i&fl)!==0?or(s):null;return{v:o,i:c,e:Ye(()=>(a(e,o??r,c??s,l),()=>{t.delete(n)}))}}function Zr(t,e,r){if(t.nodes)for(var n=t.nodes.start,s=t.nodes.end,a=e&&(e.f&xt)===0?e.nodes.start:r;n!==null;){var i=qe(n);if(a.before(n),n===s)return;n=i}}function zt(t,e,r){e===null?t.effect.first=r:e.next=r,r===null?t.effect.last=e:r.prev=e}function go(t,e,r=!1,n=!1,s=!1){var a=t,i="";q(()=>{var l=Q;if(i===(i=e()??"")){D&&Pr();return}if(l.nodes!==null&&(to(l.nodes.start,l.nodes.end),l.nodes=null),i!==""){if(D){W.data;for(var o=Pr(),c=o;o!==null&&(o.nodeType!==Kt||o.data!=="");)c=o,o=qe(o);if(o===null)throw xs(),ir;pt(W,c),a=ke(o);return}var d=i+"";r?d=`<svg>${d}</svg>`:n&&(d=`<math>${d}</math>`);var h=vo(d);if((r||n)&&(h=He(h)),pt(He(h),h.lastChild),r||n)for(;He(h);)a.before(He(h));else a.before(h)}})}function tc(t,e){let r=null,n=D;var s;if(D){r=W;for(var a=He(document.head);a!==null&&(a.nodeType!==Kt||a.data!==t);)a=qe(a);if(a===null)De(!1);else{var i=qe(a);a.remove(),ke(i)}}D||(s=document.head.appendChild(Ce()));try{nn(()=>e(s),Hn)}finally{n&&(De(!0),ke(r))}}function rc(t,e,r){var n=t==null?"":""+t;return e&&(n=n?n+" "+e:e),n===""?null:n}function gr(t,e,r,n,s,a){var i=t.__className;if(D||i!==r||i===void 0){var l=rc(r,n);(!D||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):t.className=l),t.__className=r}return a}const sc=Symbol("is custom element"),nc=Symbol("is html");function bo(t){if(D){var e=!1,r=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var n=t.value;Us(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var s=t.checked;Us(t,"checked",null),t.checked=s}}};t.__on_r=r,ft(r),Gi()}}function Us(t,e,r,n){var s=ac(t);D&&(s[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||s[e]!==(s[e]=r)&&(e==="loading"&&(t[Qo]=r),r==null?t.removeAttribute(e):typeof r!="string"&&_o(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function ce(t,e,r){var n=J,s=Q;let a=D;D&&De(!1),Te(null),Ze(null);try{e!=="style"&&(jn.has(t.getAttribute("is")||t.nodeName)||!customElements||customElements.get(t.getAttribute("is")||t.tagName.toLowerCase())?_o(t).includes(e):r&&typeof r=="object")?t[e]=r:Us(t,e,r==null?r:String(r))}finally{Te(n),Ze(s),a&&De(!0)}}function ac(t){return t.__attributes??(t.__attributes={[sc]:t.nodeName.includes("-"),[nc]:t.namespaceURI===gl})}var jn=new Map;function _o(t){var e=t.getAttribute("is")||t.nodeName,r=jn.get(e);if(r)return r;jn.set(e,r=[]);for(var n,s=t,a=Element.prototype;a!==s;){n=Vo(s);for(var i in n)n[i].set&&r.push(i);s=_i(s)}return r}function Xn(t,e,r=e){var n=new WeakSet;Ml(t,"input",async s=>{var a=s?t.defaultValue:t.value;if(a=vn(t)?mn(a):a,r(a),K!==null&&n.add(K),await ql(),a!==(a=e())){var i=t.selectionStart,l=t.selectionEnd,o=t.value.length;if(t.value=a??"",l!==null){var c=t.value.length;i===l&&l===o&&c>o?(t.selectionStart=c,t.selectionEnd=c):(t.selectionStart=i,t.selectionEnd=Math.min(l,c))}}}),(D&&t.defaultValue!==t.value||an(e)==null&&t.value)&&(r(vn(t)?mn(t.value):t.value),K!==null&&n.add(K)),sn(()=>{var s=e();if(t===document.activeElement){var a=xn??K;if(n.has(a))return}vn(t)&&s===mn(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function vn(t){var e=t.type;return e==="number"||e==="range"}function mn(t){return t===""?null:+t}function ei(t,e){return t===e||(t==null?void 0:t[Ms])===e}function yo(t={},e,r,n){return Ll(()=>{var s,a;return sn(()=>{s=a,a=[],an(()=>{t!==r(...a)&&(e(t,...a),s&&ei(r(...s),t)&&e(null,...s))})}),()=>{ft(()=>{a&&ei(r(...a),t)&&e(null,...a)})}}),t}function ic(t,e,r,n,s){var a=()=>{n(r[t])};r.addEventListener(e,a),s?sn(()=>{r[t]=s()}):a(),(r===document.body||r===window||r===document)&&Jn(()=>{r.removeEventListener(e,a)})}function Pt(t,e,r){var n;t.$$events||(t.$$events={}),(n=t.$$events)[e]||(n[e]=[]),t.$$events[e].push(r)}function Ot(t){for(var e in t)e in this&&(this[e]=t[e])}function ie(t,e,r,n){var s=n,a=!0,i=()=>(a&&(a=!1,s=n),s),l;l=t[e],l===void 0&&n!==void 0&&(l=i());var o;o=()=>{var p=t[e];return p===void 0?i():(a=!0,p)};var c=!1,d=tn(()=>(c=!1,o())),h=Q;return(function(p,m){if(arguments.length>0){const _=m?f(d):p;return y(d,_),c=!0,s!==void 0&&(s=_),p}return Bt&&c||(h.f&$t)!==0?d.v:f(d)})}function Nt(t){return new oc(t)}var wt,Ve;class oc{constructor(e){F(this,wt);F(this,Ve);var a;var r=new Map,n=(i,l)=>{var o=Fi(l,!1,!1);return r.set(i,o),o};const s=new Proxy({...e.props||{},$$events:{}},{get(i,l){return f(r.get(l)??n(l,Reflect.get(i,l)))},has(i,l){return l===Xo?!0:(f(r.get(l)??n(l,Reflect.get(i,l))),Reflect.has(i,l))},set(i,l,o){return y(r.get(l)??n(l,o),o),Reflect.set(i,l,o)}});L(this,Ve,(e.hydrate?Yl:Zn)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((a=e==null?void 0:e.props)!=null&&a.$$host)||e.sync===!1)&&re(),L(this,wt,s.$$events);for(const i of Object.keys(u(this,Ve)))i==="$set"||i==="$destroy"||i==="$on"||bi(this,i,{get(){return u(this,Ve)[i]},set(l){u(this,Ve)[i]=l},enumerable:!0});u(this,Ve).$set=i=>{Object.assign(s,i)},u(this,Ve).$destroy=()=>{Jl(u(this,Ve))}}$set(e){u(this,Ve).$set(e)}$on(e,r){u(this,wt)[e]=u(this,wt)[e]||[];const n=(...s)=>r.call(this,...s);return u(this,wt)[e].push(n),()=>{u(this,wt)[e]=u(this,wt)[e].filter(s=>s!==n)}}$destroy(){u(this,Ve).$destroy()}}wt=new WeakMap,Ve=new WeakMap;function lc(t){Fe===null&&el(),Zi(()=>{const e=an(t);if(typeof e=="function")return e})}const cc="5";var vi;typeof window<"u"&&((vi=window.__svelte??(window.__svelte={})).v??(vi.v=new Set)).add(cc);function ko(t){const e=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),r=[],n=/```(\w*)\n?([\s\S]*?)```/g;let s,a=0;for(;(s=n.exec(e))!==null;)r.push(e.slice(a,s.index)),r.push(`<pre class="code-block"><code class="lang-${s[1]||"text"}">${s[2].replace(/\n$/,"")}</code></pre>`),a=s.index+s[0].length;return r.push(e.slice(a)),r.join("").split(/\n{2,}/).map(i=>i.startsWith("<pre")?i:`<p>${i.replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/\n/g,"<br/>")}</p>`).join("")}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls=globalThis,Qn=Ls.ShadowRoot&&(Ls.ShadyCSS===void 0||Ls.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ea=Symbol(),ti=new WeakMap;let wo=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==ea)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Qn&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=ti.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ti.set(r,e))}return e}toString(){return this.cssText}};const xo=t=>new wo(typeof t=="string"?t:t+"",void 0,ea),oe=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,s,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[a+1],t[0]);return new wo(r,t,ea)},dc=(t,e)=>{if(Qn)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),s=Ls.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,t.appendChild(n)}},ri=Qn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return xo(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:uc,defineProperty:fc,getOwnPropertyDescriptor:pc,getOwnPropertyNames:hc,getOwnPropertySymbols:vc,getPrototypeOf:mc}=Object,Lt=globalThis,si=Lt.trustedTypes,gc=si?si.emptyScript:"",gn=Lt.reactiveElementPolyfillSupport,ts=(t,e)=>t,Fs={toAttribute(t,e){switch(e){case Boolean:t=t?gc:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},ta=(t,e)=>!uc(t,e),ni={attribute:!0,type:String,converter:Fs,reflect:!1,useDefault:!1,hasChanged:ta};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Lt.litPropertyMetadata??(Lt.litPropertyMetadata=new WeakMap);let br=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=ni){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,r);s!==void 0&&fc(this.prototype,e,s)}}static getPropertyDescriptor(e,r,n){const{get:s,set:a}=pc(this.prototype,e)??{get(){return this[r]},set(i){this[r]=i}};return{get:s,set(i){const l=s==null?void 0:s.call(this);a==null||a.call(this,i),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ni}static _$Ei(){if(this.hasOwnProperty(ts("elementProperties")))return;const e=mc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ts("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ts("properties"))){const r=this.properties,n=[...hc(r),...vc(r)];for(const s of n)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,s]of r)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const s=this._$Eu(r,n);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)r.unshift(ri(s))}else e!==void 0&&r.push(ri(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$ET(e,r){var a;const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const i=(((a=n.converter)==null?void 0:a.toAttribute)!==void 0?n.converter:Fs).toAttribute(r,n.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,r){var a,i;const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const l=n.getPropertyOptions(s),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:Fs;this._$Em=s;const c=o.fromAttribute(r,l.type);this[s]=c??((i=this._$Ej)==null?void 0:i.get(s))??c,this._$Em=null}}requestUpdate(e,r,n,s=!1,a){var i;if(e!==void 0){const l=this.constructor;if(s===!1&&(a=this[e]),n??(n=l.getPropertyOptions(e)),!((n.hasChanged??ta)(a,r)||n.useDefault&&n.reflect&&a===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:n,reflect:s,wrapped:a},i){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??r??this[e]),a!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(r=void 0),this._$AL.set(e,r)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,i]of s){const{wrapped:l}=i,o=this[a];l!==!0||this._$AL.has(a)||o===void 0||this.C(a,void 0,i,o)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(r)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};br.elementStyles=[],br.shadowRootOptions={mode:"open"},br[ts("elementProperties")]=new Map,br[ts("finalized")]=new Map,gn==null||gn({ReactiveElement:br}),(Lt.reactiveElementVersions??(Lt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rs=globalThis,ai=t=>t,qs=rs.trustedTypes,ii=qs?qs.createPolicy("lit-html",{createHTML:t=>t}):void 0,$o="$lit$",Tt=`lit$${Math.random().toFixed(9).slice(2)}$`,Eo="?"+Tt,bc=`<${Eo}>`,lr=document,os=()=>lr.createComment(""),ls=t=>t===null||typeof t!="object"&&typeof t!="function",ra=Array.isArray,_c=t=>ra(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",bn=`[ 	
\f\r]`,Yr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oi=/-->/g,li=/>/g,Wt=RegExp(`>|${bn}(?:([^\\s"'>=/]+)(${bn}*=${bn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ci=/'/g,di=/"/g,So=/^(?:script|style|textarea|title)$/i,yc=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),g=yc(1),cr=Symbol.for("lit-noChange"),ue=Symbol.for("lit-nothing"),ui=new WeakMap,Jt=lr.createTreeWalker(lr,129);function Co(t,e){if(!ra(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ii!==void 0?ii.createHTML(e):e}const kc=(t,e)=>{const r=t.length-1,n=[];let s,a=e===2?"<svg>":e===3?"<math>":"",i=Yr;for(let l=0;l<r;l++){const o=t[l];let c,d,h=-1,p=0;for(;p<o.length&&(i.lastIndex=p,d=i.exec(o),d!==null);)p=i.lastIndex,i===Yr?d[1]==="!--"?i=oi:d[1]!==void 0?i=li:d[2]!==void 0?(So.test(d[2])&&(s=RegExp("</"+d[2],"g")),i=Wt):d[3]!==void 0&&(i=Wt):i===Wt?d[0]===">"?(i=s??Yr,h=-1):d[1]===void 0?h=-2:(h=i.lastIndex-d[2].length,c=d[1],i=d[3]===void 0?Wt:d[3]==='"'?di:ci):i===di||i===ci?i=Wt:i===oi||i===li?i=Yr:(i=Wt,s=void 0);const m=i===Wt&&t[l+1].startsWith("/>")?" ":"";a+=i===Yr?o+bc:h>=0?(n.push(c),o.slice(0,h)+$o+o.slice(h)+Tt+m):o+Tt+(h===-2?l:m)}return[Co(t,a+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class cs{constructor({strings:e,_$litType$:r},n){let s;this.parts=[];let a=0,i=0;const l=e.length-1,o=this.parts,[c,d]=kc(e,r);if(this.el=cs.createElement(c,n),Jt.currentNode=this.el.content,r===2||r===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=Jt.nextNode())!==null&&o.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith($o)){const p=d[i++],m=s.getAttribute(h).split(Tt),_=/([.?@])?(.*)/.exec(p);o.push({type:1,index:a,name:_[2],strings:m,ctor:_[1]==="."?xc:_[1]==="?"?$c:_[1]==="@"?Ec:on}),s.removeAttribute(h)}else h.startsWith(Tt)&&(o.push({type:6,index:a}),s.removeAttribute(h));if(So.test(s.tagName)){const h=s.textContent.split(Tt),p=h.length-1;if(p>0){s.textContent=qs?qs.emptyScript:"";for(let m=0;m<p;m++)s.append(h[m],os()),Jt.nextNode(),o.push({type:2,index:++a});s.append(h[p],os())}}}else if(s.nodeType===8)if(s.data===Eo)o.push({type:2,index:a});else{let h=-1;for(;(h=s.data.indexOf(Tt,h+1))!==-1;)o.push({type:7,index:a}),h+=Tt.length-1}a++}}static createElement(e,r){const n=lr.createElement("template");return n.innerHTML=e,n}}function Tr(t,e,r=t,n){var i,l;if(e===cr)return e;let s=n!==void 0?(i=r._$Co)==null?void 0:i[n]:r._$Cl;const a=ls(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),a===void 0?s=void 0:(s=new a(t),s._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=s:r._$Cl=s),s!==void 0&&(e=Tr(t,s._$AS(t,e.values),s,n)),e}class wc{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,s=((e==null?void 0:e.creationScope)??lr).importNode(r,!0);Jt.currentNode=s;let a=Jt.nextNode(),i=0,l=0,o=n[0];for(;o!==void 0;){if(i===o.index){let c;o.type===2?c=new Es(a,a.nextSibling,this,e):o.type===1?c=new o.ctor(a,o.name,o.strings,this,e):o.type===6&&(c=new Sc(a,this,e)),this._$AV.push(c),o=n[++l]}i!==(o==null?void 0:o.index)&&(a=Jt.nextNode(),i++)}return Jt.currentNode=lr,s}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class Es{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,s){this.type=2,this._$AH=ue,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Tr(this,e,r),ls(e)?e===ue||e==null||e===""?(this._$AH!==ue&&this._$AR(),this._$AH=ue):e!==this._$AH&&e!==cr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):_c(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ue&&ls(this._$AH)?this._$AA.nextSibling.data=e:this.T(lr.createTextNode(e)),this._$AH=e}$(e){var a;const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=cs.createElement(Co(n.h,n.h[0]),this.options)),n);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(r);else{const i=new wc(s,this),l=i.u(this.options);i.p(r),this.T(l),this._$AH=i}}_$AC(e){let r=ui.get(e.strings);return r===void 0&&ui.set(e.strings,r=new cs(e)),r}k(e){ra(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const a of e)s===r.length?r.push(n=new Es(this.O(os()),this.O(os()),this,this.options)):n=r[s],n._$AI(a),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e!==this._$AB;){const s=ai(e).nextSibling;ai(e).remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class on{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,s,a){this.type=1,this._$AH=ue,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ue}_$AI(e,r=this,n,s){const a=this.strings;let i=!1;if(a===void 0)e=Tr(this,e,r,0),i=!ls(e)||e!==this._$AH&&e!==cr,i&&(this._$AH=e);else{const l=e;let o,c;for(e=a[0],o=0;o<a.length-1;o++)c=Tr(this,l[n+o],r,o),c===cr&&(c=this._$AH[o]),i||(i=!ls(c)||c!==this._$AH[o]),c===ue?e=ue:e!==ue&&(e+=(c??"")+a[o+1]),this._$AH[o]=c}i&&!s&&this.j(e)}j(e){e===ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class xc extends on{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ue?void 0:e}}class $c extends on{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ue)}}class Ec extends on{constructor(e,r,n,s,a){super(e,r,n,s,a),this.type=5}_$AI(e,r=this){if((e=Tr(this,e,r,0)??ue)===cr)return;const n=this._$AH,s=e===ue&&n!==ue||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==ue&&(n===ue||s);s&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class Sc{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Tr(this,e)}}const _n=rs.litHtmlPolyfillSupport;_n==null||_n(cs,Es),(rs.litHtmlVersions??(rs.litHtmlVersions=[])).push("3.3.3");const Cc=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let s=n._$litPart$;if(s===void 0){const a=(r==null?void 0:r.renderBefore)??null;n._$litPart$=s=new Es(e.insertBefore(os(),a),a,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nr=globalThis;let X=class extends br{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Cc(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return cr}};var mi;X._$litElement$=!0,X.finalized=!0,(mi=nr.litElementHydrateSupport)==null||mi.call(nr,{LitElement:X});const yn=nr.litElementPolyfillSupport;yn==null||yn({LitElement:X});(nr.litElementVersions??(nr.litElementVersions=[])).push("4.2.2");const Ac={surface:{light:"#ffffff",dark:"#171717"},"surface-muted":{light:"#f5f5f5",dark:"#1a1a1a"},"surface-hover":{light:"#f5f5f5",dark:"#1a1a1a"},"surface-active":{light:"#e5e5e5",dark:"#262626"},text:{light:"#171717",dark:"#e5e5e5"},"text-muted":{light:"#a3a3a3",dark:"#737373"},"text-faint":{light:"#737373",dark:"#525252"},"text-inverse":{light:"#fafafa",dark:"#171717"},border:{light:"#e5e5e5",dark:"#262626"},"border-strong":{light:"#d4d4d4",dark:"#404040"},focus:{light:"#a3a3a3",dark:"#525252"},accent:{light:"#c2410c",dark:"#ea580c"},"accent-text":{light:"#fafafa",dark:"#fafafa"},danger:{light:"#dc2626",dark:"#f87171"},"danger-text":{light:"#991b1b",dark:"#fca5a5"},"danger-bg":{light:"#fef2f2",dark:"#450a0a"},"danger-border":{light:"#fecaca",dark:"#7f1d1d"},success:{light:"#16a34a",dark:"#4ade80"},"success-text":{light:"#166534",dark:"#86efac"},"success-bg":{light:"#f0fdf4",dark:"#052e16"},"success-border":{light:"#bbf7d0",dark:"#166534"}},Pc=`
  --ask-radius: var(--ask-radius-app, 0.5rem);
  --ask-radius-small: var(--ask-radius-app-small, 0.375rem);
  --ask-radius-pill: var(--ask-radius-app-pill, 9999px);
  --ask-font: var(--ask-font-app, inherit);
  --ask-font-size: var(--ask-font-size-app, 0.8125rem);
  --ask-font-size-small: var(--ask-font-size-app-small, 0.6875rem);
  --ask-spacing: var(--ask-spacing-app, 0.5rem);
`;function Ts(t){return Object.entries(Ac).map(([e,r])=>`  --ask-${e}: var(--ask-${e}-${t}, ${r[t]});`).join(`
`)}const le=xo(`
:host {
${Ts("light")}
${Pc}
}

/* Explicit dark theme (on the component or any ancestor) */
:host([theme="dark"]),
:host-context([theme="dark"]),
/* Legacy .dark class path */
:host-context(.dark) {
${Ts("dark")}
}

/* Explicit light theme pins light */
:host([theme="light"]),
:host-context([theme="light"]) {
${Ts("light")}
}

/* OS preference, unless the app pinned a theme */
@media (prefers-color-scheme: dark) {
  :host(:not([theme="light"])) {
${Ts("dark")}
  }
}
`);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oc={attribute:!0,type:String,converter:Fs,reflect:!1,hasChanged:ta},Nc=(t=Oc,e,r)=>{const{kind:n,metadata:s}=r;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(r.name,t),n==="accessor"){const{name:i}=r;return{set(l){const o=e.get.call(this);e.set.call(this,l),this.requestUpdate(i,o,t,!0,l)},init(l){return l!==void 0&&this.C(i,void 0,t,l),l}}}if(n==="setter"){const{name:i}=r;return function(l){const o=this[i];e.call(this,l),this.requestUpdate(i,o,t,!0,l)}}throw Error("Unsupported decorator location: "+n)};function b(t){return(e,r)=>typeof r=="object"?Nc(t,e,r):((n,s,a)=>{const i=s.hasOwnProperty(a);return s.constructor.createProperty(a,n),i?Object.getOwnPropertyDescriptor(s,a):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ss(t){return b({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fi=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ln(t,e){return(r,n,s)=>{const a=i=>{var l;return((l=i.renderRoot)==null?void 0:l.querySelector(t))??null};if(e){const{get:i,set:l}=typeof n=="object"?r:s??(()=>{const o=Symbol();return{get(){return this[o]},set(c){this[o]=c}}})();return fi(r,n,{get(){let o=i.call(this);return o===void 0&&(o=a(this),(o!==null||this.hasUpdated)&&l.call(this,o)),o}})}return fi(r,n,{get(){return a(this)}})}}var zc=Object.defineProperty,Ao=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&zc(e,r,s),s};const ha=class ha extends X{constructor(){super(...arguments),this.role="user",this.content=""}render(){const e=this.role==="assistant";return g`
      <div class="message-row ${e?"":"message-row--right"}">
        <div
          class="message-bubble ${e?"message-bubble--assistant":"message-bubble--user"}"
          style="${e?"color: var(--ask-text, #171717)":"background: var(--ask-surface-muted, #f5f5f5); color: var(--ask-text, #171717)"}"
        >${this.content}</div>
      </div>
    `}};ha.styles=oe`${le}

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
    
    
  `;let ds=ha;Ao([b({type:String})],ds.prototype,"role");Ao([b({type:String})],ds.prototype,"content");customElements.define("ask-message",ds);var Tc=Object.defineProperty,cn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Tc(e,r,s),s};const va=class va extends X{constructor(){super(...arguments),this.content="",this.label="Thought",this.open=!1,this.streaming=!1}_handleToggle(){this.streaming||(this.open=!this.open,this.dispatchEvent(new CustomEvent("ask-toggle",{detail:{open:this.open},bubbles:!0,composed:!0})))}_handleKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleToggle())}render(){const e=this.content&&this.content.length>0,r=this.streaming||this.open;return!e&&!this.streaming?g``:g`
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
    `}};va.styles=oe`${le}

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

    
    
  `;let dr=va;cn([b({type:String})],dr.prototype,"content");cn([b({type:String})],dr.prototype,"label");cn([b({type:Boolean,reflect:!0})],dr.prototype,"open");cn([b({type:Boolean,reflect:!0})],dr.prototype,"streaming");customElements.define("ask-thinking",dr);var Mc=Object.defineProperty,sa=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Mc(e,r,s),s};const ma=class ma extends X{constructor(){super(...arguments),this.name="Tool",this.status="running",this.duration=0}render(){const e=this.status==="failed",r=this.status==="done";let n,s,a;r?(n="✓",s="",a="done"):e?(n="✕",s="",a="failed"):(n="⚙",s="tool-icon--running",a="running");const i=this.duration>0?`${this.duration}ms`:"";return g`
      <div class="tool-card ${e?"tool-card--failed":""}">
        <span class="tool-icon ${s}">${n}</span>
        <span class="tool-name">${this.name}</span>
        <span class="tool-status">${a}</span>
        ${i?g`<span class="tool-duration">${i}</span>`:""}
      </div>
    `}};ma.styles=oe`${le}

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

    
    
  `;let Mr=ma;sa([b({type:String})],Mr.prototype,"name");sa([b({type:String})],Mr.prototype,"status");sa([b({type:Number})],Mr.prototype,"duration");customElements.define("ask-tool-call",Mr);var jc=Object.defineProperty,Cs=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&jc(e,r,s),s};const ga=class ga extends X{constructor(){super(...arguments),this.actionId=0,this.toolName="Tool",this.args="",this.message="",this.status="pending"}render(){const e=this.status==="pending",r=this.status==="pending"?g`<span class="status-chip status-chip--pending">Awaiting approval</span>`:this.status==="approved"?g`<span class="status-chip status-chip--approved">Approved</span>`:g`<span class="status-chip status-chip--rejected">Rejected</span>`;return g`
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
      </div>`}_approve(){this.dispatchEvent(new CustomEvent("approval-approved",{detail:{id:this.actionId},bubbles:!0,composed:!0}))}_reject(){this.dispatchEvent(new CustomEvent("approval-rejected",{detail:{id:this.actionId},bubbles:!0,composed:!0}))}};ga.styles=oe`${le}

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
  `;let Dt=ga;Cs([b({type:Number,attribute:"action-id"})],Dt.prototype,"actionId");Cs([b({type:String,attribute:"tool-name"})],Dt.prototype,"toolName");Cs([b({type:String})],Dt.prototype,"args");Cs([b({type:String})],Dt.prototype,"message");Cs([b({type:String})],Dt.prototype,"status");customElements.define("ask-tool-approval",Dt);var Rc=Object.defineProperty,na=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Rc(e,r,s),s};const ba=class ba extends X{constructor(){super(...arguments),this.open=!1,this.header=""}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){this.removeEventListener("keydown",this._onKeydown),super.disconnectedCallback()}render(){return g`
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
    `}_onKeydown(e){e.key==="Escape"&&this.open&&this._close()}_onBackdrop(e){e.target===e.currentTarget&&this._close()}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("dialog-close",{bubbles:!0,composed:!0}))}};ba.styles=oe`${le}

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
  `;let jr=ba;na([b({type:Boolean,reflect:!0})],jr.prototype,"open");na([b({type:String})],jr.prototype,"header");na([ln(".panel")],jr.prototype,"_panel");customElements.define("ask-dialog",jr);var Ic=Object.defineProperty,dn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Ic(e,r,s),s};const _a=class _a extends X{constructor(){super(...arguments),this.items=[],this.triggerLabel="",this.open=!1,this._onOutside=e=>{if(!this.open)return;e.composedPath().includes(this)||(this.open=!1,this.dispatchEvent(new CustomEvent("menu-close",{bubbles:!0,composed:!0})))}}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this._onOutside)}disconnectedCallback(){document.removeEventListener("pointerdown",this._onOutside),super.disconnectedCallback()}render(){return g`
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
    `}_toggle(){this.open=!this.open,this.dispatchEvent(new CustomEvent(this.open?"menu-open":"menu-close",{bubbles:!0,composed:!0}))}_select(e){this.open=!1,this.dispatchEvent(new CustomEvent("menu-select",{detail:{id:e.id},bubbles:!0,composed:!0}))}};_a.styles=oe`${le}

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
  `;let ur=_a;dn([b({type:Array})],ur.prototype,"items");dn([b({type:String})],ur.prototype,"triggerLabel");dn([b({type:Boolean})],ur.prototype,"open");dn([ln(".menu")],ur.prototype,"_menu");customElements.define("ask-menu",ur);var Lc=Object.defineProperty,Po=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Lc(e,r,s),s};const ya=class ya extends X{constructor(){super(...arguments),this.value="",this.placeholder="Search…"}render(){return g`
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
    `}_onInput(e){const r=e.target;this.value=r.value,this.dispatchEvent(new CustomEvent("search-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_clear(){this.value="",this.dispatchEvent(new CustomEvent("search-input",{detail:{value:""},bubbles:!0,composed:!0}))}};ya.styles=oe`${le}

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
  `;let us=ya;Po([b({type:String})],us.prototype,"value");Po([b({type:String})],us.prototype,"placeholder");customElements.define("ask-search-input",us);var Bc=Object.defineProperty,As=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Bc(e,r,s),s};const ka=class ka extends X{constructor(){super(...arguments),this.id="",this.title="",this.meta="",this.active=!1,this.archived=!1}render(){return g`
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
    `}_select(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("conversation-select",{detail:{id:this.id},bubbles:!0,composed:!0}))}_emit(e){return r=>{r.stopPropagation(),this.dispatchEvent(new CustomEvent(e,{detail:{id:this.id},bubbles:!0,composed:!0}))}}};ka.styles=oe`${le}

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
  `;let Ht=ka;As([b({type:String})],Ht.prototype,"id");As([b({type:String})],Ht.prototype,"title");As([b({type:String})],Ht.prototype,"meta");As([b({type:Boolean})],Ht.prototype,"active");As([b({type:Boolean})],Ht.prototype,"archived");customElements.define("ask-conversation-item",Ht);var Dc=Object.defineProperty,aa=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Dc(e,r,s),s};const wa=class wa extends X{constructor(){super(...arguments),this.label="",this.count=0,this.expanded=!0}render(){return g`
      <button class="header" @click=${this._toggle} aria-expanded=${this.expanded?"true":"false"}>
        <svg class="chevron ${this.expanded?"chevron--open":""}" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
        <span class="label">${this.label}</span>
        ${this.count>0?g`<span class="count">${this.count}</span>`:""}
      </button>
      ${this.expanded?g`<slot></slot>`:""}
    `}_toggle(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("group-toggle",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};wa.styles=oe`${le}

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
  `;let Rr=wa;aa([b({type:String})],Rr.prototype,"label");aa([b({type:Number})],Rr.prototype,"count");aa([b({type:Boolean})],Rr.prototype,"expanded");customElements.define("ask-conversation-group",Rr);var Hc=Object.defineProperty,Uc=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Hc(e,r,s),s};const xa=class xa extends X{constructor(){super(...arguments),this.todos=[]}render(){if(this.todos.length===0)return g``;const e=this.todos.map(r=>typeof r=="string"?{id:r,title:r,status:"pending"}:r);return g`
      <ul class="todos">
        ${e.map(r=>g`
          <li class="todo todo--${r.status}">
            <span class="dot"></span>
            <span class="title">${r.title}</span>
            <span class="status">${r.status.replace("_"," ")}</span>
          </li>
        `)}
      </ul>`}};xa.styles=oe`${le}

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
  `;let Ks=xa;Uc([b({type:Array})],Ks.prototype,"todos");customElements.define("ask-todo-list",Ks);var Fc=Object.defineProperty,Oo=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Fc(e,r,s),s};const $a=class $a extends X{constructor(){super(...arguments),this.plan="",this.status="proposed"}render(){const e=this.status==="proposed",r=this.status==="proposed"?g`<span class="status-chip status-chip--proposed">Proposed</span>`:this.status==="approved"?g`<span class="status-chip status-chip--approved">Approved</span>`:g`<span class="status-chip status-chip--rejected">Rejected</span>`;return g`
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
      </div>`}_approve(){this.dispatchEvent(new CustomEvent("plan-approved",{detail:{plan:this.plan},bubbles:!0,composed:!0}))}_reject(){this.dispatchEvent(new CustomEvent("plan-rejected",{detail:{plan:this.plan},bubbles:!0,composed:!0}))}};$a.styles=oe`${le}

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
  `;let fs=$a;Oo([b({type:String})],fs.prototype,"plan");Oo([b({type:String})],fs.prototype,"status");customElements.define("ask-plan",fs);var qc=Object.defineProperty,No=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&qc(e,r,s),s};const Ea=class Ea extends X{constructor(){super(...arguments),this.diff="",this.filename=""}render(){const e=Kc(this.diff);if(e.lines.length===0&&!this.filename)return g`<pre class="diff"><div class="diff--empty">No changes</div></pre>`;const r=this.filename?g`<div class="file-header"><span>${this.filename}</span><span class="hunk-count">+${e.adds} −${e.dels}</span></div>`:e.fileNames.length>0?g`<div class="file-header"><span>${e.fileNames.join(" → ")}</span><span class="hunk-count">+${e.adds} −${e.dels}</span></div>`:"";return g`
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
      </div>`}};Ea.styles=oe`${le}

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
  `;let ps=Ea;No([b({type:String})],ps.prototype,"diff");No([b({type:String})],ps.prototype,"filename");function Kc(t){const e=[],r=[];let n=0,s=0,a=null,i=0,l=0;for(const c of t.split(`
`)){const d=c.replace(/\r$/,"");if(d.startsWith("+++ ")||d.startsWith("--- ")){r.push(d.slice(4).replace(/^[ab]\//,""));continue}if(d.startsWith("@@")){a={header:d,lines:[]},e.push(a);const h=d.match(/@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/);i=h?parseInt(h[1],10):0,l=h?parseInt(h[2],10):0;continue}a&&(d.startsWith("+")?(a.lines.push({type:"add",text:d.slice(1),oldNo:null,newNo:l}),l+=1,n+=1):d.startsWith("-")?(a.lines.push({type:"del",text:d.slice(1),oldNo:i,newNo:null}),i+=1,s+=1):(a.lines.push({type:"ctx",text:d.slice(1),oldNo:i,newNo:l}),i+=1,l+=1))}const o=e.flatMap(c=>c.lines);return{hunks:e,lines:o,fileNames:r,adds:n,dels:s}}customElements.define("ask-diff",ps);var Wc=Object.defineProperty,ia=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Wc(e,r,s),s};const Sa=class Sa extends X{constructor(){super(...arguments),this.output="",this.maxLines=8,this.expanded=!1}render(){const e=this.output.replace(/\x1b\[[0-9;]*m/g,"");if(!e)return g`<div class="terminal"><div class="output output--empty">No output</div></div>`;const r=e.split(`
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
      </div>`}_toggle(){this.expanded=!this.expanded}async _copy(){var e;try{await navigator.clipboard.writeText(this.output)}catch{const r=(e=this.shadowRoot)==null?void 0:e.querySelector(".output"),n=document.createRange();if(r){n.selectNodeContents(r);const s=window.getSelection();s==null||s.removeAllRanges(),s==null||s.addRange(n)}}}};Sa.styles=oe`${le}

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
  `;let Ir=Sa;ia([b({type:String})],Ir.prototype,"output");ia([b({type:Number,attribute:"max-lines"})],Ir.prototype,"maxLines");ia([b({type:Boolean})],Ir.prototype,"expanded");customElements.define("ask-terminal-output",Ir);var Vc=Object.defineProperty,zo=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Vc(e,r,s),s};const Ca=class Ca extends X{constructor(){super(...arguments),this.content="",this.active=!1}render(){return this.active?g`
      <div class="streaming-content">
        ${this.content}<span class="streaming-cursor" aria-hidden="true"></span>
      </div>
    `:g``}};Ca.styles=oe`${le}

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
  `;let hs=Ca;zo([b({type:String})],hs.prototype,"content");zo([b({type:Boolean,reflect:!0})],hs.prototype,"active");customElements.define("ask-streaming",hs);var Yc=Object.defineProperty,oa=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Yc(e,r,s),s};const Aa=class Aa extends X{constructor(){super(...arguments),this.code="",this.language="",this._copied=!1}async _handleCopy(){try{await navigator.clipboard.writeText(this.code),this._copied=!0,setTimeout(()=>{this._copied=!1},2e3)}catch{}}render(){return this.code?g`
      <div class="code-wrapper">
        <div class="code-header">
          <span class="code-language">${this.language||"code"}</span>
          <button class="code-copy-btn" @click=${this._handleCopy}>
            ${this._copied?"✅":"📋"} ${this._copied?"Copied":"Copy"}
          </button>
        </div>
        <pre class="code-body"><code>${this.code}</code></pre>
      </div>
    `:g``}};Aa.styles=oe`${le}

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

    
    
  `;let Lr=Aa;oa([b({type:String})],Lr.prototype,"code");oa([b({type:String})],Lr.prototype,"language");oa([Ss()],Lr.prototype,"_copied");customElements.define("ask-code-block",Lr);var Jc=Object.defineProperty,Ps=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Jc(e,r,s),s};const Pa=class Pa extends X{constructor(){super(...arguments),this.value="",this.placeholder="Type a message...",this.disabled=!1,this.streaming=!1}_handleInput(e){const r=e.target;this.value=r.value,this._autoResize(),this.dispatchEvent(new CustomEvent("ask-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_autoResize(){const e=this._textarea;e.style.height="auto",e.style.height=Math.min(e.scrollHeight,192)+"px"}_handleKeydown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this._submit())}_submit(){const e=this.value.trim();!e||this.disabled||this.streaming||this.dispatchEvent(new CustomEvent("ask-submit",{detail:{value:e},bubbles:!0,composed:!0}))}_handleStop(){this.dispatchEvent(new CustomEvent("ask-stop",{bubbles:!0,composed:!0}))}_handleKeydownGlobal(e){e.key==="Escape"&&this.streaming&&this._handleStop()}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._handleKeydownGlobal.bind(this))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._handleKeydownGlobal.bind(this))}render(){const e=this.querySelector(":scope > [slot='context']")!==null,r=this.querySelector(":scope > [slot='toolbar']")!==null;return g`
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
    `}};Pa.styles=oe`${le}

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

    
    
  `;let Ut=Pa;Ps([b({type:String})],Ut.prototype,"value");Ps([b({type:String})],Ut.prototype,"placeholder");Ps([b({type:Boolean,reflect:!0})],Ut.prototype,"disabled");Ps([b({type:Boolean,reflect:!0})],Ut.prototype,"streaming");Ps([ln(".input-textarea",!0)],Ut.prototype,"_textarea");customElements.define("ask-chat-input",Ut);var Gc=Object.defineProperty,un=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Gc(e,r,s),s};const Oa=class Oa extends X{constructor(){super(...arguments),this.src="",this.name="",this.role="assistant",this.size=28}render(){const e=`${this.size}px`;if(this.src)return g`
        <div class="avatar" style="width: ${e}; height: ${e};">
          <img class="avatar-img" src=${this.src} alt=${this.name||"avatar"} />
        </div>
      `;let r;return this.name?r=this.name.charAt(0).toUpperCase():r=this.role==="assistant"?"🤖":"👤",g`
      <div class="avatar" style="width: ${e}; height: ${e};">
        <span class="avatar-fallback">${r}</span>
      </div>
    `}};Oa.styles=oe`${le}

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

    
    
  `;let fr=Oa;un([b({type:String})],fr.prototype,"src");un([b({type:String})],fr.prototype,"name");un([b({type:String})],fr.prototype,"role");un([b({type:Number})],fr.prototype,"size");customElements.define("ask-avatar",fr);var Zc=Object.defineProperty,Os=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Zc(e,r,s),s};const Na=class Na extends X{constructor(){super(...arguments),this.name="",this.size=0,this.type="",this.src="",this.removable=!1}_formatSize(e){return e<1024?`${e}B`:e<1048576?`${(e/1024).toFixed(1)}KB`:`${(e/1048576).toFixed(1)}MB`}_handleRemove(){this.dispatchEvent(new CustomEvent("ask-remove",{detail:{name:this.name},bubbles:!0,composed:!0}))}render(){const e=this.type.startsWith("image/"),n=this.type.includes("pdf")?"📕":"📄";return g`
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
    `}};Na.styles=oe`${le}

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

    
    
  `;let Ft=Na;Os([b({type:String})],Ft.prototype,"name");Os([b({type:Number})],Ft.prototype,"size");Os([b({type:String})],Ft.prototype,"type");Os([b({type:String})],Ft.prototype,"src");Os([b({type:Boolean})],Ft.prototype,"removable");customElements.define("ask-attachment",Ft);var Xc=Object.defineProperty,la=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Xc(e,r,s),s};const za=class za extends X{constructor(){super(...arguments),this.message="",this.title="Something went wrong",this.retryable=!1}_handleRetry(){this.dispatchEvent(new CustomEvent("ask-retry",{bubbles:!0,composed:!0}))}render(){return this.message?g`
      <div class="error-card">
        <span class="error-icon">⚠️</span>
        <div class="error-content">
          <div class="error-title">${this.title}</div>
          <div class="error-message">${this.message}</div>
          ${this.retryable?g`<button class="error-retry" @click=${this._handleRetry}>Retry</button>`:""}
        </div>
      </div>
    `:g``}};za.styles=oe`${le}

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

    
    
  `;let Br=za;la([b({type:String})],Br.prototype,"message");la([b({type:String})],Br.prototype,"title");la([b({type:Boolean})],Br.prototype,"retryable");customElements.define("ask-error",Br);var Qc=Object.defineProperty,To=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&Qc(e,r,s),s};const Ta=class Ta extends X{constructor(){super(...arguments),this.suggestions="",this.label="Suggestions"}_parsedSuggestions(){try{const e=JSON.parse(this.suggestions);if(Array.isArray(e))return e}catch{}return this.suggestions?this.suggestions.split(",").map(e=>e.trim()).filter(Boolean):[]}_handleSelect(e){this.dispatchEvent(new CustomEvent("ask-select",{detail:{suggestion:e},bubbles:!0,composed:!0}))}render(){const e=this._parsedSuggestions();return e.length===0?g``:g`
      <div class="suggestions-label">${this.label}</div>
      <div class="suggestions-list">
        ${e.map(r=>g`
            <button class="suggestion-chip" @click=${()=>this._handleSelect(r)}>${r}</button>
          `)}
      </div>
    `}};Ta.styles=oe`${le}

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

    
    
  `;let vs=Ta;To([b({type:String})],vs.prototype,"suggestions");To([b({type:String})],vs.prototype,"label");customElements.define("ask-suggestions",vs);var ed=Object.defineProperty,ca=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&ed(e,r,s),s};const Ma=class Ma extends X{constructor(){super(...arguments),this.options="",this.value="",this.label=""}_parsedOptions(){try{const e=JSON.parse(this.options);if(Array.isArray(e))return e}catch{}return[]}_handleChange(e){const r=e.target;this.value=r.value,this.dispatchEvent(new CustomEvent("ask-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const e=this._parsedOptions();return g`
      <div class="selector-wrapper">
        ${this.label?g`<span class="selector-label">${this.label}</span>`:""}
        <select class="selector-select" @change=${this._handleChange} .value=${this.value}>
          ${e.map(r=>g`
              <option value=${r.value} ?selected=${r.value===this.value}>${r.label}</option>
            `)}
        </select>
      </div>
    `}};Ma.styles=oe`${le}

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

    
    
  `;let Dr=Ma;ca([b({type:String})],Dr.prototype,"options");ca([b({type:String})],Dr.prototype,"value");ca([b({type:String})],Dr.prototype,"label");customElements.define("ask-model-selector",Dr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const td={CHILD:2},rd=t=>(...e)=>({_$litDirective$:t,values:e});class sd{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Rn extends sd{constructor(e){if(super(e),this.it=ue,e.type!==td.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ue||e==null)return this._t=void 0,this.it=e;if(e===cr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Rn.directiveName="unsafeHTML",Rn.resultType=1;const In=rd(Rn);var nd=Object.defineProperty,Mo=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&nd(e,r,s),s};function ad(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function id(t){let e=ad(t);return e=e.replace(/`([^`]+)`/g,"<code>$1</code>"),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),e=e.replace(/\n/g,"<br>"),e}const ja=class ja extends X{constructor(){super(...arguments),this.content="",this.html=""}render(){if(this.html)return g`
        <div class="markdown-content">${In(this.html)}</div>
      `;if(!this.content)return g``;const e=id(this.content);return g`
      <div class="markdown-content">${In(e)}</div>
    `}};ja.styles=oe`${le}

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

    
    
  `;let ms=ja;Mo([b({type:String})],ms.prototype,"content");Mo([b({type:String})],ms.prototype,"html");customElements.define("ask-markdown",ms);var od=Object.defineProperty,Ns=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&od(e,r,s),s};const Ra=class Ra extends X{constructor(){super(...arguments),this.accept="",this.multiple=!0,this.disabled=!1,this.files=""}_handleKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleClick())}_handleClick(){this.disabled||this._input.click()}_handleFileChange(e){const r=e.target,n=r.files;if(!n||n.length===0)return;const s=[];for(let l=0;l<n.length;l++){const o=n[l],c={name:o.name,size:o.size,type:o.type};o.type.startsWith("image/")&&(c.src=URL.createObjectURL(o)),s.push(c)}const i=[...this._parsedFiles(),...s];this.files=JSON.stringify(i),r.value="",this.dispatchEvent(new CustomEvent("ask-files-select",{detail:{files:s},bubbles:!0,composed:!0}))}_handleRemove(e){const r=e.detail.name,n=this._parsedFiles().filter(s=>s.name!==r);this.files=JSON.stringify(n),this.dispatchEvent(new CustomEvent("ask-file-remove",{detail:{name:r},bubbles:!0,composed:!0}))}_parsedFiles(){try{const e=JSON.parse(this.files);if(Array.isArray(e))return e}catch{}return[]}render(){const e=this._parsedFiles();return g`
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
    `}};Ra.styles=oe`${le}

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

    
    
  `;let qt=Ra;Ns([b({type:String})],qt.prototype,"accept");Ns([b({type:Boolean})],qt.prototype,"multiple");Ns([b({type:Boolean})],qt.prototype,"disabled");Ns([b({type:String})],qt.prototype,"files");Ns([ln(".dropzone-input",!0)],qt.prototype,"_input");customElements.define("ask-file-upload",qt);var ld=Object.defineProperty,da=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&ld(e,r,s),s};function pi(t){const e=Date.now()-new Date(t).getTime(),r=Math.floor(e/1e3);if(r<60)return"just now";const n=Math.floor(r/60);if(n<60)return`${n}m ago`;const s=Math.floor(n/60);if(s<24)return`${s}h ago`;const a=Math.floor(s/24);return a<30?`${a}d ago`:new Date(t).toLocaleDateString()}const Ia=class Ia extends X{constructor(){super(...arguments),this.items="",this.activeId="",this._search=""}_parsedItems(){try{const e=JSON.parse(this.items);if(Array.isArray(e))return e}catch{}return[]}_handleSearch(e){this._search=e.target.value}_handleItemKeydown(e,r){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._handleSelect(r))}_handleSelect(e){this.dispatchEvent(new CustomEvent("ask-select",{detail:{id:e},bubbles:!0,composed:!0}))}render(){const e=this._parsedItems(),r=this._search.toLowerCase(),n=e.filter(i=>r?i.title.toLowerCase().includes(r)||`${i.messageCount||0} messages`.includes(r):!0),s=n.some(i=>i.status!=="closed"),a=n.some(i=>i.status==="closed");return e.length===0?g`
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
                        ${i.timestamp?g`<span>·</span><span>${pi(i.timestamp)}</span>`:""}
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
                        ${i.timestamp?g`<span>·</span><span>${pi(i.timestamp)}</span>`:""}
                      </div>
                    </div>
                  </div>
                `)}
          `:""}
    `}};Ia.styles=oe`${le}

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

    
    
  `;let Hr=Ia;da([b({type:String})],Hr.prototype,"items");da([b({type:String})],Hr.prototype,"activeId");da([Ss()],Hr.prototype,"_search");customElements.define("ask-conversation-list",Hr);var cd=Object.defineProperty,Wr=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&cd(e,r,s),s};const La=class La extends X{constructor(){super(...arguments),this.groups="",this.activeId="",this.newChatLabel="New chat",this.storageKey="ask-sidebar",this._collapsed={},this._expanded={}}connectedCallback(){super.connectedCallback(),this._loadState()}_loadState(){try{const e=sessionStorage.getItem(this.storageKey);if(!e)return;const r=JSON.parse(e);this._collapsed=r.collapsed||{},this._expanded=r.expanded||{}}catch{}}_saveState(){try{sessionStorage.setItem(this.storageKey,JSON.stringify({collapsed:this._collapsed,expanded:this._expanded}))}catch{}}_parsedGroups(){try{const e=JSON.parse(this.groups);if(Array.isArray(e))return e}catch{}return[]}_emit(e,r){this.dispatchEvent(new CustomEvent(e,{detail:r,bubbles:!0,composed:!0}))}_group(e){return this._parsedGroups().find(r=>r.id===e)}_findNode(e){for(const r of this._parsedGroups()){const n=this._searchNode(r.nodes,e);if(n)return n}}_searchNode(e,r){for(const n of e){if(n.id===r)return n;const s=this._searchNode(n.children??[],r);if(s)return s}}_toggleGroup(e){this._collapsed={...this._collapsed,[e]:!this._isCollapsed(e)},this._saveState()}_toggleNode(e){const r=this._findNode(e),n=r?!this._isExpanded(r):!(this._expanded[e]??!1);this._expanded={...this._expanded,[e]:n},this._saveState()}_isCollapsed(e){var r;return this._collapsed[e]??((r=this._group(e))==null?void 0:r.collapsed)??!1}_isExpanded(e){return this._expanded[e.id]??this._containsActive(e)}_containsActive(e){return e.id===this.activeId?!0:(e.children??[]).some(r=>r.id===this.activeId)}_node(e,r){if((e.children??[]).length>0){const s=this._isExpanded(e);return g`
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
    `}};La.styles=oe`${le}

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

    
    
  `;let St=La;Wr([b({type:String})],St.prototype,"groups");Wr([b({type:String,attribute:"active-id"})],St.prototype,"activeId");Wr([b({type:String,attribute:"new-chat-label"})],St.prototype,"newChatLabel");Wr([b({type:String,attribute:"storage-key"})],St.prototype,"storageKey");Wr([Ss()],St.prototype,"_collapsed");Wr([Ss()],St.prototype,"_expanded");customElements.define("ask-sidebar",St);var dd=Object.defineProperty,ua=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&dd(e,r,s),s};const Ba=class Ba extends X{constructor(){super(...arguments),this.recording=!1,this.disabled=!1,this._elapsed=0,this._timerId=null}_handleClick(){this.disabled||(this.recording?this._stopRecording():this._startRecording())}_startRecording(){this.recording=!0,this._elapsed=0,this._timerId=setInterval(()=>{this._elapsed++},1e3),this.dispatchEvent(new CustomEvent("ask-record-start",{bubbles:!0,composed:!0}))}_stopRecording(){this.recording=!1,this._timerId&&(clearInterval(this._timerId),this._timerId=null),this.dispatchEvent(new CustomEvent("ask-record-stop",{detail:{elapsed:this._elapsed},bubbles:!0,composed:!0}))}disconnectedCallback(){super.disconnectedCallback(),this._timerId&&clearInterval(this._timerId)}_formatTime(e){const r=Math.floor(e/60),n=e%60;return`${r}:${n.toString().padStart(2,"0")}`}render(){return g`
      <button
        class="voice-btn ${this.recording?"voice-btn--recording":""}"
        @click=${this._handleClick}
        ?disabled=${this.disabled}
        aria-label=${this.recording?"Stop recording":"Start recording"}
      >
        ${this.recording?"⏹":"🎤"}
      </button>
      ${this.recording?g`<span class="voice-timer">${this._formatTime(this._elapsed)}</span>`:""}
    `}};Ba.styles=oe`${le}

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

    
    
  `;let Ur=Ba;ua([b({type:Boolean,reflect:!0})],Ur.prototype,"recording");ua([b({type:Boolean})],Ur.prototype,"disabled");ua([Ss()],Ur.prototype,"_elapsed");customElements.define("ask-voice-input",Ur);var ud=Object.defineProperty,jo=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&ud(e,r,s),s};const Da=class Da extends X{constructor(){super(...arguments),this.visible=!1,this.badge=0}_handleClick(){this.dispatchEvent(new CustomEvent("ask-scroll",{bubbles:!0,composed:!0}))}render(){return g`
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
    `}};Da.styles=oe`${le}

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

    
    
  `;let gs=Da;jo([b({type:Boolean,reflect:!0})],gs.prototype,"visible");jo([b({type:Number})],gs.prototype,"badge");customElements.define("ask-scroll-bottom",gs);var fd=Object.defineProperty,fn=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&fd(e,r,s),s};const Ha=class Ha extends X{constructor(){super(...arguments),this.verificationUri="",this.userCode="",this.pending=!1,this.expiresLabel=""}_authorize(){this.dispatchEvent(new CustomEvent("ask-authorize",{bubbles:!0,composed:!0}))}render(){return g`
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
    `}};Ha.styles=oe`
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
  `;let pr=Ha;fn([b({type:String,attribute:"verification-uri"})],pr.prototype,"verificationUri");fn([b({type:String,attribute:"user-code"})],pr.prototype,"userCode");fn([b({type:Boolean,reflect:!0})],pr.prototype,"pending");fn([b({type:String,attribute:"expires-label"})],pr.prototype,"expiresLabel");customElements.define("ask-device-auth",pr);var pd=Object.defineProperty,fa=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&pd(e,r,s),s};const hi={explore:`
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
    </svg>`},Ua=class Ua extends X{constructor(){super(...arguments),this.variant="explore",this.label="",this.description=""}_accent(){const e={explore:"var(--ask-prompt-explore, #4f9cf9)",build:"var(--ask-prompt-build, #a78bfa)",review:"var(--ask-prompt-review, #34d399)",fix:"var(--ask-prompt-fix, #fb923c)",custom:"var(--ask-prompt-custom, var(--ask-accent, #c2410c))"};return e[this.variant]??e.custom}_icon(){return this.variant==="custom"?ue:g`<span class="icon" part="icon">${In(hi[this.variant]??hi.explore)}</span>`}_click(){this.dispatchEvent(new CustomEvent("ask-prompt",{detail:{label:this.label,variant:this.variant},bubbles:!0,composed:!0}))}render(){return g`
      <button class="card" style="--ask-prompt-accent: ${this._accent()}" @click=${this._click}>
        ${this.variant==="custom"?g`<span class="icon" part="icon"><slot></slot></span>`:this._icon()}
        <span class="label">${this.label}</span>
        ${this.description?g`<span class="description">${this.description}</span>`:ue}
      </button>
    `}};Ua.styles=oe`${le}

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
  `;let Fr=Ua;fa([b({type:String})],Fr.prototype,"variant");fa([b({type:String})],Fr.prototype,"label");fa([b({type:String})],Fr.prototype,"description");customElements.define("ask-prompt-card",Fr);var hd=Object.defineProperty,vd=(t,e,r,n)=>{for(var s=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=i(e,r,s)||s);return s&&hd(e,r,s),s};const Fa=class Fa extends X{constructor(){super(...arguments),this.heading=""}render(){return g`
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
    `}};Fa.styles=oe`${le}

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
  `;let Ws=Fa;vd([b({type:String})],Ws.prototype,"heading");customElements.define("ask-empty-state",Ws);const Pe="";async function Me(t){if(!t.ok){const e=await t.json().catch(()=>({}));throw new Error(e.error||`HTTP ${t.status}`)}return t.json()}async function md(){return Me(await fetch(`${Pe}/api/config`))}async function gd(){return Me(await fetch(`${Pe}/api/workspaces`))}async function bd(t){return Me(await fetch(`${Pe}/api/workspaces`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t})}))}async function Ln(){return Me(await fetch(`${Pe}/api/conversations`))}async function _d(t){return Me(await fetch(`${Pe}/api/conversations/${t}`))}async function yd(t,e){await Me(await fetch(`${Pe}/api/conversations/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e})}))}async function kd(t){await Me(await fetch(`${Pe}/api/conversations/${t}`,{method:"DELETE"}))}async function wd(t){await Me(await fetch(`${Pe}/api/conversations/${t}/archive`,{method:"POST"}))}async function xd(t,e){await Me(await fetch(`${Pe}/api/conversations/${t}/approvals/${e}/approve`,{method:"POST"}))}async function $d(t,e){await Me(await fetch(`${Pe}/api/conversations/${t}/approvals/${e}/reject`,{method:"POST"}))}async function Ed(t){await Me(await fetch(`${Pe}/api/conversations/${t}/approvals/approve-all`,{method:"POST"}))}async function Sd(t){await Me(await fetch(`${Pe}/api/conversations/${t}/plan/approve`,{method:"POST"}))}async function Cd(t){await Me(await fetch(`${Pe}/api/conversations/${t}/plan/reject`,{method:"POST"}))}async function Ad(t){await Me(await fetch(`${Pe}/api/conversations/${t}/abort`,{method:"POST"}))}function Pd(t,e,r,n,s,a,i){const l=new AbortController;return(async()=>{var o,c;try{const d=await fetch(`${Pe}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,conversation_id:e||void 0,model:r||void 0,workspace:n||void 0}),signal:l.signal});if(!d.ok||!d.body)throw new Error(`HTTP ${d.status}`);const h=d.body.getReader(),p=new TextDecoder;let m="";for(;;){const{done:_,value:P}=await h.read();if(_)break;m+=p.decode(P,{stream:!0});let v;for(;(v=m.indexOf(`

`))!==-1;){const w=m.slice(0,v);m=m.slice(v+2);const S=(o=w.match(/^event: (.+)$/m))==null?void 0:o[1],j=(c=w.match(/^data: (.+)$/m))==null?void 0:c[1];if(!S||j===void 0)continue;if(S==="conversation.created"){a(j);continue}let H={};try{H=JSON.parse(j)}catch{}s({type:S,data:H})}}}catch(d){d.name!=="AbortError"&&s({type:"error",data:{error:d.message}})}finally{i()}})(),l}function Od(t,e,r){switch(e){case"message.delta":t.text+=r.delta??"";break;case"message.thinking":t.thinking+=r.delta??"";break;case"tool.start":{const n=String(r.id??`${r.name}-${t.tools.size}`);t.tools=new Map(t.tools).set(n,{id:n,name:r.name,args:r.args,status:"running"});break}case"tool.delta":{const n=String(r.id),s=t.tools.get(n);s&&(t.tools=new Map(t.tools).set(n,{...s,partial:(s.partial??"")+(r.partial??"")}));break}case"tool.end":{const n=String(r.id),s=t.tools.get(n)??{id:n,name:r.name,status:"done"};t.tools=new Map(t.tools).set(n,{...s,output:r.output,isError:r.isError,durationMs:r.durationMs,status:r.isError?"failed":"done"});break}case"approval.required":t.approvals.push({id:r.id,toolName:r.toolName,args:r.args,message:r.message,autoApprovable:r.autoApprovable,status:"pending"});break;case"approval.updated":{const n=t.approvals.find(s=>s.id===r.id);n&&(n.status=r.status);break}case"plan.proposed":t.plan=r.plan,t.planStatus="proposed";break;case"plan.approved":t.plan=r.plan??t.plan,t.planStatus="approved";break;case"plan.rejected":t.plan=r.plan??t.plan,t.planStatus="rejected";break;case"todos.updated":t.todos=r.todos??[];break;case"turn.completed":t.status="completed",r.response&&!t.text&&(t.text=r.response);break;case"turn.failed":t.status="failed";break;case"turn.aborted":t.status="aborted";break}}function Jr(){return{text:"",thinking:"",tools:new Map,approvals:[],todos:[],plan:null,planStatus:null,status:"streaming"}}var Nd=B('<div class="block svelte-1l486hy"><ask-todo-list></ask-todo-list></div>',2),zd=B('<div class="block svelte-1l486hy"><ask-plan></ask-plan></div>',2),Td=B('<span class="tool-status running svelte-1l486hy">running…</span>'),Md=B('<span class="tool-status failed svelte-1l486hy">failed</span>'),jd=B('<span class="tool-status done svelte-1l486hy"> </span>'),Rd=B('<pre class="tool-args svelte-1l486hy"> </pre>'),Id=B("<ask-diff></ask-diff>",2),Ld=B("<ask-terminal-output></ask-terminal-output>",2),Bd=B('<div class="tool svelte-1l486hy"><div class="tool-head svelte-1l486hy"><span class="tool-icon svelte-1l486hy"> </span> <span class="tool-name svelte-1l486hy"> </span> <!></div> <!> <!></div>'),Dd=B('<div class="block tools svelte-1l486hy"></div>'),Hd=B('<button class="approve-all svelte-1l486hy"> </button>'),Ud=B("<ask-tool-approval></ask-tool-approval>",2),Fd=B('<div class="block approvals svelte-1l486hy"><!> <!></div>'),qd=B('<div class="tool-stream svelte-1l486hy"><!> <!> <!> <!></div>');function Ro(t,e){if(new.target)return Nt({component:Ro,...t});vt(e,!0);let r=ie(e,"turn"),n=ie(e,"conversationId");const s=st(()=>Array.from(r().tools.values())),a=st(()=>r().approvals.filter(k=>k.status==="pending"));function i(k){switch(k){case"bash":return"⌘";case"read":return"👁";case"write":return"✎";case"edit":return"✎";case"grep":return"🔎";case"glob":return"🗂";case"apply_patch":return"▤";case"todo_write":return"☑";default:return"⚙"}}function l(k){return k.startsWith("diff --git")||k.includes("--- a/")&&k.includes("+++ b/")||k.includes(`
@@ -`)}function o(k){return k.args===void 0||k.args===null?"":typeof k.args=="string"?k.args:JSON.stringify(k.args,null,2)}async function c(k){if(!n())return;await xd(n(),k);const M=r().approvals.find(N=>N.id===k);M&&(M.status="approved")}async function d(k){if(!n())return;await $d(n(),k);const M=r().approvals.find(N=>N.id===k);M&&(M.status="rejected")}async function h(){if(n()){await Ed(n());for(const k of r().approvals)k.status==="pending"&&(k.status="approved")}}async function p(){n()&&(await Sd(n()),r().planStatus="approved")}async function m(){n()&&(await Cd(n()),r().planStatus="rejected")}var _={get turn(){return r()},set turn(k){r(k),re()},get conversationId(){return n()},set conversationId(k){n(k),re()},$set:Ot,$on:(k,M)=>Pt(e,k,M)},P=qd(),v=E(P);{var w=k=>{var M=Nd(),N=E(M);q(()=>ce(N,"todos",r().todos)),gr(N,1,"svelte-1l486hy"),x(M),T(k,M)};te(v,k=>{r().todos.length>0&&k(w)})}var S=O(v,2);{var j=k=>{var M=zd(),N=E(M);q(()=>ce(N,"plan",r().plan)),q(()=>ce(N,"status",r().planStatus)),gr(N,1,"svelte-1l486hy"),x(M),Se("plan-approved",N,p),Se("plan-rejected",N,m),T(k,M)};te(S,k=>{r().plan!==null&&r().planStatus&&k(j)})}var H=O(S,2);{var $=k=>{var M=Dd();is(M,21,()=>f(s),N=>N.id,(N,Z)=>{var de=Bd(),A=E(de),z=E(A),ne=E(z,!0);x(z);var C=O(z,2),U=E(C,!0);x(C);var we=O(C,2);{var be=V=>{var me=Td();T(V,me)},Xe=V=>{var me=Hs(),bt=ns(me);{var I=ee=>{var pe=Md();T(ee,pe)},Y=ee=>{var pe=jd(),it=E(pe);x(pe),q(vr=>he(it,`done${vr??""}`),[()=>f(Z).durationMs?` · ${(f(Z).durationMs/1e3).toFixed(1)}s`:""]),T(ee,pe)};te(bt,ee=>{f(Z).isError?ee(I):ee(Y,!1)},!0)}T(V,me)};te(we,V=>{f(Z).status==="running"?V(be):V(Xe,!1)})}x(A);var Qe=O(A,2);{var je=V=>{var me=Rd(),bt=E(me,!0);x(me),q(I=>he(bt,I),[()=>o(f(Z))]),T(V,me)};te(Qe,V=>{o(f(Z))&&V(je)})}var fe=O(Qe,2);{var ae=V=>{var me=Hs(),bt=ns(me);{var I=ee=>{var pe=Id();q(()=>ce(pe,"diff",f(Z).output)),gr(pe,1,"svelte-1l486hy"),T(ee,pe)},Y=ee=>{var pe=Ld();q(()=>ce(pe,"output",f(Z).output)),ce(pe,"max-lines",6),gr(pe,1,"svelte-1l486hy"),T(ee,pe)};te(bt,ee=>{l(f(Z).output)?ee(I):ee(Y,!1)})}T(V,me)};te(fe,V=>{f(Z).status!=="running"&&f(Z).output&&V(ae)})}x(de),q(V=>{he(ne,V),he(U,f(Z).name)},[()=>i(f(Z).name)]),T(N,de)}),x(M),T(k,M)};te(H,k=>{f(s).length>0&&k($)})}var R=O(H,2);{var G=k=>{var M=Fd(),N=E(M);{var Z=A=>{var z=Hd();z.__click=h;var ne=E(z);x(z),q(()=>he(ne,`Approve all (${f(a).length??""})`)),T(A,z)};te(N,A=>{f(a).length>1&&A(Z)})}var de=O(N,2);is(de,17,()=>r().approvals,A=>A.id,(A,z)=>{var ne=Ud();q(()=>ce(ne,"action-id",f(z).id)),q(()=>ce(ne,"tool-name",f(z).toolName)),q(()=>ce(ne,"args",typeof f(z).args=="string"?f(z).args:JSON.stringify(f(z).args??{},null,2))),q(()=>ce(ne,"message",f(z).message??"")),q(()=>ce(ne,"status",f(z).status)),gr(ne,1,"svelte-1l486hy"),Se("approval-approved",ne,()=>c(f(z).id)),Se("approval-rejected",ne,()=>d(f(z).id)),T(A,ne)}),x(M),T(k,M)};te(R,k=>{r().approvals.length>0&&k(G)})}return x(P),T(t,P),mt(_)}Kr(["click"]);var Kd=B('<details class="thinking svelte-kpbn6d"><summary class="svelte-kpbn6d"><span class="thinking-label svelte-kpbn6d"> </span> <span class="thinking-toggle svelte-kpbn6d"> </span></summary> <div class="thinking-body svelte-kpbn6d"> </div></details>'),Wd=B('<div class="markdown svelte-kpbn6d"><!></div>'),Vd=B('<div class="typing svelte-kpbn6d"><span class="svelte-kpbn6d"></span><span class="svelte-kpbn6d"></span><span class="svelte-kpbn6d"></span></div>'),Yd=B('<div class="assistant svelte-kpbn6d"><!> <!> <!> <!></div>');function Bn(t,e){if(new.target)return Nt({component:Bn,...t});vt(e,!0);let r=ie(e,"content"),n=ie(e,"turn"),s=ie(e,"streaming",7,!1),a=ie(e,"conversationId",7,null),i=se(!1);const l=st(()=>n()!==void 0&&(n().tools.size>0||n().approvals.length>0||n().plan!==null||n().todos.length>0));var o={get content(){return r()},set content(S){r(S),re()},get turn(){return n()},set turn(S){n(S),re()},get streaming(){return s()},set streaming(S=!1){s(S),re()},get conversationId(){return a()},set conversationId(S=null){a(S),re()},$set:Ot,$on:(S,j)=>Pt(e,S,j)},c=Yd(),d=E(c);{var h=S=>{var j=Kd(),H=E(j),$=E(H),R=E($);x($);var G=O($,2),k=E(G,!0);x(G),x(H);var M=O(H,2),N=E(M,!0);x(M),x(j),q(()=>{he(R,`Thinking${s()?"…":""}`),he(k,f(i)?"Hide":"Show"),he(N,n().thinking)}),ic("open","toggle",j,Z=>y(i,Z),()=>f(i)),T(S,j)};te(d,S=>{n()!==void 0&&n().thinking&&S(h)})}var p=O(d,2);{var m=S=>{var j=Wd(),H=E(j);go(H,()=>ko(r())),x(j),T(S,j)};te(p,S=>{r()&&S(m)})}var _=O(p,2);{var P=S=>{Ro(S,{get turn(){return n()},get conversationId(){return a()}})};te(_,S=>{n()!==void 0&&f(l)&&S(P)})}var v=O(_,2);{var w=S=>{var j=Vd();T(S,j)};te(v,S=>{s()&&!r()&&!f(l)&&S(w)})}return x(c),T(t,c),mt(o)}var Jd=B('<div class="user svelte-10oznxe"><div class="bubble svelte-10oznxe"><!></div></div>');function Io(t,e){if(new.target)return Nt({component:Io,...t});vt(e,!0);let r=ie(e,"content");var n={get content(){return r()},set content(l){r(l),re()},$set:Ot,$on:(l,o)=>Pt(e,l,o)},s=Jd(),a=E(s),i=E(a);return go(i,()=>ko(r())),x(a),x(s),T(t,s),mt(n)}var Gd=B(`<div class="empty svelte-xdaci2"><div class="empty-logo svelte-xdaci2">🔧</div> <h1 class="svelte-xdaci2"> </h1> <p class="svelte-xdaci2">Point the agent at your project and let it fire away. It can read,
        write, and run commands — watch every tool call live and approve
        what needs approving.</p></div>`),Zd=B('<div class="chat svelte-xdaci2"><!> <!> <!></div>');function Lo(t,e){if(new.target)return Nt({component:Lo,...t});vt(e,!0);let r=ie(e,"messages"),n=ie(e,"turn"),s=ie(e,"streaming"),a=ie(e,"conversationId"),i,l=se(!0);Zi(()=>{f(l)&&i&&(i.scrollTop=i.scrollHeight)});function o(){if(!i)return;const v=i.scrollHeight-i.scrollTop-i.clientHeight<80;y(l,v)}var c={get messages(){return r()},set messages(v){r(v),re()},get turn(){return n()},set turn(v){n(v),re()},get streaming(){return s()},set streaming(v){s(v),re()},get conversationId(){return a()},set conversationId(v){a(v),re()},$set:Ot,$on:(v,w)=>Pt(e,v,w)},d=Zd(),h=E(d);{var p=v=>{var w=Gd(),S=O(E(w),2),j=E(S,!0);x(S),qn(2),x(w),q(()=>he(j,a()?"Continue the conversation":"ask-coding-harness")),T(v,w)};te(h,v=>{r().length===0&&!s()&&v(p)})}var m=O(h,2);is(m,17,r,Zl,(v,w)=>{var S=Hs(),j=ns(S);{var H=R=>{Io(R,{get content(){return f(w).content}})},$=R=>{Bn(R,{get content(){return f(w).content}})};te(j,R=>{f(w).role==="user"?R(H):R($,!1)})}T(v,S)});var _=O(m,2);{var P=v=>{Bn(v,{get content(){return n().text},get turn(){return n()},get streaming(){return s()},get conversationId(){return a()}})};te(_,v=>{(s()||n().text.trim()||n().tools.size>0||n().approvals.length>0||n().plan||n().todos.length>0)&&v(P)})}return x(d),yo(d,v=>i=v,()=>i),Se("scroll",d,o),T(t,d),mt(c)}var Xd=B('<div class="ws-name svelte-181dlmc"> </div>'),Qd=B('<div class="empty svelte-181dlmc"> </div>'),eu=B('<div class="rename-row svelte-181dlmc"><input class="svelte-181dlmc"/></div>'),tu=B("<ask-conversation-item></ask-conversation-item>",2),ru=B('<div class="sidebar svelte-181dlmc"><div class="head svelte-181dlmc"><!> <button class="new svelte-181dlmc"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> New conversation</button> <button class="close svelte-181dlmc" aria-label="Close sidebar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div> <div class="search svelte-181dlmc"><ask-search-input></ask-search-input></div> <div class="list svelte-181dlmc"><!> <ask-conversation-group></ask-conversation-group></div></div>',2);function Bo(t,e){if(new.target)return Nt({component:Bo,...t});vt(e,!0);let r=ie(e,"conversations"),n=ie(e,"currentId"),s=ie(e,"workspaceName"),a=ie(e,"streaming"),i=ie(e,"onSelect"),l=ie(e,"onNew"),o=ie(e,"onChanged"),c=ie(e,"onClose"),d=se(""),h=se(null),p=se("");const m=st(()=>f(d).trim()?r().filter(C=>C.title.toLowerCase().includes(f(d).trim().toLowerCase())):r());async function _(){o()(await Ln())}async function P(C){const U=f(p).trim();U&&(await yd(C,U),await _()),y(h,null)}async function v(C){await wd(C),await _()}async function w(C){confirm("Delete this conversation?")&&(await kd(C),await _())}function S(C){i()(C.detail.id)}var j={get conversations(){return r()},set conversations(C){r(C),re()},get currentId(){return n()},set currentId(C){n(C),re()},get workspaceName(){return s()},set workspaceName(C){s(C),re()},get streaming(){return a()},set streaming(C){a(C),re()},get onSelect(){return i()},set onSelect(C){i(C),re()},get onNew(){return l()},set onNew(C){l(C),re()},get onChanged(){return o()},set onChanged(C){o(C),re()},get onClose(){return c()},set onClose(C){c(C),re()},$set:Ot,$on:(C,U)=>Pt(e,C,U)},H=ru(),$=E(H),R=E($);{var G=C=>{var U=Xd(),we=E(U,!0);x(U),q(()=>he(we,s())),T(C,U)};te(R,C=>{s()&&C(G)})}var k=O(R,2);k.__click=function(...C){var U;(U=l())==null||U.apply(this,C)};var M=O(k,2);M.__click=function(...C){var U;(U=c())==null||U.apply(this,C)},x($);var N=O($,2),Z=E(N);ce(Z,"placeholder","Filter conversations…"),x(N);var de=O(N,2),A=E(de);{var z=C=>{var U=Qd(),we=E(U,!0);x(U),q(()=>he(we,r().length===0?"No conversations yet.":"No matches.")),T(C,U)};te(A,C=>{f(m).length===0&&C(z)})}var ne=O(A,2);return q(()=>ce(ne,"label",s()??"Conversations")),q(()=>ce(ne,"count",f(m).length)),is(ne,21,()=>f(m),C=>C.id,(C,U)=>{var we=Hs(),be=ns(we);{var Xe=je=>{var fe=eu();fe.__click=V=>V.stopPropagation();var ae=E(fe);bo(ae),ae.__keydown=V=>{V.key==="Enter"&&P(f(U).id),V.key==="Escape"&&y(h,null)},x(fe),Xn(ae,()=>f(p),V=>y(p,V)),T(je,fe)},Qe=je=>{var fe=tu();q(()=>ce(fe,"id",f(U).id)),q(()=>ce(fe,"title",f(U).title)),q(()=>ce(fe,"meta",`${f(U).message_count} msgs`)),q(()=>ce(fe,"active",f(U).id===n())),q(()=>ce(fe,"archived",f(U).archived)),Se("conversation-select",fe,S),Se("conversation-rename",fe,ae=>{y(h,ae.detail.id,!0),y(p,f(U).title,!0)}),Se("conversation-archive",fe,()=>v(f(U).id)),Se("conversation-delete",fe,()=>w(f(U).id)),T(je,fe)};te(be,je=>{f(h)===f(U).id?je(Xe):je(Qe,!1)})}T(C,we)}),x(ne),x(de),x(H),q(()=>k.disabled=a()),Se("search-input",Z,C=>y(d,C.detail.value,!0)),T(t,H),mt(j)}Kr(["click","keydown"]);var su=B('<button class="send stop svelte-1n8df3y" aria-label="Stop"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>'),nu=B('<button class="send svelte-1n8df3y" aria-label="Send"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>'),au=B('<div class="hint svelte-1n8df3y"><span class="model-chip svelte-1n8df3y"> </span> <span class="shortcut svelte-1n8df3y">Shift+Enter for a new line</span></div>'),iu=B('<div class="composer svelte-1n8df3y"><div class="box svelte-1n8df3y"><textarea rows="1" class="svelte-1n8df3y"></textarea> <!></div> <!></div>');function Do(t,e){if(new.target)return Nt({component:Do,...t});vt(e,!0);let r=ie(e,"streaming"),n=ie(e,"model"),s=ie(e,"disabled"),a=ie(e,"onSend"),i=ie(e,"onStop"),l=se(""),o;function c(){const $=f(l).trim();!$||r()||s()||(a()($),y(l,""),o&&(o.style.height="auto"))}function d($){$.key==="Enter"&&!$.shiftKey&&($.preventDefault(),c())}function h(){o&&(o.style.height="auto",o.style.height=Math.min(o.scrollHeight,180)+"px")}var p={get streaming(){return r()},set streaming($){r($),re()},get model(){return n()},set model($){n($),re()},get disabled(){return s()},set disabled($){s($),re()},get onSend(){return a()},set onSend($){a($),re()},get onStop(){return i()},set onStop($){i($),re()},$set:Ot,$on:($,R)=>Pt(e,$,R)},m=iu(),_=E(m),P=E(_);Tl(P),P.__keydown=d,P.__input=h,yo(P,$=>o=$,()=>o);var v=O(P,2);{var w=$=>{var R=su();R.__click=function(...G){var k;(k=i())==null||k.apply(this,G)},T($,R)},S=$=>{var R=nu();R.__click=c,q(G=>R.disabled=G,[()=>s()||!f(l).trim()]),T($,R)};te(v,$=>{r()?$(w):$(S,!1)})}x(_);var j=O(_,2);{var H=$=>{var R=au(),G=E(R),k=E(G,!0);x(G),qn(2),x(R),q(()=>he(k,n())),T($,R)};te(j,$=>{n()&&$(H)})}return x(m),q(()=>Us(P,"placeholder",s()?"Connecting to the harness server…":"Ask the agent to do something…")),Xn(P,()=>f(l),$=>y(l,$)),T(t,m),mt(p)}Kr(["keydown","input","click"]);var ou=B("<button> </button>"),lu=B('<p class="hint svelte-1u3w06f">Saved locally. New messages use this model.</p>'),cu=B('<section class="svelte-1u3w06f"><h3 class="svelte-1u3w06f">Workspace</h3> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Name</span> <span class="value mono svelte-1u3w06f"> </span></div> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Root</span> <span class="value mono svelte-1u3w06f"> </span></div> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Git branch</span> <span class="value svelte-1u3w06f"> </span></div> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Agent</span> <span class="value mono svelte-1u3w06f"> </span></div> <div class="row svelte-1u3w06f"><span class="label svelte-1u3w06f">Features</span> <span class="value svelte-1u3w06f"><!> <!> <!></span></div></section> <section class="svelte-1u3w06f"><h3 class="svelte-1u3w06f">Model</h3> <div class="models svelte-1u3w06f"></div> <!></section>',1),du=B('<p class="hint svelte-1u3w06f">No server config available.</p>'),uu=B("<ask-dialog><!></ask-dialog>",2);function Ho(t,e){var p;if(new.target)return Nt({component:Ho,...t});vt(e,!0);let r=ie(e,"config"),n=ie(e,"onClose"),s=se(ut(localStorage.getItem("ach_model")||((p=r())==null?void 0:p.defaultModel)||""));const a=st(()=>{var m;return f(s)!==(localStorage.getItem("ach_model")||((m=r())==null?void 0:m.defaultModel)||"")});function i(m){y(s,m,!0),localStorage.setItem("ach_model",m)}var l={get config(){return r()},set config(m){r(m),re()},get onClose(){return n()},set onClose(m){n(m),re()},$set:Ot,$on:(m,_)=>Pt(e,m,_)},o=uu();ce(o,"open",!0),ce(o,"header","Settings");var c=E(o);{var d=m=>{var _=cu(),P=ns(_),v=O(E(P),2),w=O(E(v),2),S=E(w,!0);x(w),x(v);var j=O(v,2),H=O(E(j),2),$=E(H,!0);x(H),x(j);var R=O(j,2),G=O(E(R),2),k=E(G,!0);x(G),x(R);var M=O(R,2),N=O(E(M),2),Z=E(N,!0);x(N),x(M);var de=O(M,2),A=O(E(de),2),z=E(A);{var ne=ae=>{var V=hn("approvals ·");T(ae,V)};te(z,ae=>{r().features.approvals&&ae(ne)})}var C=O(z,2);{var U=ae=>{var V=hn("plan mode ·");T(ae,V)};te(C,ae=>{r().features.planMode&&ae(U)})}var we=O(C,2);{var be=ae=>{var V=hn("todos");T(ae,V)};te(we,ae=>{r().features.todos&&ae(be)})}x(A),x(de),x(P);var Xe=O(P,2),Qe=O(E(Xe),2);is(Qe,20,()=>r().models,ae=>ae,(ae,V)=>{var me=ou();me.__click=()=>i(V);var bt=E(me,!0);x(me),q(()=>{gr(me,1,`model ${V===f(s)?"active":""}`,"svelte-1u3w06f"),he(bt,V)}),T(ae,me)}),x(Qe);var je=O(Qe,2);{var fe=ae=>{var V=lu();T(ae,V)};te(je,ae=>{f(a)&&ae(fe)})}x(Xe),q(()=>{he(S,r().workspace.name),he($,r().workspace.root),he(k,r().workspace.gitBranch??"—"),he(Z,r().currentAdapter)}),T(m,_)},h=m=>{var _=du();T(m,_)};te(c,m=>{r()?m(d):m(h,!1)})}return x(o),Se("dialog-close",o,function(...m){var _;(_=n())==null||_.apply(this,m)}),T(t,o),mt(l)}Kr(["click"]);var fu=B('<div class="error svelte-1xx308a"> </div>'),pu=B(`<div class="switcher svelte-1xx308a"><ask-menu><span slot="trigger" class="trigger-name svelte-1xx308a"> </span> <div slot="menu-footer" class="menu-footer svelte-1xx308a"><button class="open-ws svelte-1xx308a">＋ Open workspace…</button></div></ask-menu> <ask-dialog><p class="hint svelte-1xx308a">Path to a project directory on this machine. The agent gets full access to it —
      same trust model as running a coding agent in your terminal.</p> <input class="path-input svelte-1xx308a" placeholder="/path/to/project"/> <!> <div slot="footer"><button class="btn cancel svelte-1xx308a">Cancel</button> <button class="btn go svelte-1xx308a"> </button></div></ask-dialog></div>`,2);function Uo(t,e){if(new.target)return Nt({component:Uo,...t});vt(e,!0);let r=ie(e,"workspaces"),n=ie(e,"current"),s=ie(e,"onSelect"),a=ie(e,"onOpened"),i=se(!1),l=se(!1),o=se(""),c=se(!1),d=se(null);const h=st(()=>r().map(A=>{var z;return{id:A.root,label:A.name,description:A.root,icon:"📁",active:A.root===((z=n())==null?void 0:z.root)}}));function p(A){const z=r().find(ne=>ne.root===A.detail.id);z&&s()(z)}async function m(){const A=f(o).trim();if(!(!A||f(c))){y(c,!0),y(d,null);try{const z=await bd(A);y(l,!1),y(o,""),a()(z)}catch(z){y(d,z.message||"Could not open that workspace",!0)}finally{y(c,!1)}}}var _={get workspaces(){return r()},set workspaces(A){r(A),re()},get current(){return n()},set current(A){n(A),re()},get onSelect(){return s()},set onSelect(A){s(A),re()},get onOpened(){return a()},set onOpened(A){a(A),re()},$set:Ot,$on:(A,z)=>Pt(e,A,z)},P=pu(),v=E(P);q(()=>ce(v,"items",f(h))),q(()=>{var A;return ce(v,"trigger-label",((A=n())==null?void 0:A.name)??"No workspace")});var w=E(v),S=E(w,!0);x(w);var j=O(w,2),H=E(j);H.__click=()=>{y(l,!0),y(i,!1)},x(j),x(v);var $=O(v,2);q(()=>ce($,"open",f(l))),ce($,"header","Open workspace");var R=O(E($),2);bo(R),R.__keydown=A=>{A.key==="Enter"&&m(),A.key==="Escape"&&y(l,!1)};var G=O(R,2);{var k=A=>{var z=fu(),ne=E(z,!0);x(z),q(()=>he(ne,f(d))),T(A,z)};te(G,A=>{f(d)&&A(k)})}var M=O(G,2),N=E(M);N.__click=()=>y(l,!1);var Z=O(N,2);Z.__click=m;var de=E(Z,!0);return x(Z),x(M),x($),x(P),q(A=>{var z;he(S,((z=n())==null?void 0:z.name)??"No workspace"),Z.disabled=A,he(de,f(c)?"Opening…":"Open")},[()=>f(c)||!f(o).trim()]),Se("menu-select",v,p),Se("menu-open",v,()=>y(i,!0)),Se("menu-close",v,()=>y(i,!1)),Se("dialog-close",$,()=>y(l,!1)),Xn(R,()=>f(o),A=>y(o,A)),T(t,P),mt(_)}Kr(["click","keydown"]);var hu=B('<button class="icon-btn stop svelte-1n46o8q" aria-label="Stop"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>'),vu=B('<div class="sidebar-wrap svelte-1n46o8q"><!></div>'),mu=B('<div class="banner-error svelte-1n46o8q"> </div>'),gu=B('<div class="app svelte-1n46o8q"><header class="topbar svelte-1n46o8q"><button class="icon-btn hamburger svelte-1n46o8q" aria-label="Toggle sidebar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button> <div class="workspace svelte-1n46o8q"><!></div> <div class="topbar-actions svelte-1n46o8q"><!> <button class="icon-btn svelte-1n46o8q" aria-label="Settings"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></button></div></header> <div class="body svelte-1n46o8q"><!> <main class="main svelte-1n46o8q"><!> <!> <!></main></div> <!></div>');function Fo(t,e){if(new.target)return Nt({component:Fo,...t});vt(e,!0);let r=se(null),n=se(ut([])),s=se(ut([])),a=se(null),i=se(null),l=se(ut([])),o=se(ut(Jr())),c=se(!1),d=se(!1),h=se(!1),p=se(null),m=null;const _=st(()=>window.innerWidth<768);lc(async()=>{var I;try{y(r,await md(),!0),y(n,await Ln(),!0),y(s,await gd(),!0),y(a,f(s).find(Y=>{var ee;return Y.root===((ee=f(r))==null?void 0:ee.workspace.root)})??f(s)[0]??((I=f(r))==null?void 0:I.workspace)??null,!0)}catch(Y){y(p,`Cannot reach the harness server: ${Y.message}`)}});async function P(I){if(!f(c))try{const Y=await _d(I);if(y(i,Y.id,!0),y(l,(Y.messages??[]).map(ee=>({role:ee.role,content:ee.content})),!0),y(o,Jr(),!0),y(h,!1),y(d,!1),y(p,null),Y.directory){const ee=f(s).find(pe=>pe.root===Y.directory);ee&&y(a,ee,!0)}}catch(Y){y(p,Y.message,!0)}}function v(I){f(c)||(y(a,I,!0),y(i,null),y(l,[],!0),y(o,Jr(),!0),y(p,null))}function w(I){y(s,[...f(s).filter(Y=>Y.root!==I.root),I],!0),v(I)}function S(){f(c)||(y(i,null),y(l,[],!0),y(o,Jr(),!0),y(p,null),y(d,!1))}function j(I){var ee,pe;if(f(c)||!I.trim())return;f(o).text.trim()&&(f(l).length===0||f(l)[f(l).length-1].role!=="assistant")&&y(l,[...f(l),{role:"assistant",content:f(o).text.trim()}],!0);const Y={role:"user",content:I.trim()};y(l,[...f(l),Y],!0),y(o,Jr(),!0),y(c,!0),y(p,null),m=Pd(Y.content,f(i),(ee=f(r))==null?void 0:ee.defaultModel,(pe=f(a))==null?void 0:pe.root,it=>{if(it.type==="error"){y(p,it.data.error,!0),f(o).status="failed";return}Od(f(o),it.type,it.data)},it=>{y(i,it,!0),$()},()=>{y(c,!1),$()})}function H(){m&&m.abort(),f(i)&&Ad(f(i)).catch(()=>{})}async function $(){try{y(n,await Ln(),!0)}catch{}}function R(I){y(n,I,!0)}function G(I){P(I)}var k={$set:Ot,$on:(I,Y)=>Pt(e,I,Y)},M=gu();tc("1n46o8q",I=>{Dl(()=>{var Y;Ki.title=((Y=f(r))==null?void 0:Y.workspace.name)??"ask-coding-harness"??""})});var N=E(M),Z=E(N);Z.__click=()=>y(d,!f(d));var de=O(Z,2),A=E(de);Uo(A,{get workspaces(){return f(s)},get current(){return f(a)},onSelect:v,onOpened:w}),x(de);var z=O(de,2),ne=E(z);{var C=I=>{var Y=hu();Y.__click=H,T(I,Y)};te(ne,I=>{f(c)&&I(C)})}var U=O(ne,2);U.__click=()=>y(h,!f(h)),x(z),x(N);var we=O(N,2),be=E(we);{var Xe=I=>{var Y=vu(),ee=E(Y);{let pe=st(()=>f(n).filter(vr=>!f(a)||vr.directory===f(a).root)),it=st(()=>{var vr;return(vr=f(a))==null?void 0:vr.name});Bo(ee,{get conversations(){return f(pe)},get currentId(){return f(i)},get workspaceName(){return f(it)},onSelect:G,onNew:S,onChanged:R,onClose:()=>y(d,!1),get streaming(){return f(c)}})}x(Y),T(I,Y)};te(be,I=>{(f(d)||!f(_))&&I(Xe)})}var Qe=O(be,2),je=E(Qe);{var fe=I=>{var Y=mu(),ee=E(Y,!0);x(Y),q(()=>he(ee,f(p))),T(I,Y)};te(je,I=>{f(p)&&!f(c)&&I(fe)})}var ae=O(je,2);Lo(ae,{get messages(){return f(l)},get turn(){return f(o)},get streaming(){return f(c)},get conversationId(){return f(i)}});var V=O(ae,2);{let I=st(()=>{var ee;return(ee=f(r))==null?void 0:ee.defaultModel}),Y=st(()=>!f(r));Do(V,{get streaming(){return f(c)},get model(){return f(I)},onSend:j,onStop:H,get disabled(){return f(Y)}})}x(Qe),x(we);var me=O(we,2);{var bt=I=>{Ho(I,{get config(){return f(r)},onClose:()=>y(h,!1)})};te(me,I=>{f(h)&&I(bt)})}return x(M),T(t,M),mt(k)}Kr(["click"]);Zn(Fo,{target:document.getElementById("app")});
