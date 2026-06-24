import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  type NavTab = {
    label: string;
    path: string;
    icon: any;
  };

  const NavItems: NavTab[] = [
    {
      label: "Home",
      path: "/",
      icon: "tabler SVG",
    },
  ];

  return (
    <motion.nav>
      {/* Logo Side */}
      <div>
        <h2>Ravi Gahire</h2>
      </div>

      <div>
        {NavItems.map((item) => (
          <div className="">
            {/* icon */}
            <div>{item.icon}</div>
            {/* nav tab */}
            <NavLink to={item.path}>{item.label}</NavLink>
          </div>
        ))}
      </div>
    </motion.nav>
  );
};
