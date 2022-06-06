AFRAME.registerComponent('buttonlistener', {

  init: function () {
    this.elem = this.el;
    this.botones = document.querySelector('[buttonlistener]').components.buttonlistener;
    var self = this; 
    var canRotate = true;
  },

  update: function (oldData) {
    self.botones =  this.botones;
    var botones = self.botones;
    self.elem = this.elem;
    var elem = self.elem;
    
    elem.addEventListener('trackpaddown', botones.listenPad); 
    
    //UPDATED LISTENERS FOR OCULUS TOUCH
    elem.addEventListener('abuttondown', botones.teleportStart);   
    elem.addEventListener('abuttonup', botones.teleportEnd);   

    elem.addEventListener('thumbstickmoved', botones.listenThumbstick);   
  },

 //UPDATED FUNCTION FOR OCULUS TOUCH
  teleportStart: function () {
    if (iniciaEscena == 1) {
      this.setAttribute("teleport-controls", "cameraRig: #rig; teleportOrigin: #head; collisionEntities: [nav-mesh];startEvents: teleportstart; endEvents: teleportend");   
      this.emit('teleportstart');
    }
  },

 //UPDATED FUNCTION FOR OCULUS TOUCH
  teleportEnd: function () {
    if (iniciaEscena == 1) {
      this.emit('teleportend');
      rig.addEventListener('teleported', botones.removeTeleport);  
    }  
  },

  //REMOVE TELEPORT CONTROLS FOR OCULUS TOUCH
  removeTeleport:function () {
    this.removeAttribute('teleport-controls');
  },

  
   //UPDATED FUNCTION FOR OCULUS TOUCH
  listenThumbstick: function () {
    
    var trackPos = this.components['tracked-controls'].axis; 
    
     if (Math.round(trackPos[2]) == -1 && Math.round(trackPos[3]) == 0) {
       if(canRotate){
         rig.setAttribute("rotation", {x: rig.getAttribute("rotation").x, y: rig.getAttribute("rotation").y+45, z: rig.getAttribute("rotation").z});        
        canRotate = false;
       }
    }

    if (Math.round(trackPos[2]) == 1 && Math.round(trackPos[3]) == 0) {
      if(canRotate){
      rig.setAttribute("rotation", {x: rig.getAttribute("rotation").x, y: rig.getAttribute("rotation").y-45, z: rig.getAttribute("rotation").z});  
      canRotate = false;
      }
    }

    if (Math.round(trackPos[2]) == 0 && Math.round(trackPos[3]) == 1) {
      rig.setAttribute("rotation", {x: rig.getAttribute("rotation").x, y: rig.getAttribute("rotation").y-180, z: rig.getAttribute("rotation").z});  
      canRotate = false;
    }

     if (Math.round(trackPos[2]) == 0 && Math.round(trackPos[3]) == -1) {
      if (iniciaEscena == 1) {
        this.setAttribute("teleport-controls", "cameraRig: #rig; teleportOrigin: #head; collisionEntities: [nav-mesh];startEvents: teleportstart; endEvents: teleportend");   
        this.emit('teleportstart');  
      } 
    }

    
     if (Math.round(trackPos[2]) == 0 && Math.round(trackPos[3]) == 0) {
      if (iniciaEscena == 1) {
        this.emit('teleportend');
        rig.addEventListener('teleported', botones.removeAttribute);
        canRotate = true;   
      }  
    }

  },  //UPDATE ENDS

  
  listenPad: function () {
    if (iniciaEscena == 1) {
      console.log("entra2");
      var trackPos = this.components['tracked-controls'].axis;           
      console.log(Math.round(trackPos[0]));
      rig = document.getElementById("rig"); 
      
          
      if (Math.round(trackPos[0]) == -1 && Math.round(trackPos[1]) == 0) { 
        console.log("left");         
        rig.setAttribute("rotation", {x: rig.getAttribute("rotation").x, y: rig.getAttribute("rotation").y+45, z: rig.getAttribute("rotation").z});        
      }

      if (Math.round(trackPos[0]) == 1 && Math.round(trackPos[1]) == 0) {
        console.log("right"); 
        rig.setAttribute("rotation", {x: rig.getAttribute("rotation").x, y: rig.getAttribute("rotation").y-45, z: rig.getAttribute("rotation").z});  
      }

      if (Math.round(trackPos[0]) == 0 && Math.round(trackPos[1]) == -1) {
        console.log("down"); 
        rig.setAttribute("rotation", {x: rig.getAttribute("rotation").x, y: rig.getAttribute("rotation").y-180, z: rig.getAttribute("rotation").z});  
      }

      if (Math.round(trackPos[0]) == 0 && Math.round(trackPos[1]) == 1) {
        this.setAttribute("teleport-controls", "cameraRig: #rig; teleportOrigin: #head; collisionEntities: [nav-mesh];");
        console.log("up"); 
        rig.addEventListener('teleported', botones.remueveTeleport);       
      }
    }
  },

  remueveTeleport:function () {
    console.log("ya se movió");
    this.removeAttribute('teleport-controls');
  }
});


document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName == 'q' || keyName == 'Q') {
    rig.setAttribute("rotation", {x: rig.getAttribute("rotation").x, y: rig.getAttribute("rotation").y+45, z: rig.getAttribute("rotation").z});    
  }

  if (keyName == 'e' || keyName == 'E') {
    rig.setAttribute("rotation", {x: rig.getAttribute("rotation").x, y: rig.getAttribute("rotation").y-45, z: rig.getAttribute("rotation").z});    
  }
  
});


AFRAME.registerComponent('grablistener', {

  init: function () {
    this.elem = this.el;
    this.grabcomponent = document.querySelector('[grablistener]').components.grablistener;
    var self = this;     
  },

  update: function (oldData) {
    self.grabcomponent =  this.grabcomponent;
    var grabcomponent = self.grabcomponent;
    self.elem = this.elem;
    var elem = self.elem; 

    elem.addEventListener('triggerup', grabcomponent.listenHand);  

  },

  listenHand: function () {
    console.log("entra1");
    if (this.id == "leftHand") {
      if (grab!=1) { hand = 0; console.log("lefthand"); }
    }
    else if (this.id == "rightHand") {
      if (grab!=1) { hand = 1; console.log("righthand"); }
    }  
  }
 

});