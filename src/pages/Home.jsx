import React, { Fragment } from "react";
// import ReactMarkdown from 'react:markdown';
import MarkdownViewer from "@/components/Reader/MarkdownViewer"
import { Timeline, Event } from "react-timeline-scribble";

const HeroSection = () => {
  return (
    <div className="rel flex h:100vh  align-items:center justify-content:center rel overflow:hidden">
      <video autoPlay loop muted className="abs top:0 left:0 w:100% h:100% object:cover z:-1">
        {/* <source src="https://file.hans0805.me/api/public/dl/1xN5jcs4/4K%20Nebula%20Sphere%20Hyperspace%20%23AAVFX%20%F0%9F%8C%94%20SPACE%20Moving%20Background.mp4" type="video/mp4" /> */}
        <source src="https://videos.pexels.com/video-files/856309/856309-hd_1920_1080_30fps.mp4" loop autoPlay type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="abs top:0 left:0 w:full h:full bg:rgb(26|26|26) opacity:0.8 z:1"></div>
      <div className="rel z:2 text:center color:white">
        <h1 className={`f:48px font:bold mb:16px f:40px@<md ~font|300ms`}>{"<PTDTW/>"}</h1>
        <p className={`f:18px f:16px@<md ~font|300ms`}>嘗試用新學會的前端框架，親手搭建的個人網站</p>
      </div>
      <a className="abs bottom:30px z:2 text:center color:rgb(134|134|134/0.823) text:none color:rgb(235|235|235/0.823):hover transition:all|500ms" href="#contentSection">
        向下滑，查看更多
        <div><i class="bi bi-caret-down-fill"></i></div>
      </a>
    </div>

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