let items = [2,4,5,15,16,6,8]
// let item = items[Math.floor(Math.random()*items.length)];
// let item = items.sort(3)
// console.log(item);

function getMultipleRandom(items, num) {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }

  console.log(getMultipleRandom(items, 3));
