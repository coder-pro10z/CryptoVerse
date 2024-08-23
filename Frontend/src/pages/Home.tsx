import React from 'react';

const appname='CryptoVerse';
const HomePage = () => {
  const username='';
  return (<>
      <div className="flex flex-col items-center justify-center h-full bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">Welcome {username} to {appname}</h1>
      <p className="text-lg">This is the Home Page. Navigate using the menu above.</p>
    </div>
  </>
  );
};

export default HomePage;
export {appname};