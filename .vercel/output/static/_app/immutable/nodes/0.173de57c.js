import{a as p2,g as E2,w as V2,b as w2,l as g2,c as z1,d as b2,e as M2}from"../chunks/index.9a82d513.js";import{b as $2}from"../chunks/paths.8051f272.js";import{S as k1,i as C1,s as q1,k as f,C as e1,a as L,q as R,l as g,m as u,D as a1,h as i,c as Z,r as y,n as r,b as c1,E as l,u as u1,F as p1,G as j1,e as i2,g as w1,d as $1,f as L2,H as Z2,y as o2,z as s2,A as c2,I as A2,J as I2,K as R2,B as u2,v as y2}from"../chunks/index.495f819a.js";const S2=(a="language")=>[localStorage.getItem(a)].filter(Boolean),D2=a=>()=>S2(a),H2=()=>[...window.navigator.languages],h2=(a,t,o=!0)=>{for(const e of a)for(const n of t)if(n===e)return n;for(const e of a)if(o){const n=t.map(s=>(s.startsWith(e+"-")||e.startsWith(s+"-"))&&s).filter(Boolean).sort().sort((s,h)=>s.split("-").length-h.split("-").length);if(n.length)return n[0]}},P2=async({referenceLanguage:a,languages:t,allowRelated:o=!0},...e)=>{const n=[];for(const s of e){const h=await s(),v=h2(h,t,!1);if(v)return v;n.push(...h)}return o&&h2(n,t)||a},F2=a=>(t,o)=>{const e=a.body.find(n=>n.id.name===t);return e?e.pattern.elements.map(n=>B2(n,o||{})).join(""):""},B2=(a,t)=>{switch(a.type){case"Text":return a.value;case"Placeholder":return T2(a,t)}},T2=(a,t)=>{switch(a.body.type){case"VariableReference":return t[a.body.name]||""}},z2=a=>!!a&&typeof a=="object"&&typeof a.then=="function",k2=()=>"",C2=({readResource:a},t={resources:new Map,language:void 0,i:void 0})=>{let o;const e=v=>{if(t.resources.has(v))return;if(o)return o;const m=d=>d&&t.resources.set(v,d),p=a(v);if(!z2(p)){m(p);return}return o=new Promise(async d=>{const _=await p;m(_),o=void 0,d()}),o},n=v=>{t.language=v,t.i=void 0},s=()=>t.language,h=()=>{if(t.i)return t.i;const v=t.resources.get(t.language);return v?t.i=F2(v):k2};return{loadResource:e,switchLanguage:n,get language(){return s()},get i(){return h()}}},q2=a=>{const t=C2(a);return{...t,get language(){return t.language},get i(){return t.i},get referenceLanguage(){return a.referenceLanguage},get languages(){return a.languages}}},j2=async({fetch:a,language:t,referenceLanguage:o,languages:e})=>{const n=q2({readResource:async s=>a(`${$2}/inlang/${s}.json`).then(h=>h.ok?h.json():void 0),referenceLanguage:o,languages:e});return t&&(await n.loadResource(t),n.switchLanguage(t)),n};let v2={};const d2=async(a,t)=>{const o=E2(a);if(o)return o;if(!t)return await V2(0),d2(a,t);let e;w2(a,new Promise(p=>e=p));const n=a.data,{referenceLanguage:s=void 0,languages:h=[]}=n,v=n.language||!t.initDetectors?n.language:await P2({referenceLanguage:s,languages:h},...t.initDetectors(a)),m=v2[v]||await j2({fetch:a.fetch,language:v,referenceLanguage:s,languages:h});return e(m),v&&(v2={[v]:m}),m},N2=a=>({wrap:t=>async o=>{const e=await d2(o,a),n=await t(o,e);return p2({...n||o.data,referenceLanguage:e.referenceLanguage,languages:e.languages,language:e.language},e)}}),O2=N2({initDetectors:()=>[D2(g2),H2]}).wrap(()=>{}),t3=Object.freeze(Object.defineProperty({__proto__:null,load:O2},Symbol.toStringTag,{value:"Module"}));function W2(a){let t,o,e,n,s,h,v,m,p,d,_,c,E,z,t1,h1,S,H,G,l1,r1,W,K,k,F,C,V,U,P,D=a[1]("navigation.0.text")+"",J,Y,v1,q,A,j=a[1]("navigation.1.text")+"",Q,X,b,w,B,N=a[1]("navigation.2.text")+"",f1,I,E1,n1,O,g1=a[1]("navigation.3.text")+"",d1,V1,i1,x,o1=a[1]("navigation.4.text")+"",_1,L1,H1,b1,s1,Z1=a[1]("navigation.5.text")+"",A1,P1,m1,F1,N1=a[2].getFullYear()+"",B1;return{c(){t=f("footer"),o=f("div"),e=f("div"),n=f("div"),s=e1("svg"),h=e1("path"),v=e1("path"),m=e1("path"),p=L(),d=f("address"),_=f("div"),c=f("strong"),E=R("Adresse:"),z=f("br"),t1=R(`
            Bozener Str. 17, 10825 Berlin`),h1=L(),S=f("div"),H=f("strong"),G=R("E–Mail:"),l1=f("br"),r1=L(),W=f("a"),K=R("alvarez.carmenglo@gmail.com↗"),k=L(),F=f("div"),C=f("nav"),V=f("ul"),U=f("li"),P=f("a"),J=R(D),v1=L(),q=f("li"),A=f("a"),Q=R(j),b=L(),w=f("li"),B=f("a"),f1=R(N),E1=L(),n1=f("li"),O=f("a"),V1=L(),i1=f("li"),x=f("a"),_1=R(o1),H1=L(),b1=f("li"),s1=f("a"),P1=L(),m1=f("p"),F1=R("© Psychologische Privatpraxis im Bayerischen Viertel Carmen Alvarez "),B1=R(N1),this.h()},l($){t=g($,"FOOTER",{class:!0});var M=u(t);o=g(M,"DIV",{class:!0});var I1=u(o);e=g(I1,"DIV",{class:!0});var R1=u(e);n=g(R1,"DIV",{class:!0});var O1=u(n);s=a1(O1,"svg",{class:!0,xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var y1=u(s);h=a1(y1,"path",{fill:!0,"fill-rule":!0,d:!0,"clip-rule":!0}),u(h).forEach(i),v=a1(y1,"path",{fill:!0,"fill-rule":!0,d:!0,"clip-rule":!0}),u(v).forEach(i),m=a1(y1,"path",{fill:!0,d:!0}),u(m).forEach(i),y1.forEach(i),O1.forEach(i),p=Z(R1),d=g(R1,"ADDRESS",{class:!0});var S1=u(d);_=g(S1,"DIV",{});var D1=u(_);c=g(D1,"STRONG",{});var W1=u(c);E=y(W1,"Adresse:"),W1.forEach(i),z=g(D1,"BR",{}),t1=y(D1,`
            Bozener Str. 17, 10825 Berlin`),D1.forEach(i),h1=Z(S1),S=g(S1,"DIV",{});var M1=u(S);H=g(M1,"STRONG",{});var G1=u(H);G=y(G1,"E–Mail:"),G1.forEach(i),l1=g(M1,"BR",{}),r1=Z(M1),W=g(M1,"A",{href:!0});var K1=u(W);K=y(K1,"alvarez.carmenglo@gmail.com↗"),K1.forEach(i),M1.forEach(i),S1.forEach(i),R1.forEach(i),k=Z(I1),F=g(I1,"DIV",{class:!0});var U1=u(F);C=g(U1,"NAV",{class:!0});var J1=u(C);V=g(J1,"UL",{role:!0,class:!0});var T=u(V);U=g(T,"LI",{});var Y1=u(U);P=g(Y1,"A",{href:!0});var Q1=u(P);J=y(Q1,D),Q1.forEach(i),Y1.forEach(i),v1=Z(T),q=g(T,"LI",{});var X1=u(q);A=g(X1,"A",{href:!0});var x1=u(A);Q=y(x1,j),x1.forEach(i),X1.forEach(i),b=Z(T),w=g(T,"LI",{});var e2=u(w);B=g(e2,"A",{href:!0});var a2=u(B);f1=y(a2,N),a2.forEach(i),e2.forEach(i),E1=Z(T),n1=g(T,"LI",{});var t2=u(n1);O=g(t2,"A",{href:!0});var _2=u(O);_2.forEach(i),t2.forEach(i),V1=Z(T),i1=g(T,"LI",{});var l2=u(i1);x=g(l2,"A",{href:!0});var r2=u(x);_1=y(r2,o1),r2.forEach(i),l2.forEach(i),H1=Z(T),b1=g(T,"LI",{});var n2=u(b1);s1=g(n2,"A",{href:!0});var m2=u(s1);m2.forEach(i),n2.forEach(i),T.forEach(i),J1.forEach(i),U1.forEach(i),I1.forEach(i),P1=Z(M),m1=g(M,"P",{class:!0});var T1=u(m1);F1=y(T1,"© Psychologische Privatpraxis im Bayerischen Viertel Carmen Alvarez "),B1=y(T1,N1),T1.forEach(i),M.forEach(i),this.h()},h(){r(h,"fill","#F85F72"),r(h,"fill-rule","evenodd"),r(h,"d","M148.852 26.221c-.154.009-.31.02-.468.035-2.084.187-3.765.846-5.044 1.975-1.259 1.128-1.807 2.604-1.643 4.427.164 1.823.941 3.114 2.329 3.871 1.303.71 2.912 1.005 4.826.884v-.178c-1.358.062-2.494-.26-3.408-.966-.99-.764-1.563-2.02-1.72-3.771-.159-1.765.214-3.18 1.118-4.247.904-1.082 2.109-1.69 3.618-1.826.133-.012.263-.02.392-.025v-.179Z"),r(h,"clip-rule","evenodd"),r(v,"fill","#2A2927"),r(v,"fill-rule","evenodd"),r(v,"d","M154.077 30.279a7.435 7.435 0 1 1-14.557 3.04 7.435 7.435 0 0 1 14.557-3.04Zm-6.265 6.372a4.957 4.957 0 1 0-2.026-9.704 4.957 4.957 0 0 0 2.026 9.704Z"),r(v,"clip-rule","evenodd"),r(m,"fill","#000"),r(m,"d","M271.669 47v-1.24l8.029-29.977h-3.069c-.992 0-1.746.279-2.263.837-.517.558-.868 1.405-1.054 2.542-.186 1.137-.279 2.573-.279 4.309h-1.178v-8.928h12.648v1.24l-8.029 29.977h2.883c1.075 0 1.891-.258 2.449-.775.558-.537.93-1.385 1.116-2.542.207-1.178.31-2.728.31-4.65h1.24V47h-12.803ZM260.875 47.651c-1.488 0-2.769-.455-3.844-1.364-1.074-.93-1.953-2.19-2.635-3.782-.682-1.591-1.178-3.4-1.488-5.425a42.595 42.595 0 0 1-.465-6.386c0-2.77.228-5.177.682-7.223.455-2.067 1.075-3.772 1.86-5.115.786-1.364 1.674-2.377 2.666-3.038.992-.682 2.026-1.023 3.1-1.023a5.01 5.01 0 0 1 3.286 1.178c.951.765 1.736 1.808 2.356 3.131.641 1.302 1.116 2.78 1.426 4.433.31 1.653.465 3.358.465 5.115v1.147c0 .351-.01.723-.031 1.116h-11.532v-1.24h6.944c0-2.831-.082-5.26-.248-7.285-.165-2.046-.465-3.617-.899-4.712-.413-1.095-1.002-1.643-1.767-1.643-.744 0-1.384.527-1.922 1.581-.537 1.054-.95 2.656-1.24 4.805-.289 2.129-.434 4.836-.434 8.122 0 2.211.042 4.299.124 6.262.104 1.943.3 3.668.589 5.177.29 1.488.724 2.656 1.302 3.503.579.847 1.344 1.271 2.294 1.271 1.468 0 2.625-.403 3.472-1.209.848-.806 1.416-1.653 1.705-2.542l1.054.651c-.413 1.199-1.209 2.253-2.387 3.162-1.157.889-2.635 1.333-4.433 1.333ZM233.812 47v-1.24h2.915V15.783h-2.915v-1.24h7.441l.092 3.534c.042-.269.228-.703.558-1.302.352-.6.837-1.157 1.457-1.674.641-.537 1.406-.806 2.294-.806 1.034 0 1.881.372 2.543 1.116.661.723 1.157 1.695 1.488 2.914.351 1.22.527 2.573.527 4.061 0 .992-.176 1.767-.527 2.325-.331.537-.817.806-1.457.806-.62 0-1.106-.248-1.457-.744-.331-.517-.497-1.178-.497-1.984 0-.517.083-.971.248-1.364.186-.413.362-.816.527-1.209.166-.413.249-.878.249-1.395 0-1.075-.197-1.86-.59-2.356-.372-.496-.857-.744-1.456-.744-.765 0-1.447.372-2.047 1.116-.578.744-1.033 1.674-1.364 2.79a12.458 12.458 0 0 0-.464 3.348V45.76h3.006V47h-10.571ZM220.853 47.651c-1.178 0-2.253-.279-3.224-.837-.971-.558-1.736-1.416-2.294-2.573s-.837-2.625-.837-4.402c0-1.963.362-3.586 1.085-4.867.744-1.281 1.653-2.356 2.728-3.224a32.472 32.472 0 0 1 3.286-2.356c1.095-.703 2.005-1.436 2.728-2.201.744-.765 1.116-1.695 1.116-2.79 0-1.57-.103-3.017-.31-4.34-.207-1.323-.568-2.377-1.085-3.162-.517-.806-1.25-1.209-2.201-1.209-.992 0-1.86.362-2.604 1.085-.723.723-1.085 1.57-1.085 2.542 0 .475.072.889.217 1.24.165.351.31.713.434 1.085.145.351.217.785.217 1.302 0 .744-.165 1.364-.496 1.86-.331.475-.827.713-1.488.713s-1.157-.279-1.488-.837c-.331-.558-.496-1.333-.496-2.325 0-1.467.31-2.81.93-4.03a7.552 7.552 0 0 1 2.666-2.914c1.157-.744 2.48-1.116 3.968-1.116 1.467 0 2.759.372 3.875 1.116 1.116.723 1.994 1.86 2.635 3.41.641 1.53.961 3.524.961 5.983V43.59c0 .847.103 1.436.31 1.767.227.33.527.496.899.496.289 0 .558-.062.806-.186.269-.145.465-.279.589-.403l.651 1.054c-.227.248-.651.486-1.271.713-.62.248-1.364.372-2.232.372-.765 0-1.447-.124-2.046-.372a3.204 3.204 0 0 1-1.426-1.116c-.351-.496-.548-1.106-.589-1.829-.103.434-.341.93-.713 1.488-.372.558-.899 1.044-1.581 1.457-.682.413-1.56.62-2.635.62Zm1.395-1.953c.62 0 1.168-.227 1.643-.682a4.871 4.871 0 0 0 1.147-1.705c.269-.661.403-1.281.403-1.86V27.346c-.062.579-.403 1.199-1.023 1.86-.62.64-1.333 1.395-2.139 2.263-.785.847-1.478 1.901-2.077 3.162-.599 1.24-.899 2.759-.899 4.557 0 2.067.217 3.668.651 4.805.455 1.137 1.219 1.705 2.294 1.705ZM203.548 47.124l-5.921-31.341h-2.449v-1.24h9.641v1.24h-2.232l3.534 21.173 3.534-21.173h-2.201v-1.24h5.89v1.24h-2.294l-5.642 31.341h-1.86ZM184.599 47v-1.24h2.666V1.74h-2.666V.5h7.285v45.26h2.666V47h-9.951ZM163.233 47v-1.24h2.697l6.262-42.253h2.046l6.479 42.253h2.852V47h-10.602v-1.24h2.697l-4.185-30.69h.155l-4.371 30.69h2.449V47h-6.479Zm4.743-10.075v-1.209h7.254v1.209h-7.254ZM107.301 47v-1.24h2.945V15.783h-2.945v-1.24h7.533v4.06c.186-.598.496-1.229.93-1.89a5.588 5.588 0 0 1 1.705-1.705c.723-.475 1.591-.713 2.604-.713.971 0 1.901.238 2.79.713.909.475 1.653 1.395 2.232 2.759.599 1.343.899 3.348.899 6.014V45.76h2.852V47h-9.982v-1.24h2.48V24.339c0-2.852-.228-4.919-.682-6.2-.455-1.302-1.178-1.953-2.17-1.953-.476 0-.93.207-1.364.62-.434.413-.817.95-1.147 1.612-.331.64-.6 1.333-.806 2.077a8.23 8.23 0 0 0-.279 2.046V45.76h2.48V47h-10.075ZM97.746 47.65c-1.487 0-2.769-.454-3.843-1.363-1.075-.93-1.954-2.19-2.636-3.782-.681-1.591-1.177-3.4-1.487-5.425a42.595 42.595 0 0 1-.466-6.386c0-2.77.228-5.177.683-7.223.454-2.067 1.074-3.772 1.86-5.115.785-1.364 1.674-2.377 2.665-3.038.992-.682 2.026-1.023 3.1-1.023 1.24 0 2.336.393 3.286 1.178.951.765 1.736 1.808 2.356 3.13.641 1.303 1.116 2.78 1.426 4.434.31 1.653.465 3.358.465 5.115v1.147c0 .351-.01.723-.031 1.116H93.593v-1.24h6.943c0-2.831-.082-5.26-.248-7.285-.165-2.046-.465-3.617-.898-4.712-.414-1.095-1.003-1.643-1.767-1.643-.745 0-1.385.527-1.922 1.58-.538 1.055-.951 2.657-1.24 4.806-.29 2.129-.434 4.836-.434 8.122 0 2.211.04 4.299.123 6.262.104 1.943.3 3.668.59 5.177.289 1.488.723 2.656 1.302 3.503.578.847 1.343 1.27 2.293 1.27 1.468 0 2.625-.402 3.472-1.208.848-.806 1.416-1.653 1.705-2.542l1.054.65c-.413 1.2-1.209 2.254-2.387 3.163-1.157.889-2.635 1.333-4.433 1.333ZM56.719 47v-1.24h2.728V15.783h-2.728v-1.24h7.316v4.495c.103-.537.34-1.168.713-1.891.372-.744.92-1.395 1.643-1.953.744-.558 1.684-.837 2.82-.837 1.158 0 2.109.3 2.853.899a5.45 5.45 0 0 1 1.674 2.139c.372.847.568 1.653.589 2.418a8.678 8.678 0 0 1 .93-2.48 6.078 6.078 0 0 1 1.86-2.108c.806-.579 1.787-.868 2.945-.868 1.777 0 3.12.734 4.03 2.2.93 1.468 1.395 3.349 1.395 5.643v23.56h2.542V47h-9.58v-1.24h2.388V25.796c0-1.963-.052-3.637-.155-5.022-.083-1.385-.31-2.45-.682-3.193-.352-.744-.93-1.116-1.736-1.116-.724 0-1.354.393-1.891 1.178-.517.765-.92 1.715-1.21 2.852a14.254 14.254 0 0 0-.464 3.317V45.76h2.387V47h-9.362v-1.24h2.325V25.796c0-2.935-.135-5.218-.403-6.851-.269-1.653-1.003-2.48-2.201-2.48-.724 0-1.333.403-1.83 1.209-.495.785-.867 1.746-1.115 2.883a16.972 16.972 0 0 0-.403 3.286V45.76h2.325V47h-9.703ZM38.677 47v-1.24h2.914V15.783h-2.914v-1.24h7.44l.093 3.534c.041-.269.227-.703.558-1.302.351-.6.837-1.157 1.457-1.674.64-.537 1.405-.806 2.294-.806 1.033 0 1.88.372 2.542 1.116.661.723 1.157 1.695 1.488 2.914.351 1.22.527 2.573.527 4.06 0 .993-.176 1.768-.527 2.326-.33.537-.817.806-1.457.806-.62 0-1.106-.248-1.457-.744-.33-.517-.496-1.178-.496-1.984 0-.517.082-.971.248-1.364.186-.413.361-.816.527-1.21.165-.412.248-.877.248-1.394 0-1.075-.197-1.86-.59-2.356-.371-.496-.857-.744-1.456-.744-.765 0-1.447.372-2.046 1.116-.579.744-1.034 1.674-1.364 2.79a12.46 12.46 0 0 0-.465 3.348V45.76h3.007V47H38.677ZM25.199 47.65c-1.178 0-2.253-.278-3.224-.836-.972-.558-1.736-1.416-2.294-2.573s-.837-2.625-.837-4.402c0-1.963.361-3.586 1.085-4.867.744-1.281 1.653-2.356 2.728-3.224a32.473 32.473 0 0 1 3.286-2.356c1.095-.703 2.004-1.436 2.728-2.201.744-.765 1.116-1.695 1.116-2.79 0-1.57-.104-3.017-.31-4.34-.207-1.323-.569-2.377-1.085-3.162-.517-.806-1.25-1.21-2.201-1.21-.992 0-1.86.363-2.604 1.086-.724.723-1.085 1.57-1.085 2.542 0 .475.072.889.217 1.24.165.351.31.713.434 1.085.144.351.217.785.217 1.302 0 .744-.166 1.364-.496 1.86-.33.475-.827.713-1.488.713-.662 0-1.158-.28-1.488-.837-.33-.558-.496-1.333-.496-2.325 0-1.467.31-2.81.93-4.03a7.551 7.551 0 0 1 2.666-2.914c1.157-.744 2.48-1.116 3.968-1.116 1.467 0 2.759.372 3.875 1.116 1.116.723 1.994 1.86 2.635 3.41.64 1.53.96 3.524.96 5.983V43.59c0 .847.104 1.436.31 1.767.228.33.528.496.9.496.29 0 .558-.062.806-.186.268-.145.465-.28.589-.403l.65 1.054c-.227.248-.65.486-1.27.713-.62.248-1.364.372-2.232.372-.765 0-1.447-.124-2.046-.372a3.204 3.204 0 0 1-1.426-1.116c-.352-.496-.548-1.106-.59-1.83-.103.435-.34.93-.712 1.489-.372.558-.9 1.044-1.581 1.457-.682.413-1.56.62-2.635.62Zm1.395-1.952c.62 0 1.167-.227 1.643-.682a4.867 4.867 0 0 0 1.147-1.705c.268-.661.403-1.281.403-1.86V27.346c-.062.579-.403 1.199-1.023 1.86-.62.64-1.333 1.395-2.14 2.263-.785.847-1.477 1.901-2.076 3.162-.6 1.24-.9 2.759-.9 4.557 0 2.067.218 3.668.652 4.805.454 1.137 1.22 1.705 2.294 1.705ZM9.858 47.62c-2.893 0-5.26-1.891-7.099-5.673C.919 38.165 0 32.637 0 25.362c0-2.666.196-5.322.589-7.967.413-2.666 1.033-5.084 1.86-7.254.827-2.19 1.87-3.937 3.131-5.239 1.281-1.323 2.78-1.984 4.495-1.984 1.22 0 2.263.413 3.131 1.24.889.827 1.57 1.87 2.046 3.131.475 1.24.713 2.49.713 3.751 0 1.033-.165 1.819-.496 2.356-.33.517-.827.775-1.488.775-.723 0-1.25-.238-1.581-.713-.31-.475-.465-1.147-.465-2.015 0-.6.093-1.116.279-1.55.207-.434.403-.878.589-1.333.207-.455.31-1.002.31-1.643 0-.723-.227-1.333-.682-1.829-.455-.517-.982-.775-1.581-.775-.827 0-1.56.465-2.201 1.395-.64.91-1.188 2.139-1.643 3.689-.455 1.53-.837 3.224-1.147 5.084a70.53 70.53 0 0 0-.651 5.611 68.252 68.252 0 0 0-.217 5.208c0 2.253.083 4.423.248 6.51.165 2.067.393 3.978.682 5.735.31 1.757.682 3.296 1.116 4.619.455 1.302.961 2.315 1.519 3.038.579.723 1.209 1.085 1.891 1.085.785 0 1.488-.279 2.108-.837a7.513 7.513 0 0 0 1.612-2.108 11.54 11.54 0 0 0 .961-2.418l1.147.62a13.957 13.957 0 0 1-1.457 3.007 8.178 8.178 0 0 1-2.139 2.232c-.806.558-1.746.837-2.821.837Z"),r(s,"class","logo svelte-7t5v7q"),r(s,"xmlns","http://www.w3.org/2000/svg"),r(s,"width","285"),r(s,"height","48"),r(s,"fill","none"),r(s,"viewBox","0 0 285 48"),r(n,"class","mb-s-m"),r(W,"href","mailto:alvarez.carmenglo@gmail.com"),r(d,"class","flow svelte-7t5v7q"),r(e,"class","left"),r(P,"href",Y=a[1]("navigation.0.url")),r(A,"href",X=a[1]("navigation.1.url")),r(B,"href",I=a[1]("navigation.2.url")),r(O,"href",d1=a[1]("navigation.3.url")),r(x,"href",L1=a[1]("navigation.4.url")),r(s1,"href",A1=a[1]("navigation.5.url")),r(V,"role","list"),r(V,"class","flow"),r(C,"class","svelte-7t5v7q"),r(F,"class","right"),r(o,"class","wrapper repel"),r(m1,"class","wrapper mt-m-2xl"),r(t,"class","bg-nebula-100 svelte-7t5v7q")},m($,M){c1($,t,M),l(t,o),l(o,e),l(e,n),l(n,s),l(s,h),l(s,v),l(s,m),l(e,p),l(e,d),l(d,_),l(_,c),l(c,E),l(_,z),l(_,t1),l(d,h1),l(d,S),l(S,H),l(H,G),l(S,l1),l(S,r1),l(S,W),l(W,K),l(o,k),l(o,F),l(F,C),l(C,V),l(V,U),l(U,P),l(P,J),l(V,v1),l(V,q),l(q,A),l(A,Q),l(V,b),l(V,w),l(w,B),l(B,f1),l(V,E1),l(V,n1),l(n1,O),O.innerHTML=g1,l(V,V1),l(V,i1),l(i1,x),l(x,_1),l(V,H1),l(V,b1),l(b1,s1),s1.innerHTML=Z1,l(t,P1),l(t,m1),l(m1,F1),l(m1,B1)},p($,[M]){M&2&&D!==(D=$[1]("navigation.0.text")+"")&&u1(J,D),M&2&&Y!==(Y=$[1]("navigation.0.url"))&&r(P,"href",Y),M&2&&j!==(j=$[1]("navigation.1.text")+"")&&u1(Q,j),M&2&&X!==(X=$[1]("navigation.1.url"))&&r(A,"href",X),M&2&&N!==(N=$[1]("navigation.2.text")+"")&&u1(f1,N),M&2&&I!==(I=$[1]("navigation.2.url"))&&r(B,"href",I),M&2&&g1!==(g1=$[1]("navigation.3.text")+"")&&(O.innerHTML=g1),M&2&&d1!==(d1=$[1]("navigation.3.url"))&&r(O,"href",d1),M&2&&o1!==(o1=$[1]("navigation.4.text")+"")&&u1(_1,o1),M&2&&L1!==(L1=$[1]("navigation.4.url"))&&r(x,"href",L1),M&2&&Z1!==(Z1=$[1]("navigation.5.text")+"")&&(s1.innerHTML=Z1),M&2&&A1!==(A1=$[1]("navigation.5.url"))&&r(s1,"href",A1)},i:p1,o:p1,d($){$&&i(t)}}}function G2(a,t,o){let e,n=p1,s=()=>(n(),n=j1(v,m=>o(1,e=m)),v);a.$$.on_destroy.push(()=>n());const h=new Date;let v;return s({i:v}=z1()),[v,e,h]}class K2 extends k1{constructor(t){super(),C1(this,t,G2,W2,q1,{})}}function U2(a){let t,o,e,n,s,h,v,m,p,d,_,c,E=a[1]("navigation.0.text")+"",z,t1,h1,S,H,G=a[1]("navigation.1.text")+"",l1,r1,W,K,k,F=a[1]("navigation.2.text")+"",C,V,U,P,D,J=a[1]("navigation.3.text")+"",Y,v1,q,A,j=a[1]("navigation.4.text")+"",Q,X;return{c(){t=f("header"),o=f("div"),e=e1("svg"),n=e1("path"),s=e1("path"),h=e1("path"),v=e1("path"),m=L(),p=f("nav"),d=f("ul"),_=f("li"),c=f("a"),z=R(E),h1=L(),S=f("li"),H=f("a"),l1=R(G),W=L(),K=f("li"),k=f("a"),C=R(F),U=L(),P=f("li"),D=f("a"),v1=L(),q=f("li"),A=f("a"),Q=R(j),this.h()},l(b){t=g(b,"HEADER",{class:!0});var w=u(t);o=g(w,"DIV",{class:!0});var B=u(o);e=a1(B,"svg",{class:!0,xmlns:!0,width:!0,height:!0,fill:!0});var N=u(e);n=a1(N,"path",{fill:!0,d:!0}),u(n).forEach(i),s=a1(N,"path",{fill:!0,"fill-rule":!0,d:!0,"clip-rule":!0}),u(s).forEach(i),h=a1(N,"path",{fill:!0,"fill-rule":!0,d:!0,"clip-rule":!0}),u(h).forEach(i),v=a1(N,"path",{fill:!0,d:!0}),u(v).forEach(i),N.forEach(i),m=Z(B),p=g(B,"NAV",{class:!0});var f1=u(p);d=g(f1,"UL",{role:!0,class:!0});var I=u(d);_=g(I,"LI",{});var E1=u(_);c=g(E1,"A",{href:!0});var n1=u(c);z=y(n1,E),n1.forEach(i),E1.forEach(i),h1=Z(I),S=g(I,"LI",{});var O=u(S);H=g(O,"A",{href:!0});var g1=u(H);l1=y(g1,G),g1.forEach(i),O.forEach(i),W=Z(I),K=g(I,"LI",{});var d1=u(K);k=g(d1,"A",{href:!0});var V1=u(k);C=y(V1,F),V1.forEach(i),d1.forEach(i),U=Z(I),P=g(I,"LI",{});var i1=u(P);D=g(i1,"A",{href:!0});var x=u(D);x.forEach(i),i1.forEach(i),v1=Z(I),q=g(I,"LI",{});var o1=u(q);A=g(o1,"A",{href:!0});var _1=u(A);Q=y(_1,j),_1.forEach(i),o1.forEach(i),I.forEach(i),f1.forEach(i),B.forEach(i),w.forEach(i),this.h()},h(){r(n,"fill","#151E1A"),r(n,"d","M184.373 31.558v-.841l5.449-20.345h-2.083c-.673 0-1.185.19-1.536.568-.35.38-.589.954-.715 1.726-.126.771-.189 1.746-.189 2.924h-.8V9.53h8.584v.842l-5.449 20.345h1.957c.729 0 1.283-.175 1.662-.526.378-.365.631-.94.757-1.725.14-.8.211-1.852.211-3.156h.841v6.248h-8.689ZM177.049 32c-1.01 0-1.88-.308-2.609-.926-.729-.63-1.326-1.486-1.788-2.566-.463-1.08-.8-2.308-1.01-3.682a28.826 28.826 0 0 1-.316-4.334c0-1.88.154-3.514.463-4.902.309-1.403.729-2.56 1.262-3.472.533-.925 1.136-1.613 1.81-2.061.673-.463 1.374-.695 2.104-.695.841 0 1.584.267 2.23.8.645.519 1.178 1.227 1.599 2.125.434.883.757 1.886.967 3.008.211 1.122.316 2.28.316 3.472v.778c0 .238-.007.491-.021.757h-7.826v-.841h4.712c0-1.922-.056-3.57-.168-4.944-.112-1.389-.316-2.455-.61-3.198-.281-.744-.68-1.115-1.199-1.115-.505 0-.94.357-1.305 1.073-.365.715-.645 1.802-.841 3.26-.197 1.445-.295 3.283-.295 5.513 0 1.5.028 2.917.084 4.25.07 1.318.204 2.49.4 3.513.196 1.01.491 1.803.884 2.378.392.575.911.862 1.556.862.996 0 1.782-.273 2.357-.82.575-.547.961-1.122 1.157-1.725l.715.441c-.28.814-.82 1.53-1.62 2.146-.785.604-1.788.905-3.008.905ZM158.682 31.558v-.841h1.977V10.372h-1.977v-.841h5.049l.063 2.398c.028-.182.154-.477.379-.884.238-.406.568-.785.989-1.136.434-.364.953-.547 1.556-.547.702 0 1.277.253 1.726.758.448.49.785 1.15 1.01 1.977.238.828.357 1.747.357 2.756 0 .674-.119 1.2-.357 1.578-.225.365-.555.547-.989.547-.421 0-.751-.168-.989-.505-.225-.35-.337-.8-.337-1.346 0-.35.056-.66.169-.926.126-.28.245-.554.357-.82.112-.28.169-.596.169-.947 0-.73-.134-1.262-.4-1.599-.253-.337-.582-.505-.989-.505-.519 0-.982.253-1.389.758-.392.504-.701 1.136-.925 1.893a8.432 8.432 0 0 0-.316 2.272v15.464h2.041v.841h-7.174ZM149.885 32c-.799 0-1.529-.19-2.188-.568-.659-.379-1.178-.96-1.557-1.746-.378-.786-.568-1.782-.568-2.988 0-1.332.246-2.433.737-3.303a7.838 7.838 0 0 1 1.851-2.188 22.022 22.022 0 0 1 2.23-1.599c.744-.477 1.361-.975 1.852-1.494.504-.518.757-1.15.757-1.893 0-1.066-.07-2.048-.21-2.946-.141-.897-.386-1.613-.737-2.145-.35-.547-.848-.82-1.494-.82-.673 0-1.262.245-1.767.735-.491.491-.736 1.066-.736 1.726 0 .322.049.603.147.841.112.239.211.484.295.736.098.239.147.534.147.884 0 .505-.112.926-.337 1.262-.224.323-.561.484-1.01.484-.448 0-.785-.189-1.009-.568-.225-.378-.337-.904-.337-1.578 0-.995.21-1.907.631-2.735a5.129 5.129 0 0 1 1.809-1.977c.786-.505 1.684-.758 2.693-.758.996 0 1.873.253 2.63.758.758.49 1.354 1.262 1.789 2.314.434 1.038.652 2.391.652 4.06v12.75c0 .575.07.975.21 1.2.154.224.358.336.61.336.197 0 .379-.042.547-.126.183-.099.316-.19.4-.274l.442.715c-.154.169-.442.33-.863.484-.421.169-.925.253-1.515.253-.518 0-.981-.084-1.388-.253a2.177 2.177 0 0 1-.968-.757c-.238-.337-.372-.75-.4-1.241-.07.294-.231.63-.484 1.01-.252.378-.61.708-1.072.988-.463.28-1.059.421-1.789.421Zm.947-1.325c.421 0 .792-.155 1.115-.463.337-.323.596-.709.778-1.157.183-.45.274-.87.274-1.263V18.22c-.042.392-.274.813-.694 1.262-.421.435-.905.947-1.452 1.536-.533.575-1.003 1.29-1.41 2.146-.406.841-.61 1.872-.61 3.092 0 1.403.148 2.49.442 3.261.309.772.828 1.158 1.557 1.158ZM138.141 31.642l-4.018-21.27h-1.662v-.841h6.543v.841h-1.515l2.399 14.37 2.398-14.37h-1.494v-.841h3.998v.841h-1.557l-3.829 21.27h-1.263ZM125.281 31.558v-.841h1.81V.842h-1.81V0h4.944v30.717h1.81v.841h-6.754ZM110.781 31.558v-.841h1.831l4.249-28.676h1.389l4.397 28.676h1.936v.841h-7.196v-.841h1.831l-2.84-20.829h.105l-2.967 20.829h1.662v.841h-4.397ZM114 24.721v-.82h4.923v.82H114Z"),r(s,"fill","#4F6A5C"),r(s,"fill-rule","evenodd"),r(s,"d","M101.021 17.456c-.104.006-.21.014-.317.024-1.414.127-2.555.574-3.423 1.34-.855.766-1.227 1.767-1.115 3.005.111 1.237.638 2.113 1.58 2.627.885.482 1.976.682 3.275.6v-.121c-.921.042-1.692-.176-2.313-.655-.671-.519-1.06-1.372-1.167-2.56-.108-1.198.145-2.159.76-2.882.612-.734 1.43-1.147 2.454-1.24.09-.007.179-.013.266-.016v-.122Z"),r(s,"clip-rule","evenodd"),r(h,"fill","#151E1A"),r(h,"fill-rule","evenodd"),r(h,"d","M104.567 20.21a5.046 5.046 0 1 1-9.879 2.063 5.046 5.046 0 0 1 9.879-2.063Zm-4.252 4.325a3.364 3.364 0 1 0-1.374-6.587 3.364 3.364 0 0 0 1.374 6.587Z"),r(h,"clip-rule","evenodd"),r(v,"fill","#4F6A5C"),r(v,"d","M72.822 31.558v-.841h1.999V10.372h-1.999v-.841h5.113v2.756c.126-.407.336-.835.63-1.284.295-.463.681-.848 1.158-1.157.49-.322 1.08-.484 1.767-.484.66 0 1.29.162 1.894.484.617.323 1.122.947 1.514 1.873.407.911.61 2.272.61 4.081v14.917h1.936v.841H80.67v-.841h1.683V16.179c0-1.936-.154-3.338-.463-4.208-.309-.883-.8-1.325-1.473-1.325-.322 0-.63.14-.925.42-.295.281-.555.646-.779 1.095a7.359 7.359 0 0 0-.547 1.41c-.126.49-.19.953-.19 1.388v15.758h1.684v.841h-6.838ZM66.338 32c-1.01 0-1.88-.308-2.609-.926-.73-.63-1.325-1.486-1.788-2.566-.463-1.08-.8-2.308-1.01-3.682a28.906 28.906 0 0 1-.316-4.334c0-1.88.154-3.514.463-4.902.309-1.403.73-2.56 1.262-3.472.533-.925 1.136-1.613 1.81-2.061.673-.463 1.374-.695 2.104-.695a3.4 3.4 0 0 1 2.23.8c.645.519 1.178 1.227 1.599 2.125.434.883.757 1.886.968 3.008.21 1.122.315 2.28.315 3.472v.778c0 .238-.007.491-.021.757h-7.826v-.841h4.712c0-1.922-.056-3.57-.168-4.944-.112-1.389-.316-2.455-.61-3.198-.28-.744-.68-1.115-1.2-1.115-.504 0-.94.357-1.304 1.073-.364.715-.645 1.802-.841 3.26-.197 1.445-.295 3.283-.295 5.513 0 1.5.028 2.917.084 4.25.07 1.318.204 2.49.4 3.513.196 1.01.49 1.803.884 2.378.392.575.911.862 1.556.862.996 0 1.782-.273 2.357-.82.575-.547.96-1.122 1.157-1.725l.715.441c-.28.814-.82 1.53-1.62 2.146-.785.604-1.788.905-3.008.905ZM38.492 31.558v-.841h1.852V10.372h-1.852v-.841h4.965v3.05c.07-.364.232-.792.484-1.283a3.84 3.84 0 0 1 1.115-1.326c.505-.378 1.143-.568 1.915-.568.785 0 1.43.204 1.935.61.505.393.884.877 1.136 1.452.253.575.386 1.122.4 1.641a5.888 5.888 0 0 1 .631-1.683 4.126 4.126 0 0 1 1.263-1.43c.547-.393 1.213-.59 1.998-.59 1.207 0 2.118.498 2.735 1.494.632.996.947 2.272.947 3.83v15.989h1.725v.841h-6.5v-.841h1.62v-13.55c0-1.332-.036-2.468-.106-3.408-.056-.94-.21-1.662-.463-2.167-.238-.505-.63-.757-1.178-.757-.49 0-.918.266-1.283.8-.35.518-.624 1.164-.82 1.935a9.671 9.671 0 0 0-.316 2.251v14.896h1.62v.841H45.96v-.841h1.578v-13.55c0-1.991-.091-3.54-.274-4.649-.182-1.122-.68-1.683-1.493-1.683-.491 0-.905.273-1.242.82-.336.533-.589 1.186-.757 1.957a11.52 11.52 0 0 0-.274 2.23v14.875h1.578v.841h-6.585ZM26.25 31.558v-.841h1.978V10.372H26.25v-.841h5.05l.062 2.398c.029-.182.155-.477.38-.884.238-.406.567-.785.988-1.136.435-.364.954-.547 1.557-.547.701 0 1.276.253 1.725.758.449.49.785 1.15 1.01 1.977.238.828.358 1.747.358 2.756 0 .674-.12 1.2-.358 1.578-.225.365-.554.547-.989.547-.42 0-.75-.168-.989-.505-.224-.35-.336-.8-.336-1.346 0-.35.056-.66.168-.926.126-.28.245-.554.358-.82a2.53 2.53 0 0 0 .168-.947c0-.73-.133-1.262-.4-1.599-.252-.337-.582-.505-.989-.505-.519 0-.981.253-1.388.758-.393.504-.701 1.136-.926 1.893a8.46 8.46 0 0 0-.316 2.272v15.464h2.041v.841H26.25ZM17.102 32c-.8 0-1.529-.19-2.188-.568-.66-.379-1.178-.96-1.557-1.746s-.568-1.782-.568-2.988c0-1.332.245-2.433.736-3.303a7.834 7.834 0 0 1 1.852-2.188 22.034 22.034 0 0 1 2.23-1.599c.743-.477 1.36-.975 1.851-1.494.505-.518.758-1.15.758-1.893 0-1.066-.07-2.048-.21-2.946-.14-.897-.386-1.613-.737-2.145-.35-.547-.849-.82-1.494-.82-.673 0-1.262.245-1.767.735-.49.491-.736 1.066-.736 1.726 0 .322.049.603.147.841.112.239.21.484.294.736.099.239.148.534.148.884 0 .505-.113.926-.337 1.262-.224.323-.56.484-1.01.484-.449 0-.785-.189-1.01-.568-.224-.378-.336-.904-.336-1.578 0-.995.21-1.907.63-2.735a5.124 5.124 0 0 1 1.81-1.977c.786-.505 1.683-.758 2.693-.758.996 0 1.873.253 2.63.758.758.49 1.354 1.262 1.788 2.314.435 1.038.653 2.391.653 4.06v12.75c0 .575.07.975.21 1.2.154.224.358.336.61.336.196 0 .379-.042.547-.126.182-.099.316-.19.4-.274l.442.715c-.155.169-.442.33-.863.484-.42.169-.926.253-1.515.253-.519 0-.982-.084-1.388-.253a2.175 2.175 0 0 1-.968-.757c-.239-.337-.372-.75-.4-1.241-.07.294-.231.63-.484 1.01-.252.378-.61.708-1.073.988-.463.28-1.059.421-1.788.421Zm.947-1.325c.42 0 .792-.155 1.115-.463.336-.323.596-.709.778-1.157.183-.45.274-.87.274-1.263V18.22c-.042.392-.274.813-.695 1.262-.42.435-.904.947-1.451 1.536-.533.575-1.003 1.29-1.41 2.146-.407.841-.61 1.872-.61 3.092 0 1.403.147 2.49.442 3.261.308.772.827 1.158 1.557 1.158ZM6.69 31.979c-1.963 0-3.57-1.283-4.818-3.85C.624 25.562 0 21.81 0 16.873c0-1.81.133-3.612.4-5.407.28-1.81.701-3.45 1.262-4.923.561-1.487 1.27-2.672 2.125-3.555.87-.898 1.886-1.347 3.05-1.347.828 0 1.536.28 2.126.842.603.56 1.066 1.269 1.388 2.125.323.841.484 1.69.484 2.545 0 .702-.112 1.235-.337 1.6-.224.35-.56.525-1.01.525-.49 0-.848-.161-1.072-.484-.21-.322-.316-.778-.316-1.367 0-.407.063-.758.19-1.052.14-.295.273-.596.399-.905.14-.308.21-.68.21-1.115 0-.49-.154-.905-.462-1.241-.309-.35-.667-.526-1.073-.526-.561 0-1.06.315-1.494.947-.435.617-.807 1.451-1.115 2.503a28.706 28.706 0 0 0-.779 3.45 47.868 47.868 0 0 0-.441 3.809 46.325 46.325 0 0 0-.148 3.534c0 1.529.056 3.002.169 4.418.112 1.403.266 2.7.462 3.892.21 1.193.463 2.238.758 3.135.308.884.652 1.571 1.03 2.062.393.49.821.736 1.284.736.533 0 1.01-.189 1.43-.568.436-.392.8-.87 1.095-1.43a7.825 7.825 0 0 0 .652-1.641l.778.42a9.47 9.47 0 0 1-.989 2.041 5.55 5.55 0 0 1-1.451 1.515c-.547.379-1.185.568-1.915.568Z"),r(e,"class","logo svelte-ycqg70"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"width","194"),r(e,"height","32"),r(e,"fill","none"),r(c,"href",t1=a[1]("navigation.0.url")),r(H,"href",r1=a[1]("navigation.1.url")),r(k,"href",V=a[1]("navigation.2.url")),r(D,"href",Y=a[1]("navigation.3.url")),r(A,"href",X=a[1]("navigation.4.url")),r(d,"role","list"),r(d,"class","cluster"),r(p,"class"," svelte-ycqg70"),r(o,"class","repel sm:px-m"),r(t,"class","wrapper pt-m-l svelte-ycqg70")},m(b,w){c1(b,t,w),l(t,o),l(o,e),l(e,n),l(e,s),l(e,h),l(e,v),l(o,m),l(o,p),l(p,d),l(d,_),l(_,c),l(c,z),l(d,h1),l(d,S),l(S,H),l(H,l1),l(d,W),l(d,K),l(K,k),l(k,C),l(d,U),l(d,P),l(P,D),D.innerHTML=J,l(d,v1),l(d,q),l(q,A),l(A,Q)},p(b,[w]){w&2&&E!==(E=b[1]("navigation.0.text")+"")&&u1(z,E),w&2&&t1!==(t1=b[1]("navigation.0.url"))&&r(c,"href",t1),w&2&&G!==(G=b[1]("navigation.1.text")+"")&&u1(l1,G),w&2&&r1!==(r1=b[1]("navigation.1.url"))&&r(H,"href",r1),w&2&&F!==(F=b[1]("navigation.2.text")+"")&&u1(C,F),w&2&&V!==(V=b[1]("navigation.2.url"))&&r(k,"href",V),w&2&&J!==(J=b[1]("navigation.3.text")+"")&&(D.innerHTML=J),w&2&&Y!==(Y=b[1]("navigation.3.url"))&&r(D,"href",Y),w&2&&j!==(j=b[1]("navigation.4.text")+"")&&u1(Q,j),w&2&&X!==(X=b[1]("navigation.4.url"))&&r(A,"href",X)},i:p1,o:p1,d(b){b&&i(t)}}}function J2(a,t,o){let e,n=p1,s=()=>(n(),n=j1(h,v=>o(1,e=v)),h);a.$$.on_destroy.push(()=>n());let h;return s({i:h}=z1()),[h,e]}class Y2 extends k1{constructor(t){super(),C1(this,t,J2,U2,q1,{})}}function f2(a){let t,o,e,n,s,h,v,m,p;n=new Y2({});const d=a[5].default,_=Z2(d,a,a[4],null);return m=new K2({}),{c(){t=f("a"),o=R("Skip to content"),e=L(),o2(n.$$.fragment),s=L(),h=f("main"),_&&_.c(),v=L(),o2(m.$$.fragment),this.h()},l(c){t=g(c,"A",{class:!0,href:!0});var E=u(t);o=y(E,"Skip to content"),E.forEach(i),e=Z(c),s2(n.$$.fragment,c),s=Z(c),h=g(c,"MAIN",{class:!0,tabindex:!0,id:!0});var z=u(h);_&&_.l(z),z.forEach(i),v=Z(c),s2(m.$$.fragment,c),this.h()},h(){r(t,"class","skip-link button"),r(t,"href","#main-content"),r(h,"class","mt-m-xl"),r(h,"tabindex","-1"),r(h,"id","main-content")},m(c,E){c1(c,t,E),l(t,o),c1(c,e,E),c2(n,c,E),c1(c,s,E),c1(c,h,E),_&&_.m(h,null),c1(c,v,E),c2(m,c,E),p=!0},p(c,E){_&&_.p&&(!p||E&16)&&A2(_,d,c,c[4],p?R2(d,c[4],E,null):I2(c[4]),null)},i(c){p||(w1(n.$$.fragment,c),w1(_,c),w1(m.$$.fragment,c),p=!0)},o(c){$1(n.$$.fragment,c),$1(_,c),$1(m.$$.fragment,c),p=!1},d(c){c&&i(t),c&&i(e),u2(n,c),c&&i(s),c&&i(h),_&&_.d(c),c&&i(v),u2(m,c)}}}function Q2(a){let t,o,e=a[0]&&f2(a);return{c(){e&&e.c(),t=i2()},l(n){e&&e.l(n),t=i2()},m(n,s){e&&e.m(n,s),c1(n,t,s),o=!0},p(n,[s]){n[0]?e?(e.p(n,s),s&1&&w1(e,1)):(e=f2(n),e.c(),w1(e,1),e.m(t.parentNode,t)):e&&(y2(),$1(e,1,1,()=>{e=null}),L2())},i(n){o||(w1(e),o=!0)},o(n){$1(e),o=!1},d(n){e&&e.d(n),n&&i(t)}}}function X2(a,t,o){let e,n=p1,s=()=>(n(),n=j1(d,_=>o(0,e=_)),d);a.$$.on_destroy.push(()=>n());let{$$slots:h={},$$scope:v}=t;var m;let{data:p}=t,d;return b2(M2(p)),s({language:d}=z1()),a.$$set=_=>{"data"in _&&o(2,p=_.data),"$$scope"in _&&o(4,v=_.$$scope)},a.$$.update=()=>{a.$$.dirty&9&&e&&(o(3,m=document.body.parentElement)===null||m===void 0||m.setAttribute("lang",e),localStorage.setItem(g2,e))},[e,d,p,m,v,h]}class l3 extends k1{constructor(t){super(),C1(this,t,X2,Q2,q1,{data:2})}}export{l3 as component,t3 as universal};
