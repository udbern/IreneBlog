import React, { useState, useEffect } from 'react';
import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from 'react-router-dom';


function Popular() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url,
          },
          alt,
        },
        "name": author -> name,
      } | order(publishedAt desc)`
      )
      .then((data) => {
        setStories(data.slice(0,3));
      })
      .catch(console.error);
  }, []);

  return (
    <section className='my-20 max-w-7xl mx-auto '>
      <div className='flex item-center justify-between  font-Montaga mb-4 '>
        <div>
          <h1 className='uppercase font-bold text-xl'>latest post</h1>
        </div>
        <div>
          <Link to="/blog" className='bg-[white] py-2 px-8 rounded shadow test-gray-800 tracking-wide hover:opacity-75 transition-all duration-200 md:w-auto'  >view all post</Link>
        </div>
      </div>

      {!stories ? <h2>Loading...</h2> : <>{stories[0] && <Link to={`/blog/${stories[0].slug.current}`}>
        <div className=' hidden md:block px-5  overflow-hidden mb-8'>
          <div className='relative  '>
            {stories[0].mainImage && <img className=' h-80 w-full  object-cover object-center   rounded-xl  ' src={stories[0].mainImage.asset.url} alt={stories[0].mainImage.alt} loading="lazy" />}
            <div className='absolute bottom-0 left-0  w-full h-full   justify-center items-center 
             bg-blue-600/30 backdrop-brightness-75  '>
              <div className='absolute bottom-8 left-8'>
                <h1 className='capitalize  text-4xl lg:text-5xl mb-6 text-white  '>{stories[0].title}</h1>
                <p className='text-gray-200 text-md mb-8 md:w-1/2 '>{`${stories[0].body[0].children[0].text.substring(0, 200)}...`}</p>
                <Link to={`/blog/${stories[0].slug.current}`} className='bg-[white] py-2 px-8 rounded shadow test-gray-800 tracking-wide hover:opacity-75 transition-all duration-200 md:w-auto'  >
                  Read More
                </Link>
              </div>

            </div>
          </div>
        </div>
      </Link>}</>}

      <section className=' grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-5   '>
        {stories.map((story) => (
          <Link to={`/blog/${story.slug.current}`} key={story.slug.current} >
            <div className='border border-gray-500 rounded-lg overflow-hidden  shadow-md shadow-indigo-300 h-96 min-h-96 '>
              {story.mainImage && <img className='object-cover w-full h-60 ' src={story.mainImage.asset.url} alt={story.mainImage.alt} />}
              <div className='p-4'>
                <p className='capitalize text-sm  '> By {story.name} &middot;  {format (new Date(story.publishedAt),"dd MMMM yyyy")} </p>
                <h2 className='capitalize text-xl '>{story.title}</h2>
                <p className='text-sm  leading-relaxed'>{`${story.body[0].children[0].text.substring(0, 100)}...`}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

    </section>
  )
}

export default Popular