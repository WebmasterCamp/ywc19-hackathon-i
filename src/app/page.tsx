import { Map } from '@/components/Home/Map';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
    return (
        <>
            <p className="text-red-700 mb-10">hello world</p>
            <Map />
        </>
    );
};

export default IndexPage;
