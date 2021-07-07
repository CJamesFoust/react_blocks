import React from 'react';
import styles from './App.module.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisements from './Components/Advertisement';
 
                
function App() {
  return (
    <div className={styles.app}>
        <Header />
        <div className={styles.center}>
          <Navigation />
          <Main>
              <SubContents />
              <SubContents />
              <SubContents />
              <Advertisements />
          </Main>
        </div>
    </div>
  );
}
                
export default App;