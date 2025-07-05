import { SkeletonList } from "@/shared/ui/skeleton/skeletonList/skeleton-list.tsx";
import { SkeletonDetails } from "@/shared/ui/skeleton/skeletonDetails/skeleton-details.tsx";

type Props = {
  variant: "list" | "details";
};

export const Skeleton = ({ variant }: Props) => {
  return variant === "list" ? <SkeletonList /> : <SkeletonDetails />;
};
