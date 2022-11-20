import './style.css';
import PropTypes from 'prop-types';

export function Hello(props) {
  const a = 1;
  const arr = Array.from('123');

  return (
    <div
      className={`rui-hello ${props.className ?? ''}`}
      style={{ ...(props.style ?? {}) }}
    >
      {a}
      {arr}
    </div>
  );
}

Hello.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};
