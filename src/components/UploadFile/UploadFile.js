import useUpload from "@/hooks/useUpload";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function UploadFile({ user: { id, documents = [] } }) {
  const { spin, documents: userDocuments, uploadFile } = useUpload(documents);

  const onChange = (e) => {
    const file = e.target.files[0];
    uploadFile(file, id);
  };

  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <Grid container>
          {userDocuments.map((document, key) => {
            const fileName = decodeURIComponent(
              document.replace(/.*\//, "").replace(/\?.*/, "")
            ).replace("files/", "");

            return (
              <Paper key={key} style={{ margin: "10px", padding: "16px" }}>
                <a
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  key={key}
                  href={document}
                >
                  <span style={{ fontSize: "10px", color: "black" }}>
                    {fileName}
                  </span>
                </a>
              </Paper>
            );
          })}
        </Grid>
        <div style={{ display: "flex" }}>
          <input
            style={{ display: "none" }}
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
