import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DetailsCard = ({cardtitle,cardDescriptions,test }) => {

  return (
    <div>

        <Card className=''>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtpkpW1PIgSqMA7yga62JyNtf3dVQicYE_g&s" />
              <Card.Body>
                <Card.Title>{ cardtitle}</Card.Title>
                <Card.Text>

                    { cardDescriptions}
              
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                <h3>{test}</h3>
              </Card.Body>
            </Card> 
    </div>
  )
}

export default DetailsCard
