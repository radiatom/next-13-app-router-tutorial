import { Metadata } from "next";
import Link from "next/link";
import React from "react";

const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!response.ok) throw new Error("Erorr request getData in blog")
    return response.json();
};

export const metadata: Metadata = {
    title: "Blog pages",
};
const Blog = async () => {
    const posts = await getData();
    return (
        <div>
            <h2>blog</h2>
            <ul>
                {posts.map((post: any) => {
                    return (
                        <li key={post.id}>
                            <Link  href={`/blog/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Blog;
