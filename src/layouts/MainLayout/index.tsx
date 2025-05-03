
import styles from './main.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'
export default function MainLayout() {
  return (
    <div className={styles.container}>
        <Header />
        <div className={styles.content}>
            <Outlet />
        </div>
            
        <Footer />

    </div>
  )
}
