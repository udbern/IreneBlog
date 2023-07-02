import React, { useState, useEffect } from 'react';
import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from 'react-router-dom';

export default function Blog() {
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
        "name": ^[auth]._id,
      } | order(publishedAt desc)`
      )
      .then((data) => {
        setStories(data);
      })
      .catch(console.error);
  }, []);
  return (
    <>
      <div className='max-w-7xl mx-auto px-5'>
      <h1 className='text-2xl lg:text-3xl mb-6 capitalize mt-5 '>all blog post</h1>
    </div>
      <section className=' grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-5 mt-10 max-w-7xl mx-auto  '>
        {stories.map((story) => (
          <Link to={`/blog/${story.slug.current}`} key={story.slug.current} >
            <div className='border border-gray-500 rounded-lg overflow-hidden  shadow-md shadow-indigo-300 h-96 min-h-96 '>
              {story.mainImage && <img className='object-cover w-full h-60 ' src={story.mainImage.asset.url} alt={story.mainImage.alt} loading="lazy"  />}
              <div className='p-4'>
                <p className='capitalize text-sm  '> By {story.name} &middot;  {format(new Date(story.publishedAt), "dd MMMM yyyy")} </p>
                <h2 className='capitalize text-lg '>{story.title}</h2>
                <p className='text-sm  leading-relaxed'>{`${story.body[0].children[0].text.substring(0, 50)}...`}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  )
}
