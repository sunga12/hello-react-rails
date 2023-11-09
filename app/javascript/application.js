// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>

    </section>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
