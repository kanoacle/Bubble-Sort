# Sorting Algorithms

### This repository is home to my implementations of five sorting algorithms: Bubble Sort, Insertion Sort, Merge Sort, Quicksort, and Selection Sort.

I've included a bit more about these algorithms below...
1. Bubble Sort - bubble sort is a relatively slow method of sorting that sorts a list by traversing the entire list and comparing adjacent values repeatedly until the entire list is sorted and the algorithm passes through the list without making any changes.

2. Insertion Sort - insertion sort is another simple sorting algorithm, but this one sorts your list by creating a new list and injecting the element of the original list currently under comparison into the new list where it sees best.

3. Merge Sort - merge sort was probably the toughest for me to implement, because it is the most complex. This algorithm sorts a list by splitting it into sub lists until all sub lists only have 1 or 0 values in them, then creating a new list by comparing values in the sub lists.

4. Quicksort - quicksort is the fastest sorting algorithm that we know of so far. This method sorts a list by using a pivot value, creating sub lists of values in the list that are greater or less than the pivot value, then comparing the values in these sub arrays until the list is sorted.

5. Selection Sort - selection sort is an intermediate method that sorts a list by comparing the "minimum" value (this is initialized as the first item in the list) to the other values and swapping them if the "minimum" is greater than what it is being compared to. the minimum updates if this happens. This cycle repeats until the list is sorted.

### Want to see how these are implemented?

To see my implementations, look in the "js" folder above this ReadMe. If you'd like to look at my test files, look in the "tests" folder. To see how I actually tested the algorithms, and run the tests in real time, fork and clone this repository to your local computer with your terminal, then navigate into the directory created for this repository.

To install the dependencies neccessary and execute the tests, run the following commands...
1. `npm init --yes`
2. `npm i -D mocha chai`
3. `npm test`