var DeviceName="name";
var DeviceCounter=0;

function addDevice(){
DeviceCounter+=1;
var name= DeviceName+DeviceCounter;
  var p_data='<li class="nav-item" role="presentation"><a class="nav-link" id="pills-'+name+'-tab" data-toggle="pill" href="#pills-'+name+'" role="tab" aria-controls="pills-'+name+'" aria-selected="false">'+name+'</a></li>';
  document.getElementById("pills-tab").innerHTML += p_data;


  var a_data='<div class="tab-pane fade" id="pills-'+name+'" role="tabpanel" aria-labelledby="pills-'+name+'-tab">vbvbvbvbsdads</div>';
  document.getElementById("pills-tabContent").innerHTML += a_data;

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
