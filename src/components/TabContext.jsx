import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const TabContext = createContext();

export const TabProvider = ({ children }) => {
    const tabs = [
        { id: 1, tabTitle: 'Tab 1', title: 'Title 1', content: 'Content for Tab 1...' },
        { id: 2, tabTitle: 'Tab 2', title: 'Title 2', content: 'Content for Tab 2...' },
        { id: 3, tabTitle: 'Tab 3', title: 'Title 3', content: 'Content for Tab 3...' },
        { id: 4, tabTitle: 'Tab 4', title: 'Title 4', content: 'Content for Tab 4...' }
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [cachedContent, setCachedContent] = useState({});

    useEffect(() => {
        const storedContent = localStorage.getItem('tabContent');
        if (storedContent) {
            setCachedContent(JSON.parse(storedContent));
        }
    }, []);

    const handleTabClick = (id) => {
        if (!cachedContent[id]) {
            const tabContent = tabs.find(tab => tab.id === id);
            if (tabContent) {
                const updatedCache = { ...cachedContent, [id]: tabContent };
                setCachedContent(updatedCache);
                localStorage.setItem('tabContent', JSON.stringify(updatedCache));
            }
        }
        setActiveTab(id);
    };

    return (
        <TabContext.Provider value={{ tabs, activeTab, handleTabClick, cachedContent }}>
            {children}
        </TabContext.Provider>
    );
};