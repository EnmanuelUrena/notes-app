import React from 'react'

const Note = ({content, date, id}) => {
  return (
    <li>
      <p><b>{id}{"."}</b> {content}</p>
      <small>
      <b><time>{date}</time></b>
      </small>
    </li>
  )
}

export default Note;