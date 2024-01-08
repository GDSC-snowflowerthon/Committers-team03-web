import { useRecoilValue } from 'recoil';
import { snowmanHeightState } from '@/atoms/snowmanState';
import { useLocation } from 'react-router-dom';

export const useBackgroundTheme = () => {
    const location = useLocation();
    const snowmanHeight = useRecoilValue(snowmanHeightState);
    const topScrollRoutes = ['/', '/custom', '/ranking', '/follow', '/register'];

    const calculateGradient = (height: number): string => {
        const gradientStart = Math.min(100, (height - 250) / 150 * 100);
        const gradientEnd = Math.min(100, gradientStart + 50);

        // 특정 경로에서는 기본 색상 반환
        if (topScrollRoutes.includes(location.pathname)) {
            return '#90C9F6';
        }

        if (height < 250) {
            return '#90C9F6'; // 기본 색상
        } else if (height >= 250 && height < 400) {
            return `linear-gradient(to bottom, #2E44BC ${gradientStart}%, #90C9F6 ${gradientEnd}%)`;
        } else {
            return '#2E44BC';
        }
    };

    return calculateGradient(snowmanHeight);
};
