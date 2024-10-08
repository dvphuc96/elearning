import { InputStyled } from "components";

export const Input = ({
  className = "",
  label,
  id,
  type = "text",
  placeholder,
  register,
  name,
  error,
  disabled = false,
}) => {
  return (
    <div className={className}>
      {!!label && (
        <label className="text-white" htmlFor={id}>
          {label}
        </label>
      )}
      <InputStyled
        id={id}
        type={type}
        placeholder={placeholder}
        {...(register && name ? register(name) : {})} // Ensuring register is applied conditionally
        disabled={disabled}
      />
      {!!error && <p className="text-red-500 font-600 text-15 mt-10">{error}</p>}
    </div>
  );
};
