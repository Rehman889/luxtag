import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import EasyImageUpload from '@ckeditor/ckeditor5-easy-image/src/easyimage';

import RealTimeCollaborativeEditing from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativeediting';
import RealTimeCollaborativeComments from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativecomments';
import PresenceList from '@ckeditor/ckeditor5-real-time-collaboration/src/presencelist';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [ Essentials, Paragraph, Bold, Italic, ImageToolbar, EasyImageUpload, RealTimeCollaborativeEditing, RealTimeCollaborativeComments, PresenceList ];

// Editor configuration.
ClassicEditor.defaultConfig = {
    language: 'en'
};