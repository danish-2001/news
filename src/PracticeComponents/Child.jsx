import React from "react";

function Child({ userData1, userData2, userData3 }) {
  // const { name, salary, city, state } = props;
  // return (
  //   <div>
  //     <h2>This is Child Component</h2>
  //     <h2>NAME:{name}</h2>
  //     <h2>SALARY:{salary}</h2>
  //     <h2>CITY:{city}</h2>
  //     <h2>STATE:{state}</h2>
  //   </div>
  // );

  // Destructuring the props object

  return (
    <div>
      <h4>This is Child Component</h4>
      <p>NAME:{userData1.name}</p>
      <p>SALARY:{userData1.salary}</p>
      <p>CITY:{userData1.city}</p>
      <p>STATE:{userData1.state}</p>
      <hr />
      {/* Repeat for userData2 and userData3 */}
      <h4>NAME:{userData2.name}</h4>
      <p>SALARY:{userData2.salary}</p>
      <p>CITY:{userData2.city}</p>
      <p>STATE:{userData2.state}</p>
      <hr />
      <h4>NAME:{userData3.name}</h4>
      <p>SALARY:{userData3.salary}</p>
      <p>CITY:{userData3.city}</p>
      <p>STATE:{userData3.state}</p>
      <hr />
    </div>
  );
}
export default Child;
