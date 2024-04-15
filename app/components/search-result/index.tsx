import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import React from 'react';

export interface ISearchResult {
  id: string;
  title: string;
  description: string;
  link: string;
}

export const SearchResult = (props: ISearchResult) => {
    return (
    <Card>
      <CardHeader>
        <CardTitle>
          {props.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {props.description}
      </CardContent>
    </Card>
    )
}