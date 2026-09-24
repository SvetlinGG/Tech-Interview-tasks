function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      console.log(block[lineNo]);
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      console.log(cell.draw(widths[colNum], heights[rowNum]));
    });
    return blocks[0].map(function(_, lineNo) {
      console.log(drawLine(blocks, lineNo))
    }).join("\n");
  }

  console.log(rows.map(drawRow).join("\n"));
}