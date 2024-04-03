export function resizeAction(node) {
    // node has been mounted
    function handleResize() {
        const { width, height } = node.style;

        if (!width || !height) {
            node.textContent = 'Resize Me';
            return;
        }

        node.textContent = `${width} x ${height}`;
    }

    const resizeObs = new ResizeObserver(handleResize);
    resizeObs.observe(node);
    node.textContent = 'Initial value';

    return {
        update: bgColor => {
            /** 
             * Resizing will not trigger this method, 
             *  only parameter changes.
             */
            node.style.backgroundColor = bgColor;
            console.log('Element parameter updated');
        },
        destroy: () => {
            /**
             * Node has been removed from the DOM, 
             *  setting node.textContent will not have any effect.
             */
            resizeObs.disconnect();
            console.log('Element destroyed');
        }
    }
}