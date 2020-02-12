function superReducedString(s) {
    let arr = s.split('');
    let done = false;
    
    while(!done){
      done = true;
      for(let i = 0 ; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] == arr[j]){
              done = false;
              arr.splice(i, 1);
              arr.splice(j-1,1);
            }
        }
    }
    }
    if(arr.length == 0){
        return 'Empty String';
    }else {
        return arr.join('');
    }     
}
