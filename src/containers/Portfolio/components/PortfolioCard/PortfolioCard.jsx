const PortfolioCard = ({ photo }) => {
  return (
    <div className="portfolio__photo">
      <img src={photo} alt="img" className="photo" />
    </div>
  );
};
export default PortfolioCard;
