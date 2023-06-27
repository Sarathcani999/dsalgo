# Binary Search

**Algorithm**
```javascript
binarySearch(arr, target) {
	l = 0;
	h = arr.length - 1;
	while (l < h) {
		mid = Math.floor((l + h) / 2) + l;
		if (target === arr[mid]) return mid;
		if (target < arr[mid]) h = mid - 1;
		if (target > arr[mid]) l = mid + 1;
	}
       return -1;
}
```

## Upper bound and Lower Bound

Here the question comes like find the index of greatest/smallest element which is smaller/greater than target in an array

```javascript
lowerbound(arr, target) {
	l = 0;
	h = arr.length - 1;
    ans = arr.length;
	while (l < h) {
		mid = Math.floor((l + h) / 2) + l;
		
        if (arr[mid] >= target) {
            ans = min(ans, mid);
            h = mid - 1;
        } else {
            l = mid + 1;
        }
	}
    return ans === arr.length ? -1: ans;
}
```

### Search Insertion Problem

In this problem an array and a target is given. If the target is present in the array then return that index else find the index where the element can be inserted without distorting the array. (same as lowerbound)

### Floor and ciel in sorted array

In this problem we are given an array and a target
```
floor means Max(arr[i] <= target)
ciel means Min(arr[i] >= target)
```
This problem is also similar to the lowerbound problem

```cpp
lowerbound = index of Min(arr[i] >= target)
upperbound = index of Min(arr[i] > target)
```
### Find the First and Last occurrence of an element in an array

In this problem first occurrence is lowerbound and last occurrence is upperbound

## Rotated sorted problems

Find the target element in a rotated sorted array

Here while doing binary search you have to know where to move left or right. the left portion and right portion can have 2 options sorted and unsorted.

> **NOTE: we can only search for the element in the sorted portion of the array** 

### Find in rotated sorted array II

Do the same problem, now the array contains duplicates.

The problem arises when 

```
A[l] === A[mid] === A[h]
```
this condition occurs.

when this condition comes we can do a skip that is **l++ and h--**

### Find minimum in rotated sorted array

Here in the binary search we have the left portion and the right portion. The left portion can be sorted or unsorted. The right portion can be sorted or unsorted.

We have the following cases
|left|right|inference|
|-|-|-|
|sorted|sorted| check if left[0] is a min value, eliminate left|
|sorted|unsorted| check if left[0] is a min value, eliminate left|
|unsorted|sorted| check if right[0] is a min value, eliminate right|

> **NOTE we won't have unsorted unsorted as a case**

> **Intution** If the left/right portion is sorted, then the first element is best possible outcome that part could produce. We will compare that with our existing answer and eliminates the sorted portion and move to the unsorted portion.

### Find out how many times the array has been rotated

Here we return the index of the min value in the array. Similar to the previous problem

### Find Peak Element in Bitonic Array

Bitonic array is a rotated sorted array. On performing binary search, there are 3 options

**Case** Mid can be the peak

**Case** Mid can be in increasing portion (left of peak) => eliminate left portion

**Case** Mid can be in decreasing portion (right of peak) => eliminate right portion

> **Intution** an element is a peak element iff A[mid - 1] < A[mid] > A[mid + 1]

> **NOTE** when comparing the first and last element this will face issue as the array will go out of bounds, so to tackle that we will do those two cases individually and in binary search we will perform from 1 to n-1 (excluded)

## Other Pattern (Optimization problem)

### Find square root of a  number N

**Naive approach**

The square root of a number can be found by checking the square of numbers from 1 to N (included). If match is found then we can break the loop.

This problem can be converted to a binary search problem since we are searching from 1 to N(included) and we can eliminate the right portion if A[mid] * A[mid] > N. Otherwise we can eliminate the left portion. While doing this update the ans as A[mid].

### Find the Nth root of N

This problem is similar to the previous problem. We just have to write a custom function for the if condition.

### Koko Eating Bananas

### Min number of days to make N bouquets

### Find the smallest divisor given a threshold value

### Capacity to ship packages within D days

### Kth missing positive number

### Aggressive Cows

### Book Allocation