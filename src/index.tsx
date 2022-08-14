import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcom from "./pages/Welcom/Welcom";
import Profile from "./pages/Profile/Profile";
import Main from "./pages/Main/Main";
import Settings from "./pages/Settings/Settings";
import store from './store/store';
import {  Provider } from "react-redux";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcom />} />
        <Route path="main" element={<Main />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
