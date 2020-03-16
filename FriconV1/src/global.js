const history = [];
const prevPage = "";
const curPage = "";

function updateHistory (prevPage, curPage) {

    for (let i = history.length; i > 0; i--) {
        if (history[i] == prevPage) {
            console.log()
        }
    }
}

export default { prevPage, curPage };