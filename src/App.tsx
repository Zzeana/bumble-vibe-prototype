import { useState, useEffect } from "react";
import { Splash } from "@/components/Splash/Splash";
import { SidequestsAnnouncement } from "@/components/SidequestsAnnouncement/SidequestsAnnouncement";
import { DiscoverFeed } from "@/components/DiscoverFeed/DiscoverFeed";
import { MatchSent } from "@/components/MatchSent/MatchSent";
import { Chats } from "@/components/Chats/Chats";
import { MatchMadeChat } from "@/components/MatchMadeChat/MatchMadeChat";
import { BottomNav } from "@/components/BottomNav/BottomNav";
import appStyles from "./App.module.css";

const SPLASH_DURATION_MS = 2500;

type Screen = "splash" | "announcement" | "discover" | "matchSent" | "chats" | "chatConversation";

const PROFILES = [
  {
    imageUrl: "https://www.figma.com/api/mcp/asset/576ea1f2-153f-492b-ac63-962a5cad90cf",
    name: "Lara Raj",
    ageLocation: "20 • Stamford, CT",
  },
  {
    imageUrl: "https://www.figma.com/api/mcp/asset/aaea3c02-f57a-4ef4-80ca-67b4266cfe09",
    name: "Sophia Laforteza",
    ageLocation: "23 • Stamford, CT",
    bio: "Always down to try new places and meet new people. Love creative spaces, deep talks, and long walks.",
    interests: ["Art", "Concerts", "Yoga", "Coffee", "Traveling"],
  },
];

function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [profileIndex, setProfileIndex] = useState(0);
  const [animateScrollIntoView, setAnimateScrollIntoView] = useState(false);

  useEffect(() => {
    if (screen !== "splash") return;
    const t = setTimeout(() => setScreen("announcement"), SPLASH_DURATION_MS);
    return () => clearTimeout(t);
  }, [screen]);

  const goToDiscover = () => setScreen("discover");
  const goToMatchSent = () => setScreen("matchSent");
  const goBackToDiscover = () => setScreen("discover");
  const goToChats = () => setScreen("chats");
  const [chatContactName, setChatContactName] = useState<string>("Lara Raj");
  const goToChatConversation = (contactName?: string) => {
    if (contactName) setChatContactName(contactName);
    setScreen("chatConversation");
  };
  const goBackToChats = () => setScreen("chats");
  const goToNextUser = () => {
    setProfileIndex((i) => (i + 1) % PROFILES.length);
    setAnimateScrollIntoView(true);
    setScreen("discover");
  };

  if (screen === "splash") {
    return <Splash />;
  }

  if (screen === "chatConversation") {
    return (
      <div className={appStyles.appLayout}>
        <div className={appStyles.screenSlot}>
          <MatchMadeChat
            contactName={chatContactName}
            onBack={goBackToChats}
          />
        </div>
      </div>
    );
  }

  const showBottomNav =
    screen === "discover" || screen === "matchSent" || screen === "chats";

  if (showBottomNav) {
    const activeNavTab = screen === "chats" ? "chats" : "discover";
    return (
      <div className={appStyles.appLayout}>
        <div className={appStyles.screenSlot}>
          {screen === "matchSent" && (
            <MatchSent
              profileImageUrl={PROFILES[profileIndex].imageUrl}
              onUndo={goBackToDiscover}
              onAutoContinue={goToNextUser}
            />
          )}
          {screen === "discover" && (
            <DiscoverFeed
              profile={PROFILES[profileIndex]}
              animateScrollIntoView={animateScrollIntoView}
              onScrollAnimationComplete={() => setAnimateScrollIntoView(false)}
              onWaveClick={goToMatchSent}
            />
          )}
          {screen === "chats" && (
            <Chats onChatRowClick={goToChatConversation} />
          )}
        </div>
        <BottomNav
          activeTab={activeNavTab}
          showChatsNotification={profileIndex === 1}
          onDiscoverClick={goToDiscover}
          onChatsClick={goToChats}
        />
      </div>
    );
  }

  if (screen === "announcement") {
    return <SidequestsAnnouncement onDismiss={goToDiscover} />;
  }

  return null;
}

export default App;
