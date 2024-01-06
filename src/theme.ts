import {DefaultTheme} from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export type DefaultThemeColorKey = 'white' | 'black' | 'textMain' | 'textBlue';

  export interface DefaultTheme {
    colors: {
      [key in DefaultThemeColorKey]: string;
    };
  }
}

const colors = {
  white: '#ffffff',
  black: '#000000',
  textMain: '#4F5861',
  textBlue: '#3181F4',
};
const theme: DefaultTheme = {
  colors,
};
export default theme;
