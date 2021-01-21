import "./App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

const GIF_URL = "https://media.giphy.com/media/10kA08wzloZws/giphy.gif";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="app">
      <section className="section-event">
        <Button onClick={() => setModalVisible(true)}>Đồng ý</Button>
      </section>
      <Modal
        centered
        show={modalVisible}
        onHide={() => setModalVisible(false)}>
        <Modal.Header>
          <Modal.Title className="app-modal-title">Chúc mừng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={GIF_URL} className="modal-gif" />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
