import { useEffect } from 'react';
const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL; // Get URL from env file

const Bookings = () => {
  useEffect(() => {
    // Dynamically load the Calendly widget script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up by removing the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="widget">
      <div
        className="calendly-inline-widget"
        data-url={`${CALENDLY_URL}`}
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};

export default Bookings;