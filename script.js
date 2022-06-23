
const input=document.querySelector('.input');
const my=document.querySelector('.main1');
const men=document.querySelector('.men')
const men1=document.querySelector('.men1')


const main=function(obj){
  my.append(men);
  men.innerHTML=`
  <div class="main2">
      <div class="my1">
        <div class="img"><img src="${obj.avatar_url}" alt=""></div>
        <a class="img1" href="${obj.html_url}">View Profile</a>
      </div>
      <div class="my2">
        <div class="qator1">
             <div class="h4 a1">Public Repos:${obj.public_repos}</div>
              <div  class="h4 a2">Public Gists:${obj.public_gists}</div>
                <div class="h4 a3">Followers:${obj.followers}</div>
                  <div class="h4 a4">Followering:${obj.following}</div>

        </div>
        <div class="qator2">
          <div class="h5">Company:${obj.company}</div>
          <div class="h5">Website/Blog:${obj.blog}</div>
          <div class="h5">Location: ${obj.location}</div>
          <div class="h5">Member Since: ${obj.created_at}</div>
        </div>
      </div>
    </div>

    `

    
}
const main2=function(obj){

  html=`<div class="main3">
  <div class="you">
     <h3 class="map">${obj.name}</h3>
     <div class="h6 b1">Stars: 1</div>
     <div class="h6 b2">Watchers: 1</div>
     <div class="h6 b3">Forks: 1</div>
  </div>`
  men1.insertAdjacentHTML('afterend',html)
}

const data=async function(res){
    
}

let arr=[];

input.addEventListener('input',function(){
  fetch(`https://api.github.com/users/${input.value}?client_id=1e0cbfc2829e1f514397&client_secret=f4bb68f93fbf8e23c7dd9f162f5a2b7ed487a53f`).then(function(respons){
  return respons.json();
}).then(function(res){
  console.log(res);
  
  main(res);
  

});

fetch(`https://api.github.com/users/${input.value}/repos`).then(function(respons){
  return respons.json();
}).then(function(res){
  
    res.forEach(element => {
      
      arr.push(element.name);
      main2(element);
    });
    console.log(arr)
  
 
  
})


})


 













