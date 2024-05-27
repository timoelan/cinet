// eslint-disable-next-line react/prop-types
const Input = ({ type = "text", value, onChange, ...props }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  );
};

export default Input;