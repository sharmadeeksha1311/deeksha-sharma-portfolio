import { useState, useEffect } from 'react';
import Snowfall from 'react-snowfall';

export default function ScrollSnowfall() {
  const [showSnow, setShowSnow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !showSnow) {
        setShowSnow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showSnow]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-700">
      {showSnow && (
        <Snowfall
          color="white"
          snowflakeCount={200}
          speed={[0.5, 1.5]}
          wind={[-0.5, 1.0]}
          radius={[0.5, 3.0]}
        />
      )}
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
         
        </div>

        <div className="space-y-8 max-w-2xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((section) => (
            <div
              key={section}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white"
            >
              <h2 className="text-2xl font-semibold mb-4">
                Section {section}
              </h2>
              <p className="text-gray-200 leading-relaxed">
               
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 text-white">
          <p className="text-lg">
            {showSnow ? '❄️ It\'s snowing! ❄️' : '👇 Scroll down to see the magic 👇'}
          </p>
        </div>
      </div>
    </div>
  );
}