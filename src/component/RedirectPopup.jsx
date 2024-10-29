import React, { useEffect } from 'react';

const RedirectPopup = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; 
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleLinkClick = (event) => {
    if (!window.confirm("Are you sure you want to leave this site?")) {
      event.preventDefault(); 
    }
  };

  return (
    <div>
      <a href="https://google.com" onClick={handleLinkClick}>
        Go to google 
      </a>
    </div>
  );
};

export default RedirectPopup;
