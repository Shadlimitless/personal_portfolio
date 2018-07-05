function recurr (n) { 
    
    if(n<=0) {
        return 1;
    }
    else{

        if(n>1){
            return n*recurr(n-1);
        }
        return n;
    }

    
}

console.log(recurr(10));