import ExperienceDetailPageLayout from "@/myComponents/ExperienceDetailPageLayout";
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;

  return (
    <div>
      <ExperienceDetailPageLayout id={resolvedParams.id} />
    </div>
  );
}
