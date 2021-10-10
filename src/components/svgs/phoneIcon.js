import React from 'react';
import Svg, { Defs, Pattern, Rect, Image } from 'react-native-svg';

const PhoneIcon = ({ width, height, color, fill, ...rest }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="25"
      height="25"
      viewBox="0 0 25 25">
      <Defs>
        <Pattern
          id="pattern"
          width="1"
          height="1"
          patternTransform="matrix(-1, 0, 0, 1, 50, 0)"
          viewBox="0 0 25 25">
          <Image
            preserveAspectRatio="none"
            width="25"
            height="25"
            href={{
              uri: 'data:image/png;base64,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',
            }}
          />
        </Pattern>
      </Defs>
      <Rect
        id="_049-telephone"
        data-name="049-telephone"
        width="25"
        height="25"
        fill="url(#pattern)"
      />
    </Svg>
  );
};

PhoneIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#fff',
};

export default PhoneIcon;