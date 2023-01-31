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

  text: 'papayawhip',
};

export const size = {
  globalFontSize: 14,
};

export const font = {
  light: 'font-weight: 300;',
  regular: 'font-weight: 400;',
  medium: 'font-weight: 500;',
  bold: 'font-weight: 700;',
  size: (fontSize: number) => `font-size: ${fontSize}px;`,
};

export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

export const media = {
  xlarge: mediaQuery(2560),
  large: mediaQuery(1440),
  medium: mediaQuery(1024),
  small: mediaQuery(768),
  xsmall: mediaQuery(425),
  xxsmall: mediaQuery(320),
};
