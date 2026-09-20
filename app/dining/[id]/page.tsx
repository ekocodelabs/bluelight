import DiningDetailPageLayout from "@/myComponents/DiningDetailPageLayout";
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DiningPageDetail({ params }: PageProps) {
  const resolvedParams = await params;
  return (
    <div>
      <DiningDetailPageLayout id={resolvedParams.id} />
    </div>
  );
}
