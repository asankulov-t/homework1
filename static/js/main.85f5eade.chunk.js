(this.webpackJsonphw1=this.webpackJsonphw1||[]).push([[0],[,,,function(e,t,a){e.exports={someClass:"Affairs_someClass__c2Tda",tasks:"Affairs_tasks__2FM4L",buttons:"Affairs_buttons__3uOBc",active:"Affairs_active__1pSxY"}},,,,function(e,t,a){e.exports={wrapper:"Message_wrapper__YHYa7",message:"Message_message__22Az5",name:"Message_name__1ric4",time:"Message_time__2qOCB"}},function(e,t,a){e.exports={global:"Affair_global__va7yY",affair:"Affair_affair__38JBn",low:"Affair_low__cMIDh",high:"Affair_high__1N7xe",middle:"Affair_middle__uKts0",level:"Affair_level__2LXl-"}},,function(e,t,a){e.exports={someClass:"Greeting_someClass__3tJOB",error:"Greeting_error__19_9E",red:"Greeting_red__1aDC3"}},function(e,t,a){e.exports={superInput:"SuperInputText_superInput__l3KKz",errorInput:"SuperInputText_errorInput__2yriL",error:"SuperInputText_error__2596d"}},function(e,t,a){e.exports={blue:"HW4_blue___89iQ",column:"HW4_column__2KGlp",testSpanError:"HW4_testSpanError__2-soA"}},,function(e,t,a){e.exports={default:"SuperButton_default__117Vi",red:"SuperButton_red__2SelW"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__35vJ8",spanClassName:"SuperCheckbox_spanClassName__2pWj1"}},,,,function(e,t,a){e.exports={App:"App_App__x9fZn"}},,,,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(18),s=a.n(c),i=(a(26),a(19)),l=a.n(i),o=a(7),j=a.n(o),d=a(0);var u=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:j.a.wrapper,children:[Object(d.jsx)("img",{src:e.avatar,alt:""}),Object(d.jsxs)("div",{className:j.a.message,children:[Object(d.jsx)("h5",{className:j.a.name,children:e.name}),Object(d.jsxs)("p",{children:[e.message," "]}),Object(d.jsx)("p",{className:j.a.time,children:e.time})]})]})})},b="https://s2.cdn.teleprogramma.pro/wp-content/uploads/2019/05/cb706541804dc13167fa181910dc3387.jpg",h="Some Name",m="some text",f="22:00";var O=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(u,{avatar:b,name:h,message:m,time:f}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},x=a(2),_=a(8),p=a.n(_);var v=function(e){var t=p.a.level+" "+p.a[e.affair.priority];return Object(d.jsxs)("div",{className:p.a.global,children:[Object(d.jsx)("div",{children:e.affair.name}),Object(d.jsxs)("div",{className:p.a.affair,children:[Object(d.jsx)("div",{className:t,children:e.affair.priority}),Object(d.jsx)("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})]})},g=a(3),C=a.n(g);var k=function(e){var t=Object(r.useState)("all"),a=Object(x.a)(t,2),n=a[0],c=a[1],s=e.data.map((function(t){return Object(d.jsx)(v,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),i=C.a.buttons+" "+("all"===n?C.a.active:""),l=C.a.buttons+" "+("high"===n?C.a.active:""),o=C.a.buttons+" "+("middle"===n?C.a.active:""),j=C.a.buttons+" "+("low"===n?C.a.active:"");return Object(d.jsxs)("div",{className:C.a.someClass,children:[Object(d.jsx)("div",{className:C.a.tasks,children:s}),Object(d.jsxs)("div",{className:C.a.buttons,children:[Object(d.jsx)("button",{className:i,onClick:function(){e.setFilter("all"),c("all")},children:"All"}),Object(d.jsx)("button",{className:l,onClick:function(){e.setFilter("high"),c("high")},children:"High"}),Object(d.jsx)("button",{className:o,onClick:function(){e.setFilter("middle"),c("middle")},children:"Middle"}),Object(d.jsx)("button",{className:j,onClick:function(){e.setFilter("low"),c("low")},children:"Low"})]})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(r.useState)(N),t=Object(x.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)("all"),s=Object(x.a)(c,2),i=s[0],l=s[1],o=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):void 0}(a,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(k,{data:o,setFilter:l,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},y=a(21),S=a(10),A=a.n(S),I=function(e){var t=e.name,a=e.setNameCallback,r=e.addUser,n=e.error,c=e.totalUsers,s=""==t?A.a.error:"",i=function(e){a(e)};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:A.a.someClass,children:[Object(d.jsx)("input",{value:t,onChange:i,onBlur:i,className:s}),Object(d.jsx)("button",{onClick:r,children:"add"}),Object(d.jsx)("span",{children:c||0})]}),Object(d.jsx)("div",{children:""===t?Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:A.a.red,children:n})}):null})]})},T=function(e){var t=e.users,a=e.addUserCallback,n=Object(r.useState)(""),c=Object(x.a)(n,2),s=c[0],i=c[1],l=Object(r.useState)("\u0412\u044b \u043d\u0435 \u0432\u0432\u0435\u043b\u0438 \u0438\u043c\u044f"),o=Object(x.a)(l,2),j=o[0];o[1];console.log(t);var u=t.length;return Object(d.jsx)("div",{children:Object(d.jsx)(I,{name:s,setNameCallback:function(e){i(e.target.value)},addUser:function(){""!==s&&(alert("Hello ".concat(s," !")),a(s.trim()),i(""))},error:j,totalUsers:u})})},B=a(20);var E=function(){var e=Object(r.useState)([]),t=Object(x.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(T,{users:a,addUserCallback:function(e){var t={_id:Object(B.v1)(),name:e};n([].concat(Object(y.a)(a),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},M=a(4),F=a(5),K=a(11),W=a.n(K),H=function(e){e.type;var t=e.onChange,a=e.onChangeText,r=e.onKeyPress,n=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,l=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(W.a.error," ").concat(i||""),j=s||(l.value?W.a.superInput:W.a.errorInput);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),n&&"Enter"===e.key&&n()},className:j},l)),c&&Object(d.jsx)("span",{className:o,children:c})]})},U=a(12),J=a.n(U),G=a(14),L=a.n(G),Y=function(e){var t=e.red,a=e.className,r=Object(F.a)(e,["red","className"]),n="".concat(t?L.a.red:L.a.default," ").concat(a);return Object(d.jsx)("button",Object(M.a)(Object(M.a)({className:n},r),{},{children:r.children}))},P=a(15),z=a.n(P),D=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,r=e.className,n=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(z.a.checkbox," ").concat(r||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:s},c)),n&&Object(d.jsx)("span",{className:z.a.spanClassName,children:n})]})};var X=function(){var e=Object(r.useState)(""),t=Object(x.a)(e,2),a=t[0],n=t[1],c=a?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(r.useState)(!1),l=Object(x.a)(i,2),o=l[0],j=l[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:J.a.column,children:[Object(d.jsx)(H,{value:a,onChangeText:n,onEnter:s,error:c,spanClassName:J.a.testSpanError}),Object(d.jsx)(H,{className:J.a.blue}),Object(d.jsx)(Y,{children:"default"}),Object(d.jsx)(Y,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(Y,{disabled:!0,children:"disabled"}),Object(d.jsx)(D,{checked:o,onChangeChecked:j,children:"Checkbox1"}),Object(d.jsx)(D,{checked:o,onChange:function(e){return j(e.currentTarget.checked)}})]})]})};var q=function(){return Object(d.jsxs)("div",{className:l.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(O,{}),Object(d.jsx)(w,{}),Object(d.jsx)(E,{}),Object(d.jsx)(X,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.85f5eade.chunk.js.map