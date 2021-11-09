
/*
window.onload = function() {

    let scene = new THREE.Scene();
    let cam = new THREE.PerspectiveCamera(fov = 75, aspect = window.innerWidth/window.innerHeight,near = 0.1, far = 1000);
    cam.position.z = 3;
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );


    let geometry = new THREE.BoxGeometry(1,1,1);
    let material = new THREE.MeshLambertMaterial( {
        map: THREE.ImageUtils.loadTexture('texture_path' )
    });


    let cube1 = new THREE.Mesh(geometry, material);
    scene.add( cube1 );
    cube1.matrixAutoUpdate = false;


    //Fonte luminosa
    let lightSource = new THREE.DirectionalLight( 0xffffff, 0.5);
    lightSource.position.set(0.5, 0, 1).normalize();
    scene.add(lightSource)


    //Rotazione & Posizione
    //mesh.position.z  = -2;
    //mesh.rotation.y = 3.14/4.0;



    material = new THREE.MeshLambertMaterial( {color: 0xff0000} );
    let cube2 = new THREE.Mesh( geometry, material );
    cube2.matrixAutoUpdate = false;
    cube1.add(cube2);





    let render = function() {
        let now = new Date();
        // lo si mette con un or logico in modo da coprire il caso in cui render.time sia undefined
        let dt = now-(render.time || now);

        let rot = new THREE.Matrix4().makeRotationY(0.001 * dt);
        cube1.matrix.multiply(rot);



        let cube2_tras = new THREE.Matrix4().makeTranslation(2,0,0);
        let cube2_rot = new THREE.Matrix4().makeRotationY(0.001*render.time);

        cube2.matrix = cube2_tras.multiply( cube2_rot );
        //cube2.matrix = cube2_rot.multiply( cube2_tras );

        let cube1_tras = new THREE.Matrix4().makeTranslation(Math.sin(render.time*0.01),0,0)
        cube1.matrix.multiply(cube1_tras);

        renderer.render( scene, cam );
        requestAnimationFrame( render );
    }

    render();

}


 */