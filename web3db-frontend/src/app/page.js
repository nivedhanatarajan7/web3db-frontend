import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="home">
        <h1>What is Health3App?</h1>
        <p>
          The Health3App allows for more secure, interoperable, and efficient
          health record management.
        </p>
        <p>
          You can import health data from a clinic and hospital record
          management system, Apple Health app, or Android Health app.
        </p>
        <p>
          Access all of your health data in one place and choose who you want to
          send your health data to!
        </p>
      </div>
    </div>
  );
};

export default Home;
