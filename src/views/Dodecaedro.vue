<script setup lang="ts">
import { onMounted } from 'vue';
import * as THREE from 'three';

onMounted((): void => {
	// Escena y cámara
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
	camera.position.set(0, 1, 3);

	// Iluminación
	const ambient = new THREE.AmbientLight(0xffffff, 0.6);
	const directional = new THREE.DirectionalLight(0xffffff, 0.8);
	directional.position.set(5, 10, 7);
	scene.add(ambient, directional);

	// Renderer
	const container = document.getElementById('model') as HTMLDivElement;
	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	const setRendererSize = (): void => {
		const w = container.clientWidth;
		const h = container.clientHeight;
		camera.aspect = w / h;
		camera.updateProjectionMatrix();
		renderer.setSize(w, h);
	};
	setRendererSize();
	container.appendChild(renderer.domElement);
	window.addEventListener('resize', setRendererSize);

	// Crear geometría de estrella (dodecaedro + color brillante)
	const starGeometry = new THREE.DodecahedronGeometry(1.2, 0);
	const starMaterial = new THREE.MeshStandardMaterial({
		color: 0xffd700, // dorado
		metalness: 0.6,
		roughness: 0.3,
	});
	const starMesh = new THREE.Mesh(starGeometry, starMaterial);
	starMesh.position.set(0, 0, 0);
	scene.add(starMesh);
	camera.lookAt(starMesh.position);

	// Animación
	const animate = (): void => {
		requestAnimationFrame(animate);
		starMesh.rotation.y += 0.01;
		starMesh.rotation.x += 0.008;
		starMesh.rotation.z += 0.005;
		renderer.render(scene, camera);
	};

	animate();
});
</script>

<template>
	<div class="container">
		<div id="model"></div>
	</div>
</template>

<style scoped>
.container {
	width: 24rem;
	height: 24rem;
	display: flex;
	justify-content: center;
	align-items: center;
}

#model {
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
}
</style>
