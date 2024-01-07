import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';
import { useRecoilValue } from 'recoil';
import { snowmanYPositionState } from '@/atoms/snowmanState';
import { snowmanDecorationState } from '@/atoms/snowmanDecorationState';

export default function Snowman() {
  const snowmanRef = useRef<THREE.Group>(null);
  const yPosition = useRecoilValue(snowmanYPositionState); // Recoil 상태 값을 사용
  const decoration = useRecoilValue(snowmanDecorationState); // Recoil 상태 값을 사용

  useFrame(() => {
    if (snowmanRef.current) {
      snowmanRef.current.rotation.x = 3 * (Math.PI / 180);
    }
  });

  return (
    <group ref={snowmanRef} position={[0, yPosition, 0]}>
        {/* 눈사람 몸체 */}
        <Sphere position={[0, 1.25, 0]} args={[0.6, 32, 32]}>
            <meshStandardMaterial color={decoration.body.color} />
        </Sphere>
        <Sphere position={[0, 0.4, 0]} args={[0.9, 32, 32]}>
            <meshStandardMaterial color={decoration.body.color} />
        </Sphere>
        <Sphere position={[0, -1.1, 0]} args={[1.2, 32, 32]}>
            <meshStandardMaterial color={decoration.body.color} />
        </Sphere>

        {/* 두 번째 몸통에 단추 추가 */}
        <Sphere position={[0, 0.6, 0.87]} args={[0.07, 32, 32]}>
            <meshStandardMaterial color="black" />
        </Sphere>
        <Sphere position={[0, 0.2, 0.87]} args={[0.07, 32, 32]}>
            <meshStandardMaterial color="black" />
        </Sphere>

        {/* 세 번째 몸통에 단추 추가 */}
        <Sphere position={[0, -0.4, 0.95]} args={[0.07, 32, 32]}>
            <meshStandardMaterial color="black" />
        </Sphere>
        <Sphere position={[0, -0.8, 1.15]} args={[0.07, 32, 32]}>
            <meshStandardMaterial color="black" />
        </Sphere>
        <Sphere position={[0, -1.2, 1.19]} args={[0.07, 32, 32]}>
            <meshStandardMaterial color="black" />
        </Sphere>

        {/* 눈 - 검은색 구 안에 흰색 점 추가 */}
        {/* 왼쪽 눈 */}
        <Sphere position={[-0.25, 1.5, 0.4]} args={[0.1, 32, 32]}>
            <meshStandardMaterial color="black" />
        </Sphere>
        <Sphere position={[-0.25, 1.55, 0.45]} args={[0.035, 32, 32]}>
            <meshStandardMaterial color="white" />
        </Sphere>

        {/* 오른쪽 눈 */}
        <Sphere position={[0.25, 1.5, 0.4]} args={[0.1, 32, 32]}>
            <meshStandardMaterial color="black" />
        </Sphere>
        <Sphere position={[0.30, 1.55, 0.45]} args={[0.028, 32, 32]}>
            <meshStandardMaterial color="white" />
        </Sphere>
        
        {/* 당근 코 - 실린더와 구체를 결합 */}
        <Cylinder position={[0, 1.4, 0.7]} args={[0.05, 0.12, 0.6, 32]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial attach="material" color="orange" />
        </Cylinder>
        <Sphere position={[0, 1.4, 1]} args={[0.05, 32, 32]}>
            <meshStandardMaterial attach="material" color="orange" />
        </Sphere>

        {/* 팔 */}
        <Cylinder position={[-0.7, 0.7, 0]} args={[0.03, 0.03, 0.9, 32]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color="brown" />
        </Cylinder>
        <Cylinder position={[0.7, 0.7, 0]} args={[0.03, 0.03, 0.9, 32]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color="brown" />
        </Cylinder>

        {/* 목도리 */}
        <Cylinder position={[0, 1.05, 0]} args={[0.63, 0.8, 0.35, 32]}>
            <meshStandardMaterial color={decoration.scarf.color} />
        </Cylinder>
        <Cylinder position={[-0.2, 1, 0.5]} args={[0.25, 0.25, 1.2, 8]}rotation={[-Math.PI / 5, 0, -Math.PI / 8]}>
            <meshStandardMaterial color={decoration.scarf.color} />
        </Cylinder>
        {/* 모자 */}
        <Cylinder position={[0, 1.68, 0]} args={[0.8, 0.8, 0.05, 32]}>
            <meshStandardMaterial color={decoration.hat.color} />
        </Cylinder>
        <Cylinder position={[0, 2.45, 0]} args={[0.6, 0.5, 1.5, 32]}>
            <meshStandardMaterial color={decoration.hat.color} />
        </Cylinder>

        {/* 손가락을 표현하기 위한 작은 실린더들 */}
        {/* 왼쪽 손가락 */}
        <Cylinder position={[-1, 0.83, 0]} args={[0.03, 0.03, 0.6, 32]} rotation={[0, 0, Math.PI / 6]}><meshStandardMaterial color="brown" /></Cylinder>
        <Cylinder position={[-1, 0.75, 0]} args={[0.03, 0.03, 0.5, 32]} rotation={[0, 0, Math.PI / 3]}><meshStandardMaterial color="brown" /></Cylinder>
        
        {/* 오른쪽 손가락 */}
        <Cylinder position={[1, 0.83, 0]} args={[0.03, 0.03, 0.6, 32]} rotation={[0, 0, -Math.PI / 6]}><meshStandardMaterial color="brown" /></Cylinder>
        <Cylinder position={[1, 0.75, 0]} args={[0.03, 0.03, 0.5, 32]} rotation={[0, 0, -Math.PI / 3]}><meshStandardMaterial color="brown" /></Cylinder>
        
         {/* 지팡이를 오른쪽 팔에 걸쳐 추가 */}
         <Cylinder 
            position={[1.2, 0.4, 0]} // 지팡이의 위치를 조정합니다
            args={[0.05, 0.04, 1.5, 32]} // 지팡이의 두께와 길이를 조정합니다
            rotation={[0, 0, Math.PI / 8]} // 지팡이의 각도를 조정합니다
        >
            <meshStandardMaterial attach="material" color="black" />
        </Cylinder>

            {/* 갈고리 형태의 손잡이 하단 부분 */}
            <Cylinder
                position={[0.93, 1.15, 0]} // 갈고리의 하단 위치를 조정합니다.
                args={[0.05, 0.05, 0.16, 16]} // 갈고리의 두께와 길이를 조정합니다.
                rotation={[0, 0, -Math.PI / 17]} // 갈고리가 바라보는 방향을 조정합니다.
            >
                <meshStandardMaterial attach="material" color="black" />
            </Cylinder>

            {/* 갈고리 형태의 손잡이 부분 */}
            <Cylinder
                position={[1, 1.277, 0]} // 갈고리의 하단 위치를 조정합니다.
                args={[0.05, 0.05, 0.19, 16]} // 갈고리의 두께와 길이를 조정합니다.
                rotation={[0, 0, -Math.PI / 4]} // 갈고리가 바라보는 방향을 조정합니다.
            >
                <meshStandardMaterial attach="material" color="black" />
            </Cylinder>
            
            {/* 갈고리 형태의 손잡이 상단 부분 */}
            <Cylinder
                position={[1.13, 1.318, 0]} // 갈고리의 상단 위치를 조정합니다.
                args={[0.05, 0.05, 0.2, 16]} // 갈고리의 두께와 길이를 조정합니다.
                rotation={[0, 0, -Math.PI / 1.9]} // 갈고리가 바라보는 방향을 조정합니다.
            >
                <meshStandardMaterial attach="material" color="black" />
            </Cylinder>

            {/* 갈고리 형태의 손잡이 하단 부분 */}
            <Cylinder
                position={[1.248, 1.274, 0]} // 갈고리의 하단 위치를 조정합니다.
                args={[0.05, 0.05, 0.13, 16]} // 갈고리의 두께와 길이를 조정합니다.
                rotation={[0, 0, Math.PI / 4]} // 갈고리가 바라보는 방향을 조정합니다.
            >
                <meshStandardMaterial attach="material" color="black" />
            </Cylinder>
    
        </group>
    );
}
