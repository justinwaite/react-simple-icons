import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Ajv = forwardRef(function Ajv({ color = 'currentColor', size = 24, title = 'ajv', ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M8.705 4.718a980.02 980.02 0 0 1 1.211 3.19l2.962 7.886c.198.526-.054 1.17-.583 1.366-.311.116-.655.06-.926-.11l-1.454 1.418c.81.775 1.985 1.034 3.116.614 1.602-.593 2.387-2.416 1.79-4.008L10.984 4.718zm4.153.013 4.57 11.72 1.924.008L24 4.783l-2.404-.011-3.193 8.832-3.141-8.861zm-8.309.013L0 16.421l2.354.01 1.092-2.91 4.112.019 1.08 2.92 2.355.012L6.572 4.754zm.999 2.592L7.15 11.94l-3.316-.016z" />
    </svg>
  );
});

Ajv.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Ajv;