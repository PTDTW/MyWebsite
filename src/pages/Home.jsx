import React, { Fragment, useState, useEffect } from "react";
// import ReactMarkdown from 'react:markdown';
import MarkdownViewer from "@/components/Reader/MarkdownViewer"
import { Timeline, Event } from "react-timeline-scribble";

const HeroSection = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const margin = Math.min(0 + (scroll / 30), 10); // 2% to 10%
  const h = Math.max(100 - (scroll / 10), 70);
  const borderRadius = Math.min(0 + (scroll / 3), 50); // 30px to 50px

  return (
    <>
      <div>
        <div
          className={`rel flex mx:${margin}% h:${h}vh bg:#0f0f0fed align-items:center justify-content:center overflow:hidden bg:url("/images/hero.png") bg:cover`}
          style={{
            // margin: `0px ${margin}%`,
            borderRadius: `${borderRadius}px`,
            transition: 'all 0.1s ease-out'
          }}
        >
          <div className="rel z:12 text:center color:white">
            <h1 className={`f:48px font:bold mb:16px f:40px@<md ~font|300ms`}>{"<PTDTW/>"}</h1>
            <p className={`f:18px f:16px@<md ~font|300ms`}>嘗試用新學會的前端框架，親手搭建的個人網站</p>
          </div>
          <div className={`abs flex mx:${margin}% h:${h}vh w:100% bg:#0e0e0eaa z:3`}></div>
        </div>
      </div>
    </>
  );
};

const AboutSection = () => {
  return (
    <>
      <div className="position:relative overflow:y:none bg:#0d0c0c5a mt:25px ml:20px mr:20px r:10px px:18px py:8px">
        <div className="f:#fff f:26px f:bold pl:5px pt:6px">先聽我說</div>
        <div className="f:rgb(230|230|230) pl:15px pt:6px">
          <MarkdownViewer file="/Markdown/about.md" />
        </div>
      </div>
    </>
  );
};

const MyFileSection = () => {
  return (
    <>
      <div className={`position:relative overflow:y:none bg:#0d0c0c5a mt:25px ml:20px mr:20px r:10px px:18px py:8px flex-grow:1 flex-basis:0 {w:100%;flex-basis:unset}@<lg`}>
        <div className="f:#fff f:26px f:bold pl:5px pt:6px">個人檔案</div>
        <div className="f:rgb(230|230|230) pl:15px pt:6px">
          <MarkdownViewer file="/Markdown/MyFile.md" />
        </div>
      </div>
    </>
  );
};

const TargetSection = () => {
  return (
    <>
      <div className={`position:relative overflow:y:none bg:#0d0c0c5a mt:25px ml:20px mr:20px r:10px px:18px py:8px flex-grow:1 flex-basis:0 {w:100%;flex-basis:unset}@<lg`}>
        <div className="f:#fff f:26px f:bold pl:5px pt:6px">我的目標</div>
        <div className="f:rgb(230|230|230) pl:15px pt:6px">
          <MarkdownViewer file="/Markdown/target.md" />
        </div>
      </div>
    </>
  );
};


const Experiences = [{
  time: "2023",
  deeds: "新北市112學年度中小學科學展覽會 - 特優國展"
},
{
  time: "2024",
  deeds: "中華民國第64屆全國中小學科學展覽會 生活應用科（三）- 佳作 "
}];


const ExperienceSection = () => {
  return (
    <>
      <div className="position:relative overflow:y:none bg:#0d0c0c5a mt:25px ml:20px mr:20px mb:12px r:10px px:18px py:8px">
        <div className="f:#fff f:26px f:bold pl:5px pt:6px">獲獎經歷</div>
        <div className="f:#747474 f:15px pl:5px pt:6px">東西好少喔</div>
        <div className="f:rgb(230|230|230) pl:15px pt:35px">
          <Fragment>
            <Timeline className="h:110%">
              {Experiences.map((item, index) => (
                <Event interval={item.time}>
                  {item.deeds}
                </Event>
              ))}
            </Timeline>
          </Fragment>
        </div>
      </div>

    </>
  );
};

const HomeView = () => {
  return (
    <div>
      <HeroSection />
      <div id="contentSection"></div>
      <AboutSection />
      <div className="flex flex-wrap:wrap">
        <MyFileSection />
        <TargetSection />
      </div>
      <ExperienceSection />
    </div>

  );
};

export default HomeView;