(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,m=s["".concat(l,".").concat(b)]||s[b]||f[b]||a;return n?o.a.createElement(m,i(i({ref:t},c),{},{components:n})):o.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(114)),l={id:"fromNullable",title:"fromNullable"},i={unversionedId:"option/fromNullable",id:"option/fromNullable",isDocsHomePage:!1,title:"fromNullable",description:"It returns None if a value is either null or undefined, otherwise, returns that value wrapped in Some.",source:"@site/docs/option/fromNullable.md",slug:"/option/fromNullable",permalink:"/ts-belt/docs/option/fromNullable",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/option/fromNullable.md",version:"current",sidebar:"sidebar",previous:{title:"fromFalsy",permalink:"/ts-belt/docs/option/fromFalsy"},next:{title:"fromPredicate",permalink:"/ts-belt/docs/option/fromPredicate"}},u=[{value:"Example",id:"example",children:[]}],c={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"It returns ",Object(a.b)("inlineCode",{parentName:"p"},"None")," if a value is either ",Object(a.b)("inlineCode",{parentName:"p"},"null")," or ",Object(a.b)("inlineCode",{parentName:"p"},"undefined"),", otherwise, returns that value wrapped in ",Object(a.b)("inlineCode",{parentName:"p"},"Some"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"fromNullable<T>(value: T | null | undefined): Option<T>\n")),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function() {\n  const value = pipe(\n    // \u2b07\ufe0f pass `null` or `undefined` below\n    O.fromNullable('hello'),\n    O.map(value => `${value} world!`),\n    O.getWithDefault('default value'),\n  )\n\n  return value\n}\n")))}p.isMDXComponent=!0}}]);