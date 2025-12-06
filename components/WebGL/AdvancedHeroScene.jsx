// Paste the AdvancedHeroScene.jsx code from code.txt here (lines 1-401)

import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

const AdvancedHeroScene = () => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetRotation = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    let { width, height } = container.getBoundingClientRect();
    
    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080808, 0.015);
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);
    
    // === FLOATING 3D TORUS KNOT (Central Element) ===
    const torusKnotGeometry = new THREE.TorusKnotGeometry(8, 2.5, 200, 32);
    const torusKnotMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uColor1: { value: new THREE.Color('#8B5CF6') },
        uColor2: { value: new THREE.Color('#06B6D4') },
        uColor3: { value: new THREE.Color('#10B981') },
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        uniform float uTime;
        
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          vUv = uv;
          
          vec3 pos = position;
          float displacement = sin(pos.x * 0.5 + uTime) * sin(pos.y * 0.5 + uTime) * 0.3;
          pos += normal * displacement;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        
        void main() {
          // Fresnel effect
          vec3 viewDirection = normalize(cameraPosition - vPosition);
          float fresnel = pow(1.0 - max(dot(viewDirection, vNormal), 0.0), 3.0);
          
          // Animated gradient
          float t = sin(vPosition.x * 0.1 + uTime * 0.5) * 0.5 + 0.5;
          float t2 = cos(vPosition.y * 0.1 + uTime * 0.3) * 0.5 + 0.5;
          
          vec3 color = mix(uColor1, uColor2, t);
          color = mix(color, uColor3, t2 * 0.5);
          
          // Add fresnel glow
          color += fresnel * uColor1 * 0.8;
          
          // Edge glow
          float edge = 1.0 - abs(dot(viewDirection, vNormal));
          color += edge * uColor2 * 0.3;
          
          float alpha = 0.6 + fresnel * 0.4;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    
    const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
    torusKnot.position.set(25, 0, -20);
    scene.add(torusKnot);
    
    // === WIREFRAME ICOSAHEDRON ===
    const icoGeometry = new THREE.IcosahedronGeometry(12, 1);
    const icoWireframe = new THREE.WireframeGeometry(icoGeometry);
    const icoMaterial = new THREE.LineBasicMaterial({
      color: 0x8B5CF6,
      transparent: true,
      opacity: 0.3,
    });
    const icoLines = new THREE.LineSegments(icoWireframe, icoMaterial);
    icoLines.position.set(-30, 10, -30);
    scene.add(icoLines);
    
    // === FLOATING GEOMETRIC SHAPES ===
    const shapes = [];
    const shapeGeometries = [
      new THREE.OctahedronGeometry(2),
      new THREE.TetrahedronGeometry(2.5),
      new THREE.IcosahedronGeometry(1.8),
      new THREE.DodecahedronGeometry(2),
    ];
    
    for (let i = 0; i < 20; i++) {
      const geometry = shapeGeometries[i % shapeGeometries.length];
      const material = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? 0x8B5CF6 : i % 3 === 1 ? 0x06B6D4 : 0x10B981,
        wireframe: true,
        transparent: true,
        opacity: 0.4 + Math.random() * 0.3,
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40 - 20
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        floatSpeed: 0.5 + Math.random() * 1,
        floatOffset: Math.random() * Math.PI * 2,
        originalY: mesh.position.y,
      };
      
      shapes.push(mesh);
      scene.add(mesh);
    }
    
    // === PARTICLE GALAXY ===
    const galaxyCount = 3000;
    const galaxyGeometry = new THREE.BufferGeometry();
    const galaxyPositions = new Float32Array(galaxyCount * 3);
    const galaxyColors = new Float32Array(galaxyCount * 3);
    const galaxySizes = new Float32Array(galaxyCount);
    
    const colorInside = new THREE.Color('#8B5CF6');
    const colorOutside = new THREE.Color('#06B6D4');
    
    for (let i = 0; i < galaxyCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 50 + 5;
      const spinAngle = radius * 0.5;
      const branchAngle = ((i % 3) / 3) * Math.PI * 2;
      
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 5;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 5;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 5;
      
      galaxyPositions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      galaxyPositions[i3 + 1] = randomY;
      galaxyPositions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ - 30;
      
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / 55);
      
      galaxyColors[i3] = mixedColor.r;
      galaxyColors[i3 + 1] = mixedColor.g;
      galaxyColors[i3 + 2] = mixedColor.b;
      
      galaxySizes[i] = Math.random() * 2 + 0.5;
    }
    
    galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(galaxyPositions, 3));
    galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(galaxyColors, 3));
    galaxyGeometry.setAttribute('size', new THREE.BufferAttribute(galaxySizes, 1));
    
    const galaxyMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: renderer.getPixelRatio() },
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        uniform float uTime;
        uniform float uPixelRatio;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          float angle = uTime * 0.1;
          float s = sin(angle);
          float c = cos(angle);
          pos.xz = mat2(c, -s, s, c) * pos.xz;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * uPixelRatio * (30.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          
          float alpha = 1.0 - smoothstep(0.0, 0.5, d);
          alpha *= 0.8;
          
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });
    
    const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
    galaxy.position.set(0, -10, 0);
    scene.add(galaxy);
    
    // === GLOWING RING ===
    const ringGeometry = new THREE.TorusGeometry(20, 0.3, 16, 100);
    const ringMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#8B5CF6') },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor;
        varying vec2 vUv;
        
        void main() {
          float pulse = sin(vUv.x * 20.0 + uTime * 3.0) * 0.5 + 0.5;
          float alpha = 0.3 + pulse * 0.4;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });
    
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI * 0.5;
    ring.position.set(25, 0, -20);
    scene.add(ring);
    
    // === FLOATING LIGHT ORBS ===
    const orbGroup = new THREE.Group();
    for (let i = 0; i < 8; i++) {
      const orbGeometry = new THREE.SphereGeometry(0.5, 16, 16);
      const orbMaterial = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x8B5CF6 : 0x06B6D4,
        transparent: true,
        opacity: 0.8,
      });
      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      
      const angle = (i / 8) * Math.PI * 2;
      const radius = 25;
      orb.position.set(
        Math.cos(angle) * radius + 25,
        Math.sin(angle) * 5,
        Math.sin(angle) * radius - 20
      );
      orb.userData = { angle, radius, speed: 0.3 + Math.random() * 0.2 };
      orbGroup.add(orb);
    }
    scene.add(orbGroup);
    
    // === MOUSE HANDLING ===
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX / width;
      mouseRef.current.y = 1 - e.clientY / height;
      targetRotation.current.y = (mouseRef.current.x - 0.5) * 0.5;
      targetRotation.current.x = (mouseRef.current.y - 0.5) * 0.3;
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // === ANIMATION LOOP ===
    let animationId;
    const clock = new THREE.Clock();
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      
      // Update uniforms
      torusKnotMaterial.uniforms.uTime.value = elapsed;
      torusKnotMaterial.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
      galaxyMaterial.uniforms.uTime.value = elapsed;
      ringMaterial.uniforms.uTime.value = elapsed;
      
      // Rotate torus knot
      torusKnot.rotation.x = elapsed * 0.1 + targetRotation.current.x;
      torusKnot.rotation.y = elapsed * 0.15 + targetRotation.current.y;
      
      // Rotate icosahedron
      icoLines.rotation.x = elapsed * 0.1;
      icoLines.rotation.y = elapsed * 0.15;
      
      // Animate floating shapes
      shapes.forEach((shape) => {
        const { rotationSpeed, floatSpeed, floatOffset, originalY } = shape.userData;
        shape.rotation.x += rotationSpeed.x;
        shape.rotation.y += rotationSpeed.y;
        shape.rotation.z += rotationSpeed.z;
        shape.position.y = originalY + Math.sin(elapsed * floatSpeed + floatOffset) * 2;
      });
      
      // Animate ring
      ring.rotation.z = elapsed * 0.2;
      
      // Animate orbs
      orbGroup.children.forEach((orb, i) => {
        const { angle, radius, speed } = orb.userData;
        orb.position.x = Math.cos(angle + elapsed * speed) * radius + 25;
        orb.position.z = Math.sin(angle + elapsed * speed) * radius - 20;
        orb.position.y = Math.sin(elapsed * 2 + i) * 3;
      });
      
      // Camera follow mouse
      camera.position.x += (targetRotation.current.y * 10 - camera.position.x) * 0.02;
      camera.position.y += (targetRotation.current.x * 10 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, -20);
      
      renderer.render(scene, camera);
    };
    animate();
    
    // === RESIZE ===
    const handleResize = () => {
      const { width: w, height: h } = container.getBoundingClientRect();
      width = w;
      height = h;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);
  
  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default AdvancedHeroScene;