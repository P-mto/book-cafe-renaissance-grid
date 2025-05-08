
import React from 'react';
import { Button } from "@/components/ui/button";

interface SpaceCardProps {
  title: string;
  image: string;
  description: string;
  capacity: string;
  isTall?: boolean;
  isWide?: boolean;
}

const SpaceCard: React.FC<SpaceCardProps> = ({ 
  title, 
  image, 
  description, 
  capacity,
  isTall = false,
  isWide = false 
}) => {
  const cardClasses = `cafe-card ${isTall ? 'card-tall' : ''} ${isWide ? 'card-wide' : ''}`;

  return (
    <div className={cardClasses}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <div className="text-cream text-sm">
            Capacity: {capacity}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="burgundy-title text-lg md:text-xl mb-2">{title}</h3>
        <p className="text-brown text-sm mb-4">{description}</p>
        
        <Button className="w-full bg-sage hover:bg-sage/90 text-cream">
          Book Space
        </Button>
      </div>
    </div>
  );
};

export default SpaceCard;
