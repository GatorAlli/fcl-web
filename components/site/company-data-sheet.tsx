import { AnimatedCopy } from "@/components/site/animated-copy";
import { companyData } from "@/lib/company-data";
export function CompanyDataSheet() {
  return (
    <dl className="company-data-sheet" aria-label="Felix Controls company data">
      {companyData.map(([field, value]) => (
        <div key={field}>
          <dt>
            <AnimatedCopy>{field}</AnimatedCopy>
          </dt>
          <dd>
            <AnimatedCopy>{value}</AnimatedCopy>
          </dd>
        </div>
      ))}
    </dl>
  );
}
