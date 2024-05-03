import { useState } from "react"

function commentPage() {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    const fetchComments = async () => {
        const response = await fetch("/api/comments")
        const data = await response.json()
        setComments(data)
    }

    const submitComments = async () => {
        const response = await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
    }

    return (
        <>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={submitComments}>Submit comment</button>
            <button onClick={fetchComments}>Load comments</button>
            {
                comments.map((comment) => {
                    return (
                        <div key={comment.id}>
                            {comment.id} {comment.text}
                        </div>
                    )
                })
            }
        </>
    )
}

export default commentPage