// import { useState } from 'react'

const avatars = ["/Avatars/avatar01.png", "/Avatars/avatar02.png", "/Avatars/avatar03.png", "/Avatars/avatar04.jpg"];
const MyAvatarsSection = () => {
  return (
    <>
      <div className="position:relative overflow:y:none bg:#0d0c0c5a mt:25px ml:20px mr:20px r:10px px:18px py:8px">
        <div className="f:#fff f:26px f:bold pl:5px pt:6px">我的頭像</div>
        <div className="f:rgb(230|230|230) mt:8px pl:15px pt:6px flex flex-wrap:wrap jc:center">
          {avatars.map((item, index) => (
            <img src={item} key={index} className="w:140px pl:10px pr:10px r:15% mb:10px" />
          ))}
        </div>
      </div>
    </>
  );
};

const links = [{
  "icon": "/icons/discord.svg",
  "name": "個人Discord群組",
  "link": "https://discord.gg/bAuKcwCqwX"
}];
const LinksSection = () => {
  return (
    <>
      <div className="position:relative overflow:y:none bg:#0d0c0c5a mt:25px ml:20px mr:20px r:10px px:18px py:8px">
        <div className="f:#fff f:26px f:bold pl:5px pt:6px">相關連結</div>
        <div className="f:rgb(230|230|230) mt:8px pl:15px pt:6px flex flex-wrap:wrap jc:center">
          {links.map((item, index) => (
            <div>
              <a className={`f:white mb:20px text-decoration:none flex flex-direction:column ai:center b:1px|gray-28|solid padding:15px r:10% ~all|800ms {box-shadow:0px|0px|8px|10px|gray-18}:hover`} href={item.link}>
                <div><img src={item.icon} className="w:80px"/></div>
                <div className="mt:8px f:bold f:14px">{item.name}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


const other = () => {

  return (
    <>
      <div className='container mt:35px f:28px f:bold f:white text:center'>
        其他東西
      </div>
      <MyAvatarsSection />
      <LinksSection />
    </>
  )
}

export default other
