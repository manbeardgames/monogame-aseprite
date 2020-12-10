(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(213)),o={id:"animatedsprite_onframebegin",sidebar_label:"OnFrameBegin",hide_title:!0,slug:"animatedsprite_onframebegin"},p={unversionedId:"api/animatedsprite_onframebegin",id:"api/animatedsprite_onframebegin",isDocsHomePage:!1,title:"animatedsprite_onframebegin",description:"MonoGame.Aseprite",source:"@site/docs\\api\\animatedsprite_onframebegin.md",slug:"/api/animatedsprite_onframebegin",permalink:"/monogame-aseprite/api/animatedsprite_onframebegin",editUrl:"https://github.com/manbeardgames/monogame-aseprite/tree/gh-pages-develop/docs/api/animatedsprite_onframebegin.md",version:"current",sidebar_label:"OnFrameBegin",sidebar:"apiSideBar",previous:{title:"animatedsprite_onanimationloop",permalink:"/monogame-aseprite/api/animatedsprite_onanimationloop"},next:{title:"animatedsprite_onframeend",permalink:"/monogame-aseprite/api/animatedsprite_onframeend"}},c=[{value:"MonoGame.Aseprite.Graphics.MonoGame.Aseprite.Graphics.AnimatedSprite",id:"monogameasepritegraphicsmonogameasepritegraphicsanimatedsprite",children:[]},{value:"AnimatedSprite.OnFrameBegin Property",id:"animatedspriteonframebegin-property",children:[]}],m={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"index"},Object(i.b)("a",Object(r.a)({parentName:"h4"},{href:"index",title:"index"}),"MonoGame.Aseprite")),Object(i.b)("h3",{id:"monogameasepritegraphicsmonogameasepritegraphicsanimatedsprite"},Object(i.b)("a",Object(r.a)({parentName:"h3"},{href:"monogame_aseprite_graphics",title:"MonoGame.Aseprite.Graphics"}),"MonoGame.Aseprite.Graphics"),".",Object(i.b)("a",Object(r.a)({parentName:"h3"},{href:"animatedsprite",title:"MonoGame.Aseprite.Graphics.AnimatedSprite"}),"AnimatedSprite")),Object(i.b)("h2",{id:"animatedspriteonframebegin-property"},"AnimatedSprite.OnFrameBegin Property"),Object(i.b)("p",null,"Gets or Sets an action to invoke at the beginning of each",Object(i.b)("br",{parentName:"p"}),"\n","frame in an animation.  "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"public System.Action OnFrameBegin { get; set; }\n")),Object(i.b)("h4",{id:"property-value"},"Property Value"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/System.Action",title:"System.Action"}),"System.Action"),"  "))}s.isMDXComponent=!0},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),s=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,u=b["".concat(o,".").concat(d)]||b[d]||l[d]||i;return n?a.a.createElement(u,p(p({ref:t},m),{},{components:n})):a.a.createElement(u,p({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);