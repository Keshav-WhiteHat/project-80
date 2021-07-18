arraynameofstudent=[];

function submit(){
    var displayname=[];
    for(var j=1; j<=4; j++){
        var namestudent=document.getElementById("name_of_the_student_"+j).value;
        console.log(namestudent);
        arraynameofstudent.push(namestudent);
       
    }
    console.log(arraynameofstudent);
    var namelength=arraynameofstudent.length;

    for(var k=0; k<namelength;k++)
    {
        displayname.push("<h4> Name="+arraynameofstudent[k]+"</h4>");
        console.log(displayname);
    }
    document.getElementById("display_name_with_commas").innerHTML=displayname;

    var removecomma=displayname.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=removecomma;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

    
}

function sorting(){
    arraynameofstudent.sort();
    var displaysort=[];
    var namelength=arraynameofstudent.length;
    for(var k=0; k<namelength;k++)
    {
        displaysort.push("<h4> Name="+arraynameofstudent[k]+"</h4>");
        console.log(displaysort);
    }
    var removecomma=displaysort.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=removecomma;
}