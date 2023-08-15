import Email from "../assets/email.png";
import Phone from "../assets/telephone.png";
import Location from "../assets/location.png";

export default function Info({ info }) {
  return (
    <div className="top">
      <h2>{info.name}</h2>
      <ul>
        <li className="container">
          <img src={Email} alt="" className="icon" />
          <p>{info.email}</p>
        </li>
        <li className="container">
          <img src={Phone} alt="" className="icon" />
          <p>{info.phone}</p>
        </li>
        <li className="container">
          <img src={Location} alt="" className="icon" />
          <p>{info.address}</p>
        </li>
      </ul>
    </div>
  );
}
