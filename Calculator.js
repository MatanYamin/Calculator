function acFunc(obj, firstObj, secondObj, signObj) {
  firstObj.first = "";
  secondObj.second = "";
  obj.abc="";
  signObj.calSign = "";
  }

function add(firstObj, secondObj, resutlObj){

  if(secondObj.second == ""){
    resutlObj.result = Number(firstObj.first);
  }
  else{
    resutlObj.result = Number(firstObj.first) + Number(secondObj.second);
  }
}
function sub(firstObj, secondObj, resutlObj){
  if(secondObj.second == ""){
    resutlObj.result = Number(firstObj.first);
  }
  else{
    resutlObj.result = Number(firstObj.first) - Number(secondObj.second);
  }  
}
function mult(firstObj, secondObj, resutlObj){
  if(secondObj.second == ""){
    resutlObj.result = Number(firstObj.first);
  }
  else{
    resutlObj.result = Number(firstObj.first) * Number(secondObj.second);
  }
}
function divide(firstObj, secondObj, resutlObj){
  if(Number(secondObj.second) != 0){
    if(secondObj.second == ""){
      resutlObj.result = Number(firstObj.first);
    }
    else{
      resutlObj.result = Number(firstObj.first) / Number(secondObj.second);
    }
  }
  else{
    resutlObj.result = "ERROR";
  }
}
  
  var loadPage = function() { /*the main function for clicks*/

    
        /*let abc = "";*/
        let firstObj = {first: ""};
        let secondObj = {second: ""};
        let signFlag = 0;
        let obj = {abc: "" };
        let temp;
        let dotSign = 0;
        let signObj = {calSign: ""};
        let resutlObj = {result:0};
        let equalSign = 0;
        let again = 0;
        let tempCalcSign = "";
        $(".doB").click(function(){
          

          temp = "";
          temp = $(this).text();
          if(temp !== "="){

            if(equalSign == 1){
              equalSign++;
              obj.abc = obj.abc.concat(firstObj.first);
            }

            if(again > 0){
              tempCalcSign = signObj.calSign;
            }

            if( (temp == "+" || temp == "-" || temp == "x" || temp == "/")){
              again++;
              signFlag = 1;
              signObj.calSign = temp; /*the sign that entered*/
              obj.abc = obj.abc.concat(temp);
              temp = "";
              dotSign = 0;
            }
            if(again > 1){
              signFlag = 0;
            }
            if(signFlag == 0){
             
              if(again > 1){
                if(temp == "."){
                  dotSign++;
                  if(dotSign<=1){
                    firstObj.first = firstObj.first.concat(temp);/*first is the first argument in cal*/
                    obj.abc = obj.abc.concat(temp);
                  }
                }
                else{
                  firstObj.first = firstObj.first.concat(temp);
                  obj.abc = obj.abc.concat(temp);
                }
                if(secondObj.second !== ""){
                  if(tempCalcSign == "+" ){
                    add(firstObj, secondObj, resutlObj);
                  }
                  else if(tempCalcSign == "-"){
                    sub(firstObj, secondObj, resutlObj);
                  }
                  else if(tempCalcSign == "x"){
                    mult(firstObj, secondObj, resutlObj);
                  }
                  else if(tempCalcSign == "/"){
                    divide(firstObj, secondObj, resutlObj);
                  }
                  secondObj.second = "";
                  firstObj.first = resutlObj.result.toString();
                  dotSign = 0;
                  again = 1;
                  signFlag = 1;
                }
/*-------------------------------------*/
              }
              else{

                if(temp == "."){
                  dotSign++;
                  if(dotSign<=1){
                    firstObj.first = firstObj.first.concat(temp);/*first is the first argument in cal*/
                    obj.abc = obj.abc.concat(temp);
                  }
                }
                else{
                  firstObj.first = firstObj.first.concat(temp);
                  obj.abc = obj.abc.concat(temp);
                }
              }
            }
            else if(signFlag == 1){
              if(temp == "."){
                dotSign++;
                if(dotSign<=1){

                  secondObj.second = secondObj.second.concat(temp);/*first is the first argument in cal*/
                  obj.abc = obj.abc.concat(temp);
                }
              }

              else{
                secondObj.second = secondObj.second.concat(temp);
                obj.abc = obj.abc.concat(temp);
              }

            }
            
            if(temp === "AC"){
            signFlag = 0;
            dotSign = 0;
            temp = "";
            acFunc(obj, firstObj, secondObj, signObj);/*acFunc handles the AC button*/
          }
          
          $("#displayResult").val(obj.abc);
        }

          else{
              
              again = 0;
              equalSign = 1;
              if(firstObj.first == ""){
                firstObj.first = 0;
              }
              if(secondObj.second == ""){
                secondObj.second = firstObj.first;
                resutlObj.result = Number(firstObj.first);
              }
              if(signObj.calSign == "+"){
                add(firstObj, secondObj, resutlObj);
              }
              else if(signObj.calSign == "-"){
                sub(firstObj, secondObj, resutlObj);
              }
              else if(signObj.calSign == "x"){
                mult(firstObj, secondObj, resutlObj);
              }
              else if(signObj.calSign == "/"){
                divide(firstObj, secondObj, resutlObj);
              }
           
            $("#displayResult").val(resutlObj.result);
            acFunc(obj, firstObj, secondObj, signObj);
            firstObj.first = resutlObj.result.toString();
            dotSign = 0;
          }
        
    
       })
  };



  $("document").ready(loadPage);