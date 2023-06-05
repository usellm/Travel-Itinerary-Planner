import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
// import './ScheduleGenerator.css';
import useLLM from 'usellm';

const CustomSchedule = () => {
  const [startCity, setStartCity] = useState('');
  const [endCity, setEndCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [response, setResponse] = useState('');
  const llm = useLLM({ serviceUrl: 'https://usellm.org/api/llm' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await llm.chat({
        messages : [
        {
          role: 'system',
          content: `You are a travel agent that helps users to plan their trip. Users will provide their source and destination place and start and end date for you to plan their trip. Start with a short description of the place that the user wants to visit so that he knows about the place. Don't add any prefix or suffix to your response. Generate your responses in markdown format, with proper heading and tables. Generates day wise schedule and Budget in tables.\n """`,
        },
        {
          role: 'user',
          content: `Create an Itinerary for a trip from a source city to a destination city mentioned below and the dates are also mentioned below. Make sure to include the most beautiful yet safe places I can explore. Include a moderate amount of things to do since I also want some time to relax. Make a date wise itinerary in different tables. Also based on the trip you created, what will be the total expense of traveling around and just enjoying myself for just one person? Exclude hotel and flights. Finally create two different tables summarizing my final itinerary in detail, the entire budget, emergency numbers, customs, and safety. Keep the customs and safety brief \n """`,
        },
        {
          role: 'user',
          content: `Source City: ${startCity} Destination City: ${endCity} . From ${startDate} to ${endDate}. \n"""`,
        },
      ],
        stream: true,
        onStream: ({ message }) => setResponse(message.content),
      });
    } catch (error) {
      console.error('Something went wrong!', error);
    }
  };

  return (
    <div>
      <h1>Travel Schedule Generator</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="startCity">Source City:</label>
        <input type="text" id="startCity" name="startCity" required onChange={(e) => setStartCity(e.target.value)} />

        <label htmlFor="endCity">Destination City:</label>
        <input type='text' id="endCity" name="endcity" required onChange={(e)=>setEndCity(e.target.value)}></input>

        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" name="startDate" required onChange={(e) => setStartDate(e.target.value)} />

        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" name="endDate" required onChange={(e) => setEndDate(e.target.value)} />

        <button type="submit" id="myButton">Generate Schedule</button>
      </form>
      {response && (
        <div className="markdown-container">
          <ReactMarkdown remarkPlugins={[gfm]}>{response}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default CustomSchedule;