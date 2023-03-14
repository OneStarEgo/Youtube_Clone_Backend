import axios from 'axios';
import React, { useState } from 'react';


const { TextArea } = input;

function CommentSection(props) {
    const [comments, setComments] = useState('')
    const handleChange = (e) => {
        setComments(e.currentTarget.value)
    }

    const onSubmit = (e) => (
        e.preventDefault();

        const variables = {
            content: Comment,
            writer: user.userData.id,
            postId:
        }
        axios.post('/api/comment/saveComment', variables)
    )

    return (
        <div>
            <br />
            <h1> replies </h1>
            <hr />
            
            <form style={{display: 'flex'}} onSubmit={onSubmit}>
                <TextArea
                    style={{width: '100%', borderRadius: '5px'}}
                    onChange={handleChange}
                    value={Comment}
                    placeholder="write some comments"
                />
                <br />
                <Button style={{width: '20%', height: '52px'}}>Submit</Button>
            </form>
        </div>
        )
    } 