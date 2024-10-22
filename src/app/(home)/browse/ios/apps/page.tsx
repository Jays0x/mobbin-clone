'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Sample apps data (You can fetch this from an API or database)
const appsData = [
  { id: '1', 
    name: 'App One', 
    category: 'Shopping',
    image: '/airbnb-logo.png',
    icon: '/white-logo.png',

  },
  { id: '2', 
    name: 'App Two', 
    category: 'Finance',
    image: '/auth-image.png',
    icon: '/white-logo.png', 
  },
  { id: '3', 
    name: 'App Three', 
    category: 'E-commerce',
    image: '/auth-image.png',
    icon: '/white-logo.png',
  },
  { id: '4', 
    name: 'App Four', 
    category: 'Business',
    image: '/auth-image.png',
    icon: '/white-logo.png',
  },
  { id: '5', 
    name: 'App Five', 
    category: 'Food & Drinks',
    image: '/auth-image.png',
    icon: '/white-logo.png',
  },
];

// Filter categories
const categories = ['All', 'Shopping', 'Finance', 'E-commerce', 'Business', 'Food & Drinks'];

const FilteredApps = () => {

  const [activeCategory, setActiveCategory] = useState('All'); // Default to show all categories
  const router = useRouter();

  // Filter the apps based on the active category
  const filteredApps = activeCategory === 'All'
    ? appsData
    : appsData.filter(app => app.category === activeCategory);

  return (
    <div className='container mt-20 '>
      {/* Filter Categories */}
      <div className="flex gap-4 mb-4 mt-10">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-8 py-2 mb-5 ${activeCategory === category ? 'bg-[var(--foreground)] text-[var(--button)] rounded-full' : 'bg-[var(--background)] border border-[var(--border)] text-white/70 rounded-full hover:bg-[var(--hover)]'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Filtered Apps */}
      <div className='grid grid-cols-4 gap-3 mb-10'>
        {filteredApps.length > 0 ? (
          filteredApps.map(app => (
            <div key={app.id} className="mb-2 flex flex-row">
              <Link
                href={`/apps/${app.id}`} // Dynamic route for each app
                className="text-[var(--foreground)]"
              >
                <div className='w-[290px] h-[500px] bg-[var(--secondary)] rounded-xl p-8'>
                  <Image src={app.image} alt={app.name} width={100} height={100} className='w-[100px] h-[300px]'/>
                </div>
              </Link>

            </div>
          ))
        ) : (
          <p>No apps found for the selected category.</p>
        )}
      </div>
    </div>
  );
};

export default FilteredApps;
