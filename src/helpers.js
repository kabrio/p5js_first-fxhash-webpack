//helper functions

//random helpers
export function randomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(fxrand() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

// pick one from array
export function randomPick(arr) {
  return arr[randomInt(0, arr.length)]
}

// pick a specific amount from array
export function randomPickCount(arr, count) {
  let a = []
  a.push(randomPick(arr))
  while (a.length < count) {
    let ran = randomPick(arr)
    while (a.includes(ran)) {
      ran = randomPick(arr)
    }
    a.push(ran)
  }
  return a
}

// pick a specific amount from array but not 'ex'
export function randomPickEx(arr, count, exclude) {
  let a = exclude
  while (a.length < count) {
    let ran = randomPick(arr)
    while (a.includes(ran)) {
      ran = randomPick(arr)
    }
    a.push(ran)
  }
  console.log(a)
  return a
}


// push random pick from one array into another one
export function randomPickPush(pickArr, count, pushArr) {
  let counter = 0
  while (counter < count) {
    let ran = randomPick(pickArr)
    while (pushArr.includes(ran)) {
      ran = randomPick(pickArr)
    }
    pushArr.push(ran)
    counter++
  }
}


//math helpers

function even(num) {
 //return num;
 if (Math.floor(num) % 2 === 0) num = Math.floor(num);
  //make even nunumer
  else {
    if (num%1 === 0) num+=1;
    else num = Math.ceil(num);
  }        
  return num;
}

function uneven(num) {
  if (Math.floor(num)%2 === 0) num = Math.ceil(num);  //numake even nunumer
  else num = Math.floor(num);
  return num;
}

//check if number is power of 2
function powOf2(n) {
 if (typeof n !== 'number') 
  return 'Not a number'; 

return n && (n & (n - 1)) === 0;
}

// make number into number that is power of 2
function makePow2(n, w, h) {
  // return n;
  let n1= n, n2 = n;
  let c1=0, c2=0;
  while(!powOf2(n1)) {
   n1=n1+1;
   c1++;
  }

  while(!powOf2(n2)) {
    n2=n2-1;
    c2++;
  }

  if(n1 <= Math.min(w, h)) return n1;
  else return n2;

  if (n1 > n2) return n1;
  else return n2
 }