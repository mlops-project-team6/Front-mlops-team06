import React from "react";
import { useNavigate } from "react-router-dom";

const handleLogout = () => {
    sessionStorage.removeItem('sessionID')
    sessionStorage.removeItem('userEmail')
}

const HomePage = () => {

    const userEmail = sessionStorage.getItem('userEmail');
    const sessionID = sessionStorage.getItem('sessionID');

    const navigate = useNavigate();

    
    const handleLogin = () => {
        navigate('/login');
        console.log('login button click')
    }
    const handlePredict = () => {
        navigate('/predict');
        console.log('predict button click')
    }
    const handleHistory = () => {
        navigate('/history');
        console.log('history button click')
    }

    console.log(userEmail)
    return (
        <div className="container mt-5">
            <h1>HomePage</h1>
            <div className="d-flex justify-content-end">
                {userEmail ? (
                    <div className="mb-3">
                        <p>{userEmail}</p>
                        <form>
                            <button className="btn btn-primary" onClick={handleLogout}>
                                Logout
                            </button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <form>
                            <button className="btn btn-success" onClick={handleLogin}>
                                Login
                            </button>
                        </form>
                    </div>
                )}
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">내일 주가 예측하러 가기</h5>
                            <button className="btn btn-info" onClick={handlePredict}>
                                Predict
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">지난 주식 주가 보기</h5>
                            <button className="btn btn-secondary" onClick={handleHistory}>
                                History
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomePage;
export { handleLogout };