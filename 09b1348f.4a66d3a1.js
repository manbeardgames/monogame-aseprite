(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{213:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return b}));var a=t(0),n=t.n(a);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=n.a.createContext({}),s=function(e){var r=n.a.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.a.createElement(m.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},l=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(t),l=a,b=u["".concat(p,".").concat(l)]||u[l]||d[l]||i;return t?n.a.createElement(b,o(o({ref:r},m),{},{components:t})):n.a.createElement(b,o({ref:r},m))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=l;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var m=2;m<i;m++)p[m]=t[m];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},62:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return s}));var a=t(3),n=t(7),i=(t(0),t(213)),p={id:"animatedsprite_currentframe",sidebar_label:"CurrentFrame",hide_title:!0,slug:"animatedsprite_currentframe"},o={unversionedId:"api/animatedsprite_currentframe",id:"api/animatedsprite_currentframe",isDocsHomePage:!1,title:"animatedsprite_currentframe",description:"MonoGame.Aseprite",source:"@site/docs\\api\\animatedsprite_currentframe.md",slug:"/api/animatedsprite_currentframe",permalink:"/monogame-aseprite/api/animatedsprite_currentframe",editUrl:"https://github.com/manbeardgames/monogame-aseprite/tree/gh-pages-develop/docs/api/animatedsprite_currentframe.md",version:"current",sidebar_label:"CurrentFrame",sidebar:"apiSideBar",previous:{title:"animatedsprite_currentanimation",permalink:"/monogame-aseprite/api/animatedsprite_currentanimation"},next:{title:"animatedsprite_currentframeindex",permalink:"/monogame-aseprite/api/animatedsprite_currentframeindex"}},c=[{value:"MonoGame.Aseprite.Graphics.MonoGame.Aseprite.Graphics.AnimatedSprite",id:"monogameasepritegraphicsmonogameasepritegraphicsanimatedsprite",children:[]},{value:"AnimatedSprite.CurrentFrame Property",id:"animatedspritecurrentframe-property",children:[]}],m={rightToc:c};function s(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"index"},Object(i.b)("a",Object(a.a)({parentName:"h4"},{href:"index",title:"index"}),"MonoGame.Aseprite")),Object(i.b)("h3",{id:"monogameasepritegraphicsmonogameasepritegraphicsanimatedsprite"},Object(i.b)("a",Object(a.a)({parentName:"h3"},{href:"monogame_aseprite_graphics",title:"MonoGame.Aseprite.Graphics"}),"MonoGame.Aseprite.Graphics"),".",Object(i.b)("a",Object(a.a)({parentName:"h3"},{href:"animatedsprite",title:"MonoGame.Aseprite.Graphics.AnimatedSprite"}),"AnimatedSprite")),Object(i.b)("h2",{id:"animatedspritecurrentframe-property"},"AnimatedSprite.CurrentFrame Property"),Object(i.b)("p",null,"Gets the current ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"frame",title:"MonoGame.Aseprite.Graphics.Frame"}),"Frame")," in the animation that",Object(i.b)("br",{parentName:"p"}),"\n","is being rendered.  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"public MonoGame.Aseprite.Graphics.Frame CurrentFrame { get; set; }\n")),Object(i.b)("h4",{id:"property-value"},"Property Value"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"frame",title:"MonoGame.Aseprite.Graphics.Frame"}),"Frame"),"  "))}s.isMDXComponent=!0}}]);