(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{9675:function(e,t,n){"use strict";var s=n(7294),r=n(5893);t.Z=function(e){var t=e.className,n=e.children,a=e.style,o=e.onClick,c=e.title,i=e.content,l=e.clickable,u=e.dataid,d=(0,s.useState)(!1),f=d[0],h=d[1];return(0,r.jsxs)("div",{className:l?f?"shadow border pe-auto clickable rounded p-3 ".concat(t):"shadow-sm border pe-auto clickable rounded p-3 ".concat(t):"shadow-sm border pe-auto rounded p-3 ".concat(t),style:a||{},onClick:o||function(){},onMouseEnter:function(){h(!0)},onMouseLeave:function(){h(!1)},dataid:u||"none",children:[(0,r.jsx)("h5",{className:i?"":"my-0",children:c||""}),i?(0,r.jsx)("p",{children:i||""}):"",n]})}},5564:function(e,t,n){"use strict";var s=n(5893);t.Z=function(e){var t=e.style,n=e.variant,r=e.size;return(0,s.jsx)("div",{className:"d-flex justify-content-center",style:t,children:(0,s.jsx)("div",{className:"spinner-border text-".concat(n||"primary"," ").concat(r?"spinner-border-".concat(r):""),role:"status",children:(0,s.jsx)("span",{className:"sr-only visually-hidden",children:"Loading..."})})})}},5688:function(e,t,n){"use strict";var s=n(9276),r=n(5564),a=n(5893);t.Z=function(e){var t=e.body,n=e.heading,o=e.loading,c=e.onClose,i=e.variant;return(0,a.jsxs)(s.Z,{bg:"light",onClose:c||function(){},children:[(0,a.jsxs)(s.Z.Header,{children:[(0,a.jsx)("strong",{className:"me-auto",children:n||""}),o?(0,a.jsx)(r.Z,{variant:"secondary",size:"sm"}):""]}),(0,a.jsx)(s.Z.Body,{children:(0,a.jsx)("p",{className:"text-".concat(i," mb-0"),children:t||""})})]})}},6405:function(e,t,n){"use strict";var s=n(5861),r=n(7757),a=n.n(r),o=n(1664),c=n(1163),i=n(682),l=n(5005),u=n(8295),d=n(4489),f=n(2021),h=n(7294),p=n(7672),m=n(5688),x=n(5893);t.Z=function(){var e=(0,c.useRouter)(),t=(0,h.useState)(""),n=t[0],r=t[1],j=function(){var t=(0,s.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r((function(){return(0,x.jsx)(m.Z,{heading:"Logging you out",body:"Please wait while we create an account for you.",variant:"primary",loading:!0,onClose:function(){return r("")}})})),t.prev=1,t.next=4,fetch("".concat(p.apiUrl,"/auth/logout"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:!0===t.sent.success&&e.push("/auth/sign-in"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.error(t.t0),r((function(){return(0,x.jsx)(m.Z,{heading:"Error!",body:"Something went wrong while logging you out. Please try again later.",variant:"danger",onClose:function(){return r("")}})}));case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}();return(0,x.jsxs)("div",{id:"top",children:[(0,x.jsx)(f.Z,{position:"bottom-end",className:"p-4",children:n}),(0,x.jsx)(u.Z,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",children:(0,x.jsxs)(i.Z,{fluid:!0,children:[(0,x.jsx)(o.default,{passHref:!0,href:"/",children:(0,x.jsx)(u.Z.Brand,{children:(0,x.jsx)("img",{src:"/socialautopost.png",alt:"logo",style:{mixBlendMode:"multiply"}})})}),(0,x.jsx)(u.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,x.jsxs)(u.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,x.jsx)(d.Z,{className:"me-auto",children:(0,x.jsx)(o.default,{passHref:!0,href:"/dashboard",children:(0,x.jsx)(d.Z.Link,{children:"My Projects"})})}),(0,x.jsx)(d.Z,{children:(0,x.jsx)(d.Z.Link,{children:(0,x.jsx)(l.Z,{variant:"outline-primary",onClick:j,children:"Log out"})})})]})]})})]})}},1834:function(e,t,n){"use strict";var s=n(9008),r=n(5893);t.Z=function(e){var t=e.title,n=e.description,a=e.url,o=e.image,c=e.robots,i=e.children;return(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:t||"socialautopost"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{name:"robots",content:c||"all"}),(0,r.jsx)("meta",{name:"description",content:n||"Create an account and start making templates!"}),(0,r.jsx)("meta",{name:"og:title",content:t||"socialautopost"}),(0,r.jsx)("meta",{name:"og:description",content:n||"Create an account and start making templates!"}),(0,r.jsx)("meta",{name:"og:url",content:a||"socialautopost.herokuapp.com"}),(0,r.jsx)("meta",{name:"og:image",content:o||"https://socialautopost.herokuapp.com/socialautopost.png"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Asap&display=swap",rel:"stylesheet"}),i]})}},6272:function(e,t,n){"use strict";n.r(t);var s=n(5861),r=n(7757),a=n.n(r),o=n(1664),c=n(1163),i=n(7294),l=n(7672),u=n(5005),d=n(682),f=n(2021),h=n(6405),p=n(9675),m=n(1834),x=n(5564),j=n(5688),v=n(5893);t.default=function(){var e=(0,c.useRouter)(),t=(0,i.useContext)(l.UserContext),n=((0,i.useContext)(l.ProjectContext),(0,i.useState)([])),r=n[0],g=n[1],b=(0,i.useState)(!1),y=b[0],w=b[1],Z=(0,i.useState)(""),N=Z[0],C=Z[1],k=(0,i.useRef)((function(){}));return(0,i.useEffect)((function(){k.current()}),[]),k.current=(0,s.Z)(a().mark((function n(){var s,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,C((function(){return(0,v.jsx)(j.Z,{heading:"Just a sec",body:"Please wait while we fetch your projects.",loading:!0,onClose:function(){C((function(){return""}))}})})),n.next=4,fetch("".concat(l.apiUrl,"/projects"),{method:"GET",credentials:"include"});case 4:if(200!=(s=n.sent).status){n.next=12;break}return n.next=8,s.json();case 8:!0===(r=n.sent).success&&(g((function(){return r.data})),w(!0),C(""),t.setUserToken(r.userToken)),n.next=13;break;case 12:401==s.status&&e.push("/auth/sign-in?redirect=/dashboard");case 13:n.next=19;break;case 15:n.prev=15,n.t0=n.catch(0),w(!0),C((function(){return(0,v.jsx)(j.Z,{variant:"danger",heading:"Oops!",body:"We couldn't fetch your projects. Please refresh the page and we'll try again.",onClose:function(){C((function(){return""}))}})}));case 19:case"end":return n.stop()}}),n,null,[[0,15]])}))),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m.Z,{title:"Dashboard",description:"Make and manage your templates.",robots:"nofollow"}),(0,v.jsx)(h.Z,{}),(0,v.jsxs)(d.Z,{className:"p-4",fluid:!0,children:[(0,v.jsx)(f.Z,{position:"bottom-end",className:"p-4",children:N}),y?0===r.length?(0,v.jsxs)("div",{className:"text-center pt-4",children:[(0,v.jsx)("h1",{className:"mb-4",children:"My Projects"}),(0,v.jsx)("p",{className:"text-secondary",children:"Start out by creating a new project."}),(0,v.jsx)(o.default,{passHref:!0,href:"/projects/create",children:(0,v.jsx)(u.Z,{size:"lg",variant:"primary",children:"Create a Project"})})]}):(0,v.jsxs)("div",{className:"pt-4",children:[(0,v.jsxs)("div",{className:"mb-4",children:[(0,v.jsx)("h1",{className:"mb-4 d-inline",children:"My Projects"}),(0,v.jsx)("span",{className:"float-end",children:(0,v.jsx)(o.default,{passHref:!0,href:"/projects/create",children:(0,v.jsx)(u.Z,{children:"Add"})})})]}),(0,v.jsx)("div",{className:"row",children:r.map((function(e,t){return(0,v.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:(0,v.jsx)(o.default,{passHref:!0,href:"/projects/".concat(e.id,"/?name=").concat(e.name),children:(0,v.jsx)(p.Z,{className:"my-2",title:e.name,clickable:!0,dataid:e.id})})},"dash-project-".concat(t))}))})]}):(0,v.jsx)(x.Z,{style:{marginTop:"40vh"}})]})]})}},9704:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(6272)}])},9276:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var s=n(7294),r=n(4036),a=n.n(r);function o(e){var t=function(e){var t=(0,s.useRef)(e);return t.current=e,t}(e);(0,s.useEffect)((function(){return function(){return t.current()}}),[])}var c=Math.pow(2,31)-1;function i(e,t,n){var s=n-Date.now();e.current=s<=c?setTimeout(t,s):setTimeout((function(){return i(e,t,n)}),c)}function l(){var e=function(){var e=(0,s.useRef)(!0),t=(0,s.useRef)((function(){return e.current}));return(0,s.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=(0,s.useRef)();return o((function(){return clearTimeout(t.current)})),(0,s.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(s,r){void 0===r&&(r=0),e()&&(n(),r<=c?t.current=setTimeout(s,r):i(t,s,Date.now()+r))},clear:n}}),[])}var u=n(8972),d=n(1068),f=n(5893);const h={[u.d0]:"showing",[u.Ix]:"showing show"},p=s.forwardRef(((e,t)=>(0,f.jsx)(d.Z,{...e,ref:t,transitionClasses:h})));p.displayName="ToastFade";var m=p,x=n(6895),j=n(600),v=n(1485);var g=s.createContext({onClose(){}});const b=s.forwardRef((({bsPrefix:e,closeLabel:t,closeVariant:n,closeButton:r,className:o,children:c,...i},l)=>{e=(0,j.vE)(e,"toast-header");const u=(0,s.useContext)(g),d=(0,x.Z)((e=>{null==u||null==u.onClose||u.onClose(e)}));return(0,f.jsxs)("div",{ref:l,...i,className:a()(e,o),children:[c,r&&(0,f.jsx)(v.Z,{"aria-label":t,variant:n,onClick:d,"data-dismiss":"toast"})]})}));b.displayName="ToastHeader",b.defaultProps={closeLabel:"Close",closeButton:!0};var y=b,w=(0,n(4680).Z)("toast-body");const Z=s.forwardRef((({bsPrefix:e,className:t,transition:n=m,show:r=!0,animation:o=!0,delay:c=5e3,autohide:i=!1,onClose:u,bg:d,...h},p)=>{e=(0,j.vE)(e,"toast");const x=(0,s.useRef)(c),v=(0,s.useRef)(u);(0,s.useEffect)((()=>{x.current=c,v.current=u}),[c,u]);const b=l(),y=!(!i||!r),w=(0,s.useCallback)((()=>{y&&(null==v.current||v.current())}),[y]);(0,s.useEffect)((()=>{b.set(w,x.current)}),[b,w]);const Z=(0,s.useMemo)((()=>({onClose:u})),[u]),N=!(!n||!o),C=(0,f.jsx)("div",{...h,ref:p,className:a()(e,t,d&&`bg-${d}`,!N&&(r?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return(0,f.jsx)(g.Provider,{value:Z,children:N&&n?(0,f.jsx)(n,{in:r,unmountOnExit:!0,children:C}):C})}));Z.displayName="Toast";var N=Object.assign(Z,{Body:w,Header:y})},2021:function(e,t,n){"use strict";var s=n(4036),r=n.n(s),a=n(7294),o=n(600),c=n(5893);const i={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},l=a.forwardRef((({bsPrefix:e,position:t,className:n,as:s="div",...a},l)=>(e=(0,o.vE)(e,"toast-container"),(0,c.jsx)(s,{ref:l,...a,className:r()(e,t&&`position-absolute ${i[t]}`,n)}))));l.displayName="ToastContainer",t.Z=l},5861:function(e,t,n){"use strict";function s(e,t,n,s,r,a,o){try{var c=e[a](o),i=c.value}catch(l){return void n(l)}c.done?t(i):Promise.resolve(i).then(s,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){s(o,r,a,c,i,"next",e)}function i(e){s(o,r,a,c,i,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,598,849,888,179],(function(){return t=9704,e(e.s=t);var t}));var t=e.O();_N_E=t}]);