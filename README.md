# recursion

Compared to other repositories I have made, this was more of a practice exercise than a project. The gui is very
simple. There are three buttons, two display the fibonacci sequence using an iterative function or recursion.
Each fibonacci button displays how long each method took from the start of execution to the end. The last button
displays the original array and a sorted array. To organize the array from least to greatest, merge sort was used.

Live Demo: https://worriorbeast.github.io/recursion/

Objective:

-  Output fibonacci sequence in an array using iterative method
-  Output fibonacci sequence in an array using recursion
-  Organize an array from least to greatest using merge sort

What I learned:

Although I know the concept of recursion, I definitely need more practice. Writing the function for outputting the
fibonacci sequence iteratively came to me naturally. Not much thinking had to be done. On the other hand, recursion
stumped me. I was unnecessarily over complicating the logic. In my mind I wanted to find the sum of fibonacci(n - 1)
and fibonacci(n - 2) then push the sum into the array then return the array. This does not work because I am
returning the array and that would mean adding arrays to each would throw an error. All I had to was get the last two
indexes of the returned array, find the two numbers, push the sum into the array, and return the array with the sum.

This was my first attempt at writing a merge sort algorithm and it was not as complicated as I thought it was going
to be. That's not to say it was easy. I definitely had to put on my thinking cap. Merge sort is the concept of
splitting the array continuously until the array can no longer be split then compare the numbers in the array as
we merge and go up the call stack eventually outputting an organized array. The section of splitting the array in
half is straight forward, but comparing and merging the numbers was challenging. Specifically iterating through the
right and left arrays. When iterating through arrays I usually use a for loop, but using a for loop would make the
merging more complicated than necessary. Say I initialize i to equal 0. For each iteration i would be incremented.
The issue here is that when left array with index of i is greater than right array of index xyz left array of
index i does not get moved into the merged array then the next iteration is i + 1, so left array of index i does
not get compared against right array xyz, instead left array index i + 1 does. We want to keep comparing left array
index i against the next right array index xyz until it is less than. For this reason I opted to use a while loop.
The condition would check if both left and right array still have numbers inside. If not then the length would be
zero. In conditions zero is false, so the moment any array is empty, the loop would stop comparing and moving
elements into the merged array.

Outputting the speed of how long both iteration and recursion took to execute was completely out of curiosity.
Sometimes the speed was zero seconds. At first I thought that was a bug, so I console logged the time stamp before
the functions executed and another time stamp after the function finished executing. OH MY! I WAS COMPLETED
FASCINATED WITH HOW QUICK THE CPU WORKED! I understand both methods did not have to do a lot of work, but the fact
that both methods would process with no time difference from the start to end. That blows my mind with how insanely
quick both approaches are. The longest time I saw both take is 1/10th of a millisecond.
