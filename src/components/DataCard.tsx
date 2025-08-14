import { Card } from "@/components/ui/card";
import { CopyButton } from "./CopyButton";

interface DataCardProps {
  title: string;
  name: string;
  document: string;
  documentLabel: string;
}

export function DataCard({ title, name, document, documentLabel }: DataCardProps) {
  return (
    <Card className="card-gradient shadow-medium border border-border/50 p-6 w-full max-w-md animate-slide-up hover:shadow-large transition-all duration-300 hover:scale-[1.02]">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-foreground border-b border-border/30 pb-2">
          {title}
        </h3>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Nome:</p>
            <div className="flex items-center gap-2">
              <p className="text-base font-medium text-foreground flex-1">{name}</p>
              <CopyButton text={name} />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{documentLabel}:</p>
            <div className="flex items-center gap-2">
              <p className="text-base font-mono text-foreground bg-secondary/30 px-3 py-2 rounded-md border border-border/20 flex-1">
                {document}
              </p>
              <CopyButton text={document} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}