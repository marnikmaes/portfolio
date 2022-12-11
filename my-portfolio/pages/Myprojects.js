import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Icon } from '@iconify/react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Myprojects({projects}) {
    console.log(projects);
    return (
        <div>
            <Head>
                <title>Portfolio Marnik Maes - About me</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="icon" href="images/MM-favicon.png"/>
            </Head>

        
            <div className='min-h-screen'>
                <main className="bg-[url('/images/endless-constellation.svg')] text-customWhite pb-[50px]">
                    <Nav/>

                    <div className='text-center xl:text-left xl:ml-[200px] py-6 '>
                        <h1 className='text-5xl font-Roboto font-semibold'>My projects</h1>
                    </div>

                    <div className='projects'>
                        {projects.map((projects, index) => (
                            <div key={index} className='project'>
                                <h3>{projects.frontmatter.title}</h3>
                            </div>
                        ))}

                    </div>
                    
                </main>
                <Footer/>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    // gettings files from the projects folder
    const files = fs.readdirSync(path.join('projects'))
    
    // getting the slug and frontmatter from projects
    const projects = files.map(filename =>{
        // Create slug
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(path.join('projects',filename), 'utf-8')

        const{data:frontmatter} = matter(markdownWithMeta)

        return{
            slug,
            frontmatter 
        }
    })
    
    return{
        props:{
            projects,
        }
    }
}