import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardContentTypes {
  title: string;
  description: string;
  amount: number;
}

export function CardComponent({ content }: { content: CardContentTypes }) {
  return (
    <Card className="w-full rounded-sm">
      <CardHeader>
        <CardTitle>{content.title}</CardTitle>
        <CardDescription>{content.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content.amount}</p>
      </CardContent>
    </Card>
  );
}
