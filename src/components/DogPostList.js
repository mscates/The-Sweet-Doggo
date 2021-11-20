import React from 'react';
import DogPost from './DogPost'
import PropTypes from 'prop-types';

const DogPostList = ({ dogPosts }) => {
    
    return ( 
    <>
    {console.log(dogPosts)}
        {dogPosts.map(post => (
            <DogPost post={post} />
        ))}
    </> 
    );
}
 
export default DogPostList;

DogPostList.propTypes = {
    dogPosts: PropTypes.array
}