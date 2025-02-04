const CityParser = ({ content }: { content: string }) => {
  // Regex to match city names (words separated by commas)
  const cityRegex = /([A-Za-z\s]+?)(?=,|$)/g;

  // Function to extract city names into an array
  const extractCities = (text: string) => {
    return (
      text
        .match(cityRegex)
        ?.map((city) => city.trim())
        .filter(Boolean) || []
    );
  };

  // Extract the city names from the content
  const citiesArray = extractCities(content);

  return citiesArray.slice(1, 13).map((city, index: number) => {
    return (
      <div className="column is-2" key={index}>
        <div className="single-tour-feature">
          <div className="single-feature-icon">
            <i className="fa fa-map" />
          </div>
          <div className="single-feature-titles">
            <p className="title-custom">{city}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default CityParser;
