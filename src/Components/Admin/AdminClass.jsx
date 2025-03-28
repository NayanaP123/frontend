import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addClassAPI, deleteClassAPI, getClassAPI, updateClassAPI } from '../../../Services/allApi';

function AdminClass() {
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const [classes, setClasses] = useState([]);
  const [classText, setClassText] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [editId, setEditId] = useState(null);

  const fetchClasses = async () => {
    const response = await getClassAPI();
    setClasses(response.data);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleAddOrUpdateClass = async () => {
    if (editId) {
      await updateClassAPI(editId, { classText, classNumber });
    } else {
      await addClassAPI({ classText, classNumber });
    }
    fetchClasses();
    handleClose();
  };

  const handleDelete = async (id) => {
    await deleteClassAPI(id);
    fetchClasses();
  };

  const handleEdit = (cls) => {
    setClassText(cls.classText);
    setClassNumber(cls.classNumber);
    setEditId(cls._id);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setClassText('');
    setClassNumber('');
    setEditId(null);
  };

  return (
    <>
      <section>
        <div className="container" style={{ backgroundColor: 'white', borderRadius: '20px' }}>
          <h3 style={{ textAlign: 'center' }}>ADD NEW CLASS</h3>
          <div className="d-flex justify-content-center">
            <form>
              <div className="mb-3">
                <label className="form-label">Class Name</label>
                <input type="text" className="form-control" value={classText} onChange={(e) => setClassText(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Class Number</label>
                <input type="text" className="form-control" value={classNumber} onChange={(e) => setClassNumber(e.target.value)} />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleAddOrUpdateClass}>
                {editId ? 'Update' : 'Add'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '20px' }}>
        <div className="container">
          <div className="row">
            {classes.map((cls, index) => (
              <div key={index} className="col-md-4">
                <div className="card" style={{ width: '18rem' }}>
                  <div className="card-body">
                    <h3 className="card-title">Class: {cls.classText} ({cls.classNumber})</h3>
                    <div className="row">
                      <div className="col-md-4">
                        <button className="btn btn-success" onClick={() => handleEdit(cls)}>
                          <i className="fa-solid fa-pen-to-square" style={{ color: 'white' }}></i>
                        </button>
                      </div>
                      <div className="col-md-4">
                        <button className="btn btn-danger" onClick={() => handleDelete(cls._id)}>
                          <i className="fa-solid fa-trash" style={{ color: 'white' }}></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? 'Edit Class' : 'Add Class'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Class Name</label>
          <input type="text" className="form-control" value={classText} onChange={(e) => setClassText(e.target.value)} />
          <label>Class Number</label>
          <input type="text" className="form-control" value={classNumber} onChange={(e) => setClassNumber(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleAddOrUpdateClass}>{editId ? 'Update' : 'Add'}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdminClass;
