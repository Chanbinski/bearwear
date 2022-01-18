import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"

import { onAuthStateChanged, signOut } from "firebase/auth"
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage"
import { auth, storage } from "../firebase-config"

import Navbar from "./Navbar";
import Authentication from "./Authentication";

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Grid(props) {

    function deleteFromFirebase(url) {
        props.delete(url);
    }

    return (
        <div className="mt-20 mx-20 grid gap-10 grid-cols-4 grid-flow-row">
            {
                props.images.map(url => (
                    (
                        <div key={url.toString()} className="w-60 h-60 group relative">
                            <button className="absolute right-0 text-red-500 text-2xl font-base hidden group-hover:block" onClick={() => deleteFromFirebase(url)}>x</button>
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
            //let storageRef = storage.ref();
            const listRef = ref(storage, `${user.uid}/${category}`)
            setImageURLs([]);
            listAll(listRef).then((res) => {
                res.items.forEach((itemRef) => {           
                    const path = itemRef._location.path_;
                    const urlRef = ref(storage, path);
                getDownloadURL(urlRef).then((url) => {
                        setImageURLs(oldArray => [...oldArray, url].sort()); //When we do sort outside, it givs an error
                    });
                });
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    useEffect(() => {
        getImages();
    }, [user]); //deleting this dependency crashes react

    const upload = () => {

        console.log(image)

        // upload to storage
        var time = Date.now() + '';
        const storageRef = ref(storage, `${user.uid}/${category}/${time}`);

        uploadBytes(storageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            getImages();
        });

    }

    function deleteFromFirebase(url) {
        let pictureRef = ref(storage, url);
        deleteObject(pictureRef).then(() => {
            setImageURLs(imageURLs.filter((image) => image !== url));
            //alert("Picture is deleted successfully!");
        }).catch((error) => {
            console.log(error);
        });
      };

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
                <Grid images={imageURLs} delete={deleteFromFirebase}/>
            </div>
        </>
    )
}

export default Category