import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../lib/client";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";


export default function Blogpost() {
  const [blogpost, setBlogpost] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author -> name,
      }`
      )
      .then((data) => {
        setBlogpost(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    document.title = `Reading | ${blogpost.title}`;
  }, [blogpost.title]);

  return (
    <>
      {blogpost && (
        <section className="py-20 px-5 max-w-3xl mx-auto">
          {blogpost.mainImage && (
            <img
              src={blogpost.mainImage.asset.url}
              alt={blogpost.mainImage.alt}
              className="h-96 w-full object-cover rounded-2xl shadow"
            />
          )}
          <h1 className="text-2xl my-8 lg:text-4xl font-bold">{blogpost.title}</h1>
          <p className="font-bold text-sm mb-8">
            By {blogpost.name}{" "}
            {blogpost.publishedAt && (
              <>
                &middot;{" "}
                {format(new Date(blogpost.publishedAt), "dd MMMM yyyy")}
              </>
            )}
          </p>

          <PortableText  value={blogpost.body} />

          <div className="max-w-7xl mx-auto px-5 mb-20 mt-10 flex items-end justify-end">
            <Link
              to="/blog"
              className=" text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-slate-800 dark:hover:bg-slate-700 py-2 px-4 rounded shadow text-slate-800 dark:text-slate-400 tracking-wide hover:opacity-75 transition-all duration-200"
            >
              Read More Blog posts
            </Link>
          </div>
        </section>
      )}
    </>
  );
}