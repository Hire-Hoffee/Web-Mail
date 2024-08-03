import{b as c,s as V,F,u as I,c as j,j as u,a as n,S as B,L as _,d as A,e as N,i as z,t as T,f as W,g as G,h as q,k as H,l as J}from"./index-83829836.js";import{d as K,o as Q,f as U,r as X,t as Y,a as Z,b as tt,g as M,S as et,L as nt,c as it}from"./apiRequests-3fd706b8.js";var L=new Map,E=new WeakMap,O=0,rt=void 0;function at(t){return t?(E.has(t)||(O+=1,E.set(t,O.toString())),E.get(t)):"0"}function st(t){return Object.keys(t).sort().filter(function(i){return t[i]!==void 0}).map(function(i){return i+"_"+(i==="root"?at(t.root):t[i])}).toString()}function ot(t){var i=st(t),e=L.get(i);if(!e){var r=new Map,l,p=new IntersectionObserver(function(f){f.forEach(function(s){var d,o=s.isIntersecting&&l.some(function(h){return s.intersectionRatio>=h});t.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=o),(d=r.get(s.target))==null||d.forEach(function(h){h(o,s)})})},t);l=p.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:i,observer:p,elements:r},L.set(i,e)}return e}function dt(t,i,e,r){if(e===void 0&&(e={}),r===void 0&&(r=rt),typeof window.IntersectionObserver>"u"&&r!==void 0){var l=t.getBoundingClientRect();return i(r,{isIntersecting:r,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),function(){}}var p=ot(e),f=p.id,s=p.observer,d=p.elements,o=d.get(t)||[];return d.has(t)||d.set(t,o),o.push(i),s.observe(t),function(){o.splice(o.indexOf(i),1),o.length===0&&(d.delete(t),s.unobserve(t)),d.size===0&&(s.disconnect(),L.delete(f))}}function ct(t){var i,e=t===void 0?{}:t,r=e.threshold,l=e.delay,p=e.trackVisibility,f=e.rootMargin,s=e.root,d=e.triggerOnce,o=e.skip,h=e.initialInView,w=e.fallbackInView,x=e.onChange,b=c.exports.useState(null),v=b[0],k=b[1],S=c.exports.useRef(),$=c.exports.useState({inView:!!h,entry:void 0}),a=$[0],g=$[1];S.current=x,c.exports.useEffect(function(){if(!(o||!v)){var y;return y=dt(v,function(R,D){g({inView:R,entry:D}),S.current&&S.current(R,D),D.isIntersecting&&d&&y&&(y(),y=void 0)},{root:s,rootMargin:f,threshold:r,trackVisibility:p,delay:l},w),function(){y&&y()}}},[Array.isArray(r)?r.toString():r,v,s,f,d,o,p,w,l]);var C=(i=a.entry)==null?void 0:i.target;c.exports.useEffect(function(){!v&&C&&!d&&!o&&g({inView:!!h,entry:void 0})},[v,C,d,o,h]);var m=[k,a.inView,a.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}const lt=V(F)`
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  h1 {
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
  }
`,pt="/assets/noLetters-f7c894c1.png",ut="/assets/noLettersDark-7b43bc8f.png",ht="/assets/notFound-21bab61e.svg";function ft(){const t=I(e=>e.utils.theme),{t:i}=j();return u(lt,{children:[n("img",{src:t==="dark"?ut:t==="anime"?ht:pt,alt:"no letters"}),n("h1",{children:i("other.noLetters")})]})}const gt="/assets/checked-2dd501e3.svg",xt=V.div`
  background-color: ${({theme:t})=>t.container};
  position: relative;
  height: 48px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 15px;
  transition: 0.4s;

  div {
    min-width: 0;
  }

  div:first-child {
    .greyDot {
      display: none;
    }
  }

  div:nth-child(2) {
    img {
      width: 32px;
      height: 32px;
      border-radius: 100%;
      scale: 1;
      transition: 0.4s;
    }
    input {
      width: 16px;
      height: 16px;
      position: absolute;
      left: 36.5px;
      bottom: 15px;
      scale: 0;
      transition: 0.4s;
      appearance: none;
      cursor: pointer;
    }
    input:checked {
      scale: 1;
    }
    input:checked::after {
      content: url(${gt});
      position: absolute;
      bottom: 100px;
      border: none;
    }
    input:checked::before {
      content: "";
      position: absolute;
      background-color: ${({theme:t})=>t.container};
      inset: 0;
      margin: -10px;
      z-index: 999;
      transition: 0.4s;
    }
    input::after {
      content: "";
      position: absolute;
      inset: 0;
      border: 1px solid ${({theme:t})=>t.checkbox||"#e0e2e8"};
      border-radius: 4px;
      z-index: 9999;
    }
  }

  div:nth-child(3) {
    margin-left: 5px;
  }
  div:nth-child(4) {
    display: flex;
    justify-content: center;

    .addBookmark {
      display: none;
    }
    span {
      display: flex;
    }
  }
  div:nth-child(5) {
    margin-left: 5px;
  }

  div:nth-child(3),
  div:nth-child(5),
  div:nth-child(6),
  div:nth-child(8) {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div:nth-child(6) {
    color: ${({theme:t})=>t.text.secondary};
  }

  div:nth-child(7) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    padding-right: 100px;
    background-color: ${({theme:t})=>t.container};
    z-index: 999;
    transition: 0.4s;
    span:first-child {
      padding-left: 16px;
    }
    span:last-child {
      padding-left: 10px;
    }
  }

  div:nth-child(8) {
    position: absolute;
    background-color: ${({theme:t})=>t.container};
    width: max-content !important;
    right: 0;
    padding-right: 12px;
    padding-left: 16px;
    z-index: 999;
    transition: 0.4s;
    span {
      color: ${({theme:t})=>t.text.secondary};
      font-size: 13px;
    }
  }

  .unread {
    font-weight: bold;
  }

  display: grid;
  grid-template-columns: 20px 36px 200px 40px max-content 1fr 50px 70px;
  grid-template-rows: 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 0px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 20px 36px 200px 40px max-content 1fr 50px 70px;
  }

  &:hover {
    background-color: ${({theme:t})=>t.hoveredItem};
    transition: 0.4s;
    border-radius: 12px;
    cursor: pointer;

    div:first-child {
      .greyDot {
        display: block;
      }
    }
    div:nth-child(2) {
      img {
        scale: 0;
        transition: 0.4s;
      }
      input {
        scale: 1;
        transition: 0.4s;
      }
      input:checked::before {
        background-color: ${({theme:t})=>t.hoveredItem};
        transition: 0.4s;
      }
    }
    div:nth-child(4) {
      .addBookmark {
        display: inline;
      }
    }
    div:nth-child(7),
    div:nth-child(8) {
      background-color: ${({theme:t})=>t.hoveredItem};
      transition: 0.4s;
    }
  }

  hr {
    position: absolute;
    height: 1px;
    border: none;
    width: 95%;
    right: 5px;
    background-color: ${({theme:t})=>t.hr};
    bottom: 0;
    margin: auto;
  }
`,P="/assets/addBookmark-706ee389.svg",vt="/assets/grayDot-9c2aa916.svg",mt=V.span`
  width: 20px;
  height: 20px;
  position: relative;
  svg {
    transition: 0.2s;
  }
  svg:hover {
    opacity: 0.5;
    transition: 0.2s;
  }
  & > span:last-child {
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: start;
    opacity: 0;
    width: 300px;
    padding: 5px 10px 5px 10px;
    height: 40px;
    position: absolute;
    top: -15px;
    left: -320px;
    border-radius: 12px;
    box-shadow: 0px 4px 32px rgba(0, 16, 61, 0.24);
    background-color: ${({theme:t})=>t.body};
    img {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      margin-right: 10px;
    }
  }
  & > span:last-child:hover {
    background-color: ${({theme:t})=>t.container};
    transition: 0.2s;
  }

  .open {
    visibility: visible;
    animation-name: open;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  @keyframes open {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;function bt({img:t,size:i}){const[e,r]=c.exports.useState(!1);return u(mt,{onClick:l=>{l.preventDefault(),r(!e)},children:[n(B,{}),e?u("span",{className:e?"open":"close",onClick:()=>window.location.replace(t),children:[n("img",{src:t,alt:"img"})," ",n("span",{children:t.split("/")[2]})," ",n("span",{children:i})]}):!1]})}function kt(t){const i=I(r=>r.utils.lang),e={Заказы:Q,Финансы:U,Регистрации:X,Путешествия:Y,Билеты:Z,"Штрафы и налоги":tt};return n(_,{to:"/email?title="+t.title,children:u(xt,{children:[u("div",{onClick:r=>r.preventDefault(),children:[t.read===!1?n("img",{src:A,alt:"status"}):n("img",{src:vt,alt:"status",className:"greyDot"}),n("div",{})]}),u("div",{children:[n("img",{src:t.author.avatar||K,alt:"avatar"}),n("input",{onClick:r=>r.stopPropagation(),type:"checkbox"})]}),n("div",{children:u("p",{className:t.read===!1?"unread":"",children:[t.author.name," ",t.author.surname]})}),n("div",{onClick:r=>r.preventDefault(),children:t.bookmark&&t.important?u("span",{children:[n("img",{src:N,alt:"status"})," ",n("img",{src:z,alt:"status"})]}):t.bookmark?n("img",{src:N,alt:"status"}):t.important?u("span",{children:[n("img",{src:P,alt:"add_bookmark",className:"addBookmark"}),n("img",{src:z,alt:"status"})]}):n("img",{src:P,alt:"add_bookmark",className:"addBookmark"})}),u("div",{className:t.read===!1?"unread":"",children:[t.title,"  "]}),n("div",{children:t.text}),u("div",{children:[t.flag in e?n("span",{children:n("img",{src:e[t.flag],alt:"flag"})}):!1,t.doc?n(bt,{img:t.doc[0].img,size:t.doc[0].size}):!1]}),n("div",{children:n("span",{children:T(new Date(t.date),i)})}),n("hr",{})]})})}function St(){const[t,i]=c.exports.useState(null),[e,r]=c.exports.useState(20),[l,p]=c.exports.useState(null),[f,s]=c.exports.useState(2),d=I(a=>a.utils.isLoading),o=I(a=>a.utils.theme),[h,w]=W(),{folder:x}=G(),{t:b}=j(),{ref:v,inView:k,entry:S}=ct(),$=c.exports.useRef(null);return c.exports.useEffect(()=>{k&&e===20&&(async()=>{s(f+1);const a=await M(`/${x}/${f}`);r(a.length),i(g=>[...g,...a]),p(g=>[...g,...a])})()},[k,S]),c.exports.useEffect(()=>{q({emails:l,searchParams:h,setEmails:i,setParams:w})},[h,l]),c.exports.useEffect(()=>{x&&(document.title=`WebMail - ${b(`navbar.${x}`)}`)},[x,b]),c.exports.useEffect(()=>{var g;s(2),r(20),(g=$.current)==null||g.scrollTo({top:0,behavior:"auto"});const a=`/${x}/1`;H({fetchData:M,urlString:a,functions:[i,p]}),w("?letters=all")},[x]),n(et,{className:o==="anime"?"animeNotFound":"",ref:$,children:d&&k===!1?n(nt,{svgFill:o==="anime"?"#ffffff":void 0}):(t==null?void 0:t.length)===0?n(ft,{}):u(J,{children:[t==null?void 0:t.map(a=>n(kt,{author:a.author,folder:a.folder,bookmark:a.bookmark,date:a.date,to:a.to,title:a.title,important:a.important,text:a.text,read:a.read,flag:a.flag,doc:a.doc},a.date)),n("div",{ref:v,className:"moreEmailsLoader",children:k&&e===20?n(it,{}):e<20?n("p",{children:b("other.noMoreLetters")}):!1})]})})}export{St as default};
