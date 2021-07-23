const Country = ({ data: { name, capital, population, languages, flag } }) => {
    // console.log(name, capital, population, languages, flag)
    return (
        <div>
            <h1>{name}</h1>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <h2>Languages</h2>
            <ul>
                {languages.map((language) => (
                    <li key={language.name}>
                        {language.name}
                    </li>
                ))}
            </ul>
            <img src={flag} alt={`${name}'s flag`} width="100px" />
        </div>
    );
}

export default Country;