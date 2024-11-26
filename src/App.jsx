import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Menu from "./components/Menu";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <main className="content">
                <h1>The best pizza.</h1>
                <p className="subtitle">
                    Straight out of the oven, straight to you.
                </p>
                <p className="welcome">
                    👉 Welcome! Please start by telling us your name:
                </p>
                <LoginForm />
                <Menu />
            </main>
        </div>
    );
}

export default App;
