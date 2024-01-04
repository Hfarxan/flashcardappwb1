import React from 'react';

import './MessageItem.css';

const MessageItem = ({ subject, email, content, date }) => {
  return (
    <div className="message-container">
      <div className="message-card">
        <div className="message-header">
          <h3 className="message-title">{subject}</h3>
          <div className="message-details">
            <p>Email: {email}</p>
            <p>Content: {content}</p>
          </div>
        </div>
        <div className="message-footer">
          <span className="message-date">
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
