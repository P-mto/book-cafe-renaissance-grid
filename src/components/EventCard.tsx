
import React from 'react';
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  image: string;
  description: string;
  isTall?: boolean;
  isWide?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ 
  title, 
  date,
  time,
  image, 
  description,
  isTall = false,
  isWide = false 
}) => {
  const cardClasses = `cafe-card ${isTall ? 'card-tall' : ''} ${isWide ? 'card-wide' : ''}`;

  return (
    <div className={cardClasses}>
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <div className="flex items-center">
            <div className="bg-burgundy text-cream px-3 py-1 rounded-md text-sm font-medium">
              {date}
            </div>
            <div className="ml-2 text-cream text-sm">
              {time}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="burgundy-title text-lg md:text-xl mb-2">{title}</h3>
        <p className="text-brown text-sm mb-4">{description}</p>
        
        <Button className="w-full bg-burgundy hover:bg-burgundy/90 text-cream">
          RSVP
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
