import {useState, useEffect} from 'react'
import axios from 'axios'
import './InputDetails.css'

function InputDetails({cityId, setPropertyData, updatePropertyCount}) {
    const [options, setOptions] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedBedroom, setSelectedBedroom] = useState(0);
    const [selectedBathroom, setSelectedBathroom] = useState(0);
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [selectedType, setSelectedType] = useState('');
  
    useEffect(() => {
        axios.post(`https://unilife-server.herokuapp.com/properties/filter`,{"query":{ 
        city_id: cityId,
        bedroom_count: selectedBedroom,
        bathroom_count: selectedBathroom,
        property_type: selectedType,
        rent: selectedPrice }})
        .then((res) => {
          setPropertyData(res.data.response)
          updatePropertyCount(res.data.total)
        })
        .catch((err) => console.log(err));
    }, [selectedBedroom, selectedBathroom, selectedPrice, selectedType, cityId, setPropertyData, updatePropertyCount]);
    
    const bedroomOptions = [1, 2, 3, 4, 5, 6]
    const bathroomOptions = [1, 2, 3, 4, 5]
    const priceOptions = [500, 1000, 1500, 2000, 2500]
    const typeOptions = ["Detached", "Semi-Detached", "Apartment"]

    const handleCityChange = (event) => {
      setSelectedCity(event.target.value);
    };
  
    const handleBedroomChange = (event) => {
      setSelectedBedroom(event.target.value);
    };
  
    const handleBathroomChange = (event) => {
      setSelectedBathroom(event.target.value);
    };
  
    const handlePriceChange = (event) => {
      setSelectedPrice(event.target.value);
    };
  
    const handleTypeChange = (event) => {
      setSelectedType(event.target.value);
    };
  
    return (
      <div className="city-details-dropdown-container">
        <div className="dropdown">
          <label htmlFor="select-bedroom"></label>
          <select
            className="dropdown-select"
            id="select-bedroom"
            onChange={handleBedroomChange}
            value={selectedBedroom}
          >
            <option value="" disabled>
              Any bedroom
            </option>
            {bedroomOptions.map(option => <option value={option} key={option}>{option}</option>)}
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="select-bathroom"></label>
          <select
            className="dropdown-select"
            id="select-bathroom"
            onChange={handleBathroomChange}
            value={selectedBathroom}
          >
            <option value="" disabled>
              Any bathroom
            </option>
            {bathroomOptions.map(option => <option value={option} key={option}>{option}</option>)}
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="select-price"></label>
          <select
            className="dropdown-select"
            id="select-price"
            onChange={handlePriceChange}
            value={selectedPrice}
          >
            <option value="" disabled>
              Any Price
            </option>
            {priceOptions.map(option => <option value={option} key={option}>{option}</option>)}
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="select-type"></label>
          <select
            className="dropdown-select"
            id="select-type"
            onChange={handleTypeChange}
            value={selectedType}
          >
            <option value="" disabled>
              Any type
            </option>
            {typeOptions.map(option => <option value={option} key={option}>{option}</option>)}
          </select>
        </div>
      </div>
    );
  }

export default InputDetails