import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

function BlogPost({ title, image, content }) {
  return (
    <div className="container mx-auto py-16">
      <div className="bg-white rounded-lg shadow-md">
        <img className="w-full rounded-t-lg" src={image} alt="Blog post" />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="mt-4 text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Link to="/blog/post-1">
              <img className="w-full rounded-t-lg" src="https://images.unsplash.com/photo-1532002230871-8fc684e667f9" alt="Blog post" />
            </Link>
            <div className="p-6">
              <Link to="/blog/post-1" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition duration-300">
                How to Write a Great Cover Letter
              </Link>
              <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ante sit amet massa aliquam, nec convallis lacus rhoncus. Proin euismod dignissim est, eu aliquet mauris accumsan nec. </p>
              <Link to="/blog/post-1" className="mt-6 inline-block px-4 py-2 text-lg font-bold text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">Read more</Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Link to="/blog/post-2">
              <img className="w-full rounded-t-lg" src="https://images.unsplash.com/photo-1504851147855-3ec3b3a5c5c5" alt="Blog post" />
            </Link>
            <div className="p-6">
              <Link to="/blog/post-2" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition duration-300">
                The Benefits of Working Remotely
              </Link>
              <p className="mt-4 text-gray-600">Nunc placerat libero eget sapien hendrerit, in pulvinar neque vehicula. Maecenas nec est quis mauris pulvinar malesuada vel eu lectus. Donec hendrerit convallis enim, ut euismod ex hendrerit ut. </p>
              <Link to="/blog/post-2" className="mt-6 inline-block px-4 py-2 text-lg font-bold text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300" aria-label="Read More">
                Read more

              </Link>
              <Route path="/blog/post-1">
                <BlogPost
                  title="How to Write a Great Cover Letter"
                  image="https://images.unsplash.com/photo-1532002230871-8fc684e667f9"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ante sit amet massa aliquam, nec convallis lacus rhoncus. Proin euismod dignissim est, eu aliquet mauris accumsan nec."
                />
              </Route>
              <Route path="/blog/post-2">
                <BlogPost
                  title="The Benefits of Working Remotely"
                  image="https://images.unsplash.com/photo-1504851147855-3ec3b3a5c5c5"
                  content="Nunc placerat libero eget sapien hendrerit, in pulvinar neque vehicula. Maecenas nec est quis mauris pulvinar malesuada vel eu lectus. Donec hendrerit convallis enim, ut euismod ex hendrerit ut."
                />
              </Route>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
