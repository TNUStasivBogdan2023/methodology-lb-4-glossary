import React, { FC } from "react"
import { graphql, Link, type PageProps } from "gatsby"
import { Header } from "@/components"
import { Wrapper } from "@/components/wrapper"
import { Glossary } from "@/model"


const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  return (
    <div>
      <Header />
      <Wrapper className="mt-8">
        {
          Object
            .entries(Glossary.make(data.allTermsJson.edges.map(n => n.node)))
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([letter, terms]) => (
              <section className="border-t border-gray-300 py-8 flex space-x-12" id={letter}>
                <h2 className="text-2xl font-bold">{letter}</h2>
                <ul className="grid grid-cols-4 gap-4">
                  {terms.map(term => (
                    <li className="text-sm text-gray-800">
                      <Link to={`/allTermsJson/${term.tag}`} className="hover:underline hover:text-black">
                        {term.title}
                      </Link>
                    </li>)
                  )}
                </ul>
              </section>
            ))
        }
      </Wrapper>
    </div>
  )
}

export default IndexPage
export const query = graphql`
query IndexPage {
  allTermsJson {
    edges {
      node {
        id,
        title,
        tag,
        definition
      }
    }
  }
}
  `;

