import React, { useState } from 'react';
import '../Styles/Home.css';



const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    gender: '',
    quiz: '',
    screenshot: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleScreenshotChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, screenshot: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server or Google Sheets.
    console.log(formData);
  };

  return (
    <div>
      <h2>Register Here! Double Header Quiz presented by CalQulus!</h2>
        <h3>Knowledge Partner: 5Point Education Centre & Business Unplugged</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>

        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} />
        </label>

        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>Quiz(s):</label>
        <label>
          <input type="radio" name="quiz" value="Bangaliyana" onChange={handleChange} /> Bangaliyana
        </label>
        <label>
          <input type="radio" name="quiz" value="Open-to-all" onChange={handleChange} /> Open-to-all
        </label>
        <label>
          <input type="radio" name="quiz" value="Both" onChange={handleChange} /> Both
        </label>

        <div>
          <p className='entry-fee'> Entry fee for both the quizzes - Rs. 50/- </p>
        </div>

        <label className='upload-payment-text'>
          Upload Screenshot of the Payment: 

          <input type="file" accept=".png, .jpg, .jpeg" onChange={handleScreenshotChange} />
        </label>

        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Payment Method:</h3>
        <img src= "../../public/images/qr.jpeg" alt="QR Code" />
        <span>UPI ID: 9051879329@paytm</span>
        <span>A/c Number- 919051879329 </span> 
      </div>
    </div>
  );
};

export default RegistrationForm;
