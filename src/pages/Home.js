import React from 'react';
import Search from '../components/Search';

// import components
import HouseList from '../components/HouseList';

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
        <Search />
      </section>
      <HouseList />
    </div>
  );
};

export default Home;
