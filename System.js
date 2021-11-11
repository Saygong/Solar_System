

window.onload = function() {


    //Creating scene, camera & light
    const scene = new THREE.Scene();
    scene.background = new THREE.TextureLoader().load('textures/space.jpg');


    let cam = new THREE.PerspectiveCamera(fov = 75, aspect = window.innerWidth/window.innerHeight,near = 0.1, far = 1000);
    cam.position.z = 35;



    const central_light = new THREE.PointLight( 0xffffff, 1, 2000 );
    central_light.position.set(0 , 0, 7 );
    scene.add( central_light );


    //Creating a renderer & appending it to the body
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );



    //Sun
    let sun_sphere = new THREE.SphereGeometry(3);
    let material = new THREE.MeshLambertMaterial( {
        map: THREE.ImageUtils.loadTexture('textures/sun.jpg' )
    });
    let sun = new THREE.Mesh(sun_sphere, material);
    scene.add( sun );
    sun.matrixAutoUpdate = false;


    //Venus
    let venus_sphere = new THREE.SphereGeometry(0.9);
    let venus_mat = new THREE.MeshLambertMaterial( {
        map: THREE.ImageUtils.loadTexture('textures/venus.jpg' )
    });
    let venus = new THREE.Mesh(venus_sphere, venus_mat);
    venus.matrixAutoUpdate = false;
    sun.add(venus);


    //Earth
    let earth_sphere = new THREE.SphereGeometry(1);
    let earth_mat = new THREE.MeshLambertMaterial( {
        map: THREE.ImageUtils.loadTexture('textures/earth.jpg' )
    });
    let earth = new THREE.Mesh(earth_sphere, earth_mat);
    earth.matrixAutoUpdate = false;
    sun.add(earth);


    //Moon
    let moon_sphere = new THREE.SphereGeometry(0.4);
    let moon_material = new THREE.MeshLambertMaterial( {
        map: THREE.ImageUtils.loadTexture('textures/moon.jpg' )
    });
    let moon = new THREE.Mesh(moon_sphere, moon_material);
    moon.matrixAutoUpdate = false;
    earth.add(moon);

    //Jupiter
    let jup_sphere = new THREE.SphereGeometry(2);
    let jup_material = new THREE.MeshLambertMaterial( {
        map: THREE.ImageUtils.loadTexture('textures/jupiter.jpg' )
    });
    let jup = new THREE.Mesh(jup_sphere, jup_material);
    jup.matrixAutoUpdate = false;
    sun.add(jup);


    //Ganymede
    let gany_sphere = new THREE.SphereGeometry(0.7);
    let gany_material = new THREE.MeshLambertMaterial( {
        map: THREE.ImageUtils.loadTexture('textures/ganymede.jpg' )
    });
    let gany = new THREE.Mesh(gany_sphere, gany_material);
    gany.matrixAutoUpdate = false;
    jup.add(gany);


    //Mars
    let mars_sphere = new THREE.SphereGeometry(1.2);
    let mars_material = new THREE.MeshLambertMaterial( {
        map: THREE.ImageUtils.loadTexture('textures/ganymede.jpg' )
    });
    let mars = new THREE.Mesh(mars_sphere, mars_material);
    mars.matrixAutoUpdate = false;
    sun.add(mars);


    //Neptune
    let neptune_sphere = new THREE.SphereGeometry(1.5);
    let neptune_material = new THREE.MeshLambertMaterial( {
        map: THREE.ImageUtils.loadTexture('textures/neptune.jpg' )
    });
    let neptune = new THREE.Mesh(neptune_sphere, neptune_material);
    neptune.matrixAutoUpdate = false;
    sun.add(neptune);





    let render = function() {
        let now = Date.now()


        let rot_Y = new THREE.Matrix4().makeRotationY(0.0000000000000001 * now);
        let rot_X = new THREE.Matrix4().makeRotationX(0.000000000000001 * now);
        sun.matrix.multiply(rot_X).multiply(rot_Y);

        let rot_earth = new THREE.Matrix4().makeRotationY(0.0005*now);
        let tras_earth = new THREE.Matrix4().makeTranslation(10,0,0);
        earth.matrix = rot_earth.multiply(tras_earth);


        let rot_venus = new THREE.Matrix4().makeRotationY(0.0009*now);
        let tras_venus = new THREE.Matrix4().makeTranslation(5,0,0);
        venus.matrix = rot_venus.multiply(tras_venus);


        let rot_moon = new THREE.Matrix4().makeRotationY(0.0002*now);
        let trans_moon = new THREE.Matrix4().makeTranslation(1.5,0,0);
        moon.matrix = rot_moon.multiply(trans_moon);


        let rot_jup = new THREE.Matrix4().makeRotationY(0.0006*now);
        let trans_jup = new THREE.Matrix4().makeTranslation( 23,0,0);
        jup.matrix = rot_jup.multiply(trans_jup);


        let rot_gany = new THREE.Matrix4().makeRotationY(0.0002*now);
        let trans_gany = new THREE.Matrix4().makeTranslation(3,0,0);
        gany.matrix = rot_gany.multiply(trans_gany);


        let rot_mars= new THREE.Matrix4().makeRotationY(0.0008*now);
        let tras_mars = new THREE.Matrix4().makeTranslation(15,0,0);
        mars.matrix = rot_mars.multiply(tras_mars);


        let rot_nep = new THREE.Matrix4().makeRotationY(0.0004*now);
        let trans_nep = new THREE.Matrix4().makeTranslation( 30,0,0);
        neptune.matrix = rot_nep.multiply(trans_nep);


        renderer.render( scene, cam );
        requestAnimationFrame( render );
    }

    render();

}