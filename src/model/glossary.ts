import { ReadonlyRecord as RR, ReadonlyArray as RA, pipe, identity } from "effect";
import groupBy from "lodash/groupBy"

export module Glossary {
  export const alphabet: string[] = [
    'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З',
    'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П',
    'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ',
    'Ь', 'Ю', 'Я'
  ];

  export const make = (data: Pick<Queries.TermsJson, "title" | "definition">[]) => {
    return groupBy(data, term => term.title?.toUpperCase().at(0) ?? "")
  }
}

