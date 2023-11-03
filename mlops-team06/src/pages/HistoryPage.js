import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchInput from '../componenets/SearchInput';
import StockTable from '../componenets/stock_table';

const HistoryPage = () => {
    const navigate = useNavigate();
    const [historyData, setHistoryData] = useState(null)

    useEffect(() => {
        const userEmail = sessionStorage.getItem('userEmail');
        if (!userEmail) {
            navigate('/login');
        }
    }, []);

    const GetHistoryData = (data) => {
        setHistoryData(data)
    }
    return (
        <div>
            <SearchInput GetHistoryData={GetHistoryData} ></SearchInput>
            {historyData != null && (<StockTable data={historyData} />)}
        </div>
    );
};

export default HistoryPage;