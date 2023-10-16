import React from "react";

type propsType = {
    params: {
        id: string;
    };
};

export async function generateMetadata({ params }:any) {
    return {
      title: params.id,
    }
  }
const Page: React.FC<propsType> = ({ params: { id } }) => {
    return <div>Blog: {id}</div>;
};

export default Page;
