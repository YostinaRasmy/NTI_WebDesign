var looping = (startNum , endNum , breakNum, contNum )=>{
    for( i=startNum ; i<=endNum ; i++ ){
        if( i == contNum){
            continue;
        }
        else if( i == breakNum){
            break;
        }
        console.log(i)
    }
    if(startNum==null||endNum==null||breakNum==null||contNum==null){
    alert("enter all numbers")
    }

}
var s = looping(2,11,10);
console.log(s)

