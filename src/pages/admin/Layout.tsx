import type { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";

export default function Layout({
  header,
  footer,
  children,
  render,
}: {
  header: ({ year }: { year: string }) => ReactNode;
  footer: () => ReactNode;
  render?: () => ReactNode;
  children?: ReactNode;
}) {
  return (
    <Fragment>
      {/* Header section */}
      <div className="mb-5">
        {header({ year: "2025" })}
      </div>

      {/* Main Content */}
      <div className="p-4 border rounded-md bg-gray-100">
        {children}

        {/* Optional render prop */}
        {render && (
          <div className="mt-4">
            {render()}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-5">
        {footer()}
      </div>
    </Fragment>
  );
}
