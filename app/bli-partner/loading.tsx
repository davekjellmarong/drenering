import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Skeleton } from "@/src/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
            <Skeleton className="h-6 w-2/4 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full" />
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Skeleton key={i} className="h-10 w-full" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
