import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-white text-center">
      <p>
        An initiative inspired by{" "}
        <a
          href="https://rjrinfinity.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-400 hover:underline"
        >
          Mr. Arindam Chakraborty (Founder - R J R Infinity)
        </a>
        , proudly from Tripura — keeping the spirit of Durga Puja alive
        everywhere.
      </p>
      <p className="mt-2 text-sm text-gray-400">
        © 2025{" "}
        <a
          href="https://rjrinfinity.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          R J R Infinity
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
