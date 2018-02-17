a)
-
```
a = 0;
while(a < n * n * n) {
    a = a + n * n;
}
```


The BigO notation for this algorith is O(n) which is linear time.
It seems as though the number of iterations is dependent on the value of **`n`**. For instance if **`n`** is set to `8`, then the number of iterations it would take for **`a`** to satisfy the condition in the `while` loop would be `8`. So as **`n`** increases so do the number of iterations, creating a linear time scale.

                O(xn) = O(n)

---

b) 
-
```
// input array is the length of n
let i = array.length - 1;
while (array[i] > 6 && i >= 0) {
  i = i/2;
}
```
Since `i` is a constant that is being halved through each iteration, it will give this alogrithm a time complexity of **O(log n)**.
          
                   log x
               y = -----  == O(log n)
                   log 2
---

c)
-
```
sum = 0;
for (i = 0; i < Math.sqrt(n) / 2; i++)
  for (j = i; j < 8 + i; j++)
    for (k = j; k < 8 + j; k++)
      sum++;
```
The output increments at a 64 increase as `n` is in a certain range:

    n = {1-4}   sum = 64
    n = {5-16}  sum = 128
    n = {17-36} sum = 192
    n = {37-64} sum = 256

  I believe this algorithm's time complexity is exponential: `O(N²)`

---

d)
-
```
sum = 0;
for (i = 1; i < n; i *= 2)
  for (j = 0; j < n; j++)
    sum++;
```
The first loop `for (i = 1; i < n; i *= 2)`, variable `i` reaches the value of `n` in `log n` steps since the value is doubling in each step.
The second loop `for (j = 0; j < n; j++)` is just a linear cycle, so requires `n` steps.

Since the inner loop runs `n` times and it is nested loops, the time complexity is `O(nlogn)`.

---

e)
-
```
sum = 0;
for (i = 0; i < n; i++)
  for (j = i + 1; j < n; j++)
    for (k = j + 1; k < n; k++)
      for (l = k +1; l < 10 + k; l++)
      sum++;
```
