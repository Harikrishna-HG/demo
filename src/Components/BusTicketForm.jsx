import React, { useState } from 'react';

const BusTicketForm = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [tripType, setTripType] = useState('one-way');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({ fromLocation, toLocation, travelDate, tripType });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700">From:</label>
          <input
            type="text"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Enter starting location"
          />
        </div>
        <div>
          <label className="block text-gray-700">To:</label>
          <input
            type="text"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Enter destination location"
          />
        </div>
        <div>
          <label className="block text-gray-700">Date:</label>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
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
            <label htmlFor="one-way" className="text-gray-700">One-way</label>
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
            <label htmlFor="two-way" className="text-gray-700">Round-trip</label>
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
  );
};

export default BusTicketForm;
