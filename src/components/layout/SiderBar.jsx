import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // No need for BrowserRouter here
import "@/style/components/SiderBar.css"
const datas = [{
  name: "首頁",
  icon: "house",
  route: "/"
},
{
  name: "作品",
  icon: "backpack",
  route: "/projects"
},
// {
//   name: "我的朋友們",
//   icon: "people-fill",
//   route: "/friends"
// },
{
  name: "其他東西",
  icon: "archive",
  route: "/other"
}];

const SiderBarItems = () => {
  const location = useLocation();
  // console.log(location.pathname)
  return (
    <>
      {datas.map((item, index) => (
        <Link className="f:white t:none" to={item.route} key={index}>
          <li className={`f:16px mt:3px ml:5px mr:20px pt:10px pb:10px pl:15px r:5px flex align-items:center ${location.pathname == item.route ? "gradient" : ''} bg:#3d3c3e:hover`}>
            <span className='f:17px pr:5px'><i className={`bi bi-${item.icon}`}></i></span>
            {item.name}
          </li>
        </Link>
      ))}
    </>
  );
};

const SiderBar = () => {
  return (
    <div className="SiderBar bg:#191919 h:100% position:fixed w:300px m:0">
      <div className="header">
        <div className="flex justify-content:center">
          <img src="/favicon.png" className="r:100% w:160px mt:10px b:6px|#282828|solid" />
        </div>
        <div className="name font:#fff font:25px font:bold flex justify-content:center">PTDTW</div>
      </div>
      <div>
        <ul className="mt:20px pl:15px list-style:none">
          <SiderBarItems></SiderBarItems>
        </ul>
      </div>
    </div>
  );
};

export default SiderBar;
