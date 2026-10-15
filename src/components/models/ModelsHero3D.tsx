import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ModelsHero3DProps {
  className?: string;
}

export default function ModelsHero3D({ className = '' }: ModelsHero3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040913, 0.0015);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      2000
    );
    camera.position.z = isMobile ? 380 : 320;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Lights with Neon Glass palette (Cyan, Violet, Magenta)
    const ambientLight = new THREE.AmbientLight(0x071022, 2.5);
    scene.add(ambientLight);

    // Primary Cyan key light
    const cyanLight = new THREE.PointLight(0x22d3ee, 8, 800);
    cyanLight.position.set(-180, 120, 150);
    scene.add(cyanLight);

    // Secondary Violet fill light
    const violetLight = new THREE.PointLight(0x8b5cf6, 7, 800);
    violetLight.position.set(180, -100, 100);
    scene.add(violetLight);

    // Magenta Rim Light
    const magentaLight = new THREE.PointLight(0xec4899, 5, 600);
    magentaLight.position.set(0, 180, -100);
    scene.add(magentaLight);

    // 3. Central Glowing Glass Crystal Orb
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    // Outer Glass Sphere
    const orbGeometry = new THREE.SphereGeometry(60, 64, 64);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.9,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
      reflectivity: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      attenuationColor: new THREE.Color(0x22d3ee),
      attenuationDistance: 120,
    });

    const centralOrb = new THREE.Mesh(orbGeometry, glassMaterial);
    orbGroup.add(centralOrb);

    // Inner Glowing Core (Cyan & Violet Gradient)
    const innerCoreGeometry = new THREE.IcosahedronGeometry(26, 3);
    const innerCoreMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerCore = new THREE.Mesh(innerCoreGeometry, innerCoreMaterial);
    orbGroup.add(innerCore);

    // Inner Radiant Nucleus
    const nucleus = new THREE.Mesh(
      new THREE.SphereGeometry(14, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x22d3ee,
        transparent: true,
        opacity: 0.85,
      })
    );
    orbGroup.add(nucleus);

    // 4. Six Orbiting Glass 3D Objects
    // Chat Bubble, Light Funnel, Gears, Chart Prism, Creative Prism, Eye Lens
    const orbitGeometries = [
      new THREE.TorusGeometry(14, 5, 24, 32), // Speech bubble ring
      new THREE.ConeGeometry(12, 28, 32), // Light Funnel
      new THREE.CylinderGeometry(16, 16, 6, 8), // Gear disk
      new THREE.BoxGeometry(16, 26, 16), // Chart Prism
      new THREE.OctahedronGeometry(16, 0), // Creative Prism
      new THREE.TorusGeometry(15, 3.5, 16, 40), // Eye Lens
    ];

    const orbitColors = [
      0x22d3ee, // cyan
      0x8b5cf6, // violet
      0x22d3ee, // cyan
      0xec4899, // magenta
      0x8b5cf6, // violet
      0x22d3ee, // cyan
    ];

    const orbitingObjects: THREE.Mesh[] = [];
    const orbitRadius = isMobile ? 120 : 155;

    for (let i = 0; i < 6; i++) {
      const mat = new THREE.MeshPhysicalMaterial({
        color: orbitColors[i],
        transmission: 0.85,
        opacity: 0.95,
        transparent: true,
        roughness: 0.15,
        metalness: 0.1,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
      });

      const mesh = new THREE.Mesh(orbitGeometries[i], mat);
      scene.add(mesh);
      orbitingObjects.push(mesh);
    }

    // Floating subtle background particles
    const particleCount = isMobile ? 40 : 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 800;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 600;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 500;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 3,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Mouse Parallax Tracking
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.targetX = normX * 45;
      mouse.targetY = normY * 30;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      camera.position.x = mouse.x;
      camera.position.y = mouse.y;
      camera.lookAt(0, 0, 0);

      // Central Orb pulse and slow rotation
      orbGroup.rotation.y = elapsed * 0.25;
      orbGroup.rotation.x = Math.sin(elapsed * 0.5) * 0.15;
      innerCore.rotation.y = -elapsed * 0.4;
      innerCore.rotation.z = elapsed * 0.2;

      // Floating breathing motion
      orbGroup.position.y = Math.sin(elapsed * 1.2) * 8;

      // Light sweep
      cyanLight.position.x = Math.sin(elapsed * 0.8) * 220;
      cyanLight.position.z = Math.cos(elapsed * 0.8) * 180;
      violetLight.position.x = -Math.sin(elapsed * 0.7) * 200;
      violetLight.position.z = -Math.cos(elapsed * 0.7) * 160;

      // Animate 6 orbiting glass objects
      orbitingObjects.forEach((obj, idx) => {
        const baseAngle = (idx / 6) * Math.PI * 2;
        const currentAngle = baseAngle + elapsed * 0.35;
        const tiltAngle = (idx % 2 === 0 ? 0.35 : -0.35);

        obj.position.x = Math.cos(currentAngle) * orbitRadius;
        obj.position.z = Math.sin(currentAngle) * orbitRadius;
        obj.position.y = Math.sin(currentAngle * 2 + idx) * 28 + Math.sin(elapsed * 1.5 + idx) * 6;

        // Individual object spins
        obj.rotation.x = elapsed * (0.8 + idx * 0.1);
        obj.rotation.y = elapsed * (0.6 + idx * 0.1);
        obj.rotation.z = tiltAngle;
      });

      // Background particles drift
      particles.rotation.y = elapsed * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      orbGeometry.dispose();
      glassMaterial.dispose();
      innerCoreGeometry.dispose();
      innerCoreMaterial.dispose();
      orbitGeometries.forEach((g) => g.dispose());
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
