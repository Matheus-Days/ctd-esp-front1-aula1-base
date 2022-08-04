const Input = ({ name, value, onChange = () => {}, label, type = "text" }) => {
  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        defaultValue={value}
        id={name}
        onBlur={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
