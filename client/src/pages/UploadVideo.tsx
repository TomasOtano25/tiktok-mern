import { useState, useEffect } from "react";
import axios from "axios";

interface TiktokPost {
  title: string;
  description: string;
  video: File | null;
}

function UploadVideoPage() {
  const [tiktok, setTiktok] = useState<TiktokPost>({
    title: "",
    description: "",
    video: null,
  });

  const handleChange = (e: any) => {
    setTiktok({
      ...tiktok,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(tiktok);
  }, [tiktok]);

  return (
    <>
      <h1>UploadVideoPage</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("title", tiktok.title);
          formData.append("description", tiktok.description);
          if (tiktok.video) {
            formData.append("video", tiktok.video);
          }
          await axios.post("http://localhost:3015/api/v1/video", formData);
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="title"
        />

        <textarea
          onChange={handleChange}
          name="description"
          rows={3}
          placeholder="write a description"
        ></textarea>

        <input
          onChange={(e) =>
            setTiktok({
              ...tiktok,
              video: e.target.files ? e.target.files[0] : null,
            })
          }
          type="file"
          name="video"
          id=""
        />

        <button type="submit">Upload</button>
      </form>
    </>
  );
}

export default UploadVideoPage;
