import{E as e,H as t,J as n,Mr as r,Ot as i,Pt as a,Wn as o,Zn as s,f as c,gr as l,m as u,rr as d,t as f,u as p,v as m,y as h}from"./BufferGeometryUtils-C26rxfxB.js";var g=new l,_=new Map;function v(e,{srgb:t=!1}={}){if(_.has(e))return _.get(e);let n=g.load(`./textures/${e}.webp`);return n.wrapS=n.wrapT=o,n.colorSpace=t?s:``,n.anisotropy=8,_.set(e,n),n}var y=e=>({map:v(`${e}_diff`,{srgb:!0}),normalMap:v(`${e}_nor`),roughnessMap:v(`${e}_rough`)});function b(e,{color:t=`#ffffff`,normalScale:n=1,roughness:r=1}={}){let i=new a({...y(e),color:t,roughness:r});return i.normalScale.set(n,n),i}var x=[{t:`THE HARBOUR BAR`,fascia:`#123321`,ink:`#e9cf8a`,serif:!0},{t:`McGRATH'S`,s:`BAR · LOUNGE`,fascia:`#0e0e0e`,ink:`#e4c47a`,serif:!0},{t:`PHARMACY`,fascia:`#f2f1ec`,ink:`#13703a`,cross:!0},{t:`FOOD & DELI`,s:`OPEN 7 DAYS`,fascia:`#0b5c52`,ink:`#ffffff`},{t:`BOOKMAKERS`,fascia:`#163a78`,ink:`#ffd23a`},{t:`CAFÉ · BAKERY`,fascia:`#3b2a20`,ink:`#f3e6cc`,serif:!0},{t:`CHARITY SHOP`,fascia:`#5a2a6e`,ink:`#ffffff`},{t:`NEWSAGENT`,s:`TOBACCONIST`,fascia:`#7a1218`,ink:`#f6e7b8`,serif:!0},{t:`AUCTIONEERS`,s:`ESTATE AGENTS`,fascia:`#1a2c44`,ink:`#e8dcc0`,serif:!0},{t:`FISH & CHIPS`,fascia:`#1d4f8c`,ink:`#ffffff`},{t:`BARBER`,fascia:`#111111`,ink:`#ffffff`},{t:`FAMILY BUTCHER`,fascia:`#6b0f12`,ink:`#f2e2b8`,serif:!0},{t:`FLORIST`,fascia:`#2d4a2a`,ink:`#f4ecd8`,serif:!0},{t:`O'DONNELL'S`,s:`TRADITIONAL PUB`,fascia:`#0f2a1c`,ink:`#e0c27c`,serif:!0},{t:`OPTICIAN`,fascia:`#e9e6df`,ink:`#1d3557`},{t:`BOOKSHOP`,fascia:`#2c3e50`,ink:`#efe2c4`,serif:!0}],S=null;function C(){if(S)return S;let e=1024,t=document.createElement(`canvas`);t.width=e,t.height=128*x.length;let n=t.getContext(`2d`);return x.forEach((t,r)=>{let i=r*128,a=t.serif?`Georgia, "Times New Roman", serif`:`"Arial Black", Arial, sans-serif`;n.textAlign=`center`,n.textBaseline=`middle`;let o=t.cross?572:e/2,s=t.s?62:80;n.font=`bold ${s}px ${a}`;let c=Math.min(1,(e-(t.cross?260:120))/n.measureText(t.t).width);if(n.save(),n.translate(o,i+(t.s?50:68)),n.scale(c,1),n.fillStyle=`rgba(0,0,0,0.35)`,n.fillText(t.t,3,3),n.fillStyle=t.ink,n.fillText(t.t,0,0),n.restore(),t.s&&(n.font=`bold 30px ${a}`,n.fillStyle=t.ink,n.fillText(t.s,o,i+102)),t.cross){let e=i+64;n.fillStyle=`#19a34a`,n.fillRect(106,e-15,88,30),n.fillRect(135,e-44,30,88)}}),S=new u(t),S.colorSpace=s,S.anisotropy=8,S.wrapS=S.wrapT=m,S}var w=null;function T(){if(w)return w;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=17,r=()=>(n=n*16807%2147483647)/2147483647;t.fillStyle=`#2c3036`,t.fillRect(0,0,256,256);let i=256/7;for(let e=0;e<8;e++)for(let n=-1;n<=7;n++){let a=n*i+(e%2?i/2:0),o=70+r()*34,s=o+6+r()*6;t.fillStyle=`rgb(${o|0},${o+4|0},${s|0})`,t.fillRect(a+1,256-(e+1)*32+1,34.57142857142857,31),t.fillStyle=`rgba(0,0,0,0.35)`,t.fillRect(a,256-(e+1)*32,i,3)}return w=new u(e),w.colorSpace=s,w.wrapS=w.wrapT=o,w.anisotropy=8,w}var E=e=>{let t=new h(e).convertSRGBToLinear();return`vec3(${t.r.toFixed(4)}, ${t.g.toFixed(4)}, ${t.b.toFixed(4)})`};function D(){let e=new a({roughness:.9,metalness:0});e.normalMap=v(`brick_red_nor`),e.normalScale.set(.8,.8);let t={tBrickR:{value:v(`brick_red_diff`,{srgb:!0})},tBrickY:{value:v(`brick_yellow_diff`,{srgb:!0})},tPlasterW:{value:v(`plaster_white_diff`,{srgb:!0})},tNorBrick:{value:v(`brick_red_nor`)},tNorPlaster:{value:v(`plaster_beige_nor`)},tSigns:{value:C()}},n=x.length,r=`const vec3 FASCIA[${n}] = vec3[${n}](${x.map(e=>E(e.fascia)).join(`, `)});`;return e.onBeforeCompile=e=>{Object.assign(e.uniforms,t),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec4 facade;
varying vec4 vFacade;
varying vec2 vWall;`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
vFacade = facade;
vWall = uv;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform sampler2D tBrickR, tBrickY, tPlasterW, tNorBrick, tNorPlaster, tSigns;
        varying vec4 vFacade;
        varying vec2 vWall;
        ${r}
        float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float box(vec2 p, vec2 a, vec2 b) { vec2 s = step(a, p) * step(p, b); return s.x * s.y; }
        // Línea suavizada (barrotes, travesaños): se funde a distancia para no hacer ruido.
        float aline(float v, float c, float hw) { float fw = fwidth(v); return (1.0 - smoothstep(hw - fw, hw + fw, abs(v - c))) * clamp(2.0 - fw * 40.0, 0.0, 1.0); }
        // Revoco pintado: crema, amarillo, salvia, azul, rosa, blanco, gris, terracota, lila, limón
        vec3 pastel(float r) {
          return r < 0.12 ? vec3(0.94, 0.89, 0.76) : r < 0.22 ? vec3(0.96, 0.85, 0.56) : r < 0.31 ? vec3(0.74, 0.81, 0.68)
            : r < 0.40 ? vec3(0.72, 0.81, 0.88) : r < 0.48 ? vec3(0.93, 0.76, 0.74) : r < 0.62 ? vec3(0.95, 0.95, 0.92)
            : r < 0.70 ? vec3(0.77, 0.77, 0.75) : r < 0.78 ? vec3(0.84, 0.62, 0.48) : r < 0.86 ? vec3(0.81, 0.77, 0.87) : vec3(0.97, 0.93, 0.72);
        }
        // Puertas: rojo, azul marino, verde, amarillo, negro, turquesa, azul, burdeos
        vec3 doorPaint(float r) {
          return r < 0.15 ? vec3(0.55, 0.06, 0.06) : r < 0.28 ? vec3(0.07, 0.12, 0.30) : r < 0.41 ? vec3(0.05, 0.30, 0.17)
            : r < 0.52 ? vec3(0.88, 0.66, 0.10) : r < 0.66 ? vec3(0.05, 0.05, 0.05) : r < 0.76 ? vec3(0.04, 0.38, 0.40)
            : r < 0.88 ? vec3(0.10, 0.30, 0.60) : vec3(0.36, 0.05, 0.10);
        }
        // Máscaras de la fachada irlandesa (todo en metros).
        //   glass, frame (pintura blanca de las guillotinas), light (molduras, alféizares, cornisa), paint + paintCol
        //   (puertas, escaparates, rótulos, zócalo), arch (dintel de ladrillo más oscuro), sign (letras del rótulo)
        void irishFacade(vec2 w, out float glass, out float frame, out float light, out float paint, out vec3 paintCol,
                         out float arch, out vec4 sign, out float shade, out vec2 win, out float curtain) {
          glass = 0.0; frame = 0.0; light = 0.0; paint = 0.0; arch = 0.0; curtain = 0.0;
          paintCol = vec3(0.0); sign = vec4(0.0); shade = 1.0; win = vec2(-1.0);
          float seed = floor(vFacade.y + 0.5), top = vFacade.w;
          if (vFacade.z < 0.5) return;                             // medianera ciega
          bool modern = top > 15.5;                                // bloques de pisos recientes
          bool brick = vFacade.x < 1.5;
          float G = modern ? 3.4 : 3.7, F = modern ? 3.0 : 3.25;
          float BAY = modern ? 3.4 : 2.55 + 0.6 * h21(vec2(seed, 9.1));
          float bay = floor(w.x / BAY), bx = mod(w.x, BAY);
          // Remate: cornisa y albardilla del peto
          if (w.y > top - 1.0) {
            light = max(step(top - 0.98, w.y) * step(w.y, top - 0.74), step(top - 0.12, w.y));
            return;
          }
          vec2 lo, hi;
          float fy;
          if (w.y < G) {
            if (w.y < 0.42 && !brick) { paint = 1.0; paintCol = vec3(0.12, 0.12, 0.12); }   // zócalo pintado
            bool shops = vFacade.z < 1.5 && h21(vec2(seed, 2.0)) < (modern ? 0.75 : 0.6);
            if (shops) {
              float U = BAY * 2.0, unit = floor(w.x / U), ux = mod(w.x, U);
              float idx = floor(h21(vec2(unit, seed + 7.7)) * ${n}.0);
              vec3 fc = FASCIA[int(idx)];
              paint = 1.0;
              paintCol = fc;
              // Pilastras con ménsula a cada lado del local
              if (ux < 0.3 || ux > U - 0.3) { paintCol = fc * 0.85 + 0.02; light = step(G - 0.95, w.y) * step(w.y, G - 0.75); return; }
              if (w.y > G - 0.95) {                                   // rótulo (fascia) y su cornisa
                if (w.y > G - 0.22) { paint = 0.0; light = 1.0; return; }
                vec2 suv = vec2((ux - 0.45) / (U - 0.9), (w.y - (G - 0.9)) / 0.64);
                if (suv.x > 0.0 && suv.x < 1.0 && suv.y > 0.0 && suv.y < 1.0) sign = texture2D(tSigns, vec2(suv.x, 1.0 - (idx + 1.0 - suv.y) / ${n}.0));
                return;
              }
              float dl = h21(vec2(unit, seed)) < 0.5 ? 0.42 : U - 1.42;   // puerta a un lado
              if (box(vec2(ux, w.y), vec2(dl, 0.0), vec2(dl + 1.0, 2.6)) > 0.5) {
                glass = box(vec2(ux, w.y), vec2(dl + 0.13, 0.95), vec2(dl + 0.87, 2.45));
                shade = 0.72;
                return;
              }
              if (w.y < 0.62) return;                                  // zócalo del escaparate
              float mull = aline(ux, dl < 1.0 ? (dl + 1.1 + U - 0.38) * 0.5 : (0.38 + dl - 0.1) * 0.5, 0.035);
              float transom = box(vec2(ux, w.y), vec2(-1.0, 2.2), vec2(99.0, 2.27));
              float pane = box(vec2(ux, w.y), vec2(0.38, 0.7), vec2(U - 0.38, G - 1.05)) * (dl < 1.0 ? step(dl + 1.1, ux) : step(ux, dl - 0.1));
              glass = pane * (1.0 - max(mull, transom));
              light = (1.0 - pane) * step(0.62, w.y) * step(w.y, 0.7);
              return;
            }
            if (!modern && mod(bay, 2.0) < 0.5) {                     // puerta georgiana con montante de abanico
              float cx = BAY * 0.5;
              vec2 d = vec2(bx - cx, w.y - 2.45);
              float r = length(d);
              if (box(vec2(bx, w.y), vec2(cx - 0.5, 0.15), vec2(cx + 0.5, 2.45)) > 0.5) {
                paint = 1.0;
                paintCol = doorPaint(h21(vec2(bay, seed + 5.5)));
                // cuarterones: sombras finas
                float pnl = box(vec2(abs(bx - cx), w.y), vec2(0.1, 0.35), vec2(0.4, 1.2)) + box(vec2(abs(bx - cx), w.y), vec2(0.1, 1.4), vec2(0.4, 2.3));
                shade = 1.0 - 0.18 * (1.0 - pnl) * step(0.05, abs(bx - cx));
                shade *= 0.92;
                return;
              }
              if (d.y >= 0.0 && r < 0.5) {                             // abanico: cristal con radios blancos
                glass = 1.0;
                float a = atan(d.y, d.x) * 7.0 / 3.14159;
                frame = max(aline(a, floor(a + 0.5), 0.09), step(0.44, r));
                frame = max(frame, step(r, 0.12));
                return;
              }
              if (box(vec2(bx, w.y), vec2(cx - 0.72, 0.15), vec2(cx + 0.72, 2.45)) > 0.5 || (d.y >= 0.0 && r < 0.68)) {
                light = 1.0;                                           // jambas y arco claros
                return;
              }
              return;
            }
            lo = vec2(BAY * 0.5 - (modern ? 0.9 : 0.55), 0.95);
            hi = vec2(BAY * 0.5 + (modern ? 0.9 : 0.55), modern ? 2.6 : 2.85);
            fy = w.y;
            win = vec2(bay, -1.0);
          } else {
            float lvl = floor((w.y - G) / F);
            fy = mod(w.y - G, F);
            win = vec2(bay, lvl);
            if (modern) {
              lo = vec2(BAY * 0.5 - 0.9, 0.85);
              hi = vec2(BAY * 0.5 + 0.9, 2.45);
            } else {
              // Primera planta (piano nobile) más alta; las de arriba, cada vez más bajas.
              float hh = lvl < 0.5 ? 2.05 : lvl < 1.5 ? 1.8 : 1.55;
              float ww = min(1.08, BAY * 0.42);
              lo = vec2(BAY * 0.5 - ww * 0.5, lvl < 0.5 ? 0.55 : 0.75);
              hi = vec2(BAY * 0.5 + ww * 0.5, lo.y + hh);
            }
            if (fy > F - 0.1 && !brick && !modern) light = 0.35;          // línea de imposta tenue
          }
          // Ventana de guillotina (o ventana moderna sin barrotes)
          vec2 p = vec2(bx, fy);
          float hole = box(p, lo, hi);
          float rim = box(p, lo - 0.07, hi + 0.07) - hole;
          vec2 q = (p - lo) / (hi - lo);
          float bars;
          if (modern) bars = aline(q.x, 0.5, 0.012);
          else {
            bool georgian = h21(vec2(seed, 3.3)) < 0.45;
            bars = aline(q.y, 0.5, 0.022);                               // travesaño de encuentro
            bars = max(bars, aline(q.x, 0.5, 0.018));
            if (georgian) {
              bars = max(bars, max(aline(q.x, 1.0 / 6.0, 0.016), aline(q.x, 5.0 / 6.0, 0.016)));
              bars = max(bars, max(aline(q.y, 0.25, 0.016), aline(q.y, 0.75, 0.016)));
            }
          }
          glass = hole * (1.0 - bars);
          frame = hole * bars + rim;
          // Visillos (muy de aquí) en la mitad de abajo de algunas ventanas
          curtain = hole * step(0.55, h21(win + seed * 0.37)) * step(q.y, 0.5) * (modern ? 0.0 : 1.0);
          // Hondo del hueco: sombra bajo el dintel
          shade = 1.0 - hole * 0.35 * smoothstep(0.8, 1.0, q.y);
          // Alféizar de piedra, y encima dintel (ladrillo) o recercado de yeso con guardapolvo (revoco)
          light = max(light, box(p, vec2(lo.x - 0.1, lo.y - 0.16), vec2(hi.x + 0.1, lo.y - 0.07)));
          if (modern) frame = max(frame * 0.0 + hole * bars, rim);
          else if (brick) arch = box(p, vec2(lo.x - 0.1, hi.y + 0.07), vec2(hi.x + 0.1, hi.y + 0.34));
          else {
            light = max(light, box(p, lo - 0.2, hi + 0.2) - box(p, lo - 0.07, hi + 0.07));
            if (w.y > G && w.y < G + F) light = max(light, box(p, vec2(lo.x - 0.3, hi.y + 0.22), vec2(hi.x + 0.3, hi.y + 0.36)));
          }
        }`).replace(`#include <map_fragment>`,`int st = int(vFacade.x + 0.5);
        vec2 tuv = vWall / (st < 2 ? 0.9 : 2.5);
        float bseed = floor(vFacade.y + 0.5);
        // Ladrillo de Dublín (rojo oscuro, algo pardo) o revoco pintado
        vec3 base = st == 0 ? texture2D(tBrickR, tuv).rgb * vec3(0.86, 0.72, 0.68)
          : st == 1 ? texture2D(tBrickY, tuv).rgb * vec3(0.78, 0.62, 0.52)
          : texture2D(tPlasterW, tuv).rgb * pastel(h21(vec2(bseed, 8.8)));
        base *= 0.92 + 0.16 * h21(vec2(bseed, 1.7));
        if (vFacade.z < 0.5) base *= vec3(0.86, 0.84, 0.8);
        float glass, frame, light, paint, arch, curtain; vec3 paintCol; vec4 sign; float shade; vec2 win;
        irishFacade(vWall, glass, frame, light, paint, paintCol, arch, sign, shade, win, curtain);
        vec3 col = base;
        col = mix(col, col * vec3(0.72, 0.6, 0.58), arch);
        col = mix(col, vec3(0.92, 0.91, 0.87), light);
        col = mix(col, paintCol, paint);
        col = mix(col, vec3(0.93, 0.93, 0.91), frame);
        float wr = h21(win + bseed * 0.37);
        float groundRow = step(vWall.y, 3.6);
        vec3 gcol = mix(vec3(0.13, 0.15, 0.17) * (0.7 + 0.6 * fract(wr * 7.3)), vec3(0.16, 0.14, 0.12) * (0.8 + 0.6 * wr), groundRow);
        gcol = mix(gcol, vec3(0.86, 0.85, 0.8), curtain * 0.8);
        col = mix(col, gcol, glass);
        col = mix(col, sign.rgb, sign.a);
        col *= shade;
        diffuseColor.rgb *= col;
        float glassMask = glass * (1.0 - curtain);
        float gloss = max(paint, frame);`).replace(`#include <roughnessmap_fragment>`,`float roughnessFactor = mix(roughness, 0.12, glassMask);
        roughnessFactor = mix(roughnessFactor, 0.45, gloss);`).replace(`#include <metalnessmap_fragment>`,`float metalnessFactor = mix(metalness, 0.7 - 0.4 * groundRow, glassMask);`).replace(`#include <normal_fragment_maps>`,`{
          vec3 mapN = (st < 2 ? texture2D(tNorBrick, tuv) : texture2D(tNorPlaster, tuv)).xyz * 2.0 - 1.0;
          mapN.xy *= normalScale * (1.0 - max(max(glass, paint), max(frame, light)));
          mat3 tbn = getTangentFrame(-vViewPosition, normal, tuv);
          normal = normalize(tbn * mapN);
        }`)},e.customProgramCacheKey=()=>`facade-irish-v1`,e}function O(e=`spain`){if(e===`irish`)return D();let t=new a({roughness:.9,metalness:0});t.normalMap=v(`brick_red_nor`),t.normalScale.set(.8,.8);let n={tBrickR:{value:v(`brick_red_diff`,{srgb:!0})},tBrickY:{value:v(`brick_yellow_diff`,{srgb:!0})},tPlasterB:{value:v(`plaster_beige_diff`,{srgb:!0})},tPlasterW:{value:v(`plaster_white_diff`,{srgb:!0})},tNorBrick:{value:v(`brick_red_nor`)},tNorPlaster:{value:v(`plaster_beige_nor`)},tStone:{value:v(`stone_diff`,{srgb:!0})}};return t.onBeforeCompile=e=>{Object.assign(e.uniforms,n),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
        }`)},t.customProgramCacheKey=()=>`facade-v2`,t}var k=.9;function A(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let[o,s]=n[i],[c,l]=n[a];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r}function j(e,t=20){let n=new Map,r=(e,t)=>e*100003+t;e.forEach((e,i)=>{let a=e.p.map(e=>e[0]),o=e.p.map(e=>e[1]);e.box=[Math.min(...a),Math.min(...o),Math.max(...a),Math.max(...o)];for(let a=Math.floor(e.box[0]/t);a<=Math.floor(e.box[2]/t);a++)for(let o=Math.floor(e.box[1]/t);o<=Math.floor(e.box[3]/t);o++){let e=r(a,o);n.has(e)||n.set(e,[]),n.get(e).push(i)}});let i=(e,i)=>n.get(r(Math.floor(e/t),Math.floor(i/t)))??[];return{near:i,heightAt(t,n,r=-1){let a=0;for(let o of i(t,n)){if(o===r)continue;let i=e[o],s=i.box;t<s[0]||t>s[2]||n<s[1]||n>s[3]||i.h>a&&A(t,n,i.p)&&(a=i.h)}return a}}}function M(e,t,n){if(e.name&&/ayuntamiento|consistorial/i.test(e.name))return 0;let r=t%1;return n>=5?r<.45?0:r<.75?1:2:r<.3?0:r<.45?1:r<.75?2:3}function N(e,t){let n=e*7.31%1;return t>=5?n<.3?0:3:n<.32?0:n<.4?1:3}function P(e,o,{skip:s=new Set,facades:l=`spain`}={}){let u=l===`irish`,p=e.parts,m=j(p),h=[],g=[],_=[],y=[],b={pos:[],nor:[],uv:[],fac:[]};p.forEach((n,i)=>{if(n.h<=0||s.has(n.b))return;let a=e.buildings[n.b]??{},l=n.p,f=l.map(([e,t])=>o(e,t)),p=Math.min(...f),h=f.reduce((e,t)=>e+t,0)/f.length,v=h+n.h,x=n.b*.61803%1+1e-4,S=Number.isInteger(a.style)?a.style:u?N(x,n.f):M(a,x,n.f),C=v+(n.h>4?k:0),w=0;for(let e=0;e<l.length;e++){let t=l[e],r=l[(e+1)%l.length],o=Math.hypot(r[0]-t[0],r[1]-t[1]);if(o<.05)continue;let s=(r[1]-t[1])/o,c=-(r[0]-t[0])/o,u=(t[0]+r[0])/2,d=(t[1]+r[1])/2,f=A(u+s*.1,d+c*.1,l)?-1:1,g=0;for(let e of[.25,.5,.75]){let n=t[0]+(r[0]-t[0])*e+s*f*.6,a=t[1]+(r[1]-t[1])*e+c*f*.6;g=Math.max(g,m.heightAt(n,a,i))}if(g>=n.h+(n.h>4?k:0)-.3){w+=o;continue}let _=!a.use||/residential|retail|commercial/.test(a.use),v=g>0?0:_?1:2,y=-(r[1]-t[1]),T=r[0]-t[0];y*s*f+T*c*f<0&&([t,r]=[r,t]);let E=p-.5,D=C,O=E-h,j=D-h,M=[s*f,0,c*f],N=[[t,E,w,O],[r,E,w+o,O],[r,D,w+o,j],[t,E,w,O],[r,D,w+o,j],[t,D,w,j]];for(let[e,t,r,i]of N)b.pos.push(e[0],t,e[1]),b.nor.push(...M),b.uv.push(r,i),b.fac.push(S,Math.round(x*997),v,n.h);w+=o}if(u&&n.f<=4&&n.h<=15){let e=F(l,n.h>4?v+.15:v);if(e){if(_.push(e.geo),n.h>5)for(let t of e.ends)y.push(I(t,e.dir,e.ridgeY,x));return}}try{let e=l.map(([e,t])=>new r(e,t)),i=d.triangulateShape(e,[]),o=[];for(let e of i)for(let t of[e[0],e[2],e[1]])o.push(l[t][0],n.h>4?v+.15:v,l[t][1]);let s=new c;s.setAttribute(`position`,new t(o,3)),s.setAttribute(`uv`,new t(o.filter((e,t)=>t%3!=1).map(e=>e/3),2)),s.computeVertexNormals(),(u?n.f<=4&&n.h<=15?_:g:a.year&&a.year<1965||n.f<=2?_:g).push(s)}catch{}});let x=new c;x.setAttribute(`position`,new t(b.pos,3)),x.setAttribute(`normal`,new t(b.nor,3)),x.setAttribute(`uv`,new t(b.uv,2)),x.setAttribute(`facade`,new t(b.fac,4));let S=new i(x,O(l));S.castShadow=S.receiveShadow=!0,S.name=`walls`;let C=new n;C.add(S);let w=new a({map:v(`sidewalk_diff`,{srgb:!0}),color:`#9a958c`,roughness:.95}),E=u?new a({map:T(),roughness:.7,metalness:.05,side:2}):new a({map:v(`roof_tiles_diff`,{srgb:!0}),normalMap:v(`roof_tiles_nor`),roughness:.85});if(y.length){let e=new a({map:v(`brick_red_diff`,{srgb:!0}),color:`#c9a294`,roughness:.9}),t=new i(f(y),e);t.castShadow=t.receiveShadow=!0,t.name=`chimeneas`,C.add(t)}for(let[e,t]of[[g,w],[_,E]]){if(!e.length)continue;let n=new i(f(e),t);n.castShadow=n.receiveShadow=!0,C.add(n)}return h.push(S),{group:C,index:m,walls:S}}function F(e,n){let r=e;if(r.length>4&&r.length<=10){let[e,t]=r.reduce((e,[t,n])=>[e[0]+t/r.length,e[1]+n/r.length],[0,0]),n=0,i=0,a=0;for(let[o,s]of r)n+=(o-e)**2,i+=(s-t)**2,a+=(o-e)*(s-t);let o=.5*Math.atan2(2*a,n-i),s=Math.cos(o),c=Math.sin(o),l=r.map(([n,r])=>[(n-e)*s+(r-t)*c,-(n-e)*c+(r-t)*s]),[u,d]=[Math.min(...l.map(e=>e[0])),Math.max(...l.map(e=>e[0]))],[f,p]=[Math.min(...l.map(e=>e[1])),Math.max(...l.map(e=>e[1]))],m=0;for(let e=0,t=r.length-1;e<r.length;t=e++)m+=r[t][0]*r[e][1]-r[e][0]*r[t][1];if(Math.abs(m)/2<.93*(d-u)*(p-f))return null;r=[[u,f],[d,f],[d,p],[u,p]].map(([n,r])=>[e+n*s-r*c,t+n*c+r*s])}if(r.length!==4)return null;let i=r.map((e,t)=>{let n=r[(t+1)%4],i=r[(t+2)%4];return(n[0]-e[0])*(i[1]-n[1])-(n[1]-e[1])*(i[0]-n[0])});if(!(i.every(e=>e>0)||i.every(e=>e<0)))return null;let a=(e,t)=>Math.hypot(t[0]-e[0],t[1]-e[1]);a(r[0],r[1])+a(r[2],r[3])<a(r[1],r[2])+a(r[3],r[0])&&(r=[r[1],r[2],r[3],r[0]]);let o=(e,t)=>[(e[0]+t[0])/2,(e[1]+t[1])/2],s=o(r[1],r[2]),l=o(r[3],r[0]),u=(a(r[1],r[2])+a(r[3],r[0]))/2,d=a(s,l);if(u<3||d<2||u>22)return null;let f=[(s[0]-l[0])/d,(s[1]-l[1])/d],p=Math.min(u*.36,3.6),m=Math.min(u/2,d/2),h=n+p,g=[l[0]+f[0]*m,h,l[1]+f[1]*m],_=[s[0]-f[0]*m,h,s[1]-f[1]*m],v=r.map(([e,t])=>[e,n,t]),y=[],b=[],x=[],S=(e,t,r,i,a)=>{let o=t[0]-e[0],s=t[1]-e[1],c=t[2]-e[2],l=r[0]-e[0],u=r[1]-e[1],d=r[2]-e[2],f=[s*d-c*u,c*l-o*d,o*u-s*l];f[1]<0&&([t,r]=[r,t],f=f.map(e=>-e));let p=Math.hypot(...f)||1,m=a[0]-i[0],h=a[2]-i[2],g=Math.hypot(m,h)||1;for(let a of[e,t,r]){y.push(...a),b.push(f[0]/p,f[1]/p,f[2]/p);let e=((a[0]-i[0])*m+(a[2]-i[2])*h)/g,t=Math.abs((a[0]-i[0])*h-(a[2]-i[2])*m)/g;x.push(e/2,Math.hypot(t,a[1]-n)/2)}};S(v[0],v[1],_,v[0],v[1]),S(v[0],_,g,v[0],v[1]),S(v[2],v[3],g,v[2],v[3]),S(v[2],g,_,v[2],v[3]),S(v[1],v[2],_,v[1],v[2]),S(v[3],v[0],g,v[3],v[0]);let C=new c;return C.setAttribute(`position`,new t(y,3)),C.setAttribute(`normal`,new t(b,3)),C.setAttribute(`uv`,new t(x,2)),{geo:C,ends:m<d/2-.5?[g,_]:[g],dir:f,ridgeY:h}}function I([t,,n],[r,i],a,o){let s=1+o*13.7%1*.5,c=a-1.6,l=Math.atan2(-i,r),u=[new p(.6,s+1.6,1.25).translate(0,c+(s+1.6)/2,0).toNonIndexed()];u.push(new p(.72,.1,1.37).translate(0,c+s+1.55,0).toNonIndexed());let d=2+Math.floor(o*31.3%1*2);for(let t=0;t<d;t++){let n=(t-(d-1)/2)*.36;u.push(new e(.1,.12,.42,6,1,!0).translate(0,c+s+1.8,n).toNonIndexed())}let m=f(u);return m.rotateY(l),m.translate(t,0,n)}export{b as a,T as i,j as n,y as o,A as r,v as s,P as t};