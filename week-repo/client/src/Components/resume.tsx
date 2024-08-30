import React, { useState } from 'react';
import axios from 'axios';

const ResumeUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('resume', file);

        try {
            const response = await axios.post('http://localhost:3000/file/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setMessage('Resume uploaded successfully!');
            } else {
                setMessage('Failed to upload resume.');
            }
        } catch (error:unknown) {
            setMessage('Error uploading file.');
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data);
            } else if(error instanceof Error) {
                console.error('Error:', error.message);
            }
        }
    };

    return (
        <div>
            <h1>Upload Your Resume</h1>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResumeUpload;
