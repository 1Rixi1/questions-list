import { SkeletonList } from "@/shared/ui/skeleton/skeletonList/SkeletonList";
import {SkeletonDetails} from "@/shared/ui/skeleton/skeletonDetails/SkeletonDetails";

type Props = {
  variant: "list" | "details";
};

export const Skeleton = ({ variant }: Props) => {
  return variant === "list" ? <SkeletonList /> : <SkeletonDetails />;
};

