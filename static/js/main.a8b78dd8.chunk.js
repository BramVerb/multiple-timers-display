(this["webpackJsonpmultiple-timers"]=this["webpackJsonpmultiple-timers"]||[]).push([[0],{88:function(e,t,a){},89:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),c=a.n(r),s=(a(88),a(89),a(73)),l=a(37),o=a(25),u=a(72),j=a(132),m=a(133),d=a(141),b=a(134),x=a(135),f=a(136),h=a(143),O=a(137),p=a(138),g=a(140),v=a(129),T=a(139),C=a(68),y=a.n(C),k=a(71),N=a.n(k),S=a(70),w=a.n(S),M=a(69),I=a.n(M),W=a(125),P=a(144),B=a(127),D=a(130),E=a(131),F=a(6),G=Object(W.a)((function(e){return{sizes:{placeSelf:"center",flexGrow:1,flex:1},resetTimerButton:{flexGrow:1,flex:1,textTransform:"unset"},responsive:{minWidth:"120px",width:"25vw"},bar:{height:e.spacing(1),transition:"width 500ms ease-in-out"},fullWidth:{flexGrow:1},failed:{backgroundColor:"red"}}}));function A(e){var t=i.a.useState(e.startTime),a=Object(o.a)(t,2),r=a[0],c=a[1],s=i.a.useState(!0),l=Object(o.a)(s,2),u=l[0],j=l[1],m=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(e.startTime),b=G();i.a.useEffect((function(){var t=setTimeout((function(){r>0&&c(r-1),u||j(!0)}),u?1e3:e.initialDelay);return function(){return clearTimeout(t)}})),i.a.useEffect((function(){m!==e.startTime&&u&&c(e.startTime)}),[m,e.startTime,e.maxTime,u]);var x=0===r,f=r/e.maxTime,h=255-Math.floor(255*f),O=Math.floor(255*f),p={color:x?"unset":"rgb("+h+", "+O+", 0)"},g={width:100*f+"%",backgroundColor:p.color};return Object(F.jsxs)(B.a,{elevation:10,className:(0===r?b.failed:"")+" "+b.sizes,children:[Object(F.jsx)(d.a,{className:b.responsive}),Object(F.jsx)(v.a,{onClick:function(){c(e.maxTime)},className:b.resetTimerButton,fullWidth:!0,children:Object(F.jsxs)(D.a,{className:b.fullWidth,children:[Object(F.jsx)(E.a,{style:p,color:"textSecondary",gutterBottom:!0,children:e.name}),Object(F.jsxs)(E.a,{variant:"h2",children:[r,"s"]}),Object(F.jsx)(d.a,{className:b.bar,style:g,children:" "})]})})]})}var z=a(52),J=Object(W.a)((function(e){return Object(P.a)({root:{flexGrow:1},timerContainer:{padding:e.spacing(2),margin:e.spacing(0),textAlign:"center"},settingsContainer:{padding:e.spacing(2),margin:e.spacing(0),textAlign:"center"},drawer:{padding:e.spacing(2)}})})),L=Object(u.a)({palette:{type:"dark",primary:{main:z.a[900]}}});var R,H,K=(R=40,H=60,"Air Bat Cap Drum Each Fine Gust Harp Sit Jury Krunch Look Made Near Odd Pit Quench Red Sun Trap".split(" ").map((function(e,t){return{name:e,startTime:Math.floor(Math.random()*(H-R)+R),initialDelay:Math.floor(1e3*Math.random()),maxTime:60,key:t}})));var Q=function(){var e=i.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],r=i.a.useState(60),c=Object(o.a)(r,2),u=c[0],C=c[1],k=i.a.useState(40),S=Object(o.a)(k,2),M=S[0],W=S[1],P=i.a.useState(K),B=Object(o.a)(P,2),D=B[0],E=B[1],G=J(L);return Object(F.jsxs)(j.a,{theme:L,children:[Object(F.jsx)(m.a,{}),Object(F.jsxs)(d.a,{children:[Object(F.jsx)(b.a,{position:"static",children:Object(F.jsx)(x.a,{children:Object(F.jsx)(f.a,{onClick:function(){n(!0)},edge:"start",children:Object(F.jsx)(y.a,{})})})}),Object(F.jsx)(h.a,{variant:"persistent",open:a,children:Object(F.jsxs)(d.a,{className:G.drawer,children:[Object(F.jsx)(f.a,{onClick:function(){n(!1)},edge:"start",children:Object(F.jsx)(I.a,{})}),Object(F.jsx)(O.a,{}),Object(F.jsxs)(p.a,{container:!0,xs:12,spacing:2,children:[Object(F.jsx)(p.a,{item:!0,xs:12,className:G.settingsContainer,children:Object(F.jsx)(g.a,{label:"Max Time (s)",type:"number",variant:"outlined",value:u,onChange:function(e){var t=parseInt(e.target.value,10);Number.isInteger(t)?C(t):C(0)},InputProps:{inputProps:{min:null!==M&&void 0!==M?M:0}},fullWidth:!0})}),Object(F.jsx)(p.a,{item:!0,xs:12,className:G.settingsContainer,children:Object(F.jsx)(g.a,{label:"Min Time (s)",type:"number",variant:"outlined",value:M,InputProps:{inputProps:{max:null!==u&&void 0!==u?u:100}},onChange:function(e){var t=parseInt(e.target.value,10);Number.isInteger(t)?W(t):W(0)},fullWidth:!0})}),Object(F.jsx)(p.a,{item:!0,xs:12,children:Object(F.jsx)(v.a,{onClick:function(){var e=D.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{startTime:Math.floor(Math.random()*(u-M))+M,maxTime:u})}));E(e)},variant:"outlined",fullWidth:!0,children:"Reset Timers"})})]}),D.map((function(e,t){return Object(F.jsxs)(p.a,{item:!0,xs:12,className:G.settingsContainer,children:[Object(F.jsx)(g.a,{label:"Name "+t,type:"text",variant:"outlined",value:e.name,onChange:function(e){return function(e,t){E(D.map((function(a,n){return n===e?Object(l.a)(Object(l.a)({},a),{},{name:t.target.value}):a})))}(t,e)},fullWidth:!0}),Object(F.jsx)(f.a,{onClick:function(){return function(e){var t=Object(s.a)(D);t.splice(e,1),E(t)}(t)},children:Object(F.jsx)(w.a,{fontSize:"large"})})]},e.key)})),Object(F.jsx)(T.a,{color:"primary","aria-label":"add",children:Object(F.jsx)(N.a,{})})]})}),Object(F.jsx)("main",{children:Object(F.jsx)(p.a,{container:!0,spacing:4,xs:12,className:G.timerContainer,children:D.map((function(e){return Object(F.jsx)(p.a,{item:!0,xs:!0,children:Object(F.jsx)(A,{name:e.name,startTime:e.startTime,initialDelay:e.initialDelay,maxTime:u},e.key)},e.key)}))})})]})]})};var q=function(){return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(Q,{})})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,147)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(q,{})}),document.getElementById("root")),U()}},[[97,1,2]]]);
//# sourceMappingURL=main.a8b78dd8.chunk.js.map