import { useState } from "react";
import { SidequestAnnouncement } from "@/components/SidequestAnnouncement/SidequestAnnouncement";
import { EnableLocation } from "@/components/EnableLocation/EnableLocation";

type Screen = "announcement" | "enable-location";

function App() {
  const [screen, setScreen] = useState<Screen>("announcement");

  const handleAnnouncementClose = () => {
    console.log("Sidequest announcement dismissed");
  };

  const handleEnableSidequests = () => {
    setScreen("enable-location");
  };

  const handleLocationClose = () => {
    setScreen("announcement");
  };

  const handleAllowLocation = () => {
    console.log("Allow location access");
    // In a full app: trigger system location permission
  };

  if (screen === "enable-location") {
    return (
      <EnableLocation
        onClose={handleLocationClose}
        onAllow={handleAllowLocation}
      />
    );
  }

  return (
    <SidequestAnnouncement
      onClose={handleAnnouncementClose}
      onEnable={handleEnableSidequests}
    />
  );
}

export default App;
