import React, { useState } from 'react';

const BookNow = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [tripType, setTripType] = useState('one-way');
  const [searchResults, setSearchResults] = useState([]);

  const dummyBuses = [
    {
      busNumber: 'MH12AB1234',
      busType: 'AC',
      category: 'Deluxe',
      price: '500',
      contact: '9876543210',
      availableSeats: 20,
    },
    {
      busNumber: 'MH12AB1234',
      busType: 'AC',
      category: 'Deluxe',
      price: '500',
      contact: '9876543210',
      availableSeats: 20,
    },
   
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a search by setting dummy bus data
    setSearchResults(dummyBuses);
  };

  return ( 
    <div className="flex flex-wrap pt-24 mb-8 px-2" >
      <div className="w-full lg:w-1/2 p-5 bg-white rounded shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-purple-700">From:</label>
            <input
              type="text"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter starting location"
            />
          </div>
          <div>
            <label className="block text-purple-700">To:</label>
            <input
              type="text"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter destination location"
            />
          </div>
          <div>
            <label className="block text-purple-700 ">Date:</label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full mt-1 p-2 border text-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <input
                type="radio"
                id="one-way"
                name="tripType"
                value="one-way"
                checked={tripType === 'one-way'}
                onChange={(e) => setTripType(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="one-way" className="text-purple-700">One-way</label>
            </div>
            <div>
              <input
                type="radio"
                id="two-way"
                name="tripType"
                value="round-trip"
                checked={tripType === 'round-trip'}
                onChange={(e) => setTripType(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="two-way" className="text-purple-700">Round-trip</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-full lg:w-1/2 p-5">
        {searchResults.length > 0 ? (
          <div className="space-y-5">
            {searchResults.map((bus, index) => (
              <BusCard key={index} bus={bus} />
            ))}
          </div>
        ) : (
          <p className="text-white">No search results yet. Fill out the form and click "Search" to see available buses.</p>
        )}
      </div>
    </div>
  );
};

const BusCard = ({ bus }) => (
  <div className="p-4 border rounded shadow-sm bg-white">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-purple-700">Bus Number: {bus.busNumber}</h3>
        <p className='text-purple-700'>Type: {bus.busType}</p>
        <p className='text-purple-700'>Category: {bus.category}</p>
        <p className='text-purple-700'>Price: {bus.price}</p>
        <p className='text-purple-700'>Contact: {bus.contact}</p>
        <p className='text-purple-700'>Available Seats: {bus.availableSeats}</p>
      </div>
      <button className="px-4 py-2 bg-purple-700 text-white rounded hover:border hover:bg-white hover:text-purple-700 ">
        Book Now
      </button>
    </div>
  </div>
);

export default BookNow;
