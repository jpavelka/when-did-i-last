import{S as ie,i as re,s as oe,k as g,q as V,a as O,l as y,m as U,r as P,h,c as C,n as D,b as A,F as r,G as z,u as ue,E as J,R as be,T as De,e as Ue,f as H,g as Fe,t as W,d as Re,L as Je,M as Ke,N as Ze,O as xe,U as ve,V as et,w as Z,x,y as ee,z as te,Q as ce,j as ge,H as ae,I as He,W as pe,p as tt,X as Ne,Y as lt}from"../../chunks/index-9a71f3bc.js";import{e as ye,g as $e,h as Me,i as We,j as ze,k as Ge,a as Qe,m as st,s as Xe,d as Ye,t as de,C as nt,l as at,f as _e,n as it}from"../../chunks/index-79c48882.js";const fe=l=>`${l.slice(0,4)}-${l.slice(4,6)}-${l.slice(6,8)}`;function qe(l){let e,a,t=fe(l[0].history[l[0].history.length-1])+"",s;return{c(){e=g("div"),a=V("Last: "),s=V(t),this.h()},l(i){e=y(i,"DIV",{class:!0});var n=U(e);a=P(n,"Last: "),s=P(n,t),n.forEach(h),this.h()},h(){D(e,"class","lastNext svelte-1yyb8y0")},m(i,n){A(i,e,n),r(e,a),r(e,s)},p(i,n){n&1&&t!==(t=fe(i[0].history[i[0].history.length-1])+"")&&ue(s,t)},d(i){i&&h(e)}}}function Oe(l){let e,a,t=fe(l[0].scheduled[0])+"",s;return{c(){e=g("div"),a=V("Next: "),s=V(t),this.h()},l(i){e=y(i,"DIV",{class:!0});var n=U(e);a=P(n,"Next: "),s=P(n,t),n.forEach(h),this.h()},h(){D(e,"class","lastNext svelte-1yyb8y0"),De(e,"overdue",l[1]>=l[0].scheduled[0])},m(i,n){A(i,e,n),r(e,a),r(e,s)},p(i,n){n&1&&t!==(t=fe(i[0].scheduled[0])+"")&&ue(s,t),n&3&&De(e,"overdue",i[1]>=i[0].scheduled[0])},d(i){i&&h(e)}}}function rt(l){let e,a,t=l[0].name+"",s,i,n,o,u,m,p,f,c,d,S,I,_,k,$,v=l[0].history.length>0&&qe(l),E=l[0].scheduled.length>0&&Oe(l);return{c(){e=g("div"),a=g("div"),s=V(t),i=O(),v&&v.c(),n=O(),E&&E.c(),o=O(),u=g("div"),m=g("button"),p=V("Edit"),f=O(),c=g("button"),d=V("Complete"),S=O(),I=g("button"),_=V("Schedule"),this.h()},l(N){e=y(N,"DIV",{class:!0});var q=U(e);a=y(q,"DIV",{class:!0});var B=U(a);s=P(B,t),B.forEach(h),i=C(q),v&&v.l(q),n=C(q),E&&E.l(q),o=C(q),u=y(q,"DIV",{});var w=U(u);m=y(w,"BUTTON",{class:!0});var K=U(m);p=P(K,"Edit"),K.forEach(h),f=C(w),c=y(w,"BUTTON",{class:!0});var b=U(c);d=P(b,"Complete"),b.forEach(h),S=C(w),I=y(w,"BUTTON",{class:!0});var T=U(I);_=P(T,"Schedule"),T.forEach(h),w.forEach(h),q.forEach(h),this.h()},h(){D(a,"class","taskName svelte-1yyb8y0"),D(m,"class","svelte-1yyb8y0"),D(c,"class","svelte-1yyb8y0"),D(I,"class","svelte-1yyb8y0"),D(e,"class","taskWrapper svelte-1yyb8y0")},m(N,q){A(N,e,q),r(e,a),r(a,s),r(e,i),v&&v.m(e,null),r(e,n),E&&E.m(e,null),r(e,o),r(e,u),r(u,m),r(m,p),r(u,f),r(u,c),r(c,d),r(u,S),r(u,I),r(I,_),k||($=[z(m,"click",l[2]),z(c,"click",l[3]),z(I,"click",l[4])],k=!0)},p(N,[q]){q&1&&t!==(t=N[0].name+"")&&ue(s,t),N[0].history.length>0?v?v.p(N,q):(v=qe(N),v.c(),v.m(e,n)):v&&(v.d(1),v=null),N[0].scheduled.length>0?E?E.p(N,q):(E=Oe(N),E.c(),E.m(e,o)):E&&(E.d(1),E=null)},i:J,o:J,d(N){N&&h(e),v&&v.d(),E&&E.d(),k=!1,be($)}}}function ot(l,e,a){let{task:t}=e;const i=new Date().toISOString().slice(0,10).replaceAll("-",""),n=()=>{ye.update(()=>t),$e.update(()=>!0)},o=()=>{Me.update(()=>t),We.update(()=>!0)},u=()=>{ze.update(()=>t),Ge.update(()=>!0)};return l.$$set=m=>{"task"in m&&a(0,t=m.task)},[t,i,n,o,u]}class ut extends ie{constructor(e){super(),re(this,e,ot,rt,oe,{task:0})}}function Ce(l){let e,a,t,s,i,n,o,u,m;const p=l[4].default,f=Je(p,l,l[3],null);return{c(){e=g("div"),a=g("div"),f&&f.c(),t=O(),s=g("div"),i=g("button"),n=V("Close"),this.h()},l(c){e=y(c,"DIV",{class:!0});var d=U(e);a=y(d,"DIV",{class:!0});var S=U(a);f&&f.l(S),t=C(S),s=y(S,"DIV",{});var I=U(s);i=y(I,"BUTTON",{});var _=U(i);n=P(_,"Close"),_.forEach(h),I.forEach(h),S.forEach(h),d.forEach(h),this.h()},h(){D(a,"class","modalContent svelte-1qejjfe"),D(e,"class","modalBackground svelte-1qejjfe")},m(c,d){A(c,e,d),r(e,a),f&&f.m(a,null),r(a,t),r(a,s),r(s,i),r(i,n),o=!0,u||(m=z(i,"click",l[2]),u=!0)},p(c,d){f&&f.p&&(!o||d&8)&&Ke(f,p,c,c[3],o?xe(p,c[3],d,null):Ze(c[3]),null)},i(c){o||(H(f,c),o=!0)},o(c){W(f,c),o=!1},d(c){c&&h(e),f&&f.d(c),u=!1,m()}}}function ct(l){let e,a,t=l[1]&&Ce(l);return{c(){t&&t.c(),e=Ue()},l(s){t&&t.l(s),e=Ue()},m(s,i){t&&t.m(s,i),A(s,e,i),a=!0},p(s,[i]){s[1]?t?(t.p(s,i),i&2&&H(t,1)):(t=Ce(s),t.c(),H(t,1),t.m(e.parentNode,e)):t&&(Fe(),W(t,1,1,()=>{t=null}),Re())},i(s){a||(H(t),a=!0)},o(s){W(t),a=!1},d(s){t&&t.d(s),s&&h(e)}}}function dt(l,e,a){let t,s=J,i=()=>(s(),s=ve(u,p=>a(1,t=p)),u);l.$$.on_destroy.push(()=>s());let{$$slots:n={},$$scope:o}=e,{visible:u}=e;i();const m=()=>{u.update(()=>!1)};return l.$$set=p=>{"visible"in p&&i(a(0,u=p.visible)),"$$scope"in p&&a(3,o=p.$$scope)},[u,t,m,o,n]}class ke extends ie{constructor(e){super(),re(this,e,dt,ct,oe,{visible:0})}}const Ee=async(l,e)=>{const a={tasks:{}};delete l.id,a.tasks[e]=l;const t=((Qe.currentUser||{}).uid||"").toString();return await st(Xe(Ye,"tasks",t),a,{merge:!0}).then(()=>{l.id=e;const i=et(de).filter(n=>n.id!==e).concat(l);return de.update(()=>i),alert("Success!"),"success"}).catch(i=>(alert("There was an issue completing your request. Please try again later."),console.log(i),"failure"))};let me;const ft=new Uint8Array(16);function ht(){if(!me&&(me=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!me))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return me(ft)}const F=[];for(let l=0;l<256;++l)F.push((l+256).toString(16).slice(1));function mt(l,e=0){return(F[l[e+0]]+F[l[e+1]]+F[l[e+2]]+F[l[e+3]]+"-"+F[l[e+4]]+F[l[e+5]]+"-"+F[l[e+6]]+F[l[e+7]]+"-"+F[l[e+8]]+F[l[e+9]]+"-"+F[l[e+10]]+F[l[e+11]]+F[l[e+12]]+F[l[e+13]]+F[l[e+14]]+F[l[e+15]]).toLowerCase()}const pt=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Be={randomUUID:pt};function Ve(l,e,a){if(Be.randomUUID&&!e&&!l)return Be.randomUUID();l=l||{};const t=l.random||(l.rng||ht)();if(t[6]=t[6]&15|64,t[8]=t[8]&63|128,e){a=a||0;for(let s=0;s<16;++s)e[a+s]=t[s];return e}return mt(t)}function _t(l){let e,a=l[4].message+"",t,s,i;return{c(){e=g("div"),t=V(a)},l(n){e=y(n,"DIV",{});var o=U(e);t=P(o,a),o.forEach(h)},m(n,o){A(n,e,o),r(e,t),i=!0},p:J,i(n){i||(He(()=>{s||(s=pe(e,_e,{},!0)),s.run(1)}),i=!0)},o(n){s||(s=pe(e,_e,{},!1)),s.run(0),i=!1},d(n){n&&h(e),n&&s&&s.end()}}}function Pe(l){let e,a,t,s;return{c(){e=g("button"),a=V("Delete")},l(i){e=y(i,"BUTTON",{});var n=U(e);a=P(n,"Delete"),n.forEach(h)},m(i,n){A(i,e,n),r(e,a),t||(s=z(e,"click",ae(l[3])),t=!0)},p:J,d(i){i&&h(e),t=!1,s()}}}function vt(l){let e,a=l[1].name.length>0?`Edit task: ${l[1].name}`:"Add task",t,s,i,n,o,u,m,p,f,c,d,S,I,_,k,$,v,E,N,q,B,w,K,b,T,L,Y,Q,le,se,X=l[4]&&_t(l),R=l[1].name.length>0&&Pe(l);return{c(){e=g("h2"),t=V(a),s=O(),i=g("form"),n=g("div"),o=g("label"),u=V("Name"),m=O(),p=g("input"),c=O(),d=g("label"),S=V("History"),I=O(),_=g("input"),$=O(),v=g("label"),E=V("Scheduled"),N=O(),q=g("input"),w=O(),X&&X.c(),K=O(),b=g("div"),T=g("button"),L=V("Save"),Y=O(),R&&R.c(),this.h()},l(j){e=y(j,"H2",{});var M=U(e);t=P(M,a),M.forEach(h),s=C(j),i=y(j,"FORM",{});var ne=U(i);n=y(ne,"DIV",{class:!0});var G=U(n);o=y(G,"LABEL",{for:!0,class:!0});var Te=U(o);u=P(Te,"Name"),Te.forEach(h),m=C(G),p=y(G,"INPUT",{id:!0,type:!0,class:!0}),c=C(G),d=y(G,"LABEL",{for:!0,class:!0});var Se=U(d);S=P(Se,"History"),Se.forEach(h),I=C(G),_=y(G,"INPUT",{id:!0,type:!0,class:!0}),$=C(G),v=y(G,"LABEL",{for:!0,class:!0});var Ie=U(v);E=P(Ie,"Scheduled"),Ie.forEach(h),N=C(G),q=y(G,"INPUT",{id:!0,type:!0,class:!0}),G.forEach(h),w=C(ne),X&&X.l(ne),K=C(ne),b=y(ne,"DIV",{});var he=U(b);T=y(he,"BUTTON",{type:!0});var we=U(T);L=P(we,"Save"),we.forEach(h),Y=C(he),R&&R.l(he),he.forEach(h),ne.forEach(h),this.h()},h(){D(o,"for","name"),D(o,"class","svelte-1roqpq3"),D(p,"id","name"),D(p,"type","name"),p.value=f=l[1].name,p.required=!0,D(p,"class","svelte-1roqpq3"),D(d,"for","history"),D(d,"class","svelte-1roqpq3"),D(_,"id","history"),D(_,"type","history"),_.value=k=l[1].history.join(","),D(_,"class","svelte-1roqpq3"),D(v,"for","scheduled"),D(v,"class","svelte-1roqpq3"),D(q,"id","scheduled"),D(q,"type","scheduled"),q.value=B=l[1].scheduled.join(","),D(q,"class","svelte-1roqpq3"),D(n,"class","formClass svelte-1roqpq3"),D(T,"type","submit")},m(j,M){A(j,e,M),r(e,t),A(j,s,M),A(j,i,M),r(i,n),r(n,o),r(o,u),r(n,m),r(n,p),r(n,c),r(n,d),r(d,S),r(n,I),r(n,_),r(n,$),r(n,v),r(v,E),r(n,N),r(n,q),r(i,w),X&&X.m(i,null),r(i,K),r(i,b),r(b,T),r(T,L),r(b,Y),R&&R.m(b,null),Q=!0,le||(se=z(i,"submit",ae(l[6])),le=!0)},p(j,M){(!Q||M&2)&&a!==(a=j[1].name.length>0?`Edit task: ${j[1].name}`:"Add task")&&ue(t,a),(!Q||M&2&&f!==(f=j[1].name)&&p.value!==f)&&(p.value=f),(!Q||M&2&&k!==(k=j[1].history.join(","))&&_.value!==k)&&(_.value=k),(!Q||M&2&&B!==(B=j[1].scheduled.join(","))&&q.value!==B)&&(q.value=B),j[4]&&X.p(j,M),j[1].name.length>0?R?R.p(j,M):(R=Pe(j),R.c(),R.m(b,null)):R&&(R.d(1),R=null)},i(j){Q||(H(X),Q=!0)},o(j){W(X),Q=!1},d(j){j&&h(e),j&&h(s),j&&h(i),X&&X.d(),R&&R.d(),le=!1,se()}}}function bt(l){let e,a;return e=new ke({props:{visible:l[0],$$slots:{default:[vt]},$$scope:{ctx:l}}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){ee(e,t,s),a=!0},p(t,[s]){const i={};s&1&&(i.visible=t[0]),s&2050&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){a||(H(e.$$.fragment,t),a=!0)},o(t){W(e.$$.fragment,t),a=!1},d(t){te(e,t)}}}function gt(l,e,a){let t,s,i,n=J,o=()=>(n(),n=ve(p,_=>a(8,i=_)),p),u,m;ce(l,ye,_=>a(5,u=_)),ce(l,de,_=>a(9,m=_)),l.$$.on_destroy.push(()=>n());let{visible:p}=e;o();const f=()=>{let _=Ve().split("-")[0];const k=m.map($=>$.id);for(;k.includes(_);)_=Ve().split("-")[0];return _},c=async(_,k)=>{const{name:$,history:v,scheduled:E}=_.target.elements;let N={name:$.value,history:v.value.split(",").map(B=>B.trim()).filter(B=>B!==""),scheduled:E.value.split(",").map(B=>B.trim()).filter(B=>B!=="")};const q=await Ee(N,k);console.log(q),q==="success"&&p.update(()=>!1)},d=async()=>{if(!confirm(`Are you sure you want to delete task "${s.name}"?`))return;let k={};k[`tasks.${s.id}`]=nt(),await at(Xe(Ye,"tasks",`${Qe.currentUser.uid}`),k).then(()=>{de.update($=>$.filter(v=>v.id!==s.id)),p.update(()=>!1),alert("Deletion successful")}).catch($=>{alert("There was an issue completing your request. Please try again later."),console.log($)})};let S;ge(()=>{i&&t==="add"&&document.getElementById("name").focus()});const I=_=>c(_,s.id);return l.$$set=_=>{"visible"in _&&o(a(0,p=_.visible))},l.$$.update=()=>{l.$$.dirty&32&&(t=u?"edit":"add"),l.$$.dirty&32&&a(1,s=u||{name:"",history:[],scheduled:[],id:f()})},[p,s,c,d,S,u,I]}class yt extends ie{constructor(e){super(),re(this,e,gt,bt,oe,{visible:0})}}function Le(l){let e,a,t,s;return{c(){e=g("button"),a=V("Scheduled")},l(i){e=y(i,"BUTTON",{});var n=U(e);a=P(n,"Scheduled"),n.forEach(h)},m(i,n){A(i,e,n),r(e,a),t||(s=z(e,"click",ae(l[8])),t=!0)},p:J,d(i){i&&h(e),t=!1,s()}}}function $t(l){let e,a,t=l[1].name+"",s,i,n,o,u,m,p,f,c,d,S,I,_,k,$=l[2]!==void 0&&Le(l);return{c(){e=g("h2"),a=V("Complete task: "),s=V(t),i=O(),n=g("form"),o=g("input"),u=O(),m=g("button"),p=V("Today"),f=O(),$&&$.c(),c=O(),d=g("div"),S=g("button"),I=V("Save"),this.h()},l(v){e=y(v,"H2",{});var E=U(e);a=P(E,"Complete task: "),s=P(E,t),E.forEach(h),i=C(v),n=y(v,"FORM",{});var N=U(n);o=y(N,"INPUT",{id:!0,class:!0,name:!0,type:!0}),u=C(N),m=y(N,"BUTTON",{});var q=U(m);p=P(q,"Today"),q.forEach(h),f=C(N),$&&$.l(N),c=C(N),d=y(N,"DIV",{});var B=U(d);S=y(B,"BUTTON",{});var w=U(S);I=P(w,"Save"),w.forEach(h),B.forEach(h),N.forEach(h),this.h()},h(){D(o,"id","completeDatePicker"),D(o,"class","datePicker"),D(o,"name","newComplete"),D(o,"type","date"),o.value=l[4],o.required=!0},m(v,E){A(v,e,E),r(e,a),r(e,s),A(v,i,E),A(v,n,E),r(n,o),r(n,u),r(n,m),r(m,p),r(n,f),$&&$.m(n,null),r(n,c),r(n,d),r(d,S),r(S,I),_||(k=[z(m,"click",ae(l[7])),z(n,"submit",ae(l[9]))],_=!0)},p(v,E){E&2&&t!==(t=v[1].name+"")&&ue(s,t),v[2]!==void 0?$?$.p(v,E):($=Le(v),$.c(),$.m(n,c)):$&&($.d(1),$=null)},d(v){v&&h(e),v&&h(i),v&&h(n),$&&$.d(),_=!1,be(k)}}}function kt(l){let e,a;return e=new ke({props:{visible:l[0],$$slots:{default:[$t]},$$scope:{ctx:l}}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){ee(e,t,s),a=!0},p(t,[s]){const i={};s&1&&(i.visible=t[0]),s&4102&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){a||(H(e.$$.fragment,t),a=!0)},o(t){W(e.$$.fragment,t),a=!1},d(t){te(e,t)}}}function Et(l,e,a){let t,s,i,n=J,o=()=>(n(),n=ve(m,k=>a(10,i=k)),m),u;ce(l,Me,k=>a(6,u=k)),l.$$.on_destroy.push(()=>n());let{visible:m}=e;o();const p=async k=>{const{newComplete:$}=k.target.elements;t.history.push($.value.replaceAll("-","")),t.history.sort((E,N)=>E<N?-1:1),await Ee(t,t.id)==="success"&&m.update(()=>!1)},f=new Date().toISOString().slice(0,10),c=k=>{if(((k||{}).scheduled||[]).length!=0)return new Date(fe(k.scheduled[0])).toISOString().slice(0,10)},d=k=>{const $=document.getElementById("completeDatePicker");$.value=k};ge(()=>{i&&document.getElementById("completeDatePicker").focus()});const S=()=>d(f),I=()=>d(s),_=k=>p(k);return l.$$set=k=>{"visible"in k&&o(a(0,m=k.visible))},l.$$.update=()=>{l.$$.dirty&64&&a(1,t=u),l.$$.dirty&2&&a(2,s=c(t))},[m,t,s,p,f,d,u,S,I,_]}class Tt extends ie{constructor(e){super(),re(this,e,Et,kt,oe,{visible:0})}}function St(l){let e,a,t=l[1].name+"",s,i,n,o,u,m,p,f,c;return{c(){e=g("h2"),a=V("Schedule task: "),s=V(t),i=O(),n=g("form"),o=g("input"),u=O(),m=g("button"),p=V("Save"),this.h()},l(d){e=y(d,"H2",{});var S=U(e);a=P(S,"Schedule task: "),s=P(S,t),S.forEach(h),i=C(d),n=y(d,"FORM",{});var I=U(n);o=y(I,"INPUT",{id:!0,class:!0,name:!0,type:!0}),u=C(I),m=y(I,"BUTTON",{});var _=U(m);p=P(_,"Save"),_.forEach(h),I.forEach(h),this.h()},h(){D(o,"id","scheduleDatePicker"),D(o,"class","datePicker"),D(o,"name","newComplete"),D(o,"type","date"),o.value=l[3],o.required=!0},m(d,S){A(d,e,S),r(e,a),r(e,s),A(d,i,S),A(d,n,S),r(n,o),r(n,u),r(n,m),r(m,p),f||(c=z(n,"submit",ae(l[5])),f=!0)},p(d,S){S&2&&t!==(t=d[1].name+"")&&ue(s,t)},d(d){d&&h(e),d&&h(i),d&&h(n),f=!1,c()}}}function It(l){let e,a;return e=new ke({props:{visible:l[0],$$slots:{default:[St]},$$scope:{ctx:l}}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){ee(e,t,s),a=!0},p(t,[s]){const i={};s&1&&(i.visible=t[0]),s&130&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){a||(H(e.$$.fragment,t),a=!0)},o(t){W(e.$$.fragment,t),a=!1},d(t){te(e,t)}}}function wt(l,e,a){let t,s,i=J,n=()=>(i(),i=ve(u,c=>a(6,s=c)),u),o;ce(l,ze,c=>a(4,o=c)),l.$$.on_destroy.push(()=>i());let{visible:u}=e;n();const m=async c=>{const{newComplete:d}=c.target.elements;t.scheduled.push(d.value.replaceAll("-","")),t.scheduled.sort((I,_)=>I<_?-1:1),await Ee(t,t.id)==="success"&&u.update(()=>!1)},p=new Date().toISOString().slice(0,10);ge(()=>{s&&document.getElementById("scheduleDatePicker").focus()});const f=c=>m(c);return l.$$set=c=>{"visible"in c&&n(a(0,u=c.visible))},l.$$.update=()=>{l.$$.dirty&16&&a(1,t=o)},[u,t,m,p,o,f]}class Dt extends ie{constructor(e){super(),re(this,e,wt,It,oe,{visible:0})}}function je(l,e,a){const t=l.slice();return t[6]=e[a],t}function Ae(l){let e,a,t,s,i;return a=new ut({props:{task:l[6]}}),{c(){e=g("div"),Z(a.$$.fragment),t=O()},l(n){e=y(n,"DIV",{});var o=U(e);x(a.$$.fragment,o),t=C(o),o.forEach(h)},m(n,o){A(n,e,o),ee(a,e,null),r(e,t),i=!0},p(n,o){const u={};o&2&&(u.task=n[6]),a.$set(u)},i(n){i||(H(a.$$.fragment,n),He(()=>{s||(s=pe(e,_e,{},!0)),s.run(1)}),i=!0)},o(n){W(a.$$.fragment,n),s||(s=pe(e,_e,{},!1)),s.run(0),i=!1},d(n){n&&h(e),te(a),n&&s&&s.end()}}}function Ut(l){let e,a,t,s,i,n,o,u,m,p,f,c,d,S,I,_,k,$,v,E,N,q;a=new yt({props:{visible:$e}}),s=new Tt({props:{visible:We}}),n=new Dt({props:{visible:Ge}});let B=l[1],w=[];for(let b=0;b<B.length;b+=1)w[b]=Ae(je(l,B,b));const K=b=>W(w[b],1,1,()=>{w[b]=null});return{c(){e=g("div"),Z(a.$$.fragment),t=O(),Z(s.$$.fragment),i=O(),Z(n.$$.fragment),o=O(),u=g("span"),m=V("Search:"),p=O(),f=g("input"),c=O(),d=g("div");for(let b=0;b<w.length;b+=1)w[b].c();S=O(),I=g("button"),_=V("Add Task"),k=O(),$=g("button"),v=V("Log Out"),this.h()},l(b){e=y(b,"DIV",{class:!0});var T=U(e);x(a.$$.fragment,T),t=C(T),x(s.$$.fragment,T),i=C(T),x(n.$$.fragment,T),o=C(T),u=y(T,"SPAN",{style:!0});var L=U(u);m=P(L,"Search:"),L.forEach(h),p=C(T),f=y(T,"INPUT",{class:!0}),c=C(T),d=y(T,"DIV",{class:!0});var Y=U(d);for(let se=0;se<w.length;se+=1)w[se].l(Y);Y.forEach(h),S=C(T),I=y(T,"BUTTON",{});var Q=U(I);_=P(Q,"Add Task"),Q.forEach(h),k=C(T),$=y(T,"BUTTON",{});var le=U($);v=P(le,"Log Out"),le.forEach(h),T.forEach(h),this.h()},h(){tt(u,"font-weight","bold"),D(f,"class","svelte-1n2mbq2"),D(d,"class","taskList svelte-1n2mbq2"),D(e,"class","mainContent svelte-1n2mbq2")},m(b,T){A(b,e,T),ee(a,e,null),r(e,t),ee(s,e,null),r(e,i),ee(n,e,null),r(e,o),r(e,u),r(u,m),r(e,p),r(e,f),Ne(f,l[0]),r(e,c),r(e,d);for(let L=0;L<w.length;L+=1)w[L].m(d,null);r(e,S),r(e,I),r(I,_),r(e,k),r(e,$),r($,v),E=!0,N||(q=[z(f,"input",l[3]),z(I,"click",l[4]),z($,"click",it)],N=!0)},p(b,[T]){if(T&1&&f.value!==b[0]&&Ne(f,b[0]),T&2){B=b[1];let L;for(L=0;L<B.length;L+=1){const Y=je(b,B,L);w[L]?(w[L].p(Y,T),H(w[L],1)):(w[L]=Ae(Y),w[L].c(),H(w[L],1),w[L].m(d,null))}for(Fe(),L=B.length;L<w.length;L+=1)K(L);Re()}},i(b){if(!E){H(a.$$.fragment,b),H(s.$$.fragment,b),H(n.$$.fragment,b);for(let T=0;T<B.length;T+=1)H(w[T]);E=!0}},o(b){W(a.$$.fragment,b),W(s.$$.fragment,b),W(n.$$.fragment,b),w=w.filter(Boolean);for(let T=0;T<w.length;T+=1)W(w[T]);E=!1},d(b){b&&h(e),te(a),te(s),te(n),lt(w,b),N=!1,be(q)}}}function Nt(l,e,a){let t,s;ce(l,de,m=>a(2,s=m));let i="";const n=(m,p)=>m.filter(f=>f.name.toLowerCase().includes(p.toLowerCase())).map(f=>(f.scheduled=f.scheduled||[],f.history=f.history||[],f)).sort((f,c)=>{const d=S=>S.scheduled.concat(["99999999"])[0];return d(f)<d(c)?-1:1});function o(){i=this.value,a(0,i)}const u=()=>{ye.update(()=>{}),$e.update(()=>!0)};return l.$$.update=()=>{l.$$.dirty&5&&a(1,t=n(s,i))},[i,t,s,o,u]}class Ct extends ie{constructor(e){super(),re(this,e,Nt,Ut,oe,{})}}export{Ct as default};
