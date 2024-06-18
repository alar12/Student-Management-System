import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addStuff } from '../../../redux/userRelated/userHandle';
import { underControl } from '../../../redux/userRelated/userSlice';
import { BlueButton } from "../../../components/buttonStyles";
import Popup from "../../../components/Popup";
import Classroom from "../../../assets/classroom.png";
import styled from "styled-components";

const AddClass = () => {
    const [sclassName, setSclassName] = useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userState = useSelector(state => state.user);
    const { status, currentUser, response, error, tempDetails } = userState;

    const adminID = currentUser._id
    const address = "Sclass"

    const [loader, setLoader] = useState(false)
    const [message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const fields = {
        sclassName,
        adminID,
    };

    const submitHandler = (event) => {
        event.preventDefault()
        setLoader(true)
        dispatch(addStuff(fields, address))
    };

    useEffect(() => {
        if (status === 'added' && tempDetails) {
            navigate("/Admin/classes/class/" + tempDetails._id)
            dispatch(underControl())
            setLoader(false)
        }
        else if (status === 'failed') {
            setMessage(response)
            setShowPopup(true)
            setLoader(false)
        }
        else if (status === 'error') {
            setMessage("Network Error")
            setShowPopup(true)
            setLoader(false)
        }
    }, [status, navigate, error, response, dispatch, tempDetails]);
    return (
        <>
            <StyledContainer>
                <StyledBox>
                    <Stack sx={{
                        alignItems: 'center',
                        mb: 3
                    }}>
                        <img
                            src={Classroom}
                            alt="classroom"
                            style={{ width: '80%' }}
                        />
                    </Stack>
                    <form onSubmit={submitHandler}>
                        <Stack spacing={3}>
                            <TextField
                                label="Create a class"
                                variant="outlined"
                                value={sclassName}
                                onChange={(event) => {
                                    setSclassName(event.target.value);
                                }}
                                required
                            />
                            <BlueButton
                                fullWidth
                                size="large"
                                sx={{ mt: 3 }}
                                variant="contained"
                                type="submit"
                                disabled={loader}
                            >
                                {loader ? <CircularProgress size={24} color="inherit" /> : "Create"}
                            </BlueButton>
                            <Button variant="outlined" onClick={() => navigate(-1)}>
                                Go Back
                            </Button>
                        </Stack>
                    </form>
                </StyledBox>
            </StyledContainer>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </>
    )
}

export default AddClass

const StyledContainer = styled(Box)`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem; /* Added margin-top */
`;

const StyledBox = styled(Box)`
  max-width: 550px;
  padding: 30px;
  margin-top: 2rem;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  transition: box-shadow 0.3s ease-in-out;
  text-align: center;

  &:hover {
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #666;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #0056b3;
    }
  }
`;