
import React from 'react';
import { Card} from 'react-bootstrap';

const Services = (props) => {
    const{ img, name, Description,Amount, catagories} = props.serviceCard;
    return (
    <div>
           <div className="container">
         <Card>
        <Card.Img variant="top" className="w-100 h-50" src={img}/>
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text>
            {Description}
          </Card.Text>
          <Card.Text>
            Tuition Fees:{Amount}
          </Card.Text>
          <Card.Text className="catagories">
              {catagories} <button className="service-btn">Go for degree</button>
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
    </div>
    );
};

export default Services;