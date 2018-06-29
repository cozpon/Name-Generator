import React from 'react';
import { render } from 'react-dom';
import '../styles.scss';

const App = () => {
  return (
    <div>
      <h3>Farts</h3>
      <p>this tutorial guy sucks</p>
      <p>being unemployed sucks.</p>
    </div>
  );
}

render(<App />,
  document.getElementById('App')
);