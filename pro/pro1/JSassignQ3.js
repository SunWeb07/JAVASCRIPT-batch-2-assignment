let jobPerson = [
    {name:"Aatmaram Bhide",age:49,city:"Mumbai",Salary:"4,00,000"},
    {name:"Bahadur Moshai",age:34,city:"Kolkata",Salary:"25,000"},
    {name:"Padmashri Venkat Roa",age:24,city:"Chennai",Salary:"60,000"}
    ,{name:"Madhuri Pillai",age:39,city:"Bangalore",Salary:"30,000"},
    {name:"Zaffer Pasha",age:29,city:"Hyderabad",Salary:"10,000"}
    ];
    

function display(guru){
    let htmldata =""

    guru.forEach(function (ele,index) {
        let currentdata=`<tr>
         <td>${index+1}</td>
         <td>${ele.name}</td>
         <td>${ele.age}</td>
         <td>${ele.city}</td>
         <td>${ele.Salary.toString()}</td> 
         <td><button class="w3-hover-yellow" onclick="deleteele()">delete</button></td>
        
         </tr>`
         htmldata += currentdata;
//    //       
    })
    document.getElementById('oppo').innerHTML = htmldata
}
display(jobPerson);

function adddata(event){
    event.preventDefault();
    let arr={};
     let name = document.getElementById('name').value;
     let age = document.getElementById('age').value;
    let city = document.getElementById('city').value;
    let Salary = document.getElementById('salary').value;
    arr.name=name;
    arr.age=Number(age);
    arr.city=city;
    
    arr.Salary=Salary;

 jobPerson.push(arr);

display(jobPerson);

    document.getElementById('name').value="";
    document.getElementById('age').value="";
    document.getElementById('city').value="";
    document.getElementById('salary').value="";


    
}
function searchname(){
    let sea=document.getElementById("search").value;
    let newdata = jobPerson.filter( function (objval){
        return (
            objval.name.toUpperCase().indexOf(sea.toUpperCase())!=-1
        );
    });
 display(newdata);

}


function searchcity(){
    let sea=document.getElementById("searchc").value;
    let newdata = jobPerson.filter( function (objval){
        return (
            objval.city.toUpperCase().indexOf(sea.toUpperCase())!=-1
        );
    });
 display(newdata);
}

function deleteele(index){
    jobPerson.splice(index,1);
    display(jobPerson)

}


let updateIndex;

function copySuperhero(index) {
  updateIndex = index;
  let superhero = jobPerson[index];

  document.getElementById("uname").value = superhero.name;
  document.getElementById("uage").value = superhero.age;
  document.getElementById("ucity").value = superhero.city;
  document.getElementById("salary").value = superhero.Salary;
}
