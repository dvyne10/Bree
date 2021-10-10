import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

const EditPencil = ({ width, height, fill, ...rest }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...rest}
      viewBox="0 0 20.004 20">
      <G
        id="_137-edit-1"
        data-name="137-edit-1"
        transform="translate(0 -0.054)">
        <G id="Group_18" data-name="Group 18" transform="translate(0 0.054)">
          <Path
            id="Path_12"
            data-name="Path 12"
            d="M15.571.054,2.043,13.6a3.753,3.753,0,0,0-.9,1.467l-.012.036L0,20.054l4.967-1.112L5,18.93a3.755,3.755,0,0,0,1.468-.9L20,4.477ZM2.755,17.835l-.527-.527.38-1.673L4.432,17.46Zm2.98-1.284L3.518,14.334,15.573,2.265l2.219,2.214Z"
            transform="translate(0 -0.054)"
            fill={fill}
          />
        </G>
      </G>
    </Svg>
  );
};

EditPencil.defaultProps = {
  width: 24,
  height: 24,
  fill: '#fff',
};

export default EditPencil;
