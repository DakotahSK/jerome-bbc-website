import { useState, useEffect } from 'react';
import SectionTitle from '../shared/SectionTitle';

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = 'UClWtVXWqwgYZGUs2HpuMgyw'; // Jerome Bible Baptist Church channel ID

const LivestreamPlayer = () => {
  const [isLive, setIsLive] = useState(false);
  const [liveVideoId, setLiveVideoId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLiveStatus = async () => {
      if (!YOUTUBE_API_KEY) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setIsLive(true);
          setLiveVideoId(data.items[0].id.videoId);
        } else {
          setIsLive(false);
          setLiveVideoId(null);
        }
      } catch (error) {
        console.error('Error checking live status:', error);
        setIsLive(false);
      }
      setIsLoading(false);
    };

    checkLiveStatus();
    // Check every 60 seconds
    const interval = setInterval(checkLiveStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle={isLive ? "We're Live!" : "Watch Live"}
          title="Join Us Online"
          centered
        />

        <div className="max-w-4xl mx-auto">
          {/* Live Video Player - Only shown when live */}
          {isLive && liveVideoId && (
            <div className="mb-8">
              <div className="relative">
                {/* LIVE Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  LIVE NOW
                </div>
                <div className="relative w-full bg-black rounded-lg shadow-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${liveVideoId}?autoplay=1&mute=1`}
                    title="JBBC Live Stream"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            {/* Service Times */}
            <div className="mb-8 bg-white rounded-lg p-6 shadow-md max-w-3xl mx-auto">
              <p className="text-charcoal font-medium text-lg">
                Live services: <span className="text-green font-bold">Sundays at 10:30 AM & 6:00 PM</span> | <span className="text-green font-bold">Wednesdays at 7:00 PM</span>
              </p>
            </div>

            {!isLive && (
              <p className="text-gray-600 mb-8">
                {isLoading ? 'Checking live status...' : "We're not live right now. Check back during service times or watch past sermons."}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.youtube.com/@jeromebiblebaptistchurch4722/streams"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                {isLive ? 'Open in YouTube' : 'Watch on YouTube'}
              </a>
              <a
                href="https://www.sermonaudio.com/broadcasters/jeromebbc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
                SermonAudio Archive
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivestreamPlayer;
