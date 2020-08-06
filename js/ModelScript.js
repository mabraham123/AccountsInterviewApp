var ListOfDevices= [];

function Device(name) {
  this.name = name;


}


function CreateDevice(){
  var DeviceCounter= ListOfDevices.length;
  var name="Device"+DeviceCounter;
  var newDevice= new Device(name)
  ListOfDevices.push(newDevice);
  console.log(ListOfDevices);
  return name;
}
