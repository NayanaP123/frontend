import React, { useEffect, useState } from "react";
import { addSubjectAPI, deleteSubjectAPI, getSubjectsAPI, updateSubjectAPI } from "../../../Services/allApi";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Subjects() {
    const [subjects, setSubjects] = useState([]);
    const [subjectData, setSubjectData] = useState({ name: "", code: "" });
    const [editData, setEditData] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetchSubjects();
    }, []);

    const fetchSubjects = async () => {
        const res = await getSubjectsAPI();
        setSubjects(res.data);
    };

    const handleAddSubject = async () => {
        await addSubjectAPI(subjectData);
        setSubjectData({ name: "", code: "" });
        fetchSubjects();
    };

    const handleEdit = (subject) => {
        setEditData(subject);
        setShow(true); // Show modal when edit icon is clicked
    };

    const handleUpdateSubject = async () => {
        if (editData) {
            await updateSubjectAPI(editData._id, editData);
            setEditData(null);
            fetchSubjects();
            setShow(false);
        }
    };

    const handleDeleteSubject = async (id) => {
        await deleteSubjectAPI(id);
        fetchSubjects();
    };

    return (
        <>
            <section>
                <div className="container" style={{ backgroundColor: 'white', borderRadius: '20px' }}>
                    <h3 style={{ textAlign: 'center' }}>ADD NEW Subject</h3>
                    <br />
                    <div className="d-flex justify-content-center">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Subject Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={subjectData.name}
                                    onChange={(e) => setSubjectData({ ...subjectData, name: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Subject Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={subjectData.code}
                                    onChange={(e) => setSubjectData({ ...subjectData, code: e.target.value })}
                                />
                            </div>
                            <button className="btn btn-primary" type="button" onClick={handleAddSubject}>ADD</button>
                        </form>
                    </div>
                </div>
            </section>

            <section style={{ marginTop: '20px' }}>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Subject Name</th>
                                <th>Code</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subjects.map((subject, index) => (
                                <tr key={subject._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{subject.name}</td>
                                    <td>{subject.code}</td>
                                    <td>
                                        <i
                                            className="fa-solid fa-pen-to-square"
                                            style={{ color: 'green', cursor: "pointer" }}
                                            onClick={() => handleEdit(subject)}
                                        ></i>
                                    </td>
                                    <td>
                                        <i
                                            className="fa-solid fa-trash"
                                            style={{ color: 'red', cursor: "pointer" }}
                                            onClick={() => handleDeleteSubject(subject._id)}
                                        ></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Edit Modal */}
            <Modal show={show} onHide={() => setShow(false)} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Subject</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        className="form-control mb-3"
                        value={editData?.name || ""}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    />
                    <input
                        type="text"
                        className="form-control"
                        value={editData?.code || ""}
                        onChange={(e) => setEditData({ ...editData, code: e.target.value })}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                    <Button variant="primary" onClick={handleUpdateSubject}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Subjects;
