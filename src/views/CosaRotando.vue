<script setup lang="ts">
import { onMounted } from 'vue';
import * as THREE from 'three';

onMounted(() => {
	// escena y cámara
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
	camera.position.z = 3;

	const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
	const edgesGeometry = new THREE.EdgesGeometry(boxGeometry);
	const lineMaterial = new THREE.LineBasicMaterial({
		color: 0x0000ff,
	  	linewidth: 2
	});
	const wireframeCube = new THREE.LineSegments(edgesGeometry, lineMaterial);
	scene.add(wireframeCube);

	const container = document.getElementById('cube-container')!;
	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(container.clientWidth, container.clientHeight);
	container.appendChild(renderer.domElement);

	window.addEventListener('resize', () => {
		camera.aspect = container.clientWidth / container.clientHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(container.clientWidth, container.clientHeight);
	});

	function animate() {
		requestAnimationFrame(animate);
		wireframeCube.rotation.x += 0.01;
		wireframeCube.rotation.y += 0.01;
		renderer.render(scene, camera);
	}
	animate();
});
</script>

<template>
  	<div id="cube-container"></div>
</template>

<style scoped>
#cube-container {
  	width: 24rem;
  	height: 24rem;
  	background-color: #e5e5e5;
}
</style>
