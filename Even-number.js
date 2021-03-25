const evenDescendingFunction = (number) => {
    console.log('Even number in descending order of ${number}');   //string concatanation

    for(let i = number; i>0; i -= 2){
        console.log(i);
    }
}
evenDescendingFunction(100);