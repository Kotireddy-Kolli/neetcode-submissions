class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = []
        for(let i=0; i<position.length; i++) {
            cars.push({position: position[i], speed: speed[i], time: (target - position[i]) / speed[i]})
        }

        // Closest to target → farthest
        cars.sort((a,b) => b.position-a.position);

        let fleets = 0;
        let currFleetTime = 0;

        for(let i=0; i<cars.length; i++) {
            if(cars[i].time > currFleetTime) {
                fleets++;
                currFleetTime = cars[i].time;
            }
        }
        return fleets;
    }
}
