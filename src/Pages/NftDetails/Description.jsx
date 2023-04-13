import React from 'react';

const Description = () => {
    return (
      <div className="overflow-x-auto mx-24">
        <table className="text-sm">
          <thead>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:text-gray-700">
                <span className="text-sm font-medium">Description</span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <div className="text-wrap ms-4 text-slate-700">
                <p>
                  This Punk was wrapped using Wrapped Punks contract, accessible
                </p>
                <p>from https://wrappedpunks.com</p>
              </div>
            </details>
          </thead>
        </table>
      </div>
    );
};

export default Description;