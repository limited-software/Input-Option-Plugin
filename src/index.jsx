import * as React from "react";
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

const InputPlugin = (props) => {

    const { onSendMessage, config } = props;
    const [value, setValue] = React.useState('');

    const inputProps = {
        placeholder: config.settings.inputPlaceholder,
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <input {...inputProps} onChange={(e) => setValue(e.target.value)}/>
            <IconButton
                style={{
                    borderTop: '1px solid black',
                    borderRadius: 0
                }}
                onClick={() => onSendMessage(value)}
            >
                <SendIcon />
            </IconButton>
        </div>
    );
}

const inputPlugin = {
    type: 'rule',
    rule: () => true,
    component: InputPlugin
}

if (!window.cognigyWebchatInputPlugins) {
    window.cognigyWebchatInputPlugins = []
}

window.cognigyWebchatInputPlugins.push(inputPlugin);