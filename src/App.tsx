import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.app_wrapper}>
      <Header/>
      <main className={'flex-grow'}>
        Content
      </main>
      <Footer/>
    </div>
  );
}

export default App;
