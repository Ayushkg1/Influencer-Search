import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import {fetchData} from '../services/api.service';
import { useNavigate } from 'react-router-dom';


const {Meta} = Card;

interface DataType {
  name?: string;
  contact?: {
    email?: string,
    phone?: string
  },
  follower?: number,
  rating?: number,
  cost?: number,
  gender?: number,
  availability?: boolean,
  images?: string[]
}

const Details: React.FC = () => {

  const navigate = useNavigate();

  const [influencerDetails , setInfluencerDetails] = useState<DataType>({});

  const confirmBooking = () => {
    const data = { name: influencerDetails.name, rating: influencerDetails.rating, follower: influencerDetails.follower };
    const queryParams = new URLSearchParams(data as any).toString();
    navigate(`/summary?${queryParams}`);
  };

  useEffect(() => {
    const fetchInfluencerDetails = async () => {
      try {
        const result = await fetchData('https://mocki.io/v1/288a0a30-ce52-4d74-b01d-fd46f49ef988');

        if( result ) {
          setInfluencerDetails(result);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchInfluencerDetails();
  }, []);

  return (
    <div className='details-view'>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={ influencerDetails?.images && influencerDetails.images[0] } />}
      >
        <Meta title={influencerDetails?.name} description={`Gender: ${influencerDetails?.gender}`}/>
        <p>{`Rating: ${influencerDetails?.rating}`}</p>
      </Card>

      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={ influencerDetails?.images && influencerDetails.images[1] } />}
      >
        <Meta title={`${influencerDetails.follower} followers`} description={`Availability: ${influencerDetails.availability ? 'Yes' : 'No'}`} />
        <p>{`Cost: ${influencerDetails.cost}`}</p>
      </Card>

      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={influencerDetails?.images && influencerDetails.images[2]} />}
      >
        <Meta title="Contact Details" description={`Email: ${influencerDetails.contact?.email}`}/>
        <p>{`Phone: ${influencerDetails.contact?.phone}`}</p>
      </Card>

      <Button block onClick={() => confirmBooking()}>Proceed to confirm book appointment</Button>

    </div>
  );
};

export default Details;