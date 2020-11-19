
 function showAddToCart(x){
     if (x==0){
        document.querySelector(" .cart").style.display="block";
     }
     else if(x==1){
        document.querySelector(" .cart1").style.display="block";
    }
    else if(x==2){
        document.querySelector(" .cart2").style.display="block";
    }
    else if(x==3){
        document.querySelector(" .cart3").style.display="block";
    }
    else if(x==4){
        document.querySelector(" .cart4").style.display="block";
    }
    else if(x==5){
        document.querySelector(" .cart5").style.display="block";
    }
    else if(x==6){
        document.querySelector(" .cart6").style.display="block";
    }
    else if(x==7){
        document.querySelector(" .cart7").style.display="block";
    }
    else if(x==8){
        document.querySelector(" .cart8").style.display="block";
    }
    else if(x==9){
        document.querySelector(" .cart9").style.display="block";
    }
    else if(x==10){
        document.querySelector(" .cart10").style.display="block";
    } 
    else if(x==11){
        document.querySelector(" .cart11").style.display="block";
    }
    else if(x==12){
        document.querySelector(" .cart12").style.display="block";
    }
    else if(x==13){
        document.querySelector(" .cart13").style.display="block";
    }
    else if(x==14){
        document.querySelector(" .cart14").style.display="block";
    }
    else if(x==15){
        document.querySelector(" .cart15").style.display="block";
    }
    else if(x==16){
        document.querySelector(" .cart16").style.display="block";
    }
    else if(x==17){
        document.querySelector(" .cart17").style.display="block";
    }
    else if(x==18){
        document.querySelector(" .cart18").style.display="block";
    }
    else if(x==19){
        document.querySelector(" .cart19").style.display="block";
    }
        
    } 
    function removeAddToCart(y) {
    if (y==0){
        document.querySelector(".cart").style.display="none";
    }
    else if (y==1){
        document.querySelector(".cart1").style.display="none";
    }
    else if (y==2){
        document.querySelector(".cart2").style.display="none";
    }
    else if (y==3){
        document.querySelector(".cart3").style.display="none";
    }
    else if (y==4){
        document.querySelector(".cart4").style.display="none";
    }
    else if (y==5){
        document.querySelector(".cart5").style.display="none";
    }
    else if (y==6){
        document.querySelector(".cart6").style.display="none";
    }
    else if (y==7){
        document.querySelector(".cart7").style.display="none";
    }
    else if (y==8){
        document.querySelector(".cart8").style.display="none";
    }
    else if (y==9){
        document.querySelector(".cart9").style.display="none";
    }
    else if (y==10){
        document.querySelector(".cart10").style.display="none";
    }
    else if (y==11){
        document.querySelector(".cart11").style.display="none";
    }
    else if (y==12){
        document.querySelector(".cart12").style.display="none";
    }
    else if (y==13){
        document.querySelector(".cart13").style.display="none";
    }
    else if (y==14){
        document.querySelector(".cart14").style.display="none";
    }
    else if (y==15){
        document.querySelector(".cart15").style.display="none";
    }
    else if (y==16){
        document.querySelector(".cart16").style.display="none";
    }
    else if (y==17){
        document.querySelector(".cart17").style.display="none";
    } 
    else if (y==18){
        document.querySelector(".cart18").style.display="none";
    }
    else if (y==19){
        document.querySelector(".cart19").style.display="none";
    }

    }
    
    var cmp= document.getElementById("inc");
        function addItems(){
            cmp.innerHTML = parseInt(cmp.innerHTML) +1;
        }