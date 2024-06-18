import React, { useState, useEffect } from 'react';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, ButtonGroup } from '@themesberg/react-bootstrap';
import { Container } from 'react-bootstrap';
import newScan from '../confgi/common';
import DetailModal from '../components/DetailModal';
const Azure = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [detailObj, setdetailObj] = useState({
        confidence: "",
        id: "",
        module: "",
        parsed: "",
        scan: "",
        scan_id: "",
        scans: "",
        timestamp: "",
        _BaseEvent__host: "",
        _BaseEvent__words: "",
        _data: {
            domains: [],
            "tenant-id": "",
            "tenant-names": []
        },
        _dummy: "",
        _hash: "",
        _id: "",
        _internal: "",
        _module_priority: "",
        _port: "",
        _priority: "",
        _resolved_hosts: "",
        _scope_distance: "",
        _source: "",
        _source_id: "",
        _stats_recorded: "",
        _tags: "",
        _type: ""
    });

    const listDetail = (list) => {
        setdetailObj(list)
        setModalShow(true)
        console.log(list);
    }
    useEffect(() => {
        // console.log(props.Tabledata);
    }, [])

    return (
        <>
            <Row>
                <Col className="d-flex justify-content-end">
                    <Card style={{ 'marginTop': '-40px' }}>
                        <Card.Body>
                            <Card.Title>Total : {props.Tabledata.length}</Card.Title>
                            <Card.Text>
                                New : {newScan(props.Tabledata)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex justify-content-center' ><h1>Azure Tanet</h1></Col>
                <Col></Col>
            </Row>
            <Container style={{
                'display': 'flex',
                'flexWrap': 'wrap',
                'gap': '3px',
                'marginTop': '10px'
            }}>

                {props.Tabledata.map((item, index) => (
                    <Card style={{ width: '18rem' }} key={index}>
                        <Card.Body>
                            <Card.Title>{item.timestamp}</Card.Title>
                            <Card.Text>
                                {item._id}
                            </Card.Text>
                            <Button variant="primary" onClick={() => listDetail(item)}>More detail</Button>
                        </Card.Body>
                    </Card>
                ))}

            </Container>
            {
                props.Tabledata.length == 0 ? (
                    <center>
                        <h3>Token expired</h3>
                    </center>
                ) : ('')
            }
            <DetailModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={detailObj}
                type="azure"
            />
        </>
    )
};

export default Azure;