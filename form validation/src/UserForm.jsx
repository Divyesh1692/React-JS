import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const validations = z.object({
  name: z.string().min(3, "minimum 3 characters required").max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(6, "minimum 6 characters required")
    .regex(/[a-z]/, "small alphabet required")
    .regex(/[A_Z]/, "Capital alphabet required")
    .regex(/[@%$#&*!_]/, "special character required")
    .regex(/[0-9]/, "Numbers Required"),
});

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validations),
  });

  const onSubmit = (data) => {
    console.log(data, errors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input type="text" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        <br />
        <label>Email:</label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <br />
        <label>Password:</label>
        <input type="text" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForm;
