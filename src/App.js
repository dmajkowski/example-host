import React, { lazy, Suspense } from 'react';
import style from './App.module.css';
import Button from '@mui/material/Button';
import './MuiClassNameSetup'
const Header = lazy(() => import('ExampleRemote/Header'));
const Footer = lazy(() => import('ExampleRemote/Footer'));
const Clicker = lazy(() => import('ExampleRemote/Clicker'));
const Content = lazy(() => import('ExampleRemoteSite/Content'));

function App() {
  const [hostState, setHostState] = React.useState(0);

  return (
    <div className={style.App}>
      <Button variant="contained">Exaple host</Button>
      <Suspense fallback={<div>Ładowanie Headera...</div>}>
        <Header />
      </Suspense>
      <p>
        Host App changed - {hostState}
      </p>
      <Suspense fallback={<div>Ładowanie Clickera...</div>}>
        <Clicker hostState={hostState} setHostState={setHostState}/>
      </Suspense>
      <Suspense fallback={<div>Ładowanie Clickera...</div>}>
        <Content/>
      </Suspense>
      <Suspense fallback={<div>Ładowanie Footera...</div>}>
        <Footer />
      </Suspense>
      
    </div>
  );
}

export default App;