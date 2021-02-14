import { useEffect, useState } from 'react';
import youtube from '../services/youtube';


const useVideos = (searchTerm) => {

    const [videos, setVideos] = useState([]);

    const search = async (searchTerm) => {
        const response = await youtube.get('search', { params: { q: searchTerm } });
        setVideos(response.data.items);
    };

    useEffect(() => {
        search(searchTerm);
    }, [searchTerm]);

    return [videos, search];
}


export default useVideos;