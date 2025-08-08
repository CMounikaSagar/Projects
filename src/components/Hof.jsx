import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Hof() {
  // SET THE VALIDATION MODE HERE
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [userinfo, setUserinfo] = useState();

  const onSubmit = (data) => {
    setUserinfo(data);
    console.log("Form Submitted:", data);
  };
  
  // This will now log the errors object as you type
  console.log(errors);

  return (
    <div>
      <h1>Submitted Data:</h1>
      <pre>{JSON.stringify(userinfo, null, 2)}</pre>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            {...register("name", { required: "Name is a required field." })}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", { required: "Email is required." })}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: "Please enter a password." })}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Hof;