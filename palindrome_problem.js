// You are given a string("Bibek"), check is it palindrome or not



var new_value=" ";
    for(var i=1;i>=0;i--){
        new_value=new_value + str[i];
    }
    if(str==new_value){
        console.log("Yes");
    }
    else{
        console.log("No");
    }