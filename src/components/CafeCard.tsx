
import React from 'react';
import { Button } from "@/components/ui/button";

interface CafeCardProps {
  title: string;
  image: string;
  description: string;
  price?: string;
  isTall?: boolean;
  isWide?: boolean;
}

const CafeCard: React.FC<CafeCardProps> = ({ 
  title, 
  image, 
  description, 
  price,
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
        {price && (
          <div className="absolute top-2 right-2 bg-burgundy text-cream px-3 py-1 rounded-full text-sm font-medium">
            {price}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="burgundy-title text-lg md:text-xl mb-2">{title}</h3>
        <p className="text-brown text-sm mb-4">{description}</p>
        
        <Button className="w-full bg-gold text-brown hover:bg-gold/90">
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default CafeCard;
