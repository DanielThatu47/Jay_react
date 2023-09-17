import React, { useState } from 'react';
import {
  Container,
  Box,
  Text,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormControlLabel, Radio as MuiRadio } from '@mui/material';

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    grooming: false,
    training: false,
    daycare: false,
    gender: 'female',
    dateOfBirth: new Date(),
    petType: '',
    specialRequirements: '',
  });
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value;
    const phoneRegex = /^\d{10}$/; // Change this pattern according to your requirements.
    setIsValidPhoneNumber(phoneRegex.test(phoneNumber));
    handleInputChange(e);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted with data:', formData);
  };

  return (
    <Container
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <Box>
        <Text
          style={{
            fontSize: '2xl',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Booking Form
        </Text>
        <form>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              width: '100%',
              marginBottom: '15px',
              fontSize: 'lg',
            }}
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              width: '100%',
              marginBottom: '15px',
              fontSize: 'lg',
            }}
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="address"
            placeholder="Address"
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              width: '100%',
              marginBottom: '15px',
              fontSize: 'lg',
            }}
            value={formData.address}
            onChange={handleInputChange}
          />
           {/* Phone Number Input */}
           <Input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              width: '100%',
              marginBottom: '15px',
              fontSize: 'lg',
            }}
            value={formData.phoneNumber}
            onChange={handlePhoneNumberChange}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Allow only digits
            }}
            pattern="[0-9]*"
            required
          />
          {!isValidPhoneNumber && (
            <p className="error-message">Please enter a valid phone number.</p>
          )}

          <Box
            style={{
              marginBottom: '10px',
            }}
          >
            <Checkbox
              name="grooming"
              checked={formData.grooming}
              onChange={handleInputChange}
            >
              Grooming
            </Checkbox>
            <Checkbox
              name="training"
              checked={formData.training}
              onChange={handleInputChange}
            >
              Training
            </Checkbox>
            <Checkbox
              name="daycare"
              checked={formData.daycare}
              onChange={handleInputChange}
            >
              Daycare
            </Checkbox>
          </Box>
          <FormControl
            style={{
              marginBottom: '20px',
            }}
          >
            <FormLabel>Pet's Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={(e) =>
                handleInputChange({ target: { name: 'gender', value: e } })
              }
            >
              <Stack direction="row">
                <FormControlLabel
                  value="female"
                  control={<MuiRadio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<MuiRadio />}
                  label="Male"
                />
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl
            style={{
              marginBottom: '15px',
            }}
          >
            <FormLabel>Date of Birth</FormLabel>
            <DatePicker
              selected={formData.dateOfBirth}
              onChange={(date) =>
                handleInputChange({ target: { name: 'dateOfBirth', value: date } })
              }
              dateFormat="MM/dd/yyyy"
              style={{
                width: '100%',
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                fontSize: 'lg',
              }}
            />
          </FormControl>

          <Input
            type="text"
            name="petType"
            placeholder="Type of Pet"
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              width: '100%',
              marginBottom: '15px',
              fontSize: 'lg',
            }}
            value={formData.petType}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="specialRequirements"
            placeholder="Any special requirement"
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              width: '100%',
              marginBottom: '15px',
              fontSize: 'lg',
            }}
            value={formData.specialRequirements}
            onChange={handleInputChange}
          />

          <Button
            type="button"
            style={{
              backgroundColor: '#4285F4',
              color: 'white',
              fontSize: 'lg',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
              transition: 'background-color 0.2s',
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Booking;
