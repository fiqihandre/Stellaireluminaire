'use client'
import { useState, useEffect } from 'react';

export default function Offer() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // Auto-hide after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-gradient-to-r from-offerGradientFrom to-offerGradientTo text-offerText rounded-full shadow-xl p-4 flex items-center space-x-3 animate-bounce">
        <div className="text-sm font-medium">
          <span className="font-bold">🔥 25% OFF!</span> Limited time
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-offerText hover:text-offerTextHover text-xs"
          aria-label="Close notification"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
