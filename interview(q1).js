let arr=["komal","monisha","sneha","anushka","subramanyam","narsingh","keshavmadhav","radhakrishna","rukminidwarkadhish"];
for(let i=0;i<arr.length;i++){
    if(arr[i].length<6){
        console.log("gryffindor");
    }
    else if(arr[i].length>=6 && arr[i].length<8){
        console.log("hufflepuff");
    }
    else if(arr[i].length>=8 && arr[i].length<12){
        console.log("ravenclaw");
    }
    else{
        console.log("slytherin");
    }
}