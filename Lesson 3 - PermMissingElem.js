/** Lesson 3 - Time Complexity: PermMissingElem
 * Find the missing element in a given permutation.
 * https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
 * https://codility.com/demo/results/trainingB265TY-JZN/
 * 
 * A zero-indexed array A consisting of N different integers is given. The
 * array contains integers in the range [1..(N + 1)], which means that exactly
 * one element is missing.
 * 
 * Your goal is to find that missing element.
 * Write a function:
 * function solution(A);
 * that, given a zero-indexed array A, returns the value of the missing element.
 * 
 * For example, given array A such that:
 * A[0] = 2
 * A[1] = 3
 * A[2] = 1
 * A[3] = 5
 * the function should return 4, as it is the missing element.
 * 
 * Assume that:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 * 
 * Complexity:
 * expected worst-case time complexity is O(N);
 * expected worst-case space complexity is O(1), beyond input storage (not
 * counting the storage required for input arguments).
 * Elements of input arrays can be modified.
**/
const solution = (A) => {
    let res = A
                .sort((a, b) => a - b)
                .find((cur, i) => cur - 1 !== i)
                - 1;
    
    if (A.length < 2 || A.length && Number.isNaN(res)) {
        return A.length + 1;
    } else if (Number.isNaN(res)) {
        return 1;
    }
    
    return res;
}