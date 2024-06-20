import { Button, Form, InputNumber, Select } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const Home: React.FC = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleSubmit = (values:any) => {
        const queryParams = new URLSearchParams(values as any).toString();
        navigate(`/list?${queryParams}`);
      };

    return (
        <div className='container'>

            <h1 style={{ marginBottom: 50 }}>Influencer Search</h1>

            <Form form={form} onFinish={handleSubmit} variant="filled">
   
                <Form.Item name="gender" label="Gender" rules={[ { required: true } ]}>
                    <Select style={{ width: 205 }} allowClear>
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                        <Option value="Other">Other</Option>
                    </Select>
                </Form.Item>

                
                <Form.Item name="rating" label="Minimum rating" rules={[ { required: true } ]}>
                    <InputNumber style={{ width: 150 }} min={1} max={5} />
                </Form.Item>

                <Form.Item name="follower" label="Minimum followers" rules={[ { required: true } ]}>
                    <InputNumber style={{ width: 130 }} min={1} max={1000000} />
                </Form.Item>

                <Form.Item name="min_cost" label="Minimum cost" rules={[ { required: true } ]}>
                    <InputNumber style={{ width: 160 }} min={1} max={1000000} />
                </Form.Item>

                <Form.Item name="max_cost" label="Maximum cost" rules={[ { required: true } ]}>
                    <InputNumber style={{ width: 160 }} min={1} max={10000000000000} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                    <Button style={{ width: 150 }} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default Home;
