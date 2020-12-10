(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),o=(n(0),n(213)),r={id:"animated-sprite-class",title:"Using the Animated Sprite Class",sidebar_label:"Using the Animated Sprite Class"},c={unversionedId:"getting-started/animated-sprite-class",id:"getting-started/animated-sprite-class",isDocsHomePage:!1,title:"Using the Animated Sprite Class",description:"This serves to document the AnimatedSprite class that you can use out-of-the-box in your game.",source:"@site/docs\\getting-started\\animated-sprite-class.md",slug:"/getting-started/animated-sprite-class",permalink:"/monogame-aseprite/getting-started/animated-sprite-class",editUrl:"https://github.com/manbeardgames/monogame-aseprite/tree/gh-pages-develop/docs/getting-started/animated-sprite-class.md",version:"current",sidebar_label:"Using the Animated Sprite Class",sidebar:"someSidebar",previous:{title:"Using in Game.",permalink:"/monogame-aseprite/getting-started/using-in-game"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Creating a New Instance",id:"creating-a-new-instance",children:[]},{value:"Playing an Animation",id:"playing-an-animation",children:[]},{value:"Invokable Actions",id:"invokable-actions",children:[{value:"OnFrameBegin",id:"onframebegin",children:[]},{value:"OnFrameEnd",id:"onframeend",children:[]},{value:"OnAnimationLoop",id:"onanimationloop",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This serves to document the ",Object(o.b)("inlineCode",{parentName:"p"},"AnimatedSprite")," class that you can use out-of-the-box in your game."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"AnimatedSprite")," class is an out-of-the-box solution for using the ",Object(o.b)("inlineCode",{parentName:"p"},"AsepriteDocument")," imported from the content pipeline.  The purpose of it is to give users a quick way of making use of the document imported, as well as an example of what you can do with it."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"It is an out-of-the-box solution and will not fit every need that a user may have when it comes to their sprite animations.")),Object(o.b)("p",null,"Below we'll go over how to instantiate a new instance of the class using the ",Object(o.b)("inlineCode",{parentName:"p"},"AsepriteDocument"),", and go over how to play an animation, and the various properties that are accessable to the class."),Object(o.b)("h2",{id:"creating-a-new-instance"},"Creating a New Instance"),Object(o.b)("p",null,"To create a new instance of the ",Object(o.b)("inlineCode",{parentName:"p"},"AnimatedSprite")," class, you an call the ",Object(o.b)("inlineCode",{parentName:"p"},"AnimatedSprite(AsepriteDocument)")," constructor.  First you'll need to import the ",Object(o.b)("inlineCode",{parentName:"p"},"AsepriteDocument"),", then you can create the class.  Here is an exmaple"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'using Monogame.Aseprite.Documents;\nusing MonoGame.Aseprite.Graphics;\n\n\nAsepriteDocument aseprite = Content.Load<AsepriteDocument>("player_animations");\nAnimatedSprite sprite = new AnimatedSprite(aseprite);\n')),Object(o.b)("h2",{id:"playing-an-animation"},"Playing an Animation"),Object(o.b)("p",null,"Once you've created a new ",Object(o.b)("inlineCode",{parentName:"p"},"AnimatedSprite")," instance, to play an animation, just called the ",Object(o.b)("inlineCode",{parentName:"p"},"AnimatedSprite(string)")," method, passing in the name of the animation to play.  Here is an example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'sprite.Play("run");\n')),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"AnimatedSprite")," class makes use of the names of the animation tags defined in the Aseprite file to define the dictionary of animations.  Because of this, each tag in the Aseprite file must have a unique name."))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If the animation that you tell it to play is the current animation that is already playing, then the command is ignored. This is to prevent clipping an animation back to its start."))),Object(o.b)("h2",{id:"invokable-actions"},"Invokable Actions"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"AniamtedSprite")," class has three ",Object(o.b)("inlineCode",{parentName:"p"},"Action")," properties that you can set to be called during different stages of an animation. These are ",Object(o.b)("inlineCode",{parentName:"p"},"OnFrameBegin"),", ",Object(o.b)("inlineCode",{parentName:"p"},"OnFrameEnd")," and ",Object(o.b)("inlineCode",{parentName:"p"},"OnAnimationLoop"),".  Using these actions can give further control to how you use the class."),Object(o.b)("p",null,"Before we learn to use these actions however, we need to understand the timing in which each actoin is called.  The following psuedo code serves to demonstrate the update method of the animated sprite to show the timigs of the action invocations."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Update\n{\n    if(animating)\n    {\n        if(current frame's remaining time equals its duration)\n        {\n            Invoke OnFrameBegin\n        }\n\n        Subtract delta time from current frame's remaining time\n\n        if(current frame's remaining time is zero)\n        {\n            Invoke OnFrameEnd\n\n            Increment the current frame index by 1\n\n            if(current frame index greater than animations last frame index)\n            {\n                current frame index equals animation's starting frame index\n\n                Invoke OnAnimationLoop\n            }\n        }\n    }\n}\n")),Object(o.b)("h3",{id:"onframebegin"},"OnFrameBegin"),Object(o.b)("p",null,"This action is invoked at the beginning of each frame in the animation.  To use it, just set the property value to an ",Object(o.b)("inlineCode",{parentName:"p"},"Action")," method.  For example."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"sprite.OnFrameBegin = () => \n{\n    //  Your code here to execute at the beginning of each frame.    \n}\n")),Object(o.b)("h3",{id:"onframeend"},"OnFrameEnd"),Object(o.b)("p",null,"This action is invoked at the end of each frame in the animation.  To use it, just set the property value to an ",Object(o.b)("inlineCode",{parentName:"p"},"Action")," method.  For example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"sprite.OnFrameEnd = () => \n{\n    //  Your code here to execute at the end of each frame.\n};\n")),Object(o.b)("h3",{id:"onanimationloop"},"OnAnimationLoop"),Object(o.b)("p",null,"This action is invoked each time an animation loops back to the beginning.  To use it, just set the property value to an ",Object(o.b)("inlineCode",{parentName:"p"},"Action")," method.  For example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"sprite.OnAnimationBegin() =>\n{\n    //  Your code here to execute when an animation loops.\n};\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"OnAnimationLoop")," action is interesting because you can use it to switch to a different animation when the current one finishes playing.  For exmaple, lets say you have an attack animation, and you want to switch to an idle animation after the attack.  You can do so like this"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'sprite.Play("attack");\nsprite.OnAnimationLoop = () => \n{\n    sprite.Play("idle");\n    sprite.OnAnimationLoop = null;\n};\n')),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"AnimatedSprite")," class provides a quick out-of-the-box solution that takes advantage of the ",Object(o.b)("inlineCode",{parentName:"p"},"AsepriteDocument")," imported to create sprite animations in your game.  It doesn't require an ",Object(o.b)("inlineCode",{parentName:"p"},"AsepriteDocument"),", providing methods you can use to set it all up manuallly.  To do this, or f you would like a more indepth look at the ",Object(o.b)("inlineCode",{parentName:"p"},"AnimatedSprite")," class, check out the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/animatedsprite"}),"API Documentation"),". "))}l.isMDXComponent=!0},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),b=a,u=m["".concat(r,".").concat(b)]||m[b]||d[b]||o;return n?i.a.createElement(u,c(c({ref:t},p),{},{components:n})):i.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);