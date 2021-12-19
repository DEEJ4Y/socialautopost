(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{9675:function(e,t,n){"use strict";var r=n(7294),s=n(5893);t.Z=function(e){var t=e.className,n=e.children,a=e.style,o=e.onClick,c=e.title,i=e.content,l=e.clickable,u=e.dataid,d=(0,r.useState)(!1),f=d[0],h=d[1];return(0,s.jsxs)("div",{className:l?f?"shadow border pe-auto clickable rounded p-3 ".concat(t):"shadow-sm border pe-auto clickable rounded p-3 ".concat(t):"shadow-sm border pe-auto rounded p-3 ".concat(t),style:a||{},onClick:o||function(){},onMouseEnter:function(){h(!0)},onMouseLeave:function(){h(!1)},dataid:u||"none",children:[(0,s.jsx)("h5",{className:i?"":"my-0",children:c||""}),i?(0,s.jsx)("p",{children:i||""}):"",n]})}},5564:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.style,n=e.variant,s=e.size;return(0,r.jsx)("div",{className:"d-flex justify-content-center",style:t,children:(0,r.jsx)("div",{className:"spinner-border text-".concat(n||"primary"," ").concat(s?"spinner-border-".concat(s):""),role:"status",children:(0,r.jsx)("span",{className:"sr-only visually-hidden",children:"Loading..."})})})}},5688:function(e,t,n){"use strict";var r=n(9276),s=n(5564),a=n(5893);t.Z=function(e){var t=e.body,n=e.heading,o=e.loading,c=e.onClose,i=e.variant;return(0,a.jsxs)(r.Z,{bg:"light",onClose:c||function(){},children:[(0,a.jsxs)(r.Z.Header,{children:[(0,a.jsx)("strong",{className:"me-auto",children:n||""}),o?(0,a.jsx)(s.Z,{variant:"secondary",size:"sm"}):""]}),(0,a.jsx)(r.Z.Body,{children:(0,a.jsx)("p",{className:"text-".concat(i," mb-0"),children:t||""})})]})}},6405:function(e,t,n){"use strict";var r=n(5861),s=n(7757),a=n.n(s),o=n(1664),c=n(682),i=n(5005),l=n(8295),u=n(4489),d=n(2021),f=n(7294),h=n(7672),m=n(5688),p=n(5893);t.Z=function(){var e=(0,f.useState)(""),t=e[0],n=e[1],s=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n((function(){return(0,p.jsx)(m.Z,{heading:"Logging you out",body:"Please wait while we create an account for you.",variant:"primary",loading:!0,onClose:function(){return n("")}})})),e.prev=1,e.next=4,fetch("".concat(h.apiUrl,"/auth/logout"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:!0===e.sent.success&&(window.location.href="/auth/sign-in"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0),n((function(){return(0,p.jsx)(m.Z,{heading:"Error!",body:"Something went wrong while logging you out. Please try again later.",variant:"danger",onClose:function(){return n("")}})}));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{id:"top",children:[(0,p.jsx)(d.Z,{position:"bottom-end",className:"p-4",children:t}),(0,p.jsx)(l.Z,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",children:(0,p.jsxs)(c.Z,{fluid:!0,children:[(0,p.jsx)(l.Z.Brand,{href:"/",children:(0,p.jsx)("img",{src:"/socialautopost.png",alt:"logo",style:{mixBlendMode:"multiply"}})}),(0,p.jsx)(l.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,p.jsxs)(l.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,p.jsx)(u.Z,{className:"me-auto",children:(0,p.jsx)(o.default,{passHref:!0,href:"/dashboard",children:(0,p.jsx)(u.Z.Link,{children:"My Projects"})})}),(0,p.jsx)(u.Z,{children:(0,p.jsx)(u.Z.Link,{children:(0,p.jsx)(i.Z,{variant:"outline-primary",onClick:s,children:"Log out"})})})]})]})})]})}},1834:function(e,t,n){"use strict";var r=n(9008),s=n(5893);t.Z=function(e){var t=e.title,n=e.description,a=e.url,o=e.image,c=e.robots,i=e.children;return(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:t||"socialautopost"}),(0,s.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,s.jsx)("meta",{name:"robots",content:c||"all"}),(0,s.jsx)("meta",{name:"description",content:n||"Create an account and start making templates!"}),(0,s.jsx)("meta",{name:"og:title",content:t||"socialautopost"}),(0,s.jsx)("meta",{name:"og:description",content:n||"Create an account and start making templates!"}),(0,s.jsx)("meta",{name:"og:url",content:a||"socialautopost.herokuapp.com"}),(0,s.jsx)("meta",{name:"og:image",content:o||"/logo.png"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Asap&display=swap",rel:"stylesheet"}),i]})}},6272:function(e,t,n){"use strict";n.r(t);var r=n(5861),s=n(7757),a=n.n(s),o=n(1664),c=n(7294),i=n(7672),l=n(5005),u=n(682),d=n(2021),f=n(6405),h=n(9675),m=n(1834),p=n(5564),x=n(5688),j=n(5893);t.default=function(){var e=(0,c.useContext)(i.UserContext),t=((0,c.useContext)(i.ProjectContext),(0,c.useState)([])),n=t[0],s=t[1],v=(0,c.useState)(!1),g=v[0],b=v[1],y=(0,c.useState)(""),w=y[0],Z=y[1],N=(0,c.useRef)((function(){}));return(0,c.useEffect)((function(){N.current()}),[]),N.current=(0,r.Z)(a().mark((function t(){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Z((function(){return(0,j.jsx)(x.Z,{heading:"Just a sec",body:"Please wait while we fetch your projects.",loading:!0,onClose:function(){Z((function(){return""}))}})})),t.next=4,fetch("".concat(i.apiUrl,"/projects"),{method:"GET",credentials:"include"});case 4:if(200!=(n=t.sent).status){t.next=12;break}return t.next=8,n.json();case 8:!0===(r=t.sent).success&&(s((function(){return r.data})),b(!0),Z(""),e.setUserToken(r.userToken)),t.next=13;break;case 12:401==n.status&&(window.location.href="/auth/sign-in?redirect=/dashboard");case 13:t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),b(!0),Z((function(){return(0,j.jsx)(x.Z,{variant:"danger",heading:"Oops!",body:"We couldn't fetch your projects. Please refresh the page and we'll try again.",onClose:function(){Z((function(){return""}))}})}));case 19:case"end":return t.stop()}}),t,null,[[0,15]])}))),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(m.Z,{title:"Dashboard",description:"Make and manage your templates.",robots:"nofollow"}),(0,j.jsx)(f.Z,{}),(0,j.jsxs)(u.Z,{className:"p-4",fluid:!0,children:[(0,j.jsx)(d.Z,{position:"bottom-end",className:"p-4",children:w}),g?0===n.length?(0,j.jsxs)("div",{className:"text-center pt-4",children:[(0,j.jsx)("h1",{className:"mb-4",children:"My Projects"}),(0,j.jsx)("p",{className:"text-secondary",children:"Start out by creating a new project."}),(0,j.jsx)(o.default,{passHref:!0,href:"/projects/create",children:(0,j.jsx)(l.Z,{size:"lg",variant:"primary",children:"Create a Project"})})]}):(0,j.jsxs)("div",{className:"pt-4",children:[(0,j.jsxs)("div",{className:"mb-4",children:[(0,j.jsx)("h1",{className:"mb-4 d-inline",children:"My Projects"}),(0,j.jsx)("span",{className:"float-end",children:(0,j.jsx)(o.default,{passHref:!0,href:"/projects/create",children:(0,j.jsx)(l.Z,{children:"Add"})})})]}),(0,j.jsx)("div",{className:"row",children:n.map((function(e,t){return(0,j.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:(0,j.jsx)(o.default,{passHref:!0,href:"/projects/".concat(e.id,"/?name=").concat(e.name),children:(0,j.jsx)(h.Z,{className:"my-2",title:e.name,clickable:!0,dataid:e.id})})},"dash-project-".concat(t))}))})]}):(0,j.jsx)(p.Z,{style:{marginTop:"40vh"}})]})]})}},9704:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(6272)}])},9276:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(7294),s=n(4036),a=n.n(s);function o(e){var t=function(e){var t=(0,r.useRef)(e);return t.current=e,t}(e);(0,r.useEffect)((function(){return function(){return t.current()}}),[])}var c=Math.pow(2,31)-1;function i(e,t,n){var r=n-Date.now();e.current=r<=c?setTimeout(t,r):setTimeout((function(){return i(e,t,n)}),c)}function l(){var e=function(){var e=(0,r.useRef)(!0),t=(0,r.useRef)((function(){return e.current}));return(0,r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=(0,r.useRef)();return o((function(){return clearTimeout(t.current)})),(0,r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,s){void 0===s&&(s=0),e()&&(n(),s<=c?t.current=setTimeout(r,s):i(t,r,Date.now()+s))},clear:n}}),[])}var u=n(8972),d=n(1068),f=n(5893);const h={[u.d0]:"showing",[u.Ix]:"showing show"},m=r.forwardRef(((e,t)=>(0,f.jsx)(d.Z,{...e,ref:t,transitionClasses:h})));m.displayName="ToastFade";var p=m,x=n(6895),j=n(600),v=n(1485);var g=r.createContext({onClose(){}});const b=r.forwardRef((({bsPrefix:e,closeLabel:t,closeVariant:n,closeButton:s,className:o,children:c,...i},l)=>{e=(0,j.vE)(e,"toast-header");const u=(0,r.useContext)(g),d=(0,x.Z)((e=>{null==u||null==u.onClose||u.onClose(e)}));return(0,f.jsxs)("div",{ref:l,...i,className:a()(e,o),children:[c,s&&(0,f.jsx)(v.Z,{"aria-label":t,variant:n,onClick:d,"data-dismiss":"toast"})]})}));b.displayName="ToastHeader",b.defaultProps={closeLabel:"Close",closeButton:!0};var y=b,w=(0,n(4680).Z)("toast-body");const Z=r.forwardRef((({bsPrefix:e,className:t,transition:n=p,show:s=!0,animation:o=!0,delay:c=5e3,autohide:i=!1,onClose:u,bg:d,...h},m)=>{e=(0,j.vE)(e,"toast");const x=(0,r.useRef)(c),v=(0,r.useRef)(u);(0,r.useEffect)((()=>{x.current=c,v.current=u}),[c,u]);const b=l(),y=!(!i||!s),w=(0,r.useCallback)((()=>{y&&(null==v.current||v.current())}),[y]);(0,r.useEffect)((()=>{b.set(w,x.current)}),[b,w]);const Z=(0,r.useMemo)((()=>({onClose:u})),[u]),N=!(!n||!o),C=(0,f.jsx)("div",{...h,ref:m,className:a()(e,t,d&&`bg-${d}`,!N&&(s?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return(0,f.jsx)(g.Provider,{value:Z,children:N&&n?(0,f.jsx)(n,{in:s,unmountOnExit:!0,children:C}):C})}));Z.displayName="Toast";var N=Object.assign(Z,{Body:w,Header:y})},2021:function(e,t,n){"use strict";var r=n(4036),s=n.n(r),a=n(7294),o=n(600),c=n(5893);const i={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},l=a.forwardRef((({bsPrefix:e,position:t,className:n,as:r="div",...a},l)=>(e=(0,o.vE)(e,"toast-container"),(0,c.jsx)(r,{ref:l,...a,className:s()(e,t&&`position-absolute ${i[t]}`,n)}))));l.displayName="ToastContainer",t.Z=l},5861:function(e,t,n){"use strict";function r(e,t,n,r,s,a,o){try{var c=e[a](o),i=c.value}catch(l){return void n(l)}c.done?t(i):Promise.resolve(i).then(r,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,a){var o=e.apply(t,n);function c(e){r(o,s,a,c,i,"next",e)}function i(e){r(o,s,a,c,i,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return s}})}},function(e){e.O(0,[774,598,849,888,179],(function(){return t=9704,e(e.s=t);var t}));var t=e.O();_N_E=t}]);