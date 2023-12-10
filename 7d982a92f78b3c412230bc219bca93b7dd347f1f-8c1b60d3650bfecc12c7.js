"use strict";(self.webpackChunkglossary=self.webpackChunkglossary||[]).push([[185],{8799:function(e,r,o){o.d(r,{h:function(){return s}});var t=o(7294),n=o(9845),l=o(4160);const s=()=>{const{allTermsJson:e}=(0,l.K2)("2873952374"),r=e.edges;return console.warn(r),t.createElement("header",{className:"py-3.5"},t.createElement(n.i,{className:"flex items-center space-x-8"},t.createElement(l.rU,{to:"/",className:"text-3xl font-bold"},"Словник"),t.createElement("nav",null)))}},9845:function(e,r,o){o.d(r,{i:function(){return V}});var t=o(7294);function n(e){var r,o,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(o=n(e[r]))&&(t&&(t+=" "),t+=o);else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function l(){for(var e,r,o=0,t="";o<arguments.length;)(e=arguments[o++])&&(r=n(e))&&(t&&(t+=" "),t+=r);return t}const s="-";function i(e){const r=function(e){const{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]},n=function(e,r){if(!r)return e;return e.map((([e,o])=>[e,o.map((e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,o])=>[r+e,o]))):e))]))}(Object.entries(e.classGroups),o);return n.forEach((([e,o])=>{d(o,t,e,r)})),t}(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:function(e){const o=e.split(s);return""===o[0]&&1!==o.length&&o.shift(),a(o,r)||function(e){if(c.test(e)){const r=c.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}(e)},getConflictingClassGroupIds:function(e,r){const n=o[e]||[];return r&&t[e]?[...n,...t[e]]:n}}}function a(e,r){if(0===e.length)return r.classGroupId;const o=e[0],t=r.nextPart.get(o),n=t?a(e.slice(1),t):void 0;if(n)return n;if(0===r.validators.length)return;const l=e.join(s);return r.validators.find((({validator:e})=>e(l)))?.classGroupId}const c=/^\[(.+)\]$/;function d(e,r,o,t){e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return e.isThemeGetter?void d(e(t),r,o,t):void r.validators.push({validator:e,classGroupId:o});Object.entries(e).forEach((([e,n])=>{d(n,u(r,e),o,t)}))}else{(""===e?r:u(r,e)).classGroupId=o}}))}function u(e,r){let o=e;return r.split(s).forEach((e=>{o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)})),o}function p(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,t=new Map;function n(n,l){o.set(n,l),r++,r>e&&(r=0,t=o,o=new Map)}return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}}const b="!";function f(e){const r=e.separator,o=1===r.length,t=r[0],n=r.length;return function(e){const l=[];let s,i=0,a=0;for(let u=0;u<e.length;u++){let c=e[u];if(0===i){if(c===t&&(o||e.slice(u,u+n)===r)){l.push(e.slice(a,u)),a=u+n;continue}if("/"===c){s=u;continue}}"["===c?i++:"]"===c&&i--}const c=0===l.length?e:e.substring(a),d=c.startsWith(b);return{modifiers:l,hasImportantModifier:d,baseClassName:d?c.substring(1):c,maybePostfixModifierPosition:s&&s>a?s-a:void 0}}}const m=/\s+/;function g(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=h(e))&&(t&&(t+=" "),t+=r);return t}function h(e){if("string"==typeof e)return e;let r,o="";for(let t=0;t<e.length;t++)e[t]&&(r=h(e[t]))&&(o&&(o+=" "),o+=r);return o}function y(e,...r){let o,t,n,l=function(a){const c=r.reduce(((e,r)=>r(e)),e());return o=function(e){return{cache:p(e.cacheSize),splitModifiers:f(e),...i(e)}}(c),t=o.cache.get,n=o.cache.set,l=s,s(a)};function s(e){const r=t(e);if(r)return r;const l=function(e,r){const{splitModifiers:o,getClassGroupId:t,getConflictingClassGroupIds:n}=r,l=new Set;return e.trim().split(m).map((e=>{const{modifiers:r,hasImportantModifier:n,baseClassName:l,maybePostfixModifierPosition:s}=o(e);let i=t(s?l.substring(0,s):l),a=Boolean(s);if(!i){if(!s)return{isTailwindClass:!1,originalClassName:e};if(i=t(l),!i)return{isTailwindClass:!1,originalClassName:e};a=!1}const c=function(e){if(e.length<=1)return e;const r=[];let o=[];return e.forEach((e=>{"["===e[0]?(r.push(...o.sort(),e),o=[]):o.push(e)})),r.push(...o.sort()),r}(r).join(":");return{isTailwindClass:!0,modifierId:n?c+b:c,classGroupId:i,originalClassName:e,hasPostfixModifier:a}})).reverse().filter((e=>{if(!e.isTailwindClass)return!0;const{modifierId:r,classGroupId:o,hasPostfixModifier:t}=e,s=r+o;return!l.has(s)&&(l.add(s),n(o,t).forEach((e=>l.add(r+e))),!0)})).reverse().map((e=>e.originalClassName)).join(" ")}(e,o);return n(e,l),l}return function(){return l(g.apply(null,arguments))}}function x(e){const r=r=>r[e]||[];return r.isThemeGetter=!0,r}const v=/^\[(?:([a-z-]+):)?(.+)\]$/i,w=/^\d+\/\d+$/,k=new Set(["px","full","screen"]),z=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,j=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,G=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function N(e){return M(e)||k.has(e)||w.test(e)}function I(e){return K(e,"length",U)}function M(e){return Boolean(e)&&!Number.isNaN(Number(e))}function P(e){return K(e,"number",M)}function S(e){return Boolean(e)&&Number.isInteger(Number(e))}function E(e){return e.endsWith("%")&&M(e.slice(0,-1))}function T(e){return v.test(e)}function O(e){return z.test(e)}const $=new Set(["length","size","percentage"]);function R(e){return K(e,$,_)}function W(e){return K(e,"position",_)}const A=new Set(["image","url"]);function B(e){return K(e,A,F)}function q(e){return K(e,"",D)}function J(){return!0}function K(e,r,o){const t=v.exec(e);return!!t&&(t[1]?"string"==typeof r?t[1]===r:r.has(t[1]):o(t[2]))}function U(e){return C.test(e)}function _(){return!1}function D(e){return j.test(e)}function F(e){return G.test(e)}Symbol.toStringTag;function H(){const e=x("colors"),r=x("spacing"),o=x("blur"),t=x("brightness"),n=x("borderColor"),l=x("borderRadius"),s=x("borderSpacing"),i=x("borderWidth"),a=x("contrast"),c=x("grayscale"),d=x("hueRotate"),u=x("invert"),p=x("gap"),b=x("gradientColorStops"),f=x("gradientColorStopPositions"),m=x("inset"),g=x("margin"),h=x("opacity"),y=x("padding"),v=x("saturate"),w=x("scale"),k=x("sepia"),z=x("skew"),C=x("space"),j=x("translate"),G=()=>["auto",T,r],$=()=>[T,r],A=()=>["",N,I],K=()=>["auto",M,T],U=()=>["","0",T],_=()=>[M,P],D=()=>[M,T];return{cacheSize:500,separator:":",theme:{colors:[J],spacing:[N,I],blur:["none","",O,T],brightness:_(),borderColor:[e],borderRadius:["none","","full",O,T],borderSpacing:$(),borderWidth:A(),contrast:_(),grayscale:U(),hueRotate:D(),invert:U(),gap:$(),gradientColorStops:[e],gradientColorStopPositions:[E,I],inset:G(),margin:G(),opacity:_(),padding:$(),saturate:_(),scale:_(),sepia:U(),skew:D(),space:$(),translate:$()},classGroups:{aspect:[{aspect:["auto","square","video",T]}],container:["container"],columns:[{columns:[O]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",T]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",S,T]}],basis:[{basis:G()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",T]}],grow:[{grow:U()}],shrink:[{shrink:U()}],order:[{order:["first","last","none",S,T]}],"grid-cols":[{"grid-cols":[J]}],"col-start-end":[{col:["auto",{span:["full",S,T]},T]}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":[J]}],"row-start-end":[{row:["auto",{span:[S,T]},T]}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",T]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",T]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",T,r]}],"min-w":[{"min-w":["min","max","fit",T,N]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[O]},O,T]}],h:[{h:[T,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",N,T]}],"max-h":[{"max-h":[T,r,"min","max","fit"]}],"font-size":[{text:["base",O,I]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",P]}],"font-family":[{font:[J]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",T]}],"line-clamp":[{"line-clamp":["none",M,P]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",N,T]}],"list-image":[{"list-image":["none",T]}],"list-style-type":[{list:["none","disc","decimal",T]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",N,I]}],"underline-offset":[{"underline-offset":["auto",N,T]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:$()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",T]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",T]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",W]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",R]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},B]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[f]}],"gradient-via-pos":[{via:[f]}],"gradient-to-pos":[{to:[f]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[N,T]}],"outline-w":[{outline:[N,I]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:A()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[N,I]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",O,q]}],"shadow-color":[{shadow:[J]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",O,T]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[v]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",T]}],duration:[{duration:D()}],ease:[{ease:["linear","in","out","in-out",T]}],delay:[{delay:D()}],animate:[{animate:["none","spin","ping","pulse","bounce",T]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[S,T]}],"translate-x":[{"translate-x":[j]}],"translate-y":[{"translate-y":[j]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",T]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",T]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":$()}],"scroll-mx":[{"scroll-mx":$()}],"scroll-my":[{"scroll-my":$()}],"scroll-ms":[{"scroll-ms":$()}],"scroll-me":[{"scroll-me":$()}],"scroll-mt":[{"scroll-mt":$()}],"scroll-mr":[{"scroll-mr":$()}],"scroll-mb":[{"scroll-mb":$()}],"scroll-ml":[{"scroll-ml":$()}],"scroll-p":[{"scroll-p":$()}],"scroll-px":[{"scroll-px":$()}],"scroll-py":[{"scroll-py":$()}],"scroll-ps":[{"scroll-ps":$()}],"scroll-pe":[{"scroll-pe":$()}],"scroll-pt":[{"scroll-pt":$()}],"scroll-pr":[{"scroll-pr":$()}],"scroll-pb":[{"scroll-pb":$()}],"scroll-pl":[{"scroll-pl":$()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",T]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[N,I,P]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const L=y(H);function Q(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return L(l(r))}const V=e=>{let{className:r,...o}=e;return t.createElement("div",Object.assign({},o,{className:Q("w-[1024px] mx-auto",r)}))}}}]);
//# sourceMappingURL=7d982a92f78b3c412230bc219bca93b7dd347f1f-8c1b60d3650bfecc12c7.js.map