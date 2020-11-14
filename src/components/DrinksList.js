import React from 'react';
import Drink from './Drink';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const DrinksList = () => {
  const { drinks, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (drinks.length < 1) {
    return <h2 className='section-title'>No Drinks Match</h2>;
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Drinks</h2>

      <div className='cocktails-center'>
        {drinks.map((drink) => {
          return <Drink key={drink.id} {...drink} />;
        })}
      </div>
    </section>
  );
};

export default DrinksList;
