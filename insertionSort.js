const array = [5,1,3,11,2,7,2,1];
const A = [31,41,59,26,41,58];

window.onload = function() {
    insertionSort(array);
    insertionSort(A);
    insertionSortReverse(A);
};

const insertionSort = num => {
    for(let i=1; i < num.length; i++) {
        let currentNum = num[i];
        let j = i-1;
        while(num[j]>currentNum){
            num[j+1] = num[j];
            j = j - 1;
        } // dopiero po usunięciu z while (j>0 && ) zaczęło działać poprawnie, dlaczego?
        num[j+1]= currentNum;
    }
    return num;

};

const insertionSortReverse = num => {
    for (let i=1; i<num.length; i++) {
        let currentNum= num[i];
        let j = i-1;
        while (num[j] < currentNum) {
            num[j+1] = num[j];
            j = j - 1;
        }
        num[j+1] = currentNum;
    }
    return num;
};