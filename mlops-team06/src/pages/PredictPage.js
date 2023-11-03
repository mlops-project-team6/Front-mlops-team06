import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function StockPredictionPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = sessionStorage.getItem('userEmail');
    if (!userEmail) {
      navigate('/login');
    }
  }, []);

  const handleSearch = async(e) => {
    e.preventDefault();
    const defaultUrl = process.env.REACT_APP_API_DEFAULT_URL;

    const apiUrl = defaultUrl+`/search/predict?query=${searchQuery}`;
    console.log(apiUrl)
    try {
      const resp = await axios.get(apiUrl);
      console.log('resp :', resp.data)
      setSearchResult(resp.data.message);
      console.log(searchResult)
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className="container mt-5">
      <h1>내일의 주식을 예측해보세요!</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="주식을 검색하세요..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSearch}
        >
          검색
        </button>
      </div>
      {searchResult && (
        <div className="alert alert-info rounded" role="alert">
          {searchResult}
        </div>
      )}
    </div>
  );
}

export default StockPredictionPage;