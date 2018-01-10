function firstLastK(arr = []) {
  let k = arr.shift();
  return `${arr.slice(0, k).join(' ')}` + '\n' + `${arr.splice(-k).join(" ")}`;
}


