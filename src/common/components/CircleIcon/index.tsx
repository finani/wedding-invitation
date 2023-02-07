import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import * as S from './Styles';

interface CircleIconProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  color: string;
}

function CircleIcon({ Icon, color }: CircleIconProps) {
  return (
    <S.CircleContainer backGroundColor={color}>
      <S.IconContainer>
        <Icon fontSize='medium' style={{ color: 'white' }} />
      </S.IconContainer>
    </S.CircleContainer>
  );
}

export default CircleIcon;
