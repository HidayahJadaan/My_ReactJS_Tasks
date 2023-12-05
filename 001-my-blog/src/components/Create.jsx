import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Hidayah");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // Correct 'header' to 'headers'
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog Added");
      setIsPending(false);
      window.location.href = '/'
    });

  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body:</label>
        <textarea required onChange={(e) => setBody(e.target.value)}></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="hidayah">Hidayah</option>
          <option value="ahmad">Ahmad</option>
          <option value="mohammed">Mohammad</option>
        </select>
        {/* <button>Add Blog</button> */}
        {!isPending && <button>Add Blog</button>}

        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
