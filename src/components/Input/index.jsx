import propTypes from 'prop-types';

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

Input.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
  type: propTypes.string
}

export default Input;
