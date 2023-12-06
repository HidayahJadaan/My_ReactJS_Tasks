import { Outlet } from "react-router-dom"
import AppNav from "./AppNav"
import Logo from "./Logo"
import styles from "./Sidebar.module.css"
export default function Sidebar() {
  return (
    <div className= {styles.sidebar}>
<Logo />
<AppNav />

{/* ============ Nested Routing =========== */}

<Outlet />
{/* =============== it is like children props {children} ===================== */}
<footer className={styles.footer}>
    <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by
        WorldWise Inc.
    </p>
</footer>
    </div>
  )
}
