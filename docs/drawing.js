
/*=================== Drawing =================== */

var THETA = 0,
PHI = 0;
var time_old = 0;

var animate = function(time) {
   var dt = time-time_old;

   if (!drag) {
      dX *= AMORTIZATION, dY*=AMORTIZATION;
      THETA+=dX, PHI+=dY;
   }

   //set model matrix to I4

   mo_matrix[0] = 1, mo_matrix[1] = 0, mo_matrix[2] = 0,
   mo_matrix[3] = 0,

   mo_matrix[4] = 0, mo_matrix[5] = 1, mo_matrix[6] = 0,
   mo_matrix[7] = 0,

   mo_matrix[8] = 0, mo_matrix[9] = 0, mo_matrix[10] = 1,
   mo_matrix[11] = 0,

   mo_matrix[12] = 0, mo_matrix[13] = 0, mo_matrix[14] = 0,
   mo_matrix[15] = 1;

   rotateY(mo_matrix, THETA);
   rotateX(mo_matrix, PHI);

   time_old = time; 
   gl.enable(gl.DEPTH_TEST);

   // gl.depthFunc(gl.LEQUAL);

   gl.clearColor(0.0, 0.0, 0.0, 0);
   gl.clearDepth(1.0);
   gl.viewport(0.0, 0.0, canvas.width, canvas.height);
   gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

   gl.uniformMatrix4fv(_Pmatrix, false, proj_matrix);
   gl.uniformMatrix4fv(_Vmatrix, false, view_matrix);
   gl.uniformMatrix4fv(_Mmatrix, false, mo_matrix);

   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
   gl.drawElements(gl.LINES, indices.length, gl.UNSIGNED_SHORT, 0);

   window.requestAnimationFrame(animate);
}
animate(0);