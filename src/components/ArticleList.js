import React from 'react'
import Article from './Article'

export default function ArticleList({posts}) {
    console.log(posts)
    const handelePosts= posts.map((item)=>{
        return(
        <Article
        key={item.key}
        id={item.id}
        preview={item.preview}
        date={item.date}
        title={item.title}
        />)
    })
  return (
    <main>
        {handelePosts}
    </main>
  )
}
