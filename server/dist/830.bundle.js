"use strict";(self.webpackChunkwebconnect=self.webpackChunkwebconnect||[]).push([[830],{2792:(e,t,n)=>{var a=n(4836),r=n(5263);t.Z=void 0;var i=r(n(7294)),l=(0,a(n(2108)).default)(i.createElement("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),"Group");t.Z=l},5432:(e,t,n)=>{var a=n(4836),r=n(5263);t.Z=void 0;var i=r(n(7294)),l=(0,a(n(2108)).default)(i.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");t.Z=l},7134:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(1120),i=n(2387);const l=(0,r.Z)({chatActions:{borderRadius:"5px",zIndex:25e4,display:"flex",flexDirection:"column",background:"#fff !important","& > div":{display:"flex"},"& div:first-child":{},"& > div:last-of-type":{flexDirection:"column","& > button":{padding:"12px 0 12px 15px",borderRadius:0,"& .MuiIconButton-label":{justifyContent:"flex-start"},"& > span > span.MuiTypography-root":{padding:"0 25px 0 15px",color:"#000"}}}}});function o({children:e,open:t,anchorReference:n,anchorPosition:r,transformOrigin:o,anchorEl:c,onClose:s,anchorOrigin:d}){const p=l();return void 0===r?a.createElement(i.ZP,{open:t,anchorEl:c,onClose:s,elevation:2,anchorOrigin:d||{vertical:"center",horizontal:"center"},transformOrigin:o||{vertical:"center",horizontal:"center"}},a.createElement("div",{className:p.chatActions},e)):a.createElement(i.ZP,{open:t,elevation:2,anchorReference:"anchorPosition",anchorPosition:r,onClose:s,anchorOrigin:d||{vertical:"center",horizontal:"center"},transformOrigin:o||{vertical:"center",horizontal:"center"}},a.createElement("div",{className:p.chatActions},e))}o.propTypes={};const c=o},3247:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(1120),i=n(3084);const l=(0,r.Z)({root:{display:"flex",alignItems:"center",fontSize:".91rem",height:"20px","& > div":{marginLeft:"8px"}}}),o=function({children:e}){const t=l();return a.createElement("span",{className:t.root},e,a.createElement(i.Preloader,{use:i.ThreeDots,size:32,strokeWidth:12,strokeColor:"#6495ed",duration:800}))}},1061:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7294),r=n(1120),i=n(8463),l=n(515),o=n(7812),c=n(9826),s=n(2005),d=n(6367),p=n(9585),m=n(5953),u=n(5076),h=n(9704);const f=(0,r.Z)({card:{boxShadow:"none",display:"flex",flexDirection:"column",height:"100%",width:"100%",background:"transparent",flexDirection:"column","& .MuiCardHeader-root":{background:l.Z.white,boxShadow:"-1px 1px 1px 0px #cbcbcb",marginLeft:5,height:"3.7rem",padding:"0 16px",position:"relative",zIndex:10,"& .MuiCardHeader-title":{fontWeight:"bold","& .MuiCardHeader-avatar":{marginRight:6}},"& .MuiCardHeader-content":{overflow:"hidden","& > span":{overflow:"hidden",whiteSpace:"nowrap",paddingInlineEnd:10,textOverflow:"ellipsis"}},"@media (max-width: 660px)":{marginLeft:0,padding:"0 16px 0 39px"}},"& .MuiCardHeader-action":{alignSelf:"center",marginTop:0},"& .MuiCardContent-root":{flex:1,overflowY:"scroll",overflowX:"hidden",position:"relative"},"& .MuiCardActions-root, .MuiCardContent-root":{padding:"0 10%","@media (max-width: 900px)":{padding:"0 2%"}},"& .MuiCardActions-spacing > :not(:first-child)":{margin:0},"& .MuiCardActions-root":{position:"relative",marginBottom:"1rem",paddingTop:".25rem",flexDirection:"column",alignItems:"stretch","& .MuiInputBase-root":{flex:1,background:l.Z.white,margin:0,padding:"11px 10px",boxShadow:"0 0 9px 0px #0000000d","& textarea":{height:"19px"}},"@media (max-width: 660px)":{marginBottom:".2rem"}},"& .MuiInputBase-inputMultiline":{overflowY:"scroll !important"}},starred:{position:"sticky",width:"98%",top:0,margin:"0 auto",zIndex:25,transition:".7s ease all","& .MuiCardHeader-title":{color:"#edb664"}},backBtn:{position:"absolute",top:"11px",padding:5,display:"none",zIndex:30,"@media (max-width: 660px)":{display:"block"}}}),g=({children:e})=>{const t=f(),n=(0,h.I0)(),r=(0,h.v9)((e=>e.groups.selectedGroup)),l=(0,d.x)();return a.createElement(i.Z,{className:t.card,style:{height:`${l}px`}},a.createElement(o.Z,{className:t.backBtn,onClick:()=>(n((0,m.r0)({})),(0,s.hu)(r)&&n((0,u.lr)({})),void(window.innerWidth<660&&n((0,p.T6)({parent:"leftPane",component:!0}))))},a.createElement(c.Z,{style:{color:"#959494"}})),e)}},1830:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var a=n(7294),r=n(9704),i=n(4697),l=n(9912),o=n(1907),c=n(7812),s=n(2318),d=n(6912),p=n(5477),m=n(282),u=n(1120),h=n(3901),f=n(2792),g=n(5432),x=n(7168),y=n(3173),E=n(8442),v=n(9585),b=n(5076),Z=n(6614),w=n(5953),C=n(7134),k=n(1061),S=n(9540),I=(n(9234),n(3247)),N=(n(6426),n(515)),z=n(173),j=n(2005);function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T.apply(this,arguments)}n(6367),n(3084),n(2788).ZP.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 50px;
	flex-direction: column;

	em {
		color: #555674;
		margin-top: 10px;
	}
`,n(3961),n(5403),n(6257),n(9700),n(8489),(0,u.Z)({main:{background:"linear-gradient(266deg, #e9e9e9, #d3920026)",display:"flex",height:"100%"}});const M=(0,u.Z)({indexedChats:{display:"flex",flexDirection:"column"},dateNotice:{textAlign:"center",margin:"10px 0",position:"sticky",zIndex:20,top:"10px"},chatNotifier:{"& > span:first-child":{fontSize:".83rem",padding:"3px 7px",background:N.Z.white,boxShadow:"0 0 2px 0px #00000021",borderRadius:"5px",lineHeight:1.3}},alert:{opacity:".9",display:"flex",justifyContent:"center",marginBottom:"10px","& > span":{display:"flex",whiteSpace:"pre-line","& > span":{padding:"0 0 0 11px",fontSize:".7rem",alignSelf:"flex-end",opacity:.9}}},chatWrapper:{display:"flex",position:"relative",alignItems:"flex-end",width:"100%",padding:"2px 0",transition:".6s ease all"},flexStart:{justifyContent:"flex-start",alignSelf:"flex-start",paddingLeft:".5rem"},flexEnd:{alignSelf:"flex-end",justifyContent:"flex-end"},fromAccount:{marginLeft:"1rem",background:"#727f93","& > span:last-of-type":{color:N.Z.white}},fromFriend:{marginRight:"1rem",background:N.Z.white},chatSingle:{maxWidth:"80%",whiteSpace:"pre-line",width:"auto",font:"message-box",borderRadius:"5px",boxShadow:"1px 1px 1px 0px #00000012",position:"relative","& > span":{padding:"4px 4px 5px 7px"}},isLast:{marginBottom:8},overflow:{maxHeight:"200px",overflowX:"hidden",whiteSpace:"pre-line",display:"block"},sender:{display:"block",color:"#ff845d",padding:"2px 0",fontSize:".8rem",fontWeight:"bold"},myReply:{padding:"3px 10px 7px 1px","& > span:first-child":{color:"#ef592a",fontWeight:"bold",display:"block",margin:"0px 0 2px 0"},"& > span:last-of-type":{}},reply:{background:N.Z.white,fontSize:".85rem",paddingLeft:"6px",borderBottom:"1px solid #efefef",borderLeft:"2px solid #ffb55c",borderRadius:"inherit",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},replyBlock:{padding:"0 10px 7px 2px","& > span:first-child":{color:z.Z[700],fontWeight:"bold",fontSize:".8rem",display:"block",margin:"1px 0"}},chatTime:{fontSize:".65rem",marginLeft:7,opacity:.9,position:"sticky",top:"100px",float:"right",bottom:"0"},deleted:{fontStyle:"italic",padding:"3px 7px",background:"#fffadd",borderRadius:"5px","& > span":{color:"#d96c6c !important"}}}),R=["#6495ed","#cb64ed","#64ed94","#7364ed","#64a1ed","#edb664","#eda364","#64c7ed","#ed7d64","#ed6471"],O=({chat:e,isFirst:t,isLast:n})=>{const i=M(),l=(0,r.I0)(),o=(0,r.v9)((e=>e.account.account.username));let c=e.sender===o,s=c?i.fromAccount:i.fromFriend,d=c?i.flexEnd:i.flexStart,p={background:e.highlightChat?"rgb(0 137 255 / 14%)":"inherit"},m=()=>c?"rightBubble":"leftBubble";const[u,h]=a.useState(!1),[f,g]=a.useState(null),x=a.createRef(null),[y,E]=a.useState(null),{_id:v}=(0,r.v9)((e=>e.groups.selectedGroup)),Z=""===e.message;a.useEffect((()=>{x.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}),[e.highlightChat]);const w=t=>{l((0,b.OC)({chat:e,pos:JSON.stringify(t.getBoundingClientRect())}))},C=e=>{if(Z)return!1;w(e)},k=e=>{if(Z)return!1;e.preventDefault(),w(e.target)};return a.createElement("div",{className:[i.chatWrapper,d,t&&i.isFirst,n&&i.isLast].join(" "),style:p,ref:x},Z?a.createElement("div",{className:[s,i.deleted].join(" ")},a.createElement("span",{className:i.deleted}," Deleted ")):e.reply.open?a.createElement(a.Fragment,null,a.createElement("div",{className:[s,i.chatSingle,t&&m(),"reply"].join(" ")},a.createElement("div",{className:i.reply,onClick:()=>{""!==e.reply.message&&(()=>{l((0,b.Wh)({chatId:e.reply.chatId,_id:v,show:!0})),clearTimeout(f);let t=setTimeout((()=>{l((0,b.Wh)({chatId:e.reply.chatId,_id:v,show:!1}))}),1500);g(t)})()}},!c&&a.createElement("span",{className:i.sender,style:{color:R[e.sender.split(" ").join("").length-1]||"#ed6471"}}," ",e.sender," "),a.createElement("div",{className:c?i.myReply:i.replyBlock},a.createElement("span",{style:{color:R[e.reply.sender.split(" ").join("").length-1]||"#ed6471"}},e.reply.sender===o?"You":e.reply.sender," "),""!==e.reply.message?a.createElement("span",{className:i.overflow}," ",e.reply.message," "):a.createElement("div",{className:[s,i.deleted].join(" ")},a.createElement("span",{className:i.deleted}," Deleted ")))),a.createElement("span",{className:[i.chat,i.overflow].join(" "),onClick:({target:t})=>{(0,j.hu)(e.chatId)&&C(t)},onContextMenu:k},e.message,a.createElement("span",{className:i.chatTime}," ",e.timestamp.time," ")))):a.createElement(a.Fragment,null,a.createElement("div",{className:[s,i.chatSingle,t&&m()].join(" ")},a.createElement("span",{className:[i.chat,i.overflow].join(" "),onClick:({target:t})=>{(0,j.hu)(e.chatId)&&C(t)},onContextMenu:k},!c&&a.createElement("span",{className:i.sender,style:{color:R[e.sender.split(" ").join("").length-1]||"#ed6471"}}," ",e.sender," "),e.message,a.createElement("span",{className:i.chatTime}," ",e.timestamp.time," ")))))};function D(e={sender:""}){return e.sender}const B=({chat:e})=>{const t=M(),n=(new Date).toDateString().slice(0,-5),i=e.chats.length,l=(0,r.v9)((e=>e.account.account.username));let o;return a.createElement("div",null,a.createElement("header",{className:[t.dateNotice,t.chatNotifier].join(" ")},a.createElement("span",null," ",e.day===n?"Today":e.day," ")),a.createElement("div",{className:t.indexedChats},e.chats.length>0&&e.chats.map(((n,r)=>{let c=D(e.chats.at(r+1)),s=D(e.chats.at(r-1)),d=n.sender||"";return"alert"===n.type?a.createElement("div",{key:r,className:[t.alert,t.chatNotifier].join(" ")},a.createElement("span",null,n.message.split(" ").map((e=>e.replaceAll(l,"You"))).join(" "),a.createElement("span",null," ",n.timestamp.time," "))):(o={isFirst:!1,isLast:!1},0===r&&(o.isFirst=!0),r===i-1&&(o.isLast=!0),s!==d&&(o.isFirst=!0),c!==d&&(o.isLast=!0),a.createElement(O,T({key:n.chatId,chat:n},o)))}))))},L=({chats:e})=>{const t=M();let n=[],r=[];return e.forEach((e=>{-1===n.findIndex((t=>t===e.timestamp.day))&&n.push(e.timestamp.day)})),n.forEach((t=>{const n=e.filter((e=>e.timestamp.day===t));r.push({day:t,chats:n})})),a.createElement(a.Fragment,null,a.createElement("div",{className:t.chats},r.length>0&&r.map(((e,t)=>a.createElement(B,{key:t,chat:e})))))};var _=n(2482),A=n(3268);function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},H.apply(this,arguments)}const P=(0,u.Z)({bottomSnackbar:{transform:"none",bottom:"15%","& .MuiSnackbarContent-message":{"& .MuiTypography-body1":{marginLeft:10},display:"flex",alignItems:"center"}},noMember:{background:"#ffffffa1",textAlign:"center",borderRadius:"10px",padding:"10px",color:"#340000"}});function W(e){P();const[t,n]=a.useState(10);return a.useEffect((()=>{const e=setInterval((()=>{n((e=>e+10))}),200);return()=>{clearInterval(e)}}),[]),a.createElement(a.Fragment,null,a.createElement(p.Z,{variant:"determinate",value:t}),a.createElement(s.Z,{component:"span"}," ",e.action," "))}const F=function({_id:e,name:t,description:n,participants:p,createdBy:u,messages:N,admins:z,isCurrentSelected:T,isAParticipant:M,actionValues:R,settings:O}){const D=(0,r.I0)(),B=P(),{pendingDelete:F,reply:V,typing:Y,inputValue:G}=R,{allowChatForAdminsOnly:K}=O,{id:J,username:X,online:$}=(0,r.v9)((e=>e.account.account)),U=(0,r.v9)((e=>e.groups.selectedChat)),[q,Q]=a.useState(null),[ee,te]=a.useState(!1),[ne,ae]=a.useState(!1),[re,ie]=a.useState(null),[le,oe]=a.useState(null),[ce,se]=a.useState(!1),[de,pe]=a.useState({});let me=Y.filter((e=>e.typing)).map((e=>e.username));a.useEffect((()=>{if((0,j.hu)(F)&&$){clearTimeout(q);let t=setTimeout((()=>{(0,A.Z)("deleteGroupChat",{_id:e,chatId:F.chatId})}),1700);Q(t)}}),[F]),a.useEffect((()=>{const t=N.at(N.length-1);t&&D((0,Z.p5)({_id:e,lastChat:t}))}),[N]);const ue=t=>{(0,A.Z)("groupTyping",{typing:t,username:X,_id:e}),se(t)};a.useEffect((()=>{(0,j.hu)(U)&&pe(JSON.parse(U.pos))}),[U]);const he=e=>{D((0,b.OC)({}))};return a.createElement(k.Z,null,a.createElement(i.Z,{avatar:a.createElement(h.Z,null,a.createElement(f.Z,null)),action:a.createElement(c.Z,{onClick:()=>{D((0,v.T6)({component:"gRoot",parent:"gInfos"}))}},a.createElement(g.Z,null)),title:a.createElement("span",null," ",t," "),subheader:me.length>0?a.createElement(I.Z,null,me.join(", ")):a.createElement(a.Fragment,null,p.filter((e=>e)).sort(((e,t)=>e.username===X?-1:1)).map((e=>e.username)).join(", ").replaceAll(X,"You"))}),a.createElement(l.Z,null,N.length>0&&a.createElement(L,{chats:N}),(0,j.hu)(de)&&(0,j.hu)(U)&&a.createElement(C.Z,{open:(0,j.hu)(U),onClose:he,anchorPosition:{top:de.top,left:de.left},anchorOrigin:{vertical:"bottom",horizontal:U.chat.sender===X?"left":"right"},transformOrigin:{vertical:"top",horizontal:U.chat.sender===X?"right":"left"}},a.createElement("div",null),a.createElement("div",null,p.some((e=>e.username===X))&&a.createElement(c.Z,{onClick:()=>{T&&D((0,b.VS)({_id:e,open:!0,chatId:U.chat.chatId,sender:U.chat.sender})),he()}},a.createElement(x.Z,null),a.createElement(s.Z,{component:"span"}," Reply ")),a.createElement(c.Z,{onClick:()=>{navigator.clipboard.writeText(U.chat.message),he()}},a.createElement(y.Z,{style:{color:"#958783"}}),a.createElement(s.Z,{component:"span"}," Copy ")),U.chat.sender===X&&a.createElement(c.Z,{onClick:()=>{(()=>{if(!$)return(0,w.Pc)({open:!0}),!1;D((0,b.W$)({pendingDelete:U.chat,_id:e})),D((0,b.VS)({open:!1,_id:e}))})(),he()}},a.createElement(E.Z,{style:{color:"#ed143d"}}),a.createElement(s.Z,{component:"span"}," Delete ")))),a.createElement(d.Z,{className:[B.bottomSnackbar,B.snackbar].join(" "),anchorOrigin:{vertical:"bottom",horizontal:"center"},message:a.createElement(W,{action:"Deleting..."}),open:(0,j.hu)(F),action:a.createElement(m.Z,{onClick:()=>(D((0,b.N6)(e)),void clearTimeout(q)),style:{color:"#ffc4cf"}}," UNDO ")})),a.createElement(o.Z,null,a.createElement(_.Z,H({},V,{closeReplyHandle:()=>{D((0,b.VS)({open:!1,_id:e}))},handleChatHighlight:()=>{D((0,b.Wh)({chatId:V.chatId,_id:e,show:!0})),clearTimeout(re);let t=setTimeout((()=>{D((0,b.Wh)({chatId:V.chatId,_id:e,show:!1}))}),1500);ie(t)}})),p.some((e=>e.username===X))?a.createElement(S.Z,{inputValue:G,handleTextInput:t=>{D((0,b.yh)({value:t,_id:e})),clearTimeout(le);const n=setTimeout((()=>{ue(!1)}),1800);ce||ue(!0),oe(n)},sendMessage:()=>{const t=G.trim();if(""===t.replaceAll(" ",""))return!1;if(!$)return D((0,w.Pc)({open:!0})),!1;const n=(new Date).getTime(),a={_id:e,chat:{message:t,chatId:n,sender:X,timestamp:(0,j.hi)(),reply:V}};D((0,b.i6)(a)),(0,A.Z)("chatFromGroup",a),Y&&ue(!1),V.open&&D((0,b.VS)({_id:e,open:!1})),D((0,b.yh)({_id:e,value:""}))}}):a.createElement("div",{className:B.noMember},a.createElement("span",null," You can't interact with this group ",a.createElement("br",null),"as you are no longer a participant "))))}},9540:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(4741),i=n(7812),l=n(7397),o=n(3910);const c=function({inputValue:e,sendMessage:t=(()=>{}),handleTextInput:n=(()=>{})}){return a.createElement(r.Z,{multiline:!0,placeholder:"Type your messages",onChange:({target:e})=>n(e.value),maxRows:4,value:e,onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||e.ctrlKey||(e.preventDefault(),t())},minRows:0,endAdornment:a.createElement(l.Z,{position:"end",style:{height:"100%"}},a.createElement(i.Z,{onClick:t},a.createElement(o.Z,{color:"primary"})))})}},2482:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(1120),i=n(2285),l=n(366),o=n(9704);const c=(0,r.Z)({replyHandel:{display:"flex",borderBottom:"1px solid #f1f1f1",justifyContent:"space-between",maxHeight:"100px",background:"#fdfdfd",width:"100%",zIndex:40,borderRadius:"10px 10px 0 0"},replyProps:{display:"flex",flexDirection:"column",padding:10,width:"inherit",borderLeft:"2px solid #d1803e",borderRadius:"inherit","& span:first-child":{marginBottom:2},"& span:last-of-type":{maxHeight:"200px",overflowY:"scroll"}}}),s=function({open:e,sender:t,message:n,closeReplyHandle:r,handleChatHighlight:s}){const{username:d,id:p}=(0,o.v9)((e=>e.account.account)),m=c();return a.createElement(i.Z,{in:e,direction:"up"},a.createElement("div",{className:m.replyHandel},e&&a.createElement(a.Fragment,null,a.createElement("div",{className:m.replyProps,onClick:s},a.createElement("span",{style:{color:"#ad39ad",fontWeight:"bold"}},t===d?"You":t),a.createElement("span",null," ",n," ")),a.createElement("div",null,a.createElement(l.Z,{onClick:r,style:{fontSize:"1.2rem",color:"#c55044",margin:7}})))))}},3268:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(8489);function r(e,...t){var n,r;n=e,r=t,a.W.emit(n,...r)}}}]);