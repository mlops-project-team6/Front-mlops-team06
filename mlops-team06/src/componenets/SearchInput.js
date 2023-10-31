import axios from "axios";
import React, { useState } from "react";
import store from "../store";

const SearchInput = () => {
    const [q, setQ] = useState('');

    const Submit = async (e) => {
        const state = {
            email: '',
            session: '',
        }
        e.preventDefault();
        const apiUrl = `http://localhost:8000/search/history?query=${q}`;
        try {
            const resp = await axios.get(apiUrl);
            console.log('resp :', resp.data);
            store.dispatch({ type: 'LOGIN', email: resp.data.email })
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className="container mt-5">
            <form onSubmit={Submit}>
                <div className="d-flex justify-content-end">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            name="searchInput"
                            className="form-control search-input"
                            placeholder="종목코드"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                        <button type="submit" className="btn search-button">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}
export default SearchInput;