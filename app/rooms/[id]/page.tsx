import React from "react";
import RoomDetailPageLayout from "@/myComponents/RoomDetailsPageLayout";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function RoomDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;

  return (
    <div>
      <RoomDetailPageLayout id={resolvedParams.id} />
    </div>
  );
}
