import React, { useEffect, useState } from "react";
import Footer from "./../footer/Footer";
import { Helmet } from "react-helmet";
import { EventsAPI } from "../api";
import { useParams } from "react-router";

const EventItem = () => {
    const [event, setEvent] = useState("");
    const { id } = useParams();
    useEffect(() => {
        EventsAPI.getOneEvents(id).then((res) => {
            const result = res.data;
            const event = result.data;
            setEvent(event);
        });
    }, []);
    return (
        <div>
            <Helmet>
                <title>{event.title}</title>
                <meta name="description" content={event.title} />
            </Helmet>
            <div className="container item__events">
                <div className="img">
                    <div
                        className="bcg__main"
                        style={{
                            backgroundImage: `url(/storage/${event.image})`,
                        }}
                    ></div>
                </div>
                <h1>{event.title}</h1>
                <h2 dangerouslySetInnerHTML={{ __html: event.body }}></h2>
            </div>
            <Footer />
        </div>
    );
};
export default EventItem;
