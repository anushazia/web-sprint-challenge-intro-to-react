// Write your Character component here
import React from 'react'
import { Card, CardTitle, Container, Row, Col } from 'reactstrap'


function Character (props) {
   console.log(props.characterArray, 'This is showing props')
    
    return (
        <div>  
      {props.characterArray.map((character) => {
          return(
              <Card key={character.created}>
                <CardTitle>{character.name}</CardTitle>
              </Card>


          )

      })}
        </div>
    )
}

export default Character