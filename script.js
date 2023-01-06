
function calculateBMI() 
{
    let age = document.getElementById('age').value;
    let height= document.getElementById('height').value;
    let weight= document.getElementById('weight').value;

    if( weight <0)
    {
        alert('positive numbers only')
        return
    }

    else if(age <2 && age > 120)
    {
        alert('please provide age between 2 and 120') 
        document.getElementById('bmitotal').style.display="block"
    }
    else
    {
      let totalBMI = weight/ height;
      totalBMI = totalBMI.toFixed(2);
      if(totalBMI >25 && totalBMI<30)
      {
        totalBMI(overweight)
      }

      document.getElementById("result").style.display='block'
      document.getElementById('bmitotal').innerHTML=totalBMI;
    }
}
document.getElementById('result').style.display="none";
document.getElementById('bmitotal').style.display='none';


document.getElementById("calculate").onclick=function(){
    calculateBMI()
}

function clr(){
    document.getElementById(clr).value="";
}