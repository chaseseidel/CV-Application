export default function PersonalInfo({ handleChange }) {
  return (
    <>
      <h2>Personal Info</h2>
      <form action="#">
        <ul className="information">
          <li>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="First Name, Last Name"
              data-key="name"
              onChange={handleChange}
              className="input"
              required
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              data-key="email"
              onChange={handleChange}
              className="input"
              required
            />
          </li>
          <li>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="(012) 345-6789"
              data-key="phone"
              onChange={handleChange}
              className="input"
              required
            />
          </li>
          <li>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="City, Country"
              data-key="address"
              onChange={handleChange}
              className="input"
              required
            />
          </li>
        </ul>
      </form>
    </>
  );
}
