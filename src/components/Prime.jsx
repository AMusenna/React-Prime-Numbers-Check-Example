import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';


function Prime(props) {
    const sayi = Number(props.val)

  

    function check() {
        if (sayi < 2) {

            props.setSonuc("Asal sayı değildir.")

            return
        }

        for (let i = 2; i < sayi; i++) {
            if (sayi % i === 0) {

                props.setSonuc("Asal sayı değildir.")

                return
            }
        }

        props.setSonuc("Asaldır.")


    }

    return (
        <>
            <Container>
                <Row>


                    <Col>
                        <InputGroup className="mb-3 mt-4">
                            <Form.Control

                                value={props.val}
                                onChange={(e) => props.setVal(e.target.value)}

                            />
                            <Button onClick={check} variant="outline-secondary" id="button-addon2">
                                Button
                            </Button>


                        </InputGroup>
                    </Col>
                 

                </Row>
            </Container>









        </>
    );
}

export default Prime;