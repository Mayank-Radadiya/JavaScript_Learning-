// For loop

for(let i = 0; i<11; i++){
    console.log(i);
}



// for loop  For array
array  = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}


// break and continue

//try to print 1 to 5 only
for (let i = 0; i < 11; i++) {
    if(i==5){
        console.log(`Detected 5`);
        break;
    }else{
        console.log(i);
    }
} 

//now print only 5 to 10

for (let i = 0; i < 11; i++) {
    if(i=5){
        console.log(`Detected 5`);
        for (let j = 6; j < 11; j++) {
            console.log(j);
        }
        break;
    }else{
        
    }
} 


//continue :skip one  particular code for one time

for(let i = 0; i<=10; i++){
    if(i == 4){
        continue  // 4 will not print  
    }else{
        console.log(i);
    }
}