
import React from 'react';
import { Button } from "@/components/ui/button";

interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  description: string;
  isTall?: boolean;
  isWide?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ 
  title, 
  author, 
  cover, 
  description,
  isTall = false,
  isWide = false 
}) => {
  const cardClasses = `cafe-card flex ${isWide ? 'flex-row' : 'flex-col'} ${isTall ? 'card-tall' : ''}`;

  return (
    <div className={cardClasses}>
      <div className={`${isWide ? 'w-1/3' : 'w-full'} overflow-hidden ${isWide ? 'h-full' : 'h-48'}`}>
        <img 
          src={cover} 
          alt={`${title} cover`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className={`${isWide ? 'w-2/3' : 'w-full'} p-4 flex flex-col justify-between`}>
        <div>
          <h3 className="burgundy-title text-lg md:text-xl mb-1">{title}</h3>
          <p className="gold-accent text-sm mb-3">by {author}</p>
          <p className="text-brown text-sm line-clamp-3">{description}</p>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <Button variant="outline" className="text-burgundy border-burgundy hover:bg-burgundy hover:text-cream">
            Details
          </Button>
          <Button className="bg-burgundy hover:bg-burgundy/90">
            Reserve
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
