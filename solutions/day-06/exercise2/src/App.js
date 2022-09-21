import "./App.css";

function App() {
    const numbers = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
    let style = "";
    const isPrime = (num) => {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) count++;
        }
        if (count === 2) return 1;
        else return 0;
    };
    numbers.map((number) => {
        if (number % 2 === 0) style = "green";
        else if (isPrime(Number(number))) style = "red";
        else style = "yellow";
        return style;
    });
    return (
        <div className="App">
            <h1>30 Days of React</h1>
            <h2>Number Generator</h2>
            <div className="numbers">
                {numbers.map((number, index) => {
                    if (number % 2 === 0) style = "green";
                    else if (isPrime(Number(number))) style = "red";
                    else style = "gold";
                    return (
                        <h1
                            key={index}
                            style={{
                                backgroundColor: style,
                            }}
                            className="number"
                        >
                            {number}
                        </h1>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
