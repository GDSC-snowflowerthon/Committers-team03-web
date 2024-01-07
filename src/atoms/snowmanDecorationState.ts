import { atom } from 'recoil';

export const snowmanDecorationState = atom({
  key: 'snowmanDecorationState',
  default: {
    body: { color: '#FFFFFF', number: 1 },
    scarf: { color: '#1E90FF', number: 1 },
    hat: { color: '#1E90FF', number: 1 },
  },
});
