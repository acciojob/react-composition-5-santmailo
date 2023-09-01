import React,{useState} from "react";

const Tabs = ({tabs,keyProp})=> {
    const [activeTab, setActiveTab] = useState(tabs[0].title);
    const [activeTabContent, setActiveTabContent] = useState(tabs[0].content);

    const handleClick = (index) => {
        setActiveTab(tabs[index].title);
        setActiveTabContent(tabs[index].content);
    }


    return (
        <div className={`Tabs${keyProp}`}>
            <div>
                <ul>
                    {
                        tabs.map((tab,i) => {
                            return (
                                <li key={keyProp+tabs[i].title} onClick={() => handleClick(i)}> {tab.title} </li>
                            )
                    })}
                </ul>
                
            </div>
            <div className={activeTab}>
                {activeTabContent}
            </div>
        </div>
    )

}

export default Tabs;