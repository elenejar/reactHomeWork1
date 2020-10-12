import React from "react";

function UserOutput(props) {
  return (
    <div>
      <div>
        {props.username.map((username, index) => {
            return <h1 key={index}>{username}</h1>;
          })}
      </div>
    </div>
  );
}

export default UserOutput;
