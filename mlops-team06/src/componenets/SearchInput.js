import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const SearchInput = ({ GetHistoryData }) => {
    const [q, setQ] = useState('');

    const Submit = async (e) => {
        e.preventDefault();
        const defaultUrl = process.env.REACT_APP_API_DEFAULT_URL;
        const apiUrl = defaultUrl + `/search/history?query=${q}`;
        try {
            const resp = await axios.get(apiUrl);
            GetHistoryData(resp.data)
        } catch (error) {
            console.log(error);
        }

    };
    return (
        <div>
            <Container>
                <Row className="col-md-12">
                    <Form onSubmit={Submit}>
                        <Form.Group as={Row} className="mb-3">
                            <Col className="col-md-4">
                                <input
                                    type="text"
                                    name="searchInput"
                                    className="form-control"
                                    placeholder="종목코드"
                                    value={q}
                                    onChange={(e) => setQ(e.target.value)}
                                />
                            </Col>
                            <Col className="col-md-2">
                                <button type="submit" className="btn search-button">
                                    Search
                                </button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </div>
    )
}
export default SearchInput;