import React from 'react';
import './App.scss';
import Layout from "./components/Layout/Layout";
import { observer } from 'mobx-react';

function App() {
  
  return (
    <div className="root">
      <Layout />
    </div>
  );
}

export default observer(App);
