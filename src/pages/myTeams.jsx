
const teams = [{
    "name": "FlyBirdHost 飛鳥託管",
    "description": "提供一個高性價比的伺服器託管計劃，並盡力以最高品質提供服務！",
    "logo": "https://cdn.flybirdhost.net/?explorer/share/file&hash=d546U0kpQoB71tQzKKofE---ZRhoWNZC7KkRKRRpaWLmAv3iL9AbHba7nS0R3zHyLK0&name=/1720480893960.jpg",
    "pos": "高層/創辦團隊",
    "tags": ["託管", "便宜"],
    "link": [{
        "discord": "https://discord.gg/gPqWEDsW95 ",
        "web": "https://flybirdhost.net/"
    }]
}]

const TeamsCard = () => {
    return (
        <>
            {teams.map((item, index) => (
                <div key={index} className="bg:#0d0c0c5a ml:5px mr:5px border:1px|rgb(40|40|40)|solid w:420px r:6px h:160px flex flex-direction:column justify-content:space-between">
                    <div>
                        <div className="mt:20px ml:15px f:20px flex ai:center">
                            <img src={`${item.logo}`} className="r:100% w:30px mr:5px" />
                            <a href={`${item.link}`} className="f:gray-96 text-decoration:none" target="_black">{item.name}</a>
                            <span className="f:gray-64 f:16px">&nbsp;- {item.pos}</span>
                            {/* <span className="f:gray-32 f:12px border:1px|gray-32|solid r:30px pl:5px pr:5px ml:10px">
                                {item.status}
                            </span>
                            <span className="f:gray-32 f:12px border:1px|gray-32|solid r:30px pl:5px pr:5px ml:5px">
                                {item.version}
                            </span> */}
                        </div>
                        <div className="mt:6px ml:18px f:gray-38 f:14px">
                            {item.description}
                        </div>
                    </div>
                    <div className="ml:18px mb:10px flex ai:center">
                        {item.tags.map((tag, tagIndex) => (
                            <span className="f:gray-48 f:12px bg:gray-22 border:1px|gray-28|solid r:30px pl:6px pr:6px mr:5px" key={tagIndex}>
                                {tag}
                            </span>
                        ))}
                        <span className="ml:5px mr:8px f:gray-32">|</span>
                        {item.link.map((links, linkIndex) => (
                            <>
                                <a href={links.web} className="f:gray-48 f:14px bg:gray-22 border:1px|gray-28|solid r:30px pl:6px pr:6px mr:5px">
                                    <i className="bi bi-globe"></i>
                                </a>
                                <a href={links.discord} className="f:gray-48 f:14px bg:gray-22 border:1px|gray-28|solid r:30px pl:6px pr:6px mr:5px">
                                    <i className="bi bi-discord"></i>
                                </a>
                            </>
                        ))}

                    </div>
                </div>
            ))}
        </>
    );
};

const MyTeams = () => {
    return (
        <>
            <div className='container mt:35px f:28px f:bold f:white text:center'>
                團隊&工作室
            </div>
            <div className="ml:40px mt:40px flex flex-wrap:wrap jc:center@<lg">
                <TeamsCard></TeamsCard>
            </div>
        </>
    )
}

export default MyTeams;