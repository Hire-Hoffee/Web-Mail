import{s as p,c as g,u as f,j as e,l as r,a as i,d as x,t as m,e as o,i as l,b as c,f as u,k as v}from"./index-83829836.js";import{S as b,d as y,o as w,f as k,r as z,t as D,a as S,b as j,L as E,e as $}from"./apiRequests-3fd706b8.js";const P=p(b)`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-right: 32px;
  position: relative;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    h1 {
      font-size: 20px;
      font-weight: bold;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    div {
      font-size: 13px;
      display: flex;
      align-items: center;
      & > p {
        margin-left: 8px;
      }
    }
  }

  & > div:nth-child(2) {
    margin-bottom: 12px;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;

    & > div:nth-child(3) {
      & > div:nth-child(1) {
        & > span:nth-child(2) {
          color: ${({theme:t})=>t.text.secondary};
        }
      }
    }

    div:nth-child(1) {
      display: flex;
      align-items: center;
      position: relative;
      span {
        margin-right: 10px;
      }
      & > img {
        position: absolute;
        left: -28px;
      }
    }
    img {
      margin-right: 8px;
    }
  }

  & > div:nth-child(2) div:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div:nth-child(1) {
      span:first-child {
        font-size: 15px;
      }
      span:nth-child(2) {
        font-size: 13px;
      }
    }

    div:last-child {
      font-size: 13px;
      color: ${({theme:t})=>t.text.secondary};
      margin-top: 5px;
    }
  }

  & > div:nth-child(2) div:nth-child(2) {
    img {
      width: 32px;
      height: 32px;
      border-radius: 100%;
    }
  }

  & > div:last-child {
    padding-top: 16px;
    padding-bottom: 16px;

    p {
      line-height: 1.5rem;
      font-size: 15px;
    }
  }

  & > div:nth-child(3) {
    img {
      width: 256px;
      height: 190px;
      border-radius: 12px;
    }

    & > div:first-child {
      display: flex;
      justify-content: flex-start;
      & > img:first-child {
        margin-right: 10px;
      }
    }

    & > div {
      font-size: 13px;
      margin-top: 8px;
      margin-bottom: 8px;
      span {
        color: ${({theme:t})=>t.text.secondary};
      }
      a {
        color: #005bd1;
      }
      a:hover {
        opacity: 0.8;
      }
    }
  }
  .imgLoader {
    position: relative;
    width: 100%;
    height: 150px;
    span {
      justify-content: start;
      margin-left: 150px;
    }
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;function C(t){const{t:n}=g(),d=f(a=>a.utils.lang),s={Заказы:w,Финансы:k,Регистрации:z,Путешествия:D,Билеты:S,"Штрафы и налоги":j};return e(r,{children:[e("div",{children:[i("h1",{children:t.title}),i("div",{children:t.flag||""in s?e(r,{children:[i("img",{src:s[t.flag||""],alt:"flag"}),i("p",{children:n(`flags.${t.flag}`)})]}):!1})]}),e("div",{children:[i("div",{children:t.read===!1?i("img",{src:x,alt:"status"}):""}),i("div",{children:i("img",{src:t.author.avatar||y,alt:"avatar"})}),e("div",{children:[e("div",{children:[e("span",{children:[t.author.name," "]}),e("span",{children:[Number(new Date)-Number(new Date(t.date))<864e5?`${n("other.today")},`:""," ",m(new Date(t.date),d)]}),i("span",{children:t.bookmark&&t.important?e(r,{children:[i("img",{src:o,alt:"status"})," ",i("img",{src:l,alt:"status"})]}):t.bookmark?i("img",{src:o,alt:"status"}):t.important?i("img",{src:l,alt:"status"}):!1})]}),e("div",{children:[i("span",{children:n("other.sentTo")+": "}),t.to.map((a,F,h)=>e("span",{children:[a.name,h.slice(-1)[0].email!==a.email?", ":""]},a.email))]})]})]}),i("div",{children:t.doc?e(r,{children:[i("div",{children:t.doc.map(a=>i("img",{src:a.img,alt:"doc"},a.img))}),e("div",{children:[t.doc.length," ",n("other.filesQuantity")," ",t.doc.length===1?e("a",{href:t.doc[0].img,download:"doc.png",children:[n("other.downloadFile")," "]}):e("a",{href:t.doc[0].img,download:"doc.png",children:[n("other.downloadFiles")," "]}),i("span",{children:t.doc[0].size})]})]}):""}),i("div",{children:i("p",{children:t.text})})]})}function I(){const[t,n]=c.exports.useState(null),[d,s]=u();return c.exports.useEffect(()=>{const a=`/email?title=${d.get("title")}`;v({fetchData:$,urlString:a,functions:[n]}),document.title="WebMail - Письмо"},[]),i(r,{children:i(P,{children:t?i(C,{author:t.author,folder:t.folder,bookmark:t.bookmark,date:t.date,to:t.to,title:t.title,important:t.important,text:t.text,read:t.read,flag:t.flag,doc:t.doc},t.date):i(E,{})})})}export{I as default};
