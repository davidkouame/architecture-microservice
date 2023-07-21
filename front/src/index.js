import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './pages/Layout';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Market from './pages/Market';
import Transaction from './pages/Transaction';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionDetail from './pages/TransactionDetail';
import CreateShoe from './pages/CreateShoe';
import { Provider } from 'react-redux'
import store from './components/store'

export default function AppRouter() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/transactions/:id" element={<TransactionDetail />} />
            <Route path='/create-shoes' element={<CreateShoe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
