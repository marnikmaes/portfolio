import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function ProjectPage({frontmatter: {title,start_date,end_date,cover_img}, slug, content}){
    return(
        <>
        <div className='post-body'>
            <div className='text-3xl font-bold'>{title}</div>
            <div>{content}</div>
        </div>
        </>
    )
}


export async function getStaticPaths(){
    const files = fs.readdirSync(path.join('projects'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return{
        paths,
        fallback: false
    }
    
}

export async function getStaticProps({params: {slug}}){
    const markdownWithMeta = fs.readFileSync(path.join('projects', slug + '.md'), 'utf-8')

    const{data:frontmatter, content} = matter(markdownWithMeta)

    return{
        props:{
            frontmatter,
            slug,
            content
        }
    }
}