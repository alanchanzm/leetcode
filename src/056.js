/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
function merge(intervals) {
  const N = intervals.length;
  if (N < 2) return intervals;

  const result = [];
  const sorted = intervals.sort((a, b) => a.start - b.start);
  let [current] = sorted;
  for (let i = 1; i <= N; i += 1) {
    const next = sorted[i] || {};
    if (next.start >= current.start && next.start <= current.end) {
      current.end = Math.max(current.end, next.end);
    } else {
      result.push(current);
      current = next;
    }
  }
  return result;
}

export default merge;
