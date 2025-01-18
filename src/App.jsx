import "@/App.css";
import AppLayout from "@layouts/AppLayout";
import Account from "@pages/Account";
import Home from "@pages/Home";
import Login from "@pages/Login";
import NotFound from "@pages/NotFound";
import Notification from "@pages/Notification";
import {  Route, Routes } from "react-router";

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login/>} />  
        <Route  element={<AppLayout />} >
          <Route index element={<Home />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
  );
}

export default App;
