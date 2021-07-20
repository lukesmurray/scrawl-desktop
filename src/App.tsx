import Excalidraw from '@excalidraw/excalidraw';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.global.css';

function Main() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10000,
        minHeight: '300px',
        minWidth: '300px',
      }}
    >
      <Excalidraw
        initialData={{
          appState: {
            viewBackgroundColor: 'transparent',
          },
        }}
        name="hello world"
        UIOptions={{
          canvasActions: {
            changeViewBackgroundColor: false,
          },
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}
