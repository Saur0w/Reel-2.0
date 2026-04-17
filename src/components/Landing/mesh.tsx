"use client";

import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface ImageProps {
    src: string;
}

const images: ImageProps[] = [
    { src: '/images/1.jpg'},
    { src: '/images/2.jpg'},
    { src: '/images/3.jpg'},
    { src: '/images/4.jpg'},
    { src: '/images/5.jpg'},
    { src: '/images/6.jpg'},
    { src: '/images/7.jpg'},
    { src: '/images/8.jpg'},
    { src: '/images/9.jpg'},
    { src: '/images/10.jpg'},
    { src: '/images/11.jpg'},
    { src: '/images/12.jpg'},
];

const PLANE_WIDTH = 2.5;
const PLANE_HEIGHT = 1.5;
const GAP = 0.05;

function Meshes() {
    const textures = useTexture(images.map(img => img.src)) as THREE.Texture[];
    const materialsRef = useRef<(THREE.ShaderMaterial | null)[]>([]);
    const groupRef = useRef<THREE.Group>(null);

}