(this.webpackJsonprwitter=this.webpackJsonprwitter||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(34),s=n.n(c),i=n(10),o=n(24),u=n(6),l=n(8),j=n.n(l),b=n(16),d=n(23);n(43),n(56),n(57);d.a.initializeApp({apiKey:"AIzaSyCqSPN-rS3HBmw2G8X2wFrcQHNEu-_62cM",authDomain:"rwitter-36a69.firebaseapp.com",projectId:"rwitter-36a69",storageBucket:"rwitter-36a69.appspot.com",messagingSenderId:"753241402831",appId:"1:753241402831:web:a84c28bd6bd8adae70b6ba"});var p=d.a,f=d.a.auth(),h=d.a.firestore(),O=d.a.storage(),x=n(1),m=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),o=s[0],u=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],h=d[1],O=Object(a.useState)(""),m=Object(i.a)(O,2),v=m[0],g=m[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&u(a)},y=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:y,className:"container",children:[Object(x.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:w,className:"authInput"}),Object(x.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:w,className:"authInput"}),Object(x.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"Create Account":"Sign In"}),v&&Object(x.jsx)("span",{className:"authError",children:v})]}),Object(x.jsx)("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch",children:p?"Sign in":"Create Account"})]})},v=n(12),g=n(22),w=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n&&(a=new p.auth.GithubAuthProvider),e.next=4,f.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"authContainer",children:[Object(x.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(x.jsx)(m,{}),Object(x.jsxs)("div",{className:"authBtns",children:[Object(x.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google",Object(x.jsx)(v.a,{icon:g.b})]}),Object(x.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github",Object(x.jsx)(v.a,{icon:g.a})]})]})]})},y=n(37),N=n(19),S=function(e){var t=e.rweetObj,n=e.isOwner,r=Object(a.useState)(!1),c=Object(i.a)(r,2),s=c[0],o=c[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),d=l[0],p=l[1],f=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this rweet?")){e.next=6;break}return e.next=4,h.doc("rweets/".concat(t.id)).delete();case 4:return e.next=6,O.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return o((function(e){return!e}))},g=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.doc("rweets/".concat(t.id)).update({text:d});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"rweet",children:s?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:g,className:"container rweetEdit",children:[Object(x.jsx)("input",{type:"text",placeholder:"Edit your rweet",value:d,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;p(t)},className:"formInput"}),Object(x.jsx)("input",{type:"submit",value:"Update Rweet",className:"formBtn"})]}),Object(x.jsx)("span",{onClick:m,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(x.jsx)("img",{src:t.attachmentUrl}),n&&Object(x.jsxs)("div",{class:"rweet__actions",children:[Object(x.jsx)("span",{onClick:f,children:Object(x.jsx)(v.a,{icon:N.d})}),Object(x.jsx)("span",{onClick:m,children:Object(x.jsx)(v.a,{icon:N.a})})]})]})})},k=n(35),C=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],p=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,r,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return r=O.ref().child("".concat(t.uid,"/").concat(Object(k.v4)())),e.next=8,r.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:c,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,h.collection("rweets").add(o);case 15:s(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(x.jsxs)("div",{className:"factoryInput__container",children:[Object(x.jsx)("input",{className:"factoryInput__input",value:c,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on yout mind?",maxLength:120}),Object(x.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(x.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(x.jsx)("span",{children:"Add Photos"}),Object(x.jsx)(v.a,{icon:N.b})]}),Object(x.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(x.jsxs)("div",{className:"factoryForm__attachment",children:[Object(x.jsx)("img",{src:l,style:{background:l}}),Object(x.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return d("")},children:[Object(x.jsx)("span",{children:"Remove"}),Object(x.jsx)(v.a,{icon:N.c})]})]})]})},I=function(e){var t=e.userObj,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){h.collection("rweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(C,{userObj:t}),Object(x.jsx)("div",{style:{marginTop:30},children:c.map((function(e){return Object(x.jsx)(S,{rweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},F=function(e){var t=e.userObj;return Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(x.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"2x"})})}),Object(x.jsx)("li",{children:Object(x.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(x.jsx)(v.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(x.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},U=function(e){var t=e.refreshUser,n=e.userObj,r=Object(a.useState)(n.displayName),c=Object(i.a)(r,2),s=c[0],o=c[1],l=Object(u.f)(),d=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("rweets").where("creatorId","==",n.uid).orderBy("createdAt").get();case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){d()}),[]);var p=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===s){e.next=5;break}return e.next=4,n.updateProfile({displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{className:"profilePhoto",children:n.photoURL&&Object(x.jsx)("img",{src:n.photoURL})}),Object(x.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(x.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:s,className:"formInput"}),Object(x.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(x.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){f.signOut(),l.push("/")},children:"Log Out"})]})},A=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(x.jsxs)(o.a,{children:[n&&Object(x.jsx)(F,{userObj:a}),Object(x.jsx)(u.c,{children:n?Object(x.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(x.jsx)(u.a,{exact:!0,path:"/",children:Object(x.jsx)(I,{userObj:a})}),Object(x.jsx)(u.a,{exact:!0,path:"/profile",children:Object(x.jsx)(U,{userObj:a,refreshUser:t})})]}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(u.a,{exact:!0,path:"/",children:Object(x.jsx)(w,{})})})})]})};var P=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){u(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)},photoURL:e.photoURL}:null),r(!0)}))}),[]),Object(x.jsxs)(x.Fragment,{children:[n?Object(x.jsx)(A,{refreshUser:function(){var e=f.currentUser;u({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)},photoURL:e.photoURL})},isLoggedIn:Boolean(o),userObj:o}):"Initializing...",Object(x.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Rwitter"]})]})};n(54);s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(P,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.d498b0c6.chunk.js.map