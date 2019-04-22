import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Loader from 'react-loader-spinner'

import Cocktail from '../components/Cocktail';

const GinList = () => {

    const [cocktails, setCocktails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const getCocktails = async() => {
        setIsLoading(true);
        try {
            const data = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin');
            setCocktails(data.data.drinks);
            setIsLoading(false);
        } catch(e) {
            console.log(e);
        }
      }
      getCocktails();
  }, []);
  return (
    <div>
        {isLoading ? (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
      
        <Grid item xs={3}>
        <Loader 
        type="CradleLoader"
        color="#00BFFF"
        height="900"	
        width="900"
     />
        </Grid>   
      
      </Grid>) : (
            <Grid container spacing={24} style={{padding: 24}}>
                {cocktails.map(cocktail => (
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Cocktail name={cocktail.strDrink} image={cocktail.strDrinkThumb} key={cocktail.idDrink}/>
                    </Grid>
                ))}
            </Grid>
        ) 
        }
    </div>
  )
}

export default GinList;
