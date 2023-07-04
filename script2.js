    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
 
            // Generate random number
            var j = Math.floor(Math.random() * (i + 1));
 
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
 
        return array;
    }
let URL = "https://random-word-api.vercel.app/api?words=1";
fetch(URL).then((response) => {
  console.log(response.OK);
  return response.json();
}).then((response) => {
  console.log(response[0]);
  let w=response[0];
  let length=w.length;
  let arr=[];
  for(var i=0;i<length;i++){
    arr.push(i);
    
  }
  arr=shuffleArray(arr);
  console.log(arr);
  let st="";
  for(var i=0;i<length;i++){
    st=st+w[arr[i]];
  }
  random.innerHTML=`<p id="scrambled">${st}</p>`;
  let btn=document.getElementById("submit");
  btn.addEventListener("click",()=>{
    let inp=document.getElementById("inp").value;
    if(inp==w){
      result.innerHTML="Success";
      result.style.color="green";
    }
    else{
      result.innerHTML="Failed<br> Try Again";
      result.style.color="red";
    }
  
})
}).catch((Error)=>{
  console.log(Error);
})
