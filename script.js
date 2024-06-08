// // Question 1

const div1=document.createElement("div");
// div1.style.backgroundColor="blue"
div1.style.display="flex";
div1.style.justifyContent="center";
div1.style.padding="20px";

document.body.appendChild(div1);

const unorderList=document.createElement("ul");
div1.appendChild(unorderList);
const list1=document.createElement("li");
const img1=document.createElement("img");
list1.innerText="Watermelon";
list1.style.padding="10px 20px";
list1.style.color="white";
list1.style.textDecoration="none";
list1.style.display="flex";
list1.style.textAlign="center";
img1.setAttribute("src","./watermelon.jpg");
img1.style.width="250px";
img1.style.borderRadius="50px";
img1.style.border="2px solid red";
unorderList.appendChild(list1);
unorderList.appendChild(img1);

const list2=document.createElement("li");
const img2=document.createElement("img");
list2.innerText="Strawbery";
list2.style.padding="10px 20px";
list2.style.color="white";
list2.style.textDecoration="none";
list2.style.display="flex";
list2.style.textAlign="center";
img2.setAttribute("src","./strawbery.jpg");
img2.style.width="250px";
img2.style.borderRadius="50px";
img2.style.border="2px solid red";
unorderList.appendChild(list2);
unorderList.appendChild(img2);

const list3=document.createElement("li");
const img3=document.createElement("img");
list3.innerText="Bluebery";
list3.style.padding="10px 20px";
list3.style.color="white";
list3.style.textDecoration="none";
list3.style.display="flex";
list3.style.textAlign="center";
img3.setAttribute("src","./bluebery.jpg");
img3.style.width="250px";
img3.style.borderRadius="50px";
img3.style.border="2px solid red";
unorderList.appendChild(list3);
unorderList.appendChild(img3);

const list4=document.createElement("li");
const img4=document.createElement("img");
list4.innerText="Orange";
list4.style.padding="10px 20px";
list4.style.color="white";
list4.style.textDecoration="none";
list4.style.display="flex";
list4.style.textAlign="center";
img4.setAttribute("src","./orange.jpg");
img4.style.width="250px";
img4.style.borderRadius="50px";
img4.style.border="2px solid red";
unorderList.appendChild(list4);
unorderList.appendChild(img4);

const list5=document.createElement("li");
const img5=document.createElement("img");
list5.innerText="Apple";
list5.style.padding="10px 20px";
list5.style.color="white";
list5.style.textDecoration="none";
list5.style.display="flex";
list5.style.textAlign="center";
img5.setAttribute("src","./apple.jpg");
img5.style.width="250px";
img5.style.borderRadius="50px";
img5.style.border="2px solid red";
unorderList.appendChild(list5);
unorderList.appendChild(img5);










// Question 2

// function array1(arr,num){
//     let count=0;
//    for(let i=0;i<arr.length;i++){
     
//     if(num===arr[i]){
//         console.log("index"+"   "+i);
  
//     }
//     else if(num!= arr[i]){
//         count++;
//     }

//    }
//    if(count==arr.length){
//     console.log("-1");
//    }
// }
// array1([1,2,3,0,5],5);