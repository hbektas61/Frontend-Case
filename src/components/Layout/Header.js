import classes from './Header.module.css';

function Header() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}></div>
      <nav>
        <ul>
          <li>
            <a>Albert Health</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
