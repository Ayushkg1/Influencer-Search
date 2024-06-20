import React, { useEffect, useState } from 'react'
import { fetchData } from '../services/api.service';
import { Avatar, Button, List, Spin, Result } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
}

interface DataType {
  gender: string;
  name: string;
  rating: number;
  cost: number;
  follower: number
}



const ListView: React.FC = () => {

  const navigate = useNavigate();
  const [ loading, setLoading ] = useState(true);
  const [ influencers, setInfluencers ] = useState<DataType[]>([]);
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {

    const gender = query.get('gender');
    const min_rating = query.get('rating') || 0;
    const min_follower = query.get('follower') || 0;
    const min_cost = query.get('min_cost') || 0;
    const max_cost = query.get('max_cost') || 0;

    const fetchInfluencers = async () => {
      try {
        const result = await fetchData('https://mocki.io/v1/bb00acd6-b18c-4382-a963-ff119c1390a7');

        if (result && result.Influencers) {

          let filtered_influencers = result.Influencers.filter((influencer: any) => {

            return influencer.gender === gender && influencer.rating >= min_rating &&
              influencer.follower >= min_follower && influencer.cost >= min_cost &&
              influencer.cost <= max_cost;
          })
          setInfluencers(filtered_influencers);
          setLoading(false);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchInfluencers();
  }, []);

  if (loading) {
    return (
      <div className='container'>
        <Spin tip="Loading"><div style={contentStyle} /></Spin>
      </div>
    );
  }
  else if (influencers.length === 0) {
    return (
      <div className='container'>
        <Result
          status="403"
          title="No influencers found"
          subTitle="Oh, your entered criteria do match with influencers"
          extra={<Button type="primary" onClick={()=>{navigate('/home')}}>Back Home</Button>}
        />
      </div>
    );
  }
  else return (

    <div className='list-view'>
      <List
        itemLayout="horizontal"
        dataSource={influencers}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={<div className='list-head'>{item.name} <Button type="primary" onClick={() => navigate('/details')}>Book Appointment</Button></div>}
              description={`Follwers: ${item.follower}, Cost: ${item.cost}, Gender: ${item.gender}, Rating: ${item.rating}`}
            />
          </List.Item>
        )}
      />

      <Button block onClick={() => navigate('/home')}>Go back to Influencer Search</Button>

    </div>
  )
}

export default ListView