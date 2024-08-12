import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "@/style/components/SiderBar.css"

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
{
  name: "其他東西",
  icon: "archive",
  route: "/other"
}];

const SiderBarItems = () => {
  const location = useLocation();

  return (
    <>
      {datas.map((item, index) => (
        <Link
          className="f:white t:none"
          to={item.route}
          key={index}
        >
          <li className={`f:16px mt:3px ml:5px mr:20px pt:10px pb:10px pl:15px r:5px flex align-items:center ${location.pathname === item.route ? "gradient" : ''} bg:#3d3c3e:hover`}>
            <span className='f:17px pr:5px'><i className={`bi bi-${item.icon}`}></i></span>
            {item.name}
          </li>
        </Link>
      ))}
    </>
  );
};

const SiderBarRwd = ({ toggleSidebar }) => {
  return (
    <div
      className="f:#fff f:22px flex align-items:center justify-content:center width:40px height:40px"
      onClick={toggleSidebar}
    >
      <i className="bi bi-list"></i>
    </div>
  );
};

const SiderBar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Close the sidebar when the route changes
  useEffect(() => {
    setIsSidebarVisible(false);
  }, [location.pathname]);

  return (
    <>
      <div className={`SiderBar bg:#191919 h:100% position:fixed z:3 w:300px m:0 width:100%@<md ${isSidebarVisible ? '' : 'ml:-100%@<md'} ~margin-left|400ms`}>
        <div className="header">
          <div className="flex justify-content:center">
            <img src="/favicon.png" className="r:100% w:160px mt:10px b:6px|#282828|solid" />
          </div>
          <div className="name font:#fff font:25px font:bold flex justify-content:center">PTDTW</div>
        </div>
        <div>
          <ul className="mt:20px pl:15px list-style:none">
            <SiderBarItems toggleSidebar={toggleSidebar} />
          </ul>
        </div>
      </div>
      <div className={`z-index:3 fixed bottom:15px left:30px r:100px flex-wrap:wrap width:40px height:40px bg:#060606 hidden block@<md`}>
        <SiderBarRwd toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
};

export default SiderBar;
