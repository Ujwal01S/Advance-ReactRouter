import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEvent= ()=> {
    return (
        <EventForm />
    );
};



export default NewEvent;

export async function action ({request, params}) {
    const data = await request.formData();
    
    const eventDate = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    };

    const response = await fetch('http://localhost:8080/events',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventDate),
    });

    if (!response.ok) {
        throw json ({message: 'could not save data'}, {
            status: 500
        });
    }
    return redirect('/events');

};