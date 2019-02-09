function Interval(start, end) {
  this.start = start;
  this.end = end;
}

function genIntervals(arr) {
  const result = [];
  arr.forEach(item => result.push(new Interval(...item)));
  return result;
}

export { Interval, genIntervals };
