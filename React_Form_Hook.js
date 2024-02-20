import React from "react";
import { useForm } from "react-hook-form";

const I_Will_Delete_this_tem_for_form_practice = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const firstName = watch("fastName");

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("fastName", { required: "this is require" })}
          type="text"
        />
        <p>{firstName}</p>
        <p>{errors.fastName?.message}</p>

        <input
          {...register("lastName", {
            required: "this is require",
            minLength: {
              value: 4,
              message: "Min length = 4",
            },
          })}
          type="text"
        />
        <p>{errors.lastName?.message}</p>

        <input type="number" {...register("age", { min: 18, max: 99 })} />
        <button type="sumit"> Submit</button>
      </form>
    </div>
  );
};

export default I_Will_Delete_this_tem_for_form_practice;
