import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/greetings/greetingsSlice";

const Greeting = () => {
  const { greeting, isLoading } = useSelector((state) => state.greetings);

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
    <div>
      <h1>The greeting will be here: {greeting}</h1>
    </div>
  );
};

export default Greeting;
