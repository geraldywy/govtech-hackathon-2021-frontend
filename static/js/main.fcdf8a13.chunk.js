(this["webpackJsonpgovtech-hackathon2021"]=this["webpackJsonpgovtech-hackathon2021"]||[]).push([[0],{18:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(0),r=c.n(s),a=c(28),i=c.n(a),l=(c(36),c(6)),o=(c(37),c(5)),j=c.n(o),d=c(7),u=(c(18),c(15)),h=c.n(u),p=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=new FormData).append("user_file",t),e.next=4,h.a.post("https://passport-crop.azurewebsites.net/upload-file",c);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.image;return Object(n.jsx)("img",{src:URL.createObjectURL(t),alt:t.name})},O=function(e){var t=e.setLoading,c=e.file,s=e.setFile,r=e.setProcessedImage,a=e.setNotif,i=function(){var e=Object(d.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),e.prev=1,e.next=4,p(c);case 4:n=e.sent,r(n),a({message:"Image processed succesfully!",error:!1}),setTimeout((function(){a(null)}),5e3),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),a({message:"Exception occured while uploading the image!",error:!0}),console.log(e.t0);case 14:return e.prev=14,t(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,10,14,17]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[""!==c?Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Original image"}),c&&Object(n.jsx)(b,{image:c}),Object(n.jsx)("div",{className:"uploadButton",onClick:i,children:Object(n.jsx)("p",{children:"Process this image"})})]}):null,Object(n.jsxs)("div",{className:c?"dullButton":"uploadButton",onClick:function(){document.getElementById("selectImage").click()},children:[Object(n.jsx)("input",{id:"selectImage",onChange:function(e){r(""),e.target.files[0]?s(e.target.files[0]):s("")},type:"file",accept:"image/*",hidden:!0}),Object(n.jsxs)("p",{children:[" ",""===c?"Upload an":"Replace with another"," image"]})]})]})},x=c(10),f=c(11),g=function(e){var t=e.processed_image;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Cropped image"}),Object(n.jsx)("img",{alt:t,src:t}),Object(n.jsx)("a",{style:{textDecoration:"none",color:"black"},href:t,target:"_blank",download:!0,children:Object(n.jsx)("div",{className:"uploadButton",children:Object(n.jsxs)("p",{children:["Download",Object(n.jsx)(x.a,{icon:f.b,style:{color:"grey",fontSize:"14pt",paddingLeft:"15px"}})]})})})]})},m=c(29),v=c.n(m),w=function(){var e=Object(s.useState)("."),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(s.useEffect)((function(){var e=setInterval((function(){return c.length>3?r("."):r(c+".")}),500);return function(){return clearInterval(e)}})),Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:["Processing ",c]}),Object(n.jsx)(v.a,{type:"Circles",color:"#00BFFF",height:100,width:100})]})},N=c(14);var k=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],i=r.a.useState(""),o=Object(l.a)(i,2),j=o[0],d=o[1],u=Object(s.useState)(null),h=Object(l.a)(u,2),p=h[0],b=h[1],m=Object(s.useState)(!1),v=Object(l.a)(m,2),k=v[0],y=v[1];return Object(n.jsx)(N.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Passport cropping tool"}),null!==p?Object(n.jsx)("div",{className:"topPanel",children:Object(n.jsx)("div",{className:p.error?"notif error":"notif success",children:Object(n.jsx)("p",{children:p.message})})}):null,Object(n.jsx)("div",{className:"split leftPanel",children:Object(n.jsx)("div",{className:"centered",children:Object(n.jsx)(O,{setLoading:y,file:j,setFile:d,setProcessedImage:a,setNotif:b})})}),c?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"middleArrow",children:Object(n.jsx)(x.a,{icon:f.a,style:{color:"green",fontSize:"45pt"}})}),Object(n.jsx)("div",{className:"split rightPanel",children:Object(n.jsx)("div",{className:"centered",children:Object(n.jsx)(g,{processed_image:c})})})]}):Object(n.jsx)("div",{className:"split rightPanel",children:Object(n.jsx)("div",{className:"centered",children:""===j?Object(n.jsx)("p",{children:"Upload an image to be processed"}):k?Object(n.jsx)(w,{}):Object(n.jsx)("p",{children:"Click on process to view results or replace the current selection"})})})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,85)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),y()}},[[84,1,2]]]);
//# sourceMappingURL=main.fcdf8a13.chunk.js.map