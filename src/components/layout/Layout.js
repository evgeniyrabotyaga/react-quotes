import Navigation from "./Navigtaion";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <div className="centered">{props.children}</div>
    </>
  );
};

export default Layout;
