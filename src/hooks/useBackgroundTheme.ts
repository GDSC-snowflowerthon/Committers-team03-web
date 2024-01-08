import { useRecoilValue } from 'recoil';
import { snowmanHeightState } from '@/atoms/snowmanState';

export const useBackgroundTheme = () => {
    const snowmanHeight = useRecoilValue(snowmanHeightState);
  
    const calculateGradient = (height: number): string => {
      // 높이에 따른 그라데이션 비율 계산
      const gradientStart = Math.min(100, (height - 250) / 150 * 100);
      const gradientEnd = Math.min(100, gradientStart + 50);
  
      if (height < 250) {
        return '#90C9F6'; // 기본 색상
      } else if (height >= 250 && height < 400) {
        // 그라데이션 적용
        return `linear-gradient(to bottom, #2E44BC ${gradientStart}%, #90C9F6 ${gradientEnd}%)`;
      } else {
        return '#2E44BC'; // 네이비색
      }
    };
  
    return calculateGradient(snowmanHeight);
  };
  