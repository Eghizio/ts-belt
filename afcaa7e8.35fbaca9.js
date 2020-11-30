(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(114)),i={id:"fromFalsy",title:"fromFalsy"},l={unversionedId:"option/fromFalsy",id:"option/fromFalsy",isDocsHomePage:!1,title:"fromFalsy",description:"It returns None if a value is falsy, otherwise, returns that value wrapped in Some.",source:"@site/docs/option/fromFalsy.md",slug:"/option/fromFalsy",permalink:"/ts-belt/docs/option/fromFalsy",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/option/fromFalsy.md",version:"current",sidebar:"sidebar",previous:{title:"flatMap",permalink:"/ts-belt/docs/option/flatMap"},next:{title:"fromNullable",permalink:"/ts-belt/docs/option/fromNullable"}},c=[{value:"Example",id:"example",children:[]}],p={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It returns ",Object(o.b)("inlineCode",{parentName:"p"},"None")," if a value is falsy, otherwise, returns that value wrapped in ",Object(o.b)("inlineCode",{parentName:"p"},"Some"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"fromFalsy<T>(value: T): Option<T>\n")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function() {\n  const value = pipe(\n    // \u2b07\ufe0f pass a falsy value below (for instance 0, null, undefined)\n    O.fromFalsy(10),\n    O.map(value => value ** 2),\n    O.getWithDefault(-1),\n  )\n\n  return value\n}\n")))}u.isMDXComponent=!0},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,b=s["".concat(i,".").concat(m)]||s[m]||f[m]||o;return n?a.a.createElement(b,l(l({ref:t},p),{},{components:n})):a.a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);