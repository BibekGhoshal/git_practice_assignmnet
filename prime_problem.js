// You are given a num 13,check the no prime or not
for( i=1;i<=13;i++){
    
    for(j=1;j<=i;j++){
        if(i%j==0);{
        count++;
        }
    }
    if(count==2){
        console.log(i);
    }
    }