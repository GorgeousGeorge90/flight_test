import React, {useContext, useEffect, useState} from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import { UserContext } from './context/user/UserWrapper';
import FlightsPage from './pages/FlightsPage';

function App() {
    const user = useContext(UserContext)

  return (
    <div className={styles.app_wrapper}>
      <Header/>
      <main className={styles.app_main}>
          <Sidebar/>
          {
              user?.user.name ? <FlightsPage/>:<h3><i>Вы не авторизованы, для выбора билета необходимо ввести имя!</i></h3>
          }
      </main>
      <Footer/>
    </div>
  );
}

export default App;
