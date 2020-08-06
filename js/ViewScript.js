function DisplayCreatedDevice(name){
  var p_data='<li class="nav-item" role="presentation"><a class="nav-link" id="pills-'+name+'-tab" data-toggle="pill" href="#pills-'+name+'" role="tab" aria-controls="pills-'+name+'" aria-selected="false">'+name+'</a></li>';
  document.getElementById("pills-tab").innerHTML += p_data;

  var a_data='<div class="tab-pane fade" id="pills-'+name+'" role="tabpanel" aria-labelledby="pills-'+name+'-tab">vbvbvbvbsdads</div>';
  document.getElementById("pills-tabContent").innerHTML += a_data;
}


function CreatePasswordDetailsQuestion(){
  var p_data='<div class="accordion" id="DetailedQuestions"> <div class="card"><div class="card-header" id="headingOne">  <h2 class="mb-0"><button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Collapsible Group Item #1</button></h2></div><div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#DetailedQuestions"><div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw deniaesthesynth nesciunt you probably havent heard of them accusamus labore sustainable VHS.</div></div></div></div>';

document.getElementById("Questions").innerHTML+=p_data;
}
