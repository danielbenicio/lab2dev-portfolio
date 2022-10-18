import React, { useEffect } from 'react'
import Modal from 'react-modal'
import { X } from 'phosphor-react'

interface ImageModalProps {
  isModalOpen: boolean
  onCloseModal: () => void
  projectImage: string
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isModalOpen,
  onCloseModal,
  projectImage,
}) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'visible'
    }

    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [isModalOpen])

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={{
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',

          width: '65%',
          height: '68%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <button
        className="relative left-2/4 bottom-5 transition-color duration-200 hover:text-red-450 2xl:bottom-8"
        onClick={onCloseModal}
      >
        <X size={24} />
      </button>

      <img
        src={projectImage}
        alt="imagem do projeto"
        className="w-11/12 rounded border"
      />
    </Modal>
  )
}
