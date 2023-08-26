
import React from 'react';
import './App.css';

import Layout from './components/Layout';

const Header = React.lazy(() => import('./components/Header'));
const Content = React.lazy(() => import('./components/Content'));
const Footer = React.lazy(() => import('./components/Footer'));
 
function App() {
  return (
    <div className="app">
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
