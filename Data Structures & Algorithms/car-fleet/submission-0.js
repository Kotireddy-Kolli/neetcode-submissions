class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let positionSpeedMap = []
        for(let i=0; i<position.length; i++) {
            positionSpeedMap.push({position: position[i], speed: speed[i], time: (target - position[i]) / speed[i]})
        }

        // Closest to target → farthest
        positionSpeedMap.sort((a,b) => b.position-a.position);

        let fleets = 0;
        let currFleetTime = 0;

        for(let i=0; i<positionSpeedMap.length; i++) {
            if(positionSpeedMap[i].time > currFleetTime) {
                fleets++;
                currFleetTime = positionSpeedMap[i].time;
            }
        }
        return fleets;
    }
}
