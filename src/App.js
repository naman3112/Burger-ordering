import React from 'react';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from '../src/components/layout/Layout';
function App() {
  return (
    <div >
    <Layout>
      <BurgerBuilder/>
    </Layout>
    </div>
  );
}

export default App;
