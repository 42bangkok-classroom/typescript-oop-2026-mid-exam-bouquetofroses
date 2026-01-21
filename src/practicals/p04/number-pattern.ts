// Write your code below
const n4 = Number(process.argv[2]);
for (let i = 1 ; i <= n4 ; i++ ) {
    let rs4 = "";

    for (let k = 1 ; k <= n4-i  ; k++){
        rs4 += " " ;
    }
    for (let j = i ; j < n4-i  ; j--){
        rs4 += j;
    }

    console.log(rs4);
}




// const size1212 = Number(process.argv[2]);

//   for (let i = size1212; i >= 1; i--) {
//     let row = "";
//     for (let j = i; j >= 1; j--) {
//       row += j;
//     }
//     console.log(row);
//   }

