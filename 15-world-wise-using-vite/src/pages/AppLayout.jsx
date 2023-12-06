import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from './AppLayout.module.css'
// csm for imporrting css modules 
export default function AppLayout() {
  return (
    <div className={styles.app}>
        <Sidebar />
        <Map />

    </div>
  )
}
