import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {

  const events= useLoaderData();
  return <EventsList events={events}/>;
    
      {/* <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div> */}
      
    
  
};

export default EventsPage;

export async function loader () {
    const response = await fetch('http://localhost:8080/events');

          if (!response.ok) {
            
          } else {
            const resData = await response.json();
            return resData.events;
          }

};