(self.webpackChunkwebconnect=self.webpackChunkwebconnect||[]).push([[896],{515:(e,t)=>{"use strict";t.Z=void 0;t.Z={black:"#000",white:"#fff"}},5258:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var o=r(7462),s=r(5987),n=r(7294),a=r(6010),i=r(4670),l=r(3871),c=r(9895),p=n.forwardRef((function(e,t){var r=e.classes,i=e.className,p=e.color,u=void 0===p?"primary":p,d=e.position,f=void 0===d?"fixed":d,m=(0,s.Z)(e,["classes","className","color","position"]);return n.createElement(c.Z,(0,o.Z)({square:!0,component:"header",elevation:4,className:(0,a.Z)(r.root,r["position".concat((0,l.Z)(f))],r["color".concat((0,l.Z)(u))],i,"fixed"===f&&"mui-fixed"),ref:t},m))}));const u=(0,i.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(p)},8358:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var o=r(7462),s=r(5987),n=r(4942),a=r(7294),i=r(6010),l=r(4670),c=a.forwardRef((function(e,t){var r=e.classes,n=e.className,l=e.component,c=void 0===l?"div":l,p=e.disableGutters,u=void 0!==p&&p,d=e.variant,f=void 0===d?"regular":d,m=(0,s.Z)(e,["classes","className","component","disableGutters","variant"]);return a.createElement(c,(0,o.Z)({className:(0,i.Z)(r.root,r[f],n,!u&&r.gutters),ref:t},m))}));const p=(0,l.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,n.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(c)},8546:(e,t,r)=>{"use strict";r.r(t),r.d(t,{capitalize:()=>o.Z,createChainedFunction:()=>s.Z,createSvgIcon:()=>n.Z,debounce:()=>a.Z,deprecatedPropType:()=>i,isMuiElement:()=>l.Z,ownerDocument:()=>c.Z,ownerWindow:()=>p.Z,requirePropFactory:()=>u,setRef:()=>d.Z,unstable_useId:()=>x.Z,unsupportedProp:()=>f,useControlled:()=>m.Z,useEventCallback:()=>v.Z,useForkRef:()=>g.Z,useIsFocusVisible:()=>b.Z});var o=r(3871),s=r(2568),n=r(5209),a=r(9437);function i(e,t){return function(){return null}}var l=r(3711),c=r(626),p=r(713);function u(e){return function(){return null}}var d=r(4236);function f(e,t,r,o,s){return null}var m=r(2775),v=r(5192),g=r(3834),x=r(5001),b=r(4896)},5001:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(7294);function s(e){var t=o.useState(e),r=t[0],s=t[1],n=e||r;return o.useEffect((function(){null==r&&s("mui-".concat(Math.round(1e5*Math.random())))}),[r]),n}},1959:(e,t,r)=>{"use strict";var o=r(4836),s=r(5263);t.Z=void 0;var n=s(r(7294)),a=(0,o(r(2108)).default)(n.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.Z=a},4379:(e,t,r)=>{"use strict";var o=r(4836),s=r(5263);t.Z=void 0;var n=s(r(7294)),a=(0,o(r(2108)).default)(n.createElement("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");t.Z=a},2108:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=r(8546)},7723:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var o=r(7462),s=r(3366),n=r(1721);function a(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var i=r(7294),l=r(2666),c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return o=t,void((r=e).classList?r.classList.remove(o):"string"==typeof r.className?r.className=a(r.className,o):r.setAttribute("class",a(r.className&&r.className.baseVal||"",o)));var r,o}))},p=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,r){var o=t.resolveArguments(e,r),s=o[0],n=o[1];t.removeClasses(s,"exit"),t.addClass(s,n?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,r)},t.onEntering=function(e,r){var o=t.resolveArguments(e,r),s=o[0],n=o[1]?"appear":"enter";t.addClass(s,n,"active"),t.props.onEntering&&t.props.onEntering(e,r)},t.onEntered=function(e,r){var o=t.resolveArguments(e,r),s=o[0],n=o[1]?"appear":"enter";t.removeClasses(s,n),t.addClass(s,n,"done"),t.props.onEntered&&t.props.onEntered(e,r)},t.onExit=function(e){var r=t.resolveArguments(e)[0];t.removeClasses(r,"appear"),t.removeClasses(r,"enter"),t.addClass(r,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var r=t.resolveArguments(e)[0];t.addClass(r,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var r=t.resolveArguments(e)[0];t.removeClasses(r,"exit"),t.addClass(r,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,r){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,r]},t.getClassNames=function(e){var r=t.props.classNames,o="string"==typeof r,s=o?(o&&r?r+"-":"")+e:r[e];return{baseClassName:s,activeClassName:o?s+"-active":r[e+"Active"],doneClassName:o?s+"-done":r[e+"Done"]}},t}(0,n.Z)(t,e);var r=t.prototype;return r.addClass=function(e,t,r){var o=this.getClassNames(t)[r+"ClassName"],s=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===r&&s&&(o+=" "+s),"active"===r&&e&&e.scrollTop,o&&(this.appliedClasses[t][r]=o,function(e,t){e&&t&&t.split(" ").forEach((function(t){return o=t,void((r=e).classList?r.classList.add(o):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(r,o)||("string"==typeof r.className?r.className=r.className+" "+o:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+o)));var r,o}))}(e,o))},r.removeClasses=function(e,t){var r=this.appliedClasses[t],o=r.base,s=r.active,n=r.done;this.appliedClasses[t]={},o&&c(e,o),s&&c(e,s),n&&c(e,n)},r.render=function(){var e=this.props,t=(e.classNames,(0,s.Z)(e,["classNames"]));return i.createElement(l.ZP,(0,o.Z)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(i.Component);p.defaultProps={classNames:""},p.propTypes={};const u=p},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5263:(e,t,r)=>{var o=r(8698).default;function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n},e.exports.__esModule=!0,e.exports.default=e.exports},8698:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);