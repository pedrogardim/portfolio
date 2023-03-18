import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from './ProjectModal.module.css';

const ProjectModal = ({ data, onClose }) => {
  return (
    <Modal
      size="lg"
      centered
      show={!!data}
      onHide={onClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>{data?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: 0 }}>
        <img
          src={data.picture}
          className={styles.modalImage}
        />
        <p className={styles.modalText}>{data?.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-primary"
          onClick={onClose}
        >
          Close
        </Button>
        <Button
          onClick={() => data?.url && window.open(data.url, '_blank').focus()}
          disabled={!data.url}
        >
          {data?.url ? 'Open' : 'Link Soon'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
