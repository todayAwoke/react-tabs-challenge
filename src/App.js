import React from 'react';
import { TabProvider } from './components/TabContext'; 
import Tabs from './components/Tabs';

const App = () => {
    return (
        <TabProvider>
            <Tabs />
        </TabProvider>
    );
};

export default App;