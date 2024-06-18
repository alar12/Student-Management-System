import { Container, Grid, Paper } from '@mui/material'
import CountUp from 'react-countup';
import styled from 'styled-components';
import Lessons from "../../assets/subjects.svg";
import Tests from "../../assets/assignment.svg";
import { getClassStudents, getSubjectDetails } from '../../redux/sclassRelated/sclassHandle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const TeacherHomePage = () => {
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state) => state.user);
    const { subjectDetails, sclassStudents } = useSelector((state) => state.sclass);

    const classID = currentUser.teachSclass?._id
    const subjectID = currentUser.teachSubject?._id

    useEffect(() => {
        dispatch(getSubjectDetails(subjectID, "Subject"));
        dispatch(getClassStudents(classID));
    }, [dispatch, subjectID, classID]);

    const numberOfStudents = sclassStudents && sclassStudents.length;
    const numberOfSessions = subjectDetails && subjectDetails.sessions

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <Title>
                                Class Students
                            </Title>
                            <Data start={0} end={numberOfStudents} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Lessons} alt="Lessons" />
                            <Title>
                                Total Lessons
                            </Title>
                            <Data start={0} end={numberOfSessions} duration={5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Tests} alt="Tests" />
                            <Title>
                                Tests Taken
                            </Title>
                            <Data start={0} end={24} duration={4} />
                        </StyledPaper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

const StyledPaper = styled(Paper)`
  padding: 20px; /* Increased padding for better spacing */
  display: flex;
  flex-direction: column;
  height: 220px; /* Increased height for better content fit */
  justify-content: space-around; /* Adjusted to evenly space content */
  align-items: center;
  text-align: center;
  background-color: #ffffff; /* Added background color */
  border-radius: 8px; /* Added border radius */
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); /* Added box shadow for depth */
`;

const Title = styled.p`
  font-size: 1.5rem; /* Increased font size for title */
  margin-bottom: 10px; /* Added margin bottom for spacing */
  color: #333333; /* Changed text color to a darker shade */
`;

const Data = styled(CountUp)`
  font-size: calc(1.5rem + 1vw); /* Adjusted font size calculation */
  font-weight: bold; /* Added font weight for emphasis */
  color: #4caf50; /* Changed text color to green */
`;

export default TeacherHomePage