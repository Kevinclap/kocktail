import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

const Cocktail = props => {
  return (
    <div>
      { props ? (
          <Card>
              <CardActionArea>
              <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                        image={props.image}
                        title={props.name}/>
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='headline' component='h2'>
                    {props.name}
                </Typography>    
              </CardContent>          
          </Card>

        ): null}
    </div>
  )
}

Cocktail.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string
}

export default Cocktail
