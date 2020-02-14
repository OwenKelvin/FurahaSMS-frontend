import { Action, createReducer, on } from '@ngrx/store';


export const tinyMCEConfigFeatureKey = 'tinyMCEConfig';

export interface State {
  branding: boolean;
  height: number;
  base_url: string;
  paste_data_images: boolean;
  menubar: boolean;
  plugins: string[];
  toolbar: string,
  
}

export const initialState: State = {
 
  branding: false,
  height: 150,
  base_url: '/tinymce',
  paste_data_images: true,
  menubar: false,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace fullscreen',
    'insertdatetime media table paste code help wordcount'
  ],
  toolbar:
    'undo redo | formatselect | bold italic backcolor | image | \
                       alignleft aligncenter alignright alignjustify | \
                       bullist numlist outdent indent | removeformat | help'
};

const tinyMCEConfigReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return tinyMCEConfigReducer(state, action);
}
