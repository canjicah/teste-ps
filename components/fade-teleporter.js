/*

Fade Teleporter by Mauricio Martínez González
Tecnológico de Monterrey 2019
Creative Commons License: CC0

Usage:
=====================
Use the fade-teleporter within the camera and the teleport-to within the object

<a-entity id="rig">
  <a-camera fade-teleporter></a-camera>
</a-entity>

<a-box teleport-to></a-box>

*/

//var celula1;




//fade-teleporter should be added to the camera entity
AFRAME.registerComponent('fade-teleporter', {
  schema: {
    duration: {type: 'number', default: 1000},
    color: {type:'string', default:"#000000"},
    camera: {type:'string', default:"a-camera"}
  },

  init: function () {

    //Create the sphere with its animations and position it at the face of the user
  	var blackfade = document.createElement('a-sphere');
  	blackfade.setAttribute("id", "blackfade");
  	blackfade.setAttribute("material", "color:"+this.data.color+"; shader:flat; side:double;");
  	blackfade.setAttribute("opacity", "0");
  	blackfade.setAttribute("visible", "false");
  	blackfade.setAttribute("radius", ".1");
  	blackfade.setAttribute("animation__fadeout", "property:opacity; from:0; to:1; dur:"+(this.data.duration/2)+"; autoplay:false; startEvents:tohide");
  	blackfade.setAttribute("animation__fadein", "property:opacity; from:1; to:0; dur:"+(this.data.duration/2)+"; autoplay:false; startEvents:toshow");

    //I append the black sphere at the user's eyes 
  	var camara = document.querySelector(this.data.camera);
  	camara.appendChild(blackfade);

  }
});

//teleport-to should be added to the trigger entity (it can be a button, mesh, etc)
AFRAME.registerComponent('teleport-to', {
  schema: {
    pos: {type: 'string', default:null}, //Position if you want it to teleport to a position
    obj: {type: 'selector', default:null}, //Object position to teleport to  (if there's no object this is ignored)
    soundId: {type: 'string', default:"steps.mp3"} //Sound to play when teleported
  },

  init: function () {

    //If the data is not an object
  	if (this.data.obj == null) {
      //If the data is not a position
      if(this.data.pos == null){
        //If there are no arguments, I teleport to the "teleport-to" object
        var position = (this.el.getDOMAttribute("position").x+" "+this.el.getDOMAttribute("position").y+" "+this.el.getDOMAttribute("position").z);
        this.el.setAttribute("onClick", "blackFadeTo('"+position+"', '#"+this.data.soundId+"')");
      }else{
        //If the argument is a position, I teleport to the position
  		  this.el.setAttribute("onClick", "blackFadeTo("+this.data.pos+", '#"+this.data.soundId+"')");
      
      }
	}else{
    //If the argument is an ID selector, I teleport to the ID selector's position
		this.el.setAttribute("onClick", "blackFadeTo('"+this.data.obj.getDOMAttribute("position")+"', '#"+this.data.soundId+"')");
   

	}

  }
});



var playerPos;

function animEnd(e){
	if(e.detail.name == "animation__fadeout"){
		document.querySelector('#blackfade').emit("toshow");
		document.querySelector("#rig").setAttribute("position", playerPos);
  }else if(e.detail.name == "animation__fadein"){
		document.querySelector('#blackfade').setAttribute("visible", false);
	}

}

function blackFadeTo(str,snd){
 
	document.querySelector('#blackfade').emit("tohide");
	document.querySelector('#blackfade').setAttribute("visible", "true");
	document.querySelector("#blackfade").addEventListener('animationcomplete', animEnd);
 
  

  //If there's no sound I'll just catch the error
  try{document.querySelector(snd).components.sound.playSound();}catch(err){}

	playerPos = str;
			
}