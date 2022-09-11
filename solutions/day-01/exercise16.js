// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
ages = [
    31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
    31, 34, 24, 33, 29, 26,
];
class Statistics {
    count() {
        return ages.length;
    }
    sum() {
        return ages.reduce((acc, rep) => acc + rep, 0);
    }
    min() {
        let minAge = ages[0];
        ages.map((age) => {
            if (age < minAge) minAge = age;
        });
        return minAge;
    }
    max() {
        let maxAge = ages[0];
        ages.map((age) => {
            if (age > maxAge) maxAge = age;
        });
        return maxAge;
    }
    range() {
        return this.max() - this.min();
    }
    mean() {
        return ages.reduce((acc, rep) => acc + rep, 0) / ages.length;
    }
    median() {
        ages.sort();
        let medianElem;
        if (ages.length % 2 === 0)
            medianElem =
                (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
        else medianElem = ages[Math.floor(ages.length / 2)];
        return medianElem;
    }
    mode() {
        const obj = {};
        ages.map((age) => {
            if (!obj[age]) obj[age] = 1;
            else obj[age] += 1;
        });
        let highvalue = Object.values(obj)[0];
        Object.values(obj).map((eachValue) => {
            if (eachValue > highvalue) highvalue = eachValue;
        });
        let finalKey = Object.keys(obj).find((key) => obj[key] === highvalue);
        return `{'mode': ${highvalue}, 'count': ${finalKey}}`;
    }
    var() {
        let variance = 0;
        ages.forEach((age) => {
            variance += (age - this.mean()) * (age - this.mean());
        });
        variance /= ages.length;
        return variance;
    }
    std() {
        return Math.sqrt(this.var());
    }
    freqDist() {
        let obj = {};
        ages.map((age) => {
            if (!obj[age]) obj[age] = 1;
            else obj[age] += 1;
        });
        return obj;
    }
    describe() {
        return "An Array is a single variable which is used to store different elements.";
    }
}
const statistics = new Statistics();

console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
console.log("Median: ", statistics.median()); // 29
console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
console.log("Variance: ", statistics.var()); // 17.5
console.log("Standard Deviation: ", statistics.std()); // 4.2
console.log("Variance: ", statistics.var()); // 17.5
console.log("Frequency Distribution: ", statistics.freqDist());
// [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// you output should look like this
console.log(statistics.describe());
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
