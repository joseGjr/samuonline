import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineRecordVoiceOver, MdOutlineVoiceOverOff } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import './style.css';

const SpeechRecognitionComponent = ({ onRecognizedTextChange }) => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    const initRecognition = () => {
      if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;

        recognitionRef.current.onstart = () => {
          setIsListening(true);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current.onresult = (event) => {
          const transcript = Array.from(event.results)
            .map((result) => result[0].transcript)
            .join('');

          setRecognizedText(transcript);
          onRecognizedTextChange(transcript);
        };
      } else {
        alert('Desculpe, o reconhecimento de voz não é suportado neste navegador.');
      }
    };

    const checkPermission = async () => {
      try {
        const result = await navigator.permissions.query({ name: 'microphone' });
        return result.state === 'granted';
      } catch (error) {
        console.error('Erro ao verificar permissões:', error);
        return false;
      }
    };

    const initializeRecognition = async () => {
      const hasPermission = await checkPermission();
      if (!hasPermission) {
        alert('Por favor, conceda permissão para acessar o microfone.');
        return;
      }

      initRecognition();
    };

    initializeRecognition();

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.onstart = null;
        recognitionRef.current.onend = null;
        recognitionRef.current.onresult = null;
      }
    };
  }, [onRecognizedTextChange]);

  const startRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  const stopRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const resetRecognition = () => {
    setRecognizedText('');
  };

  return (
    <div className='voice'>
      
      <button onClick={startRecognition} disabled={isListening}>
        <MdOutlineRecordVoiceOver />
      </button>
      <button onClick={stopRecognition} disabled={!isListening}>
        <MdOutlineVoiceOverOff />
      </button>
      <button onClick={resetRecognition} disabled={!recognizedText}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export default SpeechRecognitionComponent;
