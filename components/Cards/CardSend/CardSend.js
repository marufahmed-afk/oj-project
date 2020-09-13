import './CardSend.module.scss';
import { useEffect, useState, useRef } from 'react';

const CardSend = () => {
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
      <div className='header-links show-tablet'>
        <p>HOME</p>
        <p>ECARDS</p>
        <p>POPULAR ECARDS</p>
        <p>PARTY ANIMALS</p>
        <p>CARD SEND</p>
      </div>
      <div className='card-send container'>
        <div className='card-img'>
          <img src='/assets/images/hero.svg' alt='' />
        </div>
        <div className='card-message'>
          <form className='card-greeting'>
            {editorLoaded ? (
              <CKEditor
                className='ck'
                editor={ClassicEditor}
                data='<h2 >Type your message here</h2>'
                onInit={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
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

            <button className='btn btn-black'>WRITE MESSAGE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CardSend;
