import { Skeleton } from "@/components/ui/skeleton";

export default function SettingsDataSkeleton() {
  return (
    <div className="space-y-4 p-4">
      
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-6 w-full" /> {/* Present Address */}
        <Skeleton className="h-6 w-full" /> {/* Permanent Address */}
        <Skeleton className="h-6 w-full" /> {/* Marital Status */}
        <Skeleton className="h-6 w-full" /> {/* Date of Birth */}
        <Skeleton className="h-6 w-full" /> {/* Passport Country */}
        <Skeleton className="h-6 w-full" /> {/* Passport Number */}
      </div>
    </div>
  );
}
