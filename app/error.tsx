'use client';

import React from 'react';

interface Props {
  error: Error,
  reset: () => void,
}

const ErrorPage = ({ error, reset }: Props) => {
  return (
    <div>
      An unexpected error has occurred.
      <button className="btn" onClick={() => reset() }>Retry</button>
    </div>
  );
}

export default ErrorPage;
