import React from "react";

interface IProps {
    path: string;
    currentPath: string;
}

class Page extends React.Component<IProps, any> {
    render() {
        return this.props.path == this.props.currentPath
            ? this.props.children
            : null;
    }
}

export default Page;
