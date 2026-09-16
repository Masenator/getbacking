export type ProcessStep = {
  title: string;
  description: string;
};

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative rounded-sm border border-line bg-paper p-6"
        >
          <span className="font-display text-3xl font-bold text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-display text-lg font-bold text-ink">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
