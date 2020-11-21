import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserContext';

function Post(props) {
  return (
    <div>
      The post id is
      {' '}
     {props.match.params.post_id}
      <br/>
    </div>
  );
}

export default Post;