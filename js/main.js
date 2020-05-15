function createNodeStructure(num, n = 1) {
    let children = [];
    if (n > num) {
        return;
    }

    for (let i = 1; i <= n; i++) {
        children.push({ text: { name: n }, children: createNodeStructure(num, n + 1) })
    }
    return children;
}

createTree();

function createTree() {
    const num = Number(document.getElementById('fact').value) || 4;
    const nodes = createNodeStructure(num).pop();

    var simple_chart_config = {
        chart: {
            container: "#my-factorial-tree",
        },
        nodeStructure: nodes
    };
    
    new Treant(simple_chart_config);
}

