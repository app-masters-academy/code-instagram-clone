import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "../../api";

const PostForm = () => {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handlePost = async () => {
    const body = {
      title,
      description,
      imageUrl,
    };
    try {
      setLoading(true);
      const response = await API.post("/posts", body);
      if (response.data.id) {
        history.push('/');
      }
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
      <h1>Post Form</h1>
      <input
        placeholder="Título"
        value={title}
        disabled={loading}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        placeholder="Mensagem"
        value={description}
        disabled={loading}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        placeholder="Url da Imagem"
        value={imageUrl}
        disabled={loading}
        onChange={(event) => setImageUrl(event.target.value)}
      />
      {imageUrl && imageUrl.length > 5 && (
        <img style={{ maxHeight: "100px" }} src={imageUrl} />
      )}
      {error && <p>{error}</p>}
      <button
        disabled={loading}
        style={{ marginTop: "50px" }}
        onClick={handlePost}
      >
        Postar
      </button>
    </div>
  );
};

export default PostForm;
