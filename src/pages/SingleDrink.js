import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleDrink = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState('false');
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getDrinks = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure13,
            strMeasure14,
            strMeasure15,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
          ];

          const measurements = [
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure13,
            strMeasure14,
            strMeasure15,
          ];
          const newDrink = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
            measurements,
          };
          setDrink(newDrink);
        } else {
          setDrink(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getDrinks();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!drink) {
    return <h2 className='section-title'>Drink isn't in our System</h2>;
  }

  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
    measurements,
  } = drink;

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back Home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name : </span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category : </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info : </span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass : </span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            <br />
            {ingredients.map((item, ingIndex) => {
              const ingredientMeasurement = measurements.find(
                (item, index) => index === ingIndex
              );
              return item ? (
                <>
                  <div className='ingr-section' key={ingIndex}>
                    <p>{item}</p>
                    <p>{ingredientMeasurement}</p>
                  </div>
                </>
              ) : null;
            })}
          </p>
          <h4 className='drink-data'>instructions :</h4>
          <p>{instructions}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleDrink;
