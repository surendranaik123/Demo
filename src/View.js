import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function View() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    address: ''
  });
  const [entries, setEntries] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedEntries = entries.map((entry, index) =>
        index === currentIndex ? formData : entry
      );
      setEntries(updatedEntries);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setEntries([...entries, formData]);
    }
    setFormData({
      name: '',
      email: '',
      password: '',
      contact: '',
      address: ''
    });
  };

  const handleEdit = (index) => {
    setFormData(entries[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDelete = (index) => {
    const filteredEntries = entries.filter((_, i) => i !== index);
    setEntries(filteredEntries);
  };

  return (
    <div>
      <form style={{ width: "730px", marginLeft: "340px" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact</label>
          <input type="text" className="form-control" id="contact" value={formData.contact} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">{isEditing ? 'Update' : 'Submit'}</button>
      </form>

      <table className="table table-bordered mt-5 ml-2 mr-2 App">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Contact</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {entries.map((entry, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.password}</td>
              <td>{entry.contact}</td>
              <td>{entry.address}</td>
              <td>
                <button type="button" className="btn btn-danger" style={{ marginRight: "20px" }} onClick={() => handleDelete(index)}>Delete</button>
                <button type="button" className="btn btn-primary" onClick={() => handleEdit(index)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default View;
