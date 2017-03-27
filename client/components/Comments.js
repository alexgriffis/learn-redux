import React, { Component } from 'react'

class Comments extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderComment = this.renderComment.bind(this)
    this.postId = this.props.params.postId
  }
  renderComment (comment, i) {
    const handleRemove = (e) => {
      e.preventDefault()
      this.props.removeComment(this.postId, i)
    }
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment' onClick={handleRemove}>&times;</button>
        </p>
      </div>
    )
  }
  handleSubmit (e) {
    e.preventDefault()
    const postId = this.props.params.postId
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(this.postId, author, comment)
    this.refs.commentForm.reset()
  }
  render () {
    return (
      <div className='comments'>
        {this.props.postComments.map(this.renderComment)}
        <form ref='commentForm' onSubmit={this.handleSubmit} className='comment-form'>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}

export default Comments
