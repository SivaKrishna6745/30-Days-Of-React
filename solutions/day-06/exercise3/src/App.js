import "./App.css";
import { countriesData } from "./data/countries";
import { tenHighestPopulation } from "./data/ten_most_highest_populations";

function App() {
    const allCountries = [];
    countriesData.map((country) => allCountries.push(country.name));
    tenHighestPopulation.sort(function (a, b) {
        return b.population - a.population;
    });
    let tenHighestPopulationCountries = [];
    tenHighestPopulation.map((country) => {
        if (country.country === "United States of America")
            tenHighestPopulationCountries.push("USA");
        else if (country.country === "Russian Federation")
            tenHighestPopulationCountries.push("Russia");
        else tenHighestPopulationCountries.push(country.country);
        return tenHighestPopulationCountries;
    });
    let highestPopulation;
    for (let item of tenHighestPopulation) {
        if (item.country === "World") highestPopulation = item.population;
    }
    return (
        // , capital, languages, population, flag, currency
        <div className="App">
            {tenHighestPopulation.map((eachCountry, index) => {
                const { country, population } = eachCountry;
                let width =
                    (Number(population) / Number(highestPopulation)) * 100 +
                    "%";
                console.log(width);
                if (allCountries.includes(country) || country === "World")
                    return (
                        <div className="each-country" key={index}>
                            <p className="country-name">
                                {tenHighestPopulationCountries[index]}
                            </p>
                            <div className="bar-div">
                                <div
                                    className="bar"
                                    style={{
                                        width: width,
                                    }}
                                ></div>
                            </div>
                            <p className="population-count">
                                {population.toLocaleString("en-us")}
                            </p>
                        </div>
                    );
            })}
        </div>
    );
}

export default App;
