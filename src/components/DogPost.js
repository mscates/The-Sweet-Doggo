import React from 'react';
import { Center, PadBox } from '../styles/layout'



const DogPost = ({ post }) => {
    return ( 
   
        <div>
            <PadBox padding="lg">
                <Center maxWidth="800px">   
                    <div style={{border: '1px solid black'}}>hello there</div>
                    <img src={post.postImage} alt="" />
                    <div style={{border: '1px solid black'}}><h2>{post.postTitle}</h2></div>
                </Center>
            </PadBox>
        </div>
       
      );
}
 
export default DogPost;