import React from "react";
import Child from "./Child";

function Parent() {
  const userEmployee1 = {
    name: "Jaleel Ahmad",
    salary: 90000,
    city: "Lucknow",
    state: "UP",
  };
  const userEmployee2 = {
    name: "Ashfaq Ahmed",
    salary: 80000,
    city: "Kolkata",
    state: "West Bengal",
  };
  const userEmployee3 = {
    name: "Mohit Singh",
    salary: 100000,
    city: "Delhi",
    state: "Delhi",
  };
  return (
    <div>
      <h2>Parent Component</h2>

      <Child
        userData1={userEmployee1}
        userData2={userEmployee2}
        userData3={userEmployee3}
      />
    </div>
  );
}

export default Parent;
