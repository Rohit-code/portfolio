(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/WebGL/AdvancedHeroScene.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Paste the AdvancedHeroScene.jsx code from code.txt here (lines 1-401)
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
const AdvancedHeroScene = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0.5,
        y: 0.5
    });
    const targetRotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdvancedHeroScene.useEffect": ()=>{
            if (!containerRef.current) return;
            const container = containerRef.current;
            let { width, height } = container.getBoundingClientRect();
            // Detect mobile device
            const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const isLowEndDevice = isMobile && (navigator.hardwareConcurrency < 4 || navigator.deviceMemory < 4);
            // Scene
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FogExp2"](0x080808, 0.015);
            // Camera - centered with better perspective
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](50, width / height, 0.1, 1000);
            camera.position.set(0, 0, 35);
            camera.lookAt(0, 0, 0);
            // Add lighting to show cube structure better
            const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0xffffff, 0.4);
            scene.add(ambientLight);
            const directionalLight1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0x8B5CF6, 0.6);
            directionalLight1.position.set(5, 5, 5);
            scene.add(directionalLight1);
            const directionalLight2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0x06B6D4, 0.5);
            directionalLight2.position.set(-5, -5, 5);
            scene.add(directionalLight2);
            const pointLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0xffffff, 0.3, 100);
            pointLight.position.set(0, 0, 10);
            scene.add(pointLight);
            // Renderer
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                alpha: true,
                antialias: !isLowEndDevice,
                powerPreference: isMobile ? 'low-power' : 'high-performance'
            });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
            renderer.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
            renderer.toneMappingExposure = 1.2;
            container.appendChild(renderer.domElement);
            // === ROTATING CUBE (Central Element - Mouse Responsive) ===
            const cubeSize = isMobile ? 7 : 10;
            const cubeGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](cubeSize, cubeSize, cubeSize);
            // Add edge subdivision for better cube definition
            const edges = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgesGeometry"](cubeGeometry);
            const edgeMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: 0xffffff,
                transparent: true,
                opacity: 0.4,
                linewidth: 2
            });
            const edgeLines = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSegments"](edges, edgeMaterial);
            const cubeMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uMouse: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0.5, 0.5)
                    },
                    uColor1: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#8B5CF6')
                    },
                    uColor2: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#06B6D4')
                    },
                    uColor3: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#10B981')
                    },
                    uColor4: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#F59E0B')
                    },
                    uColor5: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#EF4444')
                    },
                    uColor6: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#EC4899')
                    }
                },
                vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uMouse;
        
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          vUv = uv;
          
          vec3 pos = position;
          // Very subtle pulsing effect
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
        
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec2 vUv;
        
        void main() {
          // Calculate lighting for proper 3D appearance
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
          vec3 lightDir1 = normalize(vec3(5.0, 5.0, 5.0));
          vec3 lightDir2 = normalize(vec3(-5.0, -5.0, 5.0));
          
          // Diffuse lighting
          float NdotL1 = max(dot(vNormal, lightDir1), 0.0);
          float NdotL2 = max(dot(vNormal, lightDir2), 0.0);
          float lighting = 0.4 + 0.6 * (NdotL1 * 0.6 + NdotL2 * 0.5);
          
          // Fresnel effect
          float fresnel = pow(1.0 - max(dot(viewDirection, vNormal), 0.0), 2.0);
          
          // Smooth time-based color cycling through all luxury colors
          // Slower transition speed for smoother changes
          float colorCycle = mod(uTime * 0.12, 6.0);
          
          // Smooth interpolation using smoothstep (built-in GLSL function)
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
            baseColor3 = mix(uColor6, uColor1, cycleProgress * 0.4);
          } else if (colorCycle < 5.0) {
            cycleProgress = smoothstep(0.0, 1.0, colorCycle - 4.0);
            baseColor1 = mix(uColor5, uColor6, cycleProgress);
            baseColor2 = mix(uColor6, uColor1, cycleProgress * 0.6);
            baseColor3 = mix(uColor1, uColor2, cycleProgress * 0.4);
          } else {
            cycleProgress = smoothstep(0.0, 1.0, colorCycle - 5.0);
            baseColor1 = mix(uColor6, uColor1, cycleProgress);
            baseColor2 = mix(uColor1, uColor2, cycleProgress * 0.6);
            baseColor3 = mix(uColor2, uColor3, cycleProgress * 0.4);
          }
          
          // Mouse-influenced gradient with smooth position-based variation
          float mouseInfluenceX = (uMouse.x - 0.5) * 1.2;
          float mouseInfluenceY = (uMouse.y - 0.5) * 1.2;
          
          // Slower, smoother gradients
          float t = sin(vPosition.x * 0.1 + uTime * 0.4 + mouseInfluenceX * 1.5) * 0.5 + 0.5;
          float t2 = cos(vPosition.y * 0.1 + uTime * 0.35 + mouseInfluenceY * 1.5) * 0.5 + 0.5;
          float t3 = sin(vPosition.z * 0.1 + uTime * 0.38) * 0.5 + 0.5;
          
          // Smooth multi-color mixing with eased transitions
          vec3 color = mix(baseColor1, baseColor2, smoothstep(0.0, 1.0, t));
          color = mix(color, baseColor3, smoothstep(0.0, 1.0, t2) * 0.5);
          color = mix(color, baseColor1, smoothstep(0.0, 1.0, t3) * 0.3);
          
          // Apply lighting to show cube faces properly
          color *= lighting;
          
          // Add fresnel glow with smooth color variation
          color += fresnel * baseColor2 * 0.4;
          
          // Edge glow with smooth luxury shimmer (subtle)
          float edge = 1.0 - abs(dot(viewDirection, vNormal));
          color += edge * baseColor3 * 0.3;
          
          // Subtle sparkle effect
          float sparkle = sin(vPosition.x * 1.2 + uTime * 1.5) * sin(vPosition.y * 1.2 + uTime * 1.4) * sin(vPosition.z * 1.2 + uTime * 1.45);
          color += sparkle * 0.05 * baseColor1;
          
          // Make cube fully opaque (no transparency)
          float alpha = 1.0;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
                transparent: false,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrontSide"],
                depthWrite: true,
                wireframe: false
            });
            const cube = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](cubeGeometry, cubeMaterial);
            cube.position.set(0, 0, 0);
            scene.add(cube);
            // Add edge lines to clearly show cube structure
            edgeLines.position.set(0, 0, 0);
            scene.add(edgeLines);
            // Wireframe cube for extra detail (subtle)
            const wireframeCube = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSegments"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WireframeGeometry"](cubeGeometry), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: 0xffffff,
                transparent: true,
                opacity: 0.15
            }));
            wireframeCube.position.set(0, 0, 0);
            scene.add(wireframeCube);
            // === WIREFRAME ICOSAHEDRON (Background decoration) ===
            const icoGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](12, 1);
            const icoWireframe = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WireframeGeometry"](icoGeometry);
            const icoMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: 0x8B5CF6,
                transparent: true,
                opacity: 0.2
            });
            const icoLines = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSegments"](icoWireframe, icoMaterial);
            icoLines.position.set(0, 0, -15);
            scene.add(icoLines);
            // === FLOATING GEOMETRIC SHAPES ===
            const shapes = [];
            const shapeGeometries = [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OctahedronGeometry"](2),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TetrahedronGeometry"](2.5),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](1.8),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DodecahedronGeometry"](2)
            ];
            const shapeCount = isMobile ? isLowEndDevice ? 8 : 12 : 20;
            for(let i = 0; i < shapeCount; i++){
                const geometry = shapeGeometries[i % shapeGeometries.length];
                const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                    color: i % 3 === 0 ? 0x8B5CF6 : i % 3 === 1 ? 0x06B6D4 : 0x10B981,
                    wireframe: true,
                    transparent: true,
                    opacity: 0.4 + Math.random() * 0.3
                });
                const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
                mesh.position.set((Math.random() - 0.5) * 80, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 30 - 10);
                mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
                mesh.userData = {
                    rotationSpeed: {
                        x: (Math.random() - 0.5) * 0.02,
                        y: (Math.random() - 0.5) * 0.02,
                        z: (Math.random() - 0.5) * 0.02
                    },
                    floatSpeed: 0.5 + Math.random() * 1,
                    floatOffset: Math.random() * Math.PI * 2,
                    originalY: mesh.position.y
                };
                shapes.push(mesh);
                scene.add(mesh);
            }
            // === PARTICLE GALAXY ===
            const galaxyCount = isMobile ? isLowEndDevice ? 1000 : 1500 : 3000;
            const galaxyGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            const galaxyPositions = new Float32Array(galaxyCount * 3);
            const galaxyColors = new Float32Array(galaxyCount * 3);
            const galaxySizes = new Float32Array(galaxyCount);
            const colorInside = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#8B5CF6');
            const colorOutside = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#06B6D4');
            for(let i = 0; i < galaxyCount; i++){
                const i3 = i * 3;
                const radius = Math.random() * 50 + 5;
                const spinAngle = radius * 0.5;
                const branchAngle = i % 3 / 3 * Math.PI * 2;
                const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 5;
                const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 5;
                const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 5;
                galaxyPositions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
                galaxyPositions[i3 + 1] = randomY;
                galaxyPositions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ - 15;
                const mixedColor = colorInside.clone();
                mixedColor.lerp(colorOutside, radius / 55);
                galaxyColors[i3] = mixedColor.r;
                galaxyColors[i3 + 1] = mixedColor.g;
                galaxyColors[i3 + 2] = mixedColor.b;
                galaxySizes[i] = Math.random() * 2 + 0.5;
            }
            galaxyGeometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](galaxyPositions, 3));
            galaxyGeometry.setAttribute('color', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](galaxyColors, 3));
            galaxyGeometry.setAttribute('size', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](galaxySizes, 1));
            const galaxyMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uPixelRatio: {
                        value: renderer.getPixelRatio()
                    }
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
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                vertexColors: true
            });
            const galaxy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](galaxyGeometry, galaxyMaterial);
            galaxy.position.set(0, 0, -10);
            scene.add(galaxy);
            // === FLOATING LIGHT ORBS ===
            const orbGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            const orbCount = isMobile ? 4 : 8;
            for(let i = 0; i < orbCount; i++){
                const orbGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.5, 16, 16);
                const orbMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                    color: i % 2 === 0 ? 0x8B5CF6 : 0x06B6D4,
                    transparent: true,
                    opacity: 0.8
                });
                const orb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](orbGeometry, orbMaterial);
                const angle = i / orbCount * Math.PI * 2;
                const radius = 15;
                orb.position.set(Math.cos(angle) * radius, Math.sin(angle) * 3, Math.sin(angle) * radius);
                orb.userData = {
                    angle,
                    radius,
                    speed: 0.3 + Math.random() * 0.2
                };
                orbGroup.add(orb);
            }
            scene.add(orbGroup);
            // === MOUSE/TOUCH HANDLING ===
            const handleMouseMove = {
                "AdvancedHeroScene.useEffect.handleMouseMove": (e)=>{
                    const rect = container.getBoundingClientRect();
                    mouseRef.current.x = (e.clientX - rect.left) / width;
                    mouseRef.current.y = 1 - (e.clientY - rect.top) / height;
                    // More responsive rotation
                    targetRotation.current.y = (mouseRef.current.x - 0.5) * 1.2;
                    targetRotation.current.x = (mouseRef.current.y - 0.5) * 1.0;
                }
            }["AdvancedHeroScene.useEffect.handleMouseMove"];
            const handleTouchMove = {
                "AdvancedHeroScene.useEffect.handleTouchMove": (e)=>{
                    if (e.touches.length > 0) {
                        const rect = container.getBoundingClientRect();
                        const touch = e.touches[0];
                        mouseRef.current.x = (touch.clientX - rect.left) / width;
                        mouseRef.current.y = 1 - (touch.clientY - rect.top) / height;
                        targetRotation.current.y = (mouseRef.current.x - 0.5) * 0.8;
                        targetRotation.current.x = (mouseRef.current.y - 0.5) * 0.6;
                    }
                }
            }["AdvancedHeroScene.useEffect.handleTouchMove"];
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('touchmove', handleTouchMove, {
                passive: true
            });
            // === ANIMATION LOOP ===
            let animationId;
            const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
            const animate = {
                "AdvancedHeroScene.useEffect.animate": ()=>{
                    animationId = requestAnimationFrame(animate);
                    const elapsed = clock.getElapsedTime();
                    // Update uniforms
                    cubeMaterial.uniforms.uTime.value = elapsed;
                    cubeMaterial.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
                    galaxyMaterial.uniforms.uTime.value = elapsed;
                    // Rotate cube 360 degrees continuously with mouse influence
                    cube.rotation.x = elapsed * 0.5 + targetRotation.current.x * 0.8;
                    cube.rotation.y = elapsed * 0.6 + targetRotation.current.y * 0.8;
                    cube.rotation.z = elapsed * 0.4;
                    // Ensure full 360 degree rotation
                    if (cube.rotation.x >= Math.PI * 2) cube.rotation.x -= Math.PI * 2;
                    if (cube.rotation.y >= Math.PI * 2) cube.rotation.y -= Math.PI * 2;
                    if (cube.rotation.z >= Math.PI * 2) cube.rotation.z -= Math.PI * 2;
                    // Sync edge lines and wireframe cube rotation
                    edgeLines.rotation.copy(cube.rotation);
                    wireframeCube.rotation.copy(cube.rotation);
                    // Animate wireframe color with smooth transitions
                    const wireframeMaterial = wireframeCube.material;
                    const color1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x8B5CF6); // Purple
                    const color2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x06B6D4); // Cyan
                    const color3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x10B981); // Green
                    const color4 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xF59E0B); // Amber
                    const color5 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xEF4444); // Red
                    const color6 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xEC4899); // Pink
                    // Smooth easing function
                    const smoothStep = {
                        "AdvancedHeroScene.useEffect.animate.smoothStep": (t)=>t * t * (3 - 2 * t)
                    }["AdvancedHeroScene.useEffect.animate.smoothStep"];
                    let wireframeColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
                    const cycle = elapsed * 0.15 % 6;
                    const progress = cycle % 1;
                    const smoothProgress = smoothStep(progress);
                    if (cycle < 1) {
                        wireframeColor.lerpColors(color1, color2, smoothProgress);
                    } else if (cycle < 2) {
                        wireframeColor.lerpColors(color2, color3, smoothProgress);
                    } else if (cycle < 3) {
                        wireframeColor.lerpColors(color3, color4, smoothProgress);
                    } else if (cycle < 4) {
                        wireframeColor.lerpColors(color4, color5, smoothProgress);
                    } else if (cycle < 5) {
                        wireframeColor.lerpColors(color5, color6, smoothProgress);
                    } else {
                        wireframeColor.lerpColors(color6, color1, smoothProgress);
                    }
                    wireframeMaterial.color.copy(wireframeColor);
                    // Rotate icosahedron
                    icoLines.rotation.x = elapsed * 0.1;
                    icoLines.rotation.y = elapsed * 0.15;
                    // Animate floating shapes
                    shapes.forEach({
                        "AdvancedHeroScene.useEffect.animate": (shape)=>{
                            const { rotationSpeed, floatSpeed, floatOffset, originalY } = shape.userData;
                            shape.rotation.x += rotationSpeed.x;
                            shape.rotation.y += rotationSpeed.y;
                            shape.rotation.z += rotationSpeed.z;
                            shape.position.y = originalY + Math.sin(elapsed * floatSpeed + floatOffset) * 2;
                        }
                    }["AdvancedHeroScene.useEffect.animate"]);
                    // Animate orbs around center
                    orbGroup.children.forEach({
                        "AdvancedHeroScene.useEffect.animate": (orb, i)=>{
                            const { angle, radius, speed } = orb.userData;
                            orb.position.x = Math.cos(angle + elapsed * speed) * radius;
                            orb.position.z = Math.sin(angle + elapsed * speed) * radius;
                            orb.position.y = Math.sin(elapsed * 2 + i) * 3;
                        }
                    }["AdvancedHeroScene.useEffect.animate"]);
                    // Camera follow mouse (subtle movement)
                    camera.position.x += (targetRotation.current.y * 5 - camera.position.x) * 0.02;
                    camera.position.y += (targetRotation.current.x * 5 - camera.position.y) * 0.02;
                    camera.lookAt(0, 0, 0);
                    renderer.render(scene, camera);
                }
            }["AdvancedHeroScene.useEffect.animate"];
            animate();
            // === RESIZE ===
            const handleResize = {
                "AdvancedHeroScene.useEffect.handleResize": ()=>{
                    const { width: w, height: h } = container.getBoundingClientRect();
                    width = w;
                    height = h;
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h);
                }
            }["AdvancedHeroScene.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "AdvancedHeroScene.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('touchmove', handleTouchMove);
                    window.removeEventListener('resize', handleResize);
                    cancelAnimationFrame(animationId);
                    if (container.contains(renderer.domElement)) {
                        container.removeChild(renderer.domElement);
                    }
                    renderer.dispose();
                }
            })["AdvancedHeroScene.useEffect"];
        }
    }["AdvancedHeroScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }, void 0, false, {
        fileName: "[project]/components/WebGL/AdvancedHeroScene.jsx",
        lineNumber: 539,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdvancedHeroScene, "zIWu4tFtxn50IDwrT97sTLhXuc4=");
_c = AdvancedHeroScene;
const __TURBOPACK__default__export__ = AdvancedHeroScene;
var _c;
__turbopack_context__.k.register(_c, "AdvancedHeroScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WebGL/AdvancedHeroScene.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/WebGL/AdvancedHeroScene.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_WebGL_AdvancedHeroScene_jsx_559e8d91._.js.map