import React from "react";
import Table from 'react-bootstrap/Table';

const StockTable = ({ data }) => {
    return (
        <Table striped bordered>
            <thead className="table-dark">
                <tr>
                    <th>날짜</th>
                    <th>종목</th>
                    <th>시작 가격</th>
                    <th>종료 가격</th>
                    <th>최저 가격</th>
                    <th>최고 가격</th>
                    <th>거래량</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                        <td>{item[2]}</td>
                        <td>{item[3]}</td>
                        <td>{item[4]}</td>
                        <td>{item[5]}</td>
                        <td>{item[6]}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default StockTable;