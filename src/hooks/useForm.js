import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

export default function useForm() {
  const formRef = useRef();
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(history.push('/thankyou'))
      .catch(error => console.log(error));
  };

  return [formRef, handleSubmit];
}
