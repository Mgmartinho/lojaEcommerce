
import style from "./home.module.scss"
import Header from '../../components/Header';

function Home
() {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.banner}>
          <h1>E-commerce Developer</h1>

      </div>
    </div>
  )
}

export default Home
;
