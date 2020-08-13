import React from 'react';

function useDocumentTitle(title, fallbackTitle) {
  React.useEffect(() => {
    document.title = title

    return () => {
      document.title = fallbackTitle;
    }
  });
}

export default useDocumentTitle;
