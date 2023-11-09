import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/greetings/greetingsSlice";

const Greeting = () => {
  const { greetings, isLoading } = useSelector((state) => state.greetings);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );
  }

  return (
    <div className="greeting">
      <h1>
        Random Greetings
      </h1>
      <h1>Today's Greeting: {greetings.message}</h1>
    </div>
  );
};

export default Greeting;
