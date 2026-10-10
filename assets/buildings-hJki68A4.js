import{Cr as e,H as t,Hn as n,J as r,Nr as i,Ot as a,Pt as o,Wn as s,Zn as c,f as l,hr as u,jr as d,k as f,mt as p,qt as m,rr as h,t as g,v as _}from"./BufferGeometryUtils-CuDnsO5v.js";var v=new u,y=new Map;function b(e,{srgb:t=!1}={}){if(y.has(e))return y.get(e);let n=v.load(`./textures/${e}.webp`);return n.wrapS=n.wrapT=s,n.colorSpace=t?c:``,n.anisotropy=8,y.set(e,n),n}var x=e=>({map:b(`${e}_diff`,{srgb:!0}),normalMap:b(`${e}_nor`),roughnessMap:b(`${e}_rough`)});function S(e,{color:t=`#ffffff`,normalScale:n=1,roughness:r=1}={}){let i=new o({...x(e),color:t,roughness:r});return i.normalScale.set(n,n),i}var C=new Set([`primary`,`secondary`,`tertiary`,`residential`,`unclassified`,`living_street`,`service`]),w=new Set([`pedestrian`,`footway`,`cycleway`,`steps`,`path`]);function T(e){return(t,n)=>{let r=(t-e.x0)/e.step,i=(n-e.z0)/e.step,a=Math.max(0,Math.min(e.cols-2,Math.floor(r))),o=Math.max(0,Math.min(e.rows-2,Math.floor(i))),s=Math.max(0,Math.min(1,r-a)),c=Math.max(0,Math.min(1,i-o)),l=(t,n)=>e.h[n*e.cols+t];return(l(a,o)*(1-s)+l(a+1,o)*s)*(1-c)+(l(a,o+1)*(1-s)+l(a+1,o+1)*s)*c}}function E(e,n,r,i=.03,a=2){let o=[];for(let t=0;t<e.length-1;t++){let[n,r]=e[t],[i,s]=e[t+1],c=Math.max(1,Math.ceil(Math.hypot(i-n,s-r)/a));for(let e=0;e<c;e++)o.push([n+(i-n)*e/c,r+(s-r)*e/c])}o.push(e.at(-1));let s=[],c=[],u=[],d=0;o.forEach(([e,t],a)=>{let[l,f]=o[Math.max(0,a-1)],[p,m]=o[Math.min(o.length-1,a+1)],h=p-l,g=m-f,_=Math.hypot(h,g)||1;h/=_,g/=_,a>0&&(d+=Math.hypot(e-o[a-1][0],t-o[a-1][1]));let v=-g*n/2,y=h*n/2;if(s.push(e+v,r(e+v,t+y)+i,t+y,e-v,r(e-v,t-y)+i,t-y),c.push(0,d,n,d),a>0){let e=a*2;u.push(e-2,e,e-1,e-1,e,e+1)}});let f=new l;return f.setAttribute(`position`,new t(s,3)),f.setAttribute(`uv`,new t(c,2)),f.setIndex(u),f.computeVertexNormals(),f}function D(e,t){return e.map(([n,r],i)=>{let[a,o]=e[Math.max(0,i-1)],[s,c]=e[Math.min(e.length-1,i+1)],l=Math.hypot(s-a,c-o)||1;return[n-(c-o)/l*t,r+(s-a)/l*t]})}var O=(e,t,n,r,i,a)=>{let o=i-n,s=a-r,c=o*o+s*s,l=c?Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/c)):0;return Math.hypot(e-n-l*o,t-r-l*s)};function k(e,t=16){let n=new Map,r=(e,t)=>e*100003+t;return e.forEach((e,i)=>{for(let a=0;a<e.p.length-1;a++){let[o,s]=e.p[a],[c,l]=e.p[a+1],u=e.w/2+2,d=[i,o,s,c,l,e.w/2];for(let e=Math.floor((Math.min(o,c)-u)/t);e<=Math.floor((Math.max(o,c)+u)/t);e++)for(let i=Math.floor((Math.min(s,l)-u)/t);i<=Math.floor((Math.max(s,l)+u)/t);i++)n.has(r(e,i))||n.set(r(e,i),[]),n.get(r(e,i)).push(d)}}),(e,i,a,o=0)=>{for(let[s,c,l,u,d,f]of n.get(r(Math.floor(e/t),Math.floor(i/t)))??[])if(s!==a&&O(e,i,c,l,u,d)<f+o)return!0;return!1}}function A(e,t){let n=e.w/2;return(r,i)=>{let a=null;for(let t=0;t<e.p.length-1;t++){let[n,o]=e.p[t],[s,c]=e.p[t+1],l=s-n,u=c-o,d=l*l+u*u;if(!d)continue;let f=Math.max(0,Math.min(1,((r-n)*l+(i-o)*u)/d)),p=n+l*f,m=o+u*f,h=Math.hypot(r-p,i-m);if(!a||h<a.d){let e=Math.sqrt(d);a={d:h,cx:p,cz:m,nx:-u/e,nz:l/e}}}if(!a)return t(r,i)+.05;let{cx:o,cz:s,nx:c,nz:l}=a,u=(Math.max(-n,Math.min(n,(r-o)*c+(i-s)*l))+n)/(2*n);return t(o-c*n,s-l*n)*(1-u)+t(o+c*n,s+l*n)*u+.05}}function j(e,t,n=1){let r=[],i=[],a=()=>{i.length>1&&r.push(i),i=[]};for(let r=0;r<e.length-1;r++){let[o,s]=e[r],[c,l]=e[r+1],u=Math.max(1,Math.ceil(Math.hypot(c-o,l-s)/n));for(let e=0;e<u;e++){let n=o+(c-o)*e/u,r=s+(l-s)*e/u;t(n,r)?i.push([n,r]):a()}}return t(...e.at(-1))&&i.push(e.at(-1)),a(),r}function M(e,n,r,i){let a=.25,o=[],s=[],c=e.length;e.forEach(([t,l],u)=>{let[d,f]=e[Math.max(0,u-1)],[p,m]=e[Math.min(c-1,u+1)],h=Math.hypot(p-d,m-f)||1,g=-(m-f)/h*i,_=(p-d)/h*i,v=t-g*a/2,y=l-_*a/2,b=t+g*a/2,x=l+_*a/2,S=r(v,y)-.01,C=Math.max(S,n(b,x))+.14;if(o.push(v,S,y,v,C,y,b,C,x,b,n(b,x)-.02,x),u>0){let e=(u-1)*4,t=u*4;for(let n=0;n<3;n++)i>0?s.push(e+n,e+n+1,t+n,e+n+1,t+n+1,t+n):s.push(e+n,t+n,e+n+1,e+n+1,t+n,t+n+1)}});let u=new l;u.setAttribute(`position`,new t(o,3)),u.setIndex(s);let d=u.toNonIndexed();return d.computeVertexNormals(),d}function N(e){let t=e.roads.filter(e=>C.has(e.t)&&e.p.length>=2),n=t.filter(e=>e.j),r=[];for(let e of n.length?t:[])if(!e.j)for(let t of[!1,!0]){let i=t?[...e.p].reverse():e.p,a=n.find(e=>e.p.some((t,n)=>n<e.p.length-1&&O(i[0][0],i[0][1],...e.p[n],...e.p[n+1])<1));if(!a||e.o&&e.o===1!==t)continue;let[o,s]=i[0],[c,l]=i[1],u=Math.hypot(c-o,l-s);if(u<a.w/2+3)continue;let d=(c-o)/u,f=(l-s)/u,p=a.w/2+1.2;r.push({road:e,x:o+d*p,z:s+f*p,ux:d,uz:f,nx:f,nz:-d,s0:e.o?-e.w/2+.3:.15,s1:e.w/2-.3})}return r}function P(e){let t=e.roads.filter(e=>C.has(e.t)&&e.p.length>=2),n=[];for(let[r,i]of e.points.crossings??[]){let e=null;for(let n of t)for(let t=0;t<n.p.length-1;t++){let[a,o]=n.p[t],[s,c]=n.p[t+1],l=s-a,u=c-o,d=l*l+u*u;if(!d)continue;let f=Math.max(0,Math.min(1,((r-a)*l+(i-o)*u)/d)),p=Math.hypot(r-a-f*l,i-o-f*u);(!e||p<e.d)&&(e={d:p,road:n,x:a+l*f,z:o+u*f,ux:l/Math.sqrt(d),uz:u/Math.sqrt(d)})}e&&e.d<=3&&n.push(e)}return n}function F(e,t,n){for(let r of N(e)){let e=A(r.road,t);for(let t=r.s0;t+.6<=r.s1;t+=1){let i=[r.x+r.nx*t,r.z+r.nz*t],a=[r.x+r.nx*(t+.6),r.z+r.nz*(t+.6)];n.push(E([i,a],.4,e,.025,1))}}}function I(t,r,a){let o=r.full??r,s=(a.cols-1)*a.step,c=(a.rows-1)*a.step,l=Math.ceil(s/4)+1,u=Math.ceil(c/4)+1,d=new Uint8Array(l*u),m=e=>(e-a.x0)/4,h=e=>(e-a.z0)/4,g=e=>{let t=1/0,n=-1/0;for(let[,r]of e)t=Math.min(t,h(r)),n=Math.max(n,h(r));for(let r=Math.max(0,Math.ceil(t));r<=Math.min(u-1,Math.floor(n));r++){let t=[];for(let n=0;n<e.length;n++){let[i,a]=e[n],[o,s]=e[(n+1)%e.length],c=h(a),l=h(s);c<=r!=l<=r&&t.push(m(i+(r-c)/(l-c)*(o-i)))}t.sort((e,t)=>e-t);for(let e=0;e+1<t.length;e+=2)for(let n=Math.max(0,Math.ceil(t[e]));n<=Math.min(l-1,Math.floor(t[e+1]));n++)d[r*l+n]=255}},v=(e,t,n=!1)=>{let r=n?e.length:e.length-1;for(let n=0;n<r;n++){let[r,i]=e[n],[o,s]=e[(n+1)%e.length],c=Math.max(0,Math.floor(m(Math.min(r,o)-t))),f=Math.min(l-1,Math.ceil(m(Math.max(r,o)+t))),p=Math.max(0,Math.floor(h(Math.min(i,s)-t))),g=Math.min(u-1,Math.ceil(h(Math.max(i,s)+t)));for(let e=p;e<=g;e++)for(let n=c;n<=f;n++)d[e*l+n]!==255&&O(a.x0+n*4,a.z0+e*4,r,i,o,s)<t&&(d[e*l+n]=255)}};for(let e of o.roads)v(e.p,e.w/2+ +!!C.has(e.t));for(let e of[...o.parts,...o.horizon??[]])g(e.p);for(let e of o.areas)g(e.p);for(let e of o.rail??[])v(e,1.5);let y=d.slice();for(let e=0;e<u;e++)for(let t=0;t<l;t++)if(!y[e*l+t])for(let n=-1;n<=1&&!d[e*l+t];n++){let r=e+n;if(!(r<0||r>=u))for(let n=-1;n<=1;n++){let i=t+n;if(i>=0&&i<l&&y[r*l+i]){d[e*l+t]=255;break}}}let x=new f(d,l,u,n,e);x.magFilter=x.minFilter=p,x.unpackAlignment=1,x.wrapS=x.wrapT=_,x.needsUpdate=!0;let S=b(`grass_diff`,{srgb:!0});t.onBeforeCompile=e=>{e.uniforms.uLandMask={value:x},e.uniforms.uLandGrass={value:S},e.uniforms.uLandBox={value:new i(a.x0-2,a.z0-2,l*4,u*4)},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vLandXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vLandXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vLandXZ;
uniform sampler2D uLandMask;
uniform sampler2D uLandGrass;
uniform vec4 uLandBox;`).replace(`#include <map_fragment>`,`#include <map_fragment>
        {
          vec2 lq = (vLandXZ - uLandBox.xy) / uLandBox.zw;
          float urb = texture2D(uLandMask, lq).r;
          // hierba seca: dos escalas para que no se note la repetición, tinte pajizo y algo de tierra
          vec3 g1 = texture2D(uLandGrass, vLandXZ * 0.31).rgb, g2 = texture2D(uLandGrass, vLandXZ * 0.047).rgb;
          vec3 dry = mix(g1, g2, 0.45) * vec3(1.12, 1.0, 0.66);
          dry = mix(dry, vec3(dot(dry, vec3(0.3, 0.55, 0.15))), 0.4) * 0.82; // apagado: rastrojo, no oro
          dry = mix(dry, vec3(0.3, 0.25, 0.18), 0.35 * smoothstep(0.3, 0.7, g2.g));
          diffuseColor.rgb = mix(dry, diffuseColor.rgb, smoothstep(0.25, 0.75, urb));
        }`)},t.customProgramCacheKey=()=>`terreno-mascara`}function L(e,n,r){let i=e.map(([e,t])=>new d(e,t)),a=h.triangulateShape(i,[]),o=[],s=[];for(let t of a)for(let i of t){let[t,a]=e[i];o.push(t,n(t,a)+r,a),s.push(t,a)}let c=new l;if(c.setAttribute(`position`,new t(o,3)),c.setAttribute(`uv`,new t(s,2)),c.computeVertexNormals(),c.attributes.normal.getY(0)<0){let e=c.attributes.position.array,t=c.attributes.uv.array;for(let t=0;t<e.length;t+=9)for(let n=0;n<3;n++)[e[t+3+n],e[t+6+n]]=[e[t+6+n],e[t+3+n]];for(let e=0;e<t.length;e+=6)for(let n=0;n<2;n++)[t[e+2+n],t[e+4+n]]=[t[e+4+n],t[e+2+n]];c.computeVertexNormals()}return c}var R=(e,t)=>{let n=e.attributes.uv;for(let e=0;e<n.count;e++)n.setXY(e,n.getX(e)/t,n.getY(e)/t);return e};function z(e,t,n={}){let i=new r,s=e.terrain,c=s.x0+(s.cols-1)*s.step,l=s.z0+(s.rows-1)*s.step,u=S(`sidewalk`,{color:`#c9c4ba`});I(u,e,s);let d=([e,n,r,i],o,d=0,f=null)=>{e=Math.max(s.x0,e),n=Math.max(s.z0,n),r=Math.min(c,r),i=Math.min(l,i);let p=Math.max(1,Math.round((r-e)/o)),h=Math.max(1,Math.round((i-n)/o)),g=new m(r-e,i-n,p,h).rotateX(-Math.PI/2).translate((e+r)/2,0,(n+i)/2),_=g.attributes.position,v=g.attributes.uv;for(let e=0;e<_.count;e++)_.setY(e,t(_.getX(e),_.getZ(e))-d),v.setXY(e,_.getX(e)/2.5,_.getZ(e)/2.5);if(f){let e=g.index.array,t=[];for(let n=0;n<e.length;n+=6){let r=e[n];f(_.getX(r)+o/2,_.getZ(r)+o/2)||t.push(...e.subarray(n,n+6))}g.setIndex(t)}g.computeVertexNormals();let y=new a(g,u);return y.receiveShadow=!0,y.name=`terrain`,y},f=n.patches;if(f?.length){for(let e of f)i.add(d(e,s.step));let e=d([s.x0,s.z0,c,l],24,.6,(e,t)=>f.some(([n,r,i,a])=>e>n+24&&e<i-24&&t>r+24&&t<a-24));e.receiveShadow=!1,i.add(e)}else i.add(d([s.x0,s.z0,c,l],s.step));let p={pedestrian:[],park:[],grass:[],parking:[]};for(let n of e.areas)if(p[n.t])try{p[n.t].push(L(n.p,t,n.t===`pedestrian`?.04:.05))}catch{}let h={pedestrian:[S(`granite`,{color:`#f3f1ec`}),2.4],park:[S(`grass`),3],grass:[S(`grass`),3],parking:[S(`asphalt`,{color:`#8d8d8d`}),4]};for(let[e,t]of Object.entries(p)){if(!t.length)continue;let[n,r]=h[e],o=new a(R(g(t),r),n);o.receiveShadow=!0,i.add(o)}let _=e.roads.filter(e=>C.has(e.t)&&e.p.length>=2),v=k(_),y=e.points.crossings??[],b=(e,t,n)=>y.some(([r,i])=>Math.abs(r-e)<n&&Math.abs(i-t)<n&&Math.hypot(r-e,i-t)<n),x=[],T=[],O=[],N=[],z=[];_.forEach((e,n)=>{x.push(R(E(e.p,e.w,t,.05),4));let r=A(e,t);for(let i of[1,-1])for(let a of j(D(e.p,i*(e.w/2+.12)),(e,t)=>!v(e,t,n,.2)))T.push(M(a,t,r,i));if(e.w>=6&&!e.o&&!e.j&&e.t!==`service`)for(let t of j(e.p,(e,t)=>!v(e,t,n,1.5)&&!b(e,t,3.2))){let e=E(t,.15,r,.02,1),n=e.attributes.uv;for(let e=0;e<n.count;e++)n.setY(e,n.getY(e)/7);O.push(e)}});for(let n of e.roads)w.has(n.t)&&n.p.length>=2&&N.push(R(E(n.p,n.w,t,.035),3));F(e,t,z);let B=S(`asphalt`,{color:`#a7a7a7`});B.polygonOffset=!0,B.polygonOffsetFactor=-1;let V=(e,t)=>{if(!e.length)return null;let n=new a(g(e),t);return n.receiveShadow=!0,i.add(n),n};V(N,S(`granite`,{color:`#e8e5df`})),V(x,B),V(T,new o({color:`#8f8c86`,roughness:.9}));let H=()=>Object.assign(new o({color:`#efeee8`,roughness:.62}),{polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),U=H();U.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vAlong;`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
vAlong = uv.y;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vAlong;`).replace(`#include <map_fragment>`,`if (fract(vAlong) > 0.43) discard;`)},V(O,U);for(let{road:n,x:r,z:i,ux:a,uz:o}of P(e)){let e=A(n,t),s=n.w>=7?4:3,c=Math.floor((n.w-.6)/1);for(let t=0;t<c;t++){let n=(t-(c-1)/2)*1,l=r-o*n,u=i+a*n;z.push(E([[l-a*s/2,u-o*s/2],[l+a*s/2,u+o*s/2]],.5,e,.025,1))}}V(z,H());let W=[],G=[];for(let n of e.rail){W.push(R(E(n,3.2,t,.06),2));for(let e of[-.72,.72])G.push(E(D(n,e),.08,t,.2))}return V(W,new o({color:`#7d756c`,roughness:1})),V(G,new o({color:`#5a5550`,metalness:.8,roughness:.35})),{group:i,terrain:i.getObjectByName(`terrain`)}}function B(){let e=new o({roughness:.9,metalness:0});e.normalMap=b(`brick_red_nor`),e.normalScale.set(.8,.8);let t={tBrickR:{value:b(`brick_red_diff`,{srgb:!0})},tBrickY:{value:b(`brick_yellow_diff`,{srgb:!0})},tPlasterB:{value:b(`plaster_beige_diff`,{srgb:!0})},tPlasterW:{value:b(`plaster_white_diff`,{srgb:!0})},tNorBrick:{value:b(`brick_red_nor`)},tNorPlaster:{value:b(`plaster_beige_nor`)},tStone:{value:b(`stone_diff`,{srgb:!0})}};return e.onBeforeCompile=e=>{Object.assign(e.uniforms,t),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
        }`)},e.customProgramCacheKey=()=>`facade-v2`,e}var V=.9;function H(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let[o,s]=n[i],[c,l]=n[a];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r}function U(e,t=20){let n=new Map,r=(e,t)=>e*100003+t;e.forEach((e,i)=>{let a=e.p.map(e=>e[0]),o=e.p.map(e=>e[1]);e.box=[Math.min(...a),Math.min(...o),Math.max(...a),Math.max(...o)];for(let a=Math.floor(e.box[0]/t);a<=Math.floor(e.box[2]/t);a++)for(let o=Math.floor(e.box[1]/t);o<=Math.floor(e.box[3]/t);o++){let e=r(a,o);n.has(e)||n.set(e,[]),n.get(e).push(i)}});let i=(e,i)=>n.get(r(Math.floor(e/t),Math.floor(i/t)))??[];return{near:i,heightAt(t,n,r=-1){let a=0;for(let o of i(t,n)){if(o===r)continue;let i=e[o],s=i.box;t<s[0]||t>s[2]||n<s[1]||n>s[3]||i.h>a&&H(t,n,i.p)&&(a=i.h)}return a}}}function W(e,t,n){if(e.name&&/ayuntamiento|consistorial/i.test(e.name))return 0;let r=t%1;return n>=5?r<.45?0:r<.75?1:2:r<.3?0:r<.45?1:r<.75?2:3}function G(e,n,{skip:i=new Set}={}){let s=e.parts,c=U(s),u=[],f=[],p=[],m={pos:[],nor:[],uv:[],fac:[]};s.forEach((r,a)=>{if(r.h<=0||i.has(r.b))return;let o=e.buildings[r.b]??{},s=r.p,u=s.map(([e,t])=>n(e,t)),g=Math.min(...u),_=u.reduce((e,t)=>e+t,0)/u.length,v=_+r.h,y=r.b*.61803%1+1e-4,b=W(o,y,r.f),x=v+(r.h>4?V:0),S=0;for(let e=0;e<s.length;e++){let t=s[e],n=s[(e+1)%s.length],i=Math.hypot(n[0]-t[0],n[1]-t[1]);if(i<.05)continue;let l=(n[1]-t[1])/i,u=-(n[0]-t[0])/i,d=(t[0]+n[0])/2,f=(t[1]+n[1])/2,p=H(d+l*.1,f+u*.1,s)?-1:1,h=0;for(let e of[.25,.5,.75]){let r=t[0]+(n[0]-t[0])*e+l*p*.6,i=t[1]+(n[1]-t[1])*e+u*p*.6;h=Math.max(h,c.heightAt(r,i,a))}if(h>=r.h+(r.h>4?V:0)-.3){S+=i;continue}let v=!o.use||/residential|retail|commercial/.test(o.use),C=h>0?0:v?1:2,w=-(n[1]-t[1]),T=n[0]-t[0];w*l*p+T*u*p<0&&([t,n]=[n,t]);let E=g-.5,D=x,O=E-_,k=D-_,A=[l*p,0,u*p],j=[[t,E,S,O],[n,E,S+i,O],[n,D,S+i,k],[t,E,S,O],[n,D,S+i,k],[t,D,S,k]];for(let[e,t,n,i]of j)m.pos.push(e[0],t,e[1]),m.nor.push(...A),m.uv.push(n,i),m.fac.push(b,Math.round(y*997),C,r.h);S+=i}try{let e=s.map(([e,t])=>new d(e,t)),n=h.triangulateShape(e,[]),i=[];for(let e of n)for(let t of[e[0],e[2],e[1]])i.push(s[t][0],r.h>4?v+.15:v,s[t][1]);let a=new l;a.setAttribute(`position`,new t(i,3)),a.setAttribute(`uv`,new t(i.filter((e,t)=>t%3!=1).map(e=>e/3),2)),a.computeVertexNormals(),(o.year&&o.year<1965||r.f<=2?p:f).push(a)}catch{}});let _=new l;_.setAttribute(`position`,new t(m.pos,3)),_.setAttribute(`normal`,new t(m.nor,3)),_.setAttribute(`uv`,new t(m.uv,2)),_.setAttribute(`facade`,new t(m.fac,4));let v=new a(_,B());v.castShadow=v.receiveShadow=!0,v.name=`walls`;let y=new r;y.add(v);let x=new o({map:b(`sidewalk_diff`,{srgb:!0}),color:`#9a958c`,roughness:.95}),S=new o({map:b(`roof_tiles_diff`,{srgb:!0}),normalMap:b(`roof_tiles_nor`),roughness:.85});for(let[e,t]of[[f,x],[p,S]]){if(!e.length)continue;let n=new a(g(e),t);n.castShadow=n.receiveShadow=!0,y.add(n)}return u.push(v),{group:y,index:c,walls:v}}export{P as a,N as c,b as d,z as i,S as l,U as n,T as o,H as r,E as s,G as t,x as u};