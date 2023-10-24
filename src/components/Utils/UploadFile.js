import { useCallback, useEffect, useState } from "react";
import { storage } from "@/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Image from "next/image";
import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';

export default function UploadFile({ user: { id, documents = [] } }) {
    const [spin, setSpin] = useState(false);
    const [userDocuments, setUserDocuments] = useState(documents);

    const onChange = useCallback(e => {
        setSpin(true);

        const file = e.target.files[0];
        const storageRef = ref(storage, "files/" + file.name);

        uploadBytesResumable(storageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                setSpin(false);
                setUserDocuments((docs) => [...docs, downloadURL]);

                fetch("http://localhost:3010/api/set-user-image", {
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ id, imageURL: downloadURL }),
                  method: 'POST',
                });
            });
        });
    }, [id]);

    return  (
        <Grid container alignItems="center" spacing={2}>            
            <Grid item>
                <Grid  container>
                {userDocuments.map((document, key) => {
                    const fileName = decodeURIComponent(document.replace(/.*\//, '').replace(/\?.*/, '')).replace('files/', '');

                    return (
                        <Paper key={key}  style={{ margin:'10px',padding: '16px' }}>
                        <a  style={{textDecoration:'none'}}target="_blank" key={key} href={document}>
                            <span style={{ fontSize: '10px', color: 'black'}}>{fileName}</span>
                        </a>
                    </Paper>
                    )
                })}
                </Grid>
                <div style={{ display: 'flex' }}>
                    <input
                        style={{ display: 'none' }}
                        type="file"
                        id="file-upload"
                        name="file-upload"
                        accept="image/png, image/jpeg"
                        onChange={onChange}
                    />
                    <label htmlFor="file-upload">
                        <Button component="span" startIcon={<UploadFileIcon />}>
                            Upload New File
                        </Button>
                    </label>
                </div>
            </Grid>

            {spin && (
                <Grid item>
                    <CircularProgress />
                </Grid>
            )}
        </Grid>
    );
}
