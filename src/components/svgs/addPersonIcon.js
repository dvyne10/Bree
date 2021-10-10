import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

const AddPersonIcon = ({ width, height, color, fill, ...rest }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.962"
      height="24.913"
      {...rest}
      viewBox="0 0 24.962 24.913">
      <G
        id="_088-add-user"
        data-name="088-add-user"
        transform="translate(0 -0.499)">
        <G id="Group_34" data-name="Group 34" transform="translate(0 0.499)">
          <G id="Group_33" data-name="Group 33">
            <Path
              id="Path_14"
              data-name="Path 14"
              d="M12.459.5A7.2,7.2,0,0,0,8.384,13.635,12.477,12.477,0,0,0,0,25.412H1.947A10.523,10.523,0,0,1,12.459,14.9a7.2,7.2,0,1,0,0-14.4Zm0,12.456A5.255,5.255,0,1,1,17.715,7.7,5.262,5.262,0,0,1,12.459,12.955Z"
              transform="translate(0 -0.499)"
              fill="#707070"
            />
          </G>
        </G>
        <G
          id="Group_36"
          data-name="Group 36"
          transform="translate(14.849 15.299)">
          <G id="Group_35" data-name="Group 35">
            <Path
              id="Path_15"
              data-name="Path 15"
              d="M310.434,307.99v-4.084h-1.945v4.084H304.4v1.945h4.084v4.084h1.945v-4.084h4.084V307.99Z"
              transform="translate(-304.405 -303.906)"
              fill="#707070"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

AddPersonIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#fff',
};

export default AddPersonIcon;
