import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cropper from './Cropper';

const App = () => {
    const [files, setFiles] = useState([]);
    const onSelectFiles = ({ target: { files: newFiles } }) => {
        const reader = new FileReader();
        const fileURLs = Array.prototype.slice.call(newFiles).map(newFile => ({
            name: newFile.name,
            url: URL.createObjectURL(newFile),
        }));
        setFiles(fileURLs);
        console.log(fileURLs);
    };
    return <div>
        <input type="file" multiple onChange={onSelectFiles} />
        {files.map(file => (
            <Cropper src={file.url} key={file.name} name={file.name} />
        ))}
    </div>
};

App.propTypes = {
    className: PropTypes.string,
};

App.defaultProps = {
    className: '',
};

export default <App />;
