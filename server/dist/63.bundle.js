"use strict";(self.webpackChunkwebconnect=self.webpackChunkwebconnect||[]).push([[63],{3901:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7462),n=a(5987),o=a(7294),i=a(6010),l=a(4670);const c=(0,a(5209).Z)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var s=o.forwardRef((function(e,t){var a,l=e.alt,s=e.children,m=e.classes,d=e.className,u=e.component,p=void 0===u?"div":u,f=e.imgProps,h=e.sizes,v=e.src,g=e.srcSet,b=e.variant,Z=void 0===b?"circular":b,y=(0,n.Z)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),E=function(e){var t=e.src,a=e.srcSet,r=o.useState(!1),n=r[0],i=r[1];return o.useEffect((function(){if(t||a){i(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=a,r.onload=function(){e&&i("loaded")},r.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,a]),n}({src:v,srcSet:g}),k=v||g,x=k&&"error"!==E;return a=x?o.createElement("img",(0,r.Z)({alt:l,src:v,srcSet:g,sizes:h,className:m.img},f)):null!=s?s:k&&l?l[0]:o.createElement(c,{className:m.fallback}),o.createElement(p,(0,r.Z)({className:(0,i.Z)(m.root,m.system,m[Z],d,!x&&m.colorDefault),ref:t},y),a)}));const m=(0,l.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(s)},7397:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(7462),n=a(5987),o=a(7294),i=a(6010),l=a(2318),c=a(4670),s=a(5736),m=o.forwardRef((function(e,t){var a=e.children,c=e.classes,m=e.className,d=e.component,u=void 0===d?"div":d,p=e.disablePointerEvents,f=void 0!==p&&p,h=e.disableTypography,v=void 0!==h&&h,g=e.position,b=e.variant,Z=(0,n.Z)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),y=(0,s.Y)()||{},E=b;return b&&y.variant,y&&!E&&(E=y.variant),o.createElement(s.Z.Provider,{value:null},o.createElement(u,(0,r.Z)({className:(0,i.Z)(c.root,m,"end"===g?c.positionEnd:c.positionStart,f&&c.disablePointerEvents,y.hiddenLabel&&c.hiddenLabel,"filled"===E&&c.filled,"dense"===y.margin&&c.marginDense),ref:t},Z),"string"!=typeof a||v?a:o.createElement(l.Z,{color:"textSecondary"},a)))}));const d=(0,c.Z)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(m)},3681:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(7462),n=a(5987),o=a(7294),i=a(6010),l=a(3871),c=a(4670),s=a(9693),m=a(8920),d=o.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.color,d=void 0===s?"primary":s,u=e.value,p=e.valueBuffer,f=e.variant,h=void 0===f?"indeterminate":f,v=(0,n.Z)(e,["classes","className","color","value","valueBuffer","variant"]),g=(0,m.Z)(),b={},Z={bar1:{},bar2:{}};if(("determinate"===h||"buffer"===h)&&void 0!==u){b["aria-valuenow"]=Math.round(u),b["aria-valuemin"]=0,b["aria-valuemax"]=100;var y=u-100;"rtl"===g.direction&&(y=-y),Z.bar1.transform="translateX(".concat(y,"%)")}if("buffer"===h&&void 0!==p){var E=(p||0)-100;"rtl"===g.direction&&(E=-E),Z.bar2.transform="translateX(".concat(E,"%)")}return o.createElement("div",(0,r.Z)({className:(0,i.Z)(a.root,a["color".concat((0,l.Z)(d))],c,{determinate:a.determinate,indeterminate:a.indeterminate,buffer:a.buffer,query:a.query}[h]),role:"progressbar"},b,{ref:t},v),"buffer"===h?o.createElement("div",{className:(0,i.Z)(a.dashed,a["dashedColor".concat((0,l.Z)(d))])}):null,o.createElement("div",{className:(0,i.Z)(a.bar,a["barColor".concat((0,l.Z)(d))],("indeterminate"===h||"query"===h)&&a.bar1Indeterminate,{determinate:a.bar1Determinate,buffer:a.bar1Buffer}[h]),style:Z.bar1}),"determinate"===h?null:o.createElement("div",{className:(0,i.Z)(a.bar,("indeterminate"===h||"query"===h)&&a.bar2Indeterminate,"buffer"===h?[a["color".concat((0,l.Z)(d))],a.bar2Buffer]:a["barColor".concat((0,l.Z)(d))]),style:Z.bar2}))}));const u=(0,c.Z)((function(e){var t=function(t){return"light"===e.palette.type?(0,s.$n)(t,.62):(0,s._j)(t,.5)},a=t(e.palette.primary.main),r=t(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:a},colorSecondary:{backgroundColor:r},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(d)},1860:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7462),n=a(5987),o=a(7294),i=a(6010),l=a(4670),c=o.forwardRef((function(e,t){var a=e.classes,l=e.className,c=(0,n.Z)(e,["classes","className"]);return o.createElement("div",(0,r.Z)({className:(0,i.Z)(a.root,l),ref:t},c))}));c.muiName="ListItemSecondaryAction";const s=(0,l.Z)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(c)},6837:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7462),n=a(5987),o=a(7294),i=a(6010),l=a(4670),c=a(3871),s=o.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.color,m=void 0===s?"default":s,d=e.component,u=void 0===d?"li":d,p=e.disableGutters,f=void 0!==p&&p,h=e.disableSticky,v=void 0!==h&&h,g=e.inset,b=void 0!==g&&g,Z=(0,n.Z)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return o.createElement(u,(0,r.Z)({className:(0,i.Z)(a.root,l,"default"!==m&&a["color".concat((0,c.Z)(m))],b&&a.inset,!v&&a.sticky,!f&&a.gutters),ref:t},Z))}));const m=(0,l.Z)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(s)},1959:(e,t,a)=>{var r=a(4836),n=a(5263);t.Z=void 0;var o=n(a(7294)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.Z=i},8428:(e,t,a)=>{var r=a(4836),n=a(5263);t.Z=void 0;var o=n(a(7294)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},8880:(e,t,a)=>{var r=a(4836),n=a(5263);t.Z=void 0;var o=n(a(7294)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"}),"Drafts");t.Z=i},9067:(e,t,a)=>{var r=a(4836),n=a(5263);t.Z=void 0;var o=n(a(7294)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=i},3792:(e,t,a)=>{var r=a(4836),n=a(5263);t.Z=void 0;var o=n(a(7294)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");t.Z=i},4363:(e,t,a)=>{var r=a(4836),n=a(5263);t.Z=void 0;var o=n(a(7294)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");t.Z=i},4379:(e,t,a)=>{var r=a(4836),n=a(5263);t.Z=void 0;var o=n(a(7294)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");t.Z=i},4080:(e,t,a)=>{var r=a(4836),n=a(5263);t.Z=void 0;var o=n(a(7294)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");t.Z=i},4704:(e,t,a)=>{var r=a(4836),n=a(5263);t.Z=void 0;var o=n(a(7294)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");t.Z=i},2835:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(1120),o=a(5258),i=a(8358),l=a(515);const c=(0,n.Z)((e=>({root:{flexGrow:1,height:"3.7rem",padding:"10px 0",height:"4.5rem",background:l.Z.white,top:0,boxShadow:"-3px 1px 3px 0px #e5e5e5","& .MuiToolbar-root":{padding:0,height:"100%"}},menuButton:{marginRight:e.spacing(2)}}))),s=({children:e,styles:t})=>{const a=c();return r.createElement(o.Z,{position:"sticky",className:a.root,style:t},r.createElement(i.Z,{variant:"dense"},e))}},5212:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(3681);const o=(0,a(1120).Z)({progress:{position:"absolute",top:"120%",width:"98%",height:"3px",margin:"0 auto"}}),i=()=>{const e=o();return r.createElement(n.Z,{color:"primary",className:e.progress})}},8063:(e,t,a)=>{a.r(t),a.d(t,{default:()=>X});var r=a(7294),n=a(9704),o=a(2318),i=a(7812),l=a(2822),c=a(998),s=a(1860),m=a(6837),d=a(5757),u=a(6912),p=a(7462),f=a(5987),h=a(6010),v=a(4670),g=a(6987),b=r.forwardRef((function(e,t){var a=e.classes,n=e.className,o=(0,f.Z)(e,["classes","className"]),i=r.useContext(g.Z);return r.createElement("div",(0,p.Z)({className:(0,h.Z)(a.root,n,"flex-start"===i.alignItems&&a.alignItemsFlexStart),ref:t},o))}));const Z=(0,v.Z)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(b);var y=a(3901),E=a(3637),k=a(2157),x=a(282),S=a(7397),C=a(1959),w=a(9302),N=a(4077),I=a(4710),M=a(8715),z=a(650),L=a(4379),P=a(9067),T=a(4080),R=a(8880),D=a(3792),A=a(4363),F=a(4704),H=a(8428),B=a(1120),V=a(9585),O=a(5403),j=a(2835),q=a(5212),$=a(5434);const G=(0,B.Z)({contactInfo:{position:"relative",height:"100%"},list:{"& .MuiListItem-root":{"& .MuiAvatar-root":{backgroundColor:"#9696b9"},"& .MuiListItemText-primary":{color:"#3c1908",overflow:"hidden",textOverflow:"ellipsis",whitSpace:"nowrap",padding:"0 14px 0 0"},"& .MuiTypography-body2":{display:"flex",alignItems:"center","& .MuiSvgIcon-root":{fontSize:"1.1rem",marginRight:5,color:"#4c4c6c"}}}},speedDial:{alignItems:"flex-end",position:"absolute",bottom:"1rem",right:"1rem","& .MuiFab-primary":{background:"cornflowerblue",color:"#fff"}},collapseDiv:{display:"flex",justifyContent:"center"},addLinkInput:{width:"70%"},privacy:{textTransform:"initial"},socialList:{"& .MuiListItemSecondaryAction-root":{right:5,display:"flex","& .MuiIconButton-root":{"& svg":{fontSize:"1.2rem",color:"#e98181"}},"& .MuiIconButton-root:first-child":{"& svg":{color:"#5d7297"}}}},bottomSnackbar:{position:"absolute",width:"100%",bottom:"5rem"}}),W=[{icon:r.createElement(F.Z,{style:{color:"#1DA1F2"}}),name:"twitter"},{icon:r.createElement(D.Z,{style:{color:"#4267B2"}}),name:"facebook"},{icon:r.createElement(A.Z,{style:{color:"#C13584"}}),name:"instagram"}],X=({className:e})=>{const{id:t}=(0,n.v9)((e=>e.account.account)),a=(0,n.I0)(),p=G(),[f,h]=r.useState(!1),{username:v,socials:g,online:b}=(0,n.v9)((e=>e.account.account)),[D,A]=r.useState(!1),[F,B]=r.useState(!1),[X,Y]=r.useState(!1),[_,K]=r.useState({show:!1,message:""}),[J,Q]=r.useState({error:!1,helperText:""}),U=g.find((e=>"email"===e.name)),[ee,te]=r.useState({open:!1,icon:"",social:{name:"",link:"",hidden:!0}}),[ae,re]=r.useState(!1),ne=()=>{B(!1)},oe=({icon:e,name:t})=>{te({open:!0,icon:e,social:{name:t,link:"",hidden:!0}})},ie=e=>{(0,$.g5)(e,(()=>{})),a((0,O.kb)(e)),K({show:!0,message:"Privacy updated"})},le=()=>{K({show:!1,message:""})};return r.createElement("section",{className:[p.contactInfo,e].join(" ")},r.createElement(j.Z,null,r.createElement(i.Z,{onClick:()=>{return e={component:"settings",parent:"stack"},void a((0,V.T6)(e));var e}},r.createElement(L.Z,null)),r.createElement(o.Z,{component:"h6"}," Contact info "),D&&r.createElement(q.Z,null)),r.createElement("div",{className:p.contactBody},r.createElement(l.Z,{className:p.list},r.createElement(c.Z,{button:!0},r.createElement(Z,null,r.createElement(y.Z,null,r.createElement(R.Z,null))),r.createElement(d.Z,{primary:U.link,secondary:r.createElement(x.Z,{className:p.privacy,onClick:()=>{ie({...U,hidden:!U.hidden})}},U.hidden?r.createElement(r.Fragment,null," ",r.createElement(T.Z,null),r.createElement(o.Z,{variant:"subtitle2",component:"span"}," Only me ")):r.createElement(r.Fragment,null,r.createElement(z.Z,null),r.createElement(o.Z,{variant:"subtitle2",component:"span"}," Public ")))})),r.createElement(l.Z,{className:p.socialList,subheader:r.createElement(m.Z,{component:"div",id:"nested-list-subheader"},"Other social handles")},g.filter((e=>"email"!==e.name)).map(((e,t)=>{const{icon:n}=W.find((t=>t.name===e.name));return r.createElement(c.Z,{button:!0,key:t},r.createElement(Z,null,r.createElement(i.Z,null,n)),r.createElement(d.Z,{primary:r.createElement("a",{style:{textDecoration:"underline"},target:"_blank",rel:"noreferrer",href:e.link}," ",e.link.replace("https://","")," "),secondary:r.createElement(x.Z,{className:p.privacy,onClick:()=>{ie({...e,hidden:!e.hidden})}},e.hidden?r.createElement(r.Fragment,null," ",r.createElement(T.Z,null),r.createElement(o.Z,{variant:"subtitle2",component:"span"}," Only me ")):r.createElement(r.Fragment,null,r.createElement(z.Z,null),r.createElement(o.Z,{variant:"subtitle2",component:"span"}," Public ")))}),r.createElement(s.Z,null,r.createElement(i.Z,{onClick:()=>oe({name:e.name,icon:n})},r.createElement(P.Z,null)),r.createElement(i.Z,{onClick:()=>(e=>{(0,$.dP)(e,(()=>{})),a((0,O.Nv)(e)),K({show:!0,message:"Contact deleted successfully"})})(e)},r.createElement(H.Z,null))))}))),ee.open&&r.createElement(E.Z,{in:ee.open},r.createElement(c.Z,null,r.createElement(Z,null,ee.icon),r.createElement(k.Z,{className:p.addLinkInput,placeholder:"Enter a link",onChange:({target:e})=>{te({...ee,social:{...ee.social,link:e.value.trim()}}),J.error&&Q({error:!1,helperText:""})},error:J.error,helperText:J.helperText,value:ee.social.link}),r.createElement(S.Z,{position:"end",style:{height:"100%"}},r.createElement(i.Z,{onClick:()=>{const e=(t=ee.social.link).includes("https://")?"https://"===t?{error:!0,helperText:"Complete the link with your username"}:{error:!1,helperText:""}:{error:!0,helperText:"Link must contain https://"};var t;Q({...e}),!e.error&&b&&((0,$.g5)(ee.social,(()=>{})),a((0,O.kb)(ee.social)))}},r.createElement(C.Z,{style:{color:"#645faf"}})))))),r.createElement(u.Z,{className:p.bottomSnackbar,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:2e3,message:_.message,open:_.show,onClose:le},r.createElement(M.Z,{variant:"filled",elevation:6,onClose:le,severity:"success"},_.message)),r.createElement(w.Z,{ariaLabel:"SpeedDial openIcon",className:p.speedDial,icon:r.createElement(N.Z,{openIcon:r.createElement(P.Z,null)}),onClose:ne,onOpen:()=>{B(!0)},open:F},W.map(((e,t)=>r.createElement(I.Z,{key:t,style:{...e.style,color:"#000"},key:e.name,icon:e.icon,tooltipTitle:e.name,onClick:()=>{ne(),oe(e)}}))))))}}}]);