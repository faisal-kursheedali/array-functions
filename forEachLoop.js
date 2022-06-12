function useForloop(arr, subFnc) {
  return arr.forEach(subFnc(itm));
}
let sum = 0;
sum += useForloop([1, 2, 3, 4, 5], (itm) => {
  return itm;
});
