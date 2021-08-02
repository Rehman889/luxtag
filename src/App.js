import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: 'Hello from CKEditor 5!'
      };
    }

    render() {
       const mobileDevice = {
      position: 'relative',
      width: '360px',
      height: '400px',
      margin: 'auto',
      border: '16px rgb(7, 80, 35) solid',
      borderTopWidth: '60px',
      borderBottomWidth: '60px',
      borderRadius: '36px'
   };
    

   const screen = {
      width: '360px',
      height: '400px',
      background: 'white'
   };
  const msg = () => ({__html: this.state.username});

       

        return (
            <div>
              <div className="App">
                  <h2 style={{flexDirection:'row', flex: '1', flexWrap: 'wrap'}}>Using CKEditor 5 build in React</h2>
                  <CKEditor
                      editor={ ClassicEditor }
                      data="Hello from CKEditor 5!"
                      onReady={ editor => {
                          // You can store the "editor" and use when it is needed.
                          console.log( 'Editor is ready to use!', editor );
                      } }
                      onChange={ ( event, editor ) => {
                          const data = editor.getData();
                          this.setState({
                            username: data
                          });
                          console.log( { event, editor, data } );
                      } }
                      onBlur={ ( event, editor ) => {
                          console.log( 'Blur.', editor );
                      } }
                      onFocus={ ( event, editor ) => {
                          console.log( 'Focus.', editor );
                      } }
                  />
                  
              </div>


              <div style={mobileDevice}>
                  <div class="screen">
                    <div dangerouslySetInnerHTML={msg()} />
                  </div>
              </div> 
            </div> 
        );

    }
}

export default App;


