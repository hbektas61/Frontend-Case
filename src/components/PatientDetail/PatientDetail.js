import UploadFile from '@/components/Utils/UploadFile';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";


const PatientDetail = ({ data }) => {
    return (
        <Box p={3}> 
            <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
                <Typography variant="h5" gutterBottom>
                    Medical History
                </Typography>
                <Typography variant="body1">
                    {data[0].medicalHistory}
                </Typography>
            </Paper>

            <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
                <Typography variant="h6" gutterBottom>
                    Contact Information
                </Typography>
                <Typography variant="body1">
                    {data[0].contactInformation.email}
                </Typography>
                <Typography variant="body1" style={{ marginTop: '8px' }}>
                    {data[0].contactInformation.telephone}
                </Typography>
            </Paper>

            <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
            <Typography variant="h5" gutterBottom>
                    Disease
                </Typography>
                <Typography variant="body1">
                    {data[0].disease}
                </Typography>
            </Paper>
            <UploadFile user={data[0]} />
        </Box>
    )
}

export default PatientDetail;