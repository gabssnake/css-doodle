export default function iterator(input) {
  let index = 0, col = 1, line = 1;
  return {
    curr:  (n = 0) => input[index + n],
    end:   ()  => input.length <= index,
    info:  ()  => ({ index, col, line }),
    index: (n) => (n === undefined ? index : index = n),
    next:  ()  => {
      let next = input[index++];
      if (next == '\n') line++, col = 0;
      else col++;
      return next;
    }
  };
}
