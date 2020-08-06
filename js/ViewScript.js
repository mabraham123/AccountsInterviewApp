function DisplayCreatedDevice(name){
  var p_data='<li class="nav-item" role="presentation"><a class="nav-link" id="pills-'+name+'-tab" data-toggle="pill" href="#pills-'+name+'" role="tab" aria-controls="pills-'+name+'" aria-selected="false">'+name+'</a></li>';
  document.getElementById("pills-tab").innerHTML += p_data;


  var a_data='<div class="tab-pane fade" id="pills-'+name+'" role="tabpanel" aria-labelledby="pills-'+name+'-tab">vbvbvbvbsdads</div>';
  document.getElementById("pills-tabContent").innerHTML += a_data;
}
