import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onChange" });
  const onValid = (data: LoginForm) => {
    console.log("im valid");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        type="text"
        {...register("username", {
          required: "Username is required",
          minLength: { message: "should be longer than 5 chars", value: 5 },
        })}
        placeholder="Username"
      />
      {errors.email?.message}
      <input
        type="email"
        {...register("email", {
          required: "Username is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") ? "" : "not valid gmail!",
          },
        })}
        placeholder="user@example.com"
      />
      {errors.email?.message}
      <input
        type="password"
        {...register("password", { required: "{assword is required" })}
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
      {errors.email?.message}
    </form>
  );
}
