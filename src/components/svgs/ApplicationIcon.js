import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

const ApplicationIcon = ({ width, height, fill, ...rest }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 34.654 29.781">
      <G id="_070-monitor" data-name="070-monitor" transform="translate(0 -36)">
        <G id="Group_147" data-name="Group 147" transform="translate(0 36)">
          <Path
            id="Path_34"
            data-name="Path 34"
            d="M30.593,36H4.061A4.066,4.066,0,0,0,0,40.061V56.305a4.066,4.066,0,0,0,4.061,4.061H15.974v2.707H8.934v2.707H25.72V63.074H18.681V60.366H30.593a4.066,4.066,0,0,0,4.061-4.061V40.061A4.066,4.066,0,0,0,30.593,36Zm1.354,20.305a1.355,1.355,0,0,1-1.354,1.354H4.061a1.355,1.355,0,0,1-1.354-1.354V40.061a1.355,1.355,0,0,1,1.354-1.354H30.593a1.355,1.355,0,0,1,1.354,1.354Z"
            transform="translate(0 -36)"
            fill={fill}
            stroke="#3eb2ff"
            stroke-width="1"
          />
        </G>
      </G>
    </Svg>
  );
};

ApplicationIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#94d1ff',
};

export default ApplicationIcon;
