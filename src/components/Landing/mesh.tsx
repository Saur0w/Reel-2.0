"use client";

import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface ImageProps {
    src: string;
}

const images: ImageProps[] = [
    { src: }
];