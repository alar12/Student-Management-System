import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { calculateOverallAttendancePercentage } from '../../components/attendanceCalculator';
import { getUserDetails } from '../../redux/userRelated/userHandle';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { getSubjectList } from '../../redux/sclassRelated/sclassHandle';

const StudentHomePage = () => {
    const dispatch = useDispatch();

    const { userDetails, currentUser, loading, response } = useSelector((state) => state.user);
    const { subjectsList } = useSelector((state) => state.sclass);

    const [subjectAttendance, setSubjectAttendance] = useState([]);

    const classID = currentUser.sclassName._id

    useEffect(() => {
        dispatch(getUserDetails(currentUser._id, "Student"));
        dispatch(getSubjectList(classID, "ClassSubjects"));
    }, [dispatch, currentUser._id, classID]);

    const numberOfSubjects = subjectsList && subjectsList.length;

    useEffect(() => {
        if (userDetails) {
            setSubjectAttendance(userDetails.attendance || []);
        }
    }, [userDetails])

    const overallAttendancePercentage = calculateOverallAttendancePercentage(subjectAttendance);
    const overallAbsentPercentage = 100 - overallAttendancePercentage;

    const chartData = [
        { name: 'Present', value: overallAttendancePercentage },
        { name: 'Absent', value: overallAbsentPercentage }
    ];
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <Title>
                                Total Subjects
                            </Title>
                            <Data start={0} end={numberOfSubjects} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <Title>
                                Total Assignments
                            </Title>
                            <Data start={0} end={15} duration={4} />
                        </StyledPaper>
                    </Grid>
                    
                </Grid>
            </Container>
        </>
    )
}

const ChartContainer = styled.div`
  padding: 20px; /* Increased padding for better spacing */
  display: flex;
  flex-direction: column;
  height: 240px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f5f5f5; /* Added background color */
  border: 1px solid #ccc; /* Added border for visual separation */
  border-radius: 8px; /* Added border radius */
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); /* Added box shadow */
`;

const StyledPaper = styled(Paper)`
  padding: 24px; /* Increased padding for better spacing */
  display: flex;
  flex-direction: column;
  height: auto; /* Changed height to auto for dynamic content */
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: #ffffff; /* Added background color */
  border-radius: 8px; /* Added border radius */
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); /* Added box shadow */
`;

const Title = styled.p`
  font-size: 1.5rem; /* Increased font size */
  margin-bottom: 12px; /* Added margin bottom for spacing */
  color: #333333; /* Changed text color */
`;

const Data = styled(CountUp)`
  font-size: calc(1.5rem + 1vw); /* Adjusted font size calculation */
  font-weight: bold; /* Added font weight */
  color: #4caf50; /* Changed text color to green */
`;


export default StudentHomePage