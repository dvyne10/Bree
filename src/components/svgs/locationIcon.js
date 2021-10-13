import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

const LocationIcon = ({ width, height, color, fill, ...rest }) => {
  return (
    <Svg
      id="_013-pin-1"
      data-name="013-pin-1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...rest}
      viewBox="0 0 9.208 11.602">
      <G id="Group_41" data-name="Group 41" transform="translate(2.96 2.78)">
        <G id="Group_40" data-name="Group 40">
          <Path
            id="Path_22"
            data-name="Path 22"
            d="M176.644,92a1.644,1.644,0,1,0,1.644,1.644A1.646,1.646,0,0,0,176.644,92Zm0,2.476a.832.832,0,1,1,.832-.832A.833.833,0,0,1,176.644,94.476Z"
            transform="translate(-175 -92)"
            fill={fill}
          />
        </G>
      </G>
      <G id="Group_43" data-name="Group 43" transform="translate(0)">
        <G id="Group_42" data-name="Group 42">
          <Path
            id="Path_23"
            data-name="Path 23"
            d="M53.5,11.6s2.278-2.15,2.438-2.335C57.376,7.612,58.1,6.126,58.1,4.848V4.592a4.6,4.6,0,0,0-9.208,0v.256c0,1.277.729,2.764,2.166,4.418C51.223,9.451,53.5,11.606,53.5,11.6Zm-3.54-6.753V4.592a3.54,3.54,0,0,1,7.079,0v.256a6.374,6.374,0,0,1-1.9,3.711A18.445,18.445,0,0,1,53.5,10.217a18.415,18.415,0,0,1-1.633-1.645A6.39,6.39,0,0,1,49.961,4.848Z"
            transform="translate(-48.897)"
            fill={fill}
          />
        </G>
      </G>
    </Svg>
  );
};

LocationIcon.defaultProps = {
  width: 9,
  height: 11,
  fill: '#111',
};

export default LocationIcon;
