/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='nova']"));
function e(e,t){return"sc-"+e.t+(t&&t!==l?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function o(e,t){let n,o,l=null,s=!1,i=!1,r=arguments.length;for(;r-- >2;)g.push(arguments[r]);for(;g.length>0;){let t=g.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)g.push(t[r]);else"boolean"==typeof t&&(t=null),(i="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(i=!1)),i&&s?l[l.length-1].vtext+=t:null===l?l=[i?{vtext:t}:t]:l.push(i?{vtext:t}:t),s=i}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&g.push(r);t.class=g.join(" "),g.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],k):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,l:!1}}const l="$",s={},i=(t,n,o,s)=>{let i=o.t+l,r=o[i];if((2===o.s||1===o.s&&!t.u.i)&&(s["s-sc"]=r?e(o,s.mode):e(o)),r){let e=n.p.head;if(n.i)if(1===o.s)e=s.shadowRoot;else{const t=s.getRootNode();t.host&&(e=t)}let l=t.m.get(e);if(l||t.m.set(e,l={}),!l[i]){let t;{t=r.content.cloneNode(!0),l[i]=!0;const o=e.querySelectorAll("[data-styles]");n.v(e,t,o.length&&o[o.length-1].nextSibling||e.firstChild)}}}},a=e=>null!=e,f=e=>e.toLowerCase(),u="http://www.w3.org/1999/xlink",p=(e,t,n,o,l,s)=>{if("class"!==n||s)if("style"===n){for(const e in o)l&&null!=l[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in l)o&&l[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!s&&(n in t||-1!==["object","function"].indexOf(typeof l)&&null!==l)){const o=e.M(t);o&&o.g&&o.g[n]?v(t,n,l):"ref"!==n&&(v(t,n,null==l?"":l),null!=l&&!1!==l||e.u.k(t,n))}else null!=l&&"key"!==n?((e,t,n,o="boolean"==typeof n,l)=>{l=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?l?e.removeAttributeNS(u,f(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),l?e.setAttributeNS(u,f(t),n):e.setAttribute(t,n))})(t,n,l):(s||e.u.C(t,n)&&(null==l||!1===l))&&e.u.k(t,n);else n=f(n)in t?f(n.substring(2)):f(n[2])+n.substring(3),l?l!==o&&e.u.j(t,n,l,0):e.u.W(t,n,0);else if(o!==l){const e=m(o),n=m(l),s=e.filter(e=>!n.includes(e)),i=m(t.className).filter(e=>!s.includes(e)),r=n.filter(t=>!e.includes(t)&&!i.includes(t));i.push(...r),t.className=i.join(" ")}},m=e=>null==e||""===e?[]:e.trim().split(/\s+/),v=(e,t,n)=>{try{e[t]=n}catch(e){}},b=(e,t,n,o,l)=>{const i=11===n.o.nodeType&&n.o.host?n.o.host:n.o,r=t&&t.vattrs||s,a=n.vattrs||s;for(l in r)a&&null!=a[l]||null==r[l]||p(e,i,l,r[l],void 0,o,n.l);for(l in a)l in r&&a[l]===("value"===l||"checked"===l?i[l]:r[l])||p(e,i,l,r[l],a[l],o,n.l)};let y=!1;const M=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{M(e,t)}))},$=(e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),s=!1!==e.asyncQueue,i=Promise.resolve(),r=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(m))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},m=()=>{n++,p(a);const t=s?l()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(m):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&i.then(()=>p(r))},read:u(a),write:u(c)}}},g=[],k={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},C=(e,t,n)=>{const[o,l,,s,i,r]=e,a={color:{N:"color"}};if(s)for(t=0;t<s.length;t++)a[(n=s[t])[0]]={S:n[1],O:!!n[2],N:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,A:n[4]};return{t:o,T:l,g:Object.assign({},a),s:i,R:r?r.map(j):void 0}},j=e=>({L:e[0],D:e[1],q:!!e[2],B:!!e[3],I:!!e[4]}),W=(e,t)=>a(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,N=(e,t,n)=>{e.P.add(t),e.F.has(t)||(e.F.set(t,!0),e.H?e.queue.write(()=>S(e,t,n)):e.queue.tick(()=>S(e,t,n)))},S=async(e,n,l,s,i,r)=>{if(e.F.delete(n),!e.U.has(n)){if(!(i=e.Z.get(n))){if((r=e.G.get(n))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{S(e,n,l)});if(i=R(e,n,e.J.get(n),l))try{i.componentWillLoad&&await i.componentWillLoad()}catch(t){e.K(t,3,n)}}((e,n,l,s)=>{try{const i=n.V.host,r=n.V.encapsulation,a="shadow"===r&&e.u.i;let c,f=l;if(a&&(f=l.shadowRoot),!l["s-rn"]){e.X(e,e.u,n,l);const o=l["s-sc"];o&&(e.u.Y(l,t(o,!0)),"scoped"===r&&e.u.Y(l,t(o)))}if(s.render||s.hostData||i||c){e._=!0;const t=s.render&&s.render();let n;e._=!1;const i=o(null,n,t),c=e.ee.get(l)||{};c.o=f,e.ee.set(l,e.render(l,c,i,a,r))}l["s-rn"]=!0,l["s-rc"]&&(l["s-rc"].forEach(e=>e()),l["s-rc"]=null)}catch(t){e._=!1,e.K(t,8,l,!0)}})(e,e.M(n),n,i),n["s-init"]()}},E=(e,t,n,o,l,s,i,r,c)=>{if(t.type){const f=e.te.get(n);!t.attr||void 0!==f[l]&&""!==f[l]||(r=s&&s.ne)&&a(c=r[t.attr])&&(f[l]=W(t.type,c)),n.hasOwnProperty(l)&&(void 0===f[l]&&(f[l]=W(t.type,n[l])),"mode"!==l&&delete n[l]),o.hasOwnProperty(l)&&void 0===f[l]&&(f[l]=o[l]),t.watchCallbacks&&(f[T+l]=t.watchCallbacks.slice()),A(o,l,function f(t){return(t=e.te.get(e.oe.get(this)))&&t[l]},function u(n,o){(o=e.oe.get(this))&&t.mutable&&O(e,o,l,n,i)})}},O=(e,t,n,o,l,s,i)=>{(i=e.te.get(t))||e.te.set(t,i={});const r=i[n];if(o!==r&&(i[n]=o,s=e.Z.get(t))){{const e=i[T+n];if(e)for(let t=0;t<e.length;t++)try{s[e[t]].call(s,o,r,n)}catch(e){console.error(e)}}!e._&&t["s-rn"]&&N(e,t,l)}},A=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},T="wc-",R=(e,t,n,o,l,s)=>{try{l=new(s=e.M(t).V),((e,t,n,o,l,s)=>{e.oe.set(o,n),e.te.has(n)||e.te.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,i])=>{E(e,i,n,o,t,l,s)})})(e,s,t,l,n,o)}catch(n){l={},e.K(n,7,t,!0)}return e.Z.set(t,l),l},L=(e,t,n,o,l,s)=>{if(e.P.delete(t),(l=e.G.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.G.delete(t)),e.le.length&&!e.P.size)for(;s=e.le.shift();)s()},D=(e,t,n,o)=>{t.forEach(([t,l])=>{3&l.S&&A(n,t,function n(){return(e.te.get(this)||{})[t]},function n(s){O(e,this,t,W(l.A,s),o)})})},q=(e,t,n,o,l)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.U.delete(n),e.se.has(n)||(e.ie=!0,e.P.add(n),e.se.set(n,!0),((e,t,n)=>{for(n=t;n=e.u.re(n);)if(e.ae(n)){e.ce.has(t)||(e.G.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.J.set(n,((e,t,n,o,l)=>(n.mode||(n.mode=e.fe(n)),n["s-cr"]||e.ue(n,"ssrv")||e.i&&1===t.s||(n["s-cr"]=e.pe(""),n["s-cr"]["s-cn"]=!0,e.v(n,n["s-cr"],e.de(n)[0])),1===t.s&&e.i&&!n.shadowRoot&&e.me(n,{mode:"open"}),o={ne:{}},t.g&&Object.keys(t.g).forEach(s=>{(l=t.g[s].N)&&(o.ne[l]=e.ue(n,l))}),o))(e.u,t,n)),e.ve(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.be&&((e,t)=>{for(;t;){if(!e.he(t))return 9!==e.ye(t);t=e.he(t)}})(e.u,t)&&(e.U.set(t,!0),L(e,t),M(e.ee.get(t),!0),e.u.W(t),e.we.delete(t),[e.G,e.Me,e.J].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,l,s)=>{if(e.Z.get(t)&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.ce.set(t,!0),e.$e.has(t)||(e.$e.set(t,!0),t["s-ld"]=void 0,e.u.Y(t,n));try{M(e.ee.get(t)),(s=e.Me.get(t))&&(s.forEach(e=>e(t)),e.Me.delete(t))}catch(n){e.K(n,4,t)}L(e,t)}})(e,this,o)},n.forceUpdate=function(){N(e,this,l)},t.g){const o=Object.entries(t.g);{let e={};o.forEach(([t,{N:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function l(e,t,n,o){const l=e[f(n)];l&&(t[l]=(null!==o||"boolean"!=typeof t[l])&&o)})(e,this,t,o)}}D(e,o,n,l)}};((e,t,n,s,r,c,u)=>{const p=n.performance,d={html:{}},m=n[e]=n[e]||{},v=((e,t,n)=>{const o=new WeakMap,l={p:n,i:!!n.documentElement.attachShadow,ge:!1,ye:e=>e.nodeType,ke:e=>n.createElement(e),Ce:(e,t)=>n.createElementNS(e,t),pe:e=>n.createTextNode(e),je:e=>n.createComment(e),v:(e,t,n)=>e.insertBefore(t,n),We:e=>e.remove(),Ne:(e,t)=>e.appendChild(t),Y:(e,t)=>{e.classList.add(t)},de:e=>e.childNodes,he:e=>e.parentNode,Se:e=>e.nextSibling,Ee:e=>e.previousSibling,xe:e=>f(e.nodeName),Oe:e=>e.textContent,Ae:(e,t)=>e.textContent=t,ue:(e,t)=>e.getAttribute(t),Te:(e,t,n)=>e.setAttribute(t,n),k:(e,t)=>e.removeAttribute(t),C:(e,t)=>e.hasAttribute(t),fe:t=>t.getAttribute("mode")||(e.Context||{}).mode,Re:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?l.re(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,j:(t,n,s,i,r,a,c,f,u,p)=>{let d=t,m=s,v=o.get(t);p=n+i,v&&v[p]&&v[p](),"object"==typeof c&&(d=c),d&&(f=l.ge?{capture:!!r,passive:!!a}:!!r,e.ael(d,n,m,f),v||o.set(t,v={}),v[p]=(()=>{d&&e.rel(d,n,m,f),v[p]=null}))},W:(e,t,n,l)=>{(l=o.get(e))&&(t?l[t+n]&&l[t+n]():Object.keys(l).forEach(e=>{l[e]&&l[e]()}))},Le:(e,n,o,l)=>(l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l),re:(e,t)=>(t=l.he(e))&&11===l.ye(t)?t.host:t,De:(e,t,n,o)=>e.setAttributeNS(t,n,o),me:(e,t)=>e.attachShadow(t)};return e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o))),l})(m,n,s),h=v.p.documentElement,w=n["s-defined"]=n["s-defined"]||{},M=(e,t)=>{n.customElements.get(e.t)||(q(g,d[e.t]=e,t.prototype,c,p),t.observedAttributes=Object.values(e.g).map(e=>e.N).filter(e=>!!e),n.customElements.define(e.t,t))},g={u:v,qe:M,M:e=>d[v.xe(e)],Be:e=>t[e],isClient:!0,ae:e=>!(!w[v.xe(e)]&&!g.M(e)),K:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=$(m,n),ve:(e,t)=>{{const n=e.T,o=!v.i;let s=r+n+(o?".sc":"")+".entry.js";import(s).then(n=>{try{e.V=n[(e=>f(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.t)],function o(e,t,n,s,i){if(s){const n=t.t+(i||l);if(!t[n]){const o=e.ke("template");t[n]=o,o.innerHTML=`<style>${s}</style>`,e.Ne(e.p.head,o)}}}(v,e,e.s,e.V.style,e.V.styleMode),N(g,t,p)}catch(t){console.error(t),e.V=class{}}},e=>console.error(e,s))}},_:!1,H:!1,be:!1,X:i,G:new WeakMap,m:new WeakMap,se:new WeakMap,we:new WeakMap,$e:new WeakMap,ce:new WeakMap,oe:new WeakMap,J:new WeakMap,Z:new WeakMap,U:new WeakMap,F:new WeakMap,Me:new WeakMap,Ie:new WeakMap,ee:new WeakMap,te:new WeakMap,P:new Set,le:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=n,t.location=n.location,t.document=s,t.resourcesUrl=t.publicPath=r,m.h=o,m.Context=t,m.onReady=(()=>new Promise(e=>g.queue.write(()=>g.P.size?g.le.push(e):e()))),g.render=((e,t)=>{let n,o,l,s,i,r,c;const f=(l,p,d,m,v,h,w,M,$)=>{if(M=p.vchildren[d],n||(s=!0,"slot"===M.vtag&&(o&&t.Y(m,o+"-s"),M.vchildren?M.Pe=!0:M.Fe=!0)),a(M.vtext))M.o=t.pe(M.vtext);else if(M.Fe)M.o=t.pe("");else{if(h=M.o=y||"svg"===M.vtag?t.Ce("http://www.w3.org/2000/svg",M.vtag):t.ke(M.Pe?"slot-fb":M.vtag),e.ae(h)&&e.ce.delete(c),y="svg"===M.vtag||"foreignObject"!==M.vtag&&y,b(e,null,M,y),a(o)&&h["s-si"]!==o&&t.Y(h,h["s-si"]=o),M.vchildren)for(v=0;v<M.vchildren.length;++v)(w=f(l,M,v,h))&&t.Ne(h,w);"svg"===M.vtag&&(y=!1)}return M.o["s-hn"]=r,(M.Pe||M.Fe)&&(M.o["s-sr"]=!0,M.o["s-cr"]=i,M.o["s-sn"]=M.vname||"",($=l&&l.vchildren&&l.vchildren[d])&&$.vtag===M.vtag&&l.o&&u(l.o)),M.o},u=(n,o,l,i)=>{e.be=!0;const a=t.de(n);for(l=a.length-1;l>=0;l--)(i=a[l])["s-hn"]!==r&&i["s-ol"]&&(t.We(i),t.v(h(i),i,v(i)),t.We(i["s-ol"]),i["s-ol"]=null,s=!0),o&&u(i,o);e.be=!1},p=(e,n,o,l,s,i,c,u)=>{const p=e["s-cr"];for((c=p&&t.he(p)||e).shadowRoot&&t.xe(c)===r&&(c=c.shadowRoot);s<=i;++s)l[s]&&(u=a(l[s].vtext)?t.pe(l[s].vtext):f(null,o,s,e))&&(l[s].o=u,t.v(c,u,v(n)))},d=(e,n,o,s)=>{for(;n<=o;++n)a(e[n])&&(s=e[n].o,l=!0,s["s-ol"]?t.We(s["s-ol"]):u(s,!0),t.We(s))},m=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),v=e=>e&&e["s-ol"]?e["s-ol"]:e,h=e=>t.he(e["s-ol"]?e["s-ol"]:e),w=(n,o,l)=>{const s=o.o=n.o,i=n.vchildren,r=o.vchildren;y=o.o&&a(t.re(o.o))&&void 0!==o.o.ownerSVGElement,y="svg"===o.vtag||"foreignObject"!==o.vtag&&y,a(o.vtext)?(l=s["s-cr"])?t.Ae(t.he(l),o.vtext):n.vtext!==o.vtext&&t.Ae(s,o.vtext):("slot"!==o.vtag&&b(e,n,o,y),a(i)&&a(r)?((e,n,o,l,s,i,r,c)=>{let b=0,y=0,M=n.length-1,$=n[0],g=n[M],k=l.length-1,C=l[0],j=l[k];for(;b<=M&&y<=k;)if(null==$)$=n[++b];else if(null==g)g=n[--M];else if(null==C)C=l[++y];else if(null==j)j=l[--k];else if(m($,C))w($,C),$=n[++b],C=l[++y];else if(m(g,j))w(g,j),g=n[--M],j=l[--k];else if(m($,j))"slot"!==$.vtag&&"slot"!==j.vtag||u(t.he($.o)),w($,j),t.v(e,$.o,t.Se(g.o)),$=n[++b],j=l[--k];else if(m(g,C))"slot"!==$.vtag&&"slot"!==j.vtag||u(t.he(g.o)),w(g,C),t.v(e,g.o,$.o),g=n[--M],C=l[++y];else{for(s=null,i=b;i<=M;++i)if(n[i]&&a(n[i].vkey)&&n[i].vkey===C.vkey){s=i;break}a(s)?((c=n[s]).vtag!==C.vtag?r=f(n&&n[y],o,s,e):(w(c,C),n[s]=void 0,r=c.o),C=l[++y]):(r=f(n&&n[y],o,y,e),C=l[++y]),r&&t.v(h($.o),r,v($.o))}b>M?p(e,null==l[k+1]?null:l[k+1].o,o,l,y,k):y>k&&d(n,b,M)})(s,i,o,r):a(r)?(a(n.vtext)&&t.Ae(s,""),p(s,null,o,r,0,r.length-1)):a(i)&&d(i,0,i.length-1)),y&&"svg"===o.vtag&&(y=!1)},M=(e,n,o,l,s,i,r,a)=>{for(l=0,s=(o=t.de(e)).length;l<s;l++)if(n=o[l],1===t.ye(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,i=0;i<s;i++)if(o[i]["s-hn"]!==n["s-hn"])if(a=t.ye(o[i]),""!==r){if(1===a&&r===t.ue(o[i],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Oe(o[i]).trim()){n.hidden=!0;break}M(n)}},$=[],g=(e,n,o,s,i,r,a,c,f,u)=>{for(i=0,r=(n=t.de(e)).length;i<r;i++){if((o=n[i])["s-sr"]&&(s=o["s-cr"]))for(c=t.de(t.he(s)),f=o["s-sn"],a=c.length-1;a>=0;a--)(s=c[a])["s-cn"]||s["s-nr"]||s["s-hn"]===o["s-hn"]||((3===(u=t.ye(s))||8===u)&&""===f||1===u&&null===t.ue(s,"slot")&&""===f||1===u&&t.ue(s,"slot")===f)&&($.some(e=>e.He===s)||(l=!0,s["s-sn"]=f,$.push({Qe:o,He:s})));1===t.ye(o)&&g(o)}};return(a,f,u,p,d,m,v,b,h,y,k,C)=>{if(c=a,r=t.xe(c),i=c["s-cr"],n=p,o=c["s-sc"],s=l=!1,w(f,u),s){for(g(u.o),v=0;v<$.length;v++)(b=$[v]).He["s-ol"]||((h=t.pe(""))["s-nr"]=b.He,t.v(t.he(b.He),b.He["s-ol"]=h,b.He));for(e.be=!0,v=0;v<$.length;v++){for(b=$[v],k=t.he(b.Qe),C=t.Se(b.Qe),h=b.He["s-ol"];h=t.Ee(h);)if((y=h["s-nr"])&&y&&y["s-sn"]===b.He["s-sn"]&&k===t.he(y)&&(y=t.Se(y))&&y&&!y["s-nr"]){C=y;break}(!C&&k!==t.he(b.He)||t.Se(b.He)!==C)&&b.He!==C&&(t.We(b.He),t.v(k,b.He,C))}e.be=!1}return l&&M(u.o),$.length=0,u}})(g,v),h["s-ld"]=[],h["s-rn"]=!0,h["s-init"]=(()=>{g.ce.set(h,m.loaded=g.H=!0),v.Le(n,"appload",{detail:{namespace:e}})}),u.map(C).forEach(e=>M(e,class extends HTMLElement{})),g.ie||h["s-init"](),((e,t,n,o,l,s)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.M(t);if(o)if(e.ce.has(t))n(t);else{const o=e.Me.get(t)||[];o.push(n),e.Me.set(t,o)}return!!o}),l){for(s=l.length-1;s>=0;s--)t.componentOnReady(l[s][0],l[s][1])&&l.splice(s,1);for(s=0;s<o.length;s++)if(!n[o[s]].componentOnReady)return;for(s=0;s<l.length;s++)l[s][1](null);l.length=0}})(g,m,n,n["s-apps"],n["s-cr"]),m.initialized=!0,g})(n,x,w,d,r,h,c);
})(window,document,{},"nova","hydrated",[["nova-badge","nsrgswbr",1,[["score",2,0,1,2]],1]]);