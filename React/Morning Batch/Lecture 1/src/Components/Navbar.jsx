const Navbar = () => {
  const style = {
          display: "flex",
          listStyle: "none",
          gap: "20px",
        };
  return (
    <nav>
      <ul
        style={style}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Visit Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
