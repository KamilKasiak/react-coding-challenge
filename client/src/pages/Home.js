import './Home.scss';
import jsonData from '../planning.json';
import { useEffect, useState } from 'react';
import { OneObject, TopLabel } from '../components';

const Home = () => {
  const [data, setData] = useState([]);
  const [fetchRangeStart, setFetchRangeStart] = useState(0);
  const [fetchRangeStop, setFetchRangeStop] = useState(6);
  const [searchTalentName, setSearchTalentName] = useState('');
  const [industry, setIndustry] = useState('');
  const [city, setCity] = useState('');
  const [bookingGrade, setBookingGrade] = useState('');
  const [skillsRequired, setSkillsRequired] = useState('');

  const loadData = async () => {
    const parsedData = await JSON.parse(JSON.stringify(jsonData));
    setData(parsedData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredData = data.filter((obj) =>
    skillsRequired
      ? obj.requiredSkills.some((s) => s.name.includes(skillsRequired)) &&
        obj.talentName.toLowerCase().includes(searchTalentName.toLowerCase()) &&
        obj.industry.toLocaleLowerCase().includes(industry.toLowerCase()) &&
        obj.officeCity.toLocaleLowerCase().includes(city.toLowerCase()) &&
        obj.bookingGrade
          .toLocaleLowerCase()
          .includes(bookingGrade.toLowerCase())
      : obj.talentName.toLowerCase().includes(searchTalentName.toLowerCase()) &&
        obj.industry.toLocaleLowerCase().includes(industry.toLowerCase()) &&
        obj.officeCity.toLocaleLowerCase().includes(city.toLowerCase()) &&
        obj.bookingGrade
          .toLocaleLowerCase()
          .includes(bookingGrade.toLowerCase())
  );

  const nextPage = () => {
    if (fetchRangeStop < data.length + 5) {
      setFetchRangeStart(fetchRangeStart + 6);
      setFetchRangeStop(fetchRangeStop + 6);
      // console.log(`start ${fetchRangeStart} and stop ${fetchRangeStop}`);
    }
  };

  const prevPage = () => {
    if (fetchRangeStart > 0) {
      setFetchRangeStart(fetchRangeStart - 6);
      setFetchRangeStop(fetchRangeStop - 6);
      // console.log(`start ${fetchRangeStart} and stop ${fetchRangeStop}`);
    }
  };

  return (
    <div className='home-container'>
      <div className='top-bar'>
        <div className='search-container'>
          <div className='left-search'>
            <div className='search-item'>
              <pre>Talent Name:</pre>
              <form className='search-bar'>
                <input
                  type='text'
                  className='search-input'
                  placeholder='Search talent Name'
                  onChange={(e) => {
                    setSearchTalentName(e.target.value);
                  }}
                  value={searchTalentName}
                />
                <pre className='search-statistic'>
                  <i>type to see search results</i>
                </pre>
              </form>
            </div>
            <div className='search-item'>
              <pre>Required Skills:</pre>
              <form className='search-bar'>
                <input
                  type='text'
                  className='search-input'
                  placeholder='Required Skills case Sensitive'
                  onChange={(e) => {
                    setSkillsRequired(e.target.value);
                  }}
                  value={skillsRequired}
                />
                {
                  <pre className='search-statistic'>
                    <i>type to see search results</i>
                  </pre>
                }
              </form>
            </div>
            <div className='search-item'>
              <pre>Industry Name:</pre>
              <form className='search-bar'>
                <input
                  type='text'
                  className='search-input'
                  placeholder='Search industry'
                  onChange={(e) => {
                    setIndustry(e.target.value);
                  }}
                  value={industry}
                />
                {
                  <pre className='search-statistic'>
                    <i>type to see search results</i>
                  </pre>
                }
              </form>
            </div>
          </div>
          <div className='right-search'>
            <div className='search-item'>
              <pre>Office Location:</pre>
              <form className='search-bar'>
                <input
                  type='text'
                  className='search-input'
                  placeholder='Search city'
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  value={city}
                />
                {
                  <pre className='search-statistic'>
                    <i>type to see search results</i>
                  </pre>
                }
              </form>
            </div>
            <div className='search-item'>
              <pre>Booking Grade:</pre>
              <form className='search-bar'>
                <input
                  type='text'
                  className='search-input'
                  placeholder='Search Booking grade'
                  onChange={(e) => {
                    setBookingGrade(e.target.value);
                  }}
                  value={bookingGrade}
                />
                {
                  <pre className='search-statistic'>
                    <i>type to see search results</i>
                  </pre>
                }
              </form>
            </div>
          </div>
          <div className='search-statistic'>
            <h2>Search results for the entered parameters</h2>
            <div className='number-box'>
              {city ||
              skillsRequired ||
              bookingGrade ||
              industry ||
              searchTalentName ? (
                <h1> {filteredData.length}</h1>
              ) : (
                <h1>0</h1>
              )}
            </div>
          </div>
        </div>
        <div className='buttons-container'>
          <button
            className='prev-button'
            onClick={() => {
              prevPage();
            }}
          >
            previous page
          </button>
          <button className='next-button' onClick={() => nextPage()}>
            next page
          </button>
        </div>
      </div>
      <div className='all-data-container'>
        <TopLabel />
        {data &&
          filteredData.slice(fetchRangeStart, fetchRangeStop).map((object) => {
            return (
              <OneObject
                key={object.id}
                id={object.id}
                originalId={object.originalId}
                talentId={object.talentId}
                talentName={object.talentName}
                talentGrade={object.talentGrade}
                bookingGrade={object.bookingGrade}
                operatingUnit={object.operatingUnit}
                officeCity={object.officeCity}
                officePostalCode={object.officePostalCode}
                jobManagerName={object.jobManagerName}
                jobManagerId={object.jobManagerId}
                totalHours={object.totalHours}
                startDate={object.startDate}
                endDate={object.endDate}
                clientName={object.clientName}
                clientId={object.clientId}
                industry={object.industry}
                isUnassigned={object.isUnassigned}
                requiredSkills={object.requiredSkills}
                optionalSkills={object.optionalSkills}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
