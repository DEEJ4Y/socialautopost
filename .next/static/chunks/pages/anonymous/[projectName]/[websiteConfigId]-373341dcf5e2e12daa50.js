(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933],{3887:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(5861),a=r(8152),s=r(7757),o=r.n(s),i=r(1163),l=r(7294),c=r(8375),u=r(5005),d=r(3795),f=r(7672);function m(){return(m=(0,n.Z)(o().mark((function e(t){var r,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.confession,n=t.projectId,a=t.callback,e.prev=1,e.next=4,fetch("".concat(f.apiUrl,"/confessions"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({confession:r,project:n})});case 4:if(201!==e.sent.status){e.next=9;break}a(),e.next=10;break;case 9:return e.abrupt("return",!1);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.websiteConfigId,e.prev=1,e.next=4,fetch("".concat(f.apiUrl,"/websiteConfigs/").concat(r));case 4:if(200!==(n=e.sent).status){e.next=9;break}return e.abrupt("return",n.json());case 9:window.location.href="/page-not-found";case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}var h=r(5893);function x(){var e=(0,i.useRouter)(),t=l.useState(!1),r=(0,a.Z)(t,2),s=r[0],f=r[1],v=l.useState(!1),x=(0,a.Z)(v,2),b=x[0],y=x[1],g=l.useState(""),w=(0,a.Z)(g,2),N=w[0],j=w[1],Z=l.useState({display:!1,variant:"danger",message:""}),C=(0,a.Z)(Z,2),k=C[0],I=C[1],$=l.useRef((function(){}));l.useEffect((function(){if(e&&e.query){var t=e.query.websiteConfigId;t&&$.current(t)}}),[e,e.query]),$.current=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p({websiteConfigId:t});case 2:(r=e.sent).data&&(!1===r.data.visibility?window.location.href="/page-not-found":(f((function(){return r.data})),y((function(){return r.data.backgroundImage.imageData}))));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var F=function(){0===N.length?I((function(){return{display:!0,variant:"danger",message:"Please add some text."}})):(I((function(){return{display:!0,variant:"primary",message:"Submitting"}})),function(e){m.apply(this,arguments)}({confession:N,projectId:s.project.id,callback:function(){I((function(){return{display:!0,variant:"success",message:"Submitted successfully!"}})),j((function(){return""}))}}))};return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{style:{backgroundImage:"url(".concat(b,")"),width:"100vw",height:"100vh",backgroundSize:"cover"},children:(0,h.jsx)("div",{style:{width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,h.jsx)("div",{style:{maxWidth:"48rem",margin:"0 auto",padding:"1rem",display:"flex",height:"100%",flexDirection:"column",justifyContent:"center"},children:(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"text-center mb-4",style:{color:s.titleFontColor},children:s.title}),(0,h.jsx)("p",{className:"text-start mb-0",style:{color:s.messageFontColor},children:s.message}),(0,h.jsx)(d.Z.Control,{as:"textarea",rows:1,style:{maxHeight:"12rem",overflowY:"scroll"},value:N,onChange:function(e){var t=e.target.value;j((function(){return t.substring(0,s.project.template.maxCharacters)}))}}),(0,h.jsxs)("p",{className:"small text-secondary mb-0",children:["Maximum character count:"," ",s?s.project.template.maxCharacters:""]}),k.display?(0,h.jsx)(c.Z,{variant:k.variant,children:k.message}):"",(0,h.jsx)(u.Z,{className:"float-end",variant:"light",onClick:function(){F()},children:"Submit"})]})})})})})}},9845:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/anonymous/[projectName]/[websiteConfigId]",function(){return r(3887)}])},1163:function(e,t,r){e.exports=r(4651)},8375:function(e,t,r){"use strict";var n=r(4036),a=r.n(n),s=r(7294),o=r(8523),i=r(6895),l=r(5520),c=r(600),u=r(1068),d=r(1485),f=r(9602),m=r(4680),p=r(5893);const v=(0,f.Z)("h4");v.displayName="DivStyledAsH4";const h=(0,m.Z)("alert-heading",{Component:v}),x=(0,m.Z)("alert-link",{Component:l.Z}),b={variant:"primary",show:!0,transition:u.Z,closeLabel:"Close alert"},y=s.forwardRef(((e,t)=>{const{bsPrefix:r,show:n,closeLabel:s,closeVariant:l,className:f,children:m,variant:v,onClose:h,dismissible:x,transition:b,...y}=(0,o.Ch)(e,{show:"onClose"}),g=(0,c.vE)(r,"alert"),w=(0,i.Z)((e=>{h&&h(!1,e)})),N=!0===b?u.Z:b,j=(0,p.jsxs)("div",{role:"alert",...N?void 0:y,ref:t,className:a()(f,g,v&&`${g}-${v}`,x&&`${g}-dismissible`),children:[x&&(0,p.jsx)(d.Z,{onClick:w,"aria-label":s,variant:l}),m]});return N?(0,p.jsx)(N,{unmountOnExit:!0,...y,ref:void 0,in:n,children:j}):n?j:null}));y.displayName="Alert",y.defaultProps=b,t.Z=Object.assign(y,{Link:x,Heading:h})},3818:function(e,t,r){"use strict";var n=r(4036),a=r.n(n),s=r(7294),o=r(5697),i=r.n(o),l=r(5893);const c={type:i().string,tooltip:i().bool,as:i().elementType},u=s.forwardRef((({as:e="div",className:t,type:r="valid",tooltip:n=!1,...s},o)=>(0,l.jsx)(e,{...s,ref:o,className:a()(t,`${r}-${n?"tooltip":"feedback"}`)})));u.displayName="Feedback",u.propTypes=c,t.Z=u},3795:function(e,t,r){"use strict";r.d(t,{Z:function(){return A}});var n=r(4036),a=r.n(n),s=r(5697),o=r.n(s),i=r(7294),l=r(3818),c=r(6558),u=r(1377),d=r(600),f=r(5893);const m=i.forwardRef((({bsPrefix:e,className:t,htmlFor:r,...n},s)=>{const{controlId:o}=(0,i.useContext)(u.Z);return e=(0,d.vE)(e,"form-check-label"),(0,f.jsx)("label",{...n,ref:s,htmlFor:r||o,className:a()(t,e)})}));m.displayName="FormCheckLabel";var p=m;const v=i.forwardRef((({id:e,bsPrefix:t,bsSwitchPrefix:r,inline:n=!1,disabled:s=!1,isValid:o=!1,isInvalid:m=!1,feedbackTooltip:v=!1,feedback:h,feedbackType:x,className:b,style:y,title:g="",type:w="checkbox",label:N,children:j,as:Z="input",...C},k)=>{t=(0,d.vE)(t,"form-check"),r=(0,d.vE)(r,"form-switch");const{controlId:I}=(0,i.useContext)(u.Z),$=(0,i.useMemo)((()=>({controlId:e||I})),[I,e]),F=null!=N&&!1!==N&&!j,P=(0,f.jsx)(c.Z,{...C,type:"switch"===w?"checkbox":w,ref:k,isValid:o,isInvalid:m,disabled:s,as:Z});return(0,f.jsx)(u.Z.Provider,{value:$,children:(0,f.jsx)("div",{style:y,className:a()(b,N&&t,n&&`${t}-inline`,"switch"===w&&r),children:j||(0,f.jsxs)(f.Fragment,{children:[P,F&&(0,f.jsx)(p,{title:g,children:N}),h&&(0,f.jsx)(l.Z,{type:x,tooltip:v,children:h})]})})})}));v.displayName="FormCheck";var h=Object.assign(v,{Input:c.Z,Label:p}),x=r(4716),b=(0,r(4680).Z)("form-floating");const y=i.forwardRef((({controlId:e,as:t="div",...r},n)=>{const a=(0,i.useMemo)((()=>({controlId:e})),[e]);return(0,f.jsx)(u.Z.Provider,{value:a,children:(0,f.jsx)(t,{...r,ref:n})})}));y.displayName="FormGroup";var g=y;r(2473);const w=["xxl","xl","lg","md","sm","xs"];const N=i.forwardRef(((e,t)=>{const[{className:r,...n},{as:s="div",bsPrefix:o,spans:i}]=function({as:e,bsPrefix:t,className:r,...n}){t=(0,d.vE)(t,"col");const s=[],o=[];return w.forEach((e=>{const r=n[e];let a,i,l;delete n[e],"object"===typeof r&&null!=r?({span:a,offset:i,order:l}=r):a=r;const c="xs"!==e?`-${e}`:"";a&&s.push(!0===a?`${t}${c}`:`${t}${c}-${a}`),null!=l&&o.push(`order${c}-${l}`),null!=i&&o.push(`offset${c}-${i}`)})),[{...n,className:a()(r,...s,...o)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,f.jsx)(s,{...n,ref:t,className:a()(r,!i.length&&o)})}));N.displayName="Col";var j=N;const Z=i.forwardRef((({as:e="label",bsPrefix:t,column:r,visuallyHidden:n,className:s,htmlFor:o,...l},c)=>{const{controlId:m}=(0,i.useContext)(u.Z);t=(0,d.vE)(t,"form-label");let p="col-form-label";"string"===typeof r&&(p=`${p} ${p}-${r}`);const v=a()(s,t,n&&"visually-hidden",r&&p);return o=o||m,r?(0,f.jsx)(j,{ref:c,as:"label",className:v,htmlFor:o,...l}):(0,f.jsx)(e,{ref:c,className:v,htmlFor:o,...l})}));Z.displayName="FormLabel",Z.defaultProps={column:!1,visuallyHidden:!1};var C=Z;const k=i.forwardRef((({bsPrefix:e,className:t,id:r,...n},s)=>{const{controlId:o}=(0,i.useContext)(u.Z);return e=(0,d.vE)(e,"form-range"),(0,f.jsx)("input",{...n,type:"range",ref:s,className:a()(t,e),id:r||o})}));k.displayName="FormRange";var I=k;const $=i.forwardRef((({bsPrefix:e,size:t,htmlSize:r,className:n,isValid:s=!1,isInvalid:o=!1,id:l,...c},m)=>{const{controlId:p}=(0,i.useContext)(u.Z);return e=(0,d.vE)(e,"form-select"),(0,f.jsx)("select",{...c,size:r,ref:m,className:a()(n,e,t&&`${e}-${t}`,s&&"is-valid",o&&"is-invalid"),id:l||p})}));$.displayName="FormSelect";var F=$;const P=i.forwardRef((({bsPrefix:e,className:t,as:r="small",muted:n,...s},o)=>(e=(0,d.vE)(e,"form-text"),(0,f.jsx)(r,{...s,ref:o,className:a()(t,e,n&&"text-muted")}))));P.displayName="FormText";var S=P;const E=i.forwardRef(((e,t)=>(0,f.jsx)(h,{...e,ref:t,type:"switch"})));E.displayName="Switch";var R=Object.assign(E,{Input:h.Input,Label:h.Label});const O=i.forwardRef((({bsPrefix:e,className:t,children:r,controlId:n,label:s,...o},i)=>(e=(0,d.vE)(e,"form-floating"),(0,f.jsxs)(g,{ref:i,className:a()(t,e),controlId:n,...o,children:[r,(0,f.jsx)("label",{htmlFor:n,children:s})]}))));O.displayName="FloatingLabel";var T=O;const _={_ref:o().any,validated:o().bool,as:o().elementType},L=i.forwardRef((({className:e,validated:t,as:r="form",...n},s)=>(0,f.jsx)(r,{...n,ref:s,className:a()(e,t&&"was-validated")})));L.displayName="Form",L.propTypes=_;var A=Object.assign(L,{Group:g,Control:x.Z,Floating:b,Check:h,Switch:R,Label:C,Text:S,Range:I,Select:F,FloatingLabel:T})},6558:function(e,t,r){"use strict";var n=r(4036),a=r.n(n),s=r(7294),o=r(1377),i=r(600),l=r(5893);const c=s.forwardRef((({id:e,bsPrefix:t,className:r,type:n="checkbox",isValid:c=!1,isInvalid:u=!1,as:d="input",...f},m)=>{const{controlId:p}=(0,s.useContext)(o.Z);return t=(0,i.vE)(t,"form-check-input"),(0,l.jsx)(d,{...f,ref:m,type:n,id:e||p,className:a()(r,t,c&&"is-valid",u&&"is-invalid")})}));c.displayName="FormCheckInput",t.Z=c},1377:function(e,t,r){"use strict";const n=r(7294).createContext({});t.Z=n},4716:function(e,t,r){"use strict";var n=r(4036),a=r.n(n),s=r(7294),o=(r(2473),r(3818)),i=r(1377),l=r(600),c=r(5893);const u=s.forwardRef((({bsPrefix:e,type:t,size:r,htmlSize:n,id:o,className:u,isValid:d=!1,isInvalid:f=!1,plaintext:m,readOnly:p,as:v="input",...h},x)=>{const{controlId:b}=(0,s.useContext)(i.Z);let y;return e=(0,l.vE)(e,"form-control"),y=m?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${r}`]:r},(0,c.jsx)(v,{...h,type:t,size:n,ref:x,readOnly:p,id:o||b,className:a()(u,y,d&&"is-valid",f&&"is-invalid","color"===t&&`${e}-color`)})}));u.displayName="FormControl",t.Z=Object.assign(u,{Feedback:o.Z})},2473:function(e){"use strict";var t=function(){};e.exports=t},5861:function(e,t,r){"use strict";function n(e,t,r,n,a,s,o){try{var i=e[s](o),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,s){var o=e.apply(t,r);function i(e){n(o,a,s,i,l,"next",e)}function l(e){n(o,a,s,i,l,"throw",e)}i(void 0)}))}}r.d(t,{Z:function(){return a}})},8152:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);o=!0);}catch(l){i=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return s}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return a}})}},function(e){e.O(0,[774,598,888,179],(function(){return t=9845,e(e.s=t);var t}));var t=e.O();_N_E=t}]);