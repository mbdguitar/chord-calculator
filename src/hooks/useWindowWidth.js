Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useWindowWidth() {
    var _a = (0, react_1.useState)({
        width: window.innerWidth,
    }), width = _a[0], setWidth = _a[1];
    (0, react_1.useEffect)(function () {
        function handleResize() {
            setWidth({
                width: window.innerWidth
            });
        }
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    return width;
}
exports.default = useWindowWidth;
