var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let area = 0;
  while (i < j) {
    area = Math.max(Math.min(height[i], height[j]) * (j - i), area);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return area;
};

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(arr));
