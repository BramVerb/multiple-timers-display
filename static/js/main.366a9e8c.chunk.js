(this["webpackJsonpmultiple-timers"]=this["webpackJsonpmultiple-timers"]||[]).push([[0],{88:function(e,t,a){},89:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),c=a.n(r),s=(a(88),a(89),a(58)),l=a(37),o=a(25),u=a(73),m=a(132),j=a(133),d=a(141),b=a(134),f=a(135),x=a(136),h=a(143),O=a(137),p=a(138),g=a(140),v=a(129),T=a(139),S=a(69),y=a.n(S),C=a(72),N=a.n(C),k=a(71),w=a.n(k),I=a(70),M=a.n(I),W=a(125),J=a(144),P=a(127),B=a(130),D=a(131),E=a(6),F=Object(W.a)((function(e){return{sizes:{placeSelf:"center",flexGrow:1,flex:1},resetTimerButton:{flexGrow:1,flex:1,textTransform:"unset"},responsive:{minWidth:"150px",width:"15vw"},bar:{height:e.spacing(1),transition:"width 500ms ease-in-out"},fullWidth:{flexGrow:1},failed:{backgroundColor:"red"}}}));function G(e){var t=i.a.useState(e.startTime),a=Object(o.a)(t,2),r=a[0],c=a[1],s=i.a.useState(!0),l=Object(o.a)(s,2),u=l[0],m=l[1],j=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(e.startTime),b=F();i.a.useEffect((function(){var t=setTimeout((function(){r>0&&c(r-1),u||m(!0)}),u?1e3:e.initialDelay);return function(){return clearTimeout(t)}})),i.a.useEffect((function(){j!==e.startTime&&u&&c(e.startTime)}),[j,e.startTime,e.maxTime,u]);var f=0===r,x=r/e.maxTime,h=255-Math.floor(255*x),O=Math.floor(255*x),p={color:f?"unset":"rgb("+h+", "+O+", 0)"},g={width:100*x+"%",backgroundColor:p.color};return Object(E.jsxs)(P.a,{elevation:10,className:(0===r?b.failed:"")+" "+b.sizes,children:[Object(E.jsx)(d.a,{className:b.responsive}),Object(E.jsx)(v.a,{onClick:function(){c(e.maxTime)},className:b.resetTimerButton,fullWidth:!0,children:Object(E.jsxs)(B.a,{className:b.fullWidth,children:[Object(E.jsx)(D.a,{variant:"h4",style:p,color:"textSecondary",gutterBottom:!0,children:e.name}),Object(E.jsxs)(D.a,{variant:"h2",children:[r,"s"]}),Object(E.jsx)(d.a,{className:b.bar,style:g,children:" "})]})})]})}var z=a(52),A=Object(W.a)((function(e){return Object(J.a)({root:{flexGrow:1},timerContainer:{padding:e.spacing(2),margin:e.spacing(0),textAlign:"center",maxWidth:"100%"},settingsContainer:{padding:e.spacing(2),margin:e.spacing(0),textAlign:"center",display:"flex"},drawer:{padding:e.spacing(2)},nameItem:{display:"flex"}})})),L=Object(u.a)({palette:{type:"dark",primary:{main:z.a[900]}}});function R(e,t,a,n){return{name:e,startTime:Math.floor(Math.random()*(a-t)+t),initialDelay:Math.floor(1e3*Math.random()),maxTime:60,key:n}}var H,K,Q=(H=40,K=60,"Air Bat Cap Drum Each Fine Gust Harp Sit Jury Krunch Look Made Near Odd Pit Quench Red Sun Trap".split(" ").map((function(e,t){return R(e,H,K,t)})));var q=function(){var e=i.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],r=i.a.useState(60),c=Object(o.a)(r,2),u=c[0],S=c[1],C=i.a.useState(40),k=Object(o.a)(C,2),I=k[0],W=k[1],J=i.a.useState(Q),P=Object(o.a)(J,2),B=P[0],D=P[1],F=A(L);return Object(E.jsxs)(m.a,{theme:L,children:[Object(E.jsx)(j.a,{}),Object(E.jsxs)(d.a,{children:[Object(E.jsx)(b.a,{position:"static",children:Object(E.jsx)(f.a,{children:Object(E.jsx)(x.a,{onClick:function(){n(!0)},edge:"start",children:Object(E.jsx)(y.a,{})})})}),Object(E.jsx)(h.a,{variant:"persistent",open:a,children:Object(E.jsxs)(d.a,{className:F.drawer,children:[Object(E.jsx)(x.a,{onClick:function(){n(!1)},edge:"start",children:Object(E.jsx)(M.a,{})}),Object(E.jsx)(O.a,{}),Object(E.jsxs)(p.a,{container:!0,spacing:2,children:[Object(E.jsx)(p.a,{item:!0,xs:12,className:F.settingsContainer,children:Object(E.jsx)(g.a,{label:"Max Time (s)",type:"number",variant:"outlined",value:u,onChange:function(e){var t=parseInt(e.target.value,10);Number.isInteger(t)?S(t):S(0)},InputProps:{inputProps:{min:null!==I&&void 0!==I?I:0}},fullWidth:!0})}),Object(E.jsx)(p.a,{item:!0,xs:12,className:F.settingsContainer,children:Object(E.jsx)(g.a,{label:"Min Time (s)",type:"number",variant:"outlined",value:I,InputProps:{inputProps:{max:null!==u&&void 0!==u?u:100}},onChange:function(e){var t=parseInt(e.target.value,10);Number.isInteger(t)?W(t):W(0)},fullWidth:!0})}),Object(E.jsx)(p.a,{item:!0,xs:12,children:Object(E.jsx)(v.a,{onClick:function(){var e=B.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{startTime:Math.floor(Math.random()*(u-I))+I,maxTime:u})}));D(e)},variant:"outlined",fullWidth:!0,children:"Reset Timers"})}),Object(E.jsx)(p.a,{item:!0,xs:12,children:Object(E.jsx)(v.a,{onClick:function(){var e=localStorage.getItem("timers");if(e){var t=JSON.parse(e);D(t)}else window.alert("No timers saved in the session");var a=localStorage.getItem("maxTime");a&&S(JSON.parse(a));var n=localStorage.getItem("minStartTime");n&&W(JSON.parse(n))},variant:"outlined",fullWidth:!0,children:"Load"})}),Object(E.jsx)(p.a,{item:!0,xs:12,children:Object(E.jsx)(v.a,{onClick:function(){var e=B;localStorage.setItem("timers",JSON.stringify(e)),localStorage.setItem("minStartTime",JSON.stringify(I)),localStorage.setItem("maxTime",JSON.stringify(u))},variant:"outlined",fullWidth:!0,children:"Save"})})]}),B.map((function(e,t){return Object(E.jsxs)(p.a,{item:!0,xs:12,className:F.settingsContainer,children:[Object(E.jsx)(g.a,{label:"Name "+t,type:"text",variant:"outlined",value:e.name,onChange:function(e){return function(e,t){D(B.map((function(a,n){return n===e?Object(l.a)(Object(l.a)({},a),{},{name:t.target.value}):a})))}(t,e)},fullWidth:!0}),Object(E.jsx)(x.a,{onClick:function(){return function(e){var t=Object(s.a)(B);t.splice(e,1),D(t)}(t)},children:Object(E.jsx)(w.a,{fontSize:"large"})})]},e.key)})),Object(E.jsx)(T.a,{onClick:function(){return function(e){var t=Object(s.a)(B);t.push(R(e,I,u,t.map((function(e){return e.key})).sort()[0])),D(t)}("new")},color:"primary","aria-label":"add",children:Object(E.jsx)(N.a,{fontSize:"large"})})]})}),Object(E.jsx)("main",{children:Object(E.jsx)(p.a,{container:!0,spacing:4,className:F.timerContainer,children:B.map((function(e){return Object(E.jsx)(p.a,{item:!0,xs:!0,children:Object(E.jsx)(G,{name:e.name,startTime:e.startTime,initialDelay:e.initialDelay,maxTime:u},e.key)},e.key)}))})})]})]})};var U=function(){return Object(E.jsx)("div",{className:"App",children:Object(E.jsx)(q,{})})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,147)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(U,{})}),document.getElementById("root")),V()}},[[97,1,2]]]);
//# sourceMappingURL=main.366a9e8c.chunk.js.map