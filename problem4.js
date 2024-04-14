//function to reverse an array in place.
function reverseArrayInPlace(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }

    return array;
}
const arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);
console.log(arr);



//function to find the common elements between two arrays
function findCommonElements(array1, array2) {
    let set = new Set(array1);
    let commonElements = [];

    for (let i = 0; i < array2.length; i++) {
        if (set.has(array2[i])) {
            commonElements.push(array2[i]);
            set.delete(array2[i]);
        }
    }

    return commonElements;
}
const a1 = [1, 2, 3, 4, 5];
const a2 = [3, 4, 5, 6, 7];
console.log(findCommonElements(a1, a2));



//function to remove duplicates from an array
function removeDuplicates(array) {
    let uniqueElements = new Set(array);
    let uniqueArray = Array.from(uniqueElements);
    return uniqueArray;
}
const array2 = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(array2))



//function to rotate an array to the right by k steps
function rotateArrayRight(array, k) {
    k = k % array.length;
    if (k <= 0) return array;

    const splitIndex = array.length - k;
    const firstPart = array.slice(0, splitIndex);
    const secondPart = array.slice(splitIndex);

    return secondPart.concat(firstPart);
}
const array3 = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateArrayRight(array3, k));



//function to merge two sorted arrays into a single sorted array
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2));