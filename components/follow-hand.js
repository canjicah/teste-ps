AFRAME.registerComponent('follow-position-hand', {
  tick: function (t) {
    if (t - this.time < 1) { return; } 
    this.time = t;    
    rightHand = document.querySelector("#rightHand");
    leftHand = document.querySelector("#leftHand");
    var position = new THREE.Vector3();  

    if (hand == 0) {
      this.el.setAttribute("position", {x:leftHand.object3D.getWorldPosition(position).x,y:leftHand.object3D.getWorldPosition(position).y,z:leftHand.object3D.getWorldPosition(position).z});       
    }

    else {
      this.el.setAttribute("position", {x:rightHand.object3D.getWorldPosition(position).x,y:rightHand.object3D.getWorldPosition(position).y,z:rightHand.object3D.getWorldPosition(position).z});      
    }
  }
});



AFRAME.registerComponent('follow-rotation-hand', {  
  tick: function (t) {
    if (t - this.time < 100) { return; } 
    this.time = t;
    rightHand = document.querySelector("#rightHand");
    leftHand = document.querySelector("#leftHand");    

    if (hand == 0) {
      var rotX = leftHand.getAttribute("rotation").x;
      var rotY = leftHand.getAttribute("rotation").y;
      var rotZ = leftHand.getAttribute("rotation").z;
      var newrotX = rotX + 180;
      var newrotY = rotY;
      var newrotZ = rotZ + 180;
      this.el.setAttribute("animation__rotation", "property:rotation;to:"+newrotX+
    " "+newrotY+
    " "+newrotZ+"; dur:100; easing:easeOutQuad;");
    }

    else {
      var rotRX = rightHand.getAttribute("rotation").x;
      var rotRY = rightHand.getAttribute("rotation").y;
      var rotRZ = rightHand.getAttribute("rotation").z;
      var newrotRX = rotRX;
      var newrotRY = rotRY;
      var newrotRZ = rotRZ;
      this.el.setAttribute("animation__rotation", "property:rotation;to:"+newrotRX+
    " "+newrotRY+
    " "+newrotRZ+"; dur:100; easing:easeOutQuad;");
    }    
  }
});
