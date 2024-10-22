'use client'; // Ensure it's client-side only

import { usePathname } from 'next/navigation';

const AppDetail = () => {
  const pathname = usePathname(); // Get the current pathname

  // Extract the ID from the pathname (assuming the structure is /apps/[id])
  const id = pathname.split('/').pop(); // Get the last segment of the pathname

  return (
    <div>
      <h1>App Details for ID: {id}</h1>
      {/* You can display more details about the app here based on the id */}
    </div>
  );
};

export default AppDetail;
