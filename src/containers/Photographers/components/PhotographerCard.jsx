const PhotographerCard = ({ photographerName, content, photo }) => {
  return (
    <div className="photographers__card">
      <div className="photographers__block">
        <p className="photographers__subtitle">OUR PHOTOGRAPHERS</p>
        <h2 className="photographers__name title">{photographerName}</h2>
        <div className="photographers__content text">
          {content.map((paragraph, index) => (
            <p className="photographers__paragraph text" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="photographers__photo">
        <img src={photo} alt="img" className="{photographerName}" />
      </div>
    </div>
  );
};
export default PhotographerCard;
