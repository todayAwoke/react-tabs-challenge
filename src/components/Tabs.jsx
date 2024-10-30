import React, { useContext } from 'react';
import { TabContext } from './TabContext';
import './Tabs.css';

const Tabs = () => {
    const { tabs, activeTab, handleTabClick, cachedContent } = useContext(TabContext);

    const activeContent = cachedContent[activeTab] || tabs.find(tab => tab.id === activeTab);

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map(tab => (
                    <button 
                        key={tab.id} 
                        className={activeTab === tab.id ? 'active' : ''} 
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.tabTitle}
                    </button>
                ))}
            </div>
            <div className='tab-content'>
                <h2 className='title'>{activeContent.title}</h2>
                <p>{activeContent.content}</p>
            </div>
        </div>
    );
};

export default Tabs;