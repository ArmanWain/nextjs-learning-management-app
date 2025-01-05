import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p>&copy; {year} UPSKILL. All Rights Reserved.</p>
      <div className="footer__links">
        {["About", "Privacy Policy", "Licensing", "Contact"].map((item) => (
          <Link
            key={item}
            href={"#"}
            className="footer__link"
            scroll={false}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
