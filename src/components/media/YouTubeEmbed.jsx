import { Play } from "lucide-react";
import { useState } from "react";

const getId = (video) => {
  if (video.youtubeId) return video.youtubeId;
  const match = video.youtubeUrl?.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
  return match?.[1] || "";
};

export default function YouTubeEmbed({ video }) {
  const [loaded, setLoaded] = useState(false);
  const id = getId(video);
  if (!id) return null;
  const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="aspect-video overflow-hidden rounded-sm bg-charcoal">
      {loaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      ) : (
        <button type="button" onClick={() => setLoaded(true)} className="group relative h-full w-full">
          <img src={thumbnail} alt="" loading="lazy" className="h-full w-full object-cover opacity-80 transition group-hover:scale-105" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ivory text-charcoal shadow-soft">
              <Play className="ml-1 h-7 w-7" aria-hidden="true" />
            </span>
          </span>
          <span className="sr-only">Play {video.title}</span>
        </button>
      )}
    </div>
  );
}
