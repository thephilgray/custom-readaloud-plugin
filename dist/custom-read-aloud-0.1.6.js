!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.CustomReadAloud=n():t.CustomReadAloud=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="./",e(e.s=47)}([function(t,n,e){var r=e(2),i=e(10),o=e(8),u=e(12),a=e(22),c=function(t,n,e){var f,s,l,p,h=t&c.F,y=t&c.G,v=t&c.S,d=t&c.P,g=t&c.B,b=y?r:v?r[n]||(r[n]={}):(r[n]||{}).prototype,m=y?i:i[n]||(i[n]={}),x=m.prototype||(m.prototype={});for(f in y&&(e=n),e)l=((s=!h&&b&&void 0!==b[f])?b:e)[f],p=g&&s?a(l,r):d&&"function"==typeof l?a(Function.call,l):l,b&&u(b,f,l,t&c.U),m[f]!=l&&o(m,f,p),d&&x[f]!=l&&(x[f]=l)};r.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var r=e(20)("wks"),i=e(17),o=e(2).Symbol,u="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(11),i=e(38),o=e(19),u=Object.defineProperty;n.f=e(6)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(4),i=e(16);t.exports=e(6)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(25);t.exports=function(t){return Object(r(t))}},function(t,n){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(2),i=e(8),o=e(7),u=e(17)("src"),a=e(51),c=(""+a).split("toString");e(10).inspectSource=function(t){return a.call(t)},(t.exports=function(t,n,e,a){var f="function"==typeof e;f&&(o(e,"name")||i(e,"name",n)),t[n]!==e&&(f&&(o(e,u)||i(e,u,t[n]?""+t[n]:c.join(String(n)))),t===r?t[n]=e:a?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||a.call(this)})},function(t,n,e){"use strict";var r=e(3);t.exports=function(t,n){return!!t&&r(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n,e){var r=e(42),i=e(33);t.exports=Object.keys||function(t){return r(t,i)}},function(t,n,e){var r=e(23),i=e(25);t.exports=function(t){return r(i(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports={}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(10),i=e(2),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(21)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n,e){var r=e(28);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(30),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(22),i=e(23),o=e(9),u=e(26),a=e(52);t.exports=function(t,n){var e=1==t,c=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l,h=n||a;return function(n,a,y){for(var v,d,g=o(n),b=i(g),m=r(a,y,3),x=u(b.length),S=0,O=e?h(n,x):c?h(n,0):void 0;x>S;S++)if((p||S in b)&&(d=m(v=b[S],S,g),t))if(e)O[S]=d;else if(d)switch(t){case 3:return!0;case 5:return v;case 6:return S;case 2:O.push(v)}else if(s)return!1;return l?-1:f||s?s:O}}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(4).f,i=e(7),o=e(1)("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},function(t,n,e){var r=e(20)("keys"),i=e(17);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(11),i=e(59),o=e(33),u=e(32)("IE_PROTO"),a=function(){},c=function(){var t,n=e(39)("iframe"),r=o.length;for(n.style.display="none",e(60).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(a.prototype=r(t),e=new a,a.prototype=null,e[u]=t):e=c(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(42),i=e(33).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,n,e){var r=e(27),i=e(16),o=e(15),u=e(19),a=e(7),c=e(38),f=Object.getOwnPropertyDescriptor;n.f=e(6)?f:function(t,n){if(t=o(t),n=u(n,!0),c)try{return f(t,n)}catch(t){}if(a(t,n))return i(!r.f.call(t,n),t[n])}},function(t,n,e){t.exports=!e(6)&&!e(3)(function(){return 7!=Object.defineProperty(e(39)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(5),i=e(2).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){var r=e(24);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){n.f=e(1)},function(t,n,e){var r=e(7),i=e(15),o=e(43)(!1),u=e(32)("IE_PROTO");t.exports=function(t,n){var e,a=i(t),c=0,f=[];for(e in a)e!=u&&r(a,e)&&f.push(e);for(;n.length>c;)r(a,e=n[c++])&&(~o(f,e)||f.push(e));return f}},function(t,n,e){var r=e(15),i=e(26),o=e(58);t.exports=function(t){return function(n,e,u){var a,c=r(n),f=i(c.length),s=o(u,f);if(t&&e!=e){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){"use strict";var r=e(66),i=e(67),o=e(18),u=e(15);t.exports=e(45)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,n,e){"use strict";var r=e(21),i=e(0),o=e(12),u=e(8),a=e(18),c=e(68),f=e(31),s=e(69),l=e(1)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,y,v,d,g){c(e,n,y);var b,m,x,S=function(t){if(!p&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},O=n+" Iterator",_="values"==v,E=!1,w=t.prototype,P=w[l]||w["@@iterator"]||v&&w[v],j=P||S(v),A=v?_?S("entries"):j:void 0,N="Array"==n&&w.entries||P;if(N&&(x=s(N.call(new t)))!==Object.prototype&&x.next&&(f(x,O,!0),r||"function"==typeof x[l]||u(x,l,h)),_&&P&&"values"!==P.name&&(E=!0,j=function(){return P.call(this)}),r&&!g||!p&&!E&&w[l]||u(w,l,j),a[n]=j,a[O]=h,v)if(b={values:_?j:S("values"),keys:d?j:S("keys"),entries:A},g)for(m in b)m in w||o(w,m,b[m]);else i(i.P+i.F*(p||E),n,b);return b}},function(t,n,e){var r=e(24),i=e(1)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:o?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){t.exports=e(93)},function(t,n){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||window;for(var e=0;e<this.length;e++)t.call(n,this[e],e,this)})},function(t,n){!function(){if("undefined"!=typeof window)try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default")}catch(t){var n=function(t,n){var e,r;return n=n||{bubbles:!1,cancelable:!1,detail:void 0},(e=document.createEvent("CustomEvent")).initCustomEvent(t,n.bubbles,n.cancelable,n.detail),r=e.preventDefault,e.preventDefault=function(){r.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},e};n.prototype=window.Event.prototype,window.CustomEvent=n}}()},function(t,n,e){"use strict";var r=e(0),i=e(29)(2);r(r.P+r.F*!e(13)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,n,e){t.exports=e(20)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(53);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){var r=e(5),i=e(40),o=e(1)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),r(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},function(t,n,e){"use strict";var r=e(2),i=e(7),o=e(6),u=e(0),a=e(12),c=e(55).KEY,f=e(3),s=e(20),l=e(31),p=e(17),h=e(1),y=e(41),v=e(56),d=e(57),g=e(40),b=e(11),m=e(5),x=e(15),S=e(19),O=e(16),_=e(35),E=e(61),w=e(37),P=e(4),j=e(14),A=w.f,N=P.f,k=E.f,C=r.Symbol,T=r.JSON,L=T&&T.stringify,F=h("_hidden"),I=h("toPrimitive"),M={}.propertyIsEnumerable,R=s("symbol-registry"),H=s("symbols"),D=s("op-symbols"),G=Object.prototype,V="function"==typeof C,B=r.QObject,U=!B||!B.prototype||!B.prototype.findChild,q=o&&f(function(){return 7!=_(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=A(G,n);r&&delete G[n],N(t,n,e),r&&t!==G&&N(G,n,r)}:N,z=function(t){var n=H[t]=_(C.prototype);return n._k=t,n},W=V&&"symbol"==typeof C.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof C},J=function(t,n,e){return t===G&&J(D,n,e),b(t),n=S(n,!0),b(e),i(H,n)?(e.enumerable?(i(t,F)&&t[F][n]&&(t[F][n]=!1),e=_(e,{enumerable:O(0,!1)})):(i(t,F)||N(t,F,O(1,{})),t[F][n]=!0),q(t,n,e)):N(t,n,e)},Y=function(t,n){b(t);for(var e,r=d(n=x(n)),i=0,o=r.length;o>i;)J(t,e=r[i++],n[e]);return t},K=function(t){var n=M.call(this,t=S(t,!0));return!(this===G&&i(H,t)&&!i(D,t))&&(!(n||!i(this,t)||!i(H,t)||i(this,F)&&this[F][t])||n)},X=function(t,n){if(t=x(t),n=S(n,!0),t!==G||!i(H,n)||i(D,n)){var e=A(t,n);return!e||!i(H,n)||i(t,F)&&t[F][n]||(e.enumerable=!0),e}},Q=function(t){for(var n,e=k(x(t)),r=[],o=0;e.length>o;)i(H,n=e[o++])||n==F||n==c||r.push(n);return r},$=function(t){for(var n,e=t===G,r=k(e?D:x(t)),o=[],u=0;r.length>u;)!i(H,n=r[u++])||e&&!i(G,n)||o.push(H[n]);return o};V||(a((C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===G&&n.call(D,e),i(this,F)&&i(this[F],t)&&(this[F][t]=!1),q(this,t,O(1,e))};return o&&U&&q(G,t,{configurable:!0,set:n}),z(t)}).prototype,"toString",function(){return this._k}),w.f=X,P.f=J,e(36).f=E.f=Q,e(27).f=K,e(34).f=$,o&&!e(21)&&a(G,"propertyIsEnumerable",K,!0),y.f=function(t){return z(h(t))}),u(u.G+u.W+u.F*!V,{Symbol:C});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)h(Z[tt++]);for(var nt=j(h.store),et=0;nt.length>et;)v(nt[et++]);u(u.S+u.F*!V,"Symbol",{for:function(t){return i(R,t+="")?R[t]:R[t]=C(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var n in R)if(R[n]===t)return n},useSetter:function(){U=!0},useSimple:function(){U=!1}}),u(u.S+u.F*!V,"Object",{create:function(t,n){return void 0===n?_(t):Y(_(t),n)},defineProperty:J,defineProperties:Y,getOwnPropertyDescriptor:X,getOwnPropertyNames:Q,getOwnPropertySymbols:$}),T&&u(u.S+u.F*(!V||f(function(){var t=C();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))})),"JSON",{stringify:function(t){for(var n,e,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(e=n=r[1],(m(n)||void 0!==t)&&!W(t))return g(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!W(n))return n}),r[1]=n,L.apply(T,r)}}),C.prototype[I]||e(8)(C.prototype,I,C.prototype.valueOf),l(C,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){var r=e(17)("meta"),i=e(5),o=e(7),u=e(4).f,a=0,c=Object.isExtensible||function(){return!0},f=!e(3)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[r].i},getWeak:function(t,n){if(!o(t,r)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&c(t)&&!o(t,r)&&s(t),t}}},function(t,n,e){var r=e(2),i=e(10),o=e(21),u=e(41),a=e(4).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||a(n,t,{value:u.f(t)})}},function(t,n,e){var r=e(14),i=e(34),o=e(27);t.exports=function(t){var n=r(t),e=i.f;if(e)for(var u,a=e(t),c=o.f,f=0;a.length>f;)c.call(t,u=a[f++])&&n.push(u);return n}},function(t,n,e){var r=e(30),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var r=e(4),i=e(11),o=e(14);t.exports=e(6)?Object.defineProperties:function(t,n){i(t);for(var e,u=o(n),a=u.length,c=0;a>c;)r.f(t,e=u[c++],n[e]);return t}},function(t,n,e){var r=e(2).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(15),i=e(36).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return u.slice()}}(t):i(r(t))}},function(t,n,e){var r=e(0);r(r.S+r.F*!e(6),"Object",{defineProperty:e(4).f})},function(t,n,e){var r=e(0);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,n,e){"use strict";var r=e(0),i=e(43)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(u||!e(13)(o)),"Array",{indexOf:function(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,e){for(var r=e(44),i=e(14),o=e(12),u=e(2),a=e(8),c=e(18),f=e(1),s=f("iterator"),l=f("toStringTag"),p=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},y=i(h),v=0;v<y.length;v++){var d,g=y[v],b=h[g],m=u[g],x=m&&m.prototype;if(x&&(x[s]||a(x,s,p),x[l]||a(x,l,g),c[g]=p,b))for(d in r)x[d]||o(x,d,r[d],!0)}},function(t,n,e){var r=e(1)("unscopables"),i=Array.prototype;null==i[r]&&e(8)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r=e(35),i=e(16),o=e(31),u={};e(8)(u,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:i(1,e)}),o(t,n+" Iterator")}},function(t,n,e){var r=e(7),i=e(9),o=e(32)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";var r=e(46),i={};i[e(1)("toStringTag")]="z",i+""!="[object z]"&&e(12)(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},function(t,n,e){var r=e(9),i=e(14);e(72)("keys",function(){return function(t){return i(r(t))}})},function(t,n,e){var r=e(0),i=e(10),o=e(3);t.exports=function(t,n){var e=(i.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*o(function(){e(1)}),"Object",u)}},function(t,n,e){"use strict";var r=e(0),i=e(29)(1);r(r.P+r.F*!e(13)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(0),i=e(28),o=e(9),u=e(3),a=[].sort,c=[1,2,3];r(r.P+r.F*(u(function(){c.sort(void 0)})||!u(function(){c.sort(null)})||!e(13)(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),i(t))}})},function(t,n,e){"use strict";var r=e(0),i=e(29)(0),o=e(13)([].forEach,!0);r(r.P+r.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(77)(!0);e(45)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(30),i=e(25);t.exports=function(t){return function(n,e){var o,u,a=String(i(n)),c=r(e),f=a.length;return c<0||c>=f?t?"":void 0:(o=a.charCodeAt(c))<55296||o>56319||c+1===f||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):o:t?a.slice(c,c+2):u-56320+(o-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(22),i=e(0),o=e(9),u=e(79),a=e(80),c=e(26),f=e(81),s=e(82);i(i.S+i.F*!e(83)(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,i,l,p=o(t),h="function"==typeof this?this:Array,y=arguments.length,v=y>1?arguments[1]:void 0,d=void 0!==v,g=0,b=s(p);if(d&&(v=r(v,y>2?arguments[2]:void 0,2)),null==b||h==Array&&a(b))for(e=new h(n=c(p.length));n>g;g++)f(e,g,d?v(p[g],g):p[g]);else for(l=b.call(p),e=new h;!(i=l.next()).done;g++)f(e,g,d?u(l,v,[i.value,g],!0):i.value);return e.length=g,e}})},function(t,n,e){var r=e(11);t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(n){var o=t.return;throw void 0!==o&&r(o.call(t)),n}}},function(t,n,e){var r=e(18),i=e(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,n,e){"use strict";var r=e(4),i=e(16);t.exports=function(t,n,e){n in t?r.f(t,n,i(0,e)):t[n]=e}},function(t,n,e){var r=e(46),i=e(1)("iterator"),o=e(18);t.exports=e(10).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(1)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var e=!1;try{var o=[7],u=o[r]();u.next=function(){return{done:e=!0}},o[r]=function(){return u},t(o)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(0),i=e(85);r(r.P+r.F*!e(13)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,e){var r=e(28),i=e(9),o=e(23),u=e(26);t.exports=function(t,n,e,a,c){r(n);var f=i(t),s=o(f),l=u(f.length),p=c?l-1:0,h=c?-1:1;if(e<2)for(;;){if(p in s){a=s[p],p+=h;break}if(p+=h,c?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;c?p>=0:l>p;p+=h)p in s&&(a=n(a,s[p],p,f));return a}},function(t,n,e){"use strict";var r=e(2),i=e(7),o=e(24),u=e(87),a=e(19),c=e(3),f=e(36).f,s=e(37).f,l=e(4).f,p=e(89).trim,h=r.Number,y=h,v=h.prototype,d="Number"==o(e(35)(v)),g="trim"in String.prototype,b=function(t){var n=a(t,!1);if("string"==typeof n&&n.length>2){var e,r,i,o=(n=g?n.trim():p(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+n}for(var u,c=n.slice(2),f=0,s=c.length;f<s;f++)if((u=c.charCodeAt(f))<48||u>i)return NaN;return parseInt(c,r)}}return+n};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof h&&(d?c(function(){v.valueOf.call(e)}):"Number"!=o(e))?u(new y(b(n)),e,h):b(n)};for(var m,x=e(6)?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;x.length>S;S++)i(y,m=x[S])&&!i(h,m)&&l(h,m,s(y,m));h.prototype=v,v.constructor=h,e(12)(r,"Number",h)}},function(t,n,e){var r=e(5),i=e(88).set;t.exports=function(t,n,e){var o,u=n.constructor;return u!==e&&"function"==typeof u&&(o=u.prototype)!==e.prototype&&r(o)&&i&&i(t,o),t}},function(t,n,e){var r=e(5),i=e(11),o=function(t,n){if(i(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(22)(Function.call,e(37).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return o(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:o}},function(t,n,e){var r=e(0),i=e(25),o=e(3),u=e(90),a="["+u+"]",c=RegExp("^"+a+a+"*"),f=RegExp(a+a+"*$"),s=function(t,n,e){var i={},a=o(function(){return!!u[t]()||"​"!="​"[t]()}),c=i[t]=a?n(l):u[t];e&&(i[e]=c),r(r.P+r.F*a,"String",i)},l=s.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(c,"")),2&n&&(t=t.replace(f,"")),t};t.exports=s},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,e){var r=e(0);r(r.S+r.F,"Object",{assign:e(92)})},function(t,n,e){"use strict";var r=e(14),i=e(34),o=e(27),u=e(9),a=e(23),c=Object.assign;t.exports=!c||e(3)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r})?function(t,n){for(var e=u(t),c=arguments.length,f=1,s=i.f,l=o.f;c>f;)for(var p,h=a(arguments[f++]),y=s?r(h).concat(s(h)):r(h),v=y.length,d=0;v>d;)l.call(h,p=y[d++])&&(e[p]=h[p]);return e}:c},function(t,n,e){"use strict";e.r(n);e(48),e(49),e(50),e(54),e(62),e(63),e(64),e(65),e(44),e(70),e(71),e(73),e(74),e(75),e(76),e(78),e(84),e(86),e(91);function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){i(t,n,e[n])})}return t}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=document.querySelector(n),this.audioEl=e,Object.assign(this,{touchTextToPlay:!0,highlightClass:"highlighted",dataAttribute:"playhead",audioClipBegin:0,audioClipEnd:null,playbackRate:1,stopAfterCurrent:!1},r),this.current=this._roundHalf(this.audioClipBegin),this.lines=this.el.querySelectorAll("[data-".concat(this.dataAttribute,"]")),this.player=document.querySelector(this.audioEl),this.times=null,this.highlighted=null,this.previousHighlighted=null,this.isPlaying=!1,this.stopAt=null,this._init()}var n,e,i;return n=t,(e=[{key:"_roundHalf",value:function(t){return Number((Math.round(2*Number(t))/2).toFixed(1))}},{key:"_init",value:function(){var t=this;this.lines&&this.player&&(this.times=Array.from(this.lines).reduce(function(n,e){var r=t._roundHalf(e.dataset.playhead);return n[r]||(n[r]=e),n},{}),this.touchTextToPlay&&this.lines.forEach(function(n){var e=function(){n.setAttribute("aria-pressed","true"),t._movePlayhead(n.dataset.playhead)};n.addEventListener("click",e),n.addEventListener("keydown",function(t){13!==t.keyCode&&32!==t.keyCode||(t.preventDefault(),e())}),n.setAttribute("role","button"),n.setAttribute("tabindex","0")}),this.player.addEventListener("timeupdate",function(){return t._onTimeUpdate()}),this.player.addEventListener("ended",function(){t.stop()}),this.player.addEventListener("loadedmetadata",function(){(!t.audioClipEnd||t.audioClipEnd>t.player.duration)&&(t.audioClipEnd=t.player.duration)}),this.player.addEventListener("pause",function(){t.isPlaying=!1,t.player.dispatchEvent(t._onPlayStateChange())}),this.player.addEventListener("play",function(){t.isPlaying=!0,t.player.dispatchEvent(t._onPlayStateChange())}))}},{key:"_highlight",value:function(t){var n=null;this.highlighted&&(n=this.highlighted),this._removeHighlights(),t.classList.add(this.highlightClass),this.highlighted=t,n&&n.setAttribute("aria-pressed",!1)}},{key:"_removeHighlights",value:function(){var t=this;this.lines.forEach(function(n){n.classList.remove(t.highlightClass)})}},{key:"_onTimeUpdate",value:function(){if(this.current=this._roundHalf(this.player.currentTime),this.stopAfterCurrent&&this.current&&this.current>=this.stopAt)return this.stopAt=null,this.stop();var t=this.times[this.current];t&&t!==this.highlighted&&(this.previousHighlighted=this.highlighted,this._highlight(t),this.player.dispatchEvent(this._onHighlightChange())),this.audioClipEnd&&this._roundHalf(this.current)===this._roundHalf(this.audioClipEnd)&&this.stop()}},{key:"_onHighlightChange",value:function(){return new CustomEvent("highlightChange",{bubbles:!0,detail:r({},this)})}},{key:"_onPlayStateChange",value:function(){return new CustomEvent("playStateChange",{bubbles:!0,detail:r({},this)})}},{key:"_movePlayhead",value:function(t){var n=this._roundHalf(t);n&&this.stopAfterCurrent&&(this.stopAt=this._getNextTime(n)),this.current=n,this.play()}},{key:"_getNextTime",value:function(t){var n=this._roundHalf(t),e=Object.keys(this.times).map(function(t){return Number(t)}).sort(function(t,n){return t-n}),r=e.indexOf(n);return e[r+1]||this._roundHalf(this.audioClipEnd)}},{key:"play",value:function(){this.player.currentTime=this.current,this.player.playbackRate=this.playbackRate,this.player.play()}},{key:"pause",value:function(){this.player.pause()}},{key:"stop",value:function(){this.pause(),this._removeHighlights(),this.player.currentTime=this.audioClipBegin,this.current=this.audioClipBegin,this.highlighted=null}},{key:"changePlaybackRate",value:function(t){var n=Number(t);Number.isNaN(n)?console.log("playback rate must be a number"):(this.playbackRate=n,this.player.playbackRate=this.playbackRate)}},{key:"movePlayhead",value:function(t){var n=Number(t);Number.isNaN(n)&&this._movePlayhead(n)}}])&&o(n.prototype,e),i&&o(n,i),t}();n.default=u}]).default});