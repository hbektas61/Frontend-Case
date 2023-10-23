import FixedSideBar from './FixedSideBar';
import classes from "./Layout.module.css"

const Layout = (props) => {
  return (
    <main className={classes.layout}>
    <FixedSideBar />
    {props.children}
  </main>
  )
}

export default Layout;
