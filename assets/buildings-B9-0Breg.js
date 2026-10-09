import{Ft as e,Gn as t,Jt as n,Mr as r,Pr as i,Qn as a,U as o,Y as s,gr as c,h as l,ir as u,kt as d,p as f,t as p,y as m}from"./BufferGeometryUtils-DRWMnnNc.js";var h=new c,g=new Map;function _(e,{srgb:n=!1}={}){if(g.has(e))return g.get(e);let r=h.load(`./textures/${e}.webp`);return r.wrapS=r.wrapT=t,r.colorSpace=n?a:``,r.anisotropy=8,g.set(e,r),r}var v=e=>({map:_(`${e}_diff`,{srgb:!0}),normalMap:_(`${e}_nor`),roughnessMap:_(`${e}_rough`)});function y(t,{color:n=`#ffffff`,normalScale:r=1,roughness:i=1}={}){let a=new e({...v(t),color:n,roughness:i});return a.normalScale.set(r,r),a}var b=new Set([`primary`,`secondary`,`tertiary`,`residential`,`unclassified`,`living_street`,`service`]),x=new Set([`pedestrian`,`footway`,`cycleway`,`steps`,`path`]);function S(e){return(t,n)=>{let r=(t-e.x0)/e.step,i=(n-e.z0)/e.step,a=Math.max(0,Math.min(e.cols-2,Math.floor(r))),o=Math.max(0,Math.min(e.rows-2,Math.floor(i))),s=Math.max(0,Math.min(1,r-a)),c=Math.max(0,Math.min(1,i-o)),l=(t,n)=>e.h[n*e.cols+t];return(l(a,o)*(1-s)+l(a+1,o)*s)*(1-c)+(l(a,o+1)*(1-s)+l(a+1,o+1)*s)*c}}function C(e,t,n,r=.03,i=2){let a=[];for(let t=0;t<e.length-1;t++){let[n,r]=e[t],[o,s]=e[t+1],c=Math.max(1,Math.ceil(Math.hypot(o-n,s-r)/i));for(let e=0;e<c;e++)a.push([n+(o-n)*e/c,r+(s-r)*e/c])}a.push(e.at(-1));let s=[],c=[],l=[],u=0;a.forEach(([e,i],o)=>{let[d,f]=a[Math.max(0,o-1)],[p,m]=a[Math.min(a.length-1,o+1)],h=p-d,g=m-f,_=Math.hypot(h,g)||1;h/=_,g/=_,o>0&&(u+=Math.hypot(e-a[o-1][0],i-a[o-1][1]));let v=-g*t/2,y=h*t/2;if(s.push(e+v,n(e+v,i+y)+r,i+y,e-v,n(e-v,i-y)+r,i-y),c.push(0,u,t,u),o>0){let e=o*2;l.push(e-2,e,e-1,e-1,e,e+1)}});let d=new f;return d.setAttribute(`position`,new o(s,3)),d.setAttribute(`uv`,new o(c,2)),d.setIndex(l),d.computeVertexNormals(),d}function w(e,t){return e.map(([n,r],i)=>{let[a,o]=e[Math.max(0,i-1)],[s,c]=e[Math.min(e.length-1,i+1)],l=Math.hypot(s-a,c-o)||1;return[n-(c-o)/l*t,r+(s-a)/l*t]})}var T=(e,t,n,r,i,a)=>{let o=i-n,s=a-r,c=o*o+s*s,l=c?Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/c)):0;return Math.hypot(e-n-l*o,t-r-l*s)};function E(e,t=16){let n=new Map,r=(e,t)=>e*100003+t;return e.forEach((e,i)=>{for(let a=0;a<e.p.length-1;a++){let[o,s]=e.p[a],[c,l]=e.p[a+1],u=e.w/2+2,d=[i,o,s,c,l,e.w/2];for(let e=Math.floor((Math.min(o,c)-u)/t);e<=Math.floor((Math.max(o,c)+u)/t);e++)for(let i=Math.floor((Math.min(s,l)-u)/t);i<=Math.floor((Math.max(s,l)+u)/t);i++)n.has(r(e,i))||n.set(r(e,i),[]),n.get(r(e,i)).push(d)}}),(e,i,a,o=0)=>{for(let[s,c,l,u,d,f]of n.get(r(Math.floor(e/t),Math.floor(i/t)))??[])if(s!==a&&T(e,i,c,l,u,d)<f+o)return!0;return!1}}function D(e,t){let n=e.w/2;return(r,i)=>{let a=null;for(let t=0;t<e.p.length-1;t++){let[n,o]=e.p[t],[s,c]=e.p[t+1],l=s-n,u=c-o,d=l*l+u*u;if(!d)continue;let f=Math.max(0,Math.min(1,((r-n)*l+(i-o)*u)/d)),p=n+l*f,m=o+u*f,h=Math.hypot(r-p,i-m);if(!a||h<a.d){let e=Math.sqrt(d);a={d:h,cx:p,cz:m,nx:-u/e,nz:l/e}}}if(!a)return t(r,i)+.05;let{cx:o,cz:s,nx:c,nz:l}=a,u=(Math.max(-n,Math.min(n,(r-o)*c+(i-s)*l))+n)/(2*n);return t(o-c*n,s-l*n)*(1-u)+t(o+c*n,s+l*n)*u+.05}}function O(e,t,n=1){let r=[],i=[],a=()=>{i.length>1&&r.push(i),i=[]};for(let r=0;r<e.length-1;r++){let[o,s]=e[r],[c,l]=e[r+1],u=Math.max(1,Math.ceil(Math.hypot(c-o,l-s)/n));for(let e=0;e<u;e++){let n=o+(c-o)*e/u,r=s+(l-s)*e/u;t(n,r)?i.push([n,r]):a()}}return t(...e.at(-1))&&i.push(e.at(-1)),a(),r}function k(e,t,n,r){let i=.25,a=[],s=[],c=e.length;e.forEach(([o,l],u)=>{let[d,f]=e[Math.max(0,u-1)],[p,m]=e[Math.min(c-1,u+1)],h=Math.hypot(p-d,m-f)||1,g=-(m-f)/h*r,_=(p-d)/h*r,v=o-g*i/2,y=l-_*i/2,b=o+g*i/2,x=l+_*i/2,S=n(v,y)-.01,C=Math.max(S,t(b,x))+.14;if(a.push(v,S,y,v,C,y,b,C,x,b,t(b,x)-.02,x),u>0){let e=(u-1)*4,t=u*4;for(let n=0;n<3;n++)r>0?s.push(e+n,e+n+1,t+n,e+n+1,t+n+1,t+n):s.push(e+n,t+n,e+n+1,e+n+1,t+n,t+n+1)}});let l=new f;l.setAttribute(`position`,new o(a,3)),l.setIndex(s);let u=l.toNonIndexed();return u.computeVertexNormals(),u}function A(e){let t=e.roads.filter(e=>b.has(e.t)&&e.p.length>=2),n=t.filter(e=>e.j),r=[];for(let e of n.length?t:[])if(!e.j)for(let t of[!1,!0]){let i=t?[...e.p].reverse():e.p,a=n.find(e=>e.p.some((t,n)=>n<e.p.length-1&&T(i[0][0],i[0][1],...e.p[n],...e.p[n+1])<1));if(!a||e.o&&e.o===1!==t)continue;let[o,s]=i[0],[c,l]=i[1],u=Math.hypot(c-o,l-s);if(u<a.w/2+3)continue;let d=(c-o)/u,f=(l-s)/u,p=a.w/2+1.2;r.push({road:e,x:o+d*p,z:s+f*p,ux:d,uz:f,nx:f,nz:-d,s0:e.o?-e.w/2+.3:.15,s1:e.w/2-.3})}return r}function j(e){let t=e.roads.filter(e=>b.has(e.t)&&e.p.length>=2),n=[];for(let[r,i]of e.points.crossings??[]){let e=null;for(let n of t)for(let t=0;t<n.p.length-1;t++){let[a,o]=n.p[t],[s,c]=n.p[t+1],l=s-a,u=c-o,d=l*l+u*u;if(!d)continue;let f=Math.max(0,Math.min(1,((r-a)*l+(i-o)*u)/d)),p=Math.hypot(r-a-f*l,i-o-f*u);(!e||p<e.d)&&(e={d:p,road:n,x:a+l*f,z:o+u*f,ux:l/Math.sqrt(d),uz:u/Math.sqrt(d)})}e&&e.d<=3&&n.push(e)}return n}function M(e,t,n){for(let r of A(e)){let e=D(r.road,t);for(let t=r.s0;t+.6<=r.s1;t+=1){let i=[r.x+r.nx*t,r.z+r.nz*t],a=[r.x+r.nx*(t+.6),r.z+r.nz*(t+.6)];n.push(C([i,a],.4,e,.025,1))}}}function N(e,t,n){if(typeof document>`u`)return;let r=t.full??t,a=(n.cols-1)*n.step,o=(n.rows-1)*n.step,s=document.createElement(`canvas`);s.width=Math.ceil(a/2),s.height=Math.ceil(o/2);let c=s.getContext(`2d`);c.fillStyle=`#000`,c.fillRect(0,0,s.width,s.height),c.setTransform(1/2,0,0,1/2,-n.x0/2,-n.z0/2),c.fillStyle=c.strokeStyle=`#fff`,c.lineJoin=c.lineCap=`round`;let u=(e,t)=>{c.beginPath(),e.forEach(([e,t],n)=>n?c.lineTo(e,t):c.moveTo(e,t)),t&&c.closePath()};for(let e of r.roads)u(e.p),c.lineWidth=e.w+(b.has(e.t)?9:4),c.stroke();c.lineWidth=9;for(let e of[...r.parts,...r.horizon??[]])u(e.p,!0),c.fill(),c.stroke();c.lineWidth=3;for(let e of r.areas)u(e.p,!0),c.fill(),c.stroke();c.lineWidth=7;for(let e of r.rail??[])u(e),c.stroke();let d=document.createElement(`canvas`);d.width=s.width,d.height=s.height;let f=d.getContext(`2d`);f.filter=`blur(2px)`,f.drawImage(s,0,0);let p=new l(d);p.colorSpace=``,p.wrapS=p.wrapT=m;let h=_(`grass_diff`,{srgb:!0});e.onBeforeCompile=e=>{e.uniforms.uLandMask={value:p},e.uniforms.uLandGrass={value:h},e.uniforms.uLandBox={value:new i(n.x0,n.z0,a,o)},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vLandXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vLandXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vLandXZ;
uniform sampler2D uLandMask;
uniform sampler2D uLandGrass;
uniform vec4 uLandBox;`).replace(`#include <map_fragment>`,`#include <map_fragment>
        {
          vec2 lq = (vLandXZ - uLandBox.xy) / uLandBox.zw;
          float urb = texture2D(uLandMask, vec2(lq.x, 1.0 - lq.y)).r;
          // hierba seca: dos escalas para que no se note la repetición, tinte pajizo y algo de tierra
          vec3 g1 = texture2D(uLandGrass, vLandXZ * 0.31).rgb, g2 = texture2D(uLandGrass, vLandXZ * 0.047).rgb;
          vec3 dry = mix(g1, g2, 0.45) * vec3(1.12, 1.0, 0.66);
          dry = mix(dry, vec3(dot(dry, vec3(0.3, 0.55, 0.15))), 0.4) * 0.82; // apagado: rastrojo, no oro
          dry = mix(dry, vec3(0.3, 0.25, 0.18), 0.35 * smoothstep(0.3, 0.7, g2.g));
          diffuseColor.rgb = mix(dry, diffuseColor.rgb, smoothstep(0.25, 0.75, urb));
        }`)},e.customProgramCacheKey=()=>`terreno-mascara`}function P(e,t,n){let i=e.map(([e,t])=>new r(e,t)),a=u.triangulateShape(i,[]),s=[],c=[];for(let r of a)for(let i of r){let[r,a]=e[i];s.push(r,t(r,a)+n,a),c.push(r,a)}let l=new f;if(l.setAttribute(`position`,new o(s,3)),l.setAttribute(`uv`,new o(c,2)),l.computeVertexNormals(),l.attributes.normal.getY(0)<0){let e=l.attributes.position.array,t=l.attributes.uv.array;for(let t=0;t<e.length;t+=9)for(let n=0;n<3;n++)[e[t+3+n],e[t+6+n]]=[e[t+6+n],e[t+3+n]];for(let e=0;e<t.length;e+=6)for(let n=0;n<2;n++)[t[e+2+n],t[e+4+n]]=[t[e+4+n],t[e+2+n]];l.computeVertexNormals()}return l}var F=(e,t)=>{let n=e.attributes.uv;for(let e=0;e<n.count;e++)n.setXY(e,n.getX(e)/t,n.getY(e)/t);return e};function I(t,r,i={}){let a=new s,o=t.terrain,c=o.x0+(o.cols-1)*o.step,l=o.z0+(o.rows-1)*o.step,u=y(`sidewalk`,{color:`#c9c4ba`});N(u,t,o);let f=([e,t,i,a],s,f=0,p=null)=>{e=Math.max(o.x0,e),t=Math.max(o.z0,t),i=Math.min(c,i),a=Math.min(l,a);let m=Math.max(1,Math.round((i-e)/s)),h=Math.max(1,Math.round((a-t)/s)),g=new n(i-e,a-t,m,h).rotateX(-Math.PI/2).translate((e+i)/2,0,(t+a)/2),_=g.attributes.position,v=g.attributes.uv;for(let e=0;e<_.count;e++)_.setY(e,r(_.getX(e),_.getZ(e))-f),v.setXY(e,_.getX(e)/2.5,_.getZ(e)/2.5);if(p){let e=g.index.array,t=[];for(let n=0;n<e.length;n+=6){let r=e[n];p(_.getX(r)+s/2,_.getZ(r)+s/2)||t.push(...e.subarray(n,n+6))}g.setIndex(t)}g.computeVertexNormals();let y=new d(g,u);return y.receiveShadow=!0,y.name=`terrain`,y},m=i.patches;if(m?.length){for(let e of m)a.add(f(e,o.step));let e=f([o.x0,o.z0,c,l],24,.6,(e,t)=>m.some(([n,r,i,a])=>e>n+24&&e<i-24&&t>r+24&&t<a-24));e.receiveShadow=!1,a.add(e)}else a.add(f([o.x0,o.z0,c,l],o.step));let h={pedestrian:[],park:[],grass:[],parking:[]};for(let e of t.areas)if(h[e.t])try{h[e.t].push(P(e.p,r,e.t===`pedestrian`?.04:.05))}catch{}let g={pedestrian:[y(`granite`,{color:`#f3f1ec`}),2.4],park:[y(`grass`),3],grass:[y(`grass`),3],parking:[y(`asphalt`,{color:`#8d8d8d`}),4]};for(let[e,t]of Object.entries(h)){if(!t.length)continue;let[n,r]=g[e],i=new d(F(p(t),r),n);i.receiveShadow=!0,a.add(i)}let _=t.roads.filter(e=>b.has(e.t)&&e.p.length>=2),v=E(_),S=t.points.crossings??[],T=(e,t,n)=>S.some(([r,i])=>Math.abs(r-e)<n&&Math.abs(i-t)<n&&Math.hypot(r-e,i-t)<n),A=[],I=[],L=[],R=[],z=[];_.forEach((e,t)=>{A.push(F(C(e.p,e.w,r,.05),4));let n=D(e,r);for(let i of[1,-1])for(let a of O(w(e.p,i*(e.w/2+.12)),(e,n)=>!v(e,n,t,.2)))I.push(k(a,r,n,i));if(e.w>=6&&!e.o&&!e.j&&e.t!==`service`)for(let r of O(e.p,(e,n)=>!v(e,n,t,1.5)&&!T(e,n,3.2))){let e=C(r,.15,n,.02,1),t=e.attributes.uv;for(let e=0;e<t.count;e++)t.setY(e,t.getY(e)/7);L.push(e)}});for(let e of t.roads)x.has(e.t)&&e.p.length>=2&&R.push(F(C(e.p,e.w,r,.035),3));M(t,r,z);let B=y(`asphalt`,{color:`#a7a7a7`});B.polygonOffset=!0,B.polygonOffsetFactor=-1;let V=(e,t)=>{if(!e.length)return null;let n=new d(p(e),t);return n.receiveShadow=!0,a.add(n),n};V(R,y(`granite`,{color:`#e8e5df`})),V(A,B),V(I,new e({color:`#8f8c86`,roughness:.9}));let H=()=>Object.assign(new e({color:`#efeee8`,roughness:.62}),{polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),U=H();U.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vAlong;`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
vAlong = uv.y;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vAlong;`).replace(`#include <map_fragment>`,`if (fract(vAlong) > 0.43) discard;`)},V(L,U);for(let{road:e,x:n,z:i,ux:a,uz:o}of j(t)){let t=D(e,r),s=e.w>=7?4:3,c=Math.floor((e.w-.6)/1);for(let e=0;e<c;e++){let r=(e-(c-1)/2)*1,l=n-o*r,u=i+a*r;z.push(C([[l-a*s/2,u-o*s/2],[l+a*s/2,u+o*s/2]],.5,t,.025,1))}}V(z,H());let W=[],G=[];for(let e of t.rail){W.push(F(C(e,3.2,r,.06),2));for(let t of[-.72,.72])G.push(C(w(e,t),.08,r,.2))}return V(W,new e({color:`#7d756c`,roughness:1})),V(G,new e({color:`#5a5550`,metalness:.8,roughness:.35})),{group:a,terrain:a.getObjectByName(`terrain`)}}function L(){let t=new e({roughness:.9,metalness:0});t.normalMap=_(`brick_red_nor`),t.normalScale.set(.8,.8);let n={tBrickR:{value:_(`brick_red_diff`,{srgb:!0})},tBrickY:{value:_(`brick_yellow_diff`,{srgb:!0})},tPlasterB:{value:_(`plaster_beige_diff`,{srgb:!0})},tPlasterW:{value:_(`plaster_white_diff`,{srgb:!0})},tNorBrick:{value:_(`brick_red_nor`)},tNorPlaster:{value:_(`plaster_beige_nor`)},tStone:{value:_(`stone_diff`,{srgb:!0})}};return t.onBeforeCompile=e=>{Object.assign(e.uniforms,n),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
        }`)},t.customProgramCacheKey=()=>`facade-v1`,t}var R=.9;function z(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let[o,s]=n[i],[c,l]=n[a];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r}function B(e,t=20){let n=new Map,r=(e,t)=>e*100003+t;e.forEach((e,i)=>{let a=e.p.map(e=>e[0]),o=e.p.map(e=>e[1]);e.box=[Math.min(...a),Math.min(...o),Math.max(...a),Math.max(...o)];for(let a=Math.floor(e.box[0]/t);a<=Math.floor(e.box[2]/t);a++)for(let o=Math.floor(e.box[1]/t);o<=Math.floor(e.box[3]/t);o++){let e=r(a,o);n.has(e)||n.set(e,[]),n.get(e).push(i)}});let i=(e,i)=>n.get(r(Math.floor(e/t),Math.floor(i/t)))??[];return{near:i,heightAt(t,n,r=-1){let a=0;for(let o of i(t,n)){if(o===r)continue;let i=e[o],s=i.box;t<s[0]||t>s[2]||n<s[1]||n>s[3]||i.h>a&&z(t,n,i.p)&&(a=i.h)}return a}}}function V(e,t,n){if(e.name&&/ayuntamiento|consistorial/i.test(e.name))return 0;let r=t%1;return n>=5?r<.45?0:r<.75?1:2:r<.3?0:r<.45?1:r<.75?2:3}function H(t,n,{skip:i=new Set}={}){let a=t.parts,c=B(a),l=[],m=[],h=[],g={pos:[],nor:[],uv:[],fac:[]};a.forEach((e,a)=>{if(e.h<=0||i.has(e.b))return;let s=t.buildings[e.b]??{},l=e.p,d=l.map(([e,t])=>n(e,t)),p=Math.min(...d),_=d.reduce((e,t)=>e+t,0)/d.length,v=_+e.h,y=e.b*.61803%1+1e-4,b=V(s,y,e.f),x=v+(e.h>4?R:0),S=0;for(let t=0;t<l.length;t++){let n=l[t],r=l[(t+1)%l.length],i=Math.hypot(r[0]-n[0],r[1]-n[1]);if(i<.05)continue;let o=(r[1]-n[1])/i,u=-(r[0]-n[0])/i,d=(n[0]+r[0])/2,f=(n[1]+r[1])/2,m=z(d+o*.1,f+u*.1,l)?-1:1,h=0;for(let e of[.25,.5,.75]){let t=n[0]+(r[0]-n[0])*e+o*m*.6,i=n[1]+(r[1]-n[1])*e+u*m*.6;h=Math.max(h,c.heightAt(t,i,a))}if(h>=e.h+(e.h>4?R:0)-.3){S+=i;continue}let v=!s.use||/residential|retail|commercial/.test(s.use),C=h>0?0:v?1:2,w=-(r[1]-n[1]),T=r[0]-n[0];w*o*m+T*u*m<0&&([n,r]=[r,n]);let E=p-.5,D=x,O=E-_,k=D-_,A=[o*m,0,u*m],j=[[n,E,S,O],[r,E,S+i,O],[r,D,S+i,k],[n,E,S,O],[r,D,S+i,k],[n,D,S,k]];for(let[t,n,r,i]of j)g.pos.push(t[0],n,t[1]),g.nor.push(...A),g.uv.push(r,i),g.fac.push(b,Math.round(y*997),C,e.h);S+=i}try{let t=l.map(([e,t])=>new r(e,t)),n=u.triangulateShape(t,[]),i=[];for(let t of n)for(let n of[t[0],t[2],t[1]])i.push(l[n][0],e.h>4?v+.15:v,l[n][1]);let a=new f;a.setAttribute(`position`,new o(i,3)),a.setAttribute(`uv`,new o(i.filter((e,t)=>t%3!=1).map(e=>e/3),2)),a.computeVertexNormals(),(s.year&&s.year<1965||e.f<=2?h:m).push(a)}catch{}});let v=new f;v.setAttribute(`position`,new o(g.pos,3)),v.setAttribute(`normal`,new o(g.nor,3)),v.setAttribute(`uv`,new o(g.uv,2)),v.setAttribute(`facade`,new o(g.fac,4));let y=new d(v,L());y.castShadow=y.receiveShadow=!0,y.name=`walls`;let b=new s;b.add(y);let x=new e({map:_(`sidewalk_diff`,{srgb:!0}),color:`#9a958c`,roughness:.95}),S=new e({map:_(`roof_tiles_diff`,{srgb:!0}),normalMap:_(`roof_tiles_nor`),roughness:.85});for(let[e,t]of[[m,x],[h,S]]){if(!e.length)continue;let n=new d(p(e),t);n.castShadow=n.receiveShadow=!0,b.add(n)}return l.push(y),{group:b,index:c,walls:y}}export{j as a,y as c,I as i,v as l,B as n,S as o,z as r,A as s,H as t,_ as u};