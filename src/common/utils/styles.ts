export const color = {
  white: '#FFFFFF',
  black: '#000000',

  gray50: '#FAFBFC',
  gray100: '#F3F3FA',
  gray200: '#D9DAE5',
  gray300: '#B0B1C3',
  gray400: '#9293AB',
  gray500: '#6B6D85',
  gray600: '#4F5162',
  gray700: '#383946',
  gray800: '#22222A',
  gray900: '#212121',

  wine: '#db7290',

  groomColor: '#6fa8dc',
  brideColor: '#db7290',
  kakaoColor: '#ffeb00',

  text: 'papayawhip',
};

export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

export const media = {
  xLarge: mediaQuery(2560),
  large: mediaQuery(1440),
  medium: mediaQuery(1024),
  small: mediaQuery(768),
  xSmall: mediaQuery(425),
  xxSmall: mediaQuery(320),
};
