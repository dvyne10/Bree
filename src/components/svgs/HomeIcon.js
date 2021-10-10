import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

const HomeIcon = ({ width, height, fill, ...rest }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...rest}
      viewBox="0 0 31.411 29.761">
      <G id="_053-home" data-name="053-home" transform="translate(0.705 0.662)">
        <G id="Group_1" data-name="Group 1" transform="translate(0 0)">
          <Path
            id="Path_1"
            data-name="Path 1"
            d="M15,11.96,0,24.986l1.536,1.768,1.4-1.22V37.046a3.517,3.517,0,0,0,3.513,3.513H13.01V29.084h4.1V40.558h6.44a3.517,3.517,0,0,0,3.513-3.513V25.535l1.4,1.22L30,24.986Z"
            transform="translate(0 -11.96)"
            fill={fill}
            stroke="#3eb2ff"
            stroke-width="1"
          />
        </G>
      </G>
    </Svg>
  );
};

HomeIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#3eb2ff',
};

export default HomeIcon;
