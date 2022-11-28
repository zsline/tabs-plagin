new DerTabs('tab', {
    isChanget: (tabs) => {
        // console.log(tabs);
    }
});

new Modal({
    isOpen: (modal) => {
        console.log(modal);
        console.log('opened');
    },
    isClose: (modal) => {
        console.log('closed');
    },
});
