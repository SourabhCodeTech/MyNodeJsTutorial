import React, { useState } from 'react'
import styles from '../../styles/BlogPost.module.css'
// import * as fs from 'fs'

const Slug = (props) => {
    function createMarkup(c){
        return {__html: c}
    }
    const [blog, setBlog] = useState(props.myBlogs)

    return (
            <div className={styles.main}>
                <h1>{blog && blog.title}</h1>
                <hr />
                    {blog && <div className={styles.container} dangerouslySetInnerHTML = {createMarkup(blog.content)}></div>}
            </div>
    )
}

// Server Side Props
export async function getServerSideProps(context) {
        const { slug } = context.query;
        const res = await fetch(`http://localhost:3000/api/getBlogs?slug=${slug}`)
        const myBlogs = await res.json()

        return { props: { myBlogs } }
  }  

// Static Side Gernation
// export async function getStaticPaths(context) {
//     return {
//         paths: [
//             { params: { slug: 'how-to-learn-flask' } },
//             { params: { slug: 'how-to-learn-js' } },
//             { params: { slug: 'how-to-learn-django' } },
//         ],
//         fallback: true // false or 'blocking'
//     }
// }

// export async function getStaticProps(context) {
//     const { slug } = context.params;
//     let myBlogs = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8")
//     return { props: { myBlogs: JSON.parse(myBlogs) } }
// }

export default Slug