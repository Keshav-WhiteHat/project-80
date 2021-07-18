var people=[];
function submit(){
    var name=document.getElementsById("name1").value;
    people.push(name);
    document.getElementById("display_name").innerhtml=people.toString();
}
function sorting() { people.sort();
     var i= people.join("");
 console.log(people);
  document.getElementById("sorted").innerHTML=i.toString();
 }

 function searching(){
      var s= document.getElementById("s1").value;
       var found=0;
        var j;
        for(j=0;j<people.length; j++) 
        { if(s==people[j])
            { found=found+1;
             } } 
             document.getElementById("p2").innerHTML="name found "+found+" time/s";
              console.log("found name "+found+" time/s"); }


              function show() {
                   var i= people.join("");
                    console.log(people);
                     document.getElementById("p1").innerHTML=i.toString();
                      document.getElementById("sort_button").style.display="block"; }