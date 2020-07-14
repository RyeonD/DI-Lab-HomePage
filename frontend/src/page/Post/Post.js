import React, {useEffect, useState} from 'react'
import axios from 'axios';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Viewer } from '@toast-ui/react-editor';

const Post = ({match, location}) => {
    const editorRef = React.createRef();
    const [contents, setContents] = useState('');
    useEffect(()=>{
        if(location.state){
            setContents(<Viewer initialValue = {location.state.contents} />)
        }else{
            // axios.get('/api/posts/post')
        }
    },[])
    return (
        <div>
            {contents}
        </div>
    )
}

export default Post
