import React, { useState } from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';

const EmailUtility = () => {
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [html, setHtml] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleSendEmail = async () => {
    const formData = new FormData();
    formData.append('to', to);
    formData.append('cc', cc);
    formData.append('bcc', bcc);
    formData.append('subject', subject);
    formData.append('html', html);
    formData.append('attachment', attachment);

    try {
      const response = await fetch('http://127.0.0.1:8000/email', { //for testing purposes only and dont send a lot of emails kyuki mera personal account hai ✌️
        method: 'POST',
        
        body: formData,
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Internal Server Error. Please try again later.');
    }

    console.log("Sending Email:", formData);

    // You can clear the form fields after sending the email if needed
    // setTo("");
    // setCc("");
    // setBcc("");
    // setSubject("");
    // setMessage("");
    // setAttachment(null);
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border border-gray-300 rounded shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 pb-2">
        New Message
      </h2>

      <div className="mb-4">
        <label htmlFor="to" className="block text-sm font-medium text-gray-600">
          To:
        </label>
        <input
          type="text"
          id="to"
          className="mt-1 p-2 border rounded w-full text-gray-800"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cc" className="block text-sm font-medium text-gray-600">
          Cc:
        </label>
        <input
          type="text"
          id="cc"
          className="mt-1 p-2 border rounded w-full text-gray-800"
          value={cc}
          onChange={(e) => setCc(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="bcc" className="block text-sm font-medium text-gray-600">
          Bcc:
        </label>
        <input
          type="text"
          id="bcc"
          className="mt-1 p-2 border rounded w-full text-gray-800"
          value={bcc}
          onChange={(e) => setBcc(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          className="mt-1 p-2 border rounded w-full text-gray-800"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="html" className="block text-sm font-medium text-gray-600">
          Message:
        </label>
        <textarea
          id="html"
          rows="4"
          className="mt-1 p-2 border rounded w-full text-gray-800"
          value={html}
          onChange={(e) => setHtml(e.target.value)}
        />
      </div>

      <div className="mb-4 flex items-center">
        <label
          htmlFor="attachment"
          className="block text-sm font-medium text-gray-600"
        >
          Attachment:
        </label>
        <label htmlFor="attachment" className="ml-2 text-gray-500 cursor-pointer">
          <AttachFileIcon style={{ fontSize: '24px', color: '#4CAF50' }} />
        </label>
        <input
          type="file"
          id="attachment"
          className="hidden"
          onChange={handleAttachmentChange}
        />
        {attachment && <span className="ml-2 text-gray-800">{attachment.name}</span>}
      </div>

      <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={handleSendEmail}
      >
        <span className="material-icons"></span> Send Email
      </button>
    </div>
  );
};

export default EmailUtility;
