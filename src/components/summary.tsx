import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Result } from 'antd';

const Summary: React.FC = () => {
    const query    = new URLSearchParams(useLocation().search);
    const name     = query.get('name');
    const rating   = query.get('rating');
    const follower = query.get('follower');

    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/home');
    };

    return (
        <div className='summary'>
            <Result
                status="success"
                title="Successfully Booked"
                subTitle={`Influencer name ${name} with rating ${rating} and followers ${follower}. Your appointment has been booked successfully.`}
                extra={[
                    <Button type="primary" key="home" onClick={handleBackHome}>
                        Back to Home
                    </Button>,
                ]}
            />
        </div>
    )
}

export default Summary