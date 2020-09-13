import './CardRecipient.module.scss';
import { useEffect, useState, useRef } from 'react';

const CardRecipient = () => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-inline'),
    };
    setEditorLoaded(true);
  }, []);
  return (
    <>
      <div className='card-receive container'>
        <div className='card-img'>
          <img src='/assets/images/hero.svg' alt='' />
        </div>
        <div className='message container'>
          <h2>Dear Jenny</h2>
          <p>
            Wishing you and amazing Birthday and lots of love and happiness.
          </p>
          <p>Mom</p>
        </div>
      </div>
      <div className='reply'>
        <h4>To: Recipient Name From: Sender Name</h4>
        <form>
          {editorLoaded ? (
            <CKEditor
              editor={ClassicEditor}
              data={`<p class='message'>Type your message here</p>`}
              onInit={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
                editor.document
                  .getBody()
                  .setStyles({ 'color': 'black', 'font-size': '72px' });
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          ) : (
            <h3>Editor Loading</h3>
          )}
          <button className='btn btn-black'>SEND REPLY</button>
        </form>
      </div>
    </>
  );
};

export default CardRecipient;
