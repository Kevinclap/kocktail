import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Cocktail from '../components/Cocktail';

const Cocktails = () => {

    const [cocktails, setCocktails] = useState([]);

  useEffect(() => {

    async function getCocktails() {
        try {
            const data = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin');
            setCocktails(data.data.drinks);
        } catch(e) {
            console.log(e);
        }
      }
      getCocktails();
  }, []);
  return (
    <div>
        {cocktails ? (
            <Grid container spaicing={24} style={{padding: 24}}>
                {cocktails.map(cocktail => (
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Cocktail name={cocktail.strDrink} image={cocktail.strDrinkThumb} key={cocktail.idDrink}/>
                    </Grid>
                ))}
            </Grid>
        ) : "No drinks for you!"
    }
    </div>
  )
}

export default Cocktails;
