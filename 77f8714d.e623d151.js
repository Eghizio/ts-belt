(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{114:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,d=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return r?o.a.createElement(d,c(c({ref:t},p),{},{components:r})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(114)),i={id:"fromPredicate",title:"fromPredicate"},c={unversionedId:"option/fromPredicate",id:"option/fromPredicate",isDocsHomePage:!1,title:"fromPredicate",description:"It returns None if the predicate function returns false, otherwise, returns a value wrapped in Some.",source:"@site/docs/option/fromPredicate.md",slug:"/option/fromPredicate",permalink:"/ts-belt/docs/option/fromPredicate",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/option/fromPredicate.md",version:"current",sidebar:"sidebar",previous:{title:"fromNullable",permalink:"/ts-belt/docs/option/fromNullable"},next:{title:"getExn",permalink:"/ts-belt/docs/option/getExn"}},l=[{value:"Example",id:"example",children:[]}],p={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"It returns ",Object(a.b)("inlineCode",{parentName:"p"},"None")," if the predicate function returns ",Object(a.b)("inlineCode",{parentName:"p"},"false"),", otherwise, returns a value wrapped in ",Object(a.b)("inlineCode",{parentName:"p"},"Some"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"fromPredicate<T>(predicate: (value: T) => boolean, value: T): Option<T>\n")),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function() {\n  const hasExclamationMark = str => str.includes('!')\n  const value = pipe(\n    // \u2b07\ufe0f remove the exclamation mark below\n    O.fromPredicate(hasExclamationMark, 'hello world!'),\n    O.getWithDefault('default value'),\n  )\n\n  return value\n}\n")))}u.isMDXComponent=!0}}]);