
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import CafeCard from '../components/CafeCard';
import EventCard from '../components/EventCard';
import SpaceCard from '../components/SpaceCard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-burgundy">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1800')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center">
          <h1 className="text-cream font-serif text-4xl md:text-5xl lg:text-6xl mb-4">Renaissance Readers</h1>
          <p className="text-cream text-lg md:text-xl max-w-2xl mb-8">
            Where classic literature meets artisanal coffee in a Renaissance-inspired atmosphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#books" className="bg-gold hover:bg-gold/90 text-brown font-medium py-3 px-6 rounded-md transition-colors">
              Explore Our Collection
            </a>
            <a href="#cafe" className="bg-cream hover:bg-cream/90 text-burgundy font-medium py-3 px-6 rounded-md transition-colors">
              View Café Menu
            </a>
          </div>
        </div>
      </section>
      
      {/* Books Section */}
      <section id="books" className="py-16 container mx-auto px-4">
        <h2 className="text-burgundy font-serif text-3xl md:text-4xl mb-2 text-center">Featured Books</h2>
        <p className="text-center text-brown/80 mb-8 max-w-2xl mx-auto">Discover our carefully curated collection of classics and contemporary works</p>
        
        {/* Grid Layout for Books */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <BookCard
            title="The Divine Comedy"
            author="Dante Alighieri"
            cover="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=500"
            description="Dante's masterpiece of Italian literature, an epic poem that takes the reader on a journey through Hell, Purgatory, and Paradise."
          />
          
          <BookCard
            title="Pride and Prejudice"
            author="Jane Austen"
            cover="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=500"
            description="A romantic novel of manners that follows the character development of Elizabeth Bennet, who learns about the repercussions of hasty judgments."
          />
          
          <BookCard
            title="One Hundred Years of Solitude"
            author="Gabriel García Márquez"
            cover="https://images.unsplash.com/photo-1518744386442-2d48ac47a7eb?q=80&w=500"
            description="A landmark novel in the magical realism style that tells the multi-generational story of the Buendía family."
            isTall={true}
          />
          
          <BookCard
            title="War and Peace"
            author="Leo Tolstoy"
            cover="https://images.unsplash.com/photo-1603923054044-58a5f3a6dbd2?q=80&w=500"
            description="A novel that chronicles the French invasion of Russia and the impact of the Napoleonic era on Tsarist society through the stories of five Russian aristocratic families."
            isWide={true}
          />
          
          <BookCard
            title="The Great Gatsby"
            author="F. Scott Fitzgerald"
            cover="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=500"
            description="Set in the Jazz Age, this novel explores themes of decadence, idealism, resistance to change, and excess."
          />
        </div>
      </section>
      
      {/* Cafe Section */}
      <section id="cafe" className="py-16 bg-sage/10">
        <div className="container mx-auto px-4">
          <h2 className="text-burgundy font-serif text-3xl md:text-4xl mb-2 text-center">Café Menu</h2>
          <p className="text-center text-brown/80 mb-8 max-w-2xl mx-auto">Savor artisanal coffee and pastries inspired by Renaissance cuisine</p>
          
          {/* Grid Layout for Cafe Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <CafeCard
              title="Medici Mocha"
              image="https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=500"
              description="Rich espresso blended with Italian chocolate and a hint of orange zest, topped with whipped cream."
              price="$4.95"
            />
            
            <CafeCard
              title="Renaissance Roast"
              image="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=500"
              description="Our signature dark roast coffee with notes of caramel, hazelnut, and spices."
              price="$3.75"
              isTall={true}
            />
            
            <CafeCard
              title="Botticelli Biscotti"
              image="https://images.unsplash.com/photo-1621898336230-290722870e92?q=80&w=500"
              description="Traditional Italian biscotti made with almonds and dipped in dark chocolate."
              price="$2.50"
            />
            
            <CafeCard
              title="Da Vinci Deluxe Tea"
              image="https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?q=80&w=500"
              description="A blend of black tea, aromatic herbs, and spices inspired by Leonardo's botanical studies."
              price="$3.95"
            />
            
            <CafeCard
              title="Florentine Focaccia"
              image="https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?q=80&w=500"
              description="Freshly baked focaccia with rosemary, olive oil, and sea salt, served with olive tapenade."
              price="$6.50"
              isWide={true}
            />
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section id="events" className="py-16 container mx-auto px-4">
        <h2 className="text-burgundy font-serif text-3xl md:text-4xl mb-2 text-center">Upcoming Events</h2>
        <p className="text-center text-brown/80 mb-8 max-w-2xl mx-auto">Join our literary discussions, author signings, and cultural gatherings</p>
        
        {/* Grid Layout for Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <EventCard
            title="Author Talk: Modern Renaissance Literature"
            date="May 15"
            time="6:00 PM"
            image="https://images.unsplash.com/photo-1517326451550-8012c83325fb?q=80&w=500"
            description="Join acclaimed author Maria Reynolds as she discusses the influence of Renaissance literature on modern writing."
            isWide={true}
          />
          
          <EventCard
            title="Poetry Reading Night"
            date="May 20"
            time="7:30 PM"
            image="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=500"
            description="An evening of classic and contemporary poetry readings by local artists, accompanied by live acoustic music."
          />
          
          <EventCard
            title="Renaissance Art & Literature Workshop"
            date="May 25"
            time="2:00 PM"
            image="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=500"
            description="A hands-on workshop exploring the connections between Renaissance art and the literature of the period."
            isTall={true}
          />
          
          <EventCard
            title="Book Club: Classic Epics"
            date="May 28"
            time="5:00 PM"
            image="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=500"
            description="This month we're discussing Homer's 'The Odyssey' and its influence on later classical literature."
          />
        </div>
      </section>
      
      {/* Spaces Section */}
      <section id="spaces" className="py-16 bg-gold/10">
        <div className="container mx-auto px-4">
          <h2 className="text-burgundy font-serif text-3xl md:text-4xl mb-2 text-center">Reading Spaces</h2>
          <p className="text-center text-brown/80 mb-8 max-w-2xl mx-auto">Reserve our thoughtfully designed spaces for reading, studying, or small gatherings</p>
          
          {/* Grid Layout for Spaces */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <SpaceCard
              title="The Scholars' Corner"
              image="https://images.unsplash.com/photo-1600967373071-a5e6da7f54bd?q=80&w=500"
              description="A quiet, secluded nook with comfortable armchairs, perfect for focused reading or study."
              capacity="Up to 4 people"
            />
            
            <SpaceCard
              title="The Medici Room"
              image="https://images.unsplash.com/photo-1574492909706-09f2b2f0d458?q=80&w=500"
              description="Our premium private room featuring Renaissance-inspired décor, ideal for book clubs or small meetings."
              capacity="Up to 8 people"
              isWide={true}
            />
            
            <SpaceCard
              title="The Garden Terrace"
              image="https://images.unsplash.com/photo-1572452571879-4d13217def7b?q=80&w=500"
              description="An open-air space surrounded by greenery and natural light, perfect for relaxed reading in pleasant weather."
              capacity="Up to 20 people"
              isTall={true}
            />
            
            <SpaceCard
              title="The Fireside Lounge"
              image="https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=500"
              description="A cozy area with comfortable seating around a fireplace, creating a warm atmosphere for leisurely reading."
              capacity="Up to 12 people"
            />
          </div>
        </div>
      </section>
      
      {/* Membership Section */}
      <section className="py-16 bg-burgundy text-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Join Our Membership Program</h2>
            <p className="mb-8 text-cream/80">Become a member to enjoy special benefits, discounts, and exclusive events</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-cream/10 p-6 rounded-lg backdrop-blur">
                <h3 className="text-gold font-serif text-xl mb-4">Reader</h3>
                <p className="text-2xl font-semibold mb-4">$5<span className="text-sm font-normal">/month</span></p>
                <ul className="text-left space-y-2 mb-6">
                  <li>10% off all café purchases</li>
                  <li>Weekly newsletter</li>
                  <li>Early access to new books</li>
                </ul>
                <button className="w-full bg-cream text-burgundy py-2 rounded-md hover:bg-cream/90 transition-colors">
                  Join Now
                </button>
              </div>
              
              <div className="bg-gold/20 p-6 rounded-lg backdrop-blur relative">
                <div className="absolute -top-3 right-0 left-0 mx-auto w-fit px-4 py-1 bg-gold text-brown text-sm font-medium rounded-full">
                  Popular
                </div>
                <h3 className="text-gold font-serif text-xl mb-4">Scholar</h3>
                <p className="text-2xl font-semibold mb-4">$10<span className="text-sm font-normal">/month</span></p>
                <ul className="text-left space-y-2 mb-6">
                  <li>15% off all café purchases</li>
                  <li>Free space reservations</li>
                  <li>Monthly book included</li>
                  <li>Access to member events</li>
                </ul>
                <button className="w-full bg-gold text-brown py-2 rounded-md hover:bg-gold/90 transition-colors">
                  Join Now
                </button>
              </div>
              
              <div className="bg-cream/10 p-6 rounded-lg backdrop-blur">
                <h3 className="text-gold font-serif text-xl mb-4">Patron</h3>
                <p className="text-2xl font-semibold mb-4">$25<span className="text-sm font-normal">/month</span></p>
                <ul className="text-left space-y-2 mb-6">
                  <li>20% off all purchases</li>
                  <li>Priority space reservations</li>
                  <li>Two books monthly</li>
                  <li>Exclusive author meetings</li>
                  <li>Annual Renaissance dinner</li>
                </ul>
                <button className="w-full bg-cream text-burgundy py-2 rounded-md hover:bg-cream/90 transition-colors">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
