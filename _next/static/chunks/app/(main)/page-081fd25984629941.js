(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{66007:function(e,r,i){Promise.resolve().then(i.bind(i,46416)),Promise.resolve().then(i.bind(i,4500)),Promise.resolve().then(i.bind(i,47347)),Promise.resolve().then(i.bind(i,94954)),Promise.resolve().then(i.t.bind(i,8139,23)),Promise.resolve().then(i.t.bind(i,69254,23)),Promise.resolve().then(i.bind(i,74525)),Promise.resolve().then(i.bind(i,77664)),Promise.resolve().then(i.bind(i,61579)),Promise.resolve().then(i.bind(i,36239)),Promise.resolve().then(i.bind(i,91424)),Promise.resolve().then(i.bind(i,38522)),Promise.resolve().then(i.bind(i,14294)),Promise.resolve().then(i.bind(i,23083))},74525:function(e,r,i){"use strict";i.r(r),i.d(r,{ConsultantBookingModal:function(){return I}});var t=i(28754),n=i(34105),a=i(16655),s=i(14487),o=i(90081),l=i(30802),c=i(73875),d=i(62002),u=i(45603),m=i(61216),g=i(7e4),p=i(90329),h=i(9107),v=i(32900),b=i(82459),f=i(46345),x=i(37319),y=i(72329),w=i(76548),D=i(42123),j=i(42899);i(9660);var k=i(90649),N=i(43955);i(82568);let S=d.u.map(e=>{let{category:r}=e;return r}),P=["12:00 AM","04:00 AM","02:00 AM","06:00 AM","08:00 AM","10:00 AM","12:00 PM","02:00 PM","04:00 PM","06:00 PM","08:00 PM","10:00 PM"],M=()=>{let e=[],r=new Date;for(let i=0;i<7;i++){let t=new Date(r.getTime());t.setDate(r.getDate()+i),e.push(t.toDateString())}return e},C=new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),E=N.Ry({fullName:N.Z_().trim().min(3,{message:"Name must be at least 3 characters."}).max(20,{message:"Name cannot exceed 20 characters."}).regex(/^[a-zA-Z0-9 ]+$/,{message:"Name must only include alphanumeric characters."}),email:N.Z_().trim().email(),message:N.Z_().trim().min(5,{message:"Message must be at least 5 characters."}).max(800,{message:"Message cannot exceed 800 characters."}),phoneNo:N.Z_().regex(C,{message:"Please provide a valid phone number."}).optional(),consultType:N.PG(e=>S.includes(e)),preferedTimeSlot:N.PG(e=>P.includes(e))});function A(){let[e,r]=(0,D.useState)(),[i,a]=(0,D.useState)([]);(0,D.useEffect)(()=>{(async()=>{let e=await (0,m.Vo)(),r=M();a([...e.map(e=>{let{preferedDate:r}=e;return new Date(r)}),...r.map(e=>new Date(e))])})()},[]);let{control:s,handleSubmit:o,reset:l}=(0,k.cI)({resolver:(0,g.F)(E),defaultValues:{fullName:"",email:"",message:"",phoneNo:"",consultType:"",preferedTimeSlot:""}}),c=async r=>{try{await (0,m.OG)({...r,preferedDate:null==e?void 0:e.toString()}),l(),console.log("new consultation added")}catch(e){console.log(e)}};return(0,t.jsxs)("form",{className:"grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10",onSubmit:o(c),children:[(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsx)(k.Qr,{name:"fullName",control:s,render:e=>{var r;let{field:i,fieldState:n}=e;return(0,t.jsx)(p.Y,{size:"lg",label:"Full Name",placeholder:"Enter your name",errorMessage:(null===(r=n.error)||void 0===r?void 0:r.message)||"",isInvalid:n.invalid,...i,classNames:{label:"text-base font-semibold",inputWrapper:["bg-background","data-[hover=true]:bg-background/40","group-data-[focus=true]:bg-background/40","border border-foreground/20"]}})}}),(0,t.jsx)(k.Qr,{name:"email",control:s,render:e=>{var r;let{field:i,fieldState:n}=e;return(0,t.jsx)(p.Y,{size:"lg",placeholder:"Enter your email",label:"Email Address",errorMessage:(null===(r=n.error)||void 0===r?void 0:r.message)||"",isInvalid:n.invalid,...i,classNames:{label:"text-base font-semibold",inputWrapper:["bg-background","data-[hover=true]:bg-background/40","group-data-[focus=true]:bg-background/40","border border-foreground/20"]}})}}),(0,t.jsx)(k.Qr,{name:"phoneNo",control:s,render:e=>{var r;let{field:i,fieldState:n}=e;return(0,t.jsx)(p.Y,{size:"lg",label:"Phone Number",placeholder:"Enter your phone number",errorMessage:(null===(r=n.error)||void 0===r?void 0:r.message)||"",isInvalid:n.invalid,...i,classNames:{label:"text-base font-semibold",inputWrapper:["bg-background","data-[hover=true]:bg-background/40","group-data-[focus=true]:bg-background/40","border border-foreground/20"]}})}}),(0,t.jsx)(k.Qr,{name:"consultType",control:s,render:e=>{var r;let{field:i,fieldState:n}=e;return(0,t.jsx)(f.g,{size:"lg",label:"Consultation Type",placeholder:"Select your consulation type",errorMessage:(null===(r=n.error)||void 0===r?void 0:r.message)||"",isInvalid:n.invalid,...i,classNames:{label:"text-base font-semibold",trigger:["bg-background","data-[hover=true]:bg-background/40","group-data-[focus=true]:bg-background/40","border border-foreground/20"]},children:S.map(e=>(0,t.jsx)(x.R,{value:e,children:e},e))})}}),(0,t.jsx)(k.Qr,{name:"message",control:s,render:e=>{var r;let{field:i,fieldState:n}=e;return(0,t.jsx)(h.Y,{size:"lg",minRows:8,label:"Message",placeholder:"Enter your message",errorMessage:(null===(r=n.error)||void 0===r?void 0:r.message)||"",isInvalid:n.invalid,...i,className:"text-base",classNames:{label:"text-base font-semibold",inputWrapper:["bg-background","data-[hover=true]:bg-background/40","group-data-[focus=true]:bg-background/40","border border-foreground/20"]}})}})]}),(0,t.jsxs)("div",{className:"space-y-10",children:[(0,t.jsx)("div",{className:"max-w-max rounded-2xl border border-foreground/20  bg-background data-[hover=true]:bg-background/40 group-data-[focus=true]:bg-background/40",children:(0,t.jsx)(j._W,{mode:"single",selected:e,onSelect:r,disabled:[{before:new Date},...i],showOutsideDays:!0})}),(0,t.jsx)("div",{children:(0,t.jsx)(k.Qr,{name:"preferedTimeSlot",control:s,render:e=>{var r;let{field:i,fieldState:n}=e;return(0,t.jsx)(v.X,{label:"Pick a Timeslot (GMT)",errorMessage:(null===(r=n.error)||void 0===r?void 0:r.message)||"",isInvalid:n.invalid,...i,children:(0,t.jsx)("div",{className:"grid max-w-max grid-cols-3 gap-4",children:P.map(e=>(0,t.jsx)(b.J,{value:e,classNames:{base:(0,u.cn)("flex [&>span]:hidden m-0 bg-background !text-foreground/60 transition-colors duaration-200 hover:border-primary items-center justify-center","cursor-pointer rounded-xl gap-4 px-3 py-2 border border-foreground/10","data-[selected=true]:bg-primary data-[selected=true]:border-primary")},children:e},e))})})}})}),(0,t.jsxs)("div",{className:"flex items-center justify-end gap-x-2 pt-2",children:[(0,t.jsx)(n.A,{type:"button",variant:"solid",startContent:(0,t.jsx)(y.Z,{size:16}),onClick:()=>{l()},className:"bg-gray-800",children:(0,t.jsx)("span",{children:"Clear"})}),(0,t.jsx)(n.A,{startContent:(0,t.jsx)(w.Z,{size:16}),type:"submit",color:"primary",className:"gradient-btn",children:(0,t.jsx)("span",{children:"Submit"})})]})]})]})}function I(){let{isOpen:e,onOpen:r,onOpenChange:i}=(0,a.q)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{fullWidth:!0,color:"primary",className:"gradient-btn-wide h-10 px-4 text-base font-semibold lg:h-14 lg:px-6 lg:text-xl",onPress:r,children:(0,t.jsx)("span",{children:"Book Your Free Consult"})}),(0,t.jsx)(s.R,{isOpen:e,onOpenChange:i,scrollBehavior:"outside",size:"5xl",classNames:{base:"bg-background/90 border border-foreground/10 backdrop-blur-md md:p-4 backdrop-saturate-150",body:"px-2 lg:px-4"},children:(0,t.jsxs)(o.A,{children:[(0,t.jsx)(l.k,{className:"text-2xl font-semibold",children:"Book a Free Consult"}),(0,t.jsx)(c.I,{children:(0,t.jsx)(A,{})})]})})]})}},77664:function(e,r,i){"use strict";i.r(r),i.d(r,{HeroCategories:function(){return u}});var t=i(28754),n=i(62002),a=i(5186),s=i(42123),o=e=>{let[r,i]=(0,s.useState)();return(0,s.useEffect)(()=>{let r=window.matchMedia(e),t=()=>i(!!r.matches);return t(),r.addEventListener("change",t),()=>r.removeEventListener("change",t)},[e]),r},l=i(65214),c=i(55216);let d=n.u.map(e=>{let{id:r,category:i,Icon:t}=e;return{id:r,category:i,Icon:t}});function u(){let e=(0,a.x)(d),r=o("(min-width:64em)");return(0,t.jsx)("div",{children:(0,t.jsx)(l.o,{hideScrollBar:!0,visibility:"both",size:25,children:(0,t.jsx)("div",{className:"-mt-[3.5rem] flex h-full max-h-[calc(3.5rem*4)] flex-col items-center overflow-hidden px-2 md:items-start",children:e.map((e,i)=>{let{id:n,category:a,Icon:s}=e;return(0,t.jsxs)(c.E.div,{className:"flex min-h-[3.5rem] items-center gap-x-3",layout:!0,initial:{fontSize:"1.5rem"},animate:2===i?{fontSize:r?"1.875rem":"1.35rem",color:"rgba(255,255,255, 0.9)"}:{fontSize:r?"1.5rem":"1.35rem",color:"rgba(255,255,255, 0.6)"},transition:{duration:.75,layout:{duration:.5}},children:[(0,t.jsx)(s,{className:"h-6 w-6 text-primary lg:h-7 lg:w-7"}),(0,t.jsx)("p",{children:a})]},n)})})})})}},61579:function(e,r,i){"use strict";i.r(r),i.d(r,{HeroImages:function(){return d}});var t=i(28754),n=i(62002),a=i(5186),s=i(65214),o=i(55216),l=i(38661);let c=n.u.map(e=>{let{id:r,categoryImage:i}=e;return{id:r,categoryImage:i}});function d(){let e=(0,a.x)(c);return(0,t.jsx)("section",{children:(0,t.jsx)(s.o,{orientation:"horizontal",visibility:"both",size:25,hideScrollBar:!0,className:"relative z-20 overflow-x-hidden",children:(0,t.jsx)("div",{className:"flex max-w-full -translate-x-[200%] items-center justify-start",children:e.map((e,r)=>{let{id:i,categoryImage:n}=e;return(0,t.jsx)(o.E.div,{className:"flex min-w-full items-center justify-center px-10 lg:px-0",layout:!0,animate:2===r?{opacity:1}:{opacity:0},transition:{duration:1,layout:{duration:.5}},children:(0,t.jsx)(l.default,{className:"object-fit aspect-square object-center md:w-[28rem]",alt:"hero image",src:n,height:300,width:300,quality:95,priority:!0})},i)})})})})}},36239:function(e,r,i){"use strict";i.r(r),i.d(r,{MotionDiv:function(){return a}});var t=i(28754),n=i(55216);function a(e){let{children:r,className:i,...a}=e;return(0,t.jsx)(n.E.div,{className:i,...a,children:r})}},91424:function(e,r,i){"use strict";i.r(r),i.d(r,{NewsletterForm:function(){return u}});var t=i(28754),n=i(61216),a=i(34105),s=i(90329),o=i(79720),l=i(42123),c=i(94060);let d=i(43955).Z_().email();function u(){let[e,r]=(0,l.useState)(""),i=async r=>{try{if(r.preventDefault(),!d.safeParse(e).success)return c.A.error("Please enter a valid email");await (0,n.IP)({email:e,date:new Date().toString()}),c.A.success("Yay, subscribed")}catch(e){c.A.error("Something went wrong")}};return(0,t.jsxs)("form",{className:"lg:items-scenter flex flex-col gap-4 sm:flex-row sm:gap-2",onSubmit:i,children:[(0,t.jsx)(s.Y,{startContent:(0,t.jsx)(o.Z,{}),placeholder:"example@email.com",classNames:{inputWrapper:"bg-background/40 border border-foreground/20 data-[hover=true]:bg-background/60 group-data-[focus=true]:bg-background/60 h-14",input:["placeholder:text-foreground/60 focus-visible:outline-none","data-[has-start-content=true]:ps-1.5","data-[has-end-content=true]:pe-1.5"]},value:e,onChange:e=>r(e.target.value.trim())}),(0,t.jsx)(a.A,{type:"submit",size:"lg",color:"primary",className:"text-base sm:h-auto",children:"Subscribe"})]})}},38522:function(e,r,i){"use strict";i.r(r),i.d(r,{PortfolioPost:function(){return a}});var t=i(28754),n=i(36022);function a(e){let{url:r}=e;return(0,t.jsx)("div",{className:"flex h-[34rem] items-center justify-center overflow-hidden rounded-2xl bg-white p-4 pt-7",children:(0,t.jsx)(n.InstagramEmbed,{url:r,className:"relative"})})}},14294:function(e,r,i){"use strict";i.r(r),i.d(r,{ServiceTabs:function(){return c}});var t=i(28754),n=i(4859);function a(e){let{name:r,serviceDescription:i}=e;return(0,t.jsxs)(n.w,{isBlurred:!0,classNames:{base:["dark:bg-background/60","backdrop-blur-md","backdrop-saturate-150","mb-5 p-6 border border-foreground/10 sm:break-inside-avoid md:p-8"]},children:[(0,t.jsx)("h3",{className:"pb-2 text-xl font-medium tracking-tight",children:r}),(0,t.jsx)("p",{className:"leading-relaxed text-foreground/60",children:i})]})}var s=i(62002),o=i(36569),l=i(51561);function c(){return(0,t.jsx)(o.n,{"aria-label":"services",color:"primary",size:"lg",radius:"full",fullWidth:!0,classNames:{tabList:["border border-foreground/10","bg-background/60","backdrop-blur-md","backdrop-saturate-150","overflow-x-scroll w-[calc(100dvw-1rem)] mx-auto","md:w-full md:justify-between","mb-2"],tab:"max-w-fit h-10 px-2 md:h-11 md:px-3 scroll-mx-[5rem]",tabContent:"group-data-[selected=true]:text-white"},children:s.u.map(e=>{let{category:r,Icon:i,services:n}=e;return(0,t.jsx)(l.r,{title:(0,t.jsxs)("div",{className:"flex items-center space-x-1.5",children:[(0,t.jsx)(i,{className:"h-5 w-5"}),(0,t.jsx)("span",{children:r})]}),children:(0,t.jsx)("div",{className:"gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3",children:n.map(e=>(0,t.jsx)(a,{...e},e.name))})},r)})})}},23083:function(e,r,i){"use strict";i.r(r),i.d(r,{Carousel:function(){return m},CarouselContent:function(){return g},CarouselItem:function(){return p},CarouselNext:function(){return v},CarouselPrevious:function(){return h}});var t=i(28754),n=i(45603),a=i(34105),s=i(67090),o=i(7241),l=i(14516),c=i(42123);let d=c.createContext(null);function u(){let e=c.useContext(d);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let m=c.forwardRef((e,r)=>{let{orientation:i="horizontal",opts:a,setApi:o,plugins:l,className:u,children:m,...g}=e,[p,h]=(0,s.Z)({...a,axis:"horizontal"===i?"x":"y"},l),[v,b]=c.useState(!1),[f,x]=c.useState(!1),y=c.useCallback(e=>{e&&(b(e.canScrollPrev()),x(e.canScrollNext()))},[]),w=c.useCallback(()=>{null==h||h.scrollPrev()},[h]),D=c.useCallback(()=>{null==h||h.scrollNext()},[h]),j=c.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),w()):"ArrowRight"===e.key&&(e.preventDefault(),D())},[w,D]);return c.useEffect(()=>{h&&o&&o(h)},[h,o]),c.useEffect(()=>{if(h)return y(h),h.on("reInit",y),h.on("select",y),()=>{null==h||h.off("select",y)}},[h,y]),(0,t.jsx)(d.Provider,{value:{carouselRef:p,api:h,opts:a,orientation:i||((null==a?void 0:a.axis)==="y"?"vertical":"horizontal"),scrollPrev:w,scrollNext:D,canScrollPrev:v,canScrollNext:f},children:(0,t.jsx)("div",{ref:r,onKeyDownCapture:j,className:(0,n.cn)("relative",u),role:"region","aria-roledescription":"carousel",...g,children:m})})});m.displayName="Carousel";let g=c.forwardRef((e,r)=>{let{className:i,...a}=e,{carouselRef:s,orientation:o}=u();return(0,t.jsx)("div",{ref:s,className:"overflow-hidden",children:(0,t.jsx)("div",{ref:r,className:(0,n.cn)("flex","horizontal"===o?"-ml-4":"-mt-4 flex-col",i),...a})})});g.displayName="CarouselContent";let p=c.forwardRef((e,r)=>{let{className:i,...a}=e,{orientation:s}=u();return(0,t.jsx)("div",{ref:r,role:"group","aria-roledescription":"slide",className:(0,n.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===s?"pl-4":"pt-4",i),...a})});p.displayName="CarouselItem";let h=c.forwardRef((e,r)=>{let{className:i,variant:s="outline",size:l="icon",...c}=e,{orientation:d,scrollPrev:m,canScrollPrev:g}=u();return(0,t.jsxs)(a.A,{ref:r,className:(0,n.cn)("absolute  h-8 w-8 rounded-full","horizontal"===d?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",i),disabled:!g,onClick:m,...c,children:[(0,t.jsx)(o.Z,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});h.displayName="CarouselPrevious";let v=c.forwardRef((e,r)=>{let{className:i,variant:s="outline",size:o="icon",...c}=e,{orientation:d,scrollNext:m,canScrollNext:g}=u();return(0,t.jsxs)(a.A,{ref:r,className:(0,n.cn)("absolute h-8 w-8 rounded-full","horizontal"===d?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",i),disabled:!g,onClick:m,...c,children:[(0,t.jsx)(l.Z,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Next slide"})]})});v.displayName="CarouselNext"},62002:function(e,r,i){"use strict";i.d(r,{u:function(){return c}});var t=i(62987),n=i(98974),a=i(25560),s=i(14699),o=i(54623),l=i(74139);let c=[{id:"771846b14a024",category:"Brand Building",categoryDescription:"Strengthen your brand identity with our expertise in Branding, Advertising Management, Development, Consulting, and Lead Generation.",Icon:t.Z,categoryImage:"/images/services/brand-building.webp",services:[{name:"Advertising Management",serviceDescription:"Optimize your ad campaigns with our Advertising Management expertise. We maximize your ROI across various advertising platforms."},{name:"Branding",serviceDescription:"Create a lasting brand identity with our Branding services. We develop logos, visual elements, and messaging that set you apart from the competition."},{name:"Brand Development",serviceDescription:"Grow your brand's influence and reputation through strategic Brand Development. We'll help you define your brand's unique story and purpose."},{name:"Business Consulting",serviceDescription:"Achieve your business goals with our expert Business Consulting. We offer valuable insights and strategies tailored to your industry."},{name:"Lead Generation",serviceDescription:"Drive quality leads to your business with our Lead Generation services. We implement targeted campaigns to boost your customer base."}]},{id:"cbf5e281a52bc",category:"Digital Marketing",categoryDescription:"Boost your online presence with our Digital Marketing services. We specialize in Influencer Marketing, SEO (On-Page, Off-Page, Keyword Research, Technical SEO, Competitor Analysis), Social Media Marketing (Management, Paid Promotion, Content Strategy), and Video Marketing (Promotion, SEO, YouTube Management).",categoryImage:"/images/services/digital-marketing.webp",Icon:n.Z,services:[{name:"Influencer Marketing",serviceDescription:"Amplify your brand's reach with Influencer Marketing. Collaborate with industry influencers to connect with your target audience effectively."},{name:"SEO",serviceDescription:"Elevate your online visibility with our SEO services, covering Off-Page SEO, On-Page SEO, Keyword Research, Technical SEO, Competitor Analysis, and comprehensive Full SEO Packages."},{name:"Social Media Marketing",serviceDescription:"Harness the power of social media with our Social Media Marketing services. We provide Social Media Management, Paid Social Media campaigns, Organic Social Promotions, Profile Setup & Integration, engaging Social Content, and strategic Social Media Strategy."},{name:"Video Marketing",serviceDescription:"Engage your audience through video with our Video Marketing services. We offer Video Promotion & Distribution, Video SEO, YouTube Channel Management, and in-depth Consultation & Audience Research."}]},{id:"50c04fd85b6b5",category:"Graphics & Design",categoryDescription:"Make an impact with our creative design solutions. We offer Logo Design, Website Design, Image Editing, T-Shirt Design, 3D Modeling, Social Media Graphics, and Vehicle Wraps.",categoryImage:"/images/services/graphics-&-design.webp",Icon:a.Z,services:[{name:"3D Modeling & Rendering",serviceDescription:"Bring your ideas to life with our 3D Modeling & Rendering services. Visualize products and concepts in stunning 3D detail."},{name:"Illustration",serviceDescription:"Enhance your visual content with custom Illustrations that add a unique touch to your projects."},{name:"Image Editing",serviceDescription:"Perfect your images with our Image Editing services, including Product Image Editing and Mockups for eCommerce and more."},{name:"Infographic",serviceDescription:"Convey complex information visually with our Infographic design. We transform data into engaging and easy-to-understand graphics."},{name:"Logo Design",serviceDescription:"Craft a memorable brand image with our Logo Design services. Our logos are designed to leave a lasting impression."},{name:"Social Media Design",serviceDescription:"Enhance your social media presence with eye-catching designs. We create engaging Social Posts & Banners, Thumbnails, Headers, and Covers."},{name:"T-Shirts & Merchandise",serviceDescription:"Boost your merch sales with custom T-Shirt, Hoodie, Sticker, Jersey, and Sportswear designs that resonate with your audience."},{name:"Vehicle Wrap Design",serviceDescription:"Make a bold statement on the road with our Vehicle Wrap Design. Transform your vehicle into a moving advertisement that turns heads."},{name:"Website Design",serviceDescription:"Create a stunning online presence with our Website Design service. We build user-friendly, visually appealing websites."}]},{id:"ce36fcaa0638f",category:"Programming & Tech",categoryDescription:"Empower your digital presence with our Programming & Tech expertise. We offer Website Development in platforms like WordPress, Shopify, and Wix, as well as Android App Development services.",categoryImage:"/images/services/programming-&-tech.webp",Icon:s.Z,services:[{name:"Android App Development",serviceDescription:"Turn your ideas into reality with our Android App Development service. We create innovative, user-friendly apps to meet your specific requirements."},{name:"Website Development",serviceDescription:"We specialize in crafting exceptional websites tailored to your needs, including WordPress, Shopify, and Wix development. Your online presence is in expert hands."}]},{id:"3d62ac0e9b12b",category:"Video & Animation",categoryDescription:"Tell your story through captivating visuals. Our Video & Animation services include Video Editing for ads, YouTube content, corporate videos, family and travel memories, weddings, and explainer videos. We also create Video Ads & Commercials tailored for various platforms like Facebook, Instagram, TikTok, YouTube, and more. Explore our Animated Explainers (2D, Whiteboard, 3D, Isometric), Social Media Videos, Logo Animation, and 3D Product Animation.",categoryImage:"/images/services/video-&-animation.webp",Icon:o.Z,services:[{name:"3D Product Animation",serviceDescription:"Showcase your products like never before with immersive 3D animations."},{name:"Animated Explainers",serviceDescription:"Simplify complex ideas with our Animated Explainers. Choose from 2D, Whiteboard, 3D, or Isometric animations to convey your message effectively."},{name:"Logo Animation",serviceDescription:"Make your logo come to life! Our Logo Animation service adds a dynamic touch to your brand identity."},{name:"Video Ads & Commercials",serviceDescription:"Boost your brand with targeted video ads. We create attention-grabbing content for Facebook, Instagram, TikTok, YouTube, Pinterest, LinkedIn, Twitter, and Snapchat."},{name:"Video Editing",serviceDescription:"Transform your raw footage into captivating videos. Our Video Editing service covers ads, YouTube content, corporate videos, family memories, weddings, and engaging explainer videos."},{name:"Social Media Videos",serviceDescription:"Elevate your social media presence with visually stunning videos tailored for various platforms."}]},{id:"d473723a10fca",category:"Writing & Translation",categoryDescription:"Communicate effectively with our Writing & Translation services. We offer Articles & Blog Posts, including SEO Writing, Lifestyle Blogs, Promotional Articles, and Bulk Articles. Additionally, we provide Product Descriptions, Website Content, Resume Writing, and Scriptwriting to enhance your written content.",categoryImage:"/images/services/writing-&-translation.webp",Icon:l.Z,services:[{name:"Articles & Blog Posts",serviceDescription:"Enhance your online presence with our Article & Blog Post writing. From SEO-rich content to lifestyle blogs, we create engaging articles that resonate with your audience."},{name:"Product Descriptions",serviceDescription:"Make your products stand out with compelling descriptions that drive sales."},{name:"Resume Writing",serviceDescription:"Land your dream job with a professionally crafted resume that highlights your strengths and achievements."},{name:"Scriptwriting",serviceDescription:"Bring your ideas to life on screen with our expert scriptwriting service. We create scripts that captivate and engage your audience."},{name:"Website Content",serviceDescription:"Craft a compelling online narrative with our Website Content writing. We'll ensure your website effectively communicates your brand."}]}]},15922:function(e,r,i){"use strict";i.d(r,{I:function(){return c},db:function(){return l}});var t=i(32721),n=i(84034),a=i(6536),s=i(75240);let o=(0,t.C6)().length?(0,t.Mq)():(0,t.ZF)({apiKey:"AIzaSyAM740D2p5QlwHRG2gn0NmVfeFssUIN8VE",authDomain:"thrivenvision-d1b49.firebaseapp.com",projectId:"thrivenvision-d1b49",storageBucket:"thrivenvision-d1b49.appspot.com",messagingSenderId:"958922869212",appId:"1:958922869212:web:8160a8059209bb38522719"});(0,s.cF)(o);let l=(0,a.ad)(o),c=(0,n.v0)(o)},5186:function(e,r,i){"use strict";i.d(r,{x:function(){return n}});var t=i(42123);let n=e=>{let[r,i]=(0,t.useState)(e);return(0,t.useEffect)(()=>{let e;let r=setInterval(()=>{i(r=>(e=r[0],[...r.slice(1)])),setTimeout(()=>{i(r=>[...r,e])},1e3)},3e3);return()=>clearInterval(r)},[]),r}},45603:function(e,r,i){"use strict";i.d(r,{cn:function(){return a}});var t=i(9447),n=i(75234);function a(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];return(0,n.m6)((0,t.W)(r))}},61216:function(e,r,i){"use strict";i.d(r,{IP:function(){return l},OG:function(){return s},Vo:function(){return o},te:function(){return a}});var t=i(15922),n=i(6536);i(75240);let a=async e=>{try{return await (0,n.ET)((0,n.hJ)(t.db,"portfolios"),e)}catch(e){console.log(e)}},s=async e=>await (0,n.ET)((0,n.hJ)(t.db,"consultations"),e),o=async()=>{let e=[];return(await (0,n.PL)((0,n.hJ)(t.db,"consultations"))).forEach(r=>{e.push({id:r.id,...r.data()})}),e},l=async e=>await (0,n.ET)((0,n.hJ)(t.db,"newsletter"),e)},82568:function(){}},function(e){e.O(0,[548,333,216,195,802,105,375,766,168,139,144,254,22,931,55,60,238,356,980,146,672,744],function(){return e(e.s=66007)}),_N_E=e.O()}]);