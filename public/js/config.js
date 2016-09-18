/* Configurations for the quiz workshop selector. */

// Questions.
let globalQuestions = [{
	'id': '1',
	'question': 'Hvor gammel er du?',
	'error': 'Du skal vælge en alder',
	'options': [
		{'name':'0-19 år', 'value':'a'},
	 	{'name':'20-29 år', 'value':'b'},
	 	{'name':'30+ år', 'value':'c'}
	]
}, {
	'id': '2',
	'question': 'Hvor længe har du været frivillig i AFS?',
	'error': 'Du skal vælge en mulighed',
	'options': [
	 	{'name':'0-1 år', 'value':'d'},
	 	{'name':'2-4 år', 'value':'e'},
	 	{'name':'5+ år', 'value':'f'}
	]
}, {
	'id': '3',
	'question': 'Hvor er du mest aktiv?',
	'error': 'Du skal vælge hvor du er mest aktiv',
	'options': [
	 	{'name':'Lokalforeningsarbejde', 'value':'g'},
	 	{'name':'Nationale lejre/udvalg', 'value':'h'}
	]
}, {
	'id': '4',
	'question': 'På UB vil jeg helst lære noget om…',
	'error': 'Du skal vælge hvad du vil lærer noget om',
	'options': [
	 	{'name':'Forskellige kulturer', 'value':'i'},
	 	{'name':'Mig selv (personlig udvikling)', 'value':'j'},
	 	{'name':'Redskaber til mit AFS arbejde', 'value':'k'}
	]
}];

// Suggestions.
let globalSuggestions = [{ 	
	 //1
	'1':['Fastholde frivillige i LF','Branding'],
	'2':['Branding','Unge nydanskere i AFS'],
	'3':['Lokalforeningsdag'],
}, { // 2
	'1':['IKL'],
	'2':['Icebreakers']
}, { //3
	'1':['Excel 1'],
	'2':['Samarbejde'],
	'3':['Lokalforeningsdag']
}, { //4
	'1':['IKL'],
	'2':['Lokalforeningsdag']
}, { //5
	'1':['IKL'],
	'2':['Fordomme & Stereotyper']
}, { //6
	'1':['Nytænkning & Idegererering','Excel 1'],
	'2':['Unge nydanskere i AFS','Les Lancier'],
	'3':['Ung i Lokalforeningen']
}, { //7
	'1':['Fotografering','Motivation'],
	'2':['Præsentationsteknikker','Samarbejde'],
	'3':['Ung i Lokalforeningen']
}, { //8
	'1':['Branding','Excel 1'],
	'2':['Excel 2','Debriefing'],
	'3':['Fordomme & Stereotyper','Icebreakers']
}, { //9
	'1':['Fotografering','Excel 1'],
	'2':['Præsentationsteknikker','Samarbejde'],
	'3':['Icebreakers','Say YES to AFS']
}, { //10
	'1':['Motivation','Fotografering','Excel 1'],
	'2':['Debriefing','Excel 2','Præsentationsteknikker'],
	'3':['Massage','Icebreakers','Fordomme & Stereotyper']
}, { //11
	'1':['Put AFS på dit CV','Projektledelse'],
	'2':['Branding','Debriefing'],
	'3':['Say YES to AFS','Massage']
}, { //12
	'1':['Motivation','Put AFS på dit CV'],
	'2':['Samarbejde','Husketeknikker'],
	'3':['Boost-shop','Say YES to AFS']
}, { //13
	'1':['Nytænkning & Idegenerering'],
	'2':['Debriefing'],
	'3':['Icebreakers']
}, { //14
	'1':['Motivation','Nytænkning & Idegenerering'],
	'2':['Samarbejde','Husketeknikker'],
	'3':['Say YES to AFS']
}, { //15
	'1':['Nytænkning & Idegenerering','Projektledelse'],
	'2':['Debriefing','Samarbejde'],
	'3':['Say YES to AFS']
}];

// Combinations.
let globalCombinations = {
	0:  { suggestion:  3 , criteria: [['c', ['d','e','f'], 'g', 'i']] },
	1:  { suggestion:  2 , criteria: [['c', ['d','e','f'], 'g', 'j']]}, 
	2:  { suggestion:  0 , criteria: [['c', ['d','e','f'], 'g', 'k']]},
	3:  { suggestion:  4 , criteria: [[['b','c'], 'f', 'h', 'i']]},
	4:  { suggestion:  13, criteria: [[['b','c'], 'f', 'h', 'j']]}, 
	5:  { suggestion:  14, criteria: [[['b','c'], 'f', 'h', 'k']]},
	6:  { suggestion:  4 , criteria: [['b', 'e', 'h', 'i']]},
	7:  { suggestion:  10, criteria: [['b', 'e', 'h', 'j']]}, 
	8:  { suggestion:  9 , criteria: [['b', 'e', 'h', 'k']]},
	9:  { suggestion:  4 , criteria: [['a', ['e','f'], 'h', 'i']]},
	10: { suggestion:  11, criteria: [['a', ['e','f'], 'h', 'j']]}, 
	11: { suggestion:  12, criteria: [['a', ['e','f'], 'h', 'k']]},
	12: { suggestion:  1 , criteria: [[['a','b'], 'd', 'g', 'i']]},
	13: { suggestion:  6 , criteria: [[['a','b'], 'd', 'g', 'j']]},
	14: { suggestion:  5 , criteria: [[['a','b'], 'd', 'g', 'k']]},
	15: { suggestion:  4 , criteria: [[['a','b'], 'd', 'h', 'i']]},
	16: { suggestion:  8 , criteria: [[['a','b'], 'd', 'h', 'j']]},
	17: { suggestion:  7 , criteria: [[['a','b'], 'd', 'h', 'k']]},
	18: { suggestion:  4 , criteria: [['c', ['d','e'], 'h', 'i']]},
	19: { suggestion:  13, criteria: [['c', ['d','e'], 'h', 'j']]}, 
	20: { suggestion:  14, criteria: [['c', ['d','e'], 'h', 'k']]},
	21: { suggestion:  3 , criteria: [[['a', 'b'], ['e','f'], 'g', 'i']]},
	22: { suggestion:  2 , criteria: [[['a', 'b'], ['e','f'], 'g', 'j']]},
	23: { suggestion:  0 , criteria: [[['a', 'b'], ['e','f'], 'g', 'k']]}
};