
function Medal(props) {
    const medal = [0,'🥇','🥈','🥉'];
    return <span>{medal[props.ranking]}</span>
};

export default Medal;