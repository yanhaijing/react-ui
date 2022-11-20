/* eslint-disable react/prop-types */
import './style.css';
import PropTypes from 'prop-types';

export function Hello(props) {
  return (
    <div
      className={`rui-hello ${props.className ?? ''}`}
      style={{ ...(props.style ?? {}) }}
    >
      我是第一个组件
      {props.children}
    </div>
  );
}

Hello.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};
