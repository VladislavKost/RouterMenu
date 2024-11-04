import { NavItem } from "../NavItem";
import "./Nav.scss";

export const Nav = () => {
  const navItems = [
    { label: "Главная", link: "/" },
    { label: "Дрифт-такси", link: "/drift" },
    { label: "Time Attack", link: "/timeattack" },
    { label: "Forza Karting", link: "/forza" },
  ];

  return (
    <nav className="nav">
      <ul className="nav__items">
        {navItems.map(({ label, link }) => (
          <NavItem key={label} label={label} link={link} />
        ))}
      </ul>
    </nav>
  );
};
