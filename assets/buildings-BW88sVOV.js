import{Ft as e,Gn as t,Jt as n,Mr as r,Qn as i,U as a,Y as o,gr as s,ir as c,kt as l,p as u,t as d}from"./BufferGeometryUtils-DRWMnnNc.js";var f=new s,p=new Map;function m(e,{srgb:n=!1}={}){if(p.has(e))return p.get(e);let r=f.load(`./textures/${e}.webp`);return r.wrapS=r.wrapT=t,r.colorSpace=n?i:``,r.anisotropy=8,p.set(e,r),r}var h=e=>({map:m(`${e}_diff`,{srgb:!0}),normalMap:m(`${e}_nor`),roughnessMap:m(`${e}_rough`)});function g(t,{color:n=`#ffffff`,normalScale:r=1,roughness:i=1}={}){let a=new e({...h(t),color:n,roughness:i});return a.normalScale.set(r,r),a}var _=new Set([`primary`,`secondary`,`tertiary`,`residential`,`unclassified`,`living_street`,`service`]),v=new Set([`pedestrian`,`footway`,`cycleway`,`steps`,`path`]);function y(e){return(t,n)=>{let r=(t-e.x0)/e.step,i=(n-e.z0)/e.step,a=Math.max(0,Math.min(e.cols-2,Math.floor(r))),o=Math.max(0,Math.min(e.rows-2,Math.floor(i))),s=Math.max(0,Math.min(1,r-a)),c=Math.max(0,Math.min(1,i-o)),l=(t,n)=>e.h[n*e.cols+t];return(l(a,o)*(1-s)+l(a+1,o)*s)*(1-c)+(l(a,o+1)*(1-s)+l(a+1,o+1)*s)*c}}function b(e,t,n,r=.03,i=2){let o=[];for(let t=0;t<e.length-1;t++){let[n,r]=e[t],[a,s]=e[t+1],c=Math.max(1,Math.ceil(Math.hypot(a-n,s-r)/i));for(let e=0;e<c;e++)o.push([n+(a-n)*e/c,r+(s-r)*e/c])}o.push(e.at(-1));let s=[],c=[],l=[],d=0;o.forEach(([e,i],a)=>{let[u,f]=o[Math.max(0,a-1)],[p,m]=o[Math.min(o.length-1,a+1)],h=p-u,g=m-f,_=Math.hypot(h,g)||1;h/=_,g/=_,a>0&&(d+=Math.hypot(e-o[a-1][0],i-o[a-1][1]));let v=-g*t/2,y=h*t/2;if(s.push(e+v,n(e+v,i+y)+r,i+y,e-v,n(e-v,i-y)+r,i-y),c.push(0,d,t,d),a>0){let e=a*2;l.push(e-2,e,e-1,e-1,e,e+1)}});let f=new u;return f.setAttribute(`position`,new a(s,3)),f.setAttribute(`uv`,new a(c,2)),f.setIndex(l),f.computeVertexNormals(),f}function x(e,t){return e.map(([n,r],i)=>{let[a,o]=e[Math.max(0,i-1)],[s,c]=e[Math.min(e.length-1,i+1)],l=Math.hypot(s-a,c-o)||1;return[n-(c-o)/l*t,r+(s-a)/l*t]})}var S=(e,t,n,r,i,a)=>{let o=i-n,s=a-r,c=o*o+s*s,l=c?Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/c)):0;return Math.hypot(e-n-l*o,t-r-l*s)};function C(e,t=16){let n=new Map,r=(e,t)=>e*100003+t;return e.forEach((e,i)=>{for(let a=0;a<e.p.length-1;a++){let[o,s]=e.p[a],[c,l]=e.p[a+1],u=e.w/2+2,d=[i,o,s,c,l,e.w/2];for(let e=Math.floor((Math.min(o,c)-u)/t);e<=Math.floor((Math.max(o,c)+u)/t);e++)for(let i=Math.floor((Math.min(s,l)-u)/t);i<=Math.floor((Math.max(s,l)+u)/t);i++)n.has(r(e,i))||n.set(r(e,i),[]),n.get(r(e,i)).push(d)}}),(e,i,a,o=0)=>{for(let[s,c,l,u,d,f]of n.get(r(Math.floor(e/t),Math.floor(i/t)))??[])if(s!==a&&S(e,i,c,l,u,d)<f+o)return!0;return!1}}function w(e,t){let n=e.w/2;return(r,i)=>{let a=null;for(let t=0;t<e.p.length-1;t++){let[n,o]=e.p[t],[s,c]=e.p[t+1],l=s-n,u=c-o,d=l*l+u*u;if(!d)continue;let f=Math.max(0,Math.min(1,((r-n)*l+(i-o)*u)/d)),p=n+l*f,m=o+u*f,h=Math.hypot(r-p,i-m);if(!a||h<a.d){let e=Math.sqrt(d);a={d:h,cx:p,cz:m,nx:-u/e,nz:l/e}}}if(!a)return t(r,i)+.05;let{cx:o,cz:s,nx:c,nz:l}=a,u=(Math.max(-n,Math.min(n,(r-o)*c+(i-s)*l))+n)/(2*n);return t(o-c*n,s-l*n)*(1-u)+t(o+c*n,s+l*n)*u+.05}}function T(e,t,n=1){let r=[],i=[],a=()=>{i.length>1&&r.push(i),i=[]};for(let r=0;r<e.length-1;r++){let[o,s]=e[r],[c,l]=e[r+1],u=Math.max(1,Math.ceil(Math.hypot(c-o,l-s)/n));for(let e=0;e<u;e++){let n=o+(c-o)*e/u,r=s+(l-s)*e/u;t(n,r)?i.push([n,r]):a()}}return t(...e.at(-1))&&i.push(e.at(-1)),a(),r}function E(e,t,n,r){let i=.25,o=[],s=[],c=e.length;e.forEach(([a,l],u)=>{let[d,f]=e[Math.max(0,u-1)],[p,m]=e[Math.min(c-1,u+1)],h=Math.hypot(p-d,m-f)||1,g=-(m-f)/h*r,_=(p-d)/h*r,v=a-g*i/2,y=l-_*i/2,b=a+g*i/2,x=l+_*i/2,S=n(v,y)-.01,C=Math.max(S,t(b,x))+.14;if(o.push(v,S,y,v,C,y,b,C,x,b,t(b,x)-.02,x),u>0){let e=(u-1)*4,t=u*4;for(let n=0;n<3;n++)r>0?s.push(e+n,e+n+1,t+n,e+n+1,t+n+1,t+n):s.push(e+n,t+n,e+n+1,e+n+1,t+n,t+n+1)}});let l=new u;l.setAttribute(`position`,new a(o,3)),l.setIndex(s);let d=l.toNonIndexed();return d.computeVertexNormals(),d}function D(e,t,n){let r=e.filter(e=>e.j);if(r.length){for(let i of e)if(!i.j)for(let e of[!1,!0]){let a=e?[...i.p].reverse():i.p,o=r.find(e=>e.p.some((t,n)=>n<e.p.length-1&&S(a[0][0],a[0][1],...e.p[n],...e.p[n+1])<1));if(!o||i.o&&i.o===1!==e)continue;let[s,c]=a[0],[l,u]=a[1],d=Math.hypot(l-s,u-c);if(d<o.w/2+3)continue;let f=(l-s)/d,p=(u-c)/d,m=o.w/2+1.2,h=s+f*m,g=c+p*m,_=w(i,t),v=p,y=-f,x=i.o?-i.w/2+.3:.15,C=i.w/2-.3;for(let e=x;e+.6<=C;e+=1){let t=[h+v*e,g+y*e],r=[h+v*(e+.6),g+y*(e+.6)];n.push(b([t,r],.4,_,.025,1))}}}}function O(e,t,n){let i=e.map(([e,t])=>new r(e,t)),o=c.triangulateShape(i,[]),s=[],l=[];for(let r of o)for(let i of r){let[r,a]=e[i];s.push(r,t(r,a)+n,a),l.push(r,a)}let d=new u;if(d.setAttribute(`position`,new a(s,3)),d.setAttribute(`uv`,new a(l,2)),d.computeVertexNormals(),d.attributes.normal.getY(0)<0){let e=d.attributes.position.array,t=d.attributes.uv.array;for(let t=0;t<e.length;t+=9)for(let n=0;n<3;n++)[e[t+3+n],e[t+6+n]]=[e[t+6+n],e[t+3+n]];for(let e=0;e<t.length;e+=6)for(let n=0;n<2;n++)[t[e+2+n],t[e+4+n]]=[t[e+4+n],t[e+2+n]];d.computeVertexNormals()}return d}var k=(e,t)=>{let n=e.attributes.uv;for(let e=0;e<n.count;e++)n.setXY(e,n.getX(e)/t,n.getY(e)/t);return e};function A(t,r,i={}){let a=new o,s=t.terrain,c=s.x0+(s.cols-1)*s.step,u=s.z0+(s.rows-1)*s.step,f=g(`sidewalk`,{color:`#c9c4ba`}),p=([e,t,i,a],o,d=0,p=null)=>{e=Math.max(s.x0,e),t=Math.max(s.z0,t),i=Math.min(c,i),a=Math.min(u,a);let m=Math.max(1,Math.round((i-e)/o)),h=Math.max(1,Math.round((a-t)/o)),g=new n(i-e,a-t,m,h).rotateX(-Math.PI/2).translate((e+i)/2,0,(t+a)/2),_=g.attributes.position,v=g.attributes.uv;for(let e=0;e<_.count;e++)_.setY(e,r(_.getX(e),_.getZ(e))-d),v.setXY(e,_.getX(e)/2.5,_.getZ(e)/2.5);if(p){let e=g.index.array,t=[];for(let n=0;n<e.length;n+=6){let r=e[n];p(_.getX(r)+o/2,_.getZ(r)+o/2)||t.push(...e.subarray(n,n+6))}g.setIndex(t)}g.computeVertexNormals();let y=new l(g,f);return y.receiveShadow=!0,y.name=`terrain`,y},m=i.patches;if(m?.length){for(let e of m)a.add(p(e,s.step));let e=p([s.x0,s.z0,c,u],24,.6,(e,t)=>m.some(([n,r,i,a])=>e>n+24&&e<i-24&&t>r+24&&t<a-24));e.receiveShadow=!1,a.add(e)}else a.add(p([s.x0,s.z0,c,u],s.step));let h={pedestrian:[],park:[],grass:[],parking:[]};for(let e of t.areas)if(h[e.t])try{h[e.t].push(O(e.p,r,e.t===`pedestrian`?.04:.05))}catch{}let y={pedestrian:[g(`granite`,{color:`#f3f1ec`}),2.4],park:[g(`grass`),3],grass:[g(`grass`),3],parking:[g(`asphalt`,{color:`#8d8d8d`}),4]};for(let[e,t]of Object.entries(h)){if(!t.length)continue;let[n,r]=y[e],i=new l(k(d(t),r),n);i.receiveShadow=!0,a.add(i)}let S=t.roads.filter(e=>_.has(e.t)&&e.p.length>=2),A=C(S),j=t.points.crossings??[],M=(e,t,n)=>j.some(([r,i])=>Math.abs(r-e)<n&&Math.abs(i-t)<n&&Math.hypot(r-e,i-t)<n),N=[],P=[],F=[],I=[],L=[];S.forEach((e,t)=>{N.push(k(b(e.p,e.w,r,.05),4));let n=w(e,r);for(let i of[1,-1])for(let a of T(x(e.p,i*(e.w/2+.12)),(e,n)=>!A(e,n,t,.2)))P.push(E(a,r,n,i));if(e.w>=6&&!e.o&&!e.j&&e.t!==`service`)for(let r of T(e.p,(e,n)=>!A(e,n,t,1.5)&&!M(e,n,3.2))){let e=b(r,.15,n,.02,1),t=e.attributes.uv;for(let e=0;e<t.count;e++)t.setY(e,t.getY(e)/7);F.push(e)}});for(let e of t.roads)v.has(e.t)&&e.p.length>=2&&I.push(k(b(e.p,e.w,r,.035),3));D(S,r,L);let R=g(`asphalt`,{color:`#a7a7a7`});R.polygonOffset=!0,R.polygonOffsetFactor=-1;let z=(e,t)=>{if(!e.length)return null;let n=new l(d(e),t);return n.receiveShadow=!0,a.add(n),n};z(I,g(`granite`,{color:`#e8e5df`})),z(N,R),z(P,new e({color:`#8f8c86`,roughness:.9}));let B=()=>Object.assign(new e({color:`#efeee8`,roughness:.62}),{polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),V=B();V.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vAlong;`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
vAlong = uv.y;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vAlong;`).replace(`#include <map_fragment>`,`if (fract(vAlong) > 0.43) discard;`)},z(F,V);for(let[e,t]of j){let n=null;for(let r of S)for(let i=0;i<r.p.length-1;i++){let[a,o]=r.p[i],[s,c]=r.p[i+1],l=s-a,u=c-o,d=l*l+u*u,f=d?Math.max(0,Math.min(1,((e-a)*l+(t-o)*u)/d)):0,p=Math.hypot(e-a-f*l,t-o-f*u);(!n||p<n.d)&&(n={d:p,dx:l,dz:u,r,x:a+l*f,z:o+u*f})}if(!n||n.d>3)continue;let{r:i}=n,a=w(i,r),o=Math.hypot(n.dx,n.dz),s=n.dx/o,c=n.dz/o,l=i.w>=7?4:3,u=Math.floor((i.w-.6)/1);for(let e=0;e<u;e++){let t=(e-(u-1)/2)*1,r=n.x-c*t,i=n.z+s*t;L.push(b([[r-s*l/2,i-c*l/2],[r+s*l/2,i+c*l/2]],.5,a,.025,1))}}z(L,B());let H=[],U=[];for(let e of t.rail){H.push(k(b(e,3.2,r,.06),2));for(let t of[-.72,.72])U.push(b(x(e,t),.08,r,.2))}return z(H,new e({color:`#7d756c`,roughness:1})),z(U,new e({color:`#5a5550`,metalness:.8,roughness:.35})),{group:a,terrain:a.getObjectByName(`terrain`)}}function j(){let t=new e({roughness:.9,metalness:0});t.normalMap=m(`brick_red_nor`),t.normalScale.set(.8,.8);let n={tBrickR:{value:m(`brick_red_diff`,{srgb:!0})},tBrickY:{value:m(`brick_yellow_diff`,{srgb:!0})},tPlasterB:{value:m(`plaster_beige_diff`,{srgb:!0})},tPlasterW:{value:m(`plaster_white_diff`,{srgb:!0})},tNorBrick:{value:m(`brick_red_nor`)},tNorPlaster:{value:m(`plaster_beige_nor`)},tStone:{value:m(`stone_diff`,{srgb:!0})}};return t.onBeforeCompile=e=>{Object.assign(e.uniforms,n),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
        vec4 facadeMask(vec2 w, out float shopSign, out vec3 signColor) {
          shopSign = 0.0; signColor = vec3(0.0);
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
          m.z = frame;
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
        float shopSign; vec3 signColor;
        vec4 fm = facadeMask(vWall, shopSign, signColor);
        vec3 col = base;
        col = mix(col, vec3(0.93, 0.92, 0.88), fm.w);            // forjados, losas y cornisa
        col = mix(col, vec3(0.16, 0.15, 0.14), fm.z);            // marcos y barandillas
        col = mix(col, vec3(0.78, 0.74, 0.66) * (0.8 + 0.2 * fm.y), step(0.01, fm.y)); // persiana
        // Cristal: tono gris azulado (con metalness alto, el reflejo del cielo se tiñe de este color).
        // En planta baja, algo más claro con "interior" variable (escaparates).
        float shopRow = step(vWall.y, 3.0);
        vec3 glass = mix(vec3(0.32, 0.38, 0.44), vec3(0.17, 0.16, 0.15) * (0.6 + 0.9 * h21(vec2(floor(vWall.x / 3.3), bseed))), shopRow);
        col = mix(col, glass, fm.x);
        col = mix(col, signColor, shopSign);
        diffuseColor.rgb *= col;
        float glassMask = fm.x;`).replace(`#include <roughnessmap_fragment>`,`float roughnessFactor = mix(roughness, 0.12, glassMask);
        roughnessFactor = mix(roughnessFactor, 0.5, fm.z);`).replace(`#include <metalnessmap_fragment>`,`float metalnessFactor = mix(metalness, 0.75 - 0.5 * shopRow, glassMask);`).replace(`#include <normal_fragment_maps>`,`{
          vec3 mapN = (st < 2 ? texture2D(tNorBrick, tuv) : texture2D(tNorPlaster, tuv)).xyz * 2.0 - 1.0;
          mapN.xy *= normalScale * (1.0 - max(glassMask, fm.y));
          mat3 tbn = getTangentFrame(-vViewPosition, normal, tuv);
          normal = normalize(tbn * mapN);
        }`)},t.customProgramCacheKey=()=>`facade-v1`,t}var M=.9;function N(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let[o,s]=n[i],[c,l]=n[a];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r}function P(e,t=20){let n=new Map,r=(e,t)=>e*100003+t;e.forEach((e,i)=>{let a=e.p.map(e=>e[0]),o=e.p.map(e=>e[1]);e.box=[Math.min(...a),Math.min(...o),Math.max(...a),Math.max(...o)];for(let a=Math.floor(e.box[0]/t);a<=Math.floor(e.box[2]/t);a++)for(let o=Math.floor(e.box[1]/t);o<=Math.floor(e.box[3]/t);o++){let e=r(a,o);n.has(e)||n.set(e,[]),n.get(e).push(i)}});let i=(e,i)=>n.get(r(Math.floor(e/t),Math.floor(i/t)))??[];return{near:i,heightAt(t,n,r=-1){let a=0;for(let o of i(t,n)){if(o===r)continue;let i=e[o],s=i.box;t<s[0]||t>s[2]||n<s[1]||n>s[3]||i.h>a&&N(t,n,i.p)&&(a=i.h)}return a}}}function F(e,t,n){if(e.name&&/ayuntamiento|consistorial/i.test(e.name))return 0;let r=t%1;return n>=5?r<.45?0:r<.75?1:2:r<.3?0:r<.45?1:r<.75?2:3}function I(t,n,{skip:i=new Set}={}){let s=t.parts,f=P(s),p=[],h=[],g=[],_={pos:[],nor:[],uv:[],fac:[]};s.forEach((e,o)=>{if(e.h<=0||i.has(e.b))return;let s=t.buildings[e.b]??{},l=e.p,d=l.map(([e,t])=>n(e,t)),p=Math.min(...d),m=d.reduce((e,t)=>e+t,0)/d.length,v=m+e.h,y=e.b*.61803%1+1e-4,b=F(s,y,e.f),x=v+(e.h>4?M:0),S=0;for(let t=0;t<l.length;t++){let n=l[t],r=l[(t+1)%l.length],i=Math.hypot(r[0]-n[0],r[1]-n[1]);if(i<.05)continue;let a=(r[1]-n[1])/i,c=-(r[0]-n[0])/i,u=(n[0]+r[0])/2,d=(n[1]+r[1])/2,h=N(u+a*.1,d+c*.1,l)?-1:1,g=0;for(let e of[.25,.5,.75]){let t=n[0]+(r[0]-n[0])*e+a*h*.6,i=n[1]+(r[1]-n[1])*e+c*h*.6;g=Math.max(g,f.heightAt(t,i,o))}if(g>=e.h+(e.h>4?M:0)-.3){S+=i;continue}let v=!s.use||/residential|retail|commercial/.test(s.use),C=g>0?0:v?1:2,w=-(r[1]-n[1]),T=r[0]-n[0];w*a*h+T*c*h<0&&([n,r]=[r,n]);let E=p-.5,D=x,O=E-m,k=D-m,A=[a*h,0,c*h],j=[[n,E,S,O],[r,E,S+i,O],[r,D,S+i,k],[n,E,S,O],[r,D,S+i,k],[n,D,S,k]];for(let[t,n,r,i]of j)_.pos.push(t[0],n,t[1]),_.nor.push(...A),_.uv.push(r,i),_.fac.push(b,Math.round(y*997),C,e.h);S+=i}try{let t=l.map(([e,t])=>new r(e,t)),n=c.triangulateShape(t,[]),i=[];for(let t of n)for(let n of[t[0],t[2],t[1]])i.push(l[n][0],e.h>4?v+.15:v,l[n][1]);let o=new u;o.setAttribute(`position`,new a(i,3)),o.setAttribute(`uv`,new a(i.filter((e,t)=>t%3!=1).map(e=>e/3),2)),o.computeVertexNormals(),(s.year&&s.year<1965||e.f<=2?g:h).push(o)}catch{}});let v=new u;v.setAttribute(`position`,new a(_.pos,3)),v.setAttribute(`normal`,new a(_.nor,3)),v.setAttribute(`uv`,new a(_.uv,2)),v.setAttribute(`facade`,new a(_.fac,4));let y=new l(v,j());y.castShadow=y.receiveShadow=!0,y.name=`walls`;let b=new o;b.add(y);let x=new e({map:m(`sidewalk_diff`,{srgb:!0}),color:`#9a958c`,roughness:.95}),S=new e({map:m(`roof_tiles_diff`,{srgb:!0}),normalMap:m(`roof_tiles_nor`),roughness:.85});for(let[e,t]of[[h,x],[g,S]]){if(!e.length)continue;let n=new l(d(e),t);n.castShadow=n.receiveShadow=!0,b.add(n)}return p.push(y),{group:b,index:f,walls:y}}export{y as a,m as c,A as i,P as n,g as o,N as r,h as s,I as t};