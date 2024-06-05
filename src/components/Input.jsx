// eslint-disable-next-line react/prop-types
const Input = ({ type = 'text', name, placeholder, value, onChange, className }) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;