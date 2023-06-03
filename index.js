
// let carouselItems = document.querySelectorAll('.carousel-item');
// let currentIndex = 0;
// let time = 2000;

// function slide() {
//   let nextIndex = (currentIndex + 1) % carouselItems.length;

//   carouselItems[currentIndex].classList.remove('active');
//   carouselItems[nextIndex].classList.add('active');

//   currentIndex = nextIndex;

//   setInterval(slide, time);
// }

// slide();

// user status

function User(){

  ref=document.getElementById('User'); 
 
    ref.innerHTML=localStorage.getItem('name');

  ref.style.fontWeight='600';
}
setTimeout(User,100);

//Click on Signin 
function Login(){
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  window.location='Registration.html';
}

//Hidden Block1

function Hidden1(){  

  let e=document.querySelectorAll('.event')[0];
  let e1=document.querySelectorAll('.event')[1];
  
  // nav elements references
  let div1=document.getElementById('box1');
  let div2=document.getElementById('box2');
  let div3=document.getElementById('box3');
  let div4=document.getElementById('box4');

  // arrow reference
  const arr1=document.getElementById('arr-img1');
  const arr2=document.getElementById('arr-img2');
  const arr3=document.getElementById('arr-img3');
  const arr4=document.getElementById('arr-img4');
  

  if(div1.style.display=='none'){
    arr1.style.transition='0.1s';
    arr1.style.transform='rotate(180deg)';
    arr2.style.transform='rotate(360deg)';
    arr3.style.transform='rotate(360deg)';
    arr3.style.transform='rotate(360deg)';
    div1.style.display='flex';
    div2.style.display='none';
    div3.style.display='none';
    div4.style.display='none';
    e.style.opacity='0.7';
    e1.style.opacity='0.7';
    currElement.style.opacity='1';
  }
  else{
    div1.style.display='none';
    e.style.opacity='1';
    e1.style.opacity='1';
    arr1.style.transform ='rotate(360deg)'; 
  }
}

//Hidden Block2

function Hidden2(){
  
  let ele=document.querySelectorAll('.event')[0];
  let ele1=document.querySelectorAll('.event')[1];
  // navelements reference
  let div1=document.getElementById('box1');
  let div2=document.getElementById('box2');
  let div3=document.getElementById('box3');
  let div4=document.getElementById('box4');

  // arrow reference
  const arr1=document.getElementById('arr-img1');
  const arr2=document.getElementById('arr-img2');
  const arr3=document.getElementById('arr-img3');
  const arr4=document.getElementById('arr-img4');


  
  if(div2.style.display=='none'){
    arr2.style.transition='0.1s';

    arr2.style.transform='rotate(180deg)';
    arr1.style.transform='rotate(360deg)';
    arr3.style.transform='rotate(360deg)';
    arr4.style.transform='rotate(360deg)';

    div2.style.display='flex';
    div1.style.display='none';
    div3.style.display='none';
    div4.style.display='none';

    ele.style.opacity='0.5';
    ele1.style.opacity='0.5';
    div2.style.opacity='1';
  }
  else{
    div2.style.display='none';
    ele.style.opacity='1';
    ele1.style.opacity='1';
    arr2.style.transform='rotate(360deg)';
  }
}

//Hidden Block3

function Hidden3(){
  
  let ele=document.querySelectorAll('.event')[0];
  let ele1=document.querySelectorAll('.event')[1];

  let div1=document.getElementById('box1');
  let div2=document.getElementById('box2');
  let div3=document.getElementById('box3');
  let div4=document.getElementById('box4');

 // arrow reference
 const arr1=document.getElementById('arr-img1');
 const arr2=document.getElementById('arr-img2');
 const arr3=document.getElementById('arr-img3');
 const arr4=document.getElementById('arr-img4');

  if(div3.style.display=='none'){
    arr3.style.transition='0.1s';

    arr3.style.transform='rotate(180deg)';
    arr1.style.transform='rotate(360deg)';
    arr2.style.transform='rotate(360deg)';
    arr4.style.transform='rotate(360deg)';

    div3.style.display='flex';
    div4.style.display='none';
    div2.style.display='none';
    div1.style.display='none';
    ele.style.opacity='0.5';
    ele1.style.opacity='0.5';
    div3.style.opacity='1';

  }
  else{
    div3.style.display='none';
    ele.style.opacity='1';
    ele1.style.opacity='1';
    arr3.style.transform='rotate(360deg)';
  }
}

//Hidden Block4

function Hidden4(){
  
  
  let ele=document.querySelectorAll('.event')[0];
  let ele1=document.querySelectorAll('.event')[1];
  
  let div1=document.getElementById('box1');
  let div2=document.getElementById('box2');
  let div3=document.getElementById('box3');
  let div4=document.getElementById('box4');

// arrow reference
const arr1=document.getElementById('arr-img1');
const arr2=document.getElementById('arr-img2');
const arr3=document.getElementById('arr-img3');
const arr4=document.getElementById('arr-img4');

  if(div4.style.display=='none'){
    arr4.style.transition='0.1s';
    arr4.style.transform='rotate(180deg)';
    arr3.style.transform='rotate(360deg)';
    arr2.style.transform='rotate(360deg)';
    arr1.style.transform='rotate(360deg)';

  
    div4.style.display='flex';
    div3.style.display='none';
    div2.style.display='none';
    div1.style.display='none';
    ele.style.opacity='0.5';
    ele1.style.opacity='0.5';
    div4.style.opacity='1';
  }
  else{
    div4.style.display='none';
    ele.style.opacity='1';
    ele1.style.opacity='1';
    arr4.style.transform='rotate(360deg)';
  }
}




//onscroll effect
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }


// carousel

let arr=['./images/adobe2.jpg','./images/adobe3.jpg','./images/adobe5.jpg','./images/adobe6.jpg','./images/adobe8.jpg','./images/adobe9.webp'];
i=0;
function carousel(){
  i++;
  if(i>=arr.length){
    i=0;
    
  }
  imgref=document.getElementById('Carousel-img');
  imgref.src=arr[i];
}
setInterval(carousel,3000);

// function fun(arr){
//   arr = document.querySelectorAll('#arr-img');
//   let div=document.querySelectorAll('.division')
//   console.log(div);
//   for (let i = 0; i < arr.length; i++) {
//     console.log(div[i])
//     if(div[i].style.display = 'none'){
//       div[i].style.display = 'block';
      
      
//     }
//     else{
//       div[i].style.display = 'none'
//     }
    
//   }
    
// }

// search box Hidden block
function fun1(){
  const inp=document.querySelector('#search-inp');
  let ele=document.querySelectorAll('.event')[0];
  let ele1=document.querySelectorAll('.event')[1];

  
  if(inp.style.display =='none'){
    inp.style.display='block';
    ele.style.opacity='0.6';
    ele1.style.opacity='0.6';
  }
  else{
    inp.style.display='none';
    ele.style.opacity='1';
    ele1.style.opacity='1';

  }

  

}
 


