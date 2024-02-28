import { useId } from "react";

function Input({ name, type }) {
  const id = useId();

  return (
    <div className=" pt-1 flex flex-col items-start space-y-2 ">
      <label htmlFor={id}>{name}</label>
      <input
        className=" text-black w-[300px] text-xl rounded-md  px-1"
        type={type}
        name={name}
        id={id}
      />
    </div>
  );
}

export default Input;
