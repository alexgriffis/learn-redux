import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

const Single = (props) => {
  // index of post
  const {
    posts,
    params
  } = props
  const i = posts.findIndex((post) => post.code === params.postId)
  // get the post
  const post = posts[i]
  const postComments = props.comments[params.postId] || []
  return (
    <div className='single-photo'>
      <Photo {...props} i={i} post={post} />
      <Comments postComments={postComments} {...props} />
    </div>
  )
}

export default Single
