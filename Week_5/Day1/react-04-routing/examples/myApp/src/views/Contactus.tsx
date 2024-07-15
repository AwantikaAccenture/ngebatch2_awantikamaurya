import { Link, Outlet } from "react-router-dom";

export default function ContactUs() {
  const cities = ["Chennai", "Bengaluru", "Pune", "Mumbai"];
  return (
    <>
      <div>
        {cities.map((city) => (
          <Link key={city} to={`/contactus/${city}`}>
            {city}
          </Link>
        ))}
      </div>
      <Outlet/>
      
    </>
  );
}
