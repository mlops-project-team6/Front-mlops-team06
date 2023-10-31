import axios from 'axios';
import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function StockPredictionPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = async(e) => {
    e.preventDefault();
    const apiUrl = `http://localhost:8000/search/predict?query=${searchQuery}`;
    try {
      const resp = await axios.get(apiUrl);
      console.log('resp :', resp.data)
      setSearchResult(`주식 "${searchQuery}"의 예측 가격은 ${resp.data}입니다.`);
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
