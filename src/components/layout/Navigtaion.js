import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="navigation">
      <nav className="navigation__container">
        <h1>React Quotes</h1>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              className={(navData) =>
                navData.isActive
                  ? "navigation__link active"
                  : "navigation__link"
              }
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="add"
              className={(navData) =>
                navData.isActive
                  ? "navigation__link active"
                  : "navigation__link"
              }
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
