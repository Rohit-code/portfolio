import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/theme';

const AdvancedHeroScene = () => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const { changeThemeColor } = useTheme();
  const raycasterRef = useRef(null);
  const cubeRef = useRef(null);
  const isClickedRef = useRef(false);
  const colorPausedRef = useRef(false);
  const pausedColorCycleRef = useRef(0);
  const pauseTimeoutRef = useRef(null);
  const cubeMaterialRef = useRef(null);
  const clockRef = useRef(null);
  const cubeVisibleRef = useRef(true);
  const cubeOpacityRef = useRef(1.0);
  const reappearTimeoutRef = useRef(null);
  const edgeLinesRef = useRef(null);
  const wireframeCubeRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    let { width, height } = container.getBoundingClientRect();
    
    const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEndDevice = isMobile && (navigator.hardwareConcurrency < 4 || navigator.deviceMemory < 4);
    
    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080808, 0.015);
    
    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 35);
    camera.lookAt(0, 0, 0);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    const directionalLight1 = new THREE.DirectionalLight(0x8B5CF6, 0.6);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0x06B6D4, 0.5);
    directionalLight2.position.set(-5, -5, 5);
    scene.add(directionalLight2);
    
    const pointLight = new THREE.PointLight(0xffffff, 0.3, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isLowEndDevice,
      powerPreference: isMobile ? 'low-power' : 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.domElement.style.cursor = 'pointer';
    renderer.domElement.style.pointerEvents = 'auto';
    container.appendChild(renderer.domElement);
    
    // 8 Colors: 6 dark + 2 light/white tones
    const cubeColors = [
      '#8B5CF6', // Purple (dark theme)
      '#06B6D4', // Cyan (dark theme)
      '#10B981', // Green (dark theme)
      '#F5F5F5', // Off-White (light theme)
      '#F59E0B', // Amber (dark theme)
      '#E8E4E0', // Warm White/Cream (light theme)
      '#EF4444', // Red (dark theme)
      '#EC4899', // Pink (dark theme)
    ];
    
    // Cube
    const cubeSize = isMobile ? 7 : 10;
    const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    
    const edges = new THREE.EdgesGeometry(cubeGeometry);
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      linewidth: 2,
    });
    const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
    
    const cubeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uColor1: { value: new THREE.Color(cubeColors[0]) }, // Purple
        uColor2: { value: new THREE.Color(cubeColors[1]) }, // Cyan
        uColor3: { value: new THREE.Color(cubeColors[2]) }, // Green
        uColor4: { value: new THREE.Color(cubeColors[3]) }, // Off-White
        uColor5: { value: new THREE.Color(cubeColors[4]) }, // Amber
        uColor6: { value: new THREE.Color(cubeColors[5]) }, // Warm White
        uColor7: { value: new THREE.Color(cubeColors[6]) }, // Red
        uColor8: { value: new THREE.Color(cubeColors[7]) }, // Pink
        uPaused: { value: 0.0 },
        uPausedColorCycle: { value: 0.0 },
        uOpacity: { value: 1.0 },
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec2 vUv;
        uniform float uTime;
        
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          vUv = uv;
          
          vec3 pos = position;
          float pulse = sin(uTime * 1.5) * 0.01 + 1.0;
          pos *= pulse;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform vec3 uColor4;
        uniform vec3 uColor5;
        uniform vec3 uColor6;
        uniform vec3 uColor7;
        uniform vec3 uColor8;
        uniform float uPaused;
        uniform float uPausedColorCycle;
        uniform float uOpacity;
        
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec2 vUv;
        
        void main() {
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
          vec3 lightDir1 = normalize(vec3(5.0, 5.0, 5.0));
          vec3 lightDir2 = normalize(vec3(-5.0, -5.0, 5.0));
          
          float NdotL1 = max(dot(vNormal, lightDir1), 0.0);
          float NdotL2 = max(dot(vNormal, lightDir2), 0.0);
          float lighting = 0.4 + 0.6 * (NdotL1 * 0.6 + NdotL2 * 0.5);
          
          float fresnel = pow(1.0 - max(dot(viewDirection, vNormal), 0.0), 2.0);
          
          // 8 color cycle
          float colorCycle;
          if (uPaused > 0.5) {
            colorCycle = uPausedColorCycle;
          } else {
            colorCycle = mod(uTime * 0.1, 8.0); // Slower cycle for 8 colors
          }
          
          vec3 baseColor1, baseColor2, baseColor3;
          float cycleProgress;
          
          if (colorCycle < 1.0) {
            cycleProgress = smoothstep(0.0, 1.0, colorCycle);
            baseColor1 = mix(uColor1, uColor2, cycleProgress);
            baseColor2 = mix(uColor2, uColor3, cycleProgress * 0.6);
            baseColor3 = mix(uColor3, uColor4, cycleProgress * 0.4);
          } else if (colorCycle < 2.0) {
            cycleProgress = smoothstep(0.0, 1.0, colorCycle - 1.0);
            baseColor1 = mix(uColor2, uColor3, cycleProgress);
            baseColor2 = mix(uColor3, uColor4, cycleProgress * 0.6);
            baseColor3 = mix(uColor4, uColor5, cycleProgress * 0.4);
          } else if (colorCycle < 3.0) {
            cycleProgress = smoothstep(0.0, 1.0, colorCycle - 2.0);
            baseColor1 = mix(uColor3, uColor4, cycleProgress);
            baseColor2 = mix(uColor4, uColor5, cycleProgress * 0.6);
            baseColor3 = mix(uColor5, uColor6, cycleProgress * 0.4);
          } else if (colorCycle < 4.0) {
            cycleProgress = smoothstep(0.0, 1.0, colorCycle - 3.0);
            baseColor1 = mix(uColor4, uColor5, cycleProgress);
            baseColor2 = mix(uColor5, uColor6, cycleProgress * 0.6);
            baseColor3 = mix(uColor6, uColor7, cycleProgress * 0.4);
          } else if (colorCycle < 5.0) {
            cycleProgress = smoothstep(0.0, 1.0, colorCycle - 4.0);
            baseColor1 = mix(uColor5, uColor6, cycleProgress);
            baseColor2 = mix(uColor6, uColor7, cycleProgress * 0.6);
            baseColor3 = mix(uColor7, uColor8, cycleProgress * 0.4);
          } else if (colorCycle < 6.0) {
            cycleProgress = smoothstep(0.0, 1.0, colorCycle - 5.0);
            baseColor1 = mix(uColor6, uColor7, cycleProgress);
            baseColor2 = mix(uColor7, uColor8, cycleProgress * 0.6);
            baseColor3 = mix(uColor8, uColor1, cycleProgress * 0.4);
          } else if (colorCycle < 7.0) {
            cycleProgress = smoothstep(0.0, 1.0, colorCycle - 6.0);
            baseColor1 = mix(uColor7, uColor8, cycleProgress);
            baseColor2 = mix(uColor8, uColor1, cycleProgress * 0.6);
            baseColor3 = mix(uColor1, uColor2, cycleProgress * 0.4);
          } else {
            cycleProgress = smoothstep(0.0, 1.0, colorCycle - 7.0);
            baseColor1 = mix(uColor8, uColor1, cycleProgress);
            baseColor2 = mix(uColor1, uColor2, cycleProgress * 0.6);
            baseColor3 = mix(uColor2, uColor3, cycleProgress * 0.4);
          }
          
          float mouseInfluenceX = (uMouse.x - 0.5) * 1.2;
          float mouseInfluenceY = (uMouse.y - 0.5) * 1.2;
          
          float t = sin(vPosition.x * 0.1 + uTime * 0.4 + mouseInfluenceX * 1.5) * 0.5 + 0.5;
          float t2 = cos(vPosition.y * 0.1 + uTime * 0.35 + mouseInfluenceY * 1.5) * 0.5 + 0.5;
          float t3 = sin(vPosition.z * 0.1 + uTime * 0.38) * 0.5 + 0.5;
          
          vec3 color = mix(baseColor1, baseColor2, smoothstep(0.0, 1.0, t));
          color = mix(color, baseColor3, smoothstep(0.0, 1.0, t2) * 0.5);
          color = mix(color, baseColor1, smoothstep(0.0, 1.0, t3) * 0.3);
          
          color *= lighting;
          color += fresnel * baseColor2 * 0.4;
          
          float edge = 1.0 - abs(dot(viewDirection, vNormal));
          color += edge * baseColor3 * 0.3;
          
          float sparkle = sin(vPosition.x * 1.2 + uTime * 1.5) * sin(vPosition.y * 1.2 + uTime * 1.4) * sin(vPosition.z * 1.2 + uTime * 1.45);
          color += sparkle * 0.05 * baseColor1;
          
          gl_FragColor = vec4(color, uOpacity);
        }
      `,
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: false,
    });
    
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0, 0, 0);
    cubeRef.current = cube;
    cubeMaterialRef.current = cubeMaterial;
    scene.add(cube);
    
    edgeLines.position.set(0, 0, 0);
    edgeLinesRef.current = edgeLines;
    scene.add(edgeLines);
    
    raycasterRef.current = new THREE.Raycaster();
    
    const wireframeCube = new THREE.LineSegments(
      new THREE.WireframeGeometry(cubeGeometry),
      new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.15,
      })
    );
    wireframeCube.position.set(0, 0, 0);
    wireframeCubeRef.current = wireframeCube;
    scene.add(wireframeCube);
    
    // Mouse handling
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / width;
      mouseRef.current.y = 1 - (e.clientY - rect.top) / height;
      targetRotation.current.y = (mouseRef.current.x - 0.5) * 1.2;
      targetRotation.current.x = (mouseRef.current.y - 0.5) * 1.0;
    };
    
    // Click handling
    const handleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (!cubeVisibleRef.current || isClickedRef.current) return;
      if (!raycasterRef.current || !cubeRef.current) return;
      
      const rect = container.getBoundingClientRect();
      const mouse = new THREE.Vector2();
      mouse.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / height) * 2 + 1;
      
      raycasterRef.current.setFromCamera(mouse, camera);
      const intersects = raycasterRef.current.intersectObject(cubeRef.current);
      
      if (intersects.length > 0) {
        console.log('Cube clicked!');
        isClickedRef.current = true;
        colorPausedRef.current = true;
        
        const currentElapsed = clockRef.current ? clockRef.current.getElapsedTime() : performance.now() / 1000;
        const currentColorCycle = (currentElapsed * 0.1) % 8; // 8 colors now
        pausedColorCycleRef.current = currentColorCycle;
        
        if (cubeMaterialRef.current) {
          cubeMaterialRef.current.uniforms.uPaused.value = 1.0;
          cubeMaterialRef.current.uniforms.uPausedColorCycle.value = currentColorCycle;
        }
        
        // Get current color from 8-color array
        const colorIndex = Math.floor(currentColorCycle);
        const nextIndex = (colorIndex + 1) % 8;
        const progress = currentColorCycle % 1;
        
        const color1 = new THREE.Color(cubeColors[colorIndex]);
        const color2 = new THREE.Color(cubeColors[nextIndex]);
        const interpolatedColor = color1.clone().lerp(color2, progress);
        const currentColor = `#${interpolatedColor.getHexString()}`;
        
        console.log('Current color:', currentColor, 'Index:', colorIndex);
        
        // Get cube screen position
        const cubeWorldPos = new THREE.Vector3();
        cubeRef.current.getWorldPosition(cubeWorldPos);
        cubeWorldPos.project(camera);
        const cubeScreenX = (cubeWorldPos.x * 0.5 + 0.5) * window.innerWidth;
        const cubeScreenY = (cubeWorldPos.y * -0.5 + 0.5) * window.innerHeight;
        
        changeThemeColor(currentColor, cubeScreenX, cubeScreenY);
        
        // Dissolve
        cubeVisibleRef.current = false;
        const dissolveDuration = 4500;
        const startOpacity = cubeOpacityRef.current;
        const startTime = performance.now();
        
        const edgeMat = edgeLinesRef.current?.material;
        const wireframeMat = wireframeCubeRef.current?.material;
        const startEdgeOpacity = edgeMat?.opacity || 0.4;
        const startWireframeOpacity = wireframeMat?.opacity || 0.15;
        
        const dissolve = () => {
          const elapsed = performance.now() - startTime;
          const progress = Math.min(elapsed / dissolveDuration, 1);
          const organicEase = 1 - Math.pow(1 - progress, 2.5);
          
          cubeOpacityRef.current = startOpacity * (1 - organicEase);
          if (edgeMat) edgeMat.opacity = startEdgeOpacity * (1 - organicEase);
          if (wireframeMat) wireframeMat.opacity = startWireframeOpacity * (1 - organicEase);
          
          if (cubeMaterialRef.current) {
            cubeMaterialRef.current.uniforms.uOpacity.value = cubeOpacityRef.current;
          }
          
          if (progress < 1) {
            requestAnimationFrame(dissolve);
          } else {
            if (cubeRef.current) cubeRef.current.visible = false;
            if (edgeLinesRef.current) edgeLinesRef.current.visible = false;
            if (wireframeCubeRef.current) wireframeCubeRef.current.visible = false;
            
            // Reappear after 30 seconds
            reappearTimeoutRef.current = setTimeout(() => {
              console.log('Cube reappearing');
              cubeVisibleRef.current = true;
              isClickedRef.current = false;
              colorPausedRef.current = false;
              
              if (cubeRef.current) cubeRef.current.visible = true;
              if (edgeLinesRef.current) edgeLinesRef.current.visible = true;
              if (wireframeCubeRef.current) wireframeCubeRef.current.visible = true;
              
              const fadeInDuration = 3000;
              const fadeStartTime = performance.now();
              
              const fadeIn = () => {
                const elapsed = performance.now() - fadeStartTime;
                const progress = Math.min(elapsed / fadeInDuration, 1);
                const organicEaseIn = Math.pow(progress, 2.2);
                
                cubeOpacityRef.current = organicEaseIn;
                if (edgeMat) edgeMat.opacity = startEdgeOpacity * organicEaseIn;
                if (wireframeMat) wireframeMat.opacity = startWireframeOpacity * organicEaseIn;
                
                if (cubeMaterialRef.current) {
                  cubeMaterialRef.current.uniforms.uOpacity.value = cubeOpacityRef.current;
                }
                
                if (progress < 1) {
                  requestAnimationFrame(fadeIn);
                } else {
                  if (cubeMaterialRef.current) {
                    cubeMaterialRef.current.uniforms.uPaused.value = 0.0;
                  }
                  console.log('Cube fade in complete');
                }
              };
              
              fadeIn();
            }, 30000);
          }
        };
        
        dissolve();
      }
    };
    
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        const touch = e.touches[0];
        mouseRef.current.x = (touch.clientX - rect.left) / width;
        mouseRef.current.y = 1 - (touch.clientY - rect.top) / height;
        targetRotation.current.y = (mouseRef.current.x - 0.5) * 0.8;
        targetRotation.current.x = (mouseRef.current.y - 0.5) * 0.6;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    const clickHandler = handleClick;
    container.addEventListener('click', clickHandler, true);
    renderer.domElement.addEventListener('click', clickHandler, true);
    
    // Animation loop
    let animationId;
    const clock = new THREE.Clock();
    clockRef.current = clock;
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      
      cubeMaterial.uniforms.uTime.value = elapsed;
      cubeMaterial.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
      
      cube.rotation.x = elapsed * 0.5 + targetRotation.current.x * 0.8;
      cube.rotation.y = elapsed * 0.6 + targetRotation.current.y * 0.8;
      cube.rotation.z = elapsed * 0.4;
      
      if (edgeLinesRef.current) edgeLinesRef.current.rotation.copy(cube.rotation);
      if (wireframeCubeRef.current) wireframeCubeRef.current.rotation.copy(cube.rotation);
      
      // Wireframe color (8 colors)
      if (wireframeCubeRef.current && !colorPausedRef.current) {
        const wireframeMaterial = wireframeCubeRef.current.material;
        const cycle = (elapsed * 0.1) % 8;
        
        const cycleKey = Math.floor(cycle * 10);
        if (!wireframeMaterial.userData.lastCycleKey || wireframeMaterial.userData.lastCycleKey !== cycleKey) {
          wireframeMaterial.userData.lastCycleKey = cycleKey;
          
          const colors8 = cubeColors.map(c => new THREE.Color(c));
          const smoothStep = (t) => t * t * (3 - 2 * t);
          
          let wireframeColor = new THREE.Color();
          const idx = Math.floor(cycle);
          const nextIdx = (idx + 1) % 8;
          const progress = smoothStep(cycle % 1);
          
          wireframeColor.lerpColors(colors8[idx], colors8[nextIdx], progress);
          wireframeMaterial.color.copy(wireframeColor);
        }
      }
      
      camera.position.x += (targetRotation.current.y * 5 - camera.position.x) * 0.02;
      camera.position.y += (targetRotation.current.x * 5 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };
    animate();
    
    // Resize
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
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
      if (reappearTimeoutRef.current) clearTimeout(reappearTimeoutRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('click', clickHandler, true);
      renderer.domElement?.removeEventListener('click', clickHandler, true);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [changeThemeColor]);
  
  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};

export default AdvancedHeroScene;