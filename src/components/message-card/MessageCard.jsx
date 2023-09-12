import React from "react";

import "./MessageCard.scss";

const MessageCard = ({ title, children }) => {
  return (
    <div
      className={`col-lg-6 col-md-7 col-sm-7 d-flex flex-column align-items-center justify-content-center cardDiv  p-4 message-card`}
    >
      <p className="title mt-4 text-center">{title}</p>
      {children}
    </div>
  );
};

export default MessageCard;
