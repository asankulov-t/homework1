(this.webpackJsonphw1=this.webpackJsonphw1||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={someClass:"Affairs_someClass__2JIxC",tasks:"Affairs_tasks__3_lo2",buttons:"Affairs_buttons__3ZOXT",active:"Affairs_active__1Jmrq"}},,,,function(e,t,n){e.exports={nav:"Header_nav__1guE2",active:"Header_active__2WCrZ"}},function(e,t,n){e.exports={wrapper:"Message_wrapper__-Di50",message:"Message_message__3QJBX",name:"Message_name__24uRR",time:"Message_time__q6YP6"}},function(e,t,n){e.exports={global:"Affair_global__1qwVn",affair:"Affair_affair__22sie",low:"Affair_low__2UKd1",high:"Affair_high__1Jkbi",middle:"Affair_middle__1gr8d",level:"Affair_level__3qePU"}},function(e,t,n){e.exports={error:"Error_error__2itOJ",codeError:"Error_codeError__3PxDK",notFound:"Error_notFound__xwwmi",simb:"Error_simb__RkP_R"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__37cIc",error:"Greeting_error__1GdWw",red:"Greeting_red__3zPC9"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2-6Bo",errorInput:"SuperInputText_errorInput__1daLp",error:"SuperInputText_error__PWXCz"}},function(e,t,n){e.exports={blue:"HW4_blue__4SD24",column:"HW4_column__3v-Se",testSpanError:"HW4_testSpanError__3eqWY"}},function(e,t,n){e.exports={default:"SuperButton_default__3cLED",red:"SuperButton_red__33JbI",dis:"SuperButton_dis__3A8Mr"}},,function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3C77e",spanClassName:"SuperCheckbox_spanClassName__2wC3l"}},,function(e,t,n){e.exports={App:"App_App__Mcf-c"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(21),s=n.n(c),i=(n(28),n(22)),o=n.n(i),l=n(8),j=n(11),b=n.n(j),u=n(2),d=n(12),h=n.n(d),O=n(0);var x=function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:h.a.wrapper,children:[Object(O.jsx)("img",{src:e.avatar,alt:""}),Object(O.jsxs)("div",{className:h.a.message,children:[Object(O.jsx)("h5",{className:h.a.name,children:e.name}),Object(O.jsxs)("p",{children:[e.message," "]}),Object(O.jsx)("p",{className:h.a.time,children:e.time})]})]})})},m="https://s2.cdn.teleprogramma.pro/wp-content/uploads/2019/05/cb706541804dc13167fa181910dc3387.jpg",p="Some Name",f="some text",v="22:00";var _=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 1",Object(O.jsx)(x,{avatar:m,name:p,message:f,time:v}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},g=n(3),C=n(13),N=n.n(C);var k=function(e){var t=N.a.level+" "+N.a[e.affair.priority];return Object(O.jsxs)("div",{className:N.a.global,children:[Object(O.jsx)("div",{children:e.affair.name}),Object(O.jsxs)("div",{className:N.a.affair,children:[Object(O.jsx)("div",{className:t,children:e.affair.priority}),Object(O.jsx)("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})]})},w=n(7),S=n.n(w);var y=function(e){var t=Object(a.useState)("all"),n=Object(g.a)(t,2),r=n[0],c=n[1],s=e.data.map((function(t){return Object(O.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),i=S.a.buttons+" "+("all"===r?S.a.active:""),o=S.a.buttons+" "+("high"===r?S.a.active:""),l=S.a.buttons+" "+("middle"===r?S.a.active:""),j=S.a.buttons+" "+("low"===r?S.a.active:"");return Object(O.jsxs)("div",{className:S.a.someClass,children:[Object(O.jsx)("div",{className:S.a.tasks,children:s}),Object(O.jsxs)("div",{className:S.a.buttons,children:[Object(O.jsx)("button",{className:i,onClick:function(){e.setFilter("all"),c("all")},children:"All"}),Object(O.jsx)("button",{className:o,onClick:function(){e.setFilter("high"),c("high")},children:"High"}),Object(O.jsx)("button",{className:l,onClick:function(){e.setFilter("middle"),c("middle")},children:"Middle"}),Object(O.jsx)("button",{className:j,onClick:function(){e.setFilter("low"),c("low")},children:"Low"})]})]})},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var E=function(){var e=Object(a.useState)(A),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(g.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):void 0}(n,i);return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 2",Object(O.jsx)(y,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},F=n(23),I=n(15),P=n.n(I),J=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.activeError,i=!0===s?P.a.error:"",o=function(e){n(e)};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:P.a.someClass,children:[Object(O.jsx)("input",{value:t,onChange:o,onBlur:o,className:i}),Object(O.jsx)("button",{onClick:a,children:"add"}),Object(O.jsx)("span",{children:c||0})]}),Object(O.jsx)("div",{children:""===t?Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:P.a.red,children:s?r:""})}):null})]})},B=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(g.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)("\u0412\u044b \u043d\u0435 \u0432\u0432\u0435\u043b\u0438 \u0438\u043c\u044f"),l=Object(g.a)(o,2),j=l[0],b=(l[1],Object(a.useState)(!1)),u=Object(g.a)(b,2),d=u[0],h=u[1];console.log(t);var x=t.length;return Object(O.jsx)("div",{children:Object(O.jsx)(J,{activeError:d,name:s,setNameCallback:function(e){e.target.value?(i(e.target.value),h(!1)):h(!0)},addUser:function(){""!==s&&(alert("Hello ".concat(s," !")),n(s.trim()),i(""),console.log("Help"))},error:j,totalUsers:x})})},T=n(32);var H=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 3",Object(O.jsx)(B,{users:n,addUserCallback:function(e){var t={_id:Object(T.a)(),name:e};r([].concat(Object(F.a)(n),[t]))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},M=n(6),W=n(5),U=n(16),D=n.n(U),z=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],q=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(W.a)(e,z),l="".concat(D.a.error," ").concat(i||""),j=c?"".concat(D.a.errorInput," ").concat(s):D.a.superInput;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){e.currentTarget.value&&(a&&a(e),r&&"Enter"===e.key&&r())},className:j},o)),c&&Object(O.jsx)("span",{className:l,children:c})]})},K=n(17),L=n.n(K),R=n(18),V=n.n(R),G=["red","className"],X=function(e){var t=e.red,n=e.className,a=Object(W.a)(e,G),r="".concat(t?V.a.red:V.a.default," ").concat(n);return Object(O.jsx)("button",Object(M.a)({disabled:a.disabled,className:a.disabled?V.a.dis:r},a))},Y=n(20),Z=n.n(Y),Q=["type","onChange","onChangeChecked","className","spanClassName","children"],$=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(W.a)(e,Q),s="".concat(Z.a.checkbox," ").concat(a||"");return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(O.jsx)("span",{className:Z.a.spanClassName,children:r})]})};var ee=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(g.a)(i,2),l=o[0],j=o[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 4",Object(O.jsxs)("div",{className:L.a.column,children:[Object(O.jsx)(q,{value:n,onChangeText:r,onEnter:s,error:c,spanClassName:L.a.testSpanError}),Object(O.jsx)(q,{className:L.a.blue}),Object(O.jsx)(X,{children:"default"}),Object(O.jsx)(X,{red:!0,onClick:s,children:"delete "}),Object(O.jsx)(X,{disabled:!0,children:"disabled"}),Object(O.jsx)($,{checked:l,onChangeChecked:j,children:"some text "}),Object(O.jsx)($,{checked:l,onChange:function(e){j(e.currentTarget.checked)}})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},te=["autoFocus","onBlur","onEnter","spanProps"],ne=["children","onDoubleClick","className"],ae=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(W.a)(e,te),s=Object(a.useState)(!1),i=Object(g.a)(s,2),o=i[0],l=i[1],j=r||{},b=j.children,u=j.onDoubleClick,d=j.className,h=Object(W.a)(j,ne),x=function(e){l(!0),u&&u(e)},m="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",d);return Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)(q,Object(M.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},c)):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{onClick:x,children:Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil-fill",viewBox:"0 0 16 16",children:Object(O.jsx)("path",{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"})})}),Object(O.jsx)("span",Object(M.a)(Object(M.a)({onDoubleClick:x,className:m},h),{},{children:b||c.value}))]})})};function re(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ce(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}re("test",{x:"A",y:1});ce("test",{x:"",y:0});var se=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],r=t[1],c=function(){re("editable-span-value",n)};return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 6",Object(O.jsx)("div",{children:Object(O.jsx)(ae,{value:n,onChangeText:r,onEnter:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(O.jsx)(X,{onClick:c,children:"save"}),Object(O.jsx)(X,{onClick:function(){r(ce("editable-span-value",""))},children:"restore"}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var ie=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(_,{}),Object(O.jsx)(E,{}),Object(O.jsx)(H,{}),Object(O.jsx)(ee,{}),Object(O.jsx)(se,{})]})},oe=n(14),le=n.n(oe);var je=function(){return Object(O.jsxs)("div",{className:le.a.error,children:[Object(O.jsx)("div",{className:le.a.codeError,children:"404"}),Object(O.jsx)("div",{className:le.a.notFound,children:"Page not found!"}),Object(O.jsx)("div",{className:le.a.simb,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},be=["options","onChange","onChangeOption"],ue=function(e){e.options,e.onChange,e.onChangeOption;var t=Object(W.a)(e,be);return Object(O.jsx)("select",Object(M.a)(Object(M.a)({onChange:function(e){}},t),{},{children:[]}))},de=["type","name","options","value","onChange","onChangeOption"],he=function(e){e.type;var t=e.name,n=e.options,a=(e.value,e.onChange,e.onChangeOption,Object(W.a)(e,de),n?n.map((function(e,n){return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio"}),e]},t+"-"+n)})):[]);return Object(O.jsx)(O.Fragment,{children:a})},Oe=["x","y","z"];var xe=function(){var e=Object(a.useState)(Oe[1]),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 7",Object(O.jsx)("div",{children:Object(O.jsx)(ue,{options:Oe,value:n,onChangeOption:r})}),Object(O.jsx)("div",{children:Object(O.jsx)(he,{name:"radio",options:Oe,value:n,onChangeOption:r})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},me=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(xe,{})})},pe="/pre-junior",fe="/junior",ve="/junior_plus";var _e=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.b,{path:"/pre-junior",element:Object(O.jsx)(ie,{})}),Object(O.jsx)(u.b,{path:fe,element:Object(O.jsx)(me,{})}),Object(O.jsx)(u.b,{path:"/",element:Object(O.jsx)(u.a,{to:pe})}),Object(O.jsx)(u.b,{path:"*",element:Object(O.jsx)(je,{})})]})})};var ge=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("nav",{className:b.a.nav,children:[Object(O.jsx)(l.b,{className:function(e){return e.isActive?b.a.active:""},to:pe,children:"Pre-Junior"}),Object(O.jsx)(l.b,{className:function(e){return e.isActive?b.a.active:""},to:fe,children:"Junior"}),Object(O.jsx)(l.b,{className:function(e){return e.isActive?b.a.active:""},to:ve,children:"Junior+"})]})})};var Ce=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(ge,{}),Object(O.jsx)(_e,{})]})};var Ne=function(){return Object(O.jsxs)("div",{className:o.a.App,children:[Object(O.jsx)("div",{children:"react homeworks:"}),Object(O.jsx)(l.a,{children:Object(O.jsx)(Ce,{})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(Ne,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.8126a2c7.chunk.js.map