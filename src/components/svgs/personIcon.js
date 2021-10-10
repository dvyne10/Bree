import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

const PersonIcon = ({ width, height, color, fill, ...rest }) => {
  return (
    <Svg
      id="_097-user"
      data-name="097-user"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...rest}
      viewBox="0 0 67 67">
      <G id="Group_39" data-name="Group 39" transform="translate(0)">
        <Path
          id="Path_21"
          data-name="Path 21"
          d="M57.188,43.312a33.371,33.371,0,0,0-12.73-7.985,19.367,19.367,0,1,0-21.916,0A33.553,33.553,0,0,0,0,67H5.234a28.266,28.266,0,1,1,56.531,0H67A33.282,33.282,0,0,0,57.188,43.312ZM33.5,33.5A14.133,14.133,0,1,1,47.633,19.367,14.149,14.149,0,0,1,33.5,33.5Z"
          transform="translate(0)"
          fill={fill}
        />
      </G>
    </Svg>
  );
};

PersonIcon.defaultProps = {
  width: 67,
  height: 67,
  fill: '#fff',
};

export default PersonIcon;
