class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            this.keyStore.get(key).push({ value, timestamp });
        } else {
            this.keyStore.set(key, [{ value, timestamp }]);
        }
    }

    get(key, timestamp) {
        let values = this.keyStore.get(key);

        if (!values) return "";

        let left = 0;
        let right = values.length - 1;
        let result = "";

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (values[mid].timestamp <= timestamp) {
                result = values[mid].value;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}