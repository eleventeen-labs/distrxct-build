(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5660:function(e,n,t){Promise.resolve().then(t.t.bind(t,2559,23)),Promise.resolve().then(t.t.bind(t,3403,23)),Promise.resolve().then(t.bind(t,9319))},4571:function(e,n,t){"use strict";t.d(n,{default:function(){return l.a}});var r=t(3403),l=t.n(r)},9319:function(e,n,t){"use strict";t.d(n,{default:function(){return d}});var r=t(7949),l=t(7737),s=t(8678),i=t(6265);let c=[,,,].fill({image:(0,s.s)("/assets/images/home-slides/slide-1.jpg"),title:"Best Place Around Lagos",link:{href:"/",text:"Discover"},collectionsCount:16});var a=t(6270),o=t(746),u=t(4571),f=t(9269);function d(){let{sidebarIsVisible:e}=(0,f.Z)(),[n,t]=(0,l.Z)({loop:!0}),[d,m]=(0,i.useState)(0),[h,p]=(0,i.useState)([]),x=(0,i.useCallback)(e=>{t&&t.scrollTo(e)},[t]),g=(0,i.useCallback)(e=>{p(e.scrollSnapList())},[]),v=(0,i.useCallback)(e=>{m(e.selectedScrollSnap())},[]);return(0,i.useEffect)(()=>{t&&(g(t),v(t),t.on("reInit",g).on("reInit",v).on("select",v))},[t,g,v]),(0,r.jsx)("div",{className:(0,s.cn)("p-4",e?"max-lg:hidden":"max-md:hidden"),children:(0,r.jsxs)("div",{className:"relative overflow-hidden rounded-xl",children:[(0,r.jsx)("div",{className:"overflow-hidden",ref:n,children:(0,r.jsx)("div",{className:"flex",children:c.map((e,n)=>(0,r.jsxs)("div",{className:(0,s.cn)("relative","flex-grow-0 flex-shrink-0 basis-full"),draggable:!1,children:[(0,r.jsx)("img",{src:e.image,className:(0,s.cn)("h-72 w-full","bg-neutral-100","object-cover object-center"),alt:e.title}),(0,r.jsxs)("div",{className:(0,s.cn)("absolute inset-0","flex flex-col gap-4 items-center justify-center","text-white bg-black/70","px-12"),children:[(0,r.jsxs)("div",{className:"flex flex-col-reverse items-center justify-center text-center",children:[(0,r.jsx)("h3",{className:"text-3xl",children:e.title}),(0,r.jsxs)("p",{children:[e.collectionsCount," Collections"]})]}),(0,r.jsx)(a.Z,{asChild:!0,className:"inline-flex items-center gap-2 px-10",children:(0,r.jsxs)(u.default,{href:e.link.href,children:[e.link.text," ",(0,r.jsx)(o.mR2,{})]})})]})]},n))})}),(0,r.jsx)("div",{className:(0,s.cn)("absolute bottom-4","flex w-full gap-1 items-center justify-center"),children:Array(c.length).fill().map((e,n)=>(0,r.jsx)("span",{className:(0,s.cn)("bg-white","rounded-full","transition-all","duration-500",n===d?["w-4 h-4 opacity-100"]:["w-8 h-2 opacity-50"]),onClick:()=>x(n)},n))}),[{icon:o.PSe,onClick:()=>t.scrollPrev(),className:"left-10"},{icon:o.yoF,onClick:()=>t.scrollNext(),className:"right-10"}].map((e,n)=>{let{icon:t,...l}=e;return(0,r.jsx)("button",{...l,className:(0,s.cn)("absolute -translate-y-1/2 top-1/2","p-1 rounded-full bg-white",l.className),children:(0,r.jsx)(t,{className:"w-4 h-4"})},n)})]})})}},6270:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(7949),l=t(9),s=t(8678);function i(e){let{asChild:n=!1,...t}=e,i=n?l.g7:"button";return(0,r.jsx)(i,{...t,className:(0,s.cn)("px-4 py-2 rounded-lg","bg-gradient-to-tr","bg-green-600 text-white","from-green-700 to-green-500",t.className)})}},4994:function(e,n,t){"use strict";let r=(0,t(6265).createContext)();n.Z=r},9269:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(4994),l=t(6265);function s(){return(0,l.useContext)(r.Z)}},8678:function(e,n,t){"use strict";t.d(n,{cn:function(){return i},s:function(){return c}});var r=t(6491),l=t(8487),s=t(979);function i(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,l.m6)((0,r.W)(n))}function c(e){return(s.env.NEXT_BASE_PATH||"").replace(/\/*$/,"")+"/"+e.replace(/^\/*/,"")}},3263:function(e,n,t){"use strict";t.d(n,{F:function(){return l},e:function(){return s}});var r=t(6265);function l(...e){return n=>e.forEach(e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)})}function s(...e){return r.useCallback(l(...e),e)}},9:function(e,n,t){"use strict";t.d(n,{g7:function(){return i}});var r=t(6265),l=t(3263),s=t(7949),i=r.forwardRef((e,n)=>{let{children:t,...l}=e,i=r.Children.toArray(t),a=i.find(o);if(a){let e=a.props.children,t=i.map(n=>n!==a?n:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,s.jsx)(c,{...l,ref:n,children:r.isValidElement(e)?r.cloneElement(e,void 0,t):null})}return(0,s.jsx)(c,{...l,ref:n,children:t})});i.displayName="Slot";var c=r.forwardRef((e,n)=>{let{children:t,...s}=e;if(r.isValidElement(t)){let e,i;let c=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return r.cloneElement(t,{...function(e,n){let t={...n};for(let r in n){let l=e[r],s=n[r];/^on[A-Z]/.test(r)?l&&s?t[r]=(...e)=>{s(...e),l(...e)}:l&&(t[r]=l):"style"===r?t[r]={...l,...s}:"className"===r&&(t[r]=[l,s].filter(Boolean).join(" "))}return{...e,...t}}(s,t.props),ref:n?(0,l.F)(n,c):c})}return r.Children.count(t)>1?r.Children.only(null):null});c.displayName="SlotClone";var a=({children:e})=>(0,s.jsx)(s.Fragment,{children:e});function o(e){return r.isValidElement(e)&&e.type===a}}},function(e){e.O(0,[723,559,403,607,737,47,623,744],function(){return e(e.s=5660)}),_N_E=e.O()}]);