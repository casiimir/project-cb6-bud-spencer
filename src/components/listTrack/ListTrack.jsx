import styles from "./index.module.scss";
import SongItem from "../songitem/SongItem";

const ItemList = () => {
  const song = {
    data: [
      {
        id: 69962764,
        title: "Should I Stay or Should I Go (Remastered)",
        title_short: "Should I Stay or Should I Go",
        title_version: "(Remastered)",
        link: "https://www.deezer.com/track/69962764",
        duration: 189,
        rank: 916904,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
          "https://cdns-preview-8.dzcdn.net/stream/c-885610b11987959b3ad61298d63d32bb-4.mp3",
        md5_image: "dcb57e195538467662fbce4492f89c20",
        position: 1,
        artist: {
          id: 2,
          name: "The Clash",
          link: "https://www.deezer.com/artist/2",
          picture: "https://api.deezer.com/artist/2/image",
          picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/56x56-000000-80-0-0.jpg",
          picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/250x250-000000-80-0-0.jpg",
          picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/500x500-000000-80-0-0.jpg",
          picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/1000x1000-000000-80-0-0.jpg",
          radio: true,
          tracklist: "https://api.deezer.com/artist/2/top?limit=50",
          type: "artist",
        },
        album: {
          id: 6861104,
          title: "Combat Rock (Remastered)",
          cover: "https://api.deezer.com/album/6861104/image",
          cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/dcb57e195538467662fbce4492f89c20/56x56-000000-80-0-0.jpg",
          cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/dcb57e195538467662fbce4492f89c20/250x250-000000-80-0-0.jpg",
          cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/dcb57e195538467662fbce4492f89c20/500x500-000000-80-0-0.jpg",
          cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/dcb57e195538467662fbce4492f89c20/1000x1000-000000-80-0-0.jpg",
          md5_image: "dcb57e195538467662fbce4492f89c20",
          tracklist: "https://api.deezer.com/album/6861104/tracks",
          type: "album",
        },
        type: "track",
      },
      {
        id: 69962765,
        title: "Rock the Casbah (Remastered)",
        title_short: "Rock the Casbah",
        title_version: "(Remastered)",
        link: "https://www.deezer.com/track/69962765",
        duration: 222,
        rank: 740302,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
          "https://cdns-preview-4.dzcdn.net/stream/c-43fbd5c94fdca0ee098cda286e1b9610-2.mp3",
        md5_image: "dcb57e195538467662fbce4492f89c20",
        position: 2,
        artist: {
          id: 2,
          name: "The Clash",
          link: "https://www.deezer.com/artist/2",
          picture: "https://api.deezer.com/artist/2/image",
          picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/56x56-000000-80-0-0.jpg",
          picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/250x250-000000-80-0-0.jpg",
          picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/500x500-000000-80-0-0.jpg",
          picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/1000x1000-000000-80-0-0.jpg",
          radio: true,
          tracklist: "https://api.deezer.com/artist/2/top?limit=50",
          type: "artist",
        },
        album: {
          id: 6861104,
          title: "Combat Rock (Remastered)",
          cover: "https://api.deezer.com/album/6861104/image",
          cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/dcb57e195538467662fbce4492f89c20/56x56-000000-80-0-0.jpg",
          cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/dcb57e195538467662fbce4492f89c20/250x250-000000-80-0-0.jpg",
          cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/dcb57e195538467662fbce4492f89c20/500x500-000000-80-0-0.jpg",
          cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/dcb57e195538467662fbce4492f89c20/1000x1000-000000-80-0-0.jpg",
          md5_image: "dcb57e195538467662fbce4492f89c20",
          tracklist: "https://api.deezer.com/album/6861104/tracks",
          type: "album",
        },
        type: "track",
      },
      {
        id: 2485118,
        title: "Single Ladies (Put a Ring on It)",
        title_short: "Single Ladies (Put a Ring on It)",
        title_version: "",
        link: "https://www.deezer.com/track/2485118",
        duration: 193,
        rank: 872388,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
          "https://cdns-preview-b.dzcdn.net/stream/c-b844f52cb55a5d993a3daf4be4b0d069-5.mp3",
        md5_image: "1f0450a010b5a825194d7ca00b3067ab",
        position: 3,
        artist: {
          id: 145,
          name: "Beyoncé",
          link: "https://www.deezer.com/artist/145",
          picture: "https://api.deezer.com/artist/145/image",
          picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/6203637647172f2323ce340c24219d39/56x56-000000-80-0-0.jpg",
          picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/6203637647172f2323ce340c24219d39/250x250-000000-80-0-0.jpg",
          picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/6203637647172f2323ce340c24219d39/500x500-000000-80-0-0.jpg",
          picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/6203637647172f2323ce340c24219d39/1000x1000-000000-80-0-0.jpg",
          radio: true,
          tracklist: "https://api.deezer.com/artist/145/top?limit=50",
          type: "artist",
        },
        album: {
          id: 244223,
          title: "I AM...SASHA FIERCE",
          cover: "https://api.deezer.com/album/244223/image",
          cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/1f0450a010b5a825194d7ca00b3067ab/56x56-000000-80-0-0.jpg",
          cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/1f0450a010b5a825194d7ca00b3067ab/250x250-000000-80-0-0.jpg",
          cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/1f0450a010b5a825194d7ca00b3067ab/500x500-000000-80-0-0.jpg",
          cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/1f0450a010b5a825194d7ca00b3067ab/1000x1000-000000-80-0-0.jpg",
          md5_image: "1f0450a010b5a825194d7ca00b3067ab",
          tracklist: "https://api.deezer.com/album/244223/tracks",
          type: "album",
        },
        type: "track",
      },
    ],
    total: 9,
  };

  const songArray = song.data;

  return (
    <div className={styles.songList}>
      {songArray.map((data) => (
        <SongItem key={data.id} song={data} />
      ))}
    </div>
  );
};

export default ItemList;
