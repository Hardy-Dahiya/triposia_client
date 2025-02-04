import Link from 'next/link';

const AirlineParser = ({ content }: { content: string }) => {
  // Regex to match airline name and IATA code inside parentheses
  const airlineRegex = /([A-Za-z\s]+)\s*\((\w{2,3})\)/g;

  // Function to extract airline name and IATA code into an array of objects
  const extractAirlines = (text: string) => {
    const airlines = [];
    let match;

    // Run regex match on the provided content
    while ((match = airlineRegex.exec(text)) !== null) {
      const airlineName = match[1].trim(); // Extract airline name
      const iataCode = match[2].trim(); // Extract IATA code

      // Add to airlines array as an object
      airlines.push({
        name: airlineName,
        iata_code: iataCode,
      });
    }

    return airlines;
  };

  // Extract the airlines from the content
  const airlinesArray = extractAirlines(content);

  return airlinesArray.slice(1, 13).map((item, index: number) => {
    return (
      <div className="column is-2" key={index}>
        <div className="single-tour-feature">
          <div className="single-feature-icon">
            <i className="fa fa-plane" />
          </div>
          <div className="single-feature-titles">
            <Link href={`/airlines/${item.iata_code}`}>
              <p className="title-custom">{item.name}</p>
            </Link>
          </div>
        </div>
      </div>
    );
  });
};

export default AirlineParser;
