import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Geocaching = forwardRef(function Geocaching(
  { color = 'currentColor', size = 24, title = 'Geocaching', ...others },
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
      <path d="M13.24.003v2.322c1.29.16 2.938.622 4.477 1.795l-1.186 1.608-.016-.015s-1.229-1.051-3.27-1.38v6.419h6.33c-.12-.914-.436-2.01-1.154-3.119l1.695-1.125s1.26 1.71 1.53 4.244H24V0H13.24v.003zm4.335 23.203l-.6.097-1.306-8.045.349-.056 6.555-.015-5.655 4.064.631 3.954h.026zm-4.337-9.967V24h10.758V13.241l-10.758-.004v.002zm-6.783 6.753l1.184-1.605h.019s1.163.987 3.103 1.342v-6.491H4.59c.109.933.42 2.076 1.174 3.235L4.08 17.592s-1.296-1.761-1.529-4.355H0v10.76h10.76v-2.231c-1.264-.179-2.835-.647-4.305-1.77v-.004zM4.977 1.968c-.169 0-.309.105-.309.234s.139.232.309.232.308-.104.31-.232c-.001-.129-.141-.234-.31-.234zM5.006 2.61c-.502 0-.906-.405-.906-.9s.404-.896.906-.896c.5 0 .905.404.905.899s-.405.897-.899.897h-.006zm-1.336.06l-1.037.524c-.094-.113-.165-.205-.24-.309l-1.31.489-.276-.434 2.063-.428.445-.094.729-.148-.619.231c.079.06.146.109.244.171l.001-.002zM1.676.765c.378.575.824 1.047 1.4 1.482l-1.005.18C1.695 1.89 1.365 1.368 1.064.728l.609.035.003.002zM0 0v10.759h2.407c-.102-.983-.21-3.805 1.481-6.146 0 0-.375-.359-.88-.951l-1.103.944-.477-.405 2.869-1.635-.338.286c.404.24.81.42 1.215.555 0 0 1.395-.78 2.774-2.655l.33.016c-.255.84-1.05 2.28-2.294 3.435 0 0 3.299 1.44 4.049 3.886-.21-.12-1.395-.375-1.979-.24-.105-.165-1.215-2.431-2.896-2.4 0 0-.375.45-.734 1.62-.314 1.035-.18 3.21-.136 3.72h6.45V0H0z" />
    </svg>
  );
});

Geocaching.propTypes = {
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

export default Geocaching;