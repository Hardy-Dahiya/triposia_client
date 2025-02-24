import { useState, useEffect } from "react";
import "@easepick/bundle";

interface Location {
    id: string;
    type: string;
    code: string;
    name: string;
    country_code: string;
    country_name: string;
    state_code: string | null;
    coordinates: {
        lon: number;
        lat: number;
    };
    index_strings: string[];
    weight: number;
    cases: null;
    country_cases: null;
    main_airport_name: string | null;
}


const SearchForm = () => {
  const [departureInput, setDepartureInput] = useState("");
  const [arrivalInput, setArrivalInput] = useState("");
  const [departureCode, setDepartureCode] = useState<string | null>(null);
  const [arrivalCode, setArrivalCode] = useState<string | null>(null);
  const [departureSuggestions, setDepartureSuggestions] = useState<Location[]>([]);
  const [arrivalSuggestions, setArrivalSuggestions] = useState<Location[]>([]);
  const [formattedDate1, setFormattedDate1] = useState<string | null>(null);
  const [formattedDate2, setFormattedDate2] = useState<string | null>(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let picker;
    import("@easepick/bundle").then(({ create, RangePlugin }) => {
      picker = new create({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element: document.getElementById("datepicker"),
        css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
        zIndex: 10,
        plugins: [RangePlugin],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setup(pickerInstance) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          pickerInstance.on("select", (e) => {
            const { start, end } = e.detail;
            if (start) setFormattedDate1(formatDate(start));
            if (end) setFormattedDate2(formatDate(end));
          });
        },
      });
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return () => picker?.destroy();
  }, []);

  const formatDate = (date: Date): string => {
    return `${date.getDate().toString().padStart(2, "0")}${(date.getMonth() + 1).toString().padStart(2, "0")}`;
  };

  const fetchAirportSuggestions = async (query: string, type: "departure" | "arrival") => {
    if (query.length < 3) return;
    try {
      const response = await fetch(
        `https://autocomplete.travelpayouts.com/places2?locale=en&types[]=airport&types[]=city&term=${query}`
      );
      const data = await response.json();
      if (type === "departure") {
        setDepartureSuggestions(data);
      } else {
        setArrivalSuggestions(data);
      }
    } catch (error) {
      console.error("Error fetching airport suggestions:", error);
    }
  };

  const handleSearch = () => {
    const host = typeof window !== "undefined" ? window.location.hostname : "";
    if (!departureCode || !arrivalCode || !formattedDate1) {
      alert("Please select departure, arrival, and travel dates.");
      return;
    }
    const url = new URL(`https://${host}/flights/${departureCode}-to-${arrivalCode}`);
    url.searchParams.append("startDate", formattedDate1 || "");
    url.searchParams.append("endDate", formattedDate2 || "");
    url.searchParams.append("adults", adults.toString());
    url.searchParams.append("children", children.toString());

    window.open(url.toString(), "_blank");
  };

  return (
    <section className="search-wrap section">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <span className="title is-3">Find your next stay</span>
            <p className="subtitle is-6 min-mt-10 mb-2">
              <strong>Search deals on hotels, homes, and much more...</strong>
            </p>
          </div>
        </div>

        <div className="columns is-multiline searchfromwrap">
          {/* Departure Airport */}
          <div className="column is-3">
            <div className="field">
              <div className="dropdown">
                <div className="dropdown-trigger">
                  <p className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      placeholder="Departure Airport"
                      value={departureInput}
                      onChange={(e) => {
                        setDepartureInput(e.target.value);
                        fetchAirportSuggestions(e.target.value, "departure");
                      }}
                      autoComplete="off"
                    />
                    <span className="icon is-small is-left">
                      <i className="fa-solid fa-plane-departure" />
                    </span>
                  </p>
                </div>
                {departureSuggestions.length > 0 && (
                  <ul className="autocomplete-dropdown">
                    {departureSuggestions.map((place, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setDepartureInput(`${place.name} (${place.code})`);
                          setDepartureCode(place.code);
                          setDepartureSuggestions([]);
                        }}
                      >
                        {place.name} ({place.code})
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Arrival Airport */}
          <div className="column is-3">
            <div className="field">
              <div className="dropdown">
                <div className="dropdown-trigger">
                  <p className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      placeholder="Arrival Airport"
                      value={arrivalInput}
                      onChange={(e) => {
                        setArrivalInput(e.target.value);
                        fetchAirportSuggestions(e.target.value, "arrival");
                      }}
                      autoComplete="off"
                    />
                    <span className="icon is-small is-left">
                      <i className="fa-solid fa-plane-arrival" />
                    </span>
                  </p>
                </div>
                {arrivalSuggestions.length > 0 && (
                  <ul className="autocomplete-dropdown">
                    {arrivalSuggestions.map((place, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setArrivalInput(`${place.name} (${place.code})`);
                          setArrivalCode(place.code);
                          setArrivalSuggestions([]);
                        }}
                      >
                        {place.name} ({place.code})
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Date Picker */}
          <div className="column is-3">
            <div className="field">
              <p className="control has-icons-left">
                <input id="datepicker" className="input" type="text" placeholder="Check-in Date - Check-out Date" />
                <span className="icon is-small is-left">
                  <i className="fas fa-calendar" />
                </span>
              </p>
            </div>
          </div>

          {/* Guest Selection */}
          <div className="column is-2">
            <div className="booking-form__input guests-input" onClick={() => setShowGuestDropdown(!showGuestDropdown)}>
              <i className="fa-regular fa-user" />
              <button>{adults} Adults, {children} Children</button>
            </div>
            {showGuestDropdown && (
              <div className="guest-dropdown">
                <p>Adults: <button onClick={() => setAdults((prev) => Math.max(1, prev - 1))}>-</button> {adults} <button onClick={() => setAdults(adults + 1)}>+</button></p>
                <p>Children: <button onClick={() => setChildren((prev) => Math.max(0, prev - 1))}>-</button> {children} <button onClick={() => setChildren(children + 1)}>+</button></p>
              </div>
            )}
          </div>

          {/* Search Button */}
          <div className="column is-1">
            <button className="button is-link" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
