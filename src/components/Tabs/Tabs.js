// components/Tabs.js
'use client'
import  { React, useState } from 'react';
import './Tabs.css';

const Tabs = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
          >
            <tab.component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
