import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Loader from 'react-loader-spinner'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

import Cocktail from '../components/Cocktail';
import ginImage from '../assets/gin.jpg';
import rumImage from '../assets/rum.jpg';
import tequilaImage from '../assets/tequila.jpg';
import vodkaImage from '../assets/vodka.jpg';
import bourbonImage from '../assets/buffalo.jpg';

const Home = () => {

    const [cocktails, setCocktails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const getCocktails = async() => {
        setIsLoading(true);
        let cocktailsArr = [];
        for(let i = 0; i<4; i++) {
            try {
                const data = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
                cocktailsArr.push(data.data.drinks[0]);
            } catch(e) {
                console.log(e);
            }
        }
        setCocktails(cocktailsArr);
        setIsLoading(false);
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
                        <Cocktail key={cocktail.idDrink} name={cocktail.strDrink} image={cocktail.strDrinkThumb}/>
                    </Grid>
                ))}
               <Link component={RouterLink} to='/gin'>
               <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Cocktail name={'Gin Drinks'} image={ginImage}/>
                </Grid>
               </Link>
                
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Cocktail name={'Rum Drinks'} image={rumImage}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Cocktail name={'Tequila Drinks'} image={tequilaImage}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Cocktail name={'Vodka Drinks'} image={vodkaImage}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Cocktail name={'Bourbon Drinks'} image={bourbonImage}/>
                </Grid>
            </Grid>
            
        ) 
        }
    </div>
  )
}

export default Home;
