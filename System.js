

window.onload = function() {


    //Creating scene, camera & light

    let scene = new THREE.Scene();

    let cam = new THREE.PerspectiveCamera(fov = 75, aspect = window.innerWidth/window.innerHeight,near = 0.1, far = 1000);
    cam.position.z = 10;


    const central_light = new THREE.PointLight( 0xffffff, 1, 2000 );
    central_light.position.set(0 , 0, 3 );
    scene.add( central_light );


    //Creating a renderer & appending it to the body
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );


    //Common stuff
    //let sphere = new THREE.SphereGeometry(1);

    //First planet - sun
    let mega_sphere = new THREE.SphereGeometry(2);
    let material = new THREE.MeshLambertMaterial( {
        map: THREE.ImageUtils.loadTexture('textures/sun.jpg' )
    });
    let sun = new THREE.Mesh(mega_sphere, material);
    scene.add( sun );
    sun.matrixAutoUpdate = false;

    //Second planet - earth
    let sphere = new THREE.SphereGeometry(1);
    let material2 = new THREE.MeshLambertMaterial( {
        map: THREE.ImageUtils.loadTexture('textures/earth.jpg' )
    });
    let earth = new THREE.Mesh(sphere, material2);
    earth.matrixAutoUpdate = false;
    sun.add(earth);


    //Third planet - moon
    let mini_sphere = new THREE.SphereGeometry(0.4);
    let material3 = new THREE.MeshLambertMaterial( {
        map: THREE.ImageUtils.loadTexture('textures/moon.jpg' )
    });
    let moon = new THREE.Mesh(mini_sphere, material3);
    moon.matrixAutoUpdate = false;
    earth.add(moon);

//Fourth planet - jupiter
    let medium_sphere = new THREE.SphereGeometry(1.5);
    let material4 = new THREE.MeshLambertMaterial( {
        map: THREE.ImageUtils.loadTexture('textures/jupiter.jpg' )
    });
    let jup = new THREE.Mesh(medium_sphere, material4);
    jup.matrixAutoUpdate = false;
    sun.add(jup);






    let render = function() {
        let now = new Date();
        let dt = now-(render.time || now);
        render.time = now;



        let rot = new THREE.Matrix4().makeRotationY(0.0001*dt);
        sun.matrix.multiply(rot);

        let rot_earth = new THREE.Matrix4().makeRotationY(0.001*dt);
        let tras_earth = new THREE.Matrix4().makeTranslation(5,0,0);
        earth.matrix = tras_earth.multiply(rot_earth);


        let rot_moon = new THREE.Matrix4().makeRotationY(0.001*now);
        let trans_moon = new THREE.Matrix4().makeTranslation(1.5,0,0);
        moon.matrix = rot_moon.multiply(trans_moon);


        let rot_jup = new THREE.Matrix4().makeRotationY(0.001*now);
        let trans_jup = new THREE.Matrix4().makeTranslation(9,0,0);
        jup.matrix = trans_jup.multiply(rot_jup);




        renderer.render( scene, cam );
        requestAnimationFrame( render );
    }

    render();

}