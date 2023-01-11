import React from "react";
import Card from 'react-bootstrap/Card';
//import 'CardStyle.css'

const CardComp = ({ title, desc }) => {
    return (
        <div class="d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardComp;