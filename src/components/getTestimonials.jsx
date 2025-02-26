import { Calendar, MessageSquare, User } from 'lucide-react';
import { useEffect, useState } from 'react';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQMtTuoOoyofIm1xUeNA9T8_oUPJaFhhxRCYhE6VwPNrrVraEjCvXWXgQ7-adH2juPFi7AOe3cnFdKd/pub?gid=0&single=true&output=csv')
      .then(response => response.text())
      .then(csvData => {
        const rows = csvData.split('\n');
        const result = rows.slice(1).map(row => {
          const [name, dateAndTime, comment] = row.split(',');
          return { name, dateAndTime, comment };
        });
        setTestimonials(result);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching CSV data:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 min-h-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gray-800 rounded-lg p-6 ring-1 ring-gray-700/50 backdrop-blur-xl">
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                    <div className="h-full w-full rounded-full bg-gray-800 flex items-center justify-center">
                      <User className="h-6 w-6 text-purple-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-400 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {testimonial.dateAndTime}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <MessageSquare className="h-8 w-8 text-gray-700 absolute -top-4 -left-2" />
                  <p className="text-gray-300 pl-4 leading-relaxed text-lg">
                    "{testimonial.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      
                    </div>
                    <span className="text-sm text-purple-400 font-medium">
                      Review #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {testimonials.length === 0 && (
          <div className="text-center text-gray-400 mt-8">
            No testimonials available at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsSection;