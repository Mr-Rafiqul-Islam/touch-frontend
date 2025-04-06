import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileDataSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-full" />
    </div>
  );
}
