export const Select = ({
  name,
  options = [{ name: "", url: "" }],
  onChange = () => {},
  label,
  disabled = false,
  type = "text",
}) => {

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <select
        type={type}
        id={name}
        onBlur={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        {options.map((option) => (
          <option value={option.name}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};
