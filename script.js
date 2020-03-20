    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

   
    //Toggle menu 
      const navSlide = function () {
      burger.addEventListener('click', function (){
       
        navLinks.classList.toggle('nav-active'); 
        navLinks.forEach(function (){
        navLinks.addEventListener("click", function(){
        })    
        });
    });
}


navSlide();


const hideMenu = function(){
navLinks.addEventListener('click', function(){
navLinks.classList.remove('nav-active');

})
}

hideMenu(); 


//Color change
const home = document.querySelector('.home');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const body = document.querySelector('.change');


const changeHomeColor = function (){ 

home.addEventListener('click', function(){ 
    body.classList.remove('green');
    body.classList.remove('white');
    body.classList.remove('blue');
    body.classList.remove('pink');
    body.classList.toggle('home'); 

});
}

changeHomeColor(); 


const changePinkColor = function (){ 

    pink.addEventListener('click', function(){ 
        body.classList.remove('home');
        body.classList.remove('blue');
        body.classList.remove('green');
        body.classList.toggle('pink'); 
    
    });
    }
    
    changePinkColor(); 


      const changeGreenColor = function (){ 

        green.addEventListener('click', function(){ 
        body.classList.remove('home');
        body.classList.remove('blue');
        body.classList.remove('pink');
        body.classList.toggle('green'); 
        
        });
        }
        
        changeGreenColor(); 


        const changeBlueColor = function (){ 

            blue.addEventListener('click', function(){
            body.classList.remove('green');
            body.classList.remove('home');
            body.classList.remove('pink');
            body.classList.add('blue');
            });
        }
            
             changeBlueColor(); 