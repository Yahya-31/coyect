import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GrowthNeuralNetworkProps {
  className?: string;
  focusedCluster?: 'ai' | 'marketing' | 'automation' | null;
  interactive?: boolean;
}

export default function GrowthNeuralNetwork({
  className = '',
  focusedCluster = null,
  interactive = true,
}: GrowthNeuralNetworkProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    // Soft white fog for depth fading
    scene.fog = new THREE.FogExp2(0xffffff, 0.0014);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      1,
      2000
    );
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xffffff, 1);
    container.appendChild(renderer.domElement);

    // 2. Generate Glow Particle Texture programmatically
    const createGlowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(37, 99, 235, 1)');
      grad.addColorStop(0.2, 'rgba(59, 130, 246, 0.85)');
      grad.addColorStop(0.5, 'rgba(96, 165, 250, 0.35)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const particleTexture = createGlowTexture();

    // 3. Node Points Setup (~600 on desktop, 180 on mobile)
    const particleCount = isMobile ? 180 : 550;
    const maxDistance = isMobile ? 85 : 115;
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];
    const basePositions: { x: number; y: number; z: number }[] = [];

    const spreadX = 1100;
    const spreadY = 750;
    const spreadZ = 600;

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * spreadX;
      const y = (Math.random() - 0.5) * spreadY;
      const z = (Math.random() - 0.5) * spreadZ;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      basePositions.push({ x, y, z });

      velocities.push({
        x: (Math.random() - 0.5) * 0.45,
        y: (Math.random() - 0.5) * 0.45,
        z: (Math.random() - 0.5) * 0.35,
      });
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x2563eb,
      size: isMobile ? 6 : 8,
      map: particleTexture || undefined,
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      opacity: 0.9,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Core glowing center sphere (the Neural Nucleus)
    const nucleusGeometry = new THREE.SphereGeometry(28, 32, 32);
    const nucleusMaterial = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    nucleus.position.set(220, 0, -50);
    scene.add(nucleus);

    // Inner glowing core
    const innerNucleus = new THREE.Mesh(
      new THREE.SphereGeometry(12, 16, 16),
      new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.85,
      })
    );
    nucleus.add(innerNucleus);

    // 4. Dynamic Connecting Lines
    const maxConnections = particleCount * 6;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      opacity: 0.5,
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // 5. Mouse & Interaction Tracking
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      worldX: 0,
      worldY: 0,
      active: false,
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      mouse.targetX = normX * 220;
      mouse.targetY = normY * 160;
      mouse.worldX = normX * 450;
      mouse.worldY = normY * 300;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    // Scroll tracking for "growth axis"
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Handle Camera movement based on mouse + scroll + cluster focus
      let targetCamX = mouse.x * 0.6;
      let targetCamY = mouse.y * 0.6 + scrollY * 0.12;
      let targetCamZ = 600 - Math.min(scrollY * 0.25, 200);

      if (focusedCluster === 'ai') {
        targetCamX = -150;
        targetCamY = 50;
        targetCamZ = 450;
      } else if (focusedCluster === 'marketing') {
        targetCamX = 0;
        targetCamY = -50;
        targetCamZ = 420;
      } else if (focusedCluster === 'automation') {
        targetCamX = 180;
        targetCamY = 50;
        targetCamZ = 460;
      }

      camera.position.x += (targetCamX - camera.position.x) * 0.04;
      camera.position.y += (targetCamY - camera.position.y) * 0.04;
      camera.position.z += (targetCamZ - camera.position.z) * 0.04;
      camera.lookAt(0, 0, 0);

      // Rotate nucleus
      nucleus.rotation.y = elapsedTime * 0.3;
      nucleus.rotation.x = elapsedTime * 0.15;

      // Pulse nucleus scale
      const pulseScale = 1 + Math.sin(elapsedTime * 2) * 0.08;
      nucleus.scale.set(pulseScale, pulseScale, pulseScale);

      // Scroll growth factor (nodes condense into organized network as user scrolls)
      const scrollProgress = Math.min(scrollY / 1500, 1);
      const activeMaxDist = maxDistance * (1 + scrollProgress * 0.4);

      // Update particle positions
      const posAttr = particlesGeometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      let lineVertexIndex = 0;
      let colorVertexIndex = 0;

      for (let i = 0; i < particleCount; i++) {
        if (!prefersReducedMotion) {
          posArray[i * 3] += velocities[i].x;
          posArray[i * 3 + 1] += velocities[i].y;
          posArray[i * 3 + 2] += velocities[i].z;

          // Boundary bouncing
          const halfX = spreadX / 2;
          const halfY = spreadY / 2;
          const halfZ = spreadZ / 2;

          if (posArray[i * 3] < -halfX || posArray[i * 3] > halfX) velocities[i].x *= -1;
          if (posArray[i * 3 + 1] < -halfY || posArray[i * 3 + 1] > halfY) velocities[i].y *= -1;
          if (posArray[i * 3 + 2] < -halfZ || posArray[i * 3 + 2] > halfZ) velocities[i].z *= -1;

          // Lean toward cursor if mouse is active
          if (mouse.active) {
            const dx = mouse.worldX - posArray[i * 3];
            const dy = mouse.worldY - posArray[i * 3 + 1];
            const distMouse = Math.sqrt(dx * dx + dy * dy);

            if (distMouse < 260) {
              const force = (260 - distMouse) / 260;
              posArray[i * 3] += dx * force * 0.015;
              posArray[i * 3 + 1] += dy * force * 0.015;
            }
          }
        }

        // Connect nearby nodes
        for (let j = i + 1; j < particleCount; j++) {
          const dx = posArray[i * 3] - posArray[j * 3];
          const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
          const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < activeMaxDist && lineVertexIndex < maxConnections * 6 - 6) {
            const alpha = 1.0 - dist / activeMaxDist;

            // Vertex 1
            linePositions[lineVertexIndex++] = posArray[i * 3];
            linePositions[lineVertexIndex++] = posArray[i * 3 + 1];
            linePositions[lineVertexIndex++] = posArray[i * 3 + 2];

            // Vertex 2
            linePositions[lineVertexIndex++] = posArray[j * 3];
            linePositions[lineVertexIndex++] = posArray[j * 3 + 1];
            linePositions[lineVertexIndex++] = posArray[j * 3 + 2];

            // Secondary Blue colors (#2563eb to #3b82f6) with alpha intensity
            const intensity = alpha * 0.75;
            lineColors[colorVertexIndex++] = 0.14 * intensity;
            lineColors[colorVertexIndex++] = 0.38 * intensity;
            lineColors[colorVertexIndex++] = 0.92 * intensity;

            lineColors[colorVertexIndex++] = 0.23 * intensity;
            lineColors[colorVertexIndex++] = 0.51 * intensity;
            lineColors[colorVertexIndex++] = 0.96 * intensity;
          }
        }
      }

      posAttr.needsUpdate = true;

      // Update lines count
      linesGeometry.setDrawRange(0, lineVertexIndex / 3);
      (linesGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (linesGeometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (container) {
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      particlesGeometry.dispose();
      particlesMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      nucleusGeometry.dispose();
      nucleusMaterial.dispose();
      if (particleTexture) particleTexture.dispose();
      renderer.dispose();
    };
  }, [focusedCluster, interactive]);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
