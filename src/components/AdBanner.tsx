import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AdBannerProps {
  className?: string;
  slot?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({ 
  className = '',
  slot = '1234567890'
}) => {
  const adRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (adRef.current && !initialized.current) {
      const adElement = document.createElement('ins');
      adElement.className = 'adsbygoogle';
      adElement.style.display = 'block';
      adElement.setAttribute('data-ad-client', 'ca-pub-4546141241525552');
      adElement.setAttribute('data-ad-slot', slot);
      adElement.setAttribute('data-ad-format', 'auto');
      adElement.setAttribute('data-full-width-responsive', 'true');

      if (adRef.current.children.length === 0) {
        adRef.current.appendChild(adElement);
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          initialized.current = true;
        } catch (error) {
          console.error('Error loading AdSense:', error);
        }
      }
    }

    return () => {
      initialized.current = false;
    };
  }, [slot]);

  return (
    <motion.div 
      ref={adRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={`ad-banner ${className} min-h-[100px] bg-black/10 backdrop-blur-sm rounded-lg overflow-hidden`}
    />
  );
};

export default AdBanner;