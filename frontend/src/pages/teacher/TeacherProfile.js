import React from 'react'
import styled from 'styled-components';
import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const TeacherProfile = () => {
  const { currentUser, response, error } = useSelector((state) => state.user);

  if (response) { console.log(response) }
  else if (error) { console.log(error) }

  const teachSclass = currentUser.teachSclass
  const teachSubject = currentUser.teachSubject
  const teachSchool = currentUser.school

  return (
    <>
      <ProfileCard>
        <ProfileCardContent>
          <ProfileText>Name: {currentUser.name}</ProfileText>
          <ProfileText>Email: {currentUser.email}</ProfileText>
          <ProfileText>Class: {teachSclass.sclassName}</ProfileText>
          <ProfileText>Subject: {teachSubject.subName}</ProfileText>
          <ProfileText>School: {teachSchool.schoolName}</ProfileText>
        </ProfileCardContent>
      </ProfileCard>
    </>
  )
}

export default TeacherProfile

const ProfileCard = styled(Card)`
  margin: 20px;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added box shadow for depth */
  transition: box-shadow 0.3s ease-in-out; /* Smooth transition on hover */
  
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increased shadow on hover */
  }
`;

const ProfileCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; /* Increased padding for content spacing */
`;

const ProfileText = styled(Typography)`
  margin: 10px 0; /* Adjusted margin for better spacing */
  text-align: center; /* Center align text */
`;