import React from "react";

// assets
import "../../../assets/styles/containers/collaboration.scss";

const CollaborationCard = ({ number, title, text }) => {
  return (
    <li className="collaboration-card">
      <p className="collaboration-card__number">{number}</p>
      <div className="collaboration-card__content">
        <h3 className="collaboration-card__title">{title}</h3>
        <p className="collaboration-card__text text">{text}</p>
      </div>
    </li>
  );
};

export default CollaborationCard;
