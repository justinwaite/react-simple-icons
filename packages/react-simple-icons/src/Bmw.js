import React from 'react';
import PropTypes from 'prop-types';

const Bmw = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12 0C5.371 0 0 5.372 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.628-5.372-12-12-12zm0 .369c6.423 0 11.631 5.207 11.631 11.63 0 6.424-5.208 11.632-11.632 11.632C5.576 23.631.37 18.423.37 12 .369 5.576 5.576.37 11.999.37zm-.788.607l-1.094.12-.117 3.271.847-.12.074-2.183.705 2.182h.743l.705-2.182.076 2.183.848.12-.12-3.27-1.092-.12-.788 2.3zm7.933 2.507L17.18 6.067l.605.563 2.152-.987-1.432 1.886.417.714 2.95-1.354-.416-.714-1.7.782 1.207-1.592-.285-.353-.246-.31-1.817.832 1.134-1.49zm-14.47.404a.76.76 0 0 0-.525.28l-1.74 2.18 2.557 2.04 1.806-2.263a.866.866 0 0 0-.14-1.214.86.86 0 0 0-1.171.092.773.773 0 0 0-.213-.945.797.797 0 0 0-.574-.17zm-.036.81a.362.362 0 0 1 .324.587l-.982 1.232-.568-.454.983-1.23a.362.362 0 0 1 .243-.135zM12 4.73a7.27 7.27 0 1 0 0 14.54 7.27 7.27 0 0 0 0-14.54zm-.275.376l.288.007v6.9H5.114l.003-.262H5.11a6.908 6.908 0 0 1 6.615-6.64zm2.114.252a6.901 6.901 0 0 1 5.074 6.654h-6.779l.14-.26h6.353a6.719 6.719 0 0 0-4.62-6.225zm-8.082.075a.364.364 0 0 1 .325.59L5.02 7.347l-.568-.454 1.06-1.327a.363.363 0 0 1 .243-.134zm6.256 6.718v6.76a6.904 6.904 0 0 1-6.655-5.07l.172.17a6.718 6.718 0 0 0 6.22 4.615v-6.351zm6.897.008a6.9 6.9 0 0 1-6.749 6.751l.113-.278v-6.357h6.344Z" />
    </svg>
  );
};

Bmw.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bmw.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Bmw;