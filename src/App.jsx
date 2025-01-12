import "@/App.css";
import AppLayout from "@layouts/AppLayout";
import Account from "@pages/Account";
import Home from "@pages/Home";
import Notification from "@pages/Notification";
import { Route, Routes } from "react-router";
function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
