
function addDevice(){
  DisplayCreatedDevice(CreateDevice());

}


function DevicesLoginArrayEventHandler(obj){
  console.log(obj.id);
  var id=obj.id;
  var elementCalled= document.getElementById(id);
  console.log(elementCalled);
  // //Check if not checked
  if (!elementCalled.checked) {
    //Remove accordion for that element
  }

  switch(id) {
  case "password":
    console.log("worked");
    CreatePasswordDetailsQuestion();
    break;
  case "pincode":
    // code block
    break;
  case "sshkey":
    // code block
    break
  case "faceid":
    // code block
    break;
  case "fingerscan":
    // code block
    break;
  case "other":
    //code block
}
}

function CreatePasswordDetailsQuestion(){
  alert("hehe");
}
