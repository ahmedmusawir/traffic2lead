import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '50%',
    background: 'black',
  },
};

const ShowImage = ({
  similarWebModalIsOpen,
  serviceIdModalIsOpen,
  setSimilarWebModalIsOpen,
  setServiceIdModalIsOpen,
}) => {
  const pluginImgUrl =
    leeAdminData.plugin_url +
    '/lee-goff-similarweb-react-plugin/admin/assets/imgs';

  function closeSimilarWebModal() {
    setSimilarWebModalIsOpen(false);
  }
  function closeServiceIdModal() {
    setServiceIdModalIsOpen(false);
  }

  // const theImage = pluginImgUrl + apiImg;
  // console.log('Image URL:', theImage);

  return (
    <>
      <Modal
        isOpen={similarWebModalIsOpen}
        onRequestClose={closeSimilarWebModal}
        style={customStyles}
        contentLabel="EmailJS"
      >
        <button
          className="btn btn-sm btn-danger float-right mb-3"
          onClick={closeSimilarWebModal}
        >
          close
        </button>
        <img src={pluginImgUrl + '/rapidapi.png'} alt="" />
      </Modal>
      <Modal
        isOpen={serviceIdModalIsOpen}
        onRequestClose={closeServiceIdModal}
        style={customStyles}
        contentLabel="EmailJS"
      >
        <button
          className="btn btn-sm btn-danger float-right mb-3"
          onClick={closeServiceIdModal}
        >
          close
        </button>
        <img src={pluginImgUrl + '/rapidapi.png'} alt="" />
        <h1>Service ID</h1>
      </Modal>
    </>
  );
};

export default ShowImage;
