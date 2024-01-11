import {DefaultTheme} from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export type DefaultThemeColorKey = 'white' | 'black' | 'textMain' | 'textBlue'|'follow'|'unFollow';

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
  follow: '#3181F4',
  unFollow: '#7E9ECC',
};
const theme: DefaultTheme = {
  colors,
};
export default theme;
