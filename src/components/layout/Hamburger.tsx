import styles from "./Hamburger.module.css";

function Hamburger({
  onToggleHamburgerMenu,
  toggle,
}: {
  onToggleHamburgerMenu: () => void;
  toggle: boolean;
}) {
  return (
    <button
      onClick={onToggleHamburgerMenu}
      className=" 
    focus:outline-none
    block
    cursor-pointer
    w-7
    h-4
    transition-all duration-250
    relative
    border-0
    z-10
    "
    >
      <span
        className={`${styles.hamburgerTop} ${toggle && styles.open} ${
          toggle && styles.openHamburgerTop
        }`}
      ></span>
      <span
        className={`${styles.hamburgerMiddle} ${toggle && styles.open} ${
          toggle && styles.openHamburgerMiddle
        }`}
      ></span>
      <span
        className={`${styles.hamburgerBottom} ${toggle && styles.open} ${
          toggle && styles.openHamburgerBottom
        }`}
      ></span>
    </button>
  );
}

export default Hamburger;
