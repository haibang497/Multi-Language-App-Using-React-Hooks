(this["webpackJsonpmulti-language"]=this["webpackJsonpmulti-language"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"header":{"header1":"Trang Ch\u1ee7","header2":"Ch\xfang t\xf4i l\xe0 ai","header3":"Ch\xfang t\xf4i l\xe0m g\xec","header4":"L\xe0m th\u1ebf n\xe0o","header5":"T\u1ea1i sao","header6":"Tin m\u1edbi","header7":"Li\xean h\u1ec7","header8":{"test":"Ki\u1ec3m tra"}},"main":{"title":"Gi\xe1 tr\u1ecb v\xe0 s\u1ef1 tin c\u1eady","textone":"H\u1ed3 s\u01a1 theo d\xf5i","infor1":"30 d\u1ef1 \xe1n s\xe1ng t\u1ea1o \u0111\u01b0\u1ee3c giao","infor2":"Kh\xe1ch h\xe0ng t\u1eeb M\u1ef9, Canada, \xdac, Anh, B\u1ec9, \u0110an M\u1ea1ch, Th\u1ee5y \u0110i\u1ec3n, \xc1o, Nh\u1eadt B\u1ea3n, Th\xe1i Lan, v.v.","infor3":"\u1ee8ng d\u1ee5ng c\xf4ng ngh\u1ec7 m\u1edbi trong T\xe0i ch\xednh, Ch\u0103m s\xf3c s\u1ee9c kh\u1ecfe, H\u1eadu c\u1ea7n, Ti\u1ebfp th\u1ecb, \xd4 t\xf4, Gi\xe1o d\u1ee5c, Nh\xe2n s\u1ef1, N\xf4ng nghi\u1ec7p, An ninh, Thi\u1ebft b\u1ecb \u0111i\u1ec7n t\u1eed, v.v.","titletext1":"\u0110\u1ed1i t\xe1c \u0111\u1ed5i m\u1edbi \u0111\xe1ng tin c\u1eady c\u1ee7a b\u1ea1n","infor4":"Quy tr\xecnh ch\u1ea5t l\u01b0\u1ee3ng v\xe0 b\u1ea3o m\u1eadt \u0111\u01b0\u1ee3c thi\u1ebft l\u1eadp t\u1ed1t (ISO 27001, CMMi)","infor5":"D\u1ecbch v\u1ee5 \u0111\u1ed5i m\u1edbi t\u1eeb \u0111\u1ea7u \u0111\u1ebfn cu\u1ed1i: nghi\xean c\u1ee9u kh\u1ea3 thi k\u1ef9 thu\u1eadt, nguy\xean m\u1eabu, thi\u1ebft k\u1ebf ki\u1ebfn tr\xfac, ph\xe1t tri\u1ec3n v\xe0 th\u1eed nghi\u1ec7m s\u1ea3n ph\u1ea9m, h\u1ed7 tr\u1ee3 s\u1ea3n xu\u1ea5t, v.v.","titletext2":"\u0110\u1ed9i ng\u0169 t\xe0i n\u0103ng","infor7":"300 k\u1ef9 s\u01b0 AI / ML, D\u1eef li\u1ec7u l\u1edbn, Blockchain, IoT","infor8":"H\u1ee3p t\xe1c ch\u1eb7t ch\u1ebd v\u1edbi 35 tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc h\xe0ng \u0111\u1ea7u","infor9":"H\u01a1n 100 sinh vi\xean th\u1ef1c t\u1eadp m\u1ed7i n\u0103m"}}')},18:function(e){e.exports=JSON.parse('{"header":{"header1":"Home","header2":"Who We Are","header3":"What we do","header4":"How We Do It","header5":"Why Us","header6":"News","header7":"Contact Us","header8":{"test":"Test"}},"main":{"title":"Our Realibility","textone":"Track Record","infor1":"30 innovative projects delivered","infor2":"Clients from USA, Canada, Australia, UK, Belgium, Denmark, Sweden, Austria, Japan, Thailand, etc.","infor3":"Applied new tech in Finance, Healthcare, Logistics, Marketing, Automotive, Education, Human Resource, Agriculture, Security, Electronic devices, etc.","titletext1":"Your Reliable Innovation Partner","infor4":"Well-established quality and security processes (ISO 27001, CMMi)","infor5":"End-to-end innovation services: technical feasibility study, prototype, architectural design, product development & testing, production support, etc.","titletext2":"Talented Team","infor7":"300 AI/ML, Big Data, Blockchain, IoT engineers","infor8":"Working closely with 35 top universities","infor9":"More than 100 interns a year"}}')},24:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),r=a.n(l),c=(a(29),a(30),a(43)),o=a(44),m=a(45),s=a(11),u=a(17),h={en:a(18),vi:u},d={en:"English",vi:"Vietnamese"},g=Object(n.createContext)({userLanguage:"en",dictionary:h.en});function E(e){var t=e.children,a=Object(n.useState)("en"),l=Object(s.a)(a,2),r=l[0],c=l[1],o={userLanguage:r,dictionary:h[r],userLanguageChange:function(e){var t=d[e]?e:"en";c(t),window.localStorage.setItem("language-now",t)}};return i.a.createElement(g.Provider,{value:o},t)}function v(e){return function(e,t){for(var a=e.split("."),n=t,i=0;i<a.length;i++){if(void 0===n[a[i]])return;n=n[a[i]]}return n}(e,Object(n.useContext)(g).dictionary)}a(31);function f(){var e=Object(n.useContext)(g),t=e.userLanguage,a=e.userLanguageChange;return Object(n.useEffect)((function(){var e=window.localStorage.getItem("language-now");e||(e=window.navigator.language.substring(0,2)),a(e)}),[a]),i.a.createElement("select",{onChange:function(e){return a(e.target.value)},value:t},Object.entries(d).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return i.a.createElement("option",{key:a,value:a},n)})))}var p=function(){return i.a.createElement(c.a,null,i.a.createElement(o.a,null,i.a.createElement(o.a.Brand,{href:"#"},i.a.createElement("img",{alt:"",src:"https://www.tma-innovation.center/image/logo.svg",width:"150px",height:"100%",className:"d-inline-block align-top"})," "),i.a.createElement(m.a,{className:"top-menu"},i.a.createElement(m.a.Link,null,v("header.header1")),i.a.createElement(m.a.Link,null,v("header.header2")),i.a.createElement(m.a.Link,null,v("header.header3")),i.a.createElement(m.a.Link,null,v("header.header4")),i.a.createElement(m.a.Link,null,v("header.header5")),i.a.createElement(m.a.Link,null,v("header.header6")),i.a.createElement(m.a.Link,null,v("header.header7")),i.a.createElement(m.a.Link,null,v("header.header8.test")),i.a.createElement(f,null))))},w=(a(38),function(){return i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"main-title"},i.a.createElement("h1",{className:"title"},v("main.title"))),i.a.createElement("div",{className:"top-row element-row"},i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:"https://www.tma-innovation.center/image/e-1.png"})),i.a.createElement("div",{className:"text"},i.a.createElement("p",null,v("main.textone")),i.a.createElement("ul",null,i.a.createElement("li",null,v("main.infor1")),i.a.createElement("li",null,v("main.infor2")),i.a.createElement("li",null,v("main.infor3"))))),i.a.createElement("div",{className:"middle-row"},i.a.createElement("div",{className:"text"},i.a.createElement("p",null,i.a.createElement("strong",null,v("main.titletext1"))),i.a.createElement("ul",null,i.a.createElement("li",null,v("main.infor4")),i.a.createElement("li",null,v("main.infor5")))),i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:"https://www.tma-innovation.center/image/e-2.png"}))),i.a.createElement("div",{className:"third-row element-row"},i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:"https://www.tma-innovation.center/image/e-5.png"})),i.a.createElement("div",{className:"text"},i.a.createElement("p",null,i.a.createElement("strong",null,v("main.titletext2"))),i.a.createElement("ul",null,i.a.createElement("li",null,v("main.infor7")),i.a.createElement("li",null,v("main.infor8")),i.a.createElement("li",null,v("main.infor9")))))))}),N=(a(39),function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"logo"},i.a.createElement("img",{alt:"",src:"https://www.tma-innovation.center/image/logo.svg"})," "),i.a.createElement("div",{className:"information"},i.a.createElement("div",{className:"col1"},i.a.createElement("div",{className:"col1-detail"},i.a.createElement("div",{className:"title1"},i.a.createElement("strong",null,"Address")),i.a.createElement("div",{className:"detail1"},"TMA Building, Street #10, Quang Trung Software City, 1 To Ky, District 12, Ho Chi Minh City, Vietnam")),i.a.createElement("div",{className:"col1-detail-2"},i.a.createElement("div",{className:"title2"},i.a.createElement("strong",null,"Email")),i.a.createElement("div",{className:"detail2"},"contact@tma-innovation.center"))),i.a.createElement("div",{className:"col2"},i.a.createElement("div",{className:"title"},i.a.createElement("strong",null,"Phone")),i.a.createElement("div",{className:"detail3"},i.a.createElement("p",null,i.a.createElement("strong",null,"TMA Vietnam"),"+84 2839 951 059"),i.a.createElement("p",null,i.a.createElement("strong",null,"TMA North America"),"+84 2839 951 059"),i.a.createElement("p",null,i.a.createElement("strong",null,"TMA Vietnam"),"+84 2839 951 059"),i.a.createElement("p",null,i.a.createElement("strong",null,"TMA Vietnam"),"+84 2839 951 059")))))))});var k=function(){return i.a.createElement(E,null,i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement(w,null),i.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.654f6c35.chunk.js.map