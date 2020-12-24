import "./App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

const GIF_URL =
  "https://media4.giphy.com/media/l4JzhRSnaIsShvsxW/giphy.gif?cid=6638e90dap2xpbs4yvx0jo9bx2bdvloricr1h7qyxzc5tm3r&rid=giphy.gif";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="app">
      <section className="section-event">
        <h1>Event</h1>
        <Button onClick={() => setModalVisible(true)}>Đồng ý</Button>
      </section>
      <Modal
        // size="lg"
        centered
        show={modalVisible}
        onHide={() => setModalVisible(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={GIF_URL} className="modal-gif" />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
