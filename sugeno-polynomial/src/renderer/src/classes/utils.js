import Trimf from "./Trimf";

export const Point = (x, y) => ({x, y});
export const getSlope = (p1, p2) => (p2.y - p1.y) / (p2.x - p1.x);
export const getIntercept = (p1, p2) => p1.y - (getSlope(p1, p2) * p1.x);

// creating membership functions
const initMembershipFunctions = () => {
  const _tmp = []  

  for (let i = -5; i <= 5; i++) {
    const mf_points = []
    for (let [x, y] of [[i - 1, 0], [i, 1], [i+1, 0]]) {
      let point = Point(x, y)
      mf_points.push(point) 
    }
  
    let mf = new Trimf(...mf_points)
    _tmp.push(mf)
  };

  return _tmp;
};

export const mfs = initMembershipFunctions();

const z = [-135, -72, -33, -12, -3, 0, 3, 12, 33, 72, 135];

export const calculateExact = (x) => x**3 + (2 * x);

export const calculateWeightedAverage = (data) => {
  let WA = 0;
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    WA += (parseFloat(data[i]) * parseFloat(z[i]));
    sum += parseFloat(data[i]);
  };
  WA = WA / sum;
  return WA.toFixed(2);
}