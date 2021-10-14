// Worked with Nia Anderson & Tyrone Smith 
// <Javid Mitchell>
// SID: @02923310
const boggle_solver = require('./boggle_solver');

// Tests to validate submissions:
test('Find Valid Words - Test for basic 2x2 Input', () => {
  const grid = [['A', 'B'], 
                ['C', 'D']];
  const dictionary = ['A', 'B', 'AC', 'ACA', 'ACB', 'DE'];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual(['acb'])
});

test('Find Valid Words - Test for basic 4x4 Input', () => {
  const grid = [["O","A","A","N"],
                ["E","T","A","E"],
                ["I","H","K","R"],
                ["I","F","L","V"]];
  const dictionary = ["OATH","PEA","EAT","RAIN"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual(["eat","oath"])
});

test('Find Valid Words - Word that takes the entire grid', () => {
  const grid = [["P","U","Z","Z"],
                ["G","N","I","L"]];
  const dictionary = ["PUZZLING"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual(["puzzling"])
});

test('Find Valid Words - Walk in All Directions', () => {
  const grid = [["A","B","C"],
                ["D","E","F"],
                ["G","H","I"]];
  const dictionary = ["EAB", "EBC", "ECB", "EDA", "EFC", "EGH", "EHI", "EIH"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual(["eab", "ebc", "ecb", "eda", "efc", "egh", "ehi", "eih"])
});

test('Find Valid Words - Non-adjacent letters/ Illegal Jumps', () => {
  const grid = [["A","B","C"],
                ["D","E","F"],
                ["G","H","I"]];
  const dictionary = ["AIH", "CDG", "FAB"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual([])
});

test('Find Valid Words - Recurse on Diagonals/Windy Paths', () => {
  const grid = [["C","B","U","B","B","F","N","Y"],
                ["D","L","F","B","S","I","H","G"]];
  const dictionary = ["CLUBBING"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual(["clubbing"])
});



//Tests for edge cases:
test('Edge Case - Test Empty Inputs', () => {
  const grid = [];
  const dictionary = [];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual([])
});

test('Edge Case - Short Words (< 3 letters long)', () => {
  const grid = [["A","B"],
                ["C","D"]];
  const dictionary = ["AB", "AD"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual([])
});

test('Edge Case - Duplicate Letters', () => {
  const grid = [["A","D"],
                ["C","Y"]];
  const dictionary = ["ADDY"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual([])
});


//Tests for Qu/St Handling checks:
test('Handle Qu/St - Qu Basic Functionality', () => {
  const grid = [['T', 'E', 'Y', 'R'],
                ['E', 'N', 'Qu', 'T'],
                ['G', 'Z', 'A', 'R']];
  const dictionary = ["AQU", "QUART"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual(['aqu','quart'])
});


test('Handle Qu/St - St Basic Functionality', () => {
  const grid = [['T', 'St', 'Y', 'R'],
                ['E', 'N', 'A', 'T'],
                ['G', 'Z', 'A', 'R']];
  const dictionary = ["START", "STAY"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual(['start', 'stay'])
});

test('Handle Qu/St - Trailing Q', () => {
  const grid = [['T', 'E', 'R', 'R'],
                ['E', 'A', 'Qu', 'T'],
                ['G', 'Z', 'A', 'R']];
  const dictionary = ["TARQ"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual([])
});

test('Handle Qu/St - Trailing S', () => {
  const grid = [['P', 'E', 'R', 'R'],
                ['E', 'N', 'Qu', 'St'],
                ['G', 'N', 'I', 'E']];
  const dictionary = ["PENNIES"];
  expect(boggle_solver.findAllSolutions(grid, dictionary)).toStrictEqual([])
});
