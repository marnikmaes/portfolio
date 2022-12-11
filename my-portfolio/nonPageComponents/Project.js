import Link from 'next/link'

export default function Project({project}){
    return(
        <div className='max-w-sm border-2 border-skyBlue bg-skyBlue rounded overflow-hidden shadow-lg'>
            <img className="w-full" src={project.frontmatter.cover_img} alt='cover image'></img>
            <div class="px-6 py-4">
                <div class="font-bold font-Roboto text-xl mb-2 text-customWhite">{project.frontmatter.title}</div>
                <p class=" text-customWhite text-base pb-4">
                    {project.frontmatter.start_date} &#45; {project.frontmatter.end_date}
                </p>
                <Link href={`/projects/${project.slug}`} className='inline-flex items-center px-3 py-2 border-[2px] border-towerBlue rounded-lg text-md font-Roboto font-semibold text-center bg-customWhite text-customBlack hover:bg-waterBlue hover:text-customWhite'>
                  Read More
                </Link>
            </div>
        </div>
    )

}