import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Random Greetings!</h1>
      <h2>Here you will see a Random greeting when you Navigate to our Greeting Page!</h2>
      <Link to="/greeting">
        <button>
          Greetings!
        </button>
      </Link>
    </div>
  )
}

export default Home;
