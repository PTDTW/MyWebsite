
const teams = [{
    "name": "FlyBirdHost 飛鳥託管",
    "description": "提供一個高性價比的伺服器託管計劃，並盡力以最高品質提供服務！",
    "logo": "/teams/flybirdhost.jpg",
    "pos": "高層/創辦團隊",
    "tags": ["託管", "便宜"],
    "links": [{
        "discord": "https://discord.gg/gPqWEDsW95 ",
        "web": "https://flybirdhost.net/"
    }]
},
{
    "name": "Life's Cafe - Task Manager支援群",
    "description": "體驗維護、引領創新、無限進步、超多功能、高自訂性、高安全性！",
    "logo": "/teams/coffeehub.jpg",
    "pos": "管理員",
    "tags": ["驗證機器人", "管理機器人", "獨家UI介面"],
    "links": [{
        "discord": "https://discord.com/invite/A2hAphuchB",
        "web": "https://onion.idv.tw/"
    },
]
},
{
    "name": "BunnyHost",
    "description": "BunnyHost是一個免費的低延遲託管服務，我們致力於為用戶提供良好的託管體驗，讓用戶的服務能夠放心託管在BunnyHost，我們在提供免費服務的同時，亦提供價格低的付費服務，讓用戶能夠擁有最良好的託管體驗！",
    "logo": "/teams/BunnyHost.png",
    "pos": "高層",
    "tags": ["網路託管", "免費託管", "便宜價格", "亞洲"],
    "links": [{
        "discord": "https://discord.gg/bunnyhost",
        "web": "https://bunnyhost.top/"
    },
]
}]

const TeamsCard = () => {
    return (
        <>
            {teams.map((item, index) => (
                <div key={index} className="bg:#0d0c0c5a ml:5px mt:10px@<3xl pb:20px@<md mr:5px border:1px|rgb(40|40|40)|solid w:420px r:6px h:150px hflex flex-direction:column justify-content:space-between h:auto@<xs pb:10px@<3xs mb:10px@<lg ml:0px@<2xs mr:0px@<2xs w:100%@<xs">
                    <div>
                        <div className="mt:20px ml:15px f:20px flex ai:center">
                            <img src={`${item.logo}`} className="r:100% w:30px mr:5px" />
                            <div className="f:gray-96 text-decoration:none">{item.name}</div>
                            {/* <span className="f:gray-32 f:12px border:1px|gray-32|solid r:30px pl:5px pr:5px ml:10px">
                                {item.status}
                            </span>
                            <span className="f:gray-32 f:12px border:1px|gray-32|solid r:30px pl:5px pr:5px ml:5px">
                                {item.version}
                            </span> */}
                        </div>
                        <div className="ml:18px f:gray-38 f:14 mt:8px overflow:hidden text-overflow:ellipsis white-space:nowrap">
                            {item.description}
                        </div>
                    </div>
                    <div className="f:gray-48 f:15px mt:16px mb:4px ml:18px">
                        {item.pos}
                    </div>
                    <div className="ml:18px flex ai:center">
                        {item.tags.map((tag, tagIndex) => (
                            <span className="f:gray-48 f:12px bg:gray-22 border:1px|gray-28|solid r:30px pl:6px pr:6px mr:5px" key={tagIndex}>
                                {tag}
                            </span>
                        ))}
                        <span className="ml:5px mr:8px f:gray-32">|</span>
                        {item.links.map((link, linkIndex) => (
                            <div key={linkIndex}>
                                {link.web && (
                                    <a href={link.web} target="_blank" className="f:gray-48 f:14px bg:gray-22 border:1px|gray-28|solid r:30px pl:6px pr:6px mr:5px">
                                        <i className="bi bi-globe"></i>
                                    </a>
                                )}
                                {link.discord && (
                                    <a href={link.discord} target="_blank" className="f:gray-48 f:14px bg:gray-22 border:1px|gray-28|solid r:30px pl:6px pr:6px mr:5px">
                                        <i className="bi bi-discord"></i>
                                    </a>
                                )}
                            </div>
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
            <div className=' mt:115px f:28px f:bold f:white text:center'>
                團隊&工作室
            </div>
            <div className="mt:40px flex flex-wrap:wrap jc:center ml:12px@<xs mr:12px@<xs">
                <TeamsCard></TeamsCard>
            </div>
        </>
    )
}

export default MyTeams;