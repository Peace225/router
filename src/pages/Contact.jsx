import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Vous pouvez ajouter ici la logique pour envoyer les données du formulaire à votre backend
    alert("Message envoyé !");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Nom:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Sujet:
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;