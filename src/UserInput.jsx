import React from 'react';


const UserInput = ({value, onChange}) =>{
  return (
      <form>
            <label htmlFor='username' for="username">Username:</label>
            <input type='text' name='username' value={value} onChange={onChange} />
      </form>
  );
}

export default UserInput;