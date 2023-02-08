import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import * as S from './Styles';

interface CircleIconProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  circleSize?: string;
  topOffset?: string;
  leftOffset?: string;
  fontSize?: any;
  color: string;
}

function CircleIcon({
  Icon,
  circleSize = '30px',
  topOffset = '3px',
  leftOffset = '6px',
  fontSize = 'inherent',
  color,
}: CircleIconProps) {
  return (
    <S.CircleContainer circleSize={circleSize} backGroundColor={color}>
      <S.IconContainer topOffset={topOffset} leftOffset={leftOffset}>
        <Icon fontSize={fontSize} style={{ color: 'white' }} />
      </S.IconContainer>
    </S.CircleContainer>
  );
}

export default CircleIcon;
