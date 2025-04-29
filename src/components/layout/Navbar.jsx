import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const datas = [{
  name: "首頁",
  icon: "house",
  route: "/"
},
{
  name: "作品&專案",
  icon: "backpack",
  route: "/projects"
},
{
  name: "團隊&工作室",
  icon: "briefcase",
  route: "/teams"
},
// {
//   name: "交易所",
//   icon: "bank2",
//   route: "/exchange"
// },
{
  name: "其他東西",
  icon: "archive",
  route: "/other"
}];

const links = [{
  icon: "instagram",
  route: "https://www.instagram.com/ptd.tw"
}, {
  icon: "discord",
  route: "https://discord.gg/bAuKcwCqwX"
},];

const SiderBarItems = ({ closeMobileMenu }) => {
  const location = useLocation();

  return (
    <>
      {datas.map((item, index) => (
        <Link
          className="f:white t:none w:90%@<md"
          to={item.route}
          key={index}
          onClick={closeMobileMenu}
        >
          <li className={`f:16px mx:10px px:10px py:10px r:5px flex align-items:center ${location.pathname == item.route ? "bg:#4c4c4c" : ''} bg:#3d3c3e:hover ~all|0.2s`}>
            <span className='f:17px pr:5px '><i className={`bi bi-${item.icon}`}></i></span>
            {item.name}
          </li>
        </Link>
      ))}
    </>
  );
};

const SiderBarLinks = ({ closeMobileMenu }) => {
  return (
    <>
      {links.map((item, index) => (
        <a
          className="f:white t:none"
          href={item.route}
          key={index}
          onClick={closeMobileMenu}
        >
          <li className={`f:16px mx:10px px:10px py:10px r:5px flex ai:center bg:#3d3c3e:hover ~all|0.2s`}>
            <i className={`bi bi-${item.icon}`}></i>
          </li>
        </a>
      ))}
    </>
  );
};

const SponsorCard = () => {
  return (
    <div className='p:10px'>
      <div className='flex ai:center pl:5px'><img src="/Avatars/sengege.png" className='w:45px r:10px' /><p className='pl:10px font:#fff font:bold'>{"三哥哥(sangege)"}</p></div>
      <div className='f:#fff font:bold font:25px mt:10px pl:5px'>
        <div>{"網域贊助"}</div>
      </div>
      <div className='mt:10px pl:5px'>
        <a href='https://discord.com/users/523114942434639873'><img className="w:35px r:15%" src="/icons/discord.png" /></a>
        <a className="pl:10px" href='https://coffeehost.net/'><img className="w:35px r:15%" src="/icons/coffee-host.png" /></a>
        <a className="pl:10px" href='https://linktr.ee/san.ge.ge'><img className="w:35px r:15%" src="/icons/linktree.png" /></a>
        <a className="pl:10px" href='https://shdtw.cloud/'><img className="w:35px r:15%" src="/icons/shd.png" /></a>
      </div>
    </div>
  )
}


const SiderBarRwd = ({ toggleSidebar, isSidebarVisible }) => {
  return (
    <div
      className="f:#fff f:22px flex ai:center jc:center w:40px h:40px cursor:pointer"
      onClick={toggleSidebar}
    >
      <i className={`bi bi-${isSidebarVisible ? 'x' : 'list'}`}></i>
    </div>
  );
};

const NavBar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  
  const closeMobileMenu = () => {
    setIsSidebarVisible(false);
  };

  useEffect(() => {
    setIsSidebarVisible(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed top:0 z:100 w:70% left:15% right:15% w:80%@<md left:5%@<md right:5%@<md">
        <div className={`mt:30px mt:12px@<md flex abs ai:center jc:space-between bg:#0e0e0edf h:3.5rem w:100% z:3 r:10px bd:blur(8) b:#2d2c2c|1px|solid px:20px`}>
          <div className='flex ai:center'>
            <img src="/Avatars/avatar02.png" className="r:10px w:30px h:auto mr:10px" />
            <div className="font:#fff font:19px">糖豆魚｜PTDTW</div>
          </div>
          <div className="hidden@<md block@>md">
            <ul className="flex px:15px list-style:none">
              <SiderBarItems />
            </ul>
          </div>
          <div className="hidden@<md block@>md">
            <ul className="flex px:15px list-style:none">
              <SiderBarLinks />
            </ul>
          </div>
          {/* <div className="block@<md hidden@>md">
            <SiderBarRwd toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
          </div> */}
        </div>
        
        {/* Mobile Menu */}
        <div className={`fixed top:0 right:0 w:full h:full bg:#0e0e0edf pt:80px z:50 ${isSidebarVisible ? 'transform:translateX(0)' : 'transform:translateX(100%)'} ~transform|0.3s hidden@>md`}>
          <div>
            <ul className="list-style:none mb:20px p:0px">
              <SiderBarItems closeMobileMenu={closeMobileMenu} />
            </ul>
            <ul className="flex list-style:none p:0px">
              <SiderBarLinks closeMobileMenu={closeMobileMenu} />
            </ul>
          </div>
          <div className="mt:40px mx:20px bg:#1e1e1e r:10px">
            <SponsorCard />
          </div>
        </div>
        
        {/* Mobile Menu Background Overlay */}
        {isSidebarVisible && (
          <div 
            className="fixed top:0 left:0 w:full h:full bg:#000000|0.7 z:40 hidden@>md"
            onClick={closeMobileMenu}
          />
        )}
        
        {/* Mobile Menu Toggle Button - Fixed at bottom */}
        <div className={`fixed bottom:20px right:20px r:50% w:50px h:50px bg:#0e0e0e flex ai:center jc:center shadow:0|5px|15px|rgba(0,0,0,0.3) z:51 hidden@>md`}>
          <SiderBarRwd toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;