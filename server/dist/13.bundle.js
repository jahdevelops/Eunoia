"use strict";(self.webpackChunkwebconnect=self.webpackChunkwebconnect||[]).push([[13],{7561:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(7294),n=a(1120),l=a(8365),o=a(2822),c=a(998),i=a(5757),s=a(6869);const m=(0,n.Z)({preloader:{display:"flex"},avatar:{}}),p=()=>{const e=m();return r.createElement("div",{className:e.loaderUser},[1,1].map(((t,a)=>r.createElement(o.Z,{key:a},r.createElement(c.Z,null,r.createElement(s.Z,null,r.createElement(l.Z,{className:e.avatar,variant:"circle",width:50,height:50})),r.createElement(i.Z,null,r.createElement(l.Z,{variant:"text"})))))))}},2835:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(1120),l=a(5258),o=a(8358),c=a(515);const i=(0,n.Z)((e=>({root:{flexGrow:1,height:"3.7rem",padding:"10px 0",height:"4.5rem",background:c.Z.white,top:0,boxShadow:"-3px 1px 3px 0px #e5e5e5","& .MuiToolbar-root":{padding:0,height:"100%"}},menuButton:{marginRight:e.spacing(2)}}))),s=({children:e,styles:t})=>{const a=i();return r.createElement(l.Z,{position:"sticky",className:a.root,style:t},r.createElement(o.Z,{variant:"dense"},e))}},1867:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(7294),n=a(1120),l=a(4741);const o=(0,n.Z)({searchbar:{width:"80%",borderBottom:"1px solid #e3e3e3",padding:"5px 15px",margin:"0 9px","& .MuiInputBase-input":{fontSize:".9rem",color:"#0d2c66"},"& .MuiInputAdornment-positionStart":{"& p":{color:"#63718d"}}}}),c=({input:e,onChange:t,placeholder:a="Search",classNames:n=[]})=>{const c=o();return r.createElement(l.Z,{className:[c.searchbar,...n].join(" "),placeholder:a,type:"text",value:e,onChange:({target:e})=>{t(e.value)}})}},8013:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var r=a(7294),n=a(9704),l=a(6869),o=a(5757),c=a(998),i=a(7812),s=a(4741),m=a(2318),p=a(1267),d=a(6447),u=a(4170),h=a(6856),g=a(9525),E=a(6083),Z=a(2157),v=a(282),x=a(4379),b=a(1395),f=a(637),y=a(1120),w=a(9585),C=a(5076),k=a(6614),N=a(5953),S=a(6426),I=a(2835),T=a(7561),M=(a(1867),a(2005)),U=a(3268),P=a(9008);const D=(0,y.Z)({groupUsers:{},header:{},searchbar:{width:"94%",paddingLeft:"20px",margin:"15px 0 10px 12px",borderRadius:"30px",boxShadow:"0 0 5px 2px #e9e9e9",height:"40px"},chips:{padding:"10px","& .MuiChip-root":{marginRight:5,marginBottom:5},"& .MuiChip-iconColorPrimary":{color:"#fafafa"},"& .MuiAvatar-root":{height:"28px",width:"28px",fontSize:"1rem"},"& .MuiChip-label":{}},listItem:{position:"relative"},checked:{position:"absolute",right:"10px","& .MuiSvgIcon-root":{fontSize:"1rem",color:"#8e9bb1"}},fab:{"&:hover":{backgroundColor:"cornflowerblue"},height:"auto",width:"auto",padding:"3% !important",background:"cornflowerblue",color:"#fff",boxShadow:"0 0 5px 1px #0000001c",position:"sticky",bottom:"1rem",left:"85%"},participants:{margin:"20px 0","& > div":{paddingLeft:5,marginTop:8,display:"flex","& > div":{marginRight:3}}},dialog:{"& .MuiDialog-paperScrollPaper":{minWidth:"285px"}}}),L=({user:e,isSelected:t})=>{const a=D(),i=(0,n.I0)();return r.createElement(c.Z,{button:!0,className:a.listItem,onClick:()=>{i((0,C.P)(e))},disabled:t},r.createElement(l.Z,null,r.createElement(S.Z,{username:e.username})),r.createElement(o.Z,{primary:r.createElement(m.Z,{component:"h6",style:{fontFamily:"Roboto"}}," ",e.username)}),t&&r.createElement("div",{className:a.checked},r.createElement(b.Z,null)))},z=({className:e})=>{const{id:t,username:a,online:l}=(0,n.v9)((e=>e.account.account)),o=D(),c=(0,n.I0)(),{useEffect:b,useState:y}=r,z=(0,n.v9)((e=>e.activeUsers.showActiveUsersLoader)),B=(0,n.v9)((e=>e.groups.selectedUsers)),R=(0,n.v9)((e=>e.activeUsers.activeUsers)),[A,G]=y(R),[j,K]=y(!1),[$,q]=y(""),[F,O]=y(!1),[W,H]=y({error:!1,helperText:""}),J=()=>{c((0,w.T6)({component:"recentChats",parent:"stack"}))},Q=()=>{K(!j)},V=()=>{if(!l)return c((0,N.Pc)({open:!0})),c((0,w.T6)({component:"recentChats",value:!0})),!1;if(null!==$.match(/[0-9a-z]/i)){const e=new Date,t=e.getTime(),r=(0,M.hi)(e),n={name:$,createdBy:{username:a},createdAt:new Date,participants:B.concat({username:a}),admins:[{username:a}],messages:[{type:"alert",chatId:t,message:`${a} created this group`,timestamp:r},{type:"alert",chatId:t,message:`${a} added ${B.map((e=>e.username)).join(", ")} to the group`,timestamp:r}]};(0,U.Z)("newGroup",n,(()=>{(0,P.fq)((e=>c((0,k.rO)(e)))),J()}))}else H({error:!0,helperText:"Please enter a group name"})};return r.createElement("section",{className:[o.groupUsers,e].join(" ")},r.createElement(I.Z,null,r.createElement(i.Z,{onClick:J},r.createElement(x.Z,null)),r.createElement(m.Z,{component:"h6"}," Create New Group ")),r.createElement(s.Z,{className:o.searchbar,placeholder:"Search a user",type:"text",onChange:({target:e})=>{var t;t=e.value,G(R.filter((e=>e.username.toLowerCase().includes(t.toLowerCase()))))}}),r.createElement("div",{className:o.chips},B.map(((e,t)=>r.createElement(p.Z,{key:e.pId,icon:r.createElement(S.Z,{username:e.username,badge:!1}),label:e.username,color:"primary",onDelete:()=>(e=>{c((0,C.qL)(e))})(e),variant:"outlined"})))),r.createElement("div",{className:o.userslist},z?r.createElement(T.Z,null):A.map((e=>r.createElement(L,{user:e,key:e.pId,isSelected:-1!==B.findIndex((t=>t.username===e.username))})))),r.createElement(i.Z,{variant:"extended",size:"small",color:"primary","aria-label":"add",className:o.fab,onClick:Q,disabled:!(B.length>0)},r.createElement(f.Z,{className:o.extendedIcon})),r.createElement(u.Z,{open:j,className:o.dialog,onClose:Q,"aria-labelledby":"form-dialog-title"},r.createElement(E.Z,{id:"form-dialog-title"},"Create New Group"),r.createElement(g.Z,null,r.createElement(Z.Z,{placeholder:"Enter group name here",style:{width:"100%"},value:$,onChange:({target:e})=>{return t=e.value,H({error:!1,helperText:""}),void q(t);var t},onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||e.ctrlKey||(e.preventDefault(),V())},error:W.error,helperText:W.helperText}),r.createElement("div",{className:o.participants},r.createElement(m.Z,null," Participants "),r.createElement("div",null,B.map(((e,t)=>r.createElement(d.ZP,{title:e.username,"aria-label":"username",key:t},r.createElement("div",{className:o.groupUser},r.createElement(S.Z,{username:e.username,badge:!1})))))))),r.createElement(h.Z,null,r.createElement(v.Z,{color:"primary",onClick:Q}," Cancel "),r.createElement(v.Z,{style:{color:"red"},onClick:V}," Create "))))}}}]);