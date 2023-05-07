function Hamburger({
  onToggleHamburgerMenu,
  toggle,
}: {
  onToggleHamburgerMenu: () => void;
  toggle: boolean;
}) {
  return (
    <button onClick={onToggleHamburgerMenu} className="hamburger-menu">
      <span className={`hamburger-top ${toggle && "open"}`}></span>
      <span className={`hamburger-middle ${toggle && "open"}`}></span>
      <span className={`hamburger-top ${toggle && "open"}`}></span>
    </button>
  );
}

export default Hamburger;
