/*============= Creating a canvas ======================*/
var canvas = document.querySelector('canvas');
gl = canvas.getContext('experimental-webgl');

/*========== Defining and storing the geometry ==========*/

var vertices = [
   -1,-1,-1, 1,-1,-1, 1, 1,-1, -1, 1,-1, //belakang
   -1,-1, 1, 1,-1, 1, 1, 1, 1, -1, 1, 1,    //depan
   -1,-1,-1, -1, 1,-1, -1, 1, 1, -1,-1, 1,  //kri
   1,-1,-1, 1, 1,-1, 1, 1, 1, 1,-1, 1,  //kanan
   -1,-1,-1, -1,-1, 1, 1,-1, 1, 1,-1,-1,   // bawah
   -1, 1, -1, -1, 2, 0, 1, 2, 0, 1, 1, -1,    // atas1
   1, 1, 1, 1, 2, 0, -1, 2, 0, -1, 1, 1,   // atas2
];

var colors = [
    
   2,5,5, 2,5,5, 2,5,5, 2,5,5, // belakang
   2,5,5, 2,5,5, 2,5,5, 2,5,5, // depan
   2,5,5, 2,5,5, 2,5,5, 2,5,5,  // kanan
   2,5,5, 2,5,5, 2,5,5, 2,5,5,//kiri
   2,5,5, 2,5,5, 2,5,5, 2,5,5, //kanan
   2,5,5, 2,5,5, 2,5,5, 2,5,5, // atas1
   2,5,5, 2,5,5, 2,5,5, 2,5,5,  // atas2
];

var indices = [
   0,1,2, 1,2,3, 4,5,6, 5,6,7,
   8,9,10, 9,10,11, 12,13,14, 13,14,15,
   16,17,18, 17,18,19, 20,21,22, 21,22,23,
   21,22,23, 24,25,26, 26,27,20, 20,22,24 
];

// Create and store data into vertex buffer
var vertex_buffer = gl.createBuffer ();
gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

// Create and store data into color buffer
var color_buffer = gl.createBuffer ();
gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

// Create and store data into index buffer
var index_buffer = gl.createBuffer ();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);