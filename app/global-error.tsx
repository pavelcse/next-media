'use client';

import React from 'react';

interface Props {
    error: Error,
    reset: () => void,
}

const GlobalErrorPage = ({ error, reset }: Props) => {
    console.log(error);
  return (
    <div>
      An unexpected error has occurred.
      <button className="btn" onClick={() => reset() }>Retry</button>
    </div>
  );
}

export default GlobalErrorPage;
