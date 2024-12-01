import LoginForm from "../components/LoginForm";

const Home = () => {
    return (
        <>
            <h1 className="title">
                The best pizza.
                <br />
                <span className="text-yellow">
                    Straight out of the oven, straight to you.
                </span>
            </h1>
            <p className="welcome">
                👉 Welcome! Please start by telling us your name:
            </p>
            <LoginForm />
        </>
    );
};

export default Home;
