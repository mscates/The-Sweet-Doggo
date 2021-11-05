import React from 'react';
import DogPost from './DogPost'

const DogPostList = ({ dogPosts }) => {
    
    return ( 
    <>
        {dogPosts.map(post => (
            <DogPost post={post} />
        ))}
    </> 
    );
}
 
export default DogPostList;