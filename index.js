var $l9KIq$reactjsxruntime = require("react/jsx-runtime");
var $l9KIq$react = require("react");
var $l9KIq$muiiconsmaterialSend = require("@mui/icons-material/Send");
var $l9KIq$muimaterial = require("@mui/material");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}




const $91fc7c7f5ab63f5b$var$InputPlugin = (props)=>{
    const { onSendMessage: onSendMessage, config: config } = props;
    const [value, setValue] = $l9KIq$react.useState('');
    const inputProps = {
        placeholder: config.settings.inputPlaceholder
    };
    return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)("div", {
        style: {
            display: 'flex',
            flexDirection: 'row'
        },
        children: [
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("input", {
                ...inputProps,
                onChange: (e)=>setValue(e.target.value)
            }),
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$muimaterial.IconButton), {
                style: {
                    borderTop: '1px solid black',
                    borderRadius: 0
                },
                onClick: ()=>onSendMessage(value),
                children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, ($parcel$interopDefault($l9KIq$muiiconsmaterialSend))), {})
            })
        ]
    });
};
const $91fc7c7f5ab63f5b$var$inputPlugin = {
    type: 'rule',
    rule: ()=>true,
    component: $91fc7c7f5ab63f5b$var$InputPlugin
};
if (!window.cognigyWebchatInputPlugins) window.cognigyWebchatInputPlugins = [];
window.cognigyWebchatInputPlugins.push($91fc7c7f5ab63f5b$var$inputPlugin);


//# sourceMappingURL=index.js.map
