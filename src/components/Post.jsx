import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ postContent }) => {
  return <>{postContent}</>;
};

Post.propTypes = {
  postContent: PropTypes.element,
};

export default Post;
