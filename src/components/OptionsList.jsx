import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class OptionsList extends Component {
  constructor() {
    super()
    this.state = {
      cards: [
        {
          icon: "books",
          label: "Educação",
          url: "/education"
        },
        {
          icon: "pawns",
          label: "Animais",
          url: "/animals"
        },
        {
          icon: "waves",
          label: "Oceanos",
          url: "/oceans"
        },
        {
          icon: "woman",
          label: "Mulheres",
          url: "/woman"
        },
        {
          icon: "nature",
          label: "Natureza",
          url: "/nature"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <div>
          <Grid container spacing={24} style={{ padding: 24 }}>
            {this.state.cards.map(card => (
              <Grid item>
                <Card>
                <CardContent>
                  <Typography color="textSecondary">
                  {card.label}
                  </Typography>
                </CardContent>
                </Card>
                
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    )
  }
}
export default OptionsList;