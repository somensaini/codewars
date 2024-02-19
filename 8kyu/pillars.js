// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

//     number of pillars (≥ 1);
//     distance between pillars (10 - 30 meters);
//     width of the pillar (10 - 50 centimeters).

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
  if (numPill === 1) return 0

  let totalDistance = 0
  dist = dist * 100

  for (let i = 1; i < numPill; i++) {
    totalDistance += dist + width
  }

  return totalDistance - width
}
