import { useState, useCallback } from "react";
import { storage } from "@/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { BASE_URL } from  "../utils/config";

function useUpload(initialDocuments = []) {
    const [spin, setLoadingSpin] = useState(false);
    const [documents, setDocuments] = useState(initialDocuments);

    const uploadFile = useCallback((file, id) => {
        setLoadingSpin(true);

        const storageRef = ref(storage, "files/" + file.name);

        uploadBytesResumable(storageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                setLoadingSpin(false);
                setDocuments((docs) => [...docs, downloadURL]);

                fetch(`${BASE_URL}/set-user-image`, {
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ id, imageURL: downloadURL }),
                  method: 'POST',
                });
            });
        });
    }, []);

    return {
        spin,
        documents,
        uploadFile
    };
}

export default useUpload;
