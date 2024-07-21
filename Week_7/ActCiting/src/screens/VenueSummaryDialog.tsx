import React from 'react';
import { Venue } from './VenueCardList';
import './VenueSummaryDialog.css'
interface VenueSummaryDialogProps {
    venue: Venue;
    onClose: () => void;
}

const VenueSummaryDialog: React.FC<VenueSummaryDialogProps> = ({ venue, onClose }) => {
    return (
        <div className="venue-summary-dialog">
        <div className="dialog-content">
            <h2>Summary for {venue.name}</h2>
            <p><strong>Owner Name:</strong> {venue.ownerName}</p>
            <p><strong>Contact Number:</strong> {venue.contactNumber}</p>
            <p><strong>Email:</strong> {venue.email}</p>
            <p><strong>Address:</strong> {venue.address}</p>
            <p><strong>Description:</strong> {venue.description}</p>
            <p><strong>Locality Description:</strong> {venue.localityDescription}</p>
            <button onClick={onClose}>Close</button>
        </div>
        </div>
    );
};

export default VenueSummaryDialog;
