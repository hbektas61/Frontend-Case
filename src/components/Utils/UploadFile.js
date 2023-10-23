import { useCallback, useEffect, useState } from "react";
import { storage } from "@/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';

export default function UploadFile({ message }) {
    const [fileContent, setFileContent] = useState({});
    const [callbackURL, setCallbackURL] = useState("");
    const [spin, setSpin] = useState(false);
    const [downloadURL, setDownloadURL] = useState("");

    useEffect(() => {
        const getFileContent = async () => {
            if (!callbackURL) {
                return;
            }

            //get file code here
            setSpin(false);
        };

        getFileContent();
    }, [callbackURL, setFileContent]);

    const onChange = useCallback(e => {
        setSpin(true);

        const file = e.target.files[0];
        const storageRef = ref(storage, "files/" + file.name);

        uploadBytesResumable(storageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                setDownloadURL(downloadURL);
                setCallbackURL(btoa(downloadURL));
            });
        });
    }, []);

    return  (
        <Grid container alignItems="center" spacing={2}>
            {downloadURL === "" && (
                <Grid item>
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
                            Upload
                        </Button>
                    </label>
                </Grid>
            )}
    
            {spin && (
                <Grid item>
                    <CircularProgress />
                </Grid>
            )}
    
            {!spin && <Grid item>{message}</Grid>}
    
            {fileContent && Object.values(fileContent).length > 0 &&
                <Grid item>
                    {/* File Content Display */}
                </Grid>
            }
        </Grid>
    );
}

export const Spin = () => <CircularProgress/>
export const UploadIcon = () => (
    <UploadFileIcon/>
);