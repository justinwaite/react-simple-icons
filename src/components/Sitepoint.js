import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sitepoint = forwardRef(function Sitepoint(
  { color = 'currentColor', size = 24, title = 'SitePoint', ...others },
  ref
) {
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
      <path d="M2.471 10.533l1.771 1.688 5.598 5.141 2.4-2.291c.21-.297.194-.705-.046-.985L9.99 12.184l.01-.005-2.371-2.266c-.279-.314-.27-.78.021-1.079l6.39-6.076L11.146 0 2.475 8.238c-.664.633-.664 1.66 0 2.295h-.004zm19.056 2.937l-1.77-1.691-5.595-5.142-2.411 2.291c-.221.3-.207.705.045.985l2.205 1.891h-.006l2.369 2.265c.27.314.27.766-.029 1.064l-6.391 6.075L12.855 24l8.67-8.238c.664-.633.666-1.659 0-2.295l.002.003z" />
    </svg>
  );
});

Sitepoint.propTypes = {
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

export default Sitepoint;