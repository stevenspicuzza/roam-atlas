import { CheckCircle2 } from "lucide-react";
import { CityData } from "@/data/detroit";
import { Badge } from "../Badge";
import { Card, CardHeader } from "../Card";
import { ExternalButton } from "../ExternalButton";

export function CostsSection({ city }: { city: CityData }) {
  return (
    <Card id="costs">
      <CardHeader title="Typical Costs" />
      <div className="space-y-2">
        {city.costs.map((cost) => (
          <div
            key={cost.id}
            className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2"
          >
            <span className="text-sm text-slate-600">{cost.label}</span>
            <span className="text-sm font-medium text-slate-900">
              {cost.range}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <Badge variant="estimate">Estimate</Badge>
        Prices are estimates and can vary.
      </p>
    </Card>
  );
}

export function LocalTipsSection({ city }: { city: CityData }) {
  return (
    <Card id="local-tips">
      <CardHeader title="Local Tips" />
      <ul className="space-y-3">
        {city.localTips.map((tip) => (
          <li key={tip.id} className="flex gap-2 text-sm text-slate-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
            <span>{tip.text}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <ExternalButton
          href="https://www.visitdetroit.com/plan/local-tips/"
          label="More local tips"
          variant="outline"
        />
      </div>
    </Card>
  );
}
