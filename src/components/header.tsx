import React, { FC } from "react";
import { Wrapper } from "./wrapper";
import { useStaticQuery, graphql, Link } from "gatsby"
import { Glossary } from "@/model";



export const Header: FC = () => {
  const { allTermsJson } = useStaticQuery<Queries.HeaderQuery>(graphql`
  query Header {
    allTermsJson {
      edges {
        node {
          title,
          definition
        }
      }
    }
}
`);

  return (
    <header className="py-3.5">
      <Wrapper className="flex items-center space-x-8">
        <Link to={"/"} className="text-3xl font-bold">Словник</Link>
        <nav>
          <ul className="flex items-center space-x-2">
            {
              Object.keys(Glossary.make(allTermsJson.edges.map(e => e.node)))
                .sort((a, b) => a.localeCompare(b))
                .map(letter => (
                  <li>
                    <Link to={`/#${letter}`}>
                      {letter}
                    </Link>
                  </li>
                ))}
          </ul>
        </nav>
      </Wrapper>

    </header>
  )
};
