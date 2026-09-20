import BoardRoomDetailPageLayout from "@/myComponents/BoardRoomDetailPageLayout";
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BoardRoomDetail({ params }: PageProps) {
  const resolvedParams = await params;

  return (
    <div>
      <BoardRoomDetailPageLayout id={resolvedParams.id} />
    </div>
  );
}
