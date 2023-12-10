"use strict";(self.webpackChunkglossary=self.webpackChunkglossary||[]).push([[185],{9084:function(e,t,r){r.d(t,{h:function(){return D}});var o=r(7294),n=r(9845),s=r(4160);const l=function(e,t){if("function"==typeof e)return function(){return e(arguments)?t.apply(this,arguments):e=>t(e,...arguments)};switch(e){case 0:case 1:throw new RangeError(`Invalid arity ${e}`);case 2:return function(e,r){return arguments.length>=2?t(e,r):function(r){return t(r,e)}};case 3:return function(e,r,o){return arguments.length>=3?t(e,r,o):function(o){return t(o,e,r)}};case 4:return function(e,r,o,n){return arguments.length>=4?t(e,r,o,n):function(n){return t(n,e,r,o)}};case 5:return function(e,r,o,n,s){return arguments.length>=5?t(e,r,o,n,s):function(s){return t(s,e,r,o,n)}};default:return function(){if(arguments.length>=e)return t.apply(this,arguments);const r=arguments;return function(e){return t(e,...r)}}}};function i(e,t,r,o,n,s,l,i,a){switch(arguments.length){case 1:return e;case 2:return t(e);case 3:return r(t(e));case 4:return o(r(t(e)));case 5:return n(o(r(t(e))));case 6:return s(n(o(r(t(e)))));case 7:return l(s(n(o(r(t(e))))));case 8:return i(l(s(n(o(r(t(e)))))));case 9:return a(i(l(s(n(o(r(t(e))))))));default:{let e=arguments[0];for(let t=1;t<arguments.length;t++)e=arguments[t](e);return e}}}const a="2.0.0-next.59",c=Symbol.for(`effect/GlobalValue/globalStoreId/${a}`);c in globalThis||(globalThis[c]=new Map);const d=globalThis[c],u=(e,t)=>(d.has(e)||d.set(e,t()),d.get(e)),p=e=>"function"==typeof e,f=e=>"object"==typeof e&&null!==e,b=l(2,((e,t)=>{return(f(r=e)||p(r))&&t in e;var r})),m=e=>null==e;class h{value;constructor(e){this.value=e}get _F(){return Function_identity}get _R(){return e=>e}get _O(){return e=>e}get _E(){return e=>e}[GenKindTypeId]=GenKindTypeId;[Symbol.iterator](){return new g(this)}}class g{self;called=!1;constructor(e){this.self=e}next(e){return this.called?{value:e,done:!0}:(this.called=!0,{value:this.self,done:!1})}return(e){return{value:e,done:!0}}throw(e){throw e}[Symbol.iterator](){return new g(this.self)}}class y{_state;constructor(e,t,r,o){return m(t)&&m(e)?(t=4294967295*Math.random()>>>0,e=0):m(t)&&(t=e,e=0),m(o)&&m(r)?(o=this._state?this._state[3]:4150755663,r=this._state?this._state[2]:335903614):m(o)&&(o=r,r=0),this._state=new Int32Array([0,0,r>>>0,(1|(o||0))>>>0]),this._next(),x(this._state,this._state[0],this._state[1],e>>>0,t>>>0),this._next(),this}getState(){return[this._state[0],this._state[1],this._state[2],this._state[3]]}setState(e){this._state[0]=e[0],this._state[1]=e[1],this._state[2]=e[2],this._state[3]=1|e[3]}integer(e){if(!e)return this._next();if(0==((e>>>=0)&e-1))return this._next()&e-1;let t=0;const r=(-e>>>0)%e>>>0;for(t=this._next();t<r;t=this._next());return t%e}number(){return(134217728*(1*(67108863&this._next()))+1*(134217727&this._next()))/9007199254740992}_next(){const e=this._state[0]>>>0,t=this._state[1]>>>0;!function(e,t,r,o,n){let s=(r>>>16)*(65535&n)>>>0,l=(65535&r)*(n>>>16)>>>0,i=(65535&r)*(65535&n)>>>0,a=(r>>>16)*(n>>>16)+((l>>>16)+(s>>>16))>>>0;l=l<<16>>>0,i=i+l>>>0,i>>>0<l>>>0&&(a=a+1>>>0);s=s<<16>>>0,i=i+s>>>0,i>>>0<s>>>0&&(a=a+1>>>0);a=a+Math.imul(r,o)>>>0,a=a+Math.imul(t,n)>>>0,e[0]=a,e[1]=i}(this._state,e,t,1481765933,1284865837),x(this._state,this._state[0],this._state[1],this._state[2],this._state[3]);let r=e>>>18,o=(t>>>18|e<<14)>>>0;r=(r^e)>>>0,o=(o^t)>>>0;const n=(o>>>27|r<<5)>>>0,s=e>>>27;return(n>>>s|n<<((-s>>>0&31)>>>0))>>>0}}function x(e,t,r,o,n){let s=t+o>>>0;const l=r+n>>>0;l>>>0<r>>>0&&(s=s+1|0),e[0]=s,e[1]=l}const w=u(Symbol.for("effect/Hash/randomHashCache"),(()=>new WeakMap)),v=u(Symbol.for("effect/Hash/pcgr"),(()=>new y)),k=Symbol.for("effect/Hash"),_=e=>{switch(typeof e){case"number":return j(e);case"bigint":return I(e.toString(10));case"boolean":case"symbol":return I(String(e));case"string":return I(e);case"undefined":return I("undefined");case"function":case"object":return null===e?I("null"):E(e)?e[k]():z(e);default:throw new Error(`BUG: unhandled typeof ${typeof e} - please report an issue at https://github.com/Effect-TS/effect/issues`)}},z=e=>(w.has(e)||w.set(e,j(v.integer(Number.MAX_SAFE_INTEGER))),w.get(e)),S=e=>t=>53*t^e,C=e=>3221225471&e|e>>>1&1073741824,E=e=>b(e,k),j=e=>{if(e!=e||e===1/0)return 0;let t=0|e;for(t!==e&&(t^=4294967295*e);e>4294967295;)t^=e/=4294967295;return C(e)},I=e=>{let t=5381,r=e.length;for(;r;)t=33*t^e.charCodeAt(--r);return C(t)},G=e=>((e,t)=>{let r=12289;for(let o=0;o<t.length;o++)r^=i(I(t[o]),S(_(e[t[o]])));return C(r)})(e,Object.keys(e)),M=Symbol.for("effect/Equal");function N(){return 1===arguments.length?e=>O(e,arguments[0]):O(arguments[0],arguments[1])}function O(e,t){if(e===t)return!0;const r=typeof e;return r===typeof t&&(!("object"!==r&&"function"!==r||null===e||null===t||!P(e)||!P(t))&&(_(e)===_(t)&&e[M](t)))}const P=e=>b(e,M),T=Symbol.for("nodejs.util.inspect.custom"),$=e=>JSON.stringify(e,null,2),R={_R:e=>e,_E:e=>e,_A:e=>e,_V:a},A={[Symbol.for("effect/Effect")]:R,[Symbol.for("effect/Stream")]:R,[Symbol.for("effect/Sink")]:{_R:e=>e,_E:e=>e,_In:e=>e,_L:e=>e,_Z:e=>e},[Symbol.for("effect/Channel")]:{_Env:e=>e,_InErr:e=>e,_InElem:e=>e,_InDone:e=>e,_OutErr:e=>e,_OutElem:e=>e,_OutDone:e=>e},[M](e){return this===e},[k](){return z(this)},pipe(){return((e,t)=>{switch(t.length){case 1:return t[0](e);case 2:return t[1](t[0](e));case 3:return t[2](t[1](t[0](e)));case 4:return t[3](t[2](t[1](t[0](e))));case 5:return t[4](t[3](t[2](t[1](t[0](e)))));case 6:return t[5](t[4](t[3](t[2](t[1](t[0](e))))));case 7:return t[6](t[5](t[4](t[3](t[2](t[1](t[0](e)))))));case 8:return t[7](t[6](t[5](t[4](t[3](t[2](t[1](t[0](e))))))));case 9:return t[8](t[7](t[6](t[5](t[4](t[3](t[2](t[1](t[0](e)))))))));default:{let r=e;for(let e=0,o=t.length;e<o;e++)r=t[e](r);return r}}})(this,arguments)}},W={[k](){return G(this)},[M](e){const t=Object.keys(this),r=Object.keys(e);if(t.length!==r.length)return!1;for(const o of t)if(!(o in e)||!N(this[o],e[o]))return!1;return!0}},B={...A,_op:"Commit"},H=Symbol.for("effect/Option"),U=(T,M,k,M,k,Symbol.for("effect/Either"));const q=l(2,((e,t)=>{const r={};for(const o of e){const e=t(o);Object.prototype.hasOwnProperty.call(r,e)?r[e].push(o):r[e]=[o]}return r}));let F;var K;(K=F||(F={})).alphabet=["А","Б","В","Г","Ґ","Д","Е","Є","Ж","З","И","І","Ї","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ь","Ю","Я"],K.make=e=>i(e,q((e=>{var t,r;return null!==(t=null==e||null===(r=e.title)||void 0===r?void 0:r.toUpperCase().at(0))&&void 0!==t?t:""})));const D=()=>{const{allTermsJson:e}=(0,s.K2)("2873952374"),t=e.edges;return o.createElement("header",{className:"py-3.5"},o.createElement(n.i,{className:"flex items-center space-x-8"},o.createElement(s.rU,{to:"/",className:"text-3xl font-bold"},"Словник"),o.createElement("nav",null,o.createElement("ul",{className:"flex items-center space-x-2"},t.length&&Object.keys(F.make(t.map((e=>e.node)))).sort(((e,t)=>e.localeCompare(t))).map((e=>o.createElement("li",null,o.createElement(s.rU,{to:`/#${e}`},e))))))))}},9845:function(e,t,r){r.d(t,{i:function(){return X}});var o=r(7294);function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function s(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}const l="-";function i(e){const t=function(e){const{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]},n=function(e,t){if(!t)return e;return e.map((([e,r])=>[e,r.map((e=>"string"==typeof e?t+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,r])=>[t+e,r]))):e))]))}(Object.entries(e.classGroups),r);return n.forEach((([e,r])=>{d(r,o,e,t)})),o}(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:function(e){const r=e.split(l);return""===r[0]&&1!==r.length&&r.shift(),a(r,t)||function(e){if(c.test(e)){const t=c.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}(e)},getConflictingClassGroupIds:function(e,t){const n=r[e]||[];return t&&o[e]?[...n,...o[e]]:n}}}function a(e,t){if(0===e.length)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),n=o?a(e.slice(1),o):void 0;if(n)return n;if(0===t.validators.length)return;const s=e.join(l);return t.validators.find((({validator:e})=>e(s)))?.classGroupId}const c=/^\[(.+)\]$/;function d(e,t,r,o){e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return e.isThemeGetter?void d(e(o),t,r,o):void t.validators.push({validator:e,classGroupId:r});Object.entries(e).forEach((([e,n])=>{d(n,u(t,e),r,o)}))}else{(""===e?t:u(t,e)).classGroupId=r}}))}function u(e,t){let r=e;return t.split(l).forEach((e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)})),r}function p(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;function n(n,s){r.set(n,s),t++,t>e&&(t=0,o=r,r=new Map)}return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}}const f="!";function b(e){const t=e.separator,r=1===t.length,o=t[0],n=t.length;return function(e){const s=[];let l,i=0,a=0;for(let u=0;u<e.length;u++){let c=e[u];if(0===i){if(c===o&&(r||e.slice(u,u+n)===t)){s.push(e.slice(a,u)),a=u+n;continue}if("/"===c){l=u;continue}}"["===c?i++:"]"===c&&i--}const c=0===s.length?e:e.substring(a),d=c.startsWith(f);return{modifiers:s,hasImportantModifier:d,baseClassName:d?c.substring(1):c,maybePostfixModifierPosition:l&&l>a?l-a:void 0}}}const m=/\s+/;function h(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=g(e))&&(o&&(o+=" "),o+=t);return o}function g(e){if("string"==typeof e)return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=g(e[o]))&&(r&&(r+=" "),r+=t);return r}function y(e,...t){let r,o,n,s=function(a){const c=t.reduce(((e,t)=>t(e)),e());return r=function(e){return{cache:p(e.cacheSize),splitModifiers:b(e),...i(e)}}(c),o=r.cache.get,n=r.cache.set,s=l,l(a)};function l(e){const t=o(e);if(t)return t;const s=function(e,t){const{splitModifiers:r,getClassGroupId:o,getConflictingClassGroupIds:n}=t,s=new Set;return e.trim().split(m).map((e=>{const{modifiers:t,hasImportantModifier:n,baseClassName:s,maybePostfixModifierPosition:l}=r(e);let i=o(l?s.substring(0,l):s),a=Boolean(l);if(!i){if(!l)return{isTailwindClass:!1,originalClassName:e};if(i=o(s),!i)return{isTailwindClass:!1,originalClassName:e};a=!1}const c=function(e){if(e.length<=1)return e;const t=[];let r=[];return e.forEach((e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)})),t.push(...r.sort()),t}(t).join(":");return{isTailwindClass:!0,modifierId:n?c+f:c,classGroupId:i,originalClassName:e,hasPostfixModifier:a}})).reverse().filter((e=>{if(!e.isTailwindClass)return!0;const{modifierId:t,classGroupId:r,hasPostfixModifier:o}=e,l=t+r;return!s.has(l)&&(s.add(l),n(r,o).forEach((e=>s.add(t+e))),!0)})).reverse().map((e=>e.originalClassName)).join(" ")}(e,r);return n(e,s),s}return function(){return s(h.apply(null,arguments))}}function x(e){const t=t=>t[e]||[];return t.isThemeGetter=!0,t}const w=/^\[(?:([a-z-]+):)?(.+)\]$/i,v=/^\d+\/\d+$/,k=new Set(["px","full","screen"]),_=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,z=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,S=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,C=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function E(e){return I(e)||k.has(e)||v.test(e)}function j(e){return U(e,"length",q)}function I(e){return Boolean(e)&&!Number.isNaN(Number(e))}function G(e){return U(e,"number",I)}function M(e){return Boolean(e)&&Number.isInteger(Number(e))}function N(e){return e.endsWith("%")&&I(e.slice(0,-1))}function O(e){return w.test(e)}function P(e){return _.test(e)}const T=new Set(["length","size","percentage"]);function $(e){return U(e,T,F)}function R(e){return U(e,"position",F)}const A=new Set(["image","url"]);function W(e){return U(e,A,D)}function B(e){return U(e,"",K)}function H(){return!0}function U(e,t,r){const o=w.exec(e);return!!o&&(o[1]?"string"==typeof t?o[1]===t:t.has(o[1]):r(o[2]))}function q(e){return z.test(e)}function F(){return!1}function K(e){return S.test(e)}function D(e){return C.test(e)}Symbol.toStringTag;function J(){const e=x("colors"),t=x("spacing"),r=x("blur"),o=x("brightness"),n=x("borderColor"),s=x("borderRadius"),l=x("borderSpacing"),i=x("borderWidth"),a=x("contrast"),c=x("grayscale"),d=x("hueRotate"),u=x("invert"),p=x("gap"),f=x("gradientColorStops"),b=x("gradientColorStopPositions"),m=x("inset"),h=x("margin"),g=x("opacity"),y=x("padding"),w=x("saturate"),v=x("scale"),k=x("sepia"),_=x("skew"),z=x("space"),S=x("translate"),C=()=>["auto",O,t],T=()=>[O,t],A=()=>["",E,j],U=()=>["auto",I,O],q=()=>["","0",O],F=()=>[I,G],K=()=>[I,O];return{cacheSize:500,separator:":",theme:{colors:[H],spacing:[E,j],blur:["none","",P,O],brightness:F(),borderColor:[e],borderRadius:["none","","full",P,O],borderSpacing:T(),borderWidth:A(),contrast:F(),grayscale:q(),hueRotate:K(),invert:q(),gap:T(),gradientColorStops:[e],gradientColorStopPositions:[N,j],inset:C(),margin:C(),opacity:F(),padding:T(),saturate:F(),scale:F(),sepia:q(),skew:K(),space:T(),translate:T()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[P]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",O]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",M,O]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",M,O]}],"grid-cols":[{"grid-cols":[H]}],"col-start-end":[{col:["auto",{span:["full",M,O]},O]}],"col-start":[{"col-start":U()}],"col-end":[{"col-end":U()}],"grid-rows":[{"grid-rows":[H]}],"row-start-end":[{row:["auto",{span:[M,O]},O]}],"row-start":[{"row-start":U()}],"row-end":[{"row-end":U()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",O,t]}],"min-w":[{"min-w":["min","max","fit",O,E]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[P]},P,O]}],h:[{h:[O,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",E,O]}],"max-h":[{"max-h":[O,t,"min","max","fit"]}],"font-size":[{text:["base",P,j]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",G]}],"font-family":[{font:[H]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",I,G]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",E,O]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",E,j]}],"underline-offset":[{"underline-offset":["auto",E,O]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:T()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",R]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",$]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},W]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[E,O]}],"outline-w":[{outline:[E,j]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:A()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[E,j]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",P,B]}],"shadow-color":[{shadow:[H]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",P,O]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[w]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:K()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:K()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[M,O]}],"translate-x":[{"translate-x":[S]}],"translate-y":[{"translate-y":[S]}],"skew-x":[{"skew-x":[_]}],"skew-y":[{"skew-y":[_]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":T()}],"scroll-mx":[{"scroll-mx":T()}],"scroll-my":[{"scroll-my":T()}],"scroll-ms":[{"scroll-ms":T()}],"scroll-me":[{"scroll-me":T()}],"scroll-mt":[{"scroll-mt":T()}],"scroll-mr":[{"scroll-mr":T()}],"scroll-mb":[{"scroll-mb":T()}],"scroll-ml":[{"scroll-ml":T()}],"scroll-p":[{"scroll-p":T()}],"scroll-px":[{"scroll-px":T()}],"scroll-py":[{"scroll-py":T()}],"scroll-ps":[{"scroll-ps":T()}],"scroll-pe":[{"scroll-pe":T()}],"scroll-pt":[{"scroll-pt":T()}],"scroll-pr":[{"scroll-pr":T()}],"scroll-pb":[{"scroll-pb":T()}],"scroll-pl":[{"scroll-pl":T()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[E,j,G]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const V=y(J);function L(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return V(s(t))}const X=e=>{let{className:t,...r}=e;return o.createElement("div",Object.assign({},r,{className:L("w-[1024px] mx-auto",t)}))}}}]);
//# sourceMappingURL=7d982a92f78b3c412230bc219bca93b7dd347f1f-4c45982df1d0ea884db0.js.map