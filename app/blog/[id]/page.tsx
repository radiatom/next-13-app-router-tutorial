import React from "react";

type propsType = {
    params: {
        id: string;
    };
};

const getPost = async (id:string) => {
    const respons = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return respons.json();
};
export async function generateMetadata({ params }: any) {
    return {
        title: params.id,
    };
}
const Page: React.FC<propsType> = async ({ params: { id } }) => {
    const post = await getPost(id);
    return (
        <div>
            <h2>Blog: {id}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Page;
