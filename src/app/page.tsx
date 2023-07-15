import { Button } from '@mui';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
    return (
        <>
            <p className="text-red-700 mb-10">hello world</p>
            <Button variant="contained">Hello World</Button>
        </>
    );
};

export default IndexPage;
