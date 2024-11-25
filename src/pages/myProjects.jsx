// import { useState } from 'react'

const projects = [{
  "name": "KGame Box",
  "description": "一款輕量遊戲整合平台，讓你不連網也能玩小遊戲",
  "status": "長期維護",
  "tags": ["軟體", "遊戲", "平台", "ELECTRON"],
  "version": "alpha",
  "belong": "靈魂之神工作室",
  "link": "https://github.com/SoulGod-Studio/KGameBox-alpha"
},
{
  "name": "官方網站",
  "description": "Rhythm這台Discord音樂機器人的官方網站",
  "status": "長期維護",
  "tags": ["網站", "Vue3", "Discord機器人"],
  "version": "formal",
  "belong": "Rhythm",
  "link": "https://rhytemsire.vercel.app/"
},
{
  "name": "官方網站",
  "description": "DGS弦樂式Discord機器人的第二代官方網站",
  "status": "長期維護",
  "tags": ["網站", "React", "Discord機器人"],
  "version": "formal",
  "belong": "DGS弦樂式",
  "link": "https://dgs-website.vercel.app/"
},
{
  "name": "官方網站",
  "description": "安康高中FRC的社團網站",
  "status": "長期維護",
  "tags": ["網站", "高中", "FRC"],
  "version": "formal",
  "belong": "安康高中FRC",
  "link": "https://tren7632.vercel.app/"
}]

const ProjectsCard = () => {
  return (
    <>
      {projects.map((item, index) => (
        <div key={index}  className="bg:#0d0c0c5a ml:5px mr:5px mb:10px border:1px|rgb(40|40|40)|solid w:420px r:6px h:160px flex flex-direction:column justify-content:space-between gap:10px mb:10px@<lg ml:0px@<2xs mr:0px@<2xs w:100%@<xs">
          <div>
            <div className="mt:20px ml:15px f:20px flex ai:center">
              <span className="f:gray-50 hidden@<2xs">{item.belong}/</span>
              <a href={`${item.link}`} className="f:gray-96 text-decoration:none" target="_black">{item.name}</a>
              <span className="f:gray-40 f:12px border:1px|gray-40|solid r:30px pl:5px pr:5px ml:10px">
                {item.status}
              </span>
              <span className="f:gray-40 f:12px border:1px|gray-40|solid r:30px pl:5px pr:5px ml:5px">
                {item.version}
              </span>
            </div>
            <div className="mt:6px ml:18px f:gray-38 f:14px">
              {item.description}
            </div>
          </div>
          <div className="ml:18px mb:10px">
            {item.tags.map((tag, tagIndex) => (
               <span className="f:gray-48 f:12px bg:gray-22 border:1px|gray-28|solid r:30px pl:6px pr:6px mr:5px" key={tagIndex}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

const MyProjects = () => {
  return (
    <>
      <div className='mt:35px f:28px f:bold f:white text:center'>
        作品&專案
      </div>
      <div className="mt:40px flex flex-wrap:wrap jc:center ml:12px@<xs mr:12px@<xs">
        <ProjectsCard></ProjectsCard>
      </div>
    </>
  )
}

export default MyProjects
