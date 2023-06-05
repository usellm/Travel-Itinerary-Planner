import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useLLM from 'usellm';

const Explore = () => {
  const [promptText, setPromptText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState('');
  const [responseData, setResponseData] = useState([]);
  const [showLinkButton, setShowLinkButton] = useState(false);

  const prevResponseDataRef = useRef();

  useEffect(() => {
    prevResponseDataRef.current = responseData;
  }, [responseData]);

  const llm = useLLM({ serviceUrl: 'https://usellm.org/api/llm' });
  const router = useRouter();

  const handleSendMessage = async (event) => {
    try {
      setIsSending(true);
      setSendSuccess(false);
      setSendError('');

      try {
        const { message } = await llm.chat({
          messages: [
            {
              role: 'system',
              content:
                "You are a travel agent. The user is describing the kind of place they will like to go and visit. They may or may not have a specific place in mind. Generate a list of 6 names of specific places like Bali, Indonesia, Kaziranga, Assam India separated by a |. Don't add any prefix or suffix to your response. Give only reponse asked in the format given above. If the user asks for something that has no suggestions give the reason of why his/her description does not lead to any places and ask to search for something else. Examples can be \n User: I want to go to places where there is a lot of snow. Your response: Aomori City|Sapporo|Toyama|Quebec City|Syracuse|Saguenay \n User: I want to visit beaches in Liechtenstein \n Your response: Liechtenstein is a landlocked country and does not have any beaches. Please try somrthing else. \n User: India \n Your response: New Delhi|Agra|Goa|Mumbai|Shimla|Manali",
            },
            {
              role: 'user',
              content:
                'I am looking for a place to go visit. Here is what I have in mind: \n """',
            },
            {
              role: 'user',
              content: promptText + '. \n"""',
            },
          ],
        });
        setResponseData(message.content.split('|'));
      } catch (error) {
        console.error('Something went wrong!', error);
      }
      setIsSending(false);
      setSendSuccess(true);
      setPromptText('');
      setShowLinkButton(true);
      sessionStorage.setItem('responseData', JSON.stringify(responseData));
    } catch (error) {
      console.error(error);
      setIsSending(false);
      setSendError('Failed to send message. Please try again.');
    }
  };

  const handlePlaceClick = (place) => {
    router.push(`/scheduleGenerator/${place}`);
  };

  if (responseData.length === 1) {
    return (
      <div className="explore-container">
        <h1>Explore</h1>

        <div className="message-input">
          <div className="text-area">
            <textarea
              placeholder="Enter your message"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
            />
          </div>
          <button className="send-button" disabled={isSending} onClick={handleSendMessage}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        {sendSuccess && <p className="success-message">Message sent successfully!</p>}
        {sendError && <p className="error-message">{sendError}</p>}
        <h3>{responseData}</h3>
      </div>
    );
  } else {
    return (
      <div className="explore-container">
        <h1>Explore</h1>

        <div className="message-input">
          <div className="text-area">
            <textarea
              placeholder="Enter your message"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
            />
          </div>
          <button className="send-button" disabled={isSending} onClick={handleSendMessage}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        {sendSuccess && <p className="success-message">Message sent successfully!</p>}
        {sendError && <p className="error-message">{sendError}</p>}

        <div className="cards-container">
          {responseData.slice(0, 6).map((place, index) => (
            <div className="card" key={index} onClick={() => handlePlaceClick(place)}>
              <div className="place-info">
                <h2>{place}</h2>
              </div>
            </div>
          ))}
        </div>

        {showLinkButton && (
        <div className="link-button-container">
            <Link href="/customSchedule" className="link-button">
                Go to Schedule Generator
            </Link>
        </div>
        )}
      </div>
    );
  }
};

export default Explore;
