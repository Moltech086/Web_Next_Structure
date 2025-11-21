"use client";
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './Accordion.scss';

const Accordion = ({ items }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId(prevId => (prevId === id ? null : id));
  };

  // Safety check for items
  if (!items || !Array.isArray(items)) {
    return <div>No FAQ items available</div>;
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const id = index;
        const isOpen = openItemId === id;

        // Safety checks for title and content
        const title = typeof item.title === 'string' ? item.title : '';
        const content = typeof item.content === 'string' ? item.content : '';

        return (
          <div className={`accordion-item ${isOpen ? 'open' : ''}`} key={id}>
            <button onClick={() => toggleItem(id)} className="accordion-header" aria-label="Toggle accordion">
              <span className="accordion-question" dangerouslySetInnerHTML={{ __html: title }}></span>
              <Icon
                icon={isOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'}
                className="accordion-icon"
              />
            </button>

            <div className="accordion-body">
              <div className="accordion-answer" dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
