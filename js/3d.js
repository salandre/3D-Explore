function main() {
    const canva = document.querySelector('#canva');
    const fov = 50;
    const aspect = 2;
    const near = 0.1;
    const far = 2000;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    const renderer = new THREE.WebGLRenderer({ canva });

    const width = canva.clientWidth;
    const height =  canva.clientHeight;
    renderer.setSize(width, height);

    const scene = new THREE.Scene();
    const loader = new THREE.TextureLoader();
    const texture = loader.load(
        'https://threejs.org/manual/examples/resources/images/equirectangularmaps/tears_of_steel_bridge_2k.jpg', 
        () => {
            scene.background = texture;
        }
    );

    function render() {
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

main();