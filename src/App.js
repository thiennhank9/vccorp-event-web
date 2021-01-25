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
        <h2 className="text-event">Bạn có sẵn sàng đồng hành cùng VCCorp trong năm 2021?</h2>
        <Button className="btn" onClick={() => setModalVisible(true)}>Sẵn sàng</Button>
      </section>
      <Modal
        dialogClassName="model-body"
        className="model-backdrop "
        centered
        show={modalVisible}>
        <Modal.Body>
          <h6 className="text-thanks">Cảm ơn bạn!</h6>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
