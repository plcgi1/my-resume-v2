export const refresh = (self, nextProps, list) => {
    const currentId = self.props.lang;
    const nextId = nextProps.lang;
    
    if (currentId !== nextId) {
        self.setState({ lang: nextId });
        
        list(nextId);
    }
}