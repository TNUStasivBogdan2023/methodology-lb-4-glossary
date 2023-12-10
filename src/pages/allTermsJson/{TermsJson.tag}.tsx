import { Header } from "@/components";
import { Wrapper } from "@/components/wrapper";
import { PageProps, graphql } from "gatsby";
import React from "react";

export default function TermPage({ data }: PageProps<Queries.TermPageQuery>) {

  const term = data.termsJson;

  return (
    <div>
      <Header />
      <Wrapper className="mt-12 pb-8">
        <h1 className="font-bold text-3xl mb-4"> {term?.title} </h1>

        {term?.image && (
          <figure className="flex flex-col items-center justify-center mb-4">
            <img src={term?.image.src} />
            <caption className="text-sm italic font-semibold mt-2.5">{term.image.caption} </caption>
          </figure>
        )}
        <p>{term?.definition}</p>
        <hr className="bg-gray-600 my-6" />
        <h2 className="mb-2 text-xl font-bold">Джерела</h2>
        {term?.sources?.length && (
          <ul>
            {term.sources.map((source, index) => (
              <li>{index + 1}. {source}</li>
            ))}
          </ul>
        )}
      </Wrapper>
    </div>
  );
}


export const query = graphql`
  query TermPage($tag: String!) {
     termsJson(tag: {eq: $tag}) {
        title,
        definition,
        sources,
        image {
            src,
            caption
        }
     }
  }
`;
