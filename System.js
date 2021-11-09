

window.onload = function() {

    let scene = new THREE.Scene();
    let cam = new THREE.PerspectiveCamera(fov = 75, aspect = window.innerWidth/window.innerHeight,near = 0.1, far = 1000);
    cam.position.z = 5;

    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );


    let sphere = new THREE.SphereGeometry(1);
    let material = new THREE.MeshLambertMaterial( {
        map: THREE.ImageUtils.loadTexture('texture_path' )
    });
    material = new THREE.MeshDistanceMaterial( {color: 0xff0000} );


    let planet = new THREE.Mesh(sphere, material);
    scene.add( planet );
    planet.matrixAutoUpdate = false;


    //Fonte luminosa
    let innerLight = new THREE.PointLight(0xffffff, 0.8,100)
    innerLight.position.set(50, 50, 50).normalize();
    scene.add(innerLight)


    //Rotazione & Posizione
    //mesh.position.z  = -2;
    //mesh.rotation.y = 3.14/4.0;




    let render = function() {
        let now = new Date();
        // lo si mette con un or logico in modo da coprire il caso in cui render.time sia undefined
        let dt = now-(render.time || now);

        let rot = new THREE.Matrix4().makeRotationY(0.01 * dt);
        planet.matrix.multiply(rot);





        renderer.render( scene, cam );
        requestAnimationFrame( render );
    }

    render();

}