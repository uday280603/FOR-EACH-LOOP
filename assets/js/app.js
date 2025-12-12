let cl = console.log;


let skills =["Html 5","Css","javascript","Bootstarp","Angular"];
let result='';
skills.forEach(function(skill){
    result += `
            <li class="list-group-item">i Love ${skill}</li>
           
    `
});

let ListContainer1 = document.getElementById('ListContainer1');
ListContainer1.innerHTML = result;

//List 2
 let framewoks = ["spring","Angular","React","bootstrap","Microservices"];

 let frameWorksHtml=''
 framewoks.forEach(function(frame){

    frameWorksHtml += `
            <li class="list-group-item">${frame} framework</li>
           
    `
 });

 let ListContainer2 =document.getElementById('ListContainer2');
 ListContainer2.innerHTML = frameWorksHtml;

 //list 3

 let devops = ["Docker","Kubernetes","Jenkins","Github","Actions","Terraform"]

 let DataHtml = '<ul class="list-group">'
 devops.forEach(function(dev){

    DataHtml +=`
     <li class="list-group-item">${dev}</li>
    `
 })
 DataHtml +='   </ul>';

 let ListContainer3 = document.getElementById('ListContainer3');
 ListContainer3.innerHTML = DataHtml;


 //List 4

 let softSkills = ['Communication','Leadership','Problem Solving','Teamwork','time Management'];
 let softSkillsHtml = ' <ul class="list-group">'

 softSkills.forEach(function(sof){
    softSkillsHtml  += `
     <li class="list-group-item">${sof}</li>
    `
 })

 softSkillsHtml +='</ul>'
 let ListContainer4 = document.getElementById('ListContainer4');
 ListContainer4.innerHTML  = softSkillsHtml;