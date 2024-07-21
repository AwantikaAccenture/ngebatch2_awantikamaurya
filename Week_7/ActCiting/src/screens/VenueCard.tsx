import React from 'react';
import { Venue } from './VenueCardList';
import './card.css'
interface VenueCardProps {
    venue: Venue;
    onSummaryClick: () => void;
}



const VenueCard: React.FC<VenueCardProps> = ({ venue, onSummaryClick }) => {
    return (
        <div className="venue-card" >
        <div className="venue-name">{venue.name}</div>
        <div className="venue-details">
            <p><strong>Address:</strong> {venue.address}</p>
            <p><strong>Capacity:</strong> {venue.capacity}</p>
            <p><strong>Availability:</strong> {venue.startDate.toLocaleDateString()} - {venue.endDate.toLocaleDateString()}</p>
            <button onClick={onSummaryClick}>Summary</button>
        </div>
        </div>

    );
};

export default VenueCard;
