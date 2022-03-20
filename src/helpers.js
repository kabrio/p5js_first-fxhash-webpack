//helper functions

export function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function randomPick(arr) {
  return arr[randomInt(0,arr.length)];
}

export function randomPickEx(arr, count) {
  let a = [];
  a.push(randomPick(arr))
  while(a.length < count) {
    let ran = randomPick(arr);
    while(a.includes(ran)) {
      ran = randomPick(arr);      
    }
    a.push(ran);
  }
  return a;
}

export function randomPickEx2(arr, count, ex) {
  let a = ex;
  while(a.length < count) {
    let ran = randomPick(arr);
    while(a.includes(ran)) {
      ran = randomPick(arr);      
    }
    a.push(ran);
  }
  console.log(a)
  return a;
}

export function randomPickPush(pickArr, count, pushArr) {
  // pushArr.push(randomPick(pickArr));
  let counter = 0
  while(counter < count) {
    let ran = randomPick(pickArr);
    while(pushArr.includes(ran)) {
      ran = randomPick(pickArr);      
    }
    pushArr.push(ran);
    counter++;
  }
}