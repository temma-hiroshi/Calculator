var result = document.getElementById("result");
var dot =document.getElementById("dot");
var Operator=['+','-','*','/'];

function clickbutton(value){
  if (value == 'AC'){
    dot.disabled = false;
    result.innerHTML = '0';
  }
  
  else if( value == '='){
    dot.disabled = false;
    result.innerHTML = eval(result.innerHTML);
  }
  
  // value=演算子
  else if(Operator.includes(value) ==true){
    dot.disabled = false;
  // 直前の入力と現在の入力が共に演算子の時、現在の演算子で上書き
    if(Operator.includes(result.innerHTML.slice(-1)) == true){
      result.innerHTML = result.innerHTML.slice(0,-1);
      result.innerHTML += value;
    }
    else{
    result.innerHTML += value;
    }
  }
  // value=.
  else if(value=='.'){
    // .を入力したら、=,AC,演算子入力があるまでdisabled=true
    dot.disabled =true;
    
    // 演算子直後の.は　0.として入力
    if(Operator.includes(result.innerHTML.slice(-1)) == true){
      result.innerHTML += '0.';
    }
    else{
      result.innerHTML += value;
    }
  }
  // value=0
  else if(value == '0'){
    if(result.innerHTML == '0'){
      return;
    }
    // 直前が0、かつその前が演算子なら、現在のvalue=0は入力しない
    else if(result.innerHTML.slice(-1) == '0' && 
            Operator.includes(result.innerHTML.slice(-2,-1)) == true){
      return;
      }
    else{
      result.innerHTML += value;
    }
  }
  
  // value=1~9
  else{
    if(result.innerHTML == '0'){
      result.innerHTML = value;
    }
    // 直前が０、その前が演算子の時、入力された数字で上書き
    else if(result.innerHTML.slice(-1) == '0' && 
            Operator.includes(result.innerHTML.slice(-2,-1)) == true){
              result.innerHTML = result.innerHTML.slice(0,-1);
              result.innerHTML += value;
         }
      else{
      result.innerHTML+= value;
    }
  }
}