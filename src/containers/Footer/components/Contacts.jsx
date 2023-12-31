import "../../../assets/styles/components/contacts.scss";

function Contacts() {
  return (
    <address className="footer__contacts address">
      <div className="address__item">
        <h3 className="address__title">Address</h3>
        <div className="address__block">
          <p className="address">Knyahyni Ol'hy St, 5A</p>
          <p className="address">Lviv, 79000</p>
        </div>
      </div>
      <div className="address__item">
        <h3 className="address__title">Hours</h3>
        <div className="address__block">
          <p className="hours">Monday -Saturday: 11 AM - 9 PM</p>
          <p className="hours">Sunday: 11 AM - 7 PM</p>
        </div>
      </div>
      <div className="address__item">
        <h3 className="address__title">E-mail</h3>
        <a href="mailto: justmoment@gmail.com" className="mail">
          justmoment@gmail.com
        </a>
      </div>
      <div className="address__item">
        <h3 className="address__title">Phone</h3>
        <a href="tel: +3 (8097) 122 15 49">+3 (8097) 122 15 49</a>
      </div>
    </address>
  );
}
export default Contacts;
