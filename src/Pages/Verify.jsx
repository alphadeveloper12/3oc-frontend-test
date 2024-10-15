import { useState, useEffect } from "react";
import { Button } from "../Components";
import { useCamera } from "../Hook";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../Lib";
import { Profile } from "../Assets";
import { Snackbar, Alert } from "@mui/material";
import { styled } from '@mui/system';
import "../Style/Styles.css"; // Make sure to import the CSS file
import txt from'../Utils/constant.json';

// Custom styled component for the list
const StyledList = styled('ol')({
  listStyleType: 'decimal',
  padding: '0 1em',
  margin: '10px 0',
  color: 'white',
  fontSize: '0.875rem', // Decreased font size
  '& li': {
    marginBottom: '8px',
  }
});

const StyledAlert = styled(Alert)({
  backgroundColor: 'rgba(0, 255, 255, 0.2)', 
  color: 'white', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
  backdropFilter: 'blur(5px)', 
  borderRadius: '8px',
  border: '1px solid #00cccc',
  fontSize: '0.875rem', // Decreased font size
  padding: '10px 15px', // Adjusted padding
  margin: '10px 10px 0px 10px',
  '& .MuiAlert-message': {
    padding: '0',
    margin: '0',
  },
  '& ol': {
    counterReset: 'step-counter',
  },
});

export default function Verify() {
  // Store the user data for verification.
  const [image, setImage, Camera] = useCamera(Profile);
  const [document, setDocument] = useState(null);
  const authentication = sessionStorage.getItem("isAuthenticated");
  const navigate = useNavigate();

  // State for managing the Snackbar visibility.
  const [open, setOpen] = useState(true);

  // Automatically close the Snackbar after 5 seconds.
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleDocumentUpload = (event) => {
    setDocument(event.target.files[0]);
  };

  // Call the API function and pass all the user data to verify the user.
  const _verifyUser = async () => {
    // Make sure user uploaded all the required data before proceeding.
    if (!image || !document)
      return alert(
        "Please click your image as well as upload a valid government id"
      );

    const userDocuments = new FormData();
    userDocuments.append("id", document);
    userDocuments.append("picture", image);

    // Call the function by passing the data.
    console.log("Verifying the user");
    const result = await verifyUser(userDocuments);

    if (result.success) {
      // Reset the data.
      setImage(null);
      setDocument(null);
      // Redirect the user to the profile page.
      navigate("/profile");
    } else {
      console.error(result.message);
      alert(result.message);
    }
  };

  return (
    authentication && (
      <div className="flex flex-col justify-center items-center h-screen py-20 mb-10">
        <h1>{txt.verifySelf}</h1>
        <Camera image={[image, setImage]} />
        <h2 className="text-xl mt-3">{txt.uploadIdentity}</h2>
        <input type="file" className="my-4 custom-file-input" onChange={handleDocumentUpload} />
        <Button onClick={_verifyUser}>{txt.verifyMe}</Button>

        <Snackbar open={open} autoHideDuration={5000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <StyledAlert onClose={() => setOpen(false)} severity="info">
            {txt.instructioniPhoneTitle}
            <StyledList>
              <li>{txt.instruction1}</li>
              <li>{txt.instruction2}</li>
              <li>{txt.instruction3}</li>
              <li>{txt.instruction4}</li>
            </StyledList>
          </StyledAlert>
        </Snackbar>
      </div>
    )
  );
}
