import { NavLink } from "react-router-dom";
export interface INavItemProps {
  label: string;
  link: string;
}

export const NavItem = ({ label, link }: INavItemProps) => {
  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav__link-active" : "";

  return (
    <li className="nav__item">
      <NavLink className={(isActive) => active(isActive)} to={link}>
        {label.toUpperCase()}
      </NavLink>
    </li>
  );
};
