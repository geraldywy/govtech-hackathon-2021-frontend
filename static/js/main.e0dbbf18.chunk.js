(this["webpackJsonpgovtech-hackathon2021"]=this["webpackJsonpgovtech-hackathon2021"]||[]).push([[0],{14:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),r=n.n(s),i=n(28),a=n.n(i),l=(n(37),n(6)),o=(n(38),n(5)),j=n.n(o),d=n(7),u=(n(14),n(16)),h=n.n(u),b=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("user_file",t),e.next=4,h.a.post("https://passport-crop.azurewebsites.net/upload-file",n);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.image;console.log(t);try{return Object(c.jsx)("img",{id:"leftImage",src:URL.createObjectURL(t),alt:t.name})}catch(n){return Object(c.jsx)("img",{id:"leftImage",src:t,alt:t.name})}},O=function(e){var t=e.loading,n=e.setLoading,s=e.file,r=e.setFile,i=(e.processed_image,e.setProcessedImage),a=e.setNotif,l=e.setTakingOne,o=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(""),n(!0),e.prev=2,e.next=5,b(s);case 5:t=e.sent,i(t),a({message:"Image processed succesfully!",error:!1}),setTimeout((function(){a(null)}),5e3),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),a({message:e.t0.message||"Exception occured while uploading the image!",error:!0}),setTimeout((function(){a(null)}),5e3);case 15:return e.prev=15,n(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,11,15,18]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[""!==s?Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Original image"}),s&&Object(c.jsx)(p,{image:s}),Object(c.jsx)("div",{className:s&&t?"dullButton":"uploadButton",onClick:s&&t?null:o,children:Object(c.jsx)("p",{children:s&&t?"Disabled while processing":"Process this image"})})]}):null,s&&t?Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"dullButton",children:Object(c.jsx)("p",{children:" Disabled while processing... "})}),Object(c.jsx)("div",{className:"dullButton",children:Object(c.jsx)("p",{children:" Disabled while processing... "})})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{id:"selectImage",onChange:function(e){i(""),e.target.files[0]?r(e.target.files[0]):r("")},type:"file",accept:".jpg,.jpeg,.jfif,.png,.jpe,.jif,.jfi,.webp",hidden:!0}),Object(c.jsx)("div",{className:s?"dullButton":"uploadButton",onClick:function(){document.getElementById("selectImage").click(),l(!1)},children:Object(c.jsxs)("p",{children:[" ",""===s?"Upload an":"Replace with another"," image from your computer"]})}),Object(c.jsx)("div",{className:s?"dullButton":"uploadButton",onClick:function(){l(!0),r(""),i("")},children:Object(c.jsxs)("p",{children:[" ",""===s?"Take a picture":"Replace with another"," from your camera"]})})]})]})},g=n(10),f=n(11),m=function(e){var t=e.processed_image;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Processed image"}),Object(c.jsx)("img",{id:"rightImage",alt:t,src:t}),Object(c.jsx)("a",{style:{textDecoration:"none",color:"black"},href:t,target:"_blank",download:!0,children:Object(c.jsx)("div",{className:"uploadButton",children:Object(c.jsxs)("p",{children:["Download",Object(c.jsx)(g.a,{icon:f.b,style:{color:"grey",fontSize:"14pt",paddingLeft:"15px"}})]})})})]})},x=n(29),v=n.n(x),k=function(){var e=Object(s.useState)("."),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){var e=setInterval((function(){return n.length>3?r("."):r(n+".")}),500);return function(){return clearInterval(e)}})),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Processing ",n]}),Object(c.jsx)(v.a,{type:"Circles",color:"#00BFFF",height:100,width:100})]})},w=n(15),N=n(30),y=n.n(N),B={facingMode:"user",height:400},C=function(e){var t=e.setFile,n=e.setTakingOne,s=r.a.useRef(null),i=r.a.useCallback((function(){var e=s.current.getScreenshot();fetch(e).then((function(e){return e.blob()})).then((function(e){var n=new File([e],"webcam_file"+Math.random().toString(36).substr(2,8)+".png",{type:"image/png"});t(n)})),n(!1)}),[s]);return Object(c.jsxs)("div",{children:[Object(c.jsx)(y.a,{ref:s,audio:!1,screenshotQuality:1,screenshotFormat:"image/png",videoConstraints:B}),Object(c.jsx)("div",{className:"uploadButton",onClick:i,children:"Take a photo"}),Object(c.jsx)("div",{className:"dullButton",onClick:function(){n(!1)},children:"Cancel"})]})};var F=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],a=r.a.useState(""),o=Object(l.a)(a,2),j=o[0],d=o[1],u=Object(s.useState)(null),h=Object(l.a)(u,2),b=h[0],p=h[1],x=Object(s.useState)(!1),v=Object(l.a)(x,2),N=v[0],y=v[1],B=Object(s.useState)(!1),F=Object(l.a)(B,2),I=F[0],P=F[1];return Object(c.jsx)(w.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Passport Photo Tool \ud83d\udcf7"}),null!==b?Object(c.jsx)("div",{className:"topPanel",children:Object(c.jsx)("div",{className:b.error?"notif error":"notif success",children:Object(c.jsx)("p",{children:b.message})})}):null,Object(c.jsx)("div",{className:"split leftPanel",children:Object(c.jsx)("div",{className:"centered",children:Object(c.jsx)(O,{loading:N,setLoading:y,file:j,setFile:d,processedImage:n,setProcessedImage:i,setNotif:p,setTakingOne:P})})}),n?Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"middleArrow",children:Object(c.jsx)(g.a,{icon:f.a,style:{color:"green",fontSize:"45pt"}})}),Object(c.jsx)("div",{className:"split rightPanel",children:Object(c.jsx)("div",{className:"centered",children:Object(c.jsx)(m,{processed_image:n})})})]}):Object(c.jsx)("div",{className:"split rightPanel",children:Object(c.jsx)("div",{className:"centered",children:I?Object(c.jsx)(C,{setFile:d,setTakingOne:P}):""===j?Object(c.jsx)("p",{children:"Upload or an image or take one from your camera to be processed"}):N?Object(c.jsx)(k,{}):Object(c.jsx)("p",{children:"Click on process to view results or replace the current selection"})})})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),I()}},[[85,1,2]]]);
//# sourceMappingURL=main.e0dbbf18.chunk.js.map