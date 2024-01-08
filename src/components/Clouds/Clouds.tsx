import * as S from './style';

export default function Clouds() {
    return (
        <S.Container>
            <S.CloudsWrapper>
                <S.CloudLayer duration={60} delay={-30} />
                <S.CloudLayer duration={80} delay={-40} />
                <S.CloudLayer duration={100} delay={-50} />
            </S.CloudsWrapper>
        </S.Container>
    )
}
ㄴ