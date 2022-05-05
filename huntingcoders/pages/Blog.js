import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/blog.module.css'
// import * as fs from 'fs'

function Blog(props) {
    const [blogs, setBlogs] = useState(props.allBlogs);
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.h1}>Popular Blogs</h1>
                {blogs.map((blogItem) => {
                    return <div key={blogItem.title} className={styles.blogItem}>
                        <Link href={`/blogpost/${blogItem.slug}`}>
                            <h2>{blogItem.title}</h2>
                        </Link>
                        <p className={styles.blogItemp}>{blogItem.metadesc}.</p>
                    </div>
                })}
            </main>
        </div>
    )
}


export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/blogs`)
  const allBlogs = await res.json()

  return { props: { allBlogs } }
}


// export async function getStaticProps(context) {
//     let data = await fs.promises.readdir("blogdata")
//     let myFile;
//     let allBlogs = [];
//     for (let index = 0; index < data.length; index++) {
//         const item = data[index];
//         myFile = await fs.promises.readFile(("blogdata/" + item), 'utf-8')
//         allBlogs.push(JSON.parse(myFile))

//         return { props: { allBlogs } }
//     }
// }

export default Blog;