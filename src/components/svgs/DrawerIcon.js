import React from 'react';
import Svg, { Rect, G } from 'react-native-svg';

const DrawerIcon = ({ width, height, color, fill, ...rest }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...rest}
      viewBox="0 0 50 50">
      <Rect
        id="Rectangle_1"
        data-name="Rectangle 1"
        width="50"
        height="50"
        rx="25"
        fill="#3eb2ff"
        opacity="0.5"
      />
      <G id="menu" transform="translate(14 16)">
        <G id="Group_24" data-name="Group 24" transform="translate(0 8)">
          <G id="Group_23" data-name="Group 23" transform="translate(0 0)">
            <Rect
              id="Rectangle_16"
              data-name="Rectangle 16"
              width="23"
              height="3"
              rx="1.5"
              fill="#fff"
            />
          </G>
        </G>
        <G id="Group_26" data-name="Group 26">
          <G id="Group_25" data-name="Group 25">
            <Rect
              id="Rectangle_17"
              data-name="Rectangle 17"
              width="12"
              height="3"
              rx="1.5"
              fill="#fff"
            />
          </G>
        </G>
        <G id="Group_32" data-name="Group 32" transform="translate(0 16)">
          <G id="Group_31" data-name="Group 31" transform="translate(0 0)">
            <Rect
              id="Rectangle_20"
              data-name="Rectangle 20"
              width="18"
              height="3"
              rx="1.5"
              transform="translate(0 0)"
              fill="#fff"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

DrawerIcon.defaultProps = {
  width: 40,
  height: 40,
  fill: '#fff',
};

export default DrawerIcon;
