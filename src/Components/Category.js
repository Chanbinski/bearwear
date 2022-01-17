import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"

import { onAuthStateChanged, signOut } from "firebase/auth"
import { ref, uploadBytes, getDownloadURL, listAll, } from "firebase/storage"
import { auth, storage } from "../firebase-config"

import Navbar from "./Navbar";
import Authentication from "./Authentication";

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Grid(props) {
    return (
        <div className="mt-20 mx-20 grid gap-10 grid-cols-4 grid-flow-row">
            {
                props.images.map(url => (
                    (
                        <div key={url.toString()} className="overflow-hidden h-48">
                            <img src={url} className="w-full h-full object-cover" alt="clothing"/>
                        </div>
                    )
                ))
            }
        </div>
    )
}

function Category(props) {
    const { category } = useParams();
    // const location = useLocation();
    // const { user } = location.state;
    const history = useNavigate();
    
    const [user, setUser] = useState({});
    const [image, setImage] = useState(null);
    const [imageURLs, setImageURLs] = useState([]);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    
    const logout = async () => {
        await signOut(auth);
        history('/');
    }

    const getImages = () => {
        if (user != null) {
            const listRef = ref(storage, `${user.uid}/${category}`)
            setImageURLs([]);
            listAll(listRef)
                .then((res) => {
                    res.items.forEach((itemRef) => {             
                        const urlRef = ref(storage, itemRef._location.path_);
                        getDownloadURL(urlRef)
                            .then((url) => {
                                setImageURLs(oldArray => [...oldArray, url]);
                            });
                    });
                }).catch((error) => {
                    console.log(error);
                });
        }
    }

    useEffect(() => {
        getImages();
    }, [user]);

    const upload = () => {

        console.log(image)

        // upload to storage
        var time = Date.now() + '';
        const storageRef = ref(storage, `${user.uid}/${category}/${time}`);

        uploadBytes(storageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
          
            // const urlRef = ref(storage, `${user.uid}/${category}/${time}`);

            // // get the link from storage and push it to the array

            // getDownloadURL(urlRef)
            //     .then((url) => {
            //         setImageURLs(oldArray => [...oldArray, url]);
            //     });
            getImages();
        });

    }
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center mt-20">
                <div className="mt-4 text-5xl font-bold" id="title">{capitalize(category)}</div>
                <div className="flex flex-row mt-5">
                    <input 
                        type="file" 
                        className="text-xs" 
                        onChange={(e)=>{setImage(e.target.files[0])}}
                    />
                    <button 
                        className="text-xs"
                        onClick={upload}
                    >
                        Upload
                    </button>
                </div>
                <Grid images={imageURLs}/>
            </div>
        </>
    )
}

export default Category