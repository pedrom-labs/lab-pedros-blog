import { useEffect, useState } from "react";
import { cd } from "../assets";

function LastFM() {
    const USERNAME = "pdrinme";
    const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;

    const [track, setTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const getTrack = async () => {
            try {
                const request = await fetch(BASE_URL);
                const json = await request.json();

                const currentTrack = json.track;

                const playing =
                    currentTrack["@attr"]?.nowplaying || false;

                setIsPlaying(playing);
                setTrack(currentTrack);
            } catch (error) {
                console.error("Error fetching music:", error);
            }
        };

        getTrack();

        const interval = setInterval(getTrack, 3000);

        return () => clearInterval(interval);
    }, []);

    if (!track) {
        return (
            <div id="listening">
                <p>I haven't listened to anything yet :(</p>
            </div>
        );
    }

    return (
        <div class="relative w-full lg:p-8 xs:p-4" id="listening" >
            <div>
                <img src={track.image[3]["#text"]} alt={`Cover of ${track.name}`} class="absolute xs:left-10 xs:top-6 xs:w-auto lg:w-30 lg:left-1/2 lg:top-3 -translate-x-1/2 z-20" />
                <img src={cd} alt="" class={`absolute xs:left-6 xs:top-7 xs:max-w-15 lg:left-42 lg:max-w-26 lg:top-6 z-10 ${isPlaying ? "animate-spin" : ""}`} />
            </div>

            <div class="xs:text-start lg:text-center lg:pt-27 lg:pl-0 xs:pl-20 xs:align-middle items-center" id="trackInfo" >
                <h4 class="text-xl" id="trackName"> {track.name} </h4>

                <p class="text-md" id="artistName">
                    {track.artist["#text"]}
                </p>

                <p class="text-md opacity-60 pt-1">
                    {isPlaying ? "Now playing" : "Last played"}
                </p>
            </div>
        </div>
    );
}

export default LastFM;