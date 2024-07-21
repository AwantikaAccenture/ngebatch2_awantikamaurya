import React, { useState } from 'react';
import VenueCard from './VenueCard';
import VenueSummaryDialog from './VenueSummaryDialog'; // Assuming you've created this component
import './card.css'

export interface Venue {
    id: number;
    name: string;
    address: string;
    capacity: number;
    startDate: Date;
    endDate: Date;
    ownerName: string;
    contactNumber: string;
    email: string;
    description: string;
    localityDescription: string;
}

const venues: Venue[] = [
    {
        id: 1,
        name: "Venue A",
        address: "52/12 XYZ, India",
        capacity: 100,
        startDate: new Date("2024-08-01"),
        endDate: new Date("2024-12-31"),
        ownerName: "xyz abc",
        contactNumber: "+1234567890",
        email: "xyz.abc@example.com",
        description: "Our space creates the perfect ambience for your special event. We are hosted events and parties of all types, including birthday parties , as well as book signings and sip& paint.",
        localityDescription: "City center, convenient transportation access."
    },
    
    {
        id: 2,
        name: "Venue B",
        address: "52/12 XYZ, India",
        capacity: 100,
        startDate: new Date("2024-08-01"),
        endDate: new Date("2024-12-31"),
        ownerName: "xyz abc",
        contactNumber: "+1234567890",
        email: "xyz.abc@example.com",
        description: "Designed to host smaller,our 1700sq. ft space features exposed brick,color changing skylight.",
        localityDescription: "City center, convenient transportation access."
    },
    {
        id: 3,
        name: "Venue C",
        address: "52/12 XYZ, India",
        capacity: 100,
        startDate: new Date("2024-08-01"),
        endDate: new Date("2024-12-31"),
        ownerName: "xyz abc",
        contactNumber: "+1234567890",
        email: "xyz.abc@example.com",
        description: "Venues vary greatly size , style, service.",
        localityDescription: "City center, convenient transportation access."
    },
    {
        id: 4,
        name: "Venue D",
        address: "52/12 XYZ, India",
        capacity: 100,
        startDate: new Date("2024-08-01"),
        endDate: new Date("2024-12-31"),
        ownerName: "xyz abc",
        contactNumber: "+1234567890",
        email: "xyz.abc@example.com",
        description: "Venues vary greatly size , style, service.",
        localityDescription: "City center, convenient transportation access."
    },
    {
        id: 5,
        name: "Venue E",
        address: "52/12 XYZ, India",
        capacity: 100,
        startDate: new Date("2024-08-01"),
        endDate: new Date("2024-12-31"),
        ownerName: "xyz abc",
        contactNumber: "+1234567890",
        email: "xyz.abc@example.com",
        description: "Venues vary greatly size , style, service.",
        localityDescription: "City center, convenient transportation access."
    },
    {
        id: 6,
        name: "Venue F",
        address: "52/12 XYZ, India",
        capacity: 100,
        startDate: new Date("2024-08-01"),
        endDate: new Date("2024-12-31"),
        ownerName: "xyz abc",
        contactNumber: "+1234567890",
        email: "xyz.abc@example.com",
        description: "Venues vary greatly size , style, service.",
        localityDescription: "City center, convenient transportation access."
    },
    // Add more venues as needed
];





const VenueCardList: React.FC = () => {
    const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleSummaryClick = (venue: Venue) => {
        setSelectedVenue(venue);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        
        setSelectedVenue(null);
        setDialogOpen(false);
    };
    
    return (
        <div className='backgroung-card'>
             <div className='screen-container'>
    <h3 style={{color:'white',fontWeight:'normal'}}>ActCiting | Part of GigStr</h3>
    </div>
       
        <div className="venue-card-list">

            {venues.map(venue => (
                <VenueCard
                    key={venue.id}
                    venue={venue}
                    onSummaryClick={() => handleSummaryClick(venue)}
                />
            ))}

            {selectedVenue && (
                <VenueSummaryDialog
                    venue={selectedVenue}
                    onClose={handleCloseDialog}
                />
            )}
        </div>
        </div>
    );
};

export default VenueCardList;
