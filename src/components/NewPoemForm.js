import React, {useState} from "react";

function NewPoemForm({onAddNewPoem}) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    const formData = {
      "title": title,
      "author": author,
      "content": content
    }
    fetch(`http://localhost:8004/poems`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then((newPoem) => {
      onAddNewPoem(newPoem);
      setTitle("");
      setAuthor("");
      setContent("");
    })
  }
  return (
    <form onSubmit={handleSubmit} className="new-poem-form">
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <textarea placeholder="Write your masterpiece here..." rows={10} value={content} onChange={(e) => setContent(e.target.value)}/>
      <input type="submit" value="Show your masterpiece"  />
    </form>
  );
}

export default NewPoemForm;
