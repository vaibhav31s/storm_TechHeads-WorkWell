    "use client"
    import React, { useState } from 'react';

    const SimpleForm = () => {
    const [formData, setFormData] = useState({
        question1: { question: ''   , query: 'What do you think defines our company culture, and how would you describe your experience with it?', pillar: { discipline: false, motivation: false, teamwork: false, persistence: false, Time_Management: false } },
        question2: { question: '', query: 'Can you share an example of a successful collaboration within our team? What made it effective?', pillar: { discipline: false, motivation: false, teamwork: false, persistence: false, Time_Management: false } },
        question3: { question: '', query: 'In what ways do you think our company supports the professional growth and development of its employees?', pillar: { discipline: false, motivation: false, teamwork: false, persistence: false, Time_Management: false } },
        question4: { question: '', query: 'How do you ensure our customers are satisfied with our products/services?', pillar: { discipline: false, motivation: false, teamwork: false, persistence: false, Time_Management: false } },
        question5: { question: '', query: 'Can you share a specific instance where you went above and beyond for a customer?', pillar: { discipline: false, motivation: false, teamwork: false, persistence: false, Time_Management: false } },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const [questionKey, field] = name.split('.'); // Extract question key and field from input name
        setFormData((prevData) => ({
        ...prevData,
        [questionKey]: {
            ...prevData[questionKey],
            [field]: value,
        },
        }));
    };

    const handleCheckboxChange = (questionKey, checkboxKey) => {
        setFormData((prevData) => ({
        ...prevData,
        [questionKey]: {
            ...prevData[questionKey],
            pillar: {
            ...prevData[questionKey].pillar,
            [checkboxKey]: !prevData[questionKey].pillar[checkboxKey],
            },
        },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData); // For example, you can log the form data
    };

    const addQuestion = () => {
        setNumQuestions(numQuestions + 1);
    
        // Generate a new question key (question6, question7, etc.)
        const newQuestionKey = `question${numQuestions + 1}`;
    
        // Add the new question to the form data state
        setFormData((prevData) => ({
          ...prevData,
          [newQuestionKey]: {
            question: '',
            query: `Question ${numQuestions + 1} query`,
            pillar: {
              discipline: false,
              motivation: false,
              teamwork: false,
              persistence: false,
              Time_Management: false,
            },
          },
        }));
      };
    

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Simple Form</h2>
        <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((questionKey, index) => (
            <div key={index} className="mb-6">
                {/* Question */}
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">{`Question ${index + 1}`}</label>
                <input
                    type="text"
                    name={`${questionKey}.question`}
                    value={formData[questionKey].question}
                    onChange={handleInputChange}
                    className="form-input w-full"
                />
                </div>
                {/* Checkboxes */}
                <div className="flex items-center space-x-4">
                {Object.keys(formData[questionKey].pillar).map((checkboxKey) => (
                    <div key={checkboxKey} className="flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                        checked={formData[questionKey].pillar[checkboxKey]}
                        onChange={() => handleCheckboxChange(questionKey, checkboxKey)}
                    />
                    <span className="ml-2 text-gray-800">{checkboxKey}</span>
                    </div>
                ))}
                </div>
            </div>
            ))}
            
            <button
          type="button"
          onClick={addQuestion}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          Add Question
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
        </form>
        </div>
    );
    };

    export default SimpleForm;
