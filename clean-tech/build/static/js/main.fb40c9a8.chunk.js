(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{117:function(e,t,c){"use strict";c.r(t);var s,a=c(1),n=c(22),l=c.n(n),r=(c(81),c(29)),o=c(23),i=c.n(o),d=(c(84),c(85),c(124)),j=c(120),b=c(122),u=c(19),m=(c(86),c(0)),h=function(){return Object(m.jsx)(d.a,{className:"Navbar",children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(d.a.Brand,{href:"#home",style:{color:"black",padding:7},children:" T A C G F"}),Object(m.jsxs)(b.a,{className:"justify-content-end",children:[Object(m.jsx)(u.b,{to:"/Home",style:{textDecoration:"none",color:"black",padding:8},children:" Home "}),Object(m.jsx)(u.b,{to:"/About",style:{textDecoration:"none",color:"black",padding:8},children:" About "}),Object(m.jsx)(u.b,{to:"/Register",style:{textDecoration:"none",color:"black",padding:8},children:" Register "})]})]})})},x=(c(92),c(63)),O=c.n(x);(s=O.a).fn.countTo=function(e){return e=e||{},s(this).each((function(){var t=s.extend({},s.fn.countTo.defaults,{from:s(this).data("from"),to:s(this).data("to"),speed:s(this).data("speed"),refreshInterval:s(this).data("refresh-interval"),decimals:s(this).data("decimals")},e),c=Math.ceil(t.speed/t.refreshInterval),a=(t.to-t.from)/c,n=this,l=s(this),r=0,o=t.from,i=l.data("countTo")||{};function d(e){var c=t.formatter.call(n,e,t);l.html(c)}l.data("countTo",i),i.interval&&clearInterval(i.interval),i.interval=setInterval((function(){r++,d(o+=a),"function"==typeof t.onUpdate&&t.onUpdate.call(n,o),r>=c&&(l.removeData("countTo"),clearInterval(i.interval),o=t.to,"function"==typeof t.onComplete&&t.onComplete.call(n,o))}),t.refreshInterval),d(o)}))},s.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:function(e,t){return e.toFixed(t.decimals)},onUpdate:null,onComplete:null},O()((function(e){e(".count-number").data("countToOptions",{formatter:function(e,t){return e.toFixed(t.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g,",")}}),e(".timer").each((function(t){var c=e(this);t=e.extend({},t||{},c.data("countToOptions")||{}),c.countTo(t)}))}));var p=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){"About"===e.scroll?window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}):window.scrollTo({top:0})})),Object(m.jsxs)("div",{className:"body",children:[Object(m.jsx)("div",{style:{marginTop:40,marginBottom:40},children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-bs-ride":"true",children:[Object(m.jsxs)("div",{className:"carousel-indicators",children:[Object(m.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(m.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(m.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(m.jsxs)("div",{className:"carousel-inner",children:[Object(m.jsx)("div",{className:"carousel-item active",children:Object(m.jsx)("img",{src:"car2.png",className:"d-block w-100",alt:"..."})}),Object(m.jsx)("div",{className:"carousel-item",children:Object(m.jsx)("img",{src:"huge.png",className:"d-block w-100",alt:"..."})}),Object(m.jsx)("div",{className:"carousel-item",children:Object(m.jsx)("img",{src:"123.png",className:"d-block w-100",alt:"..."})})]}),Object(m.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev",children:[Object(m.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(m.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(m.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next",children:[Object(m.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(m.jsx)("span",{className:"visually-hidden",children:"Next"})]})]}),Object(m.jsxs)("div",{className:"scroll1",children:[Object(m.jsx)(j.a,{fluid:!0,style:{textAlign:"center",paddingTop:30},children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"col text-center"})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col",style:{paddingBottom:20},children:Object(m.jsxs)("div",{className:"counter",children:[Object(m.jsx)("i",{className:"fa-solid fa-chalkboard-user"}),Object(m.jsx)("h2",{className:"timer count-title count-number","data-to":"200","data-speed":"1500"}),Object(m.jsx)("h3",{style:{fontsize:"5px",color:"#e7aa0f"},className:"panel1Text",children:Object(m.jsx)("b",{children:" Active Teachers"})})]})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("div",{className:"counter",children:[Object(m.jsx)("i",{className:"fa-solid fa-chalkboard-user"}),Object(m.jsx)("h2",{className:"timer count-title count-number","data-to":"500","data-speed":"1500"}),Object(m.jsx)("h3",{style:{fontsize:"5px",color:"#e7aa0f"},className:"panel1Text",children:Object(m.jsx)("b",{children:"Students Enrolled"})})]})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("div",{className:"counter",children:[Object(m.jsx)("i",{className:"fa-solid fa-chalkboard-user"}),Object(m.jsx)("h2",{className:"timer count-title count-number","data-to":"15","data-speed":"1500"}),Object(m.jsx)("h3",{style:{fontsize:"5px",color:"#e7aa0f"},className:"panel1Text",children:Object(m.jsx)("b",{children:"Courses"})})]})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("div",{className:"counter",children:[Object(m.jsx)("i",{className:"fa-solid fa-chalkboard-user"}),Object(m.jsx)("h2",{className:"timer count-title count-number","data-to":"8","data-speed":"1500"}),Object(m.jsxs)("h3",{style:{fontsize:"5px",color:"#e7aa0f"},className:"panel1Text",children:[Object(m.jsx)("b",{children:"Response Time"})," "]})]})})]})]})}),Object(m.jsx)("div",{style:{height:50}}),Object(m.jsxs)(j.a,{fluid:!0,style:{backgroundColor:"#eec617"},children:[Object(m.jsx)("h1",{className:"text-black",style:{textAlign:"center",paddingTop:40},children:Object(m.jsx)("b",{children:"Bridging the gap between your child and their future."})}),Object(m.jsx)("h3",{style:{textAlign:"center",paddingTop:3}}),Object(m.jsxs)("div",{className:"homePanel1",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"bulb.jpeg",className:"rounded secondPanelImg",alt:"..."})}),Object(m.jsx)("div",{children:Object(m.jsxs)("ul",{className:"secondPanelText text-black",children:[Object(m.jsx)("li",{children:"One to one Intereactive sessions."}),Object(m.jsx)("li",{children:"Free Demo Session."}),Object(m.jsx)("li",{children:"Regular Homework and Reinforcement Exercises."}),Object(m.jsx)(u.b,{to:"/Register",className:"btn btn-dark",children:"Register Now"})]})})]})]}),Object(m.jsx)("div",{style:{backgroundColor:"white",height:50}}),Object(m.jsxs)(j.a,{fluid:!0,style:{backgroundColor:"black",alignItems:"center",paddingBottom:45},children:[Object(m.jsx)("h1",{style:{textAlign:"center",paddingTop:40},className:"text-white",children:Object(m.jsx)("b",{children:"Registration Process"})}),Object(m.jsx)("h2",{style:{textAlign:"center",paddingTop:3},className:"text-white",children:"Find your tutor in 3 simple steps:"}),Object(m.jsx)("div",{style:{textAlign:"center",paddingTop:20,display:"flex",justifyContent:"center"},children:Object(m.jsx)("img",{src:"123icon.png",className:"image1",style:{paddingTop:40}})})]}),Object(m.jsx)("div",{style:{backgroundColor:"White",height:50}}),Object(m.jsx)("div",{style:{backgroundColor:"White",height:20}}),Object(m.jsxs)("div",{"data-bs-spy":"scroll","data-bs-target":"#navbar-example2","data-bs-root-margin":"0px 0px -40%","data-bs-smooth-scroll":"true",className:"scrollspy-example text-black p-3",style:{backgroundColor:"#d1cfca"},tabIndex:"0",children:[Object(m.jsx)("h1",{className:"text-center",id:"scrollspyHeading1 my-5",children:"Founders: "}),Object(m.jsx)("p",{className:"text-center"}),Object(m.jsxs)("div",{className:"text-center",style:{display:"flex"},ref:t,id:"aboutSection",children:[Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("img",{src:"founder1.jpeg",className:"rounded-circle w-50 p-3"}),Object(m.jsx)("p",{className:"mx-auto mt-auto mb-auto",children:"Muzammil Arif Zuberi"}),Object(m.jsx)("p",{children:"Co-Founder TACGF"})]}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("img",{src:"founder2.jpeg",className:"rounded-circle w-50 p-3"}),Object(m.jsx)("p",{className:"mx-auto mt-auto mb-auto",children:"Adeel Siddiqui"}),Object(m.jsx)("p",{children:"Co-Founder TACGF"})]})]})]})]})]})}),Object(m.jsxs)("footer",{className:"footer text-center text-black",children:[Object(m.jsx)("div",{className:"container p-4 pb-0",children:Object(m.jsxs)("section",{className:"mb-4",children:[Object(m.jsx)("h3",{className:"mx-auto mt-auto mb-auto",children:"Contact Us:"}),Object(m.jsx)("p",{className:"mx-auto mt-auto mb-auto",children:"Phone: +92 336 4828287"}),Object(m.jsx)("p",{children:"Email: learningforum@gmail.com"}),Object(m.jsx)("a",{className:"btn btn-outline-dark btn-floating m-1",style:{backgroundcolor:"#3b5998"},href:"https://www.facebook.com/profile.php?id=100063575691859",role:"button",children:Object(m.jsx)("i",{className:"fab fa-facebook-f"})}),Object(m.jsx)("a",{className:"btn btn-outline-dark btn-floating m-1",style:{backgroundcolor:"#dd4b39"},href:"#!",role:"button",children:Object(m.jsx)("i",{className:"fab fa-google"})}),Object(m.jsx)("a",{className:"btn btn-outline-dark btn-floating m-1",style:{backgroundcolor:"#ac2bac"},href:"https://www.instagram.com/learning_forum/",role:"button",children:Object(m.jsx)("i",{className:"fab fa-instagram"})}),Object(m.jsx)("a",{className:"btn btn-outline-dark btn-floating m-1",style:{backgroundcolor:"#0082ca"},href:"#!",role:"button",children:Object(m.jsx)("i",{className:"fab fa-linkedin-in"})})]})}),Object(m.jsx)("div",{className:"text-center p-3",style:{backgroundcolor:"rgba(0, 0, 0, 0.2)"}})]})]})},f=c(6),v=(c(93),c(123)),g=c(125),N=c(121),y=c(35),k=c.n(y),C=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)("Male"),l=Object(f.a)(n,2),o=l[0],d=l[1],j=Object(a.useState)(""),b=Object(f.a)(j,2),u=b[0],h=b[1],x=Object(a.useState)(""),O=Object(f.a)(x,2),p=O[0],y=O[1],C=Object(a.useState)("Home Tuition"),S=Object(f.a)(C,2),I=S[0],T=S[1],F=Object(a.useState)("O level"),w=Object(f.a)(F,2),A=w[0],E=w[1],D=Object(a.useState)("Grade 1"),G=Object(f.a)(D,2),R=G[0],B=G[1],M=Object(a.useState)(1),P=Object(f.a)(M,2),H=P[0],L=P[1],_=Object(a.useState)(1),z=Object(f.a)(_,2),q=z[0],U=z[1],W=Object(a.useState)("No"),Y=Object(f.a)(W,2),V=Y[0],J=Y[1],Z=Object(a.useState)([]),K=Object(f.a)(Z,2),$=K[0],Q=K[1],X=Object(a.useState)(0),ee=Object(f.a)(X,2),te=ee[0],ce=ee[1],se=Object(a.useState)([]),ae=Object(f.a)(se,2),ne=ae[0],le=ae[1],re=Object(a.useState)(!1),oe=Object(f.a)(re,2),ie=oe[0],de=oe[1],je=Object(a.useState)(""),be=Object(f.a)(je,2),ue=be[0],me=be[1],he=Object(a.useState)(""),xe=Object(f.a)(he,2),Oe=xe[0],pe=xe[1],fe=Object(a.useState)(!0),ve=Object(f.a)(fe,2),ge=ve[0],Ne=ve[1],ye=function(){de(!1),"Submission Failed"!==Oe&&window.location.reload()},ke=function(){var e=Object(r.a)(i.a.mark((function e(t){var s,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1===t.currentTarget.checkValidity()){e.next=17;break}if(t.preventDefault(),console.log("VALIDATION SUCCESS"),"No"===V){for(s=$;s.length;)s.pop();Q(s)}return a={Name:c,Gender:o,Email:u,Phone_Number:p,Teaching_Mode:I,Board:A,Grade:R,Hours_Per_Day:parseInt(H),Days:parseInt(q),Specific_Days:V,Specific_Days_List:$,Subjects:ne,Expected_Fees:parseInt(te)},e.prev=6,e.next=9,k.a.post("http://3.110.187.14:5000/api/sendData",{data:a}).then((function(e){"Success"===e.data?(me("Wooho! You are Registered!!!"),pe("Submission Successful")):(me("A technical issue has been occured"),pe("Submission Failed"))}));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(6),console.error(e.t0);case 14:de(!0),e.next=20;break;case 17:t.preventDefault(),t.stopPropagation(),console.log("VALIDATION FAILED");case 20:case"end":return e.stop()}}),e,null,[[6,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"Container needs-validation",noValidate:!0,children:[Object(m.jsxs)("form",{onSubmit:ke,children:[Object(m.jsx)("h3",{children:"Personal Info"}),Object(m.jsxs)("div",{className:"form-row mb-5 mt-2",children:[Object(m.jsx)("div",{className:"col-md-3 pr-3",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"InputName",children:"First Name (Alphabets Only)"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"InputName",maxLength:25,pattern:"[a-zA-Z]+",placeholder:"Your Name",value:c,onChange:function(e){return s(e.target.value)},required:!0})]})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("label",{htmlFor:"InputName",children:"Gender"}),Object(m.jsxs)("div",{className:"col mt-2 mb-3",children:[Object(m.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(m.jsx)("input",{type:"radio",id:"customRadioInline1",name:"customRadioInline1",className:"custom-control-input",onChange:function(e){return d("Male")},defaultChecked:!0}),Object(m.jsx)("label",{className:"custom-control-label",htmlFor:"customRadioInline1",children:"Male"})]}),Object(m.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(m.jsx)("input",{type:"radio",id:"customRadioInline2",name:"customRadioInline1",onChange:function(e){return d("Female")},className:"custom-control-input"}),Object(m.jsx)("label",{className:"custom-control-label",htmlFor:"customRadioInline2",children:"Female"})]}),Object(m.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(m.jsx)("input",{type:"radio",id:"customRadioInline3",name:"customRadioInline1",onChange:function(e){return d("Other")},className:"custom-control-input"}),Object(m.jsx)("label",{className:"custom-control-label",htmlFor:"customRadioInline3",children:"Other"})]})]})]})}),Object(m.jsx)("div",{className:"col-md-3 pr-3",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"InputEmail",children:"Email"}),Object(m.jsx)("input",{type:"email",className:"form-control",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",id:"InputEmail",placeholder:"Your email",value:u,onChange:function(e){return h(e.target.value)},required:!0})]})}),Object(m.jsx)("div",{className:"col-md-3 pr-3",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"InputContact",children:"Contact (03xxxxxxxxxx)"}),Object(m.jsx)("input",{type:"text",className:"form-control",pattern:"03[0-9]*.{9,9}",maxLength:11,id:"InputContact",placeholder:"Your Phone Number",value:p,onChange:function(e){return y(String(e.target.value))},required:!0})]})})]}),Object(m.jsx)("h3",{children:"Tuition Details"}),Object(m.jsxs)("div",{className:"row mt-2",children:[Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"InputMode",children:"Mode"}),Object(m.jsxs)("select",{id:"InputMode",onChange:function(e){return T(e.target.value)},className:"custom-select mr-sm-2",children:[Object(m.jsx)("option",{defaultChecked:!0,children:"Home Tuition"}),Object(m.jsx)("option",{children:"Coaching Center"}),Object(m.jsx)("option",{children:"Online"})]})]})}),Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"InputBoard",children:"Board"}),Object(m.jsxs)("select",{id:"InputBoard",onChange:function(e){return E(e.target.value)},className:"custom-select mr-sm-2",children:[Object(m.jsx)("option",{defaultChecked:!0,children:"O level"}),Object(m.jsx)("option",{children:"Metric"}),Object(m.jsx)("option",{children:"Intermediate"}),Object(m.jsx)("option",{children:"A level"}),Object(m.jsx)("option",{children:"Agha Khan"}),Object(m.jsx)("option",{children:"Edexcel"}),Object(m.jsx)("option",{children:"IGCSE"})]})]})}),Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"inputGrade",children:"Class/Grade"}),Object(m.jsxs)("select",{id:"inputGrade",onChange:function(e){return B(e.target.value)},className:"custom-select mr-sm-2",children:[Object(m.jsx)("option",{defaultChecked:!0,children:"Grade 1"}),Object(m.jsx)("option",{children:"Grade 2"}),Object(m.jsx)("option",{children:"Grade 3"}),Object(m.jsx)("option",{children:"Grade 4"}),Object(m.jsx)("option",{children:"Grade 5"}),Object(m.jsx)("option",{children:"Grade 6"}),Object(m.jsx)("option",{children:"Grade 7"}),Object(m.jsx)("option",{children:"Grade 8"}),Object(m.jsx)("option",{children:"Grade 9"}),Object(m.jsx)("option",{children:"Grade 10"}),Object(m.jsx)("option",{children:"Grade 11"}),Object(m.jsx)("option",{children:"FSC1"}),Object(m.jsx)("option",{children:"FSC2"}),Object(m.jsx)("option",{children:"AS-1"}),Object(m.jsx)("option",{children:"AS-2"})]})]})})]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"InputHoursPerday",children:"Hours Per Day"}),Object(m.jsxs)("select",{id:"InputHoursPerday",onChange:function(e){return L(e.target.value)},className:"custom-select mr-sm-2",children:[Object(m.jsx)("option",{defaultChecked:!0,children:"1"}),Object(m.jsx)("option",{children:"2"}),Object(m.jsx)("option",{children:"3"}),Object(m.jsx)("option",{children:"4"})]})]})}),Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"InputNumberOfDays",children:"Days"}),Object(m.jsxs)("select",{id:"InputNumberOfDays",className:"custom-select mr-sm-2",onChange:function(e){return function(e){U(e.target.value);for(var t=$,c=[],s=0;s<e.target.value;s++)"Monday"===t[s]||"Tuesday"===t[s]||"Wednesday"===t[s]||"Thursday"===t[s]||"Friday"===t[s]||"Saturday"===t[s]||"Sunday"===t[s]?c[s]=t[s]:c[s]="Monday";Q(c)}(e)},children:[Object(m.jsx)("option",{children:"1"}),Object(m.jsx)("option",{children:"2"}),Object(m.jsx)("option",{children:"3"}),Object(m.jsx)("option",{children:"4"}),Object(m.jsx)("option",{children:"5"}),Object(m.jsx)("option",{children:"6"}),Object(m.jsx)("option",{children:"7"})]})]})}),Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsxs)("div",{className:"form-check",children:[Object(m.jsx)("input",{className:"form-check-input",type:"checkbox",id:"inputSpecificDays",onClick:function(){"No"===V?(J("Yes"),0===$.length&&Q(["Monday"])):J("No")},"data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"inputSpecificDays",children:"Specific days"})]})})]})})}),Object(m.jsx)("div",{className:"row mt-4 mb-4",children:Object(m.jsx)("div",{className:"collapse",id:"collapseExample",children:Object(m.jsx)("div",{className:"form-group",children:function(){for(var e=[],t=function(t){e.push(Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-1 align-self-center",children:Object(m.jsxs)("label",{className:"pt-2",htmlFor:"studyDays",children:["Day ",t+1]})}),Object(m.jsx)("div",{className:"col-md-2 mb-2",children:Object(m.jsxs)("select",{id:"studyDays",onChange:function(e){return function(e,t){var c=$;c[t]=e.target.value,Q(c)}(e,t)},className:"custom-select mr-sm-2",children:[Object(m.jsx)("option",{children:"Monday"}),Object(m.jsx)("option",{children:"Tuesday"}),Object(m.jsx)("option",{children:"Wednesday"}),Object(m.jsx)("option",{children:"Thursday"}),Object(m.jsx)("option",{children:"Friday"}),Object(m.jsx)("option",{children:"Saturday"}),Object(m.jsx)("option",{children:"Sunday"})]})})]},t))},c=0;c<q;c++)t(c);return e}()})})}),Object(m.jsxs)("div",{className:"row mt-3 mb-5 justify-content-start",children:[Object(m.jsx)("h3",{children:"Subjects"}),["Maths","Science","History","Geography","Add Maths","Physics","Chemistry","Accounts","Business Studies","Urdu","English Literature","English Language","Biology","Computer Science","ECAT","MCAT"].map((function(e){return Object(m.jsx)("div",{className:"col-lg-3",children:Object(m.jsx)(v.a.Check,{label:e,name:"group1",type:"checkbox",id:"inline-checkbox",className:"mt-2",onClick:function(t){return function(e){var t=ne,c=t.indexOf(e);-1===c?t.push(e):t.splice(c,1),le(t),0!==ne.length?Ne(!1):Ne(!0)}(e)},required:ge})},"inline-checkbox-".concat(e))}))]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"form-group col-md-3",children:[Object(m.jsx)("label",{htmlFor:"studyDays",children:"Expected Fees (Number)"}),Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("div",{className:"input-group-prepend",children:Object(m.jsx)("div",{className:"input-group-text",children:"Rs."})}),Object(m.jsx)("input",{type:"text",pattern:"[0-9]*",className:"form-control",onChange:function(e){return ce(e.target.value)},id:"inputFees",required:!0})]})]})}),Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("button",{id:"xxx1",type:"submit",className:"btn btn-primary col-4",children:"Submit"})})]}),Object(m.jsxs)(g.a,{show:ie,onHide:ye,animation:!0,centered:!0,children:[Object(m.jsx)(g.a.Header,{closeButton:!0,children:Object(m.jsx)(g.a.Title,{children:Oe})}),Object(m.jsx)(g.a.Body,{children:ue}),Object(m.jsx)(g.a.Footer,{children:Object(m.jsx)(N.a,{variant:"primary",onClick:ye,children:"Okay"})})]})]})},S=c(7);function I(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{class:"offcanvas offcanvas-start",id:"demo",children:[Object(m.jsxs)("div",{class:"offcanvas-header",children:[Object(m.jsx)("h1",{class:"offcanvas-title",children:"Heading"}),Object(m.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas"})]}),Object(m.jsxs)("div",{class:"offcanvas-body",children:[Object(m.jsx)("p",{children:"Some text lorem ipsum."}),Object(m.jsx)("p",{children:"Some text lorem ipsum."}),Object(m.jsx)("p",{children:"Some text lorem ipsum."}),Object(m.jsx)("button",{class:"btn btn-secondary",type:"button",children:"A Button"})]})]}),Object(m.jsxs)("div",{class:"container-fluid mt-3",children:[Object(m.jsx)("h3",{children:"Offcanvas Sidebar"}),Object(m.jsx)("p",{children:"Offcanvas is similar to modals, except that it is often used as a sidebar."}),Object(m.jsx)("button",{class:"btn btn-primary",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#demo",children:"Open Offcanvas Sidebar"})]})]})}var T=function(){return Object(a.useEffect)((function(){var e=function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post("http://3.110.187.14:5000/api/start",{message:"--\x3eConnection Established With React<--"}).then((function(e){return console.log(e.data)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(h,{children:" "}),Object(m.jsxs)(S.c,{children:[Object(m.jsx)(S.a,{path:"/Home",element:Object(m.jsx)(p,{scroll:"Top"})}),Object(m.jsx)(S.a,{path:"/About",element:Object(m.jsx)(p,{scroll:"About"})}),Object(m.jsx)(S.a,{path:"/Register",element:Object(m.jsx)(C,{})}),Object(m.jsx)(S.a,{path:"/",element:Object(m.jsx)(p,{scroll:"Top"})}),Object(m.jsx)(S.a,{path:"/RegisterCourse",element:Object(m.jsx)(I,{board:"A'Levels"})})]})]})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,126)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),n(e),l(e)}))};l.a.render(Object(m.jsx)(T,{}),document.getElementById("root")),F()},81:function(e,t,c){},84:function(e,t,c){},86:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){}},[[117,1,2]]]);
//# sourceMappingURL=main.fb40c9a8.chunk.js.map