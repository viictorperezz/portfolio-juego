import{Ar as e,B as t,Bn as n,D as r,Et as i,Gt as a,Hn as o,K as s,Mr as c,Mt as l,Sr as u,Yn as d,ft as f,g as p,mr as m,tr as h,u as g}from"./three.core-BqmPvaUK.js";import{t as _}from"./BufferGeometryUtils-CCzhf6h_.js";var v=new m,y=new Map;function b(e,{srgb:t=!1}={}){if(y.has(e))return y.get(e);let n=v.load(`./textures/${e}.webp`);return n.wrapS=n.wrapT=o,n.colorSpace=t?d:``,n.anisotropy=8,y.set(e,n),n}var x=e=>({map:b(`${e}_diff`,{srgb:!0}),normalMap:b(`${e}_nor`),roughnessMap:b(`${e}_rough`)});function S(e,{color:t=`#ffffff`,normalScale:n=1,roughness:r=1}={}){let i=new l({...x(e),color:t,roughness:r});return i.normalScale.set(n,n),i}var C=new Set([`primary`,`secondary`,`tertiary`,`residential`,`unclassified`,`living_street`,`service`]),w=new Set([`pedestrian`,`footway`,`cycleway`,`steps`,`path`]);function T(e){return(t,n)=>{let r=(t-e.x0)/e.step,i=(n-e.z0)/e.step,a=Math.max(0,Math.min(e.cols-2,Math.floor(r))),o=Math.max(0,Math.min(e.rows-2,Math.floor(i))),s=Math.max(0,Math.min(1,r-a)),c=Math.max(0,Math.min(1,i-o)),l=(t,n)=>e.h[n*e.cols+t];return(l(a,o)*(1-s)+l(a+1,o)*s)*(1-c)+(l(a,o+1)*(1-s)+l(a+1,o+1)*s)*c}}function E(e,n,r,i=.03,a=2){let o=[];for(let t=0;t<e.length-1;t++){let[n,r]=e[t],[i,s]=e[t+1],c=Math.max(1,Math.ceil(Math.hypot(i-n,s-r)/a));for(let e=0;e<c;e++)o.push([n+(i-n)*e/c,r+(s-r)*e/c])}o.push(e.at(-1));let s=[],c=[],l=[],u=0;o.forEach(([e,t],a)=>{let[d,f]=o[Math.max(0,a-1)],[p,m]=o[Math.min(o.length-1,a+1)],h=p-d,g=m-f,_=Math.hypot(h,g)||1;h/=_,g/=_,a>0&&(u+=Math.hypot(e-o[a-1][0],t-o[a-1][1]));let v=-g*n/2,y=h*n/2;if(s.push(e+v,r(e+v,t+y)+i,t+y,e-v,r(e-v,t-y)+i,t-y),c.push(0,u,n,u),a>0){let e=a*2;l.push(e-2,e,e-1,e-1,e,e+1)}});let d=new g;return d.setAttribute(`position`,new t(s,3)),d.setAttribute(`uv`,new t(c,2)),d.setIndex(l),d.computeVertexNormals(),d}function D(e,t){return e.map(([n,r],i)=>{let[a,o]=e[Math.max(0,i-1)],[s,c]=e[Math.min(e.length-1,i+1)],l=Math.hypot(s-a,c-o)||1;return[n-(c-o)/l*t,r+(s-a)/l*t]})}var O=(e,t,n,r,i,a)=>{let o=i-n,s=a-r,c=o*o+s*s,l=c?Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/c)):0;return Math.hypot(e-n-l*o,t-r-l*s)};function k(e,t=16){let n=new Map,r=(e,t)=>e*100003+t;return e.forEach((e,i)=>{for(let a=0;a<e.p.length-1;a++){let[o,s]=e.p[a],[c,l]=e.p[a+1],u=e.w/2+2,d=[i,o,s,c,l,e.w/2];for(let e=Math.floor((Math.min(o,c)-u)/t);e<=Math.floor((Math.max(o,c)+u)/t);e++)for(let i=Math.floor((Math.min(s,l)-u)/t);i<=Math.floor((Math.max(s,l)+u)/t);i++)n.has(r(e,i))||n.set(r(e,i),[]),n.get(r(e,i)).push(d)}}),(e,i,a,o=0)=>{for(let[s,c,l,u,d,f]of n.get(r(Math.floor(e/t),Math.floor(i/t)))??[])if(s!==a&&O(e,i,c,l,u,d)<f+o)return!0;return!1}}function A(e,t){let n=e.w/2;return(r,i)=>{let a=null;for(let t=0;t<e.p.length-1;t++){let[n,o]=e.p[t],[s,c]=e.p[t+1],l=s-n,u=c-o,d=l*l+u*u;if(!d)continue;let f=Math.max(0,Math.min(1,((r-n)*l+(i-o)*u)/d)),p=n+l*f,m=o+u*f,h=Math.hypot(r-p,i-m);if(!a||h<a.d){let e=Math.sqrt(d);a={d:h,cx:p,cz:m,nx:-u/e,nz:l/e}}}if(!a)return t(r,i)+.05;let{cx:o,cz:s,nx:c,nz:l}=a,u=(Math.max(-n,Math.min(n,(r-o)*c+(i-s)*l))+n)/(2*n);return t(o-c*n,s-l*n)*(1-u)+t(o+c*n,s+l*n)*u+.05}}function j(e,t,n=1){let r=[],i=[],a=()=>{i.length>1&&r.push(i),i=[]};for(let r=0;r<e.length-1;r++){let[o,s]=e[r],[c,l]=e[r+1],u=Math.max(1,Math.ceil(Math.hypot(c-o,l-s)/n));for(let e=0;e<u;e++){let n=o+(c-o)*e/u,r=s+(l-s)*e/u;t(n,r)?i.push([n,r]):a()}}return t(...e.at(-1))&&i.push(e.at(-1)),a(),r}function M(e,n,r,i){let a=.25,o=[],s=[],c=e.length;e.forEach(([t,l],u)=>{let[d,f]=e[Math.max(0,u-1)],[p,m]=e[Math.min(c-1,u+1)],h=Math.hypot(p-d,m-f)||1,g=-(m-f)/h*i,_=(p-d)/h*i,v=t-g*a/2,y=l-_*a/2,b=t+g*a/2,x=l+_*a/2,S=r(v,y)-.01,C=Math.max(S,n(b,x))+.14;if(o.push(v,S,y,v,C,y,b,C,x,b,n(b,x)-.02,x),u>0){let e=(u-1)*4,t=u*4;for(let n=0;n<3;n++)i>0?s.push(e+n,e+n+1,t+n,e+n+1,t+n+1,t+n):s.push(e+n,t+n,e+n+1,e+n+1,t+n,t+n+1)}});let l=new g;l.setAttribute(`position`,new t(o,3)),l.setIndex(s);let u=l.toNonIndexed();return u.computeVertexNormals(),u}function N(e){let t=e.roads.filter(e=>C.has(e.t)&&e.p.length>=2),n=t.filter(e=>e.j),r=[];for(let i of n.length?t:[])if(!i.j)for(let t of[!1,!0]){let a=t?[...i.p].reverse():i.p,o=n.find(e=>e.p.some((t,n)=>n<e.p.length-1&&O(a[0][0],a[0][1],...e.p[n],...e.p[n+1])<1));if(!o||i.o&&i.o===1!==t)continue;let[s,c]=a[0],[l,u]=a[1],d=Math.hypot(l-s,u-c);if(d<o.w/2+3)continue;let f=(l-s)/d,p=(u-c)/d,m=o.w/2+1.2,h=e.drive===`left`?-1:1;r.push({road:i,x:s+f*m,z:c+p*m,ux:f,uz:p,nx:p*h,nz:-f*h,s0:i.o?-i.w/2+.3:.15,s1:i.w/2-.3})}return r}function P(e){let t=e.roads.filter(e=>C.has(e.t)&&e.p.length>=2),n=[];for(let[r,i]of e.points.crossings??[]){let e=null;for(let n of t)for(let t=0;t<n.p.length-1;t++){let[a,o]=n.p[t],[s,c]=n.p[t+1],l=s-a,u=c-o,d=l*l+u*u;if(!d)continue;let f=Math.max(0,Math.min(1,((r-a)*l+(i-o)*u)/d)),p=Math.hypot(r-a-f*l,i-o-f*u);(!e||p<e.d)&&(e={d:p,road:n,x:a+l*f,z:o+u*f,ux:l/Math.sqrt(d),uz:u/Math.sqrt(d)})}e&&e.d<=3&&n.push(e)}return n}function F(e,t,n,r=()=>!0){for(let i of N(e)){if(!r(i.x,i.z))continue;let e=A(i.road,t);for(let t=i.s0;t+.6<=i.s1;t+=1){let r=[i.x+i.nx*t,i.z+i.nz*t],a=[i.x+i.nx*(t+.6),i.z+i.nz*(t+.6)];n.push(E([r,a],.4,e,.025,1))}}}function I(e,t,i){let a=t.full??t,o=(i.cols-1)*i.step,s=(i.rows-1)*i.step,l=Math.ceil(o/4)+1,d=Math.ceil(s/4)+1,m=new Uint8Array(l*d),h=e=>(e-i.x0)/4,g=e=>(e-i.z0)/4,_=e=>{let t=1/0,n=-1/0;for(let[,r]of e)t=Math.min(t,g(r)),n=Math.max(n,g(r));for(let r=Math.max(0,Math.ceil(t));r<=Math.min(d-1,Math.floor(n));r++){let t=[];for(let n=0;n<e.length;n++){let[i,a]=e[n],[o,s]=e[(n+1)%e.length],c=g(a),l=g(s);c<=r!=l<=r&&t.push(h(i+(r-c)/(l-c)*(o-i)))}t.sort((e,t)=>e-t);for(let e=0;e+1<t.length;e+=2)for(let n=Math.max(0,Math.ceil(t[e]));n<=Math.min(l-1,Math.floor(t[e+1]));n++)m[r*l+n]=255}},v=(e,t,n=!1)=>{let r=n?e.length:e.length-1;for(let n=0;n<r;n++){let[r,a]=e[n],[o,s]=e[(n+1)%e.length],c=Math.max(0,Math.floor(h(Math.min(r,o)-t))),u=Math.min(l-1,Math.ceil(h(Math.max(r,o)+t))),f=Math.max(0,Math.floor(g(Math.min(a,s)-t))),p=Math.min(d-1,Math.ceil(g(Math.max(a,s)+t)));for(let e=f;e<=p;e++)for(let n=c;n<=u;n++)m[e*l+n]!==255&&O(i.x0+n*4,i.z0+e*4,r,a,o,s)<t&&(m[e*l+n]=255)}};for(let e of a.roads)v(e.p,e.w/2+ +!!C.has(e.t));for(let e of[...a.parts,...a.horizon??[]])_(e.p);for(let e of a.areas)_(e.p);for(let e of a.rail??[])v(e,1.5);let y=m.slice();for(let e=0;e<d;e++)for(let t=0;t<l;t++)if(!y[e*l+t])for(let n=-1;n<=1&&!m[e*l+t];n++){let r=e+n;if(!(r<0||r>=d))for(let n=-1;n<=1;n++){let i=t+n;if(i>=0&&i<l&&y[r*l+i]){m[e*l+t]=255;break}}}let x=new r(m,l,d,n,u);x.magFilter=x.minFilter=f,x.unpackAlignment=1,x.wrapS=x.wrapT=p,x.needsUpdate=!0;let S=b(`grass_diff`,{srgb:!0});e.onBeforeCompile=e=>{e.uniforms.uLandMask={value:x},e.uniforms.uLandGrass={value:S},e.uniforms.uLandBox={value:new c(i.x0-2,i.z0-2,l*4,d*4)},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vLandXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vLandXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vLandXZ;
uniform sampler2D uLandMask;
uniform sampler2D uLandGrass;
uniform vec4 uLandBox;`).replace(`#include <map_fragment>`,`#include <map_fragment>
        {
          vec2 lq = (vLandXZ - uLandBox.xy) / uLandBox.zw;
          float urb = texture2D(uLandMask, lq).r;
          // la textura de acera es beis: casi sin color, queda un gris claro de baldosa (como los pavimentos de las plazas)
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114))), 0.8);
          // hierba seca: dos escalas para que no se note la repetición, tinte pajizo y algo de tierra
          vec3 g1 = texture2D(uLandGrass, vLandXZ * 0.31).rgb, g2 = texture2D(uLandGrass, vLandXZ * 0.047).rgb;
          vec3 dry = mix(g1, g2, 0.45) * vec3(1.12, 1.0, 0.66);
          dry = mix(dry, vec3(dot(dry, vec3(0.3, 0.55, 0.15))), 0.4) * 0.82; // apagado: rastrojo, no oro
          dry = mix(dry, vec3(0.3, 0.25, 0.18), 0.35 * smoothstep(0.3, 0.7, g2.g));
          diffuseColor.rgb = mix(dry, diffuseColor.rgb, smoothstep(0.25, 0.75, urb));
        }`)},e.customProgramCacheKey=()=>`terreno-mascara`}function L(n,r,i){let a=n.map(([t,n])=>new e(t,n)),o=h.triangulateShape(a,[]),s=[],c=[],l=([e,t])=>{s.push(e,r(e,t)+i,t),c.push(e,t)};for(let e of o){let[t,i,a]=e.map(e=>n[e]),o=Math.max(Math.hypot(t[0]-i[0],t[1]-i[1]),Math.hypot(i[0]-a[0],i[1]-a[1]),Math.hypot(a[0]-t[0],a[1]-t[1])),s=r(...t),c=r(...i),u=r(...a),d=0;for(let[e,n]of[[1/3,1/3],[.5,0],[0,.5],[.5,.5],[.25,.25],[.6,.2],[.2,.6]]){let o=1-e-n,l=t[0]*o+i[0]*e+a[0]*n,f=t[1]*o+i[1]*e+a[1]*n;d=Math.max(d,Math.abs(r(l,f)-(s*o+c*e+u*n)))}let f=d<.05?1:Math.min(32,Math.max(1,Math.ceil(o/5))),p=(e,n)=>{let r=f-e-n;return[(t[0]*r+i[0]*e+a[0]*n)/f,(t[1]*r+i[1]*e+a[1]*n)/f]};for(let e=0;e<f;e++)for(let t=0;t<f-e;t++)l(p(e,t)),l(p(e+1,t)),l(p(e,t+1)),e+t<f-1&&(l(p(e+1,t)),l(p(e+1,t+1)),l(p(e,t+1)))}let u=new g;if(u.setAttribute(`position`,new t(s,3)),u.setAttribute(`uv`,new t(c,2)),u.computeVertexNormals(),u.attributes.normal.getY(0)<0){let e=u.attributes.position.array,t=u.attributes.uv.array;for(let t=0;t<e.length;t+=9)for(let n=0;n<3;n++)[e[t+3+n],e[t+6+n]]=[e[t+6+n],e[t+3+n]];for(let e=0;e<t.length;e+=6)for(let n=0;n<2;n++)[t[e+2+n],t[e+4+n]]=[t[e+4+n],t[e+2+n]];u.computeVertexNormals()}return u}var R=(e,t)=>{let n=e.attributes.uv;for(let e=0;e<n.count;e++)n.setXY(e,n.getX(e)/t,n.getY(e)/t);return e};function z(e,t,n={}){let r=new s,o=e.terrain,c=o.x0+(o.cols-1)*o.step,u=o.z0+(o.rows-1)*o.step,d=S(`sidewalk`,{color:`#cfcdc8`});I(d,e,o);let f=([e,n,r,s],l,f=0,p=null)=>{e=Math.max(o.x0,e),n=Math.max(o.z0,n),r=Math.min(c,r),s=Math.min(u,s);let m=Math.max(1,Math.round((r-e)/l)),h=Math.max(1,Math.round((s-n)/l)),g=new a(r-e,s-n,m,h).rotateX(-Math.PI/2).translate((e+r)/2,0,(n+s)/2),_=g.attributes.position,v=g.attributes.uv;for(let e=0;e<_.count;e++)_.setY(e,t(_.getX(e),_.getZ(e))-f),v.setXY(e,_.getX(e)/2.5,_.getZ(e)/2.5);if(p){let e=g.index.array,t=[];for(let n=0;n<e.length;n+=6){let r=e[n];p(_.getX(r)+l/2,_.getZ(r)+l/2)||t.push(...e.subarray(n,n+6))}g.setIndex(t)}g.computeVertexNormals();let y=new i(g,d);return y.receiveShadow=!0,y.name=`terrain`,y},p=n.patches;if(p?.length){for(let e of p)r.add(f(e,o.step));let e=f([o.x0,o.z0,c,u],24,.6,(e,t)=>p.some(([n,r,i,a])=>e>n+24&&e<i-24&&t>r+24&&t<a-24));e.receiveShadow=!1,r.add(e)}else r.add(f([o.x0,o.z0,c,u],o.step));let m={pedestrian:[],park:[],grass:[],parking:[]};for(let n of e.areas)if(m[n.t])try{m[n.t].push(L(n.p,t,n.t===`pedestrian`?.04:.05))}catch{}let h={pedestrian:[S(`granite`,{color:`#f3f1ec`}),2.4],park:[S(`grass`,{color:`#a9bd7a`}),3],grass:[S(`grass`,{color:`#a9bd7a`}),3],parking:[S(`asphalt`,{color:`#a7a7a7`}),4]};for(let[e,t]of Object.entries(m)){if(!t.length)continue;let[n,a]=h[e],o=new i(R(_(t),a),n);o.receiveShadow=!0,r.add(o)}let g=e.roads.filter(e=>C.has(e.t)&&e.p.length>=2),v=k(g),y=e.points.crossings??[],b=(e,t,n)=>y.some(([r,i])=>Math.abs(r-e)<n&&Math.abs(i-t)<n&&Math.hypot(r-e,i-t)<n),x=[],T=[],O=[],N=[],z=[],B=n.pavedAt??null,V=(e,t)=>!B||!B(e,t);g.forEach((e,n)=>{if(!B||e.p.every(([e,t])=>V(e,t)))x.push(R(E(e.p,e.w,t,.05),4));else for(let n of j(e.p,V))x.push(R(E(n,e.w,t,.05),4));let r=A(e,t);for(let i of[1,-1])for(let a of j(D(e.p,i*(e.w/2+.12)),(e,t)=>!v(e,t,n,.2)&&V(e,t)))T.push(M(a,t,r,i));if(e.w>=6&&!e.o&&!e.j&&e.t!==`service`)for(let t of j(e.p,(e,t)=>!v(e,t,n,1.5)&&!b(e,t,3.2)&&V(e,t))){let e=E(t,.15,r,.02,1),n=e.attributes.uv;for(let e=0;e<n.count;e++)n.setY(e,n.getY(e)/7);O.push(e)}});for(let n of e.roads)w.has(n.t)&&n.p.length>=2&&N.push(R(E(n.p,n.w,t,.035),3));F(e,t,z,V);let H=S(`asphalt`,{color:`#a7a7a7`});H.polygonOffset=!0,H.polygonOffsetFactor=-1;let U=(e,t)=>{if(!e.length)return null;let n=new i(_(e),t);return n.receiveShadow=!0,r.add(n),n};U(N,d),U(x,H),U(T,new l({color:`#8f8c86`,roughness:.9}));let W=()=>Object.assign(new l({color:`#efeee8`,roughness:.62}),{polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),G=W();G.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vAlong;`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
vAlong = uv.y;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vAlong;`).replace(`#include <map_fragment>`,`if (fract(vAlong) > 0.43) discard;`)},U(O,G);for(let{road:n,x:r,z:i,ux:a,uz:o}of P(e)){let e=A(n,t),s=n.w>=7?4:3,c=Math.floor((n.w-.6)/1);for(let t=0;t<c;t++){let n=(t-(c-1)/2)*1,l=r-o*n,u=i+a*n;z.push(E([[l-a*s/2,u-o*s/2],[l+a*s/2,u+o*s/2]],.5,e,.025,1))}}U(z,W());let K=[],q=[];for(let n of e.rail){K.push(R(E(n,3.2,t,.06),2));for(let e of[-.72,.72])q.push(E(D(n,e),.08,t,.2))}return U(K,new l({color:`#7d756c`,roughness:1})),U(q,new l({color:`#5a5550`,metalness:.8,roughness:.35})),{group:r,terrain:r.getObjectByName(`terrain`)}}function B(){let e=new l({roughness:.9,metalness:0});e.normalMap=b(`brick_red_nor`),e.normalScale.set(.8,.8);let t={tBrickR:{value:b(`brick_red_diff`,{srgb:!0})},tBrickY:{value:b(`brick_yellow_diff`,{srgb:!0})},tPlasterB:{value:b(`plaster_beige_diff`,{srgb:!0})},tPlasterW:{value:b(`plaster_white_diff`,{srgb:!0})},tNorBrick:{value:b(`brick_red_nor`)},tNorPlaster:{value:b(`plaster_beige_nor`)},tStone:{value:b(`stone_diff`,{srgb:!0})}};return e.onBeforeCompile=e=>{Object.assign(e.uniforms,t),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec4 facade;
varying vec4 vFacade;
varying vec2 vWall;`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
vFacade = facade;
vWall = uv;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform sampler2D tBrickR, tBrickY, tPlasterB, tPlasterW, tNorBrick, tNorPlaster, tStone;
        varying vec4 vFacade;
        varying vec2 vWall;
        float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float box(vec2 p, vec2 a, vec2 b) { vec2 s = step(a, p) * step(p, b); return s.x * s.y; }
        // Máscaras de la fachada: x = cristal, y = persiana, z = marco/barandilla oscura, w = elemento claro (forjado, cornisa, losa)
        // Además: shade = sombra del hueco (profundidad), win = (vano, planta) de cada ventana, winFrame = carpintería.
        vec4 facadeMask(vec2 w, out float shopSign, out vec3 signColor, out float shade, out vec2 win, out float winFrame) {
          shopSign = 0.0; signColor = vec3(0.0); shade = 1.0; win = vec2(-1.0); winFrame = 0.0;
          // Semilla entera: el valor interpolado varía en millonésimas entre píxeles y el hash lo amplificaría (ruido).
          float seed = floor(vFacade.y + 0.5), top = vFacade.w;
          if (vFacade.z < 0.5) return vec4(0.0);                // medianera: sin huecos
          float G = 4.0, F = 3.0, BAY = 3.3;
          float bay = floor(w.x / BAY), bx = mod(w.x, BAY);
          vec4 m = vec4(0.0);
          if (w.y > top - 0.9) {                                 // peto y cornisa
            m.w = step(top - 0.9, w.y) * step(w.y, top - 0.55);
            return m;
          }
          if (w.y < G && vFacade.z > 1.5) {                      // planta baja de edificio público: ventanas
            m.x = box(vec2(bx, w.y), vec2(1.0, 1.0), vec2(2.3, 2.9));
            m.z = box(vec2(bx, w.y), vec2(0.93, 0.93), vec2(2.37, 2.97)) - m.x;
            m.w = step(G - 0.25, w.y);
            return m;
          }
          if (w.y < G) {                                         // planta baja: escaparates y portales
            float r = h21(vec2(bay, seed));
            if (r > 0.3) {
              m.x = box(vec2(bx, w.y), vec2(0.35, 0.25), vec2(2.95, 2.75));
              m.z = box(vec2(bx, w.y), vec2(0.25, 0.15), vec2(3.05, 2.85)) - m.x;
              shopSign = box(vec2(bx, w.y), vec2(0.35, 3.05), vec2(2.95, 3.5)) * step(0.62, r);
              // Rótulos sobrios: verde farmacia, rojo, azul marino, blanco, burdeos
              float sc = h21(vec2(bay, 7.0));
              signColor = sc < 0.2 ? vec3(0.1, 0.45, 0.25) : sc < 0.4 ? vec3(0.65, 0.12, 0.1) : sc < 0.6 ? vec3(0.1, 0.18, 0.35) : sc < 0.8 ? vec3(0.92, 0.9, 0.86) : vec3(0.4, 0.1, 0.14);
            } else {
              m.z = box(vec2(bx, w.y), vec2(1.05, 0.0), vec2(2.25, 2.6)); // portal
            }
            m.w = step(G - 0.25, w.y);                           // losa sobre la planta baja
            return m;
          }
          float lvl = floor((w.y - G) / F), fy = mod(w.y - G, F);
          float r = h21(vec2(bay, lvl + seed * 13.0));
          float rb = h21(vec2(bay, seed * 3.1));                 // mismo balcón en toda la vertical
          // Ventana (o puerta de balcón, más alta)
          bool balcony = rb > 0.45;
          vec2 lo = balcony ? vec2(0.95, 0.05) : vec2(1.0, 0.85);
          vec2 hi = balcony ? vec2(2.35, 2.3) : vec2(2.3, 2.3);
          float hole = box(vec2(bx, fy), lo, hi);
          float frame = box(vec2(bx, fy), lo - 0.07, hi + 0.07) - hole;
          // Persiana enrollable bajada una fracción aleatoria
          float shut = hi.y - (hi.y - lo.y) * (0.15 + 0.8 * r * r);
          float blind = hole * step(shut, fy);
          // Lamas de la persiana, suavizadas con la derivada para que no hagan ruido a distancia.
          float fw = fwidth(fy * 12.0);
          float slat = smoothstep(0.5 - fw, 0.5 + fw, fract(fy * 12.0));
          float slats = blind * mix(0.85 + 0.15 * slat, 0.92, clamp(fw * 2.0, 0.0, 1.0));
          m.x = hole - blind;
          m.y = slats;
          winFrame = frame;
          win = vec2(bay, lvl);
          // Fondo del hueco: sombra bajo el dintel y la caja de la persiana, y en una jamba (la ventana está retranqueada).
          shade = 1.0 - hole * (0.42 * smoothstep(hi.y - 0.24, hi.y, fy) + 0.22 * (1.0 - smoothstep(lo.x, lo.x + 0.14, bx)));
          // Vierteaguas de piedra bajo las ventanas.
          if (!balcony) m.w = max(m.w, box(vec2(bx, fy), vec2(lo.x - 0.13, lo.y - 0.17), vec2(hi.x + 0.13, lo.y - 0.07)));
          if (balcony) {                                        // barandilla de barrotes + losa del balcón
            float rail = box(vec2(bx, fy), vec2(0.55, 0.0), vec2(2.75, 1.05));
            float bars = rail * (step(0.82, fract(bx * 7.0)) + step(0.95, fy));
            m.z = max(m.z, bars);
            m.w = box(vec2(bx, fy), vec2(0.45, -0.05), vec2(2.85, 0.12));
            m.x *= 1.0 - bars; m.y *= 1.0 - bars;
          }
          m.w = max(m.w, step(F - 0.12, fy) * 0.6);              // línea de forjado
          return m;
        }`).replace(`#include <map_fragment>`,`int st = int(vFacade.x + 0.5);
        vec2 tuv = vWall / (st < 2 ? 0.9 : 2.5); // ladrillo: ~0,9 m por repetición de la textura
        vec3 base = st == 0 ? texture2D(tBrickR, tuv).rgb : st == 1 ? texture2D(tBrickY, tuv).rgb : st == 2 ? texture2D(tPlasterB, tuv).rgb * vec3(1.02, 0.97, 0.88) : texture2D(tPlasterW, tuv).rgb;
        float bseed = floor(vFacade.y + 0.5);
        base *= 0.9 + 0.2 * h21(vec2(bseed, 1.7));
        if (vFacade.z < 0.5) base *= vec3(0.86, 0.84, 0.8);      // medianera: más apagada
        if (vWall.y < 1.0 && vFacade.z > 0.5) base = texture2D(tStone, vWall / 1.4).rgb * 0.85; // zócalo de piedra
        float shopSign, shade, winFrame; vec3 signColor; vec2 win;
        vec4 fm = facadeMask(vWall, shopSign, signColor, shade, win, winFrame);
        // Por edificio: carpintería (PVC blanco, aluminio marrón o plata) y color de persiana; por ventana, el interior.
        float fr = h21(vec2(bseed, 4.2)), bc = h21(vec2(bseed, 5.3)), wr = h21(win + bseed * 0.37);
        vec3 frameCol = fr < 0.45 ? vec3(0.9, 0.9, 0.87) : fr < 0.75 ? vec3(0.3, 0.22, 0.15) : vec3(0.6, 0.61, 0.62);
        vec3 blindCol = bc < 0.4 ? vec3(0.78, 0.74, 0.66) : bc < 0.7 ? vec3(0.86, 0.86, 0.84) : bc < 0.85 ? vec3(0.45, 0.35, 0.26) : vec3(0.63, 0.63, 0.61);
        vec3 col = base;
        col = mix(col, vec3(0.93, 0.92, 0.88), fm.w);            // forjados, losas, vierteaguas y cornisa
        col = mix(col, frameCol, winFrame);                       // carpintería de las ventanas
        col = mix(col, vec3(0.16, 0.15, 0.14), fm.z);            // barandillas y marcos de los bajos
        col = mix(col, blindCol * (0.8 + 0.2 * fm.y), step(0.01, fm.y)); // persiana
        // Cristal: tono gris azulado (con metalness alto, el reflejo del cielo se tiñe de este color).
        // En planta baja, algo más claro con "interior" variable (escaparates).
        float shopRow = step(vWall.y, 3.0);
        // Pisos: cristal oscuro variable y, en la mitad de las ventanas, visillo claro con pliegues (que se funden a distancia).
        float curtain = step(0.6, wr) * (1.0 - shopRow);
        float fold = 0.88 + 0.12 * sin(vWall.x * 38.0) * clamp(1.5 - fwidth(vWall.x * 38.0), 0.0, 1.0);
        vec3 upGlass = mix(vec3(0.16, 0.19, 0.22) * (0.7 + 0.6 * fract(wr * 7.3)), vec3(0.8, 0.78, 0.73) * fold, curtain * 0.6);
        vec3 glass = mix(upGlass, vec3(0.17, 0.16, 0.15) * (0.6 + 0.9 * h21(vec2(floor(vWall.x / 3.3), bseed))), shopRow);
        col = mix(col, glass, fm.x);
        col = mix(col, signColor, shopSign);
        col *= shade;
        diffuseColor.rgb *= col;
        float glassMask = fm.x;`).replace(`#include <roughnessmap_fragment>`,`float roughnessFactor = mix(roughness, 0.12, glassMask);
        roughnessFactor = mix(roughnessFactor, 0.5, max(fm.z, winFrame));`).replace(`#include <metalnessmap_fragment>`,`float metalnessFactor = mix(metalness, (0.75 - 0.5 * shopRow) * (1.0 - 0.7 * curtain), glassMask);`).replace(`#include <normal_fragment_maps>`,`{
          vec3 mapN = (st < 2 ? texture2D(tNorBrick, tuv) : texture2D(tNorPlaster, tuv)).xyz * 2.0 - 1.0;
          mapN.xy *= normalScale * (1.0 - max(glassMask, fm.y));
          mat3 tbn = getTangentFrame(-vViewPosition, normal, tuv);
          normal = normalize(tbn * mapN);
        }`)},e.customProgramCacheKey=()=>`facade-v2`,e}var V=.9;function H(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let[o,s]=n[i],[c,l]=n[a];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r}function U(e,t=20){let n=new Map,r=(e,t)=>e*100003+t;e.forEach((e,i)=>{let a=e.p.map(e=>e[0]),o=e.p.map(e=>e[1]);e.box=[Math.min(...a),Math.min(...o),Math.max(...a),Math.max(...o)];for(let a=Math.floor(e.box[0]/t);a<=Math.floor(e.box[2]/t);a++)for(let o=Math.floor(e.box[1]/t);o<=Math.floor(e.box[3]/t);o++){let e=r(a,o);n.has(e)||n.set(e,[]),n.get(e).push(i)}});let i=(e,i)=>n.get(r(Math.floor(e/t),Math.floor(i/t)))??[];return{near:i,heightAt(t,n,r=-1){let a=0;for(let o of i(t,n)){if(o===r)continue;let i=e[o],s=i.box;t<s[0]||t>s[2]||n<s[1]||n>s[3]||i.h>a&&H(t,n,i.p)&&(a=i.h)}return a}}}function W(e,t,n){if(e.name&&/ayuntamiento|consistorial/i.test(e.name))return 0;let r=t%1;return n>=5?r<.45?0:r<.75?1:2:r<.3?0:r<.45?1:r<.75?2:3}function G(n,r,{skip:a=new Set}={}){let o=n.parts,c=U(o),u=[],d=[],f=[],p={pos:[],nor:[],uv:[],fac:[]};o.forEach((i,o)=>{if(i.h<=0||a.has(i.b))return;let s=n.buildings[i.b]??{},l=i.p,u=l.map(([e,t])=>r(e,t)),m=Math.min(...u),_=u.reduce((e,t)=>e+t,0)/u.length,v=_+i.h,y=i.b*.61803%1+1e-4,b=W(s,y,i.f),x=v+(i.h>4?V:0),S=0;for(let e=0;e<l.length;e++){let t=l[e],n=l[(e+1)%l.length],r=Math.hypot(n[0]-t[0],n[1]-t[1]);if(r<.05)continue;let a=(n[1]-t[1])/r,u=-(n[0]-t[0])/r,d=(t[0]+n[0])/2,f=(t[1]+n[1])/2,h=H(d+a*.1,f+u*.1,l)?-1:1,g=0;for(let e of[.25,.5,.75]){let r=t[0]+(n[0]-t[0])*e+a*h*.6,i=t[1]+(n[1]-t[1])*e+u*h*.6;g=Math.max(g,c.heightAt(r,i,o))}if(g>=i.h+(i.h>4?V:0)-.3){S+=r;continue}let v=!s.use||/residential|retail|commercial/.test(s.use),C=g>0?0:v?1:2,w=-(n[1]-t[1]),T=n[0]-t[0];w*a*h+T*u*h<0&&([t,n]=[n,t]);let E=m-.5,D=x,O=E-_,k=D-_,A=[a*h,0,u*h],j=[[t,E,S,O],[n,E,S+r,O],[n,D,S+r,k],[t,E,S,O],[n,D,S+r,k],[t,D,S,k]];for(let[e,t,n,r]of j)p.pos.push(e[0],t,e[1]),p.nor.push(...A),p.uv.push(n,r),p.fac.push(b,Math.round(y*997),C,i.h);S+=r}try{let n=l.map(([t,n])=>new e(t,n)),r=h.triangulateShape(n,[]),a=[];for(let e of r)for(let t of[e[0],e[2],e[1]])a.push(l[t][0],i.h>4?v+.15:v,l[t][1]);let o=new g;o.setAttribute(`position`,new t(a,3)),o.setAttribute(`uv`,new t(a.filter((e,t)=>t%3!=1).map(e=>e/3),2)),o.computeVertexNormals(),(s.year&&s.year<1965||i.f<=2?f:d).push(o)}catch{}});let m=new g;m.setAttribute(`position`,new t(p.pos,3)),m.setAttribute(`normal`,new t(p.nor,3)),m.setAttribute(`uv`,new t(p.uv,2)),m.setAttribute(`facade`,new t(p.fac,4));let v=new i(m,B());v.castShadow=v.receiveShadow=!0,v.name=`walls`;let y=new s;y.add(v);let x=new l({map:b(`sidewalk_diff`,{srgb:!0}),color:`#9a958c`,roughness:.95}),S=new l({map:b(`roof_tiles_diff`,{srgb:!0}),normalMap:b(`roof_tiles_nor`),roughness:.85});for(let[e,t]of[[d,x],[f,S]]){if(!e.length)continue;let n=new i(_(e),t);n.castShadow=n.receiveShadow=!0,y.add(n)}return u.push(v),{group:y,index:c,walls:v}}export{P as a,S as c,z as i,x as l,U as n,T as o,H as r,N as s,G as t,b as u};