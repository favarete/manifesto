(self.webpackChunklidimismo_art=self.webpackChunklidimismo_art||[]).push([[678],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,l){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),l=r(7316),c=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),f=r(4983).mdx,p=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,c),s=p(t),m=u.useMemo((function(){if(!r)return null;var e=i({React:u,mdx:f},s),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return u.createElement(m,i({},a))}},7704:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(6179),a=r(8846),l=r(6725),c=r(6161),s=r(838);t.default=function(e){var t=e.data;return n.createElement(a.Z,null,n.createElement(o.Z,{title:"Home"}),t.allFile.nodes.map((function(e){var t=e.childMdx;return n.createElement(n.Fragment,null,n.createElement(s.Z,{container:!0,item:!0,direction:"column",alignContent:"flex-start",justifyContent:"flex-start",alignItems:"flex-start"},n.createElement(s.Z,{item:!0},n.createElement("h1",{className:(0,c.iv)(i.title)},t.frontmatter.title)),n.createElement(s.Z,{item:!0},n.createElement("p",{className:(0,c.iv)(i.subInfo)},t.frontmatter.read)),n.createElement(s.Z,{item:!0},n.createElement(l.MDXRenderer,null,t.body)),n.createElement(s.Z,{container:!0,item:!0,direction:"column",alignContent:"flex-start",justifyContent:"flex-start",alignItems:"flex-start"},n.createElement(s.Z,{item:!0},n.createElement("p",{className:(0,c.iv)(i.subInfo)},t.frontmatter.release)),n.createElement(s.Z,{item:!0},n.createElement("p",{className:(0,c.iv)(i.subInfo)},t.frontmatter.version+", "+t.frontmatter.update)),n.createElement(s.Z,{item:!0},n.createElement("p",null,n.createElement("a",{href:t.frontmatter.authorLink,target:"_blank",className:(0,c.iv)(i.links)},t.frontmatter.author))))))})))};var i=c.mM.create({title:{fontFamily:"Oswald",fontSize:"4.4rem",margin:".8rem 0"},subInfo:{fontFamily:"Open Sans",fontSize:"0.9rem",color:"#6d6d6d",margin:".2rem 0"},links:{fontFamily:"Open Sans",fontSize:"0.8rem",color:"#585858",textDecoration:"none",margin:".2rem 0","&:hover":{color:"#969696"}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-4955279632c0c2a06995.js.map