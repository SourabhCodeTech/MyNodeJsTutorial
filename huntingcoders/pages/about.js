import Head from 'next/head'
import React from 'react'
import styles from '../styles/about.module.css'

const about = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
            </Head>
            <h1 className={styles.textCenter}>About Hunting Coder</h1>
            <h2>Introduction</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio perspiciatis autem laudantium ratione culpa aut, soluta doloribus corrupti? Velit magnam officiis est laborum corrupti nulla voluptate impedit debitis autem, explicabo asperiores corporis deleniti quo cupiditate, rem esse odit dolorum soluta error! Cupiditate non autem facere, corporis eligendi itaque nobis reprehenderit voluptatibus libero eveniet ut provident dolorum error commodi tenetur ullam aliquid eius explicabo, laborum animi? Quisquam exercitationem necessitatibus atque vitae accusamus veritatis officiis. Esse quaerat sunt excepturi debitis veniam nesciunt exercitationem tempore provident sequi consectetur temporibus culpa ea tenetur impedit corporis omnis architecto possimus in, placeat sint accusamus. Sunt quis doloremque omnis est id totam fuga quisquam sed magni error. Mollitia nulla earum velit, pariatur at commodi libero fugit adipisci, ad doloremque dicta molestiae optio facilis.</p>
            <h2>Services Offered</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo alias, distinctio ratione aut quae libero sed totam soluta asperiores saepe iste in. Iusto facilis ullam nam repellendus accusamus accusantium. Blanditiis laboriosam cumque aut.</p>
            <p>We offer the following Services</p>
            <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
                <li>Service 5</li>
                <li>Service 6</li>
                <li>Service 7</li>
                <li>Service 8</li>
                <li>Service 9</li>
                <li>Service 10</li>
            </ul>
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil aspernatur harum sint earum deserunt molestias qui ab error vel.</p>
        </div>
    )
}

export default about