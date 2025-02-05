import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileDataSkeleton() {
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-6 w-32" /> {/* Name */}
        <Skeleton className="h-6 w-20" /> {/* Gender */}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-6 w-full" /> {/* Present Address */}
        <Skeleton className="h-6 w-full" /> {/* Permanent Address */}
        <Skeleton className="h-6 w-full" /> {/* Marital Status */}
        <Skeleton className="h-6 w-full" /> {/* Date of Birth */}
        <Skeleton className="h-6 w-full" /> {/* Passport Country */}
        <Skeleton className="h-6 w-full" /> {/* Passport Number */}
        <Skeleton className="h-6 w-full" /> {/* Passport Expiry Date */}
        <Skeleton className="h-6 w-full" /> {/* National ID */}
        <Skeleton className="h-6 w-full" /> {/* Nationality */}
        <Skeleton className="h-6 w-full" /> {/* Emergency Contact */}
        <Skeleton className="h-6 w-full" /> {/* Religion */}
      </div>
    </div>
  );
}
