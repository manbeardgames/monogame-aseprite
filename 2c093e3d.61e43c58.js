(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{213:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=a.a.createContext({}),s=function(e){var r=a.a.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return a.a.createElement(m.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},l=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(t),l=n,b=d["".concat(p,".").concat(l)]||d[l]||u[l]||i;return t?a.a.createElement(b,o(o({ref:r},m),{},{components:t})):a.a.createElement(b,o({ref:r},m))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=l;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var m=2;m<i;m++)p[m]=t[m];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},86:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return s}));var n=t(3),a=t(7),i=(t(0),t(213)),p={id:"animatedsprite_currentframeindex",sidebar_label:"CurrentFrameIndex",hide_title:!0,slug:"animatedsprite_currentframeindex"},o={unversionedId:"api/animatedsprite_currentframeindex",id:"api/animatedsprite_currentframeindex",isDocsHomePage:!1,title:"animatedsprite_currentframeindex",description:"MonoGame.Aseprite",source:"@site/docs\\api\\animatedsprite_currentframeindex.md",slug:"/api/animatedsprite_currentframeindex",permalink:"/monogame-aseprite/api/animatedsprite_currentframeindex",editUrl:"https://github.com/manbeardgames/monogame-aseprite/tree/gh-pages-develop/docs/api/animatedsprite_currentframeindex.md",version:"current",sidebar_label:"CurrentFrameIndex",sidebar:"apiSideBar",previous:{title:"animatedsprite_currentframe",permalink:"/monogame-aseprite/api/animatedsprite_currentframe"},next:{title:"animatedsprite_frames",permalink:"/monogame-aseprite/api/animatedsprite_frames"}},c=[{value:"MonoGame.Aseprite.Graphics.MonoGame.Aseprite.Graphics.AnimatedSprite",id:"monogameasepritegraphicsmonogameasepritegraphicsanimatedsprite",children:[]},{value:"AnimatedSprite.CurrentFrameIndex Property",id:"animatedspritecurrentframeindex-property",children:[]}],m={rightToc:c};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"index"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"index",title:"index"}),"MonoGame.Aseprite")),Object(i.b)("h3",{id:"monogameasepritegraphicsmonogameasepritegraphicsanimatedsprite"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"monogame_aseprite_graphics",title:"MonoGame.Aseprite.Graphics"}),"MonoGame.Aseprite.Graphics"),".",Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"animatedsprite",title:"MonoGame.Aseprite.Graphics.AnimatedSprite"}),"AnimatedSprite")),Object(i.b)("h2",{id:"animatedspritecurrentframeindex-property"},"AnimatedSprite.CurrentFrameIndex Property"),Object(i.b)("p",null,"Gets the index of current ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"frame",title:"MonoGame.Aseprite.Graphics.Frame"}),"Frame")," in the animation",Object(i.b)("br",{parentName:"p"}),"\n","that is being rendered. This is the index of the frame in the",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"animatedsprite_frames",title:"MonoGame.Aseprite.Graphics.AnimatedSprite.Frames"}),"Frames")," propery.  "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"public int CurrentFrameIndex { get; set; }\n")),Object(i.b)("h4",{id:"property-value"},"Property Value"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/System.Int32",title:"System.Int32"}),"System.Int32"),"  "))}s.isMDXComponent=!0}}]);