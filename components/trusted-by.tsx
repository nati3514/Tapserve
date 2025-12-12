"use client"

import { MapPin, Phone, MapPinIcon } from "lucide-react"
import { useState, useEffect } from "react"

const restaurants = [
  {
    name: "Ende Bet Bar & Restaurant",
    location: "Bola 24 Under, Kokeb Building, Addis Ababa Ethiopia",
    phone: "0947936131",
    mapUrl: "https://www.google.com/maps?saddr&daddr=Bola+24+Under,+Kokeb+Building,+Addis+Ababa+1000+Ethiopia@9.010938,38.797977",
    images: [
      "/tapserve6.jpg",
      "/tapserve4.png",
      "/ende-bet-1.png",
      "/ende-bet-2.png",
      "/ende-bet-3.png"
    ]
  },
  // {
  //   name: "Abyssinia Traditional Restaurant",
  //   location: "Bole Road, Addis Ababa Ethiopia",
  //   phone: "0911123456",
  //   mapUrl: "https://www.google.com/maps/place/Yod+Abyssinia+Traditional+Food/@9.0181064,38.7897825,17z",
  //   images: [
  //     "/yod-1.jpg",
  //     "/yod-2.jpg",
  //     "/yod-3.jpg"
  //   ]
  // }
]

export default function TrustedBy() {
  const [currentImageIndices, setCurrentImageIndices] = useState(restaurants.map(() => 0));

  useEffect(() => {
    const timers = restaurants.map((_, index) => {
      return setInterval(() => {
        setCurrentImageIndices(prev => {
          const newIndices = [...prev];
          newIndices[index] = (newIndices[index] + 1) % restaurants[index].images.length;
          return newIndices;
        });
      }, 5000);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Restaurants, Cafés, and Bars Across Ethiopia
          </h2>
        </div>

        {/* Featured Restaurants */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {restaurants.map((restaurant, restaurantIndex) => (
            <div key={restaurantIndex} className="bg-card rounded-2xl overflow-hidden shadow-lg animate-slide-up">
              <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <div 
                  className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentImageIndices[restaurantIndex] * 100}%)` }}
                >
                  {restaurant.images.map((img, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 flex items-center justify-center">
                      <img 
                        src={img}
                        alt={`${restaurant.name} - ${idx + 1}`}
                        className="max-w-full max-h-full object-contain"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </div>
                  ))}
                </div>
                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {restaurant.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const newIndices = [...currentImageIndices];
                        newIndices[restaurantIndex] = idx;
                        setCurrentImageIndices(newIndices);
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentImageIndices[restaurantIndex] ? 'bg-primary' : 'bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Restaurant Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{restaurant.name}</h3>
                <div className="flex items-start text-muted-foreground mb-3">
                  <MapPinIcon className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">{restaurant.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <a 
                    href={`tel:${restaurant.phone}`} 
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {restaurant.phone}
                  </a>
                </div>
                <a 
                  href={restaurant.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Map
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        {/* <div className="rounded-2xl overflow-hidden shadow-lg animate-slide-up">
          <div className="relative bg-muted h-96">
            <img
              src="/placeholder.svg?key=x0kqb"
              alt="Map of restaurant locations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-white text-lg font-semibold">
                  Our system powers businesses across the city — find one near you!
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
