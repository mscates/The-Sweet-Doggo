import React from 'react';
import Layout from '../components/shared/Layout';
import DogPostList from '../components/DogPostList';

const Feed = ({ dogPosts }) => {
    return ( 
    <>
    <Layout>
        <DogPostList dogPosts={dogPosts} />
    </Layout>
    </> 
    );
}
 
export default Feed;