import React, { useState, useEffect } from 'react';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, ButtonGroup } from '@themesberg/react-bootstrap';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'

import common from '../config/common';
import DetailModal from '../components/DetailModal';

const Scan = (props) => {
    const OrgTabledata = JSON.parse(useSelector((state) => state.counter.value)).Org
    const ScanTabledata = JSON.parse(useSelector((state) => state.counter.value)).Scan
    const [modalShow, setModalShow] = useState(false);
    const [detailObj, setdetailObj] = useState({
        _BaseEvent__host:"",
        scans:"",
        _resolved_hosts:"",
        parsed:"",
        _scope_distance:"",
        _dummy:"",
        _BaseEvent__words:"",
        _priority:"",
        _internal:"",
        _id:"",
        confidence:"",
        _port:"",
        id:"",
        module:"",
        _type:"",
        _stats_recorded:"",
        timestamp:"",
        _source_id:"",
        _hash:"",
        _tags:"",
        _data:"",
        _source:"",
        _module_priority:"",
        scan_id:"",
        scan:""
    });

    const listDetail = (list) => {
        setdetailObj(list)
        setModalShow(true)
        console.log(list);
    }

    return (
        <>
            <Container style={{
                'display': 'flex',
                'flexWrap': 'wrap',
                'gap': '3px',
                'marginTop': '10px'
            }}>

                {ScanTabledata.map((item, index) => (
                    <Card style={{ width: '18rem' }} key={index}>
                        <Card.Body>
                            <Card.Title>{item._data}</Card.Title>
                            <Card.Text>
                                {item._id}
                            </Card.Text>
                            <Button variant="primary" onClick={() => listDetail(item)}>More detail</Button>
                        </Card.Body>
                    </Card>
                ))}

            </Container>
            {
                ScanTabledata.length == 0 ? (
                    <center>
                        <h3>Token expired</h3>
                    </center>
                ) : ('')
            }
            <DetailModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={detailObj}
                type="Scan"
            />
        </>
    )
};

export default Scan;