import { ISearchResult, SearchResult } from "../search-result"
import React from 'react';

interface ISearchResults {
  items: ISearchResult[]
}

export const SearchResults = (props: ISearchResults) => {
  console.log(props)
  return (
    <div
    className="flex flex-col gap-4">
      {props.items.map((item, index) => (<SearchResult key={item.id} {...item}/>))}
    </div>
  )
}
 