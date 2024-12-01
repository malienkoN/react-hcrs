import { Routes, Route } from "react-router";
// pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
// components
import Header from "./components/Header";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
